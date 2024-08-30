// eslint-disable-next-line no-restricted-imports
import { useSelector as useReduxSelector, useStore } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';

import { AppThunk, RootState, UseAppThunkConfig, UseAppThunkOutput } from './types';
import { Nullable } from '../globalTypes';
import { compareDeepEquality } from './utils';
import { useLoadingStatus } from '../hooks/useLoadingStatus';
import { STATUS } from '../globalConstants';
import { notificationSlice } from './reducers/notification/reducer';


export const useSelector = <T>(
  selector: (state: RootState) => T, equalityFn?: (left: T, right: T) => boolean,
): T => {
  return useReduxSelector(selector, equalityFn);
};

export const useAppThunk = <P extends object, R = void>(
  thunk: AppThunk<P, R>,
  params: P,
  config: UseAppThunkConfig<R> = {},
): UseAppThunkOutput<P> => {
  const {
    isEnabled = true,
    isInitialPending = false,
    isManualOnly = false,
    onAfterError,
    onAfterSuccess,
    onFinally,
  } = config;
  const store = useStore<RootState>();

  const [loadingState, setLoadingState] = useLoadingStatus(isInitialPending ? STATUS.PENDING : STATUS.INITIAL);
  const [error, setError] = useState<Nullable<Error>>(null);
  const [isInitialLoadingFinish, setIsInitialLoadingFinish] = useState(false);

  const paramsRef = useRef(params);

  if (!compareDeepEquality(paramsRef.current, params)) {
    paramsRef.current = params;
  }

  const runThunk = useCallback(
    async (p?: P) => {
      if (!isEnabled) {
        return;
      }

      setError(null);
      setLoadingState(STATUS.PENDING);
      try {
        const result = await thunk(p || paramsRef.current)({
          ...store,
          select: (selector) => selector(store.getState()),
        });
        await onAfterSuccess?.(result);
        setError(null);
        setLoadingState(STATUS.SUCCESS);
      } catch (err) {
        const e = err as Error;
        setError(e);
        setLoadingState(STATUS.FAILURE);
        store.dispatch(notificationSlice.actions.addNotification({
          message: e.message,
          variant: 'error',
          key: e.message + +new Date(),
        }));
        onAfterError?.(e);
      } finally {
        onFinally?.();
        if (!isInitialLoadingFinish) {
          setIsInitialLoadingFinish(true);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isEnabled, store, thunk, ...Object.values(params)],
  );

  useEffect(
    () => {
      !isManualOnly && runThunk();
    },
    [isManualOnly, runThunk],
  );

  return {
    ...loadingState,
    error,
    manualRun: runThunk,
    isInitialLoadingFinish,
  };
};
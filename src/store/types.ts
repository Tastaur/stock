import { Dispatch, Store } from '@reduxjs/toolkit';

import { createStore, store } from './index';
import { Nullable } from '../globalTypes';


export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof createStore>;


export interface UseAppThunkOutput<P> {
  isInitial: boolean,
  isLoading: boolean,
  isSuccess: boolean,
  isFailure: boolean,
  isInitialLoadingFinish: boolean,
  isDone: boolean,
  error: Nullable<Error>,
  manualRun: (params?: P) => Promise<void>,
}

export interface UseAppThunkConfig<R> {
  isEnabled?: boolean,
  isInitialPending?: boolean
  isManualOnly?: boolean
  onAfterError?: (error: Error) => void
  onAfterSuccess?: (result: R) => (void | Promise<void>)
  onFinally?: () => void,
}

export interface AppThunkStore extends Store<RootState> {
  dispatch: Dispatch
  select: <T>(selector: (state: RootState) => T) => T
}

export type AppThunk<P extends object = {}, R = void> = (payload: P) => (store: AppThunkStore) => Promise<R>;
import { afterAll, describe, expect, vitest } from 'vitest';
import { act, renderHook, waitFor } from '@testing-library/react';

import { AppThunkStore, UseAppThunkConfig } from '../types';
import { createPreparedAppThunkStore, getWrapper } from '../../common/testUtils';
import { useAppThunk, useSelector } from '../hooks';
import { WithId } from '../../globalTypes';


vi.mock('react-redux', async (importOriginal) => {
  const mod = await importOriginal() as object;
  return {
    ...mod,
    useSelector: vi.fn().mockImplementation((fn) => {
      return fn;
    }),
  };
});

describe('store hooks tests', () => {
  let store: AppThunkStore;
  const mockFn = vi.fn();
  const mockThunk = vi.fn(() => mockFn);
  beforeAll(() => {
    store = createPreparedAppThunkStore();

  });

  afterAll(() => {
    vitest.clearAllMocks();
  });

  describe('useSelector', () => {
    it('should return data', () => {
      const wrapper = getWrapper(store);

      const selector = vi.fn();
      const { result } = renderHook(() => useSelector(selector), { wrapper });
      expect(result.current).toEqual(selector);
    });
  });
  describe('useAppThunk', () => {
    it('should return initial data', () => {
      const wrapper = getWrapper(store);
      const { result } = renderHook(() => useAppThunk(mockThunk, {}, {}), { wrapper });
      expect(result.current.error).toEqual(null);
      expect(result.current.isDone).toEqual(false);
      expect(result.current.isFailure).toEqual(false);
      expect(result.current.isInitial).toEqual(false);
      expect(result.current.isInitialLoadingFinish).toEqual(false);
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.isSuccess).toEqual(false);
      expect(result.current.manualRun).toBeTypeOf('function');
      expect(mockThunk).toBeCalledWith({});
    });
    it('should be started only manually', () => {
      const wrapper = getWrapper(store);
      const { result } = renderHook(() => useAppThunk(mockThunk, {}, { isManualOnly: true }), { wrapper });
      expect(result.current.isInitial).toEqual(true);
      expect(result.current.isLoading).toEqual(false);
      expect(mockThunk).not.toBeCalledWith({});
      act(
        () => {
          result.current.manualRun();
        },
      );
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.isInitial).toEqual(false);
      expect(mockThunk).toBeCalledWith({});
      act(() => {
        result.current.manualRun({ test: 'test' });
      });
      expect(mockThunk).toBeCalledWith({ test: 'test' });

    });
    it('should be called if args or config change', () => {
      const wrapper = getWrapper(store);
      const initialArgs = {
        id: 1,
      };
      const { rerender } = renderHook(({
        args,
        config,
      }: {
        args: WithId,
        config: UseAppThunkConfig<void>
      }) => useAppThunk(mockThunk, args, config),
      {
        wrapper,
        initialProps: {
          args: initialArgs,
          config: {},
        },
      });
      expect(mockThunk).toBeCalledWith(initialArgs);
      rerender({ args: { id: 2 }, config: { onAfterSuccess: vi.fn() } });
      expect(mockThunk).toBeCalledWith({ id: 2 });
    });
    it('should be disabled', () => {
      const wrapper = getWrapper(store);

      const { result, rerender } = renderHook((test: string) => useAppThunk(mockThunk, { test }, { isEnabled: false }),
        {
          wrapper,
        });
      expect(mockThunk).not.toBeCalled();
      rerender('test');
      expect(mockThunk).not.toBeCalled();
      act(() => {
        result.current.manualRun({ test: 'test' });
        expect(mockThunk).not.toBeCalled();
      });
    });

    it('should initial status be pending', () => {
      const wrapper = getWrapper(store);

      const { result } = renderHook(() => useAppThunk(mockThunk, {}, { isManualOnly: true, isInitialPending: true }),
        {
          wrapper,
        });

      expect(result.current.isLoading).toBeTruthy();
    });
    it('should handle error', async () => {
      const wrapper = getWrapper(store);
      const onAfterError = vi.fn();
      const finallyFn = vi.fn();
      mockFn.mockImplementationOnce(() => {
        throw new Error();
      });

      const { result } = renderHook(() => useAppThunk(mockThunk, {}, { onAfterError, onFinally: finallyFn }),
        {
          wrapper,
        });

      expect(result.current.isFailure).toBeTruthy();
      expect(onAfterError).toBeCalled();
      expect(finallyFn).toBeCalled();
      expect(result.current.error).toEqual(new Error());
    });
    it('should be succeed', async () => {
      const wrapper = getWrapper(store);
      const onAfterSuccess = vi.fn();
      const finallyFn = vi.fn();
      mockFn.mockImplementationOnce(() => {
        return 'test';
      });

      const { result } = renderHook(() => useAppThunk(mockThunk, {}, { onAfterSuccess, onFinally: finallyFn }),
        {
          wrapper,
        });

      await waitFor(() => {
        expect(result.current.isDone).toBeTruthy();
        expect(finallyFn).toBeCalled();
        expect(onAfterSuccess).toBeCalledWith('test');
        expect(result.current.isSuccess).toBeTruthy();
        expect(result.current.isInitialLoadingFinish).toBeTruthy();
      });
    });
  });
});
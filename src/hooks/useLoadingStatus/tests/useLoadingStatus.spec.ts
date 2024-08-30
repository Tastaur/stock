import { act, renderHook } from '@testing-library/react';
import { expect } from 'vitest';

import { useLoadingStatus } from '../index';
import { STATUS } from '../../../globalConstants';


describe('useLoadingStatus', () => {
  it('should change status according base scenario', async () => {
    const { result } = renderHook(() => useLoadingStatus());

    expect(result.current[0]).toEqual({
      isDone: false,
      isFailure: false,
      isInitial: true,
      isLoading: false,
      isSuccess: false,
    });

    act(() => {
      result.current[1](STATUS.PENDING);
    });

    expect(result.current[0]).toEqual({
      isDone: false,
      isFailure: false,
      isInitial: false,
      isLoading: true,
      isSuccess: false,
    });

    act(() => {
      result.current[1](STATUS.FAILURE);
    });

    expect(result.current[0]).toEqual({
      isDone: true,
      isFailure: true,
      isInitial: false,
      isLoading: false,
      isSuccess: false,
    });

    act(() => {
      result.current[1](STATUS.SUCCESS);
    });

    expect(result.current[0]).toEqual({
      isDone: true,
      isFailure: false,
      isInitial: false,
      isLoading: false,
      isSuccess: true,
    });
  });
  it('should render with initial value', async () => {
    const { result } = renderHook(() => useLoadingStatus(STATUS.PENDING));
    expect(result.current[0]).toEqual({
      isDone: false,
      isFailure: false,
      isInitial: false,
      isLoading: true,
      isSuccess: false,
    });
  });
});
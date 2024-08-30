import { act, renderHook } from '@testing-library/react';
import { afterAll, expect, vitest } from 'vitest';

import { usePaginationParams } from '../index';


const mockUpdateParams = vi.fn().mockImplementation((params: URLSearchParams) => params);
const mockGet = vi.fn();
const mockSet = vi.fn();

const mockParams = new URLSearchParams();
mockParams.set = mockSet;
mockParams.get = mockGet;

vitest.mock('react-router-dom', () => ({
  useSearchParams: () => [mockParams, mockUpdateParams],
  BrowserRouter: vi.fn().mockImplementation((props) => props.children),
}));


describe('usePaginationParams test', () => {
  afterAll(() => {
    vitest.clearAllMocks();
  });

  it('should return default params', () => {
    const { result } = renderHook(() => usePaginationParams());
    expect(result.current.offset).toEqual(0);
    expect(result.current.limit).toEqual(5);
    expect(result.current.params).toEqual(mockParams);
    expect(result.current.setLimits).toBeTypeOf('function');
    expect(result.current.setOffset).toBeTypeOf('function');
    expect(result.current.setParams).toBeTypeOf('function');
  });

  it('should return defined params', () => {
    const { result } = renderHook(() => usePaginationParams({ offset: 10, limit: 10 }));
    expect(result.current.offset).toEqual(10);
    expect(result.current.limit).toEqual(10);
    expect(result.current.params).toEqual(mockParams);
    expect(result.current.setLimits).toBeTypeOf('function');
    expect(result.current.setOffset).toBeTypeOf('function');
    expect(result.current.setParams).toBeTypeOf('function');
  });

  it('updated function should be called', async () => {
    const { result } = renderHook(() => usePaginationParams());

    act(() => {
      result.current.setOffset(5);
      result.current.setLimits(5);
    });
    expect(mockUpdateParams).toBeCalledTimes(2);
    expect(mockGet).toBeCalledTimes(4);

  });
});
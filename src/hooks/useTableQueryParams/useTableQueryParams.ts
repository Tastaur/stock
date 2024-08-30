import { useEffect, useMemo } from 'react';

import { usePaginationParams } from '../usePaginationParams';
import { UseTableQueryParamsArgs } from './types';


export const useTableQueryParams = <
  QKey extends string,
  QObj extends Partial<Record<QKey, any>>,
  FObj extends Record<string, any>,
>({
  parseFiltersForRequest,
  prepareFiltersForComponents,
  beforeSubmit,
  defaultParams,
  ...paginationParams
}: UseTableQueryParamsArgs<QKey, QObj, FObj>) => {
  const { limit, setLimits, offset, setOffset, params, setParams } = usePaginationParams(paginationParams);

  useEffect(() => {
    defaultParams && setParams(prev => {
      Object.entries(defaultParams as Record<string, string>).forEach(([key, value]) => {
        prev.set(key, value);
      });
      return prev;
    });
  }, [JSON.stringify(defaultParams)]);

  const filtersForRequest = useMemo<QObj>(() => {
    return parseFiltersForRequest(params);
  }, [
    params,
  ]);


  const filtersForRender = useMemo<FObj>(() => {
    return prepareFiltersForComponents(params);
  }, [
    params,
  ]);

  const onSubmitFilters = (data: FObj) => {
    const preparedData = beforeSubmit(data);
    setParams(prev => {
      Object.entries(preparedData).forEach(([key, value]) => {
        value ? prev.set(key, String(value)) : prev.delete(key);
      });
      return prev;
    });
    setOffset(0);
  };

  const clearFilters = () => {
    const keys = Array.from(params.keys());
    setParams(prev => {
      keys.forEach(i => {
        prev.delete(i);
      });
      return prev;
    });
  };


  return {
    limit,
    setLimits,
    offset,
    setOffset,
    filtersForRequest,
    filtersForRender,
    onSubmitFilters,
    clearFilters,
    params,
    setParams,
  };
};
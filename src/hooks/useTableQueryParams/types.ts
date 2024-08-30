import { UsePaginationParamsDefaultArgs } from '../usePaginationParams/types';


export interface UseTableQueryParamsArgs<
  QKey extends string,
  QObj extends Partial<Record<QKey, any>>,
  FObj extends Record<string, any>,
> extends UsePaginationParamsDefaultArgs {
  parseFiltersForRequest: (urlParams: URLSearchParams) => QObj,
  prepareFiltersForComponents: (data: URLSearchParams) => FObj
  beforeSubmit: (data: FObj) => QObj
  defaultParams?: QObj
}
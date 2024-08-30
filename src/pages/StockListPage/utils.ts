export const prepareFiltersForComponents = (params: URLSearchParams) => {
  return {
    searchText: params.get('searchText') ?? undefined,
  };
};
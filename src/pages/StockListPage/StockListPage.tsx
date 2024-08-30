import React, { useMemo } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppThunk, useSelector } from '../../store/hooks';
import { getStockListThunk } from '../../store/reducers/stock/thunks';
import { Preloader } from '../../components/Preloader/Preloader';
import { selectStockList } from '../../store/reducers/stock/selectors';
import { useTableQueryParams } from '../../hooks/useTableQueryParams/useTableQueryParams';
import { prepareFiltersForComponents } from './utils';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { PreparedTable } from '../../components/PreparedTable/PreparedTable';
import { STOCK_COLUMNS } from './constants';
import { Stock } from '../../store/reducers/stock/types';


export const StockListPage = () => {
  const {
    limit,
    offset,
    setLimits,
    setOffset,
    filtersForRequest,
    filtersForRender,
    clearFilters,
    onSubmitFilters,
  } = useTableQueryParams({
    limit: 5,
    beforeSubmit: data => data,
    prepareFiltersForComponents,
    parseFiltersForRequest: prepareFiltersForComponents,
  });

  const navigate = useNavigate();
  const { isLoading } = useAppThunk(getStockListThunk, {});

  const stocks = useSelector(selectStockList());

  const onRowClick = (stock: Stock) => {
    navigate(`${stock.symbol}`);
  };

  const filteredRows = useMemo(() => {
    const reg = new RegExp(filtersForRequest.searchText ?? '', 'i');
    return stocks.filter(i => reg.test(i.companyName));
  }, [stocks, filtersForRequest.searchText]);

  const rows = useMemo(() => {
    const pageOffset = offset * limit;
    return [...filteredRows].slice(pageOffset, pageOffset + limit);
  }, [filteredRows, limit, offset]);


  return (
    <Stack
      gap={4}
      height="100%">
      <Stack>
        <Typography padding={2} variant="h4">Stock market information</Typography>
        <Divider />
      </Stack>
      <SearchBar
        form={filtersForRender}
        onClear={clearFilters}
        onSubmit={onSubmitFilters}
      />
      {isLoading ? <Preloader /> : <PreparedTable
        onRowClick={onRowClick}
        data={rows}
        limit={limit}
        page={offset}
        columns={STOCK_COLUMNS}
        onChangeLimit={setLimits}
        onChangePage={setOffset}
        totalCount={filteredRows.length}
      />}
    </Stack>
  );
};
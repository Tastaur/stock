import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useAppThunk, useSelector } from '../../store/hooks';
import { getStockBySymbolThunk } from '../../store/reducers/stock/thunks';
import { WithSymbol } from '../../globalTypes';
import { selectStockBySymbol } from '../../store/reducers/stock/selectors';
import { StockPageHeader } from './components/StockPageHeader/StockPageHeader';
import { StockPageBody } from './components/StockPageBody/StockPageBody';
import { Preloader } from '../../components/Preloader/Preloader';


export const StockPage = () => {
  const { symbol } = useParams<WithSymbol>();
  const stock = useSelector(selectStockBySymbol(symbol ?? ''));

  const { isLoading, error } = useAppThunk(getStockBySymbolThunk, { symbol: symbol ?? '' }, {
    isEnabled: Boolean(symbol && !stock),
  });

  if (!symbol) {
    return null;
  }


  return (
    <Stack
      gap={4}
      height="100%">
      <StockPageHeader symbol={symbol} />
      {isLoading && <Preloader />}
      {!isLoading && stock && !error ? <StockPageBody stock={stock} /> : null}
      {error ? <Typography
        variant="h4"
        width="100%"
        textAlign="center"
        color="error">Something went wrong...</Typography> : null}
    </Stack>
  );
};


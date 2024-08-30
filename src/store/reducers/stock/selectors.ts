import { createSelector } from '@reduxjs/toolkit';

import { selectAppState } from '../../selectors';
import { RootState } from '../../types';
import { Stock } from './types';


export const selectStockState = () => createSelector(
  selectAppState,
  (app: RootState) => app.stockReducer,
);

export const selectStockList = () => createSelector(
  selectStockState(),
  (app) => app.stocks,
);



export const selectStocks = () => createSelector(
  selectStockList(),
  (stocks) => stocks.reduce((acc, current) => {
    acc[current.symbol] = current;
    return acc;
  }, {} as Record<string, Stock>),
);


export const selectStockBySymbol = (symbol: string) => createSelector(
  selectStocks(),
  (app) => app[symbol],
);




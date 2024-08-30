import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { REDUCERS } from '../../constants';
import { Stock, StockSliceState } from './types';


const initialState: StockSliceState = {
  stocks: [],
};

export const stockSlice = createSlice({
  name: REDUCERS.STOCK,
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<Partial<StockSliceState>>) => {
      return Object.assign(state, action.payload);
    },
    addStock: (state, action: PayloadAction<Stock>) => {
      state.stocks.push(action.payload);
    },
    clear: () => {
      return initialState;
    },
  },
});

export const stockReducer = stockSlice.reducer;
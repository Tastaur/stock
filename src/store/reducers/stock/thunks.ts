import { AppThunk } from '../../types';
import { cachedRequest } from '../../../utils/cachedRequest/cachedRequest';
import { requestStockBySymbol, requestStockList } from '../../../api';
import { stockSlice } from './reducer';
import { WithSymbol } from '../../../globalTypes';
import { prepareKey } from '../../../utils/prepareCachedKey/prepareKey';



export const getStockListThunk: AppThunk = () => async ({ dispatch }) => {
  try {
    const stocks = await cachedRequest({
      fn: () => requestStockList(),
      key: prepareKey(['stock']),
    });
    dispatch(stockSlice.actions.setState({ stocks }));
  } catch (err) {
    throw err;
  }
};



export const getStockBySymbolThunk: AppThunk<WithSymbol> = ({ symbol }) => async ({ dispatch }) => {
  try {
    const newStock = await cachedRequest({ fn: () => requestStockBySymbol(symbol), key: prepareKey(['stock', symbol]) });
    if (newStock) {
      dispatch(stockSlice.actions.addStock(newStock));
    }
  } catch (err) {
    throw err;
  }
};

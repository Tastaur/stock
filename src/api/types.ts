import { Stock } from '../store/reducers/stock/types';


export interface RequestStockListResp {
  stocks: Stock[],
  totalCount: number,
}
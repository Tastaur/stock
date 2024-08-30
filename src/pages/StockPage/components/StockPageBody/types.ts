import { Stock } from '../../../../store/reducers/stock/types';


export interface StockPageBodyProps {
  stock: Stock;
}

export interface StockBodySectionItem {
  key: keyof Stock,
  name: string
}
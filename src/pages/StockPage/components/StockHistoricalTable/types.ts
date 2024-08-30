import { HistoricalStockData } from '../../../../store/reducers/stock/types';


export interface StockHistoricalTableProps {
  tableData: HistoricalStockData[]
}

export interface HistoricalColumns {
  key: keyof HistoricalStockData,
  name: string
}
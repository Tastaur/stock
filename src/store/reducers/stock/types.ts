export interface Stock {
  symbol: string,
  companyName: string,
  currentPrice: number,
  percentageChange: number,
  marketStatus: MarketStatus,
  historicalData: HistoricalStockData[],
  volume: number,
  high: number,
  low: number,
}

export interface HistoricalStockData {
  date: string;
  price: number;
}

export type MarketStatus = 'open' | 'closed';

export interface StockSliceState {
  stocks: Stock[]
}


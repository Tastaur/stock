import { RootState } from '../store/types';
import { Stock, StockSliceState } from '../store/reducers/stock/types';


export const getMockRootState = (): RootState => ({
  stockReducer: MockStockState,
  notificationReducer: { notifications: [] },
});

export const MockStockSymbol = 'AAPL';

export const MockStock: Stock = {
  symbol: MockStockSymbol,
  companyName: 'Apple Inc.',
  currentPrice: 175.64,
  percentageChange: -0.42,
  marketStatus: 'open',
  historicalData: [
    { date: '2024-08-20', price: 173.15 },
    { date: '2024-08-21', price: 174.5 },
    { date: '2024-08-22', price: 176.05 },
    { date: '2024-08-23', price: 175.9 },
    { date: '2024-08-24', price: 175.64 },
  ],
  volume: 98800000,
  high: 176.9,
  low: 173.15,
};

export const MockStockState: StockSliceState = {
  stocks: [MockStock],
};
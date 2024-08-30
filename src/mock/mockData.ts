import { Stock } from '../store/reducers/stock/types';


const mockData: { stocks: Stock[] } = {
  stocks: [
    {
      symbol: 'AAPL',
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
    },
    {
      symbol: 'TSLA',
      companyName: 'Tesla Inc.',
      currentPrice: 823.34,
      percentageChange: 1.52,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 805.3 },
        { date: '2024-08-21', price: 812.1 },
        { date: '2024-08-22', price: 818.4 },
        { date: '2024-08-23', price: 820.5 },
        { date: '2024-08-24', price: 823.34 },
      ],
      volume: 74000000,
      high: 825.0,
      low: 805.3,
    },
    {
      symbol: 'AMZN',
      companyName: 'Amazon.com Inc.',
      currentPrice: 145.22,
      percentageChange: -0.68,
      marketStatus: 'closed',
      historicalData: [
        { date: '2024-08-20', price: 143.0 },
        { date: '2024-08-21', price: 144.2 },
        { date: '2024-08-22', price: 146.0 },
        { date: '2024-08-23', price: 145.8 },
        { date: '2024-08-24', price: 145.22 },
      ],
      volume: 62000000,
      high: 146.5,
      low: 143.0,
    },
    {
      symbol: 'GOOGL',
      companyName: 'Alphabet Inc.',
      currentPrice: 132.45,
      percentageChange: 0.85,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 130.15 },
        { date: '2024-08-21', price: 131.4 },
        { date: '2024-08-22', price: 132.0 },
        { date: '2024-08-23', price: 132.1 },
        { date: '2024-08-24', price: 132.45 },
      ],
      volume: 46000000,
      high: 133.0,
      low: 130.15,
    },
    {
      symbol: 'MSFT',
      companyName: 'Microsoft Corporation',
      currentPrice: 315.88,
      percentageChange: 0.27,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 310.5 },
        { date: '2024-08-21', price: 312.8 },
        { date: '2024-08-22', price: 314.7 },
        { date: '2024-08-23', price: 315.4 },
        { date: '2024-08-24', price: 315.88 },
      ],
      volume: 52000000,
      high: 316.5,
      low: 310.5,
    },
    {
      symbol: 'NFLX',
      companyName: 'Netflix Inc.',
      currentPrice: 432.12,
      percentageChange: -1.1,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 440.0 },
        { date: '2024-08-21', price: 435.5 },
        { date: '2024-08-22', price: 434.2 },
        { date: '2024-08-23', price: 433.0 },
        { date: '2024-08-24', price: 432.12 },
      ],
      volume: 38000000,
      high: 441.0,
      low: 432.0,
    },
    {
      symbol: 'NVDA',
      companyName: 'NVIDIA Corporation',
      currentPrice: 505.22,
      percentageChange: 2.04,
      marketStatus: 'open',
      historicalData: [
        { date: '2024-08-20', price: 493.5 },
        { date: '2024-08-21', price: 496.8 },
        { date: '2024-08-22', price: 500.0 },
        { date: '2024-08-23', price: 503.1 },
        { date: '2024-08-24', price: 505.22 },
      ],
      volume: 42000000,
      high: 506.0,
      low: 493.5,
    },
    {
      symbol: 'META',
      companyName: 'Meta Platforms Inc.',
      currentPrice: 294.78,
      percentageChange: -0.95,
      marketStatus: 'closed',
      historicalData: [
        { date: '2024-08-20', price: 298.5 },
        { date: '2024-08-21', price: 297.1 },
        { date: '2024-08-22', price: 295.0 },
        { date: '2024-08-23', price: 295.5 },
        { date: '2024-08-24', price: 294.78 },
      ],
      volume: 35000000,
      high: 299.0,
      low: 294.5,
    },
  ],
};

export default mockData;

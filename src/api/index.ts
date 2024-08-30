import mockData from '../mock/mockData';
import { Stock } from '../store/reducers/stock/types';
import { Optional } from '../globalTypes';
import { FAKE_TIMER } from '../globalConstants';


export const requestStockList = async () => {
  return new Promise<Stock[]>((resolve) => {
    setTimeout(() => {
      resolve(mockData.stocks);
    }, FAKE_TIMER);
  });

};

export const requestStockBySymbol = async (sym: string) => {
  return new Promise<Optional<Stock>>((resolve, reject) => {
    setTimeout(() => {
      const data = mockData.stocks.find(({ symbol }) => symbol === sym);
      data ? resolve(data) : reject(new Error('Stock not found'));
    }, FAKE_TIMER);
  });
};
import { RootState } from '../../../types';
import { getMockRootState, MockStock, MockStockState, MockStockSymbol } from '../../../../common/testHelper';
import {
  selectStockState,
  selectStockList,
  selectStockBySymbol,
  selectStocks,
} from '../selectors';


describe('Stock selector', () => {
  let state: RootState;
  beforeAll(() => {
    state = getMockRootState();
  });
  it('should return stock', () => {
    const selector = selectStockState();
    expect(selector(state)).toEqual(MockStockState);
  });
  it('should return stock list', () => {
    const selector = selectStockList();
    expect(selector(state)).toEqual(MockStockState.stocks);
  });
  it('should return stock by symbol', () => {
    const selector = selectStockBySymbol(MockStockSymbol);
    expect(selector(state)).toEqual(MockStock);
  });
  it('should return stock list', () => {
    const selector = selectStocks();
    expect(selector(state)).toEqual({ [MockStockSymbol]: MockStock });
  });

});
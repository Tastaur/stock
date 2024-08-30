import { RootStore } from '../../../types';
import { createStore } from '../../../index';
import { stockSlice } from '../reducer';
import { MockStock, MockStockState } from '../../../../common/testHelper';


describe('Stock reducer', () => {
  let store: RootStore;
  const getState = () => store.getState().stockReducer;
  beforeAll(() => {
    store = createStore();
  });

  const {
    clear,
    setState,
    addStock,
  } = stockSlice.actions;

  const initialState = { stocks: [] };

  it('set new state', () => {
    expect(getState()).toEqual(initialState);
    store.dispatch(setState(MockStockState));
    expect(getState()).toEqual(MockStockState);
  });
  it('clear state', () => {
    expect(getState()).toEqual(MockStockState);
    store.dispatch(clear());
    expect(getState()).toEqual(initialState);
  });
  it('should add new stock', () => {
    expect(getState()).toEqual(initialState);
    store.dispatch(addStock(MockStock));
    expect(getState()).toEqual(MockStockState);
  });
});
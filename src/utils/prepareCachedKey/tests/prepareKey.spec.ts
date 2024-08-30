import { prepareKey } from '../prepareKey';


describe('prepareKey', () => {
  it('should return empty string', () => {
    expect(prepareKey([])).toEqual('');
  });
  it('should return key', () => {
    expect(prepareKey(['stock', 1])).toEqual('stock-1');
  });
});
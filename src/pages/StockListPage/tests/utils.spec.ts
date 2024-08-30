import { prepareFiltersForComponents } from '../utils';


describe('StockListPage utils', () => {
  const params = new URLSearchParams('searchText=test');
  const brokeParams = new URLSearchParams('se=ff');
  describe('prepareFiltersForComponents', () => {
    it('should return correct field', () => {
      expect(prepareFiltersForComponents(params)).toEqual({
        searchText: 'test',
      });
    });
    it('should return empty field', () => {
      expect(prepareFiltersForComponents(brokeParams)).toEqual({
        searchText: undefined,
      });
    });
  });
});

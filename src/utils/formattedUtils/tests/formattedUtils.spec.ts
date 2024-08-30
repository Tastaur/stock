import { capitalizedText } from '../formattedUtils';


describe('formattedUtils', () => {
  describe('convertSnakeCaseToCapitalize', () => {
    it('should return formatted text', () => {
      expect(capitalizedText('test')).toEqual('Test');
      expect(capitalizedText('TEsT')).toEqual('Test');
      expect(capitalizedText('tEST')).toEqual('Test');
    });
  });
});
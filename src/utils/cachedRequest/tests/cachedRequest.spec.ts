import { getIsCacheExpired, parseJsonSafety } from '../cachedRequest';


describe('cachedRequest', () => {
  describe('getIsCacheExpired', () => {
    it('should return true', () => {
      const endDate = +new Date() - (1000 * 60 * 10);
      expect(getIsCacheExpired(endDate)).toBeTruthy();
    });
    it('should return false', () => {
      const endDate = +new Date() - (1000 * 60 * 2);
      expect(getIsCacheExpired(endDate)).toBeFalsy();
    });
  });
  describe('parseJsonSafety', () => {
    it('should return null', () => {
      expect(parseJsonSafety(null)).toBeNull();
      expect(parseJsonSafety('[sdf')).toBeNull();
    });
    it('should return data', () => {
      const test = { id: 1 };
      expect(parseJsonSafety(JSON.stringify(test))).toEqual(test);
    });
  });
});
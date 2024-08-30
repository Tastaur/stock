import { compareDeepEquality, isPrimitive } from '../utils';


describe('store utils tests', () => {
  describe('isPrimitive', () => {
    it('should return true', () => {
      [
        undefined,
        'undefined',
        123,
        null,
        true,
      ].forEach(i => {
        expect(isPrimitive(i)).toBeTruthy();
      });

    });
    it('should return false', () => {
      [
        {},
        [],
        new Date(),
        new Map(),
        new Set(),
      ].forEach(i => {
        expect(isPrimitive(i)).toBeFalsy();
      });

    });
  });

  describe('compareDeepEquality', () => {
    it('should return true', () => {
      [
        'undefined',
        123,
        true,
        { a: 1 },
      ].forEach(i => {
        expect(compareDeepEquality<typeof i>(i, i)).toBeTruthy();
      });
    });
    it('should return false', () => {
      expect(compareDeepEquality({ a: 1 }, { b: 1 })).toBe(false);
      expect(compareDeepEquality([], ['s'])).toBe(false);
    });
  });
});
import { getDifferenceInMinute } from '../getDifferenceInMinute';


describe('getDifferenceInMinute', () => {
  it('should return amount of minute', () => {
    const startDate = +new Date();
    const endDate = +startDate - (1000 * 60 * 4);
    expect(getDifferenceInMinute(startDate, endDate)).toEqual(4);
  });
});
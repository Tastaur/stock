export const getDifferenceInMinute = (startDate: number, endDate: number) => {
  return (startDate - endDate) / (1000 * 60);
};
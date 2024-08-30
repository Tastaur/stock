import { Maybe } from '../../globalTypes';


export const prepareParams = (params: Maybe<string>, fallbackValue: number) => {
  if (!params) {
    return fallbackValue;
  }
  const value = Number(params);
  return isNaN(value) ? fallbackValue : value;
};
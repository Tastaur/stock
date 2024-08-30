import { Nullable } from '../../globalTypes';
import { CachedRequestArgs, LocalCache } from './types';
import { LOCAL_STORAGE_CACHE_KEY } from './constants';
import { getDifferenceInMinute } from '../getDifferenceInMinute/getDifferenceInMinute';


export const cachedRequest = async <R extends any>({
  key,
  fn,
}: CachedRequestArgs<R>) => {
  try {
    const localCache = getCacheFromLocalStorage();
    if (localCache && key in localCache) {
      const { data, last_update } = localCache[key];
      if (getIsCacheExpired(last_update)) {
        const newData = await fn();
        updateLocalStorage(newData, key);
        return newData;
      }
      return data as R;
    } else {
      const newData = await fn();
      updateLocalStorage(newData, key);
      return newData;
    }
  } catch (e) {
    throw e;
  }
};


const getCacheFromLocalStorage = () => {
  return parseJsonSafety<LocalCache>(localStorage.getItem(LOCAL_STORAGE_CACHE_KEY));
};

const updateLocalStorage = <T extends any>(data: T, key: string) => {
  const localCache = getCacheFromLocalStorage();
  const newData = {
    data,
    last_update: +new Date(),
  };
  localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, JSON.stringify(
    {
      ...(localCache ?? {}),
      [key]: newData,
    },
  ));

};

export const parseJsonSafety = <T extends any>(json: Nullable<string>): Nullable<T> => {
  try {
    return json ? JSON.parse(json) as T : null;
  } catch (e) {
    return null;
  }
};


export const getIsCacheExpired = (date: number) => {
  return getDifferenceInMinute(+new Date(), date) > 5;
};
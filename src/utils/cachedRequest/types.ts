export interface CachedRequestArgs<R extends any> {
  key: string,
  fn: () => Promise<R>,
}

export interface LocalCacheData<T extends any = {}> {
  data: T,
  last_update: number
}

export type LocalCache = Record<string, LocalCacheData>;
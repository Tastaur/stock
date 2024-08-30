import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { reducer } from '../store/reducer';
import { getMockRootState } from './testHelper';
import { AppThunkStore, RootState } from '../store/types';


export const createPreparedAppThunkStore = (partialState?: Partial<RootState>) => {
  const newStore = configureStore({
    reducer,
    preloadedState: { ...getMockRootState(), ...partialState },
  });
  return {
    ...newStore,
    select: selector => selector(newStore.getState()),
  } as AppThunkStore;
}
;

export function getWrapper(store?: Store<any, AnyAction>): React.FC {
  return ({ children }: { children?: React.ReactNode }) => <Provider store={store ?? createPreparedAppThunkStore()}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>;
}
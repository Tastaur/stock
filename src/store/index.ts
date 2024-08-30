import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';


export const createStore = () => configureStore({
  reducer,
  devTools:{
    name: 'Test-DevTools',
  },
});

export const store = createStore();
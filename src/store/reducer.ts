import { combineReducers } from '@reduxjs/toolkit';

import { stockReducer } from './reducers/stock/reducer';
import { notificationReducer } from './reducers/notification/reducer';


export const reducer = combineReducers({
  stockReducer,
  notificationReducer,
});
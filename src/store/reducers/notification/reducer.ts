import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { REDUCERS } from '../../constants';
import { Notification, NotificationState } from './types';


const initialState: NotificationState = {
  notifications: [],

};

export const notificationSlice = createSlice({
  name: REDUCERS.NOTIFICATION,
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.key !== action.payload.id),
      };
    },
    removeAllNotifications: (state) => {
      return {
        ...state,
        notifications: [],
      };
    },

  },
});

export const notificationReducer = notificationSlice.reducer;
import { createSelector } from 'reselect';

import { RootState } from '../../types';
import { selectAppState } from '../../selectors';


export const selectNotificationState = () => createSelector(
  selectAppState,
  (app: RootState) => app.notificationReducer,
);

export const selectNotificationList = () => createSelector(
  selectNotificationState(),
  (state) => state.notifications,
);

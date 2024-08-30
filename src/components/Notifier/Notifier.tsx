import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import { useSelector } from '../../store/hooks';
import { selectNotificationList } from '../../store/reducers/notification/selectors';
import { notificationSlice } from '../../store/reducers/notification/reducer';



export const Notifier = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotificationList());
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    notifications.forEach(
      ({ key, message,  ...options }) => {
        enqueueSnackbar(message, {
          key,
          ...options,
          anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          onExited: (_event, myKey) => {
            dispatch(notificationSlice.actions.removeNotification({ id: String(myKey) }));
          },
        });
      },
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  useEffect(() => {
    closeSnackbar();
  }, [closeSnackbar]);


  return null;
};
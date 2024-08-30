import { CustomContentProps } from 'notistack';


export interface Notification {
  variant: CustomContentProps['variant'],
  message: CustomContentProps['message'],
  key: string,
}

export interface NotificationState {
  notifications: Notification[],
}
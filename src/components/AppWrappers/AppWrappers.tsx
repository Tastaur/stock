import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { ReactFC } from '../../globalTypes';
import { GlobalOverride } from '../GlobalOverride/GlobalOverride';
import { store } from '../../store';


export const AppWrappers: ReactFC = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme()}>
      <GlobalOverride />
      <Provider store={store}>
        <SnackbarProvider>
          {children}
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
};
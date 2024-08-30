import React from 'react';
import { CircularProgress, Stack } from '@mui/material';


export const Preloader = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <CircularProgress />
    </Stack>
  );
};
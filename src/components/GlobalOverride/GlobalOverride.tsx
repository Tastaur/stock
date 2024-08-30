import React from 'react';
import { alpha, GlobalStyles } from '@mui/material';
import { useTheme } from '@emotion/react';


export const SCROLLBAR_SIZE = '0.5rem';

export const GlobalOverride = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        html: {
          height: '100dvh',
          maxHeight:  '100dvh',
          maxWidth: '100vw',
          width: '100vw',
          fontFamily: 'Segoe UI',
          overflow: 'hidden',
          '& > body': {
            height: '100%',
            margin:0,
          },
          '& #root': {
            height: '100%',
          },
          '& > * div': {
            caretColor: 'transparent',
            '& > input': {
              caretColor: 'black',
            },
            '& > textarea': {
              caretColor: 'black',
            },
          },
          '*::-webkit-scrollbar': {
            width: SCROLLBAR_SIZE,
            height: SCROLLBAR_SIZE,
            '&-track': {
              backgroundColor: 'transparent',
            },
            '&-thumb': {
              borderRadius: 8,
              backgroundColor: alpha(theme.palette.grey['400'], 0.65),
              '&:hover': {
                backgroundColor: theme.palette.grey['400'],
              },
            },
          },
        },
      }}
    />
  );
};
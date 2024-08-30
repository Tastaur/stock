import React, { FC } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { BackButton } from './styles';
import { WithSymbol } from '../../../../globalTypes';


export const StockPageHeader: FC<WithSymbol> = ({ symbol }) => {
  return (
    <Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        paddingX={2}
        gap={2}>
        <Link to="/">
          <BackButton><ArrowBack /></BackButton>
        </Link>
        <Typography padding={2} variant="h4">Stock: {symbol}</Typography>
      </Stack>
      <Divider />
    </Stack>
  );
};
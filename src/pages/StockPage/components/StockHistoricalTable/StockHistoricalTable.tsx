import React, { FC } from 'react';
import { Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';

import { StyledContainer } from './styles';
import { StockHistoricalTableProps } from './types';
import { HISTORICAL_COLUMN } from './constants';


export const StockHistoricalTable: FC<StockHistoricalTableProps> = ({ tableData }) => {
  return (
    <StyledContainer>
      <Table>
        <TableHead>
          <TableRow>
            {HISTORICAL_COLUMN.map(i => <TableCell
              key={i.key}><Typography>{i.name}</Typography></TableCell>)}
          </TableRow>
          {tableData.map(i => <TableRow key={i.date}>
            {HISTORICAL_COLUMN.map(c => <TableCell key={`${i.date}_${c.key}`}>
              <Typography>
                {String(i[c.key])}
              </Typography>
            </TableCell>)}
          </TableRow>)}
        </TableHead>
      </Table>
    </StyledContainer>
  );
};


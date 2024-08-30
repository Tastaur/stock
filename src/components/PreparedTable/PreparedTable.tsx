import React from 'react';
import { Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@mui/material';


import { PossibleTableData, PreparedTableProps } from './types';
import { StyledCell, StyledPaper, StyledRow, StyledTableContainer } from './styles';


export const PreparedTable = <T extends PossibleTableData>({
  columns,
  limit,
  onChangeLimit,
  onChangePage,
  page,
  totalCount,
  data,
  onRowClick,
}: PreparedTableProps<T>) => {
  return (
    <StyledPaper>
      <StyledTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={String(column.objectKey)}>
                  <Typography>{column.name}</Typography>
                </TableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(i => <StyledRow
              opened={'marketStatus' in i ? 'open' === i.marketStatus : undefined}
              onClick={() => {
                onRowClick && onRowClick(i);
              }}
              hover
              key={i.symbol}>
              {columns.map(c => <StyledCell
                isPositive={'percentageChange' in i && 'percentageChange' === c.objectKey
                  ? i.percentageChange > 0
                  : undefined
                }
                key={`${i.symbol}_${String(c.objectKey)}`}>
                <Typography>{String(c.parser ? c.parser(i[c.objectKey]) : i[c.objectKey])}</Typography>
              </StyledCell>)}
            </StyledRow>)}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5]}
        count={totalCount}
        component="div"
        page={page}
        rowsPerPage={limit}
        onPageChange={(_, p) => {
          onChangePage(p);
        }}
        onRowsPerPageChange={(e) => {
          onChangeLimit(+e.target.value);
          onChangePage(0);
        }}
      />
    </StyledPaper>
  );
};


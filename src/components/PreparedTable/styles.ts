import styled from '@emotion/styled';
import { Paper, TableCell, tableClasses, TableContainer, TableRow } from '@mui/material';


export const StyledPaper = styled(Paper)({
  height: '100%',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
});
export const StyledTableContainer = styled(TableContainer)({
  flexGrow: 1,
  [`& .${tableClasses.root}`]: {
    height: '100%',
  },
});
export const StyledRow = styled(TableRow, {
  shouldForwardProp: propName => !['opened'].includes(propName),
})<{ opened?: boolean }>(({ opened, theme }) => ({
  cursor: 'pointer',
  ...('boolean' === typeof opened ? { backgroundColor: opened ? theme.palette.common.white : theme.palette.grey.A100 } : {}),

}));
export const StyledCell = styled(TableCell, {
  shouldForwardProp: propName => !['isPositive'].includes(propName),
})<{ isPositive?: boolean }>(({ theme, isPositive }) => ({
  ...('boolean' === typeof isPositive ? { color: isPositive ? theme.palette.success.main : theme.palette.error.main } : {}),
}));
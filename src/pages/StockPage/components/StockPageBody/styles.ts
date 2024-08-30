import styled from '@emotion/styled';
import { Paper, Stack } from '@mui/material';


export const SectionWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  padding: theme.spacing(0, 1),
  gap: theme.spacing(3),
  alignItems: 'center',
  width: '100%',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
export const StyledSectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  display: 'flex',
  flexDirection: 'column',
  width: '20%',
  [theme.breakpoints.down('sm')]: {
    width: '60%',
  },
}));
export const StyledPageWrapper = styled(Stack)({
  overflowY: 'scroll',
  overflowX: 'hidden',
});
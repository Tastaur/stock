import styled from '@emotion/styled';
import { outlinedInputClasses, TextField } from '@mui/material';


export const StyledTextField = styled(TextField)(({ theme }) => ({
  minWidth: 200,
  width: '50%',
  [`& .${outlinedInputClasses.root}`]: {
    borderRadius: theme.shape.borderRadius * 2,
  },
}));
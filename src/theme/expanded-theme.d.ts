import '@mui/material';

import { Theme as MaterialUITheme } from '@mui/material/styles';


declare module '@emotion/react' {
  export interface Theme extends MaterialUITheme {
  }

}
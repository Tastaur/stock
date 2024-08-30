import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';


import { StockHistoricalTable } from '../StockHistoricalTable/StockHistoricalTable';
import { SectionWrapper, StyledPageWrapper, StyledSectionPaper } from './styles';
import { StockPageBodyProps } from './types';
import { MAIN_INFO_SECTIONS } from './constants';
import { StockHistoricalGraph } from '../StockHistoricalGraph/StockHistoricalGraph';



export const StockPageBody: FC<StockPageBodyProps> = ({ stock }) => {
  const { historicalData } = stock;
  return (
    <StyledPageWrapper
      gap={2}
      width="100%"
      height="100%"
    >
      <SectionWrapper
      >
        {MAIN_INFO_SECTIONS.map(i => <StyledSectionPaper key={i.key} elevation={3}>
          <Typography variant="caption" color="grey">{i.name}</Typography>
          <Typography variant="h5">{String(stock[i.key])}</Typography>
        </StyledSectionPaper>)}
      </SectionWrapper>
      <Stack gap={2}>
        <Typography paddingLeft={3} variant="h5">History data:</Typography>
        <Stack gap={3}>
          <StockHistoricalTable tableData={historicalData} />
          <StockHistoricalGraph historicalData={historicalData} />
        </Stack>
      </Stack>
    </StyledPageWrapper>
  );
};



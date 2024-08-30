import React, { FC, useMemo } from 'react';
import { Stack } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';

import { StockHistoricalGraphProps } from './types';


Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export const StockHistoricalGraph: FC<StockHistoricalGraphProps> = ({ historicalData }) => {
  const { labels, data } = useMemo(() => {
    return historicalData.reduce((acc, item) => {
      acc.labels.push(item.date);
      acc.data.push(item.price);
      return acc;
    }, { labels: [], data: [] } as { labels: string[], data: number[] });
  }, [historicalData]);
  return (
    <Stack height="45%">
      <Line
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
        data={{
          labels,
          datasets: [{
            data,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }],
        }} />
    </Stack>
  );
};
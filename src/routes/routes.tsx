import React, { lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import App from '../App';
import { BASE_ROUTE } from './constants';


const StockListPage = lazy(() => import('../pages/StockListPage/lazy'));
const StockPage = lazy(() => import('../pages/StockPage/lazy'));

export const routes: RouteObject[] = [
  {
    path: BASE_ROUTE.index,
    element: <StockListPage />,
  },
  {
    path: BASE_ROUTE.symbol,
    element: <StockPage />,
  },

  {
    path: '*',
    element: <Navigate to='' replace />,
  },
];

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: routes,
  },
]);
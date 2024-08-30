import { useState } from 'react';

import { STATUS } from '../../globalConstants';
import { UseStatusResponse } from './types';


export const useLoadingStatus = (initialStatus?: STATUS): UseStatusResponse => {
  const [status, setStatus] = useState<STATUS>(initialStatus ?? STATUS.INITIAL);
  return [{
    isLoading: status === STATUS.PENDING,
    isFailure: status === STATUS.FAILURE,
    isInitial: status === STATUS.INITIAL,
    isSuccess: status === STATUS.SUCCESS,
    isDone: status !== STATUS.INITIAL && status !== STATUS.PENDING,
  },
  setStatus,
  ];
};
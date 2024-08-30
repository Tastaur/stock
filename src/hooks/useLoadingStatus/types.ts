import { Dispatch, SetStateAction } from 'react';

import { STATUS } from '../../globalConstants';


type StatusKeys = 'isLoading' | 'isFailure' | 'isInitial' | 'isSuccess' | 'isDone';
export type UseStatusResponse = [Record<StatusKeys, boolean>, Dispatch<SetStateAction<STATUS>>];
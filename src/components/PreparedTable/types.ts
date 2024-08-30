import { Stock } from '../../store/reducers/stock/types';


export type PossibleTableData = Stock;

export interface PreparedTableProps<T extends PossibleTableData> {
  data: T[],
  columns: TableColumn<T, keyof T>[],
  limit: number
  page: number;
  onChangePage: (page: number) => void;
  onChangeLimit: (limit: number) => void;
  totalCount: number;
  onRowClick?: (row: T) => void
}

export interface TableColumn<T extends PossibleTableData, K extends keyof T> {
  objectKey: K,
  name: string,
  parser?: (data: T[K]) => string
}
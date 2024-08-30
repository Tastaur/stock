import { TableColumn } from '../../components/PreparedTable/types';
import { Stock } from '../../store/reducers/stock/types';
import { capitalizedText } from '../../utils/formattedUtils/formattedUtils';


export const STOCK_COLUMNS: TableColumn<Stock, keyof Stock>[] = [
  { objectKey: 'symbol', name: 'Stock symbol' },
  { objectKey: 'companyName', name: 'Company name' },
  { objectKey: 'currentPrice', name: 'Current price' },
  {
    objectKey: 'percentageChange',
    name: 'Percent change',
    parser: (percent) => 'number' === typeof percent && percent > 0 ? `+${percent}` : String(percent),
  },
  {
    objectKey: 'marketStatus',
    name: 'Market status',
    parser: (status) => capitalizedText(String(status)),
  },
];
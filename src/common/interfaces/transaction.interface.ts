export interface ITransactionProps {
  transactions: ITransaction[];
  onSorting: (sort: ITransaction[]) => void;
}

export interface ITransaction {
  merchant: string;
  amount?: string | number;
  categoryCode?: string;
  transactionDate?: number;
  merchantLogo?: string;
  transactionType?: string;
}

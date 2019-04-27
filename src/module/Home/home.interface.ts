import { ITransaction } from 'common/interfaces/transaction.interface';

export interface IHomeProps {
  transactionListRecord: ITransaction[];
  filterTransactionRecord: (payload: { filterValue: string }) => {};
}

export interface IHomeState {
  transactionList: ITransaction[] | [];
  transactionListFiltered: ITransaction[] | [];
}

export interface IMapStateToProps {
  home: {
    transactionList: ITransaction[] | [];
  };
}

export interface IFilter {
  transactionListRecord: ITransaction[];
  transactionListFiltered: ITransaction[] | [];
  onSearch: (filter: ITransaction[]) => void;
  onSorting: (sort: ITransaction[]) => void;
}

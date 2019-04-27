export interface ITransaction {
  merchant?: string;
  amount: string | number;
  categoryCode: string;
  transactionDate: number;
  merchantLogo: string;
  transactionType: string;
}

export interface IHomeReducer {
  homeData?: object;
  loading?: boolean;
  transactionList?: ITransaction[];
  userList?: ITransaction[];
}

export interface IPayload {
  transaction?: ITransaction;
  deductAmount?: {
    toUser: ITransaction;
    formUser: ITransaction;
  };
  filterValue?: string;
}

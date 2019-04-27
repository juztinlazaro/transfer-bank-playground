import { ITransaction } from 'common/interfaces/transaction.interface';

export interface ISidebarState {
  amount: number;
  fromAccount: ITransaction | {};
  toAccount: ITransaction | {};
  toAccountList: ITransaction[] | {};
  isShowTransferView: boolean;
}

export interface ITransactionAction {
  merchant?: string;
  amount?: string | number;
  categoryCode?: string;
  transactionDate?: number;
  merchantLogo?: string;
  transactionType?: string;
}

export interface ISidebarProps {
  userList: ITransaction[];
  setTransactionRecord: (payload: { transaction: ITransactionAction }) => {};
  setDeductAmountUser: (payload: {
    deductAmount: {
      formUser: ITransactionAction;
      toUser: ITransactionAction;
    };
  }) => {};
}

export interface IMapStateToProps {
  home: {
    userList: ITransaction[];
  };
}

export interface ITransferForm {
  amount: number;
  fromAccount: ITransaction | { merchant: string };
  toAccount: ITransaction | { merchant: string };
  toAccountList: ITransaction[];
  userList: ITransaction[];
  onSelectFromAccount: (value: string) => void;
  onSelectToAccount: (value: string) => void;
  onChangeAmount: (e: number) => void;
  onSubmit: () => void;
}

export interface ITransferPreview {
  fromAccount: ITransaction | { merchant: string; amount: number };
  toAccount: ITransaction | { merchant: string; amount: number };
  isShowTransferView: boolean;
  onCancel: () => void;
  onOk: () => void;
  amount: number;
}

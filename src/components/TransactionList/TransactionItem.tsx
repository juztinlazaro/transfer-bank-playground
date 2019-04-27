import * as React from 'react';
import moment from 'moment';
import { ITransaction } from 'common/interfaces/transaction.interface';

interface ITransactionItem {
  transaction: ITransaction;
  key?: string;
  amount?: string;
  merchant?: string;
  categoryCode?: string;
  transactionDate?: number;
  merchantLogo?: string;
  transactionType?: string;
}

const TransactionItem: React.FC<ITransactionItem> = ({ transaction }) => {
  return (
    <div
      className="item"
      style={{ borderLeft: `10px solid ${transaction.categoryCode}` }}
    >
      <div className="transaction-date">
        {moment(transaction.transactionDate).format('MMM. DD')}
      </div>
      <div className="logo">
        <img alt="merchant-logo" src={transaction.merchantLogo} />
      </div>
      <div
        className="company-name"
        data-transaction-type={transaction.transactionType}
      >
        {transaction.merchant}
      </div>
      <div className="amount">${Number(transaction.amount).toFixed(2)}</div>
    </div>
  );
};

export default TransactionItem;

import * as React from 'react';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Empty from 'antd/lib/empty';
import {
  ITransactionProps,
  ITransaction,
} from 'common/interfaces/transaction.interface';
import TransactionItem from './TransactionItem';
const Transactions: React.FC<ITransactionProps> = ({
  transactions,
  onSorting,
}) => {
  const [isDescending, setIsDescending] = React.useState(false);
  const handleSort = (type: string) => {
    if (isDescending) {
      const reverse = transactions.reverse();
      onSorting(reverse);
      setIsDescending(false);
    } else {
      let sorted = transactions.sort((a: ITransaction, b: ITransaction) => {
        const nameA = a.merchant.toUpperCase();
        const nameB = b.merchant.toUpperCase();
        if (nameA > nameB) {
          return 1;
        } else if (nameA < nameB) {
          return -1;
        } else {
          return 0;
        }
      });

      if (type === 'date') {
        sorted = transactions.sort((a: ITransaction, b: ITransaction) => {
          return a.transactionDate - b.transactionDate;
        });
      }

      if (type === 'amount') {
        sorted = transactions.sort((a: ITransaction, b: ITransaction) => {
          return Number(a.amount) - Number(b.amount);
        });
      }

      onSorting(sorted);
      setIsDescending(true);
    }
  };

  return (
    <div className="transaction-section">
      <div className="transaction-header">
        <div className="item">
          <div className="transaction-date">
            Date
            <Button className="sort-button" onClick={() => handleSort('date')}>
              <Icon type="caret-up" />
              <Icon type="caret-down" />
            </Button>
          </div>
          <div className="logo">Logo</div>
          <div className="company-name">
            Merchant
            <Button
              className="sort-button"
              onClick={() => handleSort('merchant')}
            >
              <Icon type="caret-up" />
              <Icon type="caret-down" />
            </Button>
          </div>
          <div className="amount">
            Amount
            <Button
              className="sort-button"
              onClick={() => handleSort('amount')}
            >
              <Icon type="caret-up" />
              <Icon type="caret-down" />
            </Button>
          </div>
        </div>
      </div>

      <div className="transaction-container">
        {transactions.length === 0 && <Empty />}
        {transactions.map((transaction: ITransaction, index: number) => {
          return (
            <TransactionItem
              key={transaction.merchant + index}
              transaction={transaction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;

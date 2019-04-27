import React from 'react';
import TransactionData from 'store/transactions.json';

const TransactionContext = React.createContext({
  transactionList: [],
  userData: TransactionData.data,
});

export default TransactionContext;

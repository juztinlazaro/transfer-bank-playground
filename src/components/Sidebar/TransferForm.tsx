import * as React from 'react';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import { ITransaction } from 'common/interfaces/transaction.interface';
import { ITransferForm } from './interface';

const Option = Select.Option;

const TransferForm: React.SFC<ITransferForm> = ({
  toAccountList,
  fromAccount,
  toAccount,
  amount,
  userList,
  onSelectFromAccount,
  onSelectToAccount,
  onChangeAmount,
  onSubmit,
}) => {
  const isDisabledSubmitButton =
    amount === 0 || fromAccount.merchant === '' || toAccount.merchant === '';
  return (
    <React.Fragment>
      <div className="ui-input-label">
        <span className="label">from account</span>
        <Select
          className="ui-input-select"
          placeholder="Free Checking(4692) - $5824.76"
          showSearch={true}
          onChange={onSelectFromAccount}
          value={fromAccount.merchant}
        >
          {userList.map((item: ITransaction) => (
            <Option key={item.merchant} value={item.merchant}>
              {item.merchant}
            </Option>
          ))}
        </Select>
      </div>

      <div className="ui-input-label">
        <span className="label">To account</span>
        <Select
          className="ui-input-select"
          placeholder="Georgia Power Electric Company"
          showSearch={true}
          onChange={onSelectToAccount}
          value={toAccount.merchant}
        >
          {toAccountList.map((item: ITransaction) => (
            <Option key={item.merchant} value={item.merchant}>
              {item.merchant}
            </Option>
          ))}
        </Select>
      </div>

      <div className="ui-input-label _spacer-large">
        <span className="label">amount</span>
        <InputNumber
          onChange={onChangeAmount}
          type="number"
          className="ui-input"
          placeholder="$0.00"
          value={amount}
        />
      </div>

      <div className="_text-right">
        <Button
          onClick={onSubmit}
          className="submit-button"
          disabled={isDisabledSubmitButton}
        >
          SUBMIT
        </Button>
      </div>
    </React.Fragment>
  );
};

export default TransferForm;

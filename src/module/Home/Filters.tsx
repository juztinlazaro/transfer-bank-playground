import * as React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';
import Select from 'antd/lib/select';
import { ITransaction } from 'common/interfaces/transaction.interface';

import { IFilter } from './home.interface';

const Option = Select.Option;

const Filters: React.SFC<IFilter> = ({
  onSearch,
  onSorting,
  transactionListRecord,
  transactionListFiltered,
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    let filter = transactionListRecord;
    if (value !== '') {
      filter = transactionListRecord.filter((transaction: ITransaction) => {
        return transaction.merchant.toLowerCase().includes(value);
      });
    }
    onSearch(filter);
  };

  const handleSortByDateAndTransactionType = (value: any) => {
    const sorted = transactionListFiltered.sort(
      (a: ITransaction, b: ITransaction) => {
        if (value === 'transactionType') {
          return a.transactionType > b.transactionType ? 1 : -1;
        }
        return a.transactionDate > b.transactionDate ? -1 : 1;
      },
    );

    onSorting(sorted);
  };

  const handleSortedMerchantByAmount = (e: any) => {
    const value = e.target.value;
    const sorted = transactionListFiltered.sort(
      (a: ITransaction, b: ITransaction) => {
        if (value === 'merchant') {
          return a.merchant > b.merchant ? 1 : -1;
        }
        return a.amount > b.amount ? -1 : 1;
      },
    );

    onSorting(sorted);
  };

  return (
    <div className="filters-container _spacer-md">
      <Row gutter={24}>
        <Col md={24} lg={8} xl={11} className="_spacer-md">
          <Input
            className="ui-input"
            placeholder="Search by typing..."
            onChange={handleSearch}
            allowClear={true}
          />
        </Col>

        <Col md={24} lg={16} xl={13} className="_spacer-md">
          <span className="sort-title"> Sort by</span>
          <Radio.Group onChange={handleSortedMerchantByAmount}>
            <Select
              defaultValue="date"
              style={{ width: 120 }}
              onChange={handleSortByDateAndTransactionType}
            >
              <Option value="date">DATE</Option>
              <Option value="transactionType">TRANSACTION TYPE</Option>
            </Select>
            <Radio.Button value="merchant">BENEFICIARY</Radio.Button>
            <Radio.Button value="amount">AMOUNT</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Filters;

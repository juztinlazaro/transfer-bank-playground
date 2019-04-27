import * as React from 'react';
import { connect } from 'react-redux';
import Notification from 'antd/lib/notification';

import { ITransaction } from 'common/interfaces/transaction.interface';
import { ISidebarProps, ISidebarState, IMapStateToProps } from './interface';
import {
  setTransactionRecord,
  setDeductAmountUser,
} from 'store/modules/home/actions';
import TransferForm from './TransferForm';
import TransferPreview from './TransferPreview';

import ARROW_ICON from 'assets/images/icons/arrows.png';

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
  state = {
    amount: 0,
    fromAccount: {
      amount: 0,
      merchant: '',
    },
    isShowTransferView: false,
    toAccount: {
      amount: 0,
      merchant: '',
    },
    toAccountList: [] as ITransaction[],
  };

  handleSelectFromAccount = (value: string) => {
    const { userList } = this.props;
    const selected = userList.filter((transaction: ITransaction) => {
      return transaction.merchant === value;
    });

    const toAccountListFiltered: ITransaction[] = userList.filter(
      (transaction: ITransaction) => {
        return transaction.merchant !== value;
      },
    );

    this.setState({
      fromAccount: selected[0],
      toAccountList: toAccountListFiltered,
    });
  };

  handleSelectToAccount = (value: string) => {
    const { userList } = this.props;
    const selected = userList.filter((transaction: ITransaction) => {
      return transaction.merchant === value;
    });

    this.setState({
      toAccount: selected[0],
    });
  };

  handleChangeAmount = (value: number) => {
    this.setState({
      amount: value,
    });
  };

  handleSubmit = () => {
    const { fromAccount, toAccount, amount } = this.state;
    const transactionDate = new Date().getTime();

    const formUser = {
      ...fromAccount,
      amount: Number(fromAccount.amount) - Number(amount),
      transactionDate,
    };

    const toUser = {
      ...toAccount,
      amount: Number(toAccount.amount) + Number(amount),
      transactionDate,
    };

    Notification.success({
      description: `${toAccount.merchant} transferred $${amount}.00`,
      message: 'Transfer money success!',
      placement: 'bottomRight',
    });

    this.setState({
      amount: null,
      fromAccount: {
        amount: 0,
      },
      isShowTransferView: false,
      toAccount: {
        amount: 0,
      },
    });

    this.props.setTransactionRecord({ transaction: formUser });
    this.props.setDeductAmountUser({ deductAmount: { formUser, toUser } });
  };

  handleCancelModal = () => {
    this.setState({
      isShowTransferView: false,
    });
  };

  handleOpenModalPreview = () => {
    this.setState({
      isShowTransferView: true,
    });
  };

  render() {
    const {
      toAccountList,
      fromAccount,
      toAccount,
      amount,
      isShowTransferView,
    } = this.state;
    const { userList } = this.props;
    return (
      <section className="sidebar-section">
        <div className="panel">
          <div className="panel-header">
            <img alt="icon-transfer" className="icon" src={ARROW_ICON} />
            <span className="title">Make a Transfer</span>
          </div>

          <div className="panel-body">
            <TransferForm
              toAccountList={toAccountList}
              fromAccount={fromAccount}
              toAccount={toAccount}
              amount={amount}
              userList={userList}
              onSelectFromAccount={this.handleSelectFromAccount}
              onSelectToAccount={this.handleSelectToAccount}
              onChangeAmount={this.handleChangeAmount}
              onSubmit={this.handleOpenModalPreview}
            />
          </div>
        </div>

        <TransferPreview
          fromAccount={fromAccount}
          toAccount={toAccount}
          isShowTransferView={isShowTransferView}
          onCancel={this.handleCancelModal}
          onOk={this.handleSubmit}
          amount={amount}
        />
      </section>
    );
  }
}

const mapStateToProps = (state: IMapStateToProps) => {
  return {
    userList: state.home.userList,
  };
};

export default connect(
  mapStateToProps,
  {
    setDeductAmountUser,
    setTransactionRecord,
  },
)(Sidebar);

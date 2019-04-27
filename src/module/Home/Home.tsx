import * as React from 'react';
import { connect } from 'react-redux';

import { ITransaction } from 'common/interfaces/transaction.interface';
import BRIEFCASE_ICON from 'assets/images/icons/briefcase.png';
import Transactions from 'components/TransactionList/Transactions';
import { IHomeProps, IHomeState, IMapStateToProps } from './home.interface';

import Filters from './Filters';

class Home extends React.Component<IHomeProps, IHomeState> {
  state = {
    transactionList: [] as ITransaction[],
    transactionListFiltered: [] as ITransaction[],
  };

  componentDidMount() {
    const { transactionListRecord } = this.props;
    this.setState({
      transactionList: transactionListRecord,
      transactionListFiltered: transactionListRecord,
    });
  }

  getSnapshotBeforeUpdate(prevProps: IHomeProps) {
    const { transactionListRecord } = this.props;
    if (
      prevProps.transactionListRecord.length !== transactionListRecord.length
    ) {
      return { transactionListFiltered: transactionListRecord };
    }

    return null;
  }

  componentDidUpdate(
    prevProps: IHomeProps,
    prevState: IHomeState,
    snapshot: any,
  ): void {
    if (snapshot !== null) {
      this.setState({
        transactionListFiltered: snapshot.transactionListFiltered,
      });
    }
  }

  handleSearch = (filter: ITransaction[]) => {
    this.setState({
      transactionListFiltered: filter,
    });
  };

  handleSortByAmountAndMerchant = (sort: ITransaction[]) => {
    this.setState({
      transactionListFiltered: sort,
    });
  };

  render() {
    const { transactionListFiltered } = this.state;
    const { transactionListRecord } = this.props;
    return (
      <section className="home-section">
        <div className="panel">
          <div className="panel-header">
            <img alt="icon-briefcase" className="icon" src={BRIEFCASE_ICON} />
            <span className="title">Recent Transaction</span>
          </div>

          <div className="panel-body">
            <Filters
              onSearch={this.handleSearch}
              onSorting={this.handleSortByAmountAndMerchant}
              transactionListRecord={transactionListRecord}
              transactionListFiltered={transactionListFiltered}
            />

            <Transactions
              transactions={transactionListFiltered}
              onSorting={this.handleSortByAmountAndMerchant}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: IMapStateToProps) => {
  return {
    transactionListRecord: state.home.transactionList,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Home);

import { handleActions } from 'redux-actions';
import { IHomeReducer, IPayload, ITransaction } from './interface';
import {
  getHomeDataSuccess,
  getHomeDataError,
  getHomeDataLoading,
  setTransactionRecord,
  setDeductAmountUser,
  filterTransactionRecord,
} from './actions';
import Model from './model';

const onActionString = (action: any) => {
  return action.toString();
};

export default handleActions<IHomeReducer, IPayload>(
  {
    [onActionString(getHomeDataSuccess)]: (state: object, action: any) => ({
      ...state,
      homeData: action.payload,
      loading: false,
    }),
    [onActionString(getHomeDataLoading)]: state => ({
      ...state,
      loading: true,
    }),
    [onActionString(getHomeDataError)]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [onActionString(setTransactionRecord)]: (state, action) => {
      return {
        ...state,
        transactionList: [action.payload.transaction, ...state.transactionList],
      };
    },
    [onActionString(setDeductAmountUser)]: (state, action) => {
      const { toUser, formUser } = action.payload.deductAmount;
      const addAmount = state.userList.map((user: ITransaction) => {
        let newUser = user;
        if (user.merchant === toUser.merchant) {
          newUser = {
            ...user,
            ...toUser,
          };
        }

        if (user.merchant === formUser.merchant) {
          newUser = {
            ...user,
            ...formUser,
          };
        }

        return newUser;
      });

      return {
        ...state,
        userList: addAmount,
      };
    },
    [onActionString(filterTransactionRecord)]: (state, action) => {
      const transactionRecordFiltered = state.transactionList.filter(
        transation => {
          return transation.merchant
            .toLowerCase()
            .includes(action.payload.filterValue);
        },
      );
      console.log('transactionRecordFiltered', transactionRecordFiltered);
      return {
        ...state,
        transactionList: transactionRecordFiltered,
      };
    },
  },
  Model,
);

import userData from '../../transactions.json';
import filterDuplicateArray from 'common/utils/duplicateArray.util';

const filterUserData = filterDuplicateArray(userData.data, 'merchant');

export default {
  homeData: {},
  loading: false,
  transactionList: [],
  userList: filterUserData,
};

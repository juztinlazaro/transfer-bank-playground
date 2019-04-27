import { createAction } from 'redux-actions';
import * as TYPES from './types';
export const getHomeDataEpics = createAction(TYPES.GET_HOME_DATA_EPIC);
export const getHomeDataLoading = createAction(TYPES.GET_HOME_DATA_LOADING);
export const getHomeDataSuccess = createAction(TYPES.GET_HOME_DATA_SUCCESS);
export const getHomeDataError = createAction(TYPES.GET_HOME_DATA_ERROR);

export const setTransactionRecord = createAction(TYPES.SET_TRANSACTION_RECORD);
export const setDeductAmountUser = createAction(TYPES.SET_DEDUCT_AMOUNT_USER);
export const filterTransactionRecord = createAction(
  TYPES.FILTER_TRANSACTION_RECORD,
);

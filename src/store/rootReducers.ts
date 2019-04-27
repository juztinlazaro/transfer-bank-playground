import { combineReducers } from 'redux';

import homeReducer from './modules/home/reducers';

const rootReducers = combineReducers({
  home: homeReducer,
} as any);

export default rootReducers;

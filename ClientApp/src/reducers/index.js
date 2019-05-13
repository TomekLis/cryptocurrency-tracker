import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { historicalData } from './historical-data.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  historicalData
});

export default rootReducer;
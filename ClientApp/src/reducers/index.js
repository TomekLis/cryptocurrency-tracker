import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { historicalData } from "./historical-data.reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  historicalData,
  form: formReducer
});

export default rootReducer;

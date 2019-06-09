import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { historicalData } from "./historical-data.reducer";
import { reducer as formReducer } from "redux-form";
import { chartData } from "./chart.reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  historicalData,
  chart: chartData,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;

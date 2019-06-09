import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { history } from "./history";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
      loggerMiddleware
    )
  )
);

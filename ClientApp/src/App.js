/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Router, Route } from "react-router";
import { connect } from "react-redux";
import { Home } from "./components/Home";
import Counter from "./components/Counter";

import { LoginPage, PrivateRoute, alertActions } from "./authentication";
import { history } from "./helpers";
import { HistoricalData } from "./historical-data/components/HistoricalData";
import "./assets/css/material-dashboard-react.css?v=1.6.0";
import { Chart } from "./views/ChartView/Chart";

class App extends Component {
  displayName = App.name;

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="col-sm-12">
        {alert.message && (
          <div className={`alert ${alert.type}`}>
            {alert.message.toString()}
          </div>
        )}
        <Router history={history}>
          <div>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/chart/:id" component={Chart} />
            <PrivateRoute exact path="/statistics" component={HistoricalData} />
            <PrivateRoute exact path="/investments" component={Counter} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

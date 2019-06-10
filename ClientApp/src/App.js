/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Router, Route } from "react-router";
import { connect } from "react-redux";
import { Home } from "./components/Home";
import { LoginPage, PrivateRoute, alertActions } from "./authentication";
import { history } from "./helpers";
import "./assets/css/material-dashboard-react.css?v=1.6.0";
import { Chart } from "./views/ChartView/Chart";
import { AddInvestment } from "./views/Investments/AddInvestment";
import { InvestmentsPage } from "./views/Investments/InvestmentsPage";
import AddChartPage from "./views/Dashboard/AddChartPage";

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
            <PrivateRoute exact path="/addChart" component={AddChartPage} />
            <PrivateRoute
              exact
              path="/investments"
              component={InvestmentsPage}
            />
            <PrivateRoute
              exact
              path="/addInvestment"
              component={AddInvestment}
            />
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

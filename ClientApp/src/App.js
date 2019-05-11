import React, { Component } from "react";
import { Router, Route } from "react-router";
import { connect } from 'react-redux';
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import Counter from "./components/Counter";

import { LoginPage, PrivateRoute, alertActions } from './authentication';
import { history } from './helpers';


class App extends Component {
  displayName = App.name;

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
              <div className={`alert ${alert.type}`}>
                {alert.message.toString()}
              </div>
            }
            <Router history={history}>
              <Layout>
                <div>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/counter" component={Counter} />
                  <Route path="/fetchdata" component={FetchData} />
                </div>
              </Layout>
            </Router>
          </div>
        </div>
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
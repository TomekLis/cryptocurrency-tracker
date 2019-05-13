import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("user") ? (
        <Layout>

          <Component {...props} />
        </Layout>
      ) : (

          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
    }
  />
);

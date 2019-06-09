import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "../../components/Layout";

// eslint-disable-next-line react/prop-types
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
          // eslint-disable-next-line react/prop-types
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

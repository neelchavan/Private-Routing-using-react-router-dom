import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute(props) {
  const { component: Component, ...rest } = props;
  const isAuth = !!localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...rest} {...routeProps} />
        )
      }
    />
  );
}

export default PublicRoute;

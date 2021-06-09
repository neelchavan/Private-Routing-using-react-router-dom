import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  const isAuth = !!localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? <Component {...rest} {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;

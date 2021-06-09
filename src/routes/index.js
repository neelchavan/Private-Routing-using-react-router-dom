/* eslint-disable import/no-anonymous-default-export */
import loginRoute from "./login.routes";
import dashboardRoute from "./dashboard.routes";
import dashboardRoute2 from "./dashboard2.routes";
import noRoute from "./noRoute.routes";

export default [
  ...loginRoute,
  ...dashboardRoute,
  ...dashboardRoute2,
  ...noRoute,
];

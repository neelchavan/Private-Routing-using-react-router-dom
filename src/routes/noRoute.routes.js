import NoRoute from "../Componenets/NoRoute";

const noRoute = [
  {
    path: "/*",
    exact: false,
    isProtected: false,
    component: NoRoute,
  },
];

export default noRoute;

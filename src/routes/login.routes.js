import Login from "../Componenets/Login";

const loginRoute = [
  {
    path: "/",
    exact: true,
    isProtected: false,
    component: Login,
  },
];

export default loginRoute;

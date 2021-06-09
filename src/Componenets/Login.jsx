import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    localStorage.setItem("token", "somerandomtext");
    history.push("/dashboard");
  };
  return (
    <div>
      <h1>Login page</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}

export default Login;

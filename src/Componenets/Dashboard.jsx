import React from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <Link to="dashboard2">Go to another private page</Link>
      </div>
      <div className="mt-3">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
}

export default Dashboard;

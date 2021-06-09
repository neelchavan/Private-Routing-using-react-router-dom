import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Switch } from "react-router-dom";
import routes from "./routes/index";
import PublicRoute from "./RouteManagement/PublicRoute";
import PrivateRoute from "./RouteManagement/PrivateRoute";

function App() {
  return (
    <Container>
      <Switch>
        {routes.map((route, idx) =>
          route.isProtected ? (
            <PrivateRoute key={idx} {...route} />
          ) : (
            <PublicRoute key={idx} {...route} />
          )
        )}
      </Switch>
    </Container>
  );
}

export default App;

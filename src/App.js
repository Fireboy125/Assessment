import "./App.css";
import Todos from "./component/FetchId";
import Users from "./component/Users";
import Error from "./component/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/user" component={Users} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

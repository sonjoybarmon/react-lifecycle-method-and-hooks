import { Clock } from "./Components/LifyClycle/Clock";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Clock locale="bn-BD" />
        </Route>
        <Route path="/lifecycle">
          <Clock locale="bn-BD" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

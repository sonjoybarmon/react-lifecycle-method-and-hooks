import { Clock } from "./Components/LifyClycle/Clock";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./Components/Todo/TodoList";
import ThemeContextProvider from "./Components/ContextApi/ThemeContext";
import TodoListConsumer from "./Components/Todo/TodoListConsumer";
import AuthContextProvider from "./Components/ContextApi/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/contextApi" component={TodoList} />
            <Route exact path="/contextConsumer" component={TodoListConsumer} />
            <Route exact path="/lifecycle">
              <Clock locale="bn-BD" />
            </Route>
          </Switch>
        </Router>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;

import { Clock } from "./Components/LifyClycle/Clock";
import { Switch, Route } from "react-router-dom";
import TodoList from "./Components/Todo/TodoList";
import ThemeContextProvider from "./Components/ContextApi/ThemeContext";
import TodoListConsumer from "./Components/Todo/TodoListConsumer";
import AuthContextProvider from "./Components/ContextApi/AuthContext";
import Hooks from "./Components/Hooks";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/contextApi" component={TodoList} />
          <Route exact path="/hooks" component={Hooks} />
          <Route exact path="/contextConsumer" component={TodoListConsumer} />
          <Route exact path="/lifecycle">
            <Clock locale="bn-BD" />
          </Route>
        </Switch>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;

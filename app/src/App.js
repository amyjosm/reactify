import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Link to="/">Home</Link>
              <Link to="addtodo">Add Todo</Link>
            <Switch>
              <Route path="/" exact component={TodoList} />
              <Route path="/addtodo" exact component={TodoForm} />
            </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

function Hello() {
  return <p>Hello!</p>;
}

function Test() {
  return <p>Test!</p>;
}

export default App;

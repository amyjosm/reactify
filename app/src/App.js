import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hook from "./components/Hook";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Hook} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

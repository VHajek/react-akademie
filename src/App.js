import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Transaction from "./pages/Transaction";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Transaction} />
            <Route path="/overview" component={Overview} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import "./App.css";
import Landing from "./views/Landing";
import Threads from "./views/Threads";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/threads/:id" component={Threads}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

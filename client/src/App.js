import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import CheatSheets from "./pages/CheatSheets";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <div>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cheatsheets" component={Main} />
          <Route exact path="/cheatsheets/:id" component={CheatSheets} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

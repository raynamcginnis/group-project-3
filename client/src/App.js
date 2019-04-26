import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import CheatSheets from "./pages/CheatSheets";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Main.js" component={Main} />
                    <Route
                        exact
                        path="/CheatSheets.js"
                        component={CheatSheets}
                    />
                    <Route exact path="/books/:id" component={Detail} />
                    <Route exact path="/About.js" component={About} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

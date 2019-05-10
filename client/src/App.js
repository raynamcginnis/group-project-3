import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import CheatSheets from "./pages/CheatSheets";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import "./App.css";
import Account from "./components/Account";
import Admin from "./components/Admin";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

console.log(API_KEY);
function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/Account" component={Account} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/SignIn" component={SignIn} />
                    <Route exact path="/SignOut" component={SignOut} />
                    <Route exact path="/SignUp" component={SignUp} />
                    <Route exact path="/Main.js" component={Main} />
                    <Route exact path="/CheatSheets.js" component={CheatSheets}
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

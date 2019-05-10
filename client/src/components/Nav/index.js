
import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Web Dev Cheat Sheets
      </a>
      <div className="navbar" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/Main.js">Main <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/CheatSheets.js">Cheat Sheets</a>
          <a className="nav-item nav-link" href="/About.js">About</a>
          <a className="nav-item nav-link" href="/SignIn">Sign In</a>
          {/* <a className="nav-item nav-link" href="/SignOut">Sign Out</a> */}
          <a className="nav-item nav-link" href="/SignUp">Sign Up</a>
          {/* <a className="nav-item nav-link" href="/About.js">Home</a>
          <a className="nav-item nav-link" href="/About.js">Account</a>
          <a className="nav-item nav-link" href="/About.js">Admin</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;

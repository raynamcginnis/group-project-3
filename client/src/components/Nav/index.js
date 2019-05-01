
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
          <a className="nav-item nav-link" href="/CheatSheets.js">Cheatsheets</a>
          <a className="nav-item nav-link" href="/About.js">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

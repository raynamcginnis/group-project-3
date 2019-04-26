
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

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// class Nav extends React.Component {
//   state = {
//     anchorEl: null,
//   };

//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { anchorEl } = this.state;

//     return (
//       <div>
//         <Button
//           aria-owns={anchorEl ? 'simple-menu' : undefined}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           Web Dev Cheat Sheets
//         </Button>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={this.handleClose}
//         >
//           <MenuItem onClick={this.handleClose}>Main</MenuItem>
//           <MenuItem onClick={this.handleClose}>Cheat Sheets</MenuItem>
//           <MenuItem onClick={this.handleClose}>About</MenuItem>
//         </Menu>
//       </div>
//     );
//   }
// }

// export default Nav;

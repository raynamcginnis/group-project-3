import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./style.css";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function SimpleMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div id="banner">
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                id="navBanner"
            >
                <HomeIcon
                    id="homeIcon"
                    color="primary"
                    fontSize="large"
                    component={svgProps => (
                        <svg {...svgProps}>
                            <defs>
                                <linearGradient id="gradient1">
                                    <stop offset="30%" stopColor={blue[400]} />
                                    <stop offset="70%" stopColor={red[400]} />
                                </linearGradient>
                            </defs>
                            {React.cloneElement(svgProps.children[0], {
                                fill: "url(#gradient1)"
                            })}
                        </svg>
                    )}
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    Menu
                </HomeIcon>
                <h1 className="text-white">WEB DEV CHEAT SHEETS</h1>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        {" "}
                        <a className="nav-item nav-link" href="/Main.js">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        {" "}
                        <a className="nav-item nav-link" href="/CheatSheets.js">
                            Cheat Sheets
                        </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        {" "}
                        <a className="nav-item nav-link" href="/About.js">
                            About
                        </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a className="nav-item nav-link" href="/SignIn">
                            Sign Out
                        </a>
                    </MenuItem>
                </Menu>
            </nav>
        </div>
    );
}

export default SimpleMenu;

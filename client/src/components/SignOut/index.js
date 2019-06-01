import React from "react";
import Nav from "../Nav";
import { withFirebase } from "../Firebase";

// setting the sign out button and exporting it
const SignOutButton = ({ firebase }) => (
    <div>
        {" "}
        <Nav />
        <button type="button" onClick={firebase.doSignOut}>
            Sign Out
        </button>
    </div>
);

export default withFirebase(SignOutButton);

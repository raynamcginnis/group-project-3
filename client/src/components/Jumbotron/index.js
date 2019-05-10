import React from "react";
import "./styles.css"

// the function setting the jumbotron style
function Jumbotron({ children }) {
    return (
        <div
            style={{
                clear: "both",
                textAlign: "center",
                maxWidth: "100%",
                height: "auto",
                padding: "auto"
            }}
            className="jumbotron fluid"
        >
            {children}
        </div>
    );
}

// exporting the jumbotron
export default Jumbotron;

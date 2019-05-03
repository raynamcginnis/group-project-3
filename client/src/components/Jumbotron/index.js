import React from "react";
import "./styles.css"

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

export default Jumbotron;

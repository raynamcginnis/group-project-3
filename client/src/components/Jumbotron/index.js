import React from "react";


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
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;

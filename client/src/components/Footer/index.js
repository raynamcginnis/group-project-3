import React from "react";


export function Footer() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <p
                    className="fixed-bottom text-center mb-0"
                    id="footer"
                    style={{
                        borderTop: ".5px solid grey",
                        color: "rgb(80, 122, 213)",
                        height: "25px"
                    }}
                >
                    Copyright 2019 &copy; |{" "}
                    <a
                        href="https://github.com/raynamcginnis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Rayna
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://github.com/belamorris"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Robert
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://github.com/TGHeadle1371"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Thomas
                    </a>{" "}
                </p>
            </div>
        </div>
    );
}

export default Footer;

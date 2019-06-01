import React from "react";
import Footer from "../components/Footer";
import NavBanner from "../components/NavBanner";

// sets the about page
function About() {
    return (
        <div>
            <NavBanner />
            <div className="m-4 pt-2 text-center">
                <h1>About Web Dev Cheat Sheets</h1>
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        {" "}
                        <p>
                            This application serves to be a <i> One Stop</i>{" "}
                            shop to find your quick references for common
                            programming languages and frameworks!
                        </p>
                        <p>
                            {" "}
                            Search for any cheat sheet on the{" "}
                            <strong>
                                <a href="/Main.js">Main</a>
                            </strong>{" "}
                            page!
                        </p>
                        <p>
                            {" "}
                            Upload your own cheat sheet in the{" "}
                            <strong>
                                <a href="/Cheatsheets.js">Cheat Sheets</a>
                            </strong>{" "}
                            page!
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default About;

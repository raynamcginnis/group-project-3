import React from "react";

function About() {
    return (
        <div className="m-4 pt-2 text-center">
            <h1>About Web Dev Cheat Sheets</h1>
            <br />
            <div className="row">
                <div className="col-sm-12">
                    {" "}
                    <p>
                        This application serves to be a <i> One Stop</i> shop to
                        find your quick references for common programming
                        languages and frameworks!
                    </p>
                    <p>
                        {" "}
                        Search for any cheat sheet on the{" "}
                        <strong><a href="/Main.js">Main</a></strong> page!
                    </p>
                    <p>
                        {" "}
                        Upload your own cheat sheet in the{" "}
                        <strong><a href="/Cheatsheets.js">Cheat Sheets</a></strong> page!
                    </p>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
              <p className="fixed-bottom text-center mt-4 mb-2 pt-2 pb-2" style={{borderTop:".5px solid grey",color:"rgb(80, 122, 213)", height:"25px"}}>Copyright 2019 &copy; | <a href="https://github.com/raynamcginnis" target="_blank">Rayna</a> | <a href="https://github.com/belamorris" target="_blank">Robert</a> | <a href="https://github.com/TGHeadle1371" target="_blank">Thomas</a> </p>
              </div>
            </div>
        </div>
    );
}

export default About;

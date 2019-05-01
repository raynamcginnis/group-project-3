import React from "react";

function About() {
    return (
        <div className="m-4 pt-2 text-center">
            <h1>About Page</h1>
            <br />
            <div className="row">
                <div className="col-sm-12">
                    {" "}
                    <p>
                        This application serves to be a <i> One Stop</i> shop to
                        find your quick references for common Programming
                        Languages and Frameworks!
                    </p>
                    <p>
                        {" "}
                        Search for a any cheat sheet on the{" "}
                        <strong>Main</strong> page!
                    </p>
                    <p>
                        {" "}
                        Upload your own cheat sheet in the{" "}
                        <strong>Cheatsheets</strong> page!
                    </p>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
              <p className="fixed-bottom text-center mt-4 mb-2 pt-2 pb-2" style={{borderTop:".5px solid grey",color:"rgb(80, 122, 213)", height:"25px"}}>Copyright 2019 &copy; | Rayna | Robert | Thomas </p>
              </div>
            </div>
        </div>
    );
}

export default About;

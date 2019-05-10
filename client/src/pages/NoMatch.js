import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <div className="row">
                    <div className="col-sm-12">
                        <p
                            className="fixed-bottom text-center mt-4 mb-2 pt-2 pb-2" id="footer"
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
    </Container>
  );
}

export default NoMatch;

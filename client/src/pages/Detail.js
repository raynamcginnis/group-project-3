import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
    state = {
        book: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getBook(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron
                            style={{
                                clear: "both",
                                textAlign: "center",
                                maxWidth: "100%",
                                height: "auto",
                                padding: "auto"
                            }}
                        >
                            <div>
                                <h3>{this.state.book.title}</h3>
                                <br></br>
                                <img
                                    style={{
                                        width: "500px",
                                        margin: "auto",
                                        maxWidth: "100%",
                                        height: "auto"
                                    }}
                                    alt="cheatsheet"
                                    placeholder={this.state.book.title}
                                    src={this.state.book.author}
                                />{" "}
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row style={{ whiteSpace: "nowrap" }}>
                    <Col size="md-2">
                        <Link to="/CheatSheets.js">← Back to Cheat Sheets</Link>
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
}

export default Detail;

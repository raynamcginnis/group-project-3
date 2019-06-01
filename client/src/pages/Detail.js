import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Footer from "../components/Footer";
import NavBanner from "../components/NavBanner";
import Rotate from "react-reveal/Rotate";

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
                <NavBanner />
                <Row>
                    <Col size="md-12">
                        <Rotate top left>
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
                                    <br />
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
                        </Rotate>
                    </Col>
                </Row>

                <Row style={{ whiteSpace: "nowrap" }}>
                    <Col size="md-2">
                        <Link to="/CheatSheets.js">← Back to Cheat Sheets</Link>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Detail;

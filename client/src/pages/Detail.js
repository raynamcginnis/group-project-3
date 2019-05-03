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
                        <Link to="/">← Back to Cheat Sheets</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;

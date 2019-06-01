import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import NavBanner from "../components/NavBanner";

// setting the page if theres no match from the search
function NoMatch() {
    return (
        <Container fluid>
            <NavBanner />
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <h1>
                            <span
                                role="img"
                                aria-label="Face With Rolling Eyes Emoji"
                            >
                                🙄
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default NoMatch;

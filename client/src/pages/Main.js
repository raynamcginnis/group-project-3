import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
class Main extends Component {
    state = {
        cheatsheets: [],
        title: ""
    };

    componentDidMount() {
        this.loadCheatSheets();
    }

    loadCheatSheets = () => {
        API.getBooks()
            .then(res => this.setState({ cheatsheets: res.data, title: "" }))
            .catch(err => console.log(err));
    };

    deleteCheatSheet = id => {
        API.deleteBook(id)
            .then(res => this.loadCheatSheets())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.saveCheatSheets({
                title: this.state.title
            })
                .then(res => this.loadCheatSheets())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h1>
                                {" "}
                                SEARCH FOR A CHEATSHEET BELOW!
                            </h1>
                        </Jumbotron>
                        <form>
                            <Input
                                defaultValue={this.state.value}
                                onChange={this.handleInputChange}
                                name="cheatSheet"
                                placeholder="Language or Framework (required)"
                            />
                            <FormBtn
                                active={!this.state.title}
                                onClick={this.handleFormSubmit}
                            >
                                Search for CheatSheet
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;

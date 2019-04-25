import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
class CheatSheets extends Component {
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
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search for a cheat sheet</h1>
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
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Cheatsheets List</h1>
                        </Jumbotron>
                        {this.state.cheatsheets.length ? (
                            <List>
                                {this.state.cheatsheets.map(cheatsheet => (
                                    <ListItem key={cheatsheet._id}>
                                        <Link
                                            to={
                                                "/cheatsheets/" + cheatsheet._id
                                            }
                                        >
                                            <strong>
                                                {cheatsheet.title} by{" "}
                                                {cheatsheet.author}
                                            </strong>
                                        </Link>
                                        <DeleteBtn
                                            onClick={() =>
                                                this.deleteCheatSheet(
                                                    cheatsheet._id
                                                )
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CheatSheets;

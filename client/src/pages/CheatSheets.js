import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
class Books extends Component {
    state = {
        books: [],
        title: "",
        author: ""
    };

    componentDidMount() {
        this.loadBooks();
    }
    // loads cheetsheets from the database
    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data,
                    title: "",
                    author: ""
                })
            )
            .catch(err => console.log(err));
    };

    // delete function for deleting a cheatsheet from the database
    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    // saves a new cheatsheet to the database
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };
    // sets the cheatsheets page
    render() {
        return (
            <Container fluid>
                <br />
                <Row>
                    <Col size="md-6">
                        <Jumbotron style={{ minHeight: "150px" }}>
                            <h1>Save a new Cheat Sheet below</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Language name (required)"
                            />
                            <Input
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Image url (required)"
                            />
                            <FormBtn
                                style={{
                                    textAlign: "center",
                                    transform: "translate(20%, 0%"
                                }}
                                disabled={
                                    !(this.state.author && this.state.title)
                                }
                                onClick={this.handleFormSubmit}
                            />
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron style={{ minHeight: "150px" }}>
                            <h1>Cheat Sheets List</h1>
                        </Jumbotron>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <DeleteBtn
                                            onClick={() =>
                                                this.deleteBook(book._id)
                                            }
                                        />
                                        <Link to={"/books/" + book._id}>
                                            <div className="text-center">
                                                {<h3>{book.title}</h3>}
                                                <img
                                                    style={{
                                                        height: "200px",
                                                        width: "150px"
                                                    }}
                                                    alt="cheatsheet"
                                                    placeholder={book.title}
                                                    src={book.author}
                                                />
                                            </div>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-sm-12">
                        <p
                            className="fixed-bottom text-center mb-0"
                            id="footer"
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

export default Books;

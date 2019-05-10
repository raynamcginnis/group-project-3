import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import GoogleSearch from "../components/GoogleSearch";

// sets the initial state of main page component
class Main extends Component {
    state = {
        books: [],
        title: "",
        author: ""
    };


<<<<<<< HEAD


=======
   
    // loads cheatsheets from database
>>>>>>> master
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "" })
            )
            .catch(err => console.log(err));
    };

        //deletes cheatsheets
    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    // searches the database for cheatsheet
    findById = id => {
        API.findById(id)
            .then(res =>
                this.loadBooks({ books: res.data, title: "", author: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handles the submit event for searching for cheatsheets
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.findByTitle({
                title: this.state.title
            })
                .then(res => this.setState({ books: res.data, title: "" }))
                .catch(err => console.log(err));
        }
    };

    //sets the main page setup
    render() {
        return (
            <Container fluid>
            <br></br>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h1> SEARCH FOR A CHEAT SHEET BELOW!</h1>
                        </Jumbotron>
                        {/* <Input
                            name="title"
                            type="text"
                            placeholder="Type a language here"
                            defaultValue={this.state.title}
                            onChange={this.handleInputChange}
                        />
                        <FormBtn
                            disabled={!this.state.title}
                            onClick={this.handleFormSubmit}
                        />
                        <br>
                        </br> */}
                        <GoogleSearch
                        />
                        <br />
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <strong>{book.title}</strong>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
                <div>
                    
                </div>
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



export default Main;
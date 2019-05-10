import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class Form extends Component {
    // Setting the component's initial state
    state = {
        books: [],
        title: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        this.loadBooks();
    }
    // loads everthing from our mongo database
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.saveBook({
                title: this.state.title
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "" })
            )
            .catch(err => console.log(err));
    };

    // finds our cheetsheets in the mongo database
    findById = id => {
        API.findById(id)
            .then(res =>
                this.loadBooks({ books: res.data, title: "", author: "" })
            )
            .catch(err => console.log(err));
    };
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.title}
                        name="Language"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <button onClick={this.loadBooks}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;

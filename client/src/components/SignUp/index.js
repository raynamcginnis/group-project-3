import React, { Component } from "react";
import { FirebaseContext } from "../Firebase";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Nav from "../Nav";
import Flash from "react-reveal/Flash";
require("dotenv").config();

// setting the sign up page
const SignUpPage = () => (
    <div>
        <Nav />
        <Flash>
            <div className="text-center mt-5" id="signInForm">
                <h1>Sign Up</h1>
                <FirebaseContext.Consumer>
                    {firebase => <SignUpForm firebase={firebase} />}
                </FirebaseContext.Consumer>
            </div>
        </Flash>
    </div>
);

// setting the intial state of the sign up form
const INITIAL_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    // on submit event that sets the email and password to the firbase database
    onSubmit = event => {
        const { email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { username, email, passwordOne, passwordTwo, error } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === "" ||
            email === "" ||
            username === "";
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.onSubmit}>
                            <input
                                id="inputs"
                                name="username"
                                value={username}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Full Name"
                            />
                            <br />
                            <input
                                id="inputs"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Email Address"
                            />
                            <br />
                            <input
                                id="inputs"
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <input
                                id="inputs"
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <br />
                            <button
                                className="btn-primary mt-3"
                                disabled={isInvalid}
                                type="submit"
                            >
                                Sign Up
                            </button>

                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// sets the sign up link
const SignUpLink = () => (
    <p>
        If you dont have an account?
        <a className="nav-item nav-link" id="signupLink" href="/signup">
            Sign Up
        </a>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// exports sign up page
export default SignUpPage;

// exports sign up form and link
export { SignUpForm, SignUpLink };

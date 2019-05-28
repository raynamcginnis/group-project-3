import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import Nav from "../Nav";

// setting up the sign in page
const SignInPage = () => (
    <div>
        {" "}
        <Nav />
        <div className="text-center mt-5" id="signInForm">
            <h1>Sign In</h1>
            <SignInForm />
            <SignUpLink />
        </div>
    </div>
);

// setting the initial state of the sign in form
const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    // the on submit event
    onSubmit = event => {
        const { email, password } = this.state;
        // checks to see if sign in is valid and routes to the home page
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
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

    // renders the sign in form
    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === "" || email === "";

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={this.onSubmit} id="formInputs">
                                <input
                                    id={"inputs"}
                                    name="email"
                                    value={email}
                                    onChange={this.onChange}
                                    type="text"
                                    placeholder="Email Address"
                                />
                                <input
                                    id="inputs"
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    type="password"
                                    placeholder="Password"
                                />
                                <button
                                    className="btn-primary mt-3"
                                    disabled={isInvalid}
                                    type="submit"
                                >
                                    Sign In
                                </button>
                                {error && <p>{error.message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase);
//exports sign in page
export default SignInPage;
// exports sign in form
export { SignInForm };

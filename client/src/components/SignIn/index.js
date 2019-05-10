import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
    <div className="text-center mt-5" id="signInForm">
        <h1>SignIn</h1>
        <SignInForm />
        <SignUpLink />
    </div>
);

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

    onSubmit = event => {
        const { email, password } = this.state;

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

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === "" || email === "";

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={this.onSubmit} id="signInInputs">
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
                            <button className="btn-primary mt-3" disabled={isInvalid} type="submit">
                                Sign In
                            </button>
                            {error && <p>{error.message}</p>}
                        </form>
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

export default SignInPage;

export { SignInForm };
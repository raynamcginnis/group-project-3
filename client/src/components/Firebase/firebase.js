// importing firebase components  
import app from "firebase/app";
import "firebase/auth";

// setting the API config for firebase from the dotenv file
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***
    // setting requirments for new user sign up
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    // send email for password reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    // update new password
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

// export firebase
export default Firebase;

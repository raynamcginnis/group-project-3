// Importing react
import React from 'react';
// Setting the firebase context 
const FirebaseContext = React.createContext(null);

// exporting const withFirebase 
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

// exporting firebasecontext
export default FirebaseContext;
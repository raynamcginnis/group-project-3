import React from 'react';

import { withFirebase } from '../Firebase';

// setting the sign out button and exporting it
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
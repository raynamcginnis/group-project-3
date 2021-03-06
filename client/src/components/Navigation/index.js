import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
// setting the routes for the sign in page
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;

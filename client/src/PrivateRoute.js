import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  // a 'token' saved to localStorage is considered being logged in
  // if the token is present, the user is logged in. If it's undefined, the user is not logged in
  // if loggedIn => display the component (children)
  // if not loggedIn => redirect to Login and pass the current location

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
}
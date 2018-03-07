import React from 'react';
import { Route, Redirect } from 'react-router';

// Utils
import auth from '../../../util/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.getToken() !== null ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: 'auth/login',
        state: { from: props.location }
        }}
      />
    )
  )}
  />
);

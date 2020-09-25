// reference :
// https://ui.dev/react-router-v4-protected-routes-authentication/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      authedUser !== null ? <Component {...props} /> : <Redirect to='/login' />
    }
  />;
};

function mapStateToProps(state) {
  console.log(state);
  return {
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users,
  };
}

export default connect(mapStateToProps)(PrivateRoute);

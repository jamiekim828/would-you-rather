import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Question from './Question';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log('app props', this.props);
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className='container'>
            <Route
              path='/'
              exact
              component={Question}
              questions={this.props.questions}
            />
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser,
  };
};

export default connect(mapStateToProps)(App);

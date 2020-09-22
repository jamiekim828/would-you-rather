import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { getInitialQuestions } from '../actions/questions';
import Nav from './Nav';
import Question from './Question';

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData());
    this.props.dispatch(getInitialQuestions());
  }

  render() {
    console.log(
      'app props.questions',
      this.props.questions,
      'app props.users',
      this.props.users
    );
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className='container'>
            <Route path='/' exact component={Question} />
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

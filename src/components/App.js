import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { getInitialQuestions } from '../actions/questions';
import Nav from './Nav';
import Questions from './Questions';
import QuestionDetail from './QuestionDetail';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialQuestions());
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(
      'app:  props.questionsArray',
      this.props.questionsArray,
      'app:  props.users',
      this.props.users
    );

    const questions = this.props.questionsArray;

    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            <div>
              <Route path='/' exact component={Questions} />
              <Route path='/questions/:id' component={QuestionDetail} />
              <Route path='/add' component={NewQuestion} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const questions = state.questions;
  const questionsArray = Object.keys(questions).map((key) => questions[key]);

  return {
    questionsArray,
    users: state.users,
    authedUser: state.authedUser,
  };
};

export default connect(mapStateToProps)(App);

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { getInitialQuestions } from '../actions/questions';
import NavMenu from './NavMenu';
import Questions from './Questions';
import QuestionDetail from './QuestionDetail';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import LoginPage from './LoginPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialQuestions());
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          {authedUser == null ? (
            <div className='container'>
              {' '}
              <NavMenu />
              <div>
                <Switch>
                  <Route path='/' component={LoginPage} />
                </Switch>
              </div>
            </div>
          ) : (
            <div className='container'>
              <NavMenu />
              <div>
                <Switch>
                  <Route path='/' exact component={Questions} />
                  <Route path='/questions/:id' component={QuestionDetail} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </Switch>
              </div>
            </div>
          )}
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

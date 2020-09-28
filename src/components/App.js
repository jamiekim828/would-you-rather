import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { getInitialQuestions } from '../actions/questions';
import NavMenu from './NavMenu';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import LoginPage from './LoginPage';
import Home from './Home';
import QuestionView from './QuestionView';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialQuestions());
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    console.log('app', this.props.questionsArray, authedUser);

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
                  <Route path='/' exact component={Home} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/questions/:id' component={QuestionView} />
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

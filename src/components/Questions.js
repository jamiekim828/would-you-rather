import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialQuestions } from '../actions/questions';
import { Link } from 'react-router-dom';

class Questions extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialQuestions());
  }

  render() {
    const {
      questions,
      questionsArray,
      users,
      currentUser,
      usersArray,
      authedUser,
    } = this.props;
    console.log(
      'questions',
      questions,
      'questionsArray',
      questionsArray,
      'users',
      users,
      'currentUser',
      currentUser,
      'usersArray',
      usersArray,
      'authedUser',
      authedUser
    );

    const question = this.props.question;
    console.log('q', question);

    if (!questionsArray) {
      return <p>No questions exist</p>;
    }

    return (
      <div className='questionInfo'>
        <div className='questionPreview'>
          <div className='q-author'>{users[question.author].name} asks: </div>
          <div className='avatar'>
            <img
              className='user-avatar'
              alt={`avatar of ${question.author}`}
              src={users[question.author].avatarURL}
            />
          </div>
          <div className='info'>
            <h3 className='wouldyourather'>Would you rather</h3>
            <p>...{question.optionOne.text}...</p>
            <Link to={`/questions/${question.id}`}>
              <button className='btn-viewDetail'>View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { question }) {
  const questions = state.questions;
  const questionsArray = Object.keys(questions).map((key) => questions[key]);
  const users = state.users;
  const usersArray = Object.entries(users).map((u) => u[1]);
  const authedUser = state.authedUser;
  const currentUser = users[authedUser];
  console.log({ question });

  return {
    questionsArray,
    users,
    authedUser,
    currentUser,
    usersArray,
  };
}

export default connect(mapStateToProps)(Questions);

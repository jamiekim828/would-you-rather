import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialQuestions } from '../actions/questions';
import { handleInitialData } from '../actions/shared';
import { Link } from 'react-router-dom';

class Questions extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    this.props.dispatch(getInitialQuestions());
  }

  render() {
    console.log('questions props', this.props);
    const questions = this.props.questionsArray;
    const users = this.props.users;
    console.log(questions, users);

    if (questions === null) {
      return <p>No questions exist.</p>;
    }

    return (
      <div className='questionInfo'>
        {questions ? (
          questions.map((question) => (
            <li key={question.id}>
              <div className='q-author'>{question.author} asks: </div>
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
                <Link to={`/questions/${questions.id}`}>
                  <button className='btn-viewDetail'>View Poll</button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <p>no questions</p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('msp', state);
  const questions = state.questions;
  const questionsArray = Object.keys(questions).map((key) => questions[key]);
  const users = state.users;

  return { questionsArray, users };
}

export default connect(mapStateToProps)(Questions);
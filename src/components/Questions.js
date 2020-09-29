import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Questions extends Component {
  render() {
    const { questionsArray, users } = this.props;

    const question = this.props.question;

    if (!questionsArray) {
      return <p>No questions exist</p>;
    }

    return (
      <div className='questionInfo'>
        <div className='questionPreview'>
          <div className='q-author'>{users[question.author].name} asks: </div>
          <div className='q-info'>
            <div className='qinfo-avatar'>
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
      </div>
    );
  }
}

function mapStateToProps(state, { question }) {
  const questions = state.questions;
  const questionsArray = Object.keys(questions).map((id) => questions[id]);
  const users = state.users;
  const usersArray = Object.entries(users).map((u) => u[1]);
  const authedUser = state.authedUser;
  const currentUser = users[authedUser];

  return {
    questionsArray,
    users,
    authedUser,
    currentUser,
    usersArray,
  };
}

export default connect(mapStateToProps)(Questions);

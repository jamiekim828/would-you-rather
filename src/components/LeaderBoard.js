import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
  render() {
    const users = this.props.usersList;

    return (
      <div>
        {users.map((user) => (
          <div key={user.id} className='leaderboard-container'>
            <div>
              <img
                id='leaderboard-img'
                alt={`${user.id} avatar`}
                src={user.avatarURL}
              />
            </div>
            <div id='leaderboard-info'>
              <h2>{user.name}</h2>
              <h4 id='leader-q'>
                Answered questions : {Object.keys(user.answers).length}
              </h4>
              <h4 id='leader-q'>Created questions : {user.questions.length}</h4>
            </div>
            <div id='leaderboard-score'>
              <h4>Score</h4>
              <p id='score'>
                {Object.keys(user.answers).length + user.questions.length}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const users = state.users;
  const usersList = Object.entries(users).map((e) => e[1]);
  const questions = state.questions;

  return { usersList, questions };
}

export default connect(mapStateToProps)(LeaderBoard);

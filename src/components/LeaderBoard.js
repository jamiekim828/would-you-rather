import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
  render() {
    const users = this.props.usersList;
    const questions = this.props.questions;
    console.log(users, questions);

    return (
      <div>
        {users.map((user) => (
          <div>
            <div>
              <img alt={`${user.id} avatar`} src={user.avatarURL} />
            </div>
            <div>
              <h2>{user.name}</h2>
              <h4>Answered questions : {Object.keys(user.answers).length}</h4>
              <h4>Created questions : {user.questions.length}</h4>
            </div>
            <div>
              <h4>Score</h4>
              <p>{Object.keys(user.answers).length + user.questions.length}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('?', state);
  const users = state.users;
  const usersList = Object.entries(users).map((e) => e[1]);
  const questions = state.questions;

  return { usersList, questions };
}

export default connect(mapStateToProps)(LeaderBoard);

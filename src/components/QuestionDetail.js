import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';

class QuestionDetail extends Component {
  render() {
    const {
      question,
      OneVote,
      TwoVote,
      totalVote,
      voteOnePerc,
      voteTwoPerc,
      users,
      authedUser,
    } = this.props;

    console.log(question, authedUser);

    return (
      <div className='questiondetail-container'>
        <div className='questiondetail-title'>
          Asked by {users[question.author].name} :
        </div>
        <div className='questiondetail-info'>
          <div className='questiondetail-avatar'>
            <img
              className='user-avatar'
              alt={users[question.author].avatarURL}
              src={users[question.author].avatarURL}
            />
          </div>
          <div className='questiondetail-content'>
            <h2>Results:</h2>
            <div className='questiondetail-optionOne'>
              <div>
                {question.optionOne.votes.includes(authedUser) ? (
                  <p id='yourchoice'>You chose this!</p>
                ) : null}
              </div>
              <p className='detail-q'>
                Would you rather {question.optionOne.text}?
              </p>
              <div className='ui blue progress' id='q-percentage'>
                <p>{voteOnePerc}%</p>
                <ProgressBar percentage={voteOnePerc} />
                <div className='label'>
                  {OneVote} out of {totalVote}votes
                </div>
              </div>
            </div>
            <div className='questiondetail-optionTwo'>
              <div>
                {question.optionTwo.votes.includes(authedUser) ? (
                  <p id='yourchoice'>You chose this!</p>
                ) : null}
              </div>
              <p className='detail-q'>
                Would you rather {question.optionTwo.text}?
              </p>
              <div className='ui blue progress' id='q-percentage'>
                <p>{voteTwoPerc}%</p>
                <ProgressBar percentage={voteTwoPerc} />
                <div className='label'>
                  {TwoVote} out of {totalVote} votes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const id = props.id;
  const question = state.questions[id];
  const OneVote = question.optionOne.votes.length;
  const TwoVote = question.optionTwo.votes.length;
  const totalVote = OneVote + TwoVote;
  const voteOnePerc = (
    (question.optionOne.votes.length / totalVote) *
    100
  ).toFixed(2);
  const voteTwoPerc = 100 - voteOnePerc;
  const users = state.users;
  const authedUser = state.authedUser;

  return {
    question,
    OneVote,
    TwoVote,
    totalVote,
    voteOnePerc,
    voteTwoPerc,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionDetail);

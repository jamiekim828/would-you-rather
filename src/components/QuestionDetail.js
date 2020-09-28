import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    } = this.props;

    return (
      <div className='questiondetail-container'>
        <div className='questiondetail-title'>
          Asked by {users[question.author].name} :
        </div>
        <div className='questiondetail-info'>
          <div className='questiondetail-avatar'>
            <img
              className='user-avatar'
              src={users[question.author].avatarURL}
            />
          </div>
          <div className='questiondetail-content'>
            <h2>Results:</h2>
            <div className='questiondetail-optionOne'>
              <p className='detail-q'>
                Would you rather {question.optionOne.text}?
              </p>
              <div className='questiondetail-bar'></div>
              <p>{voteOnePerc}%</p>
              <p className='q-percentage'>
                {' '}
                {OneVote} out of {totalVote} votes
              </p>
            </div>
            <div className='questiondetail-optionTwo'>
              <p className='detail-q'>
                Would you rather {question.optionTwo.text}?
              </p>
              <div className='questiondetail-bar'></div>
              <p>{voteTwoPerc}%</p>
              <p className='q-percentage'>
                {' '}
                {TwoVote} out of {totalVote} votes
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('details msp', state, props);
  const id = props.id;
  const question = state.questions[id];

  const OneVote = question.optionOne.votes.length;
  const TwoVote = question.optionTwo.votes.length;
  const totalVote = OneVote + TwoVote;
  const voteOnePerc = (question.optionOne.votes.length / totalVote) * 100;
  const voteTwoPerc = 100 - voteOnePerc;

  const users = state.users;

  return {
    question,
    OneVote,
    TwoVote,
    totalVote,
    voteOnePerc,
    voteTwoPerc,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetail);

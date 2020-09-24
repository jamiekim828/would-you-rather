import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetail extends Component {
  render() {
    var {
      question,
      OneVote,
      TwoVote,
      totalVote,
      voteOnePerc,
      voteTwoPerc,
    } = this.props;

    return (
      <div className='questiondetail-container'>
        <div className='questiondetail-title'>Asked by {question.author}</div>
        <div className='questiondetail-info'>
          <div className='questiondetail-avatar'>
            <img />
          </div>
          <div className='questiondetail-info'>
            <h2>Results:</h2>
            <div className='questiondetail-optionOne'>
              <p>Would you rather</p>
              <div className='questiondetail-bar'>
                {question.optionOne.text}
              </div>
              <p>{voteOnePerc}%</p>
              <p>
                {' '}
                {OneVote} out of {totalVote} votes
              </p>
            </div>
            <div className='questiondetail-optionTwo'>
              <p>Would you rather</p>
              <div className='questiondetail-bar'>
                {question.optionTwo.text}
              </div>
              <p>{voteTwoPerc}%</p>
              <p>
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
  const id = props.match.params.id;
  const question = state.questions[id];

  const OneVote = question.optionOne.votes.length;
  const TwoVote = question.optionTwo.votes.length;
  const totalVote = OneVote + TwoVote;
  const voteOnePerc = (question.optionOne.votes.length / totalVote) * 100;
  const voteTwoPerc = 100 - voteOnePerc;

  return {
    question,
    OneVote,
    TwoVote,
    totalVote,
    voteOnePerc,
    voteTwoPerc,
  };
}

export default connect(mapStateToProps)(QuestionDetail);

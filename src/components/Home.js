import React, { Component } from 'react';
import { connect } from 'react-redux';
import Questions from './Questions';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  state = { answeredTab: false };

  handleClickTab = (e) => {
    this.setState((state) => ({ answeredTab: !state.answeredTab }));
  };

  render() {
    const {
      questions,
      authedUser,
      users,
      answeredQuestions,
      unansweredQuestions,
    } = this.props;

    console.log(
      'home',
      questions,
      authedUser,
      users,
      answeredQuestions,
      unansweredQuestions
    );

    if (this.props.authedUser === null) {
      return <Redirect to='/' />;
    }

    return (
      <div className='home'>
        <div className='tab'>
          <button onClick={this.handleClickTab} className='tabbutton'>
            {this.state.answeredTab === true
              ? 'Answered Questions'
              : 'Unanswered questions'}
          </button>
        </div>
        {this.state.answeredTab === true ? (
          <div className='tabitem'>
            {answeredQuestions.map((answered) => (
              <div>
                <Questions question={answered} id={answered.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className='tabitem'>
            {unansweredQuestions.map((unanswered) => (
              <div>
                <Questions question={unanswered} id={unanswered.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const questions = state.questions;
  const authedUser = state.authedUser;
  const users = Object.values(state.users);

  let answeredQuestions = Object.values(questions).filter(
    (q) =>
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
  );

  let unansweredQuestions = Object.values(questions).filter(
    (q) =>
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
  );

  return {
    questions,
    authedUser,
    users,
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);

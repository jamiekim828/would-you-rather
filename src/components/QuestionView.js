import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionDetail from './QuestionDetail';
import QuestionAnswer from './QuestionAnswer';

class QuestionView extends Component {
  render() {
    const { authedUser, vote1, vote2, id, question } = this.props;

    return (
      <div className='detail-container'>
        {vote1.includes(authedUser) || vote2.includes(authedUser) ? (
          <QuestionDetail question={question} id={id} />
        ) : (
          <QuestionAnswer question={question} id={id} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const authedUser = state.authedUser;
  const id = props.match.params.id;
  const question = state.questions[id];
  const vote1 = question.optionOne.votes;
  const vote2 = question.optionTwo.votes;

  return { authedUser, vote1, vote2, question, id };
}

export default connect(mapStateToProps)(QuestionView);

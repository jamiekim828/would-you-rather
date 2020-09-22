import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitialQuestions } from '../actions/questions';
import Nav from './Nav';

class Question extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialQuestions());
  }

  render() {
    console.log('questions props', this.props);
    const questions = this.props.questionsArray;
    console.log(questions);

    return (
      <div className='questionInfo'>
        {questions ? (
          questions.map((question) => (
            <li key={question.id}>
              <div className='q-author'>{question.author} asks: </div>
              <div className='avatar'>
                <img className='user-avatar' alt='user avatar' />
              </div>
              {/* <div className='info'>
                <h3 className='wouldyourather'>Would you rather</h3>
                <p>...{question.optionOne}...</p>
                <button className='btn-viewDetail'>View Poll</button>
              </div> */}
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

  return { questionsArray };
}

export default connect(mapStateToProps)(Question);

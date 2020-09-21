import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveQuestions } from '../actions/questions';

class Question extends Component {
  componentDidMount() {
    this.props.dispatch(receiveQuestions());
  }

  render() {
    console.log('questions props', this.props);
    const questions = this.props.questions;
    return (
      <div className='questionInfo'>
        <div className='q-author'>{questions.author} asks : </div>
        <div className='avatar'>
          <img className='user-avatar' alt='user avatar' />
        </div>
        <div className='info'>
          <h3 className='wouldyourather'>Would you rather</h3>
          <p>...{questions.optionOne}...</p>
          <button className='btn-viewDetail'>View Poll</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(mapStateToProps)(Question);

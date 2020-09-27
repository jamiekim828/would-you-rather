import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionAnswer extends Component {
  render() {
    const { question } = this.props;

    return (
      <div className='questiondetail-container'>
        <div className='questiondetail-title'>{question.author} asks:</div>
        <div className='questiondetail-info'>
          <div className='questiondetail-avatar'>
            <img />
          </div>
          <form action=''>
            <h3>Would you rather</h3>
            {/* <div className='questiondetail-optionOne'>
              <input type='radio' className='questiondetail-bar'>
                {question.optionOne.text}
              </input>
            </div>
            <div className='questiondetail-optionTwo'>
              <input type='radio' className='questiondetail-bar'>
                {question.optionTwo.text}
              </input>
            </div>
            <input type='submit'>Submit</input> */}
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('details msp', state, props);
  const id = props.id;
  const question = state.questions[id];

  return {
    question,
  };
}

export default connect(mapStateToProps)(QuestionAnswer);

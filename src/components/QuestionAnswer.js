import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class QuestionAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      toDetail: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleSaveAnswer(this.props.question.id, this.state.answer)
    );
    this.setState({ answer: this.state.answer, toDetail: true });
  };

  render() {
    const { question, users } = this.props;

    if (this.state.toDetail === true) {
      return <Redirect to={`/questions/${question.id}`} />;
    }

    return (
      <div className='questiondetail-container'>
        <div className='questiondetail-title'>
          {users[question.author].name} asks:
        </div>
        <div className='questiondetail-info'>
          <div className='questiondetail-avatar'>
            <img
              alt={users[question.author].avatarURL}
              src={users[question.author].avatarURL}
            />
          </div>
          <form className='questionform' onSubmit={this.handleSubmit}>
            <h3>Would you rather . . .</h3>
            <div className='questiondetail-optionOne'>
              <input
                checked={this.state.answer === 'optionOne'}
                type='radio'
                name='answer'
                value='optionOne'
                onChange={this.handleChange}
              />
              {question.optionOne.text} ?
            </div>
            <div className='questiondetail-optionTwo'>
              <input
                checked={this.state.answer === 'optionTwo'}
                type='radio'
                name='answer'
                value='optionTwo'
                onChange={this.handleChange}
              />
              {question.optionTwo.text} ?
            </div>
            <button className='questionanswer-submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const id = props.id;
  const question = state.questions[id];
  const authedUser = state.authedUser;
  const users = state.users;

  return {
    question,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionAnswer);

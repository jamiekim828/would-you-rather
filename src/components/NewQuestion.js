import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionOne: '',
      optionTwo: '',
      toHome: false,
    };

    this.handleOptionOne = this.handleOptionOne.bind(this);
    this.handleOptionTwo = this.handleOptionTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionOne(e) {
    this.setState({ optionOne: e.target.value });
  }

  handleOptionTwo(e) {
    this.setState({ optionTwo: e.target.value });
  }
  d;
  handleSubmit(e) {
    e.preventDefault();

    console.log('submit', this.state);

    this.props.dispatch(
      handleAddQuestion(this.state.optionOne, this.state.optionTwo)
    );

    this.setState(
      {
        optionOne: this.state.optionOne,
        optionTwo: this.state.optionTwo,
        toHome: true,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <h2>Create New Question</h2>
        <h4>Complete the question</h4>
        <h3>Would you rather ...</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Write option one here'
            onChange={this.handleOptionOne}
            value={this.state.optionOne}
          />
          <h4>or</h4>
          <input
            type='text'
            placeholder='Write option two here'
            onChange={this.handleOptionTwo}
            value={this.state.optionTwo}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);

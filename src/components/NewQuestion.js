import React, { Component } from 'react';

class NewQuestion extends Component {
  state = {
    option1: '',
    option2: '',
  };

  render() {
    return (
      <div>
        <h2>Create New Question</h2>
        <h4>Complete the question</h4>
        <h3>Would you rather ...</h3>
        <input />
        <h4>or</h4>
        <input />
      </div>
    );
  }
}

export default NewQuestion;

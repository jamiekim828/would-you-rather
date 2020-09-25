import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return <div></div>;
  }
}

function mapStateToProps(state) {
  console.log('leader', state);
  const users = state.users;
  return { users };
}

export default connect(mapStateToProps)(LeaderBoard);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { setAuthedUser } from '../actions/authedUser';

class LoginPage extends Component {
  state = { userId: '' };

  handleChange = (e) => {
    this.setState({ userId: e.target.value });
  };

  handleAuthedUser = (e) => {
    e.preventDefault();
    if (this.state.userId !== '') {
      this.props.dispatch(setAuthedUser(this.state.userId));
    }
  };

  render() {
    const usersKey = this.props.usersKey;

    return (
      <div className='login'>
        <header>Welcome to the Would You Rather App!</header>

        <div>
          <img src={logo} alt='logo' className='login-logo' />
        </div>
        <h1> Sign In</h1>
        <form className='login-form' onSubmit={this.handleAuthedUser}>
          <select onChange={this.handleChange} value={this.state.userId}>
            <option>Select User</option>
            {usersKey.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <button onClick={this.handleAuthedUser}>Sign in</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const users = state.users;
  const usersKey = Object.keys(users).map((key) => users[key]);

  return { users, usersKey };
}

export default connect(mapStateToProps)(LoginPage);

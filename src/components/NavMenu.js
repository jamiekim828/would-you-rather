import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Navbar, Nav } from 'react-bootstrap';

class NavMenu extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    const { authedUser, currentUser, auth } = this.props;
    console.log(this.props);
    console.log(
      'authedUser',
      authedUser,
      'currentUser',
      currentUser,
      'auth',
      auth
    );

    return (
      <Navbar>
        <Nav>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leader Board
                </NavLink>
              </li>
            </ul>
          </nav>
        </Nav>

        {auth === true ? (
          <div className='currentUser'>
            <p className='currentUserGreet'>Hello, {currentUser.name}</p>
            <img src={currentUser.avatarURL} />
            <NavLink to='/login' onClick={this.logout}>
              Logout
            </NavLink>
          </div>
        ) : (
          <h4>Please sign in to continue</h4>
        )}
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  const authedUser = state.authedUser;
  const users = state.users;
  const currentUser = users[authedUser];

  if (authedUser == null)
    return {
      currentUser: null,
    };

  return { authedUser, currentUser, auth: authedUser !== null ? true : false };
}

export default connect(mapStateToProps)(NavMenu);

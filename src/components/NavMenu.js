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

    let isActive;

    return (
      <Navbar className='navbarcontainer'>
        <Nav>
          <nav className='nav'>
            <div className='navdiv'>
              <li className='navlist'>
                <NavLink to='/' exact className={isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li className='navlist'>
                <NavLink to='/add' className={isActive ? 'active' : ''}>
                  New Question
                </NavLink>
              </li>
              <li className='navlist'>
                <NavLink to='/leaderboard' className={isActive ? 'active' : ''}>
                  Leader Board
                </NavLink>
              </li>
            </div>
          </nav>
        </Nav>

        {auth === true ? (
          <div className='currentUser'>
            <p className='currentUserGreet'>Hello, {currentUser.name}</p>
            <img className='navavatar' src={currentUser.avatarURL} />
            <NavLink to='/login' onClick={this.logout} className='logout'>
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

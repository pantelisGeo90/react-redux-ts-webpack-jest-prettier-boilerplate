import * as React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <NavLink to="/">ToDos</NavLink> | <NavLink to="/profile">Profile</NavLink> |{' '}
        <NavLink to="/settings">Settings</NavLink>
      </>
    );
  }
}

export default NavBar;

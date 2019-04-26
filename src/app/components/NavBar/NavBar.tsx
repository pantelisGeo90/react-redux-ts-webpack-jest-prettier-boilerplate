import * as React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <NavLink to="/">ToDos</NavLink> | <NavLink to="/profile">Profile</NavLink>
      </>
    );
  }
}

export default NavBar;

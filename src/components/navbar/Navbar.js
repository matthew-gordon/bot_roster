import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ appName }) => {
  return (
    <nav className="navbar navbar-light bg-white navbarshadow">
      <NavLink className="navbar-brand" to="/">{appName.toLowerCase()}</NavLink>
      <ul className="nav justify-content-end">
        <li className="nav-item text-center">
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

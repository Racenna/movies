import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/genres" activeClassName="active">
            Genres
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommended" activeClassName="active">
            Recommended
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

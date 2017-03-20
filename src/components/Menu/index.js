import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Menu = () => (
  <div className="menu-w">
    <a className="travis-badge" href="https://travis-ci.org/dadish/seed" target="_blank"><img src="https://api.travis-ci.org/dadish/seed.svg?branch=master" alt="Travis-CI"/></a>
    <ul className="menu-l">
      <li className="menu-i">
        <NavLink className="menu-ia" activeClassName="menu-ia--active" exact to="/">Home</NavLink>
      </li>
      <li className="menu-i">
        <NavLink className="menu-ia" activeClassName="menu-ia--active" to="/about">About</NavLink>
      </li>
      <li className="menu-i">
        <NavLink className="menu-ia" activeClassName="menu-ia--active" to="/search">Go Search</NavLink>
      </li>
  </ul>
  </div>
);

export default Menu;
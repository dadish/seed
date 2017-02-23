import React from 'react';
import { Link } from 'react-router';
import './style.css';

const Menu = () => (
  <div className="menu-w">
    <img className="travis-badge" src="https://api.travis-ci.org/dadish/seed.svg?branch=master" alt="Travis-CI"/>
    <ul className="menu-l">
      <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/">Home</Link></li>
      <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/about">About</Link></li>
      <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/liveSearch">LiveSearch</Link></li>
  </ul>
  </div>
);

export default Menu;
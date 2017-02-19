import React from 'react';
import { Link } from 'react-router';
import './style.css';

const Menu = () => (
  <ul className="menu-l">
    <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/">Home</Link></li>
    <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/about">About</Link></li>
    <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/todo">Todo</Link></li>
  </ul>
);

export default Menu;
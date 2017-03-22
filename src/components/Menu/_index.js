import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
const { Item } = Menu;

// <a className="travis-badge" href="https://travis-ci.org/dadish/seed" target="_blank"><img src="https://api.travis-ci.org/dadish/seed.svg?branch=master" alt="Travis-CI"/></a>

const Component = ({ location: { pathname } }) => {
  
  return(
    <Menu color="blue" size="massive" pointing secondary>
      <Item active={pathname === '/'} >
        <NavLink exact to="/">Home</NavLink>
      </Item>
      <Item active={pathname === '/about'} >
        <NavLink to="/about">About</NavLink>
      </Item>
      <Item active={pathname === '/search'} >
        <NavLink to="/search">Go Search</NavLink>
      </Item>
    </Menu>
  );
};

export default withRouter(Component);
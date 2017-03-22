import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const { Item } = Menu

const Component = ({ goTo, location: { pathname } }) =>
  <Menu
    size="massive"
    pointing
    secondary
    color="blue"
  >
    <Item onClick={goTo('/')} active={pathname === '/'}>
      Home
    </Item>
    <Item onClick={goTo('/about')} active={pathname === '/about'}>
      About
    </Item>
    <Item onClick={goTo('/search')} active={pathname === '/search'}>
      Search
    </Item>
  </Menu>

const mapDispatchToProps = dispatch => ({
  goTo: url => () => dispatch(push(url))
})

export default withRouter(connect(null, mapDispatchToProps)(Component))
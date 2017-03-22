import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const Menu = ({ goTo }) =>
  <ul>
    <li onClick={goTo("/")}>
      Home
    </li>
    <li onClick={goTo("/about")}>
      About
    </li>
    <li onClick={goTo("/search")}>
      Search
    </li>
  </ul>

const mapDispatchToProps = dispatch => ({
  goTo: url => () => dispatch(push(url))
})

export default connect(null, mapDispatchToProps)(Menu)
import React, { Component } from 'react';
import './style.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { txt: '' };
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
      <div className="trhead">
        <input type="text" onChange={this.onChange} value={this.state.txt}/>
      </div>
    )
  }

  onChange (ev) {
    this.setState({ txt: ev.target.value });
  }

}

export default Header;
import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Seed</h2>
        </div>
        <p className="App-intro">
          This is a <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a>
          {' '}from Facebook sauced up with some redux, redux-observables, react-router and more.
        </p>
      </div>
    );
  }
}

export default App;

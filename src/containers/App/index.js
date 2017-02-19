import React from 'react';
import logo from './logo.svg';
import './style.css';

const App = ({ children }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Seed</h2>
    </div>
    <p className="App-intro">
      This is a <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a>
      {' '}from Facebook sauced up with some redux, redux-observables, react-router and more.
    </p>
    {children}
  </div>
);

export default App;

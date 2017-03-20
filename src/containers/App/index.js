import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import Menu from 'components/Menu';
import Home from 'containers/HomePage/async';
import About from 'containers/AboutPage/async';
import Search from 'containers/LiveSearch/async';

export const App = ({ children }) => (
  <Router>
    <div className="app-w">
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/liveSearch" component={Search} />
    </div>
  </Router>
);

export default App;

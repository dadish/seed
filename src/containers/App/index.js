import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './style.css';
import Menu from 'components/Menu';
import Home from 'containers/HomePage/async';
import About from 'containers/AboutPage/async';
import Search from 'containers/GoSearch/async';
import NotFound from 'containers/NotFoundPage/async';

export const App = ({ children }) => (
  <Router>
    <div className="app-w">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from 'components/Menu';
import Home from 'containers/HomePage/async';
import About from 'containers/AboutPage/async';
import Search from 'containers/GoSearch/async';
import NotFound from 'containers/NotFoundPage/async';

class App extends Component {
  render () {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/search" component={Search}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;
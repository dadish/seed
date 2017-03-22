import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Menu from 'components/Menu';

class App extends Component {
  render () {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={() => <h1>Home</h1>}/>
        <Route path="/about" component={() => <h1>About</h1>}/>
        <Route path="/topics" component={() => <h1>Topics</h1>}/>
      </div>
    )
  }
}

export default App;
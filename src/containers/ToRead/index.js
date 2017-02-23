import React from 'react';
import Header from './Header';
import List from './List';
import './style.css';

const Todo = () => (
  <div className="trd-wrap">
    <h1>ToRead!</h1>
    <Header />
    <List />
  </div>
);

export default Todo;
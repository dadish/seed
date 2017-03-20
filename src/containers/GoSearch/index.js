import React from 'react';
import { Container, Header as H } from 'semantic-ui-react';
import Header from './Header';
import List from './List';

const Todo = () => (
  <Container text>
    <br />
    <H as="h2" textAlign="center">Search Github for Go programs!</H>
    <Header />
    <List />
  </Container>
);

export default Todo;
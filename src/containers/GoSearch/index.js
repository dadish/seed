import React from 'react';
import { Container, Header as H } from 'semantic-ui-react';
import Header from './Header';
import List from './List';

const Todo = () => (
  <Container text>
    <H as="h2" textAlign="center">Go Search!</H>
    <Header />
    <List />
  </Container>
);

export default Todo;
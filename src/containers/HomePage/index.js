import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/about">About</Link>
  </div>
);

export default Home;

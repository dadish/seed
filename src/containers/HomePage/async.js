import React from 'react';
import Bundle from 'utils/Bundle';

function load (cb) {
  require.ensure([
    './',
  ], (require) => {
    const About = require('./');
    cb(About);
  });
}

const Home = () => (
  <Bundle load={load}>
    {(Home) => Home ? <Home /> : <span>Loading...</span>}
  </Bundle>
);

export default Home;
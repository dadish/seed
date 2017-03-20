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

const About = () => (
  <Bundle load={load}>
    {(About) => About ? <About /> : <span>Loading...</span>}
  </Bundle>
);

export default About;
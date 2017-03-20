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

const NotFound = () => (
  <Bundle load={load}>
    {(NotFound) => NotFound ? <NotFound /> : <span>Loading...</span>}
  </Bundle>
);

export default NotFound;
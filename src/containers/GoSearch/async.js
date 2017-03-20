import React from 'react';
import Bundle from 'utils/Bundle';
import { injectReducer, injectEpic } from 'utils/asyncInjectors';

function load (cb) {
  require.ensure([
    './reducer',
    './epic',
    './'
  ], (require) => {
    const reducer = require('./reducer').default;
    const epic = require('./epic').default;
    const component = require('./');
    injectReducer('liveSearch', reducer);
    injectEpic('liveSearch', epic);
    cb(component);
  })
}

const About = () => (
  <Bundle load={load}>
    {(About) => About ? <About /> : <span>Loading...</span>}
  </Bundle>
);

export default About;
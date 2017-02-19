// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/HomePage/reducer',
          'containers/HomePage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const component = require('containers/HomePage');
          const reducer = require('containers/HomePage/reducer').default;
          injectReducer('home', reducer);
          renderRoute(component);
        })
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/AboutPage/reducer',
          'containers/AboutPage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const component = require('containers/AboutPage');
          const reducer = require('containers/AboutPage/reducer').default;
          injectReducer('about', reducer);
          renderRoute(component);
        })
      },
    }
  ];
}

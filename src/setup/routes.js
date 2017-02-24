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
  const { injectReducer, injectEpic } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/HomePage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const component = require('containers/HomePage');
          renderRoute(component);
        })
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/AboutPage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const component = require('containers/AboutPage');
          renderRoute(component);
        })
      },
    },  {
      path: '/liveSearch',
      name: 'liveSearch',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/LiveSearch/reducer',
          'containers/LiveSearch/epic',
          'containers/LiveSearch'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const reducer = require('containers/LiveSearch/reducer').default;
          const epic = require('containers/LiveSearch/epic').default;
          const component = require('containers/LiveSearch');
          injectReducer('liveSearch', reducer);
          injectEpic('liveSearch', epic);
          renderRoute(component);
        })
      },
    },  {
      path: '*',
      name: 'notFound',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/NotFoundPage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const component = require('containers/NotFoundPage');
          renderRoute(component);
        })
      },
    }
  ];
}

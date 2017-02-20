import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { fromJS } from 'immutable';

import 'setup/index.css';

import configureStore from 'setup/store';
import { makeSelectLocationState } from 'setup/selectors';
import createRoutes from 'setup/routes';
import App from 'containers/App';

// Create redux store with history
// this uses the singleton hashHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const hashHistory = useRouterHistory(createhashHistory)();`
const initialState = fromJS({});
const store = configureStore(initialState, hashHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>,
  document.getElementById('root')
);

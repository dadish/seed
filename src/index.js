import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from 'setup/store';
import { setStore } from 'utils/asyncInjectors';
import 'semantic-ui-css/semantic.css';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createbrowserHistory)();`
const initialState = fromJS({});
const store = configureStore(initialState);

// set the store reference for the async injectors
setStore(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
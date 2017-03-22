import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from 'setup/store'
import { setStore } from 'utils/asyncInjectors'
import App from 'containers/App'
import "semantic-ui-css/semantic.css"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
const store = configureStore(history)
setStore(store)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import createReducers from './reducers';
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(history) {
  
  /**
   * NOTE
   * We use ReplaySubject because we do not have initial epic. 
   * If you need to include initial(default, global...) epic, 
   * then just change ReplaySubject with BehaviorSubject and you
   * should be good to go.
   */
  const epic$ = new ReplaySubject();
  const rootEpic = (action$, store, deps) => 
    epic$
      .mergeMap(epic => epic(action$, store, deps));

  // Create the store with two middlewares
  // 1. routerMiddleware: Syncs the location/URL path to the state
  // 2. epicMiddleware: Provides redux-observable side-effects handling with RXJS
  const middlewares = [
    routerMiddleware(history),
    createEpicMiddleware(rootEpic, {
      dependencies: { ajax }
    }),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducers(),
    composeEnhancers(applyMiddleware(...middlewares))
  )

  /**
   * Async code loading
   */
  store.epic$ = epic$; // epics injector
  store.asyncEpics = {}; // Epics registry
  store.asyncReducers = {}; // Async reducer registry

  return store;
}

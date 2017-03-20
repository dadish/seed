import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import has from 'lodash/has';
import invariant from 'invariant';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import createReducer from 'setup/reducers';

let store = false;

/**
 * Validate the shape of redux store
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    asyncReducers: isObject,
    epic$: (epic$) => epic$ instanceof ReplaySubject,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) asyncInjectors: Expected a valid redux store'
  );
}

/**
 * Inject an asynchronously loaded reducer
 */
export function injectReducer(name, asyncReducer) {
  invariant(
    isString(name) && !isEmpty(name) && isFunction(asyncReducer),
    '(src/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
  );

  if (has(store.asyncReducers, name)) return;

  store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(createReducer(store.asyncReducers));
}

/**
 * Inject an asynchronously loaded epic 
 */
export function injectEpic(name, asyncEpic) {
  invariant(
    isString(name) && !isEmpty(name) && isFunction(asyncEpic),
    '(src/utils...) injectAsyncEpic: Expected `asyncEpic` to be an epic function'
  );

  if (has(store.asyncEpics, name)) return;
  store.asyncEpics[name] = asyncEpic; // eslint-disable-line no-param-reassign
  store.epic$.next(asyncEpic);
}

/**
 * Helper for creating injectors
 */
export function setStore(str) {
  invariant(!store, '`utils/asyncInjectors`: You can set the store only once in a lifetime!')
  checkStore(str)
  store = str
}

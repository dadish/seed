import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialRouterState = fromJS({
  location: {}
})

const routerReducer = (state = initialRouterState, { type, payload } = {}) => {
  if (type === LOCATION_CHANGE) {
    return state.set('location', state.get('location').merge(payload))
  }

  return state
}

const createReducer = (asyncReducers = {}) => combineReducers({
  router: routerReducer,
  ...asyncReducers
})

export default createReducer
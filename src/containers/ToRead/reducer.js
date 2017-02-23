import { fromJS } from 'immutable';
import {
  CHANGE_SEARCH_TXT,
  SUGGESTIONS_LOOKUP_END,
} from './constants';
import listReducer, { initialSate } from './List/reducer';

const initialState = fromJS({
  searchTxt: '',
  list: initialSate,
});

const reducer = (state = initialState, action) => {
  const { type, payload} = action;
  switch (type) {
    case CHANGE_SEARCH_TXT:
      return state.set('searchTxt', payload);
    case SUGGESTIONS_LOOKUP_END:
      return state.set('list', listReducer(state.get('list'), action));
    default:
      return state;
  }
};

export default reducer;
import { fromJS } from 'immutable';
import { CHANGE_SEARCH_TXT } from './constants';

const initialState = fromJS({
  searchTxt: '',
});

const reducer = (state = initialState, { type, payload, meta}) => {
  switch (type) {
    case CHANGE_SEARCH_TXT:
      return state.set('searchTxt', payload);
    default:
      return state;
  }
};

export default reducer;
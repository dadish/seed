import { List } from 'immutable';
import {
  SUGGESTIONS_LOOKUP_END,
} from '../constants';

const initialSate = new List();

const reducer = (state = initialSate, { type, payload, meta}) => {
  switch (type) {
    case SUGGESTIONS_LOOKUP_END:
      return new List(payload.items);
    default:
      return state;
  }
};

export default reducer;
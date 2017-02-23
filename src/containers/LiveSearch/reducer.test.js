import reducer from './reducer';
import { fromJS } from 'immutable';
import { changeSearchTxt } from './actions';

const state = fromJS({
  searchTxt: 'some text',
});

test('reducer() updates `searchTxt` property with the action.payload', () => {
  const newSearchTxt = 'asldnfqA.ESF';
  const newState = reducer(state, changeSearchTxt(newSearchTxt));
  expect(newState.get('searchTxt')).toBe(newSearchTxt);
});
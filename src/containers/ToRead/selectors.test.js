import selectRoot, { selectSearchTxt } from './selectors';
import { fromJS } from 'immutable';

const searchTxt = 'adskfhgnmm';

const toRead = {
  searchTxt,
};

const state = fromJS({
  toRead,
})

test("selectRoot() selects ['toRead'']", () => {
  expect(selectRoot()(state).toJS()).toEqual(toRead);
});

test("selectSearchTxt selects ['toRead', 'searchTxt']", () => {
  expect(selectSearchTxt()(state)).toBe(searchTxt);
});
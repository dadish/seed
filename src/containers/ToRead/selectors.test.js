import { selectToRead, selectSearchTxt } from './selectors';
import { fromJS } from 'immutable';

const searchTxt = 'adskfhgnmm';

const toRead = {
  searchTxt,
};

const state = fromJS({
  toRead,
})

test("selectRoot() selects ['toRead'']", () => {
  expect(selectToRead()(state).toJS()).toEqual(toRead);
});

test("selectSearchTxt selects ['toRead', 'searchTxt']", () => {
  expect(selectSearchTxt()(state)).toBe(searchTxt);
});
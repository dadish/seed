import { selectLiveSearch, selectSearchTxt } from './selectors';
import { fromJS } from 'immutable';

const searchTxt = 'adskfhgnmm';

const liveSearch = {
  searchTxt,
};

const state = fromJS({
  liveSearch,
})

test("selectRoot() selects ['liveSearch'']", () => {
  expect(selectLiveSearch()(state).toJS()).toEqual(liveSearch);
});

test("selectSearchTxt selects ['liveSearch', 'searchTxt']", () => {
  expect(selectSearchTxt()(state)).toBe(searchTxt);
});
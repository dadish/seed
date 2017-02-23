import { createSelector } from 'reselect';

export const selectLiveSearch = () => (state) => state.get('liveSearch');

export const selectSearchTxt = () => createSelector(
  selectLiveSearch(),
  liveSearch => liveSearch.get('searchTxt'),
);
import { createSelector } from 'reselect';

const selectRoot = () => (state) => state.get('toRead');

export default selectRoot;

export const selectSearchTxt = () => createSelector(
  selectRoot(),
  toRead => toRead.get('searchTxt'),
);
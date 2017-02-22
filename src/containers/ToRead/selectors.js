import { createSelector } from 'reselect';

export const selectToRead = () => (state) => state.get('toRead');

export const selectSearchTxt = () => createSelector(
  selectToRead(),
  toRead => toRead.get('searchTxt'),
);
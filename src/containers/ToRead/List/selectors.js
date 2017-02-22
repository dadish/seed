import { createSelector } from 'reselect';
import { selectToRead } from '../selectors';

export const selectList = () => createSelector(
  selectToRead(),
  toRead => toRead.get('list'),
);
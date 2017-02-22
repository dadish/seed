import { fromJS } from 'immutable';
import { selectList } from './selectors';

const list = 'target';

const state = fromJS({
  toRead: { list }
});

test("selectList() selects ['toRead', 'list'] from the state", () => {
  expect(selectList()(state)).toBe(list);
});
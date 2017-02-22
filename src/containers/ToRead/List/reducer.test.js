import reducer from './reducer';
import { suggestionsLookupEnd } from '../actions';

const payload = {
  items: [
    { id: 0, name: 'foo' },
    { id: 1, name: 'foo' },
    { id: 2, name: 'foo' },
    { id: 3, name: 'foo' },
    { id: 4, name: 'foo' },
    { id: 5, name: 'foo' },
    { id: 6, name: 'foo' },
    { id: 7, name: 'foo' },
    { id: 8, name: 'foo' },
    { id: 9, name: 'foo' },
  ]
}

test('reducer() sets payload.items into state.list for ', () => {
  expect(reducer(undefined, suggestionsLookupEnd(payload)).size).toBe(payload.items.length);
});
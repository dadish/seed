import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import toReadEpic from './epic';
import {
  addSuggestion,
  changeSearchTxt,
  suggestionsLookupStart,
} from './actions';

let action$ = null;
let epic$ = null;
let consumer = null;

jest.useFakeTimers();

beforeEach(() => {
  action$ = new BehaviorSubject(addSuggestion());
  epic$ = toReadEpic(action$);
  consumer = jest.fn();
});

test('toReadEpic() does not emit actions right away', () => {
  epic$.subscribe(consumer);
  action$.next(changeSearchTxt('first'));
  expect(consumer).not.toBeCalled();
});

test('toReadEpic() does not react to actions with the types other than CHANGE_SEARCH_TXT', () => {
  epic$.subscribe(consumer);
  jest.runAllTimers();
  expect(consumer).not.toBeCalled();
});

test('toReadEpic() does not react to CHANGE_SEARCH_TXT actions if the payload is empty', () => {
  epic$.subscribe(consumer);
  action$.next(changeSearchTxt(''));
  jest.runAllTimers();
  expect(consumer).not.toBeCalled();
});

test('toReadEpic() emits SUGGESTION_LOOKUP_START action with text from CHANGE_SEARCH_TXT action', () => {
  epic$.subscribe(consumer);
  action$.next(changeSearchTxt('second'))
  jest.runAllTimers();
  expect(consumer).toBeCalled();
  expect(consumer.mock.calls[0][0]).toEqual(suggestionsLookupStart('second'));
});

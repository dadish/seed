import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import liveSearchEpic from './epic';
import {
  changeSearchTxt,
  suggestionsLookupStart,
  suggestionsLookupEnd,
  suggestionsLookupFail,
} from './actions';
import {
  SUGGESTIONS_LOOKUP_START,
} from './constants';

/**
 * Represents redux action stream.
 */
let action$;

/**
 * The suspect epic 
 */
let epic$;

/**
 * The Jest mock function
 */
let consumer; 

/**
 * The subscribtion to the epic$
 */
let subscribtion;

/**
 * The ajax response
 */
let ajaxResponse = { hello: 'world' };

/**
 * The ajax mock
 */
const getJSON = jest.fn(() => Observable.of(ajaxResponse));

/**
 * Setup initial values for all necessary variables for each test
 */
beforeEach(() => {
  action$ = new ReplaySubject();
  epic$ = liveSearchEpic(action$, {}, { ajax: { getJSON } });
  consumer = jest.fn();
  subscribtion = epic$.subscribe(consumer);
});

/**
 * Teardown whatever was set in beforeEach
 */
afterEach(() => {
  subscribtion.unsubscribe();
});

/**
 * We use Jest's timer mock for all tests in this file 
 */
jest.useFakeTimers();

test('liveSearchEpic debounces actions', () => {
  action$.next(changeSearchTxt('foo'));
  expect(consumer.mock.calls.length).toBe(0);
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBeGreaterThan(0);
});

test('liveSearchEpic passes through only CHANGE_SEARCH_TXT actions', () => {
  action$.next(suggestionsLookupStart());
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(0);
});

test('liveSearchEpic passes through only CHANGE_SEARCH_TXT actions with string payload', () => {
  action$.next(changeSearchTxt());
  jest.runAllTimers();
  expect(consumer.mock.calls.length).toBe(0);
});

test('liveSearchEpic emits the SUGGESTION_LOOKUP_START action before anything else', () => {
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(consumer.mock.calls[0][0].type).toBe(SUGGESTIONS_LOOKUP_START);
});

test('liveSearchEpic starts AJAX request when recieves CHANGE_SEARCH_TXT action with string payload', () => {
  getJSON.mockClear();
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(getJSON.mock.calls.length).toBe(1);
});

test('on successful request liveSearchEpic emits a suggestionsLookupEnd() with payload set to a response body', () => {
  getJSON.mockClear();
  ajaxResponse = { id: 12, message: 'hi there!'};
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(getJSON.mock.calls.length).toBe(1);
  expect(consumer.mock.calls[1][0].type).toBe(suggestionsLookupEnd().type);
  expect(consumer.mock.calls[1][0].payload).toEqual(ajaxResponse);
});

test('on error request liveSearchEpic emits a suggestionsLookupFail() action with payload set to an Error object', () => {
  getJSON.mockClear();
  getJSON.mockImplementation(() => Observable.throw(new Error('no good!')));
  action$.next(changeSearchTxt('foo'));
  jest.runAllTimers();
  expect(getJSON.mock.calls.length).toBe(1);
  expect(consumer.mock.calls[1][0].type).toBe(suggestionsLookupFail().type);
  expect(consumer.mock.calls[1][0].payload).toBeInstanceOf(Error);
});
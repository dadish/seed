import {
  CHANGE_SEARCH_TXT,
  SUGGESTIONS_LOOKUP_START,
  SUGGESTIONS_LOOKUP_END,
  SUGGESTIONS_LOOKUP_CANCEL,
  SUGGESTIONS_LOOKUP_FAIL,
  SHOW_SUGGESTIONS,
  SELECT_SUGGESTION,
  ADD_SUGGESTION,
  DELETE_SUGGESTION,
  MARK_SUGGESTION_READ,
  MARK_SUGGESTION_UNREAD,
} from './constants';
import createActionCreator  from 'utils/createActionCreator';

export const changeSearchTxt = createActionCreator(CHANGE_SEARCH_TXT);
export const suggestionsLookupStart = createActionCreator(SUGGESTIONS_LOOKUP_START);
export const suggestionsLookupEnd = createActionCreator(SUGGESTIONS_LOOKUP_END);
export const suggestionsLookupCancel = createActionCreator(SUGGESTIONS_LOOKUP_CANCEL);
export const suggestionsLookupFail = createActionCreator(SUGGESTIONS_LOOKUP_FAIL);
export const showSuggestions = createActionCreator(SHOW_SUGGESTIONS);
export const selectSuggestion = createActionCreator(SELECT_SUGGESTION);
export const addSuggestion = createActionCreator(ADD_SUGGESTION);
export const deleteSuggestion = createActionCreator(DELETE_SUGGESTION);
export const markSuggestionRead = createActionCreator(MARK_SUGGESTION_READ);
export const markSuggestionUnread = createActionCreator(MARK_SUGGESTION_UNREAD);
/**
 * User types into a search block
 */
export const CHANGE_SEARCH_TXT = "seed/ToRead/CHANGE_SEARCH_TXT";

/**
 * The app starts an AJAX request to wikipedia
 */
export const SUGGESTIONS_LOOKUP_START = "seed/ToRead/SUGGESTIONS_LOOKUP_START";

/**
 * The AJAX request to wikipedia successfully ends
 */
export const SUGGESTIONS_LOOKUP_END = "seed/ToRead/SUGGESTIONS_LOOKUP_END";

/**
 * The AJAX request is cancelled by the app.
 */
export const SUGGESTIONS_LOOKUP_CANCEL = "seed/ToRead/SUGGESTIONS_LOOKUP_CANCEL";

/**
 * The AJAX request to wikipedia fails
 */
export const SUGGESTIONS_LOOKUP_FAIL = "seed/ToRead/SUGGESTIONS_LOOKUP_FAIL";

/**
 * The app lists the results of the wikipedia request
 */
export const SHOW_SUGGESTIONS = "seed/ToRead/SHOW_SUGGESTIONS";

/**
 * The user selects one of the reqults that app suggests.
 */
export const SELECT_SUGGESTION = "seed/ToRead/SELECT_SUGGESTION";

/**
 * The suggestion is added to the ToRead list
 */
export const ADD_SUGGESTION = "seed/ToRead/ADD_SUGGESTION";

/**
 * The suggestion is removed from the ToRead list
 */
export const DELETE_SUGGESTION = "seed/ToRead/DELETE_SUGGESTION";

/**
 * The user marks the ToRead item as `Read`
 */
export const MARK_SUGGESTION_READ = "seed/ToRead/MARK_SUGGESTION_READ";

/**
 * The user marks the ToRead item as `Unread`
 */
export const MARK_SUGGESTION_UNREAD = "seed/ToRead/MARK_SUGGESTION_UNREAD";
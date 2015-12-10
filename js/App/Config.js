// js/Config.js

// Since we use this in the backend too we need to intercept the
// define method and add it if not there

/* eslint no-use-before-define: 0 */
/* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

/**
 * App configurtion file.
 * Also contains constant values.
 *
 * @singleton
 *
 */

define(function Config(require, exports, module) {
  'use strict';
  module.exports = {
    status: {
      empty: 'empty',
      pending: 'pending',
      running: 'running',
      passed: 'passed',
      failed: 'failed',
      error: 'error',
      cantRun: 'cantRun',
      end: 'end',
      progress: 'progress',
      open: 'open',
      closed: 'closed',
      opening: 'opening',
      closing: 'closing',
    },
  };
});

// js/Config.js

// Since we use this in the backend too we need to intercept the
// define method and add it if not there
if (typeof define !== 'function') { var define = require('amdefine')(module) }

/**
 * App configurtion file.
 * Also contains constant values.
 * 
 * @singleton
 * 
 */

define(function (require, exports, module) {
  
  module.exports = {

    status : {
      empty : 'empty',
      pending : 'pending',
      running : 'running',
      passed : 'passed',
      failed : 'failed',
      error : 'error',
      cantRun : "cantRun",
      end : 'end',
      progress : 'progress',
      open : 'open',
      closed : 'closed',
      opening : 'opening',
      closing : 'closing'
    }

  };

});
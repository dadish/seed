// test/front/Boot.js

/**
 * Tests bootstrapper
 *
 */

define(function BootTests(require, exports, module) {
  'use strict';

  require('test/front/test');

  var cssStr = require('text!deps/jasmine-core/lib/jasmine-core/jasmine.css');

  module.exports = {
    launch: function launch() {
      var $style = $('<style>');
      $('body').append($style);
      $style.append(cssStr);
      window.onload();
    },
  };
});

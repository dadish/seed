// test/front/Boot.js

/**
 * Tests bootstrapper
 *
 */

define(function BootTests(require, exports, module) {
  'use strict';
  var cssStr = require('text!deps/jasmine-core/lib/jasmine-core/jasmine.css');
  var $ = require('jquery');
  require('test/front/test');

  module.exports = {
    launch: function launch() {
      var $style = $('<style>');
      $('body').append($style);
      $style.append(cssStr);
      window.onload();
    },
  };
});

// js/Boot.js

/**
 * Bootstrapping file.
 * Encapsules requirejs configs and launches the app.
 *
 */

// RequireJS Config

requirejs.config({
  baseUrl: '/',
  paths: {
    requirejs: 'deps/requirejs/require',
    text: 'deps/text/text',
    jquery: 'deps/jquery/dist/jquery',
    underscore: 'deps/underscore/underscore',
    backbone: 'deps/backbone/backbone',
    moment: 'deps/moment/moment',
    easing: 'deps/jquery-easing-original/jquery.easing',
    jasmine: 'deps/jasmine-core/lib/jasmine-core/jasmine',
    jasmineBoot: 'deps/jasmine-core/lib/jasmine-core/boot',
    jasmineHtml: 'deps/jasmine-core/lib/jasmine-core/jasmine-html',

  },
  shim: {
    easing: {
      deps: ['jquery'],
      exports: 'easing',
    },
    jasmineHtml: {
      deps: ['jasmine']
    },
    jasmineBoot: {
      deps: ['jasmineHtml'],
    },
  },
  waitSeconds: 0,
});


// BOOT
define(function Boot(require) {
  'use strict';
  
  require('jquery');
  require('easing');
  require('underscore');
  require('backbone');

  require('js/App/App').launch();

  // Uncomment Below if you want to launch tests
  require('test/front/Boot.js').launch();
});

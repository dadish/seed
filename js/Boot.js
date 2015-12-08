// js/Boot.js

/**
 * Bootstrapping file.
 * Encapsules requirejs configs and launches the app.
 *
 */

//==============
//  AMD Config
//==============

requirejs.config({
  baseUrl : '/',
  paths : {
    'requirejs' : 'deps/requirejs/require',
    'text' : 'deps/text/text',
    'jquery' : 'deps/jquery/dist/jquery',
    'underscore' : 'deps/underscore/underscore',
    'backbone' : 'deps/backbone/backbone',
    'moment' : 'deps/moment/moment',
    'easing' : 'deps/jquery-easing-original/jquery.easing',
    'jasmine' : 'deps/jasmine-core/lib/jasmine-core'
  },
  shim : {
    'easing' : {
      deps : ['jquery'],
      exports : 'easing'
    }
  },
  waitSeconds : 0
});

//========
//  BOOT
//========

define(function (require, exports, module) {
  
  require('jquery');
  require('easing');
  require('underscore');
  require('backbone');

  var
    app                     = require('js/App/App')
  ;

  // launch the app
  app.launch();

});
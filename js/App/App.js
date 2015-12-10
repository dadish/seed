// js/App/App.js

/**
 * The root of our app.
 * The API of our app is available throught the `app` object.
 *
 */

define(function App(require, exports, module) {
  'use strict';

  var Backbone                      = require('backbone');
  var Router                        = require('./Router');
  var Config                        = require('./Config');
  var _                             = require('underscore');

  module.exports = {
    launch: function launch() {
      // We cache our app into window object so it is easy
      // to reference it in the future
      var app = this;
      window.app = this;

      // The global events object for our app
      app.events = _.extend({}, Backbone.Events);

      // Shorthand for app config
      app.config = Config;

      // Initialize Router / Start history
      app.router = new Router();
      app.history = Backbone.history;
      app.history.start({ pushState: true });
    },
  };
});

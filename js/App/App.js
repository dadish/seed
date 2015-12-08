// js/App/App.js

/**
 * The root of our app.
 * The API of our app is available throught the `ci_app` object.
 *
 * @example
 * You can try the examples in the browser console
 *
 * // Run tests on the latest branch/commit
 * ci_app.branches.latest().run();
 * 
 * // Expand the view of the branch `my_repo`
 * ci_app.view.branches.get('my_repo').expand();
 * 
 * @singleton
 * 
 */

define(function (require, exports, module) {

  'use strict';

  var Backbone                      = require('backbone');
  var Router                        = require('./Router');
  var Config                        = require('./Config');
  var Branches                      = require('js/Collections/Branches');
  var BranchesView                  = require('js/Views/Branches');
  var _                             = require('underscore');
  
  module.exports = {

    launch : function () {
      
      // We cache our ci_app into window object so it is easy 
      // to reference it in the future
      window.ci_app = this;

      // The global events object for our app
      ci_app.events = _.extend({}, Backbone.Events);

      // Shorthand for app config
      ci_app.config = Config;

      // Initialize the collection
      ci_app.branches = new Branches();
      ci_app.branches.fetch({reset : true});

      // Initialize the main view
      new BranchesView({collection : ci_app.branches});

      // Initialize Router / Start history
      ci_app.router = new Router();
      ci_app.history = Backbone.history;
      ci_app.history.start({pushState : true});
    },

    // The global error messenger.
    // Whenever something goes wrong, the user should be informed via
    // ci_app.error('error message');
    alert : function (msg) {
      alert(msg);
    }
  };

});
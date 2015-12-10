// js/App/Router.js

/**
 * The Router.
 */

define(function Router(require, exports, module) {
  'use strict';

  var Backbone                    = require('backbone');

  module.exports = Backbone.Router.extend({

    routes: {
      '/*': 'start',
    },

    start: function start() {
      
    },
    
  });
});

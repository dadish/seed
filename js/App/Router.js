// js/App/Router.js

/**
 * The Router.
 * 
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');

  module.exports = Backbone.Router.extend({

    routes : {
      '/*' : 'start'
    },

    start : function () {
      
    }
    
  });

});
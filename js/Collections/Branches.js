// js/Collections/Branches.js

/**
 * A collection of branches.
 * 
 * @constructer
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var Branch                      = require('js/Models/Branch');

  module.exports = Backbone.Collection.extend({

    url : '/branches',

    model : Branch,

    comparator : function (branch) {
      return -branch.get('start_date');
    }

  });

});
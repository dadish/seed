// js/Models/Tests.js

/**
 * UnitTests
 * This model is owned by the Branch model.
 * It represents the tests of the branch model
 * 
 * @constructor
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var moment                      = require('moment');

  module.exports = Backbone.Model.extend({
    
    defaults : {
      status : null,
      passed : 0,
      failed : 0,
      pending : 0,
      time : 0
    },

    toJSON : function () {
      var json, time;
      json = Backbone.Model.prototype.toJSON.apply(this, arguments);
      time = moment.duration(+json.time);
      json.time_moment = time.minutes() + '.' + time.seconds();
      json.coverage = Math.floor(json.passed / (json.passed + json.failed + json.pending) * 100);

      return json;
    }

  });

});
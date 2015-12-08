// js/Models/Branch.js

/**
 * A Branch model.
 * Represents a specific branch/commit/pull-request that could be run through
 * the CI.
 * 
 * @constructor
 * 
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var Tests                       = require('./Tests');
  var Build                       = require('./Build');
  var Config                      = require('js/App/Config');
  var moment                      = require('moment');
  var _                           = require('underscore');

  var empty = Config.empty;

  module.exports = Backbone.Model.extend({

    defaults : {
      owner : null,
      start_date : null,
      status : empty,
      build_status : empty,
      unit_tests_status : empty,
      func_tests_status : empty,
    },

    toJSON : function () {
      var json;
      json = Backbone.Model.prototype.toJSON.apply(this, arguments);
      json.moment_start_date = moment(+json.start_date).format('MM / DD / YYYY');
      json.moment_start_time = moment(+json.start_date).format('hh:mm a');
      return json;
    },

    loadDetails : function () {
      var promise, then;
      
      promise = this.fetch();

      then = _.bind(function (json) {
        this.Build = new Build(json.build);
        this.UnitTests = new Tests(json.unit_tests);
        this.FunctionalTests = new Tests(json.func_tests);
      }, this);

      return promise.then(then);
    }

  });

});
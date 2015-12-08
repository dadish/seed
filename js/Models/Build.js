// js/Models/Build.js

/**
 * Build
 * This model is owned by the Branch model.
 * It represents the build of the Branch model.
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
      debug : '',
      release : '',
      release_error : '',
      date : 0
    },

    toJSON : function () {
      var json;
      json = Backbone.Model.prototype.toJSON.apply(this, arguments);
      json.date_moment = moment(+json.date).format('hh:mm a');
      return json;
    }

  });

});
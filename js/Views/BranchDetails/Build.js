// js/Views/BranchDetails/Build.js

/**
 * Build Details View
 * Responsible for handling view for the details of the Build 
 * of the particular Branch
 * 
 * @constructor
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var htmlPassed                  = require('text!js/HTML/BranchDetails/Build/Passed.html');
  var htmlRunning                 = require('text!js/HTML/BranchDetails/Build/Running.html');
  var htmlPending                 = require('text!js/HTML/BranchDetails/Build/Pending.html');
  var htmlFailed                  = require('text!js/HTML/BranchDetails/Build/Failed.html');

  module.exports = Backbone.View.extend({

    template : {
      running : _.template(htmlRunning),
      passed : _.template(htmlPassed),
      pending : _.template(htmlPending),
      failed : _.template(htmlFailed)
    },

    render : function () {
      var template;
      template = this.template[this.model.get('status')];
      this.$el.empty().append(template(this.model.toJSON()));
      this.$el.addClass('status-' + this.model.get('status'));
      return this;
    }

  });

});
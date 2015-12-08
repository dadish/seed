// js/Views/BranchDetails/Tests.js

/**
 * Tests Details View
 * Responsible for handling view for the details of the
 * unit tests & functional tests of a particular Branch
 * 
 * @constructor
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var htmlPassed                  = require('text!js/HTML/BranchDetails/Tests/Passed.html');
  var htmlRunning                 = require('text!js/HTML/BranchDetails/Tests/Running.html');
  var htmlPending                 = require('text!js/HTML/BranchDetails/Tests/Pending.html');
  var htmlCantRun                 = require('text!js/HTML/BranchDetails/Tests/CantRun.html');
  var htmlFailed                  = require('text!js/HTML/BranchDetails/Tests/Failed.html');
  var drawChart                   = require('js/Views/BranchDetails/ChartDrawer');

  var color = {
    green : '#22B081',
    orange : '#F49C47',
    red : '#E63C52'
  };

  module.exports = Backbone.View.extend({

    template : {
      running : _.template(htmlRunning),
      passed : _.template(htmlPassed),
      pending : _.template(htmlPending),
      failed : _.template(htmlFailed),
      cantRun : _.template(htmlCantRun)
    },

    initialize : function (options) {
      this.title = options.title || 'No Title!';
    },

    draw : function () {
      var svg, values, json;
      svg = this.$('.test-chart-svg')[0];
      json = this.model.toJSON();

      values = [];
      values[values.length] = {value : json.passed, color : color['green']};
      values[values.length] = {value : json.failed, color : color['red']};
      values[values.length] = {value : json.pending, color : color['orange']};

      drawChart(svg, values); // here is the pie chart data
    },

    render : function () {
      var template, json, status;
      status = ci_app.config.status;
      template = this.template[this.model.get('status')];
      json = this.model.toJSON();
      json.title = this.title;
      this.$el.empty().append(template(json));
      this.$el.addClass('status-' + this.model.get('status'));
      if (json.status === status.failed || json.status === status.passed) {
        this.draw();
        this.$el.addClass('has-chart');
      }
      return this;
    }

  });

});
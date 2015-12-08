// js/Views/Branch.js

/**
 * Branch View
 * Encapsulates the view logic for the Branch model.
 * 
 * @constructor
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var html                        = require('text!js/HTML/Branch.html');
  var Details                     = require('js/Views/BranchDetails/Main');

  var runnerHTML = {
    pending : require('text!js/HTML/Runner/Pending.html'),
    passed : require('text!js/HTML/Runner/Passed.html'),
    failed : require('text!js/HTML/Runner/Failed.html'),
    running : require('text!js/HTML/Runner/Running.html')
  };

  var statusHTML = {
    pending : require('text!js/HTML/Status/Pending.html'),
    passed : require('text!js/HTML/Status/Passed.html'),
    failed : require('text!js/HTML/Status/Failed.html'),
    running : require('text!js/HTML/Status/Running.html')
  };

  var statusAltHTML = {
    pending : require('text!js/HTML/StatusAlt/Pending.html'),
    passed : require('text!js/HTML/StatusAlt/Passed.html'),
    failed : require('text!js/HTML/StatusAlt/Failed.html'),
    running : require('text!js/HTML/StatusAlt/Running.html')
  }

  module.exports = Backbone.View.extend({

    tagName : 'li',

    events : {
      'click' : 'toggleDetails'
    },

    attributes : function () {
      return {
        class : 'branch-i',
        id : 'branch-' + this.model.get('id')
      };
    },

    template : _.template(html),

    initialize : function (options) {

      // Initialize the details view and cache
      // a reference to it
      this._details = new Details({model : this.model});

      // Listen to details open & close events and change 
      // the look appropriately
      this.listenTo(ci_app.events, 'details:open', this.onDetailsOpen);
      this.listenTo(ci_app.events, 'details:close', this.onDetailsClose);

      this.render();
    },

    onDetailsOpen : function (id) {
      if (id !== this.model.id) return;
      this.$el.addClass('details-open');
    },

    onDetailsClose : function (id) {
      if (id !== this.model.id) return;
      this.$el.removeClass('details-open');
    },

    toggleDetails : function (ev) {
      var $target;
      $target = $(ev.target);
      if ($target.is('.branch-details') || $target.parents('.branch-details').length) return;
      this._details.toggle();
    },

    renderBuild : function () {
      return this.renderCircle('Build', 'build_status');
    },

    renderUnitTests : function () {
      return this.renderCircle('UnitTest', 'unit_tests_status');
    },

    renderFuncTests : function () {
      return this.renderCircle('FunctionalTest', 'func_tests_status');
    },

    renderCircle : function (className, propertyName) {
      var circle, status;
      status = this.model.get(propertyName);
      circle = this.$('.RunnerWrap .' + className + ' .runner-circle').empty();
      if (status === ci_app.config.status.empty) {
        circle.addClass('runner-circle--empty');
      } else {
        circle.removeClass('runner-circle--empty');
        circle.append(runnerHTML[status]);  
      }
      
      return this;      
    },

    renderStatus : function () {
      var status, txt;
      status = this.model.get('status');
      this.$('.Status').empty().append(statusHTML[status]);
    },

    renderStatusAlt : function () {
      var status, txt;
      status = this.model.get('status');
      this.$('.StatusAlt').empty().append(statusAltHTML[status]);
    },

    setHTMLStatus : function () {
      var runner;
      runner = this.$el.addClass('status-' + this.model.get('status'));
    },

    progressRunner : function () {
      var progress = 0, status = ci_app.config.status;
      _(['build_status', 'unit_tests_status', 'func_tests_status'])
      .find(function (item, i, list) {
        
        item = this.model.get(item);
        
        // If it is empty, pending or failed then we do nothing further
        if (
          item === status.empty ||
          item === status.pending ||
          item === status.failed
        ) {
          return true;

        // If it is running then we add some progress
        // and return. Because the next process won't run
        // unless this one is finished
        } else if (item === status.running) {
          progress += 35;
          return true;
        
        // If we have passed then we go right to
        // the next process unless we are the last
        // process
        } else if (item === status.passed) {
          if (i === list.length - 1) return;
          progress += 47.5;  
        }
      }, this);

      this.$('.runner-stick').animate({width : progress + '%'});

      return progress;
    },

    render : function () {
      this.$el.empty().append(this.template(this.model.toJSON()));
      this.setHTMLStatus();
      this.renderBuild();
      this.renderUnitTests();
      this.renderFuncTests();
      this.progressRunner();
      this.renderStatus();
      this.renderStatusAlt();

      // Set the new DOM element for the details view
      this._details.setElement(this.$('.branch-details')[0])

      // Set the more icon element and let details view
      // handle it's behavior
      this._details.setMoreIconElement(this.$('label.more .icon'));

      return this;
    }

  });

});
// js/Views/BranchDetails/Main.js

/**
 * BranchDetails View
 * Responsible for handling the presentation of
 * detailed info about the state of the branch
 * 
 * @constructor
 *
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var Build                       = require('./Build');
  var Tests                       = require('./Tests');
  var html                        = require('text!js/HTML/BranchDetails/Main.html');
  var $                           = require('jquery');

  module.exports = Backbone.View.extend({

    template : _.template(html),

    initialize : function () {
      var status = ci_app.config.status;
      
      // The open status of the view
      // is it open, opening, closed...
      this._openStatus = status.closed;

      // The load status of the view
      // By default the details are not loaded
      // if the user have not opened the details
      // yet. This is an indicator weather the 
      // details have loaded or not
      this._loaded = false;

      // The speed of the animation
      this._animationSpeed = 200;

      this.listenTo(ci_app.events, 'details:open', this.giveSpace);
    },

    setMoreIconElement : function (el) {
      this.$more = $(el);
    },

    show : function () {

      var status = ci_app.config.status;
      // If it is already open or opening then do nothing
      if (this._openStatus === status.open || this._openStatus === status.opening) return;

      // Load the details from the backend if not loaded yet
      if (!this._loaded) this.loadDetails();

      // If it is in the process of closing then stop animation
      if (this._openStatus === status.closing) {
        this.$el.stop();
      }

      // Tell everyone this one is opening
      ci_app.events.trigger('details:open', this.model.get('id'));

      // We are opening the details
      this._openStatus = status.opening;

      // Then we will set the status to open
      function then () {
        this._openStatus = status.open;
        ci_app.events.trigger('details:opened', this.model.get('id'));
        this.$more.removeClass('icon-down').addClass('icon-up');
      }

      // open the details section
      this.$el.slideDown(this._animationSpeed, _.bind(then, this));
    },

    hide : function () {

      var status = ci_app.config.status;
      // If it is already closed or closing then do nothing
      if (this._openStatus === status.closed || this._openStatus === status.closing) return;

      // If it is in the process of opening then stop animation
      if (this._openStatus === status.opening) {
        this.$el.stop();
      }

      // Tell everyone this one is closing
      ci_app.events.trigger('details:close', this.model.get('id'));

      // We are closing the details
      this._openStatus = status.closing;

      // Then we will set the status to closed
      function then () {
        this._openStatus = status.closed;
        ci_app.events.trigger('details:closed', this.model.get('id'));
        this.$more.removeClass('icon-up').addClass('icon-down');
      }

      // open the details section
      this.$el.slideUp(this._animationSpeed, _.bind(then, this));
    },

    toggle : function () {
      var status = ci_app.config.status;
      if (this._openStatus === status.open || this._openStatus === status.opening) this.hide();
      else this.show();
    },

    giveSpace : function (id) {
      if (id !== this.model.id) this.hide();
    },

    flash : function () {
      this.$cover = this.$cover || this.$('.details-cover');
      this.$cover.css('display', 'block');

      function then () {
        this.$cover.css({
          display : 'none',
          opacity : 1
        });
      }

      this.$cover.animate({
        opacity : 0
      }, 1200, 'easeOutExpo', _.bind(then, this));
    },

    loadDetails : function () {
      var then;

      // What we need to do after details are loaded
      then = _.bind(function () {
        this._loaded = true;
        this.initDetails();
        this.render();
        this.flash();
      }, this);

      // load the details
      this.model.loadDetails()

      // then take actions needed
      .then(then)

      // If something goes wrong, alert the user.
      .fail(function (reason) {
        ci_app.alert('Could not get data from the server. You may try again to solve this issue. Reason: ' + reason);
      });
    },

    initDetails : function () {
      this.Build = new Build({model : this.model.Build});
      this.UnitTests = new Tests({model : this.model.UnitTests, title : 'Unit Test'});
      this.FunctionalTests = new Tests({model : this.model.FunctionalTests, title : 'Functional Test'});
    },

    render : function () {
      this.$el.empty().append(this.template(this.model.toJSON()));
      
      this.Build.setElement(this.$('.BuildDetails')[0]);
      this.Build.render();
      this.UnitTests.setElement(this.$('.UnitTestsDetails')[0]);
      this.UnitTests.render();
      this.FunctionalTests.setElement(this.$('.FunctionalTestsDetails')[0]);
      this.FunctionalTests.render();

      return this;
    }

  });

});
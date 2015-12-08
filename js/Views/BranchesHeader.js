// js/Views/BranchesHeader.js

/**
 * The view responsible for rendering a header of the 
 * Branches view
 * 
 * @constructor
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var html                        = require('text!js/HTML/BranchesHeader.html');
  var _                           = require('underscore');

  module.exports = Backbone.View.extend({

    attributes : {
      class : 'branch-i branch-i--header'
    },

    tagName : 'li',

    template : _.template(html),

    render : function () {
      this.$el.empty().append(this.template());
      return this;
    }

  })

});
// js/Views/Branches.js

/**
 * Branches View
 * Encapsulates the view logic for Branches collection.
 * 
 * @constructor
 * 
 */

define(function (require, exports, module) {
  
  var Backbone                    = require('backbone');
  var Branch                      = require('js/Views/Branch');
  var Header                      = require('js/Views/BranchesHeader');
  var html                        = require('text!js/HTML/Branches.html');

  module.exports = Backbone.View.extend({

    el : '#branches',

    template : _.template(html),

    initialize : function (options) {

      // Cache of the children, Branch views
      this._children = [];

      // Chache the header
      this._header = new Header();

      // populate the children views
      this.populate();

      // render the view
      this.render();

      this.listenTo(this.collection, 'reset', this.populate);
    },

    removeInitialLoadingTxt : function () {
      var $txt;
      if (this._removed) return;
      $txt = $('.initial-loading');
      if ($txt.length) {
        $txt.remove();
        this._removed == true;
      }
    },

    populate : function () {
      this.collection.each(function (branch) {
        this._children[this._children.length] = new Branch({model : branch});
      }, this);

      // rerender
      this.render();
    },

    render : function () {
      var fragment;
      fragment = document.createDocumentFragment();
      this.$el.empty().append(this._header.render().el);
      _(this._children).each(function (branchView) {
        fragment.appendChild(branchView.render().el);
      }, this);
      this.$el.append(fragment);
      this.removeInitialLoadingTxt();
      return this;
    }

  });

});
'use strict';

var emblem = require('broccoli-emblem-compiler');

module.exports = {
  name: 'ember-cli-emblem',
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.registry.add('template', {
      name: 'ember-cli-emblem',
      ext: 'emblem',
      toTree: function(tree) {
        return emblem(tree, app.options.emblemOptions);
      }
    })
  }
}
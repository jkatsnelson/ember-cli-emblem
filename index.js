'use strict';
var path = require('path');
var EmblemPreprocessor = require('./lib/emblem-preprocessor');

function EmblemAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI Emblem Addon';
}

// EmblemAddon.prototype.blueprintsPath = function() {
//   return path.join(__dirname, 'blueprints');
// };

EmblemAddon.prototype.included = function(app) {
  this.app.registry.add('js', new EmblemPreprocessor());
};

// This is just here because it was required in ember-cli v0.0.37.
// To be removed when compatibility breaks.
EmblemAddon.prototype.treeFor = function() {};

module.exports = EmblemAddon;
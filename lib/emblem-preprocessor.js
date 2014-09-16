var emblem = require('broccoli-emblem-compiler');

function EmblemPreprocessor(options) {
  this.name = 'ember-cli-emblem';
}

EmblemPreprocessor.prototype.toTree = function(tree) {
  return emblem(tree);
}

module.exports = EmblemPreprocessor;
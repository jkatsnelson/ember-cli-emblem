var path = require('path');
function EmblemAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI Emblem Addon';
}

EmblemAddon.prototype.blueprintsPath = function () {
  return path.join(__dirname, 'blueprints');
};
fs = require('fs');
module.exports = {
  afterInstall: function(options){
    file = options.target + '/app/templates/'+options.entity.name;
    if (options.hbs) {
      newFileName = file + '.hbs';
    } else {
      newFileName = file + '.emblem';
    }
    fs.rename(file, newFileName);
  }
};

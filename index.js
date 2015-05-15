// Wrapper module unoconv, convert supported office files to html

var exec = require('child_process').exec;

module.exports = {
  generateHtml: function(filename, next) {
    exec('unoconv -f html ' + filename, function (error, stdout, stderr) {
      if (error) return next(error);
      return next(null, 'HTML of ' + filename + ' has been successfully generated.' );
    });
  }
};
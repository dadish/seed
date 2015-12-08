var gulp                        = require('gulp');
var del                         = require('del');
var config                      = require('./config');
var reporter                    = require('./reporter');

var taskName = 'remove-js-build';

/**
 * Remove the build css file.
 * The filename for css build is {name}.{hash}.css
 * We match it with {name}.*.css
 */
gulp.task(taskName, function (done) {
  var filename;
  filename = config.buildDir + '/' + config.name + '-*.js';
  del([filename])
    .then(function (path) {
      reporter('Removed file at `' + path + '`', taskName, 'cyan');
      done();
    });    
});

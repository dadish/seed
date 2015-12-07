var gulp                        = require('gulp');
var del                         = require('del');
var config                      = require('./config');

/**
 * Remove the build css file.
 * The filename for css build is {name}.{hash}.css
 * We match it with {name}.*.css
 */
gulp.task('remove-css-build', function (done) {
  var filename;
  filename = config.buildDir + config.name + '.*.css';
  del([filename], done);
});

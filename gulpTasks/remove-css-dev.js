var gulp                        = require('gulp');
var del                         = require('del');
var config                      = require('./config');
var reporter                    = require('./reporter');

var taskName = 'remove-css-dev';

/**
 * Remove the dev css
 * The filename for dev css is {name}.css
 * 
 */
gulp.task(taskName, function (done) {
  var filename;
  filename = [config.buildDir + '/' + config.name + '.css'];

  // delete dev css file
  del(filename)

  // if number of files is one then everything is good
  // report about it on the screen
  .then(function (files) {
    if (files.length === 1 && files[0] === filename) {
      reporter('The file `' + files[0] + '` is removed.', taskName, 'green');
    }
    
    done();
  });
});

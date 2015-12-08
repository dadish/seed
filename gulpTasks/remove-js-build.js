var gulp                        = require('gulp');
var del                         = require('del');
var config                      = require('./config');
var reporter                    = require('./reporter');
var _                           = require('lodash');

var taskName = 'remove-js-build';

gulp.task(taskName, function (done) {
  var filename;
  filename = [
    config.buildDir + '/' + config.name + '-*.js',
    config.buildDir + '/' + config.name + '.js',
  ];
  del(filename)
    .then(function (paths) {
      reporter('Removed files at:\n' + paths.join('\n') + '', taskName, 'cyan');  
    })
    .then(done);
});

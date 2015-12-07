'use strict';

var gulp                        = require('gulp');
var nodemon                     = require('gulp-nodemon');
var argv                        = require('yargs').argv;

gulp.task('dev', function () {
  var port, defaultPort;
  defaultPort = 3000;
  port = argv.port || defaultPort;

  nodemon({
    script : '',
    ext : 'js',
    exec : 'nodemon index.js --port ' + port,
  });
});

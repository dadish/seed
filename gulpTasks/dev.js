'use strict';

var gulp                        = require('gulp');
var nodemon                     = require('gulp-nodemon');
var argv                        = require('yargs').argv;

gulp.task('dev', function () {
  var port;

  port = argv.port || 3000;

  nodemon({
    script : '',
    ext : 'js',
    exec : 'nodemon index.js --port ' + port
  });

});
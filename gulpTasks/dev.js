'use strict';

var gulp                        = require('gulp');
var nodemon                     = require('gulp-nodemon');
var argv                        = require('yargs').argv;

var port, defaultPort;
defaultPort = 3000;
port = argv.port || defaultPort;

gulp.task('dev', function () {
  nodemon({
    script : '',
    ext : 'js',
    exec : 'nodemon index.js --port ' + port,
  });
});

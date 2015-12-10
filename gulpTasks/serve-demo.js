'use strict';

var gulp                        = require('gulp');
var nodemon                     = require('gulp-nodemon');
var argv                        = require('yargs').argv;
var reporter                    = require('./reporter');

var defaultPort = 3000;
var port = argv.port || defaultPort;
var taskName = 'serve-demo';

gulp.task(taskName, function serveDemo(done) {
  nodemon({
    script: '',
    ext: 'js',
    exec: 'nodemon index.js --port ' + port,
  });
  reporter('Sarted server at 127.0.0.1:' + port, taskName, 'green');
  done();
});

'use strict';

var gulp                        = require('gulp');
var Vinyl                       = require('vinyl');
var process                     = require('process');
var config                      = require('./config');
var through2                    = require('through2');
var reporter                    = require('./reporter');

/**
 * Create a dev css file
 * For testing purposes for now
 */

var taskName = 'create-css-dev';

var file;
file = new Vinyl({
  base : 'build/',
  path : process.cwd() + '/build/' + config.name + '.css',
  contents : new Buffer(".myDiv{width : 100%;}")
});

gulp.task(taskName, function (done) {
  file
  .pipe(through2.obj(function () {
      this.push(file);
  }))
  .pipe(gulp.dest('build'))
  .pipe(through2.obj(function (file) {
    reporter('The file `' + file.path + '` is created.', taskName, 'green');
  }))
  .on('end', done);
});
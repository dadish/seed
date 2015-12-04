'use strict';

var gulp                        = require('gulp');
var config                      = require('./config');
var fs                          = require('fs');
var through                     = require('through2');
var util                        = require('gulp-util');

var taskName = 'refill-css-dev';

gulp.task(taskName, function (done) {
  gulp.src(config.scss_dir + '/**/*.scss')
    .pipe(through.obj(function (file) {
      util.log(file.path);
      this.push(file);
    }))
    .on('end', done);

});
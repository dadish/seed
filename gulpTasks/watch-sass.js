'use strict';

var gulp                        = require('gulp');
var config                      = require('./config');
var through                     = require('through');
var watch                       = require('gulp-watch');
var sass                        = require('gulp-sass');
var sassPlotter                 = require('gulp-sass-plotter');

var taskName = 'watch-sass';
var watchGlob = config.scss_dir + '/**/*.scss';

// sass prepend
// ============
// Prepends the string for before 
// a scss file is comiled by gulp-sass
// Useful when you need to import vars, mixins, susy...
function sassPrepend (file) {
  var str, path, filename, prepend;
  str = file.contents.toString();
  str = config.sass_prepend + str;
  file.contents = new Buffer(str);
  this.queue(file);
}

gulp.task(taskName, function (done) {
  
 gulp.src(watchGlob)
  .pipe(watch(watchGlob))
  .pipe(sassPlotter())
  .pipe(through(sassPrepend))
  .pipe(sass({
      errLogToConsole : true,
      sourceComments : true
    }))
  .pipe(through(function (file) {
    console.log(file.path);
    this.queue(file);
  }))
  .pipe(gulp.dest('./css'), {
    cwd : process.cwd()
  });

})
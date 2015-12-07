'use strict';

var process                     = require('process');

var gulp                        = require('gulp');
var eslint                      = require('gulp-eslint');
var watch                       = require('gulp-watch');
var through                     = require('through');
var util                        = require('gulp-util');
var reporter                    = require('./reporter');
var config                      = require('./config');

var taskName = 'watch-js';
var watchGlob = config.jsLint;

/**
 * Reports the ESLint status for eahc file. 
 * If file passes it only prints `ok` if not it beeps and then passes 
 * along for the formatter in the next chain
 *
 * @param {Vinyl} file The Vinyl JavaScript file that is passed through the 
 *  stream
 * @return {undefined} Returns nothing when used as it is
 * @queue Queues the Vinyl JavaScript file down the stream
 * 
 */
function eslintStatusReporter (file) {
  var lint = file.eslint;
  if (
    lint.messages.length === 0 && 
    lint.errorCount === 0 &&
    lint.warningCount === 0
  ) {
    reporter(file.path.replace(process.cwd(), '') + util.colors.green(' ok!'), 'ESLint', 'cyan');
  } else {
    reporter(file.path.replace(process.cwd(), '') + util.colors.red(' no good.'), 'ESLint', 'cyan');
    this.queue(file);
  }

  if (lint.errorCount) util.beep();
}

gulp.task(taskName, function watchJs () {
  gulp.src(watchGlob)
    .pipe(watch(watchGlob))
    .pipe(eslint())
    .pipe(through(eslintStatusReporter))
    .pipe(eslint.formatEach());
});

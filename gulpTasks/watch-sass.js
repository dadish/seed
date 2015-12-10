'use strict';

var fs                          = require('fs');
var gulp                        = require('gulp');
var util                        = require('gulp-util');
var watch                       = require('gulp-watch');
var sass                        = require('gulp-sass');
var sassPlotter                 = require('gulp-sass-plotter');
var plumber                     = require('gulp-plumber');
var through                     = require('through');

var config                      = require('./config');
var reporter                    = require('./reporter');
var refillCssDev                = require('./refill-css-dev');

var taskName = 'watch-sass';
var watchGlob = config.scssDir + '/**/*.scss';

/**
 * Prepend string to each sass file
 * @param {Vinyl} file The Vinyl sass file that is passed through the stream
 * @returns {undefined} Returns nothing when used as it is
 * @queue {Vinyl} Queues the modified Vinyl object
 */
function sassPrepend(file) {
  var str;
  if (file.event === 'unlink') return this.queue(file);
  str = file.contents.toString();
  str = config.sass_prepend + str;
  file.contents = new Buffer(str);
  this.queue(file);
}

/**
 * Report the actions upon the files
 * @param {Vinyl} file The Vinyl file that is passed through the stream
 * @returns {undefined} Returns nothing when used as it is
 * @queue {Vinyl} Queues the Vinyl object down the stream
 */
function sassReport(file) {
  var action;
  action = file.event;

  // The unlink event is reported by cssRemove function
  if (action === 'unlink') return this.queue(file);
  
  if (action === undefined || action === 'change') action = 'modified';
  if (action === 'add') action = 'created';
  reporter(action + ' > ' + file.relative, taskName, 'green');
  this.queue(file);
}

/**
 * Removes the correspoding css file when sass file is deleted
 * @param {Vinyl} file The Vinyl file that is passed through the stream
 * @returns {undefined} Returns nothing when used as it is
 * @queue {Vinyl} Queues the Vinyl object down the stream
 * @throws {Error} Throws Error if the file could not be removed
 */
function cssRemove(file) {
  var path;
  if (file.event !== 'unlink') return this.queue(file);
  path = file.path.split('.');
  path.pop();
  path.push('css');
  path = path.join('.');

  fs.unlink(path, function cb(err) {
    if (err) {
      reporter('Couldn\'t remove the file > ' + path, taskName, 'red');
      util.beep();
      throw new Error(err);
    } else reporter('removed > ' + path, taskName, 'green');
  });
  
  this.queue(file);
}

/**
 * Updates the dev css that is in `build` directory
 * @param {Vinyl} file The Vinyl object that is passed through the stream
 * @returns {undefined} Returns nothing when used as it is
 * @queue {Vinyl} Queues the Vinyl object down the stream
 */
function updateDevCss(file) {
  var devCssPath = config.build_dir + '/' + config.name + '.css';
  
  if (file.event === 'change') return this.queue(file);

  refillCssDev(function cb(err) {
    if (err) {
      reporter('Couldn\'t refill the dev css file', taskName, 'red');
      util.beep();
      throw new Error(err);
    } else reporter('refilled > ' + devCssPath, taskName, 'green');
  });

  this.queue(file);
}

/**
 * Reports error when occurs
 * @param {string} err  The error message
 * @returns {undefined} Returns nothing
 */
function onError(err) {
  util.log(util.colors.red(err));
  util.beep();
}


gulp.task(taskName, function watchSass() {
  gulp.src(watchGlob)
  .pipe(plumber({
    errorHandler: onError,
  }))
  .pipe(watch(watchGlob))
  .pipe(sassPlotter())
  .pipe(through(sassPrepend))
  .pipe(sass({
    errLogToConsole: true,
    sourceComments: true,
  }))
  .pipe(gulp.dest('./css'), {
    cwd: process.cwd(),
  })
  .pipe(through(updateDevCss))
  .pipe(through(cssRemove))
  .pipe(through(sassReport));
});

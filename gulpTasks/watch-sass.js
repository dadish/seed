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
var watchGlob = config.scss_dir + '/**/*.scss';

// sass prepend
// ============
// Prepends the string for before 
// a scss file is comiled by gulp-sass
// Useful when you need to import vars, mixins, susy...
function sassPrepend (file) {
  if (file.event === 'unlink') return this.queue(file);
  var str, path, filename, prepend;
  str = file.contents.toString();
  str = config.sass_prepend + str;
  file.contents = new Buffer(str);
  this.queue(file);
}

// sass report
// ===========
// Reports about the changes made to the destination
// files
function sassReport (file) {
  var action;
  action = file.event;

  // The unlink event is reported by sassRemove function
  if (action === 'unlink') return this.queue(file);
  
  if (action === undefined || action === 'change') action = 'modified';
  if (action === 'add') action = 'created';
  reporter(action + ' > ' + file.relative, taskName, 'green');
  this.queue(file);
}

// sass remove
// ===========
// Remove the file if unlink event is emitted
function sassRemove (file) {
  var path, _this;
  if (file.event !== 'unlink') return this.queue(file);
  path = file.path.split('.');
  path.pop();
  path.push('css');
  path = path.join('.');

  fs.unlink(path, function (err) {
    if (err) {
      reporter('Couldn\'t remove the file > ' + path, taskName, 'red');
      util.beep();
      throw new Error(err);
    } else {
      reporter('removed > ' + path, taskName, 'green');
    }
  });
  
  this.queue(file);
}

// update dev css
// ==============
// Update the dev css when either new file is created
// or a file is deleted
function updateDevCss (file) {
  if (file.event === 'change') return this.queue(file);

  var devCssPath = config.build_dir + '/' + config.name + '.css';

  refillCssDev(function (err) {
    if (err) {
      reporter('Couldn\'t refill the dev css file', taskName, 'red');
      util.beep();
      throw new Error(err);      
    } else {
      reporter('refilled > ' + devCssPath, taskName, 'green');
    }
  });

  this.queue(file);
}

// on error
// ========
// Handles unexpected errors
function onError (err) {
  util.log(util.colors.red(err));
  util.beep();
}


// The watch task
gulp.task(taskName, function (done) {
  
 gulp.src(watchGlob)
  .pipe(plumber({errorHandler : onError}))
  .pipe(watch(watchGlob))
  .pipe(sassPlotter())
  .pipe(through(sassPrepend))
  .pipe(sass({
      errLogToConsole : true,
      sourceComments : true
    }))
  .pipe(gulp.dest('./css'), {
    cwd : process.cwd()
  })
  .pipe(through(updateDevCss))
  .pipe(through(sassRemove))
  .pipe(through(sassReport));

})
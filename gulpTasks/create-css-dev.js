'use strict';

var gulp                        = require('gulp');
var Vinyl                       = require('vinyl');
var process                     = require('process');
var config                      = require('./config');
var reporter                    = require('./reporter');
var refilfCssDev                = require('./refill-css-dev');

/**
 * Create a dev css file
 * For testing purposes for now
 */

var taskName = 'create-css-dev';

gulp.task(taskName, function (done) {
  refilfCssDev(done);
});
'use strict';

var gulp                        = require('gulp');
var refillCssDev                = require('./refill-css-dev');

/**
 * Create a dev css file
 * For testing purposes for now
 */

var taskName = 'create-css-dev';

gulp.task(taskName, function (done) {
  refillCssDev(done);
});

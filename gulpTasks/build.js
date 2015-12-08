'use strict';

var gulp                        = require('gulp');
var sequence                    = require('gulp-sequence');

var taskname = 'dev';

gulp.task(taskname, sequence('inject-css-build', 'inject-js-build'));
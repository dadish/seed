'use strict';

var gulp                        = require('gulp');
var sequence                    = require('gulp-sequence');

var taskname = 'build';

gulp.task(taskname, sequence('inject-css-build', 'inject-js-build'));
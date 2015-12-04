'use strict';

var gulp                        = require('gulp');
var config                      = require('./config');
var fs                          = require('fs');
var through                     = require('through');
var util                        = require('gulp-util');
var vinyl                       = require('vinyl');
var glob                        = require('glob');
var _                           = require('lodash');

var filepath = config.build_dir + '/' + config.name + '.css';
var scssGlob = config.scss_dir + '/**/_index.scss';
var taskName = 'refill-css-dev';

function refillCssDev () {
  var files = glob.sync(scssGlob);
  files = _(files).map(function (file) {
    return file.replace(config.scss_dir + '/', '').replace('/_index.scss', '');
  })
  .reduce(function (memo, name) {
    return memo += '@import url("../css/' + name + '.css");\n';
  }, '');

  fs.writeFileSync(filepath, files);
}

gulp.task(taskName, function () {
  refillCssDev();
});
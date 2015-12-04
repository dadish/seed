'use strict';

var gulp                        = require('gulp');
var config                      = require('./config');
var fs                          = require('fs');
var through                     = require('through');
var util                        = require('gulp-util');
var vinyl                       = require('vinyl');
var glob                        = require('glob');
var promisify                   = require('es6-promisify');
var _                           = require('lodash');

var filepath = config.build_dir + '/' + config.name + '.css';
var scssGlob = config.scss_dir + '/**/_index.scss';
var taskName = 'refill-css-dev';

glob = promisify(glob);
var writeFile = promisify(fs.writeFile);

function refillCssDev (done) {
  var str;
  glob(scssGlob)
    .then(function (files) {
      str = _(files).map(function (file) {
        return file.replace(config.scss_dir + '/', '').replace('/_index.scss', '');
      })
      .reduce(function (memo, name) {
        return memo += '@import url("../css/' + name + '.css");\n';
      }, '');
      return writeFile(filepath, str);
    })
    .then(done);
}


gulp.task(taskName, function (done) {
  refillCssDev(done);
});

module.exports = refillCssDev;
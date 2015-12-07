'use strict';

var gulp                        = require('gulp');
var config                      = require('./config');
var fs                          = require('fs');
var glob                        = require('glob');
var promisify                   = require('es6-promisify');
var _                           = require('lodash');

var filepath = config.buildDir + '/' + config.name + '.css';
var scssGlob = config.scssDir + '/**/_index.scss';
var taskName = 'refill-css-dev';

var writeFile = promisify(fs.writeFile);
glob = promisify(glob);

/**
 * refills the content of the dev css. The string is
 * multiple @import directives that imports all the compiled css
 * 
 * @param {Function} done The callback function
 * @returns {undefined}
 */
function refillCssDev (done) {
  var str;
  glob(scssGlob)
    .then(function (files) {
      str = _(files).map(function (file) {
        return file.replace(config.scssDir + '/', '').replace('/_index.scss', '');
      })
      .reduce(function (memo, name) {
        return memo + '@import url("../css/' + name + '.css");\n';
      }, '');
      return writeFile(filepath, str);
    })
    .then(done);
}

gulp.task(taskName, function (done) {
  refillCssDev(done);
});

module.exports = refillCssDev;

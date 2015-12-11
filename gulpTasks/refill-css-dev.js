'use strict';

var gulp                        = require('gulp');
var util                        = require('gulp-util');
var config                      = require('./config');
var fs                          = require('fs');
var getDirname                  = require('path').dirname;
var glob                        = require('glob');
var promisify                   = require('es6-promisify');
var reporter                    = require('./reporter');
var mkdirp                      = require('mkdirp');
var _                           = require('lodash');

var filepath = config.buildDir + '/' + config.name + '.css';
var scssGlob = config.scssDir + '/*.scss';
var taskName = 'refill-css-dev';

/**
 * mkdirp + writeFile version. Creates the directories in the path if
 * they do not exist before creating the file.
 * Behaves the same as fs.writeFile
 */
var writeFile = promisify(function mkdirpWriteFile(path, contents, cb) {
  return mkdirp(getDirname(path), function (err) {
    if (err) return cb(err);
    fs.writeFile(path, contents, cb);
  });
});

/**
 * Promisify the glob function
 */
glob = promisify(glob);

/**
 * refills the content of the dev css. The string is
 * multiple @import directives that imports all the compiled css
 *
 * @param {Function} done The callback function
 * @returns {undefined}
 */
function refillCssDev(done) {
  var str;
  glob(scssGlob)
    .then(function (paths) {
      str = _(paths)

      .map(function (path) {
        return path.split('/').pop().replace('.scss', '');
      })

      .filter(function (name) {
        if (name.indexOf('_') === 0) return false;
        return true;
      })

      .reduce(function (memo, name) {
        return memo + '@import url("../css/' + name + '.css");\n';
      }, '');

      return writeFile(filepath, str);
    })

    .catch(function (msg) {
      reporter(msg, taskName, 'red');
      util.beep();
    })

    .then(done);
}

gulp.task(taskName, function (done) {
  refillCssDev(done);
});

module.exports = refillCssDev;

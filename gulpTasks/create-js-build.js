'use strict';

var process                     = require('process');
var gulp                        = require('gulp');
var requirejs                   = require('requirejs');
var rev                         = require('gulp-rev');
var through                     = require('through');

var config                      = require('./config');
var reporter                    = require('./reporter');

var taskName = 'create-js-build';
var outPath = config.buildDir + '/' + config.name + '.js';
var options;
options = {
  baseUrl: process.cwd(),
  mainConfigFile: config.jsEntryPoint + '.js',
  optimize: 'uglify',
  preserveLicenseComments: false,
  findNestedDependencies: true,
  name: config.jsAlmond,
  include: config.jsEntryPoint,
  insertRequire: [config.jsEntryPoint],
  out: outPath,
  wrap: {
    start: '(function() {',
    end: '})();',
  },
};

gulp.task(taskName, ['remove-js-build'], function (done) {
  requirejs.optimize(options, function (res) {
    var msg;
    res.split('\n').forEach(function (str, index) {
      msg = 'require: ';
      if (index === 0 || index === res.length - 1 || !str.length) return;
      else if (index === 1) msg = 'building: ';
      else if (index === 2) msg = 'start: ';
      reporter(msg + str, taskName, 'cyan');
    });

    reporter('Created optimized js at `' + outPath + '`', taskName, 'cyan');
    
    gulp.src(outPath)
      .pipe(rev())
      .pipe(gulp.dest(config.buildDir.split('/').pop()))
      .pipe(through(function (file) {
        reporter('Created rev version at `' + file.path + '`', taskName, 'cyan');
      }))
      .on('end', done);
  });
});

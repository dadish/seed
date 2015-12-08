'use strict';

var gulp                        = require('gulp');
var sass                        = require('gulp-sass');
var util                        = require('gulp-util');
var rev                         = require('gulp-rev');
var glob                        = require('glob');
var promisify                   = require('es6-promisify');
var through                     = require('through');
var _                           = require('lodash');

var config                      = require('./config');
var reporter                    = require('./reporter');

var taskName = 'create-css-build';
var scssGlob = config.scssDir + '/*.scss';
var scssDir = config.scssDir.split('/').pop();
glob = promisify(glob);

gulp.task(taskName, ['remove-css-build'], function (done) {
  var str, vinyl, scssBuildFileStream;

  glob(scssGlob)
    .then(function (paths) {
      str = _(paths)
        .map(function (path) {
          return path.split('/').pop();
        })
        .filter(function (name) {
          if (name.indexOf('_') === 0) return false;
          return true;
        })
        .reduce(function (memo, name) {
          return memo + '@import "' + name + '";\n';
        }, '');

      str = config.sassPrepend + str;

      vinyl = new util.File({
        path : config.scssDir + '/' + config.name + '.scss',
        cwd : __dirname,
        base : scssDir,        
        contents : new Buffer(str),
      });

      scssBuildFileStream = through();

      scssBuildFileStream
        .pipe(sass({ errLogToConsole : true, outputStyle : 'compressed' }))
        .pipe(rev())
        .pipe(gulp.dest(config.buildDir.split('/').pop()))
        .pipe(through(function (file) {
          reporter('Created a build file at `' + file.path + '`', taskName, 'cyan');
          this.queue(file);
        }))
        .on('end', done);

      scssBuildFileStream.push(vinyl);
      scssBuildFileStream.push(null);
    });
});

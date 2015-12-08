'use strict';

var process                     = require('process');

var gulp                        = require('gulp');
var config                      = require('./config');
var injector                    = require('./injector');
var reporter                    = require('./reporter');
var through                     = require('through');
var _                           = require('lodash');

var taskName = 'inject-css-dev';
var html = '\n<link href="<%= buildDirUrl + name %>.css" rel="stylesheet" type="text/css"></link>\n';
var injectStr = _.template(html)(config);

injector = through(injector(config.cssInjectTags[0], config.cssInjectTags[1], injectStr));

gulp.task(taskName, ['create-css-dev'], function (done) {
  var destDir;
  gulp.src(config.injectFiles)
    .pipe(injector)
    .pipe(through(function (file) {
      reporter('Made injections into `' + file.relative + '`', taskName, 'cyan');
      this.queue(file);
    }))

    // We need to provide gulp.dest the exact folder where the 
    // file was when gulp.src'ed.
    .pipe(gulp.dest(function (file) {
      // First remove path till cwd
      destDir = file.path.replace(process.cwd() + '/', '');

      // Then remove the filename, so only relative path to
      // folder that containing the file is left
      destDir = destDir.split('/');
      destDir.pop();

      // concatenate & return
      return destDir.join('/');
    }))
    .on('end', done);
});
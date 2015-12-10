'use strict';

var process                     = require('process');
var gulp                        = require('gulp');
var through                     = require('through');
var glob                        = require('glob');
var promisify                   = require('es6-promisify');
var _                           = require('lodash');

var config                      = require('./config');
var injector                    = require('./injector');
var reporter                    = require('./reporter');

var taskName = 'inject-js-build';
var html = '\n<link href="<%= buildDirUrl + name %>" rel="stylesheet" type="text/css"></link>\n';
var buildCssGlob = config.buildDir + '/' + config.name + '-*.js';

glob = promisify(glob);

gulp.task(taskName, ['create-js-build'], function (done) {
  var destDir;
  var injectStr;
  
  glob(buildCssGlob).then(function (paths) {
    injectStr = _(paths).reduce(function (memo, path) {
      return memo + _.template(html)({
        buildDirUrl: config.buildDirUrl,
        name: path.split('/').pop(),
      });
    }, '');
    
    injector = through(injector(config.jsInjectTags[0], config.jsInjectTags[1], injectStr));

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
});

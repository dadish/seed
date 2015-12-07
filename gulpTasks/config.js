/**
 * Configuration file for the gulp build system.
 * 
 * @singleton
 */ 

'use strict';

var path                        = require('path');
var process                     = require('process');

module.exports = {

  /**
   * {String} The name of the project. Should be a valid filename.
   * Used for naming the build files.
   */
  name : 'seed',

  /**
   * {String} The path to the build dir
   * 
   */
  buildDir : path.join(process.cwd(), '/build'),

  /**
   * {String} The path to the scss dir
   * 
   */
  scssDir : path.join(process.cwd(), '/scss'),

  /**
   * {String} The string you want to prepend to your
   * scss files. Useful when need to import vars, mixins, susy
   * into every scss file
   *
   */
  sassPrepend : '@import "base";\n',

   /**
    * {Array} The array of globs that resolve to JavaScript files
    *   for linting
    * 
    */
  jsLint : [
    path.join(process.cwd(), '/js/**/*.js'),
    path.join(process.cwd(), '/gulpTasks/**/*.js'),
    path.join(process.cwd(), '/index.js'),
    path.join(process.cwd(), '/gulpfile.js'),
  ],

};

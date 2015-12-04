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
  build_dir : path.resolve(process.cwd() + '/build'),

  /**
   * {String} The path to the scss dir
   * 
   */
   scss_dir : path.resolve(process.cwd() + '/scss')


};
'use strict';

/**
 * Configuration file for the gulp build system.
 *
 * @singleton
 */

var path                        = require('path');
var process                     = require('process');

module.exports = {

  /**
   * @param {String} name The name of the project. Should be a valid filename.
   *  Used for naming the build files.
   */
  name: 'seed',

  /**
   * @param {String} buildDir The path to the build dir
   *
   */
  buildDir: path.join(process.cwd(), '/build'),

  /**
   * @param {String} buildDirUrl The url of the build directory.
   *  It is used when composing a url to production css and js files
   */
  buildDirUrl: '/build/',

  /**
   * @param {String} jsDir The path to the js dir
   *
   */
  jsDir: path.join(process.cwd(), '/js'),

  /**
   * @param {String} jsDirUrl The url of the js directory.
   *  It is used when composing a url to dev js files
   */
  jsDirUrl: '/js/',

  /**
   * @param {String} jsEntryPoint The relative path of the js file (without extension)
   *  that is bootstrapped by requirejs and used as a configuration file
   *  when optimized by rjs
   */
  jsEntryPoint: 'js/Boot',

  /**
   * @param {String} jsAlmond The relative path of the almond (requirejs) (without extension)
   *  that will be used by requirejs to minify the js assets
   */
  jsAlmond: 'deps/almond/almond',

  /**
   * @param {String} scssDir The path to the scss dir
   *
   */
  scssDir: path.join(process.cwd(), '/scss'),

  /**
   * @param {String} sassPrepend The string you want to prepend to your
   *  scss files. Useful when need to import vars, mixins, susy
   *  into every scss file
   *
   */
  sassPrepend: '@import "base";\n',

  /**
   * @param {Array} jsLint The array of globs that resolve to JavaScript files
   *   for linting
   * Uncomment the first line to lint your js files
   */
  jsLint: [
    path.join(process.cwd(), '/js/**/*.js'),
    path.join(process.cwd(), '/test/**/*.js'),
    path.join(process.cwd(), '/gulpTasks/**/*.js'),
    path.join(process.cwd(), '/index.js'),
    path.join(process.cwd(), '/gulpfile.js'),
  ],

  /**
   * @param {Array} jsLintBrowser The array of paths that contain JavaScript files
   *  that should be linted against browsers. This only modifies the `strict` rule
   *  to `function` for browsers and `global` for node.
   */
  jsLintBrowser: [
    path.join(process.cwd(), '/js'),
    path.join(process.cwd(), '/test/front'),
  ],

  /**
   * @param {Array} injectFiles An Array of globs that resolve to files
   *  that need to pass string injection process when built for production
   *
   */
  injectFiles: [
    path.join(process.cwd(), 'public/index.html'),
  ],

  /**
   * The tags for pointing out in your index.html or alike files
   * on where to inject the css and js files
   *
   * @param {Array} jsInjectTags An array of two [startTag, endTag] strings.
   * @param {Array} cssInjectTags An array of two [startTag, endTag] strings.
   *
   */
  cssInjectTags: ['<!-- inject-css -->', '<!-- inject-css-end -->'],
  jsInjectTags: ['<!-- inject-js -->', '<!-- inject-js-end -->'],
};

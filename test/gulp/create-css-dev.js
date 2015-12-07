var gulp                        = require('gulp');
var gulpConfig                  = require('../../gulpTasks/config');
var Assert                      = require('assert');
var exec                        = require('child_process').exec;
var fs                          = require('fs');
var promisify                   = require('es6-promisify');

var filepath = gulpConfig.buildDir + '/' + gulpConfig.name + '.css';

describe('gulp create-css-dev', function () {
  it('creates a `' + filepath +'` file.', function (done) {

    this.timeout(3000);
    
    exec = promisify(exec);
    stat = promisify(fs.stat);

    // ============================================
    // Prepare environment for the test
    // ============================================

    // First make sure that the filepath does not exist
    // so we try to remove it
    exec('gulp remove-css-dev') // create the file

    // Check if we removed it
    .then(function () {
      return stat(filepath); // get the stats
    })

    // If file does not exist it is good
    // we continue
    .catch(function (err) {
      if (err.code === 'ENOENT') return Promise.resolve(err.code);
    })
    
    // If it exists throw an Error
    .then(function (stats) {
      if (stats === 'ENOENT') return Promise.resolve();
      if (!stats.isFile()) return Promise.resolve();
      else throw new Error('There should not be a file on `' + filepath + '` for this test');
    })

    // ============================================
    // Everything should be ready for the test
    // ============================================

    // Now try to create the file
    .then(function () {
      return exec('gulp create-css-dev');
    })

    // Check the file
    .then(function () {
      return stat(filepath);
    })

    // Find out if we successfully created the file
    .then(function (stats) {
      if (stats.isFile()) return Promise.resolve();
      else throw Error('We could not create the file');
    })

    // If everything whent well then finish the test
    .then(done)

    // Throw error if something was wrong
    .catch(function (err) {
      setTimeout(function () { throw new Error(err); });
    });

  });
});
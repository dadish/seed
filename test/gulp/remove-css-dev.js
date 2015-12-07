var gulp                        = require('gulp');
var gulpConfig                  = require('../../gulpTasks/config');
var Assert                      = require('assert');
var exec                        = require('child_process').exec;
var fs                          = require('fs');
var promisify                   = require('es6-promisify');

var filepath = gulpConfig.buildDir + '/' + gulpConfig.name + '.css';

describe('gulp remove-css-dev', function () {
  it('removes a `' + filepath +'` file.', function (done) {

    this.timeout(3000);
    
    exec = promisify(exec);
    stat = promisify(fs.stat);

    // ============================================
    // Prepare environment for the test
    // ============================================

    // First make sure that the filepath does exist
    // so we try to create it
    exec('gulp create-css-dev') // create the file

    // Check if we created it
    .then(function () {
      return stat(filepath); // get the stats
    })
    
    // If it does not exists throw an Error
    .then(function (stats) {
      if (!stats.isFile()) throw new Error('There should be a file on `' + filepath + '` for this test');
    })

    // ============================================
    // Everything should be ready for the test
    // ============================================
    
    // Now try to remove the file
    .then(function () {
      return exec('gulp remove-css-dev');
    })

    // Check the file
    .then(function () {
      return stat(filepath);
    })

    // If file does not exist it is good
    // we continue
    .catch(function (err) {
      if (err.code === 'ENOENT') return Promise.resolve(err.code);
    })

    // Find out if we successfully created the file
    .then(function (stats) {
      if (stats === 'ENOENT') return Promise.resolve();
      if (stats.isFile()) throw Error('We could not remove the file');
      else return Promise.resolve();
    })

    // If everything whent well then finish the test
    .then(done)

    // Throw error if something was wrong
    .catch(function (err) {
      setTimeout(function () { throw new Error(err); });
    });

  });
});
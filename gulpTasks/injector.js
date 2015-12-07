var _                           = require('lodash');

/**
 * Produces a function that acceps a Vinyl file and replaces everyting in it's
 * content from startTag string and endTag string with the injectStr string.
 * 
 * @param {String} startTag The point from where to start injecting a string
 * @param {String} endTag The point where to stop injecting a string
 * @param {String} injectStr The string to be injected
 *
 * @returns {undefined}
 * 
 */
function injector (startTag, endTag, injectStr) {
  var str, startIndex, endIndex;
  return function (file) {
    str = file.contents.toString();
    startIndex = str.indexOf(startTag);
    endIndex = str.indexOf(endTag);

    // if any of the tags did not match do nothing and pass the file 
    // down the stream
    if (startIndex === -1 || endIndex === -1) return this.queue(file);

    // start insering from the end of the first tag
    startIndex += startTag.length;

    // Convert str to array
    str = str.split('');

    // inject the css
    str.splice(startIndex, endIndex - startIndex, injectStr.split());

    // flatten
    str = _.flatten(str);

    // convert str to string
    str = str.join('');

    file.contents = new Buffer(str);
    this.queue(file);
  };
}

module.exports = injector;

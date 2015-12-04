'use strict';

var util                        = require('gulp-util');

/**
 * Logs the message to stdout.
 * The format of the message is [taskName]: msg
 * 
 * @param msg {String} The message you want to display
 * @param taskName {String} The name of the task that is sending a message
 * @param color {String} The color of the message. Should be supported by gulp util
 */
module.exports = function reporter(msg, taskName, color) {
  util.log('[' + util.colors.cyan(taskName) + ']: ' + util.colors[color](msg));
}
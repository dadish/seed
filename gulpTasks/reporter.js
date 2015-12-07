'use strict';

var util                        = require('gulp-util');

/**
 * Logs the message to stdout.
 * The format of the message is [taskName]: msg
 * 
 * @param {String} msg The message you want to display
 * @param {String} taskName The name of the task that is sending a message
 * @param {String} color The color of the message. Should be supported by 
 *  gulp util
 * @returns {undefined}
 */
module.exports = function reporter (msg, taskName, color) {
  util.log('[' + util.colors.cyan(taskName) + ']: ' + util.colors[color](msg));
};

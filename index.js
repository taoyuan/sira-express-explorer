"use strict";

var path = require('path');

module.exports = explorer;

/**
 * Example usage:
 *
 * var explorer = require('sira-explorer');
 * app.use('/explorer', explorer(sapp, options));
 */
function explorer(sapp, options) {
    options = options || {};
    options.swaggerDistRoot = options.swaggerDistRoot || path.join(__dirname, 'public');
    return require('loopback-explorer')(buildLoopbackApplication(sapp), options);
}

function buildLoopbackApplication(sapp) {
    return {
        get: function () {
            return undefined;
        },
        remotes: function () {
            return sapp.remotes;
        }
    }
}
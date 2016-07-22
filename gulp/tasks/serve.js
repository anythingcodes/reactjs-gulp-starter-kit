/*
 Task Name: 'serve'
 Description: Serves built files to the browser
 */

'use strict';

let browserSync = require('browser-sync'),
    paths = require('../paths.json').paths;

module.exports = function () {
    browserSync({
        files: paths.build.buildFiles,
        server: {
            baseDir: ['./']
        },
        notify: false
    });
};
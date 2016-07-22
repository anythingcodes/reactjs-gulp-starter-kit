/*
 Task Name: 'watch'
 Description: Watches for Sass and JS changes to recompile
 */

'use strict';

let gulp = require('gulp'),
    paths = require('../paths.json').paths,
    browserSync = require('browser-sync');

module.exports = function () {
    gulp.watch([
      paths.src.jsPath,
      '!build/' + paths.build.js
    ], ['bundle']);

    gulp.watch([
        paths.src.sassPath,
        '!build/' + paths.build.css
    ], ['compileSass']).on("change", function(){
        browserSync.reload(paths.build.css);
    });

    //browserSync.reload("styles.min.css");

    //gulp.watch(paths.src.sassPath, ['compileSass']);
    //gulp.watch(paths.src.js, ['bundle']);
};
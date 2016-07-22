/*
 Task Name: 'compile-sass'
 Description: Compiles sass into single styles.min.css file
 */

'use strict';

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    paths = require('../paths.json').paths;

module.exports = function() {
    return gulp.src(paths.src.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename(paths.build.css))
        .pipe(gulp.dest(paths.build.dir))
}
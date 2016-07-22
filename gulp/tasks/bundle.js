/*
 Task Name: 'bundle'
 Description: Bundles javascript into single bundle.min.js file
 */

'use strict';

let gulp = require('gulp'), 
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    paths = require('../paths.json').paths;

let bundler = watchify(browserify(paths.src.app, watchify.args));
bundler.transform('reactify');
bundler.transform('babelify');
bundler.on('update', bundle); // on any dep update, runs the bundler

function bundle() {
    return bundler.bundle()
    // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(paths.build.js))

        // optional, remove if you dont want sourcemaps
        .pipe(buffer())
        //
        .pipe(uglify())
        .pipe(gulp.dest(''));
}

module.exports = bundle;
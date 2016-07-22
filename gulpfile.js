'use strict';

let gulp = require('gulp');

gulp.task('serve', ['compileSass', 'bundle', 'watch'], require('./gulp/tasks/serve'));
gulp.task('watch', require('./gulp/tasks/watch'));
gulp.task('compileSass', require('./gulp/tasks/compile-sass'));
gulp.task('bundle', require('./gulp/tasks/bundle'));

gulp.task('default', ['serve']);
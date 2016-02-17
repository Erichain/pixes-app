/**
 * gulpfile
 * used to build, test, etc.
 * @author Erichain
 * @date 2016-01-10
 */
'use strict';

/* packages */
var gulp = require('gulp'),
    compass = require('gulp-compass'),
    wiredep = require('wiredep').stream,
    cssnano = require('gulp-cssnano'),
    livereload = require('gulp-livereload'),
    rimraf = require('rimraf'),
    runSequence = require('run-sequence'),
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    plumber = require('gulp-plumber'),

/* define root app */
    rootApp = {
        app: require('./bower.json').appPath || './www',
        dist: 'dist'
    },

/* files paths */
    paths = {
        scripts: [rootApp.app + '/scripts/**/*.js'],
        styles: [rootApp.app + '/scss/**/*.scss'],
        images: [rootApp.app + '/images/**/*.png', rootApp.app + '/images/**/*.jpg'],
        test: [rootApp.app + '/test/spec/**/*.js'],
        testRequire: [
            rootApp.app + '/lib/ionic/js/ionic.bundle.min.js'
        ],
        karma: rootApp.app + '/karma.conf.js',
        views: {
            main: rootApp.app + '/index.html',
            files: [rootApp.app + '/**/*.html']
        },
        devFiles: rootApp.app + '*.json'
    };

////////////////////////
// Tasks definition ////
////////////////////////

gulp.task('sass', function () {
    gulp.src(paths.styles)
        .pipe(plumber())
        .pipe(compass({
            sass: rootApp.app + '/scss',
            css: rootApp.app + '/styles',
            image: rootApp.app + '/images'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(rootApp.app + '/styles/'))
        .pipe(connect.reload());
});

gulp.task('lint:scripts', function () {
    gulp.src(paths.scripts)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(paths.views.files)
        .pipe(plumber())
        .pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src(paths.images)
        .pipe(plumber())
        .pipe(connect.reload());
});

gulp.task('clean:css', function ( cb ) {
    rimraf(rootApp.app + '/styles', cb)
});

gulp.task('start:server', function () {
    connect.server({
        root: [rootApp.app],
        livereload: {
            port: 35734
        },
        port: 9012
    });
});

gulp.task('start:client', ['start:server', 'sass'], function () {
    var options = {
        uri: 'http://0.0.0.0:9012',
        app: 'Google Chrome'
    };

    gulp.src(paths.views.main)
        .pipe(plumber())
        .pipe(open(options));
});

gulp.task('watch', function () {
    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.views.files, ['html']);
    gulp.watch(paths.views.images, ['images']);
    gulp.watch(paths.scripts, ['lint:scripts']);
});

gulp.task('serve', ['start:client'], function ( cb ) {
    runSequence(
        'clean:css',
        ['lint:scripts'],
        'watch', cb)
});

gulp.task('default', ['start:server', 'watch']);
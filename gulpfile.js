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
        test: [rootApp.app + '/test/spec/**/*.js'],
        testRequire: [
            rootApp.app + '/vendor/angular/angular.js',
            rootApp.app + '/vendor/angular-mocks/angular-mocks.js',
            rootApp.app + '/vendor/angular-resource/angular-resource.js',
            rootApp.app + '/vendor/angular-cookies/angular-cookies.js',
            rootApp.app + '/vendor/angular-sanitize/angular-sanitize.js',
            rootApp.app + '/vendor/angular-route/angular-route.js',
            rootApp.app + '/test/mock/**/*.js',
            rootApp.app + '/test/spec/**/*.js'
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

gulp.task('compass', function () {
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

gulp.task('clean:css', function ( cb ) {
    rimraf(rootApp.app + '/styles', cb)
});

gulp.task('start:server', function () {
    connect.server({
        root: [rootApp.app],
        livereload: {
            port: 35733
        },
        port: 9011
    });
});

gulp.task('start:client', ['start:server', 'compass'], function () {
    var options = {
        uri: 'http://0.0.0.0:9011',
        app: 'Google Chrome'
    };

    gulp.src(paths.views.main)
        .pipe(plumber())
        .pipe(open(options));
});

gulp.task('watch', function () {
    gulp.watch(paths.styles, ['compass']);
    gulp.watch(paths.views.files, ['html']);
    gulp.watch(paths.scripts, ['lint:scripts']);
});

gulp.task('serve', function ( cb ) {
    runSequence(
        'clean:css',
        ['lint:scripts'],
        ['start:client'],
        'watch', cb)
});

gulp.task('default', ['start:server', 'watch']);
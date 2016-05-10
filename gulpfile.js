/**
 * gulpfile
 * used to build, test, etc.
 * @author Erichain
 * @date 2016-01-10
 */
'use strict';

// require packages
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    runSequence = require('run-sequence'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    gulpIf = require('gulp-if'),
    useref = require('gulp-useref'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),

// define root app
    rootApp = {
        app: require('./bower.json').appPath || './www',
        dist: './dist'
    },

// files
    paths = {
        scripts: [rootApp.app + '/scripts/**/*.js'],
        styles: [rootApp.app + '/scss/**/*.scss'],
        images: rootApp.app + '/images/**/*.+(png|jpg|jpeg|gif|svg)',
        fonts: rootApp.app + '/**/fonts/**/*',
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

// browser sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: rootApp.app,
        browser: 'Google Chrome',
        logConnections: true
    });
});

// compile sass to css
gulp.task('sass', function () {
    return gulp.src(paths.styles)
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest(rootApp.app + '/styles/'))
        .pipe(browserSync.stream({once: false}));
});

gulp.task('lint:scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(plumber())
        .pipe(jshint());
});

gulp.task('html', function () {
    return gulp.src(paths.views.files)
        .pipe(plumber());
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(plumber());
});

gulp.task('clean:css', function ( cb ) {
    return del(rootApp.app + '/styles')
});

// watch files changing
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.views.files, ['html']).on('change', browserSync.reload);
    gulp.watch(paths.views.images, ['images']).on('change', browserSync.reload);
    gulp.watch(paths.scripts, ['lint:scripts']).on('change', browserSync.reload);
});

// main server task
gulp.task('serve', ['watch']);

gulp.task('clean:dist', function ( cb ) {
    return del(rootApp.dist);
});

// compress html and css
gulp.task('useref', function () {
    return gulp.src('./www/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest(rootApp.dist));
});

// compress images
gulp.task('images', function () {
    return gulp.src(paths.images)
        /*.pipe(imagemin())*/
        .pipe(gulp.dest(rootApp.dist + '/images'))
});

// copy fonts
gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(rootApp.dist));
});

gulp.task('build', function ( callback ) {
    runSequence(
        'clean:dist',
        ['useref', 'images', 'fonts'],
        callback
    );
});

gulp.task('default', ['serve']);
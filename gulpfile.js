const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// Paths
const paths = {
  css: 'src/css/*.css',
  js: 'src/scripts/*.js',
  html: './*.html',
  distCss: 'dist/css',
  distJs: 'dist/js'
};

// CSS task
function cssMinify() {
  return src([
    './src/css/reset.css',
    './src/css/style.css',
    './src/css/tablet.css',
    './src/css/mobile.css',
    './src/css/print.css'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.distCss))
    .pipe(browserSync.stream());
}

// JS task
function jsMinify() {
  return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.distJs))
    .pipe(browserSync.stream());
}

// Live server
function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  watch(paths.css, cssMinify);
  watch(paths.js, jsMinify);
  watch(paths.html).on('change', browserSync.reload);
}

// Exports
exports.css = cssMinify;
exports.js = jsMinify;
exports.dev = series(parallel(cssMinify, jsMinify), serve);
exports.default = exports.dev;

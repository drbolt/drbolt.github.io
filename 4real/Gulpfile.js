var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var mincss = require('gulp-minify-css');
var remarkable = require('gulp-remarkable');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

// copy html files from src to dist
gulp.task('copy_html', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

// build markdown files into html
gulp.task('build_md', function() {
  gulp.src('./src/md/**/*.md')
    .pipe(remarkable({
      preset: 'commonmark',
      remarkableOptions: {
        linkify: true,
        html: true,
        breaks: true
      }
    }))
    .pipe(rename(function (path) {
      path.extname = '.html'
    }))
    .pipe(gulp.dest('./dist'));
});

// compile Sass files
gulp.task('build_sass', function() {
  gulp.src('./src/sass/main.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 10 versions']
  }))
  .pipe(gulp.dest('./dist/css'))
  .pipe(mincss())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./dist/css'));
});

// copy vanilla css files from src to dist
gulp.task('copy_css', function() {
  gulp.src('./src/sass/*.css')
    .pipe(gulp.dest('./dist/css'));
});

// copy asset files from src to dist
gulp.task('copy_assets', function() {
  gulp.src('./src/assets/*')
    .pipe(gulp.dest('./dist/assets'));
});

// serve this site for local development
gulp.task('serve_locally', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});

// default tasks performed via `$ gulp`
gulp.task('default', ['copy_html','build_md','build_sass','copy_css','copy_assets','serve_locally'], function() {
  gulp.watch('./src/**/*.html', ['copy_html']);
  gulp.watch('./src/md/**/*.md', ['build_md']);
  gulp.watch('./src/sass/*.scss', ['build_sass']);
  gulp.watch('./src/sass/*.css', ['copy_css']);
  gulp.watch('./src/assets/*', ['copy_assets']);
});

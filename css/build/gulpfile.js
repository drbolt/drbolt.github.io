
var gulp          = require('gulp');
var uncss         = require('gulp-uncss');
var rename        = require('gulp-rename');
var basswork      = require('gulp-basswork');
var webserver     = require('gulp-webserver');
var minifyCss     = require('gulp-minify-css');
var autoprefixer  = require('gulp-autoprefixer');

gulp.task('buildCSS', function() {
  gulp.src('./src/css/*.css')
    .pipe(basswork())
    .pipe(gulp.dest('./to_autoprefix/'));
});

//gulp.task('uncss', function() {
//  return gulp.src('./to_uncss/*.css')
//    .pipe(uncss({
//      html: ['../../_site/**/*.html']
//    }))
//    .pipe(gulp.dest('./to_autoprefix/'));
//});


gulp.task('prefix', function() {
  return gulp.src('./to_autoprefix/*.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('../dist/'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('../dist/'));
});

gulp.task('serve', function() {
  gulp.src('../../_site/')
    .pipe(webserver({}));
});

gulp.task('default', ['buildCSS', 'prefix'], function() {
  gulp.watch(['./src/**/*'], ['buildCSS', 'prefix']);
  gulp.watch(['../../*.html', '../../research/*', '../../cv/*', '../../_layouts/*', '../../_includes/*'], ['prefix']);
});

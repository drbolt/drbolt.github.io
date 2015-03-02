var gulp = require('gulp');
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function() {
  return gulp.src('../css/style.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('output/prefixed'));
});

gulp.task('unBasscss', function() {
  return gulp.src('../css/basscss.min.css')
    .pipe(uncss({
      html: ['../_site/**/*.html']
    }))
    .pipe(gulp.dest('output/uncss'));
});

gulp.task('uncss', function() {
  return gulp.src('../css/style.css')
    .pipe(uncss({
      html: ['../_site/**/*.html']
    }))
    .pipe(gulp.dest('output/uncss'));
});

var gulp = require('gulp');
var auto = require('gulp-autoprefixer')

gulp.task('default', function() {
  return gulp.src('../css/style.css')
    .pipe(auto({
      browsers: ['last 5 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('output'));
});
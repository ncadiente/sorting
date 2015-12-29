var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
 gulp.watch('./public/js/app.js',['build']);
});

gulp.task('build', function() {
 // Single entry point to browserify
 gulp.src('./public/js/app.js')
       .pipe(browserify({
         insertGlobals : true
       }))
       .pipe(gulp.dest('./public/js/build'))
});
gulp.task('default', ['connect', 'watch', 'sass', 'build']);
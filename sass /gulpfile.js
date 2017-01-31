var gulp = require('gulp');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();

gulp.task('compass', function() {
  gulp.src('scss/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('browserSync',function(){
  browserSync.init({
    server:{
      baseDir:'./'
    }
  })
})

gulp.task('styles',function(){
gulp.src(['css/style.css'])
.pipe(browserSync.reload({
  stream:true
}))
})

gulp.task('default', ['compass', 'styles'], function() {
   gulp.watch("scss/*.scss", ['compass']);
  gulp.watch("css/*.css", ['styles']);
  gulp.watch("", ['browserSync']);
});

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./public/modules/core/scss/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./public/modules/core/css'))
});

gulp.task('watch', function(){
  gulp.watch('./public/modules/core/scss/*.sass', ['sass']);
})

gulp.task('default', ['sass', 'watch']);

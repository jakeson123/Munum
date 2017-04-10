var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
        script: 'server.js'
    }).on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(["css/*.css", "js/*.js", "html/*.html"], {
        proxy: "http://localhost:8080",
        //files: ["public/modules/core/css/*.*"],
        port: 7000
    });
});

gulp.task('html', function() {
    return gulp.src('./public/modules/*/views/*.html')
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('./public/modules/core/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/modules/core/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass2', function() {
    return gulp.src('./public/modules/users/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/modules/users/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('./public/modules/*/scss/*.scss', ['sass']);
    gulp.watch('./public/modules/users/scss/*.scss', ['sass2']);
    gulp.watch('./public/modules/*/views/*.html', ['html']);
});

gulp.task('default', ['sass', 'sass2', 'html', 'browser-sync', 'watch']);

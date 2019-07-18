/* 

Чтобы скомпилировать scss через gulp, нужно:
0. Установить node.js, зайти в терминал.
1. Зайти в папку с проектом
2. Установить gulp в проект командой:


*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
    return gulp.src('./css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
    gulp.watch('./css/**/*.scss', gulp.series('sass-compile'));
});
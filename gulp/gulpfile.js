/* 
    Чтобы скомпилировать scss через gulp, нужно:
    0. Установить node.js, зайти в терминал.
    1. Зайти в папку с проектом
    2. Установить gulp и модули в проект командами:
        npm i gulp
        npm init
        npm i gulp-sass gulp-sourcemaps gulp-watch --SD
    3. Написать код ниже:
*/

// Переменные
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

// Компиляция css с scss файла
gulp.task('sass-compile', function() {
    return gulp.src('./css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
});

// Компиляция css с scss файла в онлайн режиме (работает даже в htmlpad)
gulp.task('watch', function() {
    gulp.watch('./css/**/*.scss', gulp.series('sass-compile'));
});
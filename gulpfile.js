const gulp = require("gulp");
const cssMin = require("gulp-csso");
const fileRename = require("gulp-rename");
const imageMin = require("gulp-imagemin");
const cssCompiller = require("gulp-sass");
const watcher = require("gulp-watch");

function scss () {
    return gulp.src("./app/scss/**/*.scss")
    .pipe(cssCompiller())
    .pipe(gulp.dest("./app/css"))
}

function watch () {
    return watcher("./app/scss/**/*.scss", scss)
}

function cssmin () {
    return gulp.src("./app/css/style.css")
    .pipe(cssMin())
    .pipe(fileRename("style.min.css"))
    .pipe(gulp.dest("./app/css")) 
}

function imagemin () {
    return gulp.src("./app/img/**/*")
    .pipe(imageMin())
    .pipe(gulp.dest("./app/img"))
}

exports.scss = scss;
exports.watch = watch;          // scss в css наблюдение
exports.cssmin = cssmin;        // css минимизацыя
exports.imagemin = imagemin;    // минимизацыя изображений
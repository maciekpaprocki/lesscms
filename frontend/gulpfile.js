var
        gulp = require('gulp'),
        include = require('gulp-include'),
        gulpLess = require('gulp-less'),
        uglify = require('gulp-uglify'),
        gulpIf = require('gulp-if');
        clean = require('gulp-clean'),
        autoprefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename'),
        minifyCss = require('gulp-minify-css'),
        watchTasks = [];
var p = require('./settings.json');
gulp.autoTask = function (name, fun) {
    gulp.task(name, fun);
    if (p[name].from) {
        watchTasks.push(name);
        gulp.task('watch-' + name, function () {
            gulp.watch(p[name].from, [name]);
        });
    }
};
gulp.autoTask('less', function () {
    return gulp.src(p.less.from)
            .pipe(include())
            .pipe(gulpLess())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulpIf(p.debug, minifyCss()))
            .pipe(gulp.dest(p.less.to));
});
gulp.autoTask('js', function () {
    return gulp.src(p.js.from)
            .pipe(include())
            .pipe(gulpIf(p.debug, uglify()))
            .pipe(gulp.dest(p.js.to));
});

gulp.task('watch', function () {
    watchTasks.forEach(function (name, index) {
        gulp.watch(p[name].from, [name]);
    });
});
gulp.task('build', function () {
    gulp.start('clean')
    gulp.start(watchTasks);
});
gulp.task('clean', function () {

    return gulp.src(p.clean, {read: false})
            .pipe(clean());

});
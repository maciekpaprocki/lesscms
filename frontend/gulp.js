var
        gulp = require('gulp'),
        include = require('gulp-include'),
        gulpLess = require('gulp-less'),
        uglify = require('gulp-uglify'),
        autoprefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename'),
        minifyCss = require('gulp-minify-css'),
        watchTasks = [];
var p = require('./paths.json');
gulp.autoTask = function(name,fun){
  gulp.task(name,fun);
  if(p[name].from){
      watchTasks.push(name);
      gulp.task('watch-'+name,function(){
              gulp.watch(p[name].from,[name]);
      });
  }
};
gulp.autoTask('less',function(){
   return gulp.src(p.less.from)
           .pipe(include)
           .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
           .pipe(minifyCss)
           .pipe(rename({ suffix: '.min' }))
           .pipe(gulp.dest(p.less.to));
});
gulp.autoTask('js',function(){
   return gulp.src(p.js.from)
           .pipe(include)
           .pipe(uglify)
           .pipe(rename({ suffix: '.min' }))
           .pipe(gulp.dest(p.js.to));
});

gulp.task('watch',function(){
    watchTasks.forEach(function(name,index){
         gulp.watch(p[name].from,[name]);
    });
});
gulp.task('clean',function(){

});
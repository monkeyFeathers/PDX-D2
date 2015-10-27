var gulp = require("gulp");
var jshint = require("gulp-jshint");
var mocha = require("gulp-mocha");

var paths = {
  lint:["./week_1/*/*.js"],
  tests: ["./week_1/greet/test.js"]
}

gulp.task("lint", function(){
  return gulp.src(paths.lint)
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

gulp.task("tests", function(){
  return gulp.src(paths.tests)
    .pipe(mocha());
});

gulp.task("watch", function(){
  gulp.watch(paths.lint, ["lint", "tests"]);
});

gulp.task("default",["watch", "lint", "tests"]);

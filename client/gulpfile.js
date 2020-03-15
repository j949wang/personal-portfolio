gulp = require("gulp");
sass = require("gulp-sass");
concat = require("gulp-concat");

// the default task
gulp.task("build-css", function() {
  return gulp
    .src("./scss/*.scss")
    .pipe(concat("main.scss"))
    .pipe(gulp.dest("./css/"));
});

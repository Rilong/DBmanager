var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoPrefixer = require("gulp-autoprefixer");
    browserSync = require("browser-sync"),
    uncss = require("gulp-uncss"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    cssnano = require("gulp-cssnano"),
    del = require("del");

gulp.task("sass", function () {
    return gulp.src("app/sass/*.sass")
            .pipe(sass({outputStyle: "expanded"}))
            .pipe(autoPrefixer({browsers: ['last 15 versions', '> 1%', 'IE 8', 'IE 7'], cascade: true}))
            .pipe(gulp.dest("app/css"))
            .pipe(browserSync.reload({stream: true}));
});

gulp.task("cssLibs", ["sass"], function () {
    return gulp.src("app/css/libs.css")
        .pipe(cssnano())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("app/css"))
});

gulp.task("browserSync", function () {
   browserSync({
       server: {
           baseDir: "app/"
       },
       notify: false
   })
});

gulp.task("scripts", function () {
   return gulp.src(
       [
           "app/lib/jquery/dist/jquery.min.js",
            "app/lib/magnific-popup/dist/jquery.magnific-popup.min.js"
       ])
       .pipe(uglify())
       .pipe(concat("libs.js"))
       .pipe(gulp.dest("app/js"));
});

gulp.task("default", ["cssLibs", "scripts", "browserSync"],function () {
    gulp.watch("app/sass/**/*.sass", ["sass"]);
    gulp.watch(["app/**/*.html", "app/js/**/*.js"], browserSync.reload)
});
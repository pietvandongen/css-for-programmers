var browserSync = require("browser-sync").create();
var del = require("del");
var gulp = require("gulp");
var htmlhint = require("gulp-htmlhint");
var sass = require("gulp-sass");
var sassLint = require("gulp-sass-lint");
var sourcemaps = require("gulp-sourcemaps");
var util = require("gulp-util");

var paths = {
    sources: {
        application: "application/**/*",
        html: ["src/*.html"],
        scss: ["src/scss/**/*"]
    },
    entrypoints: {
        scss: "src/scss/application.scss"
    },
    destinations: {
        application: "application"
    }
};

gulp.task("build", gulp.series(
    cleanBuild,
    gulp.parallel(lintHtml, lintScss),
    gulp.parallel(buildHtml, buildCss)
));
gulp.task("default", gulp.series("build", watch));

function cleanBuild() {
    return del([paths.destinations.application]);
}

function buildHtml() {
    return gulp.src(paths.sources.html)
        .pipe(gulp.dest(paths.destinations.application));
}

function lintScss() {
    return gulp.src(paths.entrypoints.scss)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

function buildCss() {
    return gulp.src(paths.entrypoints.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.destinations.application));
}

function lintHtml() {
    return gulp.src(paths.sources.html)
        .pipe(htmlhint())
        .pipe(htmlhint.failReporter());
}

function reload(done) {
    browserSync.reload();
    done();
}

function watch() {
    browserSync.init({
        server: "./application"
    });

    gulp.watch(paths.sources.html, gulp.series(lintHtml, buildHtml, reload));
    gulp.watch(paths.sources.scss, gulp.series(lintScss, buildCss, reload));
}

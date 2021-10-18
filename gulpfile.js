const sass = require('gulp-sass')(require('sass'));

let project_folder = "dist";
let source_folder = "src";

const path = {
  build: {
    html: project_folder,
    css: project_folder + "/css"
  },

  src: {
    html: source_folder + "/*.html",
    css: source_folder + "/scss/styles.scss"
  }
};

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create();

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function scss() {
  return src(path.src.css)
    .pipe(sass())
    .pipe(dest(path.build.css))
}

let build = gulp.series(html, scss);
exports.html = html
exports.scss = scss
exports.build = build

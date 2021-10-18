const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');

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

function browserSync(params) {
  browsersync.init({
    server:{
      baseDir: project_folder
    },
    port: 3000,
    notify: false
  })
};

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.reload({
      stream:true
    }))
};

function scss() {
  return src(path.src.css)
    .pipe(sass())
    .pipe(dest(path.build.css))
};

function cleaner() {
  return src('dist',
    { read: false })
    .pipe(clean());
};

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create();

let build = gulp.series(html, scss);
let watch = gulp.parallel(build, browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.clean = cleaner;
exports.scss = scss;
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');

// WIP
// const imagemin = require('gulp-imagemin');

let projectFolder = "dist";
let sourceFolder = "src";

const path = {
  build: {
    html: projectFolder,
    css: projectFolder + "/css",
    images: projectFolder +"/img"
  },

  src: {
    html: sourceFolder + "/*.html",
    css: sourceFolder + "/scss/styles.scss",
    images: sourceFolder + "/images"
  }
};

function browserSync(params) {
  browsersync.init({
    server:{
      baseDir: projectFolder
    },
    port: 3000,
    notify: false
  })
};

// WIP
  // gulp.watch("src/scss/*.scss");
  // gulp.watch("src/*.html").on('change', browserSync.reload);

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.reload({
      stream:true
    }))
};

// WIP
// function images() {
//   return src(path.src.images)
//     .pipe(
//       imagemin({
//         progressive: true,
//         svgoPlugins: [{ removeViewBox: false}],
//         interlaced: true,
//         optimizationLevel: 3
//       })
//     )
//     .pipe(dest(path.build.img))
//     .pipe(browsersync.reload(stream))
// };

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

// WIP
// exports.images = images;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.clean = cleaner;
exports.scss = scss;
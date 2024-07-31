const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Caminhos dos arquivos
const paths = {
    styles: {
        src: 'styles/**/*.scss', 
        dest: 'dist/css' 
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}


exports.styles = styles;
exports.watch = watch;

const build = gulp.series(styles, watch);
gulp.task('default', build);

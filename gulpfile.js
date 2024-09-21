const {src, dest, watch, series } = require('gulp');
const saas = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('sass/**/*.scss')
    .pipe(saas())
    .pipe(dest('css'))
}

function watchTask(){
    watch(['sass/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles, watchTask)
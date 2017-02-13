var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('default', ['watch']);

// Compile SASS
gulp.task('scss', function () {
    // Compile global css
    gulp.src('./src/scss/style.scss')
    // Compile SCSS
        .pipe(sass({outputStyle: 'expanded'}))

        // Then we autoprefix
        .pipe(autoprefix('last 2 versions', '> 1%', 'ie 8'))

        // Compress
        .pipe(rename("style.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['scss']);
});
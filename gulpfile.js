const gulp=require('gulp'),sass=require('gulp-sass'),minifyCss=require('gulp-minify-css');

gulp.task('styles',()=>{
    return gulp.src('sass/styles.scss')
        .pipe(sass())
        .on('erorr',sass.logError)
        .pipe(minifyCss())
        .pipe(gulp.dest('./src'));
});


gulp.task('watch',()=>{
    gulp.watch('./sass/**/*.scss',['styles']);
});

gulp.task('default',['styles']);
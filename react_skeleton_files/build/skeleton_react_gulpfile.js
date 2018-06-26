var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var px2rem = require('gulp-px2rem-plugin');
var less = require('gulp-less');

gulp.task('skeleton_css_transform', function(){
    gulp.src('../src/skeleton/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android > 4', 'iOS > 6', 'Safari > 6']
        }))
        .pipe(px2rem({ remUnit: 32 }))
        .pipe(gulp.dest(`../src/skeleton/`))
});

gulp.task('default', ['skeleton_css_transform']);

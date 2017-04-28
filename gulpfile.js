var gulp = require('gulp'),
	sass = require('gulp-sass'),
	scsslint = require('gulp-scss-lint'),
	livereload = require('gulp-livereload');

gulp.task('sass', function () {
	return gulp.src('scss/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

gulp.task('scss-lint', function() {
	return gulp.src('scss/styles.scss')
		.pipe(scsslint());
});

gulp.task('sass:watch', function () {
	livereload.listen();
	gulp.watch(['scss/styles.scss'], ['sass', 'scss-lint']);
	gulp.watch('index.html', livereload.reload);
});
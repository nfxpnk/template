const gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');

function compileSass() {
	return gulp
		.src('scss/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
}

function sassLint() {
	return false;
}

function watchSass() {
	livereload.listen();
	gulp.watch(['scss/styles.scss'], gulp.series(compileSass));
	gulp.watch(['index.html']).on('change', function() {
		livereload.reload();
	});
}

gulp.task('sass', gulp.series(compileSass));
gulp.task('default', gulp.series(watchSass));

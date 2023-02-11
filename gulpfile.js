const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
//const sassLint = require('gulp-sass-lint');

function compileSass() {
	return gulp
		.src('scss/**/*.scss')
		// .pipe(sassLint())
		// .pipe(sassLint.format())
		.pipe(sass({ sourceMap: true }).on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
}

function watchSass() {
	livereload.listen();
	gulp.watch(['scss/**/*.scss'], gulp.series(compileSass));
	gulp.watch(['index.html']).on('change', function() {
		livereload.reload();
	});
}

gulp.task('sass', gulp.series(compileSass));
gulp.task('default', gulp.series(watchSass));

// import gulp
var gulp = require("gulp")
var gulpTypescript = require("gulp-typescript");
var pr = require("pushrocks");

gulp.task('compileTS', function() {
	var stream = gulp.src('../index.ts')
	  .pipe(gulpTypescript({
	  	out: "index.js"
	  }))
	  .pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('compileCliTS', function() {
	var stream = gulp.src('../cli.ts')
			.pipe(gulpTypescript({
				out: "cli.js"
			}))
			.pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('compileTestTS', function() {
	var stream = gulp.src('../test.ts')
	  .pipe(gulpTypescript({
	  	out: "test.js"
	  }))
	  .pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('default',['compileTS','compileCliTS','compileTestTS'], function() {
	pr.beautylog.success('Typescript compiled');
});

//lets tell gulp to start with the default task.
pr.beautylog.log('Starting Gulp to compile TypeScript');
gulp.start.apply(gulp, ['default']);
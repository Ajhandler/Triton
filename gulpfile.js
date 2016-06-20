var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber'); 
var notify = require('gulp-notify');

gulp.task('styles', function(){
	gulp.src('./sass/**/*.scss')
	.pipe(plumber(plumberErrorHandler))
	.pipe(sass())
	.pipe(autoprefixer({
		broswers:['last 2 versions']
	}))
	.pipe(browserSync.reload({
    	stream: true
    }))
	.pipe(gulp.dest('./css/'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
gulp.task('js', function(){
	gulp.src('./app.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
})

var plumberErrorHandler = { errorHandler: notify.onError({
   title: 'Gulp',
   message: 'Error: <%= error.message %>'
  }) 
};

gulp.task('default', ['styles', 'browserSync','js'], function(){
	gulp.watch('./sass/**/*.scss', ['styles']);
	gulp.watch('./app.js', ['js']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('./app.js', browserSync.reload);
});	
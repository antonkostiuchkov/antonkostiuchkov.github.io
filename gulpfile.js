var gulp 					= require('gulp');
		postcss 			= require('gulp-postcss');
		csswring			= require('csswring');
		autoprefixer 	= require('autoprefixer');
		lost				 	= require('lost');
		normalize			= require('postcss-normalize');
		stylus 				= require('gulp-stylus');
		jade        	= require('gulp-jade');
		// imagemin    	= require('gulp-imagemin');
		browserSync 	= require('browser-sync');
		reload      	= browserSync.reload;
		rucksack			= require('rucksack-css');
		rupture			= require('rupture');

		// typographic = require('typographic');
		// nib = require('nib');




// Stylus > CSS
// With Postcss
gulp.task('styles', function(){
	var processors = [
		csswring,
		lost,
		normalize,
		autoprefixer,
		rucksack
	];

	return gulp.src('assets/styles/main.styl')
		.pipe(stylus())
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist'))
		.pipe(reload({stream:true}));
});



// Jade -> HTML
// Compiles, uglifies, reloads
gulp.task('templates', function() {
	gulp.src('assets/templates/index.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(reload({stream:true}));

	gulp.src(['assets/templates/*.jade', '!assets/templates/index.jade'])
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/templates'))
		.pipe(reload({stream:true}));
});



// Image task
// Compress
gulp.task('image', function () {
	gulp.src('assets/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'));
});



// JavaScript Task
gulp.task('scripts', function () {
	gulp.src('assets/scripts/*.js')
		.pipe(gulp.dest('./dist/js'))
		.pipe(reload({stream:true}));
});


// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});



// Watching for canges
gulp.task('watch', function(){
	gulp.watch('**/*.styl', ['styles']);
	gulp.watch('**/*.jade', ['templates']);
	gulp.watch('assets/scripts/*.js', ['scripts']);
});



// Default task
gulp.task('default', [
    'watch',
    'browser-sync'
 ]);

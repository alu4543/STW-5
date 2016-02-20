var gulp       = require('gulp'),
    karma      = require('gulp-karma'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    open       = require('gulp-open'),
    del        = require('del'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS  = require('gulp-minify-css'),
    notify     = require('gulp-notify'),
    imagemin   = require('gulp-imagemin');

    var paths = {
      scripts: ['./*.js', './test/*.js'],
      images: 'images/**/*'
    };

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});


gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      //.pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('/js'));
});

gulp.task('Minify', function () {
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minified/css/'))

  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./minified/js/'))

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./test/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minified/test/css/'))

  gulp.src('./test/*.html')
    .pipe(minifyHTML({keepBreaks:true}))
    .pipe(gulp.dest('./minified/test/'))

  gulp.src('./test/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./minified/test/js/'))

});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('/images'));
});

gulp.task('imagemin', function() {
  gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./minified/images/'))
    .pipe(notify( { message: "imagemin - Complete!"} ));
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb)
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});


/*
gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
*/
// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images','clean', 'imagemin', 'test', 'minify'], function() {
});

var gulp = require('gulp')
var eslint = require('gulp-eslint');
var gulpSequence = require('gulp-sequence')

gulp.task('lint', function() {
    return gulp.src(['./src/**/*.js', '!**/node_modules/**', '!**/target/**','!**/public/js/**', '!**/devportal/**', '!**/jsrsasign-all-min.js', '!**/ValidateRequest.js'])
        .pipe(eslint({
            fix: true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('startdeploy', function( cb) {
  require('edge-launchpad')(gulp);
  cb();
});


gulp.task('sampleprojectdeploy', function (cb) {
  gulpSequence('startdeploy', 'deploy', cb);
})

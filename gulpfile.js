var gulp = require('gulp')
var eslint = require('gulp-eslint');
var gulpSequence = require('gulp-sequence')
var cucumber = require('gulp-cucumber')

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

gulp.task('test', function() {
    return gulp.src('test/features/*')
        .pipe(cucumber({
            'steps': ['test/features/step_definitions/apickli-gherkin.js'],
            'support': 'test/features/support/*.js',
            'format': 'summary'
        }));
});

gulp.task('sampleprojectdeploy', function (cb) {
  gulpSequence('startdeploy', 'deploy', cb);
})

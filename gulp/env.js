import args from './support/args';
import gulp from 'gulp';
import { execSync } from 'child_process';

// Version getter.
const getVersion = () => {
   var version;
   try {
     version = process.env.SOURCE_VERSION || process.env.SHA || execSync('git rev-parse HEAD').toString().trim();;
   } catch (e) {
     version = 'unknown';
   }
   return version;
};

const VERSION = getVersion();

gulp.task('env', () => {
  process.env.NODE_ENV = args.production ? 'production' : 'development';
  // The app is not a library, so it doesn't make sense to use semver.
  // Este uses appVersion for crash reporting to match bad builds easily.
  process.env.appVersion = VERSION;
});

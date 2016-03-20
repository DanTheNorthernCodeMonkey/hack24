var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var eslint = require('gulp-eslint'); //Lint JS files, including JSX

var paths = {
    dist: './.dist',
    css: [
        'styles/bootstrap.css',
        'styles/grayscale.css',
        'styles/react-widgets.css',
        'styles/site.css'

    ],
    html: 'app/*.html',
    js: ['app/*.js', 'app/**/*.js', 'app/*.jsx', 'app/**/*.jsx'],
    thirdParty: [
        'scripts/jquery.js',
        'scripts/bootstrap.js',
        'scripts/react-widgets.js',
        'scripts/react-widgets-globalize.js',
        'scripts/react-widgets-moment.js',
        'scripts/react-widgets-simple-number.js',
        'scripts/grayscale.js'
    ],
    fonts: [
        'fonts/*.*'
    ],
    stylefonts: [
        'styles/fonts/*.*'
    ],
    images: [
        'images/*.*'
    ],
    mainJs: 'app/main.jsx'
}

gulp.task('connect', function(){
    connect.server({
        root:[paths.dist],
        port: 5678,
        base: 'http:localhost',
        livereload: true
    })
});

gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload())
});

gulp.task('thirdParty', function(){
    gulp.src(paths.thirdParty)
        .pipe(concat('thirdParty.js'))
        .pipe(gulp.dest(paths.dist + '/scripts'));
});

gulp.task('js', function(){
    browserify(paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function(){
    gulp.src(paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(paths.dist + '/styles'))
        .pipe(connect.reload());
})

gulp.task('fonts', function(){
    gulp.src(paths.fonts)
        .pipe(gulp.dest(paths.dist + '/fonts'))
        .pipe(connect.reload());
})

gulp.task('stylefonts', function(){
    gulp.src(paths.stylefonts)
        .pipe(gulp.dest(paths.dist + '/styles/fonts'))
        .pipe(connect.reload());
})

gulp.task('images', function(){
    gulp.src(paths.images)
        .pipe(gulp.dest(paths.dist + '/images'))
        .pipe(connect.reload());
})

gulp.task('lint', function(){
    return gulp.src(paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
})

gulp.task('watch', function(){
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js', 'lint']);
    gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['thirdParty','html', 'js', 'css', 'fonts', 'stylefonts', 'images', 'lint', 'connect', 'watch']);
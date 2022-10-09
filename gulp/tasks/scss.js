import dartSass from 'sass'; //препроцесор sass
import gulpSass from 'gulp-sass'; // плагін для запуску sass
import rename from 'gulp-rename'; // перейменовує файл
import cleanCss from 'gulp-clean-css';// зжимає CSS файл
import webpcss from 'gulp-webpcss';// Вивід WEBP зображень
import autoprefixer from 'gulp-autoprefixer';// Додавання вендорних префіксів (для кросбраухерності)
import groupCssMediaQueries from 'gulp-group-css-media-queries';// Групування медіа запитів

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'SCSS',
                    message: 'Error: <%= error.message %>'
                })
            )
        )
        .pipe(sass({
            outputStyle: 'expanded'
        }, true))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 version'],
            cascade: true
        }))
        // завантаження не зжатого файла також
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}
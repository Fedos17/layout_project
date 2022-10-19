//імпортуємо основний модуль
import gulp from 'gulp';
//імпорт об'єкта з шляхами
import {path} from "./gulp/config/path.js";
//імпорт общих плагінів
import {plugins} from './gulp/config/plugins.js'

//глобальна змінна з шляхами, модулем gulp, і плагінами
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//імпорт створеної в f.tasks задачі
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {otfToTtf, ttfToWoff, fontsStyle} from './gulp/tasks/fonts.js';
import {svgSprive} from './gulp/tasks/svgSprive.js';


//функція для спостереження за файлами
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export {svgSprive}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//побудова запуску паралельних задач
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//побудова виконання послідовних задач задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//запуск виконання задачі
gulp.task('default', dev);
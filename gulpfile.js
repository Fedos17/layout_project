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

//функція для спостереження за файлами
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}

//побудова запуску паралельних задач
const mainTasks = gulp.parallel(copy, html, scss, js)

//побудова виконання послідовних задач задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

//запуск виконання задачі
gulp.task('default', dev);
//імпортуємо основний модуль
import gulp from 'gulp';
//імпорт об'єкта з шляхами
import {path} from "./gulp/config/path.js";

//глобальна змінна з шляхами і модулем gulp
global.app = {
    path: path,
    gulp: gulp
}

//імпорт створеної в f.tasks задачі
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";

//функція для спостереження за файлами
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

//побудова запуску паралельних задач
const mainTasks = gulp.parallel(html, copy)

//побудова виконання послідовних задач задач
const dev = gulp.series(reset, mainTasks, watcher)

//запуск виконання задачі
gulp.task('default', dev);
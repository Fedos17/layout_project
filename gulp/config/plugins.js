// інфо про плагіни //

import replace from "gulp-replace"; // пошук та заміна
import plumber from "gulp-plumber"; // опрацювання помилок
import notify from "gulp-notify"; // вивід повідомлення (підказок)
import browsersync from "browser-sync";


// об'єкт для збуру та передачі плагінів
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}
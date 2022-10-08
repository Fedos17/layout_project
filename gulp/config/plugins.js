// інфо про плагіни //

import replace from "gulp-replace"; // пошук та заміна
import plumber from "gulp-plumber"; // опрацювання помилок
import notify from "gulp-notify"; // вивід повідомлення (підказок)


// об'єкт для збуру та передачі плагінів
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
}
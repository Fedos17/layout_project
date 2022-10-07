// файл з шляхами

//отримуємо ім'я папки проекту
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// шлях до папки з результатом
const buildFolder = './dist';

//шлях до папки з вихідними файлами
const  srcFolder = './src';

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
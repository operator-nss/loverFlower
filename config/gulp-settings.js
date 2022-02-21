// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Пути к папкам и файлам проекта
export const path = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		pug: `${srcFolder}/pug/*.pug`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/*.*`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	ftp: `/public_html/` // Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
};

// Настройка FTP соединения
export const configFTP = {
	host: "o95417.hostru10.fornex.host", // Адрес FTP сервера
	user: "o95417", // Имя пользователя
	password: "T5*EIEUdwN^J<Th=", // Пароль
	parallel: 5 // Кол-во одновременных потоков
}

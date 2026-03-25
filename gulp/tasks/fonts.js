import gulp from 'gulp';
import fs from 'fs';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

import { filePaths } from '../config/paths.js';
import { logger } from '../config/logger.js';

const {fontFacesFile} = filePaths.src;
const italicRegex = /italic/i;
const cleanSeparator = /(?:_|__|-|\s)?(italic)/i;

const fontWeights = {
	thin: 100,
	hairline: 100,
	extralight: 200,
	ultralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	demibold: 600,
	bold: 700,
	extrabold: 800,
	ultrabold: 800,
	black: 900,
	heavy: 900,
	extrablack: 950,
	ultrablack: 950
};

const fontFaceTemplate = (name, file, weight, style) => `@font-face {
	font-family: ${name};
	font-display: swap;
	src: url("../fonts/${file}.woff2") format("woff2");
	font-weight: ${weight};
	font-style: ${style};
}\n\n`;

const otfToTtf = () => {
	/** ищем ВСЕ otf */
	return gulp.src(`${filePaths.src.fonts}/**/*.otf`, {})
		.pipe(logger.handleError('FONTS [otfToTtf]'))

		/** конвертим в ttf */
		.pipe(fonter({
			formats: ['ttf']
		}))

		/** кладём рядом */
		.pipe(gulp.dest(filePaths.src.fonts));
};


const ttfToWoff = () => {
	/** берём ВСЕ ttf */
	return gulp.src(`${filePaths.src.fonts}/**/*.ttf`, {})
		.pipe(logger.handleError('FONTS [ttfToWoff]'))

		/** ttf → woff2 */
		.pipe(ttf2woff2())
		.pipe(gulp.dest(filePaths.src.fonts))

		/** копируем в build */
		.pipe(gulp.src(`${filePaths.src.fonts}/**/*.{woff,woff2}`))
		.pipe(gulp.dest(filePaths.build.fonts));
};


const fontStyle = async () => {
	try {
		if (fs.existsSync(fontFacesFile)) {
			logger.warning('Файл scss/config/fonts.scss уже существует.\nДля обновления файла его нужно удалить!');
			return;
		}

		const fontFiles = await fs.promises.readdir(filePaths.build.fonts);

		if (!fontFiles || !fontFiles.length) {
			logger.error('Нет сконвертированных шрифтов');
			return;
		}

		await fs.promises.writeFile(fontFacesFile, '');
		let processedFonts = new Set();

		// УМНЫЙ ПАРСЕР V2
		const parseFontFileName = (fileName) => {
			let name = fileName;
			let weight = 400;
			let style = 'normal';

			const lower = fileName.toLowerCase();

			// italic
			if (italicRegex.test(lower)) {
				style = 'italic';
			}

			// ищем вес
			for (const key in fontWeights) {
				if (lower.includes(key)) {
					weight = fontWeights[key];
					break;
				}
			}

			// имя шрифта = всё до первого "-"
			if (fileName.includes('-')) {
				name = fileName.split('-')[0];
			} else {
				// если файл типа "MyriadProBold"
				for (const key in fontWeights) {
					if (lower.includes(key)) {
						name = fileName.toLowerCase().split(key)[0];
						break;
					}
				}
			}

			// чистим от мусора
			name = name.replace(/[_\s]+/g, '');

			return { name, weight, style };
		};

		for (const file of fontFiles) {
			if (!file.endsWith('.woff2')) continue;

			const fileName = file.replace('.woff2', '');

			if (processedFonts.has(fileName)) continue;

			const { name, weight, style } = parseFontFileName(fileName);

			await fs.promises.appendFile(
				fontFacesFile,
				fontFaceTemplate(name, fileName, weight, style)
			);

			processedFonts.add(fileName);
		}

		logger.warning('Шрифты успешно подключены');
	} catch (err) {
		logger.handleError('Ошибка при обработке шрифтов:\n', err);
	}
};



export { otfToTtf, ttfToWoff, fontStyle };

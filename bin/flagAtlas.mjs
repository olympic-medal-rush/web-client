import { readdirSync, writeFileSync } from 'fs';
import sharp from 'sharp';

const args = process.argv.slice(2);
const flagsFolder = args[0];
const outDir = args[1];

const flags = readdirSync(flagsFolder)
	.map((filename) => flagsFolder + filename)
	.filter((filepath) => filepath.endsWith('png'));

generateAtlases({ size: 2048, mobileFactor: 0.5, maxAtlasCount: 1, flags, destinationFolder: outDir });

async function generateAtlases({ size = 2048, mobileFactor = 0.5, maxAtlasCount = 5, flags = [], destinationFolder = '' } = {}) {
	const averageImagesCountPerAtlas = flags.length / maxAtlasCount;
	// const imageSize = 64;
	const imageSize = floorPowerOfTwo(Math.sqrt((size * size) / averageImagesCountPerAtlas));
	const gridSize = Math.floor(size / imageSize);
	const imagesPerAtlas = gridSize * gridSize;
	const atlasCount = Math.ceil(flags.length / imagesPerAtlas);

	console.log('Images have a size of', imageSize);
	console.log(imagesPerAtlas, 'images per atlas');

	const atlasData = await Promise.all(
		flags.map(async (flag, i) => {
			const { width: initialWidth, height: initialHeight } = await sharp(flag).metadata();
			const ratio = initialWidth / initialHeight;
			const buffer = await sharp(flag).removeAlpha().resize(imageSize, imageSize, { fit: 'fill', kernel: 'nearest' }).toBuffer();

			return {
				filename: flag.split('/').pop().split('.').shift(),
				input: buffer,
				ratio,
				width: imageSize,
				height: imageSize,
				left: ((i % imagesPerAtlas) % gridSize) * imageSize,
				top: Math.floor((i % imagesPerAtlas) / gridSize) * imageSize,
			};
		}),
	);

	for (let i = 0; i < atlasCount; i++) {
		const blankAtlas = await sharp({
			create: {
				width: size,
				height: size,
				channels: 3,
				background: { r: 0, g: 0, b: 0 },
			},
		});
		const atlasSlice = atlasData.slice(i * imagesPerAtlas, i * imagesPerAtlas + imagesPerAtlas);

		const composedAtlasBuffer = await blankAtlas.composite(atlasSlice).webp({ nearLossless: false, lossless: true }).toBuffer();

		// default size
		await sharp(composedAtlasBuffer).toFile(`${destinationFolder}/atlas${i + 1}.webp`);
		// mobile size
		await sharp(composedAtlasBuffer)
			.resize(size * mobileFactor, size * mobileFactor)
			.toFile(`${destinationFolder}/atlas${i + 1}-mobile.webp`);

		const jsonData = atlasSlice.map(cleanPostData);
		const jsonMobileData = jsonData.map((post) => ({ ...post, left: post.left * mobileFactor, top: post.top * mobileFactor }));

		writeFileSync(`${destinationFolder}/atlas${i + 1}.json`, JSON.stringify(jsonData));
		writeFileSync(`${destinationFolder}/atlas${i + 1}-mobile.json`, JSON.stringify(jsonMobileData));
	}

	const atlasOverview = {
		total: flags.length,
		imagesPerAtlas,
		atlasCount,
		imageSize,
		mobileImageSize: imageSize * mobileFactor,
	};

	writeFileSync(`${destinationFolder}/atlasOverview.json`, JSON.stringify(atlasOverview));
}

function floorPowerOfTwo(value) {
	return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}

function cleanPostData(post) {
	delete post.input;
	delete post.width;
	delete post.height;
	delete post.video_link;
	delete post.photo_link;
	delete post.avatar_url;
	delete post.image_path;
	delete post.video_path;
	return post;
}

export { generateAtlases };

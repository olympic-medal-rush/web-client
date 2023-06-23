/* 
This file is used to list and load the assets you need. To configure the behavior of the loader you can edit the AssetsManager file.

You can set a priority to your asset to reorder the loading process.

You can add a callback to any of the manifest items anywhere in your code (obviously before the asset is loaded). 
This is usefull if you desactivate the blocking behavior of the loader.

Finally, you can set some item to be criticals if you want your to wait the loading of some assets before initializing the app.
*/

const manifest = {
	images: {},
	textures: {
		groundData: { path: `${import.meta.env.BASE_URL}assets/textures/terrain/ground.jpg` },
		buildingsColors: { path: `${import.meta.env.BASE_URL}assets/textures/terrain/colors.png` },
		noise: { path: `${import.meta.env.BASE_URL}assets/textures/noise.jpg` },
		skybox: { path: `${import.meta.env.BASE_URL}assets/textures/skybox.png` },
		background: { path: `${import.meta.env.BASE_URL}assets/textures/environment/backgrounds.jpg` },

		medalHeights: { path: `${import.meta.env.BASE_URL}assets/textures/medals/medal-heights.png` },

		playerAo: { path: `${import.meta.env.BASE_URL}assets/textures/players/player-ao.jpg` },
		playerMetalness: { path: `${import.meta.env.BASE_URL}assets/textures/players/player-metalness.jpg` },
		playerPositionOffsets: { path: `${import.meta.env.BASE_URL}assets/textures/players/offsetsCombined.png` },
		playerNormal: { path: `${import.meta.env.BASE_URL}assets/textures/players/normalsCombined.png` },
		reactmoji: { path: `${import.meta.env.BASE_URL}assets/textures/players/reactmoji.png` },
		flagsatlas: { path: `${import.meta.env.BASE_URL}assets/textures/flagsAtlas.webp`, mobilePath: `${import.meta.env.BASE_URL}assets/textures/flagsAtlas-mobile.webp` },

		joFlag: { path: `${import.meta.env.BASE_URL}assets/images/flags/JO-FLAG.png` },
	},
	envMaps: {
		envmap: { path: `${import.meta.env.BASE_URL}assets/textures/envmap.hdr` },
		// ...
	},
	models: {
		terrain: { path: `${import.meta.env.BASE_URL}assets/models/terrain.glb` },
		player: { path: `${import.meta.env.BASE_URL}assets/models/character.glb` },
		medal: { path: `${import.meta.env.BASE_URL}assets/models/medal.glb` },
	},
	jsons: {
		flagsAtlas: { path: `${import.meta.env.BASE_URL}assets/jsons/flagsAtlas.json`, mobilePath: `${import.meta.env.BASE_URL}assets/jsons/flagsAtlas-mobile.json` },
	},
	sounds: {
		mario: { path: `${import.meta.env.BASE_URL}assets/sounds/mario.mp3` },
		mario2: { path: `${import.meta.env.BASE_URL}assets/sounds/mario.mp3` },
	},
};

export { manifest };

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
		groundData: { path: `${import.meta.env.BASE_URL}assets/textures/ground.png` },
		seamless1: { path: `${import.meta.env.BASE_URL}assets/textures/seamless2.png` },
		seamless2: { path: `${import.meta.env.BASE_URL}assets/textures/seamless7.png` },
		seamless3: { path: `${import.meta.env.BASE_URL}assets/textures/seamless6.png` },
		seamless4: { path: `${import.meta.env.BASE_URL}assets/textures/seamless4.png` },
		noise: { path: `${import.meta.env.BASE_URL}assets/textures/noiseFbm1.png` },
		skybox: { path: `${import.meta.env.BASE_URL}assets/textures/skybox.png` },

		medalHeights: { path: `${import.meta.env.BASE_URL}assets/textures/medal-heights.png` },

		playerAo: { path: `${import.meta.env.BASE_URL}assets/textures/player-ao.jpg` },
		playerMetalness: { path: `${import.meta.env.BASE_URL}assets/textures/player-metalness.png` },
		playerPositionOffsets: { path: `${import.meta.env.BASE_URL}assets/textures/offsets.png` },
		playerNormalOffsets: { path: `${import.meta.env.BASE_URL}assets/textures/normals.png` },
	},
	envMaps: {
		envmap: { path: `${import.meta.env.BASE_URL}assets/textures/forest.hdr` },
		// ...
	},
	models: {
		terrain: { path: `${import.meta.env.BASE_URL}assets/models/terrain.glb` },
		player: { path: `${import.meta.env.BASE_URL}assets/models/character.glb` },
		medal: { path: `${import.meta.env.BASE_URL}assets/models/medal.glb` },
	},
	jsons: {},
	sounds: {
		mario: { path: `${import.meta.env.BASE_URL}assets/sounds/mario.mp3` },
		mario2: { path: `${import.meta.env.BASE_URL}assets/sounds/mario.mp3` },
	},
};

export { manifest };

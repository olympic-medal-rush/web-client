/* 
This file is used to list and load the assets you need. To configure the behavior of the loader you can edit the AssetsManager file.

You can set a priority to your asset to reorder the loading process.

You can add a callback to any of the manifest items anywhere in your code (obviously before the asset is loaded). 
This is usefull if you desactivate the blocking behavior of the loader.

Finally, you can set some item to be criticals if you want your to wait the loading of some assets before initializing the app.
*/

const manifest = {
	images: {
		logo: { path: `${import.meta.env.BASE_URL}assets/images/logo.png` },
	},
	textures: {
		groundData: { path: `${import.meta.env.BASE_URL}assets/textures/terrain/ground.jpg` },
		buildingsColors: { path: `${import.meta.env.BASE_URL}assets/textures/terrain/colors.png` },
		aoBuildings: { path: `${import.meta.env.BASE_URL}assets/textures/terrain/ao-buildings.jpg` },

		noise: { path: `${import.meta.env.BASE_URL}assets/textures/noise.jpg` },

		background: { path: `${import.meta.env.BASE_URL}assets/textures/environment/backgrounds.jpg` },

		playerAo: { path: `${import.meta.env.BASE_URL}assets/textures/players/player-ao.jpg` },
		playerMetalness: { path: `${import.meta.env.BASE_URL}assets/textures/players/player-metalness.jpg` },
		playerPositionOffsets: { path: `${import.meta.env.BASE_URL}assets/textures/players/offsetsCombined.png` },
		playerNormal: { path: `${import.meta.env.BASE_URL}assets/textures/players/normalsCombined.png` },
		reactmoji: { path: `${import.meta.env.BASE_URL}assets/textures/players/reactmoji.png` },

		flagsAtlas: { path: `${import.meta.env.BASE_URL}assets/textures/flagsAtlas.webp`, mobilePath: `${import.meta.env.BASE_URL}assets/textures/flagsAtlas-mobile.webp` },

		omrFlag: { path: `${import.meta.env.BASE_URL}assets/images/flags/OMR-FLAG.png` },
	},
	envMaps: {
		envmap: { path: `${import.meta.env.BASE_URL}assets/textures/envmap.hdr`, size: 119_808 },
		// ...
	},
	models: {
		terrain: { path: `${import.meta.env.BASE_URL}assets/models/terrain.glb`, size: 80_192 },
		player: { path: `${import.meta.env.BASE_URL}assets/models/character.glb`, size: 805_376 },
		medal: { path: `${import.meta.env.BASE_URL}assets/models/medal.glb`, size: 103_424 },
	},
	jsons: {
		flagsAtlasData: { path: `${import.meta.env.BASE_URL}assets/jsons/flagsAtlas.json`, mobilePath: `${import.meta.env.BASE_URL}assets/jsons/flagsAtlas-mobile.json` },
	},
	sounds: {
		// PLAYER
		playerRotation: { path: `${import.meta.env.BASE_URL}assets/sounds/player_rotation.mp3`, params: { volume: 0.05 } },
		playerJump: { path: `${import.meta.env.BASE_URL}assets/sounds/player_jump.mp3`, params: { volume: 0.4 } },
		playerFall: { path: `${import.meta.env.BASE_URL}assets/sounds/player_fall.mp3`, params: { volume: 0.3 } },
		playerCollect: { path: `${import.meta.env.BASE_URL}assets/sounds/player_collect.mp3`, params: { volume: 2 } },

		// UI
		click: { path: `${import.meta.env.BASE_URL}assets/sounds/click.mp3`, params: { volume: 1 } },
		validated: { path: `${import.meta.env.BASE_URL}assets/sounds/validated.mp3`, params: { volume: 1 } },
		voteClick: { path: `${import.meta.env.BASE_URL}assets/sounds/vote_click.mp3`, params: { volume: 1 } },
		tick: { path: `${import.meta.env.BASE_URL}assets/sounds/tick.mp3`, params: { volume: 0.5 } },
		modalOpen: { path: `${import.meta.env.BASE_URL}assets/sounds/modal_open.mp3`, params: { volume: 0.8 } },
		modalClose: { path: `${import.meta.env.BASE_URL}assets/sounds/modal_close.mp3`, params: { volume: 0.6 } },

		// GAME EVENTS
		collectMedal: { path: `${import.meta.env.BASE_URL}assets/sounds/medal_collect.mp3`, params: { volume: 1 } },
		newMedals: { path: `${import.meta.env.BASE_URL}assets/sounds/new_medals.mp3`, params: { volume: 0.4 } },
		notification: { path: `${import.meta.env.BASE_URL}assets/sounds/notification.mp3`, params: { volume: 1 } },

		// AMBIENT SOUNDS
		gameAmbient: { path: `${import.meta.env.BASE_URL}assets/sounds/game_ambient.mp3`, params: { fadeDuration: 500, volume: 0.2, loop: true } },

		// bgMusic: { path: `${import.meta.env.BASE_URL}assets/sounds/BG_MUSIC.mp3` },
		// collectMedal: { path: `${import.meta.env.BASE_URL}assets/sounds/COLLECT_MEDAL.mp3` },
		// ctaClick: { path: `${import.meta.env.BASE_URL}assets/sounds/CTA_CLICK.mp3` },
		// jumpMedal: { path: `${import.meta.env.BASE_URL}assets/sounds/JUMP_MEDAL.mp3` },
		// jumpPerso: { path: `${import.meta.env.BASE_URL}assets/sounds/JUMP_PERSO.mp3` },
		// modal: { path: `${import.meta.env.BASE_URL}assets/sounds/MODAL.mp3` },
		// notif: { path: `${import.meta.env.BASE_URL}assets/sounds/NOTIF.mp3` },
		// spawnMedal: { path: `${import.meta.env.BASE_URL}assets/sounds/SPAWN_MEDAL.mp3` },
		// uiClick: { path: `${import.meta.env.BASE_URL}assets/sounds/UI_CLICK.mp3` },
		// voteClick: { path: `${import.meta.env.BASE_URL}assets/sounds/VOTE_CLICK.mp3` },
		// voteEnd: { path: `${import.meta.env.BASE_URL}assets/sounds/VOTE_END.mp3` },
	},
};

export { manifest };

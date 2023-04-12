import { GlobalApp } from '@/main';

/**
 *
 * @param {*} pane
 * @param {import("@webglApp/Webgl/Renderer.js").Renderer} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	folder.addButton({ title: 'Play' }).on('click', () => {
		if (GlobalApp.sound.isInit) {
			console.log('Sound play');
			GlobalApp.sound.audios.mario.play();
		} else {
			console.log('Sound init');
			GlobalApp.sound.initAudio();
			console.log('Sound play');
			GlobalApp.sound.audios.mario.play();
		}
	});

	folder.addButton({ title: 'Pause' }).on('click', () => {
		console.log('Sound pause');
		GlobalApp.sound.audios.mario.pause();
		GlobalApp.sound.audios.mario.currentTime = 0;
	});
	return folder;
}

function debug(_instance) {}

export { createPane, debug };

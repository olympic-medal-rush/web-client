import { app } from '@webglApp/App';

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
		if (app.sound.isInit) {
			console.log('Sound play');
			app.sound.audios.mario.play();
		} else {
			console.log('Sound init');
			app.sound.initAudio();
			console.log('Sound play');
			app.sound.audios.mario.play();
		}
	});

	folder.addButton({ title: 'Pause' }).on('click', () => {
		console.log('Sound pause');
		app.sound.audios.mario.pause();
		app.sound.audios.mario.currentTime = 0;
	});
	return folder;
}

function debug(_instance) {}

export { createPane, debug };

import { state } from '@/State';
import { app } from '@webglApp/App';
import { manifest } from '@webglApp/utils/manifest';
import { EVENTS } from '@utils/constants';
import SingleAudio from './SingleAudio';

let iSoundController;
class SoundController {
	constructor() {
		if (iSoundController) return this;

		state.on(EVENTS.POINTER_DOWN, this.#initAudio);
	}

	#initAudio = () => {
		this.audioCtx = new AudioContext();
		state.off(EVENTS.POINTER_DOWN, this.#initAudio);

		this.keys = Object.keys(manifest.sounds);
		this.sounds = app.core.assetsManager.get(...this.keys);

		this.audios = Object.fromEntries(this.keys.map((key, i) => [key, new SingleAudio(this.audioCtx, this.sounds[i])]));
	};

	play(key) {
		this.audios[key].play();
	}

	pause(key) {
		this.audios[key].pause();
	}
}

export { SoundController };

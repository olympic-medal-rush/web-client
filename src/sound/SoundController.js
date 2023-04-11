import { state } from '@/State';
import { app } from '@webglApp/App';
import { manifest } from '@webglApp/utils/manifest';
import { EVENTS } from '@utils/constants';
import SingleAudio from './SingleAudio';

class SoundController {
	constructor() {
		state.on(EVENTS.POINTER_DOWN, this.#initAudio);
	}

	#initAudio = () => {
		this.audioCtx = new AudioContext();

		this.keys = Object.keys(manifest.sounds);
		this.sounds = app.core.assetsManager.get(...this.keys);

		this.audios = Object.fromEntries(this.keys.map((key, i) => [key, new SingleAudio(this.audioCtx, this.sounds[i])]));
		state.off(EVENTS.POINTER_DOWN, this.#initAudio);
	};

	play(key) {
		this.audios[key].play();
	}

	pause(key) {
		this.audios[key].pause();
	}
}

export { SoundController };

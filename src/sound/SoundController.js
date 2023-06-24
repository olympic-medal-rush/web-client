import { app } from '@/App';
import { state } from '@/State';
import { EVENTS } from '@utils/constants';
import { manifest } from '@utils/manifest';
import SingleAudio from './SingleAudio';

class SoundController {
	constructor() {
		state.on(EVENTS.POINTER_DOWN, this.initAudio);
		state.on(EVENTS.ATTACH, this.#attach);

		this.isInit = false;
	}

	initAudio = () => {
		this.audioCtx = new AudioContext();

		this.keys = Object.keys(manifest.sounds);
		this.sounds = app.core.assetsManager.get(...this.keys);

		this.audios = Object.fromEntries(this.keys.map((key, i) => [key, new SingleAudio(this.audioCtx, this.sounds[i])]));
		state.off(EVENTS.POINTER_DOWN, this.initAudio);
		this.isInit = true;
	};

	#attach = () => {
		app.debug?.mapping.add(this, 'Sound', 1);
	};

	play(key) {
		if (!this.isInit) this.initAudio();
		this.audios[key].play();
	}

	pause(key) {
		this.audios[key].pause();
	}
}

export { SoundController };

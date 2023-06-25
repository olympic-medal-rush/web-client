import { app } from '@/App';
import { state } from '@/State';
import { Howl, Howler } from 'howler';
import { Euler, Vector2 } from 'three';
import { EVENTS } from '@utils/constants';
import { manifest } from '@utils/manifest';

class SoundController {
	/** @type {import('three').Vector3 | import('three').Vector2} */
	#howlPosition = null;
	/** @type {import('three').Euler | {value: number}} */
	#howlOrientation = null;
	constructor() {
		state.on(EVENTS.ATTACH, this.#attach);
		state.on(EVENTS.TICK, this.#update);
		document.addEventListener('visibilitychange', this.#onVisibilityChange);

		Howler.volume(0.7);

		/**
		 * @type {Object.<string, {howl: Howl, params: Object}>}
		 */
		this.sounds = {};
		/**
		 * @type {Object.<string, Howl>}
		 */
		this.ambients = {};
		this.currentAmbient = null;

		// this.isInit = false;
		this.howlPosition = null;
	}

	#attach = () => {
		this.#howlPosition = app.webgl.camera.position;
		this.#howlOrientation = app.webgl.camera.rotation;

		this.#initAudio();
	};

	#initAudio() {
		this.add('collectMedal');
		this.add('newMedals');
		this.add('notification');
		this.add('validated');
		this.add('click');
		this.add('voteNoClick');
		this.add('voteClick');
		this.add('modalOpen');
		this.add('modalClose');

		this.add('gameAmbient');
	}

	setGlobal(position, rotation) {
		this.#howlPosition = position;
		this.#howlOrientation = rotation;
	}

	add(manifestKey, key = null) {
		const { params, path } = manifest.sounds[manifestKey];

		this.sounds[key || manifestKey] = {
			howl: new Howl({
				src: [path],
				loop: params.loop,
				rate: params.rate,
				volume: params.volume,
			}),
			params,
		};
	}

	play(key, params = {}) {
		const sound = this.sounds[key];

		if (!sound) return;

		const pos = params.pos || sound.params.pos;
		if (pos) sound.howl.pos(pos.x, pos.y, pos.z);

		if (params.rate) sound.howl.rate(params.rate || 1);

		if (!params.replay && sound.howl.playing()) return;

		sound.howl.volume(params.volume || sound.params.volume || 0);

		if (sound.params.fadeDuration) sound.howl.fade(0, sound.howl.volume(), sound.params.fadeDuration);

		sound.howl.play();
	}

	pause(key) {
		const sound = this.sounds[key];
		if (!sound || !sound.howl.playing()) return;

		if (sound.params.fadeDuration) sound.howl.fade(sound.howl.volume(), 0, sound.params.fadeDuration).once('fade', () => this.sounds[key].howl.stop());
		else sound.howl.stop();
	}

	setParams(key, params) {
		const sound = this.sounds[key];
		if (!sound) return;

		if (params.volume) sound.howl.volume(params.volume);
		if (params.rate) sound.howl.rate(params.rate);
		if (params.pos) sound.howl.pos(params.pos.x, params.pos.y, params.pos.z);
	}

	#onVisibilityChange = () => {
		Howler.mute(document.visibilityState !== 'visible');
	};

	#update = () => {
		if (this.#howlPosition && this.#howlOrientation) {
			if (this.#howlPosition instanceof Vector2) Howler.pos(this.#howlPosition.x, 0, this.#howlPosition.y);
			else Howler.pos(this.#howlPosition.x, this.#howlPosition.y, this.#howlPosition.z);

			if (this.#howlOrientation instanceof Euler) Howler.orientation(this.#howlOrientation.x, this.#howlOrientation.y, this.#howlOrientation.z);
			else Howler.orientation(0, this.#howlOrientation.value, 0);
		}
	};
}

export { SoundController };

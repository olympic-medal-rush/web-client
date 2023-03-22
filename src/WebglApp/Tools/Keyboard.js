import { state } from '@/State.js';
import { EVENTS } from '@utils/constants.js';

class Keyboard {
	constructor() {
		state.register(this);
	}

	onAttach() {
		document.addEventListener('keydown', this.#keyDown);
	}

	#keyDown = (e) => {
		state.emit(EVENTS.KEY_DOWN, e.key);
	};
}

export { Keyboard };

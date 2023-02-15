import { EVENTS } from '@utils/constants';
import { state } from '../State';

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

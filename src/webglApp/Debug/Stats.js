import { state } from '@/State';

class Stats {
	#stats;
	constructor() {
		state.register(this);
	}

	async load() {
		const Stats = (await import('stats.js')).default;
		this.#stats = Stats();
		this.#stats.showPanel(0);
		this.#stats.dom.classList.toggle('sixty-debug-hidden', localStorage.getItem('debug') === 'true');
		document.body.appendChild(this.#stats.dom);
	}

	onTick() {
		this.#stats.update();
	}

	onKeyDown(key) {
		if (key === 'h') this.#stats.dom.classList.toggle('sixty-debug-hidden');
	}
}

export { Stats };

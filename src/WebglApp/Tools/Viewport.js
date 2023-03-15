import { state } from '@/State.js';
import { app } from '@WebglApp/App.js';
import { BREAKPOINTS } from '@utils/config.js';
import { EVENTS } from '@utils/constants.js';

class Viewport {
	constructor() {
		state.register(this);

		const bbox = app.$wrapper.getBoundingClientRect();

		this.width = Math.min(window.innerWidth, bbox.width);
		this.height = bbox.height;
		this.dpr = Math.min(window.innerWidth < BREAKPOINTS.tablet ? 2 : 1.5, window.devicePixelRatio);
		this.ratio = this.width / this.height;
		this.breakpoint = window.innerWidth < BREAKPOINTS.tablet ? 'mobile' : window.innerWidth < BREAKPOINTS.desktop ? 'tablet' : 'desktop';

		this.isMobileAtLaunch = this.breakpoint === 'mobile';
	}

	onAttach() {
		const resizeObserver = new ResizeObserver(this.resize);
		resizeObserver.observe(app.$wrapper);
	}

	get infos() {
		return { width: this.width, height: this.height, dpr: this.dpr, ratio: this.ratio, device: this.breakpoint };
	}

	resize = (entries) => {
		if (entries[0].contentBoxSize) {
			const contentBoxSize = Array.isArray(entries[0].contentBoxSize) ? entries[0].contentBoxSize[0] : entries[0].contentBoxSize;
			this.width = contentBoxSize.inlineSize;
			this.height = contentBoxSize.blockSize;
		} else {
			this.width = entries[0].contentRect.width;
			this.height = entries[0].contentRect.height;
		}

		this.dpr = Math.min(window.innerWidth < BREAKPOINTS.tablet ? 2 : 1.5, window.devicePixelRatio);
		this.ratio = this.width / this.height;
		this.breakpoint = window.innerWidth < BREAKPOINTS.tablet ? 'mobile' : window.innerWidth < BREAKPOINTS.desktop ? 'tablet' : 'desktop';

		state.emit(EVENTS.RESIZE, this.infos);
	};
}

export { Viewport };

import { Keyboard } from './Keyboard';
import { Mouse } from './Mouse';
import { Noise } from './Noise';
import { Viewport } from './Viewport';

function createToolsModules() {
	const mouse = new Mouse();
	const viewport = new Viewport();
	const keyboard = new Keyboard();
	const noise = new Noise();

	return {
		mouse,
		viewport,
		keyboard,
		noise,
	};
}

export { createToolsModules };

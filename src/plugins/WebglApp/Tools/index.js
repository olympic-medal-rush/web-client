import { Keyboard } from './Keyboard.js';
import { Mouse } from './Mouse.js';
import { Viewport } from './Viewport.js';

function createToolsModules() {
	const mouse = new Mouse();
	const viewport = new Viewport();
	const keyboard = new Keyboard();
	// const noise = new Noise();

	return {
		mouse,
		viewport,
		keyboard,
	};
}

export { createToolsModules };

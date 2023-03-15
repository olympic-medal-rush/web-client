import { app } from '@WebglApp/App.js';

async function createDebugModules() {
	await import('@styles/debug/debug.scss');

	const { URLParams } = await import('./URLParams.js');
	const urlParams = new URLParams();

	const Mapping = (await import('./Mapping.js')).Mapping;
	const mapping = new Mapping();
	await mapping.load();

	const Stats = (await import('./Stats.js')).Stats;
	const stats = new Stats();
	await stats.load();

	window['APP'] = app;

	return {
		urlParams,
		mapping,
		stats,
	};
}

export { createDebugModules };

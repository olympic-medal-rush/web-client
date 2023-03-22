import { app } from '@webglApp/App';

async function createDebugModules() {
	await import('@styles/debug/debug.scss');

	const { URLParams } = await import('./URLParams');
	const urlParams = new URLParams();

	const Mapping = (await import('./Mapping')).Mapping;
	const mapping = new Mapping();
	await mapping.load();

	const Stats = (await import('./Stats')).Stats;
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

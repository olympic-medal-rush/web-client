import { AssetsManager } from './AssetsManager';
import { Ticker } from './Ticker';

function createCoreModules() {
	const assetsManager = new AssetsManager();
	const ticker = new Ticker();

	return {
		assetsManager,
		ticker,
	};
}

export { createCoreModules };

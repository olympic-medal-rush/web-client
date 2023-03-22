import { app } from '@webglApp/App';
import { manifest } from '@webglApp/utils/manifest';
import { computeEnvmap } from '@webglApp/utils/misc';

/**
 *
 * @param {import('@webglApp/Webgl/MainScene').MainScene} instance
 */
function debug(instance) {
	if (import.meta.hot) {
		import.meta.hot.on('envmap-reload', async (_data) => {
			const texture = await app.core.assetsManager.loaders.envMaps.loader.loadAsync(manifest.envMaps.envmap.path + '?t=' + new Date().getTime());
			instance.environment.dispose();
			instance.environment = computeEnvmap(app.webgl.renderer, texture, false);
		});
	}
}

export { debug };

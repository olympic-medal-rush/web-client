import { app } from '@/App';
import { state } from '@/State';
import { CameraHelper, Vector3 } from 'three';
import { TERRAIN } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { manifest } from '@utils/manifest';
import { computeEnvmap } from '@utils/misc';

/**
 *
 * @param {import('@Webgl/Scenes/Main/MainScene').MainScene} instance
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

/**
 *
 * @param {any} pane
 * @param {import('@Webgl/Scenes/Main/MainScene').MainScene} instance
 * @param {string} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	folder.addInput(instance.shadowCamera, 'position', { label: 'LightPosition' }).on('change', () => instance.shadowCamera.lookAt(new Vector3(TERRAIN.size * 0.5, 0, TERRAIN.size * 0.5)));

	const camHelper = new CameraHelper(instance.shadowCamera);
	camHelper.visible = false;
	instance.add(camHelper);

	folder.addInput(camHelper, 'visible', { label: 'CamHelper' });

	const showCanvas = { value: false };
	const canvas = document.createElement('canvas');
	canvas.width = instance.dynamicShadowRenderTarget.width;
	canvas.height = instance.dynamicShadowRenderTarget.height;
	canvas.style.width = '512px';
	canvas.style.height = '512px';
	canvas.style.position = 'absolute';
	canvas.style.top = '0';
	canvas.style.left = '0';
	canvas.style.transformOrigin = '0 0';

	canvas.style.backgroundColor = '#000';

	const ctx = canvas.getContext('2d');

	const tick = () => {
		const pixelBuffer = new Uint8Array(4 * canvas.width * canvas.height);
		app.webgl.renderer.readRenderTargetPixels(instance.dynamicShadowRenderTarget, 0, 0, canvas.width, canvas.height, pixelBuffer);
		const imageData = new ImageData(canvas.width, canvas.height);
		imageData.data.set(pixelBuffer);

		ctx.putImageData(imageData, 0, 0);
	};

	const toggle = () => {
		if (showCanvas.value) {
			document.body.appendChild(canvas);
			state.on(EVENTS.TICK, tick);
		} else {
			document.body.removeChild(canvas);
			state.off(EVENTS.TICK, tick);
		}
	};

	folder.addInput(showCanvas, 'value', { label: 'ShadowCanvas' }).on('change', toggle);

	return folder;
}

export { debug, createPane };

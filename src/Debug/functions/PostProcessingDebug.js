import { ColorDebugHelper } from '@Debug/debugConfig';

/**
 *
 * @param {*} pane
 * @param {import("@Webgl/PostProcessing").PostProcessing} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	folder.addInput(instance.uniforms.uEmissiveIntensity, 'value', { min: 0, max: 10, label: 'uEmissiveIntensity' });
	folder.addInput(instance.uniforms.uFadeProgress, 'value', { min: 0, max: 1, label: 'uFadeProgress' });
	folder.addInput(new ColorDebugHelper(instance.uniforms.uFadeColor, 'value'), 'value', { label: 'uFadeColor' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

import { ColorDebugHelper } from '@Debug/debugConfig';

/**
 *
 * @param {*} pane
 * @param {import("@Webgl/Materials/Grid/material").GridMaterial} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	folder.addInput(new ColorDebugHelper(instance.uniforms.uWaterColor, 'value'), 'value');
	folder.addInput(new ColorDebugHelper(instance.uniforms.uGrassColor, 'value'), 'value');
	folder.addInput(new ColorDebugHelper(instance.uniforms.uPathColor, 'value'), 'value');
	folder.addInput(new ColorDebugHelper(instance.uniforms.uGroundColor, 'value'), 'value');
	folder.addInput(new ColorDebugHelper(instance.uniforms.uFogColor, 'value'), 'value');

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

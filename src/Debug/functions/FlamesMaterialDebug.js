import { ColorDebugHelper } from '@Debug/debugConfig';

/**
 *
 * @param {*} pane
 * @param {import("@Webgl/Materials/Flames/material").FlamesMaterial} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	if (instance.uniforms.uColor) folder.addInput(new ColorDebugHelper(instance.uniforms.uColor, 'value'), 'value');
	if (instance.uniforms.uAnimationProgress) folder.addInput(instance.uniforms.uAnimationProgress, 'value', { min: 0, max: 1, label: 'uAnimationProgress' });
	if (instance.uniforms.uGlobalRadius) folder.addInput(instance.uniforms.uGlobalRadius, 'value', { min: 0, max: 1, label: 'uGlobalRadius' });
	if (instance.uniforms.uGlobalSpeed) folder.addInput(instance.uniforms.uGlobalSpeed, 'value', { min: 0, max: 1, label: 'uGlobalSpeed' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

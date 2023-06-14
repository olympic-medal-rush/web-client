import { ColorDebugHelper } from '@Debug/debugConfig';

/**
 *
 * @param {*} pane
 * @param {import("@Webgl/Materials/Teams/material").TeamsMaterial} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	folder.addInput(instance.uniforms.uMetalness, 'value', { min: 0, max: 5, label: 'uMetalness' });
	folder.addInput(instance.uniforms.uRoughness, 'value', { min: 0, max: 5, label: 'uRoughness' });
	folder.addInput(instance.uniforms.uAoMapIntensity, 'value', { min: 0, max: 5, label: 'uAoMapIntensity' });
	folder.addInput(instance.uniforms.uEnvMapIntensity, 'value', { min: 0, max: 5, label: 'uEnvMapIntensity' });

	if (instance.uniforms.uAnimationProgress) folder.addInput(instance.uniforms.uAnimationProgress, 'value', { min: 0, max: 1, label: 'uAnimationProgress' });
	if (instance.uniforms.uRotationY) folder.addInput(instance.uniforms.uRotationY, 'value', { min: 0, max: 1, label: 'uRotationY' });
	folder.addInput(new ColorDebugHelper(instance.uniforms.uGold, 'value'), 'value', { label: 'uGold' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

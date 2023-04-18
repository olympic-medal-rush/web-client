import { ColorDebugHelper } from '../debugConfig';

/**
 *
 * @param {*} pane
 * @param {import("@webglApp/Webgl/Objects/Player").Player} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	const flameFolder = folder.addFolder({ title: 'Flame', expanded: false });
	flameFolder.addInput(instance.flame.material.uniforms.uRadius, 'value', {
		min: 0,
		max: 0.6,
		label: 'uRadius',
	});
	flameFolder.addInput(instance.flame.material.uniforms.uGlobalSpead, 'value', {
		min: 0,
		max: 5,
		label: 'uGlobalSpead',
	});
	flameFolder.addInput(instance.flame.material.uniforms.uElevation, 'value', {
		min: 0.5,
		max: 1.5,
		label: 'uElevation',
	});
	flameFolder.addInput(new ColorDebugHelper(instance.flame.material.uniforms.uColor, 'value'), 'value', { label: 'uColor' });

	const bodyFolder = folder.addFolder({ title: 'Body', expanded: false });
	const bodyMaterial = instance.model.getObjectByName('body').material;
	bodyFolder.addInput(bodyMaterial.uniforms.uRoughness, 'value', { min: 0, max: 1, step: 0.001, label: 'uRoughness' });
	bodyFolder.addInput(bodyMaterial.uniforms.uMetalness, 'value', { min: 0, max: 1, step: 0.001, label: 'uMetalness' });
	bodyFolder.addInput(bodyMaterial.uniforms.uEnvMapIntensity, 'value', { min: 0, max: 1, step: 0.001, label: 'uEnvMapIntensity' });
	bodyFolder.addInput(bodyMaterial.uniforms.uEnvMapScale, 'value', { min: 0, max: 1, step: 0.001, label: 'uEnvMapScale' });
	bodyFolder.addInput(new ColorDebugHelper(bodyMaterial.uniforms.uColor, 'value'), 'value', { label: 'uColor' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

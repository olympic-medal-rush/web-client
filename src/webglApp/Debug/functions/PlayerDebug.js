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

	const faceFolder = folder.addFolder({ title: 'Face', expanded: false });
	const faceMaterial = instance.model.getObjectByName('face').material;
	faceFolder.addInput(faceMaterial.uniforms.uRoughness, 'value', { min: 0, max: 1, step: 0.001, label: 'uRoughness' });
	faceFolder.addInput(faceMaterial.uniforms.uMetalness, 'value', { min: 0, max: 1, step: 0.001, label: 'uMetalness' });
	faceFolder.addInput(faceMaterial.uniforms.uEnvMapIntensity, 'value', { min: 0, max: 1, step: 0.001, label: 'uEnvMapIntensity' });
	faceFolder.addInput(new ColorDebugHelper(faceMaterial.uniforms.uColor, 'value'), 'value', { label: 'uColor' });

	const bodyFolder = folder.addFolder({ title: 'Body', expanded: false });
	const bodyMaterial = instance.model.getObjectByName('body').material;
	bodyFolder.addInput(new ColorDebugHelper(bodyMaterial.uniforms.uColor1, 'value'), 'value', { label: 'uColor1' });
	bodyFolder.addInput(new ColorDebugHelper(bodyMaterial.uniforms.uColor2, 'value'), 'value', { label: 'uColor2' });
	bodyFolder.addInput(new ColorDebugHelper(bodyMaterial.uniforms.uColor3, 'value'), 'value', { label: 'uColor3' });

	const goldFolder = folder.addFolder({ title: 'Gold', expanded: false });
	const goldMaterial = instance.model.getObjectByName('gold').material;
	goldFolder.addInput(goldMaterial.uniforms.uRoughness, 'value', { min: 0, max: 1, step: 0.001, label: 'uRoughness' });
	goldFolder.addInput(goldMaterial.uniforms.uMetalness, 'value', { min: 0, max: 1, step: 0.001, label: 'uMetalness' });
	goldFolder.addInput(goldMaterial.uniforms.uEnvMapIntensity, 'value', { min: 0, max: 1, step: 0.001, label: 'uEnvMapIntensity' });
	goldFolder.addInput(new ColorDebugHelper(goldMaterial.uniforms.uColor, 'value'), 'value', { label: 'uColor' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

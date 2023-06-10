/**
 *
 * @param {*} pane
 * @param {import("@Webgl/Objects/InstancedTeams").InstancedTeams} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	folder.addInput(instance.material.uniforms.uMetalness, 'value', { min: 0, max: 5, label: 'uMetalness' });
	folder.addInput(instance.material.uniforms.uRoughness, 'value', { min: 0, max: 5, label: 'uRoughness' });
	folder.addInput(instance.material.uniforms.uAoMapIntensity, 'value', { min: 0, max: 5, label: 'uAoMapIntensity' });
	folder.addInput(instance.material.uniforms.uEnvMapIntensity, 'value', { min: 0, max: 5, label: 'uEnvMapIntensity' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

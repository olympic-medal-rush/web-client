/**
 *
 * @param {*} pane
 * @param {import("@webglApp/Webgl/PostProcessing").PostProcessing} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	folder.addInput(instance.uniforms.uEmissiveIntensity, 'value', { min: 0, max: 10, label: 'uEmissiveIntensity' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

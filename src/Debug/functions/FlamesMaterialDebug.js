/**
 *
 * @param {*} pane
 * @param {import("@Webgl/Materials/Flames/material").FlamesMaterial} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	folder.addInput(instance.uniforms.uAnimationProgress, 'value', { min: 0, max: 1, label: 'uAnimationProgress' });

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

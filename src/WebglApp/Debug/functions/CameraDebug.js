import { state } from '@/State.js';
import { app } from '@WebglApp/App.js';
import { EVENTS } from '@utils/constants.js';

function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	let _far = 0;
	const toggleOrbit = async () => {
		const parent = app.$wrapper;
		if (!instance.orbitControls) {
			parent.style.pointerEvents = 'all';
			const OrbitThree = await import('three/addons/controls/OrbitControls.js');
			instance.orbitControls = new OrbitThree.OrbitControls(instance, parent);
			instance.orbitControls.enableDamping = true;
			instance.orbitControls.dampingFactor = 0.15;
			instance.orbitControls.enableZoom = true;
			instance.orbitControls.update();
			instance.position.z += 10;
			_far = instance.far;
			instance.far = 200;
			instance.updateProjectionMatrix();
		} else {
			parent.style.pointerEvents = '';
			instance.orbitControls.dispose();
			instance.orbitControls = null;
			instance.position.set(0, 0, 10);
			instance.far = _far;
			instance.updateProjectionMatrix();
		}
	};
	const orbit = { Orbit: false };

	const url = new URLSearchParams(location.search);
	if (url.has('orbit')) {
		toggleOrbit();
		orbit.Orbit = true;
	}

	state.on(EVENTS.TICK, () => instance.orbitControls?.update());

	folder
		.addInput(orbit, 'Orbit', {
			title: 'OrbitControls',
		})
		.on('change', toggleOrbit);

	folder.addInput(instance, 'fov');
	folder.addInput(instance, 'near');
	folder.addInput(instance, 'far');

	folder.on('change', () => instance.updateProjectionMatrix());

	return folder;
}

function debug(_instance) {}

export { createPane, debug };

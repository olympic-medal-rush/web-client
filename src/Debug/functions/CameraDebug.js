import { app } from '@/App';
import { state } from '@/State';
import { Vector3 } from 'three';
import { TERRAIN } from '@utils/config';
import { EVENTS } from '@utils/constants';

function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	let _far = 0;
	const toggleOrbit = async () => {
		const parent = app.$wrapper;
		if (!instance.orbitControls) {
			parent.style.pointerEvents = 'all';
			// @ts-ignore
			const OrbitThree = await import('three/addons/controls/OrbitControls');
			instance.orbitControls = new OrbitThree.OrbitControls(instance, parent);
			instance.orbitControls.enableDamping = true;
			instance.orbitControls.dampingFactor = 0.15;
			instance.orbitControls.enableZoom = true;
			instance.orbitControls.update();
			instance.position.z += 10;
			instance.orbitControls.target = new Vector3(TERRAIN.size * 0.5, 0, TERRAIN.size * 0.5);
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

/**
 *
 * @param {import('../../Webgl/Scenes/Main/MainCamera').MainCamera} instance
 */
function debug(instance) {
	state.on(EVENTS.KEY_DOWN, (key) => {
		if (key === ' ') {
			instance.focusPlayer = !instance.focusPlayer;
		}
	});
}

export { createPane, debug };

import { ALLOWED_MATERIALS, MATERIALS } from '@utils/config.js';
import { instanciateMesh } from './misc.js';

const materialClasses = import.meta.glob('../Webgl/Materials/**/*.js', { eager: true });

function applyModifier(child, userData) {
	if (userData[0] === 'name') {
		return;
	}

	switch (userData[0]) {
		case 'side':
			child.side = userData[1];
			break;
		case 'blending':
			child.blending = userData[1];
			child.depthWrite = false;
			// child.depthTest = false;
			break;
		case 'transparent':
			child.transparent = true;
			break;
		case 'visible':
			child.visible = !(userData[1] === 'false');
			break;
		case 'renderOrder':
			child.renderOrder = userData[1];
			break;
	}
}

function applyMaterial(child, userData) {
	if (userData[0] !== 'material') {
		return;
	}

	if (!child.material) {
		child.traverse((c) => {
			setMaterial(userData[1], c.userData, c);
		});
	} else {
		setMaterial(userData[1], child.userData, child);
	}
}

function setMaterial(name, ud, child) {
	if (ALLOWED_MATERIALS.indexOf(name) === -1) {
		console.log('Material not implemented', name, ' on ', child.name);
		return;
	}

	const className = name.charAt(0).toUpperCase() + name.slice(1);
	const materialClass = materialClasses[`../Webgl/Materials/${className}/${className}.js`];

	let config = MATERIALS[ud.material] || {};

	if (ud.materialConfig) {
		config = MATERIALS[ud.materialConfig] || {};
	}
	// @ts-ignore
	if (materialClass) child.material = new materialClass.default(config, child);
	else {
		console.error('Material not found', `${name.charAt(0).toUpperCase() + name.slice(1)}/${name.charAt(0).toUpperCase() + name.slice(1)}.js`);
	}
	return child.material;
}

export function applyInstances(object) {
	const instances = {};
	let name;
	const addeds = [];

	object.traverse((child) => {
		name = child.name.replace('.', '');
		instances[name] = [child];

		object.traverse((child2) => {
			if (child.name === child2.name || !child.geometry || !child2.geometry || addeds.indexOf(child2.name) >= 0 || addeds.indexOf(child.name) >= 0 || child.parent !== child2.parent)
				return;
			if (child.geometry.uuid === child2.geometry.uuid) {
				addeds.push(child2.name);
				instances[name].push(child2);
			}
		});
		if (instances[name].length <= 1) delete instances[name];
	});

	for (const i in instances) {
		const instanceOf = object.getObjectByName(i);
		instanciateMesh(instanceOf, instances[i], instanceOf.parent);
	}
}

export function applyModifiers(object) {
	object?.traverse((child) => {
		if (child.material?.userData && Object.entries(child.material?.userData).length > 0) {
			Object.entries(child.material.userData).forEach((userData) => {
				applyMaterial(child, userData);
			});
			Object.entries(child.material.userData).forEach((userData) => {
				applyModifier(child.material, userData);
			});
		}
		if (child.userData && Object.entries(child.userData).length > 0) {
			Object.entries(child.userData).forEach((userData) => {
				applyMaterial(child, userData);
			});
			Object.entries(child.userData).forEach((userData) => applyModifier(child, userData));
		}
	});
}

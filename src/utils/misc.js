import { CubeUVReflectionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, InstancedMesh, PMREMGenerator } from 'three';

function computeEnvmap(renderer, texture, refraction = false) {
	texture.mapping = refraction ? EquirectangularRefractionMapping : EquirectangularReflectionMapping;
	const pmremGenerator = new PMREMGenerator(renderer);
	pmremGenerator.compileEquirectangularShader();

	const pmrem = pmremGenerator.fromEquirectangular(texture).texture;

	const envMapCubeUVHeight = !!pmrem && pmrem.mapping === CubeUVReflectionMapping ? pmrem.image.height : null;
	if (envMapCubeUVHeight === null) return null;
	const maxMip = Math.log2(envMapCubeUVHeight) - 2;
	const texelHeight = 1.0 / envMapCubeUVHeight;
	const texelWidth = 1.0 / (3 * Math.max(Math.pow(2, maxMip), 7 * 16));
	pmrem.userData = {
		...pmrem.userData,
		CUBEUV_TEXEL_WIDTH: texelWidth,
		CUBEUV_TEXEL_HEIGHT: texelHeight,
		CUBEUV_MAX_MIP: maxMip + '.',
	};

	texture.dispose();
	pmremGenerator.dispose();

	return pmrem;
}

function disposeMesh(mesh) {
	mesh.traverse((child) => {
		if (child.material) {
			child.material.map?.dispose();
			child.material.normalMap?.dispose();
			child.material.alphaMap?.dispose();
			child.material.aoMap?.dispose();
			child.material.specularMap?.dispose();
			child.material.metalnessMap?.dispose();
			child.material.emissiveMap?.dispose();
			child.material.dispose();

			if (child.material.uniforms) {
				Object.values(child.material.uniforms).forEach((u) => {
					if (u.value?.isTexture) u.value.dispose();
				});
			}

			if (child.userData?.uniforms) {
				Object.values(child.userData.uniforms).forEach((u) => {
					if (u.value?.isTexture) u.value.dispose();
				});
			}
		}
		child.geometry?.dispose();
	});
}

function instanciateMesh(reference, meshes, parent) {
	// console.log('instanciate', reference.material.uuid, reference.name, meshes);

	const instances = new InstancedMesh(reference.geometry, reference.material, meshes.length);
	instances.material.userData = reference.material?.userData;
	instances.geometry.userData = reference.geometry.userData;
	instances.userData = reference.userData;
	instances.name = 'instance-' + reference.name;
	// instances.frustumCulled = true;

	meshes.forEach((child, i) => {
		child.updateMatrixWorld();
		instances.setMatrixAt(i, child.matrixWorld);

		disposeMesh(child);
		child.removeFromParent();
	});
	// instances.instanceMatrix.needsUpdate = true;

	// console.log(instances);

	parent.add(instances);
	return instances;
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

function throttle(callback, delay) {
	let last;
	let timer;

	return function () {
		const context = this;
		const now = +new Date();
		const args = arguments;
		if (last && now < last + delay) {
			clearTimeout(timer);
			timer = setTimeout(function () {
				last = now;
				callback.apply(context, args);
			}, delay);
		} else {
			last = now;
			callback.apply(context, args);
		}
	};
}

function debounce(fn, delay = 1, opts = {}) {
	const thisArg = opts.bind || null;
	const trail = opts.trail !== null ? !!opts.trail : true;

	let pa1, pa2, pa3; // proxy args
	let timeout;
	let needTrail = trail;

	function delayed() {
		timeout = null;
		if (trail) needTrail = true;
		fn.call(thisArg, pa1, pa2, pa3);
	}

	return function (a1, a2, a3) {
		if (timeout) clearTimeout(timeout);

		pa1 = a1;
		pa2 = a2;
		pa3 = a3;

		if (trail && needTrail) {
			needTrail = false;
			fn.call(thisArg, pa1, pa2, pa3);
		}

		timeout = setTimeout(delayed, delay);
	};
}

function isElementVisible(el) {
	return !!el.offsetParent;
}

export { computeEnvmap, debounce, disposeMesh, instanciateMesh, isElementVisible, throttle };

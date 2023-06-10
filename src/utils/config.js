import terrainStructure from '@jsons/terrain_data.json';
import { Color } from 'three';
import { degToRad } from 'three/src/math/MathUtils';

const debug = import.meta.env.OLYMPIC_DEBUG === 'true';
const env = import.meta.env.MODE;
const url = new URLSearchParams(window.location.search);

const DEBUG = env === 'development' ? url.has('debug') && debug : debug;

const MEDAL_POINTS = [10, 30, 50];

const MEDAL_COLORS = [0xfba069, 0xcbcbcb, 0xffc300];

const TERRAIN = {
	size: terrainStructure.data.length,
};

const CAMERA = {
	defaultPosition: [TERRAIN.size * 0.5, 4, TERRAIN.size * 0.5],
	minZoom: 50,
	maxZoom: 5,
	// maxZoom: 1,
	baseFov: 45,
	dragEase: 5,
	zoomEase: 5,
	playerPosEase: 20,
	maxTiltAngle: degToRad(65),
	// maxTiltAngle: degToRad(90),
	zoomOffsetY: 8,
	near: 1,
	far: 100,
};

const BREAKPOINTS = {
	tablet: 768,
	desktop: 1025,
	large: 1441,
};

const MATERIALS = {
	teams: {
		aoMapIntensity: 0.75,
		roughness: 0.185,
		metalness: 0.7,
		gold: new Color(0xfdf3a9),
		envMapIntensity: 0.3,
	},
	body: {
		aoMapIntensity: 0.7,
	},
	gold: {
		roughness: 0.185,
		metalness: 0.446,
		color: new Color(0xfdf3a9),
		envMapIntensity: 0.165,
	},
	face: {
		roughness: 0.1,
		metalness: 0,
		envMapIntensity: 0.17,
		aoMapIntensity: 0.7,
	},
};

export { DEBUG, BREAKPOINTS, MEDAL_POINTS, MEDAL_COLORS, CAMERA, TERRAIN, MATERIALS };

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
		gold: new Color(0xfff6b4),
		roughness: 0.65,
		metalness: 0.3,
		aoMapIntensity: 0.75,
		envMapIntensity: 0.33,
	},
};

export { DEBUG, BREAKPOINTS, MEDAL_POINTS, MEDAL_COLORS, CAMERA, TERRAIN, MATERIALS };

import terrainStructure from '@jsons/terrain_data.json';

const debug = import.meta.env.OLYMPIC_DEBUG === 'true';
const env = import.meta.env.MODE;
const url = new URLSearchParams(window.location.search);

const DEBUG = env === 'development' ? url.has('debug') && debug : debug;

const MEDAL_POINTS = [50, 30, 10];

const MEDAL_COLORS = [0xd4af37, 0xc0c0c0, 0xcd7f32];

const TERRAIN = {
	size: terrainStructure.data.length,
};

const CAMERA = {
	defaultPosition: [TERRAIN.size * 0.5, 4, TERRAIN.size * 0.5],
	minZoom: 150,
	maxZoom: 5,
	baseFov: 45,
	dragEase: 5,
	zoomEase: 5,
	playerPosEase: 20,
	maxTiltAngle: Math.PI * 0.3,
	zoomOffsetY: 8,
	// range: { x: [-TERRAIN.size * 0.5, TERRAIN.size * 0.5], y: [TERRAIN.size * 0.5, -TERRAIN.size * 0.5] },
};

const BREAKPOINTS = {
	tablet: 768,
	desktop: 1025,
	large: 1441,
};

export { DEBUG, BREAKPOINTS, MEDAL_POINTS, MEDAL_COLORS, CAMERA, TERRAIN };

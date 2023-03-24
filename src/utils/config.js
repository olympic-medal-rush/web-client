const debug = import.meta.env.OLYMPIC_DEBUG === 'true';
const env = import.meta.env.MODE;
const url = new URLSearchParams(window.location.search);

const DEBUG = env === 'development' ? url.has('debug') && debug : debug;

const MEDAL_POINTS = [50, 30, 10];

const MEDAL_COLORS = [0xd4af37, 0xc0c0c0, 0xcd7f32];

const CAMERA = {
	defaultPosition: [0, 4, 0],
};

const BREAKPOINTS = {
	tablet: 768,
	desktop: 1025,
	large: 1441,
};

export { DEBUG, BREAKPOINTS, MEDAL_POINTS, MEDAL_COLORS, CAMERA };

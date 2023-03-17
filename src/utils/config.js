const debug = import.meta.env.OLYMPIC_DEBUG === 'true';
const env = import.meta.env.MODE;
const url = new URLSearchParams(window.location.search);

const DEBUG = env === 'development' ? url.has('debug') && debug : debug;

const DIRECTIONS = {
	up: 0,
	right: 1,
	down: 2,
	left: 3,
};

const MEDAL_TYPE = {
	bronze: 0,
	silver: 1,
	gold: 2,
};

const MEDAL_POINTS = [10, 30, 50];

const BREAKPOINTS = {
	tablet: 768,
	desktop: 1025,
	large: 1441,
};

export { DEBUG, BREAKPOINTS, DIRECTIONS, MEDAL_TYPE, MEDAL_POINTS };

const debug = import.meta.env.OLYMPIC_DEBUG === 'true';
// const env = import.meta.env.MODE;
const url = new URLSearchParams(window.location.search);

const DEBUG = url.has('debug') && debug;

const BREAKPOINTS = {
	tablet: 768,
	desktop: 1025,
	large: 1441,
};

export { DEBUG, BREAKPOINTS };

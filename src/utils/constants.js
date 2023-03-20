// import classes from '@styles/tools/colors.scss?raw';

let i = 0;

const EVENTS = {
	LOADER_PROGRESS: i++,

	APP_LOADED: i++,
	ATTACH: i++,
	RESIZE: i++,

	ROUTE_CHANGE: i++,

	TICK: i++,
	RENDER: i++,

	MOUSE_MOVE: i++,
	POINTER_UP: i++,
	POINTER_DOWN: i++,

	KEY_DOWN: i++,

	// SERVER EVENTS
	CREATE_TEAM: i++,
	SPAWN_MEDALS: i++,
	VOTE_RESULTS: i++,
};

const EVENTS_MAP = Object.fromEntries(
	Object.entries(EVENTS).map(([key, value]) => [
		value,
		`on${key
			.toLowerCase()
			.split('_')
			.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
			.join('')}`,
	]),
);

const STORE_KEYS = {
	USER_ID: i++,
	USER_ISO: i++,
	// MENU_OPEN: i++,
};

const DIRECTIONS = {
	up: 0,
	right: 1,
	down: 2,
	left: 3,
};

const MEDAL_TYPES = {
	bronze: 0,
	silver: 1,
	gold: 2,
};

// const cssColors = classes
// 	.trim()
// 	.replaceAll('{', '')
// 	.replaceAll('}', '')
// 	.replaceAll('\n', '')
// 	.split(';')
// 	.map((entry) => entry.split(':').map((inner) => inner.trim().replace('-', '_').replace('$', '').toUpperCase()));
// cssColors.pop();

// const COLORS = Object.fromEntries(cssColors);

export { EVENTS, EVENTS_MAP, STORE_KEYS, DIRECTIONS, MEDAL_TYPES };

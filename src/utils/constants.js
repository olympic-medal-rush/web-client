// import classes from '@styles/tools/colors.scss?raw';

let i = 0;

const EVENTS = {
	// APP EVENTS
	LOADER_PROGRESS: i++,
	APP_LOADED: i++,
	ATTACH: i++,

	// VUE
	ROUTE_CHANGE: i++,

	// TICKER
	TICK: i++,
	RENDER: i++,

	// DEVICE EVENTS
	RESIZE: i++,
	MOUSE_MOVE: i++,
	POINTER_UP: i++,
	POINTER_DOWN: i++,
	KEY_DOWN: i++,

	// GAME EVENTS
	STATE_READY: i++,
	JOIN_READY: i++,
	CREATE_TEAM: i++,
	SPAWN_MEDALS: i++,
	VOTE_RESULTS: i++,
	COLLECT_MEDAL: i++,
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
};

const SERVER_EVENTS = {
	// LISTENERS
	CONNECT_STATE: 'connect_state',
	JOIN_STATE: 'join_state',
	VOTE_RESULTS: 'vote_results',
	VOTE_COUNT: 'vote_count',
	MEDAL_APPARITION: 'medal_apparition',
	MEDAL_COLLECTION: 'medal_collection',
	NEW_TEAM: 'new_team',
	PLAYER_COUNT: 'player_count',

	// EMITTERS
	USER_VOTE: 'user_vote',
	USER_JOIN: 'user_join',
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

export { EVENTS, EVENTS_MAP, STORE_KEYS, SERVER_EVENTS, DIRECTIONS, MEDAL_TYPES };

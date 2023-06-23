// import classes from '@styles/tools/colors.scss?raw';

let i = 0;

const EVENTS = {
	// APP EVENTS
	LOADER_PROGRESS: i++,
	APP_LOADED: i++,
	ATTACH: i++,

	// VUE
	ROUTE_CHANGE: i++,
	SELECT_TEAM_UPDATE: i++,
	SCOREBOARD_UPDATE: i++,

	// TICKER
	TICK: i++,
	RENDER: i++,

	// DEVICE EVENTS
	RESIZE: i++,
	POINTER_MOVE: i++,
	POINTER_UP: i++,
	POINTER_DOWN: i++,
	KEY_DOWN: i++,
	DRAG: i++,
	DRAG_END: i++,
	PINCH: i++,
	WHEEL: i++,

	// GAME EVENTS
	STATE_READY: i++,
	CLEAN_STATE: i++,
	JOIN_READY: i++,
	CREATE_TEAM: i++,
	SPAWN_MEDALS: i++,
	VOTE_COUNT: i++,
	VOTE_RESULTS: i++,
	COLLECT_MEDAL: i++,
	TOGGLE_PATHFINDING: i++,
	REACT_MOJI: i++,
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
	FOCUS_PLAYER: i++,
};

const SERVER_EVENTS = {
	// LISTENERS
	GAME_STATE: 'game_state',
	COUNTRY_STATE: 'country_state',

	VOTE_RESULTS: 'vote_results',
	VOTE_COUNT: 'vote_count',

	MEDAL_APPARITION: 'medal_apparition',
	MEDAL_COLLECTION: 'medal_collection',

	NEW_COUNTRY: 'new_country',

	PLAYER_COUNT: 'player_count',

	COUNTRY_BUFF: 'country_buff',
	COUNTRY_DEBUFF: 'country_debuff',

	COUNTRY_REACTION: 'country_reaction',

	// EMITTERS
	USER_VOTE: 'user_vote',
	USER_JOIN: 'user_join',
	USER_CATCHUP: 'user_catchup',
	USER_REACTION: 'user_reaction',
	// {reaction: 0}
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

export { DIRECTIONS, EVENTS, EVENTS_MAP, MEDAL_TYPES, SERVER_EVENTS, STORE_KEYS };

import { state } from '@/State';
import { useGameStore } from '@stores/game';
import { app } from '@webglApp/App';
import { EVENTS, SERVER_EVENTS, STORE_KEYS } from '@utils/constants';
import { store } from '../Store';

export default class ServerController {
	/** @type WebSocket */
	#connection;

	constructor() {
		this.domGameStore = useGameStore();

		// TODO: MAËLLE FOR EVENT TEST
		// window.addEventListener('keydown', (e) => {
		// 	if (e.key === 'p') {
		// 		const data = {
		// 			iso: 'FRA',
		// 			count: Math.floor(Math.random() * 100),
		// 		};
		// 		this.#onPlayerCount(data);
		// 	}
		// });

		state.on(EVENTS.APP_LOADED, this.#onAppLoaded);
	}

	#onAppLoaded = () => {
		/// #if DEBUG
		if (app.debug?.urlParams.has('noServer')) return;
		/// #endif

		this.#connection = new WebSocket(import.meta.env.OLYMPIC_WSS);
		this.#connection.onmessage = this.#onMessage;
		console.info('Websocket connected');
	};

	/**
	 * Listen events and dispatch state
	 */
	#onMessage = (evt) => {
		const eventData = JSON.parse(evt.data);
		this.#routeEvent(Object.assign(new Event(), eventData));
	};

	#send(eventId, payload) {
		const event = new Event(eventId, payload);
		this.#connection.send(JSON.stringify(event));
	}

	/**
	 * Route WebSocket events listeners
	 *
	 * @param {{type: string, payload: any}} evt
	 */
	#routeEvent(evt) {
		switch (evt.type) {
			case SERVER_EVENTS.GAME_STATE:
				this.#onGameState(evt.payload);
				break;
			case SERVER_EVENTS.COUNTRY_STATE:
				this.#onCountryState(evt.payload);
				break;
			case SERVER_EVENTS.VOTE_RESULTS:
				this.#onVoteResults(evt.payload);
				break;
			case SERVER_EVENTS.VOTE_COUNT:
				this.#onVoteCount(evt.payload);
				break;
			case SERVER_EVENTS.MEDAL_APPARITION:
				this.#onMedalApparition(evt.payload);
				break;
			case SERVER_EVENTS.MEDAL_COLLECTION:
				this.#onMedalCollection(evt.payload);
				break;
			case SERVER_EVENTS.NEW_COUNTRY:
				this.#onNewCountry(evt.payload);
				break;
			case SERVER_EVENTS.PLAYER_COUNT:
				this.#onPlayerCount(evt.payload);
				break;
			default:
				break;
		}
	}

	/* ######## LISTENERS ######## */

	/**
	 * Get current game state to initialize
	 *
	 * @param {GameStatePayload} data
	 */
	#onGameState(data) {
		console.log(data, 'onGameState');
		store.set(STORE_KEYS.USER_ID, data.user_id);
		app.game.setState(data);
	}

	/**
	 * Response to user join with current vote state
	 *
	 * @param {CountryStatePayload} data
	 */
	#onCountryState(data) {
		console.log(data, 'onCountryState');
		this.domGameStore.updatePlayersCounter(data.player_count);
		app.game.userJoin(data);
	}

	/**
	 * Vote has ended, get results
	 *
	 * @param {VoteResultsPayload} data
	 */
	#onVoteResults(data) {
		console.log(data, 'onVoteResults');
		app.game.voteResults(data);
	}

	/**
	 * Vote count update during vote
	 *
	 * @param {VoteCountPayload} data
	 */
	#onVoteCount(data) {
		console.log(data, 'onVoteCount');
		// TODO: update Vue store or something else supposed to show vote counts
		// up: number;
		// right: number;
		// down: number;
		// left: number;
	}

	/**
	 * New medals on map
	 *
	 * @param {MedalApparitionPayload} data
	 */
	#onMedalApparition(data) {
		console.log(data, 'onMedalApparition');
		app.game.addMedals(data);
	}

	/**
	 * Team collected a medal
	 *
	 * @param {MedalCollectionPayload} data
	 */
	#onMedalCollection(data) {
		console.log(data, 'onMedalCollection');
		app.game.medalCollect(data);
	}

	/**
	 * Receive player count regularly
	 *
	 * @param {PlayerCountsPayload} data
	 */
	#onPlayerCount(data) {
		console.log(data, 'onPlayerCount');
		this.domGameStore.updatePlayersCounter(data.count);
	}

	/**
	 * New team just joined
	 *
	 * @param {NewCountryPayload} data
	 */
	#onNewCountry(data) {
		console.log(data, 'onNewCountry');
		app.game.createTeam(data);
	}

	/* ######## EMITTERS ######## */

	/**
	 * Send player vote
	 *
	 * @param {UserVotePayload} userVotePlayload
	 */
	userVote(userVotePlayload) {
		console.log(userVotePlayload, 'userVote');
		this.#send(SERVER_EVENTS.USER_VOTE, userVotePlayload);
	}

	/**
	 * Tell the server that a player joins a team
	 *
	 * @param {UserJoinPayload} userJoinPayload
	 */
	userJoin(userJoinPayload) {
		// store.set(STORE_KEYS.USER_ISO, iso);
		// window.localStorage.setItem('USER_ISO', iso);
		console.log(userJoinPayload, 'userJoin');
		this.#send(SERVER_EVENTS.USER_JOIN, userJoinPayload);
	}
}

class Event {
	constructor(type, payload) {
		this.type = type;
		this.payload = payload;
	}
}

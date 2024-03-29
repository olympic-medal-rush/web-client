import { app } from '@/App';
import { state } from '@/State';
import { EVENTS, SERVER_EVENTS, STORE_KEYS } from '@utils/constants';
import { store } from '../Store';

export default class ServerController {
	/** @type WebSocket */
	#connection;

	constructor() {
		state.on(EVENTS.APP_LOADED, this.#onAppLoaded);
	}

	#onAppLoaded = () => {
		/// #if DEBUG
		if (app.debug?.urlParams.has('noServer')) return;
		/// #endif

		this.#connection = new WebSocket(import.meta.env.OLYMPIC_WSS);
		this.#connection.onmessage = this.#onMessage;
		console.info('Websocket connected');

		window.addEventListener('visibilitychange', this.#onVisibilityChange);
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
			case SERVER_EVENTS.COUNTRY_BUFF:
				this.#onCountryBuff(evt.payload);
				break;
			case SERVER_EVENTS.COUNTRY_DEBUFF:
				this.#onCountryDebuff(evt.payload);
				break;
			case SERVER_EVENTS.COUNTRY_REACTION:
				this.#onCountryReaction(evt.payload);
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
		// console.log(data, 'onGameState');
		store.set(STORE_KEYS.USER_ID, data.user_id);
		app.game.setState(data);
	}

	/**
	 * Response to user join with current vote state
	 *
	 * @param {CountryStatePayload} data
	 */
	#onCountryState(data) {
		// console.log(data, 'onCountryState');
		app.game.userJoin(data);
	}

	/**
	 * Vote has ended, get results
	 *
	 * @param {VoteResultsPayload} data
	 */
	#onVoteResults(data) {
		// console.log(data, 'onVoteResults');
		app.game.voteResults(data);
	}

	/**
	 * Vote count update during vote
	 *
	 * @param {VoteCountPayload} data
	 */
	#onVoteCount(data) {
		// console.log(data, 'onVoteCount');
		app.game.voteCount(data);
	}

	/**
	 * New medals on map
	 *
	 * @param {MedalApparitionPayload} data
	 */
	#onMedalApparition(data) {
		// console.log(data, 'onMedalApparition');
		app.game.addMedals(data);
	}

	/**
	 * Team collected a medal
	 *
	 * @param {MedalCollectionPayload} data
	 */
	#onMedalCollection(data) {
		// console.log(data, 'onMedalCollection');
		app.game.medalCollect(data);
	}

	/**
	 * Receive player count regularly
	 *
	 * @param {PlayerCountsPayload} data
	 */
	#onPlayerCount(data) {
		app.game.updatePlayerCount(data);
	}

	/**
	 * New team just joined
	 *
	 * @param {NewCountryPayload} data
	 */
	#onNewCountry(data) {
		// console.log(data, 'onNewCountry');
		app.game.createTeam(data);
	}

	/**
	 *
	 * @param {CountryBuffPayload} data
	 */
	#onCountryBuff(data) {
		app.game.countryBuff(data);
		// console.log(data, 'buff');
	}

	/**
	 *
	 * @param {CountryDebuffPayload} data
	 */
	#onCountryDebuff(data) {
		app.game.countryDebuff(data);
		// console.log(data, 'debuff');
	}

	/**
	 *
	 * @param {CountryReactionPayload} data
	 */
	#onCountryReaction(data) {
		// console.log(data.reactions, 'reactions');
		app.game.countryReaction(data);
	}

	/* ######## EMITTERS ######## */

	/**
	 * Send player vote
	 *
	 * @param {UserVotePayload} userVotePlayload
	 */
	userVote(userVotePlayload) {
		// console.log(userVotePlayload, 'userVote');
		this.#send(SERVER_EVENTS.USER_VOTE, userVotePlayload);
	}

	/**
	 * Tell the server that a player joins a team
	 *
	 * @param {UserJoinPayload} userJoinPayload
	 */
	userJoin(userJoinPayload) {
		// console.log(userJoinPayload, 'userJoin');
		this.#send(SERVER_EVENTS.USER_JOIN, userJoinPayload);
	}

	/**
	 *
	 * @param {UserReactionPayload} userReactionPayload
	 */
	userReaction(userReactionPayload) {
		// console.log(userReactionPayload, 'userReaction');
		this.#send(SERVER_EVENTS.USER_REACTION, userReactionPayload);
	}

	userCatchup() {
		// console.log('user_catchup');
		this.#send(SERVER_EVENTS.USER_CATCHUP, true);
	}

	#onVisibilityChange = () => {
		if (document.visibilityState === 'visible') this.userCatchup();
	};
}

class Event {
	constructor(type, payload) {
		this.type = type;
		this.payload = payload;
	}
}

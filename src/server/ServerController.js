import { GlobalApp } from '@/main';
import { useGameStore } from '@stores/game';
import { SERVER_EVENTS, STORE_KEYS } from '@utils/constants';
import { store } from '../Store';

export default class ServerController {
	/** @type WebSocket */
	#connection;
	#host;

	constructor({ host = '' }) {
		this.#host = host;

		this.#connection = new WebSocket(`wss://${this.#host}/ws`);
		this.#connection.onmessage = this.#onMessage;

		this.domGameStore = useGameStore();

		// TODO: MAËLLE FOR EVENT TEST
		window.addEventListener('keydown', (e) => {
			if (e.key === 'p') {
				const data = {
					iso: 'FRA',
					count: Math.floor(Math.random() * 100),
				};
				this.#onPlayerCount(data);
			}
		});
	}

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
	 * @param {{type: string, data: any}} evt
	 */
	#routeEvent(evt) {
		switch (evt.type) {
			case SERVER_EVENTS.CONNECT_STATE:
				this.#onConnectState(evt.data);
				break;
			case SERVER_EVENTS.JOIN_STATE:
				this.#onJoinState(evt.data);
				break;
			case SERVER_EVENTS.VOTE_RESULTS:
				this.#onVoteResults(evt.data);
				break;
			case SERVER_EVENTS.VOTE_COUNT:
				this.#onVoteCount(evt.data);
				break;
			case SERVER_EVENTS.MEDAL_APPARITION:
				this.#onMedalApparition(evt.data);
				break;
			case SERVER_EVENTS.MEDAL_COLLECTION:
				this.#onMedalCollection(evt.data);
				break;
			case SERVER_EVENTS.NEW_TEAM:
				this.#onNewTeam(evt.data);
				break;
			case SERVER_EVENTS.PLAYER_COUNT:
				this.#onPlayerCount(evt.data);
				break;
			default:
				break;
		}
	}

	/* ######## LISTENERS ######## */

	/**
	 * Get current game state to initialize
	 *
	 * @param {ConnectStatePayload} data
	 */
	#onConnectState(data) {
		store.set(STORE_KEYS.USER_ID, data.userId);
		GlobalApp.game.setState(data);
	}

	/**
	 * Response to user join with current vote state
	 *
	 * @param {JoinStatePayload} data
	 */
	#onJoinState(data) {
		GlobalApp.game.userJoin(data);
	}

	/**
	 * Vote has ended, get results
	 *
	 * @param {VoteResultsPayload} data
	 */
	#onVoteResults(data) {
		GlobalApp.game.voteResults(data);
	}

	/**
	 * Vote count update during vote
	 *
	 * @param {VoteCountPayload} _data
	 */
	#onVoteCount(_data) {
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
		GlobalApp.game.addMedals(data);
	}

	/**
	 * Team collected a medal
	 *
	 * @param {MedalCollectionPayload} data
	 */
	#onMedalCollection(data) {
		GlobalApp.game.medalCollect(data);
	}

	/**
	 * Receive player count regularly
	 *
	 * @param {PlayerCountPayload} data
	 */
	#onPlayerCount(data) {
		this.domGameStore.updatePlayersCounter(data.count);
	}

	/**
	 * New team just joined
	 *
	 * @param {NewTeamPayload} data
	 */
	#onNewTeam(data) {
		GlobalApp.game.createTeam(data);
	}

	/* ######## EMITTERS ######## */

	/**
	 * Send player vote
	 *
	 * @param {UserVotePayload} userVotePlayload
	 */
	userVote(userVotePlayload) {
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

		this.#send(SERVER_EVENTS.USER_JOIN, userJoinPayload);
	}
}

class Event {
	constructor(type, payload) {
		this.type = type;
		this.payload = payload;
	}
}

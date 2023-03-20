import { GlobalApp } from '@/main';
import { useGameStore } from '@stores/game';
import { STORE_KEYS } from '@utils/constants';
import { store } from '../Store';

export default class ServerController {
	/** @type WebSocket */
	#connection;
	#host;

	constructor({ host = '' }) {
		this.#host = host;

		this.domGameStore = useGameStore();

		// TO DO: MAËLLE FOR EVENT TEST
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

	// Instantiate web socket
	connect() {
		this.#connection = new WebSocket(`wss://${this.#host}/ws`);
		this.#connection.onmessage = this.#onMessage;
	}

	/**
	 * Listen events & dispach state
	 */
	#onMessage = (evt) => {
		const eventData = JSON.parse(evt.data);
		this.#routeEvent(Object.assign(new Event(), eventData));
	};

	#routeEvent(evt) {
		console.log(evt.type, evt.data);
		switch (evt.type) {
			case 'user_connect':
				this.#onUserConnect(evt.data);
				break;
			case 'user_join':
				this.#onUserJoin(evt.data);
				break;
			case 'vote_results':
				this.#onVoteResults(evt.data);
				break;
			case 'vote_count':
				this.#onVoteCount(evt.data);
				break;
			case 'medal_apparition':
				this.#onMedalApparition(evt.data);
				break;
			case 'medal_collection':
				this.#onMedalCollection(evt.data);
				break;
			case 'new_team':
				this.#onNewTeam(evt.data);
				break;
			case 'player_count':
				this.#onPlayerCount(evt.data);
				break;

			default:
				break;
		}
	}

	/**
	 *
	 * @param {ConnectStatePayload} data
	 */
	#onUserConnect(data) {
		store.set(STORE_KEYS.USER_ID, data.userId);
		// medals in game data.medals
		// score bord data.scores
		// pos teams in game data.teamsPositions
		GlobalApp.game.setState(data);
	}

	/**
	 *
	 * @param {JoinStatePayload} data
	 */
	#onUserJoin(data) {
		console.warn('TODO: Implement onUserJoin');
		// this.#onUserConnect(data);
		// count of votes data.VoteCountPayload
		// id of current vote data.voteId
	}

	/**
	 *
	 * @param {VoteResultsPayload} data
	 */
	#onVoteResults(data) {
		// iso: string;
		// dir: string;
		// nextVoteId: number;
		GlobalApp.game.voteResults(data);
	}

	/**
	 *
	 * @param {VoteCountPayload} data
	 */
	#onVoteCount(data) {
		// up: number;
		// right: number;
		// down: number;
		// left: number;
	}

	/**
	 *
	 * @param {MedalApparitionPayload} data
	 */
	#onMedalApparition(data) {
		// medals: MedalInfo[];
		GlobalApp.game.addMedals(data);
	}

	/**
	 *
	 * @param {MedalCollectionPayload} data
	 */
	#onMedalCollection(data) {
		// iso: string;
		// medal: MedalInfo;
		GlobalApp.game.medalCollect(data);
	}

	/**
	 *
	 * @param {PlayerCountPayload} data
	 */
	#onPlayerCount(data) {
		// iso: string;
		// count: number;
		this.domGameStore.updatePlayersCounter(data.count);
	}

	/**
	 *
	 * @param {NewTeamPayload} data
	 */
	#onNewTeam(data) {
		// iso: string;
		// pos: { x: number; y: number };
		GlobalApp.game.createTeam(data);
	}

	/**
	 * Listen state events & dispach to server
	 */
	userVote() {
		const payload = {
			user: store.get(STORE_KEYS.USER_ID),
			dir: 0,
		};
		const event = new Event('user_vote', payload);
		this.#connection.send(JSON.stringify(event));
	}

	userJoin(iso) {
		store.set(STORE_KEYS.USER_ISO, iso);
		window.localStorage.setItem('USER_ISO', iso);

		const payload = {
			user: store.get(STORE_KEYS.USER_ID),
			iso: store.get(STORE_KEYS.USER_ISO),
		};
		const event = new Event('user_join', payload);
		this.#connection.send(JSON.stringify(event));
	}
}

class Event {
	constructor(type, payload) {
		this.type = type;
		this.payload = payload;
	}
}

type EventType = 'game_state' | 'join_state' | 'vote_results' | 'vote_count' | 'medal_apparition' | 'medal_collection' | 'new_team' | 'player_count' | 'user_catchup';

enum Direction {
	up = 0,
	right = 1,
	down = 2,
	left = 3,
	none = 4,
}

enum MedalType {
	bronze = 0,
	silver = 1,
	gold = 2,
}

type MedalInGame = {
	id: string;
	type: MedalType;
	position: Position;
};

type Event<T> = {
	type: EventType;
	Payload: T;
};

type Position = {
	x: number;
	y: number;
};

type TeamInfos = {
	iso: string;
	position: Position;
	medals?: Record<MedalType, number>;
};

type GameStatePayload = {
	user_id: string;
	countries_states: Record<string, TeamInfos>;
	medals: MedalInGame[];
};

type CountryStatePayload = {
	iso: string;
	vote_id: number;
	vote_progress: number;
	votes: VoteCountPayload;
	player_count: number;
};

type VoteCountPayload = {
	up: number;
	right: number;
	down: number;
	left: number;
};

type VoteResultsPayload = {
	iso: string;
	direction: Direction;
	next_vote_id: number;
};

type NewCountryPayload = {
	iso: string;
	position: Position;
};

type MedalApparitionPayload = {
	medals: MedalInGame[];
};

type MedalCollectionPayload = {
	iso: string;
	medal_id: string;
};

type PlayerCountsPayload = Record<string, number>;

// EMITTERS PAYLOADS

type UserVotePayload = {
	user_id: string;
	direction: Direction;
};

type UserJoinPayload = {
	iso: string;
};

type EventUserVote = Event<UserVotePayload>;
type EventUserJoin = Event<UserJoinPayload>;
type EventVoteResults = Event<VoteResultsPayload>;
type EventVoteCount = Event<VoteCountPayload>;
type EventMedalApparition = Event<MedalApparitionPayload>;
type EventMedalCollection = Event<MedalCollectionPayload>;
type EventPlayerCount = Event<PlayerCountPayload>;
type EventNewTeam = Event<NewCountryPayload>;

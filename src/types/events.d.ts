type EventType = 'user_vote' | 'user_join' | 'medal_apparition' | 'medal_collection' | 'vote_results' | 'vote_count' | 'player_count' | 'new_team';

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

type ConnectStatePayload = {
	user_id: string;
	teamsStates: Record<string, TeamInfos>;
	medalsInGame: MedalInGame[];
};

// type JoinStatePayload = ConnectStatePayload & {
// 	votes: VoteCountPayload;
// 	voteProgress: number;
// 	voteId: number;
// 	iso: string;
// };

type JoinStatePayload = {
	votes: VoteCountPayload;
	voteProgress: number;
	voteId: number;
	iso: string;
};

type UserVotePayload = {
	user_id: string;
	direction: Direction;
};

type UserJoinPayload = {
	user_id: string;
	iso: string;
};

type VoteResultsPayload = {
	iso: string;
	direction: Direction;
	nextVoteId: number;
};

type VoteCountPayload = {
	up: number;
	right: number;
	down: number;
	left: number;
};

type MedalInGame = {
	id: number;
	type: MedalType;
	position: Position;
};

type MedalCollectionPayload = {
	iso: string;
	medal: MedalInGame;
};

type MedalApparitionPayload = {
	medals: MedalInGame[];
};

type PlayerCountPayload = {
	iso: string;
	count: number;
};

type NewTeamPayload = {
	iso: string;
	position: Position;
};

type EventUserVote = Event<UserVotePayload>;
type EventUserJoin = Event<UserJoinPayload>;
type EventVoteResults = Event<VoteResultsPayload>;
type EventVoteCount = Event<VoteCountPayload>;
type EventMedalApparition = Event<MedalApparitionPayload>;
type EventMedalCollection = Event<MedalCollectionPayload>;
type EventPlayerCount = Event<PlayerCountPayload>;
type EventNewTeam = Event<NewTeamPayload>;

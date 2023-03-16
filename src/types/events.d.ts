type EventType = 'user_vote' | 'user_join' | 'medal_apparition' | 'medal_collection' | 'vote_results' | 'vote_count' | 'player_count' | 'new_team';

type Event<T> = {
	type: EventType;
	Payload: T;
};

type ConnectStatePayload = {
	teamsPositions: Record<string, { x: number; y: number }>;
	medals: Medal[];
	scores: Record<string, Medal[]>;
	userId: string;
};

type JoinStatePayload = ConnectStatePayload & {
	votes: VoteCountPayload;
	voteId: number;
};

type UserVotePayload = {
	user: string;
	dir: number;
};

type UserJoinPayload = {
	user: string;
	iso: string;
};

type VoteResultsPayload = {
	iso: string;
	dir: string;
	nextVoteId: number;
};

type VoteCountPayload = {
	up: number;
	right: number;
	down: number;
	left: number;
};

type Medal = {
	class: number;
	pos: { x: number; y: number };
};

type MedalCollectionPayload = {
	iso: string;
	medal: Medal;
};

type MedalApparitionPayload = {
	medals: Medal[];
};

type PlayerCountPayload = {
	iso: string;
	count: number;
};

type NewTeamPayload = {
	iso: string;
	pos: { x: number; y: number };
};

type EventUserVote = Event<UserVotePayload>;
type EventUserJoin = Event<UserJoinPayload>;
type EventVoteResults = Event<VoteResultsPayload>;
type EventVoteCount = Event<VoteCountPayload>;
type EventMedalApparition = Event<MedalApparitionPayload>;
type EventMedalCollection = Event<MedalCollectionPayload>;
type EventPlayerCount = Event<PlayerCountPayload>;
type EventNewTeam = Event<NewTeamPayload>;

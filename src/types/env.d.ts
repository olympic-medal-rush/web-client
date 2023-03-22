/// <reference types="vite/client" />
import { Medal } from '@game/Medal';
import { Team } from '@game/Team';

interface ImportMetaEnv {
	readonly OLYMPIC_DEBUG: string;
	readonly OLYMPIC_BASE_URL: string;
	readonly OLYMPIC_WSS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type StateReadyPayload = {
	teams: Map<string, Team>;
	medals: Map<number, Medal>;
};

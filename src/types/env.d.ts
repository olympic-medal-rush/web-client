/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
import { Team } from '@/Game/Team';
import { Medal } from '@Game/Medal';

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

type TerrainData = {
	data: number[][];
	mapping: Record<number, string>;
};

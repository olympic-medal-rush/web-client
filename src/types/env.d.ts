/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly OLYMPIC_DEBUG: string;
	readonly OLYMPIC_BASE_URL: string;
	readonly OLYMPIC_WSS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

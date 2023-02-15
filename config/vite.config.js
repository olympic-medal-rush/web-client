// @ts-nocheck
import vue from '@vitejs/plugin-vue';
import { readFileSync } from 'node:fs';
import { cwd, env, stdout } from 'node:process';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import hotEnvMap from './hotEnvMap/hotEnvMap.js';
import hotShaders from './hotShaders/hotShadersRollupPlugin.js';
import ifdef from './ifdef/ifdefRollupPlugin.js';

// // https://vitejs.dev/config/
export default ({ mode }) => {
	const envVariables = loadEnv(mode, cwd(), '');

	stdout.write('\n\x1b[2mv' + env.npm_package_version + '\x1b[22m\n');
	stdout.write('\n🏁 Project : ' + env.npm_package_name);
	stdout.write('\n🪲  Environnement : ' + mode);
	stdout.write('\n🚧 DEBUG is : ' + envVariables.OLYMPIC_DEBUG + '\n\n');

	return defineConfig({
		server: {
			port: 8080,
			https: false,
			open: false,
			host: true,
		},
		plugins: [
			hotShaders({ isDev: env.OLYMPIC_DEBUG === 'true', compress: true }),
			hotEnvMap({ isDev: env.OLYMPIC_DEBUG === 'true' }),
			ifdef({ DEBUG: env.OLYMPIC_DEBUG === 'true' }),
			vue(),
			VitePWA(),
		],
		resolve: {
			alias: getAliasesFromJsConfig(),
		},
		envPrefix: 'OLYMPIC_',
	});
};

function getAliasesFromJsConfig() {
	const alias = Object.entries(JSON.parse(readFileSync(fileURLToPath(new URL('../jsconfig.json', import.meta.url))).toString()).compilerOptions.paths).map(([key, value]) => {
		return { find: key.replace('/*', ''), replacement: value[0].replace('./', '/').replace('/*', '') };
	});

	stdout.write('📂 ' + alias.length + ' alias loaded\n\n');

	return alias;
}

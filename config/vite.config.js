import vue from '@vitejs/plugin-vue';
import { readFileSync } from 'node:fs';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import hotEnvMap from './hotEnvMap/hotEnvMap';
import hotShaders from './hotShaders/hotShadersRollupPlugin';
import ifdef from './ifdef/ifdefRollupPlugin';

// // https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	process.stdout.write('\n\x1b[2mv' + process.env.npm_package_version + '\x1b[22m\n');
	process.stdout.write('\n🏁 Project : ' + process.env.npm_package_name);
	process.stdout.write('\n🪲  Environnement : ' + mode);
	process.stdout.write('\n🚧 DEBUG is : ' + env.OLYMPIC_DEBUG + '\n\n');

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

	process.stdout.write('📂 ' + alias.length + ' alias loaded\n\n');

	return alias;
}

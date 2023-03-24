import { state } from '@/State';
import { manifest } from '@webglApp/utils/manifest';
import { AudioLoader, Cache } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { RGBELoader } from 'three/addons/loaders/RGBELoader';
import { EVENTS } from '@utils/constants';
import { AssetsLoader } from './AssetsLoader';
import { AjaxImageLoader } from './CustomLoaders/AjaxImageLoader';
import { AjaxJSONLoader } from './CustomLoaders/AjaxJSONLoader';
import { AjaxTextureLoader } from './CustomLoaders/AjaxTextureLoader';

Cache.enabled = true;

class AssetsManager {
	constructor({ blockingLoad = true, withPriority = false, withCriticals = false } = {}) {
		this.blockingLoad = blockingLoad;
		this.withPriority = withPriority;
		this.withCriticals = withCriticals;

		this.assetsInfos = new Map();
		this.loadedAssets = new Map();

		this.progress = 0;

		this.loaders = {
			images: new AssetsLoader({
				manifest: manifest.images,
				loader: new AjaxImageLoader(),
				assetsInfos: this.assetsInfos,
				loadedAssets: this.loadedAssets,
				progressCallback: this.loadingProgress,
			}),

			textures: new AssetsLoader({
				manifest: manifest.textures,
				loader: new AjaxTextureLoader(),
				assetsInfos: this.assetsInfos,
				loadedAssets: this.loadedAssets,
				progressCallback: this.loadingProgress,
			}),

			envMaps: new AssetsLoader({
				manifest: manifest.envMaps,
				loader: new RGBELoader(),
				assetsInfos: this.assetsInfos,
				loadedAssets: this.loadedAssets,
				progressCallback: this.loadingProgress,
			}),

			models: new AssetsLoader({
				manifest: manifest.models,
				loader: new GLTFLoader(),
				assetsInfos: this.assetsInfos,
				loadedAssets: this.loadedAssets,
				progressCallback: this.loadingProgress,
			}),

			jsons: new AssetsLoader({
				manifest: manifest.jsons,
				loader: new AjaxJSONLoader(),
				assetsInfos: this.assetsInfos,
				loadedAssets: this.loadedAssets,
				progressCallback: this.loadingProgress,
			}),

			sounds: new AssetsLoader({
				manifest: manifest.sounds,
				loader: new AudioLoader(),
				assetsInfos: this.assetsInfos,
				loadedAssets: this.loadedAssets,
				progressCallback: this.loadingProgress,
			}),
		};
	}

	async load() {
		if (this.withCriticals) await this.#loadCriticals();

		if (this.blockingLoad) await this.#loadAll();
		else if (this.withPriority) this.#loadInOrder();
		else this.#loadAll();
	}

	#loadAll() {
		return Promise.all(Object.values(this.loaders).map((loader) => loader.loadAssets()));
	}

	#loadCriticals() {
		return Promise.all(Object.values(this.loaders).map((loader) => loader.loadCriticalAssets()));
	}

	#loadInOrder() {
		return Promise.all(
			Object.values(this.loaders)
				.map((loader) => [...loader.assetsToLoad.entries()].map(([key, value]) => ({ loader, key, priority: value.priority || 0 })))
				.flat()
				.sort((a, b) => a.priority - b.priority)
				.map(({ loader, key }) => loader.loadAsset(key)),
		);
	}

	loadingProgress() {
		this.progress =
			[...this.assetsInfos.values()].map((assetInfos) => assetInfos.progress).reduce((previousValue, currentValue) => previousValue + currentValue, 0) / this.assetsInfos.size;

		state.emit(EVENTS.LOADER_PROGRESS, this.progress);
	}

	get(...keys) {
		if (keys.length > 1) {
			return keys.map((key) => this.loadedAssets.get(key));
		} else {
			return this.loadedAssets.get(keys[0]);
		}
	}
}

export { AssetsManager };

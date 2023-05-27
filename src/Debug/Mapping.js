import { app } from '@/App';
import { state } from '@/State';
import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
import { PANE_TABS, PANE_TITLE } from './debugConfig';

/** @type Record<any, any> */
const mapping = Object.fromEntries(
	Object.entries(import.meta.glob('./functions/*', { import: '*', eager: true })).map(([key, value]) => {
		return [key.split('/').pop().split('.')[0].replace('Debug', ''), value];
	}),
);

class Mapping {
	#childrenToAdd;
	#folders;
	#tabs;
	#globalPane;
	#Tweakpane;
	constructor() {
		state.register(this);

		/** @type Map<any, import("tweakpane").FolderApi> */
		this.#childrenToAdd = new Map();
		this.#folders = new Map();
	}
	async load() {
		this.#Tweakpane = await import('tweakpane');
	}

	init() {
		/** @type import('tweakpane').BladeApi */
		this.#globalPane = new this.#Tweakpane.Pane({ title: PANE_TITLE });
		this.#globalPane.registerPlugin(EssentialsPlugin);
		this.#globalPane.hidden = localStorage.getItem('debug') === 'true';

		this.#tabs = this.#globalPane.addTab({
			pages: PANE_TABS.map((tab) => {
				return { title: tab };
			}),
		}).pages;

		this.#globalPane.addSeparator();
		this.#globalPane.addButton({ title: 'Refresh' }).on('click', () => this.#globalPane.refresh());

		const tabIndex = app.debug?.urlParams.getNumber('tab');
		if (tabIndex) this.#tabs[tabIndex].controller_.onItemClick_();
	}

	addToParent(instance, name, parentName) {
		if (!this.#childrenToAdd.get(parentName)) this.#childrenToAdd.set(parentName, []);
		this.#childrenToAdd.get(parentName).push(instance);

		if (this.#folders.get(parentName)) mapping[name].createPane(this.#folders.get(parentName), instance, name);
	}

	add(instance, name, tabIndex = 0, customName = '') {
		if (mapping[name]) {
			const folder = mapping[name].createPane?.(this.#tabs[tabIndex], instance, customName || name);
			mapping[name].debug?.(instance);
			this.#folders.set(name, folder);

			if (this.#childrenToAdd.get(name)) {
				this.#childrenToAdd.get(name).forEach((instance) => mapping[name](folder, instance, name));
				this.#childrenToAdd.delete(name);
			}
		} else console.warn('No debug mapping found for', name);
	}

	onKeyDown(key) {
		if (key === 'h') {
			this.#globalPane.hidden = !this.#globalPane.hidden;
			localStorage.setItem('debug', this.#globalPane.hidden);
		}
	}
}

export { Mapping };

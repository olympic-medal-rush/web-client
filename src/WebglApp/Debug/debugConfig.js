const PANE_TABS = ['WEBGL', 'GAME'];

const PANE_TITLE = 'DEBUG';

const URL_PARAMS_LIST = ['orbit', 'tab'];

class ColorDebugHelper {
	constructor(object, prop) {
		this.object = object;
		this.prop = prop;
	}
	get value() {
		return `#${this.object[this.prop].getHexString()}`;
	}
	set value(hexString) {
		this.object[this.prop].set(hexString);
	}
}

// Usage: folder.addInput(new ColorDebugHelper(instance.uniforms.uSkyColor, 'value'), 'value', { label: 'uSkyColor' });

export { PANE_TABS, PANE_TITLE, URL_PARAMS_LIST, ColorDebugHelper };

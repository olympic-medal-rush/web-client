import { Color, GridHelper } from 'three';

class Grid extends GridHelper {
	constructor(structure) {
		super(structure.data[0].length, structure.data[0].length, new Color(0x535353), new Color(0x535353));
	}
}

export { Grid };

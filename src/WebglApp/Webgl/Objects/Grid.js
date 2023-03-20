import { Color, GridHelper } from 'three';

export default class Grid extends GridHelper {
	#structure;
	constructor(structure) {
		super(structure.data[0].length, structure.data[0].length, new Color(0x535353), new Color(0x535353));
		this.#structure = structure;
	}
}

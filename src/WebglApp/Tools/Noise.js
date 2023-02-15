import { CanvasTexture, LinearFilter, RepeatWrapping } from 'three';

class Noise {
	#canvas;
	#ctx;
	constructor() {
		const side = 256;

		this.#canvas = document.createElement('canvas');
		this.#canvas.width = this.#canvas.height = side;

		this.#ctx = this.#canvas.getContext('2d');
		const image = this.#ctx.getImageData(0, 0, side, side);

		image.data.forEach((_, i) => {
			image.data[i] = Math.round(Math.random() * 255);
		});

		this.#ctx.putImageData(image, 0, 0);

		this.texture = new CanvasTexture(this.#canvas);
		this.texture.wrapS = this.texture.wrapT = RepeatWrapping;
		this.texture.minFilter = LinearFilter;
		this.texture.magFilter = LinearFilter;
	}
}

export { Noise };

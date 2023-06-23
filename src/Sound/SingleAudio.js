export default class SingleAudio {
	constructor(ctx, buffer) {
		this.ctx = ctx;
		this.buffer = buffer;

		this.amp = this.ctx.createGain();
		this.amp.connect(this.ctx.destination);

		this.loop = false;
		this._muted = false;
		this._volume = 1;

		this.source = null;
		this._playing = false;

		this.timer = null;
	}

	get playing() {
		return this._playing;
	}

	get muted() {
		return this._muted;
	}

	set muted(value) {
		this._muted = value;
		this.amp.gain.value = this._muted ? 0 : this._volume;
	}

	get volume() {
		return this._volume;
	}

	set volume(value) {
		this._volume = value;
		if (!this._muted) {
			this.amp.gain.value = this._volume;
		}
	}

	play() {
		// if (this.source) this.pause();
		if (this._playing) return;

		this.source = this.ctx.createBufferSource();
		this.source.buffer = this.buffer;
		this.source.loop = this.loop;
		this.source.connect(this.amp);
		this.loopEnd = this.buffer.duration;
		this.source.start(0);
		// this.amp.gain.setValueAtTime(0, this.ctx.currentTime);

		this.timer = setTimeout(() => {
			if (!this.loop) {
				this.pause();
			}
		}, this.buffer.duration * 1000);

		this._playing = true;
	}

	pause() {
		if (this.source) {
			this._playing = false;
			clearTimeout(this.timer);
			this.source?.disconnect();
			this.source = null;
			this._isFadingOut = false;
		}
	}
}

import { app } from '@/App';
import { state } from '@/State';
import { Color, Scene } from 'three';

class LoginScene extends Scene {
	constructor() {
		super();
		state.register(this);
		this.background = new Color('#FFF');
	}

	onAppLoaded() {
		// const baseModel = app.core.assetsManager.get('player');
		// const mesh = skeletonClone(baseModel);
		// mesh.animations = baseModel.animations;
		// this.player = new BasePlayer(mesh, 'BZH');
		// this.player.rotation.y = 170 * (Math.PI / 180);
		// this.player.position.z = -4;
		// this.player.position.y = -1;
		// this.player.startIdle();
		// this.add(this.player);
		// state.on(EVENTS.SELECT_TEAM_UPDATE, (iso) => {
		// 	this.player.updateISO(iso);
		// 	gsap.to(this.player.rotation, { y: this.player.rotation.y + Math.PI * 2, duration: 0.5 });
		// });
	}

	render() {
		app.webgl.renderer.render(this, app.webgl.loginCamera);
	}
}

export { LoginScene };

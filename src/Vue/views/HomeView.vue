<script setup>
import { app } from '@/App';
import router from '@Vue/router';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

onMounted(() => {
	app.webgl.renderLogin = false;
	const tl = gsap.timeline();
	tl.to(app.webgl.postProcessing.uniforms.uFadeProgress, { value: 0, duration: 0.7 }, 0);
	tl.to(app.webgl.camera, { targetZoom: 0.15, duration: 0.7, ease: 'power3.in' }, 0);
	tl.add(() => (app.webgl.camera.controlable = true));
});

const onClick = () => {
	app.sound.play('button');
	router.push('/login');
};

onBeforeRouteLeave(() => {
	const tl = gsap.timeline({ onComplete: () => {} });
	tl.to(app.webgl.postProcessing.uniforms.uFadeProgress, { value: 1, duration: 0.5 }, 0);
});
</script>

<template>
	<div class="home">
		<ButtonOrLink class="cta" @click="onClick"> Jouer </ButtonOrLink>
	</div>
</template>

<style lang="scss">
.home {
	.cta {
		display: block;
		width: 123px;
		position: absolute;
		bottom: 57px;
		left: calc(50% - 123px / 2);

		.btn-inner {
			font-family: 'ApfelGrotezk-Fett';
			font-size: 24px;
		}
	}
}
</style>

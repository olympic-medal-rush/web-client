<script setup>
import MedalImg from './MedalImg.vue';
</script>

<template>
	<div class="medals-img">
		<MedalImg class="medal-img" :type="1" />
		<MedalImg class="medal-img" :type="2" />
		<MedalImg class="medal-img" :type="0" />
	</div>
</template>

<style lang="scss" scoped>
.medals-img {
	display: flex;
	justify-content: center;
	align-items: center;

	.medal-img {
		width: auto;

		&:nth-of-type(2) {
			z-index: 2;
			width: 66px;
			height: 66px;
		}

		&:nth-of-type(1) {
			z-index: 1;
			width: 50px;
			height: 50px;
			transform: translateX(20px);
		}

		&:nth-of-type(3) {
			width: 50px;
			height: 50px;
			transform: translateX(-20px);
		}
	}
}
</style>

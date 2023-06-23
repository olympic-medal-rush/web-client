<script setup>
import MedalImg from './MedalImg.vue';

const props = defineProps({
	margin: {
		type: String,
		required: false,
		default: '-6px',
	},
});

const styles = {
	margin: props.margin,
};
</script>

<template>
	<div class="medals-img">
		<MedalImg class="medal-img" :type="2" />
		<MedalImg class="medal-img" :type="1" />
		<MedalImg class="medal-img" :type="0" />
	</div>
</template>

<style lang="scss" scoped>
.medals-img {
	// height: 20px;
	display: flex;
	position: relative;
	isolation: isolate;

	.medal-img {
		// flex: 0 0 33%;
		width: 20px;
		position: relative;

		&:nth-of-type(1) {
			z-index: 2;
		}

		&:nth-of-type(2) {
			z-index: 1;
			position: absolute;
			top: 0;
			right: -5px;
		}

		&:nth-of-type(3) {
			position: absolute;
			top: 0;
			right: -10px;
		}
	}
}
</style>

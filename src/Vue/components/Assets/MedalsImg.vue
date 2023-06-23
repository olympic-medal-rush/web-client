<script setup>
import MedalImg from './MedalImg.vue';

const props = defineProps({
	margin: {
		type: String,
		required: false,
		default: '-14px',
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
	height: 20px;
	display: flex;
	isolation: isolate;

	.medal-img {
		// width: 100px;
		flex-shrink: 0;

		&:nth-of-type(1) {
			z-index: 2;
		}

		&:nth-of-type(2) {
			z-index: 1;
			margin-left: v-bind('styles.margin');
		}

		&:nth-of-type(3) {
			margin-left: v-bind('styles.margin');
		}
	}
}
</style>

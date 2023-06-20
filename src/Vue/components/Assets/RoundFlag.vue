<script setup>
import { useCountry } from '@Vue/composables/useCountry';

const props = defineProps({
	iso: { type: String, required: true },
	hasName: { type: Boolean, required: false },
	size: { type: String, required: true, default: '24px' },
});

const style = {
	width: props.size,
	height: props.size,
};
</script>

<template>
	<div class="FlagImg">
		<img :src="`/assets/images/flags/${props.iso}.png`" alt="" srcset="" />
		<span v-if="hasName"> {{ useCountry(props.iso) }} </span>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.FlagImg {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	img {
		width: v-bind('style.width');
		height: v-bind('style.height');
		object-fit: cover;
		border-radius: 9999px;
	}

	span {
		margin: 0 0 0 7px;
		@include apfel-grotezk();
	}
}
</style>

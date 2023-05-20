<script setup>
const props = defineProps({
	medal: { type: String, required: true },
});
</script>

<template>
	<div class="MedalImg">
		<img :src="`/assets/images/medals/${props.medal}.png`" alt="" srcset="" />
	</div>
</template>

<style lang="scss" scoped>
div {
	width: 100%;
	height: auto;
	img {
		width: 100%;
		height: auto;
	}
}
</style>

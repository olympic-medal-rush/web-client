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
	height: 100%;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>

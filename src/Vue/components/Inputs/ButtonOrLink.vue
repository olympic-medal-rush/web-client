<script setup>
import { app } from '@/App';
import ButtonOrLinkContent from '@components/Inputs/ButtonOrLinkContent.vue';

const props = defineProps({
	to: {
		required: false,
		type: String,
		default: null,
	},
	iconPosition: {
		required: false,
		type: String,
		default: 'none',
	},
	close: {
		required: false,
		type: Boolean,
		default: false,
	},
});

const onClick = () => {
	app.sound.play('click');
};
</script>

<template>
	<RouterLink v-if="props.to" ontouchstart="" :to="props.to" @click="onClick">
		<ButtonOrLinkContent :icon-position="props.iconPosition" :class="{ close: props.close }">
			<template #icon><slot name="icon"></slot></template>
			<slot></slot>
		</ButtonOrLinkContent>
	</RouterLink>
	<button v-else ontouchstart="" @click="onClick">
		<ButtonOrLinkContent :icon-position="props.iconPosition" :class="{ close: props.close }">
			<template #icon><slot name="icon"></slot></template>
			<slot></slot>
		</ButtonOrLinkContent>
	</button>
</template>

<style lang="scss"></style>

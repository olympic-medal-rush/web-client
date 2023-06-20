<template>
	<RouterLink v-if="to" class="btn" :to="to"><GreyArrow class="arrow" /></RouterLink>
	<button v-else class="btn" @click="onClick">
		<GreyArrow class="arrow" />
	</button>
</template>

<script setup>
import GreyArrow from '@/assets/svgs/GreyArrow.svg';
import { useRouter } from 'vue-router';

defineProps({
	to: {
		type: String,
		required: false,
	},
});

const router = useRouter();

const onClick = () => {
	router.back();
};
</script>

<style lang="scss" scoped>
@use '@styles/tools/colors' as *;

.btn {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: $bg-beige-ui;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;

	.arrow {
		width: 100%;
		height: 100%;
		transform: rotate(90deg);
	}
}
</style>

<style lang="scss">
@use '@styles/tools/colors' as *;

.arrow path {
	stroke: $black;
}
</style>

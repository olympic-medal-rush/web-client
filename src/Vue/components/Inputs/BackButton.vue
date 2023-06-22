<template>
	<RouterLink v-if="to" class="btn" :to="to"><GreyArrow class="arrowBack" /></RouterLink>
	<button v-else class="btn" @click="onClick">
		<GreyArrow class="arrowBack" />
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
	if (!router.hasRoute(window.history.state.back)) router.push('/game');
	else router.back();
};
</script>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.btn {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: $bg-beige-ui;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	transition: transform 0.5s $immg-expoOut;
	transform: scale(1);

	.arrowBack {
		width: 100%;
		height: 100%;
		transform: rotate(90deg);
	}

	&:active {
		transform: scale(0.95);
	}
}
</style>

<style lang="scss">
@use '@styles/tools/colors' as *;

.arrowBack path {
	stroke: $black;
}
</style>

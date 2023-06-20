<script setup>
import BackButton from '@components/Inputs/BackButton.vue';

defineProps({
	backTo: { required: true, type: String },
});
</script>

<template>
	<div class="page-container">
		<BackButton :to="backTo" class="back-btn" />
		<slot name="title"></slot>
		<slot></slot>
	</div>
</template>

<style lang="scss">
@use '@styles/tools' as *;

.page-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	background: linear-gradient(to bottom, rgba(219, 174, 14, 0.5), rgba(90, 74, 13, 0.5));

	.back-btn {
		position: absolute;
		top: 20px;
		left: 20px;
	}

	.title {
		@include apfel-grotezk();
		font-weight: 700;
		font-size: 24px;
		text-align: center;
		color: $dark-gray;
		padding-top: 30px;
	}
}
</style>

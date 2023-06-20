<script setup>
import Icon from '@/assets/svgs/Close.svg';

const props = defineProps({
	isActive: Boolean,
	toogleActive: Function,
});
</script>

<template>
	<transition name="notif">
		<div v-if="props.isActive" class="Bg-Modal">
			<div class="Modal">
				<button class="Modal-icon" @click="() => props.toogleActive()"><Icon /></button>
				<slot />
			</div>
			<div class="toogleModal" @click="() => props.toogleActive()"></div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.Bg-Modal {
	// background-color: red;
	// opacity: 0.5;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	pointer-events: all;
}

.Modal {
	position: absolute;
	top: 16px;
	left: 50%;
	transform: translateX(-50%);
	width: calc(100% - (2 * 12px));
	border-radius: 10px;
	background-color: $bg-beige-ui;
	z-index: 100;

	@include tablet {
		width: 50%;
	}

	&-icon {
		background-color: #e1e1c3;
		border-radius: 9999px;
		width: 40px;
		height: 40px;
		padding: 7px;
		position: absolute;
		right: 13px;
		top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.toogleModal {
	// background-color: blue;
	width: 100%;
	height: 100%;
}

.notif-enter-active,
.notif-leave-active {
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.notif-enter-from,
.notif-leave-to {
	opacity: 0;
	transform: scale(0.5) translate3d(0, -30vh, 1px);
}
</style>

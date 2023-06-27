<script setup>
import { app } from '@/App';
import { state } from '@/State';
import Icon from '@/assets/svgs/Close.svg';
import { ref } from 'vue';
import { EVENTS } from '@utils/constants';

const props = defineProps({
	isActive: Boolean,
	toogleActive: Function,
});

const modal = ref();

state.on(EVENTS.POINTER_DOWN, () => {
	if (props.isActive) props.toogleActive();
});
document.addEventListener('click', (e) => {
	if (!modal.value?.contains(e.target) && props.isActive) props.toogleActive();
});
</script>

<template>
	<transition name="notif">
		<div v-if="props.isActive">
			<div ref="modal" class="Modal">
				<button
					class="Modal-icon"
					@click="
						(e) => {
							props.toogleActive(e);
							app.sound.play('click');
						}
					"
				>
					<Icon />
				</button>
				<slot />
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.Modal {
	position: absolute;
	top: 16px;
	left: 50%;
	transform: translate3d(-50%, 0, 0) scale(1);
	width: calc(100% - (2 * 12px));
	border-radius: 10px;
	background-color: $bg-beige-ui;
	z-index: 100;
	transition: transform 0.5s $immg-expoOut;

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

		&:active {
			transform: scale(0.95);
		}
	}
}

.mobile-only {
	.Modal {
		width: calc(100% - (2 * 12px));
	}
}

.toogleModal {
	// background-color: blue;
	width: 100%;
	height: 100%;
}

.notif-enter-active,
.notif-leave-active {
	transition: transform 0.3s $immg-zoomOut, opacity 0.3s linear;
}

.notif-enter-from,
.notif-leave-to {
	opacity: 0;
	transform: scale(0.9) translate3d(0, -30vh, 0) rotate(5deg);
}
</style>

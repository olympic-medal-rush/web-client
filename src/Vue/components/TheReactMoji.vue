<script setup>
import { app } from '@/App';
import { state } from '@/State';
import HandWaving from '@/assets/svgs/HandWaving.svg';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';

const isOpen = ref(false);
const popup = ref();

const toggleReactMoji = (e) => {
	e?.stopPropagation();

	isOpen.value = !isOpen.value;

	app.sound.play(`modal${isOpen.value ? 'Open' : 'Close'}`);
};

const handleClick = (id) => {
	app.sound.play('click');
	app.server.userReaction({ reaction: id });
};

state.on(EVENTS.POINTER_DOWN, () => {
	if (isOpen.value) toggleReactMoji();
});
document.addEventListener('click', (e) => {
	if (!popup.value?.contains(e.target) && isOpen.value) toggleReactMoji();
});
</script>

<template>
	<div class="HandWaving">
		<button class="HandWaving-btn" @click="toggleReactMoji">
			<HandWaving />
		</button>
		<transition name="notif">
			<div v-if="isOpen" class="HandWaving-popup-positionner">
				<div ref="popup" class="HandWaving-popUp">
					<div class="HandWaving-popUp-container">
						<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13 0H14V27H13V0Z" fill="#E8E8C9" />
							<path d="M4.37114e-08 14L0 13L27 13V14L4.37114e-08 14Z" fill="#E8E8C9" />
						</svg>

						<button @click="handleClick(1)"><img src="/assets/images/reactmoji/1.png" alt="" /></button>
						<button @click="handleClick(3)"><img src="/assets/images/reactmoji/2.png" alt="" /></button>
						<button @click="handleClick(2)"><img src="/assets/images/reactmoji/3.png" alt="" /></button>
						<button @click="handleClick(0)"><img src="/assets/images/reactmoji/4.png" alt="" /></button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.HandWaving {
	&-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: $bg-beige-ui;
		width: 65px;
		height: 85px;
		border-radius: 31px 31px 0 0;
		pointer-events: all;
		transform: rotate(-45deg) translate(-7px, 24px);
		display: flex;
		justify-content: center;
		border: 2px solid rgba(0, 0, 0, 0.15);

		svg {
			margin-top: 17px;
			transform: rotate(45deg);
		}
	}

	&-popup-positionner {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}

	&-popUp {
		position: relative;

		&-container {
			background-color: $bg-beige-ui;
			width: 204px;
			height: 204px;
			border-radius: 15px;
			margin-bottom: 60px;

			transform-origin: center;

			svg {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate3d(-50%, -50%, 0);
			}

			button {
				width: 25%;
				height: 25%;
				margin: 12.5%;
				filter: drop-shadow(-11px 18px 76px rgba(0, 0, 0, 0.52));
				transition: transform 0.5s $immg-expoOut;
				transform: scale(1);

				&:active {
					transform: scale(0.8);
				}
			}
		}
	}
}

.mobile-only {
	.HandWaving {
		&-popUp {
			&-container {
				margin-bottom: 48px;
				margin-right: 0;
			}
		}
	}
}

.notif-enter-active,
.notif-leave-active {
	transition: transform 0.3s $immg-zoomOut, opacity 0.3s linear;
}

.notif-enter-from,
.notif-leave-to {
	opacity: 0;
	transform: translate3d(-50%, 0, 0) scale(0.9) rotate(5deg);
}
</style>

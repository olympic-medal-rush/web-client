<script setup>
import { app } from '@/App';
import HandWaving from '@/assets/svgs/HandWaving.svg';
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
	isOpen.value = !isOpen.value;

	app.sound.play(`modal${isOpen.value ? 'Open' : 'Close'}`);
};

const handleClick = (id) => {
	app.sound.play('click');
	app.server.userReaction({ reaction: id });
};
</script>

<template>
	<div class="HandWaving">
		<div class="HandWaving-btn" @click="() => toggle()">
			<HandWaving />
		</div>
		<transition name="notif">
			<div v-if="isOpen" class="HandWaving-popUp">
				<div class="HandWaving-popUp-toggle" @click="() => toggle()"></div>
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

	&-popUp {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		pointer-events: all;
		display: flex;
		justify-content: center;
		align-items: flex-end;

		@include tablet {
			justify-content: flex-end;
		}

		&-toggle {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		&-container {
			position: relative;
			background-color: $bg-beige-ui;
			width: 204px;
			height: 204px;
			border-radius: 15px;
			margin-bottom: 48px;

			@include tablet {
				margin-right: 60px;
				margin-bottom: 55px;
			}

			svg {
				position: absolute;
				left: calc(50% - (27px / 2));
				top: calc(50% - (27px / 2));
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

.notif-enter-active,
.notif-leave-active {
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.notif-enter-from,
.notif-leave-to {
	opacity: 0;
	transform: scale(0.5) translateY(300px);
}
</style>

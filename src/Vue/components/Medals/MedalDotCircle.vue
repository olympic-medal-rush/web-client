<script setup>
import MedalImg from '@components/Assets/MedalImg.vue';
import { ref } from 'vue';

const props = defineProps({
	type: {
		required: true,
		type: Number,
		default: 0,
	},
	hasCircle: {
		required: true,
		type: Boolean,
		default: true,
	},
});

const gradientId = ref();
gradientId.value = props.type === 0 ? 'bronze-gradient' : props.type === 1 ? 'silver-gradient' : 'gold-gradient';
</script>

<template>
	<div :class="`type-${props.type}`">
		<svg :class="!hasCircle && 'hidden'" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="2" y="2" width="70" height="70" rx="35" :fill="`url(#${gradientId})`" fill-opacity="0.15" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
			<defs>
				<radialGradient id="gold-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37 37) rotate(90) scale(35)">
					<stop offset="0.640625" stop-color="#F5E8A8" stop-opacity="0" />
					<stop offset="1" stop-color="#F5E8A8" />
				</radialGradient>
				<radialGradient id="silver-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37 37) rotate(90) scale(35)">
					<stop offset="0.640625" stop-color="#CACACA" stop-opacity="0" />
					<stop offset="1" stop-color="#CACACA" />
				</radialGradient>
				<radialGradient id="bronze-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37 37) rotate(90) scale(35)">
					<stop offset="0.640625" stop-color="#D39C5D" stop-opacity="0" />
					<stop offset="1" stop-color="#B76B18" />
				</radialGradient>
			</defs>
		</svg>

		<MedalImg class="img" :type="props.type" />
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

div {
	width: 70px;
	height: 70px;
	position: relative;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 0.5s $immg-expoOut;
	transform: scale(1);

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: 50%;
		opacity: 1;
		transition: opacity 0.2s linear;
		animation: 4s linear 0s infinite rotate;

		&.hidden {
			opacity: 0;
		}
	}

	.img {
		width: 100%;
		height: 100%;
	}

	&.type-2 {
		rect {
			stroke: $medal-gold;
		}
	}
	&.type-1 {
		rect {
			stroke: $medal-silver;
		}
	}
	&.type-0 {
		rect {
			stroke: $medal-bronze;
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	&:active {
		transform: scale(0.95);
	}
}
</style>

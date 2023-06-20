<script setup>
const props = defineProps({
	iconPosition: {
		required: false,
		type: String,
		default: 'none',
	},
});
</script>

<template>
	<div class="btn-inner">
		<slot v-if="props.iconPosition === 'left'" class="icon icon-left" name="icon"></slot>
		<slot></slot>
		<slot v-if="props.iconPosition === 'right'" class="icon icon-right" name="icon"></slot>
	</div>
</template>

<style lang="scss">
@use '@styles/tools' as *;

.btn-inner {
	@include apfel-grotezk();
	width: 100%;
	text-align: center;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 17px;
	border-radius: 6px;
	padding: 15px;
	color: $white;
	gap: 10px;
	transition: transform 0.5s $immg-expoOut;
	transform: scale(1);
	background: linear-gradient(178deg, #fcd616 1.69%, #a68c02 143.18%);
	box-shadow: 0px 100px 80px rgba(242, 195, 0, 0.07), 0px 30.1471px 24.1177px rgba(242, 195, 0, 0.0456112), 0px 12.5216px 10.0172px rgba(242, 195, 0, 0.035),
		0px 4.5288px 3.62304px rgba(242, 195, 0, 0.0243888), inset 0px 0px 14px rgba(255, 255, 255, 0.75);

	&:active {
		transform: scale(0.95);
	}
}
</style>

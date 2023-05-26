<script setup></script>

<template>
	<div>
		<img src="/assets/images/logo.png" alt="" />
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

div {
	position: absolute;
	top: 64px;
	// left: calc(50% - 143px);
	// background-color: $light-camel;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	// gap: 18px;
	// padding: 13px 35px;
	// border-radius: 65px;
	pointer-events: none;

	img {
		width: 300px;
	}

	// h1 {
	// 	font-family: 'Paris 24';
	// 	font-size: 37px;
	// 	line-height: 34px;
	// 	span {
	// 		font-size: 27px;
	// 	}
	// }
}
</style>

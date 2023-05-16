<script setup></script>

<template>
	<div><slot></slot></div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
div {
	position: absolute;
	bottom: 64px;
	left: calc(50% - 112px);
	background-color: $light-camel;
	font-family: 'Paris 24';
	font-size: 24px;
	padding: 12px 24px;
	border-radius: 12px;
	cursor: pointer;
}
</style>

<script setup>
import WIP from '@components/Utils/WIP.vue';
</script>

<template>
	<div class="Modal">
		<div class="Modal-header">
			<p class="Modal-header-title">Médailles</p>
		</div>
		<div class="Modal-container">
			<WIP />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Modal {
	padding: 5px 5px 20px 15px;
	pointer-events: all;

	&-header-title {
		font-family: 'ApfelGrotezk-Fett';
		font-size: 35px;
		line-height: 50px;
	}

	&-container {
		margin-top: 10px;
	}
}
</style>

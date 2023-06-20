<script setup>
import BlurryPage from '@components/Utils/BlurryPage.vue';
</script>

<template>
	<BlurryPage>
		<template #title>
			<h2 class="title">Classement</h2>
		</template>
		<RouterView />
	</BlurryPage>
</template>

<style lang="scss" scoped>
.scoreboard-container {
	position: absolute;
	width: 100%;
	height: 100%;
}
</style>

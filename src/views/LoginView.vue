<script setup>
import { ref } from 'vue';
import VButton from './../components/Inputs/VButton.vue';
import TheLogo from './../components/TheLogo.vue';

const isChosen = ref(false);
</script>

<template>
	<div class="Login-container">
		<TheLogo />
		<div class="Pays-container">
			<!-- <div class="Pays-item"><img src="../../public/assets/images/BZH.png" alt="" /></div> -->
		</div>
		<VButton v-if="isChosen">Confirmer le pays</VButton>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Login-container {
	background-color: $white;
	height: 100vh;
}
</style>

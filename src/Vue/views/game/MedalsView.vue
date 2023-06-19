<script setup>
import MedalCard from '@components/Medals/MedalCard.vue';
import mockData from '@jsons/medals_data.json';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
	<div>
		<MedalCard v-for="medal in mockData" :key="medal.id" :medal="medal" />
	</div>
</template>

<style lang="scss"></style>

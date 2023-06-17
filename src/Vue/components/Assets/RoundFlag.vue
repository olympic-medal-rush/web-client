<script setup>
import countries from 'i18n-iso-countries';
import countriesFR from 'i18n-iso-countries/langs/fr.json';

const props = defineProps({
	iso: { type: String, required: true },
	hasName: { type: Boolean, required: false },
});
</script>

<template>
	<div class="FlagImg">
		<img :src="`/assets/images/flags/${props.iso}.png`" alt="" srcset="" />
		<span v-if="hasName"> {{ countriesFR.countries[countries.alpha3ToAlpha2(props.iso)] || 'Bretagne' }} </span>
	</div>
</template>

<style lang="scss" scoped>
.FlagImg {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	img {
		width: 24px;
		height: 24px;
		object-fit: cover;
		border-radius: 9999px;
	}

	span {
		margin: 0 0 0 7px;
		font-family: 'ApfelGrotezk-Fett';
	}
}
</style>

<script setup>
import { useI18n } from 'vue-i18n';

// console.log('About');

const { t } = useI18n();
</script>

<template>
	<div class="about">
		<h1>Game view</h1>
		<p>{{ t('head.title') }}</p>
	</div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { useI18n } from 'vue-i18n/dist/vue-i18n.cjs.prod.js';

// console.log('About');

const { t } = useI18n();
</script>

<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>{{ t('head.title') }}</p>
	</div>
</template>

<style lang="scss" scoped></style>

<script async setup>
import { app } from '@WebglApp/App.js';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

onMounted(() => app.load());
</script>

<template>
	<div class="game">
		<h1>Game view</h1>
		<p>{{ t('head.title') }}</p>
	</div>
</template>

<style lang="scss" scoped></style>

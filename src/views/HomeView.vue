<script setup>
import { GlobalApp } from '@/main';

// console.log('Homepage');
GlobalApp.server.connect();
</script>

<template>
	<div class="home">
		<h1>Homepage</h1>
	</div>
</template>

<style lang="scss" scoped></style>

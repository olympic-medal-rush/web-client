<script setup>
// console.log('Homepage');
import ServerController from '@Server/ServerController.js';

const server = new ServerController({ host: import.meta.env.OLYMPIC_WSS });
server.connect();
</script>

<template>
	<div class="home">
		<h1>Homepage</h1>
	</div>
</template>

<style lang="scss" scoped></style>

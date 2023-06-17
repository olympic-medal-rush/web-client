<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
	<div>
		MEDALS
		{{ route.params.id }}
		<!-- <RouterView /> -->
	</div>
</template>

<style lang="scss"></style>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
	<div>{{ route.params.team }}</div>
</template>

<style lang="scss"></style>

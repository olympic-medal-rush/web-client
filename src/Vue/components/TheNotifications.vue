<script setup>
import Icon from '@/assets/svgs/NotificationIcon.svg';
</script>

<template>
	<div class="Notif">
		<Icon />
	</div>
</template>

<style scoped lang="scss">
@use '@styles/tools' as *;

.Notif {
	width: 47px;
	height: 47px;
	padding: 13px 13px;
	border-radius: 72px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	background-color: $bg-beige-ui;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
}
</style>

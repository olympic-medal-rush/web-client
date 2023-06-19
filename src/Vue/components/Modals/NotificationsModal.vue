<script setup>
import Icon from '@/assets/svgs/NotificationIcon.svg';

const date = new Date();
</script>

<template>
	<div class="Modal">
		<div class="Modal-header">
			<p class="Modal-header-title">Notifications</p>
			<div class="Modal-header-icon"><Icon /></div>
		</div>
		<p class="Modal-subtitle">
			{{
				date.toLocaleString('fr-FR', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
			}}
		</p>

		<div class="Modal-handle">
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Modal {
	padding: 5px 5px 20px 15px;

	&-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		&-title {
			font-family: 'ApfelGrotezk-Fett';
			font-size: 35px;
			line-height: 50px;
		}

		&-icon {
			width: max-content;
			padding: 13px 13px;
			border-radius: 72px;
			background-color: $darken-bg-beige-ui;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	&-subtitle {
		font-family: 'ApfelGrotezk-Regular';
		font-size: 14px;
		color: $silver-gray;
	}

	&-handle {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		span {
			display: inline-block;
			width: 15px;
			height: 2px;
			border-radius: 999px;
			background-color: $light-silver-gray;
			margin-top: 2px;
			transform: translateX(-5px);
		}
	}
}
</style>

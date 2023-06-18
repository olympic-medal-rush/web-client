<script setup>
import Icon from '@/assets/svgs/NotificationIcon.svg';
import { ref } from 'vue';
import NotificationsModal from './Modals/NotificationsModal.vue';

const isModal = ref(false);
const toggleModal = () => {
	isModal.value = !isModal.value;
};
</script>

<template>
	<div>
		<transition name="notif">
			<NotificationsModal v-if="isModal" class="NotificationsModal" />
		</transition>
		<div class="Notif">
			<Icon @click="toggleModal" />
		</div>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/tools' as *;

.Notif {
	width: max-content;
	padding: 13px 13px;
	border-radius: 72px;
	background-color: $bg-beige-ui;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
	z-index: 6;
}

.NotificationsModal {
	position: absolute;
	top: -5px;
	left: -5px;
	width: calc(100vw - (2 * (13px - 5px)));
	border-radius: 10px;
	background-color: $bg-beige-ui;
	z-index: 5;
}

.notif-enter-active,
.notif-leave-active {
	transition: all 0.5s ease;
}

.notif-enter-from,
.notif-leave-to {
	opacity: 0;
	transform: scale(0.5) translateY(-30vh);
}
</style>

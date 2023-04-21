<script setup>
import { store } from '@/Store';
import { GlobalApp } from '@/main';
import { STORE_KEYS } from '@utils/constants';

const handleClick = (e) => {
	GlobalApp.server.userVote({
		userId: store.get(STORE_KEYS.USER_ID),
		direction: e.target.dataset.dir,
	});
};
</script>

<template>
	<div class="VoteArrow">
		<div data-dir="0" class="arrow" @click="handleClick">Up</div>
		<div class="VoteArrow_horz">
			<div data-dir="3" class="arrow" @click="handleClick">Left</div>
			<div data-dir="1" class="arrow" @click="handleClick">Right</div>
		</div>
		<div data-dir="2" class="arrow" @click="handleClick">Down</div>
	</div>
</template>

<style scoped>
.VoteArrow {
	width: 300px;
	position: absolute;
	left: calc(50vw - 150px);
	bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.VoteArrow_horz {
	display: flex;
	flex-direction: row;
	gap: 10px;
}

.arrow {
	background-color: rgba(250, 199, 90);
	padding: 20px;
	border-radius: 10px;
	cursor: pointer;
}

.arrow:active {
	background-color: rgb(255, 176, 7);
}
</style>

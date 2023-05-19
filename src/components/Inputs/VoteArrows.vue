<script setup>
import { store } from '@/Store';
import Icon from '@/assets/svgs/BackArrow.svg';
import { app } from '@webglApp/App';
import { ref } from 'vue';
import { STORE_KEYS } from '@utils/constants';

const focus = ref(false);

const handleClick = (e) => {
	app.server.userVote({
		user_id: store.get(STORE_KEYS.USER_ID),
		direction: e.target.dataset.dir,
	});
};

store.watch(STORE_KEYS.FOCUS_PLAYER, (value) => (focus.value = value));
</script>

<template>
	<div>
		<div v-if="focus" class="VoteArrow">
			<div data-dir="0" class="arrow" @click="handleClick">Up</div>
			<div class="VoteArrow_horz">
				<div data-dir="3" class="arrow" @click="handleClick">Left</div>
				<div data-dir="1" class="arrow" @click="handleClick">Right</div>
			</div>
			<div data-dir="2" class="arrow" @click="handleClick">Down</div>
		</div>
		<div v-else class="FocusBtn" @click="() => (app.webgl.camera.focusPlayer = true)">Aller à la vue du pays <Icon /></div>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/tools' as *;
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
	padding: 17px;
	border-radius: 10px;
	cursor: pointer;
}

.arrow:active {
	background-color: rgb(255, 176, 7);
}

.FocusBtn {
	position: absolute;
	bottom: 59px;
	left: calc(50% - 106px);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 11px;
	background-color: $light-black;
	color: $white;
	font-family: 'Paris 24';
	padding: 19px 23px;
	border-radius: 30px;
}
</style>

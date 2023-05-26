<script setup>
import { state } from '@/State';
import { store } from '@/Store';
import Icon from '@/assets/svgs/BackArrow.svg';
import Arrow from '@/assets/svgs/VoteArrow.svg';
import BGArrows from '@/assets/svgs/bgVoteArrows.svg';
import ProgressArrows from '@/assets/svgs/progressVoteArrow.svg';
import { app } from '@webglApp/App';
import { ref } from 'vue';
import { EVENTS, STORE_KEYS } from '@utils/constants';

const focus = ref(true);

const handleClick = (e) => {
	app.server.userVote({
		user_id: store.get(STORE_KEYS.USER_ID),
		direction: e.target.dataset.dir,
	});
	removeActive();
	e.target.classList.add('active');
};

state.on(EVENTS.VOTE_RESULTS, (team) => {
	if (team.iso === app.game.currentTeam.iso) {
		removeActive();
	}
});

const removeActive = () => {
	document.querySelectorAll('.arrow').forEach((el) => {
		el.classList.remove('active');
	});
};

store.watch(STORE_KEYS.FOCUS_PLAYER, (value) => (focus.value = value));
</script>

<template>
	<div>
		<div v-if="focus" class="VoteArrow">
			<BGArrows class="bgSVG" />
			<ProgressArrows class="progress" />

			<div class="arrows">
				<div data-dir="0" class="arrow up" @click="handleClick"><Arrow /></div>
				<div class="VoteArrow_horz">
					<div data-dir="3" class="arrow left" @click="handleClick"><Arrow /></div>
					<span class="chrono"> 3s</span>
					<div data-dir="1" class="arrow right" @click="handleClick"><Arrow /></div>
				</div>
				<div data-dir="2" class="arrow down" @click="handleClick"><Arrow /></div>
			</div>
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

	svg.bgSVG {
		position: absolute;
		left: calc(50% - 100px);
	}

	svg.progress {
		transform: translate(63px, 13px);
		// stroke-dasharray: 100px;
		// stroke-dashoffset: 10px;
	}

	.arrows {
		width: 140px;
		position: absolute;
		top: 20px;
		left: calc(50% - 70px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		svg {
			width: 27px;
			height: 22px;
			pointer-events: none;
		}
	}
}

.VoteArrow_horz {
	display: flex;
	flex-direction: row;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 161px;
	margin: 5px 0;

	span {
		font-family: 'Paris 24';
		font-size: 22px;
	}
}

.arrow {
	background-color: #c2c2a5;
	padding: 12px;
	border-radius: 999px;
	cursor: pointer;
	pointer-events: all;

	&.left {
		transform: rotateZ(-90deg);
	}

	&.right {
		transform: rotateZ(90deg);
	}
	&.down {
		transform: rotateZ(180deg);
	}
}

.arrow:active {
	background-color: #6b6b1b;
}

.arrow.active {
	background-color: #6b6b1b;
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
	pointer-events: all;
	cursor: pointer;
}
</style>

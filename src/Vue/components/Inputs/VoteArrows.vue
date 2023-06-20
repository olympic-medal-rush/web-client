<script setup>
import { app } from '@/App';
import { state } from '@/State';
import { store } from '@/Store';
import Icon from '@/assets/svgs/BackArrow.svg';
import DirectiveVoteArrow from '@/assets/svgs/DirectiveVoteArrow.svg';
import Arrow from '@/assets/svgs/VoteArrow.svg';
import BGArrows from '@/assets/svgs/bgVoteArrows.svg';
import { useVotesStore } from '@stores/votes';
import { EVENTS, STORE_KEYS } from '@utils/constants';
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const focus = ref(true);
const voteStore = useVotesStore();
let directiveOpacity = null;
let directiveGrad = null;
const current = {
	opacity: 1,
	x: '0',
	y: '111',
};
const target = {
	opacity: 1,
	x: '0',
	y: '111',
};
const directiveTarget = [
	{
		x: '111',
		y: '0',
	},
	{
		x: '222',
		y: '111',
	},
	{
		x: '111',
		y: '222',
	},
	{
		x: '0',
		y: '111',
	},
];

const handleClick = (e) => {
	app.server.userVote({
		user_id: store.get(STORE_KEYS.USER_ID),
		direction: e.target.dataset.dir,
	});
	removeActive();
	document.querySelectorAll('.arrow').forEach((el) => {
		if (e.target !== el) el.classList.add('inactive');
	});
	e.target.classList.add('active');
};

state.on(EVENTS.VOTE_RESULTS, (team) => {
	if (team.iso === app.game.currentTeam.iso) {
		removeActive();
	}
});

onMounted(() => {
	directiveOpacity = document.querySelectorAll('svg.directive linearGradient stop')[1];
	directiveOpacity.setAttribute('offset', '0.99');
	directiveGrad = document.querySelector('svg.directive linearGradient');
});

state.on(EVENTS.VOTE_COUNT, () => {
	if (voteStore.left === 0 && voteStore.right === 0 && voteStore.up === 0 && voteStore.down === 0) {
		target.opacity = 1;
	} else {
		target.opacity = 0.4;
		const values = [voteStore.up, voteStore.right, voteStore.down, voteStore.left];
		const maxDir = values.indexOf(Math.max(...values));
		target.x = directiveTarget[maxDir].x;
		target.y = directiveTarget[maxDir].y;
	}

	gsap.to(current, {
		opacity: target.opacity,
		x: target.x,
		y: target.y,
		duration: 0.3,
		ease: 'power2.out',
		onUpdate: () => {
			directiveOpacity.setAttribute('offset', current.opacity.toString());
			directiveGrad.setAttribute('x2', current.x);
			directiveGrad.setAttribute('y2', current.y);
		},
	});
});

const removeActive = () => {
	document.querySelectorAll('.arrow').forEach((el) => {
		el.classList.remove('active');
		el.classList.remove('inactive');
	});
};

store.watch(STORE_KEYS.FOCUS_PLAYER, (value) => (focus.value = value));
</script>

<template>
	<div>
		<div v-if="focus" class="VoteArrow">
			<DirectiveVoteArrow class="directive mainBtn" />
			<BGArrows class="bgSVG mainBtn" />

			<div class="arrows mainBtn">
				<div data-dir="0" class="arrow up" @click="handleClick"><Arrow /></div>
				<div class="VoteArrow_horz">
					<div data-dir="3" class="arrow left" @click="handleClick"><Arrow /></div>
					<span class="chrono"> {{ voteStore.getLeftTime() }}</span>
					<div data-dir="1" class="arrow right" @click="handleClick"><Arrow /></div>
				</div>
				<div data-dir="2" class="arrow down" @click="handleClick"><Arrow /></div>
			</div>
			<div class="nbVotes">{{ voteStore.getSommeVote() }} vote{{ voteStore.getSommeVote() > 1 ? 's' : '' }}</div>
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
	touch-action: manipulation;

	.mainBtn {
		transform: translate(0px, 36px);
	}

	.chrono {
		font-family: 'ApfelGrotezk-regular';
		font-size: 44.6729px;
	}

	svg.bgSVG {
		position: absolute;
		left: calc(50% - 93px);
		top: 8px;
	}

	svg.directive {
		transform: scale(0.92) translate(42px, 28px);
		// stroke-dasharray: 100px;
		// stroke-dashoffset: 10px;
	}

	.arrows {
		width: 140px;
		position: absolute;
		top: 17px;
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

	.nbVotes {
		font-family: 'ApfelGrotezk-regular';
		color: $text-olive-ui;
		background-color: $pale-yellow;
		display: block;
		width: max-content;
		margin: auto;
		margin-top: 0px;
		transform: translateY(20px);
		border-radius: 9999px;
		padding: 4px 7px;
	}
}

.VoteArrow_horz {
	display: flex;
	flex-direction: row;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 167px;
	margin: 2px 0;

	span {
		font-family: 'Paris 24';
		font-size: 22px;
	}
}

.arrow {
	background: linear-gradient(0deg, #f3e288 0%, #f6f5d7 100%);
	padding: 12px;
	border-radius: 999px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	cursor: pointer;
	pointer-events: all;
	transition: background-color 0.3s;

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
	background: linear-gradient(180deg, #e3d06f 0%, #f3e288 100%);
	border: 2px solid rgba(0, 0, 0, 0.1);
}

.arrow.active {
	background: linear-gradient(180deg, #e3d06f 0%, #f3e288 100%);
	border: 2px solid rgba(0, 0, 0, 0.1);
}

.arrow.inactive {
	background: linear-gradient(180deg, #f2f0e3 0%, #f6f4d5 100%);
	border: 2px solid rgba(0, 0, 0, 0.05);
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

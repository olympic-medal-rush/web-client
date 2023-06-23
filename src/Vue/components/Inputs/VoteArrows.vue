<script setup>
import { app } from '@/App';
import { state } from '@/State';
import { store } from '@/Store';
import Icon from '@/assets/svgs/BackArrow.svg';
import DirectiveVoteArrow from '@/assets/svgs/DirectiveVoteArrow.svg';
import Arrow from '@/assets/svgs/VoteArrow.svg';
import BGArrows from '@/assets/svgs/bgVoteArrows.svg';
import terrainData from '@jsons/terrain_data.json';
import { useVotesStore } from '@stores/votes';
import { gsap } from 'gsap';
import { onMounted, reactive, ref, watch } from 'vue';
import { EVENTS, STORE_KEYS } from '@utils/constants';

const focus = ref(true);
const voteStore = useVotesStore();
let directiveOpacity = null;
let directiveGrad = null;
let buttons = null;
const posTeam = ref(null);
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
const upIsDisable = ref(false);
const rightIsDisable = ref(false);
const downIsDisable = ref(false);
const leftIsDisable = ref(false);

const upIsActive = ref(false);
const rightIsActive = ref(false);
const downIsActive = ref(false);
const leftIsActive = ref(false);

const upIsInactive = ref(false);
const rightIsInactive = ref(false);
const downIsInactive = ref(false);
const leftIsInactive = ref(false);

const handleClick = (e) => {
	app.server.userVote({
		user_id: store.get(STORE_KEYS.USER_ID),
		direction: e.target.dataset.dir,
	});
	removeActive();
	upIsInactive.value = true;
	rightIsInactive.value = true;
	downIsInactive.value = true;
	leftIsInactive.value = true;

	switch (e.target.dataset.dir) {
		case '0':
			upIsInactive.value = false;
			upIsActive.value = true;
			break;
		case '1':
			rightIsInactive.value = false;
			rightIsActive.value = true;
			break;
		case '2':
			downIsInactive.value = false;
			downIsActive.value = true;
			break;
		case '3':
			leftIsInactive.value = false;
			leftIsActive.value = true;
			break;

		default:
			break;
	}
};

state.on(EVENTS.VOTE_RESULTS, (team) => {
	if (team.iso === app.game.currentTeam.iso) {
		posTeam.value = team.position;
		removeActive();
		detectObstacles();
	}
});

onMounted(() => {
	resetBgRefs();
	buttons = document.querySelectorAll('button.arrow');
	posTeam.value = app.game.currentTeam.position;
	removeActive();
	detectObstacles();
});

const resetBgRefs = () => {
	directiveOpacity = document.querySelectorAll('svg.directive linearGradient stop')[1];
	if (directiveOpacity) directiveOpacity.setAttribute('offset', '0.99');
	directiveGrad = document.querySelector('svg.directive linearGradient');
};

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
			if (directiveOpacity && directiveGrad) {
				directiveOpacity.setAttribute('offset', current.opacity.toString());
				directiveGrad.setAttribute('x2', current.x);
				directiveGrad.setAttribute('y2', current.y);
			}
		},
	});
});

const removeActive = () => {
	buttons.forEach((el) => {
		el.disabled = false;
	});
	upIsDisable.value = false;
	rightIsDisable.value = false;
	downIsDisable.value = false;
	leftIsDisable.value = false;

	upIsActive.value = false;
	rightIsActive.value = false;
	downIsActive.value = false;
	leftIsActive.value = false;

	upIsInactive.value = false;
	rightIsInactive.value = false;
	downIsInactive.value = false;
	leftIsInactive.value = false;
};

const detectObstacles = () => {
	let up, left, right, down;

	if (terrainData.data[posTeam.value.y - 1] !== undefined && terrainData.data[posTeam.value.y - 1][posTeam.value.x] !== undefined) {
		up = terrainData.data[posTeam.value.y - 1][posTeam.value.x] === 1;
	} else {
		up = true;
	}

	if (terrainData.data[posTeam.value.y] !== undefined && terrainData.data[posTeam.value.y][posTeam.value.x - 1] !== undefined) {
		left = terrainData.data[posTeam.value.y][posTeam.value.x - 1] === 1;
	} else {
		left = true;
	}

	if (terrainData.data[posTeam.value.y] !== undefined && terrainData.data[posTeam.value.y][posTeam.value.x + 1] !== undefined) {
		right = terrainData.data[posTeam.value.y][posTeam.value.x + 1] === 1;
	} else {
		right = true;
	}

	if (terrainData.data[posTeam.value.y + 1] !== undefined && terrainData.data[posTeam.value.y + 1][posTeam.value.x] !== undefined) {
		down = terrainData.data[posTeam.value.y + 1][posTeam.value.x] === 1;
	} else {
		down = true;
	}

	const isObstacle = [up, left, right, down];
	buttons.forEach((el, i) => {
		if (isObstacle[i]) {
			el.disabled = true;
		}
	});

	upIsDisable.value = up;
	rightIsDisable.value = right;
	downIsDisable.value = down;
	leftIsDisable.value = left;
};

const number = ref(0);
const tweened = reactive({
	number: 0,
});
watch(number, (n) => {
	gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 });
});

watch(voteStore, () => {
	number.value = voteStore.getSommeVote();
});

store.watch(STORE_KEYS.FOCUS_PLAYER, (value) => {
	focus.value = value;
	if (focus.value) {
		setTimeout(() => {
			resetBgRefs();
		}, 100);
	}
});
</script>

<template>
	<div>
		<div v-if="focus" class="VoteArrow">
			<DirectiveVoteArrow ref="svgDirectiveVoteArrow" class="directive mainBtn" />
			<BGArrows class="bgSVG mainBtn" />

			<div class="arrows mainBtn">
				<button data-dir="0" class="arrow up" :class="{ disable: upIsDisable, active: upIsActive, inactive: upIsInactive }" @click="handleClick">
					<Arrow />
				</button>
				<div class="VoteArrow_horz">
					<button data-dir="3" class="arrow left" :class="{ disable: leftIsDisable, active: leftIsActive, inactive: leftIsInactive }" @click="handleClick">
						<Arrow />
					</button>
					<span class="chrono">
						<p>{{ voteStore.getLeftTime() }}</p>
						<span>s</span>
					</span>
					<button data-dir="1" class="arrow right" :class="{ disable: rightIsDisable, active: rightIsActive, inactive: rightIsInactive }" @click="handleClick">
						<Arrow />
					</button>
				</div>
				<button data-dir="2" class="arrow down" :class="{ disable: downIsDisable, active: downIsActive, inactive: downIsInactive }" @click="handleClick">
					<Arrow />
				</button>
			</div>
			<div class="nbVotes">{{ tweened.number.toFixed(0) }} vote{{ voteStore.getSommeVote() > 1 ? 's' : '' }}</div>
		</div>
		<div
			v-else
			class="FocusBtn"
			@click="
				() => {
					app.webgl.camera.focusPlayer = true;
					removeActive();
					detectObstacles();
				}
			"
		>
			Aller à la vue du pays <Icon />
		</div>
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
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;

		> p {
			font-size: 44px;
			line-height: 39px;
			width: 1ch;
			text-align: center;
		}

		> span {
			font-size: 24px;
		}
	}

	svg.bgSVG {
		position: absolute;
		left: calc(50% - 93px);
		top: 8px;
	}

	svg.directive {
		transform: translate(39px, 25.5px);
		// stroke-dasharray: 100px;
		// stroke-dashoffset: 10px;
	}

	.arrows {
		width: 140px;
		position: absolute;
		top: 12px;
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
	width: 178px;
	margin: 8.5px 0;

	span {
		font-family: 'ApfelGrotezk-regular';
		font-size: 22px;
	}
}

.arrow {
	padding: 12px;
	border-radius: 999px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	cursor: pointer;
	pointer-events: all;
	transition: background-color 0.3s;
	position: relative;
	background: linear-gradient(0deg, #f6f4d5, #f2f0e3, #f3e288, #f6f5d7, #f3e288, #e3d06f);
	background-size: 600% 600%;
	background-position: 0% 30%;
	transition: background-position 0.3s ease;

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

.arrow.active {
	background-position: 0% 2%;
	border: 2px solid rgba(0, 0, 0, 0.1);
}

.arrow.inactive {
	background-position: 0% 92%;
	border: 2px solid rgba(0, 0, 0, 0.05);
}

.arrow.disable {
	background-position: 0% 92%;
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

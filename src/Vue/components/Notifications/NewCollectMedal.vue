<script setup>
import { state } from '@/State';
import Icon from '@/assets/svgs/GreyArrow.svg';
import { useCountry } from '@Vue/composables/useCountry';
import MedalImg from '@components/Assets/MedalImg.vue';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
import { useTeamsStore } from '@stores/teams';
import { EVENTS, MEDAL_TYPES } from '@utils/constants';
import { onMounted, ref } from 'vue';

const teamsStore = useTeamsStore();

const myCountry = ref();
const otherCountry = ref();
const videoBg = ref();

const collectTeam = ref(null);
const collectType = ref(0);

const myActive = ref(false);
const videoActive = ref(false);
const otherActive = ref(false);
const otherOpen = ref(false);

let timeout;

const idMedal = ref(0);

onMounted(()=> {
  videoBg.value.addEventListener("ended", videoBg.value.pause());
})

state.on(EVENTS.COLLECT_MEDAL, (medal, team) => {
	idMedal.value = medal.id;
	if (timeout) clearTimeout(timeout);

	collectTeam.value = team.iso;
	if (team.iso === teamsStore.currentIso) {
    setTimeout(() => {
      videoBg.value.play();
      videoActive.value = true;
      timeout = setTimeout(() => {
        videoActive.value = false;
      }, 2000);
      setTimeout(() => {
        myActive.value = true;
      }, 300);
    }, 2700)
	} else {
		otherActive.value = true;
		timeout = setTimeout(() => {
			otherActive.value = false;
		}, 3000);
	}
	collectType.value = medal.type;
});

const removeMyTeamCollect = () => {
	myActive.value = false;
	videoActive.value = false;
};

const toggleOpenOtherPays = () => {
	otherOpen.value = !otherOpen.value;

  if (otherOpen.value) {
    clearTimeout(timeout)
  } else {
    timeout = setTimeout(() => {
			otherActive.value = false;
		}, 3000);
  }
};
</script>

<template>
	<div class="NewCollectMedal">
		<video ref="videoBg" :class="{active: videoActive}" muted playsinline autoplay @click="() => removeMyTeamCollect()">
			<source src="/assets/videos/confetti.webm" />
			<source src="/assets/videos/confetti.mov" />
		</video>
		<div ref="otherCountry" class="NewCollectMedal_OtherCountry" :class="{ openModal: otherOpen, active: otherActive }">
			<div class="header">
				<h2>Médaille remportée !</h2>
				<button class="NewCollectMedal_OtherCountry_Icon" :class="{ openModal: otherOpen }" @click="() => toggleOpenOtherPays()">
					<Icon />
				</button>
			</div>
			<transition>
				<p v-if="!otherOpen" class="NewCollectMedal_OtherCountry_Close">
					<RoundFlag v-if="collectTeam" :iso="collectTeam" has-name /> -
					<b :class="{ bronze: collectType === 0, argent: collectType === 1, or: collectType === 2 }">
						Médaille {{ collectType === 0 ? 'de Bronze' : collectType === 1 ? "d'Argent" : "d'Or" }}
					</b>
				</p>
				<p v-else class="NewCollectMedal_OtherCountry_Open">
          <span class="text">{{ useCountry(collectTeam) }} remporte une 
            <b :class="{ bronze: collectType === 0, argent: collectType === 1, or: collectType === 2 }">
					    Médaille {{ collectType === 0 ? 'de Bronze' : collectType === 1 ? "d'Argent" : "d'Or" }}
				    </b>.
          </span>
          <div class="infos-container">
            <RoundFlag v-if="collectTeam" :iso="collectTeam" has-name size="31px"/><span>{{ teamsStore.getTeam(collectTeam).position }} {{ teamsStore.getTeam(collectTeam).position > 1 ? 'eme' : 'er' }}</span>
            <div class="medals">
              <div><span class="or">{{ teamsStore.getTeam(collectTeam).medals[MEDAL_TYPES.gold]}}</span><MedalImg class="medal-img" :type="2" /></div>
              <div><span class="argent">{{ teamsStore.getTeam(collectTeam).medals[MEDAL_TYPES.silver]}}</span><MedalImg class="medal-img" :type="1" /></div>
              <div><span class="bronze">{{ teamsStore.getTeam(collectTeam).medals[MEDAL_TYPES.bronze]}}</span><MedalImg class="medal-img" :type="0" /></div>
            </div>
          </div>
					<ButtonOrLink class="cta" :to="'/game/medals/' + collectTeam + '/' + idMedal"> Afficher la médaille </ButtonOrLink>
				</p>
			</transition>
		</div>
		<div ref="myCountry" class="NewCollectMedal_MyCountry" :class="{ active: myActive }" @click="() => removeMyTeamCollect()">
			<h2>Médaille Obtenue !</h2>
			<p>
				Félicitations vous avez obtenu une
				<span :class="{ bronze: collectType === 0, argent: collectType === 1, or: collectType === 2 }">
					Médaille {{ collectType === 0 ? 'de Bronze' : collectType === 1 ? "d'Argent" : "d'Or" }}
				</span>
				<MedalImg class="small-medal" :type="collectType" />
				<br />
				Votre équipe se hisse en
				<b
					>{{ teamsStore.getTeam(teamsStore.currentIso).position
					}}{{ teamsStore.getTeam(teamsStore.currentIso).position === 1 ? 'er' : 'eme' }} position</b
				>
				!
			</p>
			<div class="big-medal">
				<img v-if="collectType === 0" src="/assets/svgs/text-bronze.svg" class="text" alt="" srcset="" />
				<img v-if="collectType === 1" src="/assets/svgs/text-argent.svg" class="text" alt="" srcset="" />
				<img v-if="collectType === 2" src="/assets/svgs/text-or.svg" class="text" alt="" srcset="" />
				<MedalImg :type="collectType" />
			</div>
			<ButtonOrLink class="cta" :to="'/game/medals/' + teamsStore.currentIso + '/' + idMedal"> Afficher le détail </ButtonOrLink>
		</div>
	</div>
</template>

<style lang="scss">
@use '@styles/tools' as *;
.NewCollectMedal {
	width: 100%;
	height: 0px;
	top: 0px;
	left: 0px;
	display: flex;
	justify-content: center;
	align-items: center;

	video {
		position: absolute;
		top: 0;
		opacity: 0;
		transition: opacity 0.2s;
		pointer-events: none;

		&.active {
			opacity: 1;
			pointer-events: all;
		}
	}

	&_OtherCountry {
		position: absolute;
		top: -300px;
		background-color: $bg-beige-ui;
		padding: 14px 14px 24px 14px;
		border-radius: 10px;
		transition: top 0.3s;
		color: $text-olive-ui;
		width: 93.5%;
		pointer-events: all;
		scale: 0.3;
		opacity: 0;
		height: 83px;
		transition: top 0.3s $in-out-quad, scale 0.3s $in-out-quad, opacity 0.3s linear, height 0.2s $in-out-quad;

		@include tablet {
			width: 364px;
		}

		h2 {
			font-family: 'ApfelGrotezk-Fett';
			font-size: 24px;
		}
		.MedalImg {
			width: 25px;
		}

		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: top;
		}

		&_Icon {
			padding: 17px 13px 12.5px 13px;
			background-color: $darken-bg-beige-ui;
			border-radius: 9999px;
     	 	transform: rotate(0deg);
      		transition: transform .3s;
      

      &.openModal {
        transform: rotate(180deg);
      }
		}

		&_Close {
			font-size: 17px;
			display: flex;
			align-items: center;
			position: absolute;
			transform: translateY(-12px);

			div {
				display: inline-flex;
				margin-right: 3px;
        max-width: 50%;
			}

			b {
				font-family: 'ApfelGrotezk-Fett';
				margin-left: 3px;
			}
		}

		&.active {
			opacity: 1;
			scale: 1;
			top: 20px;
		}

		&_Open {
			position: absolute;
			width: calc(100% - 2 * 14px);

      .infos-container{
        position: relative;
        width: calc(100%);
        background-color: $darken-bg-beige-ui;
        border-radius: 7px;
        padding: 13px 18px;
        margin: 17px 0 20px 0;
        display: flex;

        .FlagImg {
          max-width: 50%;
          span {
            font-family: 'ApfelGrotezk-Fett';
            font-size: 20px;
            transform: translateY(-8px);
          }
        }

        > span{
          position: absolute;
          top: 29px;
          left: 56px;
          font-family: 'ApfelGrotezk-Regular';
          font-size: 15px;
        }

        .medals {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin: 0 0 0 25px;

          > div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-family: 'ApfelGrotezk-Fett';

            span {
              margin-right: 3px;
              transform: translateY(-2px);
            }
          }
        }
      }
		}

		&.openModal {
			height: 244px;
		}
	}

	&_MyCountry {
		pointer-events: all;
		cursor: pointer;
		position: absolute;
		top: 26%;
		opacity: 0;
		scale: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 35px;
		border-radius: 30px;
		background-color: $bg-beige-ui;
		transition: scale 0.3s $in-out-quad, opacity 0.5s linear;
		max-width: 92%;

		h2 {
			font-family: 'ApfelGrotezk-fett';
			font-size: 33px;
		}

		p {
			font-family: 'ApfelGrotezk-regular';
			font-size: 14px;
			margin-top: 10px;
			text-align: center;

			span {
				font-family: 'ApfelGrotezk-fett';
			}
		}

		.big-medal {
			position: relative;
			padding: 10px;

			img.text {
				position: absolute;
				top: 12px;
				left: -8px;
				animation: 15s linear 0s infinite rotate;
			}
			.MedalImg {
				margin-top: 20px;
				width: 100px;
			}
		}

		&.active {
			scale: 1;
			opacity: 1;
		}

		.small-medal {
			width: 15px;
			margin-top: 0;
			margin-left: 3px;
			display: inline-block;
			transform: translateY(3px);
		}
	}

	.cta {
		width: 100%;
		margin-top: 20px;
	}

	.or {
		color: $gold-ui;
	}

	.argent {
		color: $silver-ui;
	}

	.bronze {
		color: $bronze-ui;
	}
}

.v-enter-active{
	transition: opacity 0.5s ease 0.3s;
}

.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>

<script setup>
import ShareIcon from '@/assets/svgs/ShareIcon.svg';
import MedalImg from '@components/Assets/MedalImg.vue';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';

const props = defineProps({
	medal: {
		type: Object,
		required: true,
	},
});

defineExpose({
	id: props.medal.id,
});

const onCtaClick = () => {
	console.log('click');
};
</script>

<template>
	<div class="card">
		<div class="image-wrapper">
			<img src="/assets/images/medal_cover.jpg" />
		</div>
		<div class="athlete">
			<RoundFlag size="16px" :iso="medal.nationality" />
			<p>{{ medal.athlete }}</p>
		</div>
		<div class="event-info">
			<div class="event-info-wrapper">
				<MedalImg class="medal-img" :type="medal.type" />
				<div class="text-info">
					<h3>{{ medal.sport }}</h3>
					<h4>{{ medal.event_name }}</h4>
				</div>
			</div>
		</div>
		<p class="description">{{ medal.description }}</p>
		<ButtonOrLink class="cta" icon-position="left" @click.prevent="onCtaClick">
			<template #icon>
				<ShareIcon />
			</template>
			Partager
		</ButtonOrLink>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.card {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: $bg-beige-ui;
	padding-top: 35px;
	padding-bottom: 20px;
	border-radius: 15px;
	box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185), 0px 20px 13px rgba(0, 0, 0, 0.035),
		0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);

	.image-wrapper {
		padding: 0 20px;
		width: 100%;

		img {
			aspect-ratio: 16/9;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}

	.athlete {
		padding: 0 20px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		font-size: 18px;
		gap: 8px;
		color: $text-olive-ui;
	}

	.event-info {
		margin-top: 25px;
		width: 100%;
		position: relative;
		padding-left: 20px;

		&-wrapper {
			border-radius: 100px 0 0 100px;
			background: linear-gradient(93.45deg, #ebda83 4.64%, rgba(240, 240, 196, 0) 105.82%);
			display: flex;
			align-items: center;

			.medal-img {
				width: 100px;
				height: 100px;
				transform: rotate(-7.5deg);
				flex-shrink: 0;
			}

			.text-info {
				margin-left: 10px;
				padding-right: 20px;
				color: $text-olive-ui;

				h3 {
					font-weight: 700;
					font-size: 25px;
				}
				h4 {
					margin-top: 5px;
					font-weight: 400;
					font-size: 18px;
				}
			}
		}
	}

	.description {
		margin-top: 20px;
		padding: 0 20px;
		font-size: 16px;
	}

	.cta {
		margin-top: auto;
		width: 100%;
		padding: 0 20px;
	}
}
</style>

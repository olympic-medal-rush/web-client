<template>
	<div class="WIP">
		<img src="/assets/svgs/info.svg" alt="" srcset="" />
		<div>
			<p>Disponible en V2 !</p>
			<span>ça ne saurait tarder...</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.WIP {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 23px;
	background: #dbdbaf;
	border: 3px solid rgba(187, 166, 58, 0.25);
	border-radius: 9999px;
	width: max-content;

	div {
		margin-left: 10px;

		p {
			font-family: 'ApfelGrotezk-fett';
			color: $text-olive-ui;
			font-size: 18px;
			text-shadow: 0px 100px 80px rgba(53, 53, 6, 0.07), 0px 41.7776px 33.4221px rgba(53, 53, 6, 0.0503198), 0px 22.3363px 17.869px rgba(53, 53, 6, 0.0417275),
				0px 12.5216px 10.0172px rgba(53, 53, 6, 0.035), 0px 6.6501px 5.32008px rgba(53, 53, 6, 0.0282725), 0px 2.76726px 2.21381px rgba(53, 53, 6, 0.0196802);
		}

		span {
			font-family: 'ApfelGrotezk-regular';
			font-size: 15px;
			color: rgba(53, 53, 6, 0.5);
		}
	}
}
</style>

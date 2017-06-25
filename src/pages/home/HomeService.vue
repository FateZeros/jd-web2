<!-- 首页 服务 -->
<template>
	<div class="container">
		<div class="service-item">
			<div class="service-img call-cost"></div>	
			<p class="service-name">话费</p>
		</div>
		<div class="service-item">
			<div class="service-img plane-ticket"></div>
			<p class="service-name">机票</p>
		</div>
		<div class="service-item">
			<div class="service-img hotel"></div>
			<p class="service-name">酒店</p>
		</div>
		<div class="service-item">
			<div class="service-img game"></div>
			<p class="service-name">游戏</p>
		</div>
		<div class="service-item">
			<div class="service-img company-pay"></div>
			<p class="service-name">企业购</p>
		</div>
		<div class="service-item">
			<div class="service-img oil-card"></div>
			<p class="service-name">加油卡</p>
		</div>
		<div class="service-item">
			<div class="service-img movie-ticket"></div>
			<p class="service-name">电影票</p>
		</div>
		<div class="service-item">
			<div class="service-img train-ticket"></div>
			<p class="service-name">火车票</p>
		</div>
		<div class="service-item">
			<div class="service-img crowd-fund"></div>
			<p class="service-name">众筹</p>
		</div>
		<div class="service-item">
			<div class="service-img manage-money"></div>
			<p class="service-name">理财</p>
		</div>
		<div class="service-item">
			<div class="service-img prize-card"></div>
			<p class="service-name">礼品卡</p>
		</div>
		<div class="service-item">
			<div class="service-img white-card"></div>
			<p class="service-name">白条</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";
	.container {
		width: 180px;
		height: 212px;
		border-top: 1px solid #e3e3e3;
	}

	.service-item {
		width: 45px;
		height: 70px;
		border-right: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
		float: left;
		box-sizing: border-box;
		font-size: 12px;
		color: #666;
		text-align: center;
		padding: 10px 0;

		&:hover {
			cursor: pointer;
		}

		.service-img {
			background-image: url(../../assets/img/sprite_fs@2x.png);
			background-size: 126px 118px;
			background-repeat: no-repeat;
			width: 24px;
			height: 24px;
			margin: 0 auto;
		}

		.call-cost {
			background-position: 0 -68px;
		}

		.plane-ticket {
			background-position: 0 -34px;
		}

		.hotel {
			background-position: -34px -68px;
		}

		.game {
			background-position: -68px 0;
		}

		.company-pay {
			background-position: -68px -34px;
		}

		.oil-card {
			background-position: 0 0;
		}

		.movie-ticket {
			background-position: -34px -34px;
		}

		.train-ticket {
			background-position: -68px -68px;
		}

		.crowd-fund {
			background-position: -102px 0;
		}

		.manage-money {
			background-position: -102px -34px;
		}

		.prize-card {
			background-position: -102px -68px;
		}

		.white-card {
			background-position: -34px 0;
		}

		.service-name {
			height: 20px;
			margin-top: 6px;

			&:hover {
				color: $red1;
			}
		}
	}

	.service-item:nth-child(4n) {
		border-right: none;
	}

	.service-item:nth-child(n+9) {
		border-bottom: none;
	}

</style>
<template>
	<div class="container">
		<div class="seckill-cont">
			<div class="seckill-header">
				<div class="header-dec"></div>
				<div class="sec-clock-logo"></div>
				<div class="sec-font">京东秒杀</div>	
				<a>总有你想不到的低价<i class="fa fa-chevron-circle-right"></i></a>
				<!-- 秒杀倒计时 -->
				<div class="sec-clock-cont">
					<div class="clock-tip">当前场次</div>
					<div class="clock-cont">
						<div class="clock-hour">12</div>:
						<div class="clock-minute">50</div>:
						<div class="clock-secs">43</div>
					</div>
					<div class="clock-tip">后结束抢购</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";

	.container {
		width: 100%;
		height: 305px;
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.seckill-cont {
		width: $commonWidth;
		margin: 0 auto;
		height: 100%;
		background: #fff;
	}

	.seckill-header {
		width: 100%;
		height: 55px;
		background: url(../../assets/img/seckill-hd.png) no-repeat center;
		position: relative;

		a {
			font-size: 14px;
			color: #fff;
			cursor:  pointer;
		}
	}

	.header-dec {
		width: 28px;
		height: 28px;
		background-image: url(../../assets/img/sprite_index@2x.png);
		background-repeat: no-repeat;
		background-position: -120px -81px;
		background-size: 170px 158px;
		display: inline-block;
		position: absolute;
	}

	.sec-clock-logo {
		width: 34px;
		height: 40px;
		position: absolute;
		left: 32px;
		top: 10px;
		background-image: url(../../assets/img/sprite_index@2x.png);
		background-repeat: no-repeat;
		background-position: 0 -28px;
		background-size: 170px 158px;
	}

	.sec-font {
		color: #fff;
		line-height: 55px;
		font-size: 24px;
		display: inline-block;
		margin-left: 70px;
	}

	.sec-clock-cont {
		width: 290px;
		height: 55px;
		line-height: 55px;
		position: absolute;
		right: 10px;
		color: #fff;
		top: 0;
		font-size: 14px;
		display: flex;

		.clock-cont {
			width: 130px;
			height: 55px;
			margin: 0 4px;
			padding: 4px;
			display: inline-block;
			box-sizing: border-box;
			display: flex;
			font-size: 32px;
			line-height: 47px;
			color: #440106;

			.clock-hour, .clock-minute, .clock-secs {
		    width: 35px;
		    height: 37px;
		    background-color: #440106;
		    color: #f90013;
		    font-size: 24px;
		    font-family: Arial;
		    font-weight: 700;
		    border-radius: 3px;
		    text-align: center;
		    line-height: 37px;
		    margin-top: 8px;
			}
		}

		.clock-tip {
			flex: 1;
			text-align: center;
			line-height: 60px;
		}
	}
</style>
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
						<div class="clock-hour">{{seckillHour}}</div>:
						<div class="clock-minute">{{seckillMin}}</div>:
						<div class="clock-secs">{{seckillSec}}</div>
					</div>
					<div class="clock-tip">后结束抢购</div>
				</div>
			</div>
			<!-- 秒杀商品 -->
			<div class="seckill-cargos">
				<swiper :options="swiperOption" ref="swipeSeckill" class="swiper-box">
					<swiper-slide class="seckill-item" v-for="(item, key) in seckill.seckillRecords" :key="key">
						<div class="seckill-type" v-if="item.seckillType === 1">{{item.seckillTypeName}}</div>
						<div class="seckill-type" v-else-if="item.seckillType === 2">{{item.seckillTypeName}}</div>
						<div class="seckill-type" v-else-if="item.seckillType === 3">{{item.seckillTypeName}}</div>
						<img :src="item.imgUrl" alt="">
						<span class="seckill-shadow"></span>
						<p class="description">{{item.description}}</p>
						<p class="price">
							<span class="new-price">¥{{item.seckillPrice}}</span>
							<span class="old-price">¥<del>{{item.price}}</del></span>
						</p>
					</swiper-slide>
	        <div class="swiper-button-prev" slot="button-prev"></div>
    			<div class="swiper-button-next" slot="button-next"></div>
  			</swiper>
  			<div class="seckill-right">
  				<img :src="seckill.seckillRight" alt=""/>
  			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapState, mapActions } from 'vuex'

	export default {
		data() {
			return {
				seckillHour: 0,
				seckillMin: 0,
				seckillSec: 0,
				swiperOption: {
					notNextTick: true,
					loop: true,
					slidesPerView: 5,
					prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next'
				}
			}
		},
		methods: {
			...mapActions(['getHomeSeckill']),
			countDownTime() {
				const date = new Date()
				const now = date.getTime()
				// console.log(this.seckill.seckillEndtime)
				// 设置截止时间
				const endDate = new Date(this.seckill.seckillEndtime)
				const end = endDate.getTime()
				// 时差
				const leftTime = end - now
				if (leftTime >= 0) {					
					this.seckillHour = this.handleTime(Math.floor(leftTime/1000/60/60%24))
					this.seckillMin = this.handleTime(Math.floor(leftTime/1000/60%60))
					this.seckillSec = this.handleTime(Math.floor(leftTime/1000%60))
				}
				setTimeout(this.countDownTime, 1000)
			},
			handleTime(timeNum) {
				let timeAfter = timeNum
				if (timeAfter < 10) {
					timeAfter = '0' + timeAfter
				}
				return timeAfter
			}
		},
		created() {
			this.getHomeSeckill()
		},
		computed: {
			...mapState({
				seckill: state => {
					// console.log(state.homeSeckill.seckill.seckillEndtime)
					return state.homeSeckill.seckill
				}
			}),
			swiper() {
				return this.$refs.swipeSeckill.swiper
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		mounted() {
			this.countDownTime()
		}
	}
	
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

	.seckill-cargos {
		width: 100%;
		height: 250px;
		padding: 5px;
		display: flex;

		.swiper-box {
			width: 1000px;
			height: 100%;
		}

		.seckill-item {
			width: 196px;
			height: 100%;
			border-right: 1px solid #e3e3e3;
			text-align: center;
			position: relative;
			padding: 0 15px;
			box-sizing: border-box;

			img {
				width: 130px;
				height: 130px;
				margin: 17px 0;

				&:hover {
					cursor: pointer;
					transition: transform .4s ease-out;
					transform: translateY(-5px);
				}
			}

			.seckill-type {
				position: absolute;
				left: 15px;
				top: 0;
				width: 30px;
				height: 40px;
				background-image: url(../../assets/img/sprite_index@2x.png);
				background-repeat: no-repeat;
				background-position: 0 -80px;
				background-size: 170px 158px;
				z-index: 1;
				font-size: 12px;
		    color: #fff;
		    line-height: 14px;
		    display: inline-block;
		    vertical-align: 2px;
		    padding-top: 2px;
			}

			.seckill-shadow {
				width: 170px;
				height: 20px;
				background-image: url(../../assets/img/sprite_index@2x.png);
				background-repeat: no-repeat;
				background-position: 0 0;
				background-size: 170px 158px;
				display: inline-block;
				position: absolute;
				top: 135px;
				left: 20px;
			}

			.description {
				color: #999;
		    display: block;
		    max-width: 100%;
		    overflow: hidden;
		    font-size: 12px;
		    text-align: left;
		    height: 32px;
		    line-height: 16px;
		    word-wrap: break-word;
		    word-break: break-all;

		    &:hover {
		    	color: $red2;
		    	cursor: pointer;
		    }
			}

			.price {
				height: 25px;
				padding: 5px 0;
				text-align: left;

				.new-price {
					font-size: 18px;
					font-weight: 700;
					margin-right: 8px;
					color: $red2;
				}

				.old-price {
					font-size: 12px;
					color: #999;
				}
			}
		}

		// .seckill-item:nth-child(5+n) {
		// 	border-right: none;
		// }

		.seckill-right {
			width: 180px;
			height: 250px;

			img {
				width: 180px;
				height: 250px;
				cursor: pointer;
			}
		}
	}
</style>
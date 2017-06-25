<template>
	<div class="container">
		<div class="home-grid">
			<div class="category-cont">
				<home-types></home-types>
			</div>
			<div class="category-imgs">
				<!-- swiper -->
				<swiper :options="swiperOption" ref="swiper-cateImg" class="swiper-box">
	        <swiper-slide v-for="(item, key) in swiperImgs" :key="key" class="swiper-item">
	        	<img v-bind:src="item" alt="" />
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	        <div class="swiper-button-prev" slot="button-prev"></div>
    			<div class="swiper-button-next" slot="button-next"></div>
	      </swiper>
	      <!-- static img -->
	      <div class="category-static">
					<img :src="staticImgs[0]" alt="" class="category-static-item fr" />
					<img :src="staticImgs[1]" alt="" class="category-static-item fl" />
				</div>
			</div>
			<div class="category-infos">
				<div class="j-user">
					<div class="user-info">
						<div class="user-img">
							<img :src="userImg" alt="" v-if="userName !== ''" />
							<img :src="noLoginImg" alt="" v-else />
						</div>
						<div class="user-brief" v-if="userName !== ''">
							<div class="user-brief-item">Hi, {{userName}}</div>
							<div class="user-brief-item">
								<i class="fa fa-diamond"></i>
								金牌会员
								<a class="logout" @click="toLogin()">退出</a>
							</div>
						</div>
						<div class="user-brief" v-else>
							<div class="user-brief-item">Hi</div>
							<div class="user-brief-item">
								<a @click="toLogin()">登录</a>
								<a @click="toRegister()">注册</a>
							</div>
						</div>
					</div>
					<div class="user-profit">
						<a class="gold-profit" v-if="userName !== ''">您可享金牌特惠，开通PLUS</a>
						<div class="new-profit" v-else>
							<a class="new-profit-item">新人福利</a>
							<a class="new-profit-item">PLUS会员</a>
						</div>
					</div>
				</div>
				<home-news></home-news>
				<home-service></home-service>
			</div>
		</div>
	</div>
</template>

<script>
	// 测试图片
	import swiper01 from '../../assets/img/swipe01.jpg'
	import swiper02 from '../../assets/img/swipe02.jpg'
	import swiper03 from '../../assets/img/swipe03.jpg'
	import swiper04 from '../../assets/img/swipe04.jpg'
	import swiper05 from '../../assets/img/swipe05.jpg'

	import static01 from '../../assets/img/static01.jpg'
	import static02 from '../../assets/img/static02.jpg'

	import user01 from '../../assets/img/user01.jpg'

	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { getUser } from '../../utils'
	import noLoginImg from '../../assets/img/no_login.jpg'
	import HomeNews from './HomeNews.vue'
	import HomeService from './HomeService.vue'
	import HomeTypes from './HomeTypes.vue'

	export default {
		data() {
			return {
				swiperImgs: [
					swiper01,
					swiper02,
					swiper03,
					swiper04,
					swiper05
				],
				staticImgs: [
					static01,
					static02
				],
				userImg: user01,
				userName: '',
				noLoginImg: noLoginImg,
				swiperOption: {
					autoplay: 3000,
					loop: true,
					prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
        }
			}
		},
		created() {
			const { username } = getUser('jdUser')
			this.userName = username || ''
		},
		components: {
			swiper,
			swiperSlide,
			HomeNews,
			HomeService,
			HomeTypes
		},
		methods: {
			toLogin() {
				localStorage.setItem('jdUser', '')
				this.$router.push({ path: '/login' })
			},
			toRegister() {
				this.$router.push({ path: '/register' })
			}
		}
	}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";
	.container {
		width: 100%;
	}

	.fr {
		float: left;
	}

	.fl {
		float: right;
	}

	.home-grid {
		width: $commonWidth;
		margin: 0 auto;
		display: flex;
	}

	.category-cont {
		width: 190px;
		height: 480px;
		background: rgba(110, 101, 104, .6);
	}

	.category-imgs {
		width: 790px;
		height: 340px;
		margin: 0 10px;

		.swiper-box {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			height: 100%;
	    text-align: center;
	    font-size: 18px ;
			display: flex;
			justify-content: center;
		}

		.category-static {
			width: 100%;
			height: 130px;
			margin-top: 10px;
		}

		.category-static-item {
			width: 390px;
			height: 100%;
		}
	}

	.category-infos {
		width: 180px;
		height: 480px;
		background: #fff;

		.j-user {
			width: 180px;
			height: 116px;
			padding: 0 10px;
			box-sizing: border-box;
			border-bottom: 1px solid #e3e3e3;

			.user-info {
				width: 100%;
				height: 60px;
				padding: 5px 0;
				display: flex;

				.user-img {
					width: 50px;
					height: 50px;
					border: 2px solid #e2cea4;
					border-radius: 50%;
					text-align: center;

					img {
						width: 40px;
						height: 40px;
						border-radius: 23px;
						margin: 5px auto;
					}
				}

				.user-brief {
					flex: 1;
					height: 50px;
					font-size: 12px;
					padding: 10px 0 5px 5px;

					.user-brief-item {
						width: 100%;
						height: 20px;
						line-height: 20px;
						position: relative;

						i {
							color: #f7b80a;
						}

						.logout {
							right: 0;
						}
					}
				}
			}

			.user-profit {
				font-size: 12px;
				text-align: center;
				padding: 2px;
				color: #e01323;

				.gold-profit {
					border: 2px solid #e01323;
					height: 20px;
					line-height: 20px;

					&:hover {
						color: #fff;
						background: #e01323;
					}
				}

				.new-profit {
					display: flex;
					justify-content: space-between;
		
					.new-profit-item {
						width: 70px;
						border: 2px solid #e01323;
						height: 20px;
						line-height: 20px;

						&:hover {
							color: #fff;
							background: #e01323;
						}
					}
				}
			}
		}
	}
	
</style>
<!-- 主页 -->
<template>
	<div>	
		<nav-bar></nav-bar>	
		<!-- Header -->
		<div class="header">
			<!-- search Input -->
			<div class="search-cont">
				<div class="logo"></div>
				<div class="search-box">
					<div class="search-form">
						<input placeholder="友臣肉松饼" />
						<button>
							<i class="fa fa-search"></i>
						</button>
					</div>
					<!-- 购物车 -->
					<div class="cart-cont" @click="toShopCart()">
						<i class="fa fa-shopping-cart"></i>
						我的购物车
						<div class="cart-nums">
							99+
						</div>
					</div>
				</div>
			</div>
			<!-- hot words -->
			<div class="hot-words-cont">
				<div class="hot-words">
					<a href="#" class="hot-word-item">国宴餐饮</a>
					<a href="#" class="hot-word-item">买一送一</a>
					<a href="#" class="hot-word-item">传世饲料</a>
					<a href="#" class="hot-word-item">京东服装</a>
					<a href="#" class="hot-word-item">价保618</a>
					<a href="#" class="hot-word-item">玩具车</a>
					<a href="#" class="hot-word-item">surface</a>
					<a href="#" class="hot-word-item">全球尖货</a>
					<a href="#" class="hot-word-item">耳机</a>
				</div>
			</div>
			<!-- branches -->
			<div class="branch-cont">
				<div class="branches">
					<a href="#" class="branch-item">秒杀</a>
					<a href="#" class="branch-item">优惠券</a>
					<a href="#" class="branch-item">闪购</a>
					<a href="#" class="branch-item">服装城</a>
					<a href="#" class="branch-item">京东超市</a>
					<a href="#" class="branch-item">生鲜</a>
					<a href="#" class="branch-item">全球购</a>
					<a href="#" class="branch-item">京东金融</a>
				</div>
			</div>
		</div>
		
		<!-- 主页主体 -->
		<home-grid></home-grid>
		<!-- 京东秒杀 -->
		<home-seckill></home-seckill>
		<!-- 商品分类 推荐 -->
		<home-category></home-category>

		<a-footer></a-footer>
	</div>
</template>

<script>
	import NavBar from '../../components/NavBar.vue'
	import AFooter from '../../components/Footer.vue'
	import HomeGrid from './HomeGrid.vue'
	import HomeSeckill from './HomeSeckill.vue'
	import HomeCategory from './HomeCategory.vue'

	export default {
		methods: {
			toShopCart() {
				this.$router.push({ path: '/shopcart' })
			}
		},
		components: {
			HomeGrid,
			HomeSeckill,
			HomeCategory,
			NavBar,
			AFooter
		}
	}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";
	.mine-brief {
		position: relative;
	}

	.header {
		width: 100%;
		height: 140px;
	}

	.search-cont {
		width: $commonWidth;
		margin: 0 auto;
		position: relative;

		.logo {
			position: absolute;
		  z-index: 2;
		  left: 0;
		  top: -30px;
		  width: 190px;
		  height: 170px;
		  box-shadow: 0 -12px 10px rgba(0,0,0,.2);
		  background: #fff url(../../assets/img/logo.v2@2x.png) no-repeat center;
		  background-size: 190px 170px;
		}

		.search-box {
			width: 100%;
			height: 50px;
			padding-top: 15px;
			position: relative;

			.search-form {
				position: absolute;
		    left: 320px;
		    top: 25px;
		    width: 550px;
		    height: 35px;

		    input {
		    	left: 0;
			    padding: 4px;
			    width: 490px;
			    height: 25px;
			    border: 1px solid $red2;
			    line-height: 25px;
			    font-size: 14px;
			    color: #989898;
		    }

		    button {
		    	right: 0;
			    width: 50px;
			    height: 35px;
			    line-height: 35px;
			    border: none;
			    background-color: $red2;
			    font-size: 20px;
			    font-weight: 700;
			    color: #fff;
			    position: absolute;
		    }
			}
		}

		.cart-cont {
			position: absolute;
    	right: 99px;
    	top: 25px;
    	width: 188px;
    	height: 33px;
    	font-size: 14px;
    	background-color: #fff;
    	text-align: center;
    	line-height: 33px;
    	color: $red2;
    	border: 1px solid #e3e3e3;

    	&:hover {
    		cursor: pointer;
    	}

    	.cart-nums {
    		position: absolute;
    		top: 2px;
    		right: 36px;
    		width: 15px;
    		height: 15px;
    		background: $red1;
    		line-height: 15px;
    		border-radius: 50%;
    		text-align: center;
    		color: #fff;
    		font-size: 12px;
    	}
		}
	}

	.hot-words-cont {
		width: $commonWidth;
		margin: 0 auto;
		font-size: 16px;

		.hot-words {
			margin: 8px auto 0;
			width: 550px;
			text-align: center;
			overflow: hidden;

			.hot-word-item {
				float: left;
				font-size: 12px;
				color: #999;
				margin-right: 8px;
				cursor: pointer;

				&:hover {
					color: $red2;
				}
			}

			.hot-word-item:first-child {
				color: $red2;
			}
		}
	}

	.branch-cont {
		width: $commonWidth;
		margin: 0 auto;
		font-size: 16px;

		.branches {
			width: 790px;
			margin: 10px auto 0;
			height: 40px;
			line-height: 40px;
			font-size: 16px;
		  font-weight: 700;
		  color: #555;
		  display: flex;
		  justify-content: center;
		}

		.branch-item {
			color: #555;
			margin-right: 36px;
		}
	}

</style>
<!-- 购物车 -->
<template>
	<div>
		<nav-bar></nav-bar>
		<div class="container">
			<div class="header clear">
				<div class="logo-cont">
					<div class="logo"></div>
					<a href="" class="logo-font">购物车</a>
				</div>
				<div class="cart-search">
					<div>
						<input type="text" class="search-input" placeholder="自营">
						<input type="button" class="search-btn" value="搜索">
					</div>
				</div>
				<div class="clear">
				</div>	
			</div>
			<!-- 未登录提示 -->
			<div class="nologin-tip">
				<i class="fa fa-exclamation-triangle"></i>
				<span>您还没有登录！登录后购物车的商品将保存到您账号中</span>
				<a class="login-btn" @click="toLogin()">立即登录</a>
			</div>
			<!-- 购物车 -->
			<div class="shopcart-cont">
				<div class="cart-title">
					<ul class="cart-switch">
						<li>全部商品<span>{{cartNum}}</span></li>
						<li>京东大药房</li>
					</ul>
					<div class="cart-location">
						配送至 <span>深圳南山区</span>
					</div>
				</div>
				<div class="cart-wrap">
					
				</div>
			</div>
		</div>
		<a-footer></a-footer>
	</div>
</template>

<script>
	import NavBar from '../components/NavBar.vue'
	import AFooter from '../components/Footer.vue'

	export default {
		data() {
			return {
				cartNum: 1
			}
		},
		methods: {
			toLogin() {
				this.$router.push({ path: '/login' })
			}
		},
		components: {
			NavBar,
			AFooter
		}
	}	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../style/variables";

	.container {
		width: 990px;
		margin: 0 auto;
	}

	.header {
		padding: 15px 0 10px;
	}

	.logo-cont {
		float: left;
		position: relative;
		width: 270px;

		.logo {
			width: 270px;
			height: 60px;
			background: url(../assets/img/logo-201305.png) no-repeat center;
		}

		.logo-font {
			position: absolute;
			width: 100px;
			height: 40px;
			line-height: 40px;
			font-size: 26px;
			top: 8px;
			right: 0;
			background: #fff;
		}
	}

	.cart-search {
		float: right;
		border: 2px solid $red1;
		// background: $red1;
		height: 24px;
		margin-top: 20px;
		overflow: hidden;

		.search-input {
			height: 18px;
			line-height: 18px;
			width: 260px;
			padding: 3px 5px;
			border: 0;
			color: rgb(153, 153, 153);
		}

		.search-btn {
			display: inline-block;
			width: 48px;
			height: 26px;
			line-height: 26px;
			vertical-align: top;
			background: $red1;
			text-align: center;
			color: #fff; 
			cursor: pointer;
		}
	}

	.clear {
		clear: both;
	}

	.nologin-tip {
		border: 1px solid #edd28b;
    background: #fffdee;
    padding: 10px 20px;
    line-height: 25px;
    margin-bottom: 20px;
    color: #f70;

    span {
    	font-size: 12px;
    }

    .login-btn {
    	font-family: "Microsoft YaHei";
	    display: inline-block;
	    height: 25px;
	    line-height: 25px;
	    background-color: #e74649;
	    background-image: linear-gradient(to top,#e74649 0,#df3134 100%);
	    border-radius: 3px;
	    color: #fff;
	    font-size: 12px;
	    font-weight: 400;
	    padding: 0 10px;
	    vertical-align: middle;
	    cursor: pointer;
	    border: 0;
	    float: none;
	    transition: all .2s ease-out;
    } 
	}

	.shopcart-cont {		
		.cart-title {
			height: 36px;
			position: relative;

			.cart-switch {
				height: 30px;
				display: flex;
				font-size: 16px;
				line-height: 30px;
				font-weight: 700;

				li:hover {
					cursor: pointer;
				}

				span {
					margin-left: 4px;
				}

				li:last-child{
					margin-left: 32px;
				}
			}

			.cart-location {
				position: absolute;
				right: 0;
				top: 0;
				height: 30px;
				line-height: 30px;
			 	width: 300px;
			 	font-size: 14px;
			 	color: #666;
			 	text-align: right;
			}
		}

	}
</style>
<template>
	<!-- 顶部导航栏 -->
	<div class="nav-container">
		<div class="nav-bar">
			<div class="location">
				<i class="fa fa-map-marker" aria-hidden="true"></i>
				深圳
			</div>
			<div class="nav-cont">
				<ul>
					<li class="nav-item mine-brief" v-if="userName !== ''">	
						<a @click="toMine()">
						<i class="fa fa-user"></i>
						{{userName}}
						</a>
						<!-- -->
					</li>
					<li class="nav-item" v-else-if="userName === ''">
						<a @click="toLogin()">你好，请登录</a>
						<span @click="toRegister()">免费注册</span>
					</li>
					<li class="nav-item"><a>我的订单</a></li>
					<li class="nav-item"><a>我的京东</a></li>
					<li class="nav-item"><a>京东会员</a></li>
					<li class="nav-item"><a>企业采购</a></li>
					<li class="nav-item"><a>客户服务</a></li>
					<li class="nav-item"><a>网站导航</a></li>
					<li class="nav-item"><a>手机京东</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { getUser } from '../utils'
	export default {
		data() {
			return {
				userName: ''
			}
		},
		created() {
			const { username } = getUser('jdUser')
			this.userName = username || ''
		},
		methods: {
			toLogin() {
				this.$router.push({ path: '/login' })
			},
			toRegister() {
				this.$router.push({ path: '/register' })
			},
			toMine() {
				this.$router.push({ path: '/mine' })
			}
		}
	}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../style/variables";

	.nav-container {
		width: 100%;
		height: 30px;
		background: #dfe0e1;

		.nav-bar {
			width: $commonWidth;
			height: 30px;
			margin: 0 auto;
			font-size: 12px;
			line-height: 30px;
		}
	
		.location {
			float: left;
			width: 258px;
			text-align: right;

			i {
				color: $red1;
			}
		}

		.nav-cont {
			width: 700px;
			height: 30px;
			float: right;

			> ul {
				height: 20px;
				margin: 5px 0;

				li {
					float: left;
					line-height: 20px;
					border-right: 1px solid #ccc;
					padding:0 10px;
					color: #999;

					span {
						color: $red1;
						margin-left: 5px;
						&:hover {
							cursor: pointer;
						}
					}

					a {
						&:hover {
							color: $red1;
							cursor: pointer;
						}
					}
				}

				li:last-child {
					border-right: none;
				}
			}
		}
	}
</style>
		
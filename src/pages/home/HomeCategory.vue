<template>
	<div class="container">
		<div class="catefory-cont">
			<!-- 发现 -->
			<div class="category-item">
				<div class="category-head find-head">
					<i class="head-arrow"></i>
					<i class="head-corner find-corner"></i>
					发现好货
					<a>发现品质生活&nbsp;<i class="fa fa-chevron-circle-right"></i></a>
				</div>
				<div class="category-finds">
					<ul>
						<li v-for="(find, key) in finds" :key="key">
							<p>{{find.name}}</p>
							<img :src="find.img" alt="" />
						</li>
					</ul>
				</div>			
			</div>
			<!-- 优品专辑 -->
			<div class="category-item">
				<div class="category-head good-head">
					<i class="head-arrow"></i>
					<i class="head-corner good-corner"></i>
					优品专辑
					<a>甄选优质好物&nbsp;<i class="fa fa-chevron-circle-right"></i></a>
				</div>	
			</div>
			<!-- 排行榜 -->
			<div class="category-item">
				<div class="category-head rank-head">
					<i class="head-arrow"></i>
					<i class="head-corner rank-corner"></i>
					排行榜
					<a>专属你的购物指南&nbsp;<i class="fa fa-chevron-circle-right"></i></a>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	//测试图片
	import find01 from '../../assets/img/find01.webp'
	import find02 from '../../assets/img/find02.webp'
	import find03 from '../../assets/img/find03.webp'
	import find04 from '../../assets/img/find04.webp'
	import find05 from '../../assets/img/find05.webp'
	import find06 from '../../assets/img/find06.webp'

	export default {
		data() {
			return {
				finds: [{
					id: 1,
					img: find01,
					name: '佰草集活颜滋养乳'
				}, {
					id: 2,
					img: find02,
					name: '宽松显瘦A字背带裙'
				}, {
					id: 3,
					img: find03,
					name: '初语 女士时尚T恤'
				}, {
					id: 4,
					img: find04,
					name: '羊猄皮浅口粗跟鞋'
				}, {
					id: 5,
					img: find05,
					name: '美宝莲呼吸粉底液'
				}, {
					id: 6,
					img: find06,
					name: '华味亨 鸡蛋薄脆饼'
				}]
			}
		}
	}
	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";

	.container {
		width: 100%;
		height: 444px;
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.catefory-cont {
		width: 1190px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.category-item {
		width: 390px;
		height: 100%;

		.category-head {
			width: 100%;
			height: 55px;
			position: relative;
			color: #fff;
			padding: 0 20px 0 30px;
			line-height: 55px;
			box-sizing: border-box;
	    font-size: 26px;
	    font-weight: 300;

	    a {
	    	font-size: 14px;
	    	cursor: pointer;
	    	position: absolute;
	    	right: 20px;
	    	padding-top: 6px;
	    }
		}

		.head-arrow {
			position: absolute;
    	top: 0;
    	left: 0;
    	width: 0;
    	height: 0;
    	border-top: 19px solid #f6f6f6;
    	border-right: 19px solid transparent;
		}

		.head-corner {
			position: absolute;
			left: -4px;
			top: -4px;
		}

		.find-head {
			background: #4998a1;
		}

		.find-corner {
			background: url(../../assets/img/sprite_index@2x.png);
			background-position: 0 -130px;
	    background-size: 170px 158px;
	    background-repeat: no-repeat;
	    width: 20px;
	    height: 20px;
		}

		.good-corner {
			background: url(../../assets/img/sprite_index@2x.png);
			background-position: -38px -130px;
	    background-size: 170px 158px;
	    background-repeat: no-repeat;
	    width: 20px;
	    height: 20px;
		}

		.rank-corner {
			background: url(../../assets/img/sprite_index@2x.png);
			background-position: -80px -80px;
	    background-size: 170px 158px;
	    background-repeat: no-repeat;
	    width: 20px;
	    height: 20px;
		}

		.good-head {
			background: #76488e;
		}

		.rank-head {
			background: #e77005;
		}

		.category-finds {
			width: 100%;
			height: 100%;
			padding: 10px;
			box-sizing: border-box;

			ul {
				display: flex;
				flex-wrap: wrap;

				li {
					width: 180px;
					height: 120px;
					border-right: 1px solid #eee;
					border-bottom: 1px solid #eee;
					position: relative;
					background: rgba(255, 255, 255, .7);
				}

				li:nth-child(even) {
					border-right: none;
				}

				li:last-child{
					border-bottom: none;
				}

				li:nth-last-child(2) {
					border-bottom: none;
				}
			}

			img {
				position: absolute;
		    bottom: 5px;
		    right: 10px;
		    width: 80px;
		    height: 80px;
			}

			p {
				font-size: 14px;
		    color: #4998a1;
		    position: absolute;
		    top: 15px;
		    left: 20px;
		    width: 80px;
		    line-height: 20px;
		    z-index: 1;
		    word-wrap: break-word;
			}

		}
	}
</style>
<!-- 首页 排行榜 -->
<template>
	<div class="container">
		<ul class="rank-title">
			<li>
				<input type="radio" id="tab1" name="tab-control" checked>
				<label for="tab1">智能手环</label>
			</li>
			<li>
				<input type="radio" id="tab2" name="tab-control" checked>
				<label for="tab2">维修保养</label>
			</li>
			<li>
				<input type="radio" id="tab3" name="tab-control" checked>
				<label for="tab3">早教启智</label>			
			</li>
			<li>
				<input type="radio" id="tab4" name="tab-control" checked>
				<label for="tab4">手机通讯</label>		
			</li>
			<li>
				<input type="radio" id="tab5" name="tab-control" checked>
				<label for="tab5">智能手表</label>		
			</li>
		</ul>
		<ul class="rank-content">
			<li v-for="(cuff, key) in cuffList" :key="key" class="rank-item">
				<div class="rank-num"
					v-bind:class="{ 
						rankOne: cuff.rankNum === 1,
						rankTwo: cuff.rankNum === 2,
						rankThree: cuff.rankNum === 3,
						rankOther: cuff.rankNum > 3,
					}"
				>
					{{cuff.rankNum}}
				</div>
				<div class="rank-img">
					<img :src="cuff.imgUrl" alt="" />
				</div>
				<p class="rank-des">{{cuff.des}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {
		data() {
			return {
				isActive: true
			}
		},
		methods: {
			...mapActions(['getHomeCuffRank'])
		},
		created() {
			this.getHomeCuffRank()
		},
		computed: {
			...mapState({
				cuffList: state => {
					// console.log(state.homeCuffRank.cuffList, 1212)
					return state.homeCuffRank.cuffList
				}
			})
		}
	}
	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";

	.rank-title {
		width: 100%;
		height: 20px;
		padding: 6px 0 7px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e3e3e3;

		li {
			width: 77px;
			font-size: 14px;
			color: #666;
			text-align: center;
			border-right: 1px solid #e3e3e3;

			&:hover {
				color: $red1;
			}
		}

		li:last-child {
			border-right: none;
		}

		input[name="tab-control"] {
			display: none;
		}
	}

	.rank-content {
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		padding: 6px;

		.rank-item {
			width: 120px;
			height: 167px;
			border-right: 1px solid #e3e3e3;
			border-bottom: 1px solid #e3e3e3;
			position: relative;
			padding-top: 10px;
			cursor: pointer;

			&:hover {
				.rank-des {
					color: $red2;
				}
			}

			.rank-img {
				width: 100px;
				height: 100px;
				margin: 0 auto 10px;

				img {
					width: 100px;
					height: 100px;
				}
			}

			.rank-des {
				height: 32px;
		    text-align: left;
		    padding: 0 11px;
		    line-height: 16px;
		    overflow: hidden;
		    word-wrap: break-word;
		    word-break: break-all;
		    font-size: 12px;
		    color: #666;
			}

			.rank-num {
				position: absolute;
				width: 30px;
				height: 40px;
				top: 15px;
				left: 6px;
				font-size: 22px;
				text-align: center;
				line-height: 40px;
				color: #fff;
			}

			.rankOne {
				background-image: url(../../assets/img/sprite_index@2x.png);
    		background-position: -84px -30px;
    		background-size: 170px 158px;
    		background-repeat: no-repeat;
			}

			.rankTwo {
				background-image: url(../../assets/img/sprite_index@2x.png);
    		background-position: -44px -30px;
    		background-size: 170px 158px;
    		background-repeat: no-repeat;
			}

			.rankThree {
				background-image: url(../../assets/img/sprite_index@2x.png);
    		background-position: -124px -30px;
    		background-size: 170px 158px;
    		background-repeat: no-repeat;
			}

			.rankOther {
				background-image: url(../../assets/img/sprite_index@2x.png);
    		background-position: -40px -80px;
    		background-size: 170px 158px;
    		background-repeat: no-repeat;
			}
		}

		.rank-item:nth-child(3n) {
			border-right: none;
		}

		.rank-item:nth-child(n+4) {
			border-bottom: none;
		}
	}
</style>
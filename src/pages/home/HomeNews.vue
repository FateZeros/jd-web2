<!-- 首页 促销 公告 -->
<template>
	<div class="container">
		<div class="news-title">
			<div class="title-item">促销</div>
			<div class="title-item">公告</div>
			<div class="title-more">
				<a>更多</a>
			</div>
		</div>
		<div class="news-cont">
			<div class="cont-item" v-for="(sale, key) in saleList" :key="key" >
				<a>{{sale.saleCont}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {
		methods: {
			...mapActions(['getHomeSale'])
		},
		created() {
			this.getHomeSale()
		},
		computed: {
			...mapState({
				saleList: state => {
					return state.homeSale.saleList.slice(0, 4)
				}
			})
		}
	}	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";
	.container {
		width: 180px;
		height: 150px;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.news-title {
		width: 100%;
		height: 30px;
		padding: 5px 0;
		line-height: 20px;
		display: flex;
		box-sizing: border-box;
		font-size: 12px;
		border-bottom: 1px solid #e3e3e3;
		color: #333;

		.title-item {
			width: 40px;
			border-right: 1px solid #e3e3e3;
			text-align: center;
		}

		.title-more {
			flex: 1;
			text-align: right;

			a {
				&:hover {
					color: $red2;
				}
			}
		}
	}

	.news-cont {
		width: 100%;
		height: 120px;
		font-size: 12px;
		padding: 12px 0;

		a {
			&:hover {
				color: $red2;
			}
		}

		.cont-item {
			width: 100%;
			height: 24px;
			line-height: 24px;
			color: #666;
			overflow: hidden;
			text-overflow: ellipsis;
    	white-space: nowrap;
		}
	}
</style>
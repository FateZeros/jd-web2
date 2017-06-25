<!-- 商品分类 -->
<template>
	<ul class="contianer">
		<li class="type-item">
			<a href="">家用电器</a>
		</li>
		<li class="type-item">
			<a href="">手机</a><span>/</span>
			<a href="">运营商</a><span>/</span>
			<a href="">数码</a>
		</li>
		<li class="type-item">
			<a href="">电脑</a><span>/</span>
			<a href="">办公</a>
		</li>
		<li class="type-item">
			<a href="">家居</a><span>/</span>
			<a href="">家具</a><span>/</span>
			<a href="">家装</a><span>/</span>
			<a href="">厨具</a>
		</li>
		<li class="type-item">
			<a href="">男装</a><span>/</span>
			<a href="">女装</a><span>/</span>
			<a href="">童装</a><span>/</span>
			<a href="">内衣</a>
		</li>
		<li class="type-item">
			<a href="">美妆个护</a><span>/</span>
			<a href="">宠物</a>
		</li>
		<li class="type-item">
			<a href="">女鞋</a><span>/</span>
			<a href="">箱包</a><span>/</span>
			<a href="">钟表</a><span>/</span>
			<a href="">珠宝</a>
		</li>
		<li class="type-item">
			<a href="">男鞋</a><span>/</span>
			<a href="">运动</a><span>/</span>
			<a href="">户外</a>
		</li>
		<li class="type-item">
			<a href="">汽车</a><span>/</span>
			<a href="">汽车用品</a>
		</li>
		<li class="type-item">
			<a href="">母婴</a><span>/</span>
			<a href="">玩具乐器</a>
		</li>
		<li class="type-item">
			<a href="">食品</a><span>/</span>
			<a href="">酒类</a><span>/</span>
			<a href="">生鲜</a><span>/</span>
			<a href="">特产</a>
		</li>
		<li class="type-item">
			<a href="">礼品鲜花</a><span>/</span>
			<a href="">农资绿植</a>
		</li>
		<li class="type-item">
			<a href="">医药保健</a><span>/</span>
			<a href="">药品</a>
		</li>
		<li class="type-item">
			<a href="">图书</a><span>/</span>
			<a href="">音响</a><span>/</span>
			<a href="">电子书</a>
		</li>
		<li class="type-item">
			<a href="">机票</a><span>/</span>
			<a href="">酒店</a><span>/</span>
			<a href="">旅游</a><span>/</span>
			<a href="">生活</a>
		</li>
		<li class="type-item">
			<a href="">理财</a><span>/</span>
			<a href="">众筹</a><span>/</span>
			<a href="">白条</a><span>/</span>
			<a href="">保险</a>
		</li>
	</ul>
</template>

<script>
	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../../style/variables";
	.contianer {
		width: 190px;
		height: 480px;
		padding: 16px 0;
		color: #fff;
	}

	.type-item {
		height: 28px;
		line-height: 28px;
		overflow: hidden;
		font-size: 14px;
		padding-left: 12px;

		a:hover {
			color: $red2;
		}

		span {
			font-size: 12px;
			margin-left: 4px;
		}

		&:hover {
			background: rgba(255, 255, 255, .6);
		}
	}
		
</style>
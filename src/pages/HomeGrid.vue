<template>
	<div class="container">
		<div class="home-grid">
			<div class="category-cont"></div>
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
			</div>
		</div>
	</div>
</template>

<script>
	// 测试图片
	import swiper01 from '../assets/img/swipe01.jpg'
	import swiper02 from '../assets/img/swipe02.jpg'
	import swiper03 from '../assets/img/swipe03.jpg'
	import swiper04 from '../assets/img/swipe04.jpg'
	import swiper05 from '../assets/img/swipe05.jpg'

	import static01 from '../assets/img/static01.jpg'
	import static02 from '../assets/img/static02.jpg'

	import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	@import "../style/variables";
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

		border:1px solid;
	}
	
</style>
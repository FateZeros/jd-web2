<!-- 购物车 -->
<template>
	<div>
		<nav-bar></nav-bar>
		<div class="container">
			我的购物车
		</div>
		<a-footer></a-footer>
	</div>
</template>

<script>
	import NavBar from '../components/NavBar.vue'
	import AFooter from '../components/Footer.vue'

	export default {
		components: {
			NavBar,
			AFooter
		}
	}	
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	.container {
		width: 990px;
		margin: 0 auto;
	}
</style>
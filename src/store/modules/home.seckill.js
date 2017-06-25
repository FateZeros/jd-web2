import { homeSeckillActions } from '../actions/home.seckill'
import { homeSeckillMutations } from '../mutations/home.seckill'

const homeSeckill = {
	state: {
		seckill: {}
	},
	mutations: homeSeckillMutations,
	actions: homeSeckillActions
}

export default homeSeckill
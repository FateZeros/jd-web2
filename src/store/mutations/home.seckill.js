import * as types from '../constants/types'

export const homeSeckillMutations = {
	[types.SET_HOME_SECKILL](state, seckill) {
		state.seckill = seckill
	}
}

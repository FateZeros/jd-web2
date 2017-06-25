import * as types from '../constants/types'

export const homeSaleMutations = {
	[types.SET_HOME_SALES](state, list) {
		state.saleList = list
	}
}

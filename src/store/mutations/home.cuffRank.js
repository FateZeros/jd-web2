import * as types from '../constants/types'

export const homeCuffRankMutations = {
	[types.SET_HOME_CUFFRANK](state, list) {
		console.log(list)
		state.cuffList = list
	}
}

import * as types from '../constants/types'

export const loginMutations = {
	[types.SET_USER](state, user) {
		state.user = user
	}
}

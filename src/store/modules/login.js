import { loginActions } from '../actions/login'
import { loginMutations } from '../mutations/login'

const login = {
	state: {
		'user': {
			name: ''
		}
	},
	mutations: loginMutations,
	actions: loginActions
}

export default login
import { homeCuffRankActions } from '../actions/home.cuffRank'
import { homeCuffRankMutations } from '../mutations/home.cuffRank'

const homeCuffRank = {
	state: {
		cuffList: []
	},
	mutations: homeCuffRankMutations,
	actions: homeCuffRankActions
}

export default homeCuffRank
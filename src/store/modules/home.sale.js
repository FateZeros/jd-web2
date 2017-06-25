import { homeSaleActions } from '../actions/home.sale'
import { homeSaleMutations } from '../mutations/home.sale'

const homeSale = {
	state: {
		saleList: []
	},
	mutations: homeSaleMutations,
	actions: homeSaleActions
}

export default homeSale
import 'babel-polyfill'
import { requestAdvertisers, requestLinks, requestBanners, requestVouchers, requestTransactions } from './utils'

const defaultAuthParams = {
	authorisationHeader: '',
	username: '',
	password: '',
	scope: '',
}

export default class RakutenLinkShare {
	constructor(authParams) {
		this.authParams = Object.assign({}, defaultAuthParams, authParams)
	}

	getAdvertisers() {
		return requestAdvertisers(this.authParams)
	}

	getLinks({ mid = '-1', cat = '-1', startDate = '', endDate = '', campaignId = '-1', page = '1' } = {}) {
		return requestLinks({
			...this.authParams,
			mid,
			cat,
			startDate,
			endDate,
			campaignId,
			page,
		})
	}

	getBanners({ mid = '-1', cat = '-1', startDate = '', endDate = '', size = '-1', campaignId = '-1', page = '1' } = {}) {
		return requestBanners({
			...this.authParams,
			mid,
			cat,
			startDate,
			endDate,
			size,
			campaignId,
			page,
		})
	}

	getVouchers() {
		return requestVouchers(this.authParams)
	}

	getTransactions() {
		return requestTransactions(this.authParams)
	}

  // TODO
	getProducts() {}

  // TODO
	searchProducts() {}
}

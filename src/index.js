import 'babel-polyfill'
import { requestAdvertisers, requestLinks, requestBanners, requestVouchers, requestTransactions } from './utils'
//import dateFormat from 'dateformat'

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

	getLinks(options) {
		const { authorisationHeader, username, password, scope } = this.authParams

		return requestLinks({
			authorisationHeader,
			username,
			password,
			scope,
			mid: options.mid || '-1',
			cat: options.cat || '-1',
			startDate: options.startDate || '',
			endDate: options.endDate || '',
			campaignId: options.campaignId || '-1',
			page: options.page || '1',
		})
	}

	getBanners(options) {
		const { authorisationHeader, username, password, scope } = this.authParams

		return requestBanners({
			authorisationHeader,
			username,
			password,
			scope,
			mid: options.mid || '-1',
			cat: options.cat || '-1',
			startDate: options.startDate || '',
			endDate: options.endDate || '',
			size: options.size || '-1',
			campaignId: options.campaignId || '-1',
			page: options.page || '1',
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

import 'babel-polyfill'
import { requestAdvertisers, requestLinks, requestBanners, requestVouchers, requestTransactions } from './utils'
//import dateFormat from 'dateformat'

const defaultOptions = {
	authorisationHeader: '',
	username: '',
	password: '',
	scope: '',
}

export default class RakutenLinkShare {
	constructor(options) {
		this.options = Object.assign({}, defaultOptions, options)
	}

	getAdvertisers() {
		return requestAdvertisers(this.options)
	}

	getLinks() {
		const { authorisationHeader, username, password, scope } = this.options

		return requestLinks({
			authorisationHeader,
			username,
			password,
			scope,
			mid: this.options.mid || '-1',
			cat: this.options.cat || '-1',
			startDate: this.options.startDate || '',
			endDate: this.options.endDate || '',
			campaignId: this.options.campaignId || '-1',
			page: this.options.page || '1',
		})
	}

	getBanners() {
		const { authorisationHeader, username, password, scope } = this.options

		return requestBanners({
			authorisationHeader,
			username,
			password,
			scope,
			mid: this.options.mid || '-1',
			cat: this.options.cat || '-1',
			startDate: this.options.startDate || '',
			endDate: this.options.endDate || '',
			size: this.options.size || '-1',
			campaignId: this.options.campaignId || '-1',
			page: this.options.page || '1',
		})
	}

	getVouchers() {
		return requestVouchers(this.options)
	}

	getTransactions() {
		return requestTransactions(this.options)
	}

  // TODO
	getProducts() {}

  // TODO
	searchProducts() {}
}

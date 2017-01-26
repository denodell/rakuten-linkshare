import 'babel-polyfill'
import { requestAdvertisers, requestLinks, requestVouchers, requestTransactions } from './utils'
//import dateFormat from 'dateformat'

const defaultOptions = {
	reportingToken: '',
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
		const { reportingToken, authorisationHeader, username, password, scope } = this.options

		return requestAdvertisers({
			reportingToken,
			authorisationHeader,
			username,
			password,
			scope,
		})
	}

	getLinks() {
		const { reportingToken, authorisationHeader, username, password, scope } = this.options

		return requestLinks({
			reportingToken,
			authorisationHeader,
			username,
			password,
			scope,
		})
	}

	getVouchers() {
		const { reportingToken, authorisationHeader, username, password, scope } = this.options

		return requestVouchers({
			reportingToken,
			authorisationHeader,
			username,
			password,
			scope,
		})
	}

	getTransactions() {
		const { reportingToken, authorisationHeader, username, password, scope } = this.options

		return requestTransactions({
			reportingToken,
			authorisationHeader,
			username,
			password,
			scope,
		})
	}

  // TODO
	getProducts() {}

  // TODO
	searchProducts() {}
}

import 'babel-polyfill'
import { requestAdvertisers, requestLinks, requestProducts, requestTransactions } from './utils'
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

	getAdvertisers({} = {}) {
		return new Promise((resolve, reject) => {
			const { reportingToken, authorisationHeader, username, password, scope } = this.options

			requestAdvertisers({
				reportingToken,
				authorisationHeader,
				username,
				password,
				scope,
			}).then(resolve).catch(reject)
		})
	}

	getLinks() {
		return new Promise((resolve, reject) => {
			const { reportingToken, authorisationHeader, username, password, scope } = this.options

			requestLinks({
				reportingToken,
				authorisationHeader,
				username,
				password,
				scope,
			}).then(resolve).catch(reject)
		})
	}

	getTransactions() {
		return new Promise((resolve, reject) => {
			const { reportingToken, authorisationHeader, username, password, scope } = this.options

			requestTransactions({
				reportingToken,
				authorisationHeader,
				username,
				password,
				scope,
			}).then(resolve).catch(reject)
		})
	}

  // TODO
	getProducts() {}

  // TODO
	searchProducts() {}
}

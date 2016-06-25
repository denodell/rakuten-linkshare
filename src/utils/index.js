import { requestData } from './network'
import { normalizeAdvertiserData, normalizeLinkData } from './process-data'

export function requestAdvertisers({ reportingToken, authorisationHeader, username, password, scope }) {
	let url = `https://api.rakutenmarketing.com/linklocator/1.0/getMerchByAppStatus/approved`

	return new Promise(async function(resolve, reject) {
		try {
			let advertisers = await requestData(url, authorisationHeader, username, password, scope)
			resolve(normalizeAdvertiserData(advertisers))
		} catch (err) {
			reject(err)
		}
	})
}

export function requestLinks({ reportingToken, authorisationHeader, username, password, scope }) {
	let url = `https://api.rakutenmarketing.com/linklocator/1.0/getTextLinks/-1/-1///-1/1`

	return new Promise(async function(resolve, reject) {
		try {
			let links = await requestData(url, authorisationHeader, username, password, scope)
			resolve(normalizeLinkData(links))
		} catch (err) {
			reject(err)
		}
	})
}

export function requestProducts() {}
export function requestTransactions() {}

import { requestData, requestJsonData } from './network'
import dateFormat from 'dateformat'
import { normalizeAdvertiserData, normalizeLinkData, normalizeTransactionData } from './process-data'

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

export function requestTransactions({ reportingToken, authorisationHeader, username, password, scope }) {
	const todayFormatted = dateFormat(new Date(), `yyyy-mm-dd%20HH:MM:ss`);
	const startDate = new Date('2016-05-01');
	const startDateFormatted = dateFormat(startDate, `yyyy-mm-dd%20HH:MM:ss`);
	let url = `https://api.rakutenmarketing.com/events/1.0/transactions?limit=1000&page=1&process_date_start=${startDateFormatted}&process_date_end=${todayFormatted}`

	return new Promise(async function(resolve, reject) {
		try {
			let transactions = await requestJsonData(url, authorisationHeader, username, password, scope)
			resolve(normalizeTransactionData(transactions))
		} catch (err) {
			reject(err)
		}
	})
}

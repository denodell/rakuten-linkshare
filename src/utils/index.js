import { requestData, requestJsonData } from './network'
import dateFormat from 'dateformat'
import { normalizeAdvertiserData, normalizeLinkData, normalizeVoucherData, normalizeTransactionData } from './process-data'

export function requestAdvertisers({ authorisationHeader, username, password, scope }) {
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

export function requestLinks({ authorisationHeader, username, password, scope, mid, cat, startDate, endDate, campaignId, page  }) {
	let url = `https://api.rakutenmarketing.com/linklocator/1.0/getTextLinks/${mid}/${cat}/${startDate}/${endDate}/${campaignId}/${page}`

	return new Promise(async function(resolve, reject) {
		try {
			let links = await requestData(url, authorisationHeader, username, password, scope)
			resolve(normalizeLinkData(links))
		} catch (err) {
			reject(err)
		}
	})
}

export function requestBanners({ authorisationHeader, username, password, scope, mid, cat, startDate, endDate, size, campaignId, page }) {
	let url = `https://api.rakutenmarketing.com/linklocator/getBannerLinks/${mid}/${cat}/${startDate}/${endDate}/${size}/${campaignId}/${page}`

	return new Promise(async function(resolve, reject) {
		try {
			let links = await requestData(url, authorisationHeader, username, password, scope)
			resolve(normalizeLinkData(links))
		} catch (err) {
			reject(err)
		}
	})
}

export function requestVouchers({ authorisationHeader, username, password, scope }) {
	let url = `https://api.rakutenmarketing.com/coupon/1.0?resultsperpage=500&pagenumber=1`

	return new Promise(async function(resolve, reject) {
		try {
			let vouchers = await requestData(url, authorisationHeader, username, password, scope)
			resolve(normalizeVoucherData(vouchers))
		} catch (err) {
			reject(err)
		}
	})
}

export function requestProducts() {}

export function requestTransactions({ authorisationHeader, username, password, scope }) {
	const todayFormatted = dateFormat(new Date(), `yyyy-mm-dd%20HH:MM:ss`)
	const startDate = new Date('2016-05-01')
	const startDateFormatted = dateFormat(startDate, `yyyy-mm-dd%20HH:MM:ss`)
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

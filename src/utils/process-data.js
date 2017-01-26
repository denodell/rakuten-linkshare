import _ from 'lodash'

export function normalizeAdvertiserData(merchants) {
	return merchants.map(merchant => {
		let out = {}
		let offer = {}

		for (let dataItem in merchant) {
			if (merchant.hasOwnProperty(dataItem)) {
				let newDataItemName = dataItem.replace(/^ns1/g, '').toLowerCase().replace('applicationstatus', 'applicationStatus')
				let value = merchant[dataItem][0]
				out[newDataItemName] = value//pluralArrayValueFields.includes(dataItem) ? value[dataItem.replace(/s$/, '')] : value
			}
		}

		out.categories = out.categories.split(' ')

		offer = {}

		for (let dataItem in out.offer) {
			if (out.offer.hasOwnProperty(dataItem)) {
				let newDataItemName = dataItem.replace(/^ns1/g, '').toLowerCase().replace('alsoname', 'alsoName').replace('commissionterms', 'commissionTerms').replace('offerid', 'offerId').replace('offername', 'offerName')
				let value = out.offer[dataItem][0]
				offer[newDataItemName] = value
			}
		}

		out.offer = offer

		return out

	})
}

function isCoupon(link) {
	let text = link.textDisplay || ''
	return text.toLowerCase().includes(' code ') || text.toLowerCase().includes(' code:')
}

function getCouponCode(link) {
	const text = link.textDisplay || ''
	const isCodeSpace = text.toLowerCase().includes(' code ')
	const isCodeColon = text.toLowerCase().includes(' code:')
	let arr = []
	if (isCodeSpace) {
		arr = text.toLowerCase().split(' code ')
	} else if (isCodeColon) {
		arr = text.toLowerCase().split(' code:')
	} else {
		return text
	}

	let lastItem = arr.pop()
	lastItem = lastItem.trim()
	arr = lastItem.split(' ')
	let code = arr[0]
	code = code.replace(/\"/g, '')
	return code.toUpperCase()
}

export function normalizeLinkData(links) {
	let numberValueFields = ['nid']
	let dateValueFields = ['startDate', 'endDate']

	return links.map(link => {
		let out = {}
		for (let linkItem in link) {
			if (link.hasOwnProperty(linkItem)) {
				let newDataItemName = linkItem.replace(/^ns1/g, '').toLowerCase().replace('campaignid', 'campaignId').replace('categoryid', 'categoryId')
					.replace('categoryname', 'categoryName').replace('linkid', 'linkId').replace('linkname', 'linkName').replace('clickurl', 'clickUrl')
					.replace('startdate', 'startDate').replace('enddate', 'endDate').replace('landurl', 'landUrl').replace('showurl', 'showUrl').replace('textdisplay', 'textDisplay')
				let value = link[linkItem][0]
				out[newDataItemName] = value
				out[newDataItemName] = numberValueFields.includes(newDataItemName) ? +out[newDataItemName] : out[newDataItemName]
				out[newDataItemName] = dateValueFields.includes(newDataItemName) && new Date(out[newDataItemName]) ? new Date(out[newDataItemName]) : out[newDataItemName]
			}
		}
		out.code = isCoupon(out) ? getCouponCode(out) : undefined
		return out
	})
}

export function normalizeVoucherData(vouchers) {
	const { link = [] } = vouchers
	return link.map(({ offerdescription = [], offerstartdate = [], offerenddate = [], advertiserid = [], couponcode = [], clickurl = [], couponrestriction = [] }) => ({
		advertiserId: advertiserid[0],
		code: couponcode[0],
		description: offerdescription[0],
		restriction: couponrestriction[0],
		startDate: offerstartdate[0],
		endDate: offerenddate[0],
		clickUrl: clickurl[0],
	})).filter(link => !!link.code)
}

export function normalizeTransactionData(transactions) {
	let booleanValueFields = ['isEvent']
	let dateValueFields = ['processDate', 'transactionDate']

	return transactions.map(transaction => {
		let out = {}
		for (let transactionItem in transaction) {
			if (transaction.hasOwnProperty(transactionItem)) {
				let newDataItemName = _.camelCase(transactionItem.toLowerCase())
				let value = transaction[transactionItem]
				out[newDataItemName] = value
				out[newDataItemName] = booleanValueFields.includes(newDataItemName) ? out[newDataItemName] === 'Y' : out[newDataItemName]
				out[newDataItemName] = dateValueFields.includes(newDataItemName) ? new Date(out[newDataItemName]) : out[newDataItemName]
			}
		}
		return out
	})
}

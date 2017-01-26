import { describe, beforeEach, afterEach } from 'ava-spec'
import sinon from 'sinon'
import RakutenLinkShare from '../'
import fetchLib from '../dist/utils/fetch'
import networkLib from '../dist/utils/network'
import fs from 'fs'

describe(`Rakuten LinkShare`, it => {
	let RL

	beforeEach(() => {
		sinon.stub(networkLib, 'initialise').returns(Promise.resolve('fake-access-token'))

		RL = new RakutenLinkShare({
			reportingToken: '12345',
			securityToken: '98765',
			authorisationHeader: 'Basic ABCDEFG',
			username: 'USERNAME',
			password: 'passw0rd',
			scope: '123123123',
			webServicesToken: '123123123123123',
		})
	})

	afterEach(() => {
		networkLib.initialise.restore()
	})

	it(`Advertisers`, async expect => {
		let xmlData = fs.readFileSync('./mock-data/advertisers.xml', 'utf-8')
		sinon.stub(fetchLib, 'fetchXml').returns(Promise.resolve(xmlData))

		let advertisers = await RL.getAdvertisers()
		expect.true(advertisers.length > 0)
		expect.deepEqual(advertisers[0], {
			applicationStatus: 'Approved',
			categories: [ '146', '150', '16', '210', '149', '20', '17' ],
			mid: '560',
			name: 'Rakuten Affiliate Network Welcome Program',
			offer: {
				alsoName: '256.1',
				commissionTerms: 'sale : 0 and above 0%',
				offerId: '311675',
				offerName: 'Rakuten LinkShare Public Offer',
			},
		})

		fetchLib.fetchXml.restore()
	})

	it(`Links`, async expect => {
		let xmlData = fs.readFileSync('./mock-data/links.xml', 'utf-8')
		sinon.stub(fetchLib, 'fetchXml').returns(Promise.resolve(xmlData))

		let links = await RL.getLinks()
		expect.true(links.length > 0)
		expect.deepEqual(links[0], {
			campaignId: '0',
			categoryId: '0',
			categoryName: 'Default',
			linkId: '15',
			linkName: 'Shop Football at Decathlon',
			mid: '41036',
			nid: 3,
			clickUrl: 'http://click.linksynergy.com/fs-bin/click?id=TQvJyo21LpE&offerid=434513.15&type=3',
			endDate: new Date("Tue Jul 12 2016 00:00:00 GMT+0200 (CEST)"),
			landUrl: 'http://www.decathlon.co.uk/C-33096-football',
			showUrl: 'http://ad.linksynergy.com/fs-bin/show?id=TQvJyo21LpE&bids=434513.15&type=3',
			startDate: new Date("Tue Jun 21 2016 00:00:00 GMT+0200 (CEST)"),
			textDisplay: 'Shop Football at Decathlon',
			code: undefined,
		})

		fetchLib.fetchXml.restore()
	})

	it(`Vouchers`, async expect => {
		let xmlData = fs.readFileSync('./mock-data/vouchers.xml', 'utf-8')
		sinon.stub(fetchLib, 'fetchXml').returns(Promise.resolve(xmlData))

		const vouchers = await RL.getVouchers()
		expect.true(vouchers.length > 0)

		fetchLib.fetchXml.restore()
	})

	it(`Transactions`, async expect => {
		let jsonData = fs.readFileSync('./mock-data/transactions.json', 'utf-8')
		sinon.stub(fetchLib, 'fetchJson').returns(Promise.resolve(JSON.parse(jsonData)))

		let transactions = await RL.getTransactions()
		expect.true(transactions.length > 0)
		expect.deepEqual(transactions[0], {
			etransactionId: 'c123456d789ccc01234aae56e78d9ea0',
			advertiserId: 1111,
			sid: 22222,
			orderId: '333333333',
			memberId: '444444',
			skuNumber: '5555555',
			saleAmount: 8200.46,
			quantity: 1,
			commissions: 0,
			processDate: new Date("Wed Apr 30 2014 05:07:13 GMT+0200 (CEST)"),
			transactionDate: new Date("Wed Apr 30 2014 05:07:00 GMT+0200 (CEST)"),
			transactionType: 'realtime',
			productName: 'Something really fancy',
			u1: 'adc99999999cda',
			currency: 'USD',
			isEvent: true,
		})

		fetchLib.fetchJson.restore()
	})
})

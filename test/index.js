import { describe, beforeEach } from 'ava-spec'
import RakutenLinkShare from '../'

describe(`Rakuten LinkShare`, it => {
	let RL

	beforeEach(() => {
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

	it(`Advertisers`, async expect => {
		let advertisers = await RL.getAdvertisers()
		expect.true(advertisers.length > 0)
	})

	it(`Links`, async expect => {
		let links = await RL.getLinks()
		expect.true(links.length > 0)
	})
})

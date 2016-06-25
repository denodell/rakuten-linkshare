import { describe, beforeEach } from 'ava-spec'
import RakutenLinkShare from '../'

describe(`Rakuten LinkShare`, it => {
	let RL

	beforeEach(() => {
		RL = new RakutenLinkShare({
			reportingToken: 'ZW5jcnlwdGVkYToyOntzOjU6IlRva2VuIjtzOjY0OiIxNmJiNTFmZTZiYmE0MjAyODJmYzEwOThlZTliYzM4ODQ2ZTE2Zjg4MTdiMjA1NzBhNWMyZjgxZGVlMDJhMWUzIjtzOjg6IlVzZXJUeXBlIjtzOjk6IlB1Ymxpc2hlciI7fQ%3D%3D',
			securityToken: '16bb51fe6bba420282fc1098ee9bc38846e16f8817b20570a5c2f81dee02a1e3',
			authorisationHeader: 'Basic MzJXMjdWVGZvTGY3NUc2SHVRNDFPdTV4UWx3YTozbnBacWlPVHNVZ04zdXJadjdhM1QwaTBoWUVh',
			username: 'denodell',
			password: 'Unl0ck1t',
			scope: '3325471',
			webServicesToken: '2645f4817b96815a87c9b6affd66fe3f30e1810a13db2cf5c59c559f11f908f2',
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

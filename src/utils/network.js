import { fetchXmlAsJson } from './fetch'

let expiry = new Date()
let accessToken

async function initialise(authorisationHeader, username, password, scope) {
	if (new Date() < expiry) {
		return accessToken
	}

	try {
		let url = `https://api.rakutenmarketing.com/token`
		let response = await fetch(url, {
			method: 'post',
			headers: new Headers({
				'Accept': 'application/json; charset=utf-8',
				'Authorization': authorisationHeader,
				'Content-Type': 'application/x-www-form-urlencoded',
			}),
			body: `grant_type=password&username=${username}&password=${password}&scope=${scope}`,
		})

		if (!response.ok) {
			throw response.statusText
		}
		let data = await response.json()

		expiry = new Date(Date.now() + (data.expires_in * 1000)) // to milliseconds. expires_in is in seconds
		accessToken = data.access_token

		return accessToken
	} catch (err) {
		throw err
	}
}

async function fetchData(url, authorisationHeader, username, password, scope) {
	let accessToken = await initialise(authorisationHeader, username, password, scope)
	return fetchXmlAsJson(url, {
		'Accept': 'application/json; charset=utf-8', // TODO: Ignored right now for some reason? No JSON is returned, only XML
		'Authorization': `Bearer ${accessToken}`,
	})
}

export async function requestData(url, authorisationHeader, username, password, scope) {
	try {
		let data = await fetchData(url, authorisationHeader, username, password, scope)
		return Promise.resolve(data)
	} catch (err) {
		throw new Error(err)
	}
}

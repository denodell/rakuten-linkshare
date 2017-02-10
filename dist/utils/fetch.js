'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _xml2js = require('xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exported = {};

function xmlToJSON(xml) {
	return new _promise2.default(function (resolve, reject) {
		(0, _xml2js.parseString)(xml, {
			trim: true,
			stripPrefix: true,
			normalizeTags: true,
			normalize: true,
			explicitRoot: false,
			tagNameProcessors: [function (name) {
				return _lodash2.default.camelCase(name);
			}]
		}, function (err, json) {
			if (err) {
				reject(err);
				return;
			}

			resolve(json.ns1Return ? json.ns1Return : json);
		});
	});
}

function fetchXml(url, headers) {
	return (0, _isomorphicFetch2.default)(url, { headers: headers }).then(function (response) {
		if (!response.ok) {
			throw response.statusText;
		}
		return response;
	}).then(function (response) {
		return response.text();
	});
}

function fetchXmlAsJson(url, headers) {
	return new _promise2.default(function (resolve, reject) {
		return exported.fetchXml(url, headers).then(xmlToJSON).then(function (data) {
			return resolve(data);
		}).catch(reject);
	});
}

function fetchJson(url, headers) {
	return (0, _isomorphicFetch2.default)(url, { headers: headers }).then(function (response) {
		return response.json();
	});
}

module.exports = exported = {
	fetchXml: fetchXml,
	fetchXmlAsJson: fetchXmlAsJson,
	fetchJson: fetchJson
};
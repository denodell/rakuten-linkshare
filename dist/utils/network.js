'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var initialise = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(authorisationHeader, username, password, scope) {
		var url, response, data;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!(new Date() < expiry)) {
							_context.next = 2;
							break;
						}

						return _context.abrupt('return', accessToken);

					case 2:
						_context.prev = 2;
						url = 'https://api.rakutenmarketing.com/token';
						_context.next = 6;
						return fetch(url, {
							method: 'post',
							headers: new Headers({
								'Accept': 'application/json; charset=utf-8',
								'Authorization': authorisationHeader,
								'Content-Type': 'application/x-www-form-urlencoded'
							}),
							body: 'grant_type=password&username=' + username + '&password=' + password + '&scope=' + scope
						});

					case 6:
						response = _context.sent;

						if (response.ok) {
							_context.next = 11;
							break;
						}

						_context.next = 10;
						return response.json();

					case 10:
						throw _context.sent;

					case 11:
						_context.next = 13;
						return response.json();

					case 13:
						data = _context.sent;


						expiry = new Date(Date.now() + data.expires_in * 1000); // to milliseconds. expires_in is in seconds
						accessToken = data.access_token;

						return _context.abrupt('return', accessToken);

					case 19:
						_context.prev = 19;
						_context.t0 = _context['catch'](2);
						throw _context.t0;

					case 22:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 19]]);
	}));

	return function initialise(_x, _x2, _x3, _x4) {
		return _ref.apply(this, arguments);
	};
}();

var fetchData = function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(url, authorisationHeader, username, password, scope) {
		var accessToken;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return exported.initialise(authorisationHeader, username, password, scope);

					case 2:
						accessToken = _context2.sent;
						return _context2.abrupt('return', _fetch2.default.fetchXmlAsJson(url, {
							'Authorization': 'Bearer ' + accessToken
						}));

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function fetchData(_x5, _x6, _x7, _x8, _x9) {
		return _ref2.apply(this, arguments);
	};
}();

var requestData = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(url, authorisationHeader, username, password, scope) {
		var data;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.prev = 0;
						_context3.next = 3;
						return fetchData(url, authorisationHeader, username, password, scope);

					case 3:
						data = _context3.sent;
						return _context3.abrupt('return', _promise2.default.resolve(data));

					case 7:
						_context3.prev = 7;
						_context3.t0 = _context3['catch'](0);
						throw new Error(_context3.t0);

					case 10:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this, [[0, 7]]);
	}));

	return function requestData(_x10, _x11, _x12, _x13, _x14) {
		return _ref3.apply(this, arguments);
	};
}();

var requestJsonData = function () {
	var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(url, authorisationHeader, username, password, scope) {
		var _accessToken;

		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.prev = 0;
						_context4.next = 3;
						return exported.initialise(authorisationHeader, username, password, scope);

					case 3:
						_accessToken = _context4.sent;
						return _context4.abrupt('return', _fetch2.default.fetchJson(url, {
							'Authorization': 'Bearer ' + _accessToken
						}));

					case 7:
						_context4.prev = 7;
						_context4.t0 = _context4['catch'](0);
						throw new Error(_context4.t0);

					case 10:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this, [[0, 7]]);
	}));

	return function requestJsonData(_x15, _x16, _x17, _x18, _x19) {
		return _ref4.apply(this, arguments);
	};
}();

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expiry = new Date();
var accessToken = void 0;
var exported = {};

module.exports = exported = {
	initialise: initialise,
	requestData: requestData,
	requestJsonData: requestJsonData
};
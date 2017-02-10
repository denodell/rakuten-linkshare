'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.requestAdvertisers = requestAdvertisers;
exports.requestLinks = requestLinks;
exports.requestBanners = requestBanners;
exports.requestVouchers = requestVouchers;
exports.requestProducts = requestProducts;
exports.requestTransactions = requestTransactions;

var _network = require('./network');

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

var _processData = require('./process-data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestAdvertisers(_ref) {
	var authorisationHeader = _ref.authorisationHeader,
	    username = _ref.username,
	    password = _ref.password,
	    scope = _ref.scope;

	var url = 'https://api.rakutenmarketing.com/linklocator/1.0/getMerchByAppStatus/approved';

	return new _promise2.default(function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
			var advertisers;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return (0, _network.requestData)(url, authorisationHeader, username, password, scope);

						case 3:
							advertisers = _context.sent;

							resolve((0, _processData.normalizeAdvertiserData)(advertisers));
							_context.next = 10;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							reject(_context.t0);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 7]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}());
}

function requestLinks(_ref3) {
	var authorisationHeader = _ref3.authorisationHeader,
	    username = _ref3.username,
	    password = _ref3.password,
	    scope = _ref3.scope,
	    mid = _ref3.mid,
	    cat = _ref3.cat,
	    startDate = _ref3.startDate,
	    endDate = _ref3.endDate,
	    campaignId = _ref3.campaignId,
	    page = _ref3.page;

	var url = 'https://api.rakutenmarketing.com/linklocator/1.0/getTextLinks/' + mid + '/' + cat + '/' + startDate + '/' + endDate + '/' + campaignId + '/' + page;

	return new _promise2.default(function () {
		var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(resolve, reject) {
			var links;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return (0, _network.requestData)(url, authorisationHeader, username, password, scope);

						case 3:
							links = _context2.sent;

							resolve((0, _processData.normalizeLinkData)(links));
							_context2.next = 10;
							break;

						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2['catch'](0);

							reject(_context2.t0);

						case 10:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 7]]);
		}));

		return function (_x3, _x4) {
			return _ref4.apply(this, arguments);
		};
	}());
}

function requestBanners(_ref5) {
	var authorisationHeader = _ref5.authorisationHeader,
	    username = _ref5.username,
	    password = _ref5.password,
	    scope = _ref5.scope,
	    mid = _ref5.mid,
	    cat = _ref5.cat,
	    startDate = _ref5.startDate,
	    endDate = _ref5.endDate,
	    size = _ref5.size,
	    campaignId = _ref5.campaignId,
	    page = _ref5.page;

	var url = 'https://api.rakutenmarketing.com/linklocator/1.0/getTextLinks/' + mid + '/' + cat + '/' + startDate + '/' + endDate + '/' + size + '/' + campaignId + '/' + page;

	return new _promise2.default(function () {
		var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(resolve, reject) {
			var links;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_context3.next = 3;
							return (0, _network.requestData)(url, authorisationHeader, username, password, scope);

						case 3:
							links = _context3.sent;

							resolve((0, _processData.normalizeLinkData)(links));
							_context3.next = 10;
							break;

						case 7:
							_context3.prev = 7;
							_context3.t0 = _context3['catch'](0);

							reject(_context3.t0);

						case 10:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 7]]);
		}));

		return function (_x5, _x6) {
			return _ref6.apply(this, arguments);
		};
	}());
}

function requestVouchers(_ref7) {
	var authorisationHeader = _ref7.authorisationHeader,
	    username = _ref7.username,
	    password = _ref7.password,
	    scope = _ref7.scope;

	var url = 'https://api.rakutenmarketing.com/coupon/1.0?resultsperpage=500&pagenumber=1';

	return new _promise2.default(function () {
		var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(resolve, reject) {
			var vouchers;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_context4.next = 3;
							return (0, _network.requestData)(url, authorisationHeader, username, password, scope);

						case 3:
							vouchers = _context4.sent;

							resolve((0, _processData.normalizeVoucherData)(vouchers));
							_context4.next = 10;
							break;

						case 7:
							_context4.prev = 7;
							_context4.t0 = _context4['catch'](0);

							reject(_context4.t0);

						case 10:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[0, 7]]);
		}));

		return function (_x7, _x8) {
			return _ref8.apply(this, arguments);
		};
	}());
}

function requestProducts() {}

function requestTransactions(_ref9) {
	var authorisationHeader = _ref9.authorisationHeader,
	    username = _ref9.username,
	    password = _ref9.password,
	    scope = _ref9.scope;

	var todayFormatted = (0, _dateformat2.default)(new Date(), 'yyyy-mm-dd%20HH:MM:ss');
	var startDate = new Date('2016-05-01');
	var startDateFormatted = (0, _dateformat2.default)(startDate, 'yyyy-mm-dd%20HH:MM:ss');
	var url = 'https://api.rakutenmarketing.com/events/1.0/transactions?limit=1000&page=1&process_date_start=' + startDateFormatted + '&process_date_end=' + todayFormatted;

	return new _promise2.default(function () {
		var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(resolve, reject) {
			var transactions;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return (0, _network.requestJsonData)(url, authorisationHeader, username, password, scope);

						case 3:
							transactions = _context5.sent;

							resolve((0, _processData.normalizeTransactionData)(transactions));
							_context5.next = 10;
							break;

						case 7:
							_context5.prev = 7;
							_context5.t0 = _context5['catch'](0);

							reject(_context5.t0);

						case 10:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this, [[0, 7]]);
		}));

		return function (_x9, _x10) {
			return _ref10.apply(this, arguments);
		};
	}());
}
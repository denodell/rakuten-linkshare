'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('babel-polyfill');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import dateFormat from 'dateformat'

var defaultAuthParams = {
	authorisationHeader: '',
	username: '',
	password: '',
	scope: ''
};

var RakutenLinkShare = function () {
	function RakutenLinkShare(authParams) {
		(0, _classCallCheck3.default)(this, RakutenLinkShare);

		this.authParams = (0, _assign2.default)({}, defaultAuthParams, authParams);
	}

	(0, _createClass3.default)(RakutenLinkShare, [{
		key: 'getAdvertisers',
		value: function getAdvertisers() {
			return (0, _utils.requestAdvertisers)(this.authParams);
		}
	}, {
		key: 'getLinks',
		value: function getLinks(options) {
			var _authParams = this.authParams,
			    authorisationHeader = _authParams.authorisationHeader,
			    username = _authParams.username,
			    password = _authParams.password,
			    scope = _authParams.scope;


			return (0, _utils.requestLinks)({
				authorisationHeader: authorisationHeader,
				username: username,
				password: password,
				scope: scope,
				mid: options.mid || '-1',
				cat: options.cat || '-1',
				startDate: options.startDate || '',
				endDate: options.endDate || '',
				campaignId: options.campaignId || '-1',
				page: options.page || '1'
			});
		}
	}, {
		key: 'getBanners',
		value: function getBanners(options) {
			var _authParams2 = this.authParams,
			    authorisationHeader = _authParams2.authorisationHeader,
			    username = _authParams2.username,
			    password = _authParams2.password,
			    scope = _authParams2.scope;


			return (0, _utils.requestBanners)({
				authorisationHeader: authorisationHeader,
				username: username,
				password: password,
				scope: scope,
				mid: options.mid || '-1',
				cat: options.cat || '-1',
				startDate: options.startDate || '',
				endDate: options.endDate || '',
				size: options.size || '-1',
				campaignId: options.campaignId || '-1',
				page: options.page || '1'
			});
		}
	}, {
		key: 'getVouchers',
		value: function getVouchers() {
			return (0, _utils.requestVouchers)(this.authParams);
		}
	}, {
		key: 'getTransactions',
		value: function getTransactions() {
			return (0, _utils.requestTransactions)(this.authParams);
		}

		// TODO

	}, {
		key: 'getProducts',
		value: function getProducts() {}

		// TODO

	}, {
		key: 'searchProducts',
		value: function searchProducts() {}
	}]);
	return RakutenLinkShare;
}();

exports.default = RakutenLinkShare;
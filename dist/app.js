'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import dateFormat from 'dateformat'

var defaultOptions = {
	reportingToken: '',
	authorisationHeader: '',
	username: '',
	password: '',
	scope: ''
};

var RakutenLinkShare = function () {
	function RakutenLinkShare(options) {
		_classCallCheck(this, RakutenLinkShare);

		this.options = Object.assign({}, defaultOptions, options);
	}

	_createClass(RakutenLinkShare, [{
		key: 'getAdvertisers',
		value: function getAdvertisers() {
			var _options = this.options,
			    reportingToken = _options.reportingToken,
			    authorisationHeader = _options.authorisationHeader,
			    username = _options.username,
			    password = _options.password,
			    scope = _options.scope;


			return (0, _utils.requestAdvertisers)({
				reportingToken: reportingToken,
				authorisationHeader: authorisationHeader,
				username: username,
				password: password,
				scope: scope
			});
		}
	}, {
		key: 'getLinks',
		value: function getLinks() {
			var _options2 = this.options,
			    reportingToken = _options2.reportingToken,
			    authorisationHeader = _options2.authorisationHeader,
			    username = _options2.username,
			    password = _options2.password,
			    scope = _options2.scope;


			return (0, _utils.requestLinks)({
				reportingToken: reportingToken,
				authorisationHeader: authorisationHeader,
				username: username,
				password: password,
				scope: scope
			});
		}
	}, {
		key: 'getVouchers',
		value: function getVouchers() {
			var _options3 = this.options,
			    reportingToken = _options3.reportingToken,
			    authorisationHeader = _options3.authorisationHeader,
			    username = _options3.username,
			    password = _options3.password,
			    scope = _options3.scope;


			return (0, _utils.requestVouchers)({
				reportingToken: reportingToken,
				authorisationHeader: authorisationHeader,
				username: username,
				password: password,
				scope: scope
			});
		}
	}, {
		key: 'getTransactions',
		value: function getTransactions() {
			var _options4 = this.options,
			    reportingToken = _options4.reportingToken,
			    authorisationHeader = _options4.authorisationHeader,
			    username = _options4.username,
			    password = _options4.password,
			    scope = _options4.scope;


			return (0, _utils.requestTransactions)({
				reportingToken: reportingToken,
				authorisationHeader: authorisationHeader,
				username: username,
				password: password,
				scope: scope
			});
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
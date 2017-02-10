'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.normalizeAdvertiserData = normalizeAdvertiserData;
exports.normalizeLinkData = normalizeLinkData;
exports.normalizeVoucherData = normalizeVoucherData;
exports.normalizeTransactionData = normalizeTransactionData;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeAdvertiserData(merchants) {
	return merchants.map(function (merchant) {
		var out = {};
		var offer = {};

		for (var dataItem in merchant) {
			if (merchant.hasOwnProperty(dataItem)) {
				var newDataItemName = dataItem.replace(/^ns1/g, '').toLowerCase().replace('applicationstatus', 'applicationStatus');
				var value = merchant[dataItem][0];
				out[newDataItemName] = value; //pluralArrayValueFields.includes(dataItem) ? value[dataItem.replace(/s$/, '')] : value
			}
		}

		out.categories = out.categories.split(' ');

		offer = {};

		for (var _dataItem in out.offer) {
			if (out.offer.hasOwnProperty(_dataItem)) {
				var _newDataItemName = _dataItem.replace(/^ns1/g, '').toLowerCase().replace('alsoname', 'alsoName').replace('commissionterms', 'commissionTerms').replace('offerid', 'offerId').replace('offername', 'offerName');
				var _value = out.offer[_dataItem][0];
				offer[_newDataItemName] = _value;
			}
		}

		out.offer = offer;

		return out;
	});
}

function isCoupon(link) {
	var text = link.textDisplay || '';
	return text.toLowerCase().includes(' code ') || text.toLowerCase().includes(' code:');
}

function getCouponCode(link) {
	var text = link.textDisplay || '';
	var isCodeSpace = text.toLowerCase().includes(' code ');
	var isCodeColon = text.toLowerCase().includes(' code:');
	var arr = [];
	if (isCodeSpace) {
		arr = text.toLowerCase().split(' code ');
	} else if (isCodeColon) {
		arr = text.toLowerCase().split(' code:');
	} else {
		return text;
	}

	var lastItem = arr.pop();
	lastItem = lastItem.trim();
	arr = lastItem.split(' ');
	var code = arr[0];
	code = code.replace(/\"/g, '');
	return code.toUpperCase();
}

function normalizeLinkData(links) {
	var numberValueFields = ['nid'];
	var dateValueFields = ['startDate', 'endDate'];

	return links.map(function (link) {
		var out = {};
		for (var linkItem in link) {
			if (link.hasOwnProperty(linkItem)) {
				var newDataItemName = linkItem.replace(/^ns1/g, '').toLowerCase().replace('campaignid', 'campaignId').replace('categoryid', 'categoryId').replace('categoryname', 'categoryName').replace('linkid', 'linkId').replace('linkname', 'linkName').replace('clickurl', 'clickUrl').replace('startdate', 'startDate').replace('enddate', 'endDate').replace('landurl', 'landUrl').replace('showurl', 'showUrl').replace('textdisplay', 'textDisplay');
				var value = link[linkItem][0];
				out[newDataItemName] = value;
				out[newDataItemName] = numberValueFields.includes(newDataItemName) ? +out[newDataItemName] : out[newDataItemName];
				out[newDataItemName] = dateValueFields.includes(newDataItemName) && new Date(out[newDataItemName]) ? new Date(out[newDataItemName]) : out[newDataItemName];
			}
		}
		out.code = isCoupon(out) ? getCouponCode(out) : undefined;
		return out;
	});
}

function normalizeVoucherData(vouchers) {
	var _vouchers$link = vouchers.link,
	    link = _vouchers$link === undefined ? [] : _vouchers$link;

	return link.map(function (_ref) {
		var _ref$offerdescription = _ref.offerdescription,
		    offerdescription = _ref$offerdescription === undefined ? [] : _ref$offerdescription,
		    _ref$offerstartdate = _ref.offerstartdate,
		    offerstartdate = _ref$offerstartdate === undefined ? [] : _ref$offerstartdate,
		    _ref$offerenddate = _ref.offerenddate,
		    offerenddate = _ref$offerenddate === undefined ? [] : _ref$offerenddate,
		    _ref$advertiserid = _ref.advertiserid,
		    advertiserid = _ref$advertiserid === undefined ? [] : _ref$advertiserid,
		    _ref$couponcode = _ref.couponcode,
		    couponcode = _ref$couponcode === undefined ? [] : _ref$couponcode,
		    _ref$clickurl = _ref.clickurl,
		    clickurl = _ref$clickurl === undefined ? [] : _ref$clickurl,
		    _ref$couponrestrictio = _ref.couponrestriction,
		    couponrestriction = _ref$couponrestrictio === undefined ? [] : _ref$couponrestrictio;
		return {
			advertiserId: advertiserid[0],
			code: couponcode[0],
			description: offerdescription[0],
			restriction: couponrestriction[0],
			startDate: offerstartdate[0],
			endDate: offerenddate[0],
			clickUrl: clickurl[0]
		};
	}).filter(function (link) {
		return !!link.code;
	});
}

function normalizeTransactionData(transactions) {
	var booleanValueFields = ['isEvent'];
	var dateValueFields = ['processDate', 'transactionDate'];

	return transactions.map(function (transaction) {
		var out = {};
		for (var transactionItem in transaction) {
			if (transaction.hasOwnProperty(transactionItem)) {
				var newDataItemName = _lodash2.default.camelCase(transactionItem.toLowerCase());
				var value = transaction[transactionItem];
				out[newDataItemName] = value;
				out[newDataItemName] = booleanValueFields.includes(newDataItemName) ? out[newDataItemName] === 'Y' : out[newDataItemName];
				out[newDataItemName] = dateValueFields.includes(newDataItemName) ? new Date(out[newDataItemName]) : out[newDataItemName];
			}
		}
		return out;
	});
}
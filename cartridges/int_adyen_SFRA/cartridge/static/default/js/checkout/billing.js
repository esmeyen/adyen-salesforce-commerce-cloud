/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./adyen-salesforce-commerce-cloud/cartridges/int_adyen_SFRA/cartridge/client/default/js/checkout/billing.js":
/*!*******************************************************************************************************************!*\
  !*** ./adyen-salesforce-commerce-cloud/cartridges/int_adyen_SFRA/cartridge/client/default/js/checkout/billing.js ***!
  \*******************************************************************************************************************/
/***/ ((module) => {



function hasData() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.every(function (arg) {
    return !!arg;
  });
}
function appendToPaymentSummary(html) {
  // update payment details
  var paymentSummary = document.querySelector('.payment-details');
  paymentSummary.innerHTML += html;
}
function appendMaskedCC(_ref) {
  var maskedCreditCardNumber = _ref.maskedCreditCardNumber;
  var innerHTML = "<div>".concat(maskedCreditCardNumber, "</div>");
  return maskedCreditCardNumber && appendToPaymentSummary(innerHTML);
}
function appendIssuerName(_ref2) {
  var selectedIssuerName = _ref2.selectedIssuerName;
  var innerHTML = "<div><span>".concat(selectedIssuerName, "</span></div>");
  return selectedIssuerName && appendToPaymentSummary(innerHTML);
}
function appendExpiration(_ref3, order) {
  var expirationMonth = _ref3.expirationMonth,
    expirationYear = _ref3.expirationYear;
  var innerHTML = "<div><span>".concat(order.resources.cardEnding, " ").concat(expirationMonth, "/").concat(expirationYear, "</span></div>");
  return hasData(expirationMonth, expirationYear) && appendToPaymentSummary(innerHTML);
}
function appendPaymentMethod(_ref4) {
  var selectedAdyenPM = _ref4.selectedAdyenPM;
  var innerHTML = "<div><span>".concat(selectedAdyenPM, "</span></div>");
  return selectedAdyenPM && appendToPaymentSummary(innerHTML);
}

/**
 * Updates the payment information in checkout, based on the supplied order model
 * @param {Object} order - checkout model to use as basis of new truth
 */
function updatePaymentInformation(order) {
  var _order$billing$paymen;
  if ((_order$billing$paymen = order.billing.payment.selectedPaymentInstruments) !== null && _order$billing$paymen !== void 0 && _order$billing$paymen.length) {
    var selectedPaymentInstrument = order.billing.payment.selectedPaymentInstruments[0];
    document.querySelector('.payment-details').innerHTML = '';
    appendPaymentMethod(selectedPaymentInstrument);
    appendIssuerName(selectedPaymentInstrument);
    appendMaskedCC(selectedPaymentInstrument);
    appendExpiration(selectedPaymentInstrument, order);
  }
}
module.exports.methods = {
  updatePaymentInformation: updatePaymentInformation
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./adyen-salesforce-commerce-cloud/cartridges/int_adyen_SFRA/cartridge/client/default/js/checkout/billing.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=billing.js.map
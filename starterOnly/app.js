/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./starterOnly/src/app.js":
/*!********************************!*\
  !*** ./starterOnly/src/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_modal_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/modal-class.js */ \"./starterOnly/src/class/modal-class.js\");\n\r\n\r\nconst modal = new _class_modal_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(\".bground\"), document.querySelectorAll('.close'), document.querySelectorAll(\".modal-btn\"));\r\n\r\nmodal.init();\r\nmodal.reset();\r\n\r\nfunction editNav() {\r\n  var x = document.getElementById(\"myTopnav\");\r\n  if (x.className === \"topnav\") {\r\n    x.className += \" responsive\";\r\n  } else {\r\n    x.className = \"topnav\";\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gameon-website-fr/./starterOnly/src/app.js?");

/***/ }),

/***/ "./starterOnly/src/class/modal-class.js":
/*!**********************************************!*\
  !*** ./starterOnly/src/class/modal-class.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n\r\n    constructor(modalContainerEl, modalCloseEl, modalOpenEl) {\r\n        \r\n        this.modalContainerEl = modalContainerEl;\r\n        this.modalCloseEl = modalCloseEl;\r\n        this.modalOpenEl = modalOpenEl;\r\n    }\r\n\r\n    init() {\r\n        this.modalOpenEl.forEach((el) => el.addEventListener(\"click\", this.open.bind(this)));\r\n        this.modalCloseEl.forEach((el) => el.addEventListener(\"click\", this.close.bind(this)));\r\n    }\r\n    \r\n    open() {\r\n        this.modalContainerEl.style.display = 'block';\r\n    }\r\n\r\n    close() {\r\n        this.modalContainerEl.style.display = 'none';\r\n        this.reset(this);\r\n       \r\n    }\r\n    reset() {\r\n        this.modalContainerEl.querySelectorAll('input:not(input[type=submit]').forEach(input => { \r\n            input.value = '';\r\n            input.checked = false;\r\n          });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://gameon-website-fr/./starterOnly/src/class/modal-class.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./starterOnly/src/app.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var editNav;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./starterOnly/src/app.js":
/*!********************************!*\
  !*** ./starterOnly/src/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Modal.js */ \"./starterOnly/src/class/Modal.js\");\n/* harmony import */ var _class_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Form.js */ \"./starterOnly/src/class/Form.js\");\nconst editNav = () => {\r\n    var x = document.getElementById(\"myTopnav\");\r\n    if (x.className === \"topnav\") {\r\n      x.className += \" responsive\";\r\n    } else {\r\n      x.className = \"topnav\";\r\n    }\r\n  }\r\n  editNav();\r\n\r\n\r\n\r\n\r\nconst modal = new _class_Modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(\".bground\"), document.querySelectorAll('.close'), document.querySelectorAll(\".modal-btn\"));\r\nconst form = new _class_Form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector(\"#reservation-form\"));\r\n\r\nmodal.reset();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://editNav/./starterOnly/src/app.js?");

/***/ }),

/***/ "./starterOnly/src/class/Form.js":
/*!***************************************!*\
  !*** ./starterOnly/src/class/Form.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n    constructor(formEl) {\r\n        this.formEl = formEl;\r\n        // le 'click' sur le bouton submit est écouté\r\n        this.formEl.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            this.handleSubmit(this);\r\n        });\r\n\r\n    }\r\n\r\n    handleSubmit() {\r\n        \r\n        const formData = this.formEl.querySelectorAll('.formData');\r\n        let errors = [];\r\n        let errorsSum;\r\n        let data = {};\r\n\r\n        // chaque élément .formData du formulaire est validé puis il est rajouté à l'objet {data}\r\n\r\n        formData.forEach(dataEl => {\r\n\r\n            const inputs = dataEl.querySelectorAll('input');\r\n            const inputData = this.validateData(inputs);\r\n\r\n            if (inputData.hasError !== false) {\r\n\r\n                errors.push(1);\r\n                this.displayError(dataEl, inputData.hasError);\r\n\r\n            } else if ( inputData.hasError === false ) {\r\n                errors.push(0);\r\n                this.hideError(dataEl);\r\n                data[inputData.name] = inputData.value;\r\n            }\r\n\r\n        });\r\n\r\n        //On vérifie qu'il n'y a pas d'erreurs\r\n\r\n        errorsSum = errors.reduce((a, current) => a + current, 0);\r\n\r\n        if( errors.length === formData.length && errorsSum === 0 ){\r\n           \r\n            this.send(data);\r\n        }\r\n    }\r\n\r\n\r\n    validateData(inputs) {\r\n        let data = {\r\n            name: inputs[0].name,\r\n            value: 'error'\r\n        }\r\n        let errorMsg;\r\n        \r\n        switch(inputs[0].type) {\r\n\r\n            case 'text':\r\n                errorMsg = \"Veuillez entrer au minimum 2 caractères !\";\r\n                inputs[0].value.length < 2 ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);\r\n                break;\r\n\r\n            case 'email':\r\n                errorMsg = \"Adresse Email invalide, merci de modifier\";\r\n                !inputs[0].value.match(/^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,6})+)$/) ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);\r\n                break;\r\n\r\n            case 'number':\r\n                errorMsg = \"Merci d'entrer une valeur numérique\";\r\n                !inputs[0].value.match(/^\\d+$/) ? data.hasError = errorMsg : (data.value = inputs[0].value, data.hasError = false);\r\n                break;\r\n\r\n            case 'radio':\r\n                errorMsg = \"Merci de sélectionner une localité\";\r\n                const checked = inputs[0].parentElement.querySelectorAll(':checked');\r\n                checked.length !== 1 ? data.hasError = errorMsg : (data.value = checked[0].value, data.hasError = false);\r\n                break;    \r\n\r\n            case 'checkbox':\r\n                errorMsg = \"Merci de cocher la case conditions générales\";\r\n                let errors = 0;\r\n                let values = {};\r\n                inputs.forEach(input => {\r\n                    !input.checked && input.hasAttribute('required') ? errors += 1 : values[input.id] = input.checked;\r\n                });\r\n                errors !== 0 ? data.hasError = errorMsg : (data.value = values, data.hasError = false);\r\n                break;\r\n\r\n            case 'date':\r\n                errorMsg = \"Veuillez saisir une date de naissance valide\";\r\n                const date = Date.parse(inputs[0].value);\r\n                const today = Date.now();\r\n                const minDate = Date.parse('1920-01-01');\r\n                \r\n                date !== NaN && minDate <= date && date < today ? (data.value = inputs[0].value, data.hasError = false) : data.hasError = errorMsg;\r\n                break;\r\n\r\n        }\r\n        return data;\r\n\r\n    }\r\n\r\n    displayError(el, errorMsg) {\r\n        el.setAttribute('data-error', errorMsg);\r\n        el.setAttribute('data-error-visible', true);\r\n    }\r\n\r\n\r\n    hideError(el) {\r\n        el.setAttribute('data-error-visible', false);\r\n    }\r\n\r\n    send(data) {\r\n        console.log(data);\r\n        const sendFunc = new Promise((resolve, reject) => {\r\n            setTimeout(() => resolve('Success!'), 2000);\r\n        });\r\n\r\n        sendFunc.then(\r\n            (response) => {\r\n                console.log(response);\r\n            }\r\n        )\r\n       \r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://editNav/./starterOnly/src/class/Form.js?");

/***/ }),

/***/ "./starterOnly/src/class/Modal.js":
/*!****************************************!*\
  !*** ./starterOnly/src/class/Modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n\r\n    constructor(modalContainerEl, modalCloseEl, modalOpenEl) {\r\n        \r\n        this.modalContainerEl = modalContainerEl;\r\n        this.modalCloseEl = modalCloseEl;\r\n        this.modalOpenEl = modalOpenEl;\r\n        this.modalOpenEl.forEach((el) => el.addEventListener(\"click\", this.open.bind(this)));\r\n        this.modalCloseEl.forEach((el) => el.addEventListener(\"click\", this.close.bind(this)));\r\n    }\r\n    \r\n    open() {\r\n        this.modalContainerEl.style.display = 'block';\r\n    }\r\n\r\n    close() {\r\n        this.modalContainerEl.style.display = 'none';\r\n        this.reset(this);\r\n       \r\n    }\r\n    reset() {\r\n        this.modalContainerEl.querySelectorAll('input:not(input[type=submit]):not(input[type=checkbox]):not(input[type=radio])')\r\n            .forEach( input => input.value = '' );\r\n\r\n        this.modalContainerEl.querySelectorAll('input[type=checkbox], input[type=radio]')\r\n            .forEach( input => input.checked = false );\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://editNav/./starterOnly/src/class/Modal.js?");

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
/******/ 	editNav = __webpack_exports__;
/******/ 	
/******/ })()
;
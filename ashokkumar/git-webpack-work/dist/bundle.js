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

/***/ "./src/css/my-card.scss":
/*!******************************!*\
  !*** ./src/css/my-card.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n          const styles = `.my-card {\n  background-color: green;\n}\n\n.demo {\n  background-color: greenyellow;\n}\n\nh1 {\n  color: red;\n}`;\n          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);\n      \n\n//# sourceURL=webpack://sass-codingchallenge/./src/css/my-card.scss?");

/***/ }),

/***/ "./src/my-card.js":
/*!************************!*\
  !*** ./src/my-card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_my_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/my-card.scss */ \"./src/css/my-card.scss\");\n\r\n\r\nconst temp = document.createElement(\"template\");\r\ntemp.innerHTML = `\r\n<h1>Element</h1>\r\n<div class=\"my-card\">\r\n<div class=\"user-name\"><slot name=\"name\"/></div>\r\n<div class=\"user-info\"><slot name=\"info\"/></div>\r\n\r\n</div>`;\r\n\r\nclass Mycard extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n    const style = document.createElement('style');\r\n    style.textContent = _css_my_card_scss__WEBPACK_IMPORTED_MODULE_0__.default;\r\n    console.log(style);\r\n    this.shadowRoot.appendChild(style);\r\n    this.shadowRoot.appendChild(temp.content.cloneNode(true));\r\n  }\r\n}\r\nwindow.customElements.define(\"my-card\", Mycard);\r\n\n\n//# sourceURL=webpack://sass-codingchallenge/./src/my-card.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/my-card.js");
/******/ 	
/******/ })()
;
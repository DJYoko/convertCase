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

/***/ "./src/REGEX_LIST.ts":
/*!***************************!*\
  !*** ./src/REGEX_LIST.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar REGEX_LIST = {\r\n    ck: function (arg) {\r\n        // camelCase to chain-case\r\n        return arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\r\n    },\r\n    cs: function (arg) {\r\n        // camelCase to snake_case\r\n        return arg.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();\r\n    },\r\n    kc: function (arg) {\r\n        // chain-case to camelCase\r\n        var replacer = function (match) {\r\n            return match.replace(/\\-/g, '').toUpperCase();\r\n        };\r\n        return arg.replace(/\\-[a-z]/g, replacer);\r\n    },\r\n    ks: function (arg) {\r\n        // chain-case to snake_case\r\n        return arg.replace(/\\-/g, '_');\r\n    },\r\n    sc: function (arg) {\r\n        // snake_case to camelCase\r\n        var replacer = function (match) {\r\n            return match.replace(/\\_/g, '').toUpperCase();\r\n        };\r\n        return arg.replace(/\\_[a-z]/g, replacer);\r\n    },\r\n    sk: function (arg) {\r\n        // snake_case to chain-case\r\n        return arg.replace(/_/g, '-');\r\n    },\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (REGEX_LIST);\r\n\n\n//# sourceURL=webpack://convertcase/./src/REGEX_LIST.ts?");

/***/ }),

/***/ "./src/convertCase.ts":
/*!****************************!*\
  !*** ./src/convertCase.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _REGEX_LIST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./REGEX_LIST */ \"./src/REGEX_LIST.ts\");\n\r\n/**\r\n * method\r\n * @param params {object}\r\n * @param params.input {string} - input string\r\n * @param params.type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)\r\n * @param params.isPascal  {boolean} - is Pascal (Capitalize the 1st letter)\r\n */\r\nwindow.convertCase = function (params) {\r\n    var return_string = _REGEX_LIST__WEBPACK_IMPORTED_MODULE_0__[\"default\"][params.type](params.input);\r\n    // isPascal option\r\n    if (params.isPascal === true && (params.type === 'kc' || params.type === 'sc')) {\r\n        return_string = return_string.charAt(0).toUpperCase() + return_string.slice(1);\r\n    }\r\n    return return_string;\r\n};\r\n\n\n//# sourceURL=webpack://convertcase/./src/convertCase.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/convertCase.ts");
/******/ 	
/******/ })()
;
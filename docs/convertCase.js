/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/convertCase.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/REGEX_LIST.ts":
/*!***************************!*\
  !*** ./src/REGEX_LIST.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar REGEX_LIST = {\r\n    'ck': function (arg) {\r\n        // camelCase to kebab-case\r\n        return arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\r\n    },\r\n    'cs': function (arg) {\r\n        // camelCase to snake_case \r\n        return arg.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();\r\n    },\r\n    'kc': function (arg) {\r\n        // kebab-case to camelCase\r\n        var replacer = function (match) {\r\n            return match.replace(/\\-/g, '').toUpperCase();\r\n        };\r\n        return arg.replace(/\\-[a-z]/g, replacer);\r\n    },\r\n    'ks': function (arg) {\r\n        // kebab-case to snake_case\r\n        return arg.replace(/\\-/g, '_');\r\n    },\r\n    'sc': function (arg) {\r\n        // snake_case to camelCase\r\n        var replacer = function (match) {\r\n            return match.replace(/\\_/g, '').toUpperCase();\r\n        };\r\n        return arg.replace(/\\_[a-z]/g, replacer);\r\n    },\r\n    'sk': function (arg) {\r\n        // snake_case to kebab-case\r\n        return arg.replace(/_/g, '-');\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (REGEX_LIST);\r\n\n\n//# sourceURL=webpack:///./src/REGEX_LIST.ts?");

/***/ }),

/***/ "./src/convertCase.ts":
/*!****************************!*\
  !*** ./src/convertCase.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _REGEX_LIST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./REGEX_LIST */ \"./src/REGEX_LIST.ts\");\n\r\n/**\r\n * method\r\n * @param params {object}\r\n * @param params.input {string} - input string\r\n * @param params.type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)\r\n * @param params.is_constructor  {boolean} - is Constructor (Capitalize the 1st letter)\r\n */\r\nwindow.convertCase = function (params) {\r\n    var return_string = '';\r\n    return_string = _REGEX_LIST__WEBPACK_IMPORTED_MODULE_0__[\"default\"][params.type](params.input);\r\n    // is_constructor option\r\n    if (params.is_constructor === true && (params.type === 'kc' || params.type === 'sc')) {\r\n        return_string = return_string.charAt(0).toUpperCase() + return_string.slice(1);\r\n    }\r\n    return return_string;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/convertCase.ts?");

/***/ })

/******/ });
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
eval("__webpack_require__.r(__webpack_exports__);\nvar REGEX_LIST = {\r\n    'ck': function (arg) {\r\n        // camelCase to kebab-case\r\n        return arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\r\n    },\r\n    'cs': function (arg) {\r\n        // camelCase to snake_case \r\n        return arg.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();\r\n    },\r\n    'kc': function (arg) {\r\n        // kebab-case to camelCase\r\n        var replacer = function (match) {\r\n            return match.replace(/\\-/g, '').toUpperCase();\r\n        };\r\n        return arg.replace(/\\-[a-z]/g, replacer);\r\n    },\r\n    'ks': function (arg) {\r\n        // kebab-case to snake_case\r\n        return arg.replace(/\\-/g, '_');\r\n    },\r\n    'sc': function (arg) {\r\n        // snake_case to camelCase\r\n        var replacer = function (match) {\r\n            return match.replace(/\\_/g, '').toUpperCase();\r\n        };\r\n        return arg.replace(/\\_[a-z]/g, replacer);\r\n    },\r\n    'sk': function (arg) {\r\n        // snake_case to kebab-case\r\n        return arg.replace(/_/g, '-');\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (REGEX_LIST);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUkVHRVhfTElTVC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9SRUdFWF9MSVNULnRzPzY2NDkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUkVHRVhfTElTVCA9IHtcclxuICAgICdjaycgOihhcmc6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIGNhbWVsQ2FzZSB0byBrZWJhYi1jYXNlXHJcbiAgICAgICAgcmV0dXJuIGFyZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfSxcclxuICAgICdjcycgOihhcmc6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIGNhbWVsQ2FzZSB0byBzbmFrZV9jYXNlIFxyXG4gICAgICAgIHJldHVybiBhcmcucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxXyQyJykudG9Mb3dlckNhc2UoKTtcclxuICAgIH0sXHJcbiAgICAna2MnIDooYXJnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBrZWJhYi1jYXNlIHRvIGNhbWVsQ2FzZVxyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoL1xcLS9nLCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZy5yZXBsYWNlKC9cXC1bYS16XS9nLCByZXBsYWNlcik7XHJcbiAgICB9LFxyXG4gICAgJ2tzJyA6KGFyZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8ga2ViYWItY2FzZSB0byBzbmFrZV9jYXNlXHJcbiAgICAgICAgcmV0dXJuIGFyZy5yZXBsYWNlKC9cXC0vZywgJ18nKTtcclxuICAgIH0sXHJcbiAgICAnc2MnIDooYXJnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBzbmFrZV9jYXNlIHRvIGNhbWVsQ2FzZVxyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VyID0gZnVuY3Rpb24gKG1hdGNoOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoL1xcXy9nLCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZy5yZXBsYWNlKC9cXF9bYS16XS9nLCByZXBsYWNlcik7XHJcbiAgICB9LFxyXG4gICAgJ3NrJyA6KGFyZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gc25ha2VfY2FzZSB0byBrZWJhYi1jYXNlXHJcbiAgICAgICAgcmV0dXJuIGFyZy5yZXBsYWNlKC9fL2csICctJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSRUdFWF9MSVNUOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/REGEX_LIST.ts\n");

/***/ }),

/***/ "./src/convertCase.ts":
/*!****************************!*\
  !*** ./src/convertCase.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _REGEX_LIST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./REGEX_LIST */ \"./src/REGEX_LIST.ts\");\n\r\n/**\r\n * method\r\n * @param params {object}\r\n * @param params.input {string} - input string\r\n * @param params.type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)\r\n * @param params.isConstructor  {boolean} - is Constructor (Capitalize the 1st letter)\r\n */\r\nwindow.convertCase = function (params) {\r\n    var return_string = _REGEX_LIST__WEBPACK_IMPORTED_MODULE_0__[\"default\"][params.type](params.input);\r\n    // isConstructor option\r\n    if (params.isConstructor === true && (params.type === 'kc' || params.type === 'sc')) {\r\n        return_string = return_string.charAt(0).toUpperCase() + return_string.slice(1);\r\n    }\r\n    return return_string;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udmVydENhc2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydENhc2UudHM/YmZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBjb252ZXJ0Q2FzZShwYXJhbXMpOiB2b2lkO1xyXG59XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogV2luZG93O1xyXG5cclxuaW1wb3J0IFJFR0VYX0xJU1QgZnJvbSAnLi9SRUdFWF9MSVNUJztcclxuXHJcbi8qKlxyXG4gKiBtZXRob2RcclxuICogQHBhcmFtIHBhcmFtcyB7b2JqZWN0fVxyXG4gKiBAcGFyYW0gcGFyYW1zLmlucHV0IHtzdHJpbmd9IC0gaW5wdXQgc3RyaW5nXHJcbiAqIEBwYXJhbSBwYXJhbXMudHlwZSAge3N0cmluZ30gLSB0eXBlIG9mIGV4Y2hhbmdlIChjcyxjayxzYyxzayxrcyxrYylcclxuICogQHBhcmFtIHBhcmFtcy5pc0NvbnN0cnVjdG9yICB7Ym9vbGVhbn0gLSBpcyBDb25zdHJ1Y3RvciAoQ2FwaXRhbGl6ZSB0aGUgMXN0IGxldHRlcilcclxuICovXHJcbndpbmRvdy5jb252ZXJ0Q2FzZSA9IChwYXJhbXM6IGFueSkgPT4ge1xyXG5cclxuICAgIGxldCByZXR1cm5fc3RyaW5nID0gUkVHRVhfTElTVFtwYXJhbXMudHlwZV0ocGFyYW1zLmlucHV0KTtcclxuICAgIC8vIGlzQ29uc3RydWN0b3Igb3B0aW9uXHJcbiAgICBpZiAocGFyYW1zLmlzQ29uc3RydWN0b3IgPT09IHRydWUgJiYgKHBhcmFtcy50eXBlID09PSAna2MnIHx8IHBhcmFtcy50eXBlID09PSAnc2MnKSkge1xyXG4gICAgICAgIHJldHVybl9zdHJpbmcgPSByZXR1cm5fc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmV0dXJuX3N0cmluZy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0dXJuX3N0cmluZztcclxuXHJcbn0iXSwibWFwcGluZ3MiOiJBQU1BO0FBQUE7QUFBQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/convertCase.ts\n");

/***/ })

/******/ });
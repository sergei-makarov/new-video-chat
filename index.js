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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;

var icon24 = '<g id="icon-24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n'
    + '        <g id="icon-48" transform="translate(1.000000, 2.000000)" fill="currentColor" fill-rule="nonzero">\n'
    + '            <path d="m467 143h-68.109c-26.035-82.786-103.501-143-194.769-143-112.553 0-204.122 91.569-204.122 204.122 0 39.168 11.028 76.924 31.969 109.698l-31.038 83.98c-2.03 5.493-.678 11.666 3.463 15.807 2.864 2.864 6.699 4.394 10.609 4.394 1.744 0 3.503-.305 5.198-.931l88.229-32.61c18.364 9.756 38.141 16.618 58.57 20.386v13.154c0 24.813 20.187 45 45 45h212.583l63.61 46.142c2.61 1.893 5.701 2.858 8.809 2.858 2.327 0 4.663-.541 6.813-1.638 5.023-2.561 8.185-7.723 8.185-13.362v-309c0-24.813-20.187-45-45-45zm-357.32 210.007c-1.754 0-3.516.308-5.2.93l-64.113 23.696 22.387-60.573c1.699-4.596 1.045-9.731-1.75-13.756-20.282-29.208-31.004-63.505-31.004-99.182 0-96.011 78.111-174.122 174.122-174.122s174.122 78.11 174.122 174.122c0 96.011-78.111 174.121-174.122 174.121-30.573 0-60.635-8.031-86.938-23.225-2.309-1.333-4.899-2.011-7.504-2.011zm372.32 114.582-43.742-31.73c-2.561-1.857-5.644-2.858-8.808-2.858h-217.45c-8.271 0-15-6.729-15-15v-9.893c2.371.083 4.744.135 7.121.135 112.553 0 204.122-91.568 204.122-204.121 0-10.579-.81-20.972-2.369-31.122h61.126c8.271 0 15 6.729 15 15z"/><path d="m260.078 250.862 41.017 30.266c2.629 1.94 5.759 2.93 8.908 2.93 2.306 0 4.623-.531 6.758-1.61 5.053-2.551 8.24-7.729 8.24-13.39v-120.115c0-5.661-3.187-10.839-8.24-13.39-5.054-2.552-11.113-2.041-15.667 1.32l-41.017 30.266c-4.095-19.473-21.403-34.139-42.077-34.139h-96c-23.71 0-43 19.29-43 43v66c0 23.71 19.29 43 43 43h96c20.674.001 37.982-14.665 42.078-34.138zm34.922-11.514-34-25.089v-10.517l34-25.089zm-186 2.653v-66c0-7.168 5.832-13 13-13h96c7.168 0 13 5.832 13 13v66c0 7.168-5.832 13-13 13h-96c-7.168 0-13-5.832-13-13z"/>\n'
    + '        </g>\n'
    + '    </g>';
miro.onReady(function () { return __awaiter(_this, void 0, void 0, function () {
    var params;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                miro.initialize({
                    extensionPoints: {
                        bottomBar: function () { return __awaiter(_this, void 0, void 0, function () {
                            var permissions, canEdit, authorized;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, miro.currentUser.getCurrentBoardPermissions()];
                                    case 1:
                                        permissions = _a.sent();
                                        canEdit = permissions.findIndex(function (p) { return p === 'EDIT_CONTENT'; }) !== -1;
                                        return [4 /*yield*/, miro.isAuthorized()];
                                    case 2:
                                        authorized = _a.sent();
                                        if (authorized && canEdit) {
                                            return [2 /*return*/, {
                                                    title: 'Prototype',
                                                    svgIcon: icon24,
                                                    onClick: function () {
                                                        miro.board.ui.openBottomPanel('bottom-panel.html', { width: config__WEBPACK_IMPORTED_MODULE_0__["EDIT_WIDTH"] });
                                                    },
                                                }];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                    },
                });
                return [4 /*yield*/, miro.board.__getParamsFromURL()];
            case 1:
                params = _a.sent();
                if (params.runPrototyping) {
                    miro.showNotification('Enter prototyping mode...');
                    miro.addListener('ALL_WIDGETS_LOADED', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            miro.__setRuntimeState({ enterPrototypingMode: true });
                            miro.board.ui.openBottomPanel('bottom-panel.html');
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
        }
    });
}); });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_WIDTH", function() { return EDIT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_WIDTH", function() { return PLAY_WIDTH; });
var APP_ID = '3074457347180096573';
var EDIT_WIDTH = 280;
var PLAY_WIDTH = 320;


/***/ })
/******/ ]);
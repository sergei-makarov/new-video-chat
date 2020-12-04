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
/* harmony import */ var helpers_break_state_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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


var icon24 = '<svg></svg>';
function openModal() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, miro.board.ui.openModal(Object(config__WEBPACK_IMPORTED_MODULE_0__["normalizePath"])('coffee-break-modal.html'), {
                        fullscreen: true
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
miro.onReady(function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, miro.initialize({
                    extensionPoints: {
                        bottomBar: function () { return __awaiter(_this, void 0, void 0, function () {
                            var authorized;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, miro.isAuthorized()];
                                    case 1:
                                        authorized = _a.sent();
                                        if (authorized) {
                                            return [2 /*return*/, {
                                                    title: 'Coffee break',
                                                    svgIcon: icon24,
                                                    onClick: openModal,
                                                }];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                    },
                })];
            case 1:
                _a.sent();
                document.addEventListener(config__WEBPACK_IMPORTED_MODULE_0__["STATE_CHANGED_EVENT_NAME"], function (e) {
                    var casted = e;
                    if (!casted.detail) {
                        return;
                    }
                    if (casted.detail.isBreakEnabled) {
                        openModal();
                    }
                    else {
                        miro.board.ui.closeModal();
                    }
                });
                return [4 /*yield*/, helpers_break_state_helper__WEBPACK_IMPORTED_MODULE_1__["default"].instance.init()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_PREFIX", function() { return PATH_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_CHANGED_EVENT_NAME", function() { return STATE_CHANGED_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_UPDATE_DELAY", function() { return STATE_UPDATE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_ROLES", function() { return ALLOWED_ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
var PATH_PREFIX = 'new-video-chat';
var APP_ID = '3074457352186897321';
var STATE_CHANGED_EVENT_NAME = 'break_state_changed';
var STATE_UPDATE_DELAY = 500;
var ALLOWED_ROLES = ['owner'];
function normalizePath(htmlName, withoutSlash) {
    if (withoutSlash === void 0) { withoutSlash = false; }
    return "" + PATH_PREFIX + (withoutSlash ? '' : '/') + htmlName;
}


/***/ }),
/* 2 */
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

var BreakStateHelper = /** @class */ (function () {
    function BreakStateHelper() {
        this.isBreakEnabled = false;
    }
    BreakStateHelper.prototype.getIsBreakEnabled = function () {
        return this.isBreakEnabled;
    };
    Object.defineProperty(BreakStateHelper, "instance", {
        get: function () {
            if (!BreakStateHelper.initInstance) {
                BreakStateHelper.initInstance = new BreakStateHelper();
            }
            return BreakStateHelper.initInstance;
        },
        enumerable: true,
        configurable: true
    });
    BreakStateHelper.prototype.getStateWidget = function () {
        return __awaiter(this, void 0, Promise, function () {
            var widgets, i, metadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, miro.board.widgets.get({
                            type: 'sticker',
                            x: 0,
                            y: 0
                        })];
                    case 1:
                        widgets = _a.sent();
                        if (!widgets || !widgets.length) {
                            return [2 /*return*/, undefined];
                        }
                        for (i = 0; i < widgets.length; i++) {
                            metadata = widgets[i].metadata;
                            if (!metadata) {
                                continue;
                            }
                            if (!metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]) {
                                continue;
                            }
                            return [2 /*return*/, widgets[i]];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    BreakStateHelper.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reloadState()];
                    case 1:
                        _a.sent();
                        setInterval(function () { _this.reloadState(); }, config__WEBPACK_IMPORTED_MODULE_0__["STATE_UPDATE_DELAY"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    BreakStateHelper.prototype.reloadState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStateWidget()];
                    case 1:
                        widget = _a.sent();
                        if (!widget || !widget.metadata || !widget.metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]) {
                            this.setBreakEnabled(false);
                            return [2 /*return*/];
                        }
                        this.setBreakEnabled(!!widget.metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]].enabled);
                        return [2 /*return*/];
                }
            });
        });
    };
    BreakStateHelper.prototype.setBreakEnabled = function (value) {
        if (value === this.isBreakEnabled) {
            return;
        }
        this.isBreakEnabled = value;
        this.raise();
    };
    BreakStateHelper.prototype.raise = function () {
        console.warn("isBreakEnabled changed from " + !this.isBreakEnabled + " to " + this.isBreakEnabled);
        document.dispatchEvent(new CustomEvent(config__WEBPACK_IMPORTED_MODULE_0__["STATE_CHANGED_EVENT_NAME"], {
            detail: { isBreakEnabled: this.isBreakEnabled }
        }));
    };
    BreakStateHelper.prototype.turnOn = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a, widget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getStateWidget()];
                    case 1:
                        widget = _b.sent();
                        if (widget && widget.metadata && widget.metadata.enabled) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, miro.board.widgets.create({
                                type: 'sticker',
                                x: 0,
                                y: 0,
                                width: 1000,
                                height: 1000,
                                metadata: (_a = {},
                                    _a[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]] = {
                                        creator: 'ME!',
                                        enabled: true
                                    },
                                    _a)
                            })];
                    case 2:
                        _b.sent();
                        this.setBreakEnabled(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    BreakStateHelper.prototype.turnOff = function () {
        return __awaiter(this, void 0, Promise, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setBreakEnabled(false);
                        return [4 /*yield*/, this.getStateWidget()];
                    case 1:
                        widget = _a.sent();
                        if (!widget) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, miro.board.widgets.deleteById(widget.id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BreakStateHelper.amIFacilitator = function () {
        return true;
    };
    return BreakStateHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (BreakStateHelper);


/***/ })
/******/ ]);
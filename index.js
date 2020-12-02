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


var icon24 = '<svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 60 53" width="512"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="081---Talking-About-Coffee" fill="rgb(0,0,0)" fill-rule="nonzero"><path id="Shape" d="m30 0c-16.542 0-30 11.663-30 26s13.458 26 30 26c4.4378861.0200348 8.835242-.8448182 12.935-2.544l14.124 3.138c.1455104.0320018.2940132.0484276.443.049.6418568-.0027313 1.2434029-.3133579 1.6172455-.8351139s.4745517-1.1912365.2707545-1.7998861l-3.582-10.737c2.7124955-3.8953693 4.1746646-8.5242924 4.192-13.271 0-14.337-13.458-26-30-26zm23.887 38.528c-.1871516.2607855-.2377397.5955598-.136.9l3.741 11.214-14.435-3.208c-.0712406-.0158957-.1440075-.0239437-.217-.024-.1354358.0003101-.2694259.0278563-.394.081-3.9343539 1.6756953-8.1697078 2.529504-12.446 2.509-15.439 0-28-10.767-28-24s12.561-24 28-24 28 10.767 28 24c-.020861 4.5043861-1.4599475 8.8877745-4.113 12.528z"/><path id="Shape" d="m25.236 6.4c.5456573-.09278384.9127838-.61034267.82-1.156s-.6103427-.91278384-1.156-.82c-12.109 2.044-20.9 11.117-20.9 21.576 0 .5522847.44771525 1 1 1s1-.4477153 1-1c0-9.479 8.09-17.724 19.236-19.6z"/><circle id="Oval" cx="29" cy="5" r="1"/><path id="Shape" d="m49.657 25.326c-1.3492942-.936618-3.0355581-1.2494016-4.631-.859.015-.52.014-1 0-1.437h-.026c0-.01 0-.019 0-.029 0-1.211-.612-2.981-3.53-4.533-.3159811-.1753013-.7019564-.1664984-1.0096168.0230264-.3076605.1895248-.4891427.5302866-.4747131.8913495.0144297.3610629.2225263.6862554.5443299.8506241 1.593.847 2.47 1.83 2.47 2.767 0 2.365-5.544 5-13.5 5-3.5954223.0983618-7.1709958-.5648164-10.492-1.946-.0393819-.020773-.0801445-.0388155-.122-.054-1.807-.877-2.846-1.934-2.879-2.947v-.053c.0004641-.007326.0004641-.014674 0-.022.018-1.219 1.543-2.519 4.091-3.483.5166624-.1952327.7772327-.7723376.582-1.289s-.7723376-.7772327-1.289-.582c-3.478 1.314-5.391 3.223-5.391 5.376 0 .025.007.048.008.072-.076 3.413.414 9.69 4.471 13.846 2.645 2.709 6.358 4.082 11.04 4.082s8.4-1.374 11.04-4.083c.5385939-.5554193 1.0265304-1.15781 1.458-1.8.471285-.2425027.9716897-.4236431 1.489-.539.223-.052.462-.1.711-.157 2.321-.5 6.206-1.338 6.725-5.189.3212513-1.4391734-.1720487-2.9386521-1.285-3.906zm-20.138 13.674c-4.123 0-7.355-1.171-9.609-3.479-2.1757795-2.4667525-3.4871588-5.5761435-3.735-8.856 2.653 2.027 7.512 3.335 13.325 3.335 5.846 0 10.726-1.322 13.37-3.369-.2455815 3.2918497-1.5595254 6.413432-3.742 8.89-2.254 2.308-5.487 3.479-9.609 3.479zm19.441-10.035c-.307 2.278-2.426 2.911-5.165 3.5l-.387.085c.7875067-1.9209633 1.2862481-3.9479424 1.48-6.015 1.1599891-.4034301 2.4382972-.2803473 3.5.337.5508105.545425.7688485 1.3432458.572 2.093z"/><path id="Shape" d="m23.324 21.429c-.8162976.6051853-1.3054306 1.5550048-1.324 2.571 0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-.459.2-.656.676-1.1.8309216-.5928895 1.3241516-1.5507411 1.3241516-2.5715s-.49323-1.9786105-1.3241516-2.5715c-.481-.441-.676-.638-.676-1.1s.2-.654.676-1.095c.8142988-.6028609 1.3032673-1.549037 1.324-2.562 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c0 .457-.2.653-.675 1.094-.8309032.5922319-1.3242151 1.5496379-1.3242151 2.57s.4933119 1.9777681 1.3242151 2.57c.481.441.676.638.676 1.1s-.196.654-.677 1.095z"/><path id="Shape" d="m29.324 21.429c-.8162976.6051853-1.3054306 1.5550048-1.324 2.571 0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-.459.2-.656.676-1.1.8309216-.5928895 1.3241516-1.5507411 1.3241516-2.5715s-.49323-1.9786105-1.3241516-2.5715c-.481-.441-.676-.638-.676-1.1s.2-.654.676-1.095c.8142988-.6028609 1.3032673-1.549037 1.324-2.562 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c0 .457-.2.653-.675 1.094-.8309032.5922319-1.3242151 1.5496379-1.3242151 2.57s.4933119 1.9777681 1.3242151 2.57c.481.441.676.638.676 1.1s-.196.654-.677 1.095z"/><path id="Shape" d="m35.324 21.429c-.8162976.6051853-1.3054306 1.5550048-1.324 2.571 0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-.459.2-.656.676-1.1.8309216-.5928895 1.3241516-1.5507411 1.3241516-2.5715s-.49323-1.9786105-1.3241516-2.5715c-.481-.441-.676-.638-.676-1.1s.2-.654.676-1.095c.8142988-.6028609 1.3032673-1.549037 1.324-2.562 0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c0 .457-.2.653-.675 1.094-.8309032.5922319-1.3242151 1.5496379-1.3242151 2.57s.4933119 1.9777681 1.3242151 2.57c.481.441.676.638.676 1.1s-.196.654-.677 1.095z"/></g></g></svg>';
miro.onReady(function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        miro.initialize({
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
                                            onClick: function () {
                                                miro.board.ui.openModal(Object(config__WEBPACK_IMPORTED_MODULE_0__["normalizePath"])('coffee-break-modal.html'), {
                                                    width: 800,
                                                    height: 600
                                                });
                                            },
                                        }];
                                }
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
        });
        helpers_break_state_helper__WEBPACK_IMPORTED_MODULE_1__["default"].instance.init();
        return [2 /*return*/];
    });
}); });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_PREFIX", function() { return PATH_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
var PATH_PREFIX = 'new-video-chat/';
var APP_ID = '3074457352186897321';
function normalizePath(htmlName) {
    return PATH_PREFIX + "/" + htmlName;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_CHANGED_EVENT_NAME", function() { return STATE_CHANGED_EVENT_NAME; });
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

var STATE_CHANGED_EVENT_NAME = 'break_state_changed';
var BreakStateHelper = /** @class */ (function () {
    function BreakStateHelper() {
        this.isBreakEnabled = false;
    }
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
        this.isBreakEnabled = value;
        this.raise();
    };
    BreakStateHelper.prototype.raise = function () {
        console.warn("isBreakEnabled changed from " + !this.isBreakEnabled + " to " + this.isBreakEnabled);
        document.dispatchEvent(new CustomEvent(STATE_CHANGED_EVENT_NAME, {
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
                    case 0: return [4 /*yield*/, this.getStateWidget()];
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
    return BreakStateHelper;
}());
/* harmony default export */ __webpack_exports__["default"] = (BreakStateHelper);


/***/ })
/******/ ]);
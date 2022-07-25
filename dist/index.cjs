"use strict";
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
import regeneratorRuntime from "regenerator-runtime";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
    return function __init() {
        return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
};
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
    "node_modules/tsup/assets/cjs_shims.js": function() {}
});
// node_modules/cookie/index.js
var require_cookie = __commonJS({
    "node_modules/cookie/index.js": function(exports) {
        "use strict";
        var parse = function parse(str, options) {
            if (typeof str !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var obj = {};
            var opt = options || {};
            var pairs = str.split(";");
            var dec = opt.decode || decode;
            for(var i = 0; i < pairs.length; i++){
                var pair = pairs[i];
                var index = pair.indexOf("=");
                if (index < 0) {
                    continue;
                }
                var key = pair.substring(0, index).trim();
                if (void 0 == obj[key]) {
                    var val = pair.substring(index + 1, pair.length).trim();
                    if (val[0] === '"') {
                        val = val.slice(1, -1);
                    }
                    obj[key] = tryDecode(val, dec);
                }
            }
            return obj;
        };
        var serialize = function serialize(name, val, options) {
            var opt = options || {};
            var enc = opt.encode || encode;
            if (typeof enc !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!fieldContentRegExp.test(name)) {
                throw new TypeError("argument name is invalid");
            }
            var value = enc(val);
            if (value && !fieldContentRegExp.test(value)) {
                throw new TypeError("argument val is invalid");
            }
            var str = name + "=" + value;
            if (null != opt.maxAge) {
                var maxAge = opt.maxAge - 0;
                if (isNaN(maxAge) || !isFinite(maxAge)) {
                    throw new TypeError("option maxAge is invalid");
                }
                str += "; Max-Age=" + Math.floor(maxAge);
            }
            if (opt.domain) {
                if (!fieldContentRegExp.test(opt.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                str += "; Domain=" + opt.domain;
            }
            if (opt.path) {
                if (!fieldContentRegExp.test(opt.path)) {
                    throw new TypeError("option path is invalid");
                }
                str += "; Path=" + opt.path;
            }
            if (opt.expires) {
                if (typeof opt.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                str += "; Expires=" + opt.expires.toUTCString();
            }
            if (opt.httpOnly) {
                str += "; HttpOnly";
            }
            if (opt.secure) {
                str += "; Secure";
            }
            if (opt.sameSite) {
                var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
                switch(sameSite){
                    case true:
                        str += "; SameSite=Strict";
                        break;
                    case "lax":
                        str += "; SameSite=Lax";
                        break;
                    case "strict":
                        str += "; SameSite=Strict";
                        break;
                    case "none":
                        str += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return str;
        };
        var tryDecode = function tryDecode(str, decode2) {
            try {
                return decode2(str);
            } catch (e) {
                return str;
            }
        };
        init_cjs_shims();
        exports.parse = parse;
        exports.serialize = serialize;
        var decode = decodeURIComponent;
        var encode = encodeURIComponent;
        var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    }
});
// node_modules/cookies-next/lib/index.js
var require_lib = __commonJS({
    "node_modules/cookies-next/lib/index.js": function(exports) {
        "use strict";
        init_cjs_shims();
        var __assign = exports && exports.__assign || function() {
            __assign = Object.assign || function(t) {
                for(var s, i = 1, n = arguments.length; i < n; i++){
                    s = arguments[i];
                    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __rest = exports && exports.__rest || function(s, e) {
            var t = {};
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.checkCookies = exports.hasCookie = exports.removeCookies = exports.deleteCookie = exports.setCookies = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
        var cookie_1 = require_cookie();
        var isClientSide = function isClientSide() {
            return typeof window !== "undefined";
        };
        var processValue = function processValue(value) {
            if (value === "true") return true;
            if (value === "false") return false;
            if (value === "undefined") return void 0;
            if (value === "null") return null;
            return value;
        };
        var stringify = function stringify(value) {
            if (value === void 0) {
                value = "";
            }
            try {
                var result = JSON.stringify(value);
                return /^[\{\[]/.test(result) ? result : value;
            } catch (e) {
                return value;
            }
        };
        var decode = function decode(str) {
            if (!str) return str;
            return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        };
        var getCookies = function getCookies(options) {
            var req;
            if (options) req = options.req;
            if (!isClientSide()) {
                if (req && req.cookies) return req.cookies;
                if (req && req.headers && req.headers.cookie) return (0, cookie_1.parse)(req.headers.cookie);
                return {};
            }
            var _cookies = {};
            var documentCookies = document.cookie ? document.cookie.split("; ") : [];
            for(var i = 0, len = documentCookies.length; i < len; i++){
                var cookieParts = documentCookies[i].split("=");
                var _cookie = cookieParts.slice(1).join("=");
                var name_1 = cookieParts[0];
                _cookies[name_1] = _cookie;
            }
            return _cookies;
        };
        exports.getCookies = getCookies;
        var getCookie2 = function getCookie2(key, options) {
            var _cookies = (0, exports.getCookies)(options);
            var value = _cookies[key];
            if (value === void 0) return void 0;
            return processValue(decode(value));
        };
        exports.getCookie = getCookie2;
        var setCookie2 = function setCookie2(key, data, options) {
            var _cookieOptions;
            var _req;
            var _res;
            if (options) {
                var req = options.req, res = options.res, _options = __rest(options, [
                    "req",
                    "res"
                ]);
                _req = req;
                _res = res;
                _cookieOptions = _options;
            }
            var cookieStr = (0, cookie_1.serialize)(key, stringify(data), __assign({
                path: "/"
            }, _cookieOptions));
            if (!isClientSide()) {
                if (_res && _req) {
                    var currentCookies = _res.getHeader("Set-Cookie");
                    if (!Array.isArray(currentCookies)) {
                        currentCookies = !currentCookies ? [] : [
                            String(currentCookies)
                        ];
                    }
                    _res.setHeader("Set-Cookie", currentCookies.concat(cookieStr));
                    if (_req && _req.cookies) {
                        var _cookies = _req.cookies;
                        data === "" ? delete _cookies[key] : _cookies[key] = stringify(data);
                    }
                    if (_req && _req.headers && _req.headers.cookie) {
                        var _cookies = (0, cookie_1.parse)(_req.headers.cookie);
                        data === "" ? delete _cookies[key] : _cookies[key] = stringify(data);
                        _req.headers.cookie = Object.entries(_cookies).reduce(function(accum, item) {
                            return accum.concat("".concat(item[0], "=").concat(item[1], ";"));
                        }, "");
                    }
                }
            } else {
                document.cookie = cookieStr;
            }
        };
        exports.setCookie = setCookie2;
        var setCookies = function setCookies(key, data, options) {
            console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead.");
            return (0, exports.setCookie)(key, data, options);
        };
        exports.setCookies = setCookies;
        var deleteCookie = function deleteCookie(key, options) {
            return (0, exports.setCookie)(key, "", __assign(__assign({}, options), {
                maxAge: -1
            }));
        };
        exports.deleteCookie = deleteCookie;
        var removeCookies = function removeCookies(key, options) {
            console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead.");
            return (0, exports.deleteCookie)(key, options);
        };
        exports.removeCookies = removeCookies;
        var hasCookie = function hasCookie(key, options) {
            if (!key) return false;
            var cookie = (0, exports.getCookies)(options);
            return cookie.hasOwnProperty(key);
        };
        exports.hasCookie = hasCookie;
        var checkCookies = function checkCookies(key, options) {
            console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead.");
            return (0, exports.hasCookie)(key, options);
        };
        exports.checkCookies = checkCookies;
    }
});
// src/index.ts
var src_exports = {};
__export(src_exports, {
    EvolvClient: function() {
        return EvolvClient;
    },
    EvolvContext: function() {
        return EvolvContext;
    },
    EvolvProvider: function() {
        return EvolvProvider;
    },
    generateId: function() {
        return generateId;
    },
    useEvolvClient: function() {
        return useEvolvClient;
    },
    useVariable: function() {
        return useVariable;
    },
    withEvolv: function() {
        return withEvolv;
    },
    withEvolvSSR: function() {
        return withEvolvSSR;
    },
    withEvolvServer: function() {
        return withEvolvServer;
    }
});
module.exports = __toCommonJS(src_exports);
init_cjs_shims();
// src/components/index.ts
init_cjs_shims();
// src/components/EvolvContext.tsx
init_cjs_shims();
var import_react = __toESM(require("react"), 1);
var defaultStore = {};
var EvolvContext = import_react.default.createContext(defaultStore);
var EvolvProvider = function(param) {
    var children = param.children, client = param.client;
    return /* @__PURE__ */ import_react.default.createElement(EvolvContext.Provider, {
        value: {
            client: client
        }
    }, children);
};
var useEvolvClient = function() {
    var client = (0, import_react.useContext)(EvolvContext);
    return client;
};
// src/components/withEvolv.tsx
init_cjs_shims();
var React2 = __toESM(require("react"), 1);
function withEvolvServer(options) {
    return function withEvolvServerHoc(WrappedComponent) {
        var WithEvolvServer = /*#__PURE__*/ function(_Component) {
            _inherits(WithEvolvServer, _Component);
            var _super = _createSuper(WithEvolvServer);
            function WithEvolvServer() {
                _classCallCheck(this, WithEvolvServer);
                return _super.apply(this, arguments);
            }
            _createClass(WithEvolvServer, [
                {
                    key: "render",
                    value: function render() {
                        return /* @__PURE__ */ React2.createElement(WrappedComponent, _objectSpread({}, this.props));
                    }
                }
            ], [
                {
                    key: "getInitialProps",
                    value: function getInitialProps(ctx) {
                        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                            var clientInstance, componentProps;
                            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        _ctx.next = 2;
                                        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                                            var client;
                                            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                                                while(1)switch(_ctx.prev = _ctx.next){
                                                    case 0:
                                                        client = new EvolvClient(_objectSpreadProps(_objectSpread({}, options), {
                                                            isServer: true,
                                                            serverContext: ctx
                                                        }));
                                                        _ctx.next = 3;
                                                        return client.getKeys();
                                                    case 3:
                                                        return _ctx.abrupt("return", client);
                                                    case 4:
                                                    case "end":
                                                        return _ctx.stop();
                                                }
                                            }, _callee);
                                        }))();
                                    case 2:
                                        clientInstance = _ctx.sent;
                                        componentProps = {};
                                        if (!WrappedComponent.getInitialProps) {
                                            _ctx.next = 8;
                                            break;
                                        }
                                        _ctx.next = 7;
                                        return WrappedComponent.getInitialProps(ctx);
                                    case 7:
                                        componentProps = _ctx.sent;
                                    case 8:
                                        return _ctx.abrupt("return", _objectSpread({
                                            loadedState: clientInstance.evolvState
                                        }, componentProps));
                                    case 9:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }))();
                    }
                }
            ]);
            return WithEvolvServer;
        }(React2.Component);
        return WithEvolvServer;
    };
}
function withEvolvSSR(options) {
    return function withEvolvSSRHoc(WrappedComponent) {
        var WithEvolvClientSSR = function WithEvolvClientSSR(props) {
            var ref = _slicedToArray(React2.useState(function() {
                return new EvolvClient(_objectSpreadProps(_objectSpread({}, options), {
                    initialState: props.loadedState || {}
                }));
            }), 1), evolvClient = ref[0];
            return /* @__PURE__ */ React2.createElement(EvolvProvider, {
                client: evolvClient
            }, /* @__PURE__ */ React2.createElement(WrappedComponent, _objectSpread({}, props)));
        };
        ;
        return withEvolvServer(options)(WithEvolvClientSSR);
    };
}
function withEvolv(options) {
    return function withEvolvHoc(WrappedComponent) {
        var WithEvolv = function WithEvolv(props) {
            var ref = _slicedToArray(React2.useState(function() {
                return new EvolvClient(_objectSpreadProps(_objectSpread({}, options), {
                    initialState: props.loadedState || {}
                }));
            }), 1), evolvClient = ref[0];
            return /* @__PURE__ */ React2.createElement(EvolvProvider, {
                client: evolvClient
            }, /* @__PURE__ */ React2.createElement(WrappedComponent, _objectSpread({}, props)));
        };
        ;
        return WithEvolv;
    };
}
// src/hooks/index.ts
init_cjs_shims();
// src/hooks/useVariable.ts
init_cjs_shims();
var import_react2 = require("react");
function useVariable(key, initialState) {
    var client = useEvolvClient().client;
    var ref = _slicedToArray((0, import_react2.useState)(client.evolvState[key] || initialState), 2), value = ref[0], setValue = ref[1];
    var initalSt = client.evolvState[key] || initialState;
    (0, import_react2.useEffect)(function() {
        client.subscribeToKey(key, function(result) {
            console.log(key, result);
            var newValue = result === void 0 ? initalSt : result;
            setValue(newValue);
        });
    }, [
        client,
        client.evolvState
    ]);
    return value;
}
// src/client/index.ts
init_cjs_shims();
// src/client/client.ts
init_cjs_shims();
var import_javascript_sdk = __toESM(require("@evolv/javascript-sdk"), 1);
var import_cookies_next = __toESM(require_lib(), 1);
var UID_COOKIE_KEY = "evolv:uid";
var CID_COOKIE_KEY = "evolv:cid";
var EvolvClient = function EvolvClient(options) {
    var _this = this;
    _classCallCheck(this, EvolvClient);
    this.evolvState = {};
    this.serverContext = null;
    this.setCidCookie = function() {
        _this.client.on("confirmed", function(type) {
            var ref, ref1, ref2, ref3, ref4;
            var cid = (ref = _this.client) === null || ref === void 0 ? void 0 : (ref1 = ref.context) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.remoteContext) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.confirmations) === null || ref3 === void 0 ? void 0 : (ref4 = ref3[0]) === null || ref4 === void 0 ? void 0 : ref4.cid;
            (0, import_cookies_next.setCookie)(CID_COOKIE_KEY, cid, {
                maxAge: 60 * 6 * 24
            });
        });
    };
    var _this1 = this;
    this.getKeys = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var keys, i, key;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return _this1.client.getActiveKeys();
                case 2:
                    keys = _ctx.sent;
                    if (!keys.current) {
                        _ctx.next = 13;
                        break;
                    }
                    i = 0;
                case 5:
                    if (!(i < keys.current.length)) {
                        _ctx.next = 13;
                        break;
                    }
                    key = keys.current[i];
                    _ctx.next = 9;
                    return _this1.client.get(key);
                case 9:
                    _this1.evolvState[key] = _ctx.sent;
                case 10:
                    i++;
                    _ctx.next = 5;
                    break;
                case 13:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    var _this2 = this;
    this.getVariableByKey = function() {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(key) {
            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        _ctx.next = 2;
                        return _this2.client.get(key);
                    case 2:
                        return _ctx.abrupt("return", _ctx.sent);
                    case 3:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
        return function(key) {
            return _ref.apply(this, arguments);
        };
    }();
    this.subscribeToKey = function(key, cb) {
        if (_this.subscribers[key]) {
            _this.subscribers[key].push(cb);
        } else {
            _this.subscribers[key] = [
                cb
            ];
        }
        if (!_this.isServer && _this.evolvState[key]) {
            cb(_this.evolvState[key]);
        }
        _this.listenToKeys();
    };
    this.listenToKeys = function() {
        Object.keys(_this.subscribers).forEach(function(key) {
            _this.client.get(key).listen(function(result) {
                _this.subscribers[key].forEach(function(c) {
                    return c(result);
                });
            });
        });
    };
    this.emit = function(event) {
        _this.client.emit(event);
    };
    this.options = options;
    this.isServer = options.isServer || false;
    this.environmentId = options.environmentId;
    this.userId = options.userId;
    this.evolvState = options.initialState || {};
    this.serverContext = options.serverContext || {};
    this.subscribers = {};
    if (!options.environmentId || "".concat(options.environmentId) === "false" || "".concat(options.environmentId) === "null") {
        throw new Error("EvolvClient: Must pass 'environmentId'");
    }
    if ((!options.userId || "".concat(options.userId) === "false" || "".concat(options.userId) === "null") && !options.generateUid && !this.isServer) {
        throw new Error("EvolvClient: Must pass 'userId'");
    }
    this.client = new import_javascript_sdk.default({
        environment: this.environmentId,
        autoConfirm: true,
        analytics: true,
        clientName: "react-sdk"
    });
    if (options.generateUid) {
        if (this.isServer) {
            var ref, ref1, ref2;
            this.userId = ((ref = this.serverContext) === null || ref === void 0 ? void 0 : (ref1 = ref.ctx) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.req) === null || ref2 === void 0 ? void 0 : ref2.cookies[UID_COOKIE_KEY]) || void 0;
        } else {
            this.userId = (0, import_cookies_next.getCookie)(UID_COOKIE_KEY);
        }
        if (!this.userId) {
            this.userId = generateId();
            (0, import_cookies_next.setCookie)(UID_COOKIE_KEY, this.userId, {
                maxAge: 60 * 6 * 24
            });
        }
    }
    this.client.initialize(this.userId, this.userId);
    this.setCidCookie();
};
function generateId() {
    var prefix = Math.round(Math.random() * 1e8);
    var date = Date.now();
    return "".concat(prefix, "_").concat(date);
}
// types/index.ts
init_cjs_shims();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    EvolvClient: EvolvClient,
    EvolvContext: EvolvContext,
    EvolvProvider: EvolvProvider,
    generateId: generateId,
    useEvolvClient: useEvolvClient,
    useVariable: useVariable,
    withEvolv: withEvolv,
    withEvolvSSR: withEvolvSSR,
    withEvolvServer: withEvolvServer
}); /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 

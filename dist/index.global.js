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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
(function() {
    var withEvolvServer = function withEvolvServer(options) {
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
    };
    var withEvolvSSR = function withEvolvSSR(options) {
        return function withEvolvSSRHoc(WrappedComponent) {
            function WithEvolvClientSSR(props) {
                var ref = _slicedToArray(React2.useState(function() {
                    return new EvolvClient(_objectSpreadProps(_objectSpread({}, options), {
                        initialState: props.loadedState || {}
                    }));
                }), 1), evolvClient = ref[0];
                return /* @__PURE__ */ React2.createElement(EvolvProvider, {
                    client: evolvClient
                }, /* @__PURE__ */ React2.createElement(WrappedComponent, _objectSpread({}, props)));
            }
            ;
            return withEvolvServer(options)(WithEvolvClientSSR);
        };
    };
    var withEvolv = function withEvolv(options) {
        return function withEvolvHoc(WrappedComponent) {
            function WithEvolv(props) {
                var ref = _slicedToArray(React2.useState(function() {
                    return new EvolvClient(_objectSpreadProps(_objectSpread({}, options), {
                        initialState: props.loadedState || {}
                    }));
                }), 1), evolvClient = ref[0];
                return /* @__PURE__ */ React2.createElement(EvolvProvider, {
                    client: evolvClient
                }, /* @__PURE__ */ React2.createElement(WrappedComponent, _objectSpread({}, props)));
            }
            ;
            return WithEvolv;
        };
    };
    var useVariable = function useVariable(key, initialState) {
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
    };
    var deepClone = function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    var isObject = function isObject(variable) {
        return typeof variable === "object" && variable !== null && !Array.isArray(variable);
    };
    var flatten = function flatten(map, filter2) {
        function recurse(current, parent_key) {
            var items = {};
            Object.keys(current).filter(filter2 || function() {
                return true;
            }).forEach(function(k) {
                var v = current[k];
                var new_key = parent_key ? parent_key + "." + k : k;
                if (isObject(v)) {
                    items = assign(items, recurse(current[k], new_key));
                } else {
                    items[new_key] = v;
                }
            });
            return items;
        }
        return recurse(map, "");
    };
    var flattenKeys = function flattenKeys(map, filter2) {
        function recurse(current, parent_key) {
            var items = [];
            Object.keys(current).filter(filter2 || function() {
                return true;
            }).forEach(function(k) {
                var v = current[k];
                var new_key = parent_key ? parent_key + "." + k : k;
                items.push(new_key);
                if (isObject(v)) {
                    items = items.concat(recurse(current[k], new_key));
                }
            });
            return items;
        }
        return recurse(map, "");
    };
    var removeValueForKey = function removeValueForKey(key, map) {
        function recurse(keys, index, map2) {
            var key2 = keys[index];
            if (index === keys.length - 1) {
                delete map2[key2];
                return true;
            }
            if (!(key2 in map2)) {
                return false;
            }
            var removed = recurse(keys, index + 1, map2[key2]);
            if (removed && Object.keys(map2[key2]).length === 0) {
                delete map2[key2];
            }
            return removed;
        }
        return recurse(key.split("."), 0, map);
    };
    var getValueForKey = function getValueForKey(key, map) {
        var value;
        var current = map;
        var keys = key.split(".");
        for(var i = 0; i < keys.length; i++){
            var k = keys[i];
            if (i === keys.length - 1) {
                value = current[k];
                break;
            }
            if (!(k in current)) {
                break;
            }
            current = current[k];
        }
        return value;
    };
    var setKeyToValue = function setKeyToValue(key, value, map) {
        var current = map;
        var keys = key.split(".");
        for(var i = 0; i < keys.length; i++){
            var k = keys[i];
            if (i === keys.length - 1) {
                current[k] = value;
                break;
            }
            if (!(k in current)) {
                current[k] = {};
            }
            current = current[k];
        }
        return value;
    };
    var expand = function expand(map) {
        var expanded = {};
        Object.keys(map).forEach(function(key) {
            var v = map[key];
            setKeyToValue(key, v, expanded);
        });
        return expanded;
    };
    var prune = function prune(map, active) {
        var pruned = {};
        active.forEach(function(key) {
            var keyParts = key.split(".");
            var current = map;
            for(var i = 0; i < keyParts.length; i++){
                var now = current[keyParts[i]];
                if (now) {
                    if (i === keyParts.length - 1) {
                        pruned[key] = now;
                        break;
                    }
                    current = now;
                } else {
                    break;
                }
            }
        });
        reattributePredicatedValues(pruned, active);
        return pruned;
    };
    var reattributePredicatedValues = function reattributePredicatedValues(pruned, active) {
        function reattribute(obj, _active, collected) {
            if (typeof obj !== "object" || obj === null) {
                return obj;
            }
            if (obj._predicated_values) {
                var predicatedKeyPrefix = collected.join(".");
                for(var i = 0; i < obj._predicated_values.length; i++){
                    if (_active.has(predicatedKeyPrefix + "." + obj._predicated_values[i]._predicate_assignment_id)) {
                        return obj._predicated_values[i]._value;
                    }
                }
                return null;
            }
            var keys = Object.keys(obj);
            for(var i1 = 0; i1 < keys.length; i1++){
                var key = keys[i1];
                var newCollected = collected.concat([
                    key
                ]);
                obj[key] = reattribute(obj[key], _active, newCollected);
            }
            return obj;
        }
        reattribute(pruned, active, []);
    };
    var filter = function filter(map, active) {
        var pruned = prune(map, active);
        return expand(pruned);
    };
    var assign = function assign(target, sources) {
        if (Object.assign) {
            return Object.assign.apply(void 0, arguments);
        }
        if (target === null || target === void 0) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var to = Object(target);
        for(var index = 1; index < arguments.length; index++){
            var nextSource = arguments[index];
            if (nextSource !== null && nextSource !== void 0) {
                for(var nextKey in nextSource){
                    if (nextSource.hasOwnProperty(nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
    var omitUndefined = function omitUndefined(obj) {
        return Object.keys(obj).reduce(function(acc, key) {
            if (obj[key] !== void 0) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    };
    var arraysEqual = // node_modules/@evolv/javascript-sdk/src/helpers/arrays.js
    function arraysEqual(a, b) {
        if (!Array.isArray(a) || !Array.isArray(b)) return false;
        if (a === b) return true;
        if (a.length !== b.length) return false;
        for(var i = 0; i < a.length; ++i){
            if (a[i] !== b[i]) return false;
        }
        return true;
    };
    var ensureScope = function ensureScope(scope) {
        if (scopedHandlers.has(scope)) {
            return;
        }
        scopedHandlers.set(scope, {});
        scopedOnceHandlers.set(scope, {});
        scopedPayloads.set(scope, {});
    };
    var destroyScope = function destroyScope(scope) {
        scopedHandlers.delete(scope);
        scopedOnceHandlers.delete(scope);
        scopedPayloads.delete(scope);
    };
    var waitFor = function waitFor(scope, it, handler) {
        ensureScope(scope);
        var handlers = scopedHandlers.get(scope);
        var payloads = scopedPayloads.get(scope);
        if (!handlers[it]) {
            handlers[it] = [
                handler
            ];
        } else {
            handlers[it].push(handler);
        }
        if (payloads[it]) {
            handler.apply(void 0, payloads[it]);
        }
    };
    var waitOnceFor = function waitOnceFor(scope, it, handler) {
        ensureScope(scope);
        var onceHandlers = scopedOnceHandlers.get(scope);
        var payloads = scopedPayloads.get(scope);
        if (payloads[it]) {
            handler.apply(void 0, payloads[it]);
            return;
        }
        if (!onceHandlers[it]) {
            onceHandlers[it] = [
                handler
            ];
        } else {
            onceHandlers.push(handler);
        }
    };
    var emit = function emit(scope, it) {
        ensureScope(scope);
        var handlers = scopedHandlers.get(scope);
        var onceHandlers = scopedOnceHandlers.get(scope);
        var payloads = scopedPayloads.get(scope);
        var payload = [].slice.call(arguments);
        payload.shift();
        payloads[it] = payload;
        var oh = onceHandlers[it];
        while(oh && oh.length){
            var handler = oh.shift();
            try {
                handler.apply(void 0, payload);
            } catch (err) {
                console.error(err);
                console.log("Failed to invoke one time handler of %s", it);
            }
        }
        var handlersForIt = handlers[it];
        if (!handlersForIt) {
            return;
        }
        handlersForIt.forEach(function(h) {
            try {
                h.apply(void 0, payload);
            } catch (err) {
                console.error(err);
                console.log("Failed to invoke handler of %s", it);
            }
        });
    };
    var EvolvContext2 = function EvolvContext2(store) {
        var uid;
        var sid;
        var remoteContext;
        var localContext;
        var initialized = false;
        Object.defineProperty(this, "uid", {
            get: function get() {
                return uid;
            }
        });
        Object.defineProperty(this, "sid", {
            get: function get() {
                return sid;
            }
        });
        Object.defineProperty(this, "remoteContext", {
            get: function get() {
                return deepClone(remoteContext);
            }
        });
        Object.defineProperty(this, "localContext", {
            get: function get() {
                return deepClone(localContext);
            }
        });
        function mutableResolve() {
            return deepMerge(localContext, remoteContext);
        }
        function ensureInitialized() {
            if (!initialized) {
                throw new Error("Evolv: The evolv context is not initialized");
            }
        }
        this.initialize = function(_uid, _sid, _remoteContext, _localContext) {
            if (initialized) {
                throw new Error("Evolv: The context is already initialized");
            }
            uid = _uid;
            sid = _sid;
            remoteContext = _remoteContext ? deepClone(_remoteContext) : {};
            localContext = _localContext ? deepClone(_localContext) : {};
            initialized = true;
            emit(this, CONTEXT_INITIALIZED, this.resolve());
        };
        this.destroy = function() {
            remoteContext = void 0;
            localContext = void 0;
            emit(this, CONTEXT_DESTROYED, this);
        };
        this.resolve = function() {
            ensureInitialized();
            return deepClone(mutableResolve());
        };
        this.set = function(key, value, local) {
            ensureInitialized();
            var context = local ? localContext : remoteContext;
            var before = getValueForKey(key, context);
            if (before === value || arraysEqual(before, value)) {
                return false;
            }
            setKeyToValue(key, value, context);
            var updated = this.resolve();
            if (typeof before === "undefined") {
                emit(this, CONTEXT_VALUE_ADDED, key, value, local, updated);
            } else {
                emit(this, CONTEXT_VALUE_CHANGED, key, value, before, local, updated);
            }
            emit(this, CONTEXT_CHANGED, updated);
            return true;
        };
        this.update = function(update, local) {
            if (Object.keys(update).length === 0 && update.constructor === Object) {
                console.warn("[Deprecation] Calling evolv.context.update({}) to reapply variants has been deprecated. Please use 'evolv.rerun()' instead.");
                store.clearActiveKeys();
            }
            ensureInitialized();
            var context = local ? localContext : remoteContext;
            var flattened = flatten(update);
            var flattenedBefore = {};
            Object.keys(flattened).forEach(function(key) {
                flattenedBefore[key] = context[key];
            });
            if (local) {
                localContext = deepMerge(localContext, update);
                context = localContext;
            } else {
                remoteContext = deepMerge(remoteContext, update);
                context = remoteContext;
            }
            var thisRef = this;
            var updated = this.resolve();
            Object.keys(flattened).forEach(function(key) {
                if (typeof flattenedBefore[key] === "undefined") {
                    emit(thisRef, CONTEXT_VALUE_ADDED, key, flattened[key], local, updated);
                } else if (flattenedBefore[key] !== context[key]) {
                    emit(thisRef, CONTEXT_VALUE_CHANGED, key, flattened[key], flattenedBefore[key], local, updated);
                }
            });
            emit(this, CONTEXT_CHANGED, updated);
        };
        this.remove = function(key) {
            ensureInitialized();
            var local = removeValueForKey(key, localContext);
            var remote = removeValueForKey(key, remoteContext);
            var removed = local || remote;
            if (removed) {
                var updated = this.resolve();
                emit(this, CONTEXT_VALUE_REMOVED, key, !remote, updated);
                emit(this, CONTEXT_CHANGED, updated);
            }
            return removed;
        };
        this.get = function(key) {
            ensureInitialized();
            if (key === "confirmations" || key === "contaminations") {
                console.warn('[Deprecation] Retrieving confirmations and contaminations from the Evolv context with keys "confirmations"', ' and "contaminations" is deprecated. Please use "experiments.confirmations" and "experiments.contaminations" instead.');
            }
            return getValueForKey(key, remoteContext) || getValueForKey(key, localContext);
        };
        this.contains = function(key) {
            ensureInitialized();
            return key in remoteContext || key in localContext;
        };
        this.pushToArray = function(key, value, local, limit) {
            limit = limit || DEFAULT_QUEUE_LIMIT;
            ensureInitialized();
            var context = local ? localContext : remoteContext;
            var originalArray = getValueForKey(key, context);
            var combined = (originalArray || []).concat([
                value
            ]);
            var newArray = combined.slice(combined.length - limit);
            return this.set(key, newArray, local);
        };
    };
    var MiniPromise = function MiniPromise(executor) {
        this._responseArgs = null;
        this._errored = false;
        this._thens = [];
        this._catches = [];
        this._finallys = [];
        var response = function response(errored, handlers) {
            if (this._responseArgs) {
                throw Error("Response already sent");
            }
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            args.shift();
            this._errored = errored;
            this._responseArgs = args;
            handlers.forEach(invoker.bind(this, args));
            this._finallys.forEach(invoker.bind(this, args));
        };
        var reject = response.bind(this, true, this._catches);
        var resolve = response.bind(this, false, this._thens);
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
        this.then = function(handler) {
            if (this._responseArgs && !this._errored) {
                invoker.call(this, this._responseArgs, handler);
                return this;
            }
            this._thens.push(handler);
            return this;
        };
        this.catch = function(handler) {
            if (this._responseArgs && this._errored) {
                invoker.call(this, this._responseArgs, handler);
                return this;
            }
            this._catches.push(handler);
            return this;
        };
        this.finally = function(handler) {
            if (this._responseArgs) {
                invoker.call(this, this._responseArgs, handler);
                return this;
            }
            this._finallys.push(handler);
            return this;
        };
    };
    var fromArray = // node_modules/@evolv/javascript-sdk/src/ponyfills/arrays.js
    function fromArray(items) {
        if (Array.isArray(items)) {
            return items;
        }
        if (_instanceof(items, Map)) {
            var arr = [];
            items.forEach(function(value, key) {
                arr.push([
                    key,
                    value
                ]);
            });
            return arr;
        }
        if (_instanceof(items, Set) || _instanceof(items, NodeList)) {
            var arr1 = [];
            (items.forEach || forEach).call(items, function(item) {
                arr1.push(item);
            });
            return arr1;
        }
        return [];
    };
    var forEach = function forEach(callback, thisArg) {
        thisArg = thisArg || window;
        for(var i = 0; i < this.length; i += 1){
            callback.call(thisArg, this[i], this);
        }
    };
    var startsWith = // node_modules/@evolv/javascript-sdk/src/ponyfills/strings.js
    function startsWith(string, searchString, position) {
        if (string.startsWith) {
            return string.startsWith(searchString, position);
        }
        var pos = position > 0 ? position | 0 : 0;
        return string.substring(pos, pos + searchString.length) === searchString;
    };
    var endsWith = function endsWith(string, searchString, length) {
        if (string.endsWith) {
            return string.endsWith(searchString, length);
        }
        var len = length === void 0 || length > string.length ? string.length : length;
        return string.substring(len - searchString.length, len) === searchString;
    };
    var copySet = // node_modules/@evolv/javascript-sdk/src/helpers/set-utils.js
    function copySet(from, into) {
        var copy = into || /* @__PURE__ */ new Set();
        from.forEach(function(item) {
            copy.add(item);
        });
        return copy;
    };
    var regexFromString = function regexFromString(string) {
        if (!startsWith(string, "/")) {
            return new RegExp(string);
        }
        var split = string.lastIndexOf("/");
        return new RegExp(string.substring(1, split), string.substring(split + 1));
    };
    var regex64Match = function regex64Match(value, b64pattern) {
        try {
            var string = base64_default.decode(b64pattern);
            return value && value.match(regexFromString(string)) !== null;
        } catch (e) {
            return false;
        }
    };
    var evaluateFilter = function evaluateFilter(user, rule) {
        var value = valueFromKey(user, rule.field);
        if (startsWith(rule.operator, "kv_") && !value) {
            return false;
        }
        return !!FILTER_OPERATORS[rule.operator](value, rule.value);
    };
    var evaluateRule = function evaluateRule(user, query, rule, passedRules, failedRules) {
        var result;
        if ("combinator" in rule) {
            return evaluatePredicate(user, rule, passedRules, failedRules);
        } else {
            result = evaluateFilter(user, rule);
        }
        (result ? passedRules : failedRules).add({
            id: query.id,
            index: rule.index,
            field: rule.field
        });
        return result;
    };
    var evaluatePredicate = function evaluatePredicate(user, query, passedRules, failedRules) {
        var rules = query.rules;
        if (!rules) {
            return true;
        }
        for(var i = 0; i < rules.length; i++){
            var passed = evaluateRule(user, query, rules[i], passedRules, failedRules);
            if (passed && query.combinator === OR) {
                return true;
            }
            if (!passed && query.combinator === AND) {
                return false;
            }
        }
        return query.combinator === AND;
    };
    var evaluate = function evaluate(context, predicate) {
        var result = {
            passed: /* @__PURE__ */ new Set(),
            failed: /* @__PURE__ */ new Set(),
            touched: /* @__PURE__ */ new Set()
        };
        result.rejected = !evaluatePredicate(context, predicate, result.passed, result.failed);
        result.passed.forEach(function(item) {
            result.touched.add(item.field);
        });
        result.failed.forEach(function(item) {
            result.touched.add(item.field);
        });
        return result;
    };
    var cryptography = function cryptography() {
        return typeof crypto !== "undefined" ? crypto : msCrypto;
    };
    var str2ab = function str2ab(str) {
        if (typeof TextEncoder !== "undefined") {
            return new TextEncoder().encode(str).buffer;
        }
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for(var i = 0, strLen = str.length; i < strLen; i++){
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };
    var cryptoOperationToPromise = function cryptoOperationToPromise(op) {
        if (op.then) {
            return op;
        }
        return MiniPromise.createPromise(function(resolve, reject) {
            op.oncomplete = function(evt) {
                resolve(evt.target.result);
            };
            function rejectHandler(evt) {
                reject(evt.toString());
            }
            op.onerror = rejectHandler;
            op.onabort = rejectHandler;
        });
    };
    var sign = function sign(key, payload) {
        var keyFormat = "raw";
        var algorithm = {
            name: "HMAC",
            hash: "SHA-384"
        };
        var keyUsages = [
            "sign"
        ];
        var crypto2 = cryptography();
        return MiniPromise.createPromise(function(resolve, reject) {
            cryptoOperationToPromise(crypto2.subtle.importKey(keyFormat, str2ab(key), algorithm, true, keyUsages)).then(function(cryptoKey) {
                cryptoOperationToPromise(crypto2.subtle.sign(algorithm, cryptoKey, payload)).then(function(bytes) {
                    resolve(base64_default.encodeFromArrayBuffer(bytes));
                }).catch(reject);
            }).catch(reject);
        });
    };
    var createSignatureHeader = function createSignatureHeader(signatureKeyId, signature) {
        return 'keyId="' + signatureKeyId + '",algorithm="hmac-sha384",signature="' + signature + '"';
    };
    var xhrRequest = function xhrRequest(options) {
        return MiniPromise.createPromise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function() {
                if (this.status >= 400) {
                    reject(this.statusText || "Evolv: Request failed " + this.status);
                    return;
                }
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else if (this.status === 202) {
                    resolve();
                } else {
                    var message = "Evolv: Invalid status " + this.status + " for response " + this.responseText;
                    console.error(message);
                    reject(message);
                }
            });
            xhr.addEventListener("error", reject);
            xhr.open(options.method, options.url, !options.sync);
            if (options.method.toUpperCase() === "POST" || options.method.toUpperCase() === "PUT") {
                xhr.setRequestHeader("Content-Type", options.encoding);
            }
            xhr.setRequestHeader("Accept", "application/json");
            if (options.signature) {
                xhr.setRequestHeader("Signature", createSignatureHeader(options.keyId, options.signature));
            }
            xhr.send(options.payload);
        });
    };
    var nodeRequest = function nodeRequest(options) {
        var self = this;
        return MiniPromise.createPromise(function(resolve, reject) {
            var response = "";
            var parts = URL_PATTERN.exec(options.url);
            if (!parts) {
                throw new Error("Evolv: Invalid endpoint URL");
            }
            var schema = parts[1];
            (schema === "http" ? import("http") : import("https")).then(function(http) {
                var hostname = parts[2];
                var path = parts[3];
                var headers = {
                    "Content-Type": options.encoding,
                    "Accept": "application/json",
                    "Content-Length": Buffer.byteLength(options.payload)
                };
                if (options.signature) {
                    headers["Signature"] = createSignatureHeader(options.keyId, options.signature);
                }
                var req = http.request({
                    hostname: hostname,
                    path: path,
                    method: options.method,
                    headers: headers
                }, function(res) {
                    res.on("data", function(chunk) {
                        response += chunk;
                    });
                    res.on("end", function() {
                        if (res.statusCode === 200) {
                            resolve(JSON.parse(response));
                        } else if (res.statusCode === 202) {
                            resolve();
                        } else {
                            var message = "Evolv: Invalid status " + res.statusCode + " for response " + res.statusMesssage;
                            reject(message);
                        }
                    });
                });
                req.on("error", reject);
                options.payload && req.write(options.payload);
                req.end();
            });
        });
    };
    var retrieve = function retrieve(opts, hooks) {
        var options = hooks && typeof hooks.beforeOptions === "function" ? hooks.beforeOptions(opts) : opts;
        return MiniPromise.createPromise(function(resolve, reject) {
            var completeOptions = assign({}, options);
            completeOptions.encoding = completeOptions.encoding || "application/json; charset=UTF-8";
            var payload;
            if (!completeOptions.data) {
                payload = "";
            } else if (typeof completeOptions.data === "object") {
                if (completeOptions.encoding === "application/x-www-form-urlencoded") {
                    payload = Object.keys(completeOptions.data).map(function(key) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(completeOptions.data[key]);
                    }).join("&");
                } else {
                    payload = JSON.stringify(completeOptions.data);
                }
            } else {
                payload = completeOptions.data;
            }
            completeOptions.payload = payload;
            var rx;
            if (typeof XMLHttpRequest !== "undefined") {
                rx = xhrRequest;
            } else {
                rx = nodeRequest;
            }
            if (!completeOptions.key) {
                rx(completeOptions).then(resolve).catch(reject);
                return;
            }
            sign(completeOptions.key, str2ab(completeOptions.payload)).then(function(signature) {
                rx(assign({
                    signature: signature
                }, completeOptions)).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
    var expKeyStatesHas = function expKeyStatesHas(keyStates, stateName, key, prefix) {
        prefix = prefix || false;
        var hasIt = false;
        keyStates.experiments.forEach(function(expKeyStates) {
            var state = expKeyStates.get(stateName);
            if (!state) {
                return;
            }
            if (prefix) {
                state.forEach(function(stateKey) {
                    if (!key || startsWith(stateKey, key)) {
                        hasIt = true;
                    }
                });
            } else {
                if (state.has(key)) {
                    hasIt = true;
                }
            }
        });
        return hasIt;
    };
    var setConfigLoadedKeys = function setConfigLoadedKeys(keyStates, exp) {
        var clean = assign({}, exp);
        delete clean.id;
        var expLoaded = /* @__PURE__ */ new Set();
        var expMap = /* @__PURE__ */ new Map();
        expMap.set("loaded", expLoaded);
        keyStates.experiments.set(exp.id, expMap);
        flattenKeys(clean, function(key) {
            return !startsWith(key, "_") || key === "_values" || key === "_initializers";
        }).filter(function(key) {
            return endsWith(key, "_values") || endsWith(key, "_initializers");
        }).forEach(function(key) {
            expLoaded.add(key.replace(/._values|._initializers/gi, ""));
        });
    };
    var moveKeys = function moveKeys(keys, from, to) {
        keys.forEach(function(key) {
            from.delete(key);
            to.add(key);
        });
    };
    var wrapListener = function wrapListener(listener) {
        return function() {
            try {
                listener.apply(void 0, arguments);
            } catch (ex) {
                console.log(ex);
            }
        };
    };
    var getValue = function getValue(key, genome) {
        return getValueForKey(key, genome);
    };
    var getConfigValue = function getConfigValue(key, genome, config) {
        return getValueForKey(key, config);
    };
    var getValueActive = function getValueActive(activeKeys, key) {
        return activeKeys.has(key);
    };
    var getActiveKeys = function getActiveKeys(activeKeys, previousKeys, prefix) {
        var result = [];
        var previous = [];
        function hasPrefix(key) {
            return !prefix || startsWith(key, prefix);
        }
        activeKeys.forEach(function(key) {
            if (hasPrefix(key)) {
                result.push(key);
            }
        });
        previousKeys.forEach(function(key) {
            if (hasPrefix(key)) {
                previous.push(key);
            }
        });
        return {
            current: result,
            previous: previous
        };
    };
    var clearActiveKeys = function clearActiveKeys(activeKeys, prefix) {
        if (!prefix) {
            activeKeys.clear();
        }
        activeKeys.forEach(function(key) {
            if (startsWith(key, prefix)) {
                activeKeys.delete(key);
            }
        });
    };
    var activeEntryPoints = function activeEntryPoints(entryKeys) {
        var eids = [];
        entryKeys.experiments.forEach(function(expKeyStates, eid) {
            var entry = expKeyStates.get("entry");
            if (entry && entry.size > 0) {
                eids.push(eid);
            }
        });
        return eids;
    };
    var evaluatePredicates = function evaluatePredicates(version, context, config) {
        var result = /* @__PURE__ */ new Map();
        if (!config._experiments || !config._experiments.length) {
            return result;
        }
        function evaluateBranch(context2, config2, prefix, disabled, entry) {
            if (!config2 || typeof config2 !== "object") {
                return;
            }
            if (config2._predicate) {
                var result2 = evaluate(context2, config2._predicate);
                if (result2.rejected) {
                    disabled.push(prefix);
                    return;
                }
            }
            if (config2._is_entry_point) {
                entry.push(prefix);
            }
            Object.keys(config2).forEach(function(key) {
                if (startsWith(key, "_")) {
                    return;
                }
                evaluateBranch(context2, config2[key], prefix ? prefix + "." + key : key, disabled, entry);
            });
        }
        var evaluableContext = context.resolve();
        config._experiments.forEach(function(exp) {
            var evaluableConfig = assign({}, exp);
            delete evaluableConfig.id;
            var expResult = {
                disabled: [],
                entry: []
            };
            evaluateBranch(evaluableContext, evaluableConfig, "", expResult.disabled, expResult.entry);
            result.set(exp.id, expResult);
        });
        return result;
    };
    var getActiveAndEntryExperimentKeyStates = function getActiveAndEntryExperimentKeyStates(results, keyStatesLoaded) {
        var expKeyStates = {
            active: [],
            entry: []
        };
        keyStatesLoaded.forEach(function(key) {
            var active = !results.disabled.some(function(disabledKey) {
                return startsWith(key, disabledKey);
            });
            if (active) {
                expKeyStates.active.push(key);
                var entry = results.entry.some(function(entryKey) {
                    return startsWith(key, entryKey);
                });
                if (entry) {
                    expKeyStates.entry.push(key);
                }
            }
        });
        return expKeyStates;
    };
    var setActiveAndEntryKeyStates = function setActiveAndEntryKeyStates(version, context, config, allocations, configKeyStates) {
        var results = evaluatePredicates(version, context, config);
        results.forEach(function(expResults, eid) {
            var expConfigKeyStates = configKeyStates.experiments.get(eid);
            if (!expConfigKeyStates) {
                return;
            }
            var expConfigLoaded = expConfigKeyStates.get("loaded");
            var loadedKeys = /* @__PURE__ */ new Set();
            if (expConfigLoaded) {
                expConfigLoaded.forEach(function(key) {
                    loadedKeys.add(key);
                });
            }
            var newExpKeyStates = getActiveAndEntryExperimentKeyStates(expResults, loadedKeys);
            var activeKeyStates = /* @__PURE__ */ new Set();
            newExpKeyStates.active.forEach(function(key) {
                activeKeyStates.add(key);
            });
            var allocation = (allocations || []).filter(function(a) {
                return a.eid === eid;
            })[0];
            if (allocation) {
                evaluateAllocationPredicates(context, allocation, activeKeyStates);
            }
            var entryKeyStates = /* @__PURE__ */ new Set();
            newExpKeyStates.entry.forEach(function(key) {
                entryKeyStates.add(key);
            });
            expConfigKeyStates.set("active", activeKeyStates);
            expConfigKeyStates.set("entry", entryKeyStates);
        });
    };
    var evaluateAllocationPredicates = function evaluateAllocationPredicates(context, allocation, activeKeyStates) {
        var genome = allocation.genome;
        if (!genome) {
            return;
        }
        var evaluableContext = context.resolve();
        activeKeyStates.forEach(function(key) {
            var keyParts = key.split(".");
            var predicatedVariant = genome;
            for(var i = 0; i < keyParts.length; i++){
                predicatedVariant = predicatedVariant[keyParts[i]] || {};
            }
            var predicatedValues = predicatedVariant._predicated_values;
            var touchedKeys = /* @__PURE__ */ new Set();
            if (predicatedValues) {
                var predicatedId;
                for(var i1 = 0; i1 < predicatedValues.length; i1++){
                    var variant = predicatedValues[i1];
                    var predicate = variant._predicate ? variant._predicate : {
                        combinator: "and",
                        rules: fromArray(touchedKeys).map(function(field) {
                            return {
                                field: field,
                                operator: "defined"
                            };
                        })
                    };
                    var result = evaluate(evaluableContext, predicate);
                    copySet(result.touched, touchedKeys);
                    if (!result.rejected) {
                        predicatedId = variant._predicate_assignment_id;
                        break;
                    }
                }
                if (!predicatedId) {
                    return;
                }
                var predicatedKey = key + "." + predicatedId;
                activeKeyStates.add(predicatedKey);
            }
        });
    };
    var generateEffectiveGenome = function generateEffectiveGenome(expsKeyStates, genomes) {
        var effectiveGenome = {};
        var activeEids = /* @__PURE__ */ new Set();
        expsKeyStates.forEach(function(expKeyStates, eid) {
            var active = expKeyStates.get("active");
            if (eid in genomes && active) {
                var activeGenome = filter(deepClone(genomes[eid]), active);
                if (Object.keys(activeGenome).length) {
                    activeEids.add(eid);
                    effectiveGenome = deepMerge(effectiveGenome, activeGenome);
                }
            }
        });
        return {
            effectiveGenome: effectiveGenome,
            activeEids: activeEids
        };
    };
    var EvolvStore = function EvolvStore(options) {
        var version = options.version || 1;
        var prefix = options.endpoint + "/" + options.environment;
        var keyId = options.auth && options.auth.id;
        var key = options.auth && options.auth.secret;
        var context;
        var clientContext = null;
        var initialized = false;
        var waitingToPull = false;
        var waitingToPullImmediate = true;
        var genomes = {};
        var effectiveGenome = {};
        var allocations = null;
        var config = null;
        var activeEids = /* @__PURE__ */ new Set();
        var activeKeys = /* @__PURE__ */ new Set();
        var previousKeys = /* @__PURE__ */ new Set();
        var activeVariants = /* @__PURE__ */ new Set();
        var previousVariants = /* @__PURE__ */ new Set();
        var genomeFailed = false;
        var configFailed = false;
        var genomeKeyStates = {
            needed: /* @__PURE__ */ new Set(),
            requested: /* @__PURE__ */ new Set(),
            experiments: /* @__PURE__ */ new Map()
        };
        var configKeyStates = {
            needed: /* @__PURE__ */ new Set(),
            requested: /* @__PURE__ */ new Set(),
            experiments: /* @__PURE__ */ new Map()
        };
        var outstandingValuePromises = [];
        var outstandingConfigPromises = [];
        var subscriptions = /* @__PURE__ */ new Set();
        Object.defineProperty(this, "configuration", {
            get: function get() {
                return config;
            },
            configurable: true
        });
        Object.defineProperty(this, "activeEids", {
            get: function get() {
                return activeEids;
            },
            configurable: true
        });
        this.destroy = function() {
            genomes = void 0;
            effectiveGenome = void 0;
            allocations = void 0;
            config = void 0;
            activeEids = void 0;
            activeKeys = void 0;
            previousKeys = void 0;
            delete genomeKeyStates.needed;
            delete genomeKeyStates.requested;
            delete genomeKeyStates.experiments;
            delete configKeyStates.needed;
            delete configKeyStates.requested;
            delete configKeyStates.experiments;
            outstandingValuePromises.forEach(function(p) {
                p.reject();
            });
            outstandingValuePromises = void 0;
            outstandingConfigPromises.forEach(function(p) {
                p.reject();
            });
            outstandingConfigPromises = void 0;
            subscriptions = void 0;
            emit(context, STORE_DESTROYED, this);
            context = void 0;
        };
        function reevaluateContext() {
            if (!config) {
                return;
            }
            if (reevaluatingContext) {
                return;
            }
            reevaluatingContext = true;
            setActiveAndEntryKeyStates(version, context, config, allocations, configKeyStates);
            var result = generateEffectiveGenome(configKeyStates.experiments, genomes);
            effectiveGenome = result.effectiveGenome;
            activeEids = result.activeEids;
            previousKeys.clear();
            copySet(activeKeys, previousKeys);
            activeKeys.clear();
            previousVariants.clear();
            copySet(activeVariants, previousVariants);
            activeVariants.clear();
            configKeyStates.experiments.forEach(function(expKeyStates) {
                var active = expKeyStates.get("active");
                if (active) {
                    active.forEach(function(key2) {
                        activeKeys.add(key2);
                    });
                    var pruned = prune(effectiveGenome, active);
                    Object.keys(pruned).forEach(function(key2) {
                        activeVariants.add(key2.concat(":", (0, import_hashing.objectHash)(pruned[key2])));
                    });
                }
            });
            var newActiveKeys = [];
            activeKeys.forEach(function(key2) {
                newActiveKeys.push(key2);
            });
            context.set("keys.active", newActiveKeys);
            var newActiveVariants = [];
            activeVariants.forEach(function(variant) {
                newActiveVariants.push(variant);
            });
            context.set("variants.active", newActiveVariants);
            emit(context, EFFECTIVE_GENOME_UPDATED, effectiveGenome);
            subscriptions.forEach(function(listener) {
                try {
                    listener(effectiveGenome, config);
                } catch (ex) {
                    console.error(ex);
                }
            });
            reevaluatingContext = false;
        }
        function updateGenome(value) {
            var allocs = [];
            var exclusions = [];
            allocations = value;
            genomeFailed = false;
            value.forEach(function(alloc) {
                var clean = assign({}, alloc);
                delete clean.genome;
                delete clean.audience_query;
                allocs.push(clean);
                if (clean.excluded) {
                    exclusions.push(clean.eid);
                    return;
                }
                genomes[clean.eid] = alloc.genome;
                var expLoaded = /* @__PURE__ */ new Set();
                var expMap = /* @__PURE__ */ new Map();
                expMap.set("loaded", expLoaded);
                genomeKeyStates.experiments.set(clean.eid, expMap);
                flattenKeys(alloc.genome, function(key2) {
                    return !startsWith(key2, "_");
                }).forEach(expLoaded.add.bind(expLoaded));
            });
            context.set("experiments.allocations", allocs);
            context.set("experiments.exclusions", exclusions);
        }
        function updateConfig(value) {
            config = value;
            configFailed = false;
            if ("_client" in config) {
                clientContext = config._client;
            }
            value._experiments.forEach(function(exp) {
                setConfigLoadedKeys(configKeyStates, exp);
            });
        }
        function update(configRequest, requestedKeys, value) {
            var keyStates = configRequest ? configKeyStates : genomeKeyStates;
            requestedKeys.forEach(keyStates.requested.delete.bind(keyStates.requested));
            if (configRequest) {
                emit(context, CONFIG_REQUEST_RECEIVED, requestedKeys);
                updateConfig(value);
            } else {
                emit(context, GENOME_REQUEST_RECEIVED, requestedKeys);
                updateGenome(value);
            }
            reevaluateContext();
            var removeConfig = [];
            var removeValue = [];
            outstandingValuePromises.concat(outstandingConfigPromises).forEach(function(promise) {
                if (promise.source === GENOME_SOURCE && (!promise.key || !expKeyStatesHas(genomeKeyStates, "loaded", promise.key))) {
                    return;
                }
                var configLoaded = !!config;
                if (promise.key) {
                    configLoaded = expKeyStatesHas(configKeyStates, "loaded", promise.key, true);
                }
                if (!configLoaded && !(configRequest && (version === 1 || requestedKeys.indexOf(promise.key) >= 0))) {
                    return;
                }
                promise.resolve(promise.transform(promise.key, effectiveGenome, config));
                (promise.source === CONFIG_SOURCE ? removeConfig : removeValue).push(promise);
            });
            outstandingValuePromises = outstandingValuePromises.filter(function(promise) {
                return removeValue.indexOf(promise) < 0;
            });
            outstandingConfigPromises = outstandingConfigPromises.filter(function(promise) {
                return removeConfig.indexOf(promise) < 0;
            });
            emit(context, configRequest ? CONFIG_UPDATED : GENOME_UPDATED, value);
        }
        function failed(configRequest, requestedKeys, err) {
            console.log(err);
            var keyStates;
            emit(context, REQUEST_FAILED, configRequest ? CONFIG_SOURCE : GENOME_SOURCE, requestedKeys, err);
            if (configRequest) {
                keyStates = configKeyStates;
            } else {
                keyStates = genomeKeyStates;
            }
            moveKeys(requestedKeys, keyStates.requested, keyStates.needed);
            var outstandingPromises;
            if (configRequest) {
                outstandingPromises = outstandingConfigPromises;
                configFailed = true;
            } else {
                outstandingPromises = outstandingValuePromises;
                genomeFailed = true;
            }
            var removeConfig = [];
            var removeValue = [];
            outstandingValuePromises.concat(outstandingConfigPromises).forEach(function(promise) {
                if (version === 1 || requestedKeys.indexOf(promise.key) >= 0) {
                    (promise.source === CONFIG_SOURCE ? removeConfig : removeValue).push(promise);
                    try {
                        promise.reject(err);
                    } catch (ex) {
                        console.error(ex);
                    }
                }
            });
            outstandingValuePromises = outstandingValuePromises.filter(function(promise) {
                return removeValue.indexOf(promise) >= 0;
            });
            outstandingConfigPromises = outstandingConfigPromises.filter(function(promise) {
                return removeConfig.indexOf(promise) >= 0;
            });
            if (configRequest) {
                outstandingConfigPromises = outstandingPromises;
            } else {
                outstandingValuePromises = outstandingPromises;
            }
        }
        function pull(immediate) {
            if (!initialized) {
                waitingToPullImmediate = waitingToPullImmediate || immediate;
                return;
            }
            if (!immediate && !waitingToPullImmediate) {
                if (!waitingToPull) {
                    waitingToPull = true;
                    setTimeout(pull.bind(void 0, true));
                }
                return;
            }
            waitingToPullImmediate = false;
            if (configKeyStates.needed.size || version === 1) {
                var requestedKeys = [];
                configKeyStates.needed.forEach(requestedKeys.push.bind(requestedKeys));
                configKeyStates.needed.clear();
                retrieve({
                    method: "get",
                    url: prefix + "/" + context.uid + "/configuration.json",
                    keyId: keyId,
                    key: key
                }, options.hooks).then(update.bind(this, true, requestedKeys)).catch(failed.bind(this, true, requestedKeys));
                moveKeys(requestedKeys, configKeyStates.needed, configKeyStates.requested);
                emit(context, CONFIG_REQUEST_SENT, requestedKeys);
            }
            if (genomeKeyStates.needed.size || version === 1) {
                var requestedKeys1 = [];
                genomeKeyStates.needed.forEach(requestedKeys1.push.bind(requestedKeys1));
                genomeKeyStates.needed.clear();
                retrieve({
                    method: "get",
                    url: prefix + "/" + context.uid + "/allocations",
                    keyId: keyId,
                    key: key
                }, options.hooks).then(update.bind(this, false, requestedKeys1)).catch(failed.bind(this, false, requestedKeys1));
                moveKeys(requestedKeys1, genomeKeyStates.needed, genomeKeyStates.requested);
                emit(context, GENOME_REQUEST_SENT, requestedKeys1);
            }
            waitingToPull = false;
        }
        function createRequestSubscribablePromise(source, transform, key2) {
            var resolve = null;
            var reject = null;
            var promise = MiniPromise.createPromise(function(res, rej) {
                resolve = wrapListener(res);
                reject = wrapListener(rej);
            });
            promise.listen = function(listener) {
                subscriptions.add(function(effectiveGenome2, config2) {
                    listener(transform(key2, effectiveGenome2, config2));
                });
            };
            var keyStates;
            var failed2;
            var outstandingPromises;
            var loaded = false;
            if (source === GENOME_SOURCE) {
                keyStates = genomeKeyStates;
                failed2 = genomeFailed;
                outstandingPromises = outstandingValuePromises;
                loaded = expKeyStatesHas(keyStates, "loaded", key2);
            } else {
                keyStates = configKeyStates;
                failed2 = configFailed;
                outstandingPromises = outstandingConfigPromises;
                loaded = expKeyStatesHas(keyStates, "loaded", key2, true);
            }
            if (loaded) {
                resolve(transform(key2, effectiveGenome, config));
                return promise;
            }
            if (expKeyStatesHas(keyStates, "loaded", key2)) {
                resolve(transform(key2, effectiveGenome, config));
                return promise;
            }
            if (failed2) {
                reject("The values could not be retrieved");
                return promise;
            }
            var outstanding = {
                key: key2,
                resolve: resolve,
                reject: reject,
                transform: transform,
                source: source
            };
            outstandingPromises.push(outstanding);
            if (version !== 1 && !keyStates.needed.has(key2) && !keyStates.requested.has(key2)) {
                keyStates.needed.add(key2);
                if (source === GENOME_SOURCE) {
                    configKeyStates.needed.add(key2);
                }
                pull();
            }
            return promise;
        }
        if (version === 1) {
            pull(true);
        } else if (options.version !== 2) {
            throw new Error("Unsupported API version");
        }
        Object.defineProperty(this, "state", {
            get: function get() {
                return {
                    allocations: deepClone(allocations),
                    config: deepClone(config)
                };
            }
        });
        this.fetch = pull.bind(this, true);
        this.preload = function(prefixes, configOnly, immediate) {
            prefixes.forEach(configKeyStates.needed.add.bind(configKeyStates.needed));
            if (!configOnly) {
                prefixes.forEach(genomeKeyStates.needed.add.bind(genomeKeyStates.needed));
            }
            pull(immediate);
        };
        this.initialize = function(_context) {
            if (initialized) {
                throw new Error("Evolv: The store has already been initialized.");
            }
            context = _context;
            initialized = true;
            pull();
            waitFor(context, CONTEXT_CHANGED, reevaluateContext);
        };
        this.getClientContext = function() {
            return createRequestSubscribablePromise.call(this, CONFIG_SOURCE, function() {
                return clientContext;
            });
        };
        this.subscribe = subscriptions.add.bind(subscriptions);
        this.unsubscribe = subscriptions.delete.bind(subscriptions);
        this.get = createRequestSubscribablePromise.bind(this, GENOME_SOURCE, getValue.bind(this));
        this.getConfig = createRequestSubscribablePromise.bind(this, CONFIG_SOURCE, getConfigValue.bind(this));
        this.activeEntryPoints = createRequestSubscribablePromise.bind(this, CONFIG_SOURCE, activeEntryPoints.bind(this, configKeyStates));
        this.isActive = createRequestSubscribablePromise.bind(this, CONFIG_SOURCE, getValueActive.bind(this, activeKeys));
        this.getActiveKeys = createRequestSubscribablePromise.bind(this, CONFIG_SOURCE, getActiveKeys.bind(this, activeKeys, previousKeys));
        this.clearActiveKeys = clearActiveKeys.bind(this, activeKeys);
        this.reevaluateContext = reevaluateContext.bind(this);
    };
    var fallbackBeacon = function fallbackBeacon(url, data, sync) {
        retrieve({
            method: "post",
            url: url,
            data: data,
            sync: sync
        }).catch(function(err) {
            console.log(err);
        });
        return true;
    };
    var Emitter = function Emitter(endpoint, context, options) {
        var endpointMatch = endpoint.match(ENDPOINT_PATTERN);
        var v1Events = endpointMatch && endpointMatch[1] === "v1" && endpointMatch[2] === "events";
        var defaults = {
            blockTransmit: false,
            clientName: "javascript-sdk"
        };
        var opts = assign({}, defaults, omitUndefined(options));
        var blockTransmit = opts.blockTransmit;
        var messages = [];
        var timer;
        function send(url, data, sync) {
            if (typeof window !== "undefined" && window.navigator.sendBeacon) {
                return window.navigator.sendBeacon(url, data);
            } else {
                return fallbackBeacon(url, data, sync);
            }
        }
        function wrapMessages(msgs) {
            return {
                uid: context.uid,
                client: opts.clientName,
                messages: msgs
            };
        }
        function transmit() {
            var sync = false;
            if (typeof this !== "undefined" && this !== null) {
                var currentEvent = this.event && this.event.type;
                sync = currentEvent === "unload" || currentEvent === "beforeunload";
            }
            if (!messages.length || blockTransmit) {
                return;
            }
            var batch = messages;
            messages = [];
            if (timer) {
                clearTimeout(timer);
            }
            timer = void 0;
            if (v1Events) {
                batch.forEach(function(message) {
                    var editedMessage = message;
                    editedMessage = message.payload || {};
                    editedMessage.type = message.type;
                    if (!send(endpoint, JSON.stringify(editedMessage), sync)) {
                        messages.push(message);
                        console.error("Evolv: Unable to send event beacon");
                    }
                });
            } else {
                while(true){
                    var smallBatch = batch.slice(0, BATCH_SIZE);
                    if (smallBatch.length === 0) {
                        break;
                    }
                    if (!send(endpoint, JSON.stringify(wrapMessages(smallBatch)), sync)) {
                        messages = batch;
                        console.error("Evolv: Unable to send analytics beacon");
                        break;
                    }
                    batch = batch.slice(BATCH_SIZE);
                }
            }
            if (messages.length) {
                timer = setTimeout(transmit, DELAY);
            }
        }
        if (typeof window !== "undefined") {
            window.addEventListener("unload", transmit);
            window.addEventListener("beforeunload", transmit);
        }
        this.unblockAndFlush = function() {
            blockTransmit = false;
            transmit();
        };
        this.emit = function(type, payload, flush) {
            messages.push({
                type: type,
                payload: payload,
                sid: context.sid,
                timestamp: new Date().getTime()
            });
            if (flush) {
                transmit();
                return;
            }
            if (!timer) {
                timer = setTimeout(transmit, DELAY);
            }
        };
        this.flush = transmit;
    };
    var buildOptions = // node_modules/@evolv/javascript-sdk/src/build-options.js
    function buildOptions(options) {
        var opts = assign({}, options);
        if (!opts.environment) {
            throw new Error('"environment" must be specified');
        }
        if (!("autoConfirm" in opts)) {
            opts.autoConfirm = true;
        }
        opts.version = opts.version || 1;
        opts.endpoint = (opts.endpoint || "https://participants.evolv.ai/") + "v" + opts.version;
        opts.analytics = "analytics" in opts ? opts.analytics : opts.version > 1;
        opts.hooks = assign({}, opts.hooks);
        return opts;
    };
    var generateId = function generateId() {
        var prefix = Math.round(Math.random() * 1e8);
        var date = Date.now();
        return "".concat(prefix, "_").concat(date);
    };
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __require = /* @__PURE__ */ function(x) {
        return typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
            get: function(a, b) {
                return (typeof require !== "undefined" ? require : a)[b];
            }
        }) : x;
    }(function(x) {
        if (typeof require !== "undefined") return require.apply(this, arguments);
        throw new Error('Dynamic require of "' + x + '" is not supported');
    });
    var __commonJS = function(cb, mod) {
        return function __require2() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
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
    // node_modules/object-assign/index.js
    var require_object_assign = __commonJS({
        "node_modules/object-assign/index.js": function(exports, module) {
            "use strict";
            var toObject = function toObject(val) {
                if (val === null || val === void 0) {
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                }
                return Object(val);
            };
            var shouldUseNative = function shouldUseNative() {
                try {
                    if (!Object.assign) {
                        return false;
                    }
                    var test1 = new String("abc");
                    test1[5] = "de";
                    if (Object.getOwnPropertyNames(test1)[0] === "5") {
                        return false;
                    }
                    var test2 = {};
                    for(var i = 0; i < 10; i++){
                        test2["_" + String.fromCharCode(i)] = i;
                    }
                    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                        return test2[n];
                    });
                    if (order2.join("") !== "0123456789") {
                        return false;
                    }
                    var test3 = {};
                    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                        test3[letter] = letter;
                    });
                    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
                        return false;
                    }
                    return true;
                } catch (err) {
                    return false;
                }
            };
            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;
            module.exports = shouldUseNative() ? Object.assign : function(target, source) {
                var from;
                var to = toObject(target);
                var symbols;
                for(var s = 1; s < arguments.length; s++){
                    from = Object(arguments[s]);
                    for(var key in from){
                        if (hasOwnProperty.call(from, key)) {
                            to[key] = from[key];
                        }
                    }
                    if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for(var i = 0; i < symbols.length; i++){
                            if (propIsEnumerable.call(from, symbols[i])) {
                                to[symbols[i]] = from[symbols[i]];
                            }
                        }
                    }
                }
                return to;
            };
        }
    });
    // node_modules/react/cjs/react.production.min.js
    var require_react_production_min = __commonJS({
        "node_modules/react/cjs/react.production.min.js": function(exports) {
            "use strict";
            var y = function y(a) {
                if (null === a || "object" !== typeof a) return null;
                a = x && a[x] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            };
            var z = function z(a) {
                for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
                return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            };
            var C = function C(a, b, c) {
                this.props = a;
                this.context = b;
                this.refs = B;
                this.updater = c || A;
            };
            var D = function D() {};
            var E = function E(a, b, c) {
                this.props = a;
                this.context = b;
                this.refs = B;
                this.updater = c || A;
            };
            var J = function J(a, b, c) {
                var e, d = {}, k = null, h = null;
                if (null != b) for(e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
                var g = arguments.length - 2;
                if (1 === g) d.children = c;
                else if (1 < g) {
                    for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                    d.children = f;
                }
                if (a && a.defaultProps) for(e in g = a.defaultProps, g)void 0 === d[e] && (d[e] = g[e]);
                return {
                    $$typeof: n,
                    type: a,
                    key: k,
                    ref: h,
                    props: d,
                    _owner: G.current
                };
            };
            var K = function K(a, b) {
                return {
                    $$typeof: n,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            };
            var L = function L(a) {
                return "object" === typeof a && null !== a && a.$$typeof === n;
            };
            var escape = function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, function(a2) {
                    return b[a2];
                });
            };
            var N = function N(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            };
            var P = function P(a, b, c) {
                if (null == a) return a;
                var e = [], d = 0;
                O(a, e, "", "", function(a2) {
                    return b.call(c, a2, d++);
                });
                return e;
            };
            var Q = function Q(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b = b();
                    a._status = 0;
                    a._result = b;
                    b.then(function(b2) {
                        0 === a._status && (b2 = b2.default, a._status = 1, a._result = b2);
                    }, function(b2) {
                        0 === a._status && (a._status = 2, a._result = b2);
                    });
                }
                if (1 === a._status) return a._result;
                throw a._result;
            };
            var S = function S() {
                var a = R.current;
                if (null === a) throw Error(z(321));
                return a;
            };
            var l = require_object_assign();
            var n = 60103;
            var p = 60106;
            exports.Fragment = 60107;
            exports.StrictMode = 60108;
            exports.Profiler = 60114;
            var q = 60109;
            var r = 60110;
            var t = 60112;
            exports.Suspense = 60113;
            var u = 60115;
            var v = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                w = Symbol.for;
                n = w("react.element");
                p = w("react.portal");
                exports.Fragment = w("react.fragment");
                exports.StrictMode = w("react.strict_mode");
                exports.Profiler = w("react.profiler");
                q = w("react.provider");
                r = w("react.context");
                t = w("react.forward_ref");
                exports.Suspense = w("react.suspense");
                u = w("react.memo");
                v = w("react.lazy");
            }
            var w;
            var x = "function" === typeof Symbol && Symbol.iterator;
            var A = {
                isMounted: function isMounted() {
                    return false;
                },
                enqueueForceUpdate: function enqueueForceUpdate() {},
                enqueueReplaceState: function enqueueReplaceState() {},
                enqueueSetState: function enqueueSetState() {}
            };
            var B = {};
            C.prototype.isReactComponent = {};
            C.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            C.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            D.prototype = C.prototype;
            var F = E.prototype = new D();
            F.constructor = E;
            l(F, C.prototype);
            F.isPureReactComponent = true;
            var G = {
                current: null
            };
            var H = Object.prototype.hasOwnProperty;
            var I = {
                key: true,
                ref: true,
                __self: true,
                __source: true
            };
            var M = /\/+/g;
            function O(a, b, c, e, d) {
                var k = typeof a === "undefined" ? "undefined" : _typeof(a);
                if ("undefined" === k || "boolean" === k) a = null;
                var h = false;
                if (null === a) h = true;
                else switch(k){
                    case "string":
                    case "number":
                        h = true;
                        break;
                    case "object":
                        switch(a.$$typeof){
                            case n:
                            case p:
                                h = true;
                        }
                }
                if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
                    return a2;
                })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
                h = 0;
                e = "" === e ? "." : e + ":";
                if (Array.isArray(a)) for(var g = 0; g < a.length; g++){
                    k = a[g];
                    var f = e + N(k, g);
                    h += O(k, b, c, f, d);
                }
                else if (f = y(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
                else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
                return h;
            }
            var R = {
                current: null
            };
            var T = {
                ReactCurrentDispatcher: R,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: G,
                IsSomeRendererActing: {
                    current: false
                },
                assign: l
            };
            exports.Children = {
                map: P,
                forEach: function forEach(a, b, c) {
                    P(a, function() {
                        b.apply(this, arguments);
                    }, c);
                },
                count: function count(a) {
                    var b = 0;
                    P(a, function() {
                        b++;
                    });
                    return b;
                },
                toArray: function toArray(a) {
                    return P(a, function(a2) {
                        return a2;
                    }) || [];
                },
                only: function only(a) {
                    if (!L(a)) throw Error(z(143));
                    return a;
                }
            };
            exports.Component = C;
            exports.PureComponent = E;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
            exports.cloneElement = function(a, b, c) {
                if (null === a || void 0 === a) throw Error(z(267, a));
                var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
                if (null != b) {
                    void 0 !== b.ref && (k = b.ref, h = G.current);
                    void 0 !== b.key && (d = "" + b.key);
                    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for(f in b)H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) e.children = c;
                else if (1 < f) {
                    g = Array(f);
                    for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                    e.children = g;
                }
                return {
                    $$typeof: n,
                    type: a.type,
                    key: d,
                    ref: k,
                    props: e,
                    _owner: h
                };
            };
            exports.createContext = function(a, b) {
                void 0 === b && (b = null);
                a = {
                    $$typeof: r,
                    _calculateChangedBits: b,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                };
                a.Provider = {
                    $$typeof: q,
                    _context: a
                };
                return a.Consumer = a;
            };
            exports.createElement = J;
            exports.createFactory = function(a) {
                var b = J.bind(null, a);
                b.type = a;
                return b;
            };
            exports.createRef = function() {
                return {
                    current: null
                };
            };
            exports.forwardRef = function(a) {
                return {
                    $$typeof: t,
                    render: a
                };
            };
            exports.isValidElement = L;
            exports.lazy = function(a) {
                return {
                    $$typeof: v,
                    _payload: {
                        _status: -1,
                        _result: a
                    },
                    _init: Q
                };
            };
            exports.memo = function(a, b) {
                return {
                    $$typeof: u,
                    type: a,
                    compare: void 0 === b ? null : b
                };
            };
            exports.useCallback = function(a, b) {
                return S().useCallback(a, b);
            };
            exports.useContext = function(a, b) {
                return S().useContext(a, b);
            };
            exports.useDebugValue = function() {};
            exports.useEffect = function(a, b) {
                return S().useEffect(a, b);
            };
            exports.useImperativeHandle = function(a, b, c) {
                return S().useImperativeHandle(a, b, c);
            };
            exports.useLayoutEffect = function(a, b) {
                return S().useLayoutEffect(a, b);
            };
            exports.useMemo = function(a, b) {
                return S().useMemo(a, b);
            };
            exports.useReducer = function(a, b, c) {
                return S().useReducer(a, b, c);
            };
            exports.useRef = function(a) {
                return S().useRef(a);
            };
            exports.useState = function(a) {
                return S().useState(a);
            };
            exports.version = "17.0.2";
        }
    });
    // node_modules/react/cjs/react.development.js
    var require_react_development = __commonJS({
        "node_modules/react/cjs/react.development.js": function(exports) {
            "use strict";
            if (process.env.NODE_ENV !== "production") {
                (function() {
                    "use strict";
                    var getIteratorFn = function getIteratorFn(maybeIterable) {
                        if (maybeIterable === null || typeof maybeIterable !== "object") {
                            return null;
                        }
                        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                        if (typeof maybeIterator === "function") {
                            return maybeIterator;
                        }
                        return null;
                    };
                    var setExtraStackFrame = function setExtraStackFrame(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    };
                    var warn = function warn(format) {
                        {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            printWarning("warn", format, args);
                        }
                    };
                    var error = function error(format) {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    };
                    var printWarning = function printWarning(level, format, args) {
                        {
                            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                            var stack = ReactDebugCurrentFrame2.getStackAddendum();
                            if (stack !== "") {
                                format += "%s";
                                args = args.concat([
                                    stack
                                ]);
                            }
                            var argsWithFormat = args.map(function(item) {
                                return "" + item;
                            });
                            argsWithFormat.unshift("Warning: " + format);
                            Function.prototype.apply.call(console[level], console, argsWithFormat);
                        }
                    };
                    var warnNoop = function warnNoop(publicInstance, callerName) {
                        {
                            var _constructor = publicInstance.constructor;
                            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                            var warningKey = componentName + "." + callerName;
                            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                                return;
                            }
                            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                        }
                    };
                    var Component2 = function Component2(props, context, updater) {
                        this.props = props;
                        this.context = context;
                        this.refs = emptyObject;
                        this.updater = updater || ReactNoopUpdateQueue;
                    };
                    var ComponentDummy = function ComponentDummy() {};
                    var PureComponent = function PureComponent(props, context, updater) {
                        this.props = props;
                        this.context = context;
                        this.refs = emptyObject;
                        this.updater = updater || ReactNoopUpdateQueue;
                    };
                    var createRef = function createRef() {
                        var refObject = {
                            current: null
                        };
                        {
                            Object.seal(refObject);
                        }
                        return refObject;
                    };
                    var getWrappedName = function getWrappedName(outerType, innerType, wrapperName) {
                        var functionName = innerType.displayName || innerType.name || "";
                        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
                    };
                    var getContextName = function getContextName(type) {
                        return type.displayName || "Context";
                    };
                    var hasValidRef = function hasValidRef(config) {
                        {
                            if (hasOwnProperty.call(config, "ref")) {
                                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config.ref !== void 0;
                    };
                    var hasValidKey = function hasValidKey(config) {
                        {
                            if (hasOwnProperty.call(config, "key")) {
                                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config.key !== void 0;
                    };
                    var defineKeyPropWarningGetter = function defineKeyPropWarningGetter(props, displayName) {
                        var warnAboutAccessingKey = function warnAboutAccessingKey() {
                            {
                                if (!specialPropKeyWarningShown) {
                                    specialPropKeyWarningShown = true;
                                    error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                                }
                            }
                        };
                        warnAboutAccessingKey.isReactWarning = true;
                        Object.defineProperty(props, "key", {
                            get: warnAboutAccessingKey,
                            configurable: true
                        });
                    };
                    var defineRefPropWarningGetter = function defineRefPropWarningGetter(props, displayName) {
                        var warnAboutAccessingRef = function warnAboutAccessingRef() {
                            {
                                if (!specialPropRefWarningShown) {
                                    specialPropRefWarningShown = true;
                                    error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                                }
                            }
                        };
                        warnAboutAccessingRef.isReactWarning = true;
                        Object.defineProperty(props, "ref", {
                            get: warnAboutAccessingRef,
                            configurable: true
                        });
                    };
                    var warnIfStringRefCannotBeAutoConverted = function warnIfStringRefCannotBeAutoConverted(config) {
                        {
                            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                                var componentName = getComponentName(ReactCurrentOwner.current.type);
                                if (!didWarnAboutStringRefs[componentName]) {
                                    error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                                    didWarnAboutStringRefs[componentName] = true;
                                }
                            }
                        }
                    };
                    var createElement2 = function createElement2(type, config, children) {
                        var propName;
                        var props = {};
                        var key = null;
                        var ref = null;
                        var self = null;
                        var source = null;
                        if (config != null) {
                            if (hasValidRef(config)) {
                                ref = config.ref;
                                {
                                    warnIfStringRefCannotBeAutoConverted(config);
                                }
                            }
                            if (hasValidKey(config)) {
                                key = "" + config.key;
                            }
                            self = config.__self === void 0 ? null : config.__self;
                            source = config.__source === void 0 ? null : config.__source;
                            for(propName in config){
                                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    props[propName] = config[propName];
                                }
                            }
                        }
                        var childrenLength = arguments.length - 2;
                        if (childrenLength === 1) {
                            props.children = children;
                        } else if (childrenLength > 1) {
                            var childArray = Array(childrenLength);
                            for(var i = 0; i < childrenLength; i++){
                                childArray[i] = arguments[i + 2];
                            }
                            {
                                if (Object.freeze) {
                                    Object.freeze(childArray);
                                }
                            }
                            props.children = childArray;
                        }
                        if (type && type.defaultProps) {
                            var defaultProps = type.defaultProps;
                            for(propName in defaultProps){
                                if (props[propName] === void 0) {
                                    props[propName] = defaultProps[propName];
                                }
                            }
                        }
                        {
                            if (key || ref) {
                                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                                if (key) {
                                    defineKeyPropWarningGetter(props, displayName);
                                }
                                if (ref) {
                                    defineRefPropWarningGetter(props, displayName);
                                }
                            }
                        }
                        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                    };
                    var cloneAndReplaceKey = function cloneAndReplaceKey(oldElement, newKey) {
                        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                        return newElement;
                    };
                    var cloneElement = function cloneElement(element, config, children) {
                        if (!!(element === null || element === void 0)) {
                            {
                                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                            }
                        }
                        var propName;
                        var props = _assign({}, element.props);
                        var key = element.key;
                        var ref = element.ref;
                        var self = element._self;
                        var source = element._source;
                        var owner = element._owner;
                        if (config != null) {
                            if (hasValidRef(config)) {
                                ref = config.ref;
                                owner = ReactCurrentOwner.current;
                            }
                            if (hasValidKey(config)) {
                                key = "" + config.key;
                            }
                            var defaultProps;
                            if (element.type && element.type.defaultProps) {
                                defaultProps = element.type.defaultProps;
                            }
                            for(propName in config){
                                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    if (config[propName] === void 0 && defaultProps !== void 0) {
                                        props[propName] = defaultProps[propName];
                                    } else {
                                        props[propName] = config[propName];
                                    }
                                }
                            }
                        }
                        var childrenLength = arguments.length - 2;
                        if (childrenLength === 1) {
                            props.children = children;
                        } else if (childrenLength > 1) {
                            var childArray = Array(childrenLength);
                            for(var i = 0; i < childrenLength; i++){
                                childArray[i] = arguments[i + 2];
                            }
                            props.children = childArray;
                        }
                        return ReactElement(element.type, key, ref, self, source, owner, props);
                    };
                    var isValidElement = function isValidElement(object) {
                        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    };
                    var escape = function escape(key) {
                        var escapeRegex = /[=:]/g;
                        var escaperLookup = {
                            "=": "=0",
                            ":": "=2"
                        };
                        var escapedString = key.replace(escapeRegex, function(match) {
                            return escaperLookup[match];
                        });
                        return "$" + escapedString;
                    };
                    var escapeUserProvidedKey = function escapeUserProvidedKey(text) {
                        return text.replace(userProvidedKeyEscapeRegex, "$&/");
                    };
                    var getElementKey = function getElementKey(element, index) {
                        if (typeof element === "object" && element !== null && element.key != null) {
                            return escape("" + element.key);
                        }
                        return index.toString(36);
                    };
                    var mapChildren = function mapChildren(children, func, context) {
                        if (children == null) {
                            return children;
                        }
                        var result = [];
                        var count = 0;
                        mapIntoArray(children, result, "", "", function(child) {
                            return func.call(context, child, count++);
                        });
                        return result;
                    };
                    var countChildren = function countChildren(children) {
                        var n = 0;
                        mapChildren(children, function() {
                            n++;
                        });
                        return n;
                    };
                    var forEachChildren = function forEachChildren(children, forEachFunc, forEachContext) {
                        mapChildren(children, function() {
                            forEachFunc.apply(this, arguments);
                        }, forEachContext);
                    };
                    var toArray = function toArray(children) {
                        return mapChildren(children, function(child) {
                            return child;
                        }) || [];
                    };
                    var onlyChild = function onlyChild(children) {
                        if (!isValidElement(children)) {
                            {
                                throw Error("React.Children.only expected to receive a single React element child.");
                            }
                        }
                        return children;
                    };
                    var createContext = function createContext(defaultValue, calculateChangedBits) {
                        if (calculateChangedBits === void 0) {
                            calculateChangedBits = null;
                        } else {
                            {
                                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                                    error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                                }
                            }
                        }
                        var context = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            _calculateChangedBits: calculateChangedBits,
                            _currentValue: defaultValue,
                            _currentValue2: defaultValue,
                            _threadCount: 0,
                            Provider: null,
                            Consumer: null
                        };
                        context.Provider = {
                            $$typeof: REACT_PROVIDER_TYPE,
                            _context: context
                        };
                        var hasWarnedAboutUsingNestedContextConsumers = false;
                        var hasWarnedAboutUsingConsumerProvider = false;
                        var hasWarnedAboutDisplayNameOnConsumer = false;
                        {
                            var Consumer = {
                                $$typeof: REACT_CONTEXT_TYPE,
                                _context: context,
                                _calculateChangedBits: context._calculateChangedBits
                            };
                            Object.defineProperties(Consumer, {
                                Provider: {
                                    get: function get() {
                                        if (!hasWarnedAboutUsingConsumerProvider) {
                                            hasWarnedAboutUsingConsumerProvider = true;
                                            error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                        }
                                        return context.Provider;
                                    },
                                    set: function set(_Provider) {
                                        context.Provider = _Provider;
                                    }
                                },
                                _currentValue: {
                                    get: function get() {
                                        return context._currentValue;
                                    },
                                    set: function set(_currentValue) {
                                        context._currentValue = _currentValue;
                                    }
                                },
                                _currentValue2: {
                                    get: function get() {
                                        return context._currentValue2;
                                    },
                                    set: function set(_currentValue2) {
                                        context._currentValue2 = _currentValue2;
                                    }
                                },
                                _threadCount: {
                                    get: function get() {
                                        return context._threadCount;
                                    },
                                    set: function set(_threadCount) {
                                        context._threadCount = _threadCount;
                                    }
                                },
                                Consumer: {
                                    get: function get() {
                                        if (!hasWarnedAboutUsingNestedContextConsumers) {
                                            hasWarnedAboutUsingNestedContextConsumers = true;
                                            error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                        }
                                        return context.Consumer;
                                    }
                                },
                                displayName: {
                                    get: function get() {
                                        return context.displayName;
                                    },
                                    set: function set(displayName) {
                                        if (!hasWarnedAboutDisplayNameOnConsumer) {
                                            warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                            hasWarnedAboutDisplayNameOnConsumer = true;
                                        }
                                    }
                                }
                            });
                            context.Consumer = Consumer;
                        }
                        {
                            context._currentRenderer = null;
                            context._currentRenderer2 = null;
                        }
                        return context;
                    };
                    var lazyInitializer = function lazyInitializer(payload) {
                        if (payload._status === Uninitialized) {
                            var ctor = payload._result;
                            var thenable = ctor();
                            var pending = payload;
                            pending._status = Pending;
                            pending._result = thenable;
                            thenable.then(function(moduleObject) {
                                if (payload._status === Pending) {
                                    var defaultExport = moduleObject.default;
                                    {
                                        if (defaultExport === void 0) {
                                            error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                                        }
                                    }
                                    var resolved = payload;
                                    resolved._status = Resolved;
                                    resolved._result = defaultExport;
                                }
                            }, function(error2) {
                                if (payload._status === Pending) {
                                    var rejected = payload;
                                    rejected._status = Rejected;
                                    rejected._result = error2;
                                }
                            });
                        }
                        if (payload._status === Resolved) {
                            return payload._result;
                        } else {
                            throw payload._result;
                        }
                    };
                    var lazy = function lazy(ctor) {
                        var payload = {
                            _status: -1,
                            _result: ctor
                        };
                        var lazyType = {
                            $$typeof: REACT_LAZY_TYPE,
                            _payload: payload,
                            _init: lazyInitializer
                        };
                        {
                            var defaultProps;
                            var propTypes;
                            Object.defineProperties(lazyType, {
                                defaultProps: {
                                    configurable: true,
                                    get: function get() {
                                        return defaultProps;
                                    },
                                    set: function set(newDefaultProps) {
                                        error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                        defaultProps = newDefaultProps;
                                        Object.defineProperty(lazyType, "defaultProps", {
                                            enumerable: true
                                        });
                                    }
                                },
                                propTypes: {
                                    configurable: true,
                                    get: function get() {
                                        return propTypes;
                                    },
                                    set: function set(newPropTypes) {
                                        error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                        propTypes = newPropTypes;
                                        Object.defineProperty(lazyType, "propTypes", {
                                            enumerable: true
                                        });
                                    }
                                }
                            });
                        }
                        return lazyType;
                    };
                    var forwardRef = function forwardRef(render) {
                        {
                            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
                            } else if (typeof render !== "function") {
                                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render === "undefined" ? "undefined" : _typeof(render));
                            } else {
                                if (render.length !== 0 && render.length !== 2) {
                                    error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                                }
                            }
                            if (render != null) {
                                if (render.defaultProps != null || render.propTypes != null) {
                                    error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                                }
                            }
                        }
                        var elementType = {
                            $$typeof: REACT_FORWARD_REF_TYPE,
                            render: render
                        };
                        {
                            var ownName;
                            Object.defineProperty(elementType, "displayName", {
                                enumerable: false,
                                configurable: true,
                                get: function get() {
                                    return ownName;
                                },
                                set: function set(name) {
                                    ownName = name;
                                    if (render.displayName == null) {
                                        render.displayName = name;
                                    }
                                }
                            });
                        }
                        return elementType;
                    };
                    var isValidElementType = function isValidElementType(type) {
                        if (typeof type === "string" || typeof type === "function") {
                            return true;
                        }
                        if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
                            return true;
                        }
                        if (typeof type === "object" && type !== null) {
                            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                                return true;
                            }
                        }
                        return false;
                    };
                    var memo = function memo(type, compare) {
                        {
                            if (!isValidElementType(type)) {
                                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type === "undefined" ? "undefined" : _typeof(type));
                            }
                        }
                        var elementType = {
                            $$typeof: REACT_MEMO_TYPE,
                            type: type,
                            compare: compare === void 0 ? null : compare
                        };
                        {
                            var ownName;
                            Object.defineProperty(elementType, "displayName", {
                                enumerable: false,
                                configurable: true,
                                get: function get() {
                                    return ownName;
                                },
                                set: function set(name) {
                                    ownName = name;
                                    if (type.displayName == null) {
                                        type.displayName = name;
                                    }
                                }
                            });
                        }
                        return elementType;
                    };
                    var resolveDispatcher = function resolveDispatcher() {
                        var dispatcher = ReactCurrentDispatcher.current;
                        if (!(dispatcher !== null)) {
                            {
                                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                            }
                        }
                        return dispatcher;
                    };
                    var useContext2 = function useContext2(Context, unstable_observedBits) {
                        var dispatcher = resolveDispatcher();
                        {
                            if (unstable_observedBits !== void 0) {
                                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
                            }
                            if (Context._context !== void 0) {
                                var realContext = Context._context;
                                if (realContext.Consumer === Context) {
                                    error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                                } else if (realContext.Provider === Context) {
                                    error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                                }
                            }
                        }
                        return dispatcher.useContext(Context, unstable_observedBits);
                    };
                    var useState3 = function useState3(initialState) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useState(initialState);
                    };
                    var useReducer = function useReducer(reducer, initialArg, init) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useReducer(reducer, initialArg, init);
                    };
                    var useRef = function useRef(initialValue) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useRef(initialValue);
                    };
                    var useEffect2 = function useEffect2(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useEffect(create, deps);
                    };
                    var useLayoutEffect = function useLayoutEffect(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useLayoutEffect(create, deps);
                    };
                    var useCallback = function useCallback(callback, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useCallback(callback, deps);
                    };
                    var useMemo = function useMemo(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useMemo(create, deps);
                    };
                    var useImperativeHandle = function useImperativeHandle(ref, create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useImperativeHandle(ref, create, deps);
                    };
                    var useDebugValue = function useDebugValue(value, formatterFn) {
                        {
                            var dispatcher = resolveDispatcher();
                            return dispatcher.useDebugValue(value, formatterFn);
                        }
                    };
                    var disabledLog = function disabledLog() {};
                    var disableLogs = function disableLogs() {
                        {
                            if (disabledDepth === 0) {
                                prevLog = console.log;
                                prevInfo = console.info;
                                prevWarn = console.warn;
                                prevError = console.error;
                                prevGroup = console.group;
                                prevGroupCollapsed = console.groupCollapsed;
                                prevGroupEnd = console.groupEnd;
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    value: disabledLog,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    info: props,
                                    log: props,
                                    warn: props,
                                    error: props,
                                    group: props,
                                    groupCollapsed: props,
                                    groupEnd: props
                                });
                            }
                            disabledDepth++;
                        }
                    };
                    var reenableLogs = function reenableLogs() {
                        {
                            disabledDepth--;
                            if (disabledDepth === 0) {
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    log: _assign({}, props, {
                                        value: prevLog
                                    }),
                                    info: _assign({}, props, {
                                        value: prevInfo
                                    }),
                                    warn: _assign({}, props, {
                                        value: prevWarn
                                    }),
                                    error: _assign({}, props, {
                                        value: prevError
                                    }),
                                    group: _assign({}, props, {
                                        value: prevGroup
                                    }),
                                    groupCollapsed: _assign({}, props, {
                                        value: prevGroupCollapsed
                                    }),
                                    groupEnd: _assign({}, props, {
                                        value: prevGroupEnd
                                    })
                                });
                            }
                            if (disabledDepth < 0) {
                                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                            }
                        }
                    };
                    var describeBuiltInComponentFrame = function describeBuiltInComponentFrame(name, source, ownerFn) {
                        {
                            if (prefix === void 0) {
                                try {
                                    throw Error();
                                } catch (x) {
                                    var match = x.stack.trim().match(/\n( *(at )?)/);
                                    prefix = match && match[1] || "";
                                }
                            }
                            return "\n" + prefix + name;
                        }
                    };
                    var describeNativeComponentFrame = function describeNativeComponentFrame(fn, construct) {
                        if (!fn || reentry) {
                            return "";
                        }
                        {
                            var frame = componentFrameCache.get(fn);
                            if (frame !== void 0) {
                                return frame;
                            }
                        }
                        var control;
                        reentry = true;
                        var previousPrepareStackTrace = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0;
                        var previousDispatcher;
                        {
                            previousDispatcher = ReactCurrentDispatcher$1.current;
                            ReactCurrentDispatcher$1.current = null;
                            disableLogs();
                        }
                        try {
                            if (construct) {
                                var Fake = function Fake() {
                                    throw Error();
                                };
                                Object.defineProperty(Fake.prototype, "props", {
                                    set: function set() {
                                        throw Error();
                                    }
                                });
                                if (typeof Reflect === "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(Fake, []);
                                    } catch (x) {
                                        control = x;
                                    }
                                    Reflect.construct(fn, [], Fake);
                                } else {
                                    try {
                                        Fake.call();
                                    } catch (x1) {
                                        control = x1;
                                    }
                                    fn.call(Fake.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (x2) {
                                    control = x2;
                                }
                                fn();
                            }
                        } catch (sample) {
                            if (sample && control && typeof sample.stack === "string") {
                                var sampleLines = sample.stack.split("\n");
                                var controlLines = control.stack.split("\n");
                                var s = sampleLines.length - 1;
                                var c = controlLines.length - 1;
                                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                    c--;
                                }
                                for(; s >= 1 && c >= 0; s--, c--){
                                    if (sampleLines[s] !== controlLines[c]) {
                                        if (s !== 1 || c !== 1) {
                                            do {
                                                s--;
                                                c--;
                                                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                    var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                    {
                                                        if (typeof fn === "function") {
                                                            componentFrameCache.set(fn, _frame);
                                                        }
                                                    }
                                                    return _frame;
                                                }
                                            }while (s >= 1 && c >= 0);
                                        }
                                        break;
                                    }
                                }
                            }
                        } finally{
                            reentry = false;
                            {
                                ReactCurrentDispatcher$1.current = previousDispatcher;
                                reenableLogs();
                            }
                            Error.prepareStackTrace = previousPrepareStackTrace;
                        }
                        var name = fn ? fn.displayName || fn.name : "";
                        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                        {
                            if (typeof fn === "function") {
                                componentFrameCache.set(fn, syntheticFrame);
                            }
                        }
                        return syntheticFrame;
                    };
                    var describeFunctionComponentFrame = function describeFunctionComponentFrame(fn, source, ownerFn) {
                        {
                            return describeNativeComponentFrame(fn, false);
                        }
                    };
                    var shouldConstruct = function shouldConstruct(Component3) {
                        var prototype = Component3.prototype;
                        return !!(prototype && prototype.isReactComponent);
                    };
                    var setCurrentlyValidatingElement = function setCurrentlyValidatingElement(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                            } else {
                                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                            }
                        }
                    };
                    var checkPropTypes = function checkPropTypes(typeSpecs, values, location, componentName, element) {
                        {
                            var has = Function.call.bind(Object.prototype.hasOwnProperty);
                            for(var typeSpecName in typeSpecs){
                                if (has(typeSpecs, typeSpecName)) {
                                    var error$1 = void 0;
                                    try {
                                        if (typeof typeSpecs[typeSpecName] !== "function") {
                                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _typeof(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                            err.name = "Invariant Violation";
                                            throw err;
                                        }
                                        error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                    } catch (ex) {
                                        error$1 = ex;
                                    }
                                    if (error$1 && !_instanceof(error$1, Error)) {
                                        setCurrentlyValidatingElement(element);
                                        error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _typeof(error$1));
                                        setCurrentlyValidatingElement(null);
                                    }
                                    if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                        loggedTypeFailures[error$1.message] = true;
                                        setCurrentlyValidatingElement(element);
                                        error("Failed %s type: %s", location, error$1.message);
                                        setCurrentlyValidatingElement(null);
                                    }
                                }
                            }
                        }
                    };
                    var setCurrentlyValidatingElement$1 = function setCurrentlyValidatingElement$1(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                setExtraStackFrame(stack);
                            } else {
                                setExtraStackFrame(null);
                            }
                        }
                    };
                    var getDeclarationErrorAddendum = function getDeclarationErrorAddendum() {
                        if (ReactCurrentOwner.current) {
                            var name = getComponentName(ReactCurrentOwner.current.type);
                            if (name) {
                                return "\n\nCheck the render method of `" + name + "`.";
                            }
                        }
                        return "";
                    };
                    var getSourceInfoErrorAddendum = function getSourceInfoErrorAddendum(source) {
                        if (source !== void 0) {
                            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                            var lineNumber = source.lineNumber;
                            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                        }
                        return "";
                    };
                    var getSourceInfoErrorAddendumForProps = function getSourceInfoErrorAddendumForProps(elementProps) {
                        if (elementProps !== null && elementProps !== void 0) {
                            return getSourceInfoErrorAddendum(elementProps.__source);
                        }
                        return "";
                    };
                    var getCurrentComponentErrorInfo = function getCurrentComponentErrorInfo(parentType) {
                        var info = getDeclarationErrorAddendum();
                        if (!info) {
                            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                            if (parentName) {
                                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                            }
                        }
                        return info;
                    };
                    var validateExplicitKey = function validateExplicitKey(element, parentType) {
                        if (!element._store || element._store.validated || element.key != null) {
                            return;
                        }
                        element._store.validated = true;
                        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            return;
                        }
                        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                        var childOwner = "";
                        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
                        }
                        {
                            setCurrentlyValidatingElement$1(element);
                            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                            setCurrentlyValidatingElement$1(null);
                        }
                    };
                    var validateChildKeys = function validateChildKeys(node, parentType) {
                        if (typeof node !== "object") {
                            return;
                        }
                        if (Array.isArray(node)) {
                            for(var i = 0; i < node.length; i++){
                                var child = node[i];
                                if (isValidElement(child)) {
                                    validateExplicitKey(child, parentType);
                                }
                            }
                        } else if (isValidElement(node)) {
                            if (node._store) {
                                node._store.validated = true;
                            }
                        } else if (node) {
                            var iteratorFn = getIteratorFn(node);
                            if (typeof iteratorFn === "function") {
                                if (iteratorFn !== node.entries) {
                                    var iterator = iteratorFn.call(node);
                                    var step;
                                    while(!(step = iterator.next()).done){
                                        if (isValidElement(step.value)) {
                                            validateExplicitKey(step.value, parentType);
                                        }
                                    }
                                }
                            }
                        }
                    };
                    var validatePropTypes = function validatePropTypes(element) {
                        {
                            var type = element.type;
                            if (type === null || type === void 0 || typeof type === "string") {
                                return;
                            }
                            var propTypes;
                            if (typeof type === "function") {
                                propTypes = type.propTypes;
                            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                                propTypes = type.propTypes;
                            } else {
                                return;
                            }
                            if (propTypes) {
                                var name = getComponentName(type);
                                checkPropTypes(propTypes, element.props, "prop", name, element);
                            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                                propTypesMisspellWarningShown = true;
                                var _name = getComponentName(type);
                                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                            }
                            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                            }
                        }
                    };
                    var validateFragmentProps = function validateFragmentProps(fragment) {
                        {
                            var keys = Object.keys(fragment.props);
                            for(var i = 0; i < keys.length; i++){
                                var key = keys[i];
                                if (key !== "children" && key !== "key") {
                                    setCurrentlyValidatingElement$1(fragment);
                                    error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                    setCurrentlyValidatingElement$1(null);
                                    break;
                                }
                            }
                            if (fragment.ref !== null) {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                                setCurrentlyValidatingElement$1(null);
                            }
                        }
                    };
                    var createElementWithValidation = function createElementWithValidation(type, props, children) {
                        var validType = isValidElementType(type);
                        if (!validType) {
                            var info = "";
                            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                            }
                            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                            if (sourceInfo) {
                                info += sourceInfo;
                            } else {
                                info += getDeclarationErrorAddendum();
                            }
                            var typeString;
                            if (type === null) {
                                typeString = "null";
                            } else if (Array.isArray(type)) {
                                typeString = "array";
                            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                                info = " Did you accidentally export a JSX literal instead of a component?";
                            } else {
                                typeString = typeof type === "undefined" ? "undefined" : _typeof(type);
                            }
                            {
                                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                            }
                        }
                        var element = createElement2.apply(this, arguments);
                        if (element == null) {
                            return element;
                        }
                        if (validType) {
                            for(var i = 2; i < arguments.length; i++){
                                validateChildKeys(arguments[i], type);
                            }
                        }
                        if (type === exports.Fragment) {
                            validateFragmentProps(element);
                        } else {
                            validatePropTypes(element);
                        }
                        return element;
                    };
                    var createFactoryWithValidation = function createFactoryWithValidation(type) {
                        var validatedFactory = createElementWithValidation.bind(null, type);
                        validatedFactory.type = type;
                        {
                            if (!didWarnAboutDeprecatedCreateFactory) {
                                didWarnAboutDeprecatedCreateFactory = true;
                                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                            }
                            Object.defineProperty(validatedFactory, "type", {
                                enumerable: false,
                                get: function get() {
                                    warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                                    Object.defineProperty(this, "type", {
                                        value: type
                                    });
                                    return type;
                                }
                            });
                        }
                        return validatedFactory;
                    };
                    var cloneElementWithValidation = function cloneElementWithValidation(element, props, children) {
                        var newElement = cloneElement.apply(this, arguments);
                        for(var i = 2; i < arguments.length; i++){
                            validateChildKeys(arguments[i], newElement.type);
                        }
                        validatePropTypes(newElement);
                        return newElement;
                    };
                    var _assign = require_object_assign();
                    var ReactVersion = "17.0.2";
                    var REACT_ELEMENT_TYPE = 60103;
                    var REACT_PORTAL_TYPE = 60106;
                    exports.Fragment = 60107;
                    exports.StrictMode = 60108;
                    exports.Profiler = 60114;
                    var REACT_PROVIDER_TYPE = 60109;
                    var REACT_CONTEXT_TYPE = 60110;
                    var REACT_FORWARD_REF_TYPE = 60112;
                    exports.Suspense = 60113;
                    var REACT_SUSPENSE_LIST_TYPE = 60120;
                    var REACT_MEMO_TYPE = 60115;
                    var REACT_LAZY_TYPE = 60116;
                    var REACT_BLOCK_TYPE = 60121;
                    var REACT_SERVER_BLOCK_TYPE = 60122;
                    var REACT_FUNDAMENTAL_TYPE = 60117;
                    var REACT_SCOPE_TYPE = 60119;
                    var REACT_OPAQUE_ID_TYPE = 60128;
                    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
                    var REACT_OFFSCREEN_TYPE = 60130;
                    var REACT_LEGACY_HIDDEN_TYPE = 60131;
                    if (typeof Symbol === "function" && Symbol.for) {
                        var symbolFor = Symbol.for;
                        REACT_ELEMENT_TYPE = symbolFor("react.element");
                        REACT_PORTAL_TYPE = symbolFor("react.portal");
                        exports.Fragment = symbolFor("react.fragment");
                        exports.StrictMode = symbolFor("react.strict_mode");
                        exports.Profiler = symbolFor("react.profiler");
                        REACT_PROVIDER_TYPE = symbolFor("react.provider");
                        REACT_CONTEXT_TYPE = symbolFor("react.context");
                        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
                        exports.Suspense = symbolFor("react.suspense");
                        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
                        REACT_MEMO_TYPE = symbolFor("react.memo");
                        REACT_LAZY_TYPE = symbolFor("react.lazy");
                        REACT_BLOCK_TYPE = symbolFor("react.block");
                        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
                        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
                        REACT_SCOPE_TYPE = symbolFor("react.scope");
                        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
                        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
                        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
                        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
                    }
                    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
                    var FAUX_ITERATOR_SYMBOL = "@@iterator";
                    var ReactCurrentDispatcher = {
                        current: null
                    };
                    var ReactCurrentBatchConfig = {
                        transition: 0
                    };
                    var ReactCurrentOwner = {
                        current: null
                    };
                    var ReactDebugCurrentFrame = {};
                    var currentExtraStackFrame = null;
                    {
                        ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                            {
                                currentExtraStackFrame = stack;
                            }
                        };
                        ReactDebugCurrentFrame.getCurrentStack = null;
                        ReactDebugCurrentFrame.getStackAddendum = function() {
                            var stack = "";
                            if (currentExtraStackFrame) {
                                stack += currentExtraStackFrame;
                            }
                            var impl = ReactDebugCurrentFrame.getCurrentStack;
                            if (impl) {
                                stack += impl() || "";
                            }
                            return stack;
                        };
                    }
                    var IsSomeRendererActing = {
                        current: false
                    };
                    var ReactSharedInternals = {
                        ReactCurrentDispatcher: ReactCurrentDispatcher,
                        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                        ReactCurrentOwner: ReactCurrentOwner,
                        IsSomeRendererActing: IsSomeRendererActing,
                        assign: _assign
                    };
                    {
                        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                    }
                    var didWarnStateUpdateForUnmountedComponent = {};
                    var ReactNoopUpdateQueue = {
                        isMounted: function isMounted(publicInstance) {
                            return false;
                        },
                        enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
                            warnNoop(publicInstance, "forceUpdate");
                        },
                        enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
                            warnNoop(publicInstance, "replaceState");
                        },
                        enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
                            warnNoop(publicInstance, "setState");
                        }
                    };
                    var emptyObject = {};
                    {
                        Object.freeze(emptyObject);
                    }
                    Component2.prototype.isReactComponent = {};
                    Component2.prototype.setState = function(partialState, callback) {
                        if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
                            {
                                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                            }
                        }
                        this.updater.enqueueSetState(this, partialState, callback, "setState");
                    };
                    Component2.prototype.forceUpdate = function(callback) {
                        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                    };
                    {
                        var deprecatedAPIs = {
                            isMounted: [
                                "isMounted",
                                "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                            ],
                            replaceState: [
                                "replaceState",
                                "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                            ]
                        };
                        var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
                            Object.defineProperty(Component2.prototype, methodName, {
                                get: function get() {
                                    warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                    return void 0;
                                }
                            });
                        };
                        for(var fnName in deprecatedAPIs){
                            if (deprecatedAPIs.hasOwnProperty(fnName)) {
                                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                            }
                        }
                    }
                    ComponentDummy.prototype = Component2.prototype;
                    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
                    pureComponentPrototype.constructor = PureComponent;
                    _assign(pureComponentPrototype, Component2.prototype);
                    pureComponentPrototype.isPureReactComponent = true;
                    function getComponentName(type) {
                        if (type == null) {
                            return null;
                        }
                        {
                            if (typeof type.tag === "number") {
                                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
                            }
                        }
                        if (typeof type === "function") {
                            return type.displayName || type.name || null;
                        }
                        if (typeof type === "string") {
                            return type;
                        }
                        switch(type){
                            case exports.Fragment:
                                return "Fragment";
                            case REACT_PORTAL_TYPE:
                                return "Portal";
                            case exports.Profiler:
                                return "Profiler";
                            case exports.StrictMode:
                                return "StrictMode";
                            case exports.Suspense:
                                return "Suspense";
                            case REACT_SUSPENSE_LIST_TYPE:
                                return "SuspenseList";
                        }
                        if (typeof type === "object") {
                            switch(type.$$typeof){
                                case REACT_CONTEXT_TYPE:
                                    var context = type;
                                    return getContextName(context) + ".Consumer";
                                case REACT_PROVIDER_TYPE:
                                    var provider = type;
                                    return getContextName(provider._context) + ".Provider";
                                case REACT_FORWARD_REF_TYPE:
                                    return getWrappedName(type, type.render, "ForwardRef");
                                case REACT_MEMO_TYPE:
                                    return getComponentName(type.type);
                                case REACT_BLOCK_TYPE:
                                    return getComponentName(type._render);
                                case REACT_LAZY_TYPE:
                                    {
                                        var lazyComponent = type;
                                        var payload = lazyComponent._payload;
                                        var init = lazyComponent._init;
                                        try {
                                            return getComponentName(init(payload));
                                        } catch (x) {
                                            return null;
                                        }
                                    }
                            }
                        }
                        return null;
                    }
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    var RESERVED_PROPS = {
                        key: true,
                        ref: true,
                        __self: true,
                        __source: true
                    };
                    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                    {
                        didWarnAboutStringRefs = {};
                    }
                    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                        var element = {
                            $$typeof: REACT_ELEMENT_TYPE,
                            type: type,
                            key: key,
                            ref: ref,
                            props: props,
                            _owner: owner
                        };
                        {
                            element._store = {};
                            Object.defineProperty(element._store, "validated", {
                                configurable: false,
                                enumerable: false,
                                writable: true,
                                value: false
                            });
                            Object.defineProperty(element, "_self", {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: self
                            });
                            Object.defineProperty(element, "_source", {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: source
                            });
                            if (Object.freeze) {
                                Object.freeze(element.props);
                                Object.freeze(element);
                            }
                        }
                        return element;
                    };
                    var SEPARATOR = ".";
                    var SUBSEPARATOR = ":";
                    var didWarnAboutMaps = false;
                    var userProvidedKeyEscapeRegex = /\/+/g;
                    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                        var type = typeof children === "undefined" ? "undefined" : _typeof(children);
                        if (type === "undefined" || type === "boolean") {
                            children = null;
                        }
                        var invokeCallback = false;
                        if (children === null) {
                            invokeCallback = true;
                        } else {
                            switch(type){
                                case "string":
                                case "number":
                                    invokeCallback = true;
                                    break;
                                case "object":
                                    switch(children.$$typeof){
                                        case REACT_ELEMENT_TYPE:
                                        case REACT_PORTAL_TYPE:
                                            invokeCallback = true;
                                    }
                            }
                        }
                        if (invokeCallback) {
                            var _child = children;
                            var mappedChild = callback(_child);
                            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                            if (Array.isArray(mappedChild)) {
                                var escapedChildKey = "";
                                if (childKey != null) {
                                    escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                                }
                                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                                    return c;
                                });
                            } else if (mappedChild != null) {
                                if (isValidElement(mappedChild)) {
                                    mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                                }
                                array.push(mappedChild);
                            }
                            return 1;
                        }
                        var child;
                        var nextName;
                        var subtreeCount = 0;
                        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                        if (Array.isArray(children)) {
                            for(var i = 0; i < children.length; i++){
                                child = children[i];
                                nextName = nextNamePrefix + getElementKey(child, i);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else {
                            var iteratorFn = getIteratorFn(children);
                            if (typeof iteratorFn === "function") {
                                var iterableChildren = children;
                                {
                                    if (iteratorFn === iterableChildren.entries) {
                                        if (!didWarnAboutMaps) {
                                            warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                                        }
                                        didWarnAboutMaps = true;
                                    }
                                }
                                var iterator = iteratorFn.call(iterableChildren);
                                var step;
                                var ii = 0;
                                while(!(step = iterator.next()).done){
                                    child = step.value;
                                    nextName = nextNamePrefix + getElementKey(child, ii++);
                                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                                }
                            } else if (type === "object") {
                                var childrenString = "" + children;
                                {
                                    {
                                        throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                                    }
                                }
                            }
                        }
                        return subtreeCount;
                    }
                    var Uninitialized = -1;
                    var Pending = 0;
                    var Resolved = 1;
                    var Rejected = 2;
                    var enableScopeAPI = false;
                    var disabledDepth = 0;
                    var prevLog;
                    var prevInfo;
                    var prevWarn;
                    var prevError;
                    var prevGroup;
                    var prevGroupCollapsed;
                    var prevGroupEnd;
                    disabledLog.__reactDisabledLog = true;
                    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                    var prefix;
                    var reentry = false;
                    var componentFrameCache;
                    {
                        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                        componentFrameCache = new PossiblyWeakMap();
                    }
                    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                        if (type == null) {
                            return "";
                        }
                        if (typeof type === "function") {
                            {
                                return describeNativeComponentFrame(type, shouldConstruct(type));
                            }
                        }
                        if (typeof type === "string") {
                            return describeBuiltInComponentFrame(type);
                        }
                        switch(type){
                            case exports.Suspense:
                                return describeBuiltInComponentFrame("Suspense");
                            case REACT_SUSPENSE_LIST_TYPE:
                                return describeBuiltInComponentFrame("SuspenseList");
                        }
                        if (typeof type === "object") {
                            switch(type.$$typeof){
                                case REACT_FORWARD_REF_TYPE:
                                    return describeFunctionComponentFrame(type.render);
                                case REACT_MEMO_TYPE:
                                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                                case REACT_BLOCK_TYPE:
                                    return describeFunctionComponentFrame(type._render);
                                case REACT_LAZY_TYPE:
                                    {
                                        var lazyComponent = type;
                                        var payload = lazyComponent._payload;
                                        var init = lazyComponent._init;
                                        try {
                                            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                        } catch (x) {}
                                    }
                            }
                        }
                        return "";
                    }
                    var loggedTypeFailures = {};
                    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                    var propTypesMisspellWarningShown;
                    {
                        propTypesMisspellWarningShown = false;
                    }
                    var ownerHasKeyUseWarning = {};
                    var didWarnAboutDeprecatedCreateFactory = false;
                    {
                        try {
                            var frozenObject = Object.freeze({});
                            /* @__PURE__ */ new Map([
                                [
                                    frozenObject,
                                    null
                                ]
                            ]);
                            /* @__PURE__ */ new Set([
                                frozenObject
                            ]);
                        } catch (e) {}
                    }
                    var createElement$1 = createElementWithValidation;
                    var cloneElement$1 = cloneElementWithValidation;
                    var createFactory = createFactoryWithValidation;
                    var Children = {
                        map: mapChildren,
                        forEach: forEachChildren,
                        count: countChildren,
                        toArray: toArray,
                        only: onlyChild
                    };
                    exports.Children = Children;
                    exports.Component = Component2;
                    exports.PureComponent = PureComponent;
                    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                    exports.cloneElement = cloneElement$1;
                    exports.createContext = createContext;
                    exports.createElement = createElement$1;
                    exports.createFactory = createFactory;
                    exports.createRef = createRef;
                    exports.forwardRef = forwardRef;
                    exports.isValidElement = isValidElement;
                    exports.lazy = lazy;
                    exports.memo = memo;
                    exports.useCallback = useCallback;
                    exports.useContext = useContext2;
                    exports.useDebugValue = useDebugValue;
                    exports.useEffect = useEffect2;
                    exports.useImperativeHandle = useImperativeHandle;
                    exports.useLayoutEffect = useLayoutEffect;
                    exports.useMemo = useMemo;
                    exports.useReducer = useReducer;
                    exports.useRef = useRef;
                    exports.useState = useState3;
                    exports.version = ReactVersion;
                })();
            }
        }
    });
    // node_modules/react/index.js
    var require_react = __commonJS({
        "node_modules/react/index.js": function(exports, module) {
            "use strict";
            if (process.env.NODE_ENV === "production") {
                module.exports = require_react_production_min();
            } else {
                module.exports = require_react_development();
            }
        }
    });
    // node_modules/deepmerge/dist/cjs.js
    var require_cjs = __commonJS({
        "node_modules/deepmerge/dist/cjs.js": function(exports, module) {
            "use strict";
            var isNonNullObject = function isNonNullObject(value) {
                return !!value && typeof value === "object";
            };
            var isSpecial = function isSpecial(value) {
                var stringValue = Object.prototype.toString.call(value);
                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
            };
            var isReactElement = function isReactElement(value) {
                return value.$$typeof === REACT_ELEMENT_TYPE;
            };
            var emptyTarget = function emptyTarget(val) {
                return Array.isArray(val) ? [] : {};
            };
            var cloneUnlessOtherwiseSpecified = function cloneUnlessOtherwiseSpecified(value, options) {
                return options.clone !== false && options.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options) : value;
            };
            var defaultArrayMerge = function defaultArrayMerge(target, source, options) {
                return target.concat(source).map(function(element) {
                    return cloneUnlessOtherwiseSpecified(element, options);
                });
            };
            var getMergeFunction = function getMergeFunction(key, options) {
                if (!options.customMerge) {
                    return deepmerge2;
                }
                var customMerge = options.customMerge(key);
                return typeof customMerge === "function" ? customMerge : deepmerge2;
            };
            var getEnumerableOwnPropertySymbols = function getEnumerableOwnPropertySymbols(target) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                    return target.propertyIsEnumerable(symbol);
                }) : [];
            };
            var getKeys = function getKeys(target) {
                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
            };
            var propertyIsOnObject = function propertyIsOnObject(object, property) {
                try {
                    return property in object;
                } catch (_) {
                    return false;
                }
            };
            var propertyIsUnsafe = function propertyIsUnsafe(target, key) {
                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
            };
            var mergeObject = function mergeObject(target, source, options) {
                var destination = {};
                if (options.isMergeableObject(target)) {
                    getKeys(target).forEach(function(key) {
                        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                    });
                }
                getKeys(source).forEach(function(key) {
                    if (propertyIsUnsafe(target, key)) {
                        return;
                    }
                    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                    } else {
                        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                    }
                });
                return destination;
            };
            var deepmerge2 = function deepmerge2(target, source, options) {
                options = options || {};
                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var sourceIsArray = Array.isArray(source);
                var targetIsArray = Array.isArray(target);
                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                if (!sourceAndTargetTypesMatch) {
                    return cloneUnlessOtherwiseSpecified(source, options);
                } else if (sourceIsArray) {
                    return options.arrayMerge(target, source, options);
                } else {
                    return mergeObject(target, source, options);
                }
            };
            var isMergeableObject = function isMergeableObject2(value) {
                return isNonNullObject(value) && !isSpecial(value);
            };
            var canUseSymbol = typeof Symbol === "function" && Symbol.for;
            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
            deepmerge2.all = function deepmergeAll(array, options) {
                if (!Array.isArray(array)) {
                    throw new Error("first argument should be an array");
                }
                return array.reduce(function(prev, next) {
                    return deepmerge2(prev, next, options);
                }, {});
            };
            var deepmerge_1 = deepmerge2;
            module.exports = deepmerge_1;
        }
    });
    // node_modules/@evolv/hashing/dist/es6/shims/from-entries.shim.js
    var require_from_entries_shim = __commonJS({
        "node_modules/@evolv/hashing/dist/es6/shims/from-entries.shim.js": function(exports) {
            "use strict";
            var _fromEntries = function _fromEntries(items) {
                return items.reduce(function(acc, entry) {
                    acc[entry[0]] = entry[1];
                    return acc;
                }, {});
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.fromEntries = void 0;
            exports.fromEntries = Object.fromEntries || _fromEntries;
        }
    });
    // node_modules/@evolv/hashing/dist/es6/shims/index.js
    var require_shims = __commonJS({
        "node_modules/@evolv/hashing/dist/es6/shims/index.js": function(exports) {
            "use strict";
            var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                Object.defineProperty(o, k2, {
                    enumerable: true,
                    get: function get() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                o[k2] = m[k];
            });
            var __exportStar = exports && exports.__exportStar || function(m, exports2) {
                for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __exportStar(require_from_entries_shim(), exports);
        }
    });
    // node_modules/@evolv/hashing/dist/es6/normalize-object.js
    var require_normalize_object = __commonJS({
        "node_modules/@evolv/hashing/dist/es6/normalize-object.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.normalizeObject = void 0;
            var shims_1 = require_shims();
            function normalizeObject(obj) {
                try {
                    JSON.stringify(obj);
                } catch (ex) {
                    if (_instanceof(ex, TypeError) && ex.message.startsWith("Converting circular structure to JSON")) {
                        throw ex;
                    }
                }
                if (Array.isArray(obj)) {
                    return obj.map(function(item) {
                        return normalizeObject(item);
                    });
                } else if (typeof obj !== "object" || obj === null) {
                    return obj;
                }
                var properties = Object.entries(obj).sort(function(a, b) {
                    return a[0].localeCompare(b[0], "en");
                }).map(function(entry) {
                    var key = entry[0];
                    var value = entry[1];
                    return typeof value === "object" ? [
                        key,
                        normalizeObject(value)
                    ] : [
                        key,
                        value
                    ];
                });
                return shims_1.fromEntries(properties);
            }
            exports.normalizeObject = normalizeObject;
        }
    });
    // node_modules/@evolv/hashing/dist/es6/hash-code.js
    var require_hash_code = __commonJS({
        "node_modules/@evolv/hashing/dist/es6/hash-code.js": function(exports) {
            "use strict";
            var hashCode = function hashCode(str) {
                var ret = 0;
                for(var i = 0; i < str.length; i += 1){
                    ret = 31 * ret + str.charCodeAt(i) << 0;
                }
                return ret;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.hashCode = void 0;
            exports.hashCode = hashCode;
        }
    });
    // node_modules/@evolv/hashing/dist/es6/object-hash.js
    var require_object_hash = __commonJS({
        "node_modules/@evolv/hashing/dist/es6/object-hash.js": function(exports) {
            "use strict";
            var objectHash2 = function objectHash2(obj) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var opts = Object.assign({
                    normalize: true
                }, options);
                var normalized = opts.normalize ? normalize_object_1.normalizeObject(obj) : obj;
                var str = JSON.stringify(normalized);
                return hash_code_1.hashCode(str);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.objectHash = void 0;
            var hash_code_1 = require_hash_code();
            var normalize_object_1 = require_normalize_object();
            exports.objectHash = objectHash2;
        }
    });
    // node_modules/@evolv/hashing/dist/es6/index.js
    var require_es6 = __commonJS({
        "node_modules/@evolv/hashing/dist/es6/index.js": function(exports) {
            "use strict";
            var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                Object.defineProperty(o, k2, {
                    enumerable: true,
                    get: function get() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                if (k2 === void 0) k2 = k;
                o[k2] = m[k];
            });
            var __exportStar = exports && exports.__exportStar || function(m, exports2) {
                for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __exportStar(require_normalize_object(), exports);
            __exportStar(require_hash_code(), exports);
            __exportStar(require_object_hash(), exports);
        }
    });
    // node_modules/base64-arraybuffer/lib/base64-arraybuffer.js
    var require_base64_arraybuffer = __commonJS({
        "node_modules/base64-arraybuffer/lib/base64-arraybuffer.js": function(exports) {
            (function() {
                "use strict";
                var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var lookup = new Uint8Array(256);
                for(var i = 0; i < chars.length; i++){
                    lookup[chars.charCodeAt(i)] = i;
                }
                exports.encode = function(arraybuffer) {
                    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";
                    for(i2 = 0; i2 < len; i2 += 3){
                        base64 += chars[bytes[i2] >> 2];
                        base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
                        base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
                        base64 += chars[bytes[i2 + 2] & 63];
                    }
                    if (len % 3 === 2) {
                        base64 = base64.substring(0, base64.length - 1) + "=";
                    } else if (len % 3 === 1) {
                        base64 = base64.substring(0, base64.length - 2) + "==";
                    }
                    return base64;
                };
                exports.decode = function(base64) {
                    var bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
                    if (base64[base64.length - 1] === "=") {
                        bufferLength--;
                        if (base64[base64.length - 2] === "=") {
                            bufferLength--;
                        }
                    }
                    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
                    for(i2 = 0; i2 < len; i2 += 4){
                        encoded1 = lookup[base64.charCodeAt(i2)];
                        encoded2 = lookup[base64.charCodeAt(i2 + 1)];
                        encoded3 = lookup[base64.charCodeAt(i2 + 2)];
                        encoded4 = lookup[base64.charCodeAt(i2 + 3)];
                        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                    }
                    return arraybuffer;
                };
            })();
        }
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
    // src/components/EvolvContext.tsx
    var import_react = __toESM(require_react(), 1);
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
    var React2 = __toESM(require_react(), 1);
    // src/hooks/useVariable.ts
    var import_react2 = __toESM(require_react(), 1);
    // node_modules/@evolv/javascript-sdk/src/ponyfills/objects.js
    var import_deepmerge = __toESM(require_cjs(), 1);
    var deepMerge = import_deepmerge.default;
    // node_modules/@evolv/javascript-sdk/src/waitforit.js
    var scopedHandlers = /* @__PURE__ */ new Map();
    var scopedOnceHandlers = /* @__PURE__ */ new Map();
    var scopedPayloads = /* @__PURE__ */ new Map();
    // node_modules/@evolv/javascript-sdk/src/context.js
    var CONTEXT_CHANGED = "context.changed";
    var CONTEXT_INITIALIZED = "context.initialized";
    var CONTEXT_VALUE_REMOVED = "context.value.removed";
    var CONTEXT_VALUE_ADDED = "context.value.added";
    var CONTEXT_VALUE_CHANGED = "context.value.changed";
    var CONTEXT_DESTROYED = "context.destroyed";
    var DEFAULT_QUEUE_LIMIT = 50;
    var context_default = EvolvContext2;
    // node_modules/@evolv/javascript-sdk/src/ponyfills/minipromise.js
    var invoker = function invoker(args, fn) {
        fn.apply(this, args);
    };
    MiniPromise.createPromise = function(executor) {
        return new (typeof Promise !== "undefined" ? Promise : MiniPromise)(executor);
    };
    // node_modules/@evolv/javascript-sdk/src/store.js
    var import_hashing = __toESM(require_es6(), 1);
    // node_modules/@evolv/javascript-sdk/src/ponyfills/base64.js
    var import_base64_arraybuffer = __toESM(require_base64_arraybuffer(), 1);
    var base64_default = {
        encode: function encode(bytes) {
            return typeof btoa !== "undefined" ? btoa(bytes) : Buffer.from(bytes).toString("base64");
        },
        decode: function decode(string) {
            return typeof atob !== "undefined" ? atob(string) : Buffer.from(string, "base64").toString();
        },
        encodeFromArrayBuffer: import_base64_arraybuffer.default.encode,
        decodeToArrayBuffer: import_base64_arraybuffer.default.decode
    };
    // node_modules/@evolv/javascript-sdk/src/predicates.js
    var AND = "and";
    var OR = "or";
    var FILTER_OPERATORS = {
        contains: function contains(a, b) {
            return a.indexOf(b) >= 0;
        },
        defined: function defined(a) {
            return a !== void 0;
        },
        equal: function equal(a, b) {
            return a === b;
        },
        exists: function exists(a) {
            return a !== null && a !== void 0;
        },
        greater_than: function greater_than(a, b) {
            return a > b;
        },
        greater_than_or_equal_to: function greater_than_or_equal_to(a, b) {
            return a >= b;
        },
        is_true: function is_true(a) {
            return a === true;
        },
        is_false: function is_false(a) {
            return a === false;
        },
        not_exists: function not_exists(a) {
            return a === null || a === void 0;
        },
        not_contains: function not_contains(a, b) {
            return !(a.indexOf(b) >= 0);
        },
        not_defined: function not_defined(a) {
            return a === void 0;
        },
        not_equal: function not_equal(a, b) {
            return a !== b;
        },
        not_regex_match: function not_regex_match(value, pattern) {
            return value && !value.match(pattern);
        },
        not_regex64_match: function not_regex64_match(value, pattern) {
            return !regex64Match(value, pattern);
        },
        not_starts_with: function not_starts_with(a, b) {
            return !startsWith(a, b);
        },
        kv_contains: function kv_contains(obj, params) {
            return params[0] in obj && obj[params[0]].indexOf(params[1]) >= 0;
        },
        kv_equal: function kv_equal(obj, params) {
            return obj[params[0]] === params[1];
        },
        kv_not_contains: function kv_not_contains(obj, params) {
            return !(params[0] in obj && obj[params[0]].indexOf(params[1]) >= 0);
        },
        kv_not_equal: function kv_not_equal(obj, params) {
            return obj[params[0]] !== params[1];
        },
        less_than: function less_than(a, b) {
            return a < b;
        },
        less_than_or_equal_to: function less_than_or_equal_to(a, b) {
            return a <= b;
        },
        loose_equal: function loose_equal(a, b) {
            return a == b;
        },
        loose_not_equal: function loose_not_equal(a, b) {
            return a != b;
        },
        regex_match: function regex_match(value, pattern) {
            return value && value.match(pattern);
        },
        regex64_match: regex64Match,
        starts_with: function starts_with(a, b) {
            return startsWith(a, b);
        }
    };
    function valueFromKey(context, key) {
        if (context === void 0) {
            return void 0;
        }
        var nextToken = key.indexOf(".");
        if (nextToken === 0) {
            throw new Error("Invalid variant key: " + key);
        }
        if (nextToken === -1) {
            return key in context ? context[key] : void 0;
        }
        return valueFromKey(context[key.substring(0, nextToken)], key.substring(nextToken + 1));
    }
    // node_modules/@evolv/javascript-sdk/src/retrieve.js
    var URL_PATTERN = /^([a-z]+):\/\/([^/]+)(.*)/i;
    // node_modules/@evolv/javascript-sdk/src/store.js
    var reevaluatingContext = false;
    var CONFIG_SOURCE = "config";
    var GENOME_SOURCE = "genome";
    var GENOME_REQUEST_SENT = "genome.request.sent";
    var CONFIG_REQUEST_SENT = "config.request.sent";
    var GENOME_REQUEST_RECEIVED = "genome.request.received";
    var CONFIG_REQUEST_RECEIVED = "config.request.received";
    var REQUEST_FAILED = "request.failed";
    var GENOME_UPDATED = "genome.updated";
    var CONFIG_UPDATED = "config.updated";
    var EFFECTIVE_GENOME_UPDATED = "effective.genome.updated";
    var STORE_DESTROYED = "store.destroyed";
    var store_default = EvolvStore;
    // node_modules/@evolv/javascript-sdk/src/beacon.js
    var DELAY = 1;
    var ENDPOINT_PATTERN = /\/(v\d+)\/\w+\/([a-z]+)$/i;
    var BATCH_SIZE = 25;
    // node_modules/@evolv/javascript-sdk/src/index.js
    function EvolvClient2(opts) {
        var initialized = false;
        var options = buildOptions(opts);
        var store = options.store || new store_default(options);
        var context = options.context || new context_default(store);
        var beaconOptions = {
            blockTransmit: options.bufferEvents,
            clientName: options.clientName
        };
        var contextBeacon = options.analytics ? new Emitter(options.endpoint + "/" + options.environment + "/data", context, beaconOptions) : null;
        var eventBeacon = options.beacon || new Emitter(options.endpoint + "/" + options.environment + "/events", context, beaconOptions);
        Object.defineProperty(this, "context", {
            get: function get() {
                return context;
            }
        });
        Object.defineProperty(this, "environment", {
            get: function get() {
                return options.environment;
            }
        });
        this.on = waitFor.bind(void 0, context);
        this.once = waitOnceFor.bind(void 0, context);
        this.preload = store.preload.bind(store);
        this.get = store.get.bind(store);
        this.isActive = store.isActive.bind(store);
        this.getActiveKeys = store.getActiveKeys.bind(store);
        this.clearActiveKeys = store.clearActiveKeys.bind(store);
        this.reevaluateContext = store.reevaluateContext.bind(store);
        this.getConfig = store.getConfig.bind(store);
        this.emit = function(type, metadata, flush) {
            context.pushToArray("events", {
                type: type,
                timestamp: new Date().getTime()
            });
            eventBeacon.emit(type, assign({
                uid: context.uid,
                sid: context.sid,
                metadata: metadata
            }), flush);
            emit(context, EvolvClient2.EVENT_EMITTED, type, metadata);
        };
        this.confirm = function() {
            waitFor(context, EFFECTIVE_GENOME_UPDATED, function() {
                var remoteContext = context.remoteContext;
                var allocations = (remoteContext.experiments || {}).allocations;
                if (!store.configuration || !allocations || !allocations.length) {
                    return;
                }
                store.activeEntryPoints().then(function(entryPointEids) {
                    if (!entryPointEids.length) {
                        return;
                    }
                    var confirmations = context.get("experiments.confirmations") || [];
                    var confirmedCids = confirmations.map(function(conf) {
                        return conf.cid;
                    });
                    var contaminations = context.get("experiments.contaminations") || [];
                    var contaminatedCids = contaminations.map(function(cont) {
                        return cont.cid;
                    });
                    var confirmableAllocations = allocations.filter(function(alloc) {
                        return confirmedCids.indexOf(alloc.cid) < 0 && contaminatedCids.indexOf(alloc.cid) < 0 && store.activeEids.has(alloc.eid) && entryPointEids.indexOf(alloc.eid) >= 0;
                    });
                    if (!confirmableAllocations.length) {
                        return;
                    }
                    var timestamp = new Date().getTime();
                    var contextConfirmations = confirmableAllocations.map(function(alloc) {
                        return {
                            cid: alloc.cid,
                            timestamp: timestamp
                        };
                    });
                    var newConfirmations = contextConfirmations.concat(confirmations);
                    context.update({
                        "confirmations": newConfirmations,
                        "experiments": {
                            "confirmations": newConfirmations
                        }
                    });
                    confirmableAllocations.forEach(function(alloc) {
                        eventBeacon.emit("confirmation", assign({
                            uid: alloc.uid,
                            sid: alloc.sid,
                            eid: alloc.eid,
                            cid: alloc.cid
                        }, context.remoteContext));
                    });
                    eventBeacon.flush();
                    emit(context, EvolvClient2.CONFIRMED);
                });
            });
        };
        this.contaminate = function(details, allExperiments) {
            var remoteContext = context.remoteContext;
            var allocations = (remoteContext.experiments || {}).allocations;
            if (!allocations || !allocations.length) {
                return;
            }
            if (details && !details.reason) {
                throw new Error("Evolv: contamination details must include a reason");
            }
            var contaminations = context.get("experiments.contaminations") || [];
            var contaminatedCids = contaminations.map(function(conf) {
                return conf.cid;
            });
            var contaminatableAllocations = allocations.filter(function(alloc) {
                return contaminatedCids.indexOf(alloc.cid) < 0 && (allExperiments || store.activeEids.has(alloc.eid));
            });
            if (!contaminatableAllocations.length) {
                return;
            }
            var timestamp = new Date().getTime();
            var contextContaminations = contaminatableAllocations.map(function(alloc) {
                return {
                    cid: alloc.cid,
                    timestamp: timestamp
                };
            });
            var newContaminations = contextContaminations.concat(contaminations);
            context.update({
                "contaminations": newContaminations,
                "experiments": {
                    "contaminations": newContaminations
                }
            });
            contaminatableAllocations.forEach(function(alloc) {
                eventBeacon.emit("contamination", assign({
                    uid: alloc.uid,
                    sid: alloc.sid,
                    eid: alloc.eid,
                    cid: alloc.cid,
                    contaminationReason: details
                }, context.remoteContext));
            });
            eventBeacon.flush();
            emit(context, EvolvClient2.CONTAMINATED);
        };
        this.initialize = function(uid, sid, remoteContext, localContext) {
            if (initialized) {
                throw new Error("Evolv: Client is already initialized");
            }
            if (!uid) {
                throw new Error('Evolv: "uid" must be specified');
            }
            if (!sid) {
                throw new Error('Evolv: "sid" must be specified');
            }
            context.initialize(uid, sid, remoteContext, localContext);
            store.initialize(context);
            store.getClientContext().then(function(c) {
                if (!c) {
                    return;
                }
                var updated = assign({}, c);
                if (updated.browser) {
                    updated.web = {
                        client: {
                            browser: updated.browser
                        }
                    };
                    delete updated.browser;
                }
                context.update(updated, false);
            }).catch(function() {
                console.log("Evolv: Failed to retrieve client context");
            });
            if (options.analytics) {
                waitFor(context, CONTEXT_INITIALIZED, function(type, ctx) {
                    contextBeacon.emit(type, context.remoteContext);
                });
                waitFor(context, CONTEXT_VALUE_ADDED, function(type, key, value, local) {
                    if (local) {
                        return;
                    }
                    contextBeacon.emit(type, {
                        key: key,
                        value: value
                    });
                });
                waitFor(context, CONTEXT_VALUE_CHANGED, function(type, key, value, before, local) {
                    if (local) {
                        return;
                    }
                    contextBeacon.emit(type, {
                        key: key,
                        value: value
                    });
                });
                waitFor(context, CONTEXT_VALUE_REMOVED, function(type, key, local) {
                    if (local) {
                        return;
                    }
                    contextBeacon.emit(type, {
                        key: key
                    });
                });
            }
            if (options.autoConfirm) {
                this.confirm();
                waitFor(context, REQUEST_FAILED, this.contaminate.bind(this));
            }
            initialized = true;
            emit(context, EvolvClient2.INITIALIZED, options);
        };
        this.flush = function() {
            eventBeacon.flush();
            if (options.analytics) {
                contextBeacon.flush();
            }
        };
        this.allowEvents = function() {
            eventBeacon.unblockAndFlush();
            if (options.analytics) {
                contextBeacon.unblockAndFlush();
            }
        };
        this.destroy = function() {
            this.flush();
            store.destroy();
            context.destroy();
            destroyScope(context);
        };
    }
    EvolvClient2.INITIALIZED = "initialized";
    EvolvClient2.CONFIRMED = "confirmed";
    EvolvClient2.CONTAMINATED = "contaminated";
    EvolvClient2.EVENT_EMITTED = "event.emitted";
    var src_default = EvolvClient2;
    // src/client/client.ts
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
        this.client = new src_default({
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
})(); /*
object-assign
(c) Sindre Sorhus
@license MIT
*/  /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */  /** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */  /** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function ty(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function ei(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rm = {
    exports: {}
}
  , ti = {}
  , Am = {
    exports: {}
}
  , re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws = Symbol.for("react.element")
  , ny = Symbol.for("react.portal")
  , ry = Symbol.for("react.fragment")
  , oy = Symbol.for("react.strict_mode")
  , sy = Symbol.for("react.profiler")
  , ay = Symbol.for("react.provider")
  , iy = Symbol.for("react.context")
  , ly = Symbol.for("react.forward_ref")
  , uy = Symbol.for("react.suspense")
  , cy = Symbol.for("react.memo")
  , dy = Symbol.for("react.lazy")
  , Cd = Symbol.iterator;
function fy(e) {
    return e === null || typeof e != "object" ? null : (e = Cd && e[Cd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Fm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Im = Object.assign
  , $m = {};
function fo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = $m,
    this.updater = n || Fm
}
fo.prototype.isReactComponent = {};
fo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
fo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Bm() {}
Bm.prototype = fo.prototype;
function tc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = $m,
    this.updater = n || Fm
}
var nc = tc.prototype = new Bm;
nc.constructor = tc;
Im(nc, fo.prototype);
nc.isPureReactComponent = !0;
var Td = Array.isArray
  , Um = Object.prototype.hasOwnProperty
  , rc = {
    current: null
}
  , Wm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function zm(e, t, n) {
    var r, o = {}, s = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Um.call(t, r) && !Wm.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var u = Array(l), d = 0; d < l; d++)
            u[d] = arguments[d + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: ws,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: rc.current
    }
}
function my(e, t) {
    return {
        $$typeof: ws,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function oc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ws
}
function hy(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Dd = /\/+/g;
function Bi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? hy("" + e.key) : t.toString(36)
}
function sa(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (s) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ws:
            case ny:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = r === "" ? "." + Bi(a, 0) : r,
        Td(o) ? (n = "",
        e != null && (n = e.replace(Dd, "$&/") + "/"),
        sa(o, t, n, "", function(d) {
            return d
        })) : o != null && (oc(o) && (o = my(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Dd, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    Td(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var u = r + Bi(s, l);
            a += sa(s, t, n, u, o)
        }
    else if (u = fy(e),
    typeof u == "function")
        for (e = u.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            u = r + Bi(s, l++),
            a += sa(s, t, n, u, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Fs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return sa(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function py(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ut = {
    current: null
}
  , aa = {
    transition: null
}
  , gy = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: aa,
    ReactCurrentOwner: rc
};
function Hm() {
    throw Error("act(...) is not supported in production builds of React.")
}
re.Children = {
    map: Fs,
    forEach: function(e, t, n) {
        Fs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Fs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Fs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!oc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
re.Component = fo;
re.Fragment = ry;
re.Profiler = sy;
re.PureComponent = tc;
re.StrictMode = oy;
re.Suspense = uy;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
re.act = Hm;
re.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Im({}, e.props)
      , o = e.key
      , s = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        a = rc.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in t)
            Um.call(t, u) && !Wm.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var d = 0; d < u; d++)
            l[d] = arguments[d + 2];
        r.children = l
    }
    return {
        $$typeof: ws,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: a
    }
}
;
re.createContext = function(e) {
    return e = {
        $$typeof: iy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: ay,
        _context: e
    },
    e.Consumer = e
}
;
re.createElement = zm;
re.createFactory = function(e) {
    var t = zm.bind(null, e);
    return t.type = e,
    t
}
;
re.createRef = function() {
    return {
        current: null
    }
}
;
re.forwardRef = function(e) {
    return {
        $$typeof: ly,
        render: e
    }
}
;
re.isValidElement = oc;
re.lazy = function(e) {
    return {
        $$typeof: dy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: py
    }
}
;
re.memo = function(e, t) {
    return {
        $$typeof: cy,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
re.startTransition = function(e) {
    var t = aa.transition;
    aa.transition = {};
    try {
        e()
    } finally {
        aa.transition = t
    }
}
;
re.unstable_act = Hm;
re.useCallback = function(e, t) {
    return ut.current.useCallback(e, t)
}
;
re.useContext = function(e) {
    return ut.current.useContext(e)
}
;
re.useDebugValue = function() {}
;
re.useDeferredValue = function(e) {
    return ut.current.useDeferredValue(e)
}
;
re.useEffect = function(e, t) {
    return ut.current.useEffect(e, t)
}
;
re.useId = function() {
    return ut.current.useId()
}
;
re.useImperativeHandle = function(e, t, n) {
    return ut.current.useImperativeHandle(e, t, n)
}
;
re.useInsertionEffect = function(e, t) {
    return ut.current.useInsertionEffect(e, t)
}
;
re.useLayoutEffect = function(e, t) {
    return ut.current.useLayoutEffect(e, t)
}
;
re.useMemo = function(e, t) {
    return ut.current.useMemo(e, t)
}
;
re.useReducer = function(e, t, n) {
    return ut.current.useReducer(e, t, n)
}
;
re.useRef = function(e) {
    return ut.current.useRef(e)
}
;
re.useState = function(e) {
    return ut.current.useState(e)
}
;
re.useSyncExternalStore = function(e, t, n) {
    return ut.current.useSyncExternalStore(e, t, n)
}
;
re.useTransition = function() {
    return ut.current.useTransition()
}
;
re.version = "18.3.1";
Am.exports = re;
var w = Am.exports;
const R = ei(w)
  , yy = ty({
    __proto__: null,
    default: R
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vy = w
  , xy = Symbol.for("react.element")
  , wy = Symbol.for("react.fragment")
  , by = Object.prototype.hasOwnProperty
  , jy = vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ny = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Vm(e, t, n) {
    var r, o = {}, s = null, a = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        by.call(t, r) && !Ny.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: xy,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: jy.current
    }
}
ti.Fragment = wy;
ti.jsx = Vm;
ti.jsxs = Vm;
Rm.exports = ti;
var i = Rm.exports
  , Tl = {}
  , Ym = {
    exports: {}
}
  , Et = {}
  , qm = {
    exports: {}
}
  , Qm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t($, W) {
        var V = $.length;
        $.push(W);
        e: for (; 0 < V; ) {
            var B = V - 1 >>> 1
              , H = $[B];
            if (0 < o(H, W))
                $[B] = W,
                $[V] = H,
                V = B;
            else
                break e
        }
    }
    function n($) {
        return $.length === 0 ? null : $[0]
    }
    function r($) {
        if ($.length === 0)
            return null;
        var W = $[0]
          , V = $.pop();
        if (V !== W) {
            $[0] = V;
            e: for (var B = 0, H = $.length, te = H >>> 1; B < te; ) {
                var F = 2 * (B + 1) - 1
                  , K = $[F]
                  , Y = F + 1
                  , ee = $[Y];
                if (0 > o(K, V))
                    Y < H && 0 > o(ee, K) ? ($[B] = ee,
                    $[Y] = V,
                    B = Y) : ($[B] = K,
                    $[F] = V,
                    B = F);
                else if (Y < H && 0 > o(ee, V))
                    $[B] = ee,
                    $[Y] = V,
                    B = Y;
                else
                    break e
            }
        }
        return W
    }
    function o($, W) {
        var V = $.sortIndex - W.sortIndex;
        return V !== 0 ? V : $.id - W.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var a = Date
          , l = a.now();
        e.unstable_now = function() {
            return a.now() - l
        }
    }
    var u = []
      , d = []
      , h = 1
      , m = null
      , v = 3
      , k = !1
      , x = !1
      , N = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , b = typeof clearTimeout == "function" ? clearTimeout : null
      , y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g($) {
        for (var W = n(d); W !== null; ) {
            if (W.callback === null)
                r(d);
            else if (W.startTime <= $)
                r(d),
                W.sortIndex = W.expirationTime,
                t(u, W);
            else
                break;
            W = n(d)
        }
    }
    function E($) {
        if (N = !1,
        g($),
        !x)
            if (n(u) !== null)
                x = !0,
                q(T);
            else {
                var W = n(d);
                W !== null && Se(E, W.startTime - $)
            }
    }
    function T($, W) {
        x = !1,
        N && (N = !1,
        b(M),
        M = -1),
        k = !0;
        var V = v;
        try {
            for (g(W),
            m = n(u); m !== null && (!(m.expirationTime > W) || $ && !ae()); ) {
                var B = m.callback;
                if (typeof B == "function") {
                    m.callback = null,
                    v = m.priorityLevel;
                    var H = B(m.expirationTime <= W);
                    W = e.unstable_now(),
                    typeof H == "function" ? m.callback = H : m === n(u) && r(u),
                    g(W)
                } else
                    r(u);
                m = n(u)
            }
            if (m !== null)
                var te = !0;
            else {
                var F = n(d);
                F !== null && Se(E, F.startTime - W),
                te = !1
            }
            return te
        } finally {
            m = null,
            v = V,
            k = !1
        }
    }
    var O = !1
      , P = null
      , M = -1
      , U = 5
      , I = -1;
    function ae() {
        return !(e.unstable_now() - I < U)
    }
    function fe() {
        if (P !== null) {
            var $ = e.unstable_now();
            I = $;
            var W = !0;
            try {
                W = P(!0, $)
            } finally {
                W ? Pe() : (O = !1,
                P = null)
            }
        } else
            O = !1
    }
    var Pe;
    if (typeof y == "function")
        Pe = function() {
            y(fe)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Ie = new MessageChannel
          , ke = Ie.port2;
        Ie.port1.onmessage = fe,
        Pe = function() {
            ke.postMessage(null)
        }
    } else
        Pe = function() {
            S(fe, 0)
        }
        ;
    function q($) {
        P = $,
        O || (O = !0,
        Pe())
    }
    function Se($, W) {
        M = S(function() {
            $(e.unstable_now())
        }, W)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function($) {
        $.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || k || (x = !0,
        q(T))
    }
    ,
    e.unstable_forceFrameRate = function($) {
        0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < $ ? Math.floor(1e3 / $) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return v
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function($) {
        switch (v) {
        case 1:
        case 2:
        case 3:
            var W = 3;
            break;
        default:
            W = v
        }
        var V = v;
        v = W;
        try {
            return $()
        } finally {
            v = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function($, W) {
        switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            $ = 3
        }
        var V = v;
        v = $;
        try {
            return W()
        } finally {
            v = V
        }
    }
    ,
    e.unstable_scheduleCallback = function($, W, V) {
        var B = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? B + V : B) : V = B,
        $) {
        case 1:
            var H = -1;
            break;
        case 2:
            H = 250;
            break;
        case 5:
            H = 1073741823;
            break;
        case 4:
            H = 1e4;
            break;
        default:
            H = 5e3
        }
        return H = V + H,
        $ = {
            id: h++,
            callback: W,
            priorityLevel: $,
            startTime: V,
            expirationTime: H,
            sortIndex: -1
        },
        V > B ? ($.sortIndex = V,
        t(d, $),
        n(u) === null && $ === n(d) && (N ? (b(M),
        M = -1) : N = !0,
        Se(E, V - B))) : ($.sortIndex = H,
        t(u, $),
        x || k || (x = !0,
        q(T))),
        $
    }
    ,
    e.unstable_shouldYield = ae,
    e.unstable_wrapCallback = function($) {
        var W = v;
        return function() {
            var V = v;
            v = W;
            try {
                return $.apply(this, arguments)
            } finally {
                v = V
            }
        }
    }
}
)(Qm);
qm.exports = Qm;
var ky = qm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sy = w
  , St = ky;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Gm = new Set
  , Ko = {};
function kr(e, t) {
    oo(e, t),
    oo(e + "Capture", t)
}
function oo(e, t) {
    for (Ko[e] = t,
    e = 0; e < t.length; e++)
        Gm.add(t[e])
}
var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Dl = Object.prototype.hasOwnProperty
  , Ey = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , _d = {}
  , Pd = {};
function Cy(e) {
    return Dl.call(Pd, e) ? !0 : Dl.call(_d, e) ? !1 : Ey.test(e) ? Pd[e] = !0 : (_d[e] = !0,
    !1)
}
function Ty(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Dy(e, t, n, r) {
    if (t === null || typeof t > "u" || Ty(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ct(e, t, n, r, o, s, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = a
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Je[e] = new ct(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Je[t] = new ct(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Je[e] = new ct(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Je[e] = new ct(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Je[e] = new ct(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Je[e] = new ct(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Je[e] = new ct(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Je[e] = new ct(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Je[e] = new ct(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var sc = /[\-:]([a-z])/g;
function ac(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(sc, ac);
    Je[t] = new ct(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(sc, ac);
    Je[t] = new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(sc, ac);
    Je[t] = new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Je[e] = new ct(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Je.xlinkHref = new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Je[e] = new ct(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ic(e, t, n, r) {
    var o = Je.hasOwnProperty(t) ? Je[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dy(t, n, o, r) && (n = null),
    r || o === null ? Cy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wn = Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Is = Symbol.for("react.element")
  , Fr = Symbol.for("react.portal")
  , Ir = Symbol.for("react.fragment")
  , lc = Symbol.for("react.strict_mode")
  , _l = Symbol.for("react.profiler")
  , Km = Symbol.for("react.provider")
  , Jm = Symbol.for("react.context")
  , uc = Symbol.for("react.forward_ref")
  , Pl = Symbol.for("react.suspense")
  , Ol = Symbol.for("react.suspense_list")
  , cc = Symbol.for("react.memo")
  , Tn = Symbol.for("react.lazy")
  , Xm = Symbol.for("react.offscreen")
  , Od = Symbol.iterator;
function No(e) {
    return e === null || typeof e != "object" ? null : (e = Od && e[Od] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var _e = Object.assign, Ui;
function Ro(e) {
    if (Ui === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ui = t && t[1] || ""
        }
    return `
` + Ui + e
}
var Wi = !1;
function zi(e, t) {
    if (!e || Wi)
        return "";
    Wi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var o = d.stack.split(`
`), s = r.stack.split(`
`), a = o.length - 1, l = s.length - 1; 1 <= a && 0 <= l && o[a] !== s[l]; )
                l--;
            for (; 1 <= a && 0 <= l; a--,
            l--)
                if (o[a] !== s[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if (a--,
                            l--,
                            0 > l || o[a] !== s[l]) {
                                var u = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= a && 0 <= l);
                    break
                }
        }
    } finally {
        Wi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ro(e) : ""
}
function _y(e) {
    switch (e.tag) {
    case 5:
        return Ro(e.type);
    case 16:
        return Ro("Lazy");
    case 13:
        return Ro("Suspense");
    case 19:
        return Ro("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = zi(e.type, !1),
        e;
    case 11:
        return e = zi(e.type.render, !1),
        e;
    case 1:
        return e = zi(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ll(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ir:
        return "Fragment";
    case Fr:
        return "Portal";
    case _l:
        return "Profiler";
    case lc:
        return "StrictMode";
    case Pl:
        return "Suspense";
    case Ol:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Jm:
            return (e.displayName || "Context") + ".Consumer";
        case Km:
            return (e._context.displayName || "Context") + ".Provider";
        case uc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case cc:
            return t = e.displayName || null,
            t !== null ? t : Ll(e.type) || "Memo";
        case Tn:
            t = e._payload,
            e = e._init;
            try {
                return Ll(e(t))
            } catch {}
        }
    return null
}
function Py(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ll(t);
    case 8:
        return t === lc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Hn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Zm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Oy(e) {
    var t = Zm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                s.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function $s(e) {
    e._valueTracker || (e._valueTracker = Oy(e))
}
function eh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Zm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ja(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ml(e, t) {
    var n = t.checked;
    return _e({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ld(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Hn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function th(e, t) {
    t = t.checked,
    t != null && ic(e, "checked", t, !1)
}
function Rl(e, t) {
    th(e, t);
    var n = Hn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Al(e, t.type, n) : t.hasOwnProperty("defaultValue") && Al(e, t.type, Hn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Md(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Al(e, t, n) {
    (t !== "number" || ja(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ao = Array.isArray;
function Jr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Hn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Fl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return _e({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Rd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(A(92));
            if (Ao(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Hn(n)
    }
}
function nh(e, t) {
    var n = Hn(t.value)
      , r = Hn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ad(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function rh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? rh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Bs, oh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Bs = Bs || document.createElement("div"),
        Bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Bs.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Jo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Bo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Ly = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bo).forEach(function(e) {
    Ly.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Bo[t] = Bo[e]
    })
});
function sh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bo.hasOwnProperty(e) && Bo[e] ? ("" + t).trim() : t + "px"
}
function ah(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = sh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var My = _e({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function $l(e, t) {
    if (t) {
        if (My[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function Bl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ul = null;
function dc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Wl = null
  , Xr = null
  , Zr = null;
function Fd(e) {
    if (e = Ns(e)) {
        if (typeof Wl != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = ai(t),
        Wl(e.stateNode, e.type, t))
    }
}
function ih(e) {
    Xr ? Zr ? Zr.push(e) : Zr = [e] : Xr = e
}
function lh() {
    if (Xr) {
        var e = Xr
          , t = Zr;
        if (Zr = Xr = null,
        Fd(e),
        t)
            for (e = 0; e < t.length; e++)
                Fd(t[e])
    }
}
function uh(e, t) {
    return e(t)
}
function ch() {}
var Hi = !1;
function dh(e, t, n) {
    if (Hi)
        return e(t, n);
    Hi = !0;
    try {
        return uh(e, t, n)
    } finally {
        Hi = !1,
        (Xr !== null || Zr !== null) && (ch(),
        lh())
    }
}
function Xo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ai(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var zl = !1;
if (gn)
    try {
        var ko = {};
        Object.defineProperty(ko, "passive", {
            get: function() {
                zl = !0
            }
        }),
        window.addEventListener("test", ko, ko),
        window.removeEventListener("test", ko, ko)
    } catch {
        zl = !1
    }
function Ry(e, t, n, r, o, s, a, l, u) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (h) {
        this.onError(h)
    }
}
var Uo = !1
  , Na = null
  , ka = !1
  , Hl = null
  , Ay = {
    onError: function(e) {
        Uo = !0,
        Na = e
    }
};
function Fy(e, t, n, r, o, s, a, l, u) {
    Uo = !1,
    Na = null,
    Ry.apply(Ay, arguments)
}
function Iy(e, t, n, r, o, s, a, l, u) {
    if (Fy.apply(this, arguments),
    Uo) {
        if (Uo) {
            var d = Na;
            Uo = !1,
            Na = null
        } else
            throw Error(A(198));
        ka || (ka = !0,
        Hl = d)
    }
}
function Sr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function fh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Id(e) {
    if (Sr(e) !== e)
        throw Error(A(188))
}
function $y(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Sr(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Id(o),
                    e;
                if (s === r)
                    return Id(o),
                    t;
                s = s.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var a = !1, l = o.child; l; ) {
                if (l === n) {
                    a = !0,
                    n = o,
                    r = s;
                    break
                }
                if (l === r) {
                    a = !0,
                    r = o,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!a) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        a = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (l === r) {
                        a = !0,
                        r = s,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!a)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== r)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function mh(e) {
    return e = $y(e),
    e !== null ? hh(e) : null
}
function hh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = hh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ph = St.unstable_scheduleCallback
  , $d = St.unstable_cancelCallback
  , By = St.unstable_shouldYield
  , Uy = St.unstable_requestPaint
  , Re = St.unstable_now
  , Wy = St.unstable_getCurrentPriorityLevel
  , fc = St.unstable_ImmediatePriority
  , gh = St.unstable_UserBlockingPriority
  , Sa = St.unstable_NormalPriority
  , zy = St.unstable_LowPriority
  , yh = St.unstable_IdlePriority
  , ni = null
  , sn = null;
function Hy(e) {
    if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
            sn.onCommitFiberRoot(ni, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : qy
  , Vy = Math.log
  , Yy = Math.LN2;
function qy(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Vy(e) / Yy | 0) | 0
}
var Us = 64
  , Ws = 4194304;
function Fo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ea(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var l = a & ~o;
        l !== 0 ? r = Fo(l) : (s &= a,
        s !== 0 && (r = Fo(s)))
    } else
        a = n & ~o,
        a !== 0 ? r = Fo(a) : s !== 0 && (r = Fo(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Yt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Qy(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Gy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var a = 31 - Yt(s)
          , l = 1 << a
          , u = o[a];
        u === -1 ? (!(l & n) || l & r) && (o[a] = Qy(l, t)) : u <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function Vl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function vh() {
    var e = Us;
    return Us <<= 1,
    !(Us & 4194240) && (Us = 64),
    e
}
function Vi(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function bs(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Yt(t),
    e[t] = n
}
function Ky(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Yt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function mc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Yt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var de = 0;
function xh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var wh, hc, bh, jh, Nh, Yl = !1, zs = [], Rn = null, An = null, Fn = null, Zo = new Map, es = new Map, _n = [], Jy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Rn = null;
        break;
    case "dragenter":
    case "dragleave":
        An = null;
        break;
    case "mouseover":
    case "mouseout":
        Fn = null;
        break;
    case "pointerover":
    case "pointerout":
        Zo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        es.delete(t.pointerId)
    }
}
function So(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Ns(t),
    t !== null && hc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Xy(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Rn = So(Rn, e, t, n, r, o),
        !0;
    case "dragenter":
        return An = So(An, e, t, n, r, o),
        !0;
    case "mouseover":
        return Fn = So(Fn, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return Zo.set(s, So(Zo.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        es.set(s, So(es.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function kh(e) {
    var t = lr(e.target);
    if (t !== null) {
        var n = Sr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = fh(n),
                t !== null) {
                    e.blockedOn = t,
                    Nh(e.priority, function() {
                        bh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ia(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ul = r,
            n.target.dispatchEvent(r),
            Ul = null
        } else
            return t = Ns(n),
            t !== null && hc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ud(e, t, n) {
    ia(e) && n.delete(t)
}
function Zy() {
    Yl = !1,
    Rn !== null && ia(Rn) && (Rn = null),
    An !== null && ia(An) && (An = null),
    Fn !== null && ia(Fn) && (Fn = null),
    Zo.forEach(Ud),
    es.forEach(Ud)
}
function Eo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Yl || (Yl = !0,
    St.unstable_scheduleCallback(St.unstable_NormalPriority, Zy)))
}
function ts(e) {
    function t(o) {
        return Eo(o, e)
    }
    if (0 < zs.length) {
        Eo(zs[0], e);
        for (var n = 1; n < zs.length; n++) {
            var r = zs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Rn !== null && Eo(Rn, e),
    An !== null && Eo(An, e),
    Fn !== null && Eo(Fn, e),
    Zo.forEach(t),
    es.forEach(t),
    n = 0; n < _n.length; n++)
        r = _n[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < _n.length && (n = _n[0],
    n.blockedOn === null); )
        kh(n),
        n.blockedOn === null && _n.shift()
}
var eo = wn.ReactCurrentBatchConfig
  , Ca = !0;
function ev(e, t, n, r) {
    var o = de
      , s = eo.transition;
    eo.transition = null;
    try {
        de = 1,
        pc(e, t, n, r)
    } finally {
        de = o,
        eo.transition = s
    }
}
function tv(e, t, n, r) {
    var o = de
      , s = eo.transition;
    eo.transition = null;
    try {
        de = 4,
        pc(e, t, n, r)
    } finally {
        de = o,
        eo.transition = s
    }
}
function pc(e, t, n, r) {
    if (Ca) {
        var o = ql(e, t, n, r);
        if (o === null)
            tl(e, t, r, Ta, n),
            Bd(e, r);
        else if (Xy(o, e, t, n, r))
            r.stopPropagation();
        else if (Bd(e, r),
        t & 4 && -1 < Jy.indexOf(e)) {
            for (; o !== null; ) {
                var s = Ns(o);
                if (s !== null && wh(s),
                s = ql(e, t, n, r),
                s === null && tl(e, t, r, Ta, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            tl(e, t, r, null, n)
    }
}
var Ta = null;
function ql(e, t, n, r) {
    if (Ta = null,
    e = dc(r),
    e = lr(e),
    e !== null)
        if (t = Sr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = fh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ta = e,
    null
}
function Sh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Wy()) {
        case fc:
            return 1;
        case gh:
            return 4;
        case Sa:
        case zy:
            return 16;
        case yh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var On = null
  , gc = null
  , la = null;
function Eh() {
    if (la)
        return la;
    var e, t = gc, n = t.length, r, o = "value"in On ? On.value : On.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[s - r]; r++)
        ;
    return la = o.slice(e, 1 < r ? 1 - r : void 0)
}
function ua(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Hs() {
    return !0
}
function Wd() {
    return !1
}
function Ct(e) {
    function t(n, r, o, s, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = a,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Hs : Wd,
        this.isPropagationStopped = Wd,
        this
    }
    return _e(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Hs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Hs)
        },
        persist: function() {},
        isPersistent: Hs
    }),
    t
}
var mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, yc = Ct(mo), js = _e({}, mo, {
    view: 0,
    detail: 0
}), nv = Ct(js), Yi, qi, Co, ri = _e({}, js, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Co && (Co && e.type === "mousemove" ? (Yi = e.screenX - Co.screenX,
        qi = e.screenY - Co.screenY) : qi = Yi = 0,
        Co = e),
        Yi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : qi
    }
}), zd = Ct(ri), rv = _e({}, ri, {
    dataTransfer: 0
}), ov = Ct(rv), sv = _e({}, js, {
    relatedTarget: 0
}), Qi = Ct(sv), av = _e({}, mo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), iv = Ct(av), lv = _e({}, mo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), uv = Ct(lv), cv = _e({}, mo, {
    data: 0
}), Hd = Ct(cv), dv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, fv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, mv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function hv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = mv[e]) ? !!t[e] : !1
}
function vc() {
    return hv
}
var pv = _e({}, js, {
    key: function(e) {
        if (e.key) {
            var t = dv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ua(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vc,
    charCode: function(e) {
        return e.type === "keypress" ? ua(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ua(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , gv = Ct(pv)
  , yv = _e({}, ri, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Vd = Ct(yv)
  , vv = _e({}, js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vc
})
  , xv = Ct(vv)
  , wv = _e({}, mo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , bv = Ct(wv)
  , jv = _e({}, ri, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Nv = Ct(jv)
  , kv = [9, 13, 27, 32]
  , xc = gn && "CompositionEvent"in window
  , Wo = null;
gn && "documentMode"in document && (Wo = document.documentMode);
var Sv = gn && "TextEvent"in window && !Wo
  , Ch = gn && (!xc || Wo && 8 < Wo && 11 >= Wo)
  , Yd = " "
  , qd = !1;
function Th(e, t) {
    switch (e) {
    case "keyup":
        return kv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Dh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var $r = !1;
function Ev(e, t) {
    switch (e) {
    case "compositionend":
        return Dh(t);
    case "keypress":
        return t.which !== 32 ? null : (qd = !0,
        Yd);
    case "textInput":
        return e = t.data,
        e === Yd && qd ? null : e;
    default:
        return null
    }
}
function Cv(e, t) {
    if ($r)
        return e === "compositionend" || !xc && Th(e, t) ? (e = Eh(),
        la = gc = On = null,
        $r = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ch && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Tv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Qd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tv[e.type] : t === "textarea"
}
function _h(e, t, n, r) {
    ih(r),
    t = Da(t, "onChange"),
    0 < t.length && (n = new yc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var zo = null
  , ns = null;
function Dv(e) {
    Uh(e, 0)
}
function oi(e) {
    var t = Wr(e);
    if (eh(t))
        return e
}
function _v(e, t) {
    if (e === "change")
        return t
}
var Ph = !1;
if (gn) {
    var Gi;
    if (gn) {
        var Ki = "oninput"in document;
        if (!Ki) {
            var Gd = document.createElement("div");
            Gd.setAttribute("oninput", "return;"),
            Ki = typeof Gd.oninput == "function"
        }
        Gi = Ki
    } else
        Gi = !1;
    Ph = Gi && (!document.documentMode || 9 < document.documentMode)
}
function Kd() {
    zo && (zo.detachEvent("onpropertychange", Oh),
    ns = zo = null)
}
function Oh(e) {
    if (e.propertyName === "value" && oi(ns)) {
        var t = [];
        _h(t, ns, e, dc(e)),
        dh(Dv, t)
    }
}
function Pv(e, t, n) {
    e === "focusin" ? (Kd(),
    zo = t,
    ns = n,
    zo.attachEvent("onpropertychange", Oh)) : e === "focusout" && Kd()
}
function Ov(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return oi(ns)
}
function Lv(e, t) {
    if (e === "click")
        return oi(t)
}
function Mv(e, t) {
    if (e === "input" || e === "change")
        return oi(t)
}
function Rv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Qt = typeof Object.is == "function" ? Object.is : Rv;
function rs(e, t) {
    if (Qt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Dl.call(t, o) || !Qt(e[o], t[o]))
            return !1
    }
    return !0
}
function Jd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Xd(e, t) {
    var n = Jd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Jd(n)
    }
}
function Lh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Mh() {
    for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ja(e.document)
    }
    return t
}
function wc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Av(e) {
    var t = Mh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Lh(n.ownerDocument.documentElement, n)) {
        if (r !== null && wc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = Xd(n, s);
                var a = Xd(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Fv = gn && "documentMode"in document && 11 >= document.documentMode
  , Br = null
  , Ql = null
  , Ho = null
  , Gl = !1;
function Zd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gl || Br == null || Br !== ja(r) || (r = Br,
    "selectionStart"in r && wc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ho && rs(Ho, r) || (Ho = r,
    r = Da(Ql, "onSelect"),
    0 < r.length && (t = new yc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Br)))
}
function Vs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ur = {
    animationend: Vs("Animation", "AnimationEnd"),
    animationiteration: Vs("Animation", "AnimationIteration"),
    animationstart: Vs("Animation", "AnimationStart"),
    transitionend: Vs("Transition", "TransitionEnd")
}
  , Ji = {}
  , Rh = {};
gn && (Rh = document.createElement("div").style,
"AnimationEvent"in window || (delete Ur.animationend.animation,
delete Ur.animationiteration.animation,
delete Ur.animationstart.animation),
"TransitionEvent"in window || delete Ur.transitionend.transition);
function si(e) {
    if (Ji[e])
        return Ji[e];
    if (!Ur[e])
        return e;
    var t = Ur[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Rh)
            return Ji[e] = t[n];
    return e
}
var Ah = si("animationend")
  , Fh = si("animationiteration")
  , Ih = si("animationstart")
  , $h = si("transitionend")
  , Bh = new Map
  , ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qn(e, t) {
    Bh.set(e, t),
    kr(t, [e])
}
for (var Xi = 0; Xi < ef.length; Xi++) {
    var Zi = ef[Xi]
      , Iv = Zi.toLowerCase()
      , $v = Zi[0].toUpperCase() + Zi.slice(1);
    qn(Iv, "on" + $v)
}
qn(Ah, "onAnimationEnd");
qn(Fh, "onAnimationIteration");
qn(Ih, "onAnimationStart");
qn("dblclick", "onDoubleClick");
qn("focusin", "onFocus");
qn("focusout", "onBlur");
qn($h, "onTransitionEnd");
oo("onMouseEnter", ["mouseout", "mouseover"]);
oo("onMouseLeave", ["mouseout", "mouseover"]);
oo("onPointerEnter", ["pointerout", "pointerover"]);
oo("onPointerLeave", ["pointerout", "pointerover"]);
kr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Bv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));
function tf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Iy(r, t, void 0, e),
    e.currentTarget = null
}
function Uh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a]
                      , u = l.instance
                      , d = l.currentTarget;
                    if (l = l.listener,
                    u !== s && o.isPropagationStopped())
                        break e;
                    tf(o, l, d),
                    s = u
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (l = r[a],
                    u = l.instance,
                    d = l.currentTarget,
                    l = l.listener,
                    u !== s && o.isPropagationStopped())
                        break e;
                    tf(o, l, d),
                    s = u
                }
        }
    }
    if (ka)
        throw e = Hl,
        ka = !1,
        Hl = null,
        e
}
function ye(e, t) {
    var n = t[eu];
    n === void 0 && (n = t[eu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wh(t, e, 2, !1),
    n.add(r))
}
function el(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Wh(n, e, r, t)
}
var Ys = "_reactListening" + Math.random().toString(36).slice(2);
function os(e) {
    if (!e[Ys]) {
        e[Ys] = !0,
        Gm.forEach(function(n) {
            n !== "selectionchange" && (Bv.has(n) || el(n, !1, e),
            el(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ys] || (t[Ys] = !0,
        el("selectionchange", !1, t))
    }
}
function Wh(e, t, n, r) {
    switch (Sh(t)) {
    case 1:
        var o = ev;
        break;
    case 4:
        o = tv;
        break;
    default:
        o = pc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function tl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var u = a.tag;
                        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo,
                        u === o || u.nodeType === 8 && u.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; l !== null; ) {
                    if (a = lr(l),
                    a === null)
                        return;
                    if (u = a.tag,
                    u === 5 || u === 6) {
                        r = s = a;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    dh(function() {
        var d = s
          , h = dc(n)
          , m = [];
        e: {
            var v = Bh.get(e);
            if (v !== void 0) {
                var k = yc
                  , x = e;
                switch (e) {
                case "keypress":
                    if (ua(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    k = gv;
                    break;
                case "focusin":
                    x = "focus",
                    k = Qi;
                    break;
                case "focusout":
                    x = "blur",
                    k = Qi;
                    break;
                case "beforeblur":
                case "afterblur":
                    k = Qi;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    k = zd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    k = ov;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    k = xv;
                    break;
                case Ah:
                case Fh:
                case Ih:
                    k = iv;
                    break;
                case $h:
                    k = bv;
                    break;
                case "scroll":
                    k = nv;
                    break;
                case "wheel":
                    k = Nv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    k = uv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    k = Vd
                }
                var N = (t & 4) !== 0
                  , S = !N && e === "scroll"
                  , b = N ? v !== null ? v + "Capture" : null : v;
                N = [];
                for (var y = d, g; y !== null; ) {
                    g = y;
                    var E = g.stateNode;
                    if (g.tag === 5 && E !== null && (g = E,
                    b !== null && (E = Xo(y, b),
                    E != null && N.push(ss(y, E, g)))),
                    S)
                        break;
                    y = y.return
                }
                0 < N.length && (v = new k(v,x,null,n,h),
                m.push({
                    event: v,
                    listeners: N
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover",
                k = e === "mouseout" || e === "pointerout",
                v && n !== Ul && (x = n.relatedTarget || n.fromElement) && (lr(x) || x[yn]))
                    break e;
                if ((k || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window,
                k ? (x = n.relatedTarget || n.toElement,
                k = d,
                x = x ? lr(x) : null,
                x !== null && (S = Sr(x),
                x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (k = null,
                x = d),
                k !== x)) {
                    if (N = zd,
                    E = "onMouseLeave",
                    b = "onMouseEnter",
                    y = "mouse",
                    (e === "pointerout" || e === "pointerover") && (N = Vd,
                    E = "onPointerLeave",
                    b = "onPointerEnter",
                    y = "pointer"),
                    S = k == null ? v : Wr(k),
                    g = x == null ? v : Wr(x),
                    v = new N(E,y + "leave",k,n,h),
                    v.target = S,
                    v.relatedTarget = g,
                    E = null,
                    lr(h) === d && (N = new N(b,y + "enter",x,n,h),
                    N.target = g,
                    N.relatedTarget = S,
                    E = N),
                    S = E,
                    k && x)
                        t: {
                            for (N = k,
                            b = x,
                            y = 0,
                            g = N; g; g = Or(g))
                                y++;
                            for (g = 0,
                            E = b; E; E = Or(E))
                                g++;
                            for (; 0 < y - g; )
                                N = Or(N),
                                y--;
                            for (; 0 < g - y; )
                                b = Or(b),
                                g--;
                            for (; y--; ) {
                                if (N === b || b !== null && N === b.alternate)
                                    break t;
                                N = Or(N),
                                b = Or(b)
                            }
                            N = null
                        }
                    else
                        N = null;
                    k !== null && nf(m, v, k, N, !1),
                    x !== null && S !== null && nf(m, S, x, N, !0)
                }
            }
            e: {
                if (v = d ? Wr(d) : window,
                k = v.nodeName && v.nodeName.toLowerCase(),
                k === "select" || k === "input" && v.type === "file")
                    var T = _v;
                else if (Qd(v))
                    if (Ph)
                        T = Mv;
                    else {
                        T = Ov;
                        var O = Pv
                    }
                else
                    (k = v.nodeName) && k.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (T = Lv);
                if (T && (T = T(e, d))) {
                    _h(m, T, n, h);
                    break e
                }
                O && O(e, v, d),
                e === "focusout" && (O = v._wrapperState) && O.controlled && v.type === "number" && Al(v, "number", v.value)
            }
            switch (O = d ? Wr(d) : window,
            e) {
            case "focusin":
                (Qd(O) || O.contentEditable === "true") && (Br = O,
                Ql = d,
                Ho = null);
                break;
            case "focusout":
                Ho = Ql = Br = null;
                break;
            case "mousedown":
                Gl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gl = !1,
                Zd(m, n, h);
                break;
            case "selectionchange":
                if (Fv)
                    break;
            case "keydown":
            case "keyup":
                Zd(m, n, h)
            }
            var P;
            if (xc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var M = "onCompositionStart";
                        break e;
                    case "compositionend":
                        M = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        M = "onCompositionUpdate";
                        break e
                    }
                    M = void 0
                }
            else
                $r ? Th(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
            M && (Ch && n.locale !== "ko" && ($r || M !== "onCompositionStart" ? M === "onCompositionEnd" && $r && (P = Eh()) : (On = h,
            gc = "value"in On ? On.value : On.textContent,
            $r = !0)),
            O = Da(d, M),
            0 < O.length && (M = new Hd(M,e,null,n,h),
            m.push({
                event: M,
                listeners: O
            }),
            P ? M.data = P : (P = Dh(n),
            P !== null && (M.data = P)))),
            (P = Sv ? Ev(e, n) : Cv(e, n)) && (d = Da(d, "onBeforeInput"),
            0 < d.length && (h = new Hd("onBeforeInput","beforeinput",null,n,h),
            m.push({
                event: h,
                listeners: d
            }),
            h.data = P))
        }
        Uh(m, t)
    })
}
function ss(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Da(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = Xo(e, n),
        s != null && r.unshift(ss(e, s, o)),
        s = Xo(e, t),
        s != null && r.push(ss(e, s, o))),
        e = e.return
    }
    return r
}
function Or(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function nf(e, t, n, r, o) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
        var l = n
          , u = l.alternate
          , d = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && d !== null && (l = d,
        o ? (u = Xo(n, s),
        u != null && a.unshift(ss(n, u, l))) : o || (u = Xo(n, s),
        u != null && a.push(ss(n, u, l)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var Uv = /\r\n?/g
  , Wv = /\u0000|\uFFFD/g;
function rf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Uv, `
`).replace(Wv, "")
}
function qs(e, t, n) {
    if (t = rf(t),
    rf(e) !== t && n)
        throw Error(A(425))
}
function _a() {}
var Kl = null
  , Jl = null;
function Xl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Zl = typeof setTimeout == "function" ? setTimeout : void 0
  , zv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , of = typeof Promise == "function" ? Promise : void 0
  , Hv = typeof queueMicrotask == "function" ? queueMicrotask : typeof of < "u" ? function(e) {
    return of.resolve(null).then(e).catch(Vv)
}
: Zl;
function Vv(e) {
    setTimeout(function() {
        throw e
    })
}
function nl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    ts(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    ts(t)
}
function In(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function sf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ho = Math.random().toString(36).slice(2)
  , rn = "__reactFiber$" + ho
  , as = "__reactProps$" + ho
  , yn = "__reactContainer$" + ho
  , eu = "__reactEvents$" + ho
  , Yv = "__reactListeners$" + ho
  , qv = "__reactHandles$" + ho;
function lr(e) {
    var t = e[rn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[yn] || n[rn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = sf(e); e !== null; ) {
                    if (n = e[rn])
                        return n;
                    e = sf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ns(e) {
    return e = e[rn] || e[yn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Wr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function ai(e) {
    return e[as] || null
}
var tu = []
  , zr = -1;
function Qn(e) {
    return {
        current: e
    }
}
function xe(e) {
    0 > zr || (e.current = tu[zr],
    tu[zr] = null,
    zr--)
}
function ge(e, t) {
    zr++,
    tu[zr] = e.current,
    e.current = t
}
var Vn = {}
  , ot = Qn(Vn)
  , gt = Qn(!1)
  , yr = Vn;
function so(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Vn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function yt(e) {
    return e = e.childContextTypes,
    e != null
}
function Pa() {
    xe(gt),
    xe(ot)
}
function af(e, t, n) {
    if (ot.current !== Vn)
        throw Error(A(168));
    ge(ot, t),
    ge(gt, n)
}
function zh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(A(108, Py(e) || "Unknown", o));
    return _e({}, n, r)
}
function Oa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vn,
    yr = ot.current,
    ge(ot, e),
    ge(gt, gt.current),
    !0
}
function lf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(A(169));
    n ? (e = zh(e, t, yr),
    r.__reactInternalMemoizedMergedChildContext = e,
    xe(gt),
    xe(ot),
    ge(ot, e)) : xe(gt),
    ge(gt, n)
}
var dn = null
  , ii = !1
  , rl = !1;
function Hh(e) {
    dn === null ? dn = [e] : dn.push(e)
}
function Qv(e) {
    ii = !0,
    Hh(e)
}
function Gn() {
    if (!rl && dn !== null) {
        rl = !0;
        var e = 0
          , t = de;
        try {
            var n = dn;
            for (de = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            dn = null,
            ii = !1
        } catch (o) {
            throw dn !== null && (dn = dn.slice(e + 1)),
            ph(fc, Gn),
            o
        } finally {
            de = t,
            rl = !1
        }
    }
    return null
}
var Hr = []
  , Vr = 0
  , La = null
  , Ma = 0
  , Ot = []
  , Lt = 0
  , vr = null
  , fn = 1
  , mn = "";
function or(e, t) {
    Hr[Vr++] = Ma,
    Hr[Vr++] = La,
    La = e,
    Ma = t
}
function Vh(e, t, n) {
    Ot[Lt++] = fn,
    Ot[Lt++] = mn,
    Ot[Lt++] = vr,
    vr = e;
    var r = fn;
    e = mn;
    var o = 32 - Yt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Yt(t) + o;
    if (30 < s) {
        var a = o - o % 5;
        s = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        fn = 1 << 32 - Yt(t) + o | n << o | r,
        mn = s + e
    } else
        fn = 1 << s | n << o | r,
        mn = e
}
function bc(e) {
    e.return !== null && (or(e, 1),
    Vh(e, 1, 0))
}
function jc(e) {
    for (; e === La; )
        La = Hr[--Vr],
        Hr[Vr] = null,
        Ma = Hr[--Vr],
        Hr[Vr] = null;
    for (; e === vr; )
        vr = Ot[--Lt],
        Ot[Lt] = null,
        mn = Ot[--Lt],
        Ot[Lt] = null,
        fn = Ot[--Lt],
        Ot[Lt] = null
}
var kt = null
  , Nt = null
  , be = !1
  , Vt = null;
function Yh(e, t) {
    var n = Mt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function uf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        kt = e,
        Nt = In(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        kt = e,
        Nt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = vr !== null ? {
            id: fn,
            overflow: mn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Mt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        kt = e,
        Nt = null,
        !0) : !1;
    default:
        return !1
    }
}
function nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ru(e) {
    if (be) {
        var t = Nt;
        if (t) {
            var n = t;
            if (!uf(e, t)) {
                if (nu(e))
                    throw Error(A(418));
                t = In(n.nextSibling);
                var r = kt;
                t && uf(e, t) ? Yh(r, n) : (e.flags = e.flags & -4097 | 2,
                be = !1,
                kt = e)
            }
        } else {
            if (nu(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            be = !1,
            kt = e
        }
    }
}
function cf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    kt = e
}
function Qs(e) {
    if (e !== kt)
        return !1;
    if (!be)
        return cf(e),
        be = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps)),
    t && (t = Nt)) {
        if (nu(e))
            throw qh(),
            Error(A(418));
        for (; t; )
            Yh(e, t),
            t = In(t.nextSibling)
    }
    if (cf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Nt = In(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Nt = null
        }
    } else
        Nt = kt ? In(e.stateNode.nextSibling) : null;
    return !0
}
function qh() {
    for (var e = Nt; e; )
        e = In(e.nextSibling)
}
function ao() {
    Nt = kt = null,
    be = !1
}
function Nc(e) {
    Vt === null ? Vt = [e] : Vt.push(e)
}
var Gv = wn.ReactCurrentBatchConfig;
function To(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(A(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
                var l = o.refs;
                a === null ? delete l[s] : l[s] = a
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function Gs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function df(e) {
    var t = e._init;
    return t(e._payload)
}
function Qh(e) {
    function t(b, y) {
        if (e) {
            var g = b.deletions;
            g === null ? (b.deletions = [y],
            b.flags |= 16) : g.push(y)
        }
    }
    function n(b, y) {
        if (!e)
            return null;
        for (; y !== null; )
            t(b, y),
            y = y.sibling;
        return null
    }
    function r(b, y) {
        for (b = new Map; y !== null; )
            y.key !== null ? b.set(y.key, y) : b.set(y.index, y),
            y = y.sibling;
        return b
    }
    function o(b, y) {
        return b = Wn(b, y),
        b.index = 0,
        b.sibling = null,
        b
    }
    function s(b, y, g) {
        return b.index = g,
        e ? (g = b.alternate,
        g !== null ? (g = g.index,
        g < y ? (b.flags |= 2,
        y) : g) : (b.flags |= 2,
        y)) : (b.flags |= 1048576,
        y)
    }
    function a(b) {
        return e && b.alternate === null && (b.flags |= 2),
        b
    }
    function l(b, y, g, E) {
        return y === null || y.tag !== 6 ? (y = cl(g, b.mode, E),
        y.return = b,
        y) : (y = o(y, g),
        y.return = b,
        y)
    }
    function u(b, y, g, E) {
        var T = g.type;
        return T === Ir ? h(b, y, g.props.children, E, g.key) : y !== null && (y.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Tn && df(T) === y.type) ? (E = o(y, g.props),
        E.ref = To(b, y, g),
        E.return = b,
        E) : (E = ga(g.type, g.key, g.props, null, b.mode, E),
        E.ref = To(b, y, g),
        E.return = b,
        E)
    }
    function d(b, y, g, E) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== g.containerInfo || y.stateNode.implementation !== g.implementation ? (y = dl(g, b.mode, E),
        y.return = b,
        y) : (y = o(y, g.children || []),
        y.return = b,
        y)
    }
    function h(b, y, g, E, T) {
        return y === null || y.tag !== 7 ? (y = hr(g, b.mode, E, T),
        y.return = b,
        y) : (y = o(y, g),
        y.return = b,
        y)
    }
    function m(b, y, g) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return y = cl("" + y, b.mode, g),
            y.return = b,
            y;
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Is:
                return g = ga(y.type, y.key, y.props, null, b.mode, g),
                g.ref = To(b, null, y),
                g.return = b,
                g;
            case Fr:
                return y = dl(y, b.mode, g),
                y.return = b,
                y;
            case Tn:
                var E = y._init;
                return m(b, E(y._payload), g)
            }
            if (Ao(y) || No(y))
                return y = hr(y, b.mode, g, null),
                y.return = b,
                y;
            Gs(b, y)
        }
        return null
    }
    function v(b, y, g, E) {
        var T = y !== null ? y.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return T !== null ? null : l(b, y, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Is:
                return g.key === T ? u(b, y, g, E) : null;
            case Fr:
                return g.key === T ? d(b, y, g, E) : null;
            case Tn:
                return T = g._init,
                v(b, y, T(g._payload), E)
            }
            if (Ao(g) || No(g))
                return T !== null ? null : h(b, y, g, E, null);
            Gs(b, g)
        }
        return null
    }
    function k(b, y, g, E, T) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return b = b.get(g) || null,
            l(y, b, "" + E, T);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case Is:
                return b = b.get(E.key === null ? g : E.key) || null,
                u(y, b, E, T);
            case Fr:
                return b = b.get(E.key === null ? g : E.key) || null,
                d(y, b, E, T);
            case Tn:
                var O = E._init;
                return k(b, y, g, O(E._payload), T)
            }
            if (Ao(E) || No(E))
                return b = b.get(g) || null,
                h(y, b, E, T, null);
            Gs(y, E)
        }
        return null
    }
    function x(b, y, g, E) {
        for (var T = null, O = null, P = y, M = y = 0, U = null; P !== null && M < g.length; M++) {
            P.index > M ? (U = P,
            P = null) : U = P.sibling;
            var I = v(b, P, g[M], E);
            if (I === null) {
                P === null && (P = U);
                break
            }
            e && P && I.alternate === null && t(b, P),
            y = s(I, y, M),
            O === null ? T = I : O.sibling = I,
            O = I,
            P = U
        }
        if (M === g.length)
            return n(b, P),
            be && or(b, M),
            T;
        if (P === null) {
            for (; M < g.length; M++)
                P = m(b, g[M], E),
                P !== null && (y = s(P, y, M),
                O === null ? T = P : O.sibling = P,
                O = P);
            return be && or(b, M),
            T
        }
        for (P = r(b, P); M < g.length; M++)
            U = k(P, b, M, g[M], E),
            U !== null && (e && U.alternate !== null && P.delete(U.key === null ? M : U.key),
            y = s(U, y, M),
            O === null ? T = U : O.sibling = U,
            O = U);
        return e && P.forEach(function(ae) {
            return t(b, ae)
        }),
        be && or(b, M),
        T
    }
    function N(b, y, g, E) {
        var T = No(g);
        if (typeof T != "function")
            throw Error(A(150));
        if (g = T.call(g),
        g == null)
            throw Error(A(151));
        for (var O = T = null, P = y, M = y = 0, U = null, I = g.next(); P !== null && !I.done; M++,
        I = g.next()) {
            P.index > M ? (U = P,
            P = null) : U = P.sibling;
            var ae = v(b, P, I.value, E);
            if (ae === null) {
                P === null && (P = U);
                break
            }
            e && P && ae.alternate === null && t(b, P),
            y = s(ae, y, M),
            O === null ? T = ae : O.sibling = ae,
            O = ae,
            P = U
        }
        if (I.done)
            return n(b, P),
            be && or(b, M),
            T;
        if (P === null) {
            for (; !I.done; M++,
            I = g.next())
                I = m(b, I.value, E),
                I !== null && (y = s(I, y, M),
                O === null ? T = I : O.sibling = I,
                O = I);
            return be && or(b, M),
            T
        }
        for (P = r(b, P); !I.done; M++,
        I = g.next())
            I = k(P, b, M, I.value, E),
            I !== null && (e && I.alternate !== null && P.delete(I.key === null ? M : I.key),
            y = s(I, y, M),
            O === null ? T = I : O.sibling = I,
            O = I);
        return e && P.forEach(function(fe) {
            return t(b, fe)
        }),
        be && or(b, M),
        T
    }
    function S(b, y, g, E) {
        if (typeof g == "object" && g !== null && g.type === Ir && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Is:
                e: {
                    for (var T = g.key, O = y; O !== null; ) {
                        if (O.key === T) {
                            if (T = g.type,
                            T === Ir) {
                                if (O.tag === 7) {
                                    n(b, O.sibling),
                                    y = o(O, g.props.children),
                                    y.return = b,
                                    b = y;
                                    break e
                                }
                            } else if (O.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Tn && df(T) === O.type) {
                                n(b, O.sibling),
                                y = o(O, g.props),
                                y.ref = To(b, O, g),
                                y.return = b,
                                b = y;
                                break e
                            }
                            n(b, O);
                            break
                        } else
                            t(b, O);
                        O = O.sibling
                    }
                    g.type === Ir ? (y = hr(g.props.children, b.mode, E, g.key),
                    y.return = b,
                    b = y) : (E = ga(g.type, g.key, g.props, null, b.mode, E),
                    E.ref = To(b, y, g),
                    E.return = b,
                    b = E)
                }
                return a(b);
            case Fr:
                e: {
                    for (O = g.key; y !== null; ) {
                        if (y.key === O)
                            if (y.tag === 4 && y.stateNode.containerInfo === g.containerInfo && y.stateNode.implementation === g.implementation) {
                                n(b, y.sibling),
                                y = o(y, g.children || []),
                                y.return = b,
                                b = y;
                                break e
                            } else {
                                n(b, y);
                                break
                            }
                        else
                            t(b, y);
                        y = y.sibling
                    }
                    y = dl(g, b.mode, E),
                    y.return = b,
                    b = y
                }
                return a(b);
            case Tn:
                return O = g._init,
                S(b, y, O(g._payload), E)
            }
            if (Ao(g))
                return x(b, y, g, E);
            if (No(g))
                return N(b, y, g, E);
            Gs(b, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        y !== null && y.tag === 6 ? (n(b, y.sibling),
        y = o(y, g),
        y.return = b,
        b = y) : (n(b, y),
        y = cl(g, b.mode, E),
        y.return = b,
        b = y),
        a(b)) : n(b, y)
    }
    return S
}
var io = Qh(!0)
  , Gh = Qh(!1)
  , Ra = Qn(null)
  , Aa = null
  , Yr = null
  , kc = null;
function Sc() {
    kc = Yr = Aa = null
}
function Ec(e) {
    var t = Ra.current;
    xe(Ra),
    e._currentValue = t
}
function ou(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function to(e, t) {
    Aa = e,
    kc = Yr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (pt = !0),
    e.firstContext = null)
}
function At(e) {
    var t = e._currentValue;
    if (kc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Yr === null) {
            if (Aa === null)
                throw Error(A(308));
            Yr = e,
            Aa.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Yr = Yr.next = e;
    return t
}
var ur = null;
function Cc(e) {
    ur === null ? ur = [e] : ur.push(e)
}
function Kh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Cc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    vn(e, r)
}
function vn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Dn = !1;
function Tc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Jh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function pn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function $n(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ie & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        vn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Cc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    vn(e, n)
}
function ca(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        mc(e, n)
    }
}
function ff(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = a : s = s.next = a,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Fa(e, t, n, r) {
    var o = e.updateQueue;
    Dn = !1;
    var s = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var u = l
          , d = u.next;
        u.next = null,
        a === null ? s = d : a.next = d,
        a = u;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        l = h.lastBaseUpdate,
        l !== a && (l === null ? h.firstBaseUpdate = d : l.next = d,
        h.lastBaseUpdate = u))
    }
    if (s !== null) {
        var m = o.baseState;
        a = 0,
        h = d = u = null,
        l = s;
        do {
            var v = l.lane
              , k = l.eventTime;
            if ((r & v) === v) {
                h !== null && (h = h.next = {
                    eventTime: k,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e
                      , N = l;
                    switch (v = t,
                    k = n,
                    N.tag) {
                    case 1:
                        if (x = N.payload,
                        typeof x == "function") {
                            m = x.call(k, m, v);
                            break e
                        }
                        m = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = N.payload,
                        v = typeof x == "function" ? x.call(k, m, v) : x,
                        v == null)
                            break e;
                        m = _e({}, m, v);
                        break e;
                    case 2:
                        Dn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                v = o.effects,
                v === null ? o.effects = [l] : v.push(l))
            } else
                k = {
                    eventTime: k,
                    lane: v,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                h === null ? (d = h = k,
                u = m) : h = h.next = k,
                a |= v;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                v = l,
                l = v.next,
                v.next = null,
                o.lastBaseUpdate = v,
                o.shared.pending = null
            }
        } while (!0);
        if (h === null && (u = m),
        o.baseState = u,
        o.firstBaseUpdate = d,
        o.lastBaseUpdate = h,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        wr |= a,
        e.lanes = a,
        e.memoizedState = m
    }
}
function mf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(A(191, o));
                o.call(r)
            }
        }
}
var ks = {}
  , an = Qn(ks)
  , is = Qn(ks)
  , ls = Qn(ks);
function cr(e) {
    if (e === ks)
        throw Error(A(174));
    return e
}
function Dc(e, t) {
    switch (ge(ls, t),
    ge(is, e),
    ge(an, ks),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Il(t, e)
    }
    xe(an),
    ge(an, t)
}
function lo() {
    xe(an),
    xe(is),
    xe(ls)
}
function Xh(e) {
    cr(ls.current);
    var t = cr(an.current)
      , n = Il(t, e.type);
    t !== n && (ge(is, e),
    ge(an, n))
}
function _c(e) {
    is.current === e && (xe(an),
    xe(is))
}
var Te = Qn(0);
function Ia(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ol = [];
function Pc() {
    for (var e = 0; e < ol.length; e++)
        ol[e]._workInProgressVersionPrimary = null;
    ol.length = 0
}
var da = wn.ReactCurrentDispatcher
  , sl = wn.ReactCurrentBatchConfig
  , xr = 0
  , De = null
  , Ue = null
  , He = null
  , $a = !1
  , Vo = !1
  , us = 0
  , Kv = 0;
function Ze() {
    throw Error(A(321))
}
function Oc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qt(e[n], t[n]))
            return !1;
    return !0
}
function Lc(e, t, n, r, o, s) {
    if (xr = s,
    De = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    da.current = e === null || e.memoizedState === null ? ex : tx,
    e = n(r, o),
    Vo) {
        s = 0;
        do {
            if (Vo = !1,
            us = 0,
            25 <= s)
                throw Error(A(301));
            s += 1,
            He = Ue = null,
            t.updateQueue = null,
            da.current = nx,
            e = n(r, o)
        } while (Vo)
    }
    if (da.current = Ba,
    t = Ue !== null && Ue.next !== null,
    xr = 0,
    He = Ue = De = null,
    $a = !1,
    t)
        throw Error(A(300));
    return e
}
function Mc() {
    var e = us !== 0;
    return us = 0,
    e
}
function nn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return He === null ? De.memoizedState = He = e : He = He.next = e,
    He
}
function Ft() {
    if (Ue === null) {
        var e = De.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ue.next;
    var t = He === null ? De.memoizedState : He.next;
    if (t !== null)
        He = t,
        Ue = e;
    else {
        if (e === null)
            throw Error(A(310));
        Ue = e,
        e = {
            memoizedState: Ue.memoizedState,
            baseState: Ue.baseState,
            baseQueue: Ue.baseQueue,
            queue: Ue.queue,
            next: null
        },
        He === null ? De.memoizedState = He = e : He = He.next = e
    }
    return He
}
function cs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function al(e) {
    var t = Ft()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = Ue
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = s.next,
            s.next = a
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var l = a = null
          , u = null
          , d = s;
        do {
            var h = d.lane;
            if ((xr & h) === h)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                }),
                r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var m = {
                    lane: h,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                u === null ? (l = u = m,
                a = r) : u = u.next = m,
                De.lanes |= h,
                wr |= h
            }
            d = d.next
        } while (d !== null && d !== s);
        u === null ? a = r : u.next = l,
        Qt(r, t.memoizedState) || (pt = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            De.lanes |= s,
            wr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function il(e) {
    var t = Ft()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do
            s = e(s, a.action),
            a = a.next;
        while (a !== o);
        Qt(s, t.memoizedState) || (pt = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Zh() {}
function ep(e, t) {
    var n = De
      , r = Ft()
      , o = t()
      , s = !Qt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    pt = !0),
    r = r.queue,
    Rc(rp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || He !== null && He.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ds(9, np.bind(null, n, r, o, t), void 0, null),
        Ve === null)
            throw Error(A(349));
        xr & 30 || tp(n, t, o)
    }
    return o
}
function tp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = De.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    De.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function np(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    op(t) && sp(e)
}
function rp(e, t, n) {
    return n(function() {
        op(t) && sp(e)
    })
}
function op(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Qt(e, n)
    } catch {
        return !0
    }
}
function sp(e) {
    var t = vn(e, 1);
    t !== null && qt(t, e, 1, -1)
}
function hf(e) {
    var t = nn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Zv.bind(null, De, e),
    [t.memoizedState, e]
}
function ds(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = De.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    De.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ap() {
    return Ft().memoizedState
}
function fa(e, t, n, r) {
    var o = nn();
    De.flags |= e,
    o.memoizedState = ds(1 | t, n, void 0, r === void 0 ? null : r)
}
function li(e, t, n, r) {
    var o = Ft();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ue !== null) {
        var a = Ue.memoizedState;
        if (s = a.destroy,
        r !== null && Oc(r, a.deps)) {
            o.memoizedState = ds(t, n, s, r);
            return
        }
    }
    De.flags |= e,
    o.memoizedState = ds(1 | t, n, s, r)
}
function pf(e, t) {
    return fa(8390656, 8, e, t)
}
function Rc(e, t) {
    return li(2048, 8, e, t)
}
function ip(e, t) {
    return li(4, 2, e, t)
}
function lp(e, t) {
    return li(4, 4, e, t)
}
function up(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function cp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    li(4, 4, up.bind(null, t, e), n)
}
function Ac() {}
function dp(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Oc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function fp(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Oc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function mp(e, t, n) {
    return xr & 21 ? (Qt(n, t) || (n = vh(),
    De.lanes |= n,
    wr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    pt = !0),
    e.memoizedState = n)
}
function Jv(e, t) {
    var n = de;
    de = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = sl.transition;
    sl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        de = n,
        sl.transition = r
    }
}
function hp() {
    return Ft().memoizedState
}
function Xv(e, t, n) {
    var r = Un(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    pp(e))
        gp(t, n);
    else if (n = Kh(e, t, n, r),
    n !== null) {
        var o = lt();
        qt(n, e, r, o),
        yp(n, t, r)
    }
}
function Zv(e, t, n) {
    var r = Un(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (pp(e))
        gp(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var a = t.lastRenderedState
                  , l = s(a, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                Qt(l, a)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o,
                    Cc(t)) : (o.next = u.next,
                    u.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Kh(e, t, o, r),
        n !== null && (o = lt(),
        qt(n, e, r, o),
        yp(n, t, r))
    }
}
function pp(e) {
    var t = e.alternate;
    return e === De || t !== null && t === De
}
function gp(e, t) {
    Vo = $a = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function yp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        mc(e, n)
    }
}
var Ba = {
    readContext: At,
    useCallback: Ze,
    useContext: Ze,
    useEffect: Ze,
    useImperativeHandle: Ze,
    useInsertionEffect: Ze,
    useLayoutEffect: Ze,
    useMemo: Ze,
    useReducer: Ze,
    useRef: Ze,
    useState: Ze,
    useDebugValue: Ze,
    useDeferredValue: Ze,
    useTransition: Ze,
    useMutableSource: Ze,
    useSyncExternalStore: Ze,
    useId: Ze,
    unstable_isNewReconciler: !1
}
  , ex = {
    readContext: At,
    useCallback: function(e, t) {
        return nn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: At,
    useEffect: pf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        fa(4194308, 4, up.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return fa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return fa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = nn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = nn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Xv.bind(null, De, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = nn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: hf,
    useDebugValue: Ac,
    useDeferredValue: function(e) {
        return nn().memoizedState = e
    },
    useTransition: function() {
        var e = hf(!1)
          , t = e[0];
        return e = Jv.bind(null, e[1]),
        nn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = De
          , o = nn();
        if (be) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = t(),
            Ve === null)
                throw Error(A(349));
            xr & 30 || tp(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        pf(rp.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        ds(9, np.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = nn()
          , t = Ve.identifierPrefix;
        if (be) {
            var n = mn
              , r = fn;
            n = (r & ~(1 << 32 - Yt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = us++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Kv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , tx = {
    readContext: At,
    useCallback: dp,
    useContext: At,
    useEffect: Rc,
    useImperativeHandle: cp,
    useInsertionEffect: ip,
    useLayoutEffect: lp,
    useMemo: fp,
    useReducer: al,
    useRef: ap,
    useState: function() {
        return al(cs)
    },
    useDebugValue: Ac,
    useDeferredValue: function(e) {
        var t = Ft();
        return mp(t, Ue.memoizedState, e)
    },
    useTransition: function() {
        var e = al(cs)[0]
          , t = Ft().memoizedState;
        return [e, t]
    },
    useMutableSource: Zh,
    useSyncExternalStore: ep,
    useId: hp,
    unstable_isNewReconciler: !1
}
  , nx = {
    readContext: At,
    useCallback: dp,
    useContext: At,
    useEffect: Rc,
    useImperativeHandle: cp,
    useInsertionEffect: ip,
    useLayoutEffect: lp,
    useMemo: fp,
    useReducer: il,
    useRef: ap,
    useState: function() {
        return il(cs)
    },
    useDebugValue: Ac,
    useDeferredValue: function(e) {
        var t = Ft();
        return Ue === null ? t.memoizedState = e : mp(t, Ue.memoizedState, e)
    },
    useTransition: function() {
        var e = il(cs)[0]
          , t = Ft().memoizedState;
        return [e, t]
    },
    useMutableSource: Zh,
    useSyncExternalStore: ep,
    useId: hp,
    unstable_isNewReconciler: !1
};
function zt(e, t) {
    if (e && e.defaultProps) {
        t = _e({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function su(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : _e({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ui = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Sr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = lt()
          , o = Un(e)
          , s = pn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = $n(e, s, o),
        t !== null && (qt(t, e, o, r),
        ca(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = lt()
          , o = Un(e)
          , s = pn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = $n(e, s, o),
        t !== null && (qt(t, e, o, r),
        ca(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = lt()
          , r = Un(e)
          , o = pn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = $n(e, o, r),
        t !== null && (qt(t, e, r, n),
        ca(t, e, r))
    }
};
function gf(e, t, n, r, o, s, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !rs(n, r) || !rs(o, s) : !0
}
function vp(e, t, n) {
    var r = !1
      , o = Vn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = At(s) : (o = yt(t) ? yr : ot.current,
    r = t.contextTypes,
    s = (r = r != null) ? so(e, o) : Vn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ui,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function yf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ui.enqueueReplaceState(t, t.state, null)
}
function au(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Tc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = At(s) : (s = yt(t) ? yr : ot.current,
    o.context = so(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (su(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ui.enqueueReplaceState(o, o.state, null),
    Fa(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function uo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += _y(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function ll(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function iu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var rx = typeof WeakMap == "function" ? WeakMap : Map;
function xp(e, t, n) {
    n = pn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Wa || (Wa = !0,
        yu = r),
        iu(e, t)
    }
    ,
    n
}
function wp(e, t, n) {
    n = pn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            iu(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        iu(e, t),
        typeof r != "function" && (Bn === null ? Bn = new Set([this]) : Bn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function vf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new rx;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = yx.bind(null, e, t, n),
    t.then(e, e))
}
function xf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function wf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1),
    t.tag = 2,
    $n(n, t, 1))),
    n.lanes |= 1),
    e)
}
var ox = wn.ReactCurrentOwner
  , pt = !1;
function it(e, t, n, r) {
    t.child = e === null ? Gh(t, null, n, r) : io(t, e.child, n, r)
}
function bf(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return to(t, o),
    r = Lc(e, t, n, r, s, o),
    n = Mc(),
    e !== null && !pt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    xn(e, t, o)) : (be && n && bc(t),
    t.flags |= 1,
    it(e, t, r, o),
    t.child)
}
function jf(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Hc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        bp(e, t, s, r, o)) : (e = ga(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var a = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : rs,
        n(a, r) && e.ref === t.ref)
            return xn(e, t, o)
    }
    return t.flags |= 1,
    e = Wn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function bp(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (rs(s, r) && e.ref === t.ref)
            if (pt = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (pt = !0);
            else
                return t.lanes = e.lanes,
                xn(e, t, o)
    }
    return lu(e, t, n, r, o)
}
function jp(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ge(Qr, jt),
            jt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ge(Qr, jt),
                jt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ge(Qr, jt),
            jt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ge(Qr, jt),
        jt |= r;
    return it(e, t, o, n),
    t.child
}
function Np(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function lu(e, t, n, r, o) {
    var s = yt(n) ? yr : ot.current;
    return s = so(t, s),
    to(t, o),
    n = Lc(e, t, n, r, s, o),
    r = Mc(),
    e !== null && !pt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    xn(e, t, o)) : (be && r && bc(t),
    t.flags |= 1,
    it(e, t, n, o),
    t.child)
}
function Nf(e, t, n, r, o) {
    if (yt(n)) {
        var s = !0;
        Oa(t)
    } else
        s = !1;
    if (to(t, o),
    t.stateNode === null)
        ma(e, t),
        vp(t, n, r),
        au(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , l = t.memoizedProps;
        a.props = l;
        var u = a.context
          , d = n.contextType;
        typeof d == "object" && d !== null ? d = At(d) : (d = yt(n) ? yr : ot.current,
        d = so(t, d));
        var h = n.getDerivedStateFromProps
          , m = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        m || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || u !== d) && yf(t, a, r, d),
        Dn = !1;
        var v = t.memoizedState;
        a.state = v,
        Fa(t, r, a, o),
        u = t.memoizedState,
        l !== r || v !== u || gt.current || Dn ? (typeof h == "function" && (su(t, n, h, r),
        u = t.memoizedState),
        (l = Dn || gf(t, n, l, r, v, u, d)) ? (m || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        a.props = r,
        a.state = u,
        a.context = d,
        r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Jh(e, t),
        l = t.memoizedProps,
        d = t.type === t.elementType ? l : zt(t.type, l),
        a.props = d,
        m = t.pendingProps,
        v = a.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = At(u) : (u = yt(n) ? yr : ot.current,
        u = so(t, u));
        var k = n.getDerivedStateFromProps;
        (h = typeof k == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== m || v !== u) && yf(t, a, r, u),
        Dn = !1,
        v = t.memoizedState,
        a.state = v,
        Fa(t, r, a, o);
        var x = t.memoizedState;
        l !== m || v !== x || gt.current || Dn ? (typeof k == "function" && (su(t, n, k, r),
        x = t.memoizedState),
        (d = Dn || gf(t, n, d, r, v, x, u) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, x, u),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, x, u)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        a.props = r,
        a.state = x,
        a.context = u,
        r = d) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return uu(e, t, n, r, s, o)
}
function uu(e, t, n, r, o, s) {
    Np(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && lf(t, n, !1),
        xn(e, t, s);
    r = t.stateNode,
    ox.current = t;
    var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = io(t, e.child, null, s),
    t.child = io(t, null, l, s)) : it(e, t, l, s),
    t.memoizedState = r.state,
    o && lf(t, n, !0),
    t.child
}
function kp(e) {
    var t = e.stateNode;
    t.pendingContext ? af(e, t.pendingContext, t.pendingContext !== t.context) : t.context && af(e, t.context, !1),
    Dc(e, t.containerInfo)
}
function kf(e, t, n, r, o) {
    return ao(),
    Nc(o),
    t.flags |= 256,
    it(e, t, n, r),
    t.child
}
var cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function du(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Sp(e, t, n) {
    var r = t.pendingProps, o = Te.current, s = !1, a = (t.flags & 128) !== 0, l;
    if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ge(Te, o & 1),
    e === null)
        return ru(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = a) : s = fi(a, r, 0, null),
        e = hr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = du(n),
        t.memoizedState = cu,
        e) : Fc(t, a));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return sx(e, t, a, r, l, o, n);
    if (s) {
        s = r.fallback,
        a = t.mode,
        o = e.child,
        l = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = Wn(o, u),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? s = Wn(l, s) : (s = hr(s, a, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        a = e.child.memoizedState,
        a = a === null ? du(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        s.memoizedState = a,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = cu,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Wn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Fc(e, t) {
    return t = fi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ks(e, t, n, r) {
    return r !== null && Nc(r),
    io(t, e.child, null, n),
    e = Fc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function sx(e, t, n, r, o, s, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ll(Error(A(422))),
        Ks(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = fi({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = hr(s, o, a, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && io(t, e.child, null, a),
        t.child.memoizedState = du(a),
        t.memoizedState = cu,
        s);
    if (!(t.mode & 1))
        return Ks(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(A(419)),
        r = ll(s, r, void 0),
        Ks(e, t, a, r)
    }
    if (l = (a & e.childLanes) !== 0,
    pt || l) {
        if (r = Ve,
        r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            vn(e, o),
            qt(r, e, o, -1))
        }
        return zc(),
        r = ll(Error(A(421))),
        Ks(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = vx.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Nt = In(o.nextSibling),
    kt = t,
    be = !0,
    Vt = null,
    e !== null && (Ot[Lt++] = fn,
    Ot[Lt++] = mn,
    Ot[Lt++] = vr,
    fn = e.id,
    mn = e.overflow,
    vr = t),
    t = Fc(t, r.children),
    t.flags |= 4096,
    t)
}
function Sf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ou(e.return, t, n)
}
function ul(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function Ep(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (it(e, t, r.children, n),
    r = Te.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Sf(e, n, t);
                else if (e.tag === 19)
                    Sf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ge(Te, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ia(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            ul(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ia(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            ul(t, !0, n, null, s);
            break;
        case "together":
            ul(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ma(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function xn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    wr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Wn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Wn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function ax(e, t, n) {
    switch (t.tag) {
    case 3:
        kp(t),
        ao();
        break;
    case 5:
        Xh(t);
        break;
    case 1:
        yt(t.type) && Oa(t);
        break;
    case 4:
        Dc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ge(Ra, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ge(Te, Te.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Sp(e, t, n) : (ge(Te, Te.current & 1),
            e = xn(e, t, n),
            e !== null ? e.sibling : null);
        ge(Te, Te.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ep(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ge(Te, Te.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        jp(e, t, n)
    }
    return xn(e, t, n)
}
var Cp, fu, Tp, Dp;
Cp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
fu = function() {}
;
Tp = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        cr(an.current);
        var s = null;
        switch (n) {
        case "input":
            o = Ml(e, o),
            r = Ml(e, r),
            s = [];
            break;
        case "select":
            o = _e({}, o, {
                value: void 0
            }),
            r = _e({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Fl(e, o),
            r = Fl(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _a)
        }
        $l(n, r);
        var a;
        n = null;
        for (d in o)
            if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null)
                if (d === "style") {
                    var l = o[d];
                    for (a in l)
                        l.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ko.hasOwnProperty(d) ? s || (s = []) : (s = s || []).push(d, null));
        for (d in r) {
            var u = r[d];
            if (l = o != null ? o[d] : void 0,
            r.hasOwnProperty(d) && u !== l && (u != null || l != null))
                if (d === "style")
                    if (l) {
                        for (a in l)
                            !l.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in u)
                            u.hasOwnProperty(a) && l[a] !== u[a] && (n || (n = {}),
                            n[a] = u[a])
                    } else
                        n || (s || (s = []),
                        s.push(d, n)),
                        n = u;
                else
                    d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (s = s || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Ko.hasOwnProperty(d) ? (u != null && d === "onScroll" && ye("scroll", e),
                    s || l === u || (s = [])) : (s = s || []).push(d, u))
        }
        n && (s = s || []).push("style", n);
        var d = s;
        (t.updateQueue = d) && (t.flags |= 4)
    }
}
;
Dp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Do(e, t) {
    if (!be)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ix(e, t, n) {
    var r = t.pendingProps;
    switch (jc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return et(t),
        null;
    case 1:
        return yt(t.type) && Pa(),
        et(t),
        null;
    case 3:
        return r = t.stateNode,
        lo(),
        xe(gt),
        xe(ot),
        Pc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Qs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Vt !== null && (wu(Vt),
        Vt = null))),
        fu(e, t),
        et(t),
        null;
    case 5:
        _c(t);
        var o = cr(ls.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Tp(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return et(t),
                null
            }
            if (e = cr(an.current),
            Qs(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[rn] = t,
                r[as] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ye("cancel", r),
                    ye("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ye("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Io.length; o++)
                        ye(Io[o], r);
                    break;
                case "source":
                    ye("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ye("error", r),
                    ye("load", r);
                    break;
                case "details":
                    ye("toggle", r);
                    break;
                case "input":
                    Ld(r, s),
                    ye("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ye("invalid", r);
                    break;
                case "textarea":
                    Rd(r, s),
                    ye("invalid", r)
                }
                $l(n, s),
                o = null;
                for (var a in s)
                    if (s.hasOwnProperty(a)) {
                        var l = s[a];
                        a === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && qs(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && qs(r.textContent, l, e),
                        o = ["children", "" + l]) : Ko.hasOwnProperty(a) && l != null && a === "onScroll" && ye("scroll", r)
                    }
                switch (n) {
                case "input":
                    $s(r),
                    Md(r, s, !0);
                    break;
                case "textarea":
                    $s(r),
                    Ad(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = _a)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = rh(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[rn] = t,
                e[as] = r,
                Cp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = Bl(n, r),
                    n) {
                    case "dialog":
                        ye("cancel", e),
                        ye("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ye("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Io.length; o++)
                            ye(Io[o], e);
                        o = r;
                        break;
                    case "source":
                        ye("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ye("error", e),
                        ye("load", e),
                        o = r;
                        break;
                    case "details":
                        ye("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Ld(e, r),
                        o = Ml(e, r),
                        ye("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = _e({}, r, {
                            value: void 0
                        }),
                        ye("invalid", e);
                        break;
                    case "textarea":
                        Rd(e, r),
                        o = Fl(e, r),
                        ye("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    $l(n, o),
                    l = o;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var u = l[s];
                            s === "style" ? ah(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && oh(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Jo(e, u) : typeof u == "number" && Jo(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ko.hasOwnProperty(s) ? u != null && s === "onScroll" && ye("scroll", e) : u != null && ic(e, s, u, a))
                        }
                    switch (n) {
                    case "input":
                        $s(e),
                        Md(e, r, !1);
                        break;
                    case "textarea":
                        $s(e),
                        Ad(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Hn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Jr(e, !!r.multiple, s, !1) : r.defaultValue != null && Jr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = _a)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return et(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Dp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(A(166));
            if (n = cr(ls.current),
            cr(an.current),
            Qs(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[rn] = t,
                (s = r.nodeValue !== n) && (e = kt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        qs(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && qs(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[rn] = t,
                t.stateNode = r
        }
        return et(t),
        null;
    case 13:
        if (xe(Te),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (be && Nt !== null && t.mode & 1 && !(t.flags & 128))
                qh(),
                ao(),
                t.flags |= 98560,
                s = !1;
            else if (s = Qs(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(A(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(A(317));
                    s[rn] = t
                } else
                    ao(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                et(t),
                s = !1
            } else
                Vt !== null && (wu(Vt),
                Vt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Te.current & 1 ? We === 0 && (We = 3) : zc())),
        t.updateQueue !== null && (t.flags |= 4),
        et(t),
        null);
    case 4:
        return lo(),
        fu(e, t),
        e === null && os(t.stateNode.containerInfo),
        et(t),
        null;
    case 10:
        return Ec(t.type._context),
        et(t),
        null;
    case 17:
        return yt(t.type) && Pa(),
        et(t),
        null;
    case 19:
        if (xe(Te),
        s = t.memoizedState,
        s === null)
            return et(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = s.rendering,
        a === null)
            if (r)
                Do(s, !1);
            else {
                if (We !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = Ia(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Do(s, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                a = s.alternate,
                                a === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = a.childLanes,
                                s.lanes = a.lanes,
                                s.child = a.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = a.memoizedProps,
                                s.memoizedState = a.memoizedState,
                                s.updateQueue = a.updateQueue,
                                s.type = a.type,
                                e = a.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ge(Te, Te.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Re() > co && (t.flags |= 128,
                r = !0,
                Do(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ia(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Do(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !a.alternate && !be)
                        return et(t),
                        null
                } else
                    2 * Re() - s.renderingStartTime > co && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Do(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = s.last,
            n !== null ? n.sibling = a : t.child = a,
            s.last = a)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Re(),
        t.sibling = null,
        n = Te.current,
        ge(Te, r ? n & 1 | 2 : n & 1),
        t) : (et(t),
        null);
    case 22:
    case 23:
        return Wc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? jt & 1073741824 && (et(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : et(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function lx(e, t) {
    switch (jc(t),
    t.tag) {
    case 1:
        return yt(t.type) && Pa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return lo(),
        xe(gt),
        xe(ot),
        Pc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return _c(t),
        null;
    case 13:
        if (xe(Te),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            ao()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return xe(Te),
        null;
    case 4:
        return lo(),
        null;
    case 10:
        return Ec(t.type._context),
        null;
    case 22:
    case 23:
        return Wc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Js = !1
  , tt = !1
  , ux = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function qr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Le(e, t, r)
            }
        else
            n.current = null
}
function mu(e, t, n) {
    try {
        n()
    } catch (r) {
        Le(e, t, r)
    }
}
var Ef = !1;
function cx(e, t) {
    if (Kl = Ca,
    e = Mh(),
    wc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , l = -1
                      , u = -1
                      , d = 0
                      , h = 0
                      , m = e
                      , v = null;
                    t: for (; ; ) {
                        for (var k; m !== n || o !== 0 && m.nodeType !== 3 || (l = a + o),
                        m !== s || r !== 0 && m.nodeType !== 3 || (u = a + r),
                        m.nodeType === 3 && (a += m.nodeValue.length),
                        (k = m.firstChild) !== null; )
                            v = m,
                            m = k;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (v === n && ++d === o && (l = a),
                            v === s && ++h === r && (u = a),
                            (k = m.nextSibling) !== null)
                                break;
                            m = v,
                            v = m.parentNode
                        }
                        m = k
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Jl = {
        focusedElem: e,
        selectionRange: n
    },
    Ca = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var N = x.memoizedProps
                                  , S = x.memoizedState
                                  , b = t.stateNode
                                  , y = b.getSnapshotBeforeUpdate(t.elementType === t.type ? N : zt(t.type, N), S);
                                b.__reactInternalSnapshotBeforeUpdate = y
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (E) {
                    Le(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return x = Ef,
    Ef = !1,
    x
}
function Yo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && mu(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function ci(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function hu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function _p(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    _p(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[rn],
    delete t[as],
    delete t[eu],
    delete t[Yv],
    delete t[qv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Pp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Cf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Pp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = _a));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (pu(e, t, n),
        e = e.sibling; e !== null; )
            pu(e, t, n),
            e = e.sibling
}
function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (gu(e, t, n),
        e = e.sibling; e !== null; )
            gu(e, t, n),
            e = e.sibling
}
var Qe = null
  , Ht = !1;
function Sn(e, t, n) {
    for (n = n.child; n !== null; )
        Op(e, t, n),
        n = n.sibling
}
function Op(e, t, n) {
    if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
            sn.onCommitFiberUnmount(ni, n)
        } catch {}
    switch (n.tag) {
    case 5:
        tt || qr(n, t);
    case 6:
        var r = Qe
          , o = Ht;
        Qe = null,
        Sn(e, t, n),
        Qe = r,
        Ht = o,
        Qe !== null && (Ht ? (e = Qe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qe.removeChild(n.stateNode));
        break;
    case 18:
        Qe !== null && (Ht ? (e = Qe,
        n = n.stateNode,
        e.nodeType === 8 ? nl(e.parentNode, n) : e.nodeType === 1 && nl(e, n),
        ts(e)) : nl(Qe, n.stateNode));
        break;
    case 4:
        r = Qe,
        o = Ht,
        Qe = n.stateNode.containerInfo,
        Ht = !0,
        Sn(e, t, n),
        Qe = r,
        Ht = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!tt && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , a = s.destroy;
                s = s.tag,
                a !== void 0 && (s & 2 || s & 4) && mu(n, t, a),
                o = o.next
            } while (o !== r)
        }
        Sn(e, t, n);
        break;
    case 1:
        if (!tt && (qr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Le(n, t, l)
            }
        Sn(e, t, n);
        break;
    case 21:
        Sn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (tt = (r = tt) || n.memoizedState !== null,
        Sn(e, t, n),
        tt = r) : Sn(e, t, n);
        break;
    default:
        Sn(e, t, n)
    }
}
function Tf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ux),
        t.forEach(function(r) {
            var o = xx.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , a = t
                  , l = a;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Qe = l.stateNode,
                        Ht = !1;
                        break e;
                    case 3:
                        Qe = l.stateNode.containerInfo,
                        Ht = !0;
                        break e;
                    case 4:
                        Qe = l.stateNode.containerInfo,
                        Ht = !0;
                        break e
                    }
                    l = l.return
                }
                if (Qe === null)
                    throw Error(A(160));
                Op(s, a, o),
                Qe = null,
                Ht = !1;
                var u = o.alternate;
                u !== null && (u.return = null),
                o.return = null
            } catch (d) {
                Le(o, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Lp(t, e),
            t = t.sibling
}
function Lp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ut(t, e),
        Xt(e),
        r & 4) {
            try {
                Yo(3, e, e.return),
                ci(3, e)
            } catch (N) {
                Le(e, e.return, N)
            }
            try {
                Yo(5, e, e.return)
            } catch (N) {
                Le(e, e.return, N)
            }
        }
        break;
    case 1:
        Ut(t, e),
        Xt(e),
        r & 512 && n !== null && qr(n, n.return);
        break;
    case 5:
        if (Ut(t, e),
        Xt(e),
        r & 512 && n !== null && qr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Jo(o, "")
            } catch (N) {
                Le(e, e.return, N)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , a = n !== null ? n.memoizedProps : s
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && th(o, s),
                    Bl(l, a);
                    var d = Bl(l, s);
                    for (a = 0; a < u.length; a += 2) {
                        var h = u[a]
                          , m = u[a + 1];
                        h === "style" ? ah(o, m) : h === "dangerouslySetInnerHTML" ? oh(o, m) : h === "children" ? Jo(o, m) : ic(o, h, m, d)
                    }
                    switch (l) {
                    case "input":
                        Rl(o, s);
                        break;
                    case "textarea":
                        nh(o, s);
                        break;
                    case "select":
                        var v = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var k = s.value;
                        k != null ? Jr(o, !!s.multiple, k, !1) : v !== !!s.multiple && (s.defaultValue != null ? Jr(o, !!s.multiple, s.defaultValue, !0) : Jr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[as] = s
                } catch (N) {
                    Le(e, e.return, N)
                }
        }
        break;
    case 6:
        if (Ut(t, e),
        Xt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (N) {
                Le(e, e.return, N)
            }
        }
        break;
    case 3:
        if (Ut(t, e),
        Xt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ts(t.containerInfo)
            } catch (N) {
                Le(e, e.return, N)
            }
        break;
    case 4:
        Ut(t, e),
        Xt(e);
        break;
    case 13:
        Ut(t, e),
        Xt(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Bc = Re())),
        r & 4 && Tf(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (tt = (d = tt) || h,
        Ut(t, e),
        tt = d) : Ut(t, e),
        Xt(e),
        r & 8192) {
            if (d = e.memoizedState !== null,
            (e.stateNode.isHidden = d) && !h && e.mode & 1)
                for (z = e,
                h = e.child; h !== null; ) {
                    for (m = z = h; z !== null; ) {
                        switch (v = z,
                        k = v.child,
                        v.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Yo(4, v, v.return);
                            break;
                        case 1:
                            qr(v, v.return);
                            var x = v.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = v,
                                n = v.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (N) {
                                    Le(r, n, N)
                                }
                            }
                            break;
                        case 5:
                            qr(v, v.return);
                            break;
                        case 22:
                            if (v.memoizedState !== null) {
                                _f(m);
                                continue
                            }
                        }
                        k !== null ? (k.return = v,
                        z = k) : _f(m)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (h === null) {
                        h = m;
                        try {
                            o = m.stateNode,
                            d ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = m.stateNode,
                            u = m.memoizedProps.style,
                            a = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = sh("display", a))
                        } catch (N) {
                            Le(e, e.return, N)
                        }
                    }
                } else if (m.tag === 6) {
                    if (h === null)
                        try {
                            m.stateNode.nodeValue = d ? "" : m.memoizedProps
                        } catch (N) {
                            Le(e, e.return, N)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    h === m && (h = null),
                    m = m.return
                }
                h === m && (h = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        Ut(t, e),
        Xt(e),
        r & 4 && Tf(e);
        break;
    case 21:
        break;
    default:
        Ut(t, e),
        Xt(e)
    }
}
function Xt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Pp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Jo(o, ""),
                r.flags &= -33);
                var s = Cf(e);
                gu(e, s, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , l = Cf(e);
                pu(e, l, a);
                break;
            default:
                throw Error(A(161))
            }
        } catch (u) {
            Le(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function dx(e, t, n) {
    z = e,
    Mp(e)
}
function Mp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var o = z
          , s = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || Js;
            if (!a) {
                var l = o.alternate
                  , u = l !== null && l.memoizedState !== null || tt;
                l = Js;
                var d = tt;
                if (Js = a,
                (tt = u) && !d)
                    for (z = o; z !== null; )
                        a = z,
                        u = a.child,
                        a.tag === 22 && a.memoizedState !== null ? Pf(o) : u !== null ? (u.return = a,
                        z = u) : Pf(o);
                for (; s !== null; )
                    z = s,
                    Mp(s),
                    s = s.sibling;
                z = o,
                Js = l,
                tt = d
            }
            Df(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            z = s) : Df(e)
    }
}
function Df(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        tt || ci(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !tt)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : zt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && mf(t, s, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            mf(t, a, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var h = d.memoizedState;
                                if (h !== null) {
                                    var m = h.dehydrated;
                                    m !== null && ts(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                tt || t.flags & 512 && hu(t)
            } catch (v) {
                Le(t, t.return, v)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function _f(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function Pf(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ci(4, t)
                } catch (u) {
                    Le(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        Le(t, o, u)
                    }
                }
                var s = t.return;
                try {
                    hu(t)
                } catch (u) {
                    Le(t, s, u)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    hu(t)
                } catch (u) {
                    Le(t, a, u)
                }
            }
        } catch (u) {
            Le(t, t.return, u)
        }
        if (t === e) {
            z = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            z = l;
            break
        }
        z = t.return
    }
}
var fx = Math.ceil
  , Ua = wn.ReactCurrentDispatcher
  , Ic = wn.ReactCurrentOwner
  , Rt = wn.ReactCurrentBatchConfig
  , ie = 0
  , Ve = null
  , Be = null
  , Ke = 0
  , jt = 0
  , Qr = Qn(0)
  , We = 0
  , fs = null
  , wr = 0
  , di = 0
  , $c = 0
  , qo = null
  , ht = null
  , Bc = 0
  , co = 1 / 0
  , cn = null
  , Wa = !1
  , yu = null
  , Bn = null
  , Xs = !1
  , Ln = null
  , za = 0
  , Qo = 0
  , vu = null
  , ha = -1
  , pa = 0;
function lt() {
    return ie & 6 ? Re() : ha !== -1 ? ha : ha = Re()
}
function Un(e) {
    return e.mode & 1 ? ie & 2 && Ke !== 0 ? Ke & -Ke : Gv.transition !== null ? (pa === 0 && (pa = vh()),
    pa) : (e = de,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Sh(e.type)),
    e) : 1
}
function qt(e, t, n, r) {
    if (50 < Qo)
        throw Qo = 0,
        vu = null,
        Error(A(185));
    bs(e, n, r),
    (!(ie & 2) || e !== Ve) && (e === Ve && (!(ie & 2) && (di |= n),
    We === 4 && Pn(e, Ke)),
    vt(e, r),
    n === 1 && ie === 0 && !(t.mode & 1) && (co = Re() + 500,
    ii && Gn()))
}
function vt(e, t) {
    var n = e.callbackNode;
    Gy(e, t);
    var r = Ea(e, e === Ve ? Ke : 0);
    if (r === 0)
        n !== null && $d(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && $d(n),
        t === 1)
            e.tag === 0 ? Qv(Of.bind(null, e)) : Hh(Of.bind(null, e)),
            Hv(function() {
                !(ie & 6) && Gn()
            }),
            n = null;
        else {
            switch (xh(r)) {
            case 1:
                n = fc;
                break;
            case 4:
                n = gh;
                break;
            case 16:
                n = Sa;
                break;
            case 536870912:
                n = yh;
                break;
            default:
                n = Sa
            }
            n = Wp(n, Rp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Rp(e, t) {
    if (ha = -1,
    pa = 0,
    ie & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (no() && e.callbackNode !== n)
        return null;
    var r = Ea(e, e === Ve ? Ke : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ha(e, r);
    else {
        t = r;
        var o = ie;
        ie |= 2;
        var s = Fp();
        (Ve !== e || Ke !== t) && (cn = null,
        co = Re() + 500,
        mr(e, t));
        do
            try {
                px();
                break
            } catch (l) {
                Ap(e, l)
            }
        while (!0);
        Sc(),
        Ua.current = s,
        ie = o,
        Be !== null ? t = 0 : (Ve = null,
        Ke = 0,
        t = We)
    }
    if (t !== 0) {
        if (t === 2 && (o = Vl(e),
        o !== 0 && (r = o,
        t = xu(e, o))),
        t === 1)
            throw n = fs,
            mr(e, 0),
            Pn(e, r),
            vt(e, Re()),
            n;
        if (t === 6)
            Pn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !mx(o) && (t = Ha(e, r),
            t === 2 && (s = Vl(e),
            s !== 0 && (r = s,
            t = xu(e, s))),
            t === 1))
                throw n = fs,
                mr(e, 0),
                Pn(e, r),
                vt(e, Re()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                sr(e, ht, cn);
                break;
            case 3:
                if (Pn(e, r),
                (r & 130023424) === r && (t = Bc + 500 - Re(),
                10 < t)) {
                    if (Ea(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        lt(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Zl(sr.bind(null, e, ht, cn), t);
                    break
                }
                sr(e, ht, cn);
                break;
            case 4:
                if (Pn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var a = 31 - Yt(r);
                    s = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~s
                }
                if (r = o,
                r = Re() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fx(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Zl(sr.bind(null, e, ht, cn), r);
                    break
                }
                sr(e, ht, cn);
                break;
            case 5:
                sr(e, ht, cn);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return vt(e, Re()),
    e.callbackNode === n ? Rp.bind(null, e) : null
}
function xu(e, t) {
    var n = qo;
    return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
    e = Ha(e, t),
    e !== 2 && (t = ht,
    ht = n,
    t !== null && wu(t)),
    e
}
function wu(e) {
    ht === null ? ht = e : ht.push.apply(ht, e)
}
function mx(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Qt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Pn(e, t) {
    for (t &= ~$c,
    t &= ~di,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Yt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Of(e) {
    if (ie & 6)
        throw Error(A(327));
    no();
    var t = Ea(e, 0);
    if (!(t & 1))
        return vt(e, Re()),
        null;
    var n = Ha(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Vl(e);
        r !== 0 && (t = r,
        n = xu(e, r))
    }
    if (n === 1)
        throw n = fs,
        mr(e, 0),
        Pn(e, t),
        vt(e, Re()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    sr(e, ht, cn),
    vt(e, Re()),
    null
}
function Uc(e, t) {
    var n = ie;
    ie |= 1;
    try {
        return e(t)
    } finally {
        ie = n,
        ie === 0 && (co = Re() + 500,
        ii && Gn())
    }
}
function br(e) {
    Ln !== null && Ln.tag === 0 && !(ie & 6) && no();
    var t = ie;
    ie |= 1;
    var n = Rt.transition
      , r = de;
    try {
        if (Rt.transition = null,
        de = 1,
        e)
            return e()
    } finally {
        de = r,
        Rt.transition = n,
        ie = t,
        !(ie & 6) && Gn()
    }
}
function Wc() {
    jt = Qr.current,
    xe(Qr)
}
function mr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    zv(n)),
    Be !== null)
        for (n = Be.return; n !== null; ) {
            var r = n;
            switch (jc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Pa();
                break;
            case 3:
                lo(),
                xe(gt),
                xe(ot),
                Pc();
                break;
            case 5:
                _c(r);
                break;
            case 4:
                lo();
                break;
            case 13:
                xe(Te);
                break;
            case 19:
                xe(Te);
                break;
            case 10:
                Ec(r.type._context);
                break;
            case 22:
            case 23:
                Wc()
            }
            n = n.return
        }
    if (Ve = e,
    Be = e = Wn(e.current, null),
    Ke = jt = t,
    We = 0,
    fs = null,
    $c = di = wr = 0,
    ht = qo = null,
    ur !== null) {
        for (t = 0; t < ur.length; t++)
            if (n = ur[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var a = s.next;
                    s.next = o,
                    r.next = a
                }
                n.pending = r
            }
        ur = null
    }
    return e
}
function Ap(e, t) {
    do {
        var n = Be;
        try {
            if (Sc(),
            da.current = Ba,
            $a) {
                for (var r = De.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                $a = !1
            }
            if (xr = 0,
            He = Ue = De = null,
            Vo = !1,
            us = 0,
            Ic.current = null,
            n === null || n.return === null) {
                We = 1,
                fs = t,
                Be = null;
                break
            }
            e: {
                var s = e
                  , a = n.return
                  , l = n
                  , u = t;
                if (t = Ke,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var d = u
                      , h = l
                      , m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var v = h.alternate;
                        v ? (h.updateQueue = v.updateQueue,
                        h.memoizedState = v.memoizedState,
                        h.lanes = v.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var k = xf(a);
                    if (k !== null) {
                        k.flags &= -257,
                        wf(k, a, l, s, t),
                        k.mode & 1 && vf(s, d, t),
                        t = k,
                        u = d;
                        var x = t.updateQueue;
                        if (x === null) {
                            var N = new Set;
                            N.add(u),
                            t.updateQueue = N
                        } else
                            x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            vf(s, d, t),
                            zc();
                            break e
                        }
                        u = Error(A(426))
                    }
                } else if (be && l.mode & 1) {
                    var S = xf(a);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        wf(S, a, l, s, t),
                        Nc(uo(u, l));
                        break e
                    }
                }
                s = u = uo(u, l),
                We !== 4 && (We = 2),
                qo === null ? qo = [s] : qo.push(s),
                s = a;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var b = xp(s, u, t);
                        ff(s, b);
                        break e;
                    case 1:
                        l = u;
                        var y = s.type
                          , g = s.stateNode;
                        if (!(s.flags & 128) && (typeof y.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Bn === null || !Bn.has(g)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var E = wp(s, l, t);
                            ff(s, E);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            $p(n)
        } catch (T) {
            t = T,
            Be === n && n !== null && (Be = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Fp() {
    var e = Ua.current;
    return Ua.current = Ba,
    e === null ? Ba : e
}
function zc() {
    (We === 0 || We === 3 || We === 2) && (We = 4),
    Ve === null || !(wr & 268435455) && !(di & 268435455) || Pn(Ve, Ke)
}
function Ha(e, t) {
    var n = ie;
    ie |= 2;
    var r = Fp();
    (Ve !== e || Ke !== t) && (cn = null,
    mr(e, t));
    do
        try {
            hx();
            break
        } catch (o) {
            Ap(e, o)
        }
    while (!0);
    if (Sc(),
    ie = n,
    Ua.current = r,
    Be !== null)
        throw Error(A(261));
    return Ve = null,
    Ke = 0,
    We
}
function hx() {
    for (; Be !== null; )
        Ip(Be)
}
function px() {
    for (; Be !== null && !By(); )
        Ip(Be)
}
function Ip(e) {
    var t = Up(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps,
    t === null ? $p(e) : Be = t,
    Ic.current = null
}
function $p(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = lx(n, t),
            n !== null) {
                n.flags &= 32767,
                Be = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                We = 6,
                Be = null;
                return
            }
        } else if (n = ix(n, t, jt),
        n !== null) {
            Be = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Be = t;
            return
        }
        Be = t = e
    } while (t !== null);
    We === 0 && (We = 5)
}
function sr(e, t, n) {
    var r = de
      , o = Rt.transition;
    try {
        Rt.transition = null,
        de = 1,
        gx(e, t, n, r)
    } finally {
        Rt.transition = o,
        de = r
    }
    return null
}
function gx(e, t, n, r) {
    do
        no();
    while (Ln !== null);
    if (ie & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Ky(e, s),
    e === Ve && (Be = Ve = null,
    Ke = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xs || (Xs = !0,
    Wp(Sa, function() {
        return no(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Rt.transition,
        Rt.transition = null;
        var a = de;
        de = 1;
        var l = ie;
        ie |= 4,
        Ic.current = null,
        cx(e, n),
        Lp(n, e),
        Av(Jl),
        Ca = !!Kl,
        Jl = Kl = null,
        e.current = n,
        dx(n),
        Uy(),
        ie = l,
        de = a,
        Rt.transition = s
    } else
        e.current = n;
    if (Xs && (Xs = !1,
    Ln = e,
    za = o),
    s = e.pendingLanes,
    s === 0 && (Bn = null),
    Hy(n.stateNode),
    vt(e, Re()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Wa)
        throw Wa = !1,
        e = yu,
        yu = null,
        e;
    return za & 1 && e.tag !== 0 && no(),
    s = e.pendingLanes,
    s & 1 ? e === vu ? Qo++ : (Qo = 0,
    vu = e) : Qo = 0,
    Gn(),
    null
}
function no() {
    if (Ln !== null) {
        var e = xh(za)
          , t = Rt.transition
          , n = de;
        try {
            if (Rt.transition = null,
            de = 16 > e ? 16 : e,
            Ln === null)
                var r = !1;
            else {
                if (e = Ln,
                Ln = null,
                za = 0,
                ie & 6)
                    throw Error(A(331));
                var o = ie;
                for (ie |= 4,
                z = e.current; z !== null; ) {
                    var s = z
                      , a = s.child;
                    if (z.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var d = l[u];
                                for (z = d; z !== null; ) {
                                    var h = z;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yo(8, h, s)
                                    }
                                    var m = h.child;
                                    if (m !== null)
                                        m.return = h,
                                        z = m;
                                    else
                                        for (; z !== null; ) {
                                            h = z;
                                            var v = h.sibling
                                              , k = h.return;
                                            if (_p(h),
                                            h === d) {
                                                z = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = k,
                                                z = v;
                                                break
                                            }
                                            z = k
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var N = x.child;
                                if (N !== null) {
                                    x.child = null;
                                    do {
                                        var S = N.sibling;
                                        N.sibling = null,
                                        N = S
                                    } while (N !== null)
                                }
                            }
                            z = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && a !== null)
                        a.return = s,
                        z = a;
                    else
                        e: for (; z !== null; ) {
                            if (s = z,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Yo(9, s, s.return)
                                }
                            var b = s.sibling;
                            if (b !== null) {
                                b.return = s.return,
                                z = b;
                                break e
                            }
                            z = s.return
                        }
                }
                var y = e.current;
                for (z = y; z !== null; ) {
                    a = z;
                    var g = a.child;
                    if (a.subtreeFlags & 2064 && g !== null)
                        g.return = a,
                        z = g;
                    else
                        e: for (a = y; z !== null; ) {
                            if (l = z,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ci(9, l)
                                    }
                                } catch (T) {
                                    Le(l, l.return, T)
                                }
                            if (l === a) {
                                z = null;
                                break e
                            }
                            var E = l.sibling;
                            if (E !== null) {
                                E.return = l.return,
                                z = E;
                                break e
                            }
                            z = l.return
                        }
                }
                if (ie = o,
                Gn(),
                sn && typeof sn.onPostCommitFiberRoot == "function")
                    try {
                        sn.onPostCommitFiberRoot(ni, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            de = n,
            Rt.transition = t
        }
    }
    return !1
}
function Lf(e, t, n) {
    t = uo(n, t),
    t = xp(e, t, 1),
    e = $n(e, t, 1),
    t = lt(),
    e !== null && (bs(e, 1, t),
    vt(e, t))
}
function Le(e, t, n) {
    if (e.tag === 3)
        Lf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Lf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
                    e = uo(n, e),
                    e = wp(t, e, 1),
                    t = $n(t, e, 1),
                    e = lt(),
                    t !== null && (bs(t, 1, e),
                    vt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function yx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = lt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ve === e && (Ke & n) === n && (We === 4 || We === 3 && (Ke & 130023424) === Ke && 500 > Re() - Bc ? mr(e, 0) : $c |= n),
    vt(e, t)
}
function Bp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ws,
    Ws <<= 1,
    !(Ws & 130023424) && (Ws = 4194304)) : t = 1);
    var n = lt();
    e = vn(e, t),
    e !== null && (bs(e, t, n),
    vt(e, n))
}
function vx(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Bp(e, n)
}
function xx(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    r !== null && r.delete(t),
    Bp(e, n)
}
var Up;
Up = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || gt.current)
            pt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return pt = !1,
                ax(e, t, n);
            pt = !!(e.flags & 131072)
        }
    else
        pt = !1,
        be && t.flags & 1048576 && Vh(t, Ma, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ma(e, t),
        e = t.pendingProps;
        var o = so(t, ot.current);
        to(t, n),
        o = Lc(null, t, r, e, o, n);
        var s = Mc();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        yt(r) ? (s = !0,
        Oa(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Tc(t),
        o.updater = ui,
        t.stateNode = o,
        o._reactInternals = t,
        au(t, r, e, n),
        t = uu(null, t, r, !0, s, n)) : (t.tag = 0,
        be && s && bc(t),
        it(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ma(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = bx(r),
            e = zt(r, e),
            o) {
            case 0:
                t = lu(null, t, r, e, n);
                break e;
            case 1:
                t = Nf(null, t, r, e, n);
                break e;
            case 11:
                t = bf(null, t, r, e, n);
                break e;
            case 14:
                t = jf(null, t, r, zt(r.type, e), n);
                break e
            }
            throw Error(A(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        lu(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        Nf(e, t, r, o, n);
    case 3:
        e: {
            if (kp(t),
            e === null)
                throw Error(A(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Jh(e, t),
            Fa(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = uo(Error(A(423)), t),
                    t = kf(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = uo(Error(A(424)), t),
                    t = kf(e, t, r, n, o);
                    break e
                } else
                    for (Nt = In(t.stateNode.containerInfo.firstChild),
                    kt = t,
                    be = !0,
                    Vt = null,
                    n = Gh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ao(),
                r === o) {
                    t = xn(e, t, n);
                    break e
                }
                it(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Xh(t),
        e === null && ru(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        a = o.children,
        Xl(r, o) ? a = null : s !== null && Xl(r, s) && (t.flags |= 32),
        Np(e, t),
        it(e, t, a, n),
        t.child;
    case 6:
        return e === null && ru(t),
        null;
    case 13:
        return Sp(e, t, n);
    case 4:
        return Dc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = io(t, null, r, n) : it(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        bf(e, t, r, o, n);
    case 7:
        return it(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return it(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return it(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            a = o.value,
            ge(Ra, r._currentValue),
            r._currentValue = a,
            s !== null)
                if (Qt(s.value, a)) {
                    if (s.children === o.children && !gt.current) {
                        t = xn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            a = s.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (s.tag === 1) {
                                        u = pn(-1, n & -n),
                                        u.tag = 2;
                                        var d = s.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var h = d.pending;
                                            h === null ? u.next = u : (u.next = h.next,
                                            h.next = u),
                                            d.pending = u
                                        }
                                    }
                                    s.lanes |= n,
                                    u = s.alternate,
                                    u !== null && (u.lanes |= n),
                                    ou(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (s.tag === 10)
                            a = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (a = s.return,
                            a === null)
                                throw Error(A(341));
                            a.lanes |= n,
                            l = a.alternate,
                            l !== null && (l.lanes |= n),
                            ou(a, n, t),
                            a = s.sibling
                        } else
                            a = s.child;
                        if (a !== null)
                            a.return = s;
                        else
                            for (a = s; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (s = a.sibling,
                                s !== null) {
                                    s.return = a.return,
                                    a = s;
                                    break
                                }
                                a = a.return
                            }
                        s = a
                    }
            it(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        to(t, n),
        o = At(o),
        r = r(o),
        t.flags |= 1,
        it(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = zt(r, t.pendingProps),
        o = zt(r.type, o),
        jf(e, t, r, o, n);
    case 15:
        return bp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        ma(e, t),
        t.tag = 1,
        yt(r) ? (e = !0,
        Oa(t)) : e = !1,
        to(t, n),
        vp(t, r, o),
        au(t, r, o, n),
        uu(null, t, r, !0, e, n);
    case 19:
        return Ep(e, t, n);
    case 22:
        return jp(e, t, n)
    }
    throw Error(A(156, t.tag))
}
;
function Wp(e, t) {
    return ph(e, t)
}
function wx(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Mt(e, t, n, r) {
    return new wx(e,t,n,r)
}
function Hc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function bx(e) {
    if (typeof e == "function")
        return Hc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === uc)
            return 11;
        if (e === cc)
            return 14
    }
    return 2
}
function Wn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Mt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ga(e, t, n, r, o, s) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Hc(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case Ir:
            return hr(n.children, o, s, t);
        case lc:
            a = 8,
            o |= 8;
            break;
        case _l:
            return e = Mt(12, n, t, o | 2),
            e.elementType = _l,
            e.lanes = s,
            e;
        case Pl:
            return e = Mt(13, n, t, o),
            e.elementType = Pl,
            e.lanes = s,
            e;
        case Ol:
            return e = Mt(19, n, t, o),
            e.elementType = Ol,
            e.lanes = s,
            e;
        case Xm:
            return fi(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Km:
                    a = 10;
                    break e;
                case Jm:
                    a = 9;
                    break e;
                case uc:
                    a = 11;
                    break e;
                case cc:
                    a = 14;
                    break e;
                case Tn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = Mt(a, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function hr(e, t, n, r) {
    return e = Mt(7, e, r, t),
    e.lanes = n,
    e
}
function fi(e, t, n, r) {
    return e = Mt(22, e, r, t),
    e.elementType = Xm,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function cl(e, t, n) {
    return e = Mt(6, e, null, t),
    e.lanes = n,
    e
}
function dl(e, t, n) {
    return t = Mt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function jx(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Vi(0),
    this.expirationTimes = Vi(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Vi(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Vc(e, t, n, r, o, s, a, l, u) {
    return e = new jx(e,t,n,l,u),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Mt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Tc(s),
    e
}
function Nx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Fr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function zp(e) {
    if (!e)
        return Vn;
    e = e._reactInternals;
    e: {
        if (Sr(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (yt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (yt(n))
            return zh(e, n, t)
    }
    return t
}
function Hp(e, t, n, r, o, s, a, l, u) {
    return e = Vc(n, r, !0, e, o, s, a, l, u),
    e.context = zp(null),
    n = e.current,
    r = lt(),
    o = Un(n),
    s = pn(r, o),
    s.callback = t ?? null,
    $n(n, s, o),
    e.current.lanes = o,
    bs(e, o, r),
    vt(e, r),
    e
}
function mi(e, t, n, r) {
    var o = t.current
      , s = lt()
      , a = Un(o);
    return n = zp(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = pn(s, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = $n(o, t, a),
    e !== null && (qt(e, o, a, s),
    ca(e, o, a)),
    a
}
function Va(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Mf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Yc(e, t) {
    Mf(e, t),
    (e = e.alternate) && Mf(e, t)
}
function kx() {
    return null
}
var Vp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function qc(e) {
    this._internalRoot = e
}
hi.prototype.render = qc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    mi(e, t, null, null)
}
;
hi.prototype.unmount = qc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        br(function() {
            mi(null, e, null, null)
        }),
        t[yn] = null
    }
}
;
function hi(e) {
    this._internalRoot = e
}
hi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = jh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < _n.length && t !== 0 && t < _n[n].priority; n++)
            ;
        _n.splice(n, 0, e),
        n === 0 && kh(e)
    }
}
;
function Qc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function pi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Rf() {}
function Sx(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var d = Va(a);
                s.call(d)
            }
        }
        var a = Hp(t, r, e, 0, null, !1, !1, "", Rf);
        return e._reactRootContainer = a,
        e[yn] = a.current,
        os(e.nodeType === 8 ? e.parentNode : e),
        br(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var d = Va(u);
            l.call(d)
        }
    }
    var u = Vc(e, 0, !1, null, null, !1, !1, "", Rf);
    return e._reactRootContainer = u,
    e[yn] = u.current,
    os(e.nodeType === 8 ? e.parentNode : e),
    br(function() {
        mi(t, u, n, r)
    }),
    u
}
function gi(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var a = s;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var u = Va(a);
                l.call(u)
            }
        }
        mi(t, a, e, o)
    } else
        a = Sx(n, t, e, o, r);
    return Va(a)
}
wh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Fo(t.pendingLanes);
            n !== 0 && (mc(t, n | 1),
            vt(t, Re()),
            !(ie & 6) && (co = Re() + 500,
            Gn()))
        }
        break;
    case 13:
        br(function() {
            var r = vn(e, 1);
            if (r !== null) {
                var o = lt();
                qt(r, e, 1, o)
            }
        }),
        Yc(e, 1)
    }
}
;
hc = function(e) {
    if (e.tag === 13) {
        var t = vn(e, 134217728);
        if (t !== null) {
            var n = lt();
            qt(t, e, 134217728, n)
        }
        Yc(e, 134217728)
    }
}
;
bh = function(e) {
    if (e.tag === 13) {
        var t = Un(e)
          , n = vn(e, t);
        if (n !== null) {
            var r = lt();
            qt(n, e, t, r)
        }
        Yc(e, t)
    }
}
;
jh = function() {
    return de
}
;
Nh = function(e, t) {
    var n = de;
    try {
        return de = e,
        t()
    } finally {
        de = n
    }
}
;
Wl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Rl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ai(r);
                    if (!o)
                        throw Error(A(90));
                    eh(r),
                    Rl(r, o)
                }
            }
        }
        break;
    case "textarea":
        nh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Jr(e, !!n.multiple, t, !1)
    }
}
;
uh = Uc;
ch = br;
var Ex = {
    usingClientEntryPoint: !1,
    Events: [Ns, Wr, ai, ih, lh, Uc]
}
  , _o = {
    findFiberByHostInstance: lr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Cx = {
    bundleType: _o.bundleType,
    version: _o.version,
    rendererPackageName: _o.rendererPackageName,
    rendererConfig: _o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = mh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: _o.findFiberByHostInstance || kx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zs.isDisabled && Zs.supportsFiber)
        try {
            ni = Zs.inject(Cx),
            sn = Zs
        } catch {}
}
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ex;
Et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qc(t))
        throw Error(A(200));
    return Nx(e, t, null, n)
}
;
Et.createRoot = function(e, t) {
    if (!Qc(e))
        throw Error(A(299));
    var n = !1
      , r = ""
      , o = Vp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Vc(e, 1, !1, null, null, n, !1, r, o),
    e[yn] = t.current,
    os(e.nodeType === 8 ? e.parentNode : e),
    new qc(t)
}
;
Et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = mh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Et.flushSync = function(e) {
    return br(e)
}
;
Et.hydrate = function(e, t, n) {
    if (!pi(t))
        throw Error(A(200));
    return gi(null, e, t, !0, n)
}
;
Et.hydrateRoot = function(e, t, n) {
    if (!Qc(e))
        throw Error(A(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , a = Vp;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = Hp(t, null, e, 1, n ?? null, o, !1, s, a),
    e[yn] = t.current,
    os(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new hi(t)
}
;
Et.render = function(e, t, n) {
    if (!pi(t))
        throw Error(A(200));
    return gi(null, e, t, !1, n)
}
;
Et.unmountComponentAtNode = function(e) {
    if (!pi(e))
        throw Error(A(40));
    return e._reactRootContainer ? (br(function() {
        gi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[yn] = null
        })
    }),
    !0) : !1
}
;
Et.unstable_batchedUpdates = Uc;
Et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!pi(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return gi(e, t, n, !1, r)
}
;
Et.version = "18.3.1-next-f1338f8080-20240426";
function Yp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)
        } catch (e) {
            console.error(e)
        }
}
Yp(),
Ym.exports = Et;
var qp = Ym.exports;
const Tx = ei(qp);
var Af = qp;
Tl.createRoot = Af.createRoot,
Tl.hydrateRoot = Af.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ms() {
    return ms = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ms.apply(this, arguments)
}
var Mn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Mn || (Mn = {}));
const Ff = "popstate";
function Dx(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: a, hash: l} = r.location;
        return bu("", {
            pathname: s,
            search: a,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Ya(o)
    }
    return Px(t, n, null, e)
}
function Ae(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Qp(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function _x() {
    return Math.random().toString(36).substr(2, 8)
}
function If(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function bu(e, t, n, r) {
    return n === void 0 && (n = null),
    ms({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? po(t) : t, {
        state: n,
        key: t && t.key || r || _x()
    })
}
function Ya(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function po(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Px(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , a = o.history
      , l = Mn.Pop
      , u = null
      , d = h();
    d == null && (d = 0,
    a.replaceState(ms({}, a.state, {
        idx: d
    }), ""));
    function h() {
        return (a.state || {
            idx: null
        }).idx
    }
    function m() {
        l = Mn.Pop;
        let S = h()
          , b = S == null ? null : S - d;
        d = S,
        u && u({
            action: l,
            location: N.location,
            delta: b
        })
    }
    function v(S, b) {
        l = Mn.Push;
        let y = bu(N.location, S, b);
        d = h() + 1;
        let g = If(y, d)
          , E = N.createHref(y);
        try {
            a.pushState(g, "", E)
        } catch (T) {
            if (T instanceof DOMException && T.name === "DataCloneError")
                throw T;
            o.location.assign(E)
        }
        s && u && u({
            action: l,
            location: N.location,
            delta: 1
        })
    }
    function k(S, b) {
        l = Mn.Replace;
        let y = bu(N.location, S, b);
        d = h();
        let g = If(y, d)
          , E = N.createHref(y);
        a.replaceState(g, "", E),
        s && u && u({
            action: l,
            location: N.location,
            delta: 0
        })
    }
    function x(S) {
        let b = o.location.origin !== "null" ? o.location.origin : o.location.href
          , y = typeof S == "string" ? S : Ya(S);
        return y = y.replace(/ $/, "%20"),
        Ae(b, "No window.location.(origin|href) available to create URL for href: " + y),
        new URL(y,b)
    }
    let N = {
        get action() {
            return l
        },
        get location() {
            return e(o, a)
        },
        listen(S) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Ff, m),
            u = S,
            () => {
                o.removeEventListener(Ff, m),
                u = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: x,
        encodeLocation(S) {
            let b = x(S);
            return {
                pathname: b.pathname,
                search: b.search,
                hash: b.hash
            }
        },
        push: v,
        replace: k,
        go(S) {
            return a.go(S)
        }
    };
    return N
}
var $f;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)($f || ($f = {}));
function Ox(e, t, n) {
    return n === void 0 && (n = "/"),
    Lx(e, t, n)
}
function Lx(e, t, n, r) {
    let o = typeof t == "string" ? po(t) : t
      , s = Gc(o.pathname || "/", n);
    if (s == null)
        return null;
    let a = Gp(e);
    Mx(a);
    let l = null;
    for (let u = 0; l == null && u < a.length; ++u) {
        let d = Yx(s);
        l = zx(a[u], d)
    }
    return l
}
function Gp(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, a, l) => {
        let u = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s
        };
        u.relativePath.startsWith("/") && (Ae(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        u.relativePath = u.relativePath.slice(r.length));
        let d = zn([r, u.relativePath])
          , h = n.concat(u);
        s.children && s.children.length > 0 && (Ae(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')),
        Gp(s.children, t, h, d)),
        !(s.path == null && !s.index) && t.push({
            path: d,
            score: Ux(d, s.index),
            routesMeta: h
        })
    }
    ;
    return e.forEach( (s, a) => {
        var l;
        if (s.path === "" || !((l = s.path) != null && l.includes("?")))
            o(s, a);
        else
            for (let u of Kp(s.path))
                o(s, a, u)
    }
    ),
    t
}
function Kp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let a = Kp(r.join("/"))
      , l = [];
    return l.push(...a.map(u => u === "" ? s : [s, u].join("/"))),
    o && l.push(...a),
    l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function Mx(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Wx(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Rx = /^:[\w-]+$/
  , Ax = 3
  , Fx = 2
  , Ix = 1
  , $x = 10
  , Bx = -2
  , Bf = e => e === "*";
function Ux(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Bf) && (r += Bx),
    t && (r += Fx),
    n.filter(o => !Bf(o)).reduce( (o, s) => o + (Rx.test(s) ? Ax : s === "" ? Ix : $x), r)
}
function Wx(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function zx(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , a = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l]
          , d = l === r.length - 1
          , h = s === "/" ? t : t.slice(s.length) || "/"
          , m = Hx({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: d
        }, h)
          , v = u.route;
        if (!m)
            return null;
        Object.assign(o, m.params),
        a.push({
            params: o,
            pathname: zn([s, m.pathname]),
            pathnameBase: Kx(zn([s, m.pathnameBase])),
            route: v
        }),
        m.pathnameBase !== "/" && (s = zn([s, m.pathnameBase]))
    }
    return a
}
function Hx(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Vx(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , a = s.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (d, h, m) => {
            let {paramName: v, isOptional: k} = h;
            if (v === "*") {
                let N = l[m] || "";
                a = s.slice(0, s.length - N.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[m];
            return k && !x ? d[v] = void 0 : d[v] = (x || "").replace(/%2F/g, "/"),
            d
        }
        , {}),
        pathname: s,
        pathnameBase: a,
        pattern: e
    }
}
function Vx(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qp(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, u) => (r.push({
        paramName: l,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function Yx(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Qp(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Gc(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function qx(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? po(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Qx(n, t) : t,
        search: Jx(r),
        hash: Xx(o)
    }
}
function Qx(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function fl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Gx(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Kc(e, t) {
    let n = Gx(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Jc(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = po(e) : (o = ms({}, e),
    Ae(!o.pathname || !o.pathname.includes("?"), fl("?", "pathname", "search", o)),
    Ae(!o.pathname || !o.pathname.includes("#"), fl("#", "pathname", "hash", o)),
    Ae(!o.search || !o.search.includes("#"), fl("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", a = s ? "/" : o.pathname, l;
    if (a == null)
        l = n;
    else {
        let m = t.length - 1;
        if (!r && a.startsWith("..")) {
            let v = a.split("/");
            for (; v[0] === ".."; )
                v.shift(),
                m -= 1;
            o.pathname = v.join("/")
        }
        l = m >= 0 ? t[m] : "/"
    }
    let u = qx(o, l)
      , d = a && a !== "/" && a.endsWith("/")
      , h = (s || a === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (d || h) && (u.pathname += "/"),
    u
}
const zn = e => e.join("/").replace(/\/\/+/g, "/")
  , Kx = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Jx = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Xx = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Zx(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Jp = ["post", "put", "patch", "delete"];
new Set(Jp);
const e1 = ["get", ...Jp];
new Set(e1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function hs() {
    return hs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    hs.apply(this, arguments)
}
const Xc = w.createContext(null)
  , t1 = w.createContext(null)
  , Kn = w.createContext(null)
  , yi = w.createContext(null)
  , bn = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Xp = w.createContext(null);
function n1(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    go() || Ae(!1);
    let {basename: r, navigator: o} = w.useContext(Kn)
      , {hash: s, pathname: a, search: l} = t0(e, {
        relative: n
    })
      , u = a;
    return r !== "/" && (u = a === "/" ? r : zn([r, a])),
    o.createHref({
        pathname: u,
        search: l,
        hash: s
    })
}
function go() {
    return w.useContext(yi) != null
}
function Er() {
    return go() || Ae(!1),
    w.useContext(yi).location
}
function Zp(e) {
    w.useContext(Kn).static || w.useLayoutEffect(e)
}
function Ss() {
    let {isDataRoute: e} = w.useContext(bn);
    return e ? p1() : r1()
}
function r1() {
    go() || Ae(!1);
    let e = w.useContext(Xc)
      , {basename: t, future: n, navigator: r} = w.useContext(Kn)
      , {matches: o} = w.useContext(bn)
      , {pathname: s} = Er()
      , a = JSON.stringify(Kc(o, n.v7_relativeSplatPath))
      , l = w.useRef(!1);
    return Zp( () => {
        l.current = !0
    }
    ),
    w.useCallback(function(d, h) {
        if (h === void 0 && (h = {}),
        !l.current)
            return;
        if (typeof d == "number") {
            r.go(d);
            return
        }
        let m = Jc(d, JSON.parse(a), s, h.relative === "path");
        e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : zn([t, m.pathname])),
        (h.replace ? r.replace : r.push)(m, h.state, h)
    }, [t, r, a, s, e])
}
function e0() {
    let {matches: e} = w.useContext(bn)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function t0(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = w.useContext(Kn)
      , {matches: o} = w.useContext(bn)
      , {pathname: s} = Er()
      , a = JSON.stringify(Kc(o, r.v7_relativeSplatPath));
    return w.useMemo( () => Jc(e, JSON.parse(a), s, n === "path"), [e, a, s, n])
}
function o1(e, t) {
    return s1(e, t)
}
function s1(e, t, n, r) {
    go() || Ae(!1);
    let {navigator: o} = w.useContext(Kn)
      , {matches: s} = w.useContext(bn)
      , a = s[s.length - 1]
      , l = a ? a.params : {};
    a && a.pathname;
    let u = a ? a.pathnameBase : "/";
    a && a.route;
    let d = Er(), h;
    if (t) {
        var m;
        let S = typeof t == "string" ? po(t) : t;
        u === "/" || (m = S.pathname) != null && m.startsWith(u) || Ae(!1),
        h = S
    } else
        h = d;
    let v = h.pathname || "/"
      , k = v;
    if (u !== "/") {
        let S = u.replace(/^\//, "").split("/");
        k = "/" + v.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let x = Ox(e, {
        pathname: k
    })
      , N = c1(x && x.map(S => Object.assign({}, S, {
        params: Object.assign({}, l, S.params),
        pathname: zn([u, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? u : zn([u, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), s, n, r);
    return t && N ? w.createElement(yi.Provider, {
        value: {
            location: hs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, h),
            navigationType: Mn.Pop
        }
    }, N) : N
}
function a1() {
    let e = h1()
      , t = Zx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: o
    }, n) : null, null)
}
const i1 = w.createElement(a1, null);
class l1 extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(bn.Provider, {
            value: this.props.routeContext
        }, w.createElement(Xp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function u1(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = w.useContext(Xc);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(bn.Provider, {
        value: t
    }, r)
}
function c1(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let a = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let h = a.findIndex(m => m.route.id && (l == null ? void 0 : l[m.route.id]) !== void 0);
        h >= 0 || Ae(!1),
        a = a.slice(0, Math.min(a.length, h + 1))
    }
    let u = !1
      , d = -1;
    if (n && r && r.v7_partialHydration)
        for (let h = 0; h < a.length; h++) {
            let m = a[h];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = h),
            m.route.id) {
                let {loaderData: v, errors: k} = n
                  , x = m.route.loader && v[m.route.id] === void 0 && (!k || k[m.route.id] === void 0);
                if (m.route.lazy || x) {
                    u = !0,
                    d >= 0 ? a = a.slice(0, d + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (h, m, v) => {
        let k, x = !1, N = null, S = null;
        n && (k = l && m.route.id ? l[m.route.id] : void 0,
        N = m.route.errorElement || i1,
        u && (d < 0 && v === 0 ? (g1("route-fallback"),
        x = !0,
        S = null) : d === v && (x = !0,
        S = m.route.hydrateFallbackElement || null)));
        let b = t.concat(a.slice(0, v + 1))
          , y = () => {
            let g;
            return k ? g = N : x ? g = S : m.route.Component ? g = w.createElement(m.route.Component, null) : m.route.element ? g = m.route.element : g = h,
            w.createElement(u1, {
                match: m,
                routeContext: {
                    outlet: h,
                    matches: b,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (m.route.ErrorBoundary || m.route.errorElement || v === 0) ? w.createElement(l1, {
            location: n.location,
            revalidation: n.revalidation,
            component: N,
            error: k,
            children: y(),
            routeContext: {
                outlet: null,
                matches: b,
                isDataRoute: !0
            }
        }) : y()
    }
    , null)
}
var n0 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(n0 || {})
  , r0 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(r0 || {});
function d1(e) {
    let t = w.useContext(Xc);
    return t || Ae(!1),
    t
}
function f1(e) {
    let t = w.useContext(t1);
    return t || Ae(!1),
    t
}
function m1(e) {
    let t = w.useContext(bn);
    return t || Ae(!1),
    t
}
function o0(e) {
    let t = m1()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ae(!1),
    n.route.id
}
function h1() {
    var e;
    let t = w.useContext(Xp)
      , n = f1()
      , r = o0();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function p1() {
    let {router: e} = d1(n0.UseNavigateStable)
      , t = o0(r0.UseNavigateStable)
      , n = w.useRef(!1);
    return Zp( () => {
        n.current = !0
    }
    ),
    w.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, hs({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
const Uf = {};
function g1(e, t, n) {
    Uf[e] || (Uf[e] = !0)
}
function y1(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Zc(e) {
    let {to: t, replace: n, state: r, relative: o} = e;
    go() || Ae(!1);
    let {future: s, static: a} = w.useContext(Kn)
      , {matches: l} = w.useContext(bn)
      , {pathname: u} = Er()
      , d = Ss()
      , h = Jc(t, Kc(l, s.v7_relativeSplatPath), u, o === "path")
      , m = JSON.stringify(h);
    return w.useEffect( () => d(JSON.parse(m), {
        replace: n,
        state: r,
        relative: o
    }), [d, m, o, n, r]),
    null
}
function Wt(e) {
    Ae(!1)
}
function v1(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Mn.Pop, navigator: s, static: a=!1, future: l} = e;
    go() && Ae(!1);
    let u = t.replace(/^\/*/, "/")
      , d = w.useMemo( () => ({
        basename: u,
        navigator: s,
        static: a,
        future: hs({
            v7_relativeSplatPath: !1
        }, l)
    }), [u, l, s, a]);
    typeof r == "string" && (r = po(r));
    let {pathname: h="/", search: m="", hash: v="", state: k=null, key: x="default"} = r
      , N = w.useMemo( () => {
        let S = Gc(h, u);
        return S == null ? null : {
            location: {
                pathname: S,
                search: m,
                hash: v,
                state: k,
                key: x
            },
            navigationType: o
        }
    }
    , [u, h, m, v, k, x, o]);
    return N == null ? null : w.createElement(Kn.Provider, {
        value: d
    }, w.createElement(yi.Provider, {
        children: n,
        value: N
    }))
}
function x1(e) {
    let {children: t, location: n} = e;
    return o1(ju(t), n)
}
new Promise( () => {}
);
function ju(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, ju(r.props.children, s));
            return
        }
        r.type !== Wt && Ae(!1),
        !r.props.index || !r.props.children || Ae(!1);
        let a = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = ju(r.props.children, s)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nu() {
    return Nu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Nu.apply(this, arguments)
}
function w1(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, s;
    for (s = 0; s < r.length; s++)
        o = r[s],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function b1(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function j1(e, t) {
    return e.button === 0 && (!t || t === "_self") && !b1(e)
}
const N1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , k1 = "6";
try {
    window.__reactRouterVersion = k1
} catch {}
const S1 = "startTransition"
  , Wf = yy[S1];
function E1(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = w.useRef();
    s.current == null && (s.current = Dx({
        window: o,
        v5Compat: !0
    }));
    let a = s.current
      , [l,u] = w.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: d} = r || {}
      , h = w.useCallback(m => {
        d && Wf ? Wf( () => u(m)) : u(m)
    }
    , [u, d]);
    return w.useLayoutEffect( () => a.listen(h), [a, h]),
    w.useEffect( () => y1(r), [r]),
    w.createElement(v1, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: a,
        future: r
    })
}
const C1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , T1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , s0 = w.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: s, replace: a, state: l, target: u, to: d, preventScrollReset: h, viewTransition: m} = t, v = w1(t, N1), {basename: k} = w.useContext(Kn), x, N = !1;
    if (typeof d == "string" && T1.test(d) && (x = d,
    C1))
        try {
            let g = new URL(window.location.href)
              , E = d.startsWith("//") ? new URL(g.protocol + d) : new URL(d)
              , T = Gc(E.pathname, k);
            E.origin === g.origin && T != null ? d = T + E.search + E.hash : N = !0
        } catch {}
    let S = n1(d, {
        relative: o
    })
      , b = D1(d, {
        replace: a,
        state: l,
        target: u,
        preventScrollReset: h,
        relative: o,
        viewTransition: m
    });
    function y(g) {
        r && r(g),
        g.defaultPrevented || b(g)
    }
    return w.createElement("a", Nu({}, v, {
        href: x || S,
        onClick: N || s ? r : y,
        ref: n,
        target: u
    }))
});
var zf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(zf || (zf = {}));
var Hf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Hf || (Hf = {}));
function D1(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: s, relative: a, viewTransition: l} = t === void 0 ? {} : t
      , u = Ss()
      , d = Er()
      , h = t0(e, {
        relative: a
    });
    return w.useCallback(m => {
        if (j1(m, n)) {
            m.preventDefault();
            let v = r !== void 0 ? r : Ya(d) === Ya(h);
            u(e, {
                replace: v,
                state: o,
                preventScrollReset: s,
                relative: a,
                viewTransition: l
            })
        }
    }
    , [d, u, h, r, o, n, e, s, a, l])
}
function _1(e) {
    if (typeof document > "u")
        return;
    let t = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    t.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
const P1 = e => {
    switch (e) {
    case "success":
        return M1;
    case "info":
        return A1;
    case "warning":
        return R1;
    case "error":
        return F1;
    default:
        return null
    }
}
  , O1 = Array(12).fill(0)
  , L1 = ({visible: e, className: t}) => R.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, O1.map( (n, r) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , M1 = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , R1 = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , A1 = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , F1 = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , I1 = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , $1 = () => {
    const [e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        const n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
;
let ku = 1;
class B1 {
    constructor() {
        this.subscribe = t => (this.subscribers.push(t),
        () => {
            const n = this.subscribers.indexOf(t);
            this.subscribers.splice(n, 1)
        }
        ),
        this.publish = t => {
            this.subscribers.forEach(n => n(t))
        }
        ,
        this.addToast = t => {
            this.publish(t),
            this.toasts = [...this.toasts, t]
        }
        ,
        this.create = t => {
            var n;
            const {message: r, ...o} = t
              , s = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : ku++
              , a = this.toasts.find(u => u.id === s)
              , l = t.dismissible === void 0 ? !0 : t.dismissible;
            return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            a ? this.toasts = this.toasts.map(u => u.id === s ? (this.publish({
                ...u,
                ...t,
                id: s,
                title: r
            }),
            {
                ...u,
                ...t,
                id: s,
                dismissible: l,
                title: r
            }) : u) : this.addToast({
                title: r,
                ...o,
                dismissible: l,
                id: s
            }),
            s
        }
        ,
        this.dismiss = t => (t ? (this.dismissedToasts.add(t),
        requestAnimationFrame( () => this.subscribers.forEach(n => n({
            id: t,
            dismiss: !0
        })))) : this.toasts.forEach(n => {
            this.subscribers.forEach(r => r({
                id: n.id,
                dismiss: !0
            }))
        }
        ),
        t),
        this.message = (t, n) => this.create({
            ...n,
            message: t
        }),
        this.error = (t, n) => this.create({
            ...n,
            message: t,
            type: "error"
        }),
        this.success = (t, n) => this.create({
            ...n,
            type: "success",
            message: t
        }),
        this.info = (t, n) => this.create({
            ...n,
            type: "info",
            message: t
        }),
        this.warning = (t, n) => this.create({
            ...n,
            type: "warning",
            message: t
        }),
        this.loading = (t, n) => this.create({
            ...n,
            type: "loading",
            message: t
        }),
        this.promise = (t, n) => {
            if (!n)
                return;
            let r;
            n.loading !== void 0 && (r = this.create({
                ...n,
                promise: t,
                type: "loading",
                message: n.loading,
                description: typeof n.description != "function" ? n.description : void 0
            }));
            const o = Promise.resolve(t instanceof Function ? t() : t);
            let s = r !== void 0, a;
            const l = o.then(async d => {
                if (a = ["resolve", d],
                R.isValidElement(d))
                    s = !1,
                    this.create({
                        id: r,
                        type: "default",
                        message: d
                    });
                else if (W1(d) && !d.ok) {
                    s = !1;
                    const m = typeof n.error == "function" ? await n.error(`HTTP error! status: ${d.status}`) : n.error
                      , v = typeof n.description == "function" ? await n.description(`HTTP error! status: ${d.status}`) : n.description
                      , x = typeof m == "object" && !R.isValidElement(m) ? m : {
                        message: m
                    };
                    this.create({
                        id: r,
                        type: "error",
                        description: v,
                        ...x
                    })
                } else if (d instanceof Error) {
                    s = !1;
                    const m = typeof n.error == "function" ? await n.error(d) : n.error
                      , v = typeof n.description == "function" ? await n.description(d) : n.description
                      , x = typeof m == "object" && !R.isValidElement(m) ? m : {
                        message: m
                    };
                    this.create({
                        id: r,
                        type: "error",
                        description: v,
                        ...x
                    })
                } else if (n.success !== void 0) {
                    s = !1;
                    const m = typeof n.success == "function" ? await n.success(d) : n.success
                      , v = typeof n.description == "function" ? await n.description(d) : n.description
                      , x = typeof m == "object" && !R.isValidElement(m) ? m : {
                        message: m
                    };
                    this.create({
                        id: r,
                        type: "success",
                        description: v,
                        ...x
                    })
                }
            }
            ).catch(async d => {
                if (a = ["reject", d],
                n.error !== void 0) {
                    s = !1;
                    const h = typeof n.error == "function" ? await n.error(d) : n.error
                      , m = typeof n.description == "function" ? await n.description(d) : n.description
                      , k = typeof h == "object" && !R.isValidElement(h) ? h : {
                        message: h
                    };
                    this.create({
                        id: r,
                        type: "error",
                        description: m,
                        ...k
                    })
                }
            }
            ).finally( () => {
                s && (this.dismiss(r),
                r = void 0),
                n.finally == null || n.finally.call(n)
            }
            )
              , u = () => new Promise( (d, h) => l.then( () => a[0] === "reject" ? h(a[1]) : d(a[1])).catch(h));
            return typeof r != "string" && typeof r != "number" ? {
                unwrap: u
            } : Object.assign(r, {
                unwrap: u
            })
        }
        ,
        this.custom = (t, n) => {
            const r = (n == null ? void 0 : n.id) || ku++;
            return this.create({
                jsx: t(r),
                id: r,
                ...n
            }),
            r
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const mt = new B1
  , U1 = (e, t) => {
    const n = (t == null ? void 0 : t.id) || ku++;
    return mt.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , W1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , z1 = U1
  , H1 = () => mt.toasts
  , V1 = () => mt.getActiveToasts()
  , J = Object.assign(z1, {
    success: mt.success,
    info: mt.info,
    warning: mt.warning,
    error: mt.error,
    custom: mt.custom,
    message: mt.message,
    promise: mt.promise,
    dismiss: mt.dismiss,
    loading: mt.loading
}, {
    getHistory: H1,
    getToasts: V1
});
_1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function ea(e) {
    return e.label !== void 0
}
const Y1 = 3
  , q1 = "24px"
  , Q1 = "16px"
  , Vf = 4e3
  , G1 = 356
  , K1 = 14
  , J1 = 45
  , X1 = 200;
function Zt(...e) {
    return e.filter(Boolean).join(" ")
}
function Z1(e) {
    const [t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
const ew = e => {
    var t, n, r, o, s, a, l, u, d;
    const {invert: h, toast: m, unstyled: v, interacting: k, setHeights: x, visibleToasts: N, heights: S, index: b, toasts: y, expanded: g, removeToast: E, defaultRichColors: T, closeButton: O, style: P, cancelButtonStyle: M, actionButtonStyle: U, className: I="", descriptionClassName: ae="", duration: fe, position: Pe, gap: Ie, expandByDefault: ke, classNames: q, icons: Se, closeButtonAriaLabel: $="Close toast"} = e
      , [W,V] = R.useState(null)
      , [B,H] = R.useState(null)
      , [te,F] = R.useState(!1)
      , [K,Y] = R.useState(!1)
      , [ee,Ee] = R.useState(!1)
      , [ze,Tt] = R.useState(!1)
      , [tr,Kt] = R.useState(!1)
      , [Dt,ue] = R.useState(0)
      , [ln,Ye] = R.useState(0)
      , dt = R.useRef(m.duration || fe || Vf)
      , nr = R.useRef(null)
      , ft = R.useRef(null)
      , Dr = b === 0
      , Nn = b + 1 <= N
      , pe = m.type
      , bt = m.dismissible !== !1
      , bo = m.className || ""
      , _t = m.descriptionClassName || ""
      , kn = R.useMemo( () => S.findIndex(Q => Q.toastId === m.id) || 0, [S, m.id])
      , p = R.useMemo( () => {
        var Q;
        return (Q = m.closeButton) != null ? Q : O
    }
    , [m.closeButton, O])
      , c = R.useMemo( () => m.duration || fe || Vf, [m.duration, fe])
      , f = R.useRef(0)
      , j = R.useRef(0)
      , C = R.useRef(0)
      , D = R.useRef(null)
      , [L,X] = Pe.split("-")
      , me = R.useMemo( () => S.reduce( (Q, Ce, ne) => ne >= kn ? Q : Q + Ce.height, 0), [S, kn])
      , le = $1()
      , he = m.invert || h
      , se = pe === "loading";
    j.current = R.useMemo( () => kn * Ie + me, [kn, me]),
    R.useEffect( () => {
        dt.current = c
    }
    , [c]),
    R.useEffect( () => {
        F(!0)
    }
    , []),
    R.useEffect( () => {
        const Q = ft.current;
        if (Q) {
            const Ce = Q.getBoundingClientRect().height;
            return Ye(Ce),
            x(ne => [{
                toastId: m.id,
                height: Ce,
                position: m.position
            }, ...ne]),
            () => x(ne => ne.filter(we => we.toastId !== m.id))
        }
    }
    , [x, m.id]),
    R.useLayoutEffect( () => {
        if (!te)
            return;
        const Q = ft.current
          , Ce = Q.style.height;
        Q.style.height = "auto";
        const ne = Q.getBoundingClientRect().height;
        Q.style.height = Ce,
        Ye(ne),
        x(we => we.find(Me => Me.toastId === m.id) ? we.map(Me => Me.toastId === m.id ? {
            ...Me,
            height: ne
        } : Me) : [{
            toastId: m.id,
            height: ne,
            position: m.position
        }, ...we])
    }
    , [te, m.title, m.description, x, m.id, m.jsx, m.action, m.cancel]);
    const Jt = R.useCallback( () => {
        Y(!0),
        ue(j.current),
        x(Q => Q.filter(Ce => Ce.toastId !== m.id)),
        setTimeout( () => {
            E(m)
        }
        , X1)
    }
    , [m, E, x, j]);
    R.useEffect( () => {
        if (m.promise && pe === "loading" || m.duration === 1 / 0 || m.type === "loading")
            return;
        let Q;
        return g || k || le ? ( () => {
            if (C.current < f.current) {
                const we = new Date().getTime() - f.current;
                dt.current = dt.current - we
            }
            C.current = new Date().getTime()
        }
        )() : ( () => {
            dt.current !== 1 / 0 && (f.current = new Date().getTime(),
            Q = setTimeout( () => {
                m.onAutoClose == null || m.onAutoClose.call(m, m),
                Jt()
            }
            , dt.current))
        }
        )(),
        () => clearTimeout(Q)
    }
    , [g, k, m, pe, le, Jt]),
    R.useEffect( () => {
        m.delete && (Jt(),
        m.onDismiss == null || m.onDismiss.call(m, m))
    }
    , [Jt, m.delete]);
    function Ms() {
        var Q;
        if (Se != null && Se.loading) {
            var Ce;
            return R.createElement("div", {
                className: Zt(q == null ? void 0 : q.loader, m == null || (Ce = m.classNames) == null ? void 0 : Ce.loader, "sonner-loader"),
                "data-visible": pe === "loading"
            }, Se.loading)
        }
        return R.createElement(L1, {
            className: Zt(q == null ? void 0 : q.loader, m == null || (Q = m.classNames) == null ? void 0 : Q.loader),
            visible: pe === "loading"
        })
    }
    const Fi = m.icon || (Se == null ? void 0 : Se[pe]) || P1(pe);
    var jo, qe;
    return R.createElement("li", {
        tabIndex: 0,
        ref: ft,
        className: Zt(I, bo, q == null ? void 0 : q.toast, m == null || (t = m.classNames) == null ? void 0 : t.toast, q == null ? void 0 : q.default, q == null ? void 0 : q[pe], m == null || (n = m.classNames) == null ? void 0 : n[pe]),
        "data-sonner-toast": "",
        "data-rich-colors": (jo = m.richColors) != null ? jo : T,
        "data-styled": !(m.jsx || m.unstyled || v),
        "data-mounted": te,
        "data-promise": !!m.promise,
        "data-swiped": tr,
        "data-removed": K,
        "data-visible": Nn,
        "data-y-position": L,
        "data-x-position": X,
        "data-index": b,
        "data-front": Dr,
        "data-swiping": ee,
        "data-dismissible": bt,
        "data-type": pe,
        "data-invert": he,
        "data-swipe-out": ze,
        "data-swipe-direction": B,
        "data-expanded": !!(g || ke && te),
        style: {
            "--index": b,
            "--toasts-before": b,
            "--z-index": y.length - b,
            "--offset": `${K ? Dt : j.current}px`,
            "--initial-height": ke ? "auto" : `${ln}px`,
            ...P,
            ...m.style
        },
        onDragEnd: () => {
            Ee(!1),
            V(null),
            D.current = null
        }
        ,
        onPointerDown: Q => {
            se || !bt || (nr.current = new Date,
            ue(j.current),
            Q.target.setPointerCapture(Q.pointerId),
            Q.target.tagName !== "BUTTON" && (Ee(!0),
            D.current = {
                x: Q.clientX,
                y: Q.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Q, Ce, ne;
            if (ze || !bt)
                return;
            D.current = null;
            const we = Number(((Q = ft.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , _r = Number(((Ce = ft.current) == null ? void 0 : Ce.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Me = new Date().getTime() - ((ne = nr.current) == null ? void 0 : ne.getTime())
              , st = W === "x" ? we : _r
              , rr = Math.abs(st) / Me;
            if (Math.abs(st) >= J1 || rr > .11) {
                ue(j.current),
                m.onDismiss == null || m.onDismiss.call(m, m),
                H(W === "x" ? we > 0 ? "right" : "left" : _r > 0 ? "down" : "up"),
                Jt(),
                Tt(!0);
                return
            } else {
                var at, Xe;
                (at = ft.current) == null || at.style.setProperty("--swipe-amount-x", "0px"),
                (Xe = ft.current) == null || Xe.style.setProperty("--swipe-amount-y", "0px")
            }
            Kt(!1),
            Ee(!1),
            V(null)
        }
        ,
        onPointerMove: Q => {
            var Ce, ne, we;
            if (!D.current || !bt || ((Ce = window.getSelection()) == null ? void 0 : Ce.toString().length) > 0)
                return;
            const Me = Q.clientY - D.current.y
              , st = Q.clientX - D.current.x;
            var rr;
            const at = (rr = e.swipeDirections) != null ? rr : Z1(Pe);
            !W && (Math.abs(st) > 1 || Math.abs(Me) > 1) && V(Math.abs(st) > Math.abs(Me) ? "x" : "y");
            let Xe = {
                x: 0,
                y: 0
            };
            const Pr = It => 1 / (1.5 + Math.abs(It) / 20);
            if (W === "y") {
                if (at.includes("top") || at.includes("bottom"))
                    if (at.includes("top") && Me < 0 || at.includes("bottom") && Me > 0)
                        Xe.y = Me;
                    else {
                        const It = Me * Pr(Me);
                        Xe.y = Math.abs(It) < Math.abs(Me) ? It : Me
                    }
            } else if (W === "x" && (at.includes("left") || at.includes("right")))
                if (at.includes("left") && st < 0 || at.includes("right") && st > 0)
                    Xe.x = st;
                else {
                    const It = st * Pr(st);
                    Xe.x = Math.abs(It) < Math.abs(st) ? It : st
                }
            (Math.abs(Xe.x) > 0 || Math.abs(Xe.y) > 0) && Kt(!0),
            (ne = ft.current) == null || ne.style.setProperty("--swipe-amount-x", `${Xe.x}px`),
            (we = ft.current) == null || we.style.setProperty("--swipe-amount-y", `${Xe.y}px`)
        }
    }, p && !m.jsx && pe !== "loading" ? R.createElement("button", {
        "aria-label": $,
        "data-disabled": se,
        "data-close-button": !0,
        onClick: se || !bt ? () => {}
        : () => {
            Jt(),
            m.onDismiss == null || m.onDismiss.call(m, m)
        }
        ,
        className: Zt(q == null ? void 0 : q.closeButton, m == null || (r = m.classNames) == null ? void 0 : r.closeButton)
    }, (qe = Se == null ? void 0 : Se.close) != null ? qe : I1) : null, (pe || m.icon || m.promise) && m.icon !== null && ((Se == null ? void 0 : Se[pe]) !== null || m.icon) ? R.createElement("div", {
        "data-icon": "",
        className: Zt(q == null ? void 0 : q.icon, m == null || (o = m.classNames) == null ? void 0 : o.icon)
    }, m.promise || m.type === "loading" && !m.icon ? m.icon || Ms() : null, m.type !== "loading" ? Fi : null) : null, R.createElement("div", {
        "data-content": "",
        className: Zt(q == null ? void 0 : q.content, m == null || (s = m.classNames) == null ? void 0 : s.content)
    }, R.createElement("div", {
        "data-title": "",
        className: Zt(q == null ? void 0 : q.title, m == null || (a = m.classNames) == null ? void 0 : a.title)
    }, m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title), m.description ? R.createElement("div", {
        "data-description": "",
        className: Zt(ae, _t, q == null ? void 0 : q.description, m == null || (l = m.classNames) == null ? void 0 : l.description)
    }, typeof m.description == "function" ? m.description() : m.description) : null), R.isValidElement(m.cancel) ? m.cancel : m.cancel && ea(m.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: m.cancelButtonStyle || M,
        onClick: Q => {
            ea(m.cancel) && bt && (m.cancel.onClick == null || m.cancel.onClick.call(m.cancel, Q),
            Jt())
        }
        ,
        className: Zt(q == null ? void 0 : q.cancelButton, m == null || (u = m.classNames) == null ? void 0 : u.cancelButton)
    }, m.cancel.label) : null, R.isValidElement(m.action) ? m.action : m.action && ea(m.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: m.actionButtonStyle || U,
        onClick: Q => {
            ea(m.action) && (m.action.onClick == null || m.action.onClick.call(m.action, Q),
            !Q.defaultPrevented && Jt())
        }
        ,
        className: Zt(q == null ? void 0 : q.actionButton, m == null || (d = m.classNames) == null ? void 0 : d.actionButton)
    }, m.action.label) : null)
}
;
function Yf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    const e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function tw(e, t) {
    const n = {};
    return [e, t].forEach( (r, o) => {
        const s = o === 1
          , a = s ? "--mobile-offset" : "--offset"
          , l = s ? Q1 : q1;
        function u(d) {
            ["top", "right", "bottom", "left"].forEach(h => {
                n[`${a}-${h}`] = typeof d == "number" ? `${d}px` : d
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? u(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(d => {
            r[d] === void 0 ? n[`${a}-${d}`] = l : n[`${a}-${d}`] = typeof r[d] == "number" ? `${r[d]}px` : r[d]
        }
        ) : u(l)
    }
    ),
    n
}
const Jn = R.forwardRef(function(t, n) {
    const {invert: r, position: o="bottom-right", hotkey: s=["altKey", "KeyT"], expand: a, closeButton: l, className: u, offset: d, mobileOffset: h, theme: m="light", richColors: v, duration: k, style: x, visibleToasts: N=Y1, toastOptions: S, dir: b=Yf(), gap: y=K1, icons: g, containerAriaLabel: E="Notifications"} = t
      , [T,O] = R.useState([])
      , P = R.useMemo( () => Array.from(new Set([o].concat(T.filter(B => B.position).map(B => B.position)))), [T, o])
      , [M,U] = R.useState([])
      , [I,ae] = R.useState(!1)
      , [fe,Pe] = R.useState(!1)
      , [Ie,ke] = R.useState(m !== "system" ? m : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , q = R.useRef(null)
      , Se = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , $ = R.useRef(null)
      , W = R.useRef(!1)
      , V = R.useCallback(B => {
        O(H => {
            var te;
            return (te = H.find(F => F.id === B.id)) != null && te.delete || mt.dismiss(B.id),
            H.filter( ({id: F}) => F !== B.id)
        }
        )
    }
    , []);
    return R.useEffect( () => mt.subscribe(B => {
        if (B.dismiss) {
            requestAnimationFrame( () => {
                O(H => H.map(te => te.id === B.id ? {
                    ...te,
                    delete: !0
                } : te))
            }
            );
            return
        }
        setTimeout( () => {
            Tx.flushSync( () => {
                O(H => {
                    const te = H.findIndex(F => F.id === B.id);
                    return te !== -1 ? [...H.slice(0, te), {
                        ...H[te],
                        ...B
                    }, ...H.slice(te + 1)] : [B, ...H]
                }
                )
            }
            )
        }
        )
    }
    ), [T]),
    R.useEffect( () => {
        if (m !== "system") {
            ke(m);
            return
        }
        if (m === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ke("dark") : ke("light")),
        typeof window > "u")
            return;
        const B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: H}) => {
                ke(H ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: te}) => {
                try {
                    ke(te ? "dark" : "light")
                } catch (F) {
                    console.error(F)
                }
            }
            )
        }
    }
    , [m]),
    R.useEffect( () => {
        T.length <= 1 && ae(!1)
    }
    , [T]),
    R.useEffect( () => {
        const B = H => {
            var te;
            if (s.every(Y => H[Y] || H.code === Y)) {
                var K;
                ae(!0),
                (K = q.current) == null || K.focus()
            }
            H.code === "Escape" && (document.activeElement === q.current || (te = q.current) != null && te.contains(document.activeElement)) && ae(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [s]),
    R.useEffect( () => {
        if (q.current)
            return () => {
                $.current && ($.current.focus({
                    preventScroll: !0
                }),
                $.current = null,
                W.current = !1)
            }
    }
    , [q.current]),
    R.createElement("section", {
        ref: n,
        "aria-label": `${E} ${Se}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (B, H) => {
        var te;
        const [F,K] = B.split("-");
        return T.length ? R.createElement("ol", {
            key: B,
            dir: b === "auto" ? Yf() : b,
            tabIndex: -1,
            ref: q,
            className: u,
            "data-sonner-toaster": !0,
            "data-sonner-theme": Ie,
            "data-y-position": F,
            "data-x-position": K,
            style: {
                "--front-toast-height": `${((te = M[0]) == null ? void 0 : te.height) || 0}px`,
                "--width": `${G1}px`,
                "--gap": `${y}px`,
                ...x,
                ...tw(d, h)
            },
            onBlur: Y => {
                W.current && !Y.currentTarget.contains(Y.relatedTarget) && (W.current = !1,
                $.current && ($.current.focus({
                    preventScroll: !0
                }),
                $.current = null))
            }
            ,
            onFocus: Y => {
                Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || W.current || (W.current = !0,
                $.current = Y.relatedTarget)
            }
            ,
            onMouseEnter: () => ae(!0),
            onMouseMove: () => ae(!0),
            onMouseLeave: () => {
                fe || ae(!1)
            }
            ,
            onDragEnd: () => ae(!1),
            onPointerDown: Y => {
                Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || Pe(!0)
            }
            ,
            onPointerUp: () => Pe(!1)
        }, T.filter(Y => !Y.position && H === 0 || Y.position === B).map( (Y, ee) => {
            var Ee, ze;
            return R.createElement(ew, {
                key: Y.id,
                icons: g,
                index: ee,
                toast: Y,
                defaultRichColors: v,
                duration: (Ee = S == null ? void 0 : S.duration) != null ? Ee : k,
                className: S == null ? void 0 : S.className,
                descriptionClassName: S == null ? void 0 : S.descriptionClassName,
                invert: r,
                visibleToasts: N,
                closeButton: (ze = S == null ? void 0 : S.closeButton) != null ? ze : l,
                interacting: fe,
                position: B,
                style: S == null ? void 0 : S.style,
                unstyled: S == null ? void 0 : S.unstyled,
                classNames: S == null ? void 0 : S.classNames,
                cancelButtonStyle: S == null ? void 0 : S.cancelButtonStyle,
                actionButtonStyle: S == null ? void 0 : S.actionButtonStyle,
                closeButtonAriaLabel: S == null ? void 0 : S.closeButtonAriaLabel,
                removeToast: V,
                toasts: T.filter(Tt => Tt.position == Y.position),
                heights: M.filter(Tt => Tt.position == Y.position),
                setHeights: U,
                expandByDefault: a,
                gap: y,
                expanded: I,
                swipeDirections: t.swipeDirections
            })
        }
        )) : null
    }
    ))
});
function nw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    }))
}
const rw = w.forwardRef(nw);
function ow({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    }))
}
const sw = w.forwardRef(ow);
function aw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    }))
}
const ml = w.forwardRef(aw);
function iw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    }))
}
const hl = w.forwardRef(iw);
function lw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }))
}
const qf = w.forwardRef(lw);
function uw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
    }))
}
const cw = w.forwardRef(uw);
function dw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    }))
}
const fw = w.forwardRef(dw);
function mw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    }))
}
const hw = w.forwardRef(mw);
function pw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }), w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    }))
}
const gw = w.forwardRef(pw);
function yw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    }))
}
const vw = w.forwardRef(yw);
function xw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    }))
}
const ww = w.forwardRef(xw);
function bw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    }))
}
const ta = w.forwardRef(bw);
function jw({title: e, titleId: t, ...n}, r) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t
    }, n), e ? w.createElement("title", {
        id: t
    }, e) : null, w.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18 18 6M6 6l12 12"
    }))
}
const Nw = w.forwardRef(jw)
  , a0 = () => !!localStorage.getItem("token")
  , kw = () => localStorage.getItem("token")
  , Su = () => {
    localStorage.removeItem("token"),
    window.location.href = "/login"
}
  , ed = () => {
    try {
        const e = localStorage.getItem("token");
        if (!e)
            return !1;
        const t = l0(e)
          , n = Date.now() / 1e3;
        return t.exp < n ? (Su(),
        !1) : t.role === "STUDENT"
    } catch (e) {
        return console.error("Error checking admin status:", e),
        !1
    }
}
  , i0 = () => {
    const e = localStorage.getItem("token");
    if (!e)
        return !1;
    const t = l0(e);
    return console.log(t),
    t.userId
}
  , l0 = e => {
    try {
        const n = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
          , r = decodeURIComponent(atob(n).split("").map(o => "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2)).join(""));
        return JSON.parse(r)
    } catch (t) {
        throw console.error("Error decoding token:", t),
        t
    }
}
;
function u0(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Sw} = Object.prototype
  , {getPrototypeOf: td} = Object
  , {iterator: vi, toStringTag: c0} = Symbol
  , xi = (e => t => {
    const n = Sw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Gt = e => (e = e.toLowerCase(),
t => xi(t) === e)
  , wi = e => t => typeof t === e
  , {isArray: yo} = Array
  , ps = wi("undefined");
function Ew(e) {
    return e !== null && !ps(e) && e.constructor !== null && !ps(e.constructor) && xt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const d0 = Gt("ArrayBuffer");
function Cw(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && d0(e.buffer),
    t
}
const Tw = wi("string")
  , xt = wi("function")
  , f0 = wi("number")
  , bi = e => e !== null && typeof e == "object"
  , Dw = e => e === !0 || e === !1
  , ya = e => {
    if (xi(e) !== "object")
        return !1;
    const t = td(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(c0 in e) && !(vi in e)
}
  , _w = Gt("Date")
  , Pw = Gt("File")
  , Ow = Gt("Blob")
  , Lw = Gt("FileList")
  , Mw = e => bi(e) && xt(e.pipe)
  , Rw = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || xt(e.append) && ((t = xi(e)) === "formdata" || t === "object" && xt(e.toString) && e.toString() === "[object FormData]"))
}
  , Aw = Gt("URLSearchParams")
  , [Fw,Iw,$w,Bw] = ["ReadableStream", "Request", "Response", "Headers"].map(Gt)
  , Uw = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Es(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, o;
    if (typeof e != "object" && (e = [e]),
    yo(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , a = s.length;
        let l;
        for (r = 0; r < a; r++)
            l = s[r],
            t.call(null, e[l], l, e)
    }
}
function m0(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0; )
        if (o = n[r],
        t === o.toLowerCase())
            return o;
    return null
}
const dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : globalThis
  , h0 = e => !ps(e) && e !== dr;
function Eu() {
    const {caseless: e} = h0(this) && this || {}
      , t = {}
      , n = (r, o) => {
        const s = e && m0(t, o) || o;
        ya(t[s]) && ya(r) ? t[s] = Eu(t[s], r) : ya(r) ? t[s] = Eu({}, r) : yo(r) ? t[s] = r.slice() : t[s] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && Es(arguments[r], n);
    return t
}
const Ww = (e, t, n, {allOwnKeys: r}={}) => (Es(t, (o, s) => {
    n && xt(o) ? e[s] = u0(o, n) : e[s] = o
}
, {
    allOwnKeys: r
}),
e)
  , zw = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Hw = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Vw = (e, t, n, r) => {
    let o, s, a;
    const l = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        s = o.length; s-- > 0; )
            a = o[s],
            (!r || r(a, e, t)) && !l[a] && (t[a] = e[a],
            l[a] = !0);
        e = n !== !1 && td(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Yw = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , qw = e => {
    if (!e)
        return null;
    if (yo(e))
        return e;
    let t = e.length;
    if (!f0(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Qw = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && td(Uint8Array))
  , Gw = (e, t) => {
    const r = (e && e[vi]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const s = o.value;
        t.call(e, s[0], s[1])
    }
}
  , Kw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Jw = Gt("HTMLFormElement")
  , Xw = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
    return r.toUpperCase() + o
})
  , Qf = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Zw = Gt("RegExp")
  , p0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Es(n, (o, s) => {
        let a;
        (a = t(o, s, e)) !== !1 && (r[s] = a || o)
    }
    ),
    Object.defineProperties(e, r)
}
  , e2 = e => {
    p0(e, (t, n) => {
        if (xt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (xt(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , t2 = (e, t) => {
    const n = {}
      , r = o => {
        o.forEach(s => {
            n[s] = !0
        }
        )
    }
    ;
    return yo(e) ? r(e) : r(String(e).split(t)),
    n
}
  , n2 = () => {}
  , r2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function o2(e) {
    return !!(e && xt(e.append) && e[c0] === "FormData" && e[vi])
}
const s2 = e => {
    const t = new Array(10)
      , n = (r, o) => {
        if (bi(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[o] = r;
                const s = yo(r) ? [] : {};
                return Es(r, (a, l) => {
                    const u = n(a, o + 1);
                    !ps(u) && (s[l] = u)
                }
                ),
                t[o] = void 0,
                s
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , a2 = Gt("AsyncFunction")
  , i2 = e => e && (bi(e) || xt(e)) && xt(e.then) && xt(e.catch)
  , g0 = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (dr.addEventListener("message", ({source: o, data: s}) => {
    o === dr && s === n && r.length && r.shift()()
}
, !1),
o => {
    r.push(o),
    dr.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", xt(dr.postMessage))
  , l2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(dr) : typeof process < "u" && process.nextTick || g0
  , u2 = e => e != null && xt(e[vi])
  , _ = {
    isArray: yo,
    isArrayBuffer: d0,
    isBuffer: Ew,
    isFormData: Rw,
    isArrayBufferView: Cw,
    isString: Tw,
    isNumber: f0,
    isBoolean: Dw,
    isObject: bi,
    isPlainObject: ya,
    isReadableStream: Fw,
    isRequest: Iw,
    isResponse: $w,
    isHeaders: Bw,
    isUndefined: ps,
    isDate: _w,
    isFile: Pw,
    isBlob: Ow,
    isRegExp: Zw,
    isFunction: xt,
    isStream: Mw,
    isURLSearchParams: Aw,
    isTypedArray: Qw,
    isFileList: Lw,
    forEach: Es,
    merge: Eu,
    extend: Ww,
    trim: Uw,
    stripBOM: zw,
    inherits: Hw,
    toFlatObject: Vw,
    kindOf: xi,
    kindOfTest: Gt,
    endsWith: Yw,
    toArray: qw,
    forEachEntry: Gw,
    matchAll: Kw,
    isHTMLForm: Jw,
    hasOwnProperty: Qf,
    hasOwnProp: Qf,
    reduceDescriptors: p0,
    freezeMethods: e2,
    toObjectSet: t2,
    toCamelCase: Xw,
    noop: n2,
    toFiniteNumber: r2,
    findKey: m0,
    global: dr,
    isContextDefined: h0,
    isSpecCompliantForm: o2,
    toJSONObject: s2,
    isAsyncFn: a2,
    isThenable: i2,
    setImmediate: g0,
    asap: l2,
    isIterable: u2
};
function Z(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o,
    this.status = o.status ? o.status : null)
}
_.inherits(Z, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: _.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const y0 = Z.prototype
  , v0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    v0[e] = {
        value: e
    }
}
);
Object.defineProperties(Z, v0);
Object.defineProperty(y0, "isAxiosError", {
    value: !0
});
Z.from = (e, t, n, r, o, s) => {
    const a = Object.create(y0);
    return _.toFlatObject(e, a, function(u) {
        return u !== Error.prototype
    }, l => l !== "isAxiosError"),
    Z.call(a, e.message, t, n, r, o),
    a.cause = e,
    a.name = e.name,
    s && Object.assign(a, s),
    a
}
;
const c2 = null;
function Cu(e) {
    return _.isPlainObject(e) || _.isArray(e)
}
function x0(e) {
    return _.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Gf(e, t, n) {
    return e ? e.concat(t).map(function(o, s) {
        return o = x0(o),
        !n && s ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function d2(e) {
    return _.isArray(e) && !e.some(Cu)
}
const f2 = _.toFlatObject(_, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function ji(e, t, n) {
    if (!_.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = _.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(N, S) {
        return !_.isUndefined(S[N])
    });
    const r = n.metaTokens
      , o = n.visitor || h
      , s = n.dots
      , a = n.indexes
      , u = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
    if (!_.isFunction(o))
        throw new TypeError("visitor must be a function");
    function d(x) {
        if (x === null)
            return "";
        if (_.isDate(x))
            return x.toISOString();
        if (_.isBoolean(x))
            return x.toString();
        if (!u && _.isBlob(x))
            throw new Z("Blob is not supported. Use a Buffer instead.");
        return _.isArrayBuffer(x) || _.isTypedArray(x) ? u && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x
    }
    function h(x, N, S) {
        let b = x;
        if (x && !S && typeof x == "object") {
            if (_.endsWith(N, "{}"))
                N = r ? N : N.slice(0, -2),
                x = JSON.stringify(x);
            else if (_.isArray(x) && d2(x) || (_.isFileList(x) || _.endsWith(N, "[]")) && (b = _.toArray(x)))
                return N = x0(N),
                b.forEach(function(g, E) {
                    !(_.isUndefined(g) || g === null) && t.append(a === !0 ? Gf([N], E, s) : a === null ? N : N + "[]", d(g))
                }),
                !1
        }
        return Cu(x) ? !0 : (t.append(Gf(S, N, s), d(x)),
        !1)
    }
    const m = []
      , v = Object.assign(f2, {
        defaultVisitor: h,
        convertValue: d,
        isVisitable: Cu
    });
    function k(x, N) {
        if (!_.isUndefined(x)) {
            if (m.indexOf(x) !== -1)
                throw Error("Circular reference detected in " + N.join("."));
            m.push(x),
            _.forEach(x, function(b, y) {
                (!(_.isUndefined(b) || b === null) && o.call(t, b, _.isString(y) ? y.trim() : y, N, v)) === !0 && k(b, N ? N.concat(y) : [y])
            }),
            m.pop()
        }
    }
    if (!_.isObject(e))
        throw new TypeError("data must be an object");
    return k(e),
    t
}
function Kf(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function nd(e, t) {
    this._pairs = [],
    e && ji(e, this, t)
}
const w0 = nd.prototype;
w0.append = function(t, n) {
    this._pairs.push([t, n])
}
;
w0.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Kf)
    }
    : Kf;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function m2(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function b0(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || m2;
    _.isFunction(n) && (n = {
        serialize: n
    });
    const o = n && n.serialize;
    let s;
    if (o ? s = o(t, n) : s = _.isURLSearchParams(t) ? t.toString() : new nd(t,n).toString(r),
    s) {
        const a = e.indexOf("#");
        a !== -1 && (e = e.slice(0, a)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class Jf {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        _.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const j0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , h2 = typeof URLSearchParams < "u" ? URLSearchParams : nd
  , p2 = typeof FormData < "u" ? FormData : null
  , g2 = typeof Blob < "u" ? Blob : null
  , y2 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: h2,
        FormData: p2,
        Blob: g2
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , rd = typeof window < "u" && typeof document < "u"
  , Tu = typeof navigator == "object" && navigator || void 0
  , v2 = rd && (!Tu || ["ReactNative", "NativeScript", "NS"].indexOf(Tu.product) < 0)
  , x2 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , w2 = rd && window.location.href || "http://localhost"
  , b2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: rd,
    hasStandardBrowserEnv: v2,
    hasStandardBrowserWebWorkerEnv: x2,
    navigator: Tu,
    origin: w2
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nt = {
    ...b2,
    ...y2
};
function j2(e, t) {
    return ji(e, new nt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, s) {
            return nt.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function N2(e) {
    return _.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function k2(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const o = n.length;
    let s;
    for (r = 0; r < o; r++)
        s = n[r],
        t[s] = e[s];
    return t
}
function N0(e) {
    function t(n, r, o, s) {
        let a = n[s++];
        if (a === "__proto__")
            return !0;
        const l = Number.isFinite(+a)
          , u = s >= n.length;
        return a = !a && _.isArray(o) ? o.length : a,
        u ? (_.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r,
        !l) : ((!o[a] || !_.isObject(o[a])) && (o[a] = []),
        t(n, r, o[a], s) && _.isArray(o[a]) && (o[a] = k2(o[a])),
        !l)
    }
    if (_.isFormData(e) && _.isFunction(e.entries)) {
        const n = {};
        return _.forEachEntry(e, (r, o) => {
            t(N2(r), o, n, 0)
        }
        ),
        n
    }
    return null
}
function S2(e, t, n) {
    if (_.isString(e))
        try {
            return (t || JSON.parse)(e),
            _.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Cs = {
    transitional: j0,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , s = _.isObject(t);
        if (s && _.isHTMLForm(t) && (t = new FormData(t)),
        _.isFormData(t))
            return o ? JSON.stringify(N0(t)) : t;
        if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t) || _.isReadableStream(t))
            return t;
        if (_.isArrayBufferView(t))
            return t.buffer;
        if (_.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let l;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return j2(t, this.formSerializer).toString();
            if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return ji(l ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return s || o ? (n.setContentType("application/json", !1),
        S2(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Cs.transitional
          , r = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (_.isResponse(t) || _.isReadableStream(t))
            return t;
        if (t && _.isString(t) && (r && !this.responseType || o)) {
            const a = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (a)
                    throw l.name === "SyntaxError" ? Z.from(l, Z.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: nt.classes.FormData,
        Blob: nt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Cs.headers[e] = {}
}
);
const E2 = _.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , C2 = e => {
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function(a) {
        o = a.indexOf(":"),
        n = a.substring(0, o).trim().toLowerCase(),
        r = a.substring(o + 1).trim(),
        !(!n || t[n] && E2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Xf = Symbol("internals");
function Po(e) {
    return e && String(e).trim().toLowerCase()
}
function va(e) {
    return e === !1 || e == null ? e : _.isArray(e) ? e.map(va) : String(e)
}
function T2(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const D2 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pl(e, t, n, r, o) {
    if (_.isFunction(r))
        return r.call(this, t, n);
    if (o && (t = n),
    !!_.isString(t)) {
        if (_.isString(r))
            return t.indexOf(r) !== -1;
        if (_.isRegExp(r))
            return r.test(t)
    }
}
function _2(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function P2(e, t) {
    const n = _.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, s, a) {
                return this[r].call(this, t, o, s, a)
            },
            configurable: !0
        })
    }
    )
}
let wt = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;
        function s(l, u, d) {
            const h = Po(u);
            if (!h)
                throw new Error("header name must be a non-empty string");
            const m = _.findKey(o, h);
            (!m || o[m] === void 0 || d === !0 || d === void 0 && o[m] !== !1) && (o[m || u] = va(l))
        }
        const a = (l, u) => _.forEach(l, (d, h) => s(d, h, u));
        if (_.isPlainObject(t) || t instanceof this.constructor)
            a(t, n);
        else if (_.isString(t) && (t = t.trim()) && !D2(t))
            a(C2(t), n);
        else if (_.isObject(t) && _.isIterable(t)) {
            let l = {}, u, d;
            for (const h of t) {
                if (!_.isArray(h))
                    throw TypeError("Object iterator must return a key-value pair");
                l[d = h[0]] = (u = l[d]) ? _.isArray(u) ? [...u, h[1]] : [u, h[1]] : h[1]
            }
            a(l, n)
        } else
            t != null && s(n, t, r);
        return this
    }
    get(t, n) {
        if (t = Po(t),
        t) {
            const r = _.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n)
                    return o;
                if (n === !0)
                    return T2(o);
                if (_.isFunction(n))
                    return n.call(this, o, r);
                if (_.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Po(t),
        t) {
            const r = _.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || pl(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function s(a) {
            if (a = Po(a),
            a) {
                const l = _.findKey(r, a);
                l && (!n || pl(r, r[l], l, n)) && (delete r[l],
                o = !0)
            }
        }
        return _.isArray(t) ? t.forEach(s) : s(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , o = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || pl(this, this[s], s, t, !0)) && (delete this[s],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , r = {};
        return _.forEach(this, (o, s) => {
            const a = _.findKey(r, s);
            if (a) {
                n[a] = va(o),
                delete n[s];
                return
            }
            const l = t ? _2(s) : String(s).trim();
            l !== s && delete n[s],
            n[l] = va(o),
            r[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return _.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)),
        r
    }
    static accessor(t) {
        const r = (this[Xf] = this[Xf] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function s(a) {
            const l = Po(a);
            r[l] || (P2(o, a),
            r[l] = !0)
        }
        return _.isArray(t) ? t.forEach(s) : s(t),
        this
    }
}
;
wt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(wt.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
_.freezeMethods(wt);
function gl(e, t) {
    const n = this || Cs
      , r = t || n
      , o = wt.from(r.headers);
    let s = r.data;
    return _.forEach(e, function(l) {
        s = l.call(n, s, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    s
}
function k0(e) {
    return !!(e && e.__CANCEL__)
}
function vo(e, t, n) {
    Z.call(this, e ?? "canceled", Z.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
_.inherits(vo, Z, {
    __CANCEL__: !0
});
function S0(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Z("Request failed with status code " + n.status,[Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function O2(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function L2(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let o = 0, s = 0, a;
    return t = t !== void 0 ? t : 1e3,
    function(u) {
        const d = Date.now()
          , h = r[s];
        a || (a = d),
        n[o] = u,
        r[o] = d;
        let m = s
          , v = 0;
        for (; m !== o; )
            v += n[m++],
            m = m % e;
        if (o = (o + 1) % e,
        o === s && (s = (s + 1) % e),
        d - a < t)
            return;
        const k = h && d - h;
        return k ? Math.round(v * 1e3 / k) : void 0
    }
}
function M2(e, t) {
    let n = 0, r = 1e3 / t, o, s;
    const a = (d, h=Date.now()) => {
        n = h,
        o = null,
        s && (clearTimeout(s),
        s = null),
        e.apply(null, d)
    }
    ;
    return [ (...d) => {
        const h = Date.now()
          , m = h - n;
        m >= r ? a(d, h) : (o = d,
        s || (s = setTimeout( () => {
            s = null,
            a(o)
        }
        , r - m)))
    }
    , () => o && a(o)]
}
const qa = (e, t, n=3) => {
    let r = 0;
    const o = L2(50, 250);
    return M2(s => {
        const a = s.loaded
          , l = s.lengthComputable ? s.total : void 0
          , u = a - r
          , d = o(u)
          , h = a <= l;
        r = a;
        const m = {
            loaded: a,
            total: l,
            progress: l ? a / l : void 0,
            bytes: u,
            rate: d || void 0,
            estimated: d && l && h ? (l - a) / d : void 0,
            event: s,
            lengthComputable: l != null,
            [t ? "download" : "upload"]: !0
        };
        e(m)
    }
    , n)
}
  , Zf = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , em = e => (...t) => _.asap( () => e(...t))
  , R2 = nt.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,nt.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(nt.origin), nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)) : () => !0
  , A2 = nt.hasStandardBrowserEnv ? {
    write(e, t, n, r, o, s) {
        const a = [e + "=" + encodeURIComponent(t)];
        _.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
        _.isString(r) && a.push("path=" + r),
        _.isString(o) && a.push("domain=" + o),
        s === !0 && a.push("secure"),
        document.cookie = a.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function F2(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function I2(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function E0(e, t, n) {
    let r = !F2(t);
    return e && (r || n == !1) ? I2(e, t) : t
}
const tm = e => e instanceof wt ? {
    ...e
} : e;
function jr(e, t) {
    t = t || {};
    const n = {};
    function r(d, h, m, v) {
        return _.isPlainObject(d) && _.isPlainObject(h) ? _.merge.call({
            caseless: v
        }, d, h) : _.isPlainObject(h) ? _.merge({}, h) : _.isArray(h) ? h.slice() : h
    }
    function o(d, h, m, v) {
        if (_.isUndefined(h)) {
            if (!_.isUndefined(d))
                return r(void 0, d, m, v)
        } else
            return r(d, h, m, v)
    }
    function s(d, h) {
        if (!_.isUndefined(h))
            return r(void 0, h)
    }
    function a(d, h) {
        if (_.isUndefined(h)) {
            if (!_.isUndefined(d))
                return r(void 0, d)
        } else
            return r(void 0, h)
    }
    function l(d, h, m) {
        if (m in t)
            return r(d, h);
        if (m in e)
            return r(void 0, d)
    }
    const u = {
        url: s,
        method: s,
        data: s,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        withXSRFToken: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: l,
        headers: (d, h, m) => o(tm(d), tm(h), m, !0)
    };
    return _.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
        const m = u[h] || o
          , v = m(e[h], t[h], h);
        _.isUndefined(v) && m !== l || (n[h] = v)
    }),
    n
}
const C0 = e => {
    const t = jr({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l} = t;
    t.headers = a = wt.from(a),
    t.url = b0(E0(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    let u;
    if (_.isFormData(n)) {
        if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
            a.setContentType(void 0);
        else if ((u = a.getContentType()) !== !1) {
            const [d,...h] = u ? u.split(";").map(m => m.trim()).filter(Boolean) : [];
            a.setContentType([d || "multipart/form-data", ...h].join("; "))
        }
    }
    if (nt.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(t)),
    r || r !== !1 && R2(t.url))) {
        const d = o && s && A2.read(s);
        d && a.set(o, d)
    }
    return t
}
  , $2 = typeof XMLHttpRequest < "u"
  , B2 = $2 && function(e) {
    return new Promise(function(n, r) {
        const o = C0(e);
        let s = o.data;
        const a = wt.from(o.headers).normalize();
        let {responseType: l, onUploadProgress: u, onDownloadProgress: d} = o, h, m, v, k, x;
        function N() {
            k && k(),
            x && x(),
            o.cancelToken && o.cancelToken.unsubscribe(h),
            o.signal && o.signal.removeEventListener("abort", h)
        }
        let S = new XMLHttpRequest;
        S.open(o.method.toUpperCase(), o.url, !0),
        S.timeout = o.timeout;
        function b() {
            if (!S)
                return;
            const g = wt.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , T = {
                data: !l || l === "text" || l === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: g,
                config: e,
                request: S
            };
            S0(function(P) {
                n(P),
                N()
            }, function(P) {
                r(P),
                N()
            }, T),
            S = null
        }
        "onloadend"in S ? S.onloadend = b : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(b)
        }
        ,
        S.onabort = function() {
            S && (r(new Z("Request aborted",Z.ECONNABORTED,e,S)),
            S = null)
        }
        ,
        S.onerror = function() {
            r(new Z("Network Error",Z.ERR_NETWORK,e,S)),
            S = null
        }
        ,
        S.ontimeout = function() {
            let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const T = o.transitional || j0;
            o.timeoutErrorMessage && (E = o.timeoutErrorMessage),
            r(new Z(E,T.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,e,S)),
            S = null
        }
        ,
        s === void 0 && a.setContentType(null),
        "setRequestHeader"in S && _.forEach(a.toJSON(), function(E, T) {
            S.setRequestHeader(T, E)
        }),
        _.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials),
        l && l !== "json" && (S.responseType = o.responseType),
        d && ([v,x] = qa(d, !0),
        S.addEventListener("progress", v)),
        u && S.upload && ([m,k] = qa(u),
        S.upload.addEventListener("progress", m),
        S.upload.addEventListener("loadend", k)),
        (o.cancelToken || o.signal) && (h = g => {
            S && (r(!g || g.type ? new vo(null,e,S) : g),
            S.abort(),
            S = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(h),
        o.signal && (o.signal.aborted ? h() : o.signal.addEventListener("abort", h)));
        const y = O2(o.url);
        if (y && nt.protocols.indexOf(y) === -1) {
            r(new Z("Unsupported protocol " + y + ":",Z.ERR_BAD_REQUEST,e));
            return
        }
        S.send(s || null)
    }
    )
}
  , U2 = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, o;
        const s = function(d) {
            if (!o) {
                o = !0,
                l();
                const h = d instanceof Error ? d : this.reason;
                r.abort(h instanceof Z ? h : new vo(h instanceof Error ? h.message : h))
            }
        };
        let a = t && setTimeout( () => {
            a = null,
            s(new Z(`timeout ${t} of ms exceeded`,Z.ETIMEDOUT))
        }
        , t);
        const l = () => {
            e && (a && clearTimeout(a),
            a = null,
            e.forEach(d => {
                d.unsubscribe ? d.unsubscribe(s) : d.removeEventListener("abort", s)
            }
            ),
            e = null)
        }
        ;
        e.forEach(d => d.addEventListener("abort", s));
        const {signal: u} = r;
        return u.unsubscribe = () => _.asap(l),
        u
    }
}
  , W2 = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, o;
    for (; r < n; )
        o = r + t,
        yield e.slice(r, o),
        r = o
}
  , z2 = async function*(e, t) {
    for await(const n of H2(e))
        yield*W2(n, t)
}
  , H2 = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , nm = (e, t, n, r) => {
    const o = z2(e, t);
    let s = 0, a, l = u => {
        a || (a = !0,
        r && r(u))
    }
    ;
    return new ReadableStream({
        async pull(u) {
            try {
                const {done: d, value: h} = await o.next();
                if (d) {
                    l(),
                    u.close();
                    return
                }
                let m = h.byteLength;
                if (n) {
                    let v = s += m;
                    n(v)
                }
                u.enqueue(new Uint8Array(h))
            } catch (d) {
                throw l(d),
                d
            }
        },
        cancel(u) {
            return l(u),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Ni = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , T0 = Ni && typeof ReadableStream == "function"
  , V2 = Ni && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , D0 = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , Y2 = T0 && D0( () => {
    let e = !1;
    const t = new Request(nt.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , rm = 64 * 1024
  , Du = T0 && D0( () => _.isReadableStream(new Response("").body))
  , Qa = {
    stream: Du && (e => e.body)
};
Ni && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Qa[t] && (Qa[t] = _.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new Z(`Response type '${t}' is not supported`,Z.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const q2 = async e => {
    if (e == null)
        return 0;
    if (_.isBlob(e))
        return e.size;
    if (_.isSpecCompliantForm(e))
        return (await new Request(nt.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
        return e.byteLength;
    if (_.isURLSearchParams(e) && (e = e + ""),
    _.isString(e))
        return (await V2(e)).byteLength
}
  , Q2 = async (e, t) => {
    const n = _.toFiniteNumber(e.getContentLength());
    return n ?? q2(t)
}
  , G2 = Ni && (async e => {
    let {url: t, method: n, data: r, signal: o, cancelToken: s, timeout: a, onDownloadProgress: l, onUploadProgress: u, responseType: d, headers: h, withCredentials: m="same-origin", fetchOptions: v} = C0(e);
    d = d ? (d + "").toLowerCase() : "text";
    let k = U2([o, s && s.toAbortSignal()], a), x;
    const N = k && k.unsubscribe && ( () => {
        k.unsubscribe()
    }
    );
    let S;
    try {
        if (u && Y2 && n !== "get" && n !== "head" && (S = await Q2(h, r)) !== 0) {
            let T = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), O;
            if (_.isFormData(r) && (O = T.headers.get("content-type")) && h.setContentType(O),
            T.body) {
                const [P,M] = Zf(S, qa(em(u)));
                r = nm(T.body, rm, P, M)
            }
        }
        _.isString(m) || (m = m ? "include" : "omit");
        const b = "credentials"in Request.prototype;
        x = new Request(t,{
            ...v,
            signal: k,
            method: n.toUpperCase(),
            headers: h.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: b ? m : void 0
        });
        let y = await fetch(x, v);
        const g = Du && (d === "stream" || d === "response");
        if (Du && (l || g && N)) {
            const T = {};
            ["status", "statusText", "headers"].forEach(U => {
                T[U] = y[U]
            }
            );
            const O = _.toFiniteNumber(y.headers.get("content-length"))
              , [P,M] = l && Zf(O, qa(em(l), !0)) || [];
            y = new Response(nm(y.body, rm, P, () => {
                M && M(),
                N && N()
            }
            ),T)
        }
        d = d || "text";
        let E = await Qa[_.findKey(Qa, d) || "text"](y, e);
        return !g && N && N(),
        await new Promise( (T, O) => {
            S0(T, O, {
                data: E,
                headers: wt.from(y.headers),
                status: y.status,
                statusText: y.statusText,
                config: e,
                request: x
            })
        }
        )
    } catch (b) {
        throw N && N(),
        b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message) ? Object.assign(new Z("Network Error",Z.ERR_NETWORK,e,x), {
            cause: b.cause || b
        }) : Z.from(b, b && b.code, e, x)
    }
}
)
  , _u = {
    http: c2,
    xhr: B2,
    fetch: G2
};
_.forEach(_u, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const om = e => `- ${e}`
  , K2 = e => _.isFunction(e) || e === null || e === !1
  , _0 = {
    getAdapter: e => {
        e = _.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const o = {};
        for (let s = 0; s < t; s++) {
            n = e[s];
            let a;
            if (r = n,
            !K2(n) && (r = _u[(a = String(n)).toLowerCase()],
            r === void 0))
                throw new Z(`Unknown adapter '${a}'`);
            if (r)
                break;
            o[a || "#" + s] = r
        }
        if (!r) {
            const s = Object.entries(o).map( ([l,u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build"));
            let a = t ? s.length > 1 ? `since :
` + s.map(om).join(`
`) : " " + om(s[0]) : "as no adapter specified";
            throw new Z("There is no suitable adapter to dispatch the request " + a,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: _u
};
function yl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new vo(null,e)
}
function sm(e) {
    return yl(e),
    e.headers = wt.from(e.headers),
    e.data = gl.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _0.getAdapter(e.adapter || Cs.adapter)(e).then(function(r) {
        return yl(e),
        r.data = gl.call(e, e.transformResponse, r),
        r.headers = wt.from(r.headers),
        r
    }, function(r) {
        return k0(r) || (yl(e),
        r && r.response && (r.response.data = gl.call(e, e.transformResponse, r.response),
        r.response.headers = wt.from(r.response.headers))),
        Promise.reject(r)
    })
}
const P0 = "1.10.0"
  , ki = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    ki[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const am = {};
ki.transitional = function(t, n, r) {
    function o(s, a) {
        return "[Axios v" + P0 + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "")
    }
    return (s, a, l) => {
        if (t === !1)
            throw new Z(o(a, " has been removed" + (n ? " in " + n : "")),Z.ERR_DEPRECATED);
        return n && !am[a] && (am[a] = !0,
        console.warn(o(a, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(s, a, l) : !0
    }
}
;
ki.spelling = function(t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`),
    !0)
}
;
function J2(e, t, n) {
    if (typeof e != "object")
        throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const s = r[o]
          , a = t[s];
        if (a) {
            const l = e[s]
              , u = l === void 0 || a(l, s, e);
            if (u !== !0)
                throw new Z("option " + s + " must be " + u,Z.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Z("Unknown option " + s,Z.ERR_BAD_OPTION)
    }
}
const xa = {
    assertOptions: J2,
    validators: ki
}
  , en = xa.validators;
let pr = class {
    constructor(t) {
        this.defaults = t || {},
        this.interceptors = {
            request: new Jf,
            response: new Jf
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let o = {};
                Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error;
                const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = jr(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: s} = n;
        r !== void 0 && xa.assertOptions(r, {
            silentJSONParsing: en.transitional(en.boolean),
            forcedJSONParsing: en.transitional(en.boolean),
            clarifyTimeoutError: en.transitional(en.boolean)
        }, !1),
        o != null && (_.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : xa.assertOptions(o, {
            encode: en.function,
            serialize: en.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        xa.assertOptions(n, {
            baseUrl: en.spelling("baseURL"),
            withXsrfToken: en.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let a = s && _.merge(s.common, s[n.method]);
        s && _.forEach(["delete", "get", "head", "post", "put", "patch", "common"], x => {
            delete s[x]
        }
        ),
        n.headers = wt.concat(a, s);
        const l = [];
        let u = !0;
        this.interceptors.request.forEach(function(N) {
            typeof N.runWhen == "function" && N.runWhen(n) === !1 || (u = u && N.synchronous,
            l.unshift(N.fulfilled, N.rejected))
        });
        const d = [];
        this.interceptors.response.forEach(function(N) {
            d.push(N.fulfilled, N.rejected)
        });
        let h, m = 0, v;
        if (!u) {
            const x = [sm.bind(this), void 0];
            for (x.unshift.apply(x, l),
            x.push.apply(x, d),
            v = x.length,
            h = Promise.resolve(n); m < v; )
                h = h.then(x[m++], x[m++]);
            return h
        }
        v = l.length;
        let k = n;
        for (m = 0; m < v; ) {
            const x = l[m++]
              , N = l[m++];
            try {
                k = x(k)
            } catch (S) {
                N.call(this, S);
                break
            }
        }
        try {
            h = sm.call(this, k)
        } catch (x) {
            return Promise.reject(x)
        }
        for (m = 0,
        v = d.length; m < v; )
            h = h.then(d[m++], d[m++]);
        return h
    }
    getUri(t) {
        t = jr(this.defaults, t);
        const n = E0(t.baseURL, t.url, t.allowAbsoluteUrls);
        return b0(n, t.params, t.paramsSerializer)
    }
}
;
_.forEach(["delete", "get", "head", "options"], function(t) {
    pr.prototype[t] = function(n, r) {
        return this.request(jr(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
_.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, a, l) {
            return this.request(jr(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: a
            }))
        }
    }
    pr.prototype[t] = n(),
    pr.prototype[t + "Form"] = n(!0)
});
let X2 = class O0 {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        }
        );
        const r = this;
        this.promise.then(o => {
            if (!r._listeners)
                return;
            let s = r._listeners.length;
            for (; s-- > 0; )
                r._listeners[s](o);
            r._listeners = null
        }
        ),
        this.promise.then = o => {
            let s;
            const a = new Promise(l => {
                r.subscribe(l),
                s = l
            }
            ).then(o);
            return a.cancel = function() {
                r.unsubscribe(s)
            }
            ,
            a
        }
        ,
        t(function(s, a, l) {
            r.reason || (r.reason = new vo(s,a,l),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new O0(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
;
function Z2(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function eb(e) {
    return _.isObject(e) && e.isAxiosError === !0
}
const Pu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Pu).forEach( ([e,t]) => {
    Pu[t] = e
}
);
function L0(e) {
    const t = new pr(e)
      , n = u0(pr.prototype.request, t);
    return _.extend(n, pr.prototype, t, {
        allOwnKeys: !0
    }),
    _.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return L0(jr(e, o))
    }
    ,
    n
}
const Fe = L0(Cs);
Fe.Axios = pr;
Fe.CanceledError = vo;
Fe.CancelToken = X2;
Fe.isCancel = k0;
Fe.VERSION = P0;
Fe.toFormData = ji;
Fe.AxiosError = Z;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(t) {
    return Promise.all(t)
}
;
Fe.spread = Z2;
Fe.isAxiosError = eb;
Fe.mergeConfig = jr;
Fe.AxiosHeaders = wt;
Fe.formToJSON = e => N0(_.isHTMLForm(e) ? new FormData(e) : e);
Fe.getAdapter = _0.getAdapter;
Fe.HttpStatusCode = Pu;
Fe.default = Fe;
const {Axios: uE, AxiosError: cE, CanceledError: dE, isCancel: fE, CancelToken: mE, VERSION: hE, all: pE, Cancel: gE, isAxiosError: yE, spread: vE, toFormData: xE, AxiosHeaders: wE, HttpStatusCode: bE, formToJSON: jE, getAdapter: NE, mergeConfig: kE} = Fe
  , je = Fe.create({
    baseURL: "https://api.badger.epihub.eu/api",
    headers: {
        "Content-Type": "application/json"
    }
});
je.interceptors.request.use(e => {
    const t = kw();
    return t && (e.headers.Authorization = `Bearer ${t}`),
    e
}
, e => Promise.reject(e));
const tb = async (e, t) => {
    try {
        return (await je.get(`/users/promo/${e}/active?date=${t}`)).data
    } catch (n) {
        throw console.error("Error fetching data:", n),
        n
    }
}
  , nb = async e => {
    try {
        return (await je.get(`/users/promo/${e}`)).data
    } catch (t) {
        throw console.error("Error fetching data:", t),
        t
    }
}
  , rb = async e => {
    try {
        return (await je.get(`/presences/user/${e}`)).data
    } catch (t) {
        throw console.error("Error fetching data:", t),
        t
    }
}
  , ob = async e => {
    try {
        return (await je.post("/sessions", e)).data
    } catch (t) {
        throw console.error("Error creating session:", t),
        t
    }
}
  , M0 = async () => {
    try {
        return (await je.get("/sessions")).data
    } catch (e) {
        throw console.error("Error fetching sessions:", e),
        e
    }
}
  , sb = async (e, t) => {
    try {
        return (await je.put(`/sessions/${e}`, t)).data
    } catch (n) {
        throw console.error(`Error updating session ${e}:`, n),
        n
    }
}
  , ab = async e => {
    try {
        return (await je.delete(`/sessions/${e}`)).data
    } catch (t) {
        throw console.error(`Error deleting session ${e}:`, t),
        t
    }
}
  , ib = async e => {
    try {
        return (await je.get(`/sessions/date/${e}`)).data
    } catch (t) {
        throw console.error(`Error fetching sessions for date ${e}:`, t),
        t
    }
}
  , lb = async e => {
    try {
        return (await je.get(`/presences/session/${e}`)).data
    } catch (t) {
        throw console.error(`Error fetching presences for session ${e}:`, t),
        t
    }
}
  , im = async e => {
    try {
        return (await je.put("/presences/justification", e)).data
    } catch (t) {
        throw console.error("Error updating justification:", t),
        t
    }
}
  , ub = async e => {
    try {
        return (await je.post("/presences/manually", e)).data
    } catch (t) {
        throw console.error("Error creating presence manually:", t),
        t
    }
}
  , cb = async e => {
    try {
        return (await je.put("/users/", e)).data
    } catch (t) {
        throw console.error("Error updating user:", t),
        t
    }
}
  , Si = async () => {
    try {
        return (await je.get("/users/promos")).data
    } catch (e) {
        throw console.error("Error fetching promos:", e),
        e
    }
}
  , db = async e => {
    try {
        return (await je.put("/presences/update", e)).data
    } catch (t) {
        throw console.error("Error updating presence:", t),
        t
    }
}
  , fb = async () => {
    try {
        const e = await je.get("/users/admins");
        return console.log(e.data),
        e.data
    } catch (e) {
        throw console.error("Error fetching admin users:", e),
        e
    }
}
  , mb = async e => {
    try {
        return (await je.post("/users/admins", e)).data
    } catch (t) {
        throw console.error("Error creating admin:", t),
        t
    }
}
  , hb = async e => {
    try {
        return (await je.post("/users/create-admin", e)).data
    } catch (t) {
        throw console.error("Error creating user:", t),
        t
    }
}
  , pb = async e => {
    try {
        return (await je.delete(`/users/admins/${e}`)).data
    } catch (t) {
        throw console.error("Error deleting admin:", t),
        t
    }
}
  , gb = async () => {
    try {
        return (await je.get("/users/me")).data
    } catch (e) {
        throw console.error("Error fetching user profile:", e),
        e
    }
}
  , yb = async () => {
    try {
        return (await je.get("/sessions/with-presences")).data
    } catch (e) {
        throw console.error("Error fetching sessions with presences:", e),
        e
    }
}
  , vb = async (e, t=null) => {
    try {
        const n = t ? {
            deactivationDate: t
        } : {};
        return (await je.post(`/users/${e}/deactivate`, n)).data
    } catch (n) {
        throw console.error("Error deactivating user:", n),
        n
    }
}
  , xb = async e => {
    try {
        return (await je.post(`/users/${e}/reactivate`)).data
    } catch (t) {
        throw console.error("Error reactivating user:", t),
        t
    }
}
;
function rt(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function Yn(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
const R0 = 6048e5
  , wb = 864e5;
let bb = {};
function Ei() {
    return bb
}
function gs(e, t) {
    var l, u, d, h;
    const n = Ei()
      , r = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? 0
      , o = rt(e)
      , s = o.getDay()
      , a = (s < r ? 7 : 0) + s - r;
    return o.setDate(o.getDate() - a),
    o.setHours(0, 0, 0, 0),
    o
}
function Ga(e) {
    return gs(e, {
        weekStartsOn: 1
    })
}
function A0(e) {
    const t = rt(e)
      , n = t.getFullYear()
      , r = Yn(e, 0);
    r.setFullYear(n + 1, 0, 4),
    r.setHours(0, 0, 0, 0);
    const o = Ga(r)
      , s = Yn(e, 0);
    s.setFullYear(n, 0, 4),
    s.setHours(0, 0, 0, 0);
    const a = Ga(s);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1
}
function Ka(e) {
    const t = rt(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function lm(e) {
    const t = rt(e)
      , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    +e - +n
}
function jb(e, t) {
    const n = Ka(e)
      , r = Ka(t)
      , o = +n - lm(n)
      , s = +r - lm(r);
    return Math.round((o - s) / wb)
}
function Nb(e) {
    const t = A0(e)
      , n = Yn(e, 0);
    return n.setFullYear(t, 0, 4),
    n.setHours(0, 0, 0, 0),
    Ga(n)
}
function kb(e) {
    return Yn(e, Date.now())
}
function Sb(e, t) {
    const n = Ka(e)
      , r = Ka(t);
    return +n == +r
}
function Eb(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function Cb(e) {
    if (!Eb(e) && typeof e != "number")
        return !1;
    const t = rt(e);
    return !isNaN(Number(t))
}
function Tb(e, t) {
    const n = rt(e.start)
      , r = rt(e.end);
    let o = +n > +r;
    const s = o ? +n : +r
      , a = o ? r : n;
    a.setHours(0, 0, 0, 0);
    let l = 1;
    const u = [];
    for (; +a <= s; )
        u.push(rt(a)),
        a.setDate(a.getDate() + l),
        a.setHours(0, 0, 0, 0);
    return o ? u.reverse() : u
}
function Db(e) {
    const t = rt(e)
      , n = Yn(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
const _b = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , Pb = (e, t, n) => {
    let r;
    const o = _b[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function vl(e) {
    return (t={}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth]
    }
}
const Ob = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , Lb = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , Mb = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , Rb = {
    date: vl({
        formats: Ob,
        defaultWidth: "full"
    }),
    time: vl({
        formats: Lb,
        defaultWidth: "full"
    }),
    dateTime: vl({
        formats: Mb,
        defaultWidth: "full"
    })
}
  , Ab = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , Fb = (e, t, n, r) => Ab[e];
function Oo(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let o;
        if (r === "formatting" && e.formattingValues) {
            const a = e.defaultFormattingWidth || e.defaultWidth
              , l = n != null && n.width ? String(n.width) : a;
            o = e.formattingValues[l] || e.formattingValues[a]
        } else {
            const a = e.defaultWidth
              , l = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[l] || e.values[a]
        }
        const s = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[s]
    }
}
const Ib = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , $b = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , Bb = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , Ub = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , Wb = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , zb = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , Hb = (e, t) => {
    const n = Number(e)
      , r = n % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , Vb = {
    ordinalNumber: Hb,
    era: Oo({
        values: Ib,
        defaultWidth: "wide"
    }),
    quarter: Oo({
        values: $b,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: Oo({
        values: Bb,
        defaultWidth: "wide"
    }),
    day: Oo({
        values: Ub,
        defaultWidth: "wide"
    }),
    dayPeriod: Oo({
        values: Wb,
        defaultWidth: "wide",
        formattingValues: zb,
        defaultFormattingWidth: "wide"
    })
};
function Lo(e) {
    return (t, n={}) => {
        const r = n.width
          , o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
          , s = t.match(o);
        if (!s)
            return null;
        const a = s[0]
          , l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
          , u = Array.isArray(l) ? qb(l, m => m.test(a)) : Yb(l, m => m.test(a));
        let d;
        d = e.valueCallback ? e.valueCallback(u) : u,
        d = n.valueCallback ? n.valueCallback(d) : d;
        const h = t.slice(a.length);
        return {
            value: d,
            rest: h
        }
    }
}
function Yb(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
            return n
}
function qb(e, t) {
    for (let n = 0; n < e.length; n++)
        if (t(e[n]))
            return n
}
function Qb(e) {
    return (t, n={}) => {
        const r = t.match(e.matchPattern);
        if (!r)
            return null;
        const o = r[0]
          , s = t.match(e.parsePattern);
        if (!s)
            return null;
        let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
        a = n.valueCallback ? n.valueCallback(a) : a;
        const l = t.slice(o.length);
        return {
            value: a,
            rest: l
        }
    }
}
const Gb = /^(\d+)(th|st|nd|rd)?/i
  , Kb = /\d+/i
  , Jb = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , Xb = {
    any: [/^b/i, /^(a|c)/i]
}
  , Zb = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , ej = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , tj = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , nj = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , rj = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , oj = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , sj = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , aj = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , ij = {
    ordinalNumber: Qb({
        matchPattern: Gb,
        parsePattern: Kb,
        valueCallback: e => parseInt(e, 10)
    }),
    era: Lo({
        matchPatterns: Jb,
        defaultMatchWidth: "wide",
        parsePatterns: Xb,
        defaultParseWidth: "any"
    }),
    quarter: Lo({
        matchPatterns: Zb,
        defaultMatchWidth: "wide",
        parsePatterns: ej,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: Lo({
        matchPatterns: tj,
        defaultMatchWidth: "wide",
        parsePatterns: nj,
        defaultParseWidth: "any"
    }),
    day: Lo({
        matchPatterns: rj,
        defaultMatchWidth: "wide",
        parsePatterns: oj,
        defaultParseWidth: "any"
    }),
    dayPeriod: Lo({
        matchPatterns: sj,
        defaultMatchWidth: "any",
        parsePatterns: aj,
        defaultParseWidth: "any"
    })
}
  , lj = {
    code: "en-US",
    formatDistance: Pb,
    formatLong: Rb,
    formatRelative: Fb,
    localize: Vb,
    match: ij,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function uj(e) {
    const t = rt(e);
    return jb(t, Db(t)) + 1
}
function cj(e) {
    const t = rt(e)
      , n = +Ga(t) - +Nb(t);
    return Math.round(n / R0) + 1
}
function F0(e, t) {
    var h, m, v, k;
    const n = rt(e)
      , r = n.getFullYear()
      , o = Ei()
      , s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((k = (v = o.locale) == null ? void 0 : v.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1
      , a = Yn(e, 0);
    a.setFullYear(r + 1, 0, s),
    a.setHours(0, 0, 0, 0);
    const l = gs(a, t)
      , u = Yn(e, 0);
    u.setFullYear(r, 0, s),
    u.setHours(0, 0, 0, 0);
    const d = gs(u, t);
    return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1
}
function dj(e, t) {
    var l, u, d, h;
    const n = Ei()
      , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1
      , o = F0(e, t)
      , s = Yn(e, 0);
    return s.setFullYear(o, 0, r),
    s.setHours(0, 0, 0, 0),
    gs(s, t)
}
function fj(e, t) {
    const n = rt(e)
      , r = +gs(n, t) - +dj(n, t);
    return Math.round(r / R0) + 1
}
function ce(e, t) {
    const n = e < 0 ? "-" : ""
      , r = Math.abs(e).toString().padStart(t, "0");
    return n + r
}
const En = {
    y(e, t) {
        const n = e.getFullYear()
          , r = n > 0 ? n : 1 - n;
        return ce(t === "yy" ? r % 100 : r, t.length)
    },
    M(e, t) {
        const n = e.getMonth();
        return t === "M" ? String(n + 1) : ce(n + 1, 2)
    },
    d(e, t) {
        return ce(e.getDate(), t.length)
    },
    a(e, t) {
        const n = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.toUpperCase();
        case "aaa":
            return n;
        case "aaaaa":
            return n[0];
        case "aaaa":
        default:
            return n === "am" ? "a.m." : "p.m."
        }
    },
    h(e, t) {
        return ce(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return ce(e.getHours(), t.length)
    },
    m(e, t) {
        return ce(e.getMinutes(), t.length)
    },
    s(e, t) {
        return ce(e.getSeconds(), t.length)
    },
    S(e, t) {
        const n = t.length
          , r = e.getMilliseconds()
          , o = Math.trunc(r * Math.pow(10, n - 3));
        return ce(o, t.length)
    }
}
  , Lr = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , um = {
    G: function(e, t, n) {
        const r = e.getFullYear() > 0 ? 1 : 0;
        switch (t) {
        case "G":
        case "GG":
        case "GGG":
            return n.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return n.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return n.era(r, {
                width: "wide"
            })
        }
    },
    y: function(e, t, n) {
        if (t === "yo") {
            const r = e.getFullYear()
              , o = r > 0 ? r : 1 - r;
            return n.ordinalNumber(o, {
                unit: "year"
            })
        }
        return En.y(e, t)
    },
    Y: function(e, t, n, r) {
        const o = F0(e, r)
          , s = o > 0 ? o : 1 - o;
        if (t === "YY") {
            const a = s % 100;
            return ce(a, 2)
        }
        return t === "Yo" ? n.ordinalNumber(s, {
            unit: "year"
        }) : ce(s, t.length)
    },
    R: function(e, t) {
        const n = A0(e);
        return ce(n, t.length)
    },
    u: function(e, t) {
        const n = e.getFullYear();
        return ce(n, t.length)
    },
    Q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(r);
        case "QQ":
            return ce(r, 2);
        case "Qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return n.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return n.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "q":
            return String(r);
        case "qq":
            return ce(r, 2);
        case "qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return n.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return n.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "M":
        case "MM":
            return En.M(e, t);
        case "Mo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return n.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return n.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return n.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "L":
            return String(r + 1);
        case "LL":
            return ce(r + 1, 2);
        case "Lo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return n.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return n.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return n.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, t, n, r) {
        const o = fj(e, r);
        return t === "wo" ? n.ordinalNumber(o, {
            unit: "week"
        }) : ce(o, t.length)
    },
    I: function(e, t, n) {
        const r = cj(e);
        return t === "Io" ? n.ordinalNumber(r, {
            unit: "week"
        }) : ce(r, t.length)
    },
    d: function(e, t, n) {
        return t === "do" ? n.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : En.d(e, t)
    },
    D: function(e, t, n) {
        const r = uj(e);
        return t === "Do" ? n.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : ce(r, t.length)
    },
    E: function(e, t, n) {
        const r = e.getDay();
        switch (t) {
        case "E":
        case "EE":
        case "EEE":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, t, n, r) {
        const o = e.getDay()
          , s = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "e":
            return String(s);
        case "ee":
            return ce(s, 2);
        case "eo":
            return n.ordinalNumber(s, {
                unit: "day"
            });
        case "eee":
            return n.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return n.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return n.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return n.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, t, n, r) {
        const o = e.getDay()
          , s = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "c":
            return String(s);
        case "cc":
            return ce(s, t.length);
        case "co":
            return n.ordinalNumber(s, {
                unit: "day"
            });
        case "ccc":
            return n.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return n.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return n.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return n.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, t, n) {
        const r = e.getDay()
          , o = r === 0 ? 7 : r;
        switch (t) {
        case "i":
            return String(o);
        case "ii":
            return ce(o, t.length);
        case "io":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, t, n) {
        const o = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r === 12 ? o = Lr.noon : r === 0 ? o = Lr.midnight : o = r / 12 >= 1 ? "pm" : "am",
        t) {
        case "b":
        case "bb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r >= 17 ? o = Lr.evening : r >= 12 ? o = Lr.afternoon : r >= 4 ? o = Lr.morning : o = Lr.night,
        t) {
        case "B":
        case "BB":
        case "BBB":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, t, n) {
        if (t === "ho") {
            let r = e.getHours() % 12;
            return r === 0 && (r = 12),
            n.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return En.h(e, t)
    },
    H: function(e, t, n) {
        return t === "Ho" ? n.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : En.H(e, t)
    },
    K: function(e, t, n) {
        const r = e.getHours() % 12;
        return t === "Ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : ce(r, t.length)
    },
    k: function(e, t, n) {
        let r = e.getHours();
        return r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : ce(r, t.length)
    },
    m: function(e, t, n) {
        return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : En.m(e, t)
    },
    s: function(e, t, n) {
        return t === "so" ? n.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : En.s(e, t)
    },
    S: function(e, t) {
        return En.S(e, t)
    },
    X: function(e, t, n) {
        const r = e.getTimezoneOffset();
        if (r === 0)
            return "Z";
        switch (t) {
        case "X":
            return dm(r);
        case "XXXX":
        case "XX":
            return ar(r);
        case "XXXXX":
        case "XXX":
        default:
            return ar(r, ":")
        }
    },
    x: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return dm(r);
        case "xxxx":
        case "xx":
            return ar(r);
        case "xxxxx":
        case "xxx":
        default:
            return ar(r, ":")
        }
    },
    O: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + cm(r, ":");
        case "OOOO":
        default:
            return "GMT" + ar(r, ":")
        }
    },
    z: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + cm(r, ":");
        case "zzzz":
        default:
            return "GMT" + ar(r, ":")
        }
    },
    t: function(e, t, n) {
        const r = Math.trunc(e.getTime() / 1e3);
        return ce(r, t.length)
    },
    T: function(e, t, n) {
        const r = e.getTime();
        return ce(r, t.length)
    }
};
function cm(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = Math.trunc(r / 60)
      , s = r % 60;
    return s === 0 ? n + String(o) : n + String(o) + t + ce(s, 2)
}
function dm(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + ce(Math.abs(e) / 60, 2) : ar(e, t)
}
function ar(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = ce(Math.trunc(r / 60), 2)
      , s = ce(r % 60, 2);
    return n + o + t + s
}
const fm = (e, t) => {
    switch (e) {
    case "P":
        return t.date({
            width: "short"
        });
    case "PP":
        return t.date({
            width: "medium"
        });
    case "PPP":
        return t.date({
            width: "long"
        });
    case "PPPP":
    default:
        return t.date({
            width: "full"
        })
    }
}
  , I0 = (e, t) => {
    switch (e) {
    case "p":
        return t.time({
            width: "short"
        });
    case "pp":
        return t.time({
            width: "medium"
        });
    case "ppp":
        return t.time({
            width: "long"
        });
    case "pppp":
    default:
        return t.time({
            width: "full"
        })
    }
}
  , mj = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || []
      , r = n[1]
      , o = n[2];
    if (!o)
        return fm(e, t);
    let s;
    switch (r) {
    case "P":
        s = t.dateTime({
            width: "short"
        });
        break;
    case "PP":
        s = t.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        s = t.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        s = t.dateTime({
            width: "full"
        });
        break
    }
    return s.replace("{{date}}", fm(r, t)).replace("{{time}}", I0(o, t))
}
  , hj = {
    p: I0,
    P: mj
}
  , pj = /^D+$/
  , gj = /^Y+$/
  , yj = ["D", "DD", "YY", "YYYY"];
function vj(e) {
    return pj.test(e)
}
function xj(e) {
    return gj.test(e)
}
function wj(e, t, n) {
    const r = bj(e, t, n);
    if (console.warn(r),
    yj.includes(e))
        throw new RangeError(r)
}
function bj(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const jj = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , Nj = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , kj = /^'([^]*?)'?$/
  , Sj = /''/g
  , Ej = /[a-zA-Z]/;
function ve(e, t, n) {
    var h, m, v, k;
    const r = Ei()
      , o = r.locale ?? lj
      , s = r.firstWeekContainsDate ?? ((m = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1
      , a = r.weekStartsOn ?? ((k = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : k.weekStartsOn) ?? 0
      , l = rt(e);
    if (!Cb(l))
        throw new RangeError("Invalid time value");
    let u = t.match(Nj).map(x => {
        const N = x[0];
        if (N === "p" || N === "P") {
            const S = hj[N];
            return S(x, o.formatLong)
        }
        return x
    }
    ).join("").match(jj).map(x => {
        if (x === "''")
            return {
                isToken: !1,
                value: "'"
            };
        const N = x[0];
        if (N === "'")
            return {
                isToken: !1,
                value: Cj(x)
            };
        if (um[N])
            return {
                isToken: !0,
                value: x
            };
        if (N.match(Ej))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + N + "`");
        return {
            isToken: !1,
            value: x
        }
    }
    );
    o.localize.preprocessor && (u = o.localize.preprocessor(l, u));
    const d = {
        firstWeekContainsDate: s,
        weekStartsOn: a,
        locale: o
    };
    return u.map(x => {
        if (!x.isToken)
            return x.value;
        const N = x.value;
        (xj(N) || vj(N)) && wj(N, t, String(e));
        const S = um[N[0]];
        return S(l, N, o.localize, d)
    }
    ).join("")
}
function Cj(e) {
    const t = e.match(kj);
    return t ? t[1].replace(Sj, "'") : e
}
function Tj(e) {
    return rt(e).getDay()
}
function Dj(e) {
    return +rt(e) > Date.now()
}
function _j(e) {
    return Sb(e, kb(e))
}
const Cn = ({icon: e, title: t, value: n, subtitle: r, color: o="blue"}) => {
    const s = {
        blue: "from-blue-500 to-blue-600",
        green: "from-green-500 to-green-600",
        purple: "from-purple-500 to-purple-600",
        orange: "from-orange-500 to-orange-600",
        red: "from-red-500 to-red-600"
    };
    return i.jsx("div", {
        className: "bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-200",
        children: i.jsxs("div", {
            className: "flex items-center",
            children: [i.jsx("div", {
                className: `flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${s[o]} shadow-lg`,
                children: i.jsx(e, {
                    className: "h-8 w-8 text-white"
                })
            }), i.jsxs("div", {
                className: "ml-4 flex-1",
                children: [i.jsx("div", {
                    className: "text-sm font-medium text-gray-500 uppercase tracking-wider",
                    children: t
                }), i.jsx("div", {
                    className: "text-2xl font-bold text-gray-900",
                    children: n
                }), r && i.jsx("div", {
                    className: "text-sm text-gray-600",
                    children: r
                })]
            })]
        })
    })
}
  , Mo = ({icon: e, title: t, description: n, link: r, color: o="blue"}) => {
    const s = {
        blue: "hover:from-blue-50 hover:to-blue-100 border-blue-200",
        green: "hover:from-green-50 hover:to-green-100 border-green-200",
        purple: "hover:from-purple-50 hover:to-purple-100 border-purple-200",
        orange: "hover:from-orange-50 hover:to-orange-100 border-orange-200"
    };
    return i.jsxs(s0, {
        to: r,
        className: `block bg-white rounded-2xl shadow-lg p-6 border-2 ${s[o]} bg-gradient-to-br hover:shadow-xl transform hover:scale-105 transition-all duration-200`,
        children: [i.jsxs("div", {
            className: "flex items-center mb-4",
            children: [i.jsx(e, {
                className: `h-8 w-8 text-${o}-600`
            }), i.jsx("h3", {
                className: "ml-3 text-lg font-semibold text-gray-900",
                children: t
            })]
        }), i.jsx("p", {
            className: "text-gray-600",
            children: n
        })]
    })
}
;
function Pj() {
    const [e,t] = w.useState({
        totalSessions: 0,
        todaySessions: 0,
        totalPromos: 0,
        myPresences: 0
    })
      , [n,r] = w.useState(!0)
      , [o,s] = w.useState([])
      , a = ed()
      , l = i0();
    return w.useEffect( () => {
        (async () => {
            try {
                const [d,h] = await Promise.all([M0(), Si()])
                  , m = new Date
                  , v = d.filter(k => _j(new Date(k.date)));
                if (s(v),
                a)
                    t({
                        totalSessions: d.length,
                        todaySessions: v.length,
                        totalPromos: h.count || 0,
                        upcomingSessions: d.filter(k => Dj(new Date(k.date))).length
                    });
                else if (l)
                    try {
                        const k = await rb(l);
                        t({
                            totalSessions: d.length,
                            todaySessions: v.length,
                            myPresences: k.length,
                            attendanceRate: k.length > 0 ? Math.round(k.filter(x => x.is_present).length / k.length * 100) : 0
                        })
                    } catch (k) {
                        console.error("Error fetching student presences:", k)
                    }
            } catch (d) {
                console.error("Error loading dashboard data:", d)
            } finally {
                r(!1)
            }
        }
        )()
    }
    , [a, l]),
    n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20",
        children: i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("div", {
                className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }), i.jsx("p", {
                className: "mt-4 text-gray-600",
                children: "Loading dashboard..."
            })]
        })
    }) : i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20",
        children: [i.jsxs("div", {
            className: "relative overflow-hidden",
            children: [i.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"
            }), i.jsx("div", {
                className: "relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",
                children: i.jsxs("div", {
                    className: "text-center",
                    children: [i.jsxs("h1", {
                        className: "text-4xl md:text-6xl font-extrabold text-white mb-6",
                        children: ["Welcome to ", i.jsx("span", {
                            className: "text-yellow-300",
                            children: "Badger"
                        })]
                    }), i.jsx("p", {
                        className: "text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8",
                        children: a ? "Efficiently manage student attendance, sessions, and promotions." : "Track your attendance and stay updated with your academic progress"
                    }), i.jsx("div", {
                        className: "flex justify-center",
                        children: i.jsxs("div", {
                            className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-gray-50 shadow-lg transform hover:scale-105 transition-all duration-200",
                            children: [i.jsx(rw, {
                                className: "h-6 w-6 mr-2"
                            }), "Epitech Student Tracking System"]
                        })
                    })]
                })
            })]
        }), i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [i.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                children: a ? i.jsxs(i.Fragment, {
                    children: [i.jsx(Cn, {
                        icon: ml,
                        title: "Total Sessions",
                        value: e.totalSessions,
                        subtitle: "All sessions created",
                        color: "blue"
                    }), i.jsx(Cn, {
                        icon: qf,
                        title: "Today's Sessions",
                        value: e.todaySessions,
                        subtitle: "Sessions scheduled today",
                        color: "green"
                    }), i.jsx(Cn, {
                        icon: ta,
                        title: "Promotions",
                        value: e.totalPromos,
                        subtitle: "Active promotions",
                        color: "purple"
                    }), i.jsx(Cn, {
                        icon: hl,
                        title: "Upcoming Sessions",
                        value: e.upcomingSessions,
                        subtitle: "Future sessions",
                        color: "orange"
                    })]
                }) : i.jsxs(i.Fragment, {
                    children: [i.jsx(Cn, {
                        icon: ml,
                        title: "Total Sessions",
                        value: e.totalSessions,
                        subtitle: "Available sessions",
                        color: "blue"
                    }), i.jsx(Cn, {
                        icon: qf,
                        title: "Today's Sessions",
                        value: e.todaySessions,
                        subtitle: "Sessions today",
                        color: "green"
                    }), i.jsx(Cn, {
                        icon: ta,
                        title: "My Presences",
                        value: e.myPresences,
                        subtitle: "Recorded attendances",
                        color: "purple"
                    }), i.jsx(Cn, {
                        icon: hl,
                        title: "Attendance Rate",
                        value: `${e.attendanceRate}%`,
                        subtitle: "Overall attendance",
                        color: "orange"
                    })]
                })
            }), o.length > 0 && i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900 mb-6",
                    children: "Today's Sessions"
                }), i.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: o.map(u => i.jsxs("div", {
                        className: "bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500",
                        children: [i.jsxs("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [i.jsxs("div", {
                                children: [i.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: u.promo.toUpperCase()
                                }), i.jsxs("p", {
                                    className: "text-sm text-gray-600",
                                    children: [u.sessionType === "morning" ? "🌅 Morning" : "🌇 Afternoon", " Session"]
                                })]
                            }), i.jsx("div", {
                                className: "text-right",
                                children: i.jsxs("div", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: [u.startTime, " - ", u.endTime]
                                })
                            })]
                        }), a && i.jsx(s0, {
                            to: `/sessions/${u.id}/presences`,
                            className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200",
                            children: "Manage Presences"
                        })]
                    }, u.id))
                })]
            }), i.jsxs("div", {
                className: "mb-12",
                children: [i.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900 mb-6",
                    children: "Quick Actions"
                }), i.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: a ? i.jsxs(i.Fragment, {
                        children: [i.jsx(Mo, {
                            icon: ml,
                            title: "Create Session",
                            description: "Create new training sessions for multiple promotions and dates",
                            link: "/create-session",
                            color: "blue"
                        }), i.jsx(Mo, {
                            icon: cw,
                            title: "Manage Sessions",
                            description: "View, edit, and delete existing sessions",
                            link: "/manage-sessions",
                            color: "green"
                        }), i.jsx(Mo, {
                            icon: ta,
                            title: "Manage Users",
                            description: "Update student information and manage user accounts",
                            link: "/manage-users",
                            color: "purple"
                        }), i.jsx(Mo, {
                            icon: hl,
                            title: "View Calendar",
                            description: "Browse sessions by date and manage schedules",
                            link: "/calendar",
                            color: "orange"
                        })]
                    }) : i.jsx(Mo, {
                        icon: ta,
                        title: "My Presences",
                        description: "View your attendance history and session records",
                        link: "/presences",
                        color: "blue"
                    })
                })]
            })]
        })]
    })
}
const $0 = typeof document < "u" ? R.useLayoutEffect : () => {}
;
function Oj(e) {
    const t = w.useRef(null);
    return $0( () => {
        t.current = e
    }
    , [e]),
    w.useCallback( (...n) => {
        const r = t.current;
        return r == null ? void 0 : r(...n)
    }
    , [])
}
const Xn = e => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document
}
  , fr = e => e && "window"in e && e.window === e ? e : Xn(e).defaultView || window;
function Lj(e) {
    return e !== null && typeof e == "object" && "nodeType"in e && typeof e.nodeType == "number"
}
function Mj(e) {
    return Lj(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host"in e
}
let Rj = !1;
function od() {
    return Rj
}
function B0(e, t) {
    if (!od())
        return t && e ? e.contains(t) : !1;
    if (!e || !t)
        return !1;
    let n = t;
    for (; n !== null; ) {
        if (n === e)
            return !0;
        n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Mj(n) ? n = n.host : n = n.parentNode
    }
    return !1
}
const Ou = (e=document) => {
    var t;
    if (!od())
        return e.activeElement;
    let n = e.activeElement;
    for (; n && "shadowRoot"in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); )
        n = n.shadowRoot.activeElement;
    return n
}
;
function U0(e) {
    return od() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
}
function W0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = W0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Ci() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = W0(e)) && (r && (r += " "),
        r += t);
    return r
}
function Aj(e) {
    var t;
    return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some(n => e.test(n.brand))) || e.test(window.navigator.userAgent)
}
function Fj(e) {
    var t;
    return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1
}
function z0(e) {
    let t = null;
    return () => (t == null && (t = e()),
    t)
}
const Ij = z0(function() {
    return Fj(/^Mac/i)
})
  , $j = z0(function() {
    return Aj(/Android/i)
});
function H0() {
    let e = w.useRef(new Map)
      , t = w.useCallback( (o, s, a, l) => {
        let u = l != null && l.once ? (...d) => {
            e.current.delete(a),
            a(...d)
        }
        : a;
        e.current.set(a, {
            type: s,
            eventTarget: o,
            fn: u,
            options: l
        }),
        o.addEventListener(s, u, l)
    }
    , [])
      , n = w.useCallback( (o, s, a, l) => {
        var u;
        let d = ((u = e.current.get(a)) === null || u === void 0 ? void 0 : u.fn) || a;
        o.removeEventListener(s, d, l),
        e.current.delete(a)
    }
    , [])
      , r = w.useCallback( () => {
        e.current.forEach( (o, s) => {
            n(o.eventTarget, o.type, s, o.options)
        }
        )
    }
    , [n]);
    return w.useEffect( () => r, [r]),
    {
        addGlobalListener: t,
        removeGlobalListener: n,
        removeAllGlobalListeners: r
    }
}
function Bj(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : $j() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}
function V0(e) {
    let t = e;
    return t.nativeEvent = e,
    t.isDefaultPrevented = () => t.defaultPrevented,
    t.isPropagationStopped = () => t.cancelBubble,
    t.persist = () => {}
    ,
    t
}
function Uj(e, t) {
    Object.defineProperty(e, "target", {
        value: t
    }),
    Object.defineProperty(e, "currentTarget", {
        value: t
    })
}
function Y0(e) {
    let t = w.useRef({
        isFocused: !1,
        observer: null
    });
    $0( () => {
        const r = t.current;
        return () => {
            r.observer && (r.observer.disconnect(),
            r.observer = null)
        }
    }
    , []);
    let n = Oj(r => {
        e == null || e(r)
    }
    );
    return w.useCallback(r => {
        if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let o = r.target
              , s = a => {
                if (t.current.isFocused = !1,
                o.disabled) {
                    let l = V0(a);
                    n(l)
                }
                t.current.observer && (t.current.observer.disconnect(),
                t.current.observer = null)
            }
            ;
            o.addEventListener("focusout", s, {
                once: !0
            }),
            t.current.observer = new MutationObserver( () => {
                if (t.current.isFocused && o.disabled) {
                    var a;
                    (a = t.current.observer) === null || a === void 0 || a.disconnect();
                    let l = o === document.activeElement ? null : document.activeElement;
                    o.dispatchEvent(new FocusEvent("blur",{
                        relatedTarget: l
                    })),
                    o.dispatchEvent(new FocusEvent("focusout",{
                        bubbles: !0,
                        relatedTarget: l
                    }))
                }
            }
            ),
            t.current.observer.observe(o, {
                attributes: !0,
                attributeFilter: ["disabled"]
            })
        }
    }
    , [n])
}
let Wj = !1
  , Ts = null
  , Lu = new Set
  , Go = new Map
  , Nr = !1
  , Mu = !1;
const zj = {
    Tab: !0,
    Escape: !0
};
function sd(e, t) {
    for (let n of Lu)
        n(e, t)
}
function Hj(e) {
    return !(e.metaKey || !Ij() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
}
function Ja(e) {
    Nr = !0,
    Hj(e) && (Ts = "keyboard",
    sd("keyboard", e))
}
function ro(e) {
    Ts = "pointer",
    (e.type === "mousedown" || e.type === "pointerdown") && (Nr = !0,
    sd("pointer", e))
}
function q0(e) {
    Bj(e) && (Nr = !0,
    Ts = "virtual")
}
function Q0(e) {
    e.target === window || e.target === document || Wj || !e.isTrusted || (!Nr && !Mu && (Ts = "virtual",
    sd("virtual", e)),
    Nr = !1,
    Mu = !1)
}
function G0() {
    Nr = !1,
    Mu = !0
}
function Ru(e) {
    if (typeof window > "u" || typeof document > "u" || Go.get(fr(e)))
        return;
    const t = fr(e)
      , n = Xn(e);
    let r = t.HTMLElement.prototype.focus;
    t.HTMLElement.prototype.focus = function() {
        Nr = !0,
        r.apply(this, arguments)
    }
    ,
    n.addEventListener("keydown", Ja, !0),
    n.addEventListener("keyup", Ja, !0),
    n.addEventListener("click", q0, !0),
    t.addEventListener("focus", Q0, !0),
    t.addEventListener("blur", G0, !1),
    typeof PointerEvent < "u" && (n.addEventListener("pointerdown", ro, !0),
    n.addEventListener("pointermove", ro, !0),
    n.addEventListener("pointerup", ro, !0)),
    t.addEventListener("beforeunload", () => {
        K0(e)
    }
    , {
        once: !0
    }),
    Go.set(t, {
        focus: r
    })
}
const K0 = (e, t) => {
    const n = fr(e)
      , r = Xn(e);
    t && r.removeEventListener("DOMContentLoaded", t),
    Go.has(n) && (n.HTMLElement.prototype.focus = Go.get(n).focus,
    r.removeEventListener("keydown", Ja, !0),
    r.removeEventListener("keyup", Ja, !0),
    r.removeEventListener("click", q0, !0),
    n.removeEventListener("focus", Q0, !0),
    n.removeEventListener("blur", G0, !1),
    typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", ro, !0),
    r.removeEventListener("pointermove", ro, !0),
    r.removeEventListener("pointerup", ro, !0)),
    Go.delete(n))
}
;
function Vj(e) {
    const t = Xn(e);
    let n;
    return t.readyState !== "loading" ? Ru(e) : (n = () => {
        Ru(e)
    }
    ,
    t.addEventListener("DOMContentLoaded", n)),
    () => K0(e, n)
}
typeof document < "u" && Vj();
function J0() {
    return Ts !== "pointer"
}
const Yj = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function qj(e, t, n) {
    let r = Xn(n == null ? void 0 : n.target);
    const o = typeof window < "u" ? fr(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement
      , s = typeof window < "u" ? fr(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement
      , a = typeof window < "u" ? fr(n == null ? void 0 : n.target).HTMLElement : HTMLElement
      , l = typeof window < "u" ? fr(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return e = e || r.activeElement instanceof o && !Yj.has(r.activeElement.type) || r.activeElement instanceof s || r.activeElement instanceof a && r.activeElement.isContentEditable,
    !(e && t === "keyboard" && n instanceof l && !zj[n.key])
}
function Qj(e, t, n) {
    Ru(),
    w.useEffect( () => {
        let r = (o, s) => {
            qj(!!(n != null && n.isTextInput), o, s) && e(J0())
        }
        ;
        return Lu.add(r),
        () => {
            Lu.delete(r)
        }
    }
    , t)
}
function Gj(e) {
    let {isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o} = e;
    const s = w.useCallback(u => {
        if (u.target === u.currentTarget)
            return r && r(u),
            o && o(!1),
            !0
    }
    , [r, o])
      , a = Y0(s)
      , l = w.useCallback(u => {
        const d = Xn(u.target)
          , h = d ? Ou(d) : Ou();
        u.target === u.currentTarget && h === U0(u.nativeEvent) && (n && n(u),
        o && o(!0),
        a(u))
    }
    , [o, n, a]);
    return {
        focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: !t && (r || o) ? s : void 0
        }
    }
}
function Kj(e) {
    let {isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o} = e
      , s = w.useRef({
        isFocusWithin: !1
    })
      , {addGlobalListener: a, removeAllGlobalListeners: l} = H0()
      , u = w.useCallback(m => {
        m.currentTarget.contains(m.target) && s.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (s.current.isFocusWithin = !1,
        l(),
        n && n(m),
        o && o(!1))
    }
    , [n, o, s, l])
      , d = Y0(u)
      , h = w.useCallback(m => {
        if (!m.currentTarget.contains(m.target))
            return;
        const v = Xn(m.target)
          , k = Ou(v);
        if (!s.current.isFocusWithin && k === U0(m.nativeEvent)) {
            r && r(m),
            o && o(!0),
            s.current.isFocusWithin = !0,
            d(m);
            let x = m.currentTarget;
            a(v, "focus", N => {
                if (s.current.isFocusWithin && !B0(x, N.target)) {
                    let S = new v.defaultView.FocusEvent("blur",{
                        relatedTarget: N.target
                    });
                    Uj(S, x);
                    let b = V0(S);
                    u(b)
                }
            }
            , {
                capture: !0
            })
        }
    }
    , [r, o, d, a, u]);
    return t ? {
        focusWithinProps: {
            onFocus: void 0,
            onBlur: void 0
        }
    } : {
        focusWithinProps: {
            onFocus: h,
            onBlur: u
        }
    }
}
let Au = !1
  , xl = 0;
function Jj() {
    Au = !0,
    setTimeout( () => {
        Au = !1
    }
    , 50)
}
function mm(e) {
    e.pointerType === "touch" && Jj()
}
function Xj() {
    if (!(typeof document > "u"))
        return typeof PointerEvent < "u" && document.addEventListener("pointerup", mm),
        xl++,
        () => {
            xl--,
            !(xl > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", mm)
        }
}
function Zj(e) {
    let {onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o} = e
      , [s,a] = w.useState(!1)
      , l = w.useRef({
        isHovered: !1,
        ignoreEmulatedMouseEvents: !1,
        pointerType: "",
        target: null
    }).current;
    w.useEffect(Xj, []);
    let {addGlobalListener: u, removeAllGlobalListeners: d} = H0()
      , {hoverProps: h, triggerHoverEnd: m} = w.useMemo( () => {
        let v = (N, S) => {
            if (l.pointerType = S,
            o || S === "touch" || l.isHovered || !N.currentTarget.contains(N.target))
                return;
            l.isHovered = !0;
            let b = N.currentTarget;
            l.target = b,
            u(Xn(N.target), "pointerover", y => {
                l.isHovered && l.target && !B0(l.target, y.target) && k(y, y.pointerType)
            }
            , {
                capture: !0
            }),
            t && t({
                type: "hoverstart",
                target: b,
                pointerType: S
            }),
            n && n(!0),
            a(!0)
        }
          , k = (N, S) => {
            let b = l.target;
            l.pointerType = "",
            l.target = null,
            !(S === "touch" || !l.isHovered || !b) && (l.isHovered = !1,
            d(),
            r && r({
                type: "hoverend",
                target: b,
                pointerType: S
            }),
            n && n(!1),
            a(!1))
        }
          , x = {};
        return typeof PointerEvent < "u" && (x.onPointerEnter = N => {
            Au && N.pointerType === "mouse" || v(N, N.pointerType)
        }
        ,
        x.onPointerLeave = N => {
            !o && N.currentTarget.contains(N.target) && k(N, N.pointerType)
        }
        ),
        {
            hoverProps: x,
            triggerHoverEnd: k
        }
    }
    , [t, n, r, o, l, u, d]);
    return w.useEffect( () => {
        o && m({
            currentTarget: l.target
        }, l.pointerType)
    }
    , [o]),
    {
        hoverProps: h,
        isHovered: s
    }
}
function eN(e={}) {
    let {autoFocus: t=!1, isTextInput: n, within: r} = e
      , o = w.useRef({
        isFocused: !1,
        isFocusVisible: t || J0()
    })
      , [s,a] = w.useState(!1)
      , [l,u] = w.useState( () => o.current.isFocused && o.current.isFocusVisible)
      , d = w.useCallback( () => u(o.current.isFocused && o.current.isFocusVisible), [])
      , h = w.useCallback(k => {
        o.current.isFocused = k,
        a(k),
        d()
    }
    , [d]);
    Qj(k => {
        o.current.isFocusVisible = k,
        d()
    }
    , [], {
        isTextInput: n
    });
    let {focusProps: m} = Gj({
        isDisabled: r,
        onFocusChange: h
    })
      , {focusWithinProps: v} = Kj({
        isDisabled: !r,
        onFocusWithinChange: h
    });
    return {
        isFocused: s,
        isFocusVisible: l,
        focusProps: r ? v : m
    }
}
var tN = Object.defineProperty
  , nN = (e, t, n) => t in e ? tN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , wl = (e, t, n) => (nN(e, typeof t != "symbol" ? t + "" : t, n),
n);
let rN = class {
    constructor() {
        wl(this, "current", this.detect()),
        wl(this, "handoffState", "pending"),
        wl(this, "currentId", 0)
    }
    set(t) {
        this.current !== t && (this.handoffState = "pending",
        this.currentId = 0,
        this.current = t)
    }
    reset() {
        this.set(this.detect())
    }
    nextId() {
        return ++this.currentId
    }
    get isServer() {
        return this.current === "server"
    }
    get isClient() {
        return this.current === "client"
    }
    detect() {
        return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
    handoff() {
        this.handoffState === "pending" && (this.handoffState = "complete")
    }
    get isHandoffComplete() {
        return this.handoffState === "complete"
    }
}
  , X0 = new rN;
function Z0(e) {
    var t, n;
    return X0.isServer ? null : e ? "ownerDocument"in e ? e.ownerDocument : "current"in e ? (n = (t = e.current) == null ? void 0 : t.ownerDocument) != null ? n : document : null : document
}
function oN(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout( () => {
        throw t
    }
    ))
}
function Ti() {
    let e = []
      , t = {
        addEventListener(n, r, o, s) {
            return n.addEventListener(r, o, s),
            t.add( () => n.removeEventListener(r, o, s))
        },
        requestAnimationFrame(...n) {
            let r = requestAnimationFrame(...n);
            return t.add( () => cancelAnimationFrame(r))
        },
        nextFrame(...n) {
            return t.requestAnimationFrame( () => t.requestAnimationFrame(...n))
        },
        setTimeout(...n) {
            let r = setTimeout(...n);
            return t.add( () => clearTimeout(r))
        },
        microTask(...n) {
            let r = {
                current: !0
            };
            return oN( () => {
                r.current && n[0]()
            }
            ),
            t.add( () => {
                r.current = !1
            }
            )
        },
        style(n, r, o) {
            let s = n.style.getPropertyValue(r);
            return Object.assign(n.style, {
                [r]: o
            }),
            this.add( () => {
                Object.assign(n.style, {
                    [r]: s
                })
            }
            )
        },
        group(n) {
            let r = Ti();
            return n(r),
            this.add( () => r.dispose())
        },
        add(n) {
            return e.includes(n) || e.push(n),
            () => {
                let r = e.indexOf(n);
                if (r >= 0)
                    for (let o of e.splice(r, 1))
                        o()
            }
        },
        dispose() {
            for (let n of e.splice(0))
                n()
        }
    };
    return t
}
function eg() {
    let[e] = w.useState(Ti);
    return w.useEffect( () => () => e.dispose(), [e]),
    e
}
let tg = (e, t) => {
    X0.isServer ? w.useEffect(e, t) : w.useLayoutEffect(e, t)
}
;
function sN(e) {
    let t = w.useRef(e);
    return tg( () => {
        t.current = e
    }
    , [e]),
    t
}
let hn = function(e) {
    let t = sN(e);
    return R.useCallback( (...n) => t.current(...n), [t])
};
function aN(e) {
    let t = e.width / 2
      , n = e.height / 2;
    return {
        top: e.clientY - n,
        right: e.clientX + t,
        bottom: e.clientY + n,
        left: e.clientX - t
    }
}
function iN(e, t) {
    return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom)
}
function lN({disabled: e=!1}={}) {
    let t = w.useRef(null)
      , [n,r] = w.useState(!1)
      , o = eg()
      , s = hn( () => {
        t.current = null,
        r(!1),
        o.dispose()
    }
    )
      , a = hn(l => {
        if (o.dispose(),
        t.current === null) {
            t.current = l.currentTarget,
            r(!0);
            {
                let u = Z0(l.currentTarget);
                o.addEventListener(u, "pointerup", s, !1),
                o.addEventListener(u, "pointermove", d => {
                    if (t.current) {
                        let h = aN(d);
                        r(iN(h, t.current.getBoundingClientRect()))
                    }
                }
                , !1),
                o.addEventListener(u, "pointercancel", s, !1)
            }
        }
    }
    );
    return {
        pressed: n,
        pressProps: e ? {} : {
            onPointerDown: a,
            onPointerUp: s,
            onClick: s
        }
    }
}
function hm(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
function Ds(e, t, ...n) {
    if (e in t) {
        let o = t[e];
        return typeof o == "function" ? o(...n) : o
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o => `"${o}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ds),
    r
}
var Fu = (e => (e[e.None = 0] = "None",
e[e.RenderStrategy = 1] = "RenderStrategy",
e[e.Static = 2] = "Static",
e))(Fu || {})
  , uN = (e => (e[e.Unmount = 0] = "Unmount",
e[e.Hidden = 1] = "Hidden",
e))(uN || {});
function ad() {
    let e = dN();
    return w.useCallback(t => cN({
        mergeRefs: e,
        ...t
    }), [e])
}
function cN({ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: s=!0, name: a, mergeRefs: l}) {
    l = l ?? fN;
    let u = ng(t, e);
    if (s)
        return na(u, n, r, a, l);
    let d = o ?? 0;
    if (d & 2) {
        let {static: h=!1, ...m} = u;
        if (h)
            return na(m, n, r, a, l)
    }
    if (d & 1) {
        let {unmount: h=!0, ...m} = u;
        return Ds(h ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return na({
                    ...m,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, a, l)
            }
        })
    }
    return na(u, n, r, a, l)
}
function na(e, t={}, n, r, o) {
    let {as: s=n, children: a, refName: l="ref", ...u} = bl(e, ["unmount", "static"])
      , d = e.ref !== void 0 ? {
        [l]: e.ref
    } : {}
      , h = typeof a == "function" ? a(t) : a;
    "className"in u && u.className && typeof u.className == "function" && (u.className = u.className(t)),
    u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
    let m = {};
    if (t) {
        let v = !1
          , k = [];
        for (let[x,N] of Object.entries(t))
            typeof N == "boolean" && (v = !0),
            N === !0 && k.push(x.replace(/([A-Z])/g, S => `-${S.toLowerCase()}`));
        if (v) {
            m["data-headlessui-state"] = k.join(" ");
            for (let x of k)
                m[`data-${x}`] = ""
        }
    }
    if (s === w.Fragment && (Object.keys(Mr(u)).length > 0 || Object.keys(Mr(m)).length > 0))
        if (!w.isValidElement(h) || Array.isArray(h) && h.length > 1) {
            if (Object.keys(Mr(u)).length > 0)
                throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Mr(u)).concat(Object.keys(Mr(m))).map(v => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(v => `  - ${v}`).join(`
`)].join(`
`))
        } else {
            let v = h.props
              , k = v == null ? void 0 : v.className
              , x = typeof k == "function" ? (...b) => hm(k(...b), u.className) : hm(k, u.className)
              , N = x ? {
                className: x
            } : {}
              , S = ng(h.props, Mr(bl(u, ["ref"])));
            for (let b in m)
                b in S && delete m[b];
            return w.cloneElement(h, Object.assign({}, S, m, d, {
                ref: o(mN(h), d.ref)
            }, N))
        }
    return w.createElement(s, Object.assign({}, bl(u, ["ref"]), s !== w.Fragment && d, s !== w.Fragment && m), h)
}
function dN() {
    let e = w.useRef([])
      , t = w.useCallback(n => {
        for (let r of e.current)
            r != null && (typeof r == "function" ? r(n) : r.current = n)
    }
    , []);
    return (...n) => {
        if (!n.every(r => r == null))
            return e.current = n,
            t
    }
}
function fN(...e) {
    return e.every(t => t == null) ? void 0 : t => {
        for (let n of e)
            n != null && (typeof n == "function" ? n(t) : n.current = t)
    }
}
function ng(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let r of e)
        for (let o in r)
            o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []),
            n[o].push(r[o])) : t[o] = r[o];
    if (t.disabled || t["aria-disabled"])
        for (let r in n)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [o => {
                var s;
                return (s = o == null ? void 0 : o.preventDefault) == null ? void 0 : s.call(o)
            }
            ]);
    for (let r in n)
        Object.assign(t, {
            [r](o, ...s) {
                let a = n[r];
                for (let l of a) {
                    if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent)instanceof Event) && o.defaultPrevented)
                        return;
                    l(o, ...s)
                }
            }
        });
    return t
}
function pm(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let r of e)
        for (let o in r)
            o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []),
            n[o].push(r[o])) : t[o] = r[o];
    for (let r in n)
        Object.assign(t, {
            [r](...o) {
                let s = n[r];
                for (let a of s)
                    a == null || a(...o)
            }
        });
    return t
}
function id(e) {
    var t;
    return Object.assign(w.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}
function Mr(e) {
    let t = Object.assign({}, e);
    for (let n in t)
        t[n] === void 0 && delete t[n];
    return t
}
function bl(e, t=[]) {
    let n = Object.assign({}, e);
    for (let r of t)
        r in n && delete n[r];
    return n
}
function mN(e) {
    return R.version.split(".")[0] >= "19" ? e.props.ref : e.ref
}
function hN(e) {
    return typeof e != "object" || e === null ? !1 : "nodeType"in e
}
function rg(e) {
    return hN(e) && "tagName"in e
}
function og(e) {
    return rg(e) && "accessKey"in e
}
function gm(e) {
    return rg(e) && "tabIndex"in e
}
function pN(e) {
    return og(e) && e.nodeName === "FIELDSET"
}
function sg(e) {
    return og(e) && e.nodeName === "LEGEND"
}
function gN(e) {
    let t = e.parentElement
      , n = null;
    for (; t && !pN(t); )
        sg(t) && (n = t),
        t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && yN(n) ? !1 : r
}
function yN(e) {
    if (!e)
        return !1;
    let t = e.previousElementSibling;
    for (; t !== null; ) {
        if (sg(t))
            return !1;
        t = t.previousElementSibling
    }
    return !0
}
let ag = Symbol();
function vN(e, t=!0) {
    return Object.assign(e, {
        [ag]: t
    })
}
function ld(...e) {
    let t = w.useRef(e);
    w.useEffect( () => {
        t.current = e
    }
    , [e]);
    let n = hn(r => {
        for (let o of t.current)
            o != null && (typeof o == "function" ? o(r) : o.current = r)
    }
    );
    return e.every(r => r == null || (r == null ? void 0 : r[ag])) ? void 0 : n
}
var Ar = (e => (e.Space = " ",
e.Enter = "Enter",
e.Escape = "Escape",
e.Backspace = "Backspace",
e.Delete = "Delete",
e.ArrowLeft = "ArrowLeft",
e.ArrowUp = "ArrowUp",
e.ArrowRight = "ArrowRight",
e.ArrowDown = "ArrowDown",
e.Home = "Home",
e.End = "End",
e.PageUp = "PageUp",
e.PageDown = "PageDown",
e.Tab = "Tab",
e))(Ar || {});
let xN = w.createContext( () => {}
);
function wN({value: e, children: t}) {
    return R.createElement(xN.Provider, {
        value: e
    }, t)
}
function bN(e, t) {
    return w.useMemo( () => {
        var n;
        if (e.type)
            return e.type;
        let r = (n = e.as) != null ? n : "button";
        if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type"))
            return "button"
    }
    , [e.type, e.as, t])
}
function jN(e=0) {
    let[t,n] = w.useState(e)
      , r = w.useCallback(u => n(u), [t])
      , o = w.useCallback(u => n(d => d | u), [t])
      , s = w.useCallback(u => (t & u) === u, [t])
      , a = w.useCallback(u => n(d => d & ~u), [n])
      , l = w.useCallback(u => n(d => d ^ u), [n]);
    return {
        flags: t,
        setFlag: r,
        addFlag: o,
        hasFlag: s,
        removeFlag: a,
        toggleFlag: l
    }
}
var NN = {}, ym, vm;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((ym = process == null ? void 0 : NN) == null ? void 0 : ym.NODE_ENV) === "test" && typeof ((vm = Element == null ? void 0 : Element.prototype) == null ? void 0 : vm.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
    return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)),
    []
}
);
var kN = (e => (e[e.None = 0] = "None",
e[e.Closed = 1] = "Closed",
e[e.Enter = 2] = "Enter",
e[e.Leave = 4] = "Leave",
e))(kN || {});
function SN(e) {
    let t = {};
    for (let n in e)
        e[n] === !0 && (t[`data-${n}`] = "");
    return t
}
function EN(e, t, n, r) {
    let[o,s] = w.useState(n)
      , {hasFlag: a, addFlag: l, removeFlag: u} = jN(e && o ? 3 : 0)
      , d = w.useRef(!1)
      , h = w.useRef(!1)
      , m = eg();
    return tg( () => {
        var v;
        if (e) {
            if (n && s(!0),
            !t) {
                n && l(3);
                return
            }
            return (v = void 0) == null || v.call(r, n),
            CN(t, {
                inFlight: d,
                prepare() {
                    h.current ? h.current = !1 : h.current = d.current,
                    d.current = !0,
                    !h.current && (n ? (l(3),
                    u(4)) : (l(4),
                    u(2)))
                },
                run() {
                    h.current ? n ? (u(3),
                    l(4)) : (u(4),
                    l(3)) : n ? u(1) : l(1)
                },
                done() {
                    var k;
                    h.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (d.current = !1,
                    u(7),
                    n || s(!1),
                    (k = void 0) == null || k.call(r, n))
                }
            })
        }
    }
    , [e, n, t, m]),
    e ? [o, {
        closed: a(1),
        enter: a(2),
        leave: a(4),
        transition: a(2) || a(4)
    }] : [n, {
        closed: void 0,
        enter: void 0,
        leave: void 0,
        transition: void 0
    }]
}
function CN(e, {prepare: t, run: n, done: r, inFlight: o}) {
    let s = Ti();
    return DN(e, {
        prepare: t,
        inFlight: o
    }),
    s.nextFrame( () => {
        n(),
        s.requestAnimationFrame( () => {
            s.add(TN(e, r))
        }
        )
    }
    ),
    s.dispose
}
function TN(e, t) {
    var n, r;
    let o = Ti();
    if (!e)
        return o.dispose;
    let s = !1;
    o.add( () => {
        s = !0
    }
    );
    let a = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter(l => l instanceof CSSTransition)) != null ? r : [];
    return a.length === 0 ? (t(),
    o.dispose) : (Promise.allSettled(a.map(l => l.finished)).then( () => {
        s || t()
    }
    ),
    o.dispose)
}
function DN(e, {inFlight: t, prepare: n}) {
    if (t != null && t.current) {
        n();
        return
    }
    let r = e.style.transition;
    e.style.transition = "none",
    n(),
    e.offsetHeight,
    e.style.transition = r
}
let Di = w.createContext(null);
Di.displayName = "OpenClosedContext";
var ys = (e => (e[e.Open = 1] = "Open",
e[e.Closed = 2] = "Closed",
e[e.Closing = 4] = "Closing",
e[e.Opening = 8] = "Opening",
e))(ys || {});
function _N() {
    return w.useContext(Di)
}
function PN({value: e, children: t}) {
    return R.createElement(Di.Provider, {
        value: e
    }, t)
}
function ON({children: e}) {
    return R.createElement(Di.Provider, {
        value: null
    }, e)
}
var xm;
let LN = (xm = R.startTransition) != null ? xm : function(e) {
    e()
}
;
var MN = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(MN || {})
  , RN = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure",
e[e.CloseDisclosure = 1] = "CloseDisclosure",
e[e.SetButtonId = 2] = "SetButtonId",
e[e.SetPanelId = 3] = "SetPanelId",
e[e.SetButtonElement = 4] = "SetButtonElement",
e[e.SetPanelElement = 5] = "SetPanelElement",
e))(RN || {});
let AN = {
    0: e => ({
        ...e,
        disclosureState: Ds(e.disclosureState, {
            0: 1,
            1: 0
        })
    }),
    1: e => e.disclosureState === 1 ? e : {
        ...e,
        disclosureState: 1
    },
    2(e, t) {
        return e.buttonId === t.buttonId ? e : {
            ...e,
            buttonId: t.buttonId
        }
    },
    3(e, t) {
        return e.panelId === t.panelId ? e : {
            ...e,
            panelId: t.panelId
        }
    },
    4(e, t) {
        return e.buttonElement === t.element ? e : {
            ...e,
            buttonElement: t.element
        }
    },
    5(e, t) {
        return e.panelElement === t.element ? e : {
            ...e,
            panelElement: t.element
        }
    }
}
  , ud = w.createContext(null);
ud.displayName = "DisclosureContext";
function cd(e) {
    let t = w.useContext(ud);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, cd),
        n
    }
    return t
}
let dd = w.createContext(null);
dd.displayName = "DisclosureAPIContext";
function ig(e) {
    let t = w.useContext(dd);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, ig),
        n
    }
    return t
}
let fd = w.createContext(null);
fd.displayName = "DisclosurePanelContext";
function FN() {
    return w.useContext(fd)
}
function IN(e, t) {
    return Ds(t.type, AN, e, t)
}
let $N = w.Fragment;
function BN(e, t) {
    let {defaultOpen: n=!1, ...r} = e
      , o = w.useRef(null)
      , s = ld(t, vN(N => {
        o.current = N
    }
    , e.as === void 0 || e.as === w.Fragment))
      , a = w.useReducer(IN, {
        disclosureState: n ? 0 : 1,
        buttonElement: null,
        panelElement: null,
        buttonId: null,
        panelId: null
    })
      , [{disclosureState: l, buttonId: u},d] = a
      , h = hn(N => {
        d({
            type: 1
        });
        let S = Z0(o);
        if (!S || !u)
            return;
        let b = N ? gm(N) ? N : "current"in N && gm(N.current) ? N.current : S.getElementById(u) : S.getElementById(u);
        b == null || b.focus()
    }
    )
      , m = w.useMemo( () => ({
        close: h
    }), [h])
      , v = w.useMemo( () => ({
        open: l === 0,
        close: h
    }), [l, h])
      , k = {
        ref: s
    }
      , x = ad();
    return R.createElement(ud.Provider, {
        value: a
    }, R.createElement(dd.Provider, {
        value: m
    }, R.createElement(wN, {
        value: h
    }, R.createElement(PN, {
        value: Ds(l, {
            0: ys.Open,
            1: ys.Closed
        })
    }, x({
        ourProps: k,
        theirProps: r,
        slot: v,
        defaultTag: $N,
        name: "Disclosure"
    })))))
}
let UN = "button";
function WN(e, t) {
    let n = w.useId()
      , {id: r=`headlessui-disclosure-button-${n}`, disabled: o=!1, autoFocus: s=!1, ...a} = e
      , [l,u] = cd("Disclosure.Button")
      , d = FN()
      , h = d === null ? !1 : d === l.panelId
      , m = w.useRef(null)
      , v = ld(m, t, hn(U => {
        if (!h)
            return u({
                type: 4,
                element: U
            })
    }
    ));
    w.useEffect( () => {
        if (!h)
            return u({
                type: 2,
                buttonId: r
            }),
            () => {
                u({
                    type: 2,
                    buttonId: null
                })
            }
    }
    , [r, u, h]);
    let k = hn(U => {
        var I;
        if (h) {
            if (l.disclosureState === 1)
                return;
            switch (U.key) {
            case Ar.Space:
            case Ar.Enter:
                U.preventDefault(),
                U.stopPropagation(),
                u({
                    type: 0
                }),
                (I = l.buttonElement) == null || I.focus();
                break
            }
        } else
            switch (U.key) {
            case Ar.Space:
            case Ar.Enter:
                U.preventDefault(),
                U.stopPropagation(),
                u({
                    type: 0
                });
                break
            }
    }
    )
      , x = hn(U => {
        switch (U.key) {
        case Ar.Space:
            U.preventDefault();
            break
        }
    }
    )
      , N = hn(U => {
        var I;
        gN(U.currentTarget) || o || (h ? (u({
            type: 0
        }),
        (I = l.buttonElement) == null || I.focus()) : u({
            type: 0
        }))
    }
    )
      , {isFocusVisible: S, focusProps: b} = eN({
        autoFocus: s
    })
      , {isHovered: y, hoverProps: g} = Zj({
        isDisabled: o
    })
      , {pressed: E, pressProps: T} = lN({
        disabled: o
    })
      , O = w.useMemo( () => ({
        open: l.disclosureState === 0,
        hover: y,
        active: E,
        disabled: o,
        focus: S,
        autofocus: s
    }), [l, y, E, S, o, s])
      , P = bN(e, l.buttonElement)
      , M = pm(h ? {
        ref: v,
        type: P,
        disabled: o || void 0,
        autoFocus: s,
        onKeyDown: k,
        onClick: N
    } : {
        ref: v,
        id: r,
        type: P,
        "aria-expanded": l.disclosureState === 0,
        "aria-controls": l.panelElement ? l.panelId : void 0,
        disabled: o || void 0,
        autoFocus: s,
        onKeyDown: k,
        onKeyUp: x,
        onClick: N
    }, b, g, T);
    return ad()({
        ourProps: M,
        theirProps: a,
        slot: O,
        defaultTag: UN,
        name: "Disclosure.Button"
    })
}
let zN = "div"
  , HN = Fu.RenderStrategy | Fu.Static;
function VN(e, t) {
    let n = w.useId()
      , {id: r=`headlessui-disclosure-panel-${n}`, transition: o=!1, ...s} = e
      , [a,l] = cd("Disclosure.Panel")
      , {close: u} = ig("Disclosure.Panel")
      , [d,h] = w.useState(null)
      , m = ld(t, hn(y => {
        LN( () => l({
            type: 5,
            element: y
        }))
    }
    ), h);
    w.useEffect( () => (l({
        type: 3,
        panelId: r
    }),
    () => {
        l({
            type: 3,
            panelId: null
        })
    }
    ), [r, l]);
    let v = _N()
      , [k,x] = EN(o, d, v !== null ? (v & ys.Open) === ys.Open : a.disclosureState === 0)
      , N = w.useMemo( () => ({
        open: a.disclosureState === 0,
        close: u
    }), [a.disclosureState, u])
      , S = {
        ref: m,
        id: r,
        ...SN(x)
    }
      , b = ad();
    return R.createElement(ON, null, R.createElement(fd.Provider, {
        value: a.panelId
    }, b({
        ourProps: S,
        theirProps: s,
        slot: N,
        defaultTag: zN,
        features: HN,
        visible: k,
        name: "Disclosure.Panel"
    })))
}
let YN = id(BN)
  , Iu = id(WN)
  , lg = id(VN)
  , qN = Object.assign(YN, {
    Button: Iu,
    Panel: lg
});
const ug = "/assets/EpitechLogo-BT1KbNTV.png";
function wm(...e) {
    return e.filter(Boolean).join(" ")
}
function un() {
    const e = Er()
      , [t,n] = w.useState([]);
    return w.useEffect( () => {
        i0(),
        ed() ? n([{
            name: "Home",
            href: "/"
        }, {
            name: "Calendar",
            href: "/calendar"
        }, {
            name: "Create Session",
            href: "/create-session"
        }, {
            name: "Manage Sessions",
            href: "/manage-sessions"
        }, {
            name: "Manage Users",
            href: "/manage-users"
        }, {
            name: "Late Report",
            href: "/late-report"
        }]) : n([{
            name: "Home",
            href: "/"
        }, {
            name: "My Presences",
            href: "/presences"
        }, {
            name: "Profile",
            href: "/profile"
        }])
    }
    , []),
    i.jsxs(qN, {
        as: "nav",
        className: "bg-gray-800 w-full fixed top-0 z-50",
        children: [i.jsx("div", {
            className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
            children: i.jsxs("div", {
                className: "relative flex h-16 items-center justify-between",
                children: [i.jsx("div", {
                    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                    children: i.jsxs(Iu, {
                        className: "group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                        children: [i.jsx("span", {
                            className: "absolute -inset-0.5"
                        }), i.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }), i.jsx(sw, {
                            "aria-hidden": "true",
                            className: "block h-6 w-6 group-data-[open]:hidden"
                        }), i.jsx(Nw, {
                            "aria-hidden": "true",
                            className: "hidden h-6 w-6 group-data-[open]:block"
                        })]
                    })
                }), i.jsxs("div", {
                    className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",
                    children: [i.jsx("div", {
                        className: "flex flex-shrink-0 items-center",
                        children: i.jsx("img", {
                            alt: "Epitech",
                            src: ug,
                            className: "h-8 w-auto"
                        })
                    }), i.jsx("div", {
                        className: "hidden sm:ml-6 sm:block",
                        children: i.jsxs("div", {
                            className: "flex space-x-4",
                            children: [t.map(r => r.name && i.jsx("a", {
                                href: r.href,
                                "aria-current": e.pathname === r.href ? "page" : void 0,
                                className: wm(e.pathname === r.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium"),
                                children: r.name
                            }, r.name)), i.jsx("button", {
                                onClick: () => {
                                    Su(),
                                    window.location.href = "/login"
                                }
                                ,
                                className: "rounded-md px-3 py-2 text-sm font-medium bg-red-700 text-gray-300 hover:bg-red-800 hover:text-white",
                                children: "Logout"
                            })]
                        })
                    })]
                })]
            })
        }), i.jsx(lg, {
            className: "sm:hidden",
            children: i.jsxs("div", {
                className: "space-y-1 px-2 pb-3 pt-2",
                children: [t.map(r => i.jsx(Iu, {
                    as: "a",
                    href: r.href,
                    "aria-current": e.pathname === r.href ? "page" : void 0,
                    className: wm(e.pathname === r.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"),
                    children: r.name
                }, r.name)), i.jsx("button", {
                    onClick: () => Su(),
                    className: "rounded-md px-3 py-2 text-sm bg-red-500 font-medium text-gray-300 hover:bg-red-700 hover:text-white",
                    children: "Logout"
                })]
            })
        })]
    })
}
const QN = (e, t, n, r) => {
    if (n === "length" || n === "prototype" || n === "arguments" || n === "caller")
        return;
    const o = Object.getOwnPropertyDescriptor(e, n)
      , s = Object.getOwnPropertyDescriptor(t, n);
    !GN(o, s) && r || Object.defineProperty(e, n, s)
}
  , GN = function(e, t) {
    return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value)
}
  , KN = (e, t) => {
    const n = Object.getPrototypeOf(t);
    n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n)
}
  , JN = (e, t) => `/* Wrapped ${e}*/
${t}`
  , XN = Object.getOwnPropertyDescriptor(Function.prototype, "toString")
  , ZN = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name")
  , ek = (e, t, n) => {
    const r = n === "" ? "" : `with ${n.trim()}() `
      , o = JN.bind(null, r, t.toString());
    Object.defineProperty(o, "name", ZN),
    Object.defineProperty(e, "toString", {
        ...XN,
        value: o
    })
}
  , tk = (e, t, {ignoreNonConfigurable: n=!1}={}) => {
    const {name: r} = e;
    for (const o of Reflect.ownKeys(t))
        QN(e, t, o, n);
    return KN(e, t),
    ek(e, t, r),
    e
}
;
var nk = tk
  , $u = {
    exports: {}
}
  , rk = () => {
    const e = {};
    return e.promise = new Promise( (t, n) => {
        e.resolve = t,
        e.reject = n
    }
    ),
    e
}
;
(function(e, t) {
    var n = As && As.__awaiter || function(a, l, u, d) {
        return new (u || (u = Promise))(function(h, m) {
            function v(N) {
                try {
                    x(d.next(N))
                } catch (S) {
                    m(S)
                }
            }
            function k(N) {
                try {
                    x(d.throw(N))
                } catch (S) {
                    m(S)
                }
            }
            function x(N) {
                N.done ? h(N.value) : new u(function(S) {
                    S(N.value)
                }
                ).then(v, k)
            }
            x((d = d.apply(a, l || [])).next())
        }
        )
    }
      , r = As && As.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const o = r(rk);
    function s(a, l="maxAge") {
        let u, d, h;
        const m = () => n(this, void 0, void 0, function*() {
            if (u !== void 0)
                return;
            const x = N => n(this, void 0, void 0, function*() {
                h = o.default();
                const S = N[1][l] - Date.now();
                if (S <= 0) {
                    a.delete(N[0]),
                    h.resolve();
                    return
                }
                return u = N[0],
                d = setTimeout( () => {
                    a.delete(N[0]),
                    h && h.resolve()
                }
                , S),
                typeof d.unref == "function" && d.unref(),
                h.promise
            });
            try {
                for (const N of a)
                    yield x(N)
            } catch {}
            u = void 0
        })
          , v = () => {
            u = void 0,
            d !== void 0 && (clearTimeout(d),
            d = void 0),
            h !== void 0 && (h.reject(void 0),
            h = void 0)
        }
          , k = a.set.bind(a);
        return a.set = (x, N) => {
            a.has(x) && a.delete(x);
            const S = k(x, N);
            return u && u === x && v(),
            m(),
            S
        }
        ,
        m(),
        a
    }
    t.default = s,
    e.exports = s,
    e.exports.default = s
}
)($u, $u.exports);
var ok = $u.exports;
const sk = nk
  , ak = ok
  , jl = new WeakMap
  , cg = new WeakMap
  , Xa = (e, {cacheKey: t, cache: n=new Map, maxAge: r}={}) => {
    typeof r == "number" && ak(n);
    const o = function(...s) {
        const a = t ? t(s) : s[0]
          , l = n.get(a);
        if (l)
            return l.data;
        const u = e.apply(this, s);
        return n.set(a, {
            data: u,
            maxAge: r ? Date.now() + r : Number.POSITIVE_INFINITY
        }),
        u
    };
    return sk(o, e, {
        ignoreNonConfigurable: !0
    }),
    cg.set(o, n),
    o
}
;
Xa.decorator = (e={}) => (t, n, r) => {
    const o = t[n];
    if (typeof o != "function")
        throw new TypeError("The decorated value must be a function");
    delete r.value,
    delete r.writable,
    r.get = function() {
        if (!jl.has(this)) {
            const s = Xa(o, e);
            return jl.set(this, s),
            s
        }
        return jl.get(this)
    }
}
;
Xa.clear = e => {
    const t = cg.get(e);
    if (!t)
        throw new TypeError("Can't clear a function that was not memoized!");
    if (typeof t.clear != "function")
        throw new TypeError("The cache Map can't be cleared!");
    t.clear()
}
;
var ik = Xa;
const dg = ei(ik);
function lk(e) {
    return typeof e == "string"
}
function uk(e, t, n) {
    return n.indexOf(e) === t
}
function ck(e) {
    return e.toLowerCase() === e
}
function bm(e) {
    return e.indexOf(",") === -1 ? e : e.split(",")
}
function Bu(e) {
    if (!e)
        return e;
    if (e === "C" || e === "posix" || e === "POSIX")
        return "en-US";
    if (e.indexOf(".") !== -1) {
        var t = e.split(".")[0]
          , n = t === void 0 ? "" : t;
        return Bu(n)
    }
    if (e.indexOf("@") !== -1) {
        var r = e.split("@")[0]
          , n = r === void 0 ? "" : r;
        return Bu(n)
    }
    if (e.indexOf("-") === -1 || !ck(e))
        return e;
    var o = e.split("-")
      , s = o[0]
      , a = o[1]
      , l = a === void 0 ? "" : a;
    return "".concat(s, "-").concat(l.toUpperCase())
}
function dk(e) {
    var t = e === void 0 ? {} : e
      , n = t.useFallbackLocale
      , r = n === void 0 ? !0 : n
      , o = t.fallbackLocale
      , s = o === void 0 ? "en-US" : o
      , a = [];
    if (typeof navigator < "u") {
        for (var l = navigator.languages || [], u = [], d = 0, h = l; d < h.length; d++) {
            var m = h[d];
            u = u.concat(bm(m))
        }
        var v = navigator.language
          , k = v && bm(v);
        a = a.concat(u, k)
    }
    return r && a.push(s),
    a.filter(lk).map(Bu).filter(uk)
}
var fk = dg(dk, {
    cacheKey: JSON.stringify
});
function mk(e) {
    return fk(e)[0] || null
}
var fg = dg(mk, {
    cacheKey: JSON.stringify
});
function jn(e, t, n) {
    return function(o, s) {
        s === void 0 && (s = n);
        var a = e(o) + s;
        return t(a)
    }
}
function _s(e) {
    return function(n) {
        return new Date(e(n).getTime() - 1)
    }
}
function Ps(e, t) {
    return function(r) {
        return [e(r), t(r)]
    }
}
function Ne(e) {
    if (e instanceof Date)
        return e.getFullYear();
    if (typeof e == "number")
        return e;
    var t = parseInt(e, 10);
    if (typeof e == "string" && !isNaN(t))
        return t;
    throw new Error("Failed to get year from date: ".concat(e, "."))
}
function Zn(e) {
    if (e instanceof Date)
        return e.getMonth();
    throw new Error("Failed to get month from date: ".concat(e, "."))
}
function _i(e) {
    if (e instanceof Date)
        return e.getDate();
    throw new Error("Failed to get year from date: ".concat(e, "."))
}
function xo(e) {
    var t = Ne(e)
      , n = t + (-t + 1) % 100
      , r = new Date;
    return r.setFullYear(n, 0, 1),
    r.setHours(0, 0, 0, 0),
    r
}
var hk = jn(Ne, xo, -100)
  , mg = jn(Ne, xo, 100)
  , md = _s(mg)
  , pk = jn(Ne, md, -100)
  , hg = Ps(xo, md);
function er(e) {
    var t = Ne(e)
      , n = t + (-t + 1) % 10
      , r = new Date;
    return r.setFullYear(n, 0, 1),
    r.setHours(0, 0, 0, 0),
    r
}
var pg = jn(Ne, er, -10)
  , hd = jn(Ne, er, 10)
  , Pi = _s(hd)
  , gg = jn(Ne, Pi, -10)
  , yg = Ps(er, Pi);
function wo(e) {
    var t = Ne(e)
      , n = new Date;
    return n.setFullYear(t, 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
var vg = jn(Ne, wo, -1)
  , pd = jn(Ne, wo, 1)
  , Oi = _s(pd)
  , xg = jn(Ne, Oi, -1)
  , gk = Ps(wo, Oi);
function gd(e, t) {
    return function(r, o) {
        o === void 0 && (o = t);
        var s = Ne(r)
          , a = Zn(r) + o
          , l = new Date;
        return l.setFullYear(s, a, 1),
        l.setHours(0, 0, 0, 0),
        e(l)
    }
}
function Cr(e) {
    var t = Ne(e)
      , n = Zn(e)
      , r = new Date;
    return r.setFullYear(t, n, 1),
    r.setHours(0, 0, 0, 0),
    r
}
var wg = gd(Cr, -1)
  , yd = gd(Cr, 1)
  , Os = _s(yd)
  , bg = gd(Os, -1)
  , yk = Ps(Cr, Os);
function vk(e, t) {
    return function(r, o) {
        o === void 0 && (o = t);
        var s = Ne(r)
          , a = Zn(r)
          , l = _i(r) + o
          , u = new Date;
        return u.setFullYear(s, a, l),
        u.setHours(0, 0, 0, 0),
        e(u)
    }
}
function Ls(e) {
    var t = Ne(e)
      , n = Zn(e)
      , r = _i(e)
      , o = new Date;
    return o.setFullYear(t, n, r),
    o.setHours(0, 0, 0, 0),
    o
}
var xk = vk(Ls, 1)
  , vd = _s(xk)
  , wk = Ps(Ls, vd);
function jg(e) {
    return _i(Os(e))
}
var Ge = {
    GREGORY: "gregory",
    HEBREW: "hebrew",
    ISLAMIC: "islamic",
    ISO_8601: "iso8601"
}
  , bk = {
    gregory: ["en-CA", "en-US", "es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-DO", "es-EC", "es-GT", "es-HN", "es-MX", "es-NI", "es-PA", "es-PE", "es-PR", "es-SV", "es-VE", "pt-BR"],
    hebrew: ["he", "he-IL"],
    islamic: ["ar", "ar-AE", "ar-BH", "ar-DZ", "ar-EG", "ar-IQ", "ar-JO", "ar-KW", "ar-LY", "ar-OM", "ar-QA", "ar-SA", "ar-SD", "ar-SY", "ar-YE", "dv", "dv-MV", "ps", "ps-AR"]
}
  , xd = [0, 1, 2, 3, 4, 5, 6]
  , Nl = new Map;
function jk(e) {
    return function(n, r) {
        var o = n || fg();
        Nl.has(o) || Nl.set(o, new Map);
        var s = Nl.get(o);
        return s.has(e) || s.set(e, new Intl.DateTimeFormat(o || void 0,e).format),
        s.get(e)(r)
    }
}
function Nk(e) {
    var t = new Date(e);
    return new Date(t.setHours(12))
}
function Tr(e) {
    return function(t, n) {
        return jk(e)(t, Nk(n))
    }
}
var kk = {
    day: "numeric"
}
  , Sk = {
    day: "numeric",
    month: "long",
    year: "numeric"
}
  , Ek = {
    month: "long"
}
  , Ck = {
    month: "long",
    year: "numeric"
}
  , Tk = {
    weekday: "short"
}
  , Dk = {
    weekday: "long"
}
  , _k = {
    year: "numeric"
}
  , Pk = Tr(kk)
  , Ok = Tr(Sk)
  , Lk = Tr(Ek)
  , Ng = Tr(Ck)
  , Mk = Tr(Tk)
  , Rk = Tr(Dk)
  , Li = Tr(_k)
  , Ak = xd[0]
  , Fk = xd[5]
  , jm = xd[6];
function vs(e, t) {
    t === void 0 && (t = Ge.ISO_8601);
    var n = e.getDay();
    switch (t) {
    case Ge.ISO_8601:
        return (n + 6) % 7;
    case Ge.ISLAMIC:
        return (n + 1) % 7;
    case Ge.HEBREW:
    case Ge.GREGORY:
        return n;
    default:
        throw new Error("Unsupported calendar type.")
    }
}
function Ik(e) {
    var t = xo(e);
    return Ne(t)
}
function $k(e) {
    var t = er(e);
    return Ne(t)
}
function Uu(e, t) {
    t === void 0 && (t = Ge.ISO_8601);
    var n = Ne(e)
      , r = Zn(e)
      , o = e.getDate() - vs(e, t);
    return new Date(n,r,o)
}
function Bk(e, t) {
    t === void 0 && (t = Ge.ISO_8601);
    var n = t === Ge.GREGORY ? Ge.GREGORY : Ge.ISO_8601, r = Uu(e, t), o = Ne(e) + 1, s, a;
    do
        s = new Date(o,0,n === Ge.ISO_8601 ? 4 : 1),
        a = Uu(s, t),
        o -= 1;
    while (e < a);
    return Math.round((r.getTime() - a.getTime()) / (864e5 * 7)) + 1
}
function gr(e, t) {
    switch (e) {
    case "century":
        return xo(t);
    case "decade":
        return er(t);
    case "year":
        return wo(t);
    case "month":
        return Cr(t);
    case "day":
        return Ls(t);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Uk(e, t) {
    switch (e) {
    case "century":
        return hk(t);
    case "decade":
        return pg(t);
    case "year":
        return vg(t);
    case "month":
        return wg(t);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function kg(e, t) {
    switch (e) {
    case "century":
        return mg(t);
    case "decade":
        return hd(t);
    case "year":
        return pd(t);
    case "month":
        return yd(t);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Wk(e, t) {
    switch (e) {
    case "decade":
        return pg(t, -100);
    case "year":
        return vg(t, -10);
    case "month":
        return wg(t, -12);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function zk(e, t) {
    switch (e) {
    case "decade":
        return hd(t, 100);
    case "year":
        return pd(t, 10);
    case "month":
        return yd(t, 12);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Sg(e, t) {
    switch (e) {
    case "century":
        return md(t);
    case "decade":
        return Pi(t);
    case "year":
        return Oi(t);
    case "month":
        return Os(t);
    case "day":
        return vd(t);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Hk(e, t) {
    switch (e) {
    case "century":
        return pk(t);
    case "decade":
        return gg(t);
    case "year":
        return xg(t);
    case "month":
        return bg(t);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Vk(e, t) {
    switch (e) {
    case "decade":
        return gg(t, -100);
    case "year":
        return xg(t, -10);
    case "month":
        return bg(t, -12);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Nm(e, t) {
    switch (e) {
    case "century":
        return hg(t);
    case "decade":
        return yg(t);
    case "year":
        return gk(t);
    case "month":
        return yk(t);
    case "day":
        return wk(t);
    default:
        throw new Error("Invalid rangeType: ".concat(e))
    }
}
function Yk(e, t, n) {
    var r = [t, n].sort(function(o, s) {
        return o.getTime() - s.getTime()
    });
    return [gr(e, r[0]), Sg(e, r[1])]
}
function Eg(e, t, n) {
    return n.map(function(r) {
        return (t || Li)(e, r)
    }).join(" – ")
}
function qk(e, t, n) {
    return Eg(e, t, hg(n))
}
function Cg(e, t, n) {
    return Eg(e, t, yg(n))
}
function Qk(e) {
    return e.getDay() === new Date().getDay()
}
function Tg(e, t) {
    t === void 0 && (t = Ge.ISO_8601);
    var n = e.getDay();
    switch (t) {
    case Ge.ISLAMIC:
    case Ge.HEBREW:
        return n === Fk || n === jm;
    case Ge.ISO_8601:
    case Ge.GREGORY:
        return n === jm || n === Ak;
    default:
        throw new Error("Unsupported calendar type.")
    }
}
var tn = "react-calendar__navigation";
function Gk(e) {
    var t = e.activeStartDate
      , n = e.drillUp
      , r = e.formatMonthYear
      , o = r === void 0 ? Ng : r
      , s = e.formatYear
      , a = s === void 0 ? Li : s
      , l = e.locale
      , u = e.maxDate
      , d = e.minDate
      , h = e.navigationAriaLabel
      , m = h === void 0 ? "" : h
      , v = e.navigationAriaLive
      , k = e.navigationLabel
      , x = e.next2AriaLabel
      , N = x === void 0 ? "" : x
      , S = e.next2Label
      , b = S === void 0 ? "»" : S
      , y = e.nextAriaLabel
      , g = y === void 0 ? "" : y
      , E = e.nextLabel
      , T = E === void 0 ? "›" : E
      , O = e.prev2AriaLabel
      , P = O === void 0 ? "" : O
      , M = e.prev2Label
      , U = M === void 0 ? "«" : M
      , I = e.prevAriaLabel
      , ae = I === void 0 ? "" : I
      , fe = e.prevLabel
      , Pe = fe === void 0 ? "‹" : fe
      , Ie = e.setActiveStartDate
      , ke = e.showDoubleView
      , q = e.view
      , Se = e.views
      , $ = Se.indexOf(q) > 0
      , W = q !== "century"
      , V = Uk(q, t)
      , B = W ? Wk(q, t) : void 0
      , H = kg(q, t)
      , te = W ? zk(q, t) : void 0
      , F = function() {
        if (V.getFullYear() < 0)
            return !0;
        var ue = Hk(q, t);
        return d && d >= ue
    }()
      , K = W && function() {
        if (B.getFullYear() < 0)
            return !0;
        var ue = Vk(q, t);
        return d && d >= ue
    }()
      , Y = u && u < H
      , ee = W && u && u < te;
    function Ee() {
        Ie(V, "prev")
    }
    function ze() {
        Ie(B, "prev2")
    }
    function Tt() {
        Ie(H, "next")
    }
    function tr() {
        Ie(te, "next2")
    }
    function Kt(ue) {
        var ln = function() {
            switch (q) {
            case "century":
                return qk(l, a, ue);
            case "decade":
                return Cg(l, a, ue);
            case "year":
                return a(l, ue);
            case "month":
                return o(l, ue);
            default:
                throw new Error("Invalid view: ".concat(q, "."))
            }
        }();
        return k ? k({
            date: ue,
            label: ln,
            locale: l || fg() || void 0,
            view: q
        }) : ln
    }
    function Dt() {
        var ue = "".concat(tn, "__label");
        return i.jsxs("button", {
            "aria-label": m,
            "aria-live": v,
            className: ue,
            disabled: !$,
            onClick: n,
            style: {
                flexGrow: 1
            },
            type: "button",
            children: [i.jsx("span", {
                className: "".concat(ue, "__labelText ").concat(ue, "__labelText--from"),
                children: Kt(t)
            }), ke ? i.jsxs(i.Fragment, {
                children: [i.jsx("span", {
                    className: "".concat(ue, "__divider"),
                    children: " – "
                }), i.jsx("span", {
                    className: "".concat(ue, "__labelText ").concat(ue, "__labelText--to"),
                    children: Kt(H)
                })]
            }) : null]
        })
    }
    return i.jsxs("div", {
        className: tn,
        children: [U !== null && W ? i.jsx("button", {
            "aria-label": P,
            className: "".concat(tn, "__arrow ").concat(tn, "__prev2-button"),
            disabled: K,
            onClick: ze,
            type: "button",
            children: U
        }) : null, Pe !== null && i.jsx("button", {
            "aria-label": ae,
            className: "".concat(tn, "__arrow ").concat(tn, "__prev-button"),
            disabled: F,
            onClick: Ee,
            type: "button",
            children: Pe
        }), Dt(), T !== null && i.jsx("button", {
            "aria-label": g,
            className: "".concat(tn, "__arrow ").concat(tn, "__next-button"),
            disabled: Y,
            onClick: Tt,
            type: "button",
            children: T
        }), b !== null && W ? i.jsx("button", {
            "aria-label": N,
            className: "".concat(tn, "__arrow ").concat(tn, "__next2-button"),
            disabled: ee,
            onClick: tr,
            type: "button",
            children: b
        }) : null]
    })
}
var Gr = function() {
    return Gr = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Gr.apply(this, arguments)
}
  , Kk = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
function km(e) {
    return "".concat(e, "%")
}
function wd(e) {
    var t = e.children
      , n = e.className
      , r = e.count
      , o = e.direction
      , s = e.offset
      , a = e.style
      , l = e.wrap
      , u = Kk(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
    return i.jsx("div", Gr({
        className: n,
        style: Gr({
            display: "flex",
            flexDirection: o,
            flexWrap: l ? "wrap" : "nowrap"
        }, a)
    }, u, {
        children: w.Children.map(t, function(d, h) {
            var m = s && h === 0 ? km(100 * s / r) : null;
            return w.cloneElement(d, Gr(Gr({}, d.props), {
                style: {
                    flexBasis: km(100 / r),
                    flexShrink: 0,
                    flexGrow: 0,
                    overflow: "hidden",
                    marginLeft: m,
                    marginInlineStart: m,
                    marginInlineEnd: 0
                }
            }))
        })
    }))
}
function Jk(e, t, n) {
    return t && t > e ? t : n && n < e ? n : e
}
function xs(e, t) {
    return t[0] <= e && t[1] >= e
}
function Xk(e, t) {
    return e[0] <= t[0] && e[1] >= t[1]
}
function Dg(e, t) {
    return xs(e[0], t) || xs(e[1], t)
}
function Sm(e, t, n) {
    var r = Dg(t, e)
      , o = [];
    if (r) {
        o.push(n);
        var s = xs(e[0], t)
          , a = xs(e[1], t);
        s && o.push("".concat(n, "Start")),
        a && o.push("".concat(n, "End")),
        s && a && o.push("".concat(n, "BothEnds"))
    }
    return o
}
function Zk(e) {
    return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null
}
function eS(e) {
    if (!e)
        throw new Error("args is required");
    var t = e.value
      , n = e.date
      , r = e.hover
      , o = "react-calendar__tile"
      , s = [o];
    if (!n)
        return s;
    var a = new Date
      , l = function() {
        if (Array.isArray(n))
            return n;
        var k = e.dateType;
        if (!k)
            throw new Error("dateType is required when date is not an array of two dates");
        return Nm(k, n)
    }();
    if (xs(a, l) && s.push("".concat(o, "--now")),
    !t || !Zk(t))
        return s;
    var u = function() {
        if (Array.isArray(t))
            return t;
        var k = e.valueType;
        if (!k)
            throw new Error("valueType is required when value is not an array of two dates");
        return Nm(k, t)
    }();
    Xk(u, l) ? s.push("".concat(o, "--active")) : Dg(u, l) && s.push("".concat(o, "--hasActive"));
    var d = Sm(u, l, "".concat(o, "--range"));
    s.push.apply(s, d);
    var h = Array.isArray(t) ? t : [t];
    if (r && h.length === 1) {
        var m = r > u[0] ? [u[0], r] : [r, u[0]]
          , v = Sm(m, l, "".concat(o, "--hover"));
        s.push.apply(s, v)
    }
    return s
}
function Mi(e) {
    for (var t = e.className, n = e.count, r = n === void 0 ? 3 : n, o = e.dateTransform, s = e.dateType, a = e.end, l = e.hover, u = e.offset, d = e.renderTile, h = e.start, m = e.step, v = m === void 0 ? 1 : m, k = e.value, x = e.valueType, N = [], S = h; S <= a; S += v) {
        var b = o(S);
        N.push(d({
            classes: eS({
                date: b,
                dateType: s,
                hover: l,
                value: k,
                valueType: x
            }),
            date: b
        }))
    }
    return i.jsx(wd, {
        className: t,
        count: r,
        offset: u,
        wrap: !0,
        children: N
    })
}
function Ri(e) {
    var t = e.activeStartDate
      , n = e.children
      , r = e.classes
      , o = e.date
      , s = e.formatAbbr
      , a = e.locale
      , l = e.maxDate
      , u = e.maxDateTransform
      , d = e.minDate
      , h = e.minDateTransform
      , m = e.onClick
      , v = e.onMouseOver
      , k = e.style
      , x = e.tileClassName
      , N = e.tileContent
      , S = e.tileDisabled
      , b = e.view
      , y = w.useMemo(function() {
        var E = {
            activeStartDate: t,
            date: o,
            view: b
        };
        return typeof x == "function" ? x(E) : x
    }, [t, o, x, b])
      , g = w.useMemo(function() {
        var E = {
            activeStartDate: t,
            date: o,
            view: b
        };
        return typeof N == "function" ? N(E) : N
    }, [t, o, N, b]);
    return i.jsxs("button", {
        className: Ci(r, y),
        disabled: d && h(d) > o || l && u(l) < o || (S == null ? void 0 : S({
            activeStartDate: t,
            date: o,
            view: b
        })),
        onClick: m ? function(E) {
            return m(o, E)
        }
        : void 0,
        onFocus: v ? function() {
            return v(o)
        }
        : void 0,
        onMouseOver: v ? function() {
            return v(o)
        }
        : void 0,
        style: k,
        type: "button",
        children: [s ? i.jsx("abbr", {
            "aria-label": s(a, o),
            children: n
        }) : n, g]
    })
}
var Wu = function() {
    return Wu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Wu.apply(this, arguments)
}
  , tS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
  , Em = "react-calendar__century-view__decades__decade";
function nS(e) {
    var t = e.classes
      , n = t === void 0 ? [] : t
      , r = e.currentCentury
      , o = e.formatYear
      , s = o === void 0 ? Li : o
      , a = tS(e, ["classes", "currentCentury", "formatYear"])
      , l = a.date
      , u = a.locale
      , d = [];
    return n && d.push.apply(d, n),
    d.push(Em),
    xo(l).getFullYear() !== r && d.push("".concat(Em, "--neighboringCentury")),
    i.jsx(Ri, Wu({}, a, {
        classes: d,
        maxDateTransform: Pi,
        minDateTransform: er,
        view: "century",
        children: Cg(u, s, l)
    }))
}
var zu = function() {
    return zu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    zu.apply(this, arguments)
}
  , Cm = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
function rS(e) {
    var t = e.activeStartDate
      , n = e.hover
      , r = e.showNeighboringCentury
      , o = e.value
      , s = e.valueType
      , a = Cm(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"])
      , l = Ik(t)
      , u = l + (r ? 119 : 99);
    return i.jsx(Mi, {
        className: "react-calendar__century-view__decades",
        dateTransform: er,
        dateType: "decade",
        end: u,
        hover: n,
        renderTile: function(d) {
            var h = d.date
              , m = Cm(d, ["date"]);
            return i.jsx(nS, zu({}, a, m, {
                activeStartDate: t,
                currentCentury: l,
                date: h
            }), h.getTime())
        },
        start: l,
        step: 10,
        value: o,
        valueType: s
    })
}
var Hu = function() {
    return Hu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Hu.apply(this, arguments)
};
function oS(e) {
    function t() {
        return i.jsx(rS, Hu({}, e))
    }
    return i.jsx("div", {
        className: "react-calendar__century-view",
        children: t()
    })
}
var Vu = function() {
    return Vu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Vu.apply(this, arguments)
}
  , sS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
  , Tm = "react-calendar__decade-view__years__year";
function aS(e) {
    var t = e.classes
      , n = t === void 0 ? [] : t
      , r = e.currentDecade
      , o = e.formatYear
      , s = o === void 0 ? Li : o
      , a = sS(e, ["classes", "currentDecade", "formatYear"])
      , l = a.date
      , u = a.locale
      , d = [];
    return n && d.push.apply(d, n),
    d.push(Tm),
    er(l).getFullYear() !== r && d.push("".concat(Tm, "--neighboringDecade")),
    i.jsx(Ri, Vu({}, a, {
        classes: d,
        maxDateTransform: Oi,
        minDateTransform: wo,
        view: "decade",
        children: s(u, l)
    }))
}
var Yu = function() {
    return Yu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Yu.apply(this, arguments)
}
  , Dm = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
function iS(e) {
    var t = e.activeStartDate
      , n = e.hover
      , r = e.showNeighboringDecade
      , o = e.value
      , s = e.valueType
      , a = Dm(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"])
      , l = $k(t)
      , u = l + (r ? 11 : 9);
    return i.jsx(Mi, {
        className: "react-calendar__decade-view__years",
        dateTransform: wo,
        dateType: "year",
        end: u,
        hover: n,
        renderTile: function(d) {
            var h = d.date
              , m = Dm(d, ["date"]);
            return i.jsx(aS, Yu({}, a, m, {
                activeStartDate: t,
                currentDecade: l,
                date: h
            }), h.getTime())
        },
        start: l,
        value: o,
        valueType: s
    })
}
var qu = function() {
    return qu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    qu.apply(this, arguments)
};
function lS(e) {
    function t() {
        return i.jsx(iS, qu({}, e))
    }
    return i.jsx("div", {
        className: "react-calendar__decade-view",
        children: t()
    })
}
var Qu = function() {
    return Qu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Qu.apply(this, arguments)
}
  , uS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
  , _m = function(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
  , cS = "react-calendar__year-view__months__month";
function dS(e) {
    var t = e.classes
      , n = t === void 0 ? [] : t
      , r = e.formatMonth
      , o = r === void 0 ? Lk : r
      , s = e.formatMonthYear
      , a = s === void 0 ? Ng : s
      , l = uS(e, ["classes", "formatMonth", "formatMonthYear"])
      , u = l.date
      , d = l.locale;
    return i.jsx(Ri, Qu({}, l, {
        classes: _m(_m([], n, !0), [cS], !1),
        formatAbbr: a,
        maxDateTransform: Os,
        minDateTransform: Cr,
        view: "year",
        children: o(d, u)
    }))
}
var Gu = function() {
    return Gu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Gu.apply(this, arguments)
}
  , Pm = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
function fS(e) {
    var t = e.activeStartDate
      , n = e.hover
      , r = e.value
      , o = e.valueType
      , s = Pm(e, ["activeStartDate", "hover", "value", "valueType"])
      , a = 0
      , l = 11
      , u = Ne(t);
    return i.jsx(Mi, {
        className: "react-calendar__year-view__months",
        dateTransform: function(d) {
            var h = new Date;
            return h.setFullYear(u, d, 1),
            Cr(h)
        },
        dateType: "month",
        end: l,
        hover: n,
        renderTile: function(d) {
            var h = d.date
              , m = Pm(d, ["date"]);
            return i.jsx(dS, Gu({}, s, m, {
                activeStartDate: t,
                date: h
            }), h.getTime())
        },
        start: a,
        value: r,
        valueType: o
    })
}
var Ku = function() {
    return Ku = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Ku.apply(this, arguments)
};
function mS(e) {
    function t() {
        return i.jsx(fS, Ku({}, e))
    }
    return i.jsx("div", {
        className: "react-calendar__year-view",
        children: t()
    })
}
var Ju = function() {
    return Ju = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Ju.apply(this, arguments)
}
  , hS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
  , kl = "react-calendar__month-view__days__day";
function pS(e) {
    var t = e.calendarType
      , n = e.classes
      , r = n === void 0 ? [] : n
      , o = e.currentMonthIndex
      , s = e.formatDay
      , a = s === void 0 ? Pk : s
      , l = e.formatLongDate
      , u = l === void 0 ? Ok : l
      , d = hS(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"])
      , h = d.date
      , m = d.locale
      , v = [];
    return r && v.push.apply(v, r),
    v.push(kl),
    Tg(h, t) && v.push("".concat(kl, "--weekend")),
    h.getMonth() !== o && v.push("".concat(kl, "--neighboringMonth")),
    i.jsx(Ri, Ju({}, d, {
        classes: v,
        formatAbbr: u,
        maxDateTransform: vd,
        minDateTransform: Ls,
        view: "month",
        children: a(m, h)
    }))
}
var Xu = function() {
    return Xu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Xu.apply(this, arguments)
}
  , Om = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
function gS(e) {
    var t = e.activeStartDate
      , n = e.calendarType
      , r = e.hover
      , o = e.showFixedNumberOfWeeks
      , s = e.showNeighboringMonth
      , a = e.value
      , l = e.valueType
      , u = Om(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"])
      , d = Ne(t)
      , h = Zn(t)
      , m = o || s
      , v = vs(t, n)
      , k = m ? 0 : v
      , x = (m ? -v : 0) + 1
      , N = function() {
        if (o)
            return x + 6 * 7 - 1;
        var S = jg(t);
        if (s) {
            var b = new Date;
            b.setFullYear(d, h, S),
            b.setHours(0, 0, 0, 0);
            var y = 7 - vs(b, n) - 1;
            return S + y
        }
        return S
    }();
    return i.jsx(Mi, {
        className: "react-calendar__month-view__days",
        count: 7,
        dateTransform: function(S) {
            var b = new Date;
            return b.setFullYear(d, h, S),
            Ls(b)
        },
        dateType: "day",
        hover: r,
        end: N,
        renderTile: function(S) {
            var b = S.date
              , y = Om(S, ["date"]);
            return i.jsx(pS, Xu({}, u, y, {
                activeStartDate: t,
                calendarType: n,
                currentMonthIndex: h,
                date: b
            }), b.getTime())
        },
        offset: k,
        start: x,
        value: a,
        valueType: l
    })
}
var _g = "react-calendar__month-view__weekdays"
  , Sl = "".concat(_g, "__weekday");
function yS(e) {
    for (var t = e.calendarType, n = e.formatShortWeekday, r = n === void 0 ? Mk : n, o = e.formatWeekday, s = o === void 0 ? Rk : o, a = e.locale, l = e.onMouseLeave, u = new Date, d = Cr(u), h = Ne(d), m = Zn(d), v = [], k = 1; k <= 7; k += 1) {
        var x = new Date(h,m,k - vs(d, t))
          , N = s(a, x);
        v.push(i.jsx("div", {
            className: Ci(Sl, Qk(x) && "".concat(Sl, "--current"), Tg(x, t) && "".concat(Sl, "--weekend")),
            children: i.jsx("abbr", {
                "aria-label": N,
                title: N,
                children: r(a, x).replace(".", "")
            })
        }, k))
    }
    return i.jsx(wd, {
        className: _g,
        count: 7,
        onFocus: l,
        onMouseOver: l,
        children: v
    })
}
var Za = function() {
    return Za = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Za.apply(this, arguments)
}
  , Lm = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
  , Mm = "react-calendar__tile";
function vS(e) {
    var t = e.onClickWeekNumber
      , n = e.weekNumber
      , r = i.jsx("span", {
        children: n
    });
    if (t) {
        var o = e.date
          , s = e.onClickWeekNumber
          , a = e.weekNumber
          , l = Lm(e, ["date", "onClickWeekNumber", "weekNumber"]);
        return i.jsx("button", Za({}, l, {
            className: Mm,
            onClick: function(u) {
                return s(a, o, u)
            },
            type: "button",
            children: r
        }))
    } else {
        e.date,
        e.onClickWeekNumber,
        e.weekNumber;
        var l = Lm(e, ["date", "onClickWeekNumber", "weekNumber"]);
        return i.jsx("div", Za({}, l, {
            className: Mm,
            children: r
        }))
    }
}
function xS(e) {
    var t = e.activeStartDate
      , n = e.calendarType
      , r = e.onClickWeekNumber
      , o = e.onMouseLeave
      , s = e.showFixedNumberOfWeeks
      , a = function() {
        if (s)
            return 6;
        var d = jg(t)
          , h = vs(t, n)
          , m = d - (7 - h);
        return 1 + Math.ceil(m / 7)
    }()
      , l = function() {
        for (var d = Ne(t), h = Zn(t), m = _i(t), v = [], k = 0; k < a; k += 1)
            v.push(Uu(new Date(d,h,m + k * 7), n));
        return v
    }()
      , u = l.map(function(d) {
        return Bk(d, n)
    });
    return i.jsx(wd, {
        className: "react-calendar__month-view__weekNumbers",
        count: a,
        direction: "column",
        onFocus: o,
        onMouseOver: o,
        style: {
            flexBasis: "calc(100% * (1 / 8)",
            flexShrink: 0
        },
        children: u.map(function(d, h) {
            var m = l[h];
            if (!m)
                throw new Error("date is not defined");
            return i.jsx(vS, {
                date: m,
                onClickWeekNumber: r,
                weekNumber: d
            }, d)
        })
    })
}
var Zu = function() {
    return Zu = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Zu.apply(this, arguments)
}
  , wS = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
function bS(e) {
    if (e)
        for (var t = 0, n = Object.entries(bk); t < n.length; t++) {
            var r = n[t]
              , o = r[0]
              , s = r[1];
            if (s.includes(e))
                return o
        }
    return Ge.ISO_8601
}
function jS(e) {
    var t = e.activeStartDate
      , n = e.locale
      , r = e.onMouseLeave
      , o = e.showFixedNumberOfWeeks
      , s = e.calendarType
      , a = s === void 0 ? bS(n) : s
      , l = e.formatShortWeekday
      , u = e.formatWeekday
      , d = e.onClickWeekNumber
      , h = e.showWeekNumbers
      , m = wS(e, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
    function v() {
        return i.jsx(yS, {
            calendarType: a,
            formatShortWeekday: l,
            formatWeekday: u,
            locale: n,
            onMouseLeave: r
        })
    }
    function k() {
        return h ? i.jsx(xS, {
            activeStartDate: t,
            calendarType: a,
            onClickWeekNumber: d,
            onMouseLeave: r,
            showFixedNumberOfWeeks: o
        }) : null
    }
    function x() {
        return i.jsx(gS, Zu({
            calendarType: a
        }, m))
    }
    var N = "react-calendar__month-view";
    return i.jsx("div", {
        className: Ci(N, h ? "".concat(N, "--weekNumbers") : ""),
        children: i.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "flex-end"
            },
            children: [k(), i.jsxs("div", {
                style: {
                    flexGrow: 1,
                    width: "100%"
                },
                children: [v(), x()]
            })]
        })
    })
}
var Kr = function() {
    return Kr = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Kr.apply(this, arguments)
}
  , ra = "react-calendar"
  , wa = ["century", "decade", "year", "month"]
  , NS = ["decade", "year", "month", "day"]
  , bd = new Date;
bd.setFullYear(1, 0, 1);
bd.setHours(0, 0, 0, 0);
var kS = new Date(864e13);
function $o(e) {
    return e instanceof Date ? e : new Date(e)
}
function Pg(e, t) {
    return wa.slice(wa.indexOf(e), wa.indexOf(t) + 1)
}
function SS(e, t, n) {
    var r = Pg(t, n);
    return r.indexOf(e) !== -1
}
function jd(e, t, n) {
    return e && SS(e, t, n) ? e : n
}
function Og(e) {
    var t = wa.indexOf(e);
    return NS[t]
}
function ES(e, t) {
    var n = Array.isArray(e) ? e[t] : e;
    if (!n)
        return null;
    var r = $o(n);
    if (Number.isNaN(r.getTime()))
        throw new Error("Invalid date: ".concat(e));
    return r
}
function Lg(e, t) {
    var n = e.value
      , r = e.minDate
      , o = e.maxDate
      , s = e.maxDetail
      , a = ES(n, t);
    if (!a)
        return null;
    var l = Og(s)
      , u = function() {
        switch (t) {
        case 0:
            return gr(l, a);
        case 1:
            return Sg(l, a);
        default:
            throw new Error("Invalid index value: ".concat(t))
        }
    }();
    return Jk(u, r, o)
}
var Nd = function(e) {
    return Lg(e, 0)
}
  , Mg = function(e) {
    return Lg(e, 1)
}
  , CS = function(e) {
    return [Nd, Mg].map(function(t) {
        return t(e)
    })
};
function Rg(e) {
    var t = e.maxDate
      , n = e.maxDetail
      , r = e.minDate
      , o = e.minDetail
      , s = e.value
      , a = e.view
      , l = jd(a, o, n)
      , u = Nd({
        value: s,
        minDate: r,
        maxDate: t,
        maxDetail: n
    }) || new Date;
    return gr(l, u)
}
function TS(e) {
    var t = e.activeStartDate
      , n = e.defaultActiveStartDate
      , r = e.defaultValue
      , o = e.defaultView
      , s = e.maxDate
      , a = e.maxDetail
      , l = e.minDate
      , u = e.minDetail
      , d = e.value
      , h = e.view
      , m = jd(h, u, a)
      , v = t || n;
    return v ? gr(m, v) : Rg({
        maxDate: s,
        maxDetail: a,
        minDate: l,
        minDetail: u,
        value: d || r,
        view: h || o
    })
}
function El(e) {
    return e && (!Array.isArray(e) || e.length === 1)
}
function oa(e, t) {
    return e instanceof Date && t instanceof Date && e.getTime() === t.getTime()
}
var DS = w.forwardRef(function(t, n) {
    var r = t.activeStartDate
      , o = t.allowPartialRange
      , s = t.calendarType
      , a = t.className
      , l = t.defaultActiveStartDate
      , u = t.defaultValue
      , d = t.defaultView
      , h = t.formatDay
      , m = t.formatLongDate
      , v = t.formatMonth
      , k = t.formatMonthYear
      , x = t.formatShortWeekday
      , N = t.formatWeekday
      , S = t.formatYear
      , b = t.goToRangeStartOnSelect
      , y = b === void 0 ? !0 : b
      , g = t.inputRef
      , E = t.locale
      , T = t.maxDate
      , O = T === void 0 ? kS : T
      , P = t.maxDetail
      , M = P === void 0 ? "month" : P
      , U = t.minDate
      , I = U === void 0 ? bd : U
      , ae = t.minDetail
      , fe = ae === void 0 ? "century" : ae
      , Pe = t.navigationAriaLabel
      , Ie = t.navigationAriaLive
      , ke = t.navigationLabel
      , q = t.next2AriaLabel
      , Se = t.next2Label
      , $ = t.nextAriaLabel
      , W = t.nextLabel
      , V = t.onActiveStartDateChange
      , B = t.onChange
      , H = t.onClickDay
      , te = t.onClickDecade
      , F = t.onClickMonth
      , K = t.onClickWeekNumber
      , Y = t.onClickYear
      , ee = t.onDrillDown
      , Ee = t.onDrillUp
      , ze = t.onViewChange
      , Tt = t.prev2AriaLabel
      , tr = t.prev2Label
      , Kt = t.prevAriaLabel
      , Dt = t.prevLabel
      , ue = t.returnValue
      , ln = ue === void 0 ? "start" : ue
      , Ye = t.selectRange
      , dt = t.showDoubleView
      , nr = t.showFixedNumberOfWeeks
      , ft = t.showNavigation
      , Dr = ft === void 0 ? !0 : ft
      , Nn = t.showNeighboringCentury
      , pe = t.showNeighboringDecade
      , bt = t.showNeighboringMonth
      , bo = bt === void 0 ? !0 : bt
      , _t = t.showWeekNumbers
      , kn = t.tileClassName
      , p = t.tileContent
      , c = t.tileDisabled
      , f = t.value
      , j = t.view
      , C = w.useState(l)
      , D = C[0]
      , L = C[1]
      , X = w.useState(null)
      , me = X[0]
      , le = X[1]
      , he = w.useState(Array.isArray(u) ? u.map(function(oe) {
        return oe !== null ? $o(oe) : null
    }) : u != null ? $o(u) : null)
      , se = he[0]
      , Jt = he[1]
      , Ms = w.useState(d)
      , Fi = Ms[0]
      , jo = Ms[1]
      , qe = r || D || TS({
        activeStartDate: r,
        defaultActiveStartDate: l,
        defaultValue: u,
        defaultView: d,
        maxDate: O,
        maxDetail: M,
        minDate: I,
        minDetail: fe,
        value: f,
        view: j
    })
      , Q = function() {
        var oe = function() {
            return Ye && El(se) ? se : f !== void 0 ? f : se
        }();
        return oe ? Array.isArray(oe) ? oe.map(function(Oe) {
            return Oe !== null ? $o(Oe) : null
        }) : oe !== null ? $o(oe) : null : null
    }()
      , Ce = Og(M)
      , ne = jd(j || Fi, fe, M)
      , we = Pg(fe, M)
      , _r = Ye ? me : null
      , Me = we.indexOf(ne) < we.length - 1
      , st = we.indexOf(ne) > 0
      , rr = w.useCallback(function(oe) {
        var Oe = function() {
            switch (ln) {
            case "start":
                return Nd;
            case "end":
                return Mg;
            case "range":
                return CS;
            default:
                throw new Error("Invalid returnValue.")
            }
        }();
        return Oe({
            maxDate: O,
            maxDetail: M,
            minDate: I,
            value: oe
        })
    }, [O, M, I, ln])
      , at = w.useCallback(function(oe, Oe) {
        L(oe);
        var $e = {
            action: Oe,
            activeStartDate: oe,
            value: Q,
            view: ne
        };
        V && !oa(qe, oe) && V($e)
    }, [qe, V, Q, ne])
      , Xe = w.useCallback(function(oe, Oe) {
        var $e = function() {
            switch (ne) {
            case "century":
                return te;
            case "decade":
                return Y;
            case "year":
                return F;
            case "month":
                return H;
            default:
                throw new Error("Invalid view: ".concat(ne, "."))
            }
        }();
        $e && $e(oe, Oe)
    }, [H, te, F, Y, ne])
      , Pr = w.useCallback(function(oe, Oe) {
        if (Me) {
            Xe(oe, Oe);
            var $e = we[we.indexOf(ne) + 1];
            if (!$e)
                throw new Error("Attempted to drill down from the lowest view.");
            L(oe),
            jo($e);
            var $t = {
                action: "drillDown",
                activeStartDate: oe,
                value: Q,
                view: $e
            };
            V && !oa(qe, oe) && V($t),
            ze && ne !== $e && ze($t),
            ee && ee($t)
        }
    }, [qe, Me, V, Xe, ee, ze, Q, ne, we])
      , It = w.useCallback(function() {
        if (st) {
            var oe = we[we.indexOf(ne) - 1];
            if (!oe)
                throw new Error("Attempted to drill up from the highest view.");
            var Oe = gr(oe, qe);
            L(Oe),
            jo(oe);
            var $e = {
                action: "drillUp",
                activeStartDate: Oe,
                value: Q,
                view: oe
            };
            V && !oa(qe, Oe) && V($e),
            ze && ne !== oe && ze($e),
            Ee && Ee($e)
        }
    }, [qe, st, V, Ee, ze, Q, ne, we])
      , Rs = w.useCallback(function(oe, Oe) {
        var $e = Q;
        Xe(oe, Oe);
        var $t = Ye && !El($e), Bt;
        if (Ye)
            if ($t)
                Bt = gr(Ce, oe);
            else {
                if (!$e)
                    throw new Error("previousValue is required");
                if (Array.isArray($e))
                    throw new Error("previousValue must not be an array");
                Bt = Yk(Ce, $e, oe)
            }
        else
            Bt = rr(oe);
        var $i = !Ye || $t || y ? Rg({
            maxDate: O,
            maxDetail: M,
            minDate: I,
            minDetail: fe,
            value: Bt,
            view: ne
        }) : null;
        Oe.persist(),
        L($i),
        Jt(Bt);
        var Zg = {
            action: "onChange",
            activeStartDate: $i,
            value: Bt,
            view: ne
        };
        if (V && !oa(qe, $i) && V(Zg),
        B)
            if (Ye) {
                var ey = El(Bt);
                if (!ey)
                    B(Bt || null, Oe);
                else if (o) {
                    if (Array.isArray(Bt))
                        throw new Error("value must not be an array");
                    B([Bt || null, null], Oe)
                }
            } else
                B(Bt || null, Oe)
    }, [qe, o, rr, y, O, M, I, fe, V, B, Xe, Ye, Q, Ce, ne]);
    function Kg(oe) {
        le(oe)
    }
    function Ii() {
        le(null)
    }
    w.useImperativeHandle(n, function() {
        return {
            activeStartDate: qe,
            drillDown: Pr,
            drillUp: It,
            onChange: Rs,
            setActiveStartDate: at,
            value: Q,
            view: ne
        }
    }, [qe, Pr, It, Rs, at, Q, ne]);
    function Ed(oe) {
        var Oe = oe ? kg(ne, qe) : gr(ne, qe)
          , $e = Me ? Pr : Rs
          , $t = {
            activeStartDate: Oe,
            hover: _r,
            locale: E,
            maxDate: O,
            minDate: I,
            onClick: $e,
            onMouseOver: Ye ? Kg : void 0,
            tileClassName: kn,
            tileContent: p,
            tileDisabled: c,
            value: Q,
            valueType: Ce
        };
        switch (ne) {
        case "century":
            return i.jsx(oS, Kr({
                formatYear: S,
                showNeighboringCentury: Nn
            }, $t));
        case "decade":
            return i.jsx(lS, Kr({
                formatYear: S,
                showNeighboringDecade: pe
            }, $t));
        case "year":
            return i.jsx(mS, Kr({
                formatMonth: v,
                formatMonthYear: k
            }, $t));
        case "month":
            return i.jsx(jS, Kr({
                calendarType: s,
                formatDay: h,
                formatLongDate: m,
                formatShortWeekday: x,
                formatWeekday: N,
                onClickWeekNumber: K,
                onMouseLeave: Ye ? Ii : void 0,
                showFixedNumberOfWeeks: typeof nr < "u" ? nr : dt,
                showNeighboringMonth: bo,
                showWeekNumbers: _t
            }, $t));
        default:
            throw new Error("Invalid view: ".concat(ne, "."))
        }
    }
    function Jg() {
        return Dr ? i.jsx(Gk, {
            activeStartDate: qe,
            drillUp: It,
            formatMonthYear: k,
            formatYear: S,
            locale: E,
            maxDate: O,
            minDate: I,
            navigationAriaLabel: Pe,
            navigationAriaLive: Ie,
            navigationLabel: ke,
            next2AriaLabel: q,
            next2Label: Se,
            nextAriaLabel: $,
            nextLabel: W,
            prev2AriaLabel: Tt,
            prev2Label: tr,
            prevAriaLabel: Kt,
            prevLabel: Dt,
            setActiveStartDate: at,
            showDoubleView: dt,
            view: ne,
            views: we
        }) : null
    }
    var Xg = Array.isArray(Q) ? Q : [Q];
    return i.jsxs("div", {
        className: Ci(ra, Ye && Xg.length === 1 && "".concat(ra, "--selectRange"), dt && "".concat(ra, "--doubleView"), a),
        ref: g,
        children: [Jg(), i.jsxs("div", {
            className: "".concat(ra, "__viewContainer"),
            onBlur: Ye ? Ii : void 0,
            onMouseLeave: Ye ? Ii : void 0,
            children: [Ed(), dt ? Ed(!0) : null]
        })]
    })
});
const _S = () => {
    const e = Ss()
      , t = n => {
        const r = ve(n, "yyyy-MM-dd");
        console.log(n),
        e(`/sessions/date/${r}`)
    }
    ;
    return i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20",
        children: [i.jsxs("div", {
            className: "relative overflow-hidden mb-12",
            children: [i.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"
            }), i.jsx("div", {
                className: "relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8",
                children: i.jsxs("div", {
                    className: "text-center",
                    children: [i.jsx("div", {
                        className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl",
                        children: i.jsx("svg", {
                            className: "w-8 h-8 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: i.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            })
                        })
                    }), i.jsxs("h1", {
                        className: "text-4xl md:text-6xl font-extrabold text-white mb-6",
                        children: ["Session ", i.jsx("span", {
                            className: "text-yellow-300",
                            children: "Calendar"
                        })]
                    }), i.jsx("p", {
                        className: "text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8",
                        children: "Navigate through dates and explore sessions by clicking on any day"
                    }), i.jsx("div", {
                        className: "flex justify-center",
                        children: i.jsxs("div", {
                            className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-gray-50 shadow-lg transform hover:scale-105 transition-all duration-200",
                            children: [i.jsxs("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: [i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }), i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })]
                            }), "Click any date to view sessions"]
                        })
                    })]
                })
            })]
        }), i.jsx("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12",
            children: i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100",
                children: [i.jsx("div", {
                    className: "bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6",
                    children: i.jsx("div", {
                        className: "flex items-center justify-center",
                        children: i.jsxs("div", {
                            className: "flex items-center",
                            children: [i.jsx("svg", {
                                className: "w-6 h-6 text-white mr-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                })
                            }), i.jsx("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Interactive Calendar"
                            })]
                        })
                    })
                }), i.jsx("div", {
                    className: "p-8",
                    children: i.jsx("div", {
                        className: "flex justify-center",
                        children: i.jsx("div", {
                            className: "max-w-lg mx-auto",
                            children: i.jsx(DS, {
                                onClickDay: t,
                                className: "w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                            })
                        })
                    })
                }), i.jsx("div", {
                    className: "bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-100",
                    children: i.jsxs("div", {
                        className: "flex flex-wrap items-center justify-center gap-6",
                        children: [i.jsxs("div", {
                            className: "flex items-center",
                            children: [i.jsx("div", {
                                className: "w-3 h-3 bg-blue-500 rounded-full mr-3"
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Clickable dates"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center",
                            children: [i.jsx("div", {
                                className: "w-3 h-3 bg-pink-500 rounded-full mr-3"
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Today"
                            })]
                        }), i.jsxs("div", {
                            className: "flex items-center",
                            children: [i.jsx("div", {
                                className: "w-3 h-3 bg-green-500 rounded-full mr-3"
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Selected"
                            })]
                        })]
                    })
                })]
            })
        })]
    })
}
  , PS = async (e, t) => {
    try {
        return (await je.post("/auth/login", {
            email: e,
            password: t
        })).data
    } catch (n) {
        throw console.error("Login error:", n),
        n
    }
}
  , OS = () => {
    const [e,t] = w.useState("")
      , [n,r] = w.useState("")
      , [o,s] = w.useState(!1)
      , a = Ss()
      , l = async u => {
        u.preventDefault();
        try {
            const d = await PS(e, n);
            localStorage.setItem("token", d.token),
            J.success("Login successful"),
            a("/")
        } catch (d) {
            J.error("Login failed"),
            console.error("Login error:", d)
        }
    }
    ;
    return i.jsx("div", {
        className: "w-screen h-screen bg-gray-900",
        children: i.jsx("div", {
            className: "flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
            children: i.jsxs("div", {
                className: "w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-xl",
                children: [i.jsxs("div", {
                    children: [i.jsx("div", {
                        className: "flex justify-center",
                        children: i.jsx("img", {
                            alt: "Epitech",
                            src: ug,
                            className: "h-16 w-auto"
                        })
                    }), i.jsx("h2", {
                        className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",
                        children: "Login to Student Attendance"
                    })]
                }), i.jsxs("form", {
                    className: "mt-8 space-y-6",
                    onSubmit: l,
                    children: [i.jsxs("div", {
                        className: "space-y-4 rounded-md",
                        children: [i.jsxs("div", {
                            children: [i.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Email"
                            }), i.jsx("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                required: !0,
                                value: e,
                                onChange: u => t(u.target.value),
                                className: "mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-[#00baff] focus:outline-none focus:ring-[#00baff] sm:text-sm"
                            })]
                        }), i.jsxs("div", {
                            children: [i.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Password"
                            }), i.jsxs("div", {
                                className: "relative",
                                children: [i.jsx("input", {
                                    id: "password",
                                    name: "password",
                                    type: o ? "text" : "password",
                                    required: !0,
                                    value: n,
                                    onChange: u => r(u.target.value),
                                    className: "mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-[#00baff] focus:outline-none focus:ring-[#00baff] sm:text-sm pr-10"
                                }), i.jsx("button", {
                                    type: "button",
                                    onClick: () => s(!o),
                                    className: "absolute inset-y-0 right-0 mt-1 flex items-center pr-3 text-gray-400 hover:text-gray-500",
                                    children: o ? i.jsx(hw, {
                                        className: "h-5 w-5"
                                    }) : i.jsx(gw, {
                                        className: "h-5 w-5"
                                    })
                                })]
                            })]
                        })]
                    }), i.jsx("div", {
                        children: i.jsx("button", {
                            type: "submit",
                            className: "group relative flex w-full justify-center rounded-md bg-[#1d4ed8] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#00baff] focus:ring-offset-2",
                            children: "Sign in"
                        })
                    })]
                })]
            })
        })
    })
}
;
function LS() {
    const [e,t] = w.useState([])
      , [n,r] = w.useState([])
      , [o,s] = w.useState(!0)
      , [a,l] = w.useState("")
      , [u,d] = w.useState("")
      , [h,m] = w.useState({
        Monday: !1,
        Tuesday: !1,
        Wednesday: !1,
        Thursday: !1,
        Friday: !1
    })
      , [v,k] = w.useState({
        morning: {
            selected: !1,
            startTime: "09:30",
            endTime: "12:00",
            has_out: !0
        },
        afternoon: {
            selected: !1,
            startTime: "13:30",
            endTime: "17:30",
            has_out: !0
        }
    });
    w.useEffect( () => {
        (async () => {
            try {
                const E = await Si();
                t(E.promos)
            } catch (E) {
                console.error("Error fetching promos:", E),
                J.error("Failed to load available promotions.")
            } finally {
                s(!1)
            }
        }
        )()
    }
    , []);
    const x = g => {
        m(E => ({
            ...E,
            [g]: !E[g]
        }))
    }
      , N = g => {
        k(E => ({
            ...E,
            [g]: {
                ...E[g],
                selected: !E[g].selected
            }
        }))
    }
      , S = (g, E, T) => {
        k(O => ({
            ...O,
            [g]: {
                ...O[g],
                [E]: T
            }
        }))
    }
      , b = g => {
        r(E => E.includes(g) ? E.filter(T => T !== g) : [...E, g])
    }
      , y = async g => {
        if (g.preventDefault(),
        !a || !u || n.length === 0) {
            J.error("Please fill all fields: Start Date, End Date, and at least one Promo.");
            return
        }
        const E = new Date(a)
          , T = new Date(u);
        if (E > T) {
            J.error("Start date cannot be after end date.");
            return
        }
        const O = Object.entries(h).filter( ([,I]) => I).map( ([I]) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(I));
        if (O.length === 0) {
            J.error("Please select at least one day of the week.");
            return
        }
        const P = Object.entries(v).filter( ([,{selected: I}]) => I);
        if (P.length === 0) {
            J.error("Please select at least one session type.");
            return
        }
        const M = Tb({
            start: E,
            end: T
        })
          , U = [];
        if (M.forEach(I => {
            const ae = Tj(I);
            O.includes(ae) && n.forEach(fe => {
                P.forEach( ([Pe,{startTime: Ie, endTime: ke, has_out: q}]) => {
                    U.push({
                        promo: fe,
                        date: ve(I, "yyyy-MM-dd"),
                        sessionType: Pe,
                        startTime: Ie,
                        endTime: ke,
                        has_out: q
                    })
                }
                )
            }
            )
        }
        ),
        U.length === 0) {
            J.warning("No sessions to create for the selected criteria.");
            return
        }
        console.log(U);
        try {
            await Promise.all(U.map(I => ob(I))),
            J.success(`${U.length} sessions created successfully!`)
        } catch (I) {
            J.error("Failed to create some sessions. Check the console for more details."),
            console.error(I)
        }
    }
    ;
    return i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "relative overflow-hidden mb-12",
            children: [i.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-10 rounded-3xl"
            }), i.jsxs("div", {
                className: "relative max-w-4xl mx-auto text-center py-12 px-6",
                children: [i.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl",
                    children: i.jsx("svg", {
                        className: "w-8 h-8 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        })
                    })
                }), i.jsx("h1", {
                    className: "text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4",
                    children: "Create Bulk Sessions"
                }), i.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children: "Efficiently create multiple training sessions across promotions and dates."
                })]
            })]
        }), i.jsx("div", {
            className: "max-w-5xl mx-auto px-4",
            children: i.jsxs("form", {
                onSubmit: y,
                className: "space-y-8",
                children: [i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 border border-gray-100",
                    children: [i.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4",
                            children: "1"
                        }), i.jsxs("div", {
                            children: [i.jsx("h3", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Select Promotions"
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: "Choose which promotions to create sessions for"
                            })]
                        })]
                    }), o ? i.jsxs("div", {
                        className: "py-12 text-center",
                        children: [i.jsx("div", {
                            className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }), i.jsx("p", {
                            className: "mt-4 text-gray-500 text-lg",
                            children: "Loading promotions..."
                        })]
                    }) : e.length > 0 ? i.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: e.map(g => i.jsxs("label", {
                            htmlFor: g,
                            className: `relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${n.includes(g) ? "border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md" : "border-gray-200 bg-white hover:border-blue-300"}`,
                            children: [i.jsxs("div", {
                                className: "flex items-center",
                                children: [i.jsx("input", {
                                    id: g,
                                    name: "promo",
                                    type: "checkbox",
                                    checked: n.includes(g),
                                    onChange: () => b(g),
                                    className: "h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                }), i.jsxs("div", {
                                    className: "ml-4",
                                    children: [i.jsx("div", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: g.toUpperCase()
                                    }), i.jsxs("div", {
                                        className: "text-sm text-gray-500",
                                        children: ["Promotion ", g.split("_")[1]]
                                    })]
                                })]
                            }), n.includes(g) && i.jsx("div", {
                                className: "absolute top-3 right-3",
                                children: i.jsx("div", {
                                    className: "w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center",
                                    children: i.jsx("svg", {
                                        className: "w-4 h-4 text-white",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: i.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                })
                            })]
                        }, g))
                    }) : i.jsxs("div", {
                        className: "py-12 text-center",
                        children: [i.jsx("div", {
                            className: "text-4xl mb-4",
                            children: "📚"
                        }), i.jsx("p", {
                            className: "text-gray-500 text-lg",
                            children: "No promotions available"
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 border border-gray-100",
                    children: [i.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4",
                            children: "2"
                        }), i.jsxs("div", {
                            children: [i.jsx("h3", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Select Date Range"
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: "Choose the start and end dates for your sessions"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [i.jsxs("div", {
                            className: "space-y-2",
                            children: [i.jsx("label", {
                                htmlFor: "start-date",
                                className: "block text-sm font-semibold text-gray-700 uppercase tracking-wider",
                                children: "Start Date"
                            }), i.jsxs("div", {
                                className: "relative",
                                children: [i.jsx("input", {
                                    type: "date",
                                    id: "start-date",
                                    value: a,
                                    onChange: g => l(g.target.value),
                                    className: "block w-full text-black px-4 py-3 text-lg rounded-xl border-2 border-gray-200 shadow-sm focus:border-green-500 focus:ring-0 transition-colors duration-200 bg-gradient-to-br from-gray-50 to-white"
                                }), i.jsx("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none",
                                    children: i.jsx("svg", {
                                        className: "w-5 h-5 text-gray-400",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        })
                                    })
                                })]
                            })]
                        }), i.jsxs("div", {
                            className: "space-y-2",
                            children: [i.jsx("label", {
                                htmlFor: "end-date",
                                className: "block text-sm font-semibold text-gray-700 uppercase tracking-wider",
                                children: "End Date"
                            }), i.jsxs("div", {
                                className: "relative",
                                children: [i.jsx("input", {
                                    type: "date",
                                    id: "end-date",
                                    value: u,
                                    onChange: g => d(g.target.value),
                                    className: "block w-full text-black px-4 py-3 text-lg rounded-xl border-2 border-gray-200 shadow-sm focus:border-green-500 focus:ring-0 transition-colors duration-200 bg-gradient-to-br from-gray-50 to-white"
                                }), i.jsx("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none",
                                    children: i.jsx("svg", {
                                        className: "w-5 h-5 text-gray-400",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 border border-gray-100",
                    children: [i.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4",
                            children: "3"
                        }), i.jsxs("div", {
                            children: [i.jsx("h3", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Select Days of Week"
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: "Choose which days sessions should be scheduled"
                            })]
                        })]
                    }), i.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",
                        children: Object.keys(h).map(g => i.jsxs("label", {
                            htmlFor: g,
                            className: `relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${h[g] ? "border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 shadow-md" : "border-gray-200 bg-white hover:border-purple-300"}`,
                            children: [i.jsxs("div", {
                                className: "flex flex-col items-center",
                                children: [i.jsx("input", {
                                    id: g,
                                    type: "checkbox",
                                    checked: h[g],
                                    onChange: () => x(g),
                                    className: "sr-only"
                                }), i.jsx("div", {
                                    className: `w-8 h-8 rounded-full flex items-center justify-center mb-3 ${h[g] ? "bg-purple-600" : "bg-gray-300"}`,
                                    children: i.jsx("span", {
                                        className: `text-xs font-bold ${h[g] ? "text-white" : "text-gray-600"}`,
                                        children: g.substring(0, 2).toUpperCase()
                                    })
                                }), i.jsx("div", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: g
                                })]
                            }), h[g] && i.jsx("div", {
                                className: "absolute top-2 right-2",
                                children: i.jsx("div", {
                                    className: "w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center",
                                    children: i.jsx("svg", {
                                        className: "w-4 h-4 text-white",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: i.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                })
                            })]
                        }, g))
                    })]
                }), i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 border border-gray-100",
                    children: [i.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4",
                            children: "4"
                        }), i.jsxs("div", {
                            children: [i.jsx("h3", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Configure Session Types"
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: "Set up morning and afternoon sessions with custom times"
                            })]
                        })]
                    }), i.jsx("div", {
                        className: "space-y-6",
                        children: Object.keys(v).map(g => i.jsx("div", {
                            className: `rounded-2xl border-2 transition-all duration-200 ${v[g].selected ? "border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg" : "border-gray-200 bg-gray-50 hover:border-orange-300"}`,
                            children: i.jsxs("div", {
                                className: "p-6",
                                children: [i.jsxs("label", {
                                    htmlFor: g,
                                    className: "cursor-pointer flex items-center",
                                    children: [i.jsx("input", {
                                        id: g,
                                        type: "checkbox",
                                        checked: v[g].selected,
                                        onChange: () => N(g),
                                        className: "sr-only"
                                    }), i.jsx("div", {
                                        className: `w-6 h-6 rounded-lg border-2 flex items-center justify-center mr-4 transition-colors ${v[g].selected ? "border-orange-500 bg-orange-500" : "border-gray-300 bg-white"}`,
                                        children: v[g].selected && i.jsx("svg", {
                                            className: "w-4 h-4 text-white",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: i.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), i.jsxs("div", {
                                        className: "flex items-center",
                                        children: [i.jsx("div", {
                                            className: "text-2xl mr-3",
                                            children: g === "morning" ? "🌅" : "🌇"
                                        }), i.jsxs("div", {
                                            children: [i.jsxs("div", {
                                                className: "text-lg font-bold text-gray-900 capitalize",
                                                children: [g, " Session"]
                                            }), i.jsx("div", {
                                                className: "text-sm text-gray-600",
                                                children: g === "morning" ? "Early training session" : "Later training session"
                                            })]
                                        })]
                                    })]
                                }), v[g].selected && i.jsxs("div", {
                                    className: "mt-6 space-y-6 pl-10",
                                    children: [i.jsxs("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                        children: [i.jsxs("div", {
                                            className: "space-y-2",
                                            children: [i.jsx("label", {
                                                htmlFor: `${g}-start-time`,
                                                className: "block text-sm font-semibold text-gray-700 uppercase tracking-wider",
                                                children: "Start Time"
                                            }), i.jsxs("div", {
                                                className: "relative",
                                                children: [i.jsx("input", {
                                                    type: "time",
                                                    id: `${g}-start-time`,
                                                    value: v[g].startTime,
                                                    onChange: E => S(g, "startTime", E.target.value),
                                                    className: "block w-full text-black px-4 py-3 text-lg rounded-xl border-2 border-gray-200 shadow-sm focus:border-orange-500 focus:ring-0 transition-colors duration-200 bg-gradient-to-br from-gray-50 to-white"
                                                }), i.jsx("div", {
                                                    className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none",
                                                    children: i.jsx("svg", {
                                                        className: "w-5 h-5 text-gray-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: i.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), i.jsxs("div", {
                                            className: "space-y-2",
                                            children: [i.jsx("label", {
                                                htmlFor: `${g}-end-time`,
                                                className: "block text-sm font-semibold text-gray-700 uppercase tracking-wider",
                                                children: "End Time"
                                            }), i.jsxs("div", {
                                                className: "relative",
                                                children: [i.jsx("input", {
                                                    type: "time",
                                                    id: `${g}-end-time`,
                                                    value: v[g].endTime,
                                                    onChange: E => S(g, "endTime", E.target.value),
                                                    className: "block w-full text-black px-4 py-3 text-lg rounded-xl border-2 border-gray-200 shadow-sm focus:border-orange-500 focus:ring-0 transition-colors duration-200 bg-gradient-to-br from-gray-50 to-white"
                                                }), i.jsx("div", {
                                                    className: "absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none",
                                                    children: i.jsx("svg", {
                                                        className: "w-5 h-5 text-gray-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: i.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), i.jsxs("div", {
                                        className: "flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200",
                                        children: [i.jsx("input", {
                                            type: "checkbox",
                                            id: `${g}-has-out`,
                                            checked: v[g].has_out,
                                            onChange: E => S(g, "has_out", E.target.checked),
                                            className: "h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                        }), i.jsxs("label", {
                                            htmlFor: `${g}-has-out`,
                                            className: "flex-1 cursor-pointer",
                                            children: [i.jsx("span", {
                                                className: "text-sm font-semibold text-gray-900",
                                                children: "Require badge out"
                                            }), i.jsx("p", {
                                                className: "text-xs text-gray-600 mt-1",
                                                children: "When enabled, students must badge both in and out. When disabled, only badge in is required."
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }, g))
                    })]
                }), i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 border border-gray-100",
                    children: [i.jsxs("div", {
                        className: "flex items-center mb-6",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4",
                            children: "5"
                        }), i.jsxs("div", {
                            children: [i.jsx("h3", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Create Sessions"
                            }), i.jsx("p", {
                                className: "text-gray-600",
                                children: "Generate all sessions based on your configuration"
                            })]
                        })]
                    }), i.jsxs("button", {
                        type: "submit",
                        className: "w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-2xl text-lg font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl",
                        children: [i.jsx("svg", {
                            className: "w-6 h-6 mr-3",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: i.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                            })
                        }), "Create Sessions"]
                    })]
                })]
            })
        })]
    })
}
function MS({session: e, onClose: t, onSave: n, onUpdate: r}) {
    if (!e)
        return null;
    const o = ["msc3", "msc4", "msc5"];
    return i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-xl rounded-2xl bg-white",
            children: [i.jsx("h3", {
                className: "text-xl font-semibold leading-6 text-gray-900",
                children: "Update Session"
            }), i.jsxs("div", {
                className: "mt-6 space-y-6",
                children: [i.jsxs("div", {
                    children: [i.jsx("label", {
                        htmlFor: "promo",
                        className: "block text-sm font-medium text-gray-500",
                        children: "Promo"
                    }), i.jsx("select", {
                        id: "promo",
                        value: e.promo,
                        onChange: s => r("promo", s.target.value),
                        className: "mt-1 block w-full rounded-lg bg-gray-100 border-transparent p-3 text-lg text-black focus:ring-indigo-500 focus:border-indigo-500",
                        children: o.map(s => i.jsx("option", {
                            value: s,
                            children: s
                        }, s))
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        htmlFor: "sessionType",
                        className: "block text-sm font-medium text-gray-500",
                        children: "Session Type"
                    }), i.jsxs("select", {
                        id: "sessionType",
                        value: e.sessionType,
                        onChange: s => r("sessionType", s.target.value),
                        className: "mt-1 block w-full rounded-lg bg-gray-100 border-transparent p-3 text-lg text-black focus:ring-indigo-500 focus:border-indigo-500",
                        children: [i.jsx("option", {
                            children: "morning"
                        }), i.jsx("option", {
                            children: "afternoon"
                        })]
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        htmlFor: "startTime",
                        className: "block text-sm font-medium text-gray-500",
                        children: "Start Time"
                    }), i.jsx("input", {
                        type: "time",
                        id: "startTime",
                        value: e.startTime,
                        onChange: s => r("startTime", s.target.value),
                        className: "mt-1 block w-full rounded-lg bg-gray-100 border-transparent p-3 text-lg text-black focus:ring-indigo-500 focus:border-indigo-500 time-input",
                        style: {
                            colorScheme: "light"
                        }
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        htmlFor: "endTime",
                        className: "block text-sm font-medium text-gray-500",
                        children: "End Time"
                    }), i.jsx("input", {
                        type: "time",
                        id: "endTime",
                        value: e.endTime,
                        onChange: s => r("endTime", s.target.value),
                        className: "mt-1 block w-full rounded-lg bg-gray-100 border-transparent p-3 text-lg text-black focus:ring-indigo-500 focus:border-indigo-500 time-input",
                        style: {
                            colorScheme: "light"
                        }
                    })]
                }), i.jsxs("div", {
                    className: "flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200",
                    children: [i.jsx("input", {
                        type: "checkbox",
                        id: "hasOut",
                        checked: e.has_out ?? !0,
                        onChange: s => r("has_out", s.target.checked),
                        className: "h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    }), i.jsxs("label", {
                        htmlFor: "hasOut",
                        className: "flex-1 cursor-pointer",
                        children: [i.jsx("span", {
                            className: "text-sm font-semibold text-gray-900",
                            children: "Require badge out"
                        }), i.jsx("p", {
                            className: "text-xs text-gray-600 mt-1",
                            children: "When enabled, students must badge both in and out. When disabled, only badge in is required."
                        })]
                    })]
                })]
            }), i.jsxs("div", {
                className: "mt-8 flex justify-end space-x-4",
                children: [i.jsx("button", {
                    onClick: t,
                    className: "px-6 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-lg shadow-sm hover:bg-gray-300 transition-colors",
                    children: "Cancel"
                }), i.jsx("button", {
                    onClick: n,
                    className: "px-6 py-2 bg-green-500 text-white text-base font-medium rounded-lg shadow-sm hover:bg-green-600 transition-colors",
                    children: "Save"
                })]
            })]
        })
    })
}
function RS({isOpen: e, onClose: t, onConfirm: n, title: r, children: o}) {
    return e ? i.jsx("div", {
        className: "fixed inset-0 z-50 bg-gray-600 bg-opacity-75 transition-opacity flex items-center justify-center",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        children: i.jsxs("div", {
            className: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full",
            children: [i.jsx("div", {
                className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                children: i.jsxs("div", {
                    className: "sm:flex sm:items-start",
                    children: [i.jsx("div", {
                        className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",
                        children: i.jsx(fw, {
                            className: "h-6 w-6 text-red-600",
                            "aria-hidden": "true"
                        })
                    }), i.jsxs("div", {
                        className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                        children: [i.jsx("h3", {
                            className: "text-lg leading-6 font-medium text-gray-900",
                            id: "modal-title",
                            children: r
                        }), i.jsx("div", {
                            className: "mt-2",
                            children: i.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: o
                            })
                        })]
                    })]
                })
            }), i.jsxs("div", {
                className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                children: [i.jsx("button", {
                    type: "button",
                    className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
                    onClick: n,
                    children: "Confirm"
                }), i.jsx("button", {
                    type: "button",
                    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                    onClick: t,
                    children: "Cancel"
                })]
            })]
        })
    }) : null
}
const AS = e => e.reduce( (t, n) => {
    const r = ve(new Date(n.date), "EEEE, MMMM do, yyyy");
    return t[r] || (t[r] = {}),
    t[r][n.promo] || (t[r][n.promo] = []),
    t[r][n.promo].push(n),
    t
}
, {});
function FS() {
    const [e,t] = w.useState([])
      , [n,r] = w.useState(!0)
      , [o,s] = w.useState(null)
      , [a,l] = w.useState(null)
      , [u,d] = w.useState([])
      , [h,m] = w.useState("all")
      , [v,k] = w.useState(!0);
    w.useEffect( () => {
        (async () => {
            try {
                const M = await M0();
                t(M)
            } catch {
                J.error("Failed to fetch sessions.")
            } finally {
                r(!1)
            }
        }
        )()
    }
    , []),
    w.useEffect( () => {
        (async () => {
            try {
                const M = await Si();
                d(M.promos)
            } catch (M) {
                console.error("Error fetching promos:", M),
                J.error("Failed to load available promotions.")
            } finally {
                k(!1)
            }
        }
        )()
    }
    , []);
    const x = w.useMemo( () => h === "all" ? e : e.filter(P => P.promo === h), [e, h])
      , N = w.useMemo( () => AS(x), [x])
      , S = w.useMemo( () => [...new Set(x.map(M => M.date))].sort( (M, U) => new Date(U) - new Date(M)).map(M => ve(new Date(M), "EEEE, MMMM do, yyyy")).filter(M => N[M]), [x, N])
      , b = P => {
        s({
            ...P
        })
    }
      , y = () => {
        s(null)
    }
      , g = (P, M) => {
        s(U => ({
            ...U,
            [P]: M
        }))
    }
      , E = async () => {
        if (o)
            try {
                const {id: P, ...M} = o
                  , U = await sb(P, M);
                t(e.map(I => I.id === P ? U : I)),
                J.success("Session updated successfully."),
                y()
            } catch {
                J.error("Failed to update session.")
            }
    }
      , T = P => {
        l(P)
    }
      , O = async () => {
        if (a)
            try {
                await ab(a),
                t(e.filter(P => P.id !== a)),
                J.success("Session deleted successfully.")
            } catch {
                J.error("Failed to delete session.")
            } finally {
                l(null)
            }
    }
    ;
    return n ? i.jsx("div", {
        className: "pt-20 text-center",
        children: "Loading..."
    }) : i.jsxs("div", {
        className: "min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-6xl",
            children: [i.jsx("h2", {
                className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                children: "Manage Sessions"
            }), i.jsxs("div", {
                className: "mt-8 bg-white rounded-2xl shadow-xl p-8",
                children: [i.jsx("h3", {
                    className: "text-xl font-semibold text-gray-900 mb-6",
                    children: "Filter by Promotion"
                }), v ? i.jsxs("div", {
                    className: "py-4 text-center",
                    children: [i.jsx("div", {
                        className: "inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
                    }), i.jsx("p", {
                        className: "mt-2 text-gray-500",
                        children: "Loading promotions..."
                    })]
                }) : i.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [i.jsx("button", {
                        onClick: () => m("all"),
                        className: `px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${h === "all" ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: "All Promotions"
                    }), u.map(P => i.jsx("button", {
                        onClick: () => m(P),
                        className: `px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${h === P ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: P.toUpperCase()
                    }, P))]
                })]
            }), i.jsx("div", {
                className: "mt-8 space-y-12",
                children: S.map(P => i.jsxs("div", {
                    children: [i.jsx("h3", {
                        className: "text-xl font-semibold text-gray-800 bg-gray-100 p-4 rounded-t-lg",
                        children: P
                    }), i.jsx("div", {
                        className: "bg-white p-6 rounded-b-lg shadow space-y-6",
                        children: Object.keys(N[P]).sort().map(M => i.jsxs("div", {
                            children: [i.jsx("h4", {
                                className: "text-lg font-bold text-indigo-700 mb-2",
                                children: M
                            }), i.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: N[P][M].sort( (U, I) => new Date(`1970-01-01T${I.startTime}`) - new Date(`1970-01-01T${U.startTime}`)).map(U => i.jsxs("div", {
                                    className: "p-4 border rounded-md shadow-sm bg-gray-50 hover:shadow-lg transition-shadow",
                                    children: [i.jsxs("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [i.jsx("p", {
                                            className: "capitalize text-gray-600 font-semibold",
                                            children: U.sessionType
                                        }), U.has_out === !1 && i.jsx("span", {
                                            className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200",
                                            children: "📥 In Only"
                                        })]
                                    }), i.jsxs("p", {
                                        className: "text-gray-800",
                                        children: [ve(new Date(`1970-01-01T${U.startTime}`), "p"), " - ", ve(new Date(`1970-01-01T${U.endTime}`), "p")]
                                    }), i.jsxs("div", {
                                        className: "mt-4 flex justify-end space-x-2",
                                        children: [i.jsxs("button", {
                                            onClick: () => b(U),
                                            className: "inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                            children: [i.jsx(vw, {
                                                className: "h-4 w-4 mr-2"
                                            }), "Update"]
                                        }), i.jsxs("button", {
                                            onClick: () => T(U.id),
                                            className: "inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                                            children: [i.jsx(ww, {
                                                className: "h-4 w-4 mr-2"
                                            }), "Delete"]
                                        })]
                                    })]
                                }, U.id))
                            })]
                        }, M))
                    })]
                }, P))
            })]
        }), i.jsx(MS, {
            session: o,
            onClose: y,
            onSave: E,
            onUpdate: g
        }), i.jsx(RS, {
            isOpen: !!a,
            onClose: () => l(null),
            onConfirm: O,
            title: "Delete Session",
            children: "Are you sure you want to delete this session? This action cannot be undone."
        })]
    })
}
const IS = e => e.reduce( (t, n) => (t[n.promo] || (t[n.promo] = []),
t[n.promo].push(n),
t), {});
function $S() {
    const {date: e} = e0()
      , t = Ss()
      , [n,r] = w.useState([])
      , [o,s] = w.useState(!0);
    w.useEffect( () => {
        e && (async () => {
            try {
                const h = await ib(e);
                r(h)
            } catch {
                J.error("Failed to fetch sessions for this date.")
            } finally {
                s(!1)
            }
        }
        )()
    }
    , [e]);
    const a = w.useMemo( () => IS(n), [n])
      , l = ve(new Date(e), "EEEE, MMMM do, yyyy")
      , u = d => {
        t(`/sessions/${d}/presences`)
    }
    ;
    return o ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20",
        children: i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("div", {
                className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }), i.jsx("p", {
                className: "mt-4 text-gray-600 text-lg",
                children: "Loading sessions..."
            })]
        })
    }) : i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "relative overflow-hidden mb-12",
            children: [i.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90 rounded-3xl mx-4"
            }), i.jsxs("div", {
                className: "relative max-w-7xl mx-auto py-12 px-6 text-center",
                children: [i.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl",
                    children: i.jsx("svg", {
                        className: "w-8 h-8 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                }), i.jsx("h1", {
                    className: "text-3xl md:text-4xl font-extrabold text-white mb-4",
                    children: "Sessions Schedule"
                }), i.jsx("p", {
                    className: "text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6",
                    children: l
                }), i.jsxs("div", {
                    className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-gray-50 shadow-lg",
                    children: [i.jsx("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                    }), n.length, " ", n.length === 1 ? "Session" : "Sessions", " Available"]
                })]
            })]
        }), i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [n.length === 0 ? i.jsx("div", {
                className: "text-center py-16",
                children: i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-12 border border-gray-100",
                    children: [i.jsx("div", {
                        className: "text-6xl mb-6",
                        children: "📅"
                    }), i.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "No Sessions Scheduled"
                    }), i.jsx("p", {
                        className: "text-lg text-gray-500 mb-8",
                        children: "There are no training sessions planned for this day."
                    }), i.jsxs("button", {
                        onClick: () => t("/calendar"),
                        className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg transform hover:scale-105 transition-all duration-200",
                        children: [i.jsx("svg", {
                            className: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: i.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M7 16l-4-4m0 0l4-4m-4 4h18"
                            })
                        }), "Back to Calendar"]
                    })]
                })
            }) : i.jsx("div", {
                className: "space-y-8",
                children: Object.keys(a).sort().map( (d, h) => i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100",
                    children: [i.jsx("div", {
                        className: `px-8 py-6 bg-gradient-to-r ${h % 4 === 0 ? "from-blue-600 to-blue-700" : h % 4 === 1 ? "from-green-600 to-green-700" : h % 4 === 2 ? "from-purple-600 to-purple-700" : "from-orange-600 to-orange-700"}`,
                        children: i.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [i.jsxs("div", {
                                className: "flex items-center",
                                children: [i.jsx("div", {
                                    className: "w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4",
                                    children: i.jsx("svg", {
                                        className: "w-6 h-6 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        })
                                    })
                                }), i.jsxs("div", {
                                    children: [i.jsx("h3", {
                                        className: "text-2xl font-bold text-white",
                                        children: d.toUpperCase()
                                    }), i.jsxs("p", {
                                        className: "text-blue-100",
                                        children: [a[d].length, " ", a[d].length === 1 ? "session" : "sessions"]
                                    })]
                                })]
                            }), i.jsx("div", {
                                className: "text-white text-3xl",
                                children: "🎓"
                            })]
                        })
                    }), i.jsx("div", {
                        className: "p-8",
                        children: i.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: a[d].map(m => i.jsxs("div", {
                                onClick: () => u(m.id),
                                className: "group relative bg-gradient-to-br from-gray-50 to-white p-6 border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer hover:border-blue-400",
                                children: [i.jsxs("div", {
                                    className: "flex items-start justify-between mb-4",
                                    children: [i.jsxs("div", {
                                        className: "flex-1",
                                        children: [i.jsxs("div", {
                                            className: "flex items-center mb-2",
                                            children: [i.jsx("div", {
                                                className: `w-3 h-3 rounded-full mr-3 ${m.sessionType === "morning" ? "bg-yellow-400" : "bg-orange-500"}`
                                            }), i.jsxs("h4", {
                                                className: "text-lg font-bold text-gray-900 capitalize group-hover:text-blue-600 transition-colors",
                                                children: [m.sessionType, " Session"]
                                            }), m.has_out === !1 && i.jsx("span", {
                                                className: "ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200",
                                                children: "📥 In Only"
                                            })]
                                        }), i.jsxs("div", {
                                            className: "flex items-center text-gray-600",
                                            children: [i.jsx("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: i.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                })
                                            }), i.jsxs("span", {
                                                className: "text-sm font-medium",
                                                children: [ve(new Date(`1970-01-01T${m.startTime}`), "p"), " - ", ve(new Date(`1970-01-01T${m.endTime}`), "p")]
                                            })]
                                        })]
                                    }), i.jsx("div", {
                                        className: "text-2xl",
                                        children: m.sessionType === "morning" ? "🌅" : "🌇"
                                    })]
                                }), i.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [i.jsx("span", {
                                        className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-colors",
                                        children: "Click to manage"
                                    }), i.jsx("svg", {
                                        className: "w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        })
                                    })]
                                }), i.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                })]
                            }, m.id))
                        })
                    })]
                }, d))
            }), i.jsx("div", {
                className: "text-center mt-12",
                children: i.jsxs("button", {
                    onClick: () => t("/calendar"),
                    className: "inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-2xl text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-lg transform hover:scale-105 transition-all duration-200",
                    children: [i.jsx("svg", {
                        className: "w-5 h-5 mr-3",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M7 16l-4-4m0 0l4-4m-4 4h18"
                        })
                    }), "Back to Calendar"]
                })
            })]
        })]
    })
}
var Ag = {
    exports: {}
}
  , BS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , US = BS
  , WS = US;
function Fg() {}
function Ig() {}
Ig.resetWarningCache = Fg;
var zS = function() {
    function e(r, o, s, a, l, u) {
        if (u !== WS) {
            var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw d.name = "Invariant Violation",
            d
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Ig,
        resetWarningCache: Fg
    };
    return n.PropTypes = n,
    n
};
Ag.exports = zS();
var HS = Ag.exports;
const G = ei(HS);
function $g({isOpen: e, onClose: t, onSave: n, student: r, currentSessionId: o}) {
    var u, d;
    const [s,a] = w.useState(ve(new Date, "HH:mm"));
    if (w.useEffect( () => {
        e && a(ve(new Date, "HH:mm"))
    }
    , [e]),
    !e)
        return null;
    const l = () => {
        if (!r || !r.session || !r.user) {
            console.error("Student, session, or user data is missing.");
            return
        }
        const m = `${ve(new Date(r.session.date), "yyyy-MM-dd")}T${s}:00`;
        n({
            idCard: r.user.id_card,
            presenceDate: m,
            session: o
        })
    }
    ;
    return i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm z-50",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-xl rounded-2xl bg-white",
            children: [i.jsxs("h3", {
                className: "text-xl font-semibold leading-6 text-gray-900",
                children: ["Add Manual Presence for ", i.jsxs("span", {
                    className: "text-indigo-600",
                    children: [(u = r == null ? void 0 : r.user) == null ? void 0 : u.firstName, " ", (d = r == null ? void 0 : r.user) == null ? void 0 : d.lastName]
                })]
            }), i.jsxs("div", {
                className: "mt-6 space-y-6",
                children: [i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-500",
                        children: "Date"
                    }), i.jsx("p", {
                        className: "mt-1 text-lg text-gray-800 bg-gray-100 p-3 rounded-lg",
                        children: r ? ve(new Date(r.session.date), "EEEE, MMMM do, yyyy") : ""
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        htmlFor: "presenceTime",
                        className: "block text-sm font-medium text-gray-500",
                        children: "Time"
                    }), i.jsx("input", {
                        type: "time",
                        id: "presenceTime",
                        value: s,
                        onChange: h => a(h.target.value),
                        className: "mt-1 block w-full rounded-lg bg-gray-100 border-transparent p-3 text-lg text-black focus:ring-indigo-500 focus:border-indigo-500 time-input",
                        style: {
                            colorScheme: "light"
                        }
                    }), i.jsx("p", {
                        className: "mt-2 text-sm text-gray-500",
                        children: "The system will automatically determine the appropriate session part (morning/afternoon in/out) based on this time."
                    })]
                })]
            }), i.jsxs("div", {
                className: "mt-8 flex justify-end space-x-4",
                children: [i.jsx("button", {
                    onClick: t,
                    className: "px-6 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-lg shadow-sm hover:bg-gray-300 transition-colors",
                    children: "Cancel"
                }), i.jsx("button", {
                    onClick: l,
                    className: "px-6 py-2 bg-green-500 text-white text-base font-medium rounded-lg shadow-sm hover:bg-green-600 transition-colors",
                    children: "Save Presence"
                })]
            })]
        })
    })
}
$g.propTypes = {
    isOpen: G.bool.isRequired,
    onClose: G.func.isRequired,
    onSave: G.func.isRequired,
    currentSessionId: G.string.isRequired,
    student: G.shape({
        user: G.shape({
            id_card: G.string.isRequired,
            firstName: G.string,
            lastName: G.string
        }),
        session: G.shape({
            date: G.string.isRequired
        })
    })
};
var kd = {}
  , Ai = {};
Ai.byteLength = qS;
Ai.toByteArray = GS;
Ai.fromByteArray = XS;
var on = []
  , Pt = []
  , VS = typeof Uint8Array < "u" ? Uint8Array : Array
  , Cl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Rr = 0, YS = Cl.length; Rr < YS; ++Rr)
    on[Rr] = Cl[Rr],
    Pt[Cl.charCodeAt(Rr)] = Rr;
Pt[45] = 62;
Pt[95] = 63;
function Bg(e) {
    var t = e.length;
    if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    n === -1 && (n = t);
    var r = n === t ? 0 : 4 - n % 4;
    return [n, r]
}
function qS(e) {
    var t = Bg(e)
      , n = t[0]
      , r = t[1];
    return (n + r) * 3 / 4 - r
}
function QS(e, t, n) {
    return (t + n) * 3 / 4 - n
}
function GS(e) {
    var t, n = Bg(e), r = n[0], o = n[1], s = new VS(QS(e, r, o)), a = 0, l = o > 0 ? r - 4 : r, u;
    for (u = 0; u < l; u += 4)
        t = Pt[e.charCodeAt(u)] << 18 | Pt[e.charCodeAt(u + 1)] << 12 | Pt[e.charCodeAt(u + 2)] << 6 | Pt[e.charCodeAt(u + 3)],
        s[a++] = t >> 16 & 255,
        s[a++] = t >> 8 & 255,
        s[a++] = t & 255;
    return o === 2 && (t = Pt[e.charCodeAt(u)] << 2 | Pt[e.charCodeAt(u + 1)] >> 4,
    s[a++] = t & 255),
    o === 1 && (t = Pt[e.charCodeAt(u)] << 10 | Pt[e.charCodeAt(u + 1)] << 4 | Pt[e.charCodeAt(u + 2)] >> 2,
    s[a++] = t >> 8 & 255,
    s[a++] = t & 255),
    s
}
function KS(e) {
    return on[e >> 18 & 63] + on[e >> 12 & 63] + on[e >> 6 & 63] + on[e & 63]
}
function JS(e, t, n) {
    for (var r, o = [], s = t; s < n; s += 3)
        r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255),
        o.push(KS(r));
    return o.join("")
}
function XS(e) {
    for (var t, n = e.length, r = n % 3, o = [], s = 16383, a = 0, l = n - r; a < l; a += s)
        o.push(JS(e, a, a + s > l ? l : a + s));
    return r === 1 ? (t = e[n - 1],
    o.push(on[t >> 2] + on[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1],
    o.push(on[t >> 10] + on[t >> 4 & 63] + on[t << 2 & 63] + "=")),
    o.join("")
}
var Sd = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Sd.read = function(e, t, n, r, o) {
    var s, a, l = o * 8 - r - 1, u = (1 << l) - 1, d = u >> 1, h = -7, m = n ? o - 1 : 0, v = n ? -1 : 1, k = e[t + m];
    for (m += v,
    s = k & (1 << -h) - 1,
    k >>= -h,
    h += l; h > 0; s = s * 256 + e[t + m],
    m += v,
    h -= 8)
        ;
    for (a = s & (1 << -h) - 1,
    s >>= -h,
    h += r; h > 0; a = a * 256 + e[t + m],
    m += v,
    h -= 8)
        ;
    if (s === 0)
        s = 1 - d;
    else {
        if (s === u)
            return a ? NaN : (k ? -1 : 1) * (1 / 0);
        a = a + Math.pow(2, r),
        s = s - d
    }
    return (k ? -1 : 1) * a * Math.pow(2, s - r)
}
;
Sd.write = function(e, t, n, r, o, s) {
    var a, l, u, d = s * 8 - o - 1, h = (1 << d) - 1, m = h >> 1, v = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = r ? 0 : s - 1, x = r ? 1 : -1, N = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t),
    isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0,
    a = h) : (a = Math.floor(Math.log(t) / Math.LN2),
    t * (u = Math.pow(2, -a)) < 1 && (a--,
    u *= 2),
    a + m >= 1 ? t += v / u : t += v * Math.pow(2, 1 - m),
    t * u >= 2 && (a++,
    u /= 2),
    a + m >= h ? (l = 0,
    a = h) : a + m >= 1 ? (l = (t * u - 1) * Math.pow(2, o),
    a = a + m) : (l = t * Math.pow(2, m - 1) * Math.pow(2, o),
    a = 0)); o >= 8; e[n + k] = l & 255,
    k += x,
    l /= 256,
    o -= 8)
        ;
    for (a = a << o | l,
    d += o; d > 0; e[n + k] = a & 255,
    k += x,
    a /= 256,
    d -= 8)
        ;
    e[n + k - x] |= N * 128
}
;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
    const t = Ai
      , n = Sd
      , r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = l,
    e.SlowBuffer = y,
    e.INSPECT_MAX_BYTES = 50;
    const o = 2147483647;
    e.kMaxLength = o,
    l.TYPED_ARRAY_SUPPORT = s(),
    !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function s() {
        try {
            const p = new Uint8Array(1)
              , c = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(c, Uint8Array.prototype),
            Object.setPrototypeOf(p, c),
            p.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(l.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (l.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(l.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (l.isBuffer(this))
                return this.byteOffset
        }
    });
    function a(p) {
        if (p > o)
            throw new RangeError('The value "' + p + '" is invalid for option "size"');
        const c = new Uint8Array(p);
        return Object.setPrototypeOf(c, l.prototype),
        c
    }
    function l(p, c, f) {
        if (typeof p == "number") {
            if (typeof c == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return m(p)
        }
        return u(p, c, f)
    }
    l.poolSize = 8192;
    function u(p, c, f) {
        if (typeof p == "string")
            return v(p, c);
        if (ArrayBuffer.isView(p))
            return x(p);
        if (p == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
        if (pe(p, ArrayBuffer) || p && pe(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (pe(p, SharedArrayBuffer) || p && pe(p.buffer, SharedArrayBuffer)))
            return N(p, c, f);
        if (typeof p == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        const j = p.valueOf && p.valueOf();
        if (j != null && j !== p)
            return l.from(j, c, f);
        const C = S(p);
        if (C)
            return C;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
            return l.from(p[Symbol.toPrimitive]("string"), c, f);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p)
    }
    l.from = function(p, c, f) {
        return u(p, c, f)
    }
    ,
    Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(l, Uint8Array);
    function d(p) {
        if (typeof p != "number")
            throw new TypeError('"size" argument must be of type number');
        if (p < 0)
            throw new RangeError('The value "' + p + '" is invalid for option "size"')
    }
    function h(p, c, f) {
        return d(p),
        p <= 0 ? a(p) : c !== void 0 ? typeof f == "string" ? a(p).fill(c, f) : a(p).fill(c) : a(p)
    }
    l.alloc = function(p, c, f) {
        return h(p, c, f)
    }
    ;
    function m(p) {
        return d(p),
        a(p < 0 ? 0 : b(p) | 0)
    }
    l.allocUnsafe = function(p) {
        return m(p)
    }
    ,
    l.allocUnsafeSlow = function(p) {
        return m(p)
    }
    ;
    function v(p, c) {
        if ((typeof c != "string" || c === "") && (c = "utf8"),
        !l.isEncoding(c))
            throw new TypeError("Unknown encoding: " + c);
        const f = g(p, c) | 0;
        let j = a(f);
        const C = j.write(p, c);
        return C !== f && (j = j.slice(0, C)),
        j
    }
    function k(p) {
        const c = p.length < 0 ? 0 : b(p.length) | 0
          , f = a(c);
        for (let j = 0; j < c; j += 1)
            f[j] = p[j] & 255;
        return f
    }
    function x(p) {
        if (pe(p, Uint8Array)) {
            const c = new Uint8Array(p);
            return N(c.buffer, c.byteOffset, c.byteLength)
        }
        return k(p)
    }
    function N(p, c, f) {
        if (c < 0 || p.byteLength < c)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (p.byteLength < c + (f || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let j;
        return c === void 0 && f === void 0 ? j = new Uint8Array(p) : f === void 0 ? j = new Uint8Array(p,c) : j = new Uint8Array(p,c,f),
        Object.setPrototypeOf(j, l.prototype),
        j
    }
    function S(p) {
        if (l.isBuffer(p)) {
            const c = b(p.length) | 0
              , f = a(c);
            return f.length === 0 || p.copy(f, 0, 0, c),
            f
        }
        if (p.length !== void 0)
            return typeof p.length != "number" || bt(p.length) ? a(0) : k(p);
        if (p.type === "Buffer" && Array.isArray(p.data))
            return k(p.data)
    }
    function b(p) {
        if (p >= o)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
        return p | 0
    }
    function y(p) {
        return +p != p && (p = 0),
        l.alloc(+p)
    }
    l.isBuffer = function(c) {
        return c != null && c._isBuffer === !0 && c !== l.prototype
    }
    ,
    l.compare = function(c, f) {
        if (pe(c, Uint8Array) && (c = l.from(c, c.offset, c.byteLength)),
        pe(f, Uint8Array) && (f = l.from(f, f.offset, f.byteLength)),
        !l.isBuffer(c) || !l.isBuffer(f))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (c === f)
            return 0;
        let j = c.length
          , C = f.length;
        for (let D = 0, L = Math.min(j, C); D < L; ++D)
            if (c[D] !== f[D]) {
                j = c[D],
                C = f[D];
                break
            }
        return j < C ? -1 : C < j ? 1 : 0
    }
    ,
    l.isEncoding = function(c) {
        switch (String(c).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    l.concat = function(c, f) {
        if (!Array.isArray(c))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (c.length === 0)
            return l.alloc(0);
        let j;
        if (f === void 0)
            for (f = 0,
            j = 0; j < c.length; ++j)
                f += c[j].length;
        const C = l.allocUnsafe(f);
        let D = 0;
        for (j = 0; j < c.length; ++j) {
            let L = c[j];
            if (pe(L, Uint8Array))
                D + L.length > C.length ? (l.isBuffer(L) || (L = l.from(L)),
                L.copy(C, D)) : Uint8Array.prototype.set.call(C, L, D);
            else if (l.isBuffer(L))
                L.copy(C, D);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            D += L.length
        }
        return C
    }
    ;
    function g(p, c) {
        if (l.isBuffer(p))
            return p.length;
        if (ArrayBuffer.isView(p) || pe(p, ArrayBuffer))
            return p.byteLength;
        if (typeof p != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p);
        const f = p.length
          , j = arguments.length > 2 && arguments[2] === !0;
        if (!j && f === 0)
            return 0;
        let C = !1;
        for (; ; )
            switch (c) {
            case "ascii":
            case "latin1":
            case "binary":
                return f;
            case "utf8":
            case "utf-8":
                return dt(p).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return f * 2;
            case "hex":
                return f >>> 1;
            case "base64":
                return Dr(p).length;
            default:
                if (C)
                    return j ? -1 : dt(p).length;
                c = ("" + c).toLowerCase(),
                C = !0
            }
    }
    l.byteLength = g;
    function E(p, c, f) {
        let j = !1;
        if ((c === void 0 || c < 0) && (c = 0),
        c > this.length || ((f === void 0 || f > this.length) && (f = this.length),
        f <= 0) || (f >>>= 0,
        c >>>= 0,
        f <= c))
            return "";
        for (p || (p = "utf8"); ; )
            switch (p) {
            case "hex":
                return W(this, c, f);
            case "utf8":
            case "utf-8":
                return Ie(this, c, f);
            case "ascii":
                return Se(this, c, f);
            case "latin1":
            case "binary":
                return $(this, c, f);
            case "base64":
                return Pe(this, c, f);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return V(this, c, f);
            default:
                if (j)
                    throw new TypeError("Unknown encoding: " + p);
                p = (p + "").toLowerCase(),
                j = !0
            }
    }
    l.prototype._isBuffer = !0;
    function T(p, c, f) {
        const j = p[c];
        p[c] = p[f],
        p[f] = j
    }
    l.prototype.swap16 = function() {
        const c = this.length;
        if (c % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let f = 0; f < c; f += 2)
            T(this, f, f + 1);
        return this
    }
    ,
    l.prototype.swap32 = function() {
        const c = this.length;
        if (c % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let f = 0; f < c; f += 4)
            T(this, f, f + 3),
            T(this, f + 1, f + 2);
        return this
    }
    ,
    l.prototype.swap64 = function() {
        const c = this.length;
        if (c % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let f = 0; f < c; f += 8)
            T(this, f, f + 7),
            T(this, f + 1, f + 6),
            T(this, f + 2, f + 5),
            T(this, f + 3, f + 4);
        return this
    }
    ,
    l.prototype.toString = function() {
        const c = this.length;
        return c === 0 ? "" : arguments.length === 0 ? Ie(this, 0, c) : E.apply(this, arguments)
    }
    ,
    l.prototype.toLocaleString = l.prototype.toString,
    l.prototype.equals = function(c) {
        if (!l.isBuffer(c))
            throw new TypeError("Argument must be a Buffer");
        return this === c ? !0 : l.compare(this, c) === 0
    }
    ,
    l.prototype.inspect = function() {
        let c = "";
        const f = e.INSPECT_MAX_BYTES;
        return c = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(),
        this.length > f && (c += " ... "),
        "<Buffer " + c + ">"
    }
    ,
    r && (l.prototype[r] = l.prototype.inspect),
    l.prototype.compare = function(c, f, j, C, D) {
        if (pe(c, Uint8Array) && (c = l.from(c, c.offset, c.byteLength)),
        !l.isBuffer(c))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c);
        if (f === void 0 && (f = 0),
        j === void 0 && (j = c ? c.length : 0),
        C === void 0 && (C = 0),
        D === void 0 && (D = this.length),
        f < 0 || j > c.length || C < 0 || D > this.length)
            throw new RangeError("out of range index");
        if (C >= D && f >= j)
            return 0;
        if (C >= D)
            return -1;
        if (f >= j)
            return 1;
        if (f >>>= 0,
        j >>>= 0,
        C >>>= 0,
        D >>>= 0,
        this === c)
            return 0;
        let L = D - C
          , X = j - f;
        const me = Math.min(L, X)
          , le = this.slice(C, D)
          , he = c.slice(f, j);
        for (let se = 0; se < me; ++se)
            if (le[se] !== he[se]) {
                L = le[se],
                X = he[se];
                break
            }
        return L < X ? -1 : X < L ? 1 : 0
    }
    ;
    function O(p, c, f, j, C) {
        if (p.length === 0)
            return -1;
        if (typeof f == "string" ? (j = f,
        f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648),
        f = +f,
        bt(f) && (f = C ? 0 : p.length - 1),
        f < 0 && (f = p.length + f),
        f >= p.length) {
            if (C)
                return -1;
            f = p.length - 1
        } else if (f < 0)
            if (C)
                f = 0;
            else
                return -1;
        if (typeof c == "string" && (c = l.from(c, j)),
        l.isBuffer(c))
            return c.length === 0 ? -1 : P(p, c, f, j, C);
        if (typeof c == "number")
            return c = c & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(p, c, f) : Uint8Array.prototype.lastIndexOf.call(p, c, f) : P(p, [c], f, j, C);
        throw new TypeError("val must be string, number or Buffer")
    }
    function P(p, c, f, j, C) {
        let D = 1
          , L = p.length
          , X = c.length;
        if (j !== void 0 && (j = String(j).toLowerCase(),
        j === "ucs2" || j === "ucs-2" || j === "utf16le" || j === "utf-16le")) {
            if (p.length < 2 || c.length < 2)
                return -1;
            D = 2,
            L /= 2,
            X /= 2,
            f /= 2
        }
        function me(he, se) {
            return D === 1 ? he[se] : he.readUInt16BE(se * D)
        }
        let le;
        if (C) {
            let he = -1;
            for (le = f; le < L; le++)
                if (me(p, le) === me(c, he === -1 ? 0 : le - he)) {
                    if (he === -1 && (he = le),
                    le - he + 1 === X)
                        return he * D
                } else
                    he !== -1 && (le -= le - he),
                    he = -1
        } else
            for (f + X > L && (f = L - X),
            le = f; le >= 0; le--) {
                let he = !0;
                for (let se = 0; se < X; se++)
                    if (me(p, le + se) !== me(c, se)) {
                        he = !1;
                        break
                    }
                if (he)
                    return le
            }
        return -1
    }
    l.prototype.includes = function(c, f, j) {
        return this.indexOf(c, f, j) !== -1
    }
    ,
    l.prototype.indexOf = function(c, f, j) {
        return O(this, c, f, j, !0)
    }
    ,
    l.prototype.lastIndexOf = function(c, f, j) {
        return O(this, c, f, j, !1)
    }
    ;
    function M(p, c, f, j) {
        f = Number(f) || 0;
        const C = p.length - f;
        j ? (j = Number(j),
        j > C && (j = C)) : j = C;
        const D = c.length;
        j > D / 2 && (j = D / 2);
        let L;
        for (L = 0; L < j; ++L) {
            const X = parseInt(c.substr(L * 2, 2), 16);
            if (bt(X))
                return L;
            p[f + L] = X
        }
        return L
    }
    function U(p, c, f, j) {
        return Nn(dt(c, p.length - f), p, f, j)
    }
    function I(p, c, f, j) {
        return Nn(nr(c), p, f, j)
    }
    function ae(p, c, f, j) {
        return Nn(Dr(c), p, f, j)
    }
    function fe(p, c, f, j) {
        return Nn(ft(c, p.length - f), p, f, j)
    }
    l.prototype.write = function(c, f, j, C) {
        if (f === void 0)
            C = "utf8",
            j = this.length,
            f = 0;
        else if (j === void 0 && typeof f == "string")
            C = f,
            j = this.length,
            f = 0;
        else if (isFinite(f))
            f = f >>> 0,
            isFinite(j) ? (j = j >>> 0,
            C === void 0 && (C = "utf8")) : (C = j,
            j = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const D = this.length - f;
        if ((j === void 0 || j > D) && (j = D),
        c.length > 0 && (j < 0 || f < 0) || f > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        C || (C = "utf8");
        let L = !1;
        for (; ; )
            switch (C) {
            case "hex":
                return M(this, c, f, j);
            case "utf8":
            case "utf-8":
                return U(this, c, f, j);
            case "ascii":
            case "latin1":
            case "binary":
                return I(this, c, f, j);
            case "base64":
                return ae(this, c, f, j);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return fe(this, c, f, j);
            default:
                if (L)
                    throw new TypeError("Unknown encoding: " + C);
                C = ("" + C).toLowerCase(),
                L = !0
            }
    }
    ,
    l.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function Pe(p, c, f) {
        return c === 0 && f === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(c, f))
    }
    function Ie(p, c, f) {
        f = Math.min(p.length, f);
        const j = [];
        let C = c;
        for (; C < f; ) {
            const D = p[C];
            let L = null
              , X = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
            if (C + X <= f) {
                let me, le, he, se;
                switch (X) {
                case 1:
                    D < 128 && (L = D);
                    break;
                case 2:
                    me = p[C + 1],
                    (me & 192) === 128 && (se = (D & 31) << 6 | me & 63,
                    se > 127 && (L = se));
                    break;
                case 3:
                    me = p[C + 1],
                    le = p[C + 2],
                    (me & 192) === 128 && (le & 192) === 128 && (se = (D & 15) << 12 | (me & 63) << 6 | le & 63,
                    se > 2047 && (se < 55296 || se > 57343) && (L = se));
                    break;
                case 4:
                    me = p[C + 1],
                    le = p[C + 2],
                    he = p[C + 3],
                    (me & 192) === 128 && (le & 192) === 128 && (he & 192) === 128 && (se = (D & 15) << 18 | (me & 63) << 12 | (le & 63) << 6 | he & 63,
                    se > 65535 && se < 1114112 && (L = se))
                }
            }
            L === null ? (L = 65533,
            X = 1) : L > 65535 && (L -= 65536,
            j.push(L >>> 10 & 1023 | 55296),
            L = 56320 | L & 1023),
            j.push(L),
            C += X
        }
        return q(j)
    }
    const ke = 4096;
    function q(p) {
        const c = p.length;
        if (c <= ke)
            return String.fromCharCode.apply(String, p);
        let f = ""
          , j = 0;
        for (; j < c; )
            f += String.fromCharCode.apply(String, p.slice(j, j += ke));
        return f
    }
    function Se(p, c, f) {
        let j = "";
        f = Math.min(p.length, f);
        for (let C = c; C < f; ++C)
            j += String.fromCharCode(p[C] & 127);
        return j
    }
    function $(p, c, f) {
        let j = "";
        f = Math.min(p.length, f);
        for (let C = c; C < f; ++C)
            j += String.fromCharCode(p[C]);
        return j
    }
    function W(p, c, f) {
        const j = p.length;
        (!c || c < 0) && (c = 0),
        (!f || f < 0 || f > j) && (f = j);
        let C = "";
        for (let D = c; D < f; ++D)
            C += bo[p[D]];
        return C
    }
    function V(p, c, f) {
        const j = p.slice(c, f);
        let C = "";
        for (let D = 0; D < j.length - 1; D += 2)
            C += String.fromCharCode(j[D] + j[D + 1] * 256);
        return C
    }
    l.prototype.slice = function(c, f) {
        const j = this.length;
        c = ~~c,
        f = f === void 0 ? j : ~~f,
        c < 0 ? (c += j,
        c < 0 && (c = 0)) : c > j && (c = j),
        f < 0 ? (f += j,
        f < 0 && (f = 0)) : f > j && (f = j),
        f < c && (f = c);
        const C = this.subarray(c, f);
        return Object.setPrototypeOf(C, l.prototype),
        C
    }
    ;
    function B(p, c, f) {
        if (p % 1 !== 0 || p < 0)
            throw new RangeError("offset is not uint");
        if (p + c > f)
            throw new RangeError("Trying to access beyond buffer length")
    }
    l.prototype.readUintLE = l.prototype.readUIntLE = function(c, f, j) {
        c = c >>> 0,
        f = f >>> 0,
        j || B(c, f, this.length);
        let C = this[c]
          , D = 1
          , L = 0;
        for (; ++L < f && (D *= 256); )
            C += this[c + L] * D;
        return C
    }
    ,
    l.prototype.readUintBE = l.prototype.readUIntBE = function(c, f, j) {
        c = c >>> 0,
        f = f >>> 0,
        j || B(c, f, this.length);
        let C = this[c + --f]
          , D = 1;
        for (; f > 0 && (D *= 256); )
            C += this[c + --f] * D;
        return C
    }
    ,
    l.prototype.readUint8 = l.prototype.readUInt8 = function(c, f) {
        return c = c >>> 0,
        f || B(c, 1, this.length),
        this[c]
    }
    ,
    l.prototype.readUint16LE = l.prototype.readUInt16LE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 2, this.length),
        this[c] | this[c + 1] << 8
    }
    ,
    l.prototype.readUint16BE = l.prototype.readUInt16BE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 2, this.length),
        this[c] << 8 | this[c + 1]
    }
    ,
    l.prototype.readUint32LE = l.prototype.readUInt32LE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 4, this.length),
        (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216
    }
    ,
    l.prototype.readUint32BE = l.prototype.readUInt32BE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 4, this.length),
        this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3])
    }
    ,
    l.prototype.readBigUInt64LE = _t(function(c) {
        c = c >>> 0,
        Dt(c, "offset");
        const f = this[c]
          , j = this[c + 7];
        (f === void 0 || j === void 0) && ue(c, this.length - 8);
        const C = f + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24
          , D = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + j * 2 ** 24;
        return BigInt(C) + (BigInt(D) << BigInt(32))
    }),
    l.prototype.readBigUInt64BE = _t(function(c) {
        c = c >>> 0,
        Dt(c, "offset");
        const f = this[c]
          , j = this[c + 7];
        (f === void 0 || j === void 0) && ue(c, this.length - 8);
        const C = f * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c]
          , D = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + j;
        return (BigInt(C) << BigInt(32)) + BigInt(D)
    }),
    l.prototype.readIntLE = function(c, f, j) {
        c = c >>> 0,
        f = f >>> 0,
        j || B(c, f, this.length);
        let C = this[c]
          , D = 1
          , L = 0;
        for (; ++L < f && (D *= 256); )
            C += this[c + L] * D;
        return D *= 128,
        C >= D && (C -= Math.pow(2, 8 * f)),
        C
    }
    ,
    l.prototype.readIntBE = function(c, f, j) {
        c = c >>> 0,
        f = f >>> 0,
        j || B(c, f, this.length);
        let C = f
          , D = 1
          , L = this[c + --C];
        for (; C > 0 && (D *= 256); )
            L += this[c + --C] * D;
        return D *= 128,
        L >= D && (L -= Math.pow(2, 8 * f)),
        L
    }
    ,
    l.prototype.readInt8 = function(c, f) {
        return c = c >>> 0,
        f || B(c, 1, this.length),
        this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
    }
    ,
    l.prototype.readInt16LE = function(c, f) {
        c = c >>> 0,
        f || B(c, 2, this.length);
        const j = this[c] | this[c + 1] << 8;
        return j & 32768 ? j | 4294901760 : j
    }
    ,
    l.prototype.readInt16BE = function(c, f) {
        c = c >>> 0,
        f || B(c, 2, this.length);
        const j = this[c + 1] | this[c] << 8;
        return j & 32768 ? j | 4294901760 : j
    }
    ,
    l.prototype.readInt32LE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 4, this.length),
        this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24
    }
    ,
    l.prototype.readInt32BE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 4, this.length),
        this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]
    }
    ,
    l.prototype.readBigInt64LE = _t(function(c) {
        c = c >>> 0,
        Dt(c, "offset");
        const f = this[c]
          , j = this[c + 7];
        (f === void 0 || j === void 0) && ue(c, this.length - 8);
        const C = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (j << 24);
        return (BigInt(C) << BigInt(32)) + BigInt(f + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24)
    }),
    l.prototype.readBigInt64BE = _t(function(c) {
        c = c >>> 0,
        Dt(c, "offset");
        const f = this[c]
          , j = this[c + 7];
        (f === void 0 || j === void 0) && ue(c, this.length - 8);
        const C = (f << 24) + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
        return (BigInt(C) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + j)
    }),
    l.prototype.readFloatLE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 4, this.length),
        n.read(this, c, !0, 23, 4)
    }
    ,
    l.prototype.readFloatBE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 4, this.length),
        n.read(this, c, !1, 23, 4)
    }
    ,
    l.prototype.readDoubleLE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 8, this.length),
        n.read(this, c, !0, 52, 8)
    }
    ,
    l.prototype.readDoubleBE = function(c, f) {
        return c = c >>> 0,
        f || B(c, 8, this.length),
        n.read(this, c, !1, 52, 8)
    }
    ;
    function H(p, c, f, j, C, D) {
        if (!l.isBuffer(p))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (c > C || c < D)
            throw new RangeError('"value" argument is out of bounds');
        if (f + j > p.length)
            throw new RangeError("Index out of range")
    }
    l.prototype.writeUintLE = l.prototype.writeUIntLE = function(c, f, j, C) {
        if (c = +c,
        f = f >>> 0,
        j = j >>> 0,
        !C) {
            const X = Math.pow(2, 8 * j) - 1;
            H(this, c, f, j, X, 0)
        }
        let D = 1
          , L = 0;
        for (this[f] = c & 255; ++L < j && (D *= 256); )
            this[f + L] = c / D & 255;
        return f + j
    }
    ,
    l.prototype.writeUintBE = l.prototype.writeUIntBE = function(c, f, j, C) {
        if (c = +c,
        f = f >>> 0,
        j = j >>> 0,
        !C) {
            const X = Math.pow(2, 8 * j) - 1;
            H(this, c, f, j, X, 0)
        }
        let D = j - 1
          , L = 1;
        for (this[f + D] = c & 255; --D >= 0 && (L *= 256); )
            this[f + D] = c / L & 255;
        return f + j
    }
    ,
    l.prototype.writeUint8 = l.prototype.writeUInt8 = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 1, 255, 0),
        this[f] = c & 255,
        f + 1
    }
    ,
    l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 2, 65535, 0),
        this[f] = c & 255,
        this[f + 1] = c >>> 8,
        f + 2
    }
    ,
    l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 2, 65535, 0),
        this[f] = c >>> 8,
        this[f + 1] = c & 255,
        f + 2
    }
    ,
    l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 4, 4294967295, 0),
        this[f + 3] = c >>> 24,
        this[f + 2] = c >>> 16,
        this[f + 1] = c >>> 8,
        this[f] = c & 255,
        f + 4
    }
    ,
    l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 4, 4294967295, 0),
        this[f] = c >>> 24,
        this[f + 1] = c >>> 16,
        this[f + 2] = c >>> 8,
        this[f + 3] = c & 255,
        f + 4
    }
    ;
    function te(p, c, f, j, C) {
        Kt(c, j, C, p, f, 7);
        let D = Number(c & BigInt(4294967295));
        p[f++] = D,
        D = D >> 8,
        p[f++] = D,
        D = D >> 8,
        p[f++] = D,
        D = D >> 8,
        p[f++] = D;
        let L = Number(c >> BigInt(32) & BigInt(4294967295));
        return p[f++] = L,
        L = L >> 8,
        p[f++] = L,
        L = L >> 8,
        p[f++] = L,
        L = L >> 8,
        p[f++] = L,
        f
    }
    function F(p, c, f, j, C) {
        Kt(c, j, C, p, f, 7);
        let D = Number(c & BigInt(4294967295));
        p[f + 7] = D,
        D = D >> 8,
        p[f + 6] = D,
        D = D >> 8,
        p[f + 5] = D,
        D = D >> 8,
        p[f + 4] = D;
        let L = Number(c >> BigInt(32) & BigInt(4294967295));
        return p[f + 3] = L,
        L = L >> 8,
        p[f + 2] = L,
        L = L >> 8,
        p[f + 1] = L,
        L = L >> 8,
        p[f] = L,
        f + 8
    }
    l.prototype.writeBigUInt64LE = _t(function(c, f=0) {
        return te(this, c, f, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    l.prototype.writeBigUInt64BE = _t(function(c, f=0) {
        return F(this, c, f, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    l.prototype.writeIntLE = function(c, f, j, C) {
        if (c = +c,
        f = f >>> 0,
        !C) {
            const me = Math.pow(2, 8 * j - 1);
            H(this, c, f, j, me - 1, -me)
        }
        let D = 0
          , L = 1
          , X = 0;
        for (this[f] = c & 255; ++D < j && (L *= 256); )
            c < 0 && X === 0 && this[f + D - 1] !== 0 && (X = 1),
            this[f + D] = (c / L >> 0) - X & 255;
        return f + j
    }
    ,
    l.prototype.writeIntBE = function(c, f, j, C) {
        if (c = +c,
        f = f >>> 0,
        !C) {
            const me = Math.pow(2, 8 * j - 1);
            H(this, c, f, j, me - 1, -me)
        }
        let D = j - 1
          , L = 1
          , X = 0;
        for (this[f + D] = c & 255; --D >= 0 && (L *= 256); )
            c < 0 && X === 0 && this[f + D + 1] !== 0 && (X = 1),
            this[f + D] = (c / L >> 0) - X & 255;
        return f + j
    }
    ,
    l.prototype.writeInt8 = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 1, 127, -128),
        c < 0 && (c = 255 + c + 1),
        this[f] = c & 255,
        f + 1
    }
    ,
    l.prototype.writeInt16LE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 2, 32767, -32768),
        this[f] = c & 255,
        this[f + 1] = c >>> 8,
        f + 2
    }
    ,
    l.prototype.writeInt16BE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 2, 32767, -32768),
        this[f] = c >>> 8,
        this[f + 1] = c & 255,
        f + 2
    }
    ,
    l.prototype.writeInt32LE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 4, 2147483647, -2147483648),
        this[f] = c & 255,
        this[f + 1] = c >>> 8,
        this[f + 2] = c >>> 16,
        this[f + 3] = c >>> 24,
        f + 4
    }
    ,
    l.prototype.writeInt32BE = function(c, f, j) {
        return c = +c,
        f = f >>> 0,
        j || H(this, c, f, 4, 2147483647, -2147483648),
        c < 0 && (c = 4294967295 + c + 1),
        this[f] = c >>> 24,
        this[f + 1] = c >>> 16,
        this[f + 2] = c >>> 8,
        this[f + 3] = c & 255,
        f + 4
    }
    ,
    l.prototype.writeBigInt64LE = _t(function(c, f=0) {
        return te(this, c, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }),
    l.prototype.writeBigInt64BE = _t(function(c, f=0) {
        return F(this, c, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function K(p, c, f, j, C, D) {
        if (f + j > p.length)
            throw new RangeError("Index out of range");
        if (f < 0)
            throw new RangeError("Index out of range")
    }
    function Y(p, c, f, j, C) {
        return c = +c,
        f = f >>> 0,
        C || K(p, c, f, 4),
        n.write(p, c, f, j, 23, 4),
        f + 4
    }
    l.prototype.writeFloatLE = function(c, f, j) {
        return Y(this, c, f, !0, j)
    }
    ,
    l.prototype.writeFloatBE = function(c, f, j) {
        return Y(this, c, f, !1, j)
    }
    ;
    function ee(p, c, f, j, C) {
        return c = +c,
        f = f >>> 0,
        C || K(p, c, f, 8),
        n.write(p, c, f, j, 52, 8),
        f + 8
    }
    l.prototype.writeDoubleLE = function(c, f, j) {
        return ee(this, c, f, !0, j)
    }
    ,
    l.prototype.writeDoubleBE = function(c, f, j) {
        return ee(this, c, f, !1, j)
    }
    ,
    l.prototype.copy = function(c, f, j, C) {
        if (!l.isBuffer(c))
            throw new TypeError("argument should be a Buffer");
        if (j || (j = 0),
        !C && C !== 0 && (C = this.length),
        f >= c.length && (f = c.length),
        f || (f = 0),
        C > 0 && C < j && (C = j),
        C === j || c.length === 0 || this.length === 0)
            return 0;
        if (f < 0)
            throw new RangeError("targetStart out of bounds");
        if (j < 0 || j >= this.length)
            throw new RangeError("Index out of range");
        if (C < 0)
            throw new RangeError("sourceEnd out of bounds");
        C > this.length && (C = this.length),
        c.length - f < C - j && (C = c.length - f + j);
        const D = C - j;
        return this === c && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, j, C) : Uint8Array.prototype.set.call(c, this.subarray(j, C), f),
        D
    }
    ,
    l.prototype.fill = function(c, f, j, C) {
        if (typeof c == "string") {
            if (typeof f == "string" ? (C = f,
            f = 0,
            j = this.length) : typeof j == "string" && (C = j,
            j = this.length),
            C !== void 0 && typeof C != "string")
                throw new TypeError("encoding must be a string");
            if (typeof C == "string" && !l.isEncoding(C))
                throw new TypeError("Unknown encoding: " + C);
            if (c.length === 1) {
                const L = c.charCodeAt(0);
                (C === "utf8" && L < 128 || C === "latin1") && (c = L)
            }
        } else
            typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c));
        if (f < 0 || this.length < f || this.length < j)
            throw new RangeError("Out of range index");
        if (j <= f)
            return this;
        f = f >>> 0,
        j = j === void 0 ? this.length : j >>> 0,
        c || (c = 0);
        let D;
        if (typeof c == "number")
            for (D = f; D < j; ++D)
                this[D] = c;
        else {
            const L = l.isBuffer(c) ? c : l.from(c, C)
              , X = L.length;
            if (X === 0)
                throw new TypeError('The value "' + c + '" is invalid for argument "value"');
            for (D = 0; D < j - f; ++D)
                this[D + f] = L[D % X]
        }
        return this
    }
    ;
    const Ee = {};
    function ze(p, c, f) {
        Ee[p] = class extends f {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: c.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${p}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return p
            }
            set code(C) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: C,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${p}]: ${this.message}`
            }
        }
    }
    ze("ERR_BUFFER_OUT_OF_BOUNDS", function(p) {
        return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError),
    ze("ERR_INVALID_ARG_TYPE", function(p, c) {
        return `The "${p}" argument must be of type number. Received type ${typeof c}`
    }, TypeError),
    ze("ERR_OUT_OF_RANGE", function(p, c, f) {
        let j = `The value of "${p}" is out of range.`
          , C = f;
        return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? C = Tt(String(f)) : typeof f == "bigint" && (C = String(f),
        (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (C = Tt(C)),
        C += "n"),
        j += ` It must be ${c}. Received ${C}`,
        j
    }, RangeError);
    function Tt(p) {
        let c = ""
          , f = p.length;
        const j = p[0] === "-" ? 1 : 0;
        for (; f >= j + 4; f -= 3)
            c = `_${p.slice(f - 3, f)}${c}`;
        return `${p.slice(0, f)}${c}`
    }
    function tr(p, c, f) {
        Dt(c, "offset"),
        (p[c] === void 0 || p[c + f] === void 0) && ue(c, p.length - (f + 1))
    }
    function Kt(p, c, f, j, C, D) {
        if (p > f || p < c) {
            const L = typeof c == "bigint" ? "n" : "";
            let X;
            throw c === 0 || c === BigInt(0) ? X = `>= 0${L} and < 2${L} ** ${(D + 1) * 8}${L}` : X = `>= -(2${L} ** ${(D + 1) * 8 - 1}${L}) and < 2 ** ${(D + 1) * 8 - 1}${L}`,
            new Ee.ERR_OUT_OF_RANGE("value",X,p)
        }
        tr(j, C, D)
    }
    function Dt(p, c) {
        if (typeof p != "number")
            throw new Ee.ERR_INVALID_ARG_TYPE(c,"number",p)
    }
    function ue(p, c, f) {
        throw Math.floor(p) !== p ? (Dt(p, f),
        new Ee.ERR_OUT_OF_RANGE("offset","an integer",p)) : c < 0 ? new Ee.ERR_BUFFER_OUT_OF_BOUNDS : new Ee.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${c}`,p)
    }
    const ln = /[^+/0-9A-Za-z-_]/g;
    function Ye(p) {
        if (p = p.split("=")[0],
        p = p.trim().replace(ln, ""),
        p.length < 2)
            return "";
        for (; p.length % 4 !== 0; )
            p = p + "=";
        return p
    }
    function dt(p, c) {
        c = c || 1 / 0;
        let f;
        const j = p.length;
        let C = null;
        const D = [];
        for (let L = 0; L < j; ++L) {
            if (f = p.charCodeAt(L),
            f > 55295 && f < 57344) {
                if (!C) {
                    if (f > 56319) {
                        (c -= 3) > -1 && D.push(239, 191, 189);
                        continue
                    } else if (L + 1 === j) {
                        (c -= 3) > -1 && D.push(239, 191, 189);
                        continue
                    }
                    C = f;
                    continue
                }
                if (f < 56320) {
                    (c -= 3) > -1 && D.push(239, 191, 189),
                    C = f;
                    continue
                }
                f = (C - 55296 << 10 | f - 56320) + 65536
            } else
                C && (c -= 3) > -1 && D.push(239, 191, 189);
            if (C = null,
            f < 128) {
                if ((c -= 1) < 0)
                    break;
                D.push(f)
            } else if (f < 2048) {
                if ((c -= 2) < 0)
                    break;
                D.push(f >> 6 | 192, f & 63 | 128)
            } else if (f < 65536) {
                if ((c -= 3) < 0)
                    break;
                D.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128)
            } else if (f < 1114112) {
                if ((c -= 4) < 0)
                    break;
                D.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return D
    }
    function nr(p) {
        const c = [];
        for (let f = 0; f < p.length; ++f)
            c.push(p.charCodeAt(f) & 255);
        return c
    }
    function ft(p, c) {
        let f, j, C;
        const D = [];
        for (let L = 0; L < p.length && !((c -= 2) < 0); ++L)
            f = p.charCodeAt(L),
            j = f >> 8,
            C = f % 256,
            D.push(C),
            D.push(j);
        return D
    }
    function Dr(p) {
        return t.toByteArray(Ye(p))
    }
    function Nn(p, c, f, j) {
        let C;
        for (C = 0; C < j && !(C + f >= c.length || C >= p.length); ++C)
            c[C + f] = p[C];
        return C
    }
    function pe(p, c) {
        return p instanceof c || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === c.name
    }
    function bt(p) {
        return p !== p
    }
    const bo = function() {
        const p = "0123456789abcdef"
          , c = new Array(256);
        for (let f = 0; f < 16; ++f) {
            const j = f * 16;
            for (let C = 0; C < 16; ++C)
                c[j + C] = p[f] + p[C]
        }
        return c
    }();
    function _t(p) {
        return typeof BigInt > "u" ? kn : p
    }
    function kn() {
        throw new Error("BigInt not supported")
    }
}
)(kd);
function ZS(e, t="jpg") {
    return e ? `data:image/${t};base64,${kd.Buffer.from(e).toString("base64")}` : null
}
const Ug = ({user: e}) => {
    var n, r, o, s;
    const t = w.useMemo( () => {
        var a;
        return ZS((a = e.image) == null ? void 0 : a.data)
    }
    , [e.image]);
    return t ? i.jsx("img", {
        src: t,
        alt: `${e.lastName || "User"} avatar`,
        className: "h-12 w-12 rounded-full object-cover border-2 border-gray-200"
    }) : i.jsx("div", {
        className: "h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center",
        children: i.jsxs("span", {
            className: "text-lg font-bold text-white",
            children: [(r = (n = e.firstName) == null ? void 0 : n[0]) == null ? void 0 : r.toUpperCase(), (s = (o = e.lastName) == null ? void 0 : o[0]) == null ? void 0 : s.toUpperCase()]
        })
    })
}
;
Ug.propTypes = {
    user: G.object.isRequired
};
const Wg = ({presence: e}) => e ? e.is_justified ? i.jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800",
    children: "Justified"
}) : e.is_present ? e.is_late === 2 ? i.jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800",
    children: "Very Late"
}) : e.is_late === 1 ? i.jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-orange-100 text-orange-800",
    children: "Late"
}) : i.jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
    children: "Present"
}) : i.jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800",
    children: "Absent"
}) : i.jsx("span", {
    className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-600",
    children: "Not Recorded"
});
Wg.propTypes = {
    presence: G.shape({
        is_present: G.bool.isRequired,
        is_justified: G.bool.isRequired,
        is_late: G.number.isRequired
    })
};
const ec = ({presence: e, user: t, session: n, part: r, onJustify: o, onAddPresence: s, onJustifyAbsence: a}) => {
    const l = e && e.id;
    return i.jsxs("div", {
        className: "space-y-3",
        children: [i.jsx(Wg, {
            presence: e
        }), l && i.jsx("div", {
            className: "text-xs text-gray-500 font-medium",
            children: e.badged_time ? ve(new Date(e.badged_time), "HH:mm") : "N/A"
        }), i.jsxs("div", {
            className: "flex flex-col space-y-2",
            children: [(!l || l && !e.is_justified && !e.badged_time) && i.jsxs(i.Fragment, {
                children: [i.jsx("button", {
                    onClick: () => s({
                        user: t,
                        session: n
                    }, e),
                    className: "px-3 py-2 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-sm hover:shadow-md",
                    children: "+ Add"
                }), i.jsx("button", {
                    onClick: () => a({
                        user: t,
                        session: n
                    }, r),
                    className: "px-3 py-2 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-sm hover:shadow-md",
                    children: "Justify Absence"
                })]
            }), l && (!e.is_present || e.is_late > 0) && i.jsx("button", {
                onClick: () => o(e),
                className: `px-3 py-2 text-xs font-semibold rounded-lg text-white transition-all duration-200 shadow-sm hover:shadow-md ${e.is_justified ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"}`,
                children: e.is_justified ? "Unjustify" : "Justify"
            })]
        })]
    })
}
;
ec.propTypes = {
    presence: G.shape({
        is_present: G.bool.isRequired,
        is_justified: G.bool.isRequired,
        is_late: G.number.isRequired,
        badged_time: G.string
    }),
    user: G.object.isRequired,
    session: G.object.isRequired,
    part: G.string.isRequired,
    onJustify: G.func.isRequired,
    onAddPresence: G.func.isRequired,
    onJustifyAbsence: G.func.isRequired
};
function eE() {
    const {sessionId: e} = e0()
      , [t,n] = w.useState([])
      , [r,o] = w.useState([])
      , [s,a] = w.useState(!0)
      , [l,u] = w.useState(null)
      , d = w.useCallback(async () => {
        try {
            const y = await lb(e);
            if (console.log("Current session data:", y),
            n(y),
            y.length > 0) {
                const g = y[0].session.promo
                  , E = await tb(g, y[0].session.date);
                o(E)
            }
        } catch (y) {
            console.error("Error fetching presences:", y),
            J.error("Failed to fetch presences for this session.")
        } finally {
            a(!1)
        }
    }
    , [e]);
    w.useEffect( () => {
        e && d()
    }
    , [e, d]);
    const h = R.useMemo( () => {
        const y = t.reduce( (E, T) => {
            const O = T.user.id;
            E[O] || (E[O] = {
                user: T.user,
                session: T.session,
                presences: {}
            });
            let P = T.part;
            return T.part.includes("_in") ? P = "_in" : T.part.includes("_out") && (P = "_out"),
            E[O].presences[P] = T,
            E
        }
        , {})
          , g = t.length > 0 ? t[0].session : null;
        return r.forEach(E => {
            !y[E.id] && g && (y[E.id] = {
                user: E,
                session: g,
                presences: {}
            })
        }
        ),
        y
    }
    , [t, r])
      , m = t.length > 0 ? t[0].session : null
      , v = async y => {
        const g = {
            userId: y.id_user,
            sessionId: y.sessionId,
            part: y.part,
            presenceId: y.id,
            is_justified: !y.is_justified
        };
        try {
            const E = await im(g);
            n(T => T.map(O => O.id === E.id ? {
                ...O,
                is_justified: E.is_justified
            } : O)),
            J.success(`Justification updated for ${y.user.firstName} ${y.user.lastName}.`)
        } catch {
            J.error("Failed to update justification.")
        }
    }
      , k = (y, g=null) => {
        u({
            ...y,
            existingPresence: g
        })
    }
      , x = async (y, g="_in") => {
        var E, T;
        try {
            const O = {
                userId: y.user.id,
                sessionId: parseInt(e),
                part: g,
                is_justified: !0
            };
            console.log("Justifying absence:", JSON.stringify(O)),
            await im(O),
            J.success(`Absence justified for ${y.user.firstName} ${y.user.lastName}`),
            d()
        } catch (O) {
            console.error("Error justifying absence:", O),
            J.error(((T = (E = O.response) == null ? void 0 : E.data) == null ? void 0 : T.error) || "Failed to justify absence.")
        }
    }
      , N = async y => {
        var g, E;
        try {
            const T = l == null ? void 0 : l.existingPresence;
            if (T && T.id) {
                const O = {
                    presenceId: T.id,
                    is_present: !0,
                    badged_time: y.presenceDate,
                    userId: T.user.id,
                    sessionId: e
                };
                console.log("Updating existing presence:", JSON.stringify(O)),
                await db(O),
                J.success("Presence updated successfully!")
            } else
                console.log("Creating manual presence:", JSON.stringify(y)),
                console.log("Current sessionId from URL:", e),
                await ub(y),
                J.success("Presence created successfully!");
            u(null),
            d()
        } catch (T) {
            console.error("Error saving manual presence:", T),
            J.error(((E = (g = T.response) == null ? void 0 : g.data) == null ? void 0 : E.error) || "Failed to save presence.")
        }
    }
    ;
    if (s)
        return i.jsx("div", {
            className: "pt-20 text-center",
            children: "Loading..."
        });
    const S = Object.keys(h).length
      , b = Object.values(h).filter( ({presences: y}) => Object.keys(y).length > 0 && Object.values(y).some(g => g && g.id)).length;
    return i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-7xl",
            children: [i.jsx("div", {
                className: "sm:flex sm:items-center sm:justify-between mb-8",
                children: i.jsxs("div", {
                    className: "sm:flex-auto flex flex-col items-center",
                    children: [i.jsx("h2", {
                        className: "mt-6 text-center sm:text-left text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent",
                        children: "Session Presences"
                    }), m && i.jsxs("div", {
                        className: "mt-4 text-center sm:text-left",
                        children: [i.jsxs("p", {
                            className: "text-xl text-gray-700 font-semibold",
                            children: [m.promo.toUpperCase(), " - ", ve(new Date(m.date), "EEEE, MMMM do, yyyy")]
                        }), i.jsxs("div", {
                            className: "mt-3 flex justify-center sm:justify-start space-x-6",
                            children: [i.jsxs("span", {
                                className: "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800",
                                children: ["👥 ", S, " Students Total"]
                            }), i.jsxs("span", {
                                className: "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800",
                                children: ["✓ ", b, " With Records"]
                            })]
                        })]
                    })]
                })
            }), i.jsx("div", {
                className: "mt-8 flex flex-col",
                children: i.jsx("div", {
                    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                    children: i.jsx("div", {
                        className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                        children: i.jsx("div", {
                            className: "shadow-xl overflow-hidden border border-gray-200 sm:rounded-xl bg-white",
                            children: i.jsxs("table", {
                                className: "min-w-full divide-y divide-gray-200",
                                children: [i.jsx("thead", {
                                    className: "bg-gradient-to-r from-blue-600 to-blue-700",
                                    children: i.jsxs("tr", {
                                        children: [i.jsx("th", {
                                            scope: "col",
                                            className: "px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider border-r border-blue-500",
                                            children: "Student Email"
                                        }), i.jsx("th", {
                                            scope: "col",
                                            className: `px-3 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider ${(m == null ? void 0 : m.has_out) !== !1 ? "border-r border-blue-500" : ""}`,
                                            children: "Clock In"
                                        }), (m == null ? void 0 : m.has_out) !== !1 && i.jsx("th", {
                                            scope: "col",
                                            className: "px-3 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider",
                                            children: "Clock Out"
                                        })]
                                    })
                                }), i.jsx("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: Object.values(h).sort( (y, g) => (y.user.last_name || "").localeCompare(g.user.last_name || "")).map( ({user: y, session: g, presences: E}) => i.jsxs("tr", {
                                        className: "hover:bg-gray-50 transition-colors duration-150",
                                        children: [i.jsx("td", {
                                            className: "px-4 py-6 whitespace-nowrap border-r border-gray-200",
                                            children: i.jsxs("div", {
                                                className: "flex items-center",
                                                children: [i.jsx("div", {
                                                    className: "flex-shrink-0 h-12 w-12",
                                                    children: i.jsx(Ug, {
                                                        user: y
                                                    })
                                                }), i.jsxs("div", {
                                                    className: "ml-4",
                                                    children: [i.jsxs("div", {
                                                        className: "text-sm font-semibold text-gray-900",
                                                        children: [y.firstName, " ", y.lastName]
                                                    }), i.jsx("div", {
                                                        className: "text-sm text-blue-600 font-medium",
                                                        children: y.email
                                                    })]
                                                })]
                                            })
                                        }), i.jsx("td", {
                                            className: `px-3 py-6 whitespace-nowrap text-center ${(m == null ? void 0 : m.has_out) !== !1 ? "border-r border-gray-200" : ""}`,
                                            children: i.jsx(ec, {
                                                presence: E._in,
                                                user: y,
                                                session: g || m,
                                                part: "_in",
                                                onJustify: v,
                                                onAddPresence: k,
                                                onJustifyAbsence: x
                                            })
                                        }), (m == null ? void 0 : m.has_out) !== !1 && i.jsx("td", {
                                            className: "px-3 py-6 whitespace-nowrap text-center",
                                            children: i.jsx(ec, {
                                                presence: E._out,
                                                user: y,
                                                session: g || m,
                                                part: "_out",
                                                onJustify: v,
                                                onAddPresence: k,
                                                onJustifyAbsence: x
                                            })
                                        })]
                                    }, y.id))
                                })]
                            })
                        })
                    })
                })
            }), Object.keys(h).length === 0 && !s && i.jsx("p", {
                className: "text-center mt-8 text-gray-500",
                children: "No presence data available for this session."
            })]
        }), i.jsx($g, {
            isOpen: !!l,
            onClose: () => u(null),
            onSave: N,
            student: l,
            currentSessionId: e
        })]
    })
}
function tE(e, t="jpg") {
    return e ? `data:image/${t};base64,${kd.Buffer.from(e).toString("base64")}` : null
}
const zg = ({user: e}) => {
    var n, r, o, s;
    const t = w.useMemo( () => {
        var a;
        return tE((a = e.image) == null ? void 0 : a.data)
    }
    , [e.image]);
    return t ? i.jsx("img", {
        src: t,
        alt: `${e.last_name || "User"} avatar`,
        className: "h-12 w-12 rounded-full object-cover border-2 border-gray-200"
    }) : i.jsx("div", {
        className: `h-12 w-12 rounded-full bg-gradient-to-br flex items-center justify-center ${e.role === "STUDENT" ? "from-red-400 to-red-600" : "from-blue-400 to-blue-600"}`,
        children: i.jsxs("span", {
            className: "text-lg font-bold text-white",
            children: [(r = (n = e.email) == null ? void 0 : n[0]) == null ? void 0 : r.toUpperCase(), (s = (o = e.last_name) == null ? void 0 : o[0]) == null ? void 0 : s.toUpperCase()]
        })
    })
}
;
zg.propTypes = {
    user: G.object.isRequired
};
const Hg = ({isOpen: e, onClose: t, onSave: n, user: r, availablePromos: o}) => {
    const [s,a] = w.useState({
        email: "",
        promo: "",
        last_name: "",
        cardId: ""
    });
    w.useEffect( () => {
        r && e && a({
            email: r.email || "",
            promo: r.promo || "",
            last_name: r.last_name || "",
            cardId: r.id_card || ""
        })
    }
    , [r, e]);
    const l = u => {
        u.preventDefault(),
        n(s)
    }
    ;
    return e ? i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm z-50",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white",
            children: [i.jsxs("h3", {
                className: "text-xl font-semibold leading-6 text-gray-900 mb-6",
                children: ["Edit User: ", i.jsx("span", {
                    className: "text-blue-600",
                    children: r == null ? void 0 : r.email
                })]
            }), i.jsxs("form", {
                onSubmit: l,
                className: "space-y-6",
                children: [i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Email"
                    }), i.jsx("input", {
                        type: "email",
                        value: s.email,
                        onChange: u => a({
                            ...s,
                            email: u.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: (r == null ? void 0 : r.role) === "ADMIN" ? "Role" : "Promo"
                    }), (r == null ? void 0 : r.role) === "ADMIN" ? i.jsx("div", {
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 bg-red-50 text-red-800 font-medium",
                        children: "ADMIN"
                    }) : i.jsxs("select", {
                        value: s.promo,
                        onChange: u => a({
                            ...s,
                            promo: u.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        required: !0,
                        children: [i.jsx("option", {
                            value: "",
                            children: "Select a promotion..."
                        }), o.map(u => i.jsx("option", {
                            value: u,
                            children: u.toUpperCase()
                        }, u))]
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Last Name"
                    }), i.jsx("input", {
                        type: "text",
                        value: s.last_name,
                        onChange: u => a({
                            ...s,
                            last_name: u.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Card ID"
                    }), i.jsx("input", {
                        type: "text",
                        value: s.cardId,
                        onChange: u => a({
                            ...s,
                            cardId: u.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        placeholder: "e.g., 04 9C 18 6A E6 19 90"
                    })]
                }), i.jsxs("div", {
                    className: "flex justify-end space-x-4 pt-4",
                    children: [i.jsx("button", {
                        type: "button",
                        onClick: t,
                        className: "px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors",
                        children: "Cancel"
                    }), i.jsx("button", {
                        type: "submit",
                        className: "px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors",
                        children: "Save Changes"
                    })]
                })]
            })]
        })
    }) : null
}
;
Hg.propTypes = {
    isOpen: G.bool.isRequired,
    onClose: G.func.isRequired,
    onSave: G.func.isRequired,
    user: G.object,
    availablePromos: G.array.isRequired
};
const Vg = ({isOpen: e, onClose: t, onSave: n}) => {
    const [r,o] = w.useState({
        email: "",
        cardId: ""
    })
      , [s,a] = w.useState(!1)
      , l = async d => {
        if (d.preventDefault(),
        !r.email || !r.cardId) {
            J.error("Please fill in all fields");
            return
        }
        a(!0);
        try {
            await n(r),
            o({
                email: "",
                cardId: ""
            })
        } catch {} finally {
            a(!1)
        }
    }
      , u = () => {
        o({
            email: "",
            cardId: ""
        }),
        t()
    }
    ;
    return e ? i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm z-50",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white",
            children: [i.jsxs("h3", {
                className: "text-xl font-semibold leading-6 text-gray-900 mb-6 flex items-center",
                children: [i.jsx("svg", {
                    className: "w-6 h-6 text-red-600 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: i.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    })
                }), "Create New Admin"]
            }), i.jsxs("form", {
                onSubmit: l,
                className: "space-y-6",
                children: [i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Email Address"
                    }), i.jsx("input", {
                        type: "email",
                        value: r.email,
                        onChange: d => o({
                            ...r,
                            email: d.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent",
                        placeholder: "user@epitech.eu",
                        required: !0
                    }), i.jsx("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: "Must be an @epitech.eu email address"
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Card ID"
                    }), i.jsx("input", {
                        type: "text",
                        value: r.cardId,
                        onChange: d => o({
                            ...r,
                            cardId: d.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono",
                        placeholder: "e.g., 04 9C 18 6A E6 19 90",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    className: "flex justify-end space-x-4 pt-4",
                    children: [i.jsx("button", {
                        type: "button",
                        onClick: u,
                        disabled: s,
                        className: "px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50",
                        children: "Cancel"
                    }), i.jsx("button", {
                        type: "submit",
                        disabled: s,
                        className: "px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-colors disabled:opacity-50 flex items-center",
                        children: s ? i.jsxs(i.Fragment, {
                            children: [i.jsx("div", {
                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            }), "Creating..."]
                        }) : "Create Admin"
                    })]
                })]
            })]
        })
    }) : null
}
;
Vg.propTypes = {
    isOpen: G.bool.isRequired,
    onClose: G.func.isRequired,
    onSave: G.func.isRequired
};
const Yg = ({isOpen: e, onClose: t, onSave: n, availablePromos: r}) => {
    const [o,s] = w.useState({
        email: "",
        cardId: "",
        promo: ""
    })
      , [a,l] = w.useState(!1)
      , u = async h => {
        if (h.preventDefault(),
        !o.email || !o.cardId || !o.promo) {
            J.error("Please fill in all fields");
            return
        }
        l(!0);
        try {
            await n(o),
            s({
                email: "",
                cardId: "",
                promo: ""
            })
        } catch {} finally {
            l(!1)
        }
    }
      , d = () => {
        s({
            email: "",
            cardId: "",
            promo: ""
        }),
        t()
    }
    ;
    return e ? i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm z-50",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white",
            children: [i.jsxs("h3", {
                className: "text-xl font-semibold leading-6 text-gray-900 mb-6 flex items-center",
                children: [i.jsx("svg", {
                    className: "w-6 h-6 text-blue-600 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: i.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    })
                }), "Create New Student"]
            }), i.jsxs("form", {
                onSubmit: u,
                className: "space-y-6",
                children: [i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Email Address"
                    }), i.jsx("input", {
                        type: "email",
                        value: o.email,
                        onChange: h => s({
                            ...o,
                            email: h.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        placeholder: "student@epitech.eu",
                        required: !0
                    }), i.jsx("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: "Must be an @epitech.eu email address"
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Card ID"
                    }), i.jsx("input", {
                        type: "text",
                        value: o.cardId,
                        onChange: h => s({
                            ...o,
                            cardId: h.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono",
                        placeholder: "e.g., 04 9C 18 6A E6 19 90",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Promotion"
                    }), i.jsxs("select", {
                        value: o.promo,
                        onChange: h => s({
                            ...o,
                            promo: h.target.value
                        }),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        required: !0,
                        children: [i.jsx("option", {
                            value: "",
                            children: "Select a promotion..."
                        }), r.map(h => i.jsx("option", {
                            value: h,
                            children: h.toUpperCase()
                        }, h))]
                    })]
                }), i.jsxs("div", {
                    className: "flex justify-end space-x-4 pt-4",
                    children: [i.jsx("button", {
                        type: "button",
                        onClick: d,
                        disabled: a,
                        className: "px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50",
                        children: "Cancel"
                    }), i.jsx("button", {
                        type: "submit",
                        disabled: a,
                        className: "px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors disabled:opacity-50 flex items-center",
                        children: a ? i.jsxs(i.Fragment, {
                            children: [i.jsx("div", {
                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            }), "Creating..."]
                        }) : "Create Student"
                    })]
                })]
            })]
        })
    }) : null
}
;
Yg.propTypes = {
    isOpen: G.bool.isRequired,
    onClose: G.func.isRequired,
    onSave: G.func.isRequired,
    availablePromos: G.array.isRequired
};
const qg = ({isOpen: e, onClose: t, onConfirm: n, adminToDelete: r}) => {
    const [o,s] = w.useState(!1)
      , a = async () => {
        s(!0);
        try {
            await n(r)
        } catch {} finally {
            s(!1)
        }
    }
    ;
    return e ? i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm z-50",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white",
            children: [i.jsx("div", {
                className: "flex items-center mb-6",
                children: i.jsx("div", {
                    className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100",
                    children: i.jsx("svg", {
                        className: "h-6 w-6 text-red-600",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.23-.833-2 0L3.732 16.5c-.77.833-.23 2.5 1.732 2.5z"
                        })
                    })
                })
            }), i.jsxs("div", {
                className: "text-center",
                children: [i.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-4",
                    children: "Delete Admin User"
                }), i.jsxs("p", {
                    className: "text-sm text-gray-500 mb-6",
                    children: ["Are you sure you want to delete admin user ", i.jsx("strong", {
                        children: r == null ? void 0 : r.email
                    }), "? This action cannot be undone."]
                })]
            }), i.jsxs("div", {
                className: "flex justify-end space-x-4",
                children: [i.jsx("button", {
                    type: "button",
                    onClick: t,
                    disabled: o,
                    className: "px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50",
                    children: "Cancel"
                }), i.jsx("button", {
                    type: "button",
                    onClick: a,
                    disabled: o,
                    className: "px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-colors disabled:opacity-50 flex items-center",
                    children: o ? i.jsxs(i.Fragment, {
                        children: [i.jsx("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        }), "Deleting..."]
                    }) : "Delete Admin"
                })]
            })]
        })
    }) : null
}
;
qg.propTypes = {
    isOpen: G.bool.isRequired,
    onClose: G.func.isRequired,
    onConfirm: G.func.isRequired,
    adminToDelete: G.object
};
const Qg = ({isOpen: e, onClose: t, onConfirm: n, user: r, isReactivating: o=!1}) => {
    const [s,a] = w.useState(!1)
      , [l,u] = w.useState("")
      , [d,h] = w.useState(!1)
      , m = async () => {
        a(!0);
        try {
            o ? await n(r) : await n(r, d && l ? l : null)
        } catch {} finally {
            a(!1)
        }
    }
      , v = () => {
        u(""),
        h(!1)
    }
      , k = () => {
        v(),
        t()
    }
    ;
    return e ? i.jsx("div", {
        className: "fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm z-50",
        children: i.jsxs("div", {
            className: "relative mx-auto p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white",
            children: [i.jsx("div", {
                className: "flex items-center mb-6",
                children: i.jsx("div", {
                    className: `mx-auto flex items-center justify-center h-12 w-12 rounded-full ${o ? "bg-green-100" : "bg-yellow-100"}`,
                    children: o ? i.jsx("svg", {
                        className: "h-6 w-6 text-green-600",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                    }) : i.jsx("svg", {
                        className: "h-6 w-6 text-yellow-600",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.23-.833-2 0L3.732 16.5c-.77.833-.23 2.5 1.732 2.5z"
                        })
                    })
                })
            }), i.jsxs("div", {
                className: "text-center",
                children: [i.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-4",
                    children: o ? "Reactivate User" : "Deactivate User"
                }), i.jsxs("p", {
                    className: "text-sm text-gray-500 mb-6",
                    children: ["Are you sure you want to ", o ? "reactivate" : "deactivate", " user", " ", i.jsx("strong", {
                        children: r == null ? void 0 : r.email
                    }), "?", !o && " This will prevent them from accessing their badge."]
                })]
            }), i.jsxs("div", {
                className: "flex justify-end space-x-4",
                children: [i.jsx("button", {
                    type: "button",
                    onClick: k,
                    disabled: s,
                    className: "px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50",
                    children: "Cancel"
                }), i.jsx("button", {
                    type: "button",
                    onClick: m,
                    disabled: s || d && !l,
                    className: `px-6 py-3 font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center ${o ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800" : "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:from-yellow-700 hover:to-yellow-800"}`,
                    children: s ? i.jsxs(i.Fragment, {
                        children: [i.jsx("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        }), "Processing..."]
                    }) : o ? "Reactivate User" : "Deactivate User"
                })]
            })]
        })
    }) : null
}
;
Qg.propTypes = {
    isOpen: G.bool.isRequired,
    onClose: G.func.isRequired,
    onConfirm: G.func.isRequired,
    user: G.object,
    isReactivating: G.bool
};
function nE() {
    const [e,t] = w.useState("")
      , [n,r] = w.useState([])
      , [o,s] = w.useState(!1)
      , [a,l] = w.useState(null)
      , [u,d] = w.useState([])
      , [h,m] = w.useState(!0)
      , [v,k] = w.useState(!1)
      , [x,N] = w.useState(!1)
      , [S,b] = w.useState(!1)
      , [y,g] = w.useState(null)
      , [E,T] = w.useState(!1)
      , [O,P] = w.useState(null)
      , [M,U] = w.useState(!1);
    w.useEffect( () => {
        (async () => {
            try {
                const K = await Si();
                d(K.promos)
            } catch (K) {
                console.error("Error fetching promos:", K),
                J.error("Failed to load available promotions.")
            } finally {
                m(!1)
            }
        }
        )()
    }
    , []);
    const I = async F => {
        if (F) {
            s(!0);
            try {
                let K;
                if (F === "admin") {
                    const Y = await fb();
                    K = Y.users || Y
                } else
                    K = await nb(F);
                r(K)
            } catch (K) {
                console.error("Error fetching users:", K),
                J.error(`Failed to fetch users for ${F === "admin" ? "admin" : "this promo"}.`)
            } finally {
                s(!1)
            }
        }
    }
      , ae = F => {
        t(F),
        I(F)
    }
      , fe = F => {
        l(F)
    }
      , Pe = async F => {
        var K, Y;
        try {
            await cb(F),
            J.success("User updated successfully!"),
            l(null),
            e && I(e)
        } catch (ee) {
            console.error("Error updating user:", ee),
            J.error(((Y = (K = ee.response) == null ? void 0 : K.data) == null ? void 0 : Y.error) || "Failed to update user.")
        }
    }
      , Ie = async F => {
        var K, Y;
        try {
            await mb(F),
            J.success("Admin created successfully!"),
            k(!1),
            e === "admin" && I("admin")
        } catch (ee) {
            throw console.error("Error creating admin:", ee),
            J.error(((Y = (K = ee.response) == null ? void 0 : K.data) == null ? void 0 : Y.error) || "Failed to create admin."),
            ee
        }
    }
      , ke = async F => {
        var K, Y;
        try {
            await hb(F),
            J.success("Student created successfully!"),
            N(!1),
            e === F.promo && I(F.promo)
        } catch (ee) {
            throw console.error("Error creating user:", ee),
            J.error(((Y = (K = ee.response) == null ? void 0 : K.data) == null ? void 0 : Y.error) || "Failed to create student."),
            ee
        }
    }
      , q = async F => {
        var K, Y;
        try {
            await pb(F.id),
            J.success("Admin deleted successfully!"),
            b(!1),
            g(null),
            e === "admin" && I("admin")
        } catch (ee) {
            throw console.error("Error deleting admin:", ee),
            J.error(((Y = (K = ee.response) == null ? void 0 : K.data) == null ? void 0 : Y.error) || "Failed to delete admin."),
            ee
        }
    }
      , Se = F => {
        g(F),
        b(!0)
    }
      , $ = () => {
        b(!1),
        g(null)
    }
      , W = async (F, K=null) => {
        var Y, ee;
        try {
            await vb(F.id, K),
            J.success(`User ${K ? "scheduled for deactivation" : "deactivated"} successfully!`),
            T(!1),
            P(null),
            e && I(e)
        } catch (Ee) {
            throw console.error("Error deactivating user:", Ee),
            J.error(((ee = (Y = Ee.response) == null ? void 0 : Y.data) == null ? void 0 : ee.error) || "Failed to deactivate user."),
            Ee
        }
    }
      , V = async F => {
        var K, Y;
        try {
            await xb(F.id),
            J.success("User reactivated successfully!"),
            T(!1),
            P(null),
            e && I(e)
        } catch (ee) {
            throw console.error("Error reactivating user:", ee),
            J.error(((Y = (K = ee.response) == null ? void 0 : K.data) == null ? void 0 : Y.error) || "Failed to reactivate user."),
            ee
        }
    }
      , B = F => {
        P(F),
        U(!1),
        T(!0)
    }
      , H = F => {
        P(F),
        U(!0),
        T(!0)
    }
      , te = () => {
        T(!1),
        P(null),
        U(!1)
    }
    ;
    return i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-6xl",
            children: [i.jsxs("div", {
                className: "text-center mb-10",
                children: [i.jsx("h2", {
                    className: "text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent",
                    children: "Manage Users"
                }), i.jsx("p", {
                    className: "mt-4 text-lg text-gray-600",
                    children: "Update user information and manage student records"
                })]
            }), i.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl p-8 mb-8",
                children: [i.jsx("h3", {
                    className: "text-xl font-semibold text-gray-900 mb-6",
                    children: "Select Category"
                }), h ? i.jsxs("div", {
                    className: "py-8 text-center",
                    children: [i.jsx("div", {
                        className: "inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
                    }), i.jsx("p", {
                        className: "mt-4 text-gray-500",
                        children: "Loading categories..."
                    })]
                }) : i.jsxs("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4",
                    children: [i.jsxs("button", {
                        onClick: () => ae("admin"),
                        className: `px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center ${e === "admin" ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: [i.jsx("svg", {
                            className: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: i.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            })
                        }), "ADMIN"]
                    }), u.length > 0 ? u.map(F => i.jsx("button", {
                        onClick: () => ae(F),
                        className: `px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${e === F ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                        children: F.toUpperCase()
                    }, F)) : i.jsx("div", {
                        className: "col-span-5 py-4 text-center text-gray-500",
                        children: i.jsx("p", {
                            children: "No promotions found"
                        })
                    })]
                })]
            }), e && i.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl overflow-hidden",
                children: [i.jsx("div", {
                    className: `px-8 py-6 bg-gradient-to-r ${e === "admin" ? "from-red-600 to-red-700" : "from-blue-600 to-blue-700"}`,
                    children: i.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [i.jsxs("div", {
                            className: "flex items-center",
                            children: [e === "admin" ? i.jsx("svg", {
                                className: "w-6 h-6 text-white mr-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                })
                            }) : i.jsx("svg", {
                                className: "w-6 h-6 text-white mr-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                })
                            }), i.jsx("h3", {
                                className: "text-xl font-semibold text-white",
                                children: e === "admin" ? `Admin Users (${n.length} total)` : `${e.toUpperCase()} Students (${n.length} total)`
                            })]
                        }), e === "admin" && i.jsxs("button", {
                            onClick: () => k(!0),
                            className: "inline-flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg",
                            children: [i.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                            }), "Create Admin"]
                        }), e && e !== "admin" && i.jsxs("button", {
                            onClick: () => N(!0),
                            className: "inline-flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg",
                            children: [i.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                            }), "Create Student"]
                        })]
                    })
                }), o ? i.jsxs("div", {
                    className: "py-12 text-center",
                    children: [i.jsx("div", {
                        className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                    }), i.jsx("p", {
                        className: "mt-4 text-gray-500",
                        children: "Loading users..."
                    })]
                }) : n.length > 0 ? i.jsx("div", {
                    className: "overflow-x-auto",
                    children: i.jsxs("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [i.jsx("thead", {
                            className: "bg-gray-50",
                            children: i.jsxs("tr", {
                                children: [i.jsx("th", {
                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Student"
                                }), i.jsx("th", {
                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Email"
                                }), i.jsx("th", {
                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Card ID"
                                }), i.jsx("th", {
                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Promo"
                                }), i.jsx("th", {
                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Status"
                                }), i.jsx("th", {
                                    className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Actions"
                                })]
                            })
                        }), i.jsx("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: n.map(F => {
                                var K;
                                return i.jsxs("tr", {
                                    className: "hover:bg-gray-50 transition-colors duration-150",
                                    children: [i.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: i.jsxs("div", {
                                            className: "flex items-center",
                                            children: [i.jsx("div", {
                                                className: "flex-shrink-0 h-12 w-12",
                                                children: i.jsx(zg, {
                                                    user: F
                                                })
                                            }), i.jsxs("div", {
                                                className: "ml-4",
                                                children: [i.jsx("div", {
                                                    className: "text-sm font-semibold text-gray-900",
                                                    children: F.last_name || "No last name"
                                                }), i.jsxs("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: ["ID: ", F.id, " ", F.role === "ADMIN" && i.jsx("span", {
                                                        className: "text-red-600 font-medium",
                                                        children: "• ADMIN"
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), i.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: i.jsx("div", {
                                            className: "text-sm text-blue-600 font-medium",
                                            children: F.email
                                        })
                                    }), i.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: i.jsx("div", {
                                            className: "text-sm text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded",
                                            children: F.id_card || "Not set"
                                        })
                                    }), i.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: i.jsx("span", {
                                            className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${F.role === "ADMIN" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}`,
                                            children: F.role === "ADMIN" ? "ADMIN" : (K = F.promo) == null ? void 0 : K.toUpperCase()
                                        })
                                    }), i.jsxs("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: [i.jsx("span", {
                                            className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${F.deactivated_at === null ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                            children: F.deactivated_at === null ? "🟢 Active" : "🔴 Deactivated"
                                        }), F.deactivated_at && i.jsxs("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: ["Since ", new Date(F.deactivated_at).toLocaleDateString()]
                                        })]
                                    }), i.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: i.jsxs("div", {
                                            className: "flex space-x-2",
                                            children: [i.jsx("button", {
                                                onClick: () => fe(F),
                                                className: "px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md",
                                                children: "Edit"
                                            }), F.role === "ADMIN" && i.jsx("button", {
                                                onClick: () => Se(F),
                                                className: "px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-sm hover:shadow-md",
                                                children: "Delete"
                                            }), F.deactivated_at === null ? i.jsx("button", {
                                                onClick: () => B(F),
                                                className: "px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-medium rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-sm hover:shadow-md",
                                                children: "Deactivate"
                                            }) : i.jsx("button", {
                                                className: "px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-sm hover:shadow-md",
                                                onClick: () => H(F),
                                                children: "Reactivate"
                                            })]
                                        })
                                    })]
                                }, F.id)
                            }
                            )
                        })]
                    })
                }) : i.jsx("div", {
                    className: "py-12 text-center text-gray-500",
                    children: i.jsxs("p", {
                        children: ["No users found for ", e === "admin" ? "Admin" : e.toUpperCase()]
                    })
                })]
            }), !e && i.jsxs("div", {
                className: "text-center py-12",
                children: [i.jsx("div", {
                    className: "text-6xl mb-4",
                    children: "👥"
                }), i.jsx("h3", {
                    className: "text-xl font-medium text-gray-900 mb-2",
                    children: "Select a Category"
                }), i.jsx("p", {
                    className: "text-gray-500",
                    children: "Choose a category above to view and manage users"
                })]
            })]
        }), i.jsx(Hg, {
            isOpen: !!a,
            onClose: () => l(null),
            onSave: Pe,
            user: a,
            availablePromos: u
        }), i.jsx(Vg, {
            isOpen: v,
            onClose: () => k(!1),
            onSave: Ie
        }), i.jsx(Yg, {
            isOpen: x,
            onClose: () => N(!1),
            onSave: ke,
            availablePromos: u
        }), i.jsx(qg, {
            isOpen: S,
            onClose: $,
            onConfirm: q,
            adminToDelete: y
        }), i.jsx(Qg, {
            isOpen: E,
            onClose: te,
            onConfirm: M ? V : W,
            user: O,
            isReactivating: M
        })]
    })
}
const rE = e => e.map(t => {
    const {presences: n} = t
      , r = n.find(k => k.part === "morning_in")
      , o = n.find(k => k.part === "morning_out")
      , s = n.find(k => k.part === "afternoon_in")
      , a = n.find(k => k.part === "afternoon_out");
    let l = "absent"
      , u = null
      , d = null
      , h = "";
    const m = n.some(k => k.is_justified);
    r && r.badged_time ? u = r.badged_time : s && s.badged_time && (u = s.badged_time),
    a && a.badged_time ? d = a.badged_time : o && o.badged_time && (d = o.badged_time);
    const v = n.find(k => k.justification);
    if (v && (h = v.justification),
    m)
        l = "justified";
    else {
        const k = n.find(N => N.is_present && N.is_late)
          , x = n.find(N => N.is_present && !N.is_late);
        k ? l = "late" : x && (l = "present")
    }
    return {
        id: `${t.id}-combined`,
        session: t,
        status: l,
        arrivalTime: u,
        departureTime: d,
        justification: h,
        rawPresences: n
    }
}
);
function oE() {
    var k;
    const [e,t] = w.useState([])
      , [n,r] = w.useState(!0)
      , [o,s] = w.useState(null)
      , [a,l] = w.useState(!1)
      , [u,d] = w.useState({
        total: 0,
        present: 0,
        late: 0,
        absent: 0,
        justified: 0
    })
      , h = x => {
        console.log("Card clicked for session:", x.session.id),
        s(x),
        l(!0)
    }
      , m = () => {
        l(!1),
        s(null)
    }
      , v = x => x.is_justified ? "bg-blue-500" : x.is_present && x.is_late ? "bg-yellow-500" : x.is_present && !x.is_late ? "bg-green-500" : "bg-red-500";
    return w.useEffect( () => {
        (async () => {
            try {
                const N = await yb()
                  , S = rE(N);
                t(S);
                const b = N.length
                  , g = N.reduce( (T, O) => T.concat(O.presences), []).reduce( (T, O) => {
                    let P = "absent";
                    return O.is_justified ? P = "justified" : O.is_present && (P = O.is_late ? "late" : "present"),
                    T[P] = (T[P] || 0) + 1,
                    T
                }
                , {
                    present: 0,
                    late: 0,
                    absent: 0,
                    justified: 0
                })
                  , E = {
                    total: b,
                    ...g
                };
                d(E)
            } catch (N) {
                J.error("Failed to load your presence history."),
                console.error("Error fetching sessions with presences:", N)
            } finally {
                r(!1)
            }
        }
        )()
    }
    , []),
    n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20",
        children: i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("div", {
                className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }), i.jsx("p", {
                className: "mt-4 text-gray-600 text-lg",
                children: "Loading your presence history..."
            })]
        })
    }) : i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "relative overflow-hidden mb-12",
            children: [i.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90 rounded-3xl mx-4"
            }), i.jsxs("div", {
                className: "relative max-w-7xl mx-auto py-12 px-6 text-center",
                children: [i.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl",
                    children: i.jsx("svg", {
                        className: "w-8 h-8 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    })
                }), i.jsx("h1", {
                    className: "text-3xl md:text-4xl font-extrabold text-white mb-4",
                    children: "My Presence History"
                }), i.jsx("p", {
                    className: "text-lg md:text-xl text-blue-100 max-w-2xl mx-auto",
                    children: "Track your attendance across all sessions and monitor your participation"
                })]
            })]
        }), i.jsxs("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [i.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8",
                children: [i.jsx("div", {
                    className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100",
                    children: i.jsxs("div", {
                        className: "flex items-center",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center",
                            children: i.jsx("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                })
                            })
                        }), i.jsxs("div", {
                            className: "ml-4",
                            children: [i.jsx("p", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Total Sessions"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: u.total
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100",
                    children: i.jsxs("div", {
                        className: "flex items-center",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center",
                            children: i.jsx("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 13l4 4L19 7"
                                })
                            })
                        }), i.jsxs("div", {
                            className: "ml-4",
                            children: [i.jsx("p", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Present"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-green-600",
                                children: u.present
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100",
                    children: i.jsxs("div", {
                        className: "flex items-center",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center",
                            children: i.jsx("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            })
                        }), i.jsxs("div", {
                            className: "ml-4",
                            children: [i.jsx("p", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Late"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-yellow-600",
                                children: u.late
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100",
                    children: i.jsxs("div", {
                        className: "flex items-center",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center",
                            children: i.jsx("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                })
                            })
                        }), i.jsxs("div", {
                            className: "ml-4",
                            children: [i.jsx("p", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Absent"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-red-600",
                                children: u.absent
                            })]
                        })]
                    })
                }), i.jsx("div", {
                    className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100",
                    children: i.jsxs("div", {
                        className: "flex items-center",
                        children: [i.jsx("div", {
                            className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center",
                            children: i.jsx("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                })
                            })
                        }), i.jsxs("div", {
                            className: "ml-4",
                            children: [i.jsx("p", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Justified"
                            }), i.jsx("p", {
                                className: "text-2xl font-bold text-blue-600",
                                children: u.justified
                            })]
                        })]
                    })
                })]
            }), e.length === 0 ? i.jsx("div", {
                className: "text-center py-16",
                children: i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-12 border border-gray-100",
                    children: [i.jsx("div", {
                        className: "text-6xl mb-6",
                        children: "📊"
                    }), i.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "No Presence Records"
                    }), i.jsx("p", {
                        className: "text-lg text-gray-500",
                        children: "You don't have any presence records yet. Your attendance will appear here once you start participating in sessions."
                    })]
                })
            }) : i.jsxs("div", {
                className: "space-y-6",
                children: [i.jsxs("div", {
                    className: "text-center mb-8",
                    children: [i.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Attendance History"
                    }), i.jsx("p", {
                        className: "text-gray-600",
                        children: "Click on any session card to view detailed presence information"
                    })]
                }), i.jsx("div", {
                    className: "flex flex-wrap gap-6 justify-start",
                    children: e.map( (x, N) => {
                        var S;
                        return i.jsx("div", {
                            className: "bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full sm:w-80 lg:w-96",
                            children: i.jsxs("div", {
                                className: "p-6 cursor-pointer hover:bg-gray-50 transition-all duration-200",
                                onClick: () => h(x),
                                children: [i.jsx("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: i.jsxs("div", {
                                        className: "flex items-center",
                                        children: [i.jsx("div", {
                                            className: "text-3xl mr-3",
                                            children: x.session.sessionType === "morning" ? "🌅" : "🌇"
                                        }), i.jsxs("div", {
                                            children: [i.jsx("h3", {
                                                className: "text-lg font-bold text-gray-900",
                                                children: ((S = x.session.promo) == null ? void 0 : S.toUpperCase()) || "N/A"
                                            }), i.jsxs("p", {
                                                className: "text-sm text-gray-500",
                                                children: ["Session #", x.session.id]
                                            })]
                                        })]
                                    })
                                }), i.jsxs("div", {
                                    className: "space-y-2",
                                    children: [i.jsxs("div", {
                                        className: "flex items-center text-sm text-gray-600",
                                        children: [i.jsx("svg", {
                                            className: "w-4 h-4 mr-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: i.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v8m6-8v8m-6-4h6"
                                            })
                                        }), ve(new Date(x.session.date), "MMM dd, yyyy")]
                                    }), i.jsxs("div", {
                                        className: "flex items-center text-sm text-gray-600",
                                        children: [i.jsx("svg", {
                                            className: "w-4 h-4 mr-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: i.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        }), ve(new Date(`1970-01-01T${x.session.startTime}`), "HH:mm"), " - ", ve(new Date(`1970-01-01T${x.session.endTime}`), "HH:mm")]
                                    }), (x.arrivalTime || x.departureTime) && i.jsxs("div", {
                                        className: "flex items-center text-sm text-gray-600",
                                        children: [i.jsx("svg", {
                                            className: "w-4 h-4 mr-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: i.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                                            })
                                        }), x.arrivalTime && ve(new Date(x.arrivalTime), "HH:mm"), x.arrivalTime && x.departureTime && " → ", x.departureTime && ve(new Date(x.departureTime), "HH:mm")]
                                    })]
                                }), i.jsxs("div", {
                                    className: "flex items-center justify-between mt-4",
                                    children: [x.justification ? i.jsxs("div", {
                                        className: "flex items-center text-xs text-blue-600",
                                        children: [i.jsx("svg", {
                                            className: "w-3 h-3 mr-1",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: i.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            })
                                        }), "Has justification"]
                                    }) : i.jsx("div", {}), i.jsxs("div", {
                                        className: "flex items-center text-xs text-gray-500",
                                        children: [i.jsx("span", {
                                            className: "text-xs",
                                            children: "Click to view details"
                                        }), i.jsxs("svg", {
                                            className: "w-4 h-4 ml-1",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [i.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            }), i.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }, `session-${x.session.id}-${N}`)
                    }
                    )
                }), a && o && i.jsx("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                    children: i.jsxs("div", {
                        className: "bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                        children: [i.jsx("div", {
                            className: "p-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-t-3xl",
                            children: i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [i.jsxs("div", {
                                    className: "flex items-center",
                                    children: [i.jsx("div", {
                                        className: "text-4xl mr-4",
                                        children: o.session.sessionType === "morning" ? "🌅" : "🌇"
                                    }), i.jsxs("div", {
                                        children: [i.jsx("h2", {
                                            className: "text-2xl font-bold",
                                            children: ((k = o.session.promo) == null ? void 0 : k.toUpperCase()) || "N/A"
                                        }), i.jsxs("p", {
                                            className: "text-blue-100",
                                            children: ["Session #", o.session.id, " • ", ve(new Date(o.session.date), "MMM dd, yyyy")]
                                        })]
                                    })]
                                }), i.jsx("button", {
                                    onClick: m,
                                    className: "text-white hover:text-blue-200 transition-colors p-2",
                                    children: i.jsx("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })]
                            })
                        }), i.jsxs("div", {
                            className: "p-6",
                            children: [i.jsxs("div", {
                                className: "grid grid-cols-2 gap-4 mb-6",
                                children: [i.jsxs("div", {
                                    className: "bg-gray-50 rounded-xl p-4",
                                    children: [i.jsx("span", {
                                        className: "text-sm text-gray-600",
                                        children: "Session Type"
                                    }), i.jsx("p", {
                                        className: "font-semibold text-black capitalize",
                                        children: o.session.sessionType
                                    })]
                                }), i.jsxs("div", {
                                    className: "bg-gray-50 rounded-xl p-4",
                                    children: [i.jsx("span", {
                                        className: "text-sm text-gray-600",
                                        children: "Time Range"
                                    }), i.jsxs("p", {
                                        className: "text-black font-semibold",
                                        children: [ve(new Date(`1970-01-01T${o.session.startTime}`), "HH:mm"), " - ", ve(new Date(`1970-01-01T${o.session.endTime}`), "HH:mm")]
                                    })]
                                })]
                            }), i.jsx("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: "Detailed Presence Information"
                            }), i.jsx("div", {
                                className: "space-y-4",
                                children: o.rawPresences.map( (x, N) => i.jsxs("div", {
                                    className: "bg-gray-50 rounded-xl p-4 border border-gray-200",
                                    children: [i.jsxs("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [i.jsxs("div", {
                                            className: "flex items-center",
                                            children: [i.jsx("div", {
                                                className: `w-4 h-4 rounded-full mr-3 ${v(x)}`
                                            }), i.jsxs("span", {
                                                className: "text-base font-medium text-gray-900",
                                                children: [x.part === "morning_in" && "Morning Arrival", x.part === "morning_out" && "Morning Departure", x.part === "afternoon_in" && "Afternoon Arrival", x.part === "afternoon_out" && "Afternoon Departure"]
                                            })]
                                        }), i.jsxs("div", {
                                            className: "flex items-center space-x-2",
                                            children: [x.is_present && i.jsx("span", {
                                                className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                                children: "Present"
                                            }), x.is_late && i.jsx("span", {
                                                className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
                                                children: "Late"
                                            }), x.is_justified && i.jsx("span", {
                                                className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                                children: "Justified"
                                            })]
                                        })]
                                    }), i.jsxs("div", {
                                        className: "grid grid-cols-2 gap-4 text-sm",
                                        children: [i.jsxs("div", {
                                            children: [i.jsx("span", {
                                                className: "text-gray-500",
                                                children: "Time:"
                                            }), i.jsx("span", {
                                                className: "ml-2 font-mono text-gray-900 font-medium",
                                                children: x.badged_time ? ve(new Date(x.badged_time), "HH:mm:ss") : "Not recorded"
                                            })]
                                        }), i.jsxs("div", {
                                            children: [i.jsx("span", {
                                                className: "text-gray-500",
                                                children: "Date:"
                                            }), i.jsx("span", {
                                                className: "ml-2 text-gray-900",
                                                children: x.badged_time ? ve(new Date(x.badged_time), "MMM dd, yyyy") : "N/A"
                                            })]
                                        })]
                                    }), x.justification && i.jsxs("div", {
                                        className: "mt-3 p-3 bg-blue-50 rounded-lg",
                                        children: [i.jsx("span", {
                                            className: "text-xs text-gray-500 font-medium",
                                            children: "Justification:"
                                        }), i.jsx("p", {
                                            className: "text-sm text-gray-700 mt-1",
                                            children: x.justification
                                        })]
                                    })]
                                }, N))
                            })]
                        })]
                    })
                })]
            })]
        })]
    })
}
function sE() {
    const [e,t] = w.useState(null)
      , [n,r] = w.useState(!0);
    return w.useEffect( () => {
        (async () => {
            try {
                const s = await gb();
                t(s)
            } catch (s) {
                J.error("Failed to load your profile information."),
                console.error("Error fetching user profile:", s)
            } finally {
                r(!1)
            }
        }
        )()
    }
    , []),
    n ? i.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20",
        children: i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("div", {
                className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }), i.jsx("p", {
                className: "mt-4 text-gray-600 text-lg",
                children: "Loading your profile..."
            })]
        })
    }) : i.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:px-6 lg:px-8 pt-20",
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs("div", {
            className: "relative overflow-hidden mb-12",
            children: [i.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90 rounded-3xl mx-4"
            }), i.jsxs("div", {
                className: "relative max-w-7xl mx-auto py-12 px-6 text-center",
                children: [i.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl",
                    children: i.jsx("svg", {
                        className: "w-8 h-8 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: i.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        })
                    })
                }), i.jsx("h1", {
                    className: "text-3xl md:text-4xl font-extrabold text-white mb-4",
                    children: "My Profile"
                }), i.jsx("p", {
                    className: "text-lg md:text-xl text-blue-100 max-w-2xl mx-auto",
                    children: "Your account information and details"
                })]
            })]
        }), i.jsx("div", {
            className: "max-w-4xl mx-auto px-4",
            children: e ? i.jsxs("div", {
                className: "bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100",
                children: [i.jsx("div", {
                    className: "px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-700",
                    children: i.jsxs("div", {
                        className: "flex items-center",
                        children: [i.jsx("div", {
                            className: "w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mr-6",
                            children: i.jsx("svg", {
                                className: "w-10 h-10 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                })
                            })
                        }), i.jsxs("div", {
                            children: [i.jsx("h2", {
                                className: "text-2xl font-bold text-white mb-1",
                                children: e.last_name || "N/A"
                            }), i.jsx("p", {
                                className: "text-blue-100",
                                children: e.promo || "No promo assigned"
                            })]
                        })]
                    })
                }), i.jsxs("div", {
                    className: "p-8",
                    children: [i.jsx("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-6",
                        children: "Account Information"
                    }), i.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [i.jsx("div", {
                            className: "bg-gray-50 rounded-2xl p-6 border border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-center mb-3",
                                children: [i.jsx("div", {
                                    className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4",
                                    children: i.jsx("svg", {
                                        className: "w-5 h-5 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        })
                                    })
                                }), i.jsxs("div", {
                                    children: [i.jsx("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Email Address"
                                    }), i.jsx("p", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: e.email || "N/A"
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "bg-gray-50 rounded-2xl p-6 border border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-center mb-3",
                                children: [i.jsx("div", {
                                    className: "w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4",
                                    children: i.jsx("svg", {
                                        className: "w-5 h-5 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        })
                                    })
                                }), i.jsxs("div", {
                                    children: [i.jsx("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Promotion"
                                    }), i.jsx("p", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: e.promo || "N/A"
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "bg-gray-50 rounded-2xl p-6 border border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-center mb-3",
                                children: [i.jsx("div", {
                                    className: "w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4",
                                    children: i.jsx("svg", {
                                        className: "w-5 h-5 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        })
                                    })
                                }), i.jsxs("div", {
                                    children: [i.jsx("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Last Name"
                                    }), i.jsx("p", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: e.last_name || "N/A"
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "bg-gray-50 rounded-2xl p-6 border border-gray-200",
                            children: i.jsxs("div", {
                                className: "flex items-center mb-3",
                                children: [i.jsx("div", {
                                    className: "w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4",
                                    children: i.jsx("svg", {
                                        className: "w-5 h-5 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                        })
                                    })
                                }), i.jsxs("div", {
                                    children: [i.jsx("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Student Code"
                                    }), i.jsx("p", {
                                        className: "text-lg font-semibold text-gray-900 font-mono",
                                        children: e.code || "N/A"
                                    })]
                                })]
                            })
                        })]
                    }), i.jsx("div", {
                        className: "mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200",
                        children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [i.jsx("div", {
                                className: "flex-shrink-0",
                                children: i.jsx("svg", {
                                    className: "w-6 h-6 text-blue-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: i.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                })
                            }), i.jsxs("div", {
                                className: "ml-3",
                                children: [i.jsx("h4", {
                                    className: "text-sm font-medium text-blue-900 mb-1",
                                    children: "Information Notice"
                                }), i.jsx("p", {
                                    className: "text-sm text-blue-700",
                                    children: "This information is read-only and managed by your administrators. If you need to update any details, please contact your system administrator."
                                })]
                            })]
                        })
                    })]
                })]
            }) : i.jsx("div", {
                className: "text-center py-16",
                children: i.jsxs("div", {
                    className: "bg-white rounded-3xl shadow-xl p-12 border border-gray-100",
                    children: [i.jsx("div", {
                        className: "text-6xl mb-6",
                        children: "⚠️"
                    }), i.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: "Profile Not Found"
                    }), i.jsx("p", {
                        className: "text-lg text-gray-500",
                        children: "Unable to load your profile information. Please try refreshing the page."
                    })]
                })
            })
        })]
    })
}
const ba = ({children: e}) => {
    const t = Er();
    return a0() ? e : (J.error("Please login to access this page"),
    i.jsx(Zc, {
        to: "/login",
        state: {
            from: t
        },
        replace: !0
    }))
}
;
ba.propTypes = {
    children: G.node.isRequired
};
const Gg = ({children: e}) => a0() ? i.jsx(Zc, {
    to: "/",
    replace: !0
}) : e;
Gg.propTypes = {
    children: G.node.isRequired
};
const ir = ({children: e}) => ed() ? e : i.jsx(Zc, {
    to: "/",
    replace: !0
});
ir.propTypes = {
    children: G.node.isRequired
};
function aE() {
    return i.jsxs(E1, {
        children: [i.jsx(Jn, {
            richColors: !0,
            position: "top-right"
        }), i.jsxs(x1, {
            children: [i.jsx(Wt, {
                path: "/login",
                element: i.jsx(Gg, {
                    children: i.jsx(i.Fragment, {
                        children: i.jsx(OS, {})
                    })
                })
            }), i.jsx(Wt, {
                path: "/",
                element: i.jsx(ba, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(Pj, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/presences",
                element: i.jsx(ba, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(oE, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/profile",
                element: i.jsx(ba, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(sE, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/calendar",
                element: i.jsx(ir, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(_S, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/create-session",
                element: i.jsx(ir, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(LS, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/manage-sessions",
                element: i.jsx(ir, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(FS, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/sessions/date/:date",
                element: i.jsx(ir, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx($S, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/sessions/:sessionId/presences",
                element: i.jsx(ir, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(eE, {})]
                    })
                })
            }), i.jsx(Wt, {
                path: "/manage-users",
                element: i.jsx(ir, {
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsx(un, {}), i.jsx(nE, {})]
                    })
                })
            })]
        })]
    })
}
Tl.createRoot(document.getElementById("root")).render(i.jsx(R.StrictMode, {
    children: i.jsx(aE, {})
}));

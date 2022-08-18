// from https://nu.bootcampcontent.com/NU-Coding-Bootcamp/NU-VIRT-DATA-PT-04-2022-U-LOL/-/blob/main/01-Lesson-Plans/15-Mapping-Web/2/Activities/04-Par_SchoolDistrictChoropleth/Solved/static/js/choropleth.js
! function(n) {
    function r(t) { if (e[t]) return e[t].exports; var f = e[t] = { exports: {}, id: t, loaded: !1 }; return n[t].call(f.exports, f, f.exports, r), f.loaded = !0, f.exports }
    var e = {};
    return r.m = n, r.c = e, r.p = "", r(0)
}([function(n, r, e) {
    var t = e(31),
        f = e(12),
        u = { defaults: e(26), extend: e(27) };
    t.choropleth = n.exports = function(n, r) {
        r = r || {}, u.defaults(r, { valueProperty: "value", scale: ["white", "red"], steps: 5, mode: "q" });
        var e = r.style,
            a = n.features.map(function(n) { return "function" == typeof r.valueProperty ? r.valueProperty(n) : n.properties[r.valueProperty] }),
            o = f.limits(a, r.mode, r.steps - 1),
            c = r.colors || f.scale(r.scale).colors(r.steps);
        return t.geoJson(n, u.extend(r, {
            limits: o,
            colors: c,
            style: function(n) {
                var t, f = {};
                if (t = "function" == typeof r.valueProperty ? r.valueProperty(n) : n.properties[r.valueProperty], !isNaN(t))
                    for (var a = 0; a < o.length; a++)
                        if (t <= o[a]) { f.fillColor = c[a]; break }
                switch (typeof e) {
                    case "function":
                        return u.extend(e(), f);
                    case "object":
                        return u.extend(e, f);
                    default:
                        return f
                }
            }
        }))
    }
}, function(n, r) {
    function e(n) { return "number" == typeof n && n > -1 && n % 1 == 0 && t >= n }
    var t = 9007199254740991;
    n.exports = e
}, function(n, r) {
    function e(n) { var r = typeof n; return !!n && ("object" == r || "function" == r) }
    n.exports = e
}, function(n, r, e) {
    function t(n) { return null != n && u(f(n)) }
    var f = e(21),
        u = e(1);
    n.exports = t
}, function(n, r) {
    function e(n, r) { return n = "number" == typeof n || t.test(n) ? +n : -1, r = null == r ? f : r, n > -1 && n % 1 == 0 && r > n }
    var t = /^\d+$/,
        f = 9007199254740991;
    n.exports = e
}, function(n, r) {
    function e(n) { return !!n && "object" == typeof n }
    n.exports = e
}, function(n, r) {
    function e(n, r) {
        if ("function" != typeof n) throw new TypeError(t);
        return r = f(void 0 === r ? n.length - 1 : +r || 0, 0),
            function() {
                for (var e = arguments, t = -1, u = f(e.length - r, 0), a = Array(u); ++t < u;) a[t] = e[r + t];
                switch (r) {
                    case 0:
                        return n.call(this, a);
                    case 1:
                        return n.call(this, e[0], a);
                    case 2:
                        return n.call(this, e[0], e[1], a)
                }
                var o = Array(r + 1);
                for (t = -1; ++t < r;) o[t] = e[t];
                return o[r] = a, n.apply(this, o)
            }
    }
    var t = "Expected a function",
        f = Math.max;
    n.exports = e
}, function(n, r, e) {
    function t(n, r) { var e = null == n ? void 0 : n[r]; return f(e) ? e : void 0 }
    var f = e(25);
    n.exports = t
}, function(n, r, e) {
    function t(n) { return u(n) && f(n) && o.call(n, "callee") && !c.call(n, "callee") }
    var f = e(3),
        u = e(5),
        a = Object.prototype,
        o = a.hasOwnProperty,
        c = a.propertyIsEnumerable;
    n.exports = t
}, function(n, r, e) {
    var t = e(7),
        f = e(1),
        u = e(5),
        a = "[object Array]",
        o = Object.prototype,
        c = o.toString,
        i = t(Array, "isArray"),
        l = i || function(n) { return u(n) && f(n.length) && c.call(n) == a };
    n.exports = l
}, function(n, r, e) {
    var t = e(14),
        f = e(15),
        u = e(19),
        a = u(function(n, r, e) { return e ? t(n, r, e) : f(n, r) });
    n.exports = a
}, function(n, r, e) {
    var t = e(7),
        f = e(3),
        u = e(2),
        a = e(23),
        o = t(Object, "keys"),
        c = o ? function(n) { var r = null == n ? void 0 : n.constructor; return "function" == typeof r && r.prototype === n || "function" != typeof n && f(n) ? a(n) : u(n) ? o(n) : [] } : a;
    n.exports = c
}, function(n, r, e) {
    var t, f;
    (function(n) {
        /**
         * @license
         *
         * chroma.js - JavaScript library for color conversions
         * 
         * Copyright (c) 2011-2015, Gregor Aisch
         * All rights reserved.
         * 
         * Redistribution and use in source and binary forms, with or without
         * modification, are permitted provided that the following conditions are met:
         * 
         * 1. Redistributions of source code must retain the above copyright notice, this
         *    list of conditions and the following disclaimer.
         * 
         * 2. Redistributions in binary form must reproduce the above copyright notice,
         *    this list of conditions and the following disclaimer in the documentation
         *    and/or other materials provided with the distribution.
         * 
         * 3. The name Gregor Aisch may not be used to endorse or promote products
         *    derived from this software without specific prior written permission.
         * 
         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
         * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
         * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
         * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
         * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
         * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
         * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
         * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
         *
         */
        (function() {
            var e, u, a, o, c, i, l, s, d, b, p, h, g, m, v, y, w, x, k, _, N, M, j, O, P, A, q, G, B, L, E, R, S, Y, X, $, z, F, U, C, I, V, K, Z, D, J, T, H, Q, W, nn, rn, en, tn, fn, un, an, on, cn, ln, sn, dn, bn, pn, hn, gn, mn, vn, yn, wn, xn, kn, _n, Nn, Mn, jn, On, Pn, An = [].slice;
            Nn = function() { var n, r, e, t, f; for (n = {}, f = "Boolean Number String Function Array Date RegExp Undefined Null".split(" "), t = 0, r = f.length; r > t; t++) e = f[t], n["[object " + e + "]"] = e.toLowerCase(); return function(r) { var e; return e = Object.prototype.toString.call(r), n[e] || "object" } }(), D = function(n, r, e) { return null == r && (r = 0), null == e && (e = 1), r > n && (n = r), n > e && (n = e), n }, Mn = function(n) { return n.length >= 3 ? [].slice.call(n) : n[0] }, _ = function(n) { var r; for (r in n) 3 > r ? (n[r] < 0 && (n[r] = 0), n[r] > 255 && (n[r] = 255)) : 3 === r && (n[r] < 0 && (n[r] = 0), n[r] > 1 && (n[r] = 1)); return n }, o = Math.PI, yn = Math.round, j = Math.cos, G = Math.floor, tn = Math.pow, J = Math.log, xn = Math.sin, kn = Math.sqrt, g = Math.atan2, Q = Math.max, h = Math.abs, l = 2 * o, c = o / 3, u = o / 180, i = 180 / o, k = function() {
                return arguments[0] instanceof e ? arguments[0] : function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, arguments, function() {})
            }, p = [], "undefined" != typeof n && null !== n && null != n.exports && (n.exports = k), t = [], f = function() { return k }.apply(r, t), !(void 0 !== f && (n.exports = f)), k.version = "1.1.1", b = {}, s = [], d = !1, e = function() {
                function n() {
                    var n, r, e, t, f, u, a, o, c;
                    for (u = this, r = [], o = 0, t = arguments.length; t > o; o++) n = arguments[o], null != n && r.push(n);
                    if (a = r[r.length - 1], null != b[a]) u._rgb = _(b[a](Mn(r.slice(0, -1))));
                    else {
                        for (d || (s = s.sort(function(n, r) { return r.p - n.p }), d = !0), c = 0, f = s.length; f > c && (e = s[c], !(a = e.test.apply(e, r))); c++);
                        a && (u._rgb = _(b[a].apply(b, r)))
                    }
                    null == u._rgb && console.warn("unknown format: " + r), null == u._rgb && (u._rgb = [0, 0, 0]), 3 === u._rgb.length && u._rgb.push(1)
                }
                return n.prototype.alpha = function(n) { return arguments.length ? (this._rgb[3] = n, this) : this._rgb[3] }, n.prototype.toString = function() { return this.name() }, n
            }(), k._input = b, k.brewer = w = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, jn = { indigo: "#4b0082", gold: "#ffd700", hotpink: "#ff69b4", firebrick: "#b22222", indianred: "#cd5c5c", yellow: "#ffff00", mistyrose: "#ffe4e1", darkolivegreen: "#556b2f", olive: "#808000", darkseagreen: "#8fbc8f", pink: "#ffc0cb", tomato: "#ff6347", lightcoral: "#f08080", orangered: "#ff4500", navajowhite: "#ffdead", lime: "#00ff00", palegreen: "#98fb98", darkslategrey: "#2f4f4f", greenyellow: "#adff2f", burlywood: "#deb887", seashell: "#fff5ee", mediumspringgreen: "#00fa9a", fuchsia: "#ff00ff", papayawhip: "#ffefd5", blanchedalmond: "#ffebcd", chartreuse: "#7fff00", dimgray: "#696969", black: "#000000", peachpuff: "#ffdab9", springgreen: "#00ff7f", aquamarine: "#7fffd4", white: "#ffffff", orange: "#ffa500", lightsalmon: "#ffa07a", darkslategray: "#2f4f4f", brown: "#a52a2a", ivory: "#fffff0", dodgerblue: "#1e90ff", peru: "#cd853f", lawngreen: "#7cfc00", chocolate: "#d2691e", crimson: "#dc143c", forestgreen: "#228b22", darkgrey: "#a9a9a9", lightseagreen: "#20b2aa", cyan: "#00ffff", mintcream: "#f5fffa", silver: "#c0c0c0", antiquewhite: "#faebd7", mediumorchid: "#ba55d3", skyblue: "#87ceeb", gray: "#808080", darkturquoise: "#00ced1", goldenrod: "#daa520", darkgreen: "#006400", floralwhite: "#fffaf0", darkviolet: "#9400d3", darkgray: "#a9a9a9", moccasin: "#ffe4b5", saddlebrown: "#8b4513", grey: "#808080", darkslateblue: "#483d8b", lightskyblue: "#87cefa", lightpink: "#ffb6c1", mediumvioletred: "#c71585", slategrey: "#708090", red: "#ff0000", deeppink: "#ff1493", limegreen: "#32cd32", darkmagenta: "#8b008b", palegoldenrod: "#eee8aa", plum: "#dda0dd", turquoise: "#40e0d0", lightgrey: "#d3d3d3", lightgoldenrodyellow: "#fafad2", darkgoldenrod: "#b8860b", lavender: "#e6e6fa", maroon: "#800000", yellowgreen: "#9acd32", sandybrown: "#f4a460", thistle: "#d8bfd8", violet: "#ee82ee", navy: "#000080", magenta: "#ff00ff", dimgrey: "#696969", tan: "#d2b48c", rosybrown: "#bc8f8f", olivedrab: "#6b8e23", blue: "#0000ff", lightblue: "#add8e6", ghostwhite: "#f8f8ff", honeydew: "#f0fff0", cornflowerblue: "#6495ed", slateblue: "#6a5acd", linen: "#faf0e6", darkblue: "#00008b", powderblue: "#b0e0e6", seagreen: "#2e8b57", darkkhaki: "#bdb76b", snow: "#fffafa", sienna: "#a0522d", mediumblue: "#0000cd", royalblue: "#4169e1", lightcyan: "#e0ffff", green: "#008000", mediumpurple: "#9370db", midnightblue: "#191970", cornsilk: "#fff8dc", paleturquoise: "#afeeee", bisque: "#ffe4c4", slategray: "#708090", darkcyan: "#008b8b", khaki: "#f0e68c", wheat: "#f5deb3", teal: "#008080", darkorchid: "#9932cc", deepskyblue: "#00bfff", salmon: "#fa8072", darkred: "#8b0000", steelblue: "#4682b4", palevioletred: "#db7093", lightslategray: "#778899", aliceblue: "#f0f8ff", lightslategrey: "#778899", lightgreen: "#90ee90", orchid: "#da70d6", gainsboro: "#dcdcdc", mediumseagreen: "#3cb371", lightgray: "#d3d3d3", mediumturquoise: "#48d1cc", lemonchiffon: "#fffacd", cadetblue: "#5f9ea0", lightyellow: "#ffffe0", lavenderblush: "#fff0f5", coral: "#ff7f50", purple: "#800080", aqua: "#00ffff", whitesmoke: "#f5f5f5", mediumslateblue: "#7b68ee", darkorange: "#ff8c00", mediumaquamarine: "#66cdaa", darksalmon: "#e9967a", beige: "#f5f5dc", blueviolet: "#8a2be2", azure: "#f0ffff", lightsteelblue: "#b0c4de", oldlace: "#fdf5e6", rebeccapurple: "#663399" }, k.colors = M = jn, C = function() { var n, r, e, t, f, u, o, c, i; return r = Mn(arguments), f = r[0], n = r[1], e = r[2], c = (f + 16) / 116, o = isNaN(n) ? c : c + n / 500, i = isNaN(e) ? c : c - e / 200, c = a.Yn * I(c), o = a.Xn * I(o), i = a.Zn * I(i), u = Pn(3.2404542 * o - 1.5371385 * c - .4985314 * i), t = Pn(-.969266 * o + 1.8760108 * c + .041556 * i), e = Pn(.0556434 * o - .2040259 * c + 1.0572252 * i), u = D(u, 0, 255), t = D(t, 0, 255), e = D(e, 0, 255), [u, t, e, r.length > 3 ? r[3] : 1] }, Pn = function(n) { return yn(255 * (.00304 >= n ? 12.92 * n : 1.055 * tn(n, 1 / 2.4) - .055)) }, I = function(n) { return n > a.t1 ? n * n * n : a.t2 * (n - a.t0) }, a = { Kn: 18, Xn: .95047, Yn: 1, Zn: 1.08883, t0: .137931034, t1: .206896552, t2: .12841855, t3: .008856452 }, sn = function() { var n, r, e, t, f, u, a, o; return t = Mn(arguments), e = t[0], r = t[1], n = t[2], f = gn(e, r, n), u = f[0], a = f[1], o = f[2], [116 * a - 16, 500 * (u - a), 200 * (a - o)] }, mn = function(n) { return (n /= 255) <= .04045 ? n / 12.92 : tn((n + .055) / 1.055, 2.4) }, On = function(n) { return n > a.t3 ? tn(n, 1 / 3) : n / a.t2 + a.t0 }, gn = function() { var n, r, e, t, f, u, o; return t = Mn(arguments), e = t[0], r = t[1], n = t[2], e = mn(e), r = mn(r), n = mn(n), f = On((.4124564 * e + .3575761 * r + .1804375 * n) / a.Xn), u = On((.2126729 * e + .7151522 * r + .072175 * n) / a.Yn), o = On((.0193339 * e + .119192 * r + .9503041 * n) / a.Zn), [f, u, o] }, k.lab = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["lab"]), function() {})
            }, b.lab = C, e.prototype.lab = function() { return sn(this._rgb) }, m = function(n) { var r, e, t, f, u, a, o, c, i, l, s; return n = function() { var r, e, t; for (t = [], e = 0, r = n.length; r > e; e++) f = n[e], t.push(k(f)); return t }(), 2 === n.length ? (i = function() { var r, e, t; for (t = [], e = 0, r = n.length; r > e; e++) f = n[e], t.push(f.lab()); return t }(), u = i[0], a = i[1], r = function(n) { var r, e; return e = function() { var e, t; for (t = [], r = e = 0; 2 >= e; r = ++e) t.push(u[r] + n * (a[r] - u[r])); return t }(), k.lab.apply(k, e) }) : 3 === n.length ? (l = function() { var r, e, t; for (t = [], e = 0, r = n.length; r > e; e++) f = n[e], t.push(f.lab()); return t }(), u = l[0], a = l[1], o = l[2], r = function(n) { var r, e; return e = function() { var e, t; for (t = [], r = e = 0; 2 >= e; r = ++e) t.push((1 - n) * (1 - n) * u[r] + 2 * (1 - n) * n * a[r] + n * n * o[r]); return t }(), k.lab.apply(k, e) }) : 4 === n.length ? (s = function() { var r, e, t; for (t = [], e = 0, r = n.length; r > e; e++) f = n[e], t.push(f.lab()); return t }(), u = s[0], a = s[1], o = s[2], c = s[3], r = function(n) { var r, e; return e = function() { var e, t; for (t = [], r = e = 0; 2 >= e; r = ++e) t.push((1 - n) * (1 - n) * (1 - n) * u[r] + 3 * (1 - n) * (1 - n) * n * a[r] + 3 * (1 - n) * n * n * o[r] + n * n * n * c[r]); return t }(), k.lab.apply(k, e) }) : 5 === n.length && (e = m(n.slice(0, 3)), t = m(n.slice(2, 5)), r = function(n) { return .5 > n ? e(2 * n) : t(2 * (n - .5)) }), r }, k.bezier = function(n) { var r; return r = m(n), r.scale = function() { return k.scale(r) }, r }, k.cubehelix = function(n, r, e, t, f) { var u, a, o; return null == n && (n = 300), null == r && (r = -1.5), null == e && (e = 1), null == t && (t = 1), null == f && (f = [0, 1]), a = f[1] - f[0], u = 0, o = function(o) { var c, i, s, d, b, p, h, g, m; return c = l * ((n + 120) / 360 + r * o), h = tn(f[0] + a * o, t), p = 0 !== u ? e[0] + o * u : e, i = p * h * (1 - h) / 2, d = j(c), m = xn(c), g = h + i * (-.14861 * d + 1.78277 * m), b = h + i * (-.29227 * d - .90649 * m), s = h + i * (1.97294 * d), k(_([255 * g, 255 * b, 255 * s])) }, o.start = function(r) { return null == r ? n : (n = r, o) }, o.rotations = function(n) { return null == n ? r : (r = n, o) }, o.gamma = function(n) { return null == n ? t : (t = n, o) }, o.hue = function(n) { return null == n ? e : (e = n, "array" === Nn(e) ? (u = e[1] - e[0], 0 === u && (e = e[1])) : u = 0, o) }, o.lightness = function(n) { return null == n ? f : (f = n, "array" === Nn(f) ? (a = f[1] - f[0], 0 === a && (f = f[1])) : a = 0, o) }, o.scale = function() { return k.scale(o) }, o.hue(e), o }, k.random = function() { var n, r, t, f; for (r = "0123456789abcdef", n = "#", t = f = 0; 6 > f; t = ++f) n += r.charAt(G(16 * Math.random())); return new e(n) }, b.rgb = function() {
                var n, r, e, t;
                r = Mn(arguments), e = [];
                for (n in r) t = r[n], e.push(t);
                return e
            }, k.rgb = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["rgb"]), function() {})
            }, e.prototype.rgb = function() { return this._rgb.slice(0, 3) }, e.prototype.rgba = function() { return this._rgb }, s.push({ p: 15, test: function(n) { var r; return r = Mn(arguments), "array" === Nn(r) && 3 === r.length ? "rgb" : 4 === r.length && "number" === Nn(r[3]) && r[3] >= 0 && r[3] <= 1 ? "rgb" : void 0 } }), B = function(n) { var r, e, t, f, u, a; if (n.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return (4 === n.length || 7 === n.length) && (n = n.substr(1)), 3 === n.length && (n = n.split(""), n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), a = parseInt(n, 16), f = a >> 16, t = a >> 8 & 255, e = 255 & a, [f, t, e, 1]; if (n.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === n.length && (n = n.substr(1)), a = parseInt(n, 16), f = a >> 24 & 255, t = a >> 16 & 255, e = a >> 8 & 255, r = yn((255 & a) / 255 * 100) / 100, [f, t, e, r]; if (null != b.css && (u = b.css(n))) return u; throw "unknown color: " + n }, an = function(n, r) {
                var e, t, f, u, a, o, c;
                return null == r && (r = "rgb"), a = n[0], f = n[1], t = n[2], e = n[3], c = a << 16 | f << 8 | t, o = "000000" + c.toString(16), o = o.substr(o.length - 6), u = "0" + yn(255 * e).toString(16), u = u.substr(u.length - 2), "#" + function() {
                    switch (r.toLowerCase()) {
                        case "rgba":
                            return o + u;
                        case "argb":
                            return u + o;
                        default:
                            return o
                    }
                }()
            }, b.hex = function(n) { return B(n) }, k.hex = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["hex"]), function() {})
            }, e.prototype.hex = function(n) { return null == n && (n = "rgb"), an(this._rgb, n) }, s.push({ p: 10, test: function(n) { return 1 === arguments.length && "string" === Nn(n) ? "hex" : void 0 } }), R = function() {
                var n, r, e, t, f, u, a, o, c, i, l, s, d, b;
                if (n = Mn(arguments), f = n[0], l = n[1], a = n[2], 0 === l) c = t = r = 255 * a;
                else {
                    for (b = [0, 0, 0], e = [0, 0, 0], d = .5 > a ? a * (1 + l) : a + l - a * l, s = 2 * a - d, f /= 360, b[0] = f + 1 / 3, b[1] = f, b[2] = f - 1 / 3, u = o = 0; 2 >= o; u = ++o) b[u] < 0 && (b[u] += 1), b[u] > 1 && (b[u] -= 1), 6 * b[u] < 1 ? e[u] = s + 6 * (d - s) * b[u] : 2 * b[u] < 1 ? e[u] = d : 3 * b[u] < 2 ? e[u] = s + (d - s) * (2 / 3 - b[u]) * 6 : e[u] = s;
                    i = [yn(255 * e[0]), yn(255 * e[1]), yn(255 * e[2])], c = i[0], t = i[1], r = i[2]
                }
                return n.length > 3 ? [c, t, r, n[3]] : [c, t, r]
            }, cn = function(n, r, e) { var t, f, u, a, o; return void 0 !== n && n.length >= 3 && (a = n, n = a[0], r = a[1], e = a[2]), n /= 255, r /= 255, e /= 255, u = Math.min(n, r, e), Q = Math.max(n, r, e), f = (Q + u) / 2, Q === u ? (o = 0, t = Number.NaN) : o = .5 > f ? (Q - u) / (Q + u) : (Q - u) / (2 - Q - u), n === Q ? t = (r - e) / (Q - u) : r === Q ? t = 2 + (e - n) / (Q - u) : e === Q && (t = 4 + (n - r) / (Q - u)), t *= 60, 0 > t && (t += 360), [t, o, f] }, k.hsl = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["hsl"]), function() {})
            }, b.hsl = R, e.prototype.hsl = function() { return cn(this._rgb) }, S = function() {
                var n, r, e, t, f, u, a, o, c, i, l, s, d, b, p, h, g, m;
                if (n = Mn(arguments), f = n[0], h = n[1], m = n[2], m *= 255, 0 === h) c = t = r = m;
                else switch (360 === f && (f = 0), f > 360 && (f -= 360), 0 > f && (f += 360), f /= 60, u = G(f), e = f - u, a = m * (1 - h), o = m * (1 - h * e), g = m * (1 - h * (1 - e)), u) {
                    case 0:
                        i = [m, g, a], c = i[0], t = i[1], r = i[2];
                        break;
                    case 1:
                        l = [o, m, a], c = l[0], t = l[1], r = l[2];
                        break;
                    case 2:
                        s = [a, m, g], c = s[0], t = s[1], r = s[2];
                        break;
                    case 3:
                        d = [a, o, m], c = d[0], t = d[1], r = d[2];
                        break;
                    case 4:
                        b = [g, a, m], c = b[0], t = b[1], r = b[2];
                        break;
                    case 5:
                        p = [m, a, o], c = p[0], t = p[1], r = p[2]
                }
                return c = yn(c), t = yn(t), r = yn(r), [c, t, r, n.length > 3 ? n[3] : 1]
            }, ln = function() { var n, r, e, t, f, u, a, o, c; return a = Mn(arguments), u = a[0], e = a[1], n = a[2], f = Math.min(u, e, n), Q = Math.max(u, e, n), r = Q - f, c = Q / 255, 0 === Q ? (t = Number.NaN, o = 0) : (o = r / Q, u === Q && (t = (e - n) / r), e === Q && (t = 2 + (n - u) / r), n === Q && (t = 4 + (u - e) / r), t *= 60, 0 > t && (t += 360)), [t, o, c] }, k.hsv = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["hsv"]), function() {})
            }, b.hsv = S, e.prototype.hsv = function() { return ln(this._rgb) }, rn = function(n) { var r, e, t; return "number" === Nn(n) && n >= 0 && 16777215 >= n ? (t = n >> 16, e = n >> 8 & 255, r = 255 & n, [t, e, r, 1]) : (console.warn("unknown num color: " + n), [0, 0, 0, 1]) }, pn = function() { var n, r, e, t; return t = Mn(arguments), e = t[0], r = t[1], n = t[2], (e << 16) + (r << 8) + n }, k.num = function(n) { return new e(n, "num") }, e.prototype.num = function(n) { return null == n && (n = "rgb"), pn(this._rgb, n) }, b.num = rn, s.push({ p: 10, test: function(n) { return 1 === arguments.length && "number" === Nn(n) && n >= 0 && 16777215 >= n ? "num" : void 0 } }), O = function(n) {
                var r, e, t, f, u, a, o, c;
                if (n = n.toLowerCase(), null != k.colors && k.colors[n]) return B(k.colors[n]);
                if (u = n.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
                    for (o = u.slice(1, 4), f = a = 0; 2 >= a; f = ++a) o[f] = +o[f];
                    o[3] = 1
                } else if (u = n.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))
                    for (o = u.slice(1, 5), f = c = 0; 3 >= c; f = ++c) o[f] = +o[f];
                else if (u = n.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
                    for (o = u.slice(1, 4), f = r = 0; 2 >= r; f = ++r) o[f] = yn(2.55 * o[f]);
                    o[3] = 1
                } else if (u = n.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
                    for (o = u.slice(1, 5), f = e = 0; 2 >= e; f = ++e) o[f] = yn(2.55 * o[f]);
                    o[3] = +o[3]
                } else(u = n.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? (t = u.slice(1, 4), t[1] *= .01, t[2] *= .01, o = R(t), o[3] = 1) : (u = n.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && (t = u.slice(1, 4), t[1] *= .01, t[2] *= .01, o = R(t), o[3] = +u[4]);
                return o
            }, un = function(n) { var r; return r = n[3] < 1 ? "rgba" : "rgb", "rgb" === r ? r + "(" + n.slice(0, 3).map(yn).join(",") + ")" : "rgba" === r ? r + "(" + n.slice(0, 3).map(yn).join(",") + "," + n[3] + ")" : void 0 }, vn = function(n) { return yn(100 * n) / 100 }, E = function(n, r) { var e; return e = 1 > r ? "hsla" : "hsl", n[0] = vn(n[0] || 0), n[1] = vn(100 * n[1]) + "%", n[2] = vn(100 * n[2]) + "%", "hsla" === e && (n[3] = r), e + "(" + n.join(",") + ")" }, b.css = function(n) { return O(n) }, k.css = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["css"]), function() {})
            }, e.prototype.css = function(n) { return null == n && (n = "rgb"), "rgb" === n.slice(0, 3) ? un(this._rgb) : "hsl" === n.slice(0, 3) ? E(this.hsl(), this.alpha()) : void 0 }, b.named = function(n) { return B(jn[n]) }, s.push({ p: 20, test: function(n) { return 1 === arguments.length && null != jn[n] ? "named" : void 0 } }), e.prototype.name = function(n) {
                var r, e;
                arguments.length && (jn[n] && (this._rgb = B(jn[n])), this._rgb[3] = 1), r = this.hex();
                for (e in jn)
                    if (r === jn[e]) return e;
                return r
            }, V = function() { var n, r, e, t; return t = Mn(arguments), e = t[0], n = t[1], r = t[2], r *= u, [e, j(r) * n, xn(r) * n] }, K = function() { var n, r, e, t, f, u, a, o, c, i, l; return e = Mn(arguments), o = e[0], f = e[1], a = e[2], i = V(o, f, a), n = i[0], r = i[1], t = i[2], l = C(n, r, t), c = l[0], u = l[1], t = l[2], [D(c, 0, 255), D(u, 0, 255), D(t, 0, 255), e.length > 3 ? e[3] : 1] }, U = function() { var n, r, e, t, f, u; return u = Mn(arguments), f = u[0], n = u[1], r = u[2], e = kn(n * n + r * r), t = (g(r, n) * i + 360) % 360, 0 === yn(1e4 * e) && (t = Number.NaN), [f, e, t] }, dn = function() { var n, r, e, t, f, u, a; return u = Mn(arguments), f = u[0], e = u[1], r = u[2], a = sn(f, e, r), t = a[0], n = a[1], r = a[2], U(t, n, r) }, k.lch = function() { var n; return n = Mn(arguments), new e(n, "lch") }, k.hcl = function() { var n; return n = Mn(arguments), new e(n, "hcl") }, b.lch = K, b.hcl = function() { var n, r, e, t; return t = Mn(arguments), r = t[0], n = t[1], e = t[2], K([e, n, r]) }, e.prototype.lch = function() { return dn(this._rgb) }, e.prototype.hcl = function() { return dn(this._rgb).reverse() }, fn = function(n) { var r, e, t, f, u, a, o, c, i; return null == n && (n = "rgb"), c = Mn(arguments), o = c[0], f = c[1], r = c[2], o /= 255, f /= 255, r /= 255, u = 1 - Math.max(o, Math.max(f, r)), t = 1 > u ? 1 / (1 - u) : 0, e = (1 - o - u) * t, a = (1 - f - u) * t, i = (1 - r - u) * t, [e, a, i, u] }, N = function() { var n, r, e, t, f, u, a, o, c; return r = Mn(arguments), t = r[0], a = r[1], c = r[2], u = r[3], n = r.length > 4 ? r[4] : 1, 1 === u ? [0, 0, 0, n] : (o = t >= 1 ? 0 : yn(255 * (1 - t) * (1 - u)), f = a >= 1 ? 0 : yn(255 * (1 - a) * (1 - u)), e = c >= 1 ? 0 : yn(255 * (1 - c) * (1 - u)), [o, f, e, n]) }, b.cmyk = function() { return N(Mn(arguments)) }, k.cmyk = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["cmyk"]), function() {})
            }, e.prototype.cmyk = function() { return fn(this._rgb) }, b.gl = function() {
                var n, r, e, t, f;
                for (t = function() {
                        var n, e;
                        n = Mn(arguments), e = [];
                        for (r in n) f = n[r], e.push(f);
                        return e
                    }.apply(this, arguments), n = e = 0; 2 >= e; n = ++e) t[n] *= 255;
                return t
            }, k.gl = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["gl"]), function() {})
            }, e.prototype.gl = function() { var n; return n = this._rgb, [n[0] / 255, n[1] / 255, n[2] / 255, n[3]] }, bn = function(n, r, e) { var t; return t = Mn(arguments), n = t[0], r = t[1], e = t[2], n = T(n), r = T(r), e = T(e), .2126 * n + .7152 * r + .0722 * e }, T = function(n) { return n /= 255, .03928 >= n ? n / 12.92 : tn((n + .055) / 1.055, 2.4) }, p = [], Y = function(n, r, e, t) {
                var f, u, a, o;
                for (null == e && (e = .5), null == t && (t = "rgb"), "object" !== Nn(n) && (n = k(n)), "object" !== Nn(r) && (r = k(r)), a = 0, u = p.length; u > a; a++)
                    if (f = p[a], t === f[0]) { o = f[1](n, r, e, t); break }
                if (null == o) throw "color mode " + t + " is not supported";
                return o.alpha(n.alpha() + e * (r.alpha() - n.alpha())), o
            }, k.interpolate = Y, e.prototype.interpolate = function(n, r, e) { return Y(this, n, r, e) }, k.mix = Y, e.prototype.mix = e.prototype.interpolate, F = function(n, r, t, f) { var u, a; return u = n._rgb, a = r._rgb, new e(u[0] + t * (a[0] - u[0]), u[1] + t * (a[1] - u[1]), u[2] + t * (a[2] - u[2]), f) }, p.push(["rgb", F]), e.prototype.luminance = function(n, r) { var e, t, f, u; return null == r && (r = "rgb"), arguments.length ? (0 === n ? this._rgb = [0, 0, 0, this._rgb[3]] : 1 === n ? this._rgb = [255, 255, 255, this._rgb[3]] : (t = 1e-7, f = 20, u = function(e, a) { var o, c; return c = e.interpolate(a, .5, r), o = c.luminance(), Math.abs(n - o) < t || !f-- ? c : o > n ? u(e, c) : u(c, a) }, e = bn(this._rgb), this._rgb = (e > n ? u(k("black"), this) : u(this, k("white"))).rgba()), this) : bn(this._rgb) }, _n = function(n) { var r, e, t, f; return f = n / 100, 66 > f ? (t = 255, e = -155.25485562709179 - .44596950469579133 * (e = f - 2) + 104.49216199393888 * J(e), r = 20 > f ? 0 : -254.76935184120902 + .8274096064007395 * (r = f - 10) + 115.67994401066147 * J(r)) : (t = 351.97690566805693 + .114206453784165 * (t = f - 55) - 40.25366309332127 * J(t), e = 325.4494125711974 + .07943456536662342 * (e = f - 50) - 28.0852963507957 * J(e), r = 255), _([t, e, r]) }, hn = function() { var n, r, e, t, f, u, a, o, c; for (a = Mn(arguments), u = a[0], e = a[1], n = a[2], f = 1e3, t = 4e4, r = .4; t - f > r;) c = .5 * (t + f), o = _n(c), o[2] / o[0] >= n / u ? t = c : f = c; return yn(c) }, k.temperature = k.kelvin = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["temperature"]), function() {})
            }, b.temperature = b.kelvin = b.K = _n, e.prototype.temperature = function() { return hn(this._rgb) }, e.prototype.kelvin = e.prototype.temperature, k.contrast = function(n, r) { var t, f, u, a; return ("string" === (u = Nn(n)) || "number" === u) && (n = new e(n)), ("string" === (a = Nn(r)) || "number" === a) && (r = new e(r)), t = n.luminance(), f = r.luminance(), t > f ? (t + .05) / (f + .05) : (f + .05) / (t + .05) }, e.prototype.get = function(n) { var r, e, t, f, u, a; return t = this, u = n.split("."), f = u[0], r = u[1], a = t[f](), r ? (e = f.indexOf(r), e > -1 ? a[e] : console.warn("unknown channel " + r + " in mode " + f)) : a }, e.prototype.set = function(n, r) {
                var e, t, f, u, a, o;
                if (f = this, a = n.split("."), u = a[0], e = a[1], e)
                    if (o = f[u](), t = u.indexOf(e), t > -1)
                        if ("string" === Nn(r)) switch (r.charAt(0)) {
                            case "+":
                                o[t] += +r;
                                break;
                            case "-":
                                o[t] += +r;
                                break;
                            case "*":
                                o[t] *= +r.substr(1);
                                break;
                            case "/":
                                o[t] /= +r.substr(1);
                                break;
                            default:
                                o[t] = +r
                        } else o[t] = r;
                        else console.warn("unknown channel " + e + " in mode " + u);
                else o = r;
                return f._rgb = k(o, u).alpha(f.alpha())._rgb, f
            }, e.prototype.darken = function(n) { var r, e; return null == n && (n = 1), e = this, r = e.lab(), r[0] -= a.Kn * n, k.lab(r).alpha(e.alpha()) }, e.prototype.brighten = function(n) { return null == n && (n = 1), this.darken(-n) }, e.prototype.darker = e.prototype.darken, e.prototype.brighter = e.prototype.brighten, e.prototype.saturate = function(n) { var r, e; return null == n && (n = 1), e = this, r = e.lch(), r[1] += n * a.Kn, r[1] < 0 && (r[1] = 0), k.lch(r).alpha(e.alpha()) }, e.prototype.desaturate = function(n) { return null == n && (n = 1), this.saturate(-n) }, e.prototype.premultiply = function() { var n, r; return r = this.rgb(), n = this.alpha(), k(r[0] * n, r[1] * n, r[2] * n, n) }, v = function(n, r, e) { if (!v[e]) throw "unknown blend mode " + e; return v[e](n, r) }, y = function(n) { return function(r, e) { var t, f; return t = k(e).rgb(), f = k(r).rgb(), k(n(t, f), "rgb") } }, q = function(n) { return function(r, e) { var t, f, u; for (u = [], t = f = 0; 3 >= f; t = ++f) u[t] = n(r[t], e[t]); return u } }, nn = function(n, r) { return n }, W = function(n, r) { return n * r / 255 }, P = function(n, r) { return n > r ? r : n }, Z = function(n, r) { return n > r ? n : r }, wn = function(n, r) { return 255 * (1 - (1 - n / 255) * (1 - r / 255)) }, en = function(n, r) { return 128 > r ? 2 * n * r / 255 : 255 * (1 - 2 * (1 - n / 255) * (1 - r / 255)) }, x = function(n, r) { return 255 * (1 - (1 - r / 255) / (n / 255)) }, A = function(n, r) { return 255 === n ? 255 : (n = 255 * (r / 255) / (1 - n / 255), n > 255 ? 255 : n) }, v.normal = y(q(nn)), v.multiply = y(q(W)), v.screen = y(q(wn)), v.overlay = y(q(en)), v.darken = y(q(P)), v.lighten = y(q(Z)), v.dodge = y(q(A)), v.burn = y(q(x)), k.blend = v, k.analyze = function(n) { var r, e, t, f; for (t = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, e = 0, r = n.length; r > e; e++) f = n[e], null == f || isNaN(f) || (t.values.push(f), t.sum += f, f < t.min && (t.min = f), f > t.max && (t.max = f), t.count += 1); return t.domain = [t.min, t.max], t.limits = function(n, r) { return k.limits(t, n, r) }, t }, k.scale = function(n, r) {
                var e, t, f, u, a, o, c, i, l, s, d, b, p, h, g, m, v, y, w, x, _;
                return l = "rgb", s = k("#ccc"), h = 0, o = !1, a = [0, 1], p = [], b = [0, 0], e = !1, f = [], d = !1, i = 0, c = 1, u = !1, t = {}, x = function(n) { var r, e, t, u, a, o, c; if (null == n && (n = ["#fff", "#000"]), null != n && "string" === Nn(n) && null != (null != (u = k.brewer) ? u[n] : void 0) && (n = k.brewer[n]), "array" === Nn(n)) { for (n = n.slice(0), r = t = 0, a = n.length - 1; a >= 0 ? a >= t : t >= a; r = a >= 0 ? ++t : --t) e = n[r], "string" === Nn(e) && (n[r] = k(e)); for (p.length = 0, r = c = 0, o = n.length - 1; o >= 0 ? o >= c : c >= o; r = o >= 0 ? ++c : --c) p.push(r / (n.length - 1)) } return w(), f = n }, v = function(n) { var r, t; if (null != e) { for (t = e.length - 1, r = 0; t > r && n >= e[r];) r++; return r - 1 } return 0 }, _ = function(n) { return n }, g = function(n) { var r, t, f, u, a; return a = n, e.length > 2 && (u = e.length - 1, r = v(n), f = e[0] + (e[1] - e[0]) * (0 + .5 * h), t = e[u - 1] + (e[u] - e[u - 1]) * (1 - .5 * h), a = i + (e[r] + .5 * (e[r + 1] - e[r]) - f) / (t - f) * (c - i)), a }, y = function(n, r) {
                    var u, a, o, d, h, g, m, y;
                    if (null == r && (r = !1), isNaN(n)) return s;
                    if (r ? y = n : e && e.length > 2 ? (u = v(n), y = u / (e.length - 2), y = b[0] + y * (1 - b[0] - b[1])) : c !== i ? (y = (n - i) / (c - i), y = b[0] + y * (1 - b[0] - b[1]), y = Math.min(1, Math.max(0, y))) : y = 1, r || (y = _(y)), d = Math.floor(1e4 * y), t[d]) a = t[d];
                    else {
                        if ("array" === Nn(f))
                            for (o = h = 0, m = p.length - 1; m >= 0 ? m >= h : h >= m; o = m >= 0 ? ++h : --h) { if (g = p[o], g >= y) { a = f[o]; break } if (y >= g && o === p.length - 1) { a = f[o]; break } if (y > g && y < p[o + 1]) { y = (y - g) / (p[o + 1] - g), a = k.interpolate(f[o], f[o + 1], y, l); break } } else "function" === Nn(f) && (a = f(y));
                        t[d] = a
                    }
                    return a
                }, w = function() { return t = {} }, x(n), m = function(n) { var r; return r = k(y(n)), d && r[d] ? r[d]() : r }, m.classes = function(n) { var r; return null != n ? ("array" === Nn(n) ? (e = n, a = [n[0], n[n.length - 1]]) : (r = k.analyze(a), e = 0 === n ? [r.min, r.max] : k.limits(r, "e", n)), m) : e }, m.domain = function(n) {
                    var r, e, t, u, o, l, s;
                    if (!arguments.length) return a;
                    if (i = n[0], c = n[n.length - 1], p = [], t = f.length, n.length === t && i !== c)
                        for (o = 0, u = n.length; u > o; o++) e = n[o], p.push((e - i) / (c - i));
                    else
                        for (r = s = 0, l = t - 1; l >= 0 ? l >= s : s >= l; r = l >= 0 ? ++s : --s) p.push(r / (t - 1));
                    return a = [i, c], m
                }, m.mode = function(n) { return arguments.length ? (l = n, w(), m) : l }, m.range = function(n, r) { return x(n, r), m }, m.out = function(n) { return d = n, m }, m.spread = function(n) { return arguments.length ? (h = n, m) : h }, m.correctLightness = function(n) { return null == n && (n = !0), u = n, w(), _ = u ? function(n) { var r, e, t, f, u, a, o, c, i; for (r = y(0, !0).lab()[0], e = y(1, !0).lab()[0], o = r > e, t = y(n, !0).lab()[0], u = r + (e - r) * n, f = t - u, c = 0, i = 1, a = 20; Math.abs(f) > .01 && a-- > 0;) ! function() { return o && (f *= -1), 0 > f ? (c = n, n += .5 * (i - n)) : (i = n, n += .5 * (c - n)), t = y(n, !0).lab()[0], f = t - u }(); return n } : function(n) { return n }, m }, m.padding = function(n) { return null != n ? ("number" === Nn(n) && (n = [n, n]), b = n, m) : b }, m.colors = function() {
                    var r, t, f, u, o, c, i, l, s;
                    if (u = 0, o = "hex", 1 === arguments.length && ("string" === Nn(arguments[0]) ? o = arguments[0] : u = arguments[0]), 2 === arguments.length && (u = arguments[0], o = arguments[1]), u) return t = a[0], r = a[1] - t,
                        function() { i = []; for (var n = 0; u >= 0 ? u > n : n > u; u >= 0 ? n++ : n--) i.push(n); return i }.apply(this).map(function(n) { return m(t + n / (u - 1) * r)[o]() });
                    if (n = [], l = [], e && e.length > 2)
                        for (f = s = 1, c = e.length; c >= 1 ? c > s : s > c; f = c >= 1 ? ++s : --s) l.push(.5 * (e[f - 1] + e[f]));
                    else l = a;
                    return l.map(function(n) { return m(n)[o]() })
                }, m
            }, null == k.scales && (k.scales = {}), k.scales.cool = function() { return k.scale([k.hsl(180, 1, .9), k.hsl(250, .7, .4)]) }, k.scales.hot = function() { return k.scale(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb") }, k.analyze = function(n, r, e) {
                var t, f, u, a, o, c, i;
                if (o = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, null == e && (e = function() { return !0 }), t = function(n) { null == n || isNaN(n) || (o.values.push(n), o.sum += n, n < o.min && (o.min = n), n > o.max && (o.max = n), o.count += 1) }, i = function(n, f) { return e(n, f) ? t(null != r && "function" === Nn(r) ? r(n) : null != r && "string" === Nn(r) || "number" === Nn(r) ? n[r] : n) : void 0 }, "array" === Nn(n))
                    for (a = 0, u = n.length; u > a; a++) c = n[a], i(c);
                else
                    for (f in n) c = n[f], i(c, f);
                return o.domain = [o.min, o.max], o.limits = function(n, r) { return k.limits(o, n, r) }, o
            }, k.limits = function(n, r, e) {
                var t, f, u, a, o, c, i, l, s, d, b, p, g, m, v, y, w, x, _, N, M, j, O, P, A, q, B, L, E, R, S, Y, X, $, z, F, U, C, I, V, K, Z, D, T, H, W, nn, rn, en, fn, un, an, on, cn, ln;
                if (null == r && (r = "equal"), null == e && (e = 7), "array" === Nn(n) && (n = k.analyze(n)), A = n.min, Q = n.max, un = n.sum, cn = n.values.sort(function(n, r) { return n - r }), O = [], "c" === r.substr(0, 1) && (O.push(A), O.push(Q)), "e" === r.substr(0, 1)) {
                    for (O.push(A), N = S = 1, z = e - 1; z >= 1 ? z >= S : S >= z; N = z >= 1 ? ++S : --S) O.push(A + N / e * (Q - A));
                    O.push(Q)
                } else if ("l" === r.substr(0, 1)) {
                    if (0 >= A) throw "Logarithmic scales are only possible for values > 0";
                    for (q = Math.LOG10E * J(A), P = Math.LOG10E * J(Q), O.push(A), N = ln = 1, F = e - 1; F >= 1 ? F >= ln : ln >= F; N = F >= 1 ? ++ln : --ln) O.push(tn(10, q + N / e * (P - q)));
                    O.push(Q)
                } else if ("q" === r.substr(0, 1)) {
                    for (O.push(A), N = t = 1, Z = e - 1; Z >= 1 ? Z >= t : t >= Z; N = Z >= 1 ? ++t : --t) Y = cn.length * N / e, X = G(Y), X === Y ? O.push(cn[X]) : ($ = Y - X, O.push(cn[X] * $ + cn[X + 1] * (1 - $)));
                    O.push(Q)
                } else if ("k" === r.substr(0, 1)) {
                    for (L = cn.length, m = new Array(L), x = new Array(e), fn = !0, E = 0, y = null, y = [], y.push(A), N = f = 1, D = e - 1; D >= 1 ? D >= f : f >= D; N = D >= 1 ? ++f : --f) y.push(A + N / e * (Q - A));
                    for (y.push(Q); fn;) {
                        for (M = u = 0, T = e - 1; T >= 0 ? T >= u : u >= T; M = T >= 0 ? ++u : --u) x[M] = 0;
                        for (N = a = 0, H = L - 1; H >= 0 ? H >= a : a >= H; N = H >= 0 ? ++a : --a) {
                            for (on = cn[N], B = Number.MAX_VALUE, M = o = 0, W = e - 1; W >= 0 ? W >= o : o >= W; M = W >= 0 ? ++o : --o) _ = h(y[M] - on), B > _ && (B = _, v = M);
                            x[v]++, m[N] = v
                        }
                        for (R = new Array(e), M = c = 0, nn = e - 1; nn >= 0 ? nn >= c : c >= nn; M = nn >= 0 ? ++c : --c) R[M] = null;
                        for (N = i = 0, rn = L - 1; rn >= 0 ? rn >= i : i >= rn; N = rn >= 0 ? ++i : --i) w = m[N], null === R[w] ? R[w] = cn[N] : R[w] += cn[N];
                        for (M = l = 0, en = e - 1; en >= 0 ? en >= l : l >= en; M = en >= 0 ? ++l : --l) R[M] *= 1 / x[M];
                        for (fn = !1, M = s = 0, U = e - 1; U >= 0 ? U >= s : s >= U; M = U >= 0 ? ++s : --s)
                            if (R[M] !== y[N]) { fn = !0; break }
                        y = R, E++, E > 200 && (fn = !1)
                    }
                    for (j = {}, M = d = 0, C = e - 1; C >= 0 ? C >= d : d >= C; M = C >= 0 ? ++d : --d) j[M] = [];
                    for (N = b = 0, I = L - 1; I >= 0 ? I >= b : b >= I; N = I >= 0 ? ++b : --b) w = m[N], j[w].push(cn[N]);
                    for (an = [], M = p = 0, V = e - 1; V >= 0 ? V >= p : p >= V; M = V >= 0 ? ++p : --p) an.push(j[M][0]), an.push(j[M][j[M].length - 1]);
                    for (an = an.sort(function(n, r) { return n - r }), O.push(an[0]), N = g = 1, K = an.length - 1; K >= g; N = g += 2) isNaN(an[N]) || O.push(an[N])
                }
                return O
            }, L = function(n, r, e) { var t, f, u, a; return t = Mn(arguments), n = t[0], r = t[1], e = t[2], n /= 360, 1 / 3 > n ? (f = (1 - r) / 3, a = (1 + r * j(l * n) / j(c - l * n)) / 3, u = 1 - (f + a)) : 2 / 3 > n ? (n -= 1 / 3, a = (1 - r) / 3, u = (1 + r * j(l * n) / j(c - l * n)) / 3, f = 1 - (a + u)) : (n -= 2 / 3, u = (1 - r) / 3, f = (1 + r * j(l * n) / j(c - l * n)) / 3, a = 1 - (u + f)), a = D(e * a * 3), u = D(e * u * 3), f = D(e * f * 3), [255 * a, 255 * u, 255 * f, t.length > 3 ? t[3] : 1] }, on = function() { var n, r, e, t, f, u, a, o; return a = Mn(arguments), u = a[0], r = a[1], n = a[2], l = 2 * Math.PI, u /= 255, r /= 255, n /= 255, f = Math.min(u, r, n), t = (u + r + n) / 3, o = 1 - f / t, 0 === o ? e = 0 : (e = (u - r + (u - n)) / 2, e /= Math.sqrt((u - r) * (u - r) + (u - n) * (r - n)), e = Math.acos(e), n > r && (e = l - e), e /= l), [360 * e, o, t] }, k.hsi = function() {
                return function(n, r, e) {
                    e.prototype = n.prototype;
                    var t = new e,
                        f = n.apply(t, r);
                    return Object(f) === f ? f : t
                }(e, An.call(arguments).concat(["hsi"]), function() {})
            }, b.hsi = L, e.prototype.hsi = function() { return on(this._rgb) }, X = function(n, r, e, t) { var f, u, a, o, c, i, l, s, d, b, p, h, g; return "hsl" === t ? (h = n.hsl(), g = r.hsl()) : "hsv" === t ? (h = n.hsv(), g = r.hsv()) : "hsi" === t ? (h = n.hsi(), g = r.hsi()) : ("lch" === t || "hcl" === t) && (t = "hcl", h = n.hcl(), g = r.hcl()), "h" === t.substr(0, 1) && (a = h[0], b = h[1], i = h[2], o = g[0], p = g[1], l = g[2]), isNaN(a) || isNaN(o) ? isNaN(a) ? isNaN(o) ? u = Number.NaN : (u = o, 1 !== i && 0 !== i || "hsv" === t || (d = p)) : (u = a, 1 !== l && 0 !== l || "hsv" === t || (d = b)) : (f = o > a && o - a > 180 ? o - (a + 360) : a > o && a - o > 180 ? o + 360 - a : o - a, u = a + e * f), null == d && (d = b + e * (p - b)), c = i + e * (l - i), s = k[t](u, d, c) }, p = p.concat(function() { var n, r, e, t; for (e = ["hsv", "hsl", "hsi", "hcl", "lch"], t = [], r = 0, n = e.length; n > r; r++) H = e[r], t.push([H, X]); return t }()), z = function(n, r, e, t) { var f, u; return f = n.num(), u = r.num(), k.num(f + (u - f) * e, "num") }, p.push(["num", z]), $ = function(n, r, t, f) { var u, a, o; return a = n.lab(), o = r.lab(), u = new e(a[0] + t * (o[0] - a[0]), a[1] + t * (o[1] - a[1]), a[2] + t * (o[2] - a[2]), f) }, p.push(["lab", $])
        }).call(this)
    }).call(r, e(30)(n))
}, function(n, r) {
    function e(n, r) {
        return void 0 === n ? r : n
    }
    n.exports = e
}, function(n, r, e) {
    function t(n, r, e) {
        for (var t = -1, u = f(r), a = u.length; ++t < a;) {
            var o = u[t],
                c = n[o],
                i = e(c, r[o], o, n, r);
            (i === i ? i === c : c !== c) && (void 0 !== c || o in n) || (n[o] = i)
        }
        return n
    }
    var f = e(11);
    n.exports = t
}, function(n, r, e) {
    function t(n, r) { return null == r ? n : f(r, u(r), n) }
    var f = e(16),
        u = e(11);
    n.exports = t
}, function(n, r) {
    function e(n, r, e) {
        e || (e = {});
        for (var t = -1, f = r.length; ++t < f;) {
            var u = r[t];
            e[u] = n[u]
        }
        return e
    }
    n.exports = e
}, function(n, r) {
    function e(n) { return function(r) { return null == r ? void 0 : r[n] } }
    n.exports = e
}, function(n, r, e) {
    function t(n, r, e) {
        if ("function" != typeof n) return f;
        if (void 0 === r) return n;
        switch (e) {
            case 1:
                return function(e) { return n.call(r, e) };
            case 3:
                return function(e, t, f) { return n.call(r, e, t, f) };
            case 4:
                return function(e, t, f, u) { return n.call(r, e, t, f, u) };
            case 5:
                return function(e, t, f, u, a) { return n.call(r, e, t, f, u, a) }
        }
        return function() { return n.apply(r, arguments) }
    }
    var f = e(29);
    n.exports = t
}, function(n, r, e) {
    function t(n) {
        return a(function(r, e) {
            var t = -1,
                a = null == r ? 0 : e.length,
                o = a > 2 ? e[a - 2] : void 0,
                c = a > 2 ? e[2] : void 0,
                i = a > 1 ? e[a - 1] : void 0;
            for ("function" == typeof o ? (o = f(o, i, 5), a -= 2) : (o = "function" == typeof i ? i : void 0, a -= o ? 1 : 0), c && u(e[0], e[1], c) && (o = 3 > a ? void 0 : o, a = 1); ++t < a;) {
                var l = e[t];
                l && n(r, l, o)
            }
            return r
        })
    }
    var f = e(18),
        u = e(22),
        a = e(6);
    n.exports = t
}, function(n, r, e) {
    function t(n, r) { return f(function(e) { var t = e[0]; return null == t ? t : (e.push(r), n.apply(void 0, e)) }) }
    var f = e(6);
    n.exports = t
}, function(n, r, e) {
    var t = e(17),
        f = t("length");
    n.exports = f
}, function(n, r, e) {
    function t(n, r, e) { if (!a(e)) return !1; var t = typeof r; if ("number" == t ? f(e) && u(r, e.length) : "string" == t && r in e) { var o = e[r]; return n === n ? n === o : o !== o } return !1 }
    var f = e(3),
        u = e(4),
        a = e(2);
    n.exports = t
}, function(n, r, e) {
    function t(n) {
        for (var r = c(n), e = r.length, t = e && n.length, i = !!t && o(t) && (u(n) || f(n)), s = -1, d = []; ++s < e;) {
            var b = r[s];
            (i && a(b, t) || l.call(n, b)) && d.push(b)
        }
        return d
    }
    var f = e(8),
        u = e(9),
        a = e(4),
        o = e(1),
        c = e(28),
        i = Object.prototype,
        l = i.hasOwnProperty;
    n.exports = t
}, function(n, r, e) {
    function t(n) { return f(n) && o.call(n) == u }
    var f = e(2),
        u = "[object Function]",
        a = Object.prototype,
        o = a.toString;
    n.exports = t
}, function(n, r, e) {
    function t(n) { return null == n ? !1 : f(n) ? l.test(c.call(n)) : u(n) && a.test(n) }
    var f = e(24),
        u = e(5),
        a = /^\[object .+?Constructor\]$/,
        o = Object.prototype,
        c = Function.prototype.toString,
        i = o.hasOwnProperty,
        l = RegExp("^" + c.call(i).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    n.exports = t
}, function(n, r, e) {
    var t = e(10),
        f = e(13),
        u = e(20),
        a = u(t, f);
    n.exports = a
}, function(n, r, e) { n.exports = e(10) }, function(n, r, e) {
    function t(n) {
        if (null == n) return [];
        c(n) || (n = Object(n));
        var r = n.length;
        r = r && o(r) && (u(n) || f(n)) && r || 0;
        for (var e = n.constructor, t = -1, i = "function" == typeof e && e.prototype === n, s = Array(r), d = r > 0; ++t < r;) s[t] = t + "";
        for (var b in n) d && a(b, r) || "constructor" == b && (i || !l.call(n, b)) || s.push(b);
        return s
    }
    var f = e(8),
        u = e(9),
        a = e(4),
        o = e(1),
        c = e(2),
        i = Object.prototype,
        l = i.hasOwnProperty;
    n.exports = t
}, function(n, r) {
    function e(n) { return n }
    n.exports = e
}, function(n, r) { n.exports = function(n) { return n.webpackPolyfill || (n.deprecate = function() {}, n.paths = [], n.children = [], n.webpackPolyfill = 1), n } }, function(n, r) { n.exports = L }]);
function winSize(a) {
    var b = 1025,
        c = 640,
        d = window.innerWidth || $(window).width();
    return "large" == a && d >= b || "medium" == a && d >= c && b > d || "small" == a && c > d || "medium-up" == a && d >= c || "medium-down" == a && b > d ? returnVar = !0 : returnVar = !1, returnVar
}

function stickyHeader() {
    $(document).scrollTop() < 150 && winSize("large") ? ($("body").addClass("big-header"), $(".top-bar").addClass("big-header")) : ($("body").removeClass("big-header"), $(".top-bar").removeClass("big-header")), winSize("large") && ($(".left-side-nav, .right-side-nav").width("auto"), max_width = $(".left-side-nav").width(), max_width < $(".right-side-nav").width() && (max_width = $(".right-side-nav").width()), $(".left-side-nav, .right-side-nav").width(max_width + 1))
}
window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; e > d; d++) E[c[d]] = !!(c[d] in u);
                return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.8.3",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
            },
            I = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b) && c(b).matches || !1;
                var d;
                return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            J = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            K = {}.hasOwnProperty;
        m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return K.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        }), C.flexbox = function() {
            return j("flexWrap")
        }, C.flexboxlegacy = function() {
            return j("boxDirection")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }, C.canvastext = function() {
            return !(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"))
        }, C.webgl = function() {
            return !!a.WebGLRenderingContext
        }, C.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!a.postMessage
        }, C.websqldatabase = function() {
            return !!a.openDatabase
        }, C.indexedDB = function() {
            return !!j("indexedDB", a)
        }, C.hashchange = function() {
            return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !(!a.history || !history.pushState)
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            var a;
            return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, C.generatedcontent = function() {
            var a;
            return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(r, r), localStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.webworkers = function() {
            return !!a.Worker
        }, C.applicationcache = function() {
            return !!a.applicationCache
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = s.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = r[a[p]];
                    return b || (b = {}, q++, a[p] = q, r[q] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return !s.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
                }
                var j, k, l = "3.7.0",
                    m = a.html5 || {},
                    n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    q = 0,
                    r = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var s = {
                    elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: l,
                    shivCSS: m.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: m.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = s, i(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
        }
        var f = function(b) {
            for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
        };
        f(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function() {
            "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
        });
        var g = function(b, d) {
                if ("string" == typeof b) {
                    if (d) {
                        var e;
                        if (d.jquery) {
                            if (e = d[0], !e) return d
                        } else e = d;
                        return a(e.querySelectorAll(b))
                    }
                    return a(c.querySelectorAll(b))
                }
                return a(b, d)
            },
            h = function(a) {
                var b = [];
                return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
            },
            i = function(a) {
                for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
                return d.reverse().join("-")
            },
            j = function(b, c) {
                var d = this,
                    e = !g(this).data(this.attr_name(!0));
                return g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function() {
                    var e = !g(this).data(d.attr_name(!0) + "-init");
                    g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), e && d.events(this)
                }), "string" == typeof b ? this[b].call(this, c) : void 0
            },
            k = function(a, b) {
                function c() {
                    b(a[0])
                }

                function d() {
                    if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var a = this.attr("src"),
                            b = a.match(/\?/) ? "&" : "?";
                        b += "random=" + (new Date).getTime(), this.attr("src", a + b)
                    }
                }
                return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
            };
        b.matchMedia = b.matchMedia || function(a) {
                var b, c = a.documentElement,
                    d = c.firstElementChild || c.firstChild,
                    e = a.createElement("body"),
                    f = a.createElement("div");
                return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
                    function(a) {
                        return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                            matches: b,
                            media: a
                        }
                    }
            }(c),
            function(a) {
                function c() {
                    d && (g(c), i && jQuery.fx.tick())
                }
                for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof jQuery.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
                g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (jQuery.fx.timer = function(a) {
                    a() && jQuery.timers.push(a) && !d && (d = !0, c())
                }, jQuery.fx.stop = function() {
                    d = !1
                })) : (b.requestAnimationFrame = function(a) {
                    var c = (new Date).getTime(),
                        d = Math.max(0, 16 - (c - e)),
                        f = b.setTimeout(function() {
                            a(c + d)
                        }, d);
                    return e = c + d, f
                }, b.cancelAnimationFrame = function(a) {
                    clearTimeout(a)
                })
            }(jQuery), b.Foundation = {
                name: "Foundation",
                version: "5.3.1",
                media_queries: {
                    small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
                },
                stylesheet: a("<style></style>").appendTo("head")[0].sheet,
                global: {
                    namespace: d
                },
                init: function(a, b, c, d, e) {
                    var f = [a, c, d, e],
                        h = [];
                    if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f));
                    else
                        for (var i in this.libs) h.push(this.init_lib(i, b));
                    return a
                },
                init_lib: function(b, c) {
                    return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function() {}
                },
                patch: function(a) {
                    a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
                },
                inherit: function(a, b) {
                    for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
                },
                set_namespace: function() {
                    var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                    this.global.namespace = b === d || /false/i.test(b) ? "" : b
                },
                libs: {},
                utils: {
                    S: g,
                    throttle: function(a, b) {
                        var c = null;
                        return function() {
                            var d = this,
                                e = arguments;
                            null == c && (c = setTimeout(function() {
                                a.apply(d, e), c = null
                            }, b))
                        }
                    },
                    debounce: function(a, b, c) {
                        var d, e;
                        return function() {
                            var f = this,
                                g = arguments,
                                h = function() {
                                    d = null, c || (e = a.apply(f, g))
                                },
                                i = c && !d;
                            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                        }
                    },
                    data_options: function(b, c) {
                        function d(a) {
                            return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                        }

                        function e(b) {
                            return "string" == typeof b ? a.trim(b) : b
                        }
                        c = c || "options";
                        var f, g, h, i = {},
                            j = function(a) {
                                var b = Foundation.global.namespace;
                                return b.length > 0 ? a.data(b + "-" + c) : a.data(c)
                            },
                            k = j(b);
                        if ("object" == typeof k) return k;
                        for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (-1 === g[1].indexOf(".") ? g[1] = parseInt(g[1], 10) : g[1] = parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                        return i
                    },
                    register_media: function(b, c) {
                        Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
                    },
                    add_custom_rule: function(a, b) {
                        if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
                        else {
                            var c = Foundation.media_queries[b];
                            c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
                        }
                    },
                    image_loaded: function(a, b) {
                        var c = this,
                            d = a.length;
                        0 === d && b(a), a.each(function() {
                            k(c.S(this), function() {
                                d -= 1, 0 === d && b(a)
                            })
                        })
                    },
                    random_str: function() {
                        return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                    }
                }
            }, a.fn.foundation = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    return Foundation.init.apply(Foundation, [this].concat(a)), this
                })
            }
    }(jQuery, window, window.document),
    function(a, b, c, d) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.3.1",
            settings: {
                index: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                is_hover: !0,
                scrolltop: !0,
                sticky_on: "all"
            },
            init: function(b, c, d) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var e = this;
                e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var b = a(this),
                        c = b.data(e.attr_name(!0) + "-init");
                    e.S("section", this);
                    b.data("index", 0);
                    var d = b.parent();
                    d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function(a, b, c) {
                var d = b.hasClass(c.sticky_class);
                return d && "all" === c.sticky_on ? !0 : d && this.small() && "small" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.medium() && "medium" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.large() && "large" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
            },
            toggle: function(c) {
                var d, e = this;
                d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
                var f = d.data(this.attr_name(!0) + "-init"),
                    g = e.S("section, .section", d);
                e.breakpoint() && (e.rtl ? (g.css({
                    right: "0%"
                }), a(">.name", g).css({
                    right: "100%"
                })) : (g.css({
                    left: "0%"
                }), a(">.name", g).css({
                    left: "100%"
                })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), d.parent().removeClass("expanded"), e.update_sticky_positioning())))
            },
            timer: null,
            events: function(c) {
                var d = this,
                    e = this.S;
                e(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                    a.preventDefault(), d.toggle(this)
                }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function(b) {
                    var c = a(this).closest("li");
                    !d.breakpoint() || c.hasClass("back") || c.hasClass("has-dropdown") || d.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                    var c = e(this),
                        f = e(b.target),
                        g = c.closest("[" + d.attr_name() + "]"),
                        h = g.data(d.attr_name(!0) + "-init");
                    return f.data("revealId") ? void d.toggle() : void(d.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), c.hasClass("hover") ? (c.removeClass("hover").find("li").removeClass("hover"), c.parents("li.hover").removeClass("hover")) : (c.addClass("hover"), a(c).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                    if (d.breakpoint()) {
                        a.preventDefault();
                        var b = e(this),
                            c = b.closest("[" + d.attr_name() + "]"),
                            f = c.find("section, .section"),
                            g = (b.next(".dropdown").outerHeight(), b.closest("li"));
                        c.data("index", c.data("index") + 1), g.addClass("moved"), d.rtl ? (f.css({
                            right: -(100 * c.data("index")) + "%"
                        }), f.find(">.name").css({
                            right: 100 * c.data("index") + "%"
                        })) : (f.css({
                            left: -(100 * c.data("index")) + "%"
                        }), f.find(">.name").css({
                            left: 100 * c.data("index") + "%"
                        })), c.css("height", b.siblings("ul").outerHeight(!0) + c.data("height"))
                    }
                }), e(b).off(".topbar").on("resize.fndtn.topbar", d.throttle(function() {
                    d.resize.call(d)
                }, 50)).trigger("resize").trigger("resize.fndtn.topbar"), e("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function(a) {
                    var b = e(a.target).closest("li").closest("li.hover");
                    b.length > 0 || e("[" + d.attr_name() + "] li.hover").removeClass("hover")
                }), e(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                    a.preventDefault();
                    var b = e(this),
                        c = b.closest("[" + d.attr_name() + "]"),
                        f = c.find("section, .section"),
                        g = (c.data(d.attr_name(!0) + "-init"), b.closest("li.moved")),
                        h = g.parent();
                    c.data("index", c.data("index") - 1), d.rtl ? (f.css({
                        right: -(100 * c.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * c.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * c.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * c.data("index") + "%"
                    })), 0 === c.data("index") ? c.css("height", "") : c.css("height", h.outerHeight(!0) + c.data("height")), setTimeout(function() {
                        g.removeClass("moved")
                    }, 300)
                })
            },
            resize: function() {
                var a = this;
                a.S("[" + this.attr_name() + "]").each(function() {
                    var b, d = a.S(this),
                        e = d.data(a.attr_name(!0) + "-init"),
                        f = d.parent("." + a.settings.sticky_class);
                    if (!a.breakpoint()) {
                        var g = d.hasClass("expanded");
                        d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d)
                    }
                    a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)))
                })
            },
            breakpoint: function() {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function(b) {
                var c = this,
                    d = b.data(this.attr_name(!0) + "-init"),
                    e = c.S("section", b);
                e.detach(), c.S(".has-dropdown>a", e).each(function() {
                    var b, e = c.S(this),
                        f = e.siblings(".dropdown");
                    e.attr("href");
                    f.find(".title.back").length || (b = a('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>'), 1 == d.custom_back_text ? a("h5>a", b).html(d.back_text) : a("h5>a", b).html("&laquo; " + e.html()), f.prepend(b))
                }), e.appendTo(b), this.sticky(), this.assembled(b)
            },
            assembled: function(b) {
                b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function(b) {
                var c = 0,
                    d = this;
                return a("> li", b).each(function() {
                    c += d.S(this).outerHeight(!0)
                }), c
            },
            sticky: function() {
                var a = this;
                this.S(b).on("scroll", function() {
                    a.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function() {
                var a = "." + this.settings.sticky_class,
                    c = this.S(b),
                    d = this;
                if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var e = this.settings.sticky_topbar.data("stickyoffset");
                    d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), d.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function() {
                this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar")
            },
            reflow: function() {}
        }
    }(jQuery, this, this.document),
    function(a, b, c, d) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.3.1",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    small: Foundation.media_queries.small,
                    medium: Foundation.media_queries.medium,
                    large: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function(b, c, d) {
                        if (/IMG/.test(b[0].nodeName)) {
                            var e = b[0].src;
                            if (new RegExp(c, "i").test(e)) return;
                            return b[0].src = c, d(b[0].src)
                        }
                        var f = b.data(this.data_attr + "-last-path"),
                            g = this;
                        if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                            b.html(a), b.data(g.data_attr + "-last-path", c), d()
                        })
                    }
                }
            },
            init: function(b, c, d) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
            },
            get_media_hash: function() {
                var a = "";
                for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
                return a
            },
            events: function() {
                var c, d = this;
                return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                    var a = d.get_media_hash();
                    a !== c && d.resize(), c = a
                }, 50)), this
            },
            resize: function() {
                var b = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = this.results(c, b[c]);
                        d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function() {
                            if (arguments[0] instanceof Array) var a = arguments[0];
                            else var a = Array.prototype.slice.call(arguments, 0);
                            d.el.trigger(d.scenario[1], a)
                        })
                    }
            },
            results: function(a, b) {
                var c = b.length;
                if (c > 0)
                    for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
                        var e, f = b[c][2];
                        if (e = this.settings.named_queries.hasOwnProperty(f) ? matchMedia(this.settings.named_queries[f]) : matchMedia(f), e.matches) return {
                            el: d,
                            scenario: b[c]
                        }
                    }
                return !1
            },
            load: function(a, b) {
                return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
            },
            update_images: function() {
                var a = this.S("img[" + this.data_attr + "]"),
                    b = a.length,
                    c = b,
                    d = 0,
                    e = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
                    if (d++, a[c]) {
                        var f = a[c].getAttribute(e) || "";
                        f.length > 0 && this.cached_images.push(a[c])
                    }
                    d === b && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function() {
                var a = this.S("[" + this.data_attr + "]").not("img"),
                    b = a.length,
                    c = b,
                    d = 0,
                    e = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
                    d++;
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function(c) {
                for (var d = this["cached_" + c].length; d--;) this.object(a(this["cached_" + c][d]));
                return a(b).trigger("resize").trigger("resize.fndtn.interchange")
            },
            convert_directive: function(a) {
                var b = this.trim(a);
                return b.length > 0 ? b : "replace"
            },
            parse_scenario: function(a) {
                var b = a[0].match(/(.+),\s*(\w+)\s*$/),
                    c = a[1];
                if (b) var d = b[1],
                    e = b[2];
                else var f = a[0].split(/,\s*$/),
                    d = f[0],
                    e = "";
                return [this.trim(d), this.convert_directive(e), this.trim(c)]
            },
            object: function(a) {
                var b = this.parse_data_attr(a),
                    c = [],
                    d = b.length;
                if (d > 0)
                    for (; d--;) {
                        var e = b[d].split(/\((.*?)(\))$/);
                        if (e.length > 1) {
                            var f = this.parse_scenario(e);
                            c.push(f)
                        }
                    }
                return this.store(a, c)
            },
            store: function(a, b) {
                var c = this.random_str(),
                    d = a.data(this.add_namespace("uuid", !0));
                return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
            },
            trim: function(b) {
                return "string" == typeof b ? a.trim(b) : b
            },
            set_data_attr: function(a) {
                return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function(a) {
                for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
                return d
            },
            reflow: function() {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, window, window.document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = /fade/i.test(a),
                c = /pop/i.test(a);
            return {
                animate: b || c,
                pop: c,
                fade: b
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.3.1",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                root_element: "body",
                open: function() {},
                opened: function() {},
                close: function() {},
                closed: function() {},
                bg: a(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function(b, c, d) {
                a.extend(!0, this.settings, c, d), this.bindings(c, d)
            },
            events: function(a) {
                var b = this,
                    d = b.S;
                return d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(a) {
                    if (a.preventDefault(), !b.locked) {
                        var c = d(this),
                            e = c.data(b.data_attr("reveal-ajax"));
                        if (b.locked = !0, "undefined" == typeof e) b.open.call(b, c);
                        else {
                            var f = e === !0 ? c.attr("href") : e;
                            b.open.call(b, c, {
                                url: f
                            })
                        }
                    }
                }), d(c).on("touchend.fndtn.reveal click.fndtn.reveal", this.close_targets(), function(a) {
                    if (a.preventDefault(), !b.locked) {
                        var c = d("[" + b.attr_name() + "].open").data(b.attr_name(!0) + "-init"),
                            e = d(a.target)[0] === d("." + c.bg_class)[0];
                        if (e) {
                            if (!c.close_on_background_click) return;
                            a.stopPropagation()
                        }
                        b.locked = !0, b.close.call(b, e ? d("[" + b.attr_name() + "].open") : d(this).closest("[" + b.attr_name() + "]"))
                    }
                }), d("[" + b.attr_name() + "]", this.scope).length > 0 ? d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : d(this.scope).on("open.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function(a) {
                var b = this;
                return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
                    var c = b.S("[" + b.attr_name() + "].open"),
                        d = c.data(b.attr_name(!0) + "-init");
                    d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
                }), !0
            },
            key_up_off: function(a) {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function(b, c) {
                var d, e = this;
                b ? "undefined" != typeof b.selector ? d = e.S("#" + b.data(e.data_attr("reveal-id"))).first() : (d = e.S(this.scope), c = b) : d = e.S(this.scope);
                var f = d.data(e.attr_name(!0) + "-init");
                if (f = f || this.settings, d.hasClass("open") && b.attr("data-reveal-id") == d.attr("id")) return e.close(d);
                if (!d.hasClass("open")) {
                    var g = e.S("[" + e.attr_name() + "].open");
                    if ("undefined" == typeof d.data("css-top") && d.data("css-top", parseInt(d.css("top"), 10)).data("offset", this.cache_offset(d)), this.key_up_on(d), d.trigger("open").trigger("open.fndtn.reveal"), g.length < 1 && this.toggle_bg(d, !0), "string" == typeof c && (c = {
                            url: c
                        }), "undefined" != typeof c && c.url) {
                        var h = "undefined" != typeof c.success ? c.success : null;
                        a.extend(c, {
                            success: function(b, c, i) {
                                a.isFunction(h) && h(b, c, i), d.html(b), e.S(d).foundation("section", "reflow"), e.S(d).children().foundation(), g.length > 0 && e.hide(g, f.css.close), e.show(d, f.css.open)
                            }
                        }), a.ajax(c)
                    } else g.length > 0 && this.hide(g, f.css.close), this.show(d, f.css.open)
                }
            },
            close: function(a) {
                var a = a && a.length ? a : this.S(this.scope),
                    b = this.S("[" + this.attr_name() + "].open"),
                    c = a.data(this.attr_name(!0) + "-init") || this.settings;
                b.length > 0 && (this.locked = !0, this.key_up_off(a), a.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(a, !1), this.hide(b, c.css.close, c))
            },
            close_targets: function() {
                var a = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
            },
            toggle_bg: function(b, c) {
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide());
                var e = this.settings.bg.filter(":visible").length > 0;
                c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
            },
            show: function(c, d) {
                if (d) {
                    var f = c.data(this.attr_name(!0) + "-init") || this.settings,
                        g = f.root_element;
                    if (0 === c.parent(g).length) {
                        var h = c.wrap('<div style="display: none;" />').parent();
                        c.on("closed.fndtn.reveal.wrapped", function() {
                            c.detach().appendTo(h), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), c.detach().appendTo(g)
                    }
                    var i = e(f.animation);
                    if (i.animate || (this.locked = !1), i.pop) {
                        d.top = a(b).scrollTop() - c.data("offset") + "px";
                        var j = {
                            top: a(b).scrollTop() + c.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return c.css(d).animate(j, f.animation_speed, "linear", function() {
                                this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    if (i.fade) {
                        d.top = a(b).scrollTop() + c.data("css-top") + "px";
                        var j = {
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return c.css(d).animate(j, f.animation_speed, "linear", function() {
                                this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    return c.css(d).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
                }
                var f = this.settings;
                return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
            },
            hide: function(c, d) {
                if (d) {
                    var f = c.data(this.attr_name(!0) + "-init");
                    f = f || this.settings;
                    var g = e(f.animation);
                    if (g.animate || (this.locked = !1), g.pop) {
                        var h = {
                            top: -a(b).scrollTop() - c.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return c.animate(h, f.animation_speed, "linear", function() {
                                this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    if (g.fade) {
                        var h = {
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return c.animate(h, f.animation_speed, "linear", function() {
                                this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    return c.hide().css(d).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
                }
                var f = this.settings;
                return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
            },
            close_video: function(b) {
                var c = a(".flex-video", b.target),
                    d = a("iframe", c);
                d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide())
            },
            open_video: function(b) {
                var c = a(".flex-video", b.target),
                    e = c.find("iframe");
                if (e.length > 0) {
                    var f = e.attr("data-src");
                    if ("string" == typeof f) e[0].src = e.attr("data-src");
                    else {
                        var g = e[0].src;
                        e[0].src = d, e[0].src = g
                    }
                    c.show()
                }
            },
            data_attr: function(a) {
                return this.namespace.length > 0 ? this.namespace + "-" + a : a
            },
            cache_offset: function(a) {
                var b = a.show().height() + parseInt(a.css("top"), 10);
                return a.hide(), b
            },
            off: function() {
                a(this.scope).off(".fndtn.reveal")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(a, b, c, d) {
        "use strict";
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.3.1",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
                },
                close_selectors: ".clearing-close, div.clearing-blackout",
                open_selectors: "",
                touch_label: "",
                init: !1,
                locked: !1
            },
            init: function(a, b, c) {
                var d = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    d.assemble(d.S("li", this))
                })
            },
            events: function(d) {
                var e = this,
                    f = e.S,
                    g = a(".scroll-container");
                g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                    var b = b || f(this),
                        c = c || b,
                        d = b.next("li"),
                        g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"),
                        h = f(a.target);
                    a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, h = f("img", c)), e.open(h, b, c), e.update_paddles(c)
                }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                    e.nav(a, "next")
                }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                    e.nav(a, "prev")
                }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                    Foundation.libs.clearing.close(a, this)
                }), a(c).on("keydown.fndtn.clearing", function(a) {
                    e.keydown(a)
                }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                    e.resize()
                }), this.swipe_events(d)
            },
            swipe_events: function(a) {
                var b = this,
                    c = b.S;
                c(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                    a.touches || (a = a.originalEvent);
                    var b = {
                        start_page_x: a.touches[0].pageX,
                        start_page_y: a.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: d
                    };
                    c(this).data("swipe-transition", b), a.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function(a) {
                    if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                        var d = c(this).data("swipe-transition");
                        if ("undefined" == typeof d && (d = {}), d.delta_x = a.touches[0].pageX - d.start_page_x, Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(a.touches[0].pageY - d.start_page_y))), !d.is_scrolling && !d.active) {
                            a.preventDefault();
                            var e = d.delta_x < 0 ? "next" : "prev";
                            d.active = !0, b.nav(a, e)
                        }
                    }
                }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                    c(this).data("swipe-transition", {}), a.stopPropagation()
                })
            },
            assemble: function(b) {
                var c = b.parent();
                if (!c.parent().hasClass("carousel")) {
                    c.after('<div id="foundationClearingHolder"></div>');
                    var d = c.detach(),
                        e = "";
                    if (null != d[0]) {
                        e = d[0].outerHTML;
                        var f = this.S("#foundationClearingHolder"),
                            g = c.data(this.attr_name(!0) + "-init"),
                            h = {
                                grid: '<div class="carousel">' + e + "</div>",
                                viewing: g.templates.viewing
                            },
                            i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>",
                            j = this.settings.touch_label;
                        Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove()
                    }
                }
            },
            open: function(b, d, e) {
                function f() {
                    setTimeout(function() {
                        this.image_loaded(m, function() {
                            1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this)
                        }.bind(this))
                    }.bind(this), 100)
                }

                function g(b) {
                    var c = a(b);
                    c.css("visibility", "visible"), i.css("overflow", "hidden"), j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                        e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible")
                    }), l.trigger("opened.fndtn.clearing")
                }
                var h = this,
                    i = a(c.body),
                    j = e.closest(".clearing-assembled"),
                    k = h.S("div", j).first(),
                    l = h.S(".visible-img", k),
                    m = h.S("img", l).not(b),
                    n = h.S(".clearing-touch-label", k),
                    o = !1;
                a("body").on("touchmove", function(a) {
                    a.preventDefault()
                }), m.error(function() {
                    o = !0
                }), this.locked() || (l.trigger("open.fndtn.clearing"), m.attr("src", this.load(b)).css("visibility", "hidden"), f.call(this))
            },
            close: function(b, d) {
                b.preventDefault();
                var e, f, g = function(a) {
                        return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
                    }(a(d)),
                    h = a(c.body);
                return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), a("body").off("touchmove"), !1
            },
            is_open: function(a) {
                return a.parent().prop("style").length > 0
            },
            keydown: function(b) {
                var c = a(".clearing-blackout ul[" + this.attr_name() + "]"),
                    d = this.rtl ? 37 : 39,
                    e = this.rtl ? 39 : 37,
                    f = 27;
                b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
            },
            nav: function(b, c) {
                var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
                b.preventDefault(), this.go(d, c)
            },
            resize: function() {
                var b = a("img", ".clearing-blackout .visible-img"),
                    c = a(".clearing-touch-label", ".clearing-blackout");
                b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"))
            },
            fix_height: function(a) {
                var b = a.parent().children(),
                    c = this;
                return b.each(function() {
                    var a = c.S(this),
                        b = a.find("img");
                    a.height() > b.outerHeight() && a.addClass("fix-height")
                }).closest("ul").width(100 * b.length + "%"), this
            },
            update_paddles: function(a) {
                a = a.closest("li");
                var b = a.closest(".carousel").siblings(".visible-img");
                a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled")
            },
            center_and_label: function(a, b) {
                return this.rtl ? (a.css({
                    marginRight: -(a.outerWidth() / 2),
                    marginTop: -(a.outerHeight() / 2),
                    left: "auto",
                    right: "50%"
                }), b.length > 0 && b.css({
                    marginRight: -(b.outerWidth() / 2),
                    marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                    left: "auto",
                    right: "50%"
                })) : (a.css({
                    marginLeft: -(a.outerWidth() / 2),
                    marginTop: -(a.outerHeight() / 2)
                }), b.length > 0 && b.css({
                    marginLeft: -(b.outerWidth() / 2),
                    marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
                })), this
            },
            load: function(a) {
                var b;
                return b = "A" === a[0].nodeName ? a.attr("href") : a.parent().attr("href"), this.preload(a), b ? b : a.attr("src")
            },
            preload: function(a) {
                this.img(a.closest("li").next()).img(a.closest("li").prev())
            },
            img: function(a) {
                if (a.length) {
                    var b = new Image,
                        c = this.S("a", a);
                    c.length ? b.src = c.attr("href") : b.src = this.S("img", a).attr("src")
                }
                return this
            },
            caption: function(a, b) {
                var c = b.attr("data-caption");
                return c ? a.html(c).show() : a.text("").hide(), this
            },
            go: function(a, b) {
                var c = this.S(".visible", a),
                    d = c[b]();
                d.length && this.S("img", d).trigger("click", [c, d]).trigger("click.fndtn.clearing", [c, d]).trigger("change.fndtn.clearing")
            },
            shift: function(a, b, c) {
                var d, e = b.parent(),
                    f = this.settings.prev_index || b.index(),
                    g = this.direction(e, a, b),
                    h = this.rtl ? "right" : "left",
                    i = parseInt(e.css("left"), 10),
                    j = b.outerWidth(),
                    k = {};
                b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, e.animate(k, 300, this.unlock())), c()
            },
            direction: function(a, b, c) {
                var d, e = this.S("li", a),
                    f = e.outerWidth() + e.outerWidth() / 4,
                    g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1,
                    h = e.index(c);
                return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = h, d
            },
            adjacent: function(a, b) {
                for (var c = b + 1; c >= b - 1; c--)
                    if (c === a) return !0;
                return !1
            },
            lock: function() {
                this.settings.locked = !0
            },
            unlock: function() {
                this.settings.locked = !1
            },
            locked: function() {
                return this.settings.locked
            },
            off: function() {
                this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing")
            },
            reflow: function() {
                this.init()
            }
        }
    }(jQuery, window, window.document), ! function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function b(b, d) {
                var e, f, g = this;
                if (g.defaults = {
                        accessibility: !0,
                        appendArrows: a(b),
                        arrows: !0,
                        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                        nextArrow: '<button type="button" class="slick-next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(a, b) {
                            return '<button type="button">' + (b + 1) + "</button>"
                        },
                        dots: !1,
                        draggable: !0,
                        easing: "linear",
                        fade: !1,
                        infinite: !0,
                        lazyLoad: "ondemand",
                        onBeforeChange: null,
                        onAfterChange: null,
                        onInit: null,
                        onReInit: null,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        responsive: null,
                        slide: "div",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 300,
                        swipe: !0,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        vertical: !1
                    }, g.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentSlide: 0,
                        currentLeft: null,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, a.extend(g, g.initials), g.activeBreakpoint = null, g.animType = null, g.animProp = null, g.breakpoints = [], g.breakpointSettings = [], g.cssTransitions = !1, g.paused = !1, g.positionProp = null, g.$slider = a(b), g.$slidesCache = null, g.transformType = null, g.transitionType = null, g.windowWidth = 0, g.windowTimer = null, g.options = a.extend({}, g.defaults, d), g.originalSettings = g.options, e = g.options.responsive || null, e && e.length > -1) {
                    for (f in e) e.hasOwnProperty(f) && (g.breakpoints.push(e[f].breakpoint), g.breakpointSettings[e[f].breakpoint] = e[f].settings);
                    g.breakpoints.sort(function(a, b) {
                        return b - a
                    })
                }
                g.autoPlay = a.proxy(g.autoPlay, g), g.autoPlayClear = a.proxy(g.autoPlayClear, g), g.changeSlide = a.proxy(g.changeSlide, g), g.setPosition = a.proxy(g.setPosition, g), g.swipeHandler = a.proxy(g.swipeHandler, g), g.dragHandler = a.proxy(g.dragHandler, g), g.keyHandler = a.proxy(g.keyHandler, g), g.autoPlayIterator = a.proxy(g.autoPlayIterator, g), g.instanceUid = c++, g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, g.init()
            }
            var c = 0;
            return b
        }(), b.prototype.addSlide = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).remove(), e.$slideTrack.append(e.$slides), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            }) : (e.applyTransition(), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this;
            a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
        }, b.prototype.buildDots = function() {
            var b, c, d = this;
            if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                for (c = '<ul class="slick-dots">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
                c += "</ul>", d.$dots = a(c).appendTo(d.$slider), d.$dots.find("li").first().addClass("slick-active")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode === !0 && (b.options.slidesToScroll = 1, 0 === b.options.slidesToShow % 2 && (b.options.slidesToShow = 3)), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.checkResponsive = function() {
            var b, c, d = this;
            if (d.originalSettings.responsive && d.originalSettings.responsive.length > -1 && null !== d.originalSettings.responsive) {
                c = null;
                for (b in d.breakpoints) d.breakpoints.hasOwnProperty(b) && a(window).width() < d.breakpoints[b] && (c = d.breakpoints[b]);
                null !== c ? null !== d.activeBreakpoint ? c !== d.activeBreakpoint && (d.activeBreakpoint = c, d.options = a.extend({}, d.options, d.breakpointSettings[c]), d.refresh()) : (d.activeBreakpoint = c, d.options = a.extend({}, d.options, d.breakpointSettings[c]), d.refresh()) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = a.extend({}, d.options, d.originalSettings), d.refresh())
            }
        }, b.prototype.changeSlide = function(b) {
            var c = this,
                d = a(b.target);
            switch (d.is("a") && b.preventDefault(), b.data.message) {
                case "previous":
                    c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide - c.options.slidesToScroll);
                    break;
                case "next":
                    c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide + c.options.slidesToScroll);
                    break;
                case "index":
                    c.slideHandler(d.parent().index() * c.options.slidesToScroll);
                    break;
                default:
                    return !1
            }
        }, b.prototype.destroy = function() {
            var b = this;
            b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()), b.$slides.parent().hasClass("slick-track") && b.$slides.unwrap().unwrap(), b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid)
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: 1e3
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: 1e3
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.filterSlides = function(a) {
            var b = this;
            null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).remove(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.getCurrent = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a, b = this,
                c = 0,
                d = 0,
                e = 0;
            for (a = b.options.infinite === !0 ? b.slideCount + b.options.slidesToShow - b.options.slidesToScroll : b.slideCount; a > c;) e++, d += b.options.slidesToScroll, c = d + b.options.slidesToShow;
            return e
        }, b.prototype.getLeft = function(a) {
            var b, c, d = this,
                e = 0;
            return d.slideOffset = 0, c = d.$slides.first().outerHeight(), d.options.infinite === !0 ? (d.slideCount > d.options.slidesToShow && (d.slideOffset = -1 * d.slideWidth * d.options.slidesToShow, e = -1 * c * d.options.slidesToShow), 0 !== d.slideCount % d.options.slidesToScroll && a + d.options.slidesToScroll > d.slideCount && d.slideCount > d.options.slidesToShow && (d.slideOffset = -1 * d.slideCount % d.options.slidesToShow * d.slideWidth, e = -1 * d.slideCount % d.options.slidesToShow * c)) : 0 !== d.slideCount % d.options.slidesToShow && a + d.options.slidesToScroll > d.slideCount && d.slideCount > d.options.slidesToShow && (d.slideOffset = d.options.slidesToShow * d.slideWidth - d.slideCount % d.options.slidesToShow * d.slideWidth, e = d.slideCount % d.options.slidesToShow * c), d.options.centerMode === !0 && d.options.infinite === !0 ? d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2) - d.slideWidth : d.options.centerMode === !0 && (d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2)), b = d.options.vertical === !1 ? -1 * a * d.slideWidth + d.slideOffset : -1 * a * c + e
        }, b.prototype.init = function() {
            var b = this;
            a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.checkResponsive()), null !== b.options.onInit && b.options.onInit.call(this, b)
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", b.autoPlayClear).on("mouseleave.slick", b.autoPlay)
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", b.autoPlayClear), b.$list.on("mouseleave.slick", b.autoPlay)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
                b.checkResponsive(), b.setPosition()
            }), a(window).on("resize.slick.slick-" + b.instanceUid, function() {
                a(window).width !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                    b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
                }, 50))
            }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            37 === a.keyCode ? b.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === a.keyCode && b.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.lazyLoad = function() {
            function b(b) {
                a("img[data-lazy]", b).each(function() {
                    var b = a(this),
                        c = a(this).attr("data-lazy");
                    b.css({
                        opacity: 0
                    }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading").load(function() {
                        b.animate({
                            opacity: 1
                        }, 200)
                    })
                })
            }
            var c, d, e, f, g = this;
            g.options.centerMode === !0 || g.options.fade === !0 ? (e = g.options.slidesToShow + g.currentSlide - 1, f = e + g.options.slidesToShow + 2) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.postSlide = function(a) {
            var b = this;
            null !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
        }, b.prototype.progressiveLazyLoad = function() {
            var b, c, d = this;
            b = a("img[data-lazy]").length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad()
            }))
        }, b.prototype.refresh = function() {
            var b = this,
                c = b.currentSlide;
            b.destroy(), a.extend(b, b.initials), b.currentSlide = c, b.init()
        }, b.prototype.reinit = function() {
            var a = this;
            a.$slides = a.$slideTrack.children(a.options.slide).addClass("slick-slide"), a.slideCount = a.$slides.length, a.currentSlide >= a.slideCount && 0 !== a.currentSlide && (a.currentSlide = a.currentSlide - a.options.slidesToScroll), a.setProps(), a.setupInfinite(), a.buildArrows(), a.updateArrows(), a.initArrowEvents(), a.buildDots(), a.updateDots(), a.initDotEvents(), a.setSlideClasses(0), a.setPosition(), null !== a.options.onReInit && a.options.onReInit.call(this, a)
        }, b.prototype.removeSlide = function(a, b) {
            var c = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : c.slideCount - 1) : a = b === !0 ? --a : a, c.slideCount < 1 || 0 > a || a > c.slideCount - 1 ? !1 : (c.unload(), c.$slideTrack.children(this.options.slide).eq(a).remove(), c.$slides = c.$slideTrack.children(this.options.slide), c.$slideTrack.children(this.options.slide).remove(), c.$slideTrack.append(c.$slides), c.$slidesCache = c.$slides, void c.reinit())
        }, b.prototype.setCSS = function(a) {
            var b, c, d = this,
                e = {};
            b = "left" == d.positionProp ? a + "px" : "0px", c = "top" == d.positionProp ? a + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            a.options.centerMode === !0 ? a.$slideTrack.children(".slick-slide").width(a.slideWidth) : a.$slideTrack.children(".slick-slide").width(a.slideWidth), a.options.vertical === !1 ? (a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)), a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            })) : (a.$list.height(a.$slides.first().outerHeight() * a.options.slidesToShow), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight() * a.$slideTrack.children(".slick-slide").length)), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            }))
        }, b.prototype.setFade = function() {
            var b, c = this;
            c.$slides.each(function(d, e) {
                b = -1 * c.slideWidth * d, a(e).css({
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setValues(), a.setDimensions(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade()
        }, b.prototype.setProps = function() {
            var a = this;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== document.body.style.WebkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== document.body.style.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition"), void 0 !== document.body.style.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition"), void 0 !== document.body.style.msTransform && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType
        }, b.prototype.setValues = function() {
            var a = this;
            a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.slideWidth = a.options.vertical === !1 ? Math.ceil(a.listWidth / a.options.slidesToShow) : Math.ceil(a.listWidth)
        }, b.prototype.setSlideClasses = function(a) {
            var b, c, d, e = this;
            e.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), c = e.$slider.find(".slick-slide"), e.options.centerMode === !0 ? (b = Math.floor(e.options.slidesToShow / 2), e.options.infinite === !0 && (a >= b && a <= e.slideCount - 1 - b ? e.$slides.slice(a - b, a + b + 1).addClass("slick-active") : (d = e.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active")), 0 === a ? c.eq(c.length - 1 - e.options.slidesToShow).addClass("slick-center") : a === e.slideCount - 1 && c.eq(e.options.slidesToShow).addClass("slick-center")), e.$slides.eq(a).addClass("slick-center")) : a > 0 && a < e.slideCount - e.options.slidesToShow ? e.$slides.slice(a, a + e.options.slidesToShow).addClass("slick-active") : c.length <= e.options.slidesToShow ? c.addClass("slick-active") : (d = e.options.infinite === !0 ? e.options.slidesToShow + a : a, c.slice(d, d + e.options.slidesToShow).addClass("slick-active")), "ondemand" === e.options.lazyLoad && e.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var b, c, d, e = this;
            if ((e.options.fade === !0 || e.options.vertical === !0) && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone().attr("id", "").prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone().attr("id", "").appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.slideHandler = function(a) {
            var b, c, d, e, f = null,
                g = this;
            return g.animating === !0 ? !1 : (b = a, f = g.getLeft(b), d = g.getLeft(g.currentSlide), e = 0 !== g.slideCount % g.options.slidesToScroll ? g.options.slidesToScroll : 0, g.currentLeft = null === g.swipeLeft ? d : g.swipeLeft, g.options.infinite === !1 && g.options.centerMode === !1 && (0 > a || a > g.slideCount - g.options.slidesToShow + e) ? (g.options.fade === !1 && (b = g.currentSlide, g.animateSlide(d, function() {
                g.postSlide(b)
            })), !1) : g.options.infinite === !1 && g.options.centerMode === !0 && (0 > a || a > g.slideCount - g.options.slidesToScroll) ? (g.options.fade === !1 && (b = g.currentSlide,
                g.animateSlide(d, function() {
                    g.postSlide(b)
                })), !1) : (g.options.autoplay === !0 && clearInterval(g.autoPlayTimer), c = 0 > b ? 0 !== g.slideCount % g.options.slidesToScroll ? g.slideCount - g.slideCount % g.options.slidesToScroll : g.slideCount - g.options.slidesToScroll : b > g.slideCount - 1 ? 0 : b, g.animating = !0, null !== g.options.onBeforeChange && a !== g.currentSlide && g.options.onBeforeChange.call(this, g, g.currentSlide, c), g.currentSlide = c, g.setSlideClasses(g.currentSlide), g.updateDots(), g.updateArrows(), g.options.fade === !0 ? (g.fadeSlide(c, function() {
                g.postSlide(c)
            }), !1) : void g.animateSlide(f, function() {
                g.postSlide(c)
            })))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? "left" : 360 >= d && d >= 315 ? "left" : d >= 135 && 225 >= d ? "right" : "vertical"
        }, b.prototype.swipeEnd = function(b) {
            var c = this;
            if (c.dragging = !1, void 0 === c.touchObject.curX) return !1;
            if (c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (a(b.target).on("click.slick", function(b) {
                b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.slick")
            }), c.swipeDirection()) {
                case "left":
                    c.slideHandler(c.currentSlide + c.options.slidesToScroll), c.touchObject = {};
                    break;
                case "right":
                    c.slideHandler(c.currentSlide - c.options.slidesToScroll), c.touchObject = {}
            } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 || b.options.draggable === !1 && !a.originalEvent.touches)) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var b, c, d, e, f = this;
            return e = void 0 !== a.originalEvent ? a.originalEvent.touches : null, b = f.getLeft(f.currentSlide), !f.dragging || e && 1 !== e.length ? !1 : (f.touchObject.curX = void 0 !== e ? e[0].pageX : a.clientX, f.touchObject.curY = void 0 !== e ? e[0].pageY : a.clientY, f.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(f.touchObject.curX - f.touchObject.startX, 2))), c = f.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && f.touchObject.swipeLength > 4 && a.preventDefault(), d = f.touchObject.curX > f.touchObject.startX ? 1 : -1, f.swipeLeft = f.options.vertical === !1 ? b + f.touchObject.swipeLength * d : b + f.touchObject.swipeLength * (f.$list.height() / f.listWidth) * d, f.options.fade === !0 || f.options.touchMove === !1 ? !1 : f.animating === !0 ? (f.swipeLeft = null, !1) : void f.setCSS(f.swipeLeft)) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var b, c = this;
            return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).remove(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()), b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")
        }, b.prototype.updateArrows = function() {
            var a = this;
            a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
        }, a.fn.slick = function(a) {
            var c = this;
            return c.each(function(c, d) {
                d.slick = new b(d, a)
            })
        }, a.fn.slickAdd = function(a, b, c) {
            var d = this;
            return d.each(function(d, e) {
                e.slick.addSlide(a, b, c)
            })
        }, a.fn.slickCurrentSlide = function() {
            var a = this;
            return a.get(0).slick.getCurrent()
        }, a.fn.slickFilter = function(a) {
            var b = this;
            return b.each(function(b, c) {
                c.slick.filterSlides(a)
            })
        }, a.fn.slickGoTo = function(a) {
            var b = this;
            return b.each(function(b, c) {
                c.slick.slideHandler(a)
            })
        }, a.fn.slickNext = function() {
            var a = this;
            return a.each(function(a, b) {
                b.slick.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            })
        }, a.fn.slickPause = function() {
            var a = this;
            return a.each(function(a, b) {
                b.slick.autoPlayClear(), b.slick.paused = !0
            })
        }, a.fn.slickPlay = function() {
            var a = this;
            return a.each(function(a, b) {
                b.slick.paused = !1, b.slick.autoPlay()
            })
        }, a.fn.slickPrev = function() {
            var a = this;
            return a.each(function(a, b) {
                b.slick.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            })
        }, a.fn.slickRemove = function(a, b) {
            var c = this;
            return c.each(function(c, d) {
                d.slick.removeSlide(a, b)
            })
        }, a.fn.slickGetOption = function(a) {
            var b = this;
            return b.get(0).slick.options[a]
        }, a.fn.slickSetOption = function(a, b, c) {
            var d = this;
            return d.each(function(d, e) {
                e.slick.options[a] = b, c === !0 && (e.slick.unload(), e.slick.reinit())
            })
        }, a.fn.slickUnfilter = function() {
            var a = this;
            return a.each(function(a, b) {
                b.slick.unfilterSlides()
            })
        }, a.fn.unslick = function() {
            var a = this;
            return a.each(function(a, b) {
                b.slick && b.slick.destroy()
            })
        }
    }),
    function(a) {
        function b(a) {
            return "object" == typeof a ? a : {
                top: a,
                left: a
            }
        }
        var c = a.scrollTo = function(b, c, d) {
            a(window).scrollTo(b, c, d)
        };
        c.defaults = {
            axis: "xy",
            duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        }, c.window = function(b) {
            return a(window)._scrollable()
        }, a.fn._scrollable = function() {
            return this.map(function() {
                var b = this,
                    c = !b.nodeName || -1 != a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!c) return b;
                var d = (b.contentWindow || b).document || b.ownerDocument || b;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode ? d.body : d.documentElement
            })
        }, a.fn.scrollTo = function(d, e, f) {
            return "object" == typeof e && (f = e, e = 0), "function" == typeof f && (f = {
                onAfter: f
            }), "max" == d && (d = 9e9), f = a.extend({}, c.defaults, f), e = e || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (e /= 2), f.offset = b(f.offset), f.over = b(f.over), this._scrollable().each(function() {
                function g(a) {
                    j.animate(l, e, f.easing, a && function() {
                        a.call(this, d, f)
                    })
                }
                if (null != d) {
                    var h, i = this,
                        j = a(i),
                        k = d,
                        l = {},
                        m = j.is("html,body");
                    switch (typeof k) {
                        case "number":
                        case "string":
                            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)) {
                                k = b(k);
                                break
                            }
                            if (k = a(k, this), !k.length) return;
                        case "object":
                            (k.is || k.style) && (h = (k = a(k)).offset())
                    }
                    a.each(f.axis.split(""), function(a, b) {
                        var d = "x" == b ? "Left" : "Top",
                            e = d.toLowerCase(),
                            n = "scroll" + d,
                            o = i[n],
                            p = c.max(i, b);
                        if (h) l[n] = h[e] + (m ? 0 : o - j.offset()[e]), f.margin && (l[n] -= parseInt(k.css("margin" + d)) || 0, l[n] -= parseInt(k.css("border" + d + "Width")) || 0), l[n] += f.offset[e] || 0, f.over[e] && (l[n] += k["x" == b ? "width" : "height"]() * f.over[e]);
                        else {
                            var q = k[e];
                            l[n] = q.slice && "%" == q.slice(-1) ? parseFloat(q) / 100 * p : q
                        }
                        f.limit && /^\d+$/.test(l[n]) && (l[n] = l[n] <= 0 ? 0 : Math.min(l[n], p)), !a && f.queue && (o != l[n] && g(f.onAfterFirst), delete l[n])
                    }), g(f.onAfter)
                }
            }).end()
        }, c.max = function(b, c) {
            var d = "x" == c ? "Width" : "Height",
                e = "scroll" + d;
            if (!a(b).is("html,body")) return b[e] - a(b)[d.toLowerCase()]();
            var f = "client" + d,
                g = b.ownerDocument.documentElement,
                h = b.ownerDocument.body;
            return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
        }
    }(jQuery),
    function(a) {
        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                    })
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
                return a.bridget = function(a, b) {
                    c(b), e(a, b)
                }, a.bridget
            }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery)
    }(window),
    function(a) {
        function b(a) {
            return RegExp("(^|\\s+)" + a + "(\\s+|$)")
        }

        function c(a, b) {
            var c = d(a, b) ? f : e;
            c(a, b)
        }
        var d, e, f;
        "classList" in document.documentElement ? (d = function(a, b) {
            return a.classList.contains(b)
        }, e = function(a, b) {
            a.classList.add(b)
        }, f = function(a, b) {
            a.classList.remove(b)
        }) : (d = function(a, c) {
            return b(c).test(a.className)
        }, e = function(a, b) {
            d(a, b) || (a.className = a.className + " " + b)
        }, f = function(a, c) {
            a.className = a.className.replace(b(c), " ")
        });
        var g = {
            hasClass: d,
            addClass: e,
            removeClass: f,
            toggleClass: c,
            has: d,
            add: e,
            remove: f,
            toggle: c
        };
        "function" == typeof define && define.amd ? define("classie/classie", g) : a.classie = g
    }(window),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var e = {};
                    e.width = a.offsetWidth, e.height = a.offsetHeight;
                    for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
                        var n = g[l],
                            o = d[n];
                        o = h(a, o);
                        var p = parseFloat(o);
                        e[n] = isNaN(p) ? 0 : p
                    }
                    var q = e.paddingLeft + e.paddingRight,
                        r = e.paddingTop + e.paddingBottom,
                        s = e.marginLeft + e.marginRight,
                        t = e.marginTop + e.marginBottom,
                        u = e.borderLeftWidth + e.borderRightWidth,
                        v = e.borderTopWidth + e.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (e.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e
                }
            }

            function h(a, b) {
                if (e || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    f = a.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b
            }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    i = 200 === b(d.width), c.removeChild(a)
                }
            }(), d
        }
        var e = a.getComputedStyle,
            f = e ? function(a) {
                return e(a, null)
            } : function(a) {
                return a.currentStyle
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty)
    }(window),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
    }(this),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : f.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) {
                b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h()
                }
            }
        }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
        }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
    }(this),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if (a instanceof RegExp)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a, b) {
        function c(a, b) {
            return a[h](b)
        }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1
        }

        function f(a, b) {
            return d(a), c(a, b)
        }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f
        } else g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return g
        }) : window.matchesSelector = g
    }(this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function d(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }

        function e(a, e, f) {
            function h(a, b) {
                a && (this.element = a, this.layout = b, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e)
                    }
                    return a
                }();
            b(h.prototype, a.prototype), h.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, h.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, h.prototype.getSize = function() {
                this.size = e(this.element)
            }, h.prototype.css = function(a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c]
                }
            }, h.prototype.getPosition = function() {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
            }, h.prototype.layoutPosition = function() {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
            };
            var p = l ? function(a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)"
            } : function(a, b) {
                return "translate(" + a + "px, " + b + "px)"
            };
            h.prototype._transitionTo = function(a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
                    to: j,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, h.prototype.goTo = function(a, b) {
                this.setPosition(a, b), this.layoutPosition()
            }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
                this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
            }, h.prototype._nonTransition = function(a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
            }, h.prototype._transition = function(a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null
                }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
            };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: q,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(m, this, !1))
            }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
                this.ontransitionend(a)
            }, h.prototype.onotransitionend = function(a) {
                this.ontransitionend(a)
            };
            var r = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transn,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, h.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
            }, h.prototype._removeStyles = function(a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b)
            };
            var s = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return h.prototype.removeTransitionStyles = function() {
                this.css(s)
            }, h.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, h.prototype.remove = function() {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var a = this;
                this.on("transitionEnd", function() {
                    return a.removeElem(), !0
                }), this.hide()
            }, h.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.hiddenStyle,
                    to: a.visibleStyle,
                    isCleaning: !0
                })
            }, h.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.visibleStyle,
                    to: a.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, h.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, h
        }
        var f = document.defaultView,
            g = f && f.getComputedStyle ? function(a) {
                return f.getComputedStyle(a, null)
            } : function(a) {
                return a.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
    }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === l.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1)
        }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
                this.element = a, this.options = b({}, this.options), this.option(c);
                var d = ++s;
                this.element.outlayerGUID = d, t[d] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function r(a, c) {
                a.prototype[c] = b({}, q.prototype[c])
            }
            var s = 0,
                t = {};
            return q.namespace = "outlayer", q.Item = p, q.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, b(q.prototype, l.prototype), q.prototype.option = function(a) {
                b(this.options, a)
            }, q.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, q.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, q.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h)
                }
                return d
            }, q.prototype._filterFindItemElements = function(a) {
                a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) {
                            o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                        } else c.push(g)
                }
                return c
            }, q.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a
            }, q.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0
            }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
                this.getSize()
            }, q.prototype.getSize = function() {
                this.size = n(this.element)
            }, q.prototype._getMeasurement = function(a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
            }, q.prototype.layoutItems = function(a, b) {
                a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
            }, q.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e)
                }
                return b
            }, q.prototype._layoutItems = function(a, b) {
                function c() {
                    d.emitEvent("layoutComplete", [d, a])
                }
                var d = this;
                if (!a || !a.length) return void c();
                this._itemsOn(a, "layout", c);
                for (var e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f],
                        i = this._getItemLayoutPosition(h);
                    i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i)
                }
                this._processLayoutQueue(e)
            }, q.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, q.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant)
                }
            }, q.prototype._positionItem = function(a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c)
            }, q.prototype._postLayout = function() {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
                }
            }, q.prototype._itemsOn = function(a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0
                }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d)
                }
            }, q.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0)
            }, q.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored
            }, q.prototype.stamp = function(a) {
                if (a = this._find(a)) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d)
                    }
                }
            }, q.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d)
                    }
            }, q.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
            }, q.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c)
                    }
                }
            }, q.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                }
            }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = {
                        left: b.left - c.left - d.marginLeft,
                        top: b.top - c.top - d.marginTop,
                        right: c.right - b.right - d.marginRight,
                        bottom: c.bottom - b.bottom - d.marginBottom
                    };
                return e
            }, q.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, q.prototype.bindResize = function() {
                this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
            }, q.prototype.unbindResize = function() {
                c.unbind(a, "resize", this), this.isResizeBound = !1
            }, q.prototype.onresize = function() {
                function a() {
                    b.resize(), delete b.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100)
            }, q.prototype.resize = function() {
                var a = n(this.element),
                    b = this.size && a;
                b && a.innerWidth === this.size.innerWidth || this.layout()
            }, q.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b
            }, q.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b))
            }, q.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
                }
            }, q.prototype.reveal = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.reveal()
                    }
            }, q.prototype.hide = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.hide()
                    }
            }, q.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d
                }
            }, q.prototype.getItems = function(a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f)
                    }
                    return b
                }
            }, q.prototype.remove = function(a) {
                a = d(a);
                var b = this.getItems(a);
                if (b && b.length) {
                    this._itemsOn(b, "remove", function() {
                        this.emitEvent("removeComplete", [this, b])
                    });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items)
                    }
                }
            }, q.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
            }, q.data = function(a) {
                var b = a && a.outlayerGUID;
                return b && t[b]
            }, q.create = function(a, c) {
                function d() {
                    q.apply(this, arguments)
                }
                return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, r(d, "options"), b(d.prototype.options, c), d.namespace = a, d.data = q.data, d.Item = function() {
                    p.apply(this, arguments)
                }, d.Item.prototype = new p, g(function() {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try {
                            l = n && JSON.parse(n)
                        } catch (o) {
                            i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue
                        }
                        var p = new d(m, l);
                        j && j.data(m, a, p)
                    }
                }), j && j.bridget && j.bridget(a, d), d
            }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement
            } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            n = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b)
            } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function(a) {
        function b() {
            function a(b) {
                for (var c in a.defaults) this[c] = a.defaults[c];
                for (c in b) this[c] = b[c]
            }
            return c.Rect = a, a.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, a.prototype.contains = function(a) {
                var b = a.width || 0,
                    c = a.height || 0;
                return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
            }, a.prototype.overlaps = function(a) {
                var b = this.x + this.width,
                    c = this.y + this.height,
                    d = a.x + a.width,
                    e = a.y + a.height;
                return d > this.x && b > a.x && e > this.y && c > a.y
            }, a.prototype.getMaximalFreeRects = function(b) {
                if (!this.overlaps(b)) return !1;
                var c, d = [],
                    e = this.x + this.width,
                    f = this.y + this.height,
                    g = b.x + b.width,
                    h = b.y + b.height;
                return this.y < b.y && (c = new a({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: b.y - this.y
                }), d.push(c)), e > g && (c = new a({
                    x: g,
                    y: this.y,
                    width: e - g,
                    height: this.height
                }), d.push(c)), f > h && (c = new a({
                    x: this.x,
                    y: h,
                    width: this.width,
                    height: f - h
                }), d.push(c)), this.x < b.x && (c = new a({
                    x: this.x,
                    y: this.y,
                    width: b.x - this.x,
                    height: this.height
                }), d.push(c)), d
            }, a.prototype.canFit = function(a) {
                return this.width >= a.width && this.height >= a.height;
            }, a
        }
        var c = a.Packery = function() {};
        "function" == typeof define && define.amd ? define("packery/js/rect", b) : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
    }(window),
    function(a) {
        function b(a) {
            function b(a, b, c) {
                this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
            }
            b.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var b = new a({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight
            }, b.prototype.pack = function(a) {
                for (var b = 0, c = this.spaces.length; c > b; b++) {
                    var d = this.spaces[b];
                    if (d.canFit(a)) {
                        this.placeInSpace(a, d);
                        break
                    }
                }
            }, b.prototype.placeInSpace = function(a, b) {
                a.x = b.x, a.y = b.y, this.placed(a)
            }, b.prototype.placed = function(a) {
                for (var c = [], d = 0, e = this.spaces.length; e > d; d++) {
                    var f = this.spaces[d],
                        g = f.getMaximalFreeRects(a);
                    g ? c.push.apply(c, g) : c.push(f)
                }
                this.spaces = c, b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
            }, b.mergeRects = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    if (d) {
                        var e = a.slice(0);
                        e.splice(b, 1);
                        for (var f = 0, g = 0, h = e.length; h > g; g++) {
                            var i = e[g],
                                j = b > g ? 0 : 1;
                            d.contains(i) && (a.splice(g + j - f, 1), f++)
                        }
                    }
                }
                return a
            };
            var c = {
                downwardLeftToRight: function(a, b) {
                    return a.y - b.y || a.x - b.x
                },
                rightwardTopToBottom: function(a, b) {
                    return a.x - b.x || a.y - b.y
                }
            };
            return b
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
        else {
            var c = a.Packery = a.Packery || {};
            c.Packer = b(c.Rect)
        }
    }(window),
    function(a) {
        function b(a, b, c) {
            var d = a("transform"),
                e = function() {
                    b.Item.apply(this, arguments)
                };
            e.prototype = new b.Item;
            var f = e.prototype._create;
            return e.prototype._create = function() {
                f.call(this), this.rect = new c, this.placeRect = new c
            }, e.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, e.prototype.dragMove = function(a, b) {
                this.didDrag = !0;
                var c = this.layout.size;
                a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b)
            }, e.prototype.dragStop = function() {
                this.getPosition();
                var a = this.position.x !== this.placeRect.x,
                    b = this.position.y !== this.placeRect.y;
                this.needsPositioning = a || b, this.didDrag = !1
            }, e.prototype.positionPlaceRect = function(a, b, c) {
                this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
            }, e.prototype.getPlaceRectCoord = function(a, b, c) {
                var d = b ? "Width" : "Height",
                    e = this.size["outer" + d],
                    f = this.layout[b ? "columnWidth" : "rowHeight"],
                    g = this.layout.size["inner" + d];
                b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
                var h;
                if (f) {
                    f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
                    var i;
                    i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
                    var j = Math[i](g / f);
                    j -= Math.ceil(e / f), h = j
                } else h = g - e;
                return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a)
            }, e.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, e
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
    }(window),
    function(a) {
        function b(a, b, c, d, e, f) {
            function g(a, b) {
                return a.position.y - b.position.y || a.position.x - b.position.x
            }

            function h(a, b) {
                return a.position.x - b.position.x || a.position.y - b.position.y
            }
            var i = c.create("packery");
            return i.Item = f, i.prototype._create = function() {
                c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
                var a = this;
                this.handleDraggabilly = {
                    dragStart: function(b) {
                        a.itemDragStart(b.element)
                    },
                    dragMove: function(b) {
                        a.itemDragMove(b.element, b.position.x, b.position.y)
                    },
                    dragEnd: function(b) {
                        a.itemDragEnd(b.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(b) {
                        a.itemDragStart(b.currentTarget)
                    },
                    drag: function(b, c) {
                        a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
                    },
                    stop: function(b) {
                        a.itemDragEnd(b.currentTarget)
                    }
                }
            }, i.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements();
                var a = this.packer;
                this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0
            }, i.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, i.prototype._getItemLayoutPosition = function(a) {
                return this._packItem(a), a.rect
            }, i.prototype._packItem = function(a) {
                this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect)
            }, i.prototype._setMaxXY = function(a) {
                this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
            }, i.prototype._setRectSize = function(a, c) {
                var d = b(a),
                    e = d.outerWidth,
                    f = d.outerHeight,
                    g = this.columnWidth + this.gutter,
                    h = this.rowHeight + this.gutter;
                e = this.columnWidth ? Math.ceil(e / g) * g : e + this.gutter, f = this.rowHeight ? Math.ceil(f / h) * h : f + this.gutter, c.width = Math.min(e, this.packer.width), c.height = f
            }, i.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
            }, i.prototype._manageStamp = function(a) {
                var b, c = this.getItem(a);
                if (c && c.isPlacing) b = c.placeRect;
                else {
                    var e = this._getElementOffset(a);
                    b = new d({
                        x: this.options.isOriginLeft ? e.left : e.right,
                        y: this.options.isOriginTop ? e.top : e.bottom
                    })
                }
                this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
            }, i.prototype.sortItemsByPosition = function() {
                var a = this.options.isHorizontal ? h : g;
                this.items.sort(a)
            }, i.prototype.fit = function(a, b, c) {
                var d = this.getItem(a);
                d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition())
            }, i.prototype._bindFitEvents = function(a) {
                function b() {
                    d++, 2 === d && c.emitEvent("fitComplete", [c, a])
                }
                var c = this,
                    d = 0;
                a.on("layout", function() {
                    return b(), !0
                }), this.on("layoutComplete", function() {
                    return b(), !0
                })
            }, i.prototype.resize = function() {
                var a = b(this.element),
                    c = this.size && a,
                    d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                c && a[d] === this.size[d] || this.layout()
            }, i.prototype.itemDragStart = function(a) {
                this.stamp(a);
                var b = this.getItem(a);
                b && b.dragStart()
            }, i.prototype.itemDragMove = function(a, b, c) {
                function d() {
                    f.layout(), delete f.dragTimeout
                }
                var e = this.getItem(a);
                e && e.dragMove(b, c);
                var f = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40)
            }, i.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, i.prototype.itemDragEnd = function(b) {
                var c, d = this.getItem(b);
                if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
                a.add(d.element, "is-positioning-post-drag");
                var e = this._getDragEndLayoutComplete(b, d);
                d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
            }, i.prototype._getDragEndLayoutComplete = function(b, c) {
                var d = c && c.needsPositioning,
                    e = 0,
                    f = d ? 2 : 1,
                    g = this;
                return function() {
                    return e++, e !== f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [g, c]), !0)
                }
            }, i.prototype.bindDraggabillyEvents = function(a) {
                a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, i.prototype.bindUIDraggableEvents = function(a) {
                a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, i.Rect = d, i.Packer = e, i
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], b) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
    }(window),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(window, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = void 0 !== k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; b > a; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                var d = c.nodeType;
                if (d && (1 === d || 9 === d || 11 === d))
                    for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                        var h = e[f];
                        this.addImage(h)
                    }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return void this.complete();
            for (var e = 0; d > e; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    }),
    function(a) {
        a.fn.ngResponsiveTables = function(b) {
            var c = {
                    smallPaddingCharNo: 5,
                    mediumPaddingCharNo: 10,
                    largePaddingCharNo: 15
                },
                d = this,
                e = {
                    opt: "",
                    dataContent: "",
                    globalWidth: 0,
                    init: function() {
                        this.opt = a.extend(c, b), e.targetTable()
                    },
                    targetTable: function() {
                        var b = this;
                        d.find("tr").each(function() {
                            a(this).find("td").each(function(c, d) {
                                b.checkForTableHead(a(this), c), a(this).addClass("tdno" + c)
                            })
                        })
                    },
                    checkForTableHead: function(b, c) {
                        d.find("th").length ? this.dataContent = d.find("th")[c].textContent : this.dataContent = d.find("tr:first td")[c].textContent, this.opt.smallPaddingCharNo > a.trim(this.dataContent).length ? b.addClass("small-padding") : this.opt.mediumPaddingCharNo > a.trim(this.dataContent).length ? b.addClass("medium-padding") : b.addClass("large-padding"), b.attr("data-content", this.dataContent)
                    }
                };
            return a(function() {
                e.init()
            }), this
        }
    }(jQuery), $(document).ready(function() {
        function a(a, b, c) {
            if (c) {
                var d = new Date;
                d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
                var e = "; expires=" + d.toGMTString()
            } else var e = "";
            document.cookie = a + "=" + b + e + "; path=/"
        }

        function b(a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d];
                    " " == e.charAt(0);) e = e.substring(1, e.length);
                if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
            }
            return null
        }
        $("#rsvp span.error").length > 0 && $("#rsvp").foundation("reveal", "open"), stickyHeader(), $(".carousel").length > 0 && $(".carousel").slick({
            dots: !0,
            infinite: !0,
            speed: 500,
            fade: !0,
            cssEase: "linear"
        }), $(".carousel-2").length > 0 && $(".carousel-2").slick({
            dots: !1,
            infinite: !0,
            speed: 500,
            fade: !0,
            cssEase: "linear",
            onInit: function() {
                var a = $(".carousel-2 .columns");
                a.length > 0 && ($(window).bind("resize", function() {
                    a.height("auto"), winSize("medium-down") || (rowHeight = 0, a.each(function() {
                        $(this).height() > rowHeight && (rowHeight = $(this).height())
                    }), a.height(rowHeight))
                }), setTimeout(function() {
                    $(window).resize()
                }, 200))
            }
        }), $(".carousel button.down").click(function() {
            $.scrollTo($(this).closest("section.carousel").next("section"), 500, {
                offset: {
                    top: -100
                }
            })
        }), $("a[data-link-to]").click(function() {
            var a = "[id='" + $(this).data("link-to").substr(1) + "']",
                b = 0 == $(document).scrollTop() ? -100 : -50;
            return console.log(b), winSize("medium-down") && $(".top-bar.expanded").length > 0 && (b = 0), console.log(b), $.scrollTo($(a), 500, {
                offset: {
                    top: b
                }
            }), !1
        }), $(window).scroll(stickyHeader), $(window).resize(stickyHeader), $(".copy table").addClass("responsive"), $("table.responsive").ngResponsiveTables({
            smallPaddingCharNo: 13,
            mediumPaddingCharNo: 18,
            largePaddingCharNo: 30
        });
        var c = $("*[data-eq-per-row]");
        c.length > 0 && ($(window).bind("resize", function() {
            c.each(function() {
                var a = $(this).find($(this).data("child-selector")),
                    b = a.length;
                if (0 != b) {
                    if (a.height("auto"), winSize("large")) perRow = parseInt($(this).data("large-per-row"));
                    else {
                        if (!winSize("medium")) return;
                        perRow = parseInt($(this).data("medium-per-row"))
                    }
                    rows = Math.ceil(b / perRow);
                    for (var c = 1; c <= rows; c++) {
                        rowHeight = 0;
                        for (var d = 1; d <= perRow; d++) thisHeight = a.slice((c - 1) * perRow + d - 1, (c - 1) * perRow + d).height(), thisHeight > rowHeight && (rowHeight = thisHeight);
                        a.slice((c - 1) * perRow, (c - 1) * perRow + perRow).height(rowHeight)
                    }
                }
            })
        }), setTimeout(function() {
            $(window).resize()
        }, 200)), setTimeout(function() {
            $(window).resize(), $(document).foundation()
        }, 300), setTimeout(function() {
            $("section.carousel").animate({
                opacity: 1
            }, 1e3)
        }, 100), $(function() {
            b("lakecomo_accept_cookies") || $(".cookie-header").show(), $(".cookie-header .button.continue").click(function() {
                $(".cookie-header").slideToggle(), a("lakecomo_accept_cookies", 1, 365)
            })
        })
    });
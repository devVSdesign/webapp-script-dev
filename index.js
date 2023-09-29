var Uf = Object.defineProperty;
var Hf = (e, t, n) =>
  t in e
    ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var zf = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var nl = (e, t, n) => (Hf(e, typeof t != "symbol" ? t + "" : t, n), n);
var jw = zf((zw, Tn) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  var ct = ((e) => (
      (e.RESOLVED = "RESOLVED"), (e.UNRESOLVED = "UNRESOLVED"), e
    ))(ct || {}),
    zn = ((e) => (
      (e.MOBILE = "MOBILE"), (e.TABLET = "TABLET"), (e.DESKTOP = "DESKTOP"), e
    ))(zn || {}),
    ge =
      typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {};
  function ia(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Wf(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        return this instanceof r
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          n,
          r,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }
        );
      }),
      n
    );
  }
  var Bu = { exports: {} };
  /*!
   * Toastify js 1.12.0
   * https://github.com/apvarun/toastify-js
   * @license MIT licensed
   *
   * Copyright (C) 2018 Varun A P
   */ (function (e) {
    (function (t, n) {
      e.exports ? (e.exports = n()) : (t.Toastify = n());
    })(ge, function (t) {
      var n = function (s) {
          return new n.lib.init(s);
        },
        r = "1.12.0";
      (n.defaults = {
        oldestFirst: !0,
        text: "Toastify is awesome!",
        node: void 0,
        duration: 3e3,
        selector: void 0,
        callback: function () {},
        destination: void 0,
        newWindow: !1,
        close: !1,
        gravity: "toastify-top",
        positionLeft: !1,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: !0,
        onClick: function () {},
        offset: { x: 0, y: 0 },
        escapeMarkup: !0,
        ariaLive: "polite",
        style: { background: "" },
      }),
        (n.lib = n.prototype =
          {
            toastify: r,
            constructor: n,
            init: function (s) {
              return (
                s || (s = {}),
                (this.options = {}),
                (this.toastElement = null),
                (this.options.text = s.text || n.defaults.text),
                (this.options.node = s.node || n.defaults.node),
                (this.options.duration =
                  s.duration === 0 ? 0 : s.duration || n.defaults.duration),
                (this.options.selector = s.selector || n.defaults.selector),
                (this.options.callback = s.callback || n.defaults.callback),
                (this.options.destination =
                  s.destination || n.defaults.destination),
                (this.options.newWindow = s.newWindow || n.defaults.newWindow),
                (this.options.close = s.close || n.defaults.close),
                (this.options.gravity =
                  s.gravity === "bottom"
                    ? "toastify-bottom"
                    : n.defaults.gravity),
                (this.options.positionLeft =
                  s.positionLeft || n.defaults.positionLeft),
                (this.options.position = s.position || n.defaults.position),
                (this.options.backgroundColor =
                  s.backgroundColor || n.defaults.backgroundColor),
                (this.options.avatar = s.avatar || n.defaults.avatar),
                (this.options.className = s.className || n.defaults.className),
                (this.options.stopOnFocus =
                  s.stopOnFocus === void 0
                    ? n.defaults.stopOnFocus
                    : s.stopOnFocus),
                (this.options.onClick = s.onClick || n.defaults.onClick),
                (this.options.offset = s.offset || n.defaults.offset),
                (this.options.escapeMarkup =
                  s.escapeMarkup !== void 0
                    ? s.escapeMarkup
                    : n.defaults.escapeMarkup),
                (this.options.ariaLive = s.ariaLive || n.defaults.ariaLive),
                (this.options.style = s.style || n.defaults.style),
                s.backgroundColor &&
                  (this.options.style.background = s.backgroundColor),
                this
              );
            },
            buildToast: function () {
              if (!this.options) throw "Toastify is not initialized";
              var s = document.createElement("div");
              (s.className = "toastify on " + this.options.className),
                this.options.position
                  ? (s.className += " toastify-" + this.options.position)
                  : this.options.positionLeft === !0
                  ? ((s.className += " toastify-left"),
                    console.warn(
                      "Property `positionLeft` will be depreciated in further versions. Please use `position` instead."
                    ))
                  : (s.className += " toastify-right"),
                (s.className += " " + this.options.gravity),
                this.options.backgroundColor &&
                  console.warn(
                    'DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'
                  );
              for (var a in this.options.style)
                s.style[a] = this.options.style[a];
              if (
                (this.options.ariaLive &&
                  s.setAttribute("aria-live", this.options.ariaLive),
                this.options.node &&
                  this.options.node.nodeType === Node.ELEMENT_NODE)
              )
                s.appendChild(this.options.node);
              else if (
                (this.options.escapeMarkup
                  ? (s.innerText = this.options.text)
                  : (s.innerHTML = this.options.text),
                this.options.avatar !== "")
              ) {
                var c = document.createElement("img");
                (c.src = this.options.avatar),
                  (c.className = "toastify-avatar"),
                  this.options.position == "left" ||
                  this.options.positionLeft === !0
                    ? s.appendChild(c)
                    : s.insertAdjacentElement("afterbegin", c);
              }
              if (this.options.close === !0) {
                var l = document.createElement("button");
                (l.type = "button"),
                  l.setAttribute("aria-label", "Close"),
                  (l.className = "toast-close"),
                  (l.innerHTML = "&#10006;"),
                  l.addEventListener(
                    "click",
                    function (y) {
                      y.stopPropagation(),
                        this.removeElement(this.toastElement),
                        window.clearTimeout(this.toastElement.timeOutValue);
                    }.bind(this)
                  );
                var u =
                  window.innerWidth > 0 ? window.innerWidth : screen.width;
                (this.options.position == "left" ||
                  this.options.positionLeft === !0) &&
                u > 360
                  ? s.insertAdjacentElement("afterbegin", l)
                  : s.appendChild(l);
              }
              if (this.options.stopOnFocus && this.options.duration > 0) {
                var m = this;
                s.addEventListener("mouseover", function (y) {
                  window.clearTimeout(s.timeOutValue);
                }),
                  s.addEventListener("mouseleave", function () {
                    s.timeOutValue = window.setTimeout(function () {
                      m.removeElement(s);
                    }, m.options.duration);
                  });
              }
              if (
                (typeof this.options.destination < "u" &&
                  s.addEventListener(
                    "click",
                    function (y) {
                      y.stopPropagation(),
                        this.options.newWindow === !0
                          ? window.open(this.options.destination, "_blank")
                          : (window.location = this.options.destination);
                    }.bind(this)
                  ),
                typeof this.options.onClick == "function" &&
                  typeof this.options.destination > "u" &&
                  s.addEventListener(
                    "click",
                    function (y) {
                      y.stopPropagation(), this.options.onClick();
                    }.bind(this)
                  ),
                typeof this.options.offset == "object")
              ) {
                var h = i("x", this.options),
                  v = i("y", this.options),
                  f = this.options.position == "left" ? h : "-" + h,
                  d = this.options.gravity == "toastify-top" ? v : "-" + v;
                s.style.transform = "translate(" + f + "," + d + ")";
              }
              return s;
            },
            showToast: function () {
              this.toastElement = this.buildToast();
              var s;
              if (
                (typeof this.options.selector == "string"
                  ? (s = document.getElementById(this.options.selector))
                  : this.options.selector instanceof HTMLElement ||
                    (typeof ShadowRoot < "u" &&
                      this.options.selector instanceof ShadowRoot)
                  ? (s = this.options.selector)
                  : (s = document.body),
                !s)
              )
                throw "Root element is not defined";
              var a = n.defaults.oldestFirst ? s.firstChild : s.lastChild;
              return (
                s.insertBefore(this.toastElement, a),
                n.reposition(),
                this.options.duration > 0 &&
                  (this.toastElement.timeOutValue = window.setTimeout(
                    function () {
                      this.removeElement(this.toastElement);
                    }.bind(this),
                    this.options.duration
                  )),
                this
              );
            },
            hideToast: function () {
              this.toastElement.timeOutValue &&
                clearTimeout(this.toastElement.timeOutValue),
                this.removeElement(this.toastElement);
            },
            removeElement: function (s) {
              (s.className = s.className.replace(" on", "")),
                window.setTimeout(
                  function () {
                    this.options.node &&
                      this.options.node.parentNode &&
                      this.options.node.parentNode.removeChild(
                        this.options.node
                      ),
                      s.parentNode && s.parentNode.removeChild(s),
                      this.options.callback.call(s),
                      n.reposition();
                  }.bind(this),
                  400
                );
            },
          }),
        (n.reposition = function () {
          for (
            var s = { top: 15, bottom: 15 },
              a = { top: 15, bottom: 15 },
              c = { top: 15, bottom: 15 },
              l = document.getElementsByClassName("toastify"),
              u,
              m = 0;
            m < l.length;
            m++
          ) {
            o(l[m], "toastify-top") === !0
              ? (u = "toastify-top")
              : (u = "toastify-bottom");
            var h = l[m].offsetHeight;
            u = u.substr(9, u.length - 1);
            var v = 15,
              f = window.innerWidth > 0 ? window.innerWidth : screen.width;
            f <= 360
              ? ((l[m].style[u] = c[u] + "px"), (c[u] += h + v))
              : o(l[m], "toastify-left") === !0
              ? ((l[m].style[u] = s[u] + "px"), (s[u] += h + v))
              : ((l[m].style[u] = a[u] + "px"), (a[u] += h + v));
          }
          return this;
        });
      function i(s, a) {
        return a.offset[s]
          ? isNaN(a.offset[s])
            ? a.offset[s]
            : a.offset[s] + "px"
          : "0px";
      }
      function o(s, a) {
        return !s || typeof a != "string"
          ? !1
          : !!(
              s.className && s.className.trim().split(/\s+/gi).indexOf(a) > -1
            );
      }
      return (n.lib.init.prototype = n.lib), n;
    });
  })(Bu);
  var Vf = Bu.exports;
  const qf = ia(Vf);
  class Fu extends HTMLElement {
    constructor() {
      super();
      nl(this, "shadow");
      (this.shadow = this.attachShadow({ mode: "open" })),
        (this.id = "annotate-site-dom"),
        (this.style.overflow = "hidden");
    }
    connectedCallback() {
      for (; this.childNodes.length > 0; )
        this.shadowRoot && this.shadowRoot.appendChild(this.childNodes[0]);
      const n = document.createElement("link");
      n.setAttribute("rel", "stylesheet"),
        n.setAttribute("type", "text/css"),
        n.setAttribute("href", "https://webapp.annotate.site/style.css");
      const r = document.createElement("div");
      (r.id = "toaster-container"),
        this.shadowRoot &&
          (this.shadow.appendChild(r), this.shadowRoot.appendChild(n));
    }
    addNode(n) {
      this.shadow.appendChild(n);
    }
    getNode(n) {
      return this.shadow.querySelector(n);
    }
    getShadowRoot() {
      return this.shadow;
    }
    passClick(n) {
      var i;
      return (
        ((i = n.shadowRoot) == null ? void 0 : i.host) === this.shadow.host
      );
    }
  }
  customElements.define("annotate-site", Fu);
  const ce = new Fu();
  document.body.appendChild(ce);
  class Gf {
    createToast(t, n) {
      const r = { success: "#14532d", error: "#ef4444", loading: "#171717" },
        i = { success: "✅", error: "❌", loading: "⏳" },
        o = document.createElement("p");
      o.innerHTML = `${i[n]} &nbsp; ${t}`;
      const s = qf({
        text: `${i[n]} ${t}`,
        node: o,
        position: "center",
        stopOnFocus: !0,
        offset: { x: 0, y: 160 },
        selector: ce.getNode("#toaster-container"),
        duration: n === "loading" ? -1 : 3e3,
        style: {
          background: "#fff",
          color: r[n],
          borderRadius: "4px",
          fontWeight: "600",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
      });
      return s.showToast(), s;
    }
    success(t) {
      return this.createToast(t, "success");
    }
    error(t) {
      return this.createToast(t, "error");
    }
    loading(t) {
      return this.createToast(t, "loading");
    }
  }
  const qe = new Gf();
  var vt = Uint8Array,
    dn = Uint16Array,
    cs = Uint32Array,
    Yu = new vt([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    ju = new vt([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    Zf = new vt([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    $u = function (e, t) {
      for (var n = new dn(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
      for (var i = new cs(n[30]), r = 1; r < 30; ++r)
        for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
      return [n, i];
    },
    Uu = $u(Yu, 2),
    Hu = Uu[0],
    Kf = Uu[1];
  (Hu[28] = 258), (Kf[258] = 28);
  var Xf = $u(ju, 0),
    Jf = Xf[0],
    us = new dn(32768);
  for (var Ne = 0; Ne < 32768; ++Ne) {
    var ln = ((Ne & 43690) >>> 1) | ((Ne & 21845) << 1);
    (ln = ((ln & 52428) >>> 2) | ((ln & 13107) << 2)),
      (ln = ((ln & 61680) >>> 4) | ((ln & 3855) << 4)),
      (us[Ne] = (((ln & 65280) >>> 8) | ((ln & 255) << 8)) >>> 1);
  }
  var gr = function (e, t, n) {
      for (var r = e.length, i = 0, o = new dn(t); i < r; ++i) ++o[e[i] - 1];
      var s = new dn(t);
      for (i = 0; i < t; ++i) s[i] = (s[i - 1] + o[i - 1]) << 1;
      var a;
      if (n) {
        a = new dn(1 << t);
        var c = 15 - t;
        for (i = 0; i < r; ++i)
          if (e[i])
            for (
              var l = (i << 4) | e[i],
                u = t - e[i],
                m = s[e[i] - 1]++ << u,
                h = m | ((1 << u) - 1);
              m <= h;
              ++m
            )
              a[us[m] >>> c] = l;
      } else
        for (a = new dn(r), i = 0; i < r; ++i)
          a[i] = us[s[e[i] - 1]++] >>> (15 - e[i]);
      return a;
    },
    Rr = new vt(288);
  for (var Ne = 0; Ne < 144; ++Ne) Rr[Ne] = 8;
  for (var Ne = 144; Ne < 256; ++Ne) Rr[Ne] = 9;
  for (var Ne = 256; Ne < 280; ++Ne) Rr[Ne] = 7;
  for (var Ne = 280; Ne < 288; ++Ne) Rr[Ne] = 8;
  var zu = new vt(32);
  for (var Ne = 0; Ne < 32; ++Ne) zu[Ne] = 5;
  var Qf = gr(Rr, 9, 1),
    eh = gr(zu, 5, 1),
    ro = function (e) {
      for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
      return t;
    },
    _t = function (e, t, n) {
      var r = (t / 8) >> 0;
      return ((e[r] | (e[r + 1] << 8)) >>> (t & 7)) & n;
    },
    io = function (e, t) {
      var n = (t / 8) >> 0;
      return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >>> (t & 7);
    },
    th = function (e) {
      return ((e / 8) >> 0) + (e & 7 && 1);
    },
    Wu = function (e, t, n) {
      (t == null || t < 0) && (t = 0),
        (n == null || n > e.length) && (n = e.length);
      var r = new (e instanceof dn ? dn : e instanceof cs ? cs : vt)(n - t);
      return r.set(e.subarray(t, n)), r;
    },
    nh = function (e, t, n) {
      var r = e.length,
        i = !t || n,
        o = !n || n.i;
      n || (n = {}), t || (t = new vt(r * 3));
      var s = function (q) {
          var ue = t.length;
          if (q > ue) {
            var U = new vt(Math.max(ue * 2, q));
            U.set(t), (t = U);
          }
        },
        a = n.f || 0,
        c = n.p || 0,
        l = n.b || 0,
        u = n.l,
        m = n.d,
        h = n.m,
        v = n.n,
        f = r * 8;
      do {
        if (!u) {
          n.f = a = _t(e, c, 1);
          var d = _t(e, c + 1, 3);
          if (((c += 3), d))
            if (d == 1) (u = Qf), (m = eh), (h = 9), (v = 5);
            else if (d == 2) {
              var g = _t(e, c, 31) + 257,
                b = _t(e, c + 10, 15) + 4,
                _ = g + _t(e, c + 5, 31) + 1;
              c += 14;
              for (var S = new vt(_), k = new vt(19), E = 0; E < b; ++E)
                k[Zf[E]] = _t(e, c + E * 3, 7);
              c += b * 3;
              var T = ro(k),
                D = (1 << T) - 1;
              if (!o && c + _ * (T + 7) > f) break;
              for (var C = gr(k, T, 1), E = 0; E < _; ) {
                var A = C[_t(e, c, D)];
                c += A & 15;
                var y = A >>> 4;
                if (y < 16) S[E++] = y;
                else {
                  var M = 0,
                    L = 0;
                  for (
                    y == 16
                      ? ((L = 3 + _t(e, c, 3)), (c += 2), (M = S[E - 1]))
                      : y == 17
                      ? ((L = 3 + _t(e, c, 7)), (c += 3))
                      : y == 18 && ((L = 11 + _t(e, c, 127)), (c += 7));
                    L--;

                  )
                    S[E++] = M;
                }
              }
              var H = S.subarray(0, g),
                j = S.subarray(g);
              (h = ro(H)), (v = ro(j)), (u = gr(H, h, 1)), (m = gr(j, v, 1));
            } else throw "invalid block type";
          else {
            var y = th(c) + 4,
              w = e[y - 4] | (e[y - 3] << 8),
              p = y + w;
            if (p > r) {
              if (o) throw "unexpected EOF";
              break;
            }
            i && s(l + w),
              t.set(e.subarray(y, p), l),
              (n.b = l += w),
              (n.p = c = p * 8);
            continue;
          }
          if (c > f) throw "unexpected EOF";
        }
        i && s(l + 131072);
        for (
          var F = (1 << h) - 1, K = (1 << v) - 1, Z = h + v + 18;
          o || c + Z < f;

        ) {
          var M = u[io(e, c) & F],
            J = M >>> 4;
          if (((c += M & 15), c > f)) throw "unexpected EOF";
          if (!M) throw "invalid length/literal";
          if (J < 256) t[l++] = J;
          else if (J == 256) {
            u = null;
            break;
          } else {
            var I = J - 254;
            if (J > 264) {
              var E = J - 257,
                B = Yu[E];
              (I = _t(e, c, (1 << B) - 1) + Hu[E]), (c += B);
            }
            var P = m[io(e, c) & K],
              O = P >>> 4;
            if (!P) throw "invalid distance";
            c += P & 15;
            var j = Jf[O];
            if (O > 3) {
              var B = ju[O];
              (j += io(e, c) & ((1 << B) - 1)), (c += B);
            }
            if (c > f) throw "unexpected EOF";
            i && s(l + 131072);
            for (var $ = l + I; l < $; l += 4)
              (t[l] = t[l - j]),
                (t[l + 1] = t[l + 1 - j]),
                (t[l + 2] = t[l + 2 - j]),
                (t[l + 3] = t[l + 3 - j]);
            l = $;
          }
        }
        (n.l = u),
          (n.p = c),
          (n.b = l),
          u && ((a = 1), (n.m = h), (n.d = m), (n.n = v));
      } while (!a);
      return l == t.length ? t : Wu(t, 0, l);
    },
    rh = function (e) {
      if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31)
        throw "invalid zlib data";
      if (e[1] & 32)
        throw "invalid zlib data: preset dictionaries not supported";
    };
  function ih(e, t) {
    return nh((rh(e), e.subarray(2, -4)), t);
  }
  function oh(e, t) {
    var n = e.length;
    if (!t && typeof TextEncoder < "u") return new TextEncoder().encode(e);
    for (
      var r = new vt(e.length + (e.length >>> 1)),
        i = 0,
        o = function (l) {
          r[i++] = l;
        },
        s = 0;
      s < n;
      ++s
    ) {
      if (i + 5 > r.length) {
        var a = new vt(i + 8 + ((n - s) << 1));
        a.set(r), (r = a);
      }
      var c = e.charCodeAt(s);
      c < 128 || t
        ? o(c)
        : c < 2048
        ? (o(192 | (c >>> 6)), o(128 | (c & 63)))
        : c > 55295 && c < 57344
        ? ((c = (65536 + (c & 1047552)) | (e.charCodeAt(++s) & 1023)),
          o(240 | (c >>> 18)),
          o(128 | ((c >>> 12) & 63)),
          o(128 | ((c >>> 6) & 63)),
          o(128 | (c & 63)))
        : (o(224 | (c >>> 12)), o(128 | ((c >>> 6) & 63)), o(128 | (c & 63)));
    }
    return Wu(r, 0, i);
  }
  function sh(e, t) {
    var n = "";
    if (!t && typeof TextDecoder < "u") return new TextDecoder().decode(e);
    for (var r = 0; r < e.length; ) {
      var i = e[r++];
      i < 128 || t
        ? (n += String.fromCharCode(i))
        : i < 224
        ? (n += String.fromCharCode(((i & 31) << 6) | (e[r++] & 63)))
        : i < 240
        ? (n += String.fromCharCode(
            ((i & 15) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63)
          ))
        : ((i =
            (((i & 15) << 18) |
              ((e[r++] & 63) << 12) |
              ((e[r++] & 63) << 6) |
              (e[r++] & 63)) -
            65536),
          (n += String.fromCharCode(55296 | (i >> 10), 56320 | (i & 1023))));
    }
    return n;
  }
  const rl = "v1",
    ah = (e) => {
      if (typeof e != "string") return e;
      try {
        const t = JSON.parse(e);
        if (t.timestamp) return t;
      } catch {}
      try {
        const t = JSON.parse(sh(ih(oh(e, !0))));
        if (t.v === rl) return t;
        throw new Error(
          `These events were packed with packer ${t.v} which is incompatible with current packer ${rl}.`
        );
      } catch (t) {
        throw (console.error(t), new Error("Unknown data format."));
      }
    };
  function fi() {}
  function il(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function Vu(e) {
    return e();
  }
  function ol() {
    return Object.create(null);
  }
  function er(e) {
    e.forEach(Vu);
  }
  function lh(e) {
    return typeof e == "function";
  }
  function oa(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function sl(e) {
    const t = {};
    for (const n in e) n[0] !== "$" && (t[n] = e[n]);
    return t;
  }
  function Ee(e, t) {
    e.appendChild(t);
  }
  function rn(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function jt(e) {
    e.parentNode.removeChild(e);
  }
  function oo(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function ze(e) {
    return document.createElement(e);
  }
  function hi(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function An(e) {
    return document.createTextNode(e);
  }
  function mt() {
    return An(" ");
  }
  function vr(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }
  function de(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function pi(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  function $e(e, t, n, r) {
    n === null
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, r ? "important" : "");
  }
  function Zn(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }
  let Sr;
  function yr(e) {
    Sr = e;
  }
  function Ni() {
    if (!Sr)
      throw new Error("Function called outside component initialization");
    return Sr;
  }
  function qu(e) {
    Ni().$$.on_mount.push(e);
  }
  function Gu(e) {
    Ni().$$.on_destroy.push(e);
  }
  function ch() {
    const e = Ni();
    return (t, n, { cancelable: r = !1 } = {}) => {
      const i = e.$$.callbacks[t];
      if (i) {
        const o = (function (
          s,
          a,
          { bubbles: c = !1, cancelable: l = !1 } = {}
        ) {
          const u = document.createEvent("CustomEvent");
          return u.initCustomEvent(s, c, l, a), u;
        })(t, n, { cancelable: r });
        return (
          i.slice().forEach((s) => {
            s.call(e, o);
          }),
          !o.defaultPrevented
        );
      }
      return !0;
    };
  }
  const hr = [],
    gn = [],
    ei = [],
    ds = [],
    uh = Promise.resolve();
  let fs = !1;
  function hs(e) {
    ei.push(e);
  }
  const so = new Set();
  let Wr = 0;
  function Zu() {
    const e = Sr;
    do {
      for (; Wr < hr.length; ) {
        const t = hr[Wr];
        Wr++, yr(t), dh(t.$$);
      }
      for (yr(null), hr.length = 0, Wr = 0; gn.length; ) gn.pop()();
      for (let t = 0; t < ei.length; t += 1) {
        const n = ei[t];
        so.has(n) || (so.add(n), n());
      }
      ei.length = 0;
    } while (hr.length);
    for (; ds.length; ) ds.pop()();
    (fs = !1), so.clear(), yr(e);
  }
  function dh(e) {
    if (e.fragment !== null) {
      e.update(), er(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(hs);
    }
  }
  const ti = new Set();
  let Sn;
  function Ku() {
    Sn = { r: 0, c: [], p: Sn };
  }
  function Xu() {
    Sn.r || er(Sn.c), (Sn = Sn.p);
  }
  function Jt(e, t) {
    e && e.i && (ti.delete(e), e.i(t));
  }
  function Kn(e, t, n, r) {
    if (e && e.o) {
      if (ti.has(e)) return;
      ti.add(e),
        Sn.c.push(() => {
          ti.delete(e), r && (n && e.d(1), r());
        }),
        e.o(t);
    } else r && r();
  }
  function Ju(e) {
    e && e.c();
  }
  function sa(e, t, n, r) {
    const { fragment: i, on_mount: o, on_destroy: s, after_update: a } = e.$$;
    i && i.m(t, n),
      r ||
        hs(() => {
          const c = o.map(Vu).filter(lh);
          s ? s.push(...c) : er(c), (e.$$.on_mount = []);
        }),
      a.forEach(hs);
  }
  function aa(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (er(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function fh(e, t) {
    e.$$.dirty[0] === -1 &&
      (hr.push(e), fs || ((fs = !0), uh.then(Zu)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function la(e, t, n, r, i, o, s, a = [-1]) {
    const c = Sr;
    yr(e);
    const l = (e.$$ = {
      fragment: null,
      ctx: null,
      props: o,
      update: fi,
      not_equal: i,
      bound: ol(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (c ? c.$$.context : [])),
      callbacks: ol(),
      dirty: a,
      skip_bound: !1,
      root: t.target || c.$$.root,
    });
    s && s(l.root);
    let u = !1;
    if (
      ((l.ctx = n
        ? n(e, t.props || {}, (m, h, ...v) => {
            const f = v.length ? v[0] : h;
            return (
              l.ctx &&
                i(l.ctx[m], (l.ctx[m] = f)) &&
                (!l.skip_bound && l.bound[m] && l.bound[m](f), u && fh(e, m)),
              h
            );
          })
        : []),
      l.update(),
      (u = !0),
      er(l.before_update),
      (l.fragment = !!r && r(l.ctx)),
      t.target)
    ) {
      if (t.hydrate) {
        const m = (function (h) {
          return Array.from(h.childNodes);
        })(t.target);
        l.fragment && l.fragment.l(m), m.forEach(jt);
      } else l.fragment && l.fragment.c();
      t.intro && Jt(e.$$.fragment),
        sa(e, t.target, t.anchor, t.customElement),
        Zu();
    }
    yr(c);
  }
  let ca = class {
    $destroy() {
      aa(this, 1), (this.$destroy = fi);
    }
    $on(t, n) {
      const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        r.push(n),
        () => {
          const i = r.indexOf(n);
          i !== -1 && r.splice(i, 1);
        }
      );
    }
    $set(t) {
      var n;
      this.$$set &&
        ((n = t), Object.keys(n).length !== 0) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  };
  var We;
  function hh(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  (function (e) {
    (e[(e.Document = 0)] = "Document"),
      (e[(e.DocumentType = 1)] = "DocumentType"),
      (e[(e.Element = 2)] = "Element"),
      (e[(e.Text = 3)] = "Text"),
      (e[(e.CDATA = 4)] = "CDATA"),
      (e[(e.Comment = 5)] = "Comment");
  })(We || (We = {}));
  var Qu = (function () {
    function e() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    return (
      (e.prototype.getId = function (t) {
        var n;
        if (!t) return -1;
        var r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
        return r ?? -1;
      }),
      (e.prototype.getNode = function (t) {
        return this.idNodeMap.get(t) || null;
      }),
      (e.prototype.getIds = function () {
        return Array.from(this.idNodeMap.keys());
      }),
      (e.prototype.getMeta = function (t) {
        return this.nodeMetaMap.get(t) || null;
      }),
      (e.prototype.removeNodeFromMap = function (t) {
        var n = this,
          r = this.getId(t);
        this.idNodeMap.delete(r),
          t.childNodes &&
            t.childNodes.forEach(function (i) {
              return n.removeNodeFromMap(i);
            });
      }),
      (e.prototype.has = function (t) {
        return this.idNodeMap.has(t);
      }),
      (e.prototype.hasNode = function (t) {
        return this.nodeMetaMap.has(t);
      }),
      (e.prototype.add = function (t, n) {
        var r = n.id;
        this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n);
      }),
      (e.prototype.replace = function (t, n) {
        var r = this.getNode(t);
        if (r) {
          var i = this.nodeMetaMap.get(r);
          i && this.nodeMetaMap.set(n, i);
        }
        this.idNodeMap.set(t, n);
      }),
      (e.prototype.reset = function () {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
      }),
      e
    );
  })();
  function ph() {
    return new Qu();
  }
  var al = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  function mh(e, t) {
    t === void 0 && (t = {});
    var n = 1,
      r = 1;
    function i(C) {
      var A = C.match(/\n/g);
      A && (n += A.length);
      var M = C.lastIndexOf(`
`);
      r = M === -1 ? r + C.length : C.length - M;
    }
    function o() {
      var C = { line: n, column: r };
      return function (A) {
        return (A.position = new s(C)), v(), A;
      };
    }
    var s = function (C) {
      (this.start = C),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    };
    s.prototype.content = e;
    var a = [];
    function c(C) {
      var A = new Error(
        ""
          .concat(t.source || "", ":")
          .concat(n, ":")
          .concat(r, ": ")
          .concat(C)
      );
      if (
        ((A.reason = C),
        (A.filename = t.source),
        (A.line = n),
        (A.column = r),
        (A.source = e),
        !t.silent)
      )
        throw A;
      a.push(A);
    }
    function l() {
      return h(/^{\s*/);
    }
    function u() {
      return h(/^}/);
    }
    function m() {
      var C,
        A = [];
      for (v(), f(A); e.length && e.charAt(0) !== "}" && (C = T() || D()); )
        C !== !1 && (A.push(C), f(A));
      return A;
    }
    function h(C) {
      var A = C.exec(e);
      if (A) {
        var M = A[0];
        return i(M), (e = e.slice(M.length)), A;
      }
    }
    function v() {
      h(/^\s*/);
    }
    function f(C) {
      var A;
      for (C === void 0 && (C = []); (A = d()); )
        A !== !1 && C.push(A), (A = d());
      return C;
    }
    function d() {
      var C = o();
      if (e.charAt(0) === "/" && e.charAt(1) === "*") {
        for (
          var A = 2;
          e.charAt(A) !== "" &&
          (e.charAt(A) !== "*" || e.charAt(A + 1) !== "/");

        )
          ++A;
        if (((A += 2), e.charAt(A - 1) === ""))
          return c("End of comment missing");
        var M = e.slice(2, A - 2);
        return (
          (r += 2),
          i(M),
          (e = e.slice(A)),
          (r += 2),
          C({ type: "comment", comment: M })
        );
      }
    }
    function y() {
      var C = h(/^([^{]+)/);
      if (C)
        return Wt(C[0])
          .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
          .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (A) {
            return A.replace(/,/g, "‌");
          })
          .split(/\s*(?![^(]*\)),\s*/)
          .map(function (A) {
            return A.replace(/\u200C/g, ",");
          });
    }
    function w() {
      var C = o(),
        A = h(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (A) {
        var M = Wt(A[0]);
        if (!h(/^:\s*/)) return c("property missing ':'");
        var L = h(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
          H = C({
            type: "declaration",
            property: M.replace(al, ""),
            value: L ? Wt(L[0]).replace(al, "") : "",
          });
        return h(/^[;\s]*/), H;
      }
    }
    function p() {
      var C,
        A = [];
      if (!l()) return c("missing '{'");
      for (f(A); (C = w()); ) C !== !1 && (A.push(C), f(A)), (C = w());
      return u() ? A : c("missing '}'");
    }
    function g() {
      for (
        var C, A = [], M = o();
        (C = h(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

      )
        A.push(C[1]), h(/^,\s*/);
      if (A.length)
        return M({ type: "keyframe", values: A, declarations: p() });
    }
    var b,
      _ = E("import"),
      S = E("charset"),
      k = E("namespace");
    function E(C) {
      var A = new RegExp("^@" + C + "\\s*([^;]+);");
      return function () {
        var M = o(),
          L = h(A);
        if (L) {
          var H = { type: C };
          return (H[C] = L[1].trim()), M(H);
        }
      };
    }
    function T() {
      if (e[0] === "@")
        return (
          (function () {
            var C = o(),
              A = h(/^@([-\w]+)?keyframes\s*/);
            if (A) {
              var M = A[1];
              if (!(A = h(/^([-\w]+)\s*/))) return c("@keyframes missing name");
              var L,
                H = A[1];
              if (!l()) return c("@keyframes missing '{'");
              for (var j = f(); (L = g()); ) j.push(L), (j = j.concat(f()));
              return u()
                ? C({ type: "keyframes", name: H, vendor: M, keyframes: j })
                : c("@keyframes missing '}'");
            }
          })() ||
          (function () {
            var C = o(),
              A = h(/^@media *([^{]+)/);
            if (A) {
              var M = Wt(A[1]);
              if (!l()) return c("@media missing '{'");
              var L = f().concat(m());
              return u()
                ? C({ type: "media", media: M, rules: L })
                : c("@media missing '}'");
            }
          })() ||
          (function () {
            var C = o(),
              A = h(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
            if (A)
              return C({
                type: "custom-media",
                name: Wt(A[1]),
                media: Wt(A[2]),
              });
          })() ||
          (function () {
            var C = o(),
              A = h(/^@supports *([^{]+)/);
            if (A) {
              var M = Wt(A[1]);
              if (!l()) return c("@supports missing '{'");
              var L = f().concat(m());
              return u()
                ? C({ type: "supports", supports: M, rules: L })
                : c("@supports missing '}'");
            }
          })() ||
          _() ||
          S() ||
          k() ||
          (function () {
            var C = o(),
              A = h(/^@([-\w]+)?document *([^{]+)/);
            if (A) {
              var M = Wt(A[1]),
                L = Wt(A[2]);
              if (!l()) return c("@document missing '{'");
              var H = f().concat(m());
              return u()
                ? C({ type: "document", document: L, vendor: M, rules: H })
                : c("@document missing '}'");
            }
          })() ||
          (function () {
            var C = o();
            if (h(/^@page */)) {
              var A = y() || [];
              if (!l()) return c("@page missing '{'");
              for (var M, L = f(); (M = w()); ) L.push(M), (L = L.concat(f()));
              return u()
                ? C({ type: "page", selectors: A, declarations: L })
                : c("@page missing '}'");
            }
          })() ||
          (function () {
            var C = o();
            if (h(/^@host\s*/)) {
              if (!l()) return c("@host missing '{'");
              var A = f().concat(m());
              return u()
                ? C({ type: "host", rules: A })
                : c("@host missing '}'");
            }
          })() ||
          (function () {
            var C = o();
            if (h(/^@font-face\s*/)) {
              if (!l()) return c("@font-face missing '{'");
              for (var A, M = f(); (A = w()); ) M.push(A), (M = M.concat(f()));
              return u()
                ? C({ type: "font-face", declarations: M })
                : c("@font-face missing '}'");
            }
          })()
        );
    }
    function D() {
      var C = o(),
        A = y();
      return A
        ? (f(), C({ type: "rule", selectors: A, declarations: p() }))
        : c("selector missing");
    }
    return ps(
      ((b = m()),
      {
        type: "stylesheet",
        stylesheet: { source: t.source, rules: b, parsingErrors: a },
      })
    );
  }
  function Wt(e) {
    return e ? e.replace(/^\s+|\s+$/g, "") : "";
  }
  function ps(e, t) {
    for (
      var n = e && typeof e.type == "string",
        r = n ? e : t,
        i = 0,
        o = Object.keys(e);
      i < o.length;
      i++
    ) {
      var s = e[o[i]];
      Array.isArray(s)
        ? s.forEach(function (a) {
            ps(a, r);
          })
        : s && typeof s == "object" && ps(s, r);
    }
    return (
      n &&
        Object.defineProperty(e, "parent", {
          configurable: !0,
          writable: !0,
          enumerable: !1,
          value: t || null,
        }),
      e
    );
  }
  var ll = {
      script: "noscript",
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      fedropshadow: "feDropShadow",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
    },
    e0 = /([^\\]):hover/,
    gh = new RegExp(e0.source, "g");
  function cl(e, t) {
    var n = t == null ? void 0 : t.stylesWithHoverClass.get(e);
    if (n) return n;
    var r = mh(e, { silent: !0 });
    if (!r.stylesheet) return e;
    var i = [];
    if (
      (r.stylesheet.rules.forEach(function (a) {
        "selectors" in a &&
          (a.selectors || []).forEach(function (c) {
            e0.test(c) && i.push(c);
          });
      }),
      i.length === 0)
    )
      return e;
    var o = new RegExp(
        i
          .filter(function (a, c) {
            return i.indexOf(a) === c;
          })
          .sort(function (a, c) {
            return c.length - a.length;
          })
          .map(function (a) {
            return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          })
          .join("|"),
        "g"
      ),
      s = e.replace(o, function (a) {
        var c = a.replace(gh, "$1.\\:hover");
        return "".concat(a, ", ").concat(c);
      });
    return t == null || t.stylesWithHoverClass.set(e, s), s;
  }
  function ul() {
    return { stylesWithHoverClass: new Map() };
  }
  function vh(e, t) {
    var n = t.doc,
      r = t.hackCss,
      i = t.cache;
    switch (e.type) {
      case We.Document:
        return n.implementation.createDocument(null, "", null);
      case We.DocumentType:
        return n.implementation.createDocumentType(
          e.name || "html",
          e.publicId,
          e.systemId
        );
      case We.Element:
        var o,
          s = (function (p) {
            var g = ll[p.tagName] ? ll[p.tagName] : p.tagName;
            return g === "link" && p.attributes._cssText && (g = "style"), g;
          })(e);
        o = e.isSVG
          ? n.createElementNS("http://www.w3.org/2000/svg", s)
          : n.createElement(s);
        var a = {};
        for (var c in e.attributes)
          if (Object.prototype.hasOwnProperty.call(e.attributes, c)) {
            var l = e.attributes[c];
            if (s !== "option" || c !== "selected" || l !== !1)
              if ((l === !0 && (l = ""), c.startsWith("rr_"))) a[c] = l;
              else {
                var u = s === "textarea" && c === "value",
                  m = s === "style" && c === "_cssText";
                if (
                  (m && r && typeof l == "string" && (l = cl(l, i)),
                  (!u && !m) || typeof l != "string")
                )
                  try {
                    if (e.isSVG && c === "xlink:href")
                      o.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        c,
                        l.toString()
                      );
                    else if (
                      c === "onload" ||
                      c === "onclick" ||
                      c.substring(0, 7) === "onmouse"
                    )
                      o.setAttribute("_" + c, l.toString());
                    else {
                      if (
                        s === "meta" &&
                        e.attributes["http-equiv"] ===
                          "Content-Security-Policy" &&
                        c === "content"
                      ) {
                        o.setAttribute("csp-content", l.toString());
                        continue;
                      }
                      (s === "link" &&
                        e.attributes.rel === "preload" &&
                        e.attributes.as === "script") ||
                        (s === "link" &&
                          e.attributes.rel === "prefetch" &&
                          typeof e.attributes.href == "string" &&
                          e.attributes.href.endsWith(".js")) ||
                        (s === "img" &&
                        e.attributes.srcset &&
                        e.attributes.rr_dataURL
                          ? o.setAttribute(
                              "rrweb-original-srcset",
                              e.attributes.srcset
                            )
                          : o.setAttribute(c, l.toString()));
                    }
                  } catch {}
                else {
                  for (
                    var h = n.createTextNode(l),
                      v = 0,
                      f = Array.from(o.childNodes);
                    v < f.length;
                    v++
                  ) {
                    var d = f[v];
                    d.nodeType === o.TEXT_NODE && o.removeChild(d);
                  }
                  o.appendChild(h);
                }
              }
          }
        var y = function (p) {
          var g = a[p];
          if (s === "canvas" && p === "rr_dataURL") {
            var b = document.createElement("img");
            (b.onload = function () {
              var S = o.getContext("2d");
              S && S.drawImage(b, 0, 0, b.width, b.height);
            }),
              (b.src = g.toString()),
              o.RRNodeType && (o.rr_dataURL = g.toString());
          } else if (s === "img" && p === "rr_dataURL") {
            var _ = o;
            _.currentSrc.startsWith("data:") ||
              (_.setAttribute("rrweb-original-src", e.attributes.src),
              (_.src = g.toString()));
          }
          if (p === "rr_width") o.style.width = g.toString();
          else if (p === "rr_height") o.style.height = g.toString();
          else if (p === "rr_mediaCurrentTime" && typeof g == "number")
            o.currentTime = g;
          else if (p === "rr_mediaState")
            switch (g) {
              case "played":
                o.play().catch(function (S) {
                  return console.warn("media playback error", S);
                });
                break;
              case "paused":
                o.pause();
            }
        };
        for (var w in a) y(w);
        if (e.isShadowHost)
          if (o.shadowRoot)
            for (; o.shadowRoot.firstChild; )
              o.shadowRoot.removeChild(o.shadowRoot.firstChild);
          else o.attachShadow({ mode: "open" });
        return o;
      case We.Text:
        return n.createTextNode(
          e.isStyle && r ? cl(e.textContent, i) : e.textContent
        );
      case We.CDATA:
        return n.createCDATASection(e.textContent);
      case We.Comment:
        return n.createComment(e.textContent);
      default:
        return null;
    }
  }
  function xr(e, t) {
    var n = t.doc,
      r = t.mirror,
      i = t.skipChild,
      o = i !== void 0 && i,
      s = t.hackCss,
      a = s === void 0 || s,
      c = t.afterAppend,
      l = t.cache,
      u = vh(e, { doc: n, hackCss: a, cache: l });
    if (!u) return null;
    if (
      (e.rootId && r.getNode(e.rootId) !== n && r.replace(e.rootId, n),
      e.type === We.Document &&
        (n.close(),
        n.open(),
        e.compatMode === "BackCompat" &&
          e.childNodes &&
          e.childNodes[0].type !== We.DocumentType &&
          (e.childNodes[0].type === We.Element &&
          "xmlns" in e.childNodes[0].attributes &&
          e.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml"
            ? n.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
              )
            : n.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
              )),
        (u = n)),
      r.add(u, e),
      (e.type === We.Document || e.type === We.Element) && !o)
    )
      for (var m = 0, h = e.childNodes; m < h.length; m++) {
        var v = h[m],
          f = xr(v, {
            doc: n,
            mirror: r,
            skipChild: !1,
            hackCss: a,
            afterAppend: c,
            cache: l,
          });
        f
          ? (v.isShadow && hh(u) && u.shadowRoot
              ? u.shadowRoot.appendChild(f)
              : u.appendChild(f),
            c && c(f, v.id))
          : console.warn("Failed to rebuild", v);
      }
    return u;
  }
  function yh(e, t) {
    var n = t.doc,
      r = t.onVisit,
      i = t.hackCss,
      o = i === void 0 || i,
      s = t.afterAppend,
      a = t.cache,
      c = t.mirror,
      l = c === void 0 ? new Qu() : c,
      u = xr(e, {
        doc: n,
        mirror: l,
        skipChild: !1,
        hackCss: o,
        afterAppend: s,
        cache: a,
      });
    return (
      (function (m, h) {
        for (var v = 0, f = m.getIds(); v < f.length; v++) {
          var d = f[v];
          m.has(d) && h(m.getNode(d));
        }
      })(l, function (m) {
        r && r(m),
          (function (h, v) {
            var f = v.getMeta(h);
            if ((f == null ? void 0 : f.type) === We.Element) {
              var d = h;
              for (var y in f.attributes)
                if (
                  Object.prototype.hasOwnProperty.call(f.attributes, y) &&
                  y.startsWith("rr_")
                ) {
                  var w = f.attributes[y];
                  y === "rr_scrollLeft" && (d.scrollLeft = w),
                    y === "rr_scrollTop" && (d.scrollTop = w);
                }
            }
          })(m, l);
      }),
      u
    );
  }
  const Fn = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
  let dl = {
    map: {},
    getId: () => (console.error(Fn), -1),
    getNode: () => (console.error(Fn), null),
    removeNodeFromMap() {
      console.error(Fn);
    },
    has: () => (console.error(Fn), !1),
    reset() {
      console.error(Fn);
    },
  };
  function xh(e) {
    const t = {},
      n = (i, o) => {
        const s = { value: i, parent: o, children: [] };
        return (t[i.node.id] = s), s;
      },
      r = [];
    for (const i of e) {
      const { nextId: o, parentId: s } = i;
      if (o && o in t) {
        const a = t[o];
        if (a.parent) {
          const c = a.parent.children.indexOf(a);
          a.parent.children.splice(c, 0, n(i, a.parent));
        } else {
          const c = r.indexOf(a);
          r.splice(c, 0, n(i, null));
        }
      } else if (s in t) {
        const a = t[s];
        a.children.push(n(i, a));
      } else r.push(n(i, null));
    }
    return r;
  }
  function t0(e, t) {
    t(e.value);
    for (let n = e.children.length - 1; n >= 0; n--) t0(e.children[n], t);
  }
  function ao(e, t) {
    return !!(e.nodeName === "IFRAME" && t.getMeta(e));
  }
  function n0(e, t) {
    var n, r;
    const i =
      (r =
        (n = e.ownerDocument) === null || n === void 0
          ? void 0
          : n.defaultView) === null || r === void 0
        ? void 0
        : r.frameElement;
    if (!i || i === t)
      return { x: 0, y: 0, relativeScale: 1, absoluteScale: 1 };
    const o = i.getBoundingClientRect(),
      s = n0(i, t),
      a = o.height / i.clientHeight;
    return {
      x: o.x * s.relativeScale + s.x,
      y: o.y * s.relativeScale + s.y,
      relativeScale: a,
      absoluteScale: s.absoluteScale * a,
    };
  }
  function Vr(e) {
    return !!(e != null && e.shadowRoot);
  }
  function pr(e, t) {
    const n = e[t[0]];
    return t.length === 1 ? n : pr(n.cssRules[t[1]].cssRules, t.slice(2));
  }
  function fl(e) {
    const t = [...e],
      n = t.pop();
    return { positions: t, index: n };
  }
  typeof window < "u" &&
    window.Proxy &&
    window.Reflect &&
    (dl = new Proxy(dl, {
      get: (e, t, n) => (
        t === "map" && console.error(Fn), Reflect.get(e, t, n)
      ),
    }));
  let bh = class {
    constructor() {
      (this.id = 1),
        (this.styleIDMap = new WeakMap()),
        (this.idStyleMap = new Map());
    }
    getId(t) {
      var n;
      return (n = this.styleIDMap.get(t)) !== null && n !== void 0 ? n : -1;
    }
    has(t) {
      return this.styleIDMap.has(t);
    }
    add(t, n) {
      if (this.has(t)) return this.getId(t);
      let r;
      return (
        (r = n === void 0 ? this.id++ : n),
        this.styleIDMap.set(t, r),
        this.idStyleMap.set(r, t),
        r
      );
    }
    getStyle(t) {
      return this.idStyleMap.get(t) || null;
    }
    reset() {
      (this.styleIDMap = new WeakMap()),
        (this.idStyleMap = new Map()),
        (this.id = 1);
    }
    generateId() {
      return this.id++;
    }
  };
  var Me = ((e) => (
      (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
      (e[(e.Load = 1)] = "Load"),
      (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
      (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
      (e[(e.Meta = 4)] = "Meta"),
      (e[(e.Custom = 5)] = "Custom"),
      (e[(e.Plugin = 6)] = "Plugin"),
      e
    ))(Me || {}),
    ke = ((e) => (
      (e[(e.Mutation = 0)] = "Mutation"),
      (e[(e.MouseMove = 1)] = "MouseMove"),
      (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
      (e[(e.Scroll = 3)] = "Scroll"),
      (e[(e.ViewportResize = 4)] = "ViewportResize"),
      (e[(e.Input = 5)] = "Input"),
      (e[(e.TouchMove = 6)] = "TouchMove"),
      (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
      (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
      (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
      (e[(e.Font = 10)] = "Font"),
      (e[(e.Log = 11)] = "Log"),
      (e[(e.Drag = 12)] = "Drag"),
      (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
      (e[(e.Selection = 14)] = "Selection"),
      (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
      e
    ))(ke || {}),
    tt = ((e) => (
      (e[(e.MouseUp = 0)] = "MouseUp"),
      (e[(e.MouseDown = 1)] = "MouseDown"),
      (e[(e.Click = 2)] = "Click"),
      (e[(e.ContextMenu = 3)] = "ContextMenu"),
      (e[(e.DblClick = 4)] = "DblClick"),
      (e[(e.Focus = 5)] = "Focus"),
      (e[(e.Blur = 6)] = "Blur"),
      (e[(e.TouchStart = 7)] = "TouchStart"),
      (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
      (e[(e.TouchEnd = 9)] = "TouchEnd"),
      (e[(e.TouchCancel = 10)] = "TouchCancel"),
      e
    ))(tt || {}),
    mi = ((e) => (
      (e[(e["2D"] = 0)] = "2D"),
      (e[(e.WebGL = 1)] = "WebGL"),
      (e[(e.WebGL2 = 2)] = "WebGL2"),
      e
    ))(mi || {}),
    Te = ((e) => (
      (e.Start = "start"),
      (e.Pause = "pause"),
      (e.Resume = "resume"),
      (e.Resize = "resize"),
      (e.Finish = "finish"),
      (e.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
      (e.LoadStylesheetStart = "load-stylesheet-start"),
      (e.LoadStylesheetEnd = "load-stylesheet-end"),
      (e.SkipStart = "skip-start"),
      (e.SkipEnd = "skip-end"),
      (e.MouseInteraction = "mouse-interaction"),
      (e.EventCast = "event-cast"),
      (e.CustomEvent = "custom-event"),
      (e.Flush = "flush"),
      (e.StateChange = "state-change"),
      (e.PlayBack = "play-back"),
      (e.Destroy = "destroy"),
      e
    ))(Te || {});
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function En(
    e,
    t,
    n,
    r
  ) {
    return new (n || (n = Promise))(function (i, o) {
      function s(l) {
        try {
          c(r.next(l));
        } catch (u) {
          o(u);
        }
      }
      function a(l) {
        try {
          c(r.throw(l));
        } catch (u) {
          o(u);
        }
      }
      function c(l) {
        var u;
        l.done
          ? i(l.value)
          : ((u = l.value),
            u instanceof n
              ? u
              : new n(function (m) {
                  m(u);
                })).then(s, a);
      }
      c((r = r.apply(e, t || [])).next());
    });
  }
  for (
    var hl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      mr = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      qr = 0;
    qr < hl.length;
    qr++
  )
    mr[hl.charCodeAt(qr)] = qr;
  var r0 = null;
  try {
    var wh =
      (typeof Tn < "u" &&
        typeof Tn.require == "function" &&
        Tn.require("worker_threads")) ||
      (typeof __non_webpack_require__ == "function" &&
        __non_webpack_require__("worker_threads")) ||
      (typeof require == "function" && require("worker_threads"));
    r0 = wh.Worker;
  } catch {}
  function _h(e, t, n) {
    var r = t === void 0 ? null : t,
      i = (function (a, c) {
        return Buffer.from(a, "base64").toString(c ? "utf16" : "utf8");
      })(e, n !== void 0 && n),
      o =
        i.indexOf(
          `
`,
          10
        ) + 1,
      s = i.substring(o) + (r ? "//# sourceMappingURL=" + r : "");
    return function (a) {
      return new r0(s, Object.assign({}, a, { eval: !0 }));
    };
  }
  var pl,
    ml,
    gl,
    be,
    Sh =
      Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]";
  (pl =
    "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo="),
    (ml = null),
    (gl = !1),
    Sh && _h(pl, ml, gl),
    (function (e) {
      (e[(e.Document = 0)] = "Document"),
        (e[(e.DocumentType = 1)] = "DocumentType"),
        (e[(e.Element = 2)] = "Element"),
        (e[(e.Text = 3)] = "Text"),
        (e[(e.CDATA = 4)] = "CDATA"),
        (e[(e.Comment = 5)] = "Comment");
    })(be || (be = {}));
  var kh = (function () {
    function e() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    return (
      (e.prototype.getId = function (t) {
        var n;
        if (!t) return -1;
        var r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
        return r ?? -1;
      }),
      (e.prototype.getNode = function (t) {
        return this.idNodeMap.get(t) || null;
      }),
      (e.prototype.getIds = function () {
        return Array.from(this.idNodeMap.keys());
      }),
      (e.prototype.getMeta = function (t) {
        return this.nodeMetaMap.get(t) || null;
      }),
      (e.prototype.removeNodeFromMap = function (t) {
        var n = this,
          r = this.getId(t);
        this.idNodeMap.delete(r),
          t.childNodes &&
            t.childNodes.forEach(function (i) {
              return n.removeNodeFromMap(i);
            });
      }),
      (e.prototype.has = function (t) {
        return this.idNodeMap.has(t);
      }),
      (e.prototype.hasNode = function (t) {
        return this.nodeMetaMap.has(t);
      }),
      (e.prototype.add = function (t, n) {
        var r = n.id;
        this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n);
      }),
      (e.prototype.replace = function (t, n) {
        var r = this.getNode(t);
        if (r) {
          var i = this.nodeMetaMap.get(r);
          i && this.nodeMetaMap.set(n, i);
        }
        this.idNodeMap.set(t, n);
      }),
      (e.prototype.reset = function () {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
      }),
      e
    );
  })();
  function vl(e) {
    const t = [];
    for (const n in e) {
      const r = e[n];
      if (typeof r != "string") continue;
      const i = Th(n);
      t.push(`${i}: ${r};`);
    }
    return t.join(" ");
  }
  const Eh = /-([a-z])/g,
    Ch = /^--[a-zA-Z0-9-]+$/,
    lo = (e) =>
      Ch.test(e) ? e : e.replace(Eh, (t, n) => (n ? n.toUpperCase() : "")),
    Dh = /\B([A-Z])/g,
    Th = (e) => e.replace(Dh, "-$1").toLowerCase();
  class Et {
    constructor(...t) {
      (this.childNodes = []),
        (this.parentElement = null),
        (this.parentNode = null),
        (this.ELEMENT_NODE = Fe.ELEMENT_NODE),
        (this.TEXT_NODE = Fe.TEXT_NODE);
    }
    get firstChild() {
      return this.childNodes[0] || null;
    }
    get lastChild() {
      return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
      const t = this.parentNode;
      if (!t) return null;
      const n = t.childNodes,
        r = n.indexOf(this);
      return n[r + 1] || null;
    }
    contains(t) {
      if (t === this) return !0;
      for (const n of this.childNodes) if (n.contains(t)) return !0;
      return !1;
    }
    appendChild(t) {
      throw new Error(
        "RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method."
      );
    }
    insertBefore(t, n) {
      throw new Error(
        "RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method."
      );
    }
    removeChild(t) {
      throw new Error(
        "RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method."
      );
    }
    toString() {
      return "RRNode";
    }
  }
  function i0(e) {
    return class extends e {
      constructor(t, n, r) {
        super(),
          (this.nodeType = Fe.DOCUMENT_TYPE_NODE),
          (this.RRNodeType = be.DocumentType),
          (this.textContent = null),
          (this.name = t),
          (this.publicId = n),
          (this.systemId = r),
          (this.nodeName = t);
      }
      toString() {
        return "RRDocumentType";
      }
    };
  }
  function o0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeType = Fe.ELEMENT_NODE),
          (this.RRNodeType = be.Element),
          (this.attributes = {}),
          (this.shadowRoot = null),
          (this.tagName = t.toUpperCase()),
          (this.nodeName = t.toUpperCase());
      }
      get textContent() {
        let t = "";
        return this.childNodes.forEach((n) => (t += n.textContent)), t;
      }
      set textContent(t) {
        this.childNodes = [this.ownerDocument.createTextNode(t)];
      }
      get classList() {
        return new Ah(this.attributes.class, (t) => {
          this.attributes.class = t;
        });
      }
      get id() {
        return this.attributes.id || "";
      }
      get className() {
        return this.attributes.class || "";
      }
      get style() {
        const t = this.attributes.style
            ? (function (r) {
                const i = {},
                  o = /:(.+)/;
                return (
                  r
                    .replace(/\/\*.*?\*\//g, "")
                    .split(/;(?![^(]*\))/g)
                    .forEach(function (s) {
                      if (s) {
                        const a = s.split(o);
                        a.length > 1 && (i[lo(a[0].trim())] = a[1].trim());
                      }
                    }),
                  i
                );
              })(this.attributes.style)
            : {},
          n = /\B([A-Z])/g;
        return (
          (t.setProperty = (r, i, o) => {
            if (n.test(r)) return;
            const s = lo(r);
            i ? (t[s] = i) : delete t[s],
              o === "important" && (t[s] += " !important"),
              (this.attributes.style = vl(t));
          }),
          (t.removeProperty = (r) => {
            if (n.test(r)) return "";
            const i = lo(r),
              o = t[i] || "";
            return delete t[i], (this.attributes.style = vl(t)), o;
          }),
          t
        );
      }
      getAttribute(t) {
        return this.attributes[t] || null;
      }
      setAttribute(t, n) {
        this.attributes[t] = n;
      }
      setAttributeNS(t, n, r) {
        this.setAttribute(n, r);
      }
      removeAttribute(t) {
        delete this.attributes[t];
      }
      appendChild(t) {
        return (
          this.childNodes.push(t),
          (t.parentNode = this),
          (t.parentElement = this),
          t
        );
      }
      insertBefore(t, n) {
        if (n === null) return this.appendChild(t);
        const r = this.childNodes.indexOf(n);
        if (r == -1)
          throw new Error(
            "Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(r, 0, t),
          (t.parentElement = this),
          (t.parentNode = this),
          t
        );
      }
      removeChild(t) {
        const n = this.childNodes.indexOf(t);
        if (n === -1)
          throw new Error(
            "Failed to execute 'removeChild' on 'RRElement': The RRNode to be removed is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(n, 1),
          (t.parentElement = null),
          (t.parentNode = null),
          t
        );
      }
      attachShadow(t) {
        const n = this.ownerDocument.createElement("SHADOWROOT");
        return (this.shadowRoot = n), n;
      }
      dispatchEvent(t) {
        return !0;
      }
      toString() {
        let t = "";
        for (const n in this.attributes) t += `${n}="${this.attributes[n]}" `;
        return `${this.tagName} ${t}`;
      }
    };
  }
  function s0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeType = Fe.TEXT_NODE),
          (this.nodeName = "#text"),
          (this.RRNodeType = be.Text),
          (this.data = t);
      }
      get textContent() {
        return this.data;
      }
      set textContent(t) {
        this.data = t;
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`;
      }
    };
  }
  function a0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeType = Fe.COMMENT_NODE),
          (this.nodeName = "#comment"),
          (this.RRNodeType = be.Comment),
          (this.data = t);
      }
      get textContent() {
        return this.data;
      }
      set textContent(t) {
        this.data = t;
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`;
      }
    };
  }
  function l0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeName = "#cdata-section"),
          (this.nodeType = Fe.CDATA_SECTION_NODE),
          (this.RRNodeType = be.CDATA),
          (this.data = t);
      }
      get textContent() {
        return this.data;
      }
      set textContent(t) {
        this.data = t;
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`;
      }
    };
  }
  class Ah {
    constructor(t, n) {
      if (
        ((this.classes = []),
        (this.add = (...r) => {
          for (const i of r) {
            const o = String(i);
            this.classes.indexOf(o) >= 0 || this.classes.push(o);
          }
          this.onChange && this.onChange(this.classes.join(" "));
        }),
        (this.remove = (...r) => {
          (this.classes = this.classes.filter((i) => r.indexOf(i) === -1)),
            this.onChange && this.onChange(this.classes.join(" "));
        }),
        t)
      ) {
        const r = t.trim().split(/\s+/);
        this.classes.push(...r);
      }
      this.onChange = n;
    }
  }
  var Fe;
  (function (e) {
    (e[(e.PLACEHOLDER = 0)] = "PLACEHOLDER"),
      (e[(e.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
      (e[(e.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
      (e[(e.TEXT_NODE = 3)] = "TEXT_NODE"),
      (e[(e.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
      (e[(e.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
      (e[(e.ENTITY_NODE = 6)] = "ENTITY_NODE"),
      (e[(e.PROCESSING_INSTRUCTION_NODE = 7)] = "PROCESSING_INSTRUCTION_NODE"),
      (e[(e.COMMENT_NODE = 8)] = "COMMENT_NODE"),
      (e[(e.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
      (e[(e.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
      (e[(e.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE");
  })(Fe || (Fe = {}));
  const ms = {
      svg: "http://www.w3.org/2000/svg",
      "xlink:href": "http://www.w3.org/1999/xlink",
      xmlns: "http://www.w3.org/2000/xmlns/",
    },
    Oh = {
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      fedropshadow: "feDropShadow",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
    };
  function Rt(e, t, n, r) {
    const i = e.childNodes,
      o = t.childNodes;
    (r = r || t.mirror || t.ownerDocument.mirror),
      (i.length > 0 || o.length > 0) && yl(Array.from(i), o, e, n, r);
    let s = null,
      a = null;
    switch (t.RRNodeType) {
      case be.Document:
        a = t.scrollData;
        break;
      case be.Element: {
        const c = e,
          l = t;
        switch (
          ((function (u, m, h) {
            const v = u.attributes,
              f = m.attributes;
            for (const d in f) {
              const y = f[d],
                w = h.getMeta(m);
              if (w && "isSVG" in w && w.isSVG && ms[d])
                u.setAttributeNS(ms[d], d, y);
              else if (m.tagName === "CANVAS" && d === "rr_dataURL") {
                const p = document.createElement("img");
                (p.src = y),
                  (p.onload = () => {
                    const g = u.getContext("2d");
                    g && g.drawImage(p, 0, 0, p.width, p.height);
                  });
              } else u.setAttribute(d, y);
            }
            for (const { name: d } of Array.from(v))
              d in f || u.removeAttribute(d);
            m.scrollLeft && (u.scrollLeft = m.scrollLeft),
              m.scrollTop && (u.scrollTop = m.scrollTop);
          })(c, l, r),
          (a = l.scrollData),
          (s = l.inputData),
          l.tagName)
        ) {
          case "AUDIO":
          case "VIDEO": {
            const u = e,
              m = l;
            m.paused !== void 0 && (m.paused ? u.pause() : u.play()),
              m.muted !== void 0 && (u.muted = m.muted),
              m.volume !== void 0 && (u.volume = m.volume),
              m.currentTime !== void 0 && (u.currentTime = m.currentTime),
              m.playbackRate !== void 0 && (u.playbackRate = m.playbackRate);
            break;
          }
          case "CANVAS":
            {
              const u = t;
              if (u.rr_dataURL !== null) {
                const m = document.createElement("img");
                (m.onload = () => {
                  const h = c.getContext("2d");
                  h && h.drawImage(m, 0, 0, m.width, m.height);
                }),
                  (m.src = u.rr_dataURL);
              }
              u.canvasMutations.forEach((m) =>
                n.applyCanvas(m.event, m.mutation, e)
              );
            }
            break;
          case "STYLE": {
            const u = c.sheet;
            u && t.rules.forEach((m) => n.applyStyleSheetMutation(m, u));
          }
        }
        if (l.shadowRoot) {
          c.shadowRoot || c.attachShadow({ mode: "open" });
          const u = c.shadowRoot.childNodes,
            m = l.shadowRoot.childNodes;
          (u.length > 0 || m.length > 0) &&
            yl(Array.from(u), m, c.shadowRoot, n, r);
        }
        break;
      }
      case be.Text:
      case be.Comment:
      case be.CDATA:
        e.textContent !== t.data && (e.textContent = t.data);
    }
    if (
      (a && n.applyScroll(a, !0), s && n.applyInput(s), t.nodeName === "IFRAME")
    ) {
      const c = e.contentDocument,
        l = t;
      if (c) {
        const u = r.getMeta(l.contentDocument);
        u && n.mirror.add(c, Object.assign({}, u)),
          Rt(c, l.contentDocument, n, r);
      }
    }
  }
  function yl(e, t, n, r, i) {
    var o;
    let s,
      a,
      c = 0,
      l = e.length - 1,
      u = 0,
      m = t.length - 1,
      h = e[c],
      v = e[l],
      f = t[u],
      d = t[m];
    for (; c <= l && u <= m; ) {
      const y = r.mirror.getId(h),
        w = r.mirror.getId(v),
        p = i.getId(f),
        g = i.getId(d);
      if (h === void 0) h = e[++c];
      else if (v === void 0) v = e[--l];
      else if (y !== -1 && y === p) Rt(h, f, r, i), (h = e[++c]), (f = t[++u]);
      else if (w !== -1 && w === g) Rt(v, d, r, i), (v = e[--l]), (d = t[--m]);
      else if (y !== -1 && y === g)
        n.insertBefore(h, v.nextSibling),
          Rt(h, d, r, i),
          (h = e[++c]),
          (d = t[--m]);
      else if (w !== -1 && w === p)
        n.insertBefore(v, h), Rt(v, f, r, i), (v = e[--l]), (f = t[++u]);
      else {
        if (!s) {
          s = {};
          for (let b = c; b <= l; b++) {
            const _ = e[b];
            _ && r.mirror.hasNode(_) && (s[r.mirror.getId(_)] = b);
          }
        }
        if (((a = s[i.getId(f)]), a)) {
          const b = e[a];
          n.insertBefore(b, h), Rt(b, f, r, i), (e[a] = void 0);
        } else {
          const b = gs(f, r.mirror, i);
          n.nodeName === "#document" &&
            ((o = r.mirror.getMeta(b)) === null || o === void 0
              ? void 0
              : o.type) === be.Element &&
            n.documentElement &&
            (n.removeChild(n.documentElement), (e[c] = void 0), (h = void 0)),
            n.insertBefore(b, h || null),
            Rt(b, f, r, i);
        }
        f = t[++u];
      }
    }
    if (c > l) {
      const y = t[m + 1];
      let w = null;
      for (
        y &&
        n.childNodes.forEach((p) => {
          r.mirror.getId(p) === i.getId(y) && (w = p);
        });
        u <= m;
        ++u
      ) {
        const p = gs(t[u], r.mirror, i);
        n.insertBefore(p, w), Rt(p, t[u], r, i);
      }
    } else if (u > m)
      for (; c <= l; c++) {
        const y = e[c];
        y && (n.removeChild(y), r.mirror.removeNodeFromMap(y));
      }
  }
  function gs(e, t, n) {
    const r = n.getId(e),
      i = n.getMeta(e);
    let o = null;
    if ((r > -1 && (o = t.getNode(r)), o !== null)) return o;
    switch (e.RRNodeType) {
      case be.Document:
        o = new Document();
        break;
      case be.DocumentType:
        o = document.implementation.createDocumentType(
          e.name,
          e.publicId,
          e.systemId
        );
        break;
      case be.Element: {
        let s = e.tagName.toLowerCase();
        (s = Oh[s] || s),
          (o =
            i && "isSVG" in i && i != null && i.isSVG
              ? document.createElementNS(ms.svg, s)
              : document.createElement(e.tagName));
        break;
      }
      case be.Text:
        o = document.createTextNode(e.data);
        break;
      case be.Comment:
        o = document.createComment(e.data);
        break;
      case be.CDATA:
        o = document.createCDATASection(e.data);
    }
    return i && t.add(o, Object.assign({}, i)), o;
  }
  class tr extends (function (t) {
    return class c0 extends t {
      constructor() {
        super(...arguments),
          (this.nodeType = Fe.DOCUMENT_NODE),
          (this.nodeName = "#document"),
          (this.compatMode = "CSS1Compat"),
          (this.RRNodeType = be.Document),
          (this.textContent = null);
      }
      get documentElement() {
        return (
          this.childNodes.find(
            (r) => r.RRNodeType === be.Element && r.tagName === "HTML"
          ) || null
        );
      }
      get body() {
        var r;
        return (
          ((r = this.documentElement) === null || r === void 0
            ? void 0
            : r.childNodes.find(
                (i) => i.RRNodeType === be.Element && i.tagName === "BODY"
              )) || null
        );
      }
      get head() {
        var r;
        return (
          ((r = this.documentElement) === null || r === void 0
            ? void 0
            : r.childNodes.find(
                (i) => i.RRNodeType === be.Element && i.tagName === "HEAD"
              )) || null
        );
      }
      get implementation() {
        return this;
      }
      get firstElementChild() {
        return this.documentElement;
      }
      appendChild(r) {
        const i = r.RRNodeType;
        if (
          (i === be.Element || i === be.DocumentType) &&
          this.childNodes.some((o) => o.RRNodeType === i)
        )
          throw new Error(
            `RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${
              i === be.Element ? "RRElement" : "RRDoctype"
            } on RRDocument allowed.`
          );
        return (
          (r.parentElement = null),
          (r.parentNode = this),
          this.childNodes.push(r),
          r
        );
      }
      insertBefore(r, i) {
        const o = r.RRNodeType;
        if (
          (o === be.Element || o === be.DocumentType) &&
          this.childNodes.some((a) => a.RRNodeType === o)
        )
          throw new Error(
            `RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${
              o === be.Element ? "RRElement" : "RRDoctype"
            } on RRDocument allowed.`
          );
        if (i === null) return this.appendChild(r);
        const s = this.childNodes.indexOf(i);
        if (s == -1)
          throw new Error(
            "Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(s, 0, r),
          (r.parentElement = null),
          (r.parentNode = this),
          r
        );
      }
      removeChild(r) {
        const i = this.childNodes.indexOf(r);
        if (i === -1)
          throw new Error(
            "Failed to execute 'removeChild' on 'RRDocument': The RRNode to be removed is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(i, 1),
          (r.parentElement = null),
          (r.parentNode = null),
          r
        );
      }
      open() {
        this.childNodes = [];
      }
      close() {}
      write(r) {
        let i;
        if (
          (r ===
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
            ? (i = "-//W3C//DTD XHTML 1.0 Transitional//EN")
            : r ===
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' &&
              (i = "-//W3C//DTD HTML 4.0 Transitional//EN"),
          i)
        ) {
          const o = this.createDocumentType("html", i, "");
          this.open(), this.appendChild(o);
        }
      }
      createDocument(r, i, o) {
        return new c0();
      }
      createDocumentType(r, i, o) {
        const s = new (i0(Et))(r, i, o);
        return (s.ownerDocument = this), s;
      }
      createElement(r) {
        const i = new (o0(Et))(r);
        return (i.ownerDocument = this), i;
      }
      createElementNS(r, i) {
        return this.createElement(i);
      }
      createTextNode(r) {
        const i = new (s0(Et))(r);
        return (i.ownerDocument = this), i;
      }
      createComment(r) {
        const i = new (a0(Et))(r);
        return (i.ownerDocument = this), i;
      }
      createCDATASection(r) {
        const i = new (l0(Et))(r);
        return (i.ownerDocument = this), i;
      }
      toString() {
        return "RRDocument";
      }
    };
  })(Et) {
    constructor(t) {
      super(),
        (this.UNSERIALIZED_STARTING_ID = -2),
        (this._unserializedId = this.UNSERIALIZED_STARTING_ID),
        (this.mirror = new jh()),
        (this.scrollData = null),
        t && (this.mirror = t);
    }
    get unserializedId() {
      return this._unserializedId--;
    }
    createDocument(t, n, r) {
      return new tr();
    }
    createDocumentType(t, n, r) {
      const i = new Mh(t, n, r);
      return (i.ownerDocument = this), i;
    }
    createElement(t) {
      const n = t.toUpperCase();
      let r;
      switch (n) {
        case "AUDIO":
        case "VIDEO":
          r = new Nh(n);
          break;
        case "IFRAME":
          r = new Lh(n, this.mirror);
          break;
        case "CANVAS":
          r = new Ih(n);
          break;
        case "STYLE":
          r = new Rh(n);
          break;
        default:
          r = new Lr(n);
      }
      return (r.ownerDocument = this), r;
    }
    createComment(t) {
      const n = new Bh(t);
      return (n.ownerDocument = this), n;
    }
    createCDATASection(t) {
      const n = new Fh(t);
      return (n.ownerDocument = this), n;
    }
    createTextNode(t) {
      const n = new Ph(t);
      return (n.ownerDocument = this), n;
    }
    destroyTree() {
      (this.childNodes = []), this.mirror.reset();
    }
    open() {
      super.open(), (this._unserializedId = this.UNSERIALIZED_STARTING_ID);
    }
  }
  const Mh = i0(Et);
  class Lr extends o0(Et) {
    constructor() {
      super(...arguments), (this.inputData = null), (this.scrollData = null);
    }
  }
  class Nh extends (function (t) {
    return class extends t {
      attachShadow(n) {
        throw new Error(
          "RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow"
        );
      }
      play() {
        this.paused = !1;
      }
      pause() {
        this.paused = !0;
      }
    };
  })(Lr) {}
  class Ih extends Lr {
    constructor() {
      super(...arguments),
        (this.rr_dataURL = null),
        (this.canvasMutations = []);
    }
    getContext() {
      return null;
    }
  }
  class Rh extends Lr {
    constructor() {
      super(...arguments), (this.rules = []);
    }
  }
  class Lh extends Lr {
    constructor(t, n) {
      super(t),
        (this.contentDocument = new tr()),
        (this.contentDocument.mirror = n);
    }
  }
  const Ph = s0(Et),
    Bh = a0(Et),
    Fh = l0(Et);
  function u0(e, t, n, r) {
    let i;
    switch (e.nodeType) {
      case Fe.DOCUMENT_NODE:
        r && r.nodeName === "IFRAME"
          ? (i = r.contentDocument)
          : ((i = t), (i.compatMode = e.compatMode));
        break;
      case Fe.DOCUMENT_TYPE_NODE: {
        const s = e;
        i = t.createDocumentType(s.name, s.publicId, s.systemId);
        break;
      }
      case Fe.ELEMENT_NODE: {
        const s = e,
          a = (function (l) {
            return l instanceof HTMLFormElement
              ? "FORM"
              : l.tagName.toUpperCase();
          })(s);
        i = t.createElement(a);
        const c = i;
        for (const { name: l, value: u } of Array.from(s.attributes))
          c.attributes[l] = u;
        s.scrollLeft && (c.scrollLeft = s.scrollLeft),
          s.scrollTop && (c.scrollTop = s.scrollTop);
        break;
      }
      case Fe.TEXT_NODE:
        i = t.createTextNode(e.textContent || "");
        break;
      case Fe.CDATA_SECTION_NODE:
        i = t.createCDATASection(e.data);
        break;
      case Fe.COMMENT_NODE:
        i = t.createComment(e.textContent || "");
        break;
      case Fe.DOCUMENT_FRAGMENT_NODE:
        i = r.attachShadow({ mode: "open" });
        break;
      default:
        return null;
    }
    let o = n.getMeta(e);
    return (
      t instanceof tr &&
        (o || ((o = d0(i, t.unserializedId)), n.add(e, o)),
        t.mirror.add(i, Object.assign({}, o))),
      i
    );
  }
  function Yh(
    e,
    t = (function () {
      return new kh();
    })(),
    n = new tr()
  ) {
    return (
      (function r(i, o) {
        const s = u0(i, n, t, o);
        if (s !== null)
          if (
            ((o == null ? void 0 : o.nodeName) !== "IFRAME" &&
              i.nodeType !== Fe.DOCUMENT_FRAGMENT_NODE &&
              (o == null || o.appendChild(s),
              (s.parentNode = o),
              (s.parentElement = o)),
            i.nodeName === "IFRAME")
          ) {
            const a = i.contentDocument;
            a && r(a, s);
          } else
            (i.nodeType !== Fe.DOCUMENT_NODE &&
              i.nodeType !== Fe.ELEMENT_NODE &&
              i.nodeType !== Fe.DOCUMENT_FRAGMENT_NODE) ||
              (i.nodeType === Fe.ELEMENT_NODE &&
                i.shadowRoot &&
                r(i.shadowRoot, s),
              i.childNodes.forEach((a) => r(a, s)));
      })(e, null),
      n
    );
  }
  class jh {
    constructor() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(t) {
      var n;
      if (!t) return -1;
      const r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
      return r ?? -1;
    }
    getNode(t) {
      return this.idNodeMap.get(t) || null;
    }
    getIds() {
      return Array.from(this.idNodeMap.keys());
    }
    getMeta(t) {
      return this.nodeMetaMap.get(t) || null;
    }
    removeNodeFromMap(t) {
      const n = this.getId(t);
      this.idNodeMap.delete(n),
        t.childNodes && t.childNodes.forEach((r) => this.removeNodeFromMap(r));
    }
    has(t) {
      return this.idNodeMap.has(t);
    }
    hasNode(t) {
      return this.nodeMetaMap.has(t);
    }
    add(t, n) {
      const r = n.id;
      this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n);
    }
    replace(t, n) {
      const r = this.getNode(t);
      if (r) {
        const i = this.nodeMetaMap.get(r);
        i && this.nodeMetaMap.set(n, i);
      }
      this.idNodeMap.set(t, n);
    }
    reset() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
  }
  function d0(e, t) {
    switch (e.RRNodeType) {
      case be.Document:
        return { id: t, type: e.RRNodeType, childNodes: [] };
      case be.DocumentType: {
        const n = e;
        return {
          id: t,
          type: e.RRNodeType,
          name: n.name,
          publicId: n.publicId,
          systemId: n.systemId,
        };
      }
      case be.Element:
        return {
          id: t,
          type: e.RRNodeType,
          tagName: e.tagName.toLowerCase(),
          attributes: {},
          childNodes: [],
        };
      case be.Text:
      case be.Comment:
        return { id: t, type: e.RRNodeType, textContent: e.textContent || "" };
      case be.CDATA:
        return { id: t, type: e.RRNodeType, textContent: "" };
    }
  }
  var yt = Uint8Array,
    fn = Uint16Array,
    vs = Uint32Array,
    f0 = new yt([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    h0 = new yt([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    $h = new yt([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    p0 = function (e, t) {
      for (var n = new fn(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
      var i = new vs(n[30]);
      for (r = 1; r < 30; ++r)
        for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
      return [n, i];
    },
    m0 = p0(f0, 2),
    g0 = m0[0],
    Uh = m0[1];
  (g0[28] = 258), (Uh[258] = 28);
  for (var Hh = p0(h0, 0)[0], ys = new fn(32768), Ie = 0; Ie < 32768; ++Ie) {
    var bn = ((43690 & Ie) >>> 1) | ((21845 & Ie) << 1);
    (bn =
      ((61680 & (bn = ((52428 & bn) >>> 2) | ((13107 & bn) << 2))) >>> 4) |
      ((3855 & bn) << 4)),
      (ys[Ie] = (((65280 & bn) >>> 8) | ((255 & bn) << 8)) >>> 1);
  }
  var br = function (e, t, n) {
      for (var r = e.length, i = 0, o = new fn(t); i < r; ++i) ++o[e[i] - 1];
      var s,
        a = new fn(t);
      for (i = 0; i < t; ++i) a[i] = (a[i - 1] + o[i - 1]) << 1;
      if (n) {
        s = new fn(1 << t);
        var c = 15 - t;
        for (i = 0; i < r; ++i)
          if (e[i])
            for (
              var l = (i << 4) | e[i],
                u = t - e[i],
                m = a[e[i] - 1]++ << u,
                h = m | ((1 << u) - 1);
              m <= h;
              ++m
            )
              s[ys[m] >>> c] = l;
      } else
        for (s = new fn(r), i = 0; i < r; ++i)
          s[i] = ys[a[e[i] - 1]++] >>> (15 - e[i]);
      return s;
    },
    Pr = new yt(288);
  for (Ie = 0; Ie < 144; ++Ie) Pr[Ie] = 8;
  for (Ie = 144; Ie < 256; ++Ie) Pr[Ie] = 9;
  for (Ie = 256; Ie < 280; ++Ie) Pr[Ie] = 7;
  for (Ie = 280; Ie < 288; ++Ie) Pr[Ie] = 8;
  var v0 = new yt(32);
  for (Ie = 0; Ie < 32; ++Ie) v0[Ie] = 5;
  var zh = br(Pr, 9, 1),
    Wh = br(v0, 5, 1),
    co = function (e) {
      for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
      return t;
    },
    St = function (e, t, n) {
      var r = (t / 8) >> 0;
      return ((e[r] | (e[r + 1] << 8)) >>> (7 & t)) & n;
    },
    uo = function (e, t) {
      var n = (t / 8) >> 0;
      return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >>> (7 & t);
    },
    y0 = function (e, t, n) {
      (t == null || t < 0) && (t = 0),
        (n == null || n > e.length) && (n = e.length);
      var r = new (e instanceof fn ? fn : e instanceof vs ? vs : yt)(n - t);
      return r.set(e.subarray(t, n)), r;
    };
  function Vh(e, t) {
    return (function (n, r, i) {
      var o = n.length,
        s = !r || i,
        a = !i || i.i;
      i || (i = {}), r || (r = new yt(3 * o));
      var c,
        l = function (ye) {
          var Ye = r.length;
          if (ye > Ye) {
            var ht = new yt(Math.max(2 * Ye, ye));
            ht.set(r), (r = ht);
          }
        },
        u = i.f || 0,
        m = i.p || 0,
        h = i.b || 0,
        v = i.l,
        f = i.d,
        d = i.m,
        y = i.n,
        w = 8 * o;
      do {
        if (!v) {
          i.f = u = St(n, m, 1);
          var p = St(n, m + 1, 3);
          if (((m += 3), !p)) {
            var g =
                n[(L = (((c = m) / 8) >> 0) + (7 & c && 1) + 4) - 4] |
                (n[L - 3] << 8),
              b = L + g;
            if (b > o) {
              if (a) throw "unexpected EOF";
              break;
            }
            s && l(h + g),
              r.set(n.subarray(L, b), h),
              (i.b = h += g),
              (i.p = m = 8 * b);
            continue;
          }
          if (p == 1) (v = zh), (f = Wh), (d = 9), (y = 5);
          else {
            if (p != 2) throw "invalid block type";
            var _ = St(n, m, 31) + 257,
              S = St(n, m + 10, 15) + 4,
              k = _ + St(n, m + 5, 31) + 1;
            m += 14;
            for (var E = new yt(k), T = new yt(19), D = 0; D < S; ++D)
              T[$h[D]] = St(n, m + 3 * D, 7);
            m += 3 * S;
            var C = co(T),
              A = (1 << C) - 1;
            if (!a && m + k * (C + 7) > w) break;
            var M = br(T, C, 1);
            for (D = 0; D < k; ) {
              var L,
                H = M[St(n, m, A)];
              if (((m += 15 & H), (L = H >>> 4) < 16)) E[D++] = L;
              else {
                var j = 0,
                  F = 0;
                for (
                  L == 16
                    ? ((F = 3 + St(n, m, 3)), (m += 2), (j = E[D - 1]))
                    : L == 17
                    ? ((F = 3 + St(n, m, 7)), (m += 3))
                    : L == 18 && ((F = 11 + St(n, m, 127)), (m += 7));
                  F--;

                )
                  E[D++] = j;
              }
            }
            var K = E.subarray(0, _),
              Z = E.subarray(_);
            (d = co(K)), (y = co(Z)), (v = br(K, d, 1)), (f = br(Z, y, 1));
          }
          if (m > w) throw "unexpected EOF";
        }
        s && l(h + 131072);
        for (
          var J = (1 << d) - 1, I = (1 << y) - 1, B = d + y + 18;
          a || m + B < w;

        ) {
          var P = (j = v[uo(n, m) & J]) >>> 4;
          if ((m += 15 & j) > w) throw "unexpected EOF";
          if (!j) throw "invalid length/literal";
          if (P < 256) r[h++] = P;
          else {
            if (P == 256) {
              v = null;
              break;
            }
            var O = P - 254;
            if (P > 264) {
              var $ = f0[(D = P - 257)];
              (O = St(n, m, (1 << $) - 1) + g0[D]), (m += $);
            }
            var q = f[uo(n, m) & I],
              ue = q >>> 4;
            if (!q) throw "invalid distance";
            if (
              ((m += 15 & q),
              (Z = Hh[ue]),
              ue > 3 &&
                (($ = h0[ue]), (Z += uo(n, m) & ((1 << $) - 1)), (m += $)),
              m > w)
            )
              throw "unexpected EOF";
            s && l(h + 131072);
            for (var U = h + O; h < U; h += 4)
              (r[h] = r[h - Z]),
                (r[h + 1] = r[h + 1 - Z]),
                (r[h + 2] = r[h + 2 - Z]),
                (r[h + 3] = r[h + 3 - Z]);
            h = U;
          }
        }
        (i.l = v),
          (i.p = m),
          (i.b = h),
          v && ((u = 1), (i.m = d), (i.d = f), (i.n = y));
      } while (!u);
      return h == r.length ? r : y0(r, 0, h);
    })(
      ((function (n) {
        if ((15 & n[0]) != 8 || n[0] >>> 4 > 7 || ((n[0] << 8) | n[1]) % 31)
          throw "invalid zlib data";
        if (32 & n[1])
          throw "invalid zlib data: preset dictionaries not supported";
      })(e),
      e.subarray(2, -4)),
      t
    );
  }
  const qh = (e) => {
    if (typeof e != "string") return e;
    try {
      const t = JSON.parse(e);
      if (t.timestamp) return t;
    } catch {}
    try {
      const t = JSON.parse(
        (function (n, r) {
          var i = "";
          if (!r && typeof TextDecoder < "u")
            return new TextDecoder().decode(n);
          for (var o = 0; o < n.length; ) {
            var s = n[o++];
            s < 128 || r
              ? (i += String.fromCharCode(s))
              : s < 224
              ? (i += String.fromCharCode(((31 & s) << 6) | (63 & n[o++])))
              : s < 240
              ? (i += String.fromCharCode(
                  ((15 & s) << 12) | ((63 & n[o++]) << 6) | (63 & n[o++])
                ))
              : ((s =
                  (((15 & s) << 18) |
                    ((63 & n[o++]) << 12) |
                    ((63 & n[o++]) << 6) |
                    (63 & n[o++])) -
                  65536),
                (i += String.fromCharCode(
                  55296 | (s >> 10),
                  56320 | (1023 & s)
                )));
          }
          return i;
        })(
          Vh(
            (function (n, r) {
              var i = n.length;
              if (!r && typeof TextEncoder < "u")
                return new TextEncoder().encode(n);
              for (
                var o = new yt(n.length + (n.length >>> 1)),
                  s = 0,
                  a = function (m) {
                    o[s++] = m;
                  },
                  c = 0;
                c < i;
                ++c
              ) {
                if (s + 5 > o.length) {
                  var l = new yt(s + 8 + ((i - c) << 1));
                  l.set(o), (o = l);
                }
                var u = n.charCodeAt(c);
                u < 128 || r
                  ? a(u)
                  : u < 2048
                  ? (a(192 | (u >>> 6)), a(128 | (63 & u)))
                  : u > 55295 && u < 57344
                  ? (a(
                      240 |
                        ((u =
                          (65536 + (1047552 & u)) |
                          (1023 & n.charCodeAt(++c))) >>>
                          18)
                    ),
                    a(128 | ((u >>> 12) & 63)),
                    a(128 | ((u >>> 6) & 63)),
                    a(128 | (63 & u)))
                  : (a(224 | (u >>> 12)),
                    a(128 | ((u >>> 6) & 63)),
                    a(128 | (63 & u)));
              }
              return y0(o, 0, s);
            })(e, !0)
          )
        )
      );
      if (t.v === "v1") return t;
      throw new Error(
        `These events were packed with packer ${t.v} which is incompatible with current packer v1.`
      );
    } catch (t) {
      throw (console.error(t), new Error("Unknown data format."));
    }
  };
  function x0(e) {
    return {
      all: (e = e || new Map()),
      on: function (t, n) {
        var r = e.get(t);
        r ? r.push(n) : e.set(t, [n]);
      },
      off: function (t, n) {
        var r = e.get(t);
        r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
      },
      emit: function (t, n) {
        var r = e.get(t);
        r &&
          r.slice().map(function (i) {
            i(n);
          }),
          (r = e.get("*")) &&
            r.slice().map(function (i) {
              i(t, n);
            });
      },
    };
  }
  var $n,
    Gh = Object.freeze({ __proto__: null, default: x0 });
  function Zh(e = window, t = document) {
    if (
      "scrollBehavior" in t.documentElement.style &&
      e.__forceSmoothScrollPolyfill__ !== !0
    )
      return;
    const n = e.HTMLElement || e.Element,
      r = {
        scroll: e.scroll || e.scrollTo,
        scrollBy: e.scrollBy,
        elementScroll: n.prototype.scroll || a,
        scrollIntoView: n.prototype.scrollIntoView,
      },
      i =
        e.performance && e.performance.now
          ? e.performance.now.bind(e.performance)
          : Date.now,
      o =
        ((s = e.navigator.userAgent),
        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(s) ? 1 : 0);
    var s;
    function a(d, y) {
      (this.scrollLeft = d), (this.scrollTop = y);
    }
    function c(d) {
      if (
        d === null ||
        typeof d != "object" ||
        d.behavior === void 0 ||
        d.behavior === "auto" ||
        d.behavior === "instant"
      )
        return !0;
      if (typeof d == "object" && d.behavior === "smooth") return !1;
      throw new TypeError(
        "behavior member of ScrollOptions " +
          d.behavior +
          " is not a valid value for enumeration ScrollBehavior."
      );
    }
    function l(d, y) {
      return y === "Y"
        ? d.clientHeight + o < d.scrollHeight
        : y === "X"
        ? d.clientWidth + o < d.scrollWidth
        : void 0;
    }
    function u(d, y) {
      const w = e.getComputedStyle(d, null)["overflow" + y];
      return w === "auto" || w === "scroll";
    }
    function m(d) {
      const y = l(d, "Y") && u(d, "Y"),
        w = l(d, "X") && u(d, "X");
      return y || w;
    }
    function h(d) {
      for (; d !== t.body && m(d) === !1; ) d = d.parentNode || d.host;
      return d;
    }
    function v(d) {
      let y,
        w,
        p,
        g = (i() - d.startTime) / 468;
      var b;
      (g = g > 1 ? 1 : g),
        (b = g),
        (y = 0.5 * (1 - Math.cos(Math.PI * b))),
        (w = d.startX + (d.x - d.startX) * y),
        (p = d.startY + (d.y - d.startY) * y),
        d.method.call(d.scrollable, w, p),
        (w === d.x && p === d.y) || e.requestAnimationFrame(v.bind(e, d));
    }
    function f(d, y, w) {
      let p, g, b, _;
      const S = i();
      d === t.body
        ? ((p = e),
          (g = e.scrollX || e.pageXOffset),
          (b = e.scrollY || e.pageYOffset),
          (_ = r.scroll))
        : ((p = d), (g = d.scrollLeft), (b = d.scrollTop), (_ = a)),
        v({
          scrollable: p,
          method: _,
          startTime: S,
          startX: g,
          startY: b,
          x: y,
          y: w,
        });
    }
    (e.scroll = e.scrollTo =
      function () {
        arguments[0] !== void 0 &&
          (c(arguments[0]) !== !0
            ? f.call(
                e,
                t.body,
                arguments[0].left !== void 0
                  ? ~~arguments[0].left
                  : e.scrollX || e.pageXOffset,
                arguments[0].top !== void 0
                  ? ~~arguments[0].top
                  : e.scrollY || e.pageYOffset
              )
            : r.scroll.call(
                e,
                arguments[0].left !== void 0
                  ? arguments[0].left
                  : typeof arguments[0] != "object"
                  ? arguments[0]
                  : e.scrollX || e.pageXOffset,
                arguments[0].top !== void 0
                  ? arguments[0].top
                  : arguments[1] !== void 0
                  ? arguments[1]
                  : e.scrollY || e.pageYOffset
              ));
      }),
      (e.scrollBy = function () {
        arguments[0] !== void 0 &&
          (c(arguments[0])
            ? r.scrollBy.call(
                e,
                arguments[0].left !== void 0
                  ? arguments[0].left
                  : typeof arguments[0] != "object"
                  ? arguments[0]
                  : 0,
                arguments[0].top !== void 0
                  ? arguments[0].top
                  : arguments[1] !== void 0
                  ? arguments[1]
                  : 0
              )
            : f.call(
                e,
                t.body,
                ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                ~~arguments[0].top + (e.scrollY || e.pageYOffset)
              ));
      }),
      (n.prototype.scroll = n.prototype.scrollTo =
        function () {
          if (arguments[0] === void 0) return;
          if (c(arguments[0]) === !0) {
            if (typeof arguments[0] == "number" && arguments[1] === void 0)
              throw new SyntaxError("Value could not be converted");
            return void r.elementScroll.call(
              this,
              arguments[0].left !== void 0
                ? ~~arguments[0].left
                : typeof arguments[0] != "object"
                ? ~~arguments[0]
                : this.scrollLeft,
              arguments[0].top !== void 0
                ? ~~arguments[0].top
                : arguments[1] !== void 0
                ? ~~arguments[1]
                : this.scrollTop
            );
          }
          const d = arguments[0].left,
            y = arguments[0].top;
          f.call(
            this,
            this,
            d === void 0 ? this.scrollLeft : ~~d,
            y === void 0 ? this.scrollTop : ~~y
          );
        }),
      (n.prototype.scrollBy = function () {
        arguments[0] !== void 0 &&
          (c(arguments[0]) !== !0
            ? this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior,
              })
            : r.elementScroll.call(
                this,
                arguments[0].left !== void 0
                  ? ~~arguments[0].left + this.scrollLeft
                  : ~~arguments[0] + this.scrollLeft,
                arguments[0].top !== void 0
                  ? ~~arguments[0].top + this.scrollTop
                  : ~~arguments[1] + this.scrollTop
              ));
      }),
      (n.prototype.scrollIntoView = function () {
        if (c(arguments[0]) === !0)
          return void r.scrollIntoView.call(
            this,
            arguments[0] === void 0 || arguments[0]
          );
        const d = h(this),
          y = d.getBoundingClientRect(),
          w = this.getBoundingClientRect();
        d !== t.body
          ? (f.call(
              this,
              d,
              d.scrollLeft + w.left - y.left,
              d.scrollTop + w.top - y.top
            ),
            e.getComputedStyle(d).position !== "fixed" &&
              e.scrollBy({ left: y.left, top: y.top, behavior: "smooth" }))
          : e.scrollBy({ left: w.left, top: w.top, behavior: "smooth" });
      });
  }
  class Kh {
    constructor(t = [], n) {
      (this.timeOffset = 0),
        (this.raf = null),
        (this.actions = t),
        (this.speed = n.speed),
        (this.liveMode = n.liveMode);
    }
    addAction(t) {
      if (
        !this.actions.length ||
        this.actions[this.actions.length - 1].delay <= t.delay
      )
        return void this.actions.push(t);
      const n = this.findActionIndex(t);
      this.actions.splice(n, 0, t);
    }
    start() {
      this.timeOffset = 0;
      let t = performance.now();
      const n = () => {
        const r = performance.now();
        for (
          this.timeOffset += (r - t) * this.speed, t = r;
          this.actions.length;

        ) {
          const i = this.actions[0];
          if (!(this.timeOffset >= i.delay)) break;
          this.actions.shift(), i.doAction();
        }
        (this.actions.length > 0 || this.liveMode) &&
          (this.raf = requestAnimationFrame(n));
      };
      this.raf = requestAnimationFrame(n);
    }
    clear() {
      this.raf && (cancelAnimationFrame(this.raf), (this.raf = null)),
        (this.actions.length = 0);
    }
    setSpeed(t) {
      this.speed = t;
    }
    toggleLiveMode(t) {
      this.liveMode = t;
    }
    isActive() {
      return this.raf !== null;
    }
    findActionIndex(t) {
      let n = 0,
        r = this.actions.length - 1;
      for (; n <= r; ) {
        const i = Math.floor((n + r) / 2);
        if (this.actions[i].delay < t.delay) n = i + 1;
        else {
          if (!(this.actions[i].delay > t.delay)) return i + 1;
          r = i - 1;
        }
      }
      return n;
    }
  }
  function xl(e, t) {
    if (
      e.type === Me.IncrementalSnapshot &&
      e.data.source === ke.MouseMove &&
      e.data.positions &&
      e.data.positions.length
    ) {
      const n = e.data.positions[0].timeOffset,
        r = e.timestamp + n;
      return (e.delay = r - t), r - t;
    }
    return (e.delay = e.timestamp - t), e.delay;
  }
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function bl(
    e,
    t
  ) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r,
      i,
      o = n.call(e),
      s = [];
    try {
      for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; )
        s.push(r.value);
    } catch (a) {
      i = { error: a };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return s;
  }
  (function (e) {
    (e[(e.NotStarted = 0)] = "NotStarted"),
      (e[(e.Running = 1)] = "Running"),
      (e[(e.Stopped = 2)] = "Stopped");
  })($n || ($n = {}));
  var b0 = { type: "xstate.init" };
  function fo(e) {
    return e === void 0 ? [] : [].concat(e);
  }
  function Yn(e) {
    return { type: "xstate.assign", assignment: e };
  }
  function wl(e, t) {
    return typeof (e = typeof e == "string" && t && t[e] ? t[e] : e) == "string"
      ? { type: e }
      : typeof e == "function"
      ? { type: e.name, exec: e }
      : e;
  }
  function gi(e) {
    return function (t) {
      return e === t;
    };
  }
  function w0(e) {
    return typeof e == "string" ? { type: e } : e;
  }
  function _l(e, t) {
    return { value: e, context: t, actions: [], changed: !1, matches: gi(e) };
  }
  function Sl(e, t, n) {
    var r = t,
      i = !1;
    return [
      e.filter(function (o) {
        if (o.type === "xstate.assign") {
          i = !0;
          var s = Object.assign({}, r);
          return (
            typeof o.assignment == "function"
              ? (s = o.assignment(r, n))
              : Object.keys(o.assignment).forEach(function (a) {
                  s[a] =
                    typeof o.assignment[a] == "function"
                      ? o.assignment[a](r, n)
                      : o.assignment[a];
                }),
            (r = s),
            !1
          );
        }
        return !0;
      }),
      r,
      i,
    ];
  }
  function _0(e, t) {
    t === void 0 && (t = {});
    var n = bl(
        Sl(
          fo(e.states[e.initial].entry).map(function (s) {
            return wl(s, t.actions);
          }),
          e.context,
          b0
        ),
        2
      ),
      r = n[0],
      i = n[1],
      o = {
        config: e,
        _options: t,
        initialState: {
          value: e.initial,
          actions: r,
          context: i,
          matches: gi(e.initial),
        },
        transition: function (s, a) {
          var c,
            l,
            u = typeof s == "string" ? { value: s, context: e.context } : s,
            m = u.value,
            h = u.context,
            v = w0(a),
            f = e.states[m];
          if (f.on) {
            var d = fo(f.on[v.type]);
            try {
              for (
                var y = (function (F) {
                    var K = typeof Symbol == "function" && Symbol.iterator,
                      Z = K && F[K],
                      J = 0;
                    if (Z) return Z.call(F);
                    if (F && typeof F.length == "number")
                      return {
                        next: function () {
                          return (
                            F && J >= F.length && (F = void 0),
                            { value: F && F[J++], done: !F }
                          );
                        },
                      };
                    throw new TypeError(
                      K
                        ? "Object is not iterable."
                        : "Symbol.iterator is not defined."
                    );
                  })(d),
                  w = y.next();
                !w.done;
                w = y.next()
              ) {
                var p = w.value;
                if (p === void 0) return _l(m, h);
                var g = typeof p == "string" ? { target: p } : p,
                  b = g.target,
                  _ = g.actions,
                  S = _ === void 0 ? [] : _,
                  k = g.cond,
                  E =
                    k === void 0
                      ? function () {
                          return !0;
                        }
                      : k,
                  T = b === void 0,
                  D = b ?? m,
                  C = e.states[D];
                if (E(h, v)) {
                  var A = bl(
                      Sl(
                        (T
                          ? fo(S)
                          : [].concat(f.exit, S, C.entry).filter(function (F) {
                              return F;
                            })
                        ).map(function (F) {
                          return wl(F, o._options.actions);
                        }),
                        h,
                        v
                      ),
                      3
                    ),
                    M = A[0],
                    L = A[1],
                    H = A[2],
                    j = b ?? m;
                  return {
                    value: j,
                    context: L,
                    actions: M,
                    changed: b !== m || M.length > 0 || H,
                    matches: gi(j),
                  };
                }
              }
            } catch (F) {
              c = { error: F };
            } finally {
              try {
                w && !w.done && (l = y.return) && l.call(y);
              } finally {
                if (c) throw c.error;
              }
            }
          }
          return _l(m, h);
        },
      };
    return o;
  }
  var kl = function (e, t) {
    return e.actions.forEach(function (n) {
      var r = n.exec;
      return r && r(e.context, t);
    });
  };
  function S0(e) {
    var t = e.initialState,
      n = $n.NotStarted,
      r = new Set(),
      i = {
        _machine: e,
        send: function (o) {
          n === $n.Running &&
            ((t = e.transition(t, o)),
            kl(t, w0(o)),
            r.forEach(function (s) {
              return s(t);
            }));
        },
        subscribe: function (o) {
          return (
            r.add(o),
            o(t),
            {
              unsubscribe: function () {
                return r.delete(o);
              },
            }
          );
        },
        start: function (o) {
          if (o) {
            var s =
              typeof o == "object"
                ? o
                : { context: e.config.context, value: o };
            t = {
              value: s.value,
              actions: [],
              context: s.context,
              matches: gi(s.value),
            };
          }
          return (n = $n.Running), kl(t, b0), i;
        },
        stop: function () {
          return (n = $n.Stopped), r.clear(), i;
        },
        get state() {
          return t;
        },
        get status() {
          return n;
        },
      };
    return i;
  }
  function Xh(e, { getCastFn: t, applyEventsSynchronously: n, emitter: r }) {
    const i = _0(
      {
        id: "player",
        context: e,
        initial: "paused",
        states: {
          playing: {
            on: {
              PAUSE: { target: "paused", actions: ["pause"] },
              CAST_EVENT: { target: "playing", actions: "castEvent" },
              END: {
                target: "paused",
                actions: ["resetLastPlayedEvent", "pause"],
              },
              ADD_EVENT: { target: "playing", actions: ["addEvent"] },
            },
          },
          paused: {
            on: {
              PLAY: {
                target: "playing",
                actions: ["recordTimeOffset", "play"],
              },
              CAST_EVENT: { target: "paused", actions: "castEvent" },
              TO_LIVE: { target: "live", actions: ["startLive"] },
              ADD_EVENT: { target: "paused", actions: ["addEvent"] },
            },
          },
          live: {
            on: {
              ADD_EVENT: { target: "live", actions: ["addEvent"] },
              CAST_EVENT: { target: "live", actions: ["castEvent"] },
            },
          },
        },
      },
      {
        actions: {
          castEvent: Yn({
            lastPlayedEvent: (o, s) =>
              s.type === "CAST_EVENT" ? s.payload.event : o.lastPlayedEvent,
          }),
          recordTimeOffset: Yn((o, s) => {
            let a = o.timeOffset;
            return (
              "payload" in s &&
                "timeOffset" in s.payload &&
                (a = s.payload.timeOffset),
              Object.assign(Object.assign({}, o), {
                timeOffset: a,
                baselineTime: o.events[0].timestamp + a,
              })
            );
          }),
          play(o) {
            var s;
            const {
              timer: a,
              events: c,
              baselineTime: l,
              lastPlayedEvent: u,
            } = o;
            a.clear();
            for (const f of c) xl(f, l);
            const m = (function (f, d) {
              for (let y = f.length - 1; y >= 0; y--) {
                const w = f[y];
                if (w.type === Me.Meta && w.timestamp <= d) return f.slice(y);
              }
              return f;
            })(c, l);
            let h = u == null ? void 0 : u.timestamp;
            (u == null ? void 0 : u.type) === Me.IncrementalSnapshot &&
              u.data.source === ke.MouseMove &&
              (h =
                u.timestamp +
                ((s = u.data.positions[0]) === null || s === void 0
                  ? void 0
                  : s.timeOffset)),
              l < (h || 0) && r.emit(Te.PlayBack);
            const v = new Array();
            for (const f of m)
              if (!(h && h < l && (f.timestamp <= h || f === u)))
                if (f.timestamp < l) v.push(f);
                else {
                  const d = t(f, !1);
                  a.addAction({
                    doAction: () => {
                      d();
                    },
                    delay: f.delay,
                  });
                }
            n(v), r.emit(Te.Flush), a.start();
          },
          pause(o) {
            o.timer.clear();
          },
          resetLastPlayedEvent: Yn((o) =>
            Object.assign(Object.assign({}, o), { lastPlayedEvent: null })
          ),
          startLive: Yn({
            baselineTime: (o, s) => (
              o.timer.toggleLiveMode(!0),
              o.timer.start(),
              s.type === "TO_LIVE" && s.payload.baselineTime
                ? s.payload.baselineTime
                : Date.now()
            ),
          }),
          addEvent: Yn((o, s) => {
            const { baselineTime: a, timer: c, events: l } = o;
            if (s.type === "ADD_EVENT") {
              const { event: u } = s.payload;
              xl(u, a);
              let m = l.length - 1;
              if (!l[m] || l[m].timestamp <= u.timestamp) l.push(u);
              else {
                let f = -1,
                  d = 0;
                for (; d <= m; ) {
                  const y = Math.floor((d + m) / 2);
                  l[y].timestamp <= u.timestamp ? (d = y + 1) : (m = y - 1);
                }
                f === -1 && (f = d), l.splice(f, 0, u);
              }
              const h = u.timestamp < a,
                v = t(u, h);
              h
                ? v()
                : c.isActive() &&
                  c.addAction({
                    doAction: () => {
                      v();
                    },
                    delay: u.delay,
                  });
            }
            return Object.assign(Object.assign({}, o), { events: l });
          }),
        },
      }
    );
    return S0(i);
  }
  const El = new Map();
  function k0(e, t) {
    let n = El.get(e);
    return (
      n || ((n = new Map()), El.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
    );
  }
  function hn(e, t, n) {
    return (r) =>
      En(this, void 0, void 0, function* () {
        if (r && typeof r == "object" && "rr_type" in r) {
          if (
            (n && (n.isUnchanged = !1),
            r.rr_type === "ImageBitmap" && "args" in r)
          ) {
            const i = yield hn(e, t, n)(r.args);
            return yield createImageBitmap.apply(null, i);
          }
          if ("index" in r) {
            if (n || t === null) return r;
            const { rr_type: i, index: o } = r;
            return k0(t, i)[o];
          }
          if ("args" in r) {
            const { rr_type: i, args: o } = r;
            return new window[i](...(yield Promise.all(o.map(hn(e, t, n)))));
          }
          if ("base64" in r)
            return (function (i) {
              var o,
                s,
                a,
                c,
                l,
                u = 0.75 * i.length,
                m = i.length,
                h = 0;
              i[i.length - 1] === "=" && (u--, i[i.length - 2] === "=" && u--);
              var v = new ArrayBuffer(u),
                f = new Uint8Array(v);
              for (o = 0; o < m; o += 4)
                (s = mr[i.charCodeAt(o)]),
                  (a = mr[i.charCodeAt(o + 1)]),
                  (c = mr[i.charCodeAt(o + 2)]),
                  (l = mr[i.charCodeAt(o + 3)]),
                  (f[h++] = (s << 2) | (a >> 4)),
                  (f[h++] = ((15 & a) << 4) | (c >> 2)),
                  (f[h++] = ((3 & c) << 6) | (63 & l));
              return v;
            })(r.base64);
          if ("src" in r) {
            const i = e.get(r.src);
            if (i) return i;
            {
              const o = new Image();
              return (o.src = r.src), e.set(r.src, o), o;
            }
          }
          if ("data" in r && r.rr_type === "Blob") {
            const i = yield Promise.all(r.data.map(hn(e, t, n)));
            return new Blob(i, { type: r.type });
          }
        } else if (Array.isArray(r)) return yield Promise.all(r.map(hn(e, t, n)));
        return r;
      });
  }
  const Jh = [
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
  ];
  function Qh({
    mutation: e,
    target: t,
    type: n,
    imageMap: r,
    errorHandler: i,
  }) {
    return En(this, void 0, void 0, function* () {
      try {
        const o = (function (c, l) {
          try {
            return l === mi.WebGL
              ? c.getContext("webgl") || c.getContext("experimental-webgl")
              : c.getContext("webgl2");
          } catch {
            return null;
          }
        })(t, n);
        if (!o) return;
        if (e.setter) return void (o[e.property] = e.args[0]);
        const s = o[e.property],
          a = yield Promise.all(e.args.map(hn(r, o)));
        (function (c, l) {
          if (!(l != null && l.constructor)) return;
          const { name: u } = l.constructor;
          if (!Jh.includes(u)) return;
          const m = k0(c, u);
          m.includes(l) || m.push(l);
        })(o, s.apply(o, a));
      } catch (o) {
        i(e, o);
      }
    });
  }
  function ep({
    event: e,
    mutation: t,
    target: n,
    imageMap: r,
    errorHandler: i,
  }) {
    return En(this, void 0, void 0, function* () {
      try {
        const o = n.getContext("2d");
        if (t.setter) return void (o[t.property] = t.args[0]);
        const s = o[t.property];
        if (t.property === "drawImage" && typeof t.args[0] == "string")
          r.get(e), s.apply(o, t.args);
        else {
          const a = yield Promise.all(t.args.map(hn(r, o)));
          s.apply(o, a);
        }
      } catch (o) {
        i(t, o);
      }
    });
  }
  function Cl({
    event: e,
    mutation: t,
    target: n,
    imageMap: r,
    canvasEventMap: i,
    errorHandler: o,
  }) {
    return En(this, void 0, void 0, function* () {
      try {
        const s = i.get(e) || t,
          a = "commands" in s ? s.commands : [s];
        if ([mi.WebGL, mi.WebGL2].includes(t.type)) {
          for (let c = 0; c < a.length; c++) {
            const l = a[c];
            yield Qh({
              mutation: l,
              type: t.type,
              target: n,
              imageMap: r,
              errorHandler: o,
            });
          }
          return;
        }
        for (let c = 0; c < a.length; c++) {
          const l = a[c];
          yield ep({
            event: e,
            mutation: l,
            target: n,
            imageMap: r,
            errorHandler: o,
          });
        }
      } catch (s) {
        o(t, s);
      }
    });
  }
  const tp = x0 || Gh,
    ho = { duration: 500, lineCap: "round", lineWidth: 3, strokeStyle: "red" };
  function Dl(e) {
    return (
      e.type == Me.IncrementalSnapshot &&
      (e.data.source == ke.TouchMove ||
        (e.data.source == ke.MouseInteraction && e.data.type == tt.TouchStart))
    );
  }
  class np {
    constructor(t, n) {
      if (
        ((this.usingVirtualDom = !1),
        (this.virtualDom = new tr()),
        (this.mouseTail = null),
        (this.tailPositions = []),
        (this.emitter = tp()),
        (this.legacy_missingNodeRetryMap = {}),
        (this.cache = ul()),
        (this.imageMap = new Map()),
        (this.canvasEventMap = new Map()),
        (this.mirror = ph()),
        (this.styleMirror = new bh()),
        (this.firstFullSnapshot = null),
        (this.newDocumentQueue = []),
        (this.mousePos = null),
        (this.touchActive = null),
        (this.lastSelectionData = null),
        (this.constructedStyleMutations = []),
        (this.adoptedStyleSheets = []),
        (this.handleResize = (a) => {
          this.iframe.style.display = "inherit";
          for (const c of [this.mouseTail, this.iframe])
            c &&
              (c.setAttribute("width", String(a.width)),
              c.setAttribute("height", String(a.height)));
        }),
        (this.applyEventsSynchronously = (a) => {
          for (const c of a) {
            switch (c.type) {
              case Me.DomContentLoaded:
              case Me.Load:
              case Me.Custom:
                continue;
              case Me.FullSnapshot:
              case Me.Meta:
              case Me.Plugin:
              case Me.IncrementalSnapshot:
            }
            this.getCastFn(c, !0)();
          }
          this.touchActive === !0
            ? this.mouse.classList.add("touch-active")
            : this.touchActive === !1 &&
              this.mouse.classList.remove("touch-active"),
            (this.touchActive = null);
        }),
        (this.getCastFn = (a, c = !1) => {
          let l;
          switch (a.type) {
            case Me.DomContentLoaded:
            case Me.Load:
              break;
            case Me.Custom:
              l = () => {
                this.emitter.emit(Te.CustomEvent, a);
              };
              break;
            case Me.Meta:
              l = () =>
                this.emitter.emit(Te.Resize, {
                  width: a.data.width,
                  height: a.data.height,
                });
              break;
            case Me.FullSnapshot:
              l = () => {
                var u;
                if (this.firstFullSnapshot) {
                  if (this.firstFullSnapshot === a)
                    return void (this.firstFullSnapshot = !0);
                } else this.firstFullSnapshot = !0;
                this.rebuildFullSnapshot(a, c),
                  (u = this.iframe.contentWindow) === null ||
                    u === void 0 ||
                    u.scrollTo(a.data.initialOffset),
                  this.styleMirror.reset();
              };
              break;
            case Me.IncrementalSnapshot:
              l = () => {
                if (
                  (this.applyIncremental(a, c),
                  !c &&
                    (a === this.nextUserInteractionEvent &&
                      ((this.nextUserInteractionEvent = null),
                      this.backToNormal()),
                    this.config.skipInactive && !this.nextUserInteractionEvent))
                ) {
                  for (const u of this.service.state.context.events)
                    if (
                      !(u.timestamp <= a.timestamp) &&
                      this.isUserInteraction(u)
                    ) {
                      u.delay - a.delay >
                        1e4 * this.speedService.state.context.timer.speed &&
                        (this.nextUserInteractionEvent = u);
                      break;
                    }
                  if (this.nextUserInteractionEvent) {
                    const u = this.nextUserInteractionEvent.delay - a.delay,
                      m = {
                        speed: Math.min(
                          Math.round(u / 5e3),
                          this.config.maxSpeed
                        ),
                      };
                    this.speedService.send({
                      type: "FAST_FORWARD",
                      payload: m,
                    }),
                      this.emitter.emit(Te.SkipStart, m);
                  }
                }
              };
          }
          return () => {
            l && l();
            for (const m of this.config.plugins || [])
              m.handler && m.handler(a, c, { replayer: this });
            this.service.send({ type: "CAST_EVENT", payload: { event: a } });
            const u = this.service.state.context.events.length - 1;
            if (a === this.service.state.context.events[u]) {
              const m = () => {
                u < this.service.state.context.events.length - 1 ||
                  (this.backToNormal(),
                  this.service.send("END"),
                  this.emitter.emit(Te.Finish));
              };
              a.type === Me.IncrementalSnapshot &&
              a.data.source === ke.MouseMove &&
              a.data.positions.length
                ? setTimeout(() => {
                    m();
                  }, Math.max(0, 50 - a.data.positions[0].timeOffset))
                : m();
            }
            this.emitter.emit(Te.EventCast, a);
          };
        }),
        !(n != null && n.liveMode) && t.length < 2)
      )
        throw new Error("Replayer need at least 2 events.");
      const r = {
        speed: 1,
        maxSpeed: 360,
        root: document.body,
        loadTimeout: 0,
        skipInactive: !1,
        showWarning: !0,
        showDebug: !1,
        blockClass: "rr-block",
        liveMode: !1,
        insertStyleRules: [],
        triggerFocus: !0,
        UNSAFE_replayCanvas: !1,
        pauseAnimation: !0,
        mouseTail: ho,
        useVirtualDom: !0,
      };
      (this.config = Object.assign({}, r, n)),
        (this.handleResize = this.handleResize.bind(this)),
        (this.getCastFn = this.getCastFn.bind(this)),
        (this.applyEventsSynchronously =
          this.applyEventsSynchronously.bind(this)),
        this.emitter.on(Te.Resize, this.handleResize),
        this.setupDom();
      for (const a of this.config.plugins || [])
        a.getMirror && a.getMirror({ nodeMirror: this.mirror });
      this.emitter.on(Te.Flush, () => {
        if (this.usingVirtualDom) {
          const a = {
            mirror: this.mirror,
            applyCanvas: (c, l, u) => {
              Cl({
                event: c,
                mutation: l,
                target: u,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this),
              });
            },
            applyInput: this.applyInput.bind(this),
            applyScroll: this.applyScroll.bind(this),
            applyStyleSheetMutation: (c, l) => {
              c.source === ke.StyleSheetRule
                ? this.applyStyleSheetRule(c, l)
                : c.source === ke.StyleDeclaration &&
                  this.applyStyleDeclaration(c, l);
            },
          };
          if (
            (this.iframe.contentDocument &&
              Rt(
                this.iframe.contentDocument,
                this.virtualDom,
                a,
                this.virtualDom.mirror
              ),
            this.virtualDom.destroyTree(),
            (this.usingVirtualDom = !1),
            Object.keys(this.legacy_missingNodeRetryMap).length)
          )
            for (const c in this.legacy_missingNodeRetryMap)
              try {
                const l = this.legacy_missingNodeRetryMap[c],
                  u = gs(l.node, this.mirror, this.virtualDom.mirror);
                Rt(u, l.node, a, this.virtualDom.mirror), (l.node = u);
              } catch (l) {
                this.config.showWarning && console.warn(l);
              }
          this.constructedStyleMutations.forEach((c) => {
            this.applyStyleSheetMutation(c);
          }),
            (this.constructedStyleMutations = []),
            this.adoptedStyleSheets.forEach((c) => {
              this.applyAdoptedStyleSheet(c);
            }),
            (this.adoptedStyleSheets = []);
        }
        this.mousePos &&
          (this.moveAndHover(
            this.mousePos.x,
            this.mousePos.y,
            this.mousePos.id,
            !0,
            this.mousePos.debugData
          ),
          (this.mousePos = null)),
          this.lastSelectionData &&
            (this.applySelection(this.lastSelectionData),
            (this.lastSelectionData = null));
      }),
        this.emitter.on(Te.PlayBack, () => {
          (this.firstFullSnapshot = null),
            this.mirror.reset(),
            this.styleMirror.reset();
        });
      const i = new Kh([], {
        speed: this.config.speed,
        liveMode: this.config.liveMode,
      });
      (this.service = Xh(
        {
          events: t
            .map((a) => (n && n.unpackFn ? n.unpackFn(a) : a))
            .sort((a, c) => a.timestamp - c.timestamp),
          timer: i,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null,
        },
        {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter,
        }
      )),
        this.service.start(),
        this.service.subscribe((a) => {
          this.emitter.emit(Te.StateChange, { player: a });
        }),
        (this.speedService = S0(
          _0(
            {
              id: "speed",
              context: { normalSpeed: -1, timer: i },
              initial: "normal",
              states: {
                normal: {
                  on: {
                    FAST_FORWARD: {
                      target: "skipping",
                      actions: ["recordSpeed", "setSpeed"],
                    },
                    SET_SPEED: { target: "normal", actions: ["setSpeed"] },
                  },
                },
                skipping: {
                  on: {
                    BACK_TO_NORMAL: {
                      target: "normal",
                      actions: ["restoreSpeed"],
                    },
                    SET_SPEED: { target: "normal", actions: ["setSpeed"] },
                  },
                },
              },
            },
            {
              actions: {
                setSpeed: (a, c) => {
                  "payload" in c && a.timer.setSpeed(c.payload.speed);
                },
                recordSpeed: Yn({ normalSpeed: (a) => a.timer.speed }),
                restoreSpeed: (a) => {
                  a.timer.setSpeed(a.normalSpeed);
                },
              },
            }
          )
        )),
        this.speedService.start(),
        this.speedService.subscribe((a) => {
          this.emitter.emit(Te.StateChange, { speed: a });
        });
      const o = this.service.state.context.events.find(
          (a) => a.type === Me.Meta
        ),
        s = this.service.state.context.events.find(
          (a) => a.type === Me.FullSnapshot
        );
      if (o) {
        const { width: a, height: c } = o.data;
        setTimeout(() => {
          this.emitter.emit(Te.Resize, { width: a, height: c });
        }, 0);
      }
      s &&
        setTimeout(() => {
          var a;
          this.firstFullSnapshot ||
            ((this.firstFullSnapshot = s),
            this.rebuildFullSnapshot(s),
            (a = this.iframe.contentWindow) === null ||
              a === void 0 ||
              a.scrollTo(s.data.initialOffset));
        }, 1),
        this.service.state.context.events.find(Dl) &&
          this.mouse.classList.add("touch-device");
    }
    get timer() {
      return this.service.state.context.timer;
    }
    on(t, n) {
      return this.emitter.on(t, n), this;
    }
    off(t, n) {
      return this.emitter.off(t, n), this;
    }
    setConfig(t) {
      Object.keys(t).forEach((n) => {
        t[n], (this.config[n] = t[n]);
      }),
        this.config.skipInactive || this.backToNormal(),
        t.speed !== void 0 &&
          this.speedService.send({
            type: "SET_SPEED",
            payload: { speed: t.speed },
          }),
        t.mouseTail !== void 0 &&
          (t.mouseTail === !1
            ? this.mouseTail && (this.mouseTail.style.display = "none")
            : (this.mouseTail ||
                ((this.mouseTail = document.createElement("canvas")),
                (this.mouseTail.width = Number.parseFloat(this.iframe.width)),
                (this.mouseTail.height = Number.parseFloat(this.iframe.height)),
                this.mouseTail.classList.add("replayer-mouse-tail"),
                this.wrapper.insertBefore(this.mouseTail, this.iframe)),
              (this.mouseTail.style.display = "inherit")));
    }
    getMetaData() {
      const t = this.service.state.context.events[0],
        n =
          this.service.state.context.events[
            this.service.state.context.events.length - 1
          ];
      return {
        startTime: t.timestamp,
        endTime: n.timestamp,
        totalTime: n.timestamp - t.timestamp,
      };
    }
    getCurrentTime() {
      return this.timer.timeOffset + this.getTimeOffset();
    }
    getTimeOffset() {
      const { baselineTime: t, events: n } = this.service.state.context;
      return t - n[0].timestamp;
    }
    getMirror() {
      return this.mirror;
    }
    play(t = 0) {
      var n, r;
      this.service.state.matches("paused") ||
        this.service.send({ type: "PAUSE" }),
        this.service.send({ type: "PLAY", payload: { timeOffset: t } }),
        (r =
          (n = this.iframe.contentDocument) === null || n === void 0
            ? void 0
            : n.getElementsByTagName("html")[0]) === null ||
          r === void 0 ||
          r.classList.remove("rrweb-paused"),
        this.emitter.emit(Te.Start);
    }
    pause(t) {
      var n, r;
      t === void 0 &&
        this.service.state.matches("playing") &&
        this.service.send({ type: "PAUSE" }),
        typeof t == "number" &&
          (this.play(t), this.service.send({ type: "PAUSE" })),
        (r =
          (n = this.iframe.contentDocument) === null || n === void 0
            ? void 0
            : n.getElementsByTagName("html")[0]) === null ||
          r === void 0 ||
          r.classList.add("rrweb-paused"),
        this.emitter.emit(Te.Pause);
    }
    resume(t = 0) {
      console.warn(
        "The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."
      ),
        this.play(t),
        this.emitter.emit(Te.Resume);
    }
    destroy() {
      this.pause(),
        this.config.root.removeChild(this.wrapper),
        this.emitter.emit(Te.Destroy);
    }
    startLive(t) {
      this.service.send({ type: "TO_LIVE", payload: { baselineTime: t } });
    }
    addEvent(t) {
      const n = this.config.unpackFn ? this.config.unpackFn(t) : t;
      Dl(n) && this.mouse.classList.add("touch-device"),
        Promise.resolve().then(() =>
          this.service.send({ type: "ADD_EVENT", payload: { event: n } })
        );
    }
    enableInteract() {
      this.iframe.setAttribute("scrolling", "auto"),
        (this.iframe.style.pointerEvents = "auto");
    }
    disableInteract() {
      this.iframe.setAttribute("scrolling", "no"),
        (this.iframe.style.pointerEvents = "none");
    }
    resetCache() {
      this.cache = ul();
    }
    setupDom() {
      (this.wrapper = document.createElement("div")),
        this.wrapper.classList.add("replayer-wrapper"),
        this.config.root.appendChild(this.wrapper),
        (this.mouse = document.createElement("div")),
        this.mouse.classList.add("replayer-mouse"),
        this.wrapper.appendChild(this.mouse),
        this.config.mouseTail !== !1 &&
          ((this.mouseTail = document.createElement("canvas")),
          this.mouseTail.classList.add("replayer-mouse-tail"),
          (this.mouseTail.style.display = "inherit"),
          this.wrapper.appendChild(this.mouseTail)),
        (this.iframe = document.createElement("iframe"));
      const t = ["allow-same-origin"];
      this.config.UNSAFE_replayCanvas && t.push("allow-scripts"),
        (this.iframe.style.display = "none"),
        this.iframe.setAttribute("sandbox", t.join(" ")),
        this.disableInteract(),
        this.wrapper.appendChild(this.iframe),
        this.iframe.contentWindow &&
          this.iframe.contentDocument &&
          (Zh(this.iframe.contentWindow, this.iframe.contentDocument),
          (function (n = window) {
            "NodeList" in n &&
              !n.NodeList.prototype.forEach &&
              (n.NodeList.prototype.forEach = Array.prototype.forEach),
              "DOMTokenList" in n &&
                !n.DOMTokenList.prototype.forEach &&
                (n.DOMTokenList.prototype.forEach = Array.prototype.forEach),
              Node.prototype.contains ||
                (Node.prototype.contains = (...r) => {
                  let i = r[0];
                  if (!(0 in r)) throw new TypeError("1 argument is required");
                  do if (this === i) return !0;
                  while ((i = i && i.parentNode));
                  return !1;
                });
          })(this.iframe.contentWindow));
    }
    rebuildFullSnapshot(t, n = !1) {
      if (!this.iframe.contentDocument)
        return console.warn("Looks like your replayer has been destroyed.");
      Object.keys(this.legacy_missingNodeRetryMap).length &&
        console.warn(
          "Found unresolved missing node map",
          this.legacy_missingNodeRetryMap
        ),
        (this.legacy_missingNodeRetryMap = {});
      const r = [],
        i = (a, c) => {
          this.collectIframeAndAttachDocument(r, a);
          for (const l of this.config.plugins || [])
            l.onBuild && l.onBuild(a, { id: c, replayer: this });
        };
      yh(t.data.node, {
        doc: this.iframe.contentDocument,
        afterAppend: i,
        cache: this.cache,
        mirror: this.mirror,
      }),
        i(this.iframe.contentDocument, t.data.node.id);
      for (const { mutationInQueue: a, builtNode: c } of r)
        this.attachDocumentToIframe(a, c),
          (this.newDocumentQueue = this.newDocumentQueue.filter(
            (l) => l !== a
          ));
      const { documentElement: o, head: s } = this.iframe.contentDocument;
      this.insertStyleRules(o, s),
        this.service.state.matches("playing") ||
          this.iframe.contentDocument
            .getElementsByTagName("html")[0]
            .classList.add("rrweb-paused"),
        this.emitter.emit(Te.FullsnapshotRebuilded, t),
        n || this.waitForStylesheetLoad(),
        this.config.UNSAFE_replayCanvas && this.preloadAllImages();
    }
    insertStyleRules(t, n) {
      var r;
      const i = ((o = this.config.blockClass),
      [
        `.${o} { background: currentColor }`,
        "noscript { display: none !important; }",
      ]).concat(this.config.insertStyleRules);
      var o;
      if (
        (this.config.pauseAnimation &&
          i.push(
            "html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"
          ),
        this.usingVirtualDom)
      ) {
        const s = this.virtualDom.createElement("style");
        this.virtualDom.mirror.add(s, d0(s, this.virtualDom.unserializedId)),
          t.insertBefore(s, n),
          s.rules.push({
            source: ke.StyleSheetRule,
            adds: i.map((a, c) => ({ rule: a, index: c })),
          });
      } else {
        const s = document.createElement("style");
        t.insertBefore(s, n);
        for (let a = 0; a < i.length; a++)
          (r = s.sheet) === null || r === void 0 || r.insertRule(i[a], a);
      }
    }
    attachDocumentToIframe(t, n) {
      const r = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
        i = [],
        o = (s, a) => {
          this.collectIframeAndAttachDocument(i, s);
          const c = r.getMeta(s);
          if (
            (c == null ? void 0 : c.type) === We.Element &&
            (c == null ? void 0 : c.tagName.toUpperCase()) === "HTML"
          ) {
            const { documentElement: l, head: u } = n.contentDocument;
            this.insertStyleRules(l, u);
          }
          for (const l of this.config.plugins || [])
            l.onBuild && l.onBuild(s, { id: a, replayer: this });
        };
      xr(t.node, {
        doc: n.contentDocument,
        mirror: r,
        hackCss: !0,
        skipChild: !1,
        afterAppend: o,
        cache: this.cache,
      }),
        o(n.contentDocument, t.node.id);
      for (const { mutationInQueue: s, builtNode: a } of i)
        this.attachDocumentToIframe(s, a),
          (this.newDocumentQueue = this.newDocumentQueue.filter(
            (c) => c !== s
          ));
    }
    collectIframeAndAttachDocument(t, n) {
      if (ao(n, this.mirror)) {
        const r = this.newDocumentQueue.find(
          (i) => i.parentId === this.mirror.getId(n)
        );
        r && t.push({ mutationInQueue: r, builtNode: n });
      }
    }
    waitForStylesheetLoad() {
      var t;
      const n =
        (t = this.iframe.contentDocument) === null || t === void 0
          ? void 0
          : t.head;
      if (n) {
        const r = new Set();
        let i,
          o = this.service.state;
        const s = () => {
          o = this.service.state;
        };
        this.emitter.on(Te.Start, s), this.emitter.on(Te.Pause, s);
        const a = () => {
          this.emitter.off(Te.Start, s), this.emitter.off(Te.Pause, s);
        };
        n.querySelectorAll('link[rel="stylesheet"]').forEach((c) => {
          c.sheet ||
            (r.add(c),
            c.addEventListener("load", () => {
              r.delete(c),
                r.size === 0 &&
                  i !== -1 &&
                  (o.matches("playing") && this.play(this.getCurrentTime()),
                  this.emitter.emit(Te.LoadStylesheetEnd),
                  i && clearTimeout(i),
                  a());
            }));
        }),
          r.size > 0 &&
            (this.service.send({ type: "PAUSE" }),
            this.emitter.emit(Te.LoadStylesheetStart),
            (i = setTimeout(() => {
              o.matches("playing") && this.play(this.getCurrentTime()),
                (i = -1),
                a();
            }, this.config.loadTimeout)));
      }
    }
    preloadAllImages() {
      return En(this, void 0, void 0, function* () {
        this.service.state;
        const t = () => {
          this.service.state;
        };
        this.emitter.on(Te.Start, t), this.emitter.on(Te.Pause, t);
        const n = [];
        for (const r of this.service.state.context.events)
          r.type === Me.IncrementalSnapshot &&
            r.data.source === ke.CanvasMutation &&
            (n.push(this.deserializeAndPreloadCanvasEvents(r.data, r)),
            ("commands" in r.data ? r.data.commands : [r.data]).forEach((i) => {
              this.preloadImages(i, r);
            }));
        return Promise.all(n);
      });
    }
    preloadImages(t, n) {
      if (
        t.property === "drawImage" &&
        typeof t.args[0] == "string" &&
        !this.imageMap.has(n)
      ) {
        const r = document.createElement("canvas"),
          i = r.getContext("2d"),
          o = i == null ? void 0 : i.createImageData(r.width, r.height);
        o == null || o.data,
          JSON.parse(t.args[0]),
          i == null || i.putImageData(o, 0, 0);
      }
    }
    deserializeAndPreloadCanvasEvents(t, n) {
      return En(this, void 0, void 0, function* () {
        if (!this.canvasEventMap.has(n)) {
          const r = { isUnchanged: !0 };
          if ("commands" in t) {
            const i = yield Promise.all(
              t.commands.map((o) =>
                En(this, void 0, void 0, function* () {
                  const s = yield Promise.all(
                    o.args.map(hn(this.imageMap, null, r))
                  );
                  return Object.assign(Object.assign({}, o), { args: s });
                })
              )
            );
            r.isUnchanged === !1 &&
              this.canvasEventMap.set(
                n,
                Object.assign(Object.assign({}, t), { commands: i })
              );
          } else {
            const i = yield Promise.all(t.args.map(hn(this.imageMap, null, r)));
            r.isUnchanged === !1 &&
              this.canvasEventMap.set(
                n,
                Object.assign(Object.assign({}, t), { args: i })
              );
          }
        }
      });
    }
    applyIncremental(t, n) {
      var r, i, o;
      const { data: s } = t;
      switch (s.source) {
        case ke.Mutation:
          try {
            this.applyMutation(s, n);
          } catch (a) {
            this.warn(`Exception in mutation ${a.message || a}`, s);
          }
          break;
        case ke.Drag:
        case ke.TouchMove:
        case ke.MouseMove:
          if (n) {
            const a = s.positions[s.positions.length - 1];
            this.mousePos = { x: a.x, y: a.y, id: a.id, debugData: s };
          } else
            s.positions.forEach((a) => {
              const c = {
                doAction: () => {
                  this.moveAndHover(a.x, a.y, a.id, n, s);
                },
                delay:
                  a.timeOffset +
                  t.timestamp -
                  this.service.state.context.baselineTime,
              };
              this.timer.addAction(c);
            }),
              this.timer.addAction({
                doAction() {},
                delay:
                  t.delay -
                  ((r = s.positions[0]) === null || r === void 0
                    ? void 0
                    : r.timeOffset),
              });
          break;
        case ke.MouseInteraction: {
          if (s.id === -1 || n) break;
          const a = new Event(tt[s.type].toLowerCase()),
            c = this.mirror.getNode(s.id);
          if (!c) return this.debugNodeNotFound(s, s.id);
          this.emitter.emit(Te.MouseInteraction, { type: s.type, target: c });
          const { triggerFocus: l } = this.config;
          switch (s.type) {
            case tt.Blur:
              "blur" in c && c.blur();
              break;
            case tt.Focus:
              l && c.focus && c.focus({ preventScroll: !0 });
              break;
            case tt.Click:
            case tt.TouchStart:
            case tt.TouchEnd:
              n
                ? (s.type === tt.TouchStart
                    ? (this.touchActive = !0)
                    : s.type === tt.TouchEnd && (this.touchActive = !1),
                  (this.mousePos = { x: s.x, y: s.y, id: s.id, debugData: s }))
                : (s.type === tt.TouchStart && (this.tailPositions.length = 0),
                  this.moveAndHover(s.x, s.y, s.id, n, s),
                  s.type === tt.Click
                    ? (this.mouse.classList.remove("active"),
                      this.mouse.offsetWidth,
                      this.mouse.classList.add("active"))
                    : s.type === tt.TouchStart
                    ? (this.mouse.offsetWidth,
                      this.mouse.classList.add("touch-active"))
                    : s.type === tt.TouchEnd &&
                      this.mouse.classList.remove("touch-active"));
              break;
            case tt.TouchCancel:
              n
                ? (this.touchActive = !1)
                : this.mouse.classList.remove("touch-active");
              break;
            default:
              c.dispatchEvent(a);
          }
          break;
        }
        case ke.Scroll:
          if (s.id === -1) break;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a) return this.debugNodeNotFound(s, s.id);
            a.scrollData = s;
            break;
          }
          this.applyScroll(s, n);
          break;
        case ke.ViewportResize:
          this.emitter.emit(Te.Resize, { width: s.width, height: s.height });
          break;
        case ke.Input:
          if (s.id === -1) break;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a) return this.debugNodeNotFound(s, s.id);
            a.inputData = s;
            break;
          }
          this.applyInput(s);
          break;
        case ke.MediaInteraction: {
          const a = this.usingVirtualDom
            ? this.virtualDom.mirror.getNode(s.id)
            : this.mirror.getNode(s.id);
          if (!a) return this.debugNodeNotFound(s, s.id);
          const c = a;
          try {
            s.currentTime && (c.currentTime = s.currentTime),
              s.volume && (c.volume = s.volume),
              s.muted && (c.muted = s.muted),
              s.type === 1 && c.pause(),
              s.type === 0 && c.play(),
              s.type === 4 && (c.playbackRate = s.playbackRate);
          } catch (l) {
            this.config.showWarning &&
              console.warn(
                `Failed to replay media interactions: ${l.message || l}`
              );
          }
          break;
        }
        case ke.StyleSheetRule:
        case ke.StyleDeclaration:
          this.usingVirtualDom
            ? s.styleId
              ? this.constructedStyleMutations.push(s)
              : s.id &&
                ((i = this.virtualDom.mirror.getNode(s.id)) === null ||
                  i === void 0 ||
                  i.rules.push(s))
            : this.applyStyleSheetMutation(s);
          break;
        case ke.CanvasMutation:
          if (!this.config.UNSAFE_replayCanvas) return;
          if (this.usingVirtualDom) {
            const a = this.virtualDom.mirror.getNode(s.id);
            if (!a) return this.debugNodeNotFound(s, s.id);
            a.canvasMutations.push({ event: t, mutation: s });
          } else {
            const a = this.mirror.getNode(s.id);
            if (!a) return this.debugNodeNotFound(s, s.id);
            Cl({
              event: t,
              mutation: s,
              target: a,
              imageMap: this.imageMap,
              canvasEventMap: this.canvasEventMap,
              errorHandler: this.warnCanvasMutationFailed.bind(this),
            });
          }
          break;
        case ke.Font:
          try {
            const a = new FontFace(
              s.family,
              s.buffer
                ? new Uint8Array(JSON.parse(s.fontSource))
                : s.fontSource,
              s.descriptors
            );
            (o = this.iframe.contentDocument) === null ||
              o === void 0 ||
              o.fonts.add(a);
          } catch (a) {
            this.config.showWarning && console.warn(a);
          }
          break;
        case ke.Selection:
          if (n) {
            this.lastSelectionData = s;
            break;
          }
          this.applySelection(s);
          break;
        case ke.AdoptedStyleSheet:
          this.usingVirtualDom
            ? this.adoptedStyleSheets.push(s)
            : this.applyAdoptedStyleSheet(s);
      }
    }
    applyMutation(t, n) {
      if (
        this.config.useVirtualDom &&
        !this.usingVirtualDom &&
        n &&
        ((this.usingVirtualDom = !0),
        Yh(this.iframe.contentDocument, this.mirror, this.virtualDom),
        Object.keys(this.legacy_missingNodeRetryMap).length)
      )
        for (const c in this.legacy_missingNodeRetryMap)
          try {
            const l = this.legacy_missingNodeRetryMap[c],
              u = u0(l.node, this.virtualDom, this.mirror);
            u && (l.node = u);
          } catch (l) {
            this.config.showWarning && console.warn(l);
          }
      const r = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
      t.removes.forEach((c) => {
        var l;
        const u = r.getNode(c.id);
        if (!u)
          return t.removes.find((h) => h.id === c.parentId)
            ? void 0
            : this.warnNodeNotFound(t, c.id);
        let m = r.getNode(c.parentId);
        if (!m) return this.warnNodeNotFound(t, c.parentId);
        if (
          (c.isShadow && Vr(m) && (m = m.shadowRoot), r.removeNodeFromMap(u), m)
        )
          try {
            m.removeChild(u),
              this.usingVirtualDom &&
                u.nodeName === "#text" &&
                m.nodeName === "STYLE" &&
                ((l = m.rules) === null || l === void 0 ? void 0 : l.length) >
                  0 &&
                (m.rules = []);
          } catch (h) {
            if (!(h instanceof DOMException)) throw h;
            this.warn("parent could not remove child in mutation", m, u, t);
          }
      });
      const i = Object.assign({}, this.legacy_missingNodeRetryMap),
        o = [],
        s = (c) => {
          var l;
          if (!this.iframe.contentDocument)
            return console.warn("Looks like your replayer has been destroyed.");
          let u = r.getNode(c.parentId);
          if (!u)
            return c.node.type === We.Document
              ? this.newDocumentQueue.push(c)
              : o.push(c);
          c.node.isShadow &&
            (Vr(u) || u.attachShadow({ mode: "open" }), (u = u.shadowRoot));
          let m = null,
            h = null;
          if (
            (c.previousId && (m = r.getNode(c.previousId)),
            c.nextId && (h = r.getNode(c.nextId)),
            ((w) => {
              let p = null;
              return (
                w.nextId && (p = r.getNode(w.nextId)),
                w.nextId !== null &&
                  w.nextId !== void 0 &&
                  w.nextId !== -1 &&
                  !p
              );
            })(c))
          )
            return o.push(c);
          if (c.node.rootId && !r.getNode(c.node.rootId)) return;
          const v = c.node.rootId
            ? r.getNode(c.node.rootId)
            : this.usingVirtualDom
            ? this.virtualDom
            : this.iframe.contentDocument;
          if (ao(u, r)) return void this.attachDocumentToIframe(c, u);
          const f = (w, p) => {
              for (const g of this.config.plugins || [])
                g.onBuild && g.onBuild(w, { id: p, replayer: this });
            },
            d = xr(c.node, {
              doc: v,
              mirror: r,
              skipChild: !0,
              hackCss: !0,
              cache: this.cache,
              afterAppend: f,
            });
          if (c.previousId === -1 || c.nextId === -1)
            return void (i[c.node.id] = { node: d, mutation: c });
          const y = r.getMeta(u);
          if (
            y &&
            y.type === We.Element &&
            y.tagName === "textarea" &&
            c.node.type === We.Text
          ) {
            const w = Array.isArray(u.childNodes)
              ? u.childNodes
              : Array.from(u.childNodes);
            for (const p of w) p.nodeType === u.TEXT_NODE && u.removeChild(p);
          }
          if (m && m.nextSibling && m.nextSibling.parentNode)
            u.insertBefore(d, m.nextSibling);
          else if (h && h.parentNode)
            u.contains(h) ? u.insertBefore(d, h) : u.insertBefore(d, null);
          else {
            if (u === v) for (; v.firstChild; ) v.removeChild(v.firstChild);
            u.appendChild(d);
          }
          if (
            (f(d, c.node.id),
            this.usingVirtualDom &&
              d.nodeName === "#text" &&
              u.nodeName === "STYLE" &&
              ((l = u.rules) === null || l === void 0 ? void 0 : l.length) >
                0 &&
              (u.rules = []),
            ao(d, this.mirror))
          ) {
            const w = this.mirror.getId(d),
              p = this.newDocumentQueue.find((g) => g.parentId === w);
            p &&
              (this.attachDocumentToIframe(p, d),
              (this.newDocumentQueue = this.newDocumentQueue.filter(
                (g) => g !== p
              )));
          }
          (c.previousId || c.nextId) &&
            this.legacy_resolveMissingNode(i, u, d, c);
        };
      t.adds.forEach((c) => {
        s(c);
      });
      const a = Date.now();
      for (; o.length; ) {
        const c = xh(o);
        if (((o.length = 0), Date.now() - a > 500)) {
          this.warn(
            "Timeout in the loop, please check the resolve tree data:",
            c
          );
          break;
        }
        for (const l of c)
          r.getNode(l.value.parentId)
            ? t0(l, (u) => {
                s(u);
              })
            : this.debug(
                "Drop resolve tree since there is no parent for the root node.",
                l
              );
      }
      Object.keys(i).length &&
        Object.assign(this.legacy_missingNodeRetryMap, i),
        (function (c) {
          const l = new Set(),
            u = [];
          for (let m = c.length; m--; ) {
            const h = c[m];
            l.has(h.id) || (u.push(h), l.add(h.id));
          }
          return u;
        })(t.texts).forEach((c) => {
          var l;
          const u = r.getNode(c.id);
          if (!u)
            return t.removes.find((m) => m.id === c.id)
              ? void 0
              : this.warnNodeNotFound(t, c.id);
          if (((u.textContent = c.value), this.usingVirtualDom)) {
            const m = u.parentNode;
            ((l = m == null ? void 0 : m.rules) === null || l === void 0
              ? void 0
              : l.length) > 0 && (m.rules = []);
          }
        }),
        t.attributes.forEach((c) => {
          const l = r.getNode(c.id);
          if (!l)
            return t.removes.find((u) => u.id === c.id)
              ? void 0
              : this.warnNodeNotFound(t, c.id);
          for (const u in c.attributes)
            if (typeof u == "string") {
              const m = c.attributes[u];
              if (m === null) l.removeAttribute(u);
              else if (typeof m == "string")
                try {
                  if (
                    u === "_cssText" &&
                    (l.nodeName === "LINK" || l.nodeName === "STYLE")
                  )
                    try {
                      const h = r.getMeta(l);
                      Object.assign(h.attributes, c.attributes);
                      const v = xr(h, {
                          doc: l.ownerDocument,
                          mirror: r,
                          skipChild: !0,
                          hackCss: !0,
                          cache: this.cache,
                        }),
                        f = l.nextSibling,
                        d = l.parentNode;
                      if (v && d) {
                        d.removeChild(l),
                          d.insertBefore(v, f),
                          r.replace(c.id, v);
                        break;
                      }
                    } catch {}
                  l.setAttribute(u, m);
                } catch (h) {
                  this.config.showWarning &&
                    console.warn(
                      "An error occurred may due to the checkout feature.",
                      h
                    );
                }
              else if (u === "style") {
                const h = m,
                  v = l;
                for (const f in h)
                  if (h[f] === !1) v.style.removeProperty(f);
                  else if (h[f] instanceof Array) {
                    const d = h[f];
                    v.style.setProperty(f, d[0], d[1]);
                  } else {
                    const d = h[f];
                    v.style.setProperty(f, d);
                  }
              }
            }
        });
    }
    applyScroll(t, n) {
      var r, i;
      const o = this.mirror.getNode(t.id);
      if (!o) return this.debugNodeNotFound(t, t.id);
      const s = this.mirror.getMeta(o);
      if (o === this.iframe.contentDocument)
        (r = this.iframe.contentWindow) === null ||
          r === void 0 ||
          r.scrollTo({ top: t.y, left: t.x, behavior: n ? "auto" : "smooth" });
      else if ((s == null ? void 0 : s.type) === We.Document)
        (i = o.defaultView) === null ||
          i === void 0 ||
          i.scrollTo({ top: t.y, left: t.x, behavior: n ? "auto" : "smooth" });
      else
        try {
          o.scrollTo({ top: t.y, left: t.x, behavior: n ? "auto" : "smooth" });
        } catch {}
    }
    applyInput(t) {
      const n = this.mirror.getNode(t.id);
      if (!n) return this.debugNodeNotFound(t, t.id);
      try {
        (n.checked = t.isChecked), (n.value = t.text);
      } catch {}
    }
    applySelection(t) {
      try {
        const n = new Set(),
          r = t.ranges.map(
            ({ start: i, startOffset: o, end: s, endOffset: a }) => {
              const c = this.mirror.getNode(i),
                l = this.mirror.getNode(s);
              if (!c || !l) return;
              const u = new Range();
              u.setStart(c, o), u.setEnd(l, a);
              const m = c.ownerDocument,
                h = m == null ? void 0 : m.getSelection();
              return h && n.add(h), { range: u, selection: h };
            }
          );
        n.forEach((i) => i.removeAllRanges()),
          r.forEach((i) => {
            var o;
            return (
              i &&
              ((o = i.selection) === null || o === void 0
                ? void 0
                : o.addRange(i.range))
            );
          });
      } catch {}
    }
    applyStyleSheetMutation(t) {
      var n;
      let r = null;
      t.styleId
        ? (r = this.styleMirror.getStyle(t.styleId))
        : t.id &&
          (r =
            ((n = this.mirror.getNode(t.id)) === null || n === void 0
              ? void 0
              : n.sheet) || null),
        r &&
          (t.source === ke.StyleSheetRule
            ? this.applyStyleSheetRule(t, r)
            : t.source === ke.StyleDeclaration &&
              this.applyStyleDeclaration(t, r));
    }
    applyStyleSheetRule(t, n) {
      var r, i, o, s;
      if (
        ((r = t.adds) === null ||
          r === void 0 ||
          r.forEach(({ rule: a, index: c }) => {
            try {
              if (Array.isArray(c)) {
                const { positions: l, index: u } = fl(c);
                pr(n.cssRules, l).insertRule(a, u);
              } else {
                const l =
                  c === void 0 ? void 0 : Math.min(c, n.cssRules.length);
                n == null || n.insertRule(a, l);
              }
            } catch {}
          }),
        (i = t.removes) === null ||
          i === void 0 ||
          i.forEach(({ index: a }) => {
            try {
              if (Array.isArray(a)) {
                const { positions: c, index: l } = fl(a);
                pr(n.cssRules, c).deleteRule(l || 0);
              } else n == null || n.deleteRule(a);
            } catch {}
          }),
        t.replace)
      )
        try {
          (o = n.replace) === null || o === void 0 || o.call(n, t.replace);
        } catch {}
      if (t.replaceSync)
        try {
          (s = n.replaceSync) === null ||
            s === void 0 ||
            s.call(n, t.replaceSync);
        } catch {}
    }
    applyStyleDeclaration(t, n) {
      t.set &&
        pr(n.rules, t.index).style.setProperty(
          t.set.property,
          t.set.value,
          t.set.priority
        ),
        t.remove &&
          pr(n.rules, t.index).style.removeProperty(t.remove.property);
    }
    applyAdoptedStyleSheet(t) {
      var n;
      const r = this.mirror.getNode(t.id);
      if (!r) return;
      (n = t.styles) === null ||
        n === void 0 ||
        n.forEach((s) => {
          var a;
          let c = null,
            l = null;
          if (
            (Vr(r)
              ? (l =
                  ((a = r.ownerDocument) === null || a === void 0
                    ? void 0
                    : a.defaultView) || null)
              : r.nodeName === "#document" && (l = r.defaultView),
            l)
          )
            try {
              (c = new l.CSSStyleSheet()),
                this.styleMirror.add(c, s.styleId),
                this.applyStyleSheetRule(
                  { source: ke.StyleSheetRule, adds: s.rules },
                  c
                );
            } catch {}
        });
      let i = 0;
      const o = (s, a) => {
        const c = a
          .map((l) => this.styleMirror.getStyle(l))
          .filter((l) => l !== null);
        Vr(s)
          ? (s.shadowRoot.adoptedStyleSheets = c)
          : s.nodeName === "#document" && (s.adoptedStyleSheets = c),
          c.length !== a.length &&
            i < 10 &&
            (setTimeout(() => o(s, a), 0 + 100 * i), i++);
      };
      o(r, t.styleIds);
    }
    legacy_resolveMissingNode(t, n, r, i) {
      const { previousId: o, nextId: s } = i,
        a = o && t[o],
        c = s && t[s];
      if (a) {
        const { node: l, mutation: u } = a;
        n.insertBefore(l, r),
          delete t[u.node.id],
          delete this.legacy_missingNodeRetryMap[u.node.id],
          (u.previousId || u.nextId) &&
            this.legacy_resolveMissingNode(t, n, l, u);
      }
      if (c) {
        const { node: l, mutation: u } = c;
        n.insertBefore(l, r.nextSibling),
          delete t[u.node.id],
          delete this.legacy_missingNodeRetryMap[u.node.id],
          (u.previousId || u.nextId) &&
            this.legacy_resolveMissingNode(t, n, l, u);
      }
    }
    moveAndHover(t, n, r, i, o) {
      const s = this.mirror.getNode(r);
      if (!s) return this.debugNodeNotFound(o, r);
      const a = n0(s, this.iframe),
        c = t * a.absoluteScale + a.x,
        l = n * a.absoluteScale + a.y;
      (this.mouse.style.left = `${c}px`),
        (this.mouse.style.top = `${l}px`),
        i || this.drawMouseTail({ x: c, y: l }),
        this.hoverElements(s);
    }
    drawMouseTail(t) {
      if (!this.mouseTail) return;
      const {
          lineCap: n,
          lineWidth: r,
          strokeStyle: i,
          duration: o,
        } = this.config.mouseTail === !0
          ? ho
          : Object.assign({}, ho, this.config.mouseTail),
        s = () => {
          if (!this.mouseTail) return;
          const a = this.mouseTail.getContext("2d");
          a &&
            this.tailPositions.length &&
            (a.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height),
            a.beginPath(),
            (a.lineWidth = r),
            (a.lineCap = n),
            (a.strokeStyle = i),
            a.moveTo(this.tailPositions[0].x, this.tailPositions[0].y),
            this.tailPositions.forEach((c) => a.lineTo(c.x, c.y)),
            a.stroke());
        };
      this.tailPositions.push(t),
        s(),
        setTimeout(() => {
          (this.tailPositions = this.tailPositions.filter((a) => a !== t)), s();
        }, o / this.speedService.state.context.timer.speed);
    }
    hoverElements(t) {
      var n;
      (n = this.iframe.contentDocument) === null ||
        n === void 0 ||
        n.querySelectorAll(".\\:hover").forEach((i) => {
          i.classList.remove(":hover");
        });
      let r = t;
      for (; r; )
        r.classList && r.classList.add(":hover"), (r = r.parentElement);
    }
    isUserInteraction(t) {
      return (
        t.type === Me.IncrementalSnapshot &&
        t.data.source > ke.Mutation &&
        t.data.source <= ke.Input
      );
    }
    backToNormal() {
      (this.nextUserInteractionEvent = null),
        this.speedService.state.matches("normal") ||
          (this.speedService.send({ type: "BACK_TO_NORMAL" }),
          this.emitter.emit(Te.SkipEnd, {
            speed: this.speedService.state.context.normalSpeed,
          }));
    }
    warnNodeNotFound(t, n) {
      this.warn(`Node with id '${n}' not found. `, t);
    }
    warnCanvasMutationFailed(t, n) {
      this.warn("Has error on canvas update", n, "canvas mutation:", t);
    }
    debugNodeNotFound(t, n) {
      this.debug("[replayer]", `Node with id '${n}' not found. `, t);
    }
    warn(...t) {
      this.config.showWarning && console.warn("[replayer]", ...t);
    }
    debug(...t) {
      this.config.showDebug && console.log("[replayer]", ...t);
    }
  }
  function Tl(e) {
    let t = "";
    return (
      Object.keys(e).forEach((n) => {
        t += `${n}: ${e[n]};`;
      }),
      t
    );
  }
  function cr(e, t = 2) {
    let n = String(e);
    const r = Math.pow(10, t - 1);
    if (e < r) for (; String(r).length > n.length; ) n = `0${e}`;
    return n;
  }
  function Gr(e) {
    if (e <= 0) return "00:00";
    const t = Math.floor(e / 36e5);
    e %= 36e5;
    const n = Math.floor(e / 6e4);
    e %= 6e4;
    const r = Math.floor(e / 1e3);
    return t ? `${cr(t)}:${cr(n)}:${cr(r)}` : `${cr(n)}:${cr(r)}`;
  }
  function Al() {
    let e = !1;
    return (
      [
        "fullscreen",
        "webkitIsFullScreen",
        "mozFullScreen",
        "msFullscreenElement",
      ].forEach((t) => {
        t in document && (e = e || !!document[t]);
      }),
      e
    );
  }
  function Ol(e) {
    return {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Object]": "object",
    }[Object.prototype.toString.call(e)];
  }
  function rp(e) {
    return (
      e.type === Me.IncrementalSnapshot &&
      e.data.source > ke.Mutation &&
      e.data.source <= ke.Input
    );
  }
  function ip(e) {
    let t, n, r, i, o, s, a, c, l;
    return {
      c() {
        (t = ze("div")),
          (n = ze("input")),
          (r = mt()),
          (i = ze("label")),
          (o = mt()),
          (s = ze("span")),
          (a = An(e[3])),
          de(n, "type", "checkbox"),
          de(n, "id", e[2]),
          (n.disabled = e[1]),
          de(n, "class", "svelte-9brlez"),
          de(i, "for", e[2]),
          de(i, "class", "svelte-9brlez"),
          de(s, "class", "label svelte-9brlez"),
          de(t, "class", "switch svelte-9brlez"),
          Zn(t, "disabled", e[1]);
      },
      m(u, m) {
        rn(u, t, m),
          Ee(t, n),
          (n.checked = e[0]),
          Ee(t, r),
          Ee(t, i),
          Ee(t, o),
          Ee(t, s),
          Ee(s, a),
          c || ((l = vr(n, "change", e[4])), (c = !0));
      },
      p(u, [m]) {
        4 & m && de(n, "id", u[2]),
          2 & m && (n.disabled = u[1]),
          1 & m && (n.checked = u[0]),
          4 & m && de(i, "for", u[2]),
          8 & m && pi(a, u[3]),
          2 & m && Zn(t, "disabled", u[1]);
      },
      i: fi,
      o: fi,
      d(u) {
        u && jt(t), (c = !1), l();
      },
    };
  }
  function op(e, t, n) {
    let { disabled: r } = t,
      { checked: i } = t,
      { id: o } = t,
      { label: s } = t;
    return (
      (e.$$set = (a) => {
        "disabled" in a && n(1, (r = a.disabled)),
          "checked" in a && n(0, (i = a.checked)),
          "id" in a && n(2, (o = a.id)),
          "label" in a && n(3, (s = a.label));
      }),
      [
        i,
        r,
        o,
        s,
        function () {
          (i = this.checked), n(0, i);
        },
      ]
    );
  }
  class sp extends ca {
    constructor(t) {
      super(),
        la(this, t, op, ip, oa, { disabled: 1, checked: 0, id: 2, label: 3 });
    }
  }
  function Ml(e, t, n) {
    const r = e.slice();
    return (r[39] = t[n]), r;
  }
  function Nl(e, t, n) {
    const r = e.slice();
    return (r[42] = t[n]), r;
  }
  function Il(e, t, n) {
    const r = e.slice();
    return (r[45] = t[n]), r;
  }
  function Rl(e) {
    let t,
      n,
      r,
      i,
      o,
      s,
      a,
      c,
      l,
      u,
      m,
      h,
      v,
      f,
      d,
      y,
      w,
      p,
      g,
      b,
      _,
      S,
      k,
      E,
      T,
      D,
      C = Gr(e[6]) + "",
      A = Gr(e[8].totalTime) + "",
      M = e[14],
      L = [];
    for (let O = 0; O < M.length; O += 1) L[O] = Ll(Il(e, M, O));
    let H = e[9],
      j = [];
    for (let O = 0; O < H.length; O += 1) j[O] = Pl(Nl(e, H, O));
    function F(O, $) {
      return O[7] === "playing" ? lp : ap;
    }
    let K = F(e),
      Z = K(e),
      J = e[3],
      I = [];
    for (let O = 0; O < J.length; O += 1) I[O] = Bl(Ml(e, J, O));
    function B(O) {
      e[30](O);
    }
    let P = {
      id: "skip",
      disabled: e[10] === "skipping",
      label: "skip inactive",
    };
    return (
      e[0] !== void 0 && (P.checked = e[0]),
      (b = new sp({ props: P })),
      gn.push(() =>
        (function (O, $, q) {
          const ue = O.$$.props[$];
          ue !== void 0 && ((O.$$.bound[ue] = q), q(O.$$.ctx[ue]));
        })(b, "checked", B)
      ),
      {
        c() {
          (t = ze("div")),
            (n = ze("div")),
            (r = ze("span")),
            (i = An(C)),
            (o = mt()),
            (s = ze("div")),
            (a = ze("div")),
            (c = mt());
          for (let O = 0; O < L.length; O += 1) L[O].c();
          l = mt();
          for (let O = 0; O < j.length; O += 1) j[O].c();
          (u = mt()),
            (m = ze("div")),
            (h = mt()),
            (v = ze("span")),
            (f = An(A)),
            (d = mt()),
            (y = ze("div")),
            (w = ze("button")),
            Z.c(),
            (p = mt());
          for (let O = 0; O < I.length; O += 1) I[O].c();
          (g = mt()),
            Ju(b.$$.fragment),
            (S = mt()),
            (k = ze("button")),
            (k.innerHTML = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M916 380c-26.4 0-48-21.6-48-48L868 223.2 613.6 477.6c-18.4
            18.4-48.8 18.4-68 0-18.4-18.4-18.4-48.8 0-68L800 156 692 156c-26.4
            0-48-21.6-48-48 0-26.4 21.6-48 48-48l224 0c26.4 0 48 21.6 48 48l0
            224C964 358.4 942.4 380 916 380zM231.2 860l108.8 0c26.4 0 48 21.6 48
            48s-21.6 48-48 48l-224 0c-26.4 0-48-21.6-48-48l0-224c0-26.4 21.6-48
            48-48 26.4 0 48 21.6 48 48L164 792l253.6-253.6c18.4-18.4 48.8-18.4
            68 0 18.4 18.4 18.4 48.8 0 68L231.2 860z" p-id="1286"></path></svg>`),
            de(r, "class", "rr-timeline__time svelte-19ke1iv"),
            de(a, "class", "rr-progress__step svelte-19ke1iv"),
            $e(a, "width", e[13]),
            de(m, "class", "rr-progress__handler svelte-19ke1iv"),
            $e(m, "left", e[13]),
            de(s, "class", "rr-progress svelte-19ke1iv"),
            Zn(s, "disabled", e[10] === "skipping"),
            de(v, "class", "rr-timeline__time svelte-19ke1iv"),
            de(n, "class", "rr-timeline svelte-19ke1iv"),
            de(w, "class", "svelte-19ke1iv"),
            de(k, "class", "svelte-19ke1iv"),
            de(y, "class", "rr-controller__btns svelte-19ke1iv"),
            de(t, "class", "rr-controller svelte-19ke1iv");
        },
        m(O, $) {
          rn(O, t, $),
            Ee(t, n),
            Ee(n, r),
            Ee(r, i),
            Ee(n, o),
            Ee(n, s),
            Ee(s, a),
            e[27](a),
            Ee(s, c);
          for (let q = 0; q < L.length; q += 1) L[q].m(s, null);
          Ee(s, l);
          for (let q = 0; q < j.length; q += 1) j[q].m(s, null);
          Ee(s, u),
            Ee(s, m),
            e[28](s),
            Ee(n, h),
            Ee(n, v),
            Ee(v, f),
            Ee(t, d),
            Ee(t, y),
            Ee(y, w),
            Z.m(w, null),
            Ee(y, p);
          for (let q = 0; q < I.length; q += 1) I[q].m(y, null);
          Ee(y, g),
            sa(b, y, null),
            Ee(y, S),
            Ee(y, k),
            (E = !0),
            T ||
              ((D = [
                vr(s, "click", e[16]),
                vr(w, "click", e[4]),
                vr(k, "click", e[31]),
              ]),
              (T = !0));
        },
        p(O, $) {
          if (
            ((!E || 64 & $[0]) && C !== (C = Gr(O[6]) + "") && pi(i, C),
            (!E || 8192 & $[0]) && $e(a, "width", O[13]),
            16384 & $[0])
          ) {
            let U;
            for (M = O[14], U = 0; U < M.length; U += 1) {
              const ye = Il(O, M, U);
              L[U] ? L[U].p(ye, $) : ((L[U] = Ll(ye)), L[U].c(), L[U].m(s, l));
            }
            for (; U < L.length; U += 1) L[U].d(1);
            L.length = M.length;
          }
          if (512 & $[0]) {
            let U;
            for (H = O[9], U = 0; U < H.length; U += 1) {
              const ye = Nl(O, H, U);
              j[U] ? j[U].p(ye, $) : ((j[U] = Pl(ye)), j[U].c(), j[U].m(s, u));
            }
            for (; U < j.length; U += 1) j[U].d(1);
            j.length = H.length;
          }
          if (
            ((!E || 8192 & $[0]) && $e(m, "left", O[13]),
            1024 & $[0] && Zn(s, "disabled", O[10] === "skipping"),
            (!E || 256 & $[0]) &&
              A !== (A = Gr(O[8].totalTime) + "") &&
              pi(f, A),
            K !== (K = F(O)) &&
              (Z.d(1), (Z = K(O)), Z && (Z.c(), Z.m(w, null))),
            1066 & $[0])
          ) {
            let U;
            for (J = O[3], U = 0; U < J.length; U += 1) {
              const ye = Ml(O, J, U);
              I[U] ? I[U].p(ye, $) : ((I[U] = Bl(ye)), I[U].c(), I[U].m(y, g));
            }
            for (; U < I.length; U += 1) I[U].d(1);
            I.length = J.length;
          }
          const q = {};
          var ue;
          1024 & $[0] && (q.disabled = O[10] === "skipping"),
            !_ &&
              1 & $[0] &&
              ((_ = !0),
              (q.checked = O[0]),
              (ue = () => (_ = !1)),
              ds.push(ue)),
            b.$set(q);
        },
        i(O) {
          E || (Jt(b.$$.fragment, O), (E = !0));
        },
        o(O) {
          Kn(b.$$.fragment, O), (E = !1);
        },
        d(O) {
          O && jt(t),
            e[27](null),
            oo(L, O),
            oo(j, O),
            e[28](null),
            Z.d(),
            oo(I, O),
            aa(b),
            (T = !1),
            er(D);
        },
      }
    );
  }
  function Ll(e) {
    let t, n;
    return {
      c() {
        (t = ze("div")),
          de(t, "title", (n = e[45].name)),
          $e(t, "width", e[45].width),
          $e(t, "height", "4px"),
          $e(t, "position", "absolute"),
          $e(t, "background", e[45].background),
          $e(t, "left", e[45].position);
      },
      m(r, i) {
        rn(r, t, i);
      },
      p(r, i) {
        16384 & i[0] && n !== (n = r[45].name) && de(t, "title", n),
          16384 & i[0] && $e(t, "width", r[45].width),
          16384 & i[0] && $e(t, "background", r[45].background),
          16384 & i[0] && $e(t, "left", r[45].position);
      },
      d(r) {
        r && jt(t);
      },
    };
  }
  function Pl(e) {
    let t, n;
    return {
      c() {
        (t = ze("div")),
          de(t, "title", (n = e[42].name)),
          $e(t, "width", "10px"),
          $e(t, "height", "5px"),
          $e(t, "position", "absolute"),
          $e(t, "top", "2px"),
          $e(t, "transform", "translate(-50%, -50%)"),
          $e(t, "background", e[42].background),
          $e(t, "left", e[42].position);
      },
      m(r, i) {
        rn(r, t, i);
      },
      p(r, i) {
        512 & i[0] && n !== (n = r[42].name) && de(t, "title", n),
          512 & i[0] && $e(t, "background", r[42].background),
          512 & i[0] && $e(t, "left", r[42].position);
      },
      d(r) {
        r && jt(t);
      },
    };
  }
  function ap(e) {
    let t, n;
    return {
      c() {
        (t = hi("svg")),
          (n = hi("path")),
          de(
            n,
            "d",
            `M170.65984 896l0-768 640 384zM644.66944
              512l-388.66944-233.32864 0 466.65728z`
          ),
          de(t, "class", "icon"),
          de(t, "viewBox", "0 0 1024 1024"),
          de(t, "version", "1.1"),
          de(t, "xmlns", "http://www.w3.org/2000/svg"),
          de(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
          de(t, "width", "16"),
          de(t, "height", "16");
      },
      m(r, i) {
        rn(r, t, i), Ee(t, n);
      },
      d(r) {
        r && jt(t);
      },
    };
  }
  function lp(e) {
    let t, n;
    return {
      c() {
        (t = hi("svg")),
          (n = hi("path")),
          de(
            n,
            "d",
            `M682.65984 128q53.00224 0 90.50112 37.49888t37.49888 90.50112l0
              512q0 53.00224-37.49888 90.50112t-90.50112
              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224
              37.49888-90.50112t90.50112-37.49888zM341.34016 128q53.00224 0
              90.50112 37.49888t37.49888 90.50112l0 512q0 53.00224-37.49888
              90.50112t-90.50112
              37.49888-90.50112-37.49888-37.49888-90.50112l0-512q0-53.00224
              37.49888-90.50112t90.50112-37.49888zM341.34016 213.34016q-17.67424
              0-30.16704 12.4928t-12.4928 30.16704l0 512q0 17.67424 12.4928
              30.16704t30.16704 12.4928 30.16704-12.4928
              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM682.65984
              213.34016q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 512q0
              17.67424 12.4928 30.16704t30.16704 12.4928 30.16704-12.4928
              12.4928-30.16704l0-512q0-17.67424-12.4928-30.16704t-30.16704-12.4928z`
          ),
          de(t, "class", "icon"),
          de(t, "viewBox", "0 0 1024 1024"),
          de(t, "version", "1.1"),
          de(t, "xmlns", "http://www.w3.org/2000/svg"),
          de(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
          de(t, "width", "16"),
          de(t, "height", "16");
      },
      m(r, i) {
        rn(r, t, i), Ee(t, n);
      },
      d(r) {
        r && jt(t);
      },
    };
  }
  function Bl(e) {
    let t,
      n,
      r,
      i,
      o,
      s,
      a = e[39] + "";
    function c() {
      return e[29](e[39]);
    }
    return {
      c() {
        (t = ze("button")),
          (n = An(a)),
          (r = An("x")),
          (t.disabled = i = e[10] === "skipping"),
          de(t, "class", "svelte-19ke1iv"),
          Zn(t, "active", e[39] === e[1] && e[10] !== "skipping");
      },
      m(l, u) {
        rn(l, t, u),
          Ee(t, n),
          Ee(t, r),
          o || ((s = vr(t, "click", c)), (o = !0));
      },
      p(l, u) {
        (e = l),
          8 & u[0] && a !== (a = e[39] + "") && pi(n, a),
          1024 & u[0] && i !== (i = e[10] === "skipping") && (t.disabled = i),
          1034 & u[0] &&
            Zn(t, "active", e[39] === e[1] && e[10] !== "skipping");
      },
      d(l) {
        l && jt(t), (o = !1), s();
      },
    };
  }
  function cp(e) {
    let t,
      n,
      r = e[2] && Rl(e);
    return {
      c() {
        r && r.c(), (t = An(""));
      },
      m(i, o) {
        r && r.m(i, o), rn(i, t, o), (n = !0);
      },
      p(i, o) {
        i[2]
          ? r
            ? (r.p(i, o), 4 & o[0] && Jt(r, 1))
            : ((r = Rl(i)), r.c(), Jt(r, 1), r.m(t.parentNode, t))
          : r &&
            (Ku(),
            Kn(r, 1, 1, () => {
              r = null;
            }),
            Xu());
      },
      i(i) {
        n || (Jt(r), (n = !0));
      },
      o(i) {
        Kn(r), (n = !1);
      },
      d(i) {
        r && r.d(i), i && jt(t);
      },
    };
  }
  function Fl(e, t, n) {
    return (100 - ((t - n) / (t - e)) * 100).toFixed(2);
  }
  function up(e, t, n) {
    const r = ch();
    let i,
      o,
      s,
      a,
      c,
      l,
      u,
      m,
      h,
      v,
      { replayer: f } = t,
      { showController: d } = t,
      { autoPlay: y } = t,
      { skipInactive: w } = t,
      { speedOption: p } = t,
      { speed: g = p.length ? p[0] : 1 } = t,
      { tags: b = {} } = t,
      { inactiveColor: _ } = t,
      S = 0,
      k = null,
      E = !1,
      T = null;
    const D = () => {
        k && (cancelAnimationFrame(k), (k = null));
      },
      C = () => {
        i === "paused" && (c ? (f.play(), (c = !1)) : f.play(S));
      },
      A = () => {
        i === "playing" && (f.pause(), (E = !1));
      },
      M = (F, K) => {
        n(6, (S = F)),
          (E = !1),
          (typeof K == "boolean" ? K : i === "playing")
            ? f.play(F)
            : f.pause(F);
      },
      L = (F, K, Z = !1, J) => {
        (T = Z ? { start: F, end: K } : null),
          n(6, (S = F)),
          (E = K),
          (l = J),
          f.play(F);
      },
      H = (F) => {
        let K = i === "playing";
        n(1, (g = F)),
          K && f.pause(),
          f.setConfig({ speed: g }),
          K && f.play(S);
      };
    var j;
    return (
      qu(() => {
        n(7, (i = f.service.state.value)),
          n(10, (o = f.speedService.state.value)),
          f.on("state-change", (F) => {
            const { player: K, speed: Z } = F;
            if (K != null && K.value && i !== K.value)
              switch ((n(7, (i = K.value)), i)) {
                case "playing":
                  D(),
                    (k = requestAnimationFrame(function J() {
                      n(6, (S = f.getCurrentTime())),
                        E &&
                          S >= E &&
                          (T
                            ? L(T.start, T.end, !0, void 0)
                            : (f.pause(), l && (l(), (l = null)))),
                        S < u.totalTime && (k = requestAnimationFrame(J));
                    }));
                  break;
                case "paused":
                  D();
              }
            Z != null && Z.value && o !== Z.value && n(10, (o = Z.value));
          }),
          f.on("finish", () => {
            (c = !0), l && (l(), (l = null));
          }),
          y && f.play();
      }),
      (j = () => {
        w !== f.config.skipInactive && f.setConfig({ skipInactive: w });
      }),
      Ni().$$.after_update.push(j),
      Gu(() => {
        f.pause(), D();
      }),
      (e.$$set = (F) => {
        "replayer" in F && n(17, (f = F.replayer)),
          "showController" in F && n(2, (d = F.showController)),
          "autoPlay" in F && n(18, (y = F.autoPlay)),
          "skipInactive" in F && n(0, (w = F.skipInactive)),
          "speedOption" in F && n(3, (p = F.speedOption)),
          "speed" in F && n(1, (g = F.speed)),
          "tags" in F && n(19, (b = F.tags)),
          "inactiveColor" in F && n(20, (_ = F.inactiveColor));
      }),
      (e.$$.update = () => {
        if (
          (64 & e.$$.dirty[0] && r("ui-update-current-time", { payload: S }),
          128 & e.$$.dirty[0] && r("ui-update-player-state", { payload: i }),
          131072 & e.$$.dirty[0] && n(8, (u = f.getMetaData())),
          320 & e.$$.dirty[0])
        ) {
          const F = Math.min(1, S / u.totalTime);
          n(13, (m = 100 * F + "%")), r("ui-update-progress", { payload: F });
        }
        655360 & e.$$.dirty[0] &&
          n(
            9,
            (h = (() => {
              const { context: F } = f.service.state,
                K = F.events.length,
                Z = F.events[0].timestamp,
                J = F.events[K - 1].timestamp,
                I = [];
              return (
                F.events.forEach((B) => {
                  if (B.type === Me.Custom) {
                    const P = {
                      name: B.data.tag,
                      background: b[B.data.tag] || "rgb(73, 80, 246)",
                      position: `${Fl(Z, J, B.timestamp)}%`,
                    };
                    I.push(P);
                  }
                }),
                I
              );
            })())
          ),
          1179648 & e.$$.dirty[0] &&
            n(
              14,
              (v = (() => {
                try {
                  const { context: F } = f.service.state,
                    K = F.events.length,
                    Z = F.events[0].timestamp,
                    J = F.events[K - 1].timestamp,
                    I = (function (P) {
                      const O = [];
                      let $ = P[0].timestamp;
                      for (const q of P)
                        rp(q) &&
                          (q.timestamp - $ > 1e4 && O.push([$, q.timestamp]),
                          ($ = q.timestamp));
                      return O;
                    })(F.events),
                    B = (P, O, $, q) => (((q - $) / (O - P)) * 100).toFixed(2);
                  return I.map((P) => ({
                    name: "inactive period",
                    background: _,
                    position: `${Fl(Z, J, P[0])}%`,
                    width: `${B(Z, J, P[0], P[1])}%`,
                  }));
                } catch {
                  return [];
                }
              })())
            );
      }),
      [
        w,
        g,
        d,
        p,
        () => {
          switch (i) {
            case "playing":
              A();
              break;
            case "paused":
              C();
          }
        },
        H,
        S,
        i,
        u,
        h,
        o,
        s,
        a,
        m,
        v,
        r,
        (F) => {
          if (o === "skipping") return;
          const K = s.getBoundingClientRect();
          let Z = (F.clientX - K.left) / K.width;
          Z < 0 ? (Z = 0) : Z > 1 && (Z = 1);
          const J = u.totalTime * Z;
          (c = !1), M(J);
        },
        f,
        y,
        b,
        _,
        C,
        A,
        M,
        L,
        () => {
          n(0, (w = !w));
        },
        () =>
          Promise.resolve().then(() => {
            n(8, (u = f.getMetaData()));
          }),
        function (F) {
          gn[F ? "unshift" : "push"](() => {
            (a = F), n(12, a);
          });
        },
        function (F) {
          gn[F ? "unshift" : "push"](() => {
            (s = F), n(11, s);
          });
        },
        (F) => H(F),
        function (F) {
          (w = F), n(0, w);
        },
        () => r("fullscreen"),
      ]
    );
  }
  class dp extends ca {
    constructor(t) {
      super(),
        la(
          this,
          t,
          up,
          cp,
          oa,
          {
            replayer: 17,
            showController: 2,
            autoPlay: 18,
            skipInactive: 0,
            speedOption: 3,
            speed: 1,
            tags: 19,
            inactiveColor: 20,
            toggle: 4,
            play: 21,
            pause: 22,
            goto: 23,
            playRange: 24,
            setSpeed: 5,
            toggleSkipInactive: 25,
            triggerUpdateMeta: 26,
          },
          null,
          [-1, -1]
        );
    }
    get toggle() {
      return this.$$.ctx[4];
    }
    get play() {
      return this.$$.ctx[21];
    }
    get pause() {
      return this.$$.ctx[22];
    }
    get goto() {
      return this.$$.ctx[23];
    }
    get playRange() {
      return this.$$.ctx[24];
    }
    get setSpeed() {
      return this.$$.ctx[5];
    }
    get toggleSkipInactive() {
      return this.$$.ctx[25];
    }
    get triggerUpdateMeta() {
      return this.$$.ctx[26];
    }
  }
  function Yl(e) {
    let t,
      n,
      r = {
        replayer: e[7],
        showController: e[3],
        autoPlay: e[1],
        speedOption: e[2],
        skipInactive: e[0],
        tags: e[4],
        inactiveColor: e[5],
      };
    return (
      (t = new dp({ props: r })),
      e[32](t),
      t.$on("fullscreen", e[33]),
      {
        c() {
          Ju(t.$$.fragment);
        },
        m(i, o) {
          sa(t, i, o), (n = !0);
        },
        p(i, o) {
          const s = {};
          128 & o[0] && (s.replayer = i[7]),
            8 & o[0] && (s.showController = i[3]),
            2 & o[0] && (s.autoPlay = i[1]),
            4 & o[0] && (s.speedOption = i[2]),
            1 & o[0] && (s.skipInactive = i[0]),
            16 & o[0] && (s.tags = i[4]),
            32 & o[0] && (s.inactiveColor = i[5]),
            t.$set(s);
        },
        i(i) {
          n || (Jt(t.$$.fragment, i), (n = !0));
        },
        o(i) {
          Kn(t.$$.fragment, i), (n = !1);
        },
        d(i) {
          e[32](null), aa(t, i);
        },
      }
    );
  }
  function fp(e) {
    let t,
      n,
      r,
      i,
      o = e[7] && Yl(e);
    return {
      c() {
        (t = ze("div")),
          (n = ze("div")),
          (r = mt()),
          o && o.c(),
          de(n, "class", "rr-player__frame"),
          de(n, "style", e[11]),
          de(t, "class", "rr-player"),
          de(t, "style", e[12]);
      },
      m(s, a) {
        rn(s, t, a),
          Ee(t, n),
          e[31](n),
          Ee(t, r),
          o && o.m(t, null),
          e[34](t),
          (i = !0);
      },
      p(s, a) {
        (!i || 2048 & a[0]) && de(n, "style", s[11]),
          s[7]
            ? o
              ? (o.p(s, a), 128 & a[0] && Jt(o, 1))
              : ((o = Yl(s)), o.c(), Jt(o, 1), o.m(t, null))
            : o &&
              (Ku(),
              Kn(o, 1, 1, () => {
                o = null;
              }),
              Xu()),
          (!i || 4096 & a[0]) && de(t, "style", s[12]);
      },
      i(s) {
        i || (Jt(o), (i = !0));
      },
      o(s) {
        Kn(o), (i = !1);
      },
      d(s) {
        s && jt(t), e[31](null), o && o.d(), e[34](null);
      },
    };
  }
  function hp(e, t, n) {
    let r,
      { width: i = 1024 } = t,
      { height: o = 576 } = t,
      { maxScale: s = 1 } = t,
      { events: a = [] } = t,
      { skipInactive: c = !0 } = t,
      { autoPlay: l = !0 } = t,
      { speedOption: u = [1, 2, 4, 8] } = t,
      { speed: m = 1 } = t,
      { showController: h = !0 } = t,
      { tags: v = {} } = t,
      { inactiveColor: f = "#D4D4D4" } = t,
      d,
      y,
      w,
      p,
      g,
      b,
      _ = i,
      S = o;
    const k = (T, D) => {
        const C = [i / D.width, o / D.height];
        s && C.push(s),
          (T.style.transform = `scale(${Math.min(...C)})translate(-50%, -50%)`);
      },
      E = () => {
        var T;
        d &&
          (Al()
            ? document.exitFullscreen
              ? document.exitFullscreen()
              : document.mozExitFullscreen
              ? document.mozExitFullscreen()
              : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : document.msExitFullscreen && document.msExitFullscreen()
            : (T = d).requestFullscreen
            ? T.requestFullscreen()
            : T.mozRequestFullScreen
            ? T.mozRequestFullScreen()
            : T.webkitRequestFullscreen
            ? T.webkitRequestFullscreen()
            : T.msRequestFullscreen && T.msRequestFullscreen());
      };
    return (
      qu(() => {
        if (u !== void 0 && Ol(u) !== "array")
          throw new Error("speedOption must be array");
        if (
          (u.forEach((D) => {
            if (Ol(D) !== "number")
              throw new Error("item of speedOption must be number");
          }),
          u.indexOf(m) < 0)
        )
          throw new Error(`speed must be one of speedOption,
        current config:
        {
          ...
          speed: ${m},
          speedOption: [${u.toString()}]
          ...
        }
        `);
        var T;
        n(
          7,
          (r = new np(a, Object.assign({ speed: m, root: y, unpackFn: qh }, t)))
        ),
          r.on("resize", (D) => {
            k(r.wrapper, D);
          }),
          (T = () => {
            Al()
              ? setTimeout(() => {
                  (_ = i),
                    (S = o),
                    n(13, (i = d.offsetWidth)),
                    n(14, (o = d.offsetHeight - (h ? 80 : 0))),
                    k(r.wrapper, {
                      width: r.iframe.offsetWidth,
                      height: r.iframe.offsetHeight,
                    });
                }, 0)
              : (n(13, (i = _)),
                n(14, (o = S)),
                k(r.wrapper, {
                  width: r.iframe.offsetWidth,
                  height: r.iframe.offsetHeight,
                }));
          }),
          document.addEventListener("fullscreenchange", T),
          document.addEventListener("webkitfullscreenchange", T),
          document.addEventListener("mozfullscreenchange", T),
          document.addEventListener("MSFullscreenChange", T),
          (w = () => {
            document.removeEventListener("fullscreenchange", T),
              document.removeEventListener("webkitfullscreenchange", T),
              document.removeEventListener("mozfullscreenchange", T),
              document.removeEventListener("MSFullscreenChange", T);
          });
      }),
      Gu(() => {
        w && w();
      }),
      (e.$$set = (T) => {
        n(39, (t = il(il({}, t), sl(T)))),
          "width" in T && n(13, (i = T.width)),
          "height" in T && n(14, (o = T.height)),
          "maxScale" in T && n(15, (s = T.maxScale)),
          "events" in T && n(16, (a = T.events)),
          "skipInactive" in T && n(0, (c = T.skipInactive)),
          "autoPlay" in T && n(1, (l = T.autoPlay)),
          "speedOption" in T && n(2, (u = T.speedOption)),
          "speed" in T && n(17, (m = T.speed)),
          "showController" in T && n(3, (h = T.showController)),
          "tags" in T && n(4, (v = T.tags)),
          "inactiveColor" in T && n(5, (f = T.inactiveColor));
      }),
      (e.$$.update = () => {
        24576 & e.$$.dirty[0] &&
          n(11, (g = Tl({ width: `${i}px`, height: `${o}px` }))),
          24584 & e.$$.dirty[0] &&
            n(
              12,
              (b = Tl({ width: `${i}px`, height: `${o + (h ? 80 : 0)}px` }))
            );
      }),
      (t = sl(t)),
      [
        c,
        l,
        u,
        h,
        v,
        f,
        E,
        r,
        d,
        y,
        p,
        g,
        b,
        i,
        o,
        s,
        a,
        m,
        () => r.getMirror(),
        () => {
          k(r.wrapper, {
            width: r.iframe.offsetWidth,
            height: r.iframe.offsetHeight,
          });
        },
        (T, D) => {
          switch ((r.on(T, D), T)) {
            case "ui-update-current-time":
            case "ui-update-progress":
            case "ui-update-player-state":
              p.$on(T, ({ detail: C }) => D(C));
          }
        },
        (T) => {
          r.addEvent(T), p.triggerUpdateMeta();
        },
        () => r.getMetaData(),
        () => r,
        () => {
          p.toggle();
        },
        (T) => {
          p.setSpeed(T);
        },
        () => {
          p.toggleSkipInactive();
        },
        () => {
          p.play();
        },
        () => {
          p.pause();
        },
        (T, D) => {
          p.goto(T, D);
        },
        (T, D, C = !1, A) => {
          p.playRange(T, D, C, A);
        },
        function (T) {
          gn[T ? "unshift" : "push"](() => {
            (y = T), n(9, y);
          });
        },
        function (T) {
          gn[T ? "unshift" : "push"](() => {
            (p = T), n(10, p);
          });
        },
        () => E(),
        function (T) {
          gn[T ? "unshift" : "push"](() => {
            (d = T), n(8, d);
          });
        },
      ]
    );
  }
  class pp extends ca {
    constructor(t) {
      super(),
        la(
          this,
          t,
          hp,
          fp,
          oa,
          {
            width: 13,
            height: 14,
            maxScale: 15,
            events: 16,
            skipInactive: 0,
            autoPlay: 1,
            speedOption: 2,
            speed: 17,
            showController: 3,
            tags: 4,
            inactiveColor: 5,
            getMirror: 18,
            triggerResize: 19,
            toggleFullscreen: 6,
            addEventListener: 20,
            addEvent: 21,
            getMetaData: 22,
            getReplayer: 23,
            toggle: 24,
            setSpeed: 25,
            toggleSkipInactive: 26,
            play: 27,
            pause: 28,
            goto: 29,
            playRange: 30,
          },
          null,
          [-1, -1]
        );
    }
    get getMirror() {
      return this.$$.ctx[18];
    }
    get triggerResize() {
      return this.$$.ctx[19];
    }
    get toggleFullscreen() {
      return this.$$.ctx[6];
    }
    get addEventListener() {
      return this.$$.ctx[20];
    }
    get addEvent() {
      return this.$$.ctx[21];
    }
    get getMetaData() {
      return this.$$.ctx[22];
    }
    get getReplayer() {
      return this.$$.ctx[23];
    }
    get toggle() {
      return this.$$.ctx[24];
    }
    get setSpeed() {
      return this.$$.ctx[25];
    }
    get toggleSkipInactive() {
      return this.$$.ctx[26];
    }
    get play() {
      return this.$$.ctx[27];
    }
    get pause() {
      return this.$$.ctx[28];
    }
    get goto() {
      return this.$$.ctx[29];
    }
    get playRange() {
      return this.$$.ctx[30];
    }
  }
  class mp extends pp {
    constructor(t) {
      super({ target: t.target, props: t.data || t.props });
    }
  }
  function gp(e) {
    let t = [[]];
    fetch(e)
      .then((n) => n.text())
      .then((n) => {
        t = JSON.parse(n);
        const r = t.length;
        let i = t[r - 1];
        try {
          i = t[r - 2].concat(t[r - 1]);
        } catch {
          i = t[r - 1];
        }
        const o = ce.getNode("#session-replay"),
          s = o == null ? void 0 : o.getBoundingClientRect();
        new mp({
          target: ce.getNode("#session-replay"),
          props: {
            events: i,
            unpackFn: ah,
            inactiveColor: "#f97316",
            width: ((s == null ? void 0 : s.width) || 1024) - 20,
            height: ((s == null ? void 0 : s.height) || 576) - 20,
          },
        });
      });
  }
  function jl(e) {
    const t = document.createElement("div");
    t.classList.add(
      "fixed",
      "inset-0",
      "flex",
      "items-center",
      "justify-center",
      "bg-opacity-50",
      "bg-gray-900",
      "cursor-pointer"
    ),
      (t.style.zIndex = "1000");
    const n = document.createElement("div");
    n.classList.add(
      "w-4/5",
      "h-4/5",
      "mx-12",
      "overflow-y-auto",
      "max-lg:w-4/5",
      "bg-white",
      "rounded-lg",
      "p-6",
      "relative",
      "shadow-md"
    ),
      (n.innerHTML = e);
    const r = document.createElement("span");
    r.classList.add(
      "absolute",
      "top-2",
      "right-2",
      "text-gray-600",
      "cursor-pointer",
      "hover:text-gray-800"
    ),
      (r.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path  stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`),
      r.addEventListener("click", () => {
        i();
      }),
      n.appendChild(r),
      t.appendChild(n),
      t.addEventListener("click", (o) => {
        o.target === t && i();
      });
    function i() {
      t.removeEventListener("click", i), (t.style.display = "none"), t.remove();
    }
    return t;
  }
  var E0 = { exports: {} };
  function vp(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var po = { exports: {} };
  const yp = {},
    xp = Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: yp },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    bp = Wf(xp);
  var $l;
  function _e() {
    return (
      $l ||
        (($l = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r();
          })(ge, function () {
            var n =
              n ||
              (function (r, i) {
                var o;
                if (
                  (typeof window < "u" && window.crypto && (o = window.crypto),
                  typeof self < "u" && self.crypto && (o = self.crypto),
                  typeof globalThis < "u" &&
                    globalThis.crypto &&
                    (o = globalThis.crypto),
                  !o &&
                    typeof window < "u" &&
                    window.msCrypto &&
                    (o = window.msCrypto),
                  !o && typeof ge < "u" && ge.crypto && (o = ge.crypto),
                  !o && typeof vp == "function")
                )
                  try {
                    o = bp;
                  } catch {}
                var s = function () {
                    if (o) {
                      if (typeof o.getRandomValues == "function")
                        try {
                          return o.getRandomValues(new Uint32Array(1))[0];
                        } catch {}
                      if (typeof o.randomBytes == "function")
                        try {
                          return o.randomBytes(4).readInt32LE();
                        } catch {}
                    }
                    throw new Error(
                      "Native crypto module could not be used to get secure random number."
                    );
                  },
                  a =
                    Object.create ||
                    (function () {
                      function p() {}
                      return function (g) {
                        var b;
                        return (
                          (p.prototype = g),
                          (b = new p()),
                          (p.prototype = null),
                          b
                        );
                      };
                    })(),
                  c = {},
                  l = (c.lib = {}),
                  u = (l.Base = (function () {
                    return {
                      extend: function (p) {
                        var g = a(this);
                        return (
                          p && g.mixIn(p),
                          (!g.hasOwnProperty("init") || this.init === g.init) &&
                            (g.init = function () {
                              g.$super.init.apply(this, arguments);
                            }),
                          (g.init.prototype = g),
                          (g.$super = this),
                          g
                        );
                      },
                      create: function () {
                        var p = this.extend();
                        return p.init.apply(p, arguments), p;
                      },
                      init: function () {},
                      mixIn: function (p) {
                        for (var g in p)
                          p.hasOwnProperty(g) && (this[g] = p[g]);
                        p.hasOwnProperty("toString") &&
                          (this.toString = p.toString);
                      },
                      clone: function () {
                        return this.init.prototype.extend(this);
                      },
                    };
                  })()),
                  m = (l.WordArray = u.extend({
                    init: function (p, g) {
                      (p = this.words = p || []),
                        g != i
                          ? (this.sigBytes = g)
                          : (this.sigBytes = p.length * 4);
                    },
                    toString: function (p) {
                      return (p || v).stringify(this);
                    },
                    concat: function (p) {
                      var g = this.words,
                        b = p.words,
                        _ = this.sigBytes,
                        S = p.sigBytes;
                      if ((this.clamp(), _ % 4))
                        for (var k = 0; k < S; k++) {
                          var E = (b[k >>> 2] >>> (24 - (k % 4) * 8)) & 255;
                          g[(_ + k) >>> 2] |= E << (24 - ((_ + k) % 4) * 8);
                        }
                      else
                        for (var T = 0; T < S; T += 4)
                          g[(_ + T) >>> 2] = b[T >>> 2];
                      return (this.sigBytes += S), this;
                    },
                    clamp: function () {
                      var p = this.words,
                        g = this.sigBytes;
                      (p[g >>> 2] &= 4294967295 << (32 - (g % 4) * 8)),
                        (p.length = r.ceil(g / 4));
                    },
                    clone: function () {
                      var p = u.clone.call(this);
                      return (p.words = this.words.slice(0)), p;
                    },
                    random: function (p) {
                      for (var g = [], b = 0; b < p; b += 4) g.push(s());
                      return new m.init(g, p);
                    },
                  })),
                  h = (c.enc = {}),
                  v = (h.Hex = {
                    stringify: function (p) {
                      for (
                        var g = p.words, b = p.sigBytes, _ = [], S = 0;
                        S < b;
                        S++
                      ) {
                        var k = (g[S >>> 2] >>> (24 - (S % 4) * 8)) & 255;
                        _.push((k >>> 4).toString(16)),
                          _.push((k & 15).toString(16));
                      }
                      return _.join("");
                    },
                    parse: function (p) {
                      for (var g = p.length, b = [], _ = 0; _ < g; _ += 2)
                        b[_ >>> 3] |=
                          parseInt(p.substr(_, 2), 16) << (24 - (_ % 8) * 4);
                      return new m.init(b, g / 2);
                    },
                  }),
                  f = (h.Latin1 = {
                    stringify: function (p) {
                      for (
                        var g = p.words, b = p.sigBytes, _ = [], S = 0;
                        S < b;
                        S++
                      ) {
                        var k = (g[S >>> 2] >>> (24 - (S % 4) * 8)) & 255;
                        _.push(String.fromCharCode(k));
                      }
                      return _.join("");
                    },
                    parse: function (p) {
                      for (var g = p.length, b = [], _ = 0; _ < g; _++)
                        b[_ >>> 2] |=
                          (p.charCodeAt(_) & 255) << (24 - (_ % 4) * 8);
                      return new m.init(b, g);
                    },
                  }),
                  d = (h.Utf8 = {
                    stringify: function (p) {
                      try {
                        return decodeURIComponent(escape(f.stringify(p)));
                      } catch {
                        throw new Error("Malformed UTF-8 data");
                      }
                    },
                    parse: function (p) {
                      return f.parse(unescape(encodeURIComponent(p)));
                    },
                  }),
                  y = (l.BufferedBlockAlgorithm = u.extend({
                    reset: function () {
                      (this._data = new m.init()), (this._nDataBytes = 0);
                    },
                    _append: function (p) {
                      typeof p == "string" && (p = d.parse(p)),
                        this._data.concat(p),
                        (this._nDataBytes += p.sigBytes);
                    },
                    _process: function (p) {
                      var g,
                        b = this._data,
                        _ = b.words,
                        S = b.sigBytes,
                        k = this.blockSize,
                        E = k * 4,
                        T = S / E;
                      p
                        ? (T = r.ceil(T))
                        : (T = r.max((T | 0) - this._minBufferSize, 0));
                      var D = T * k,
                        C = r.min(D * 4, S);
                      if (D) {
                        for (var A = 0; A < D; A += k)
                          this._doProcessBlock(_, A);
                        (g = _.splice(0, D)), (b.sigBytes -= C);
                      }
                      return new m.init(g, C);
                    },
                    clone: function () {
                      var p = u.clone.call(this);
                      return (p._data = this._data.clone()), p;
                    },
                    _minBufferSize: 0,
                  }));
                l.Hasher = y.extend({
                  cfg: u.extend(),
                  init: function (p) {
                    (this.cfg = this.cfg.extend(p)), this.reset();
                  },
                  reset: function () {
                    y.reset.call(this), this._doReset();
                  },
                  update: function (p) {
                    return this._append(p), this._process(), this;
                  },
                  finalize: function (p) {
                    p && this._append(p);
                    var g = this._doFinalize();
                    return g;
                  },
                  blockSize: 16,
                  _createHelper: function (p) {
                    return function (g, b) {
                      return new p.init(b).finalize(g);
                    };
                  },
                  _createHmacHelper: function (p) {
                    return function (g, b) {
                      return new w.HMAC.init(p, b).finalize(g);
                    };
                  },
                });
                var w = (c.algo = {});
                return c;
              })(Math);
            return n;
          });
        })(po)),
      po.exports
    );
  }
  var mo = { exports: {} },
    Ul;
  function Ii() {
    return (
      Ul ||
        ((Ul = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.Base,
                  a = o.WordArray,
                  c = (i.x64 = {});
                (c.Word = s.extend({
                  init: function (l, u) {
                    (this.high = l), (this.low = u);
                  },
                })),
                  (c.WordArray = s.extend({
                    init: function (l, u) {
                      (l = this.words = l || []),
                        u != r
                          ? (this.sigBytes = u)
                          : (this.sigBytes = l.length * 8);
                    },
                    toX32: function () {
                      for (
                        var l = this.words, u = l.length, m = [], h = 0;
                        h < u;
                        h++
                      ) {
                        var v = l[h];
                        m.push(v.high), m.push(v.low);
                      }
                      return a.create(m, this.sigBytes);
                    },
                    clone: function () {
                      for (
                        var l = s.clone.call(this),
                          u = (l.words = this.words.slice(0)),
                          m = u.length,
                          h = 0;
                        h < m;
                        h++
                      )
                        u[h] = u[h].clone();
                      return l;
                    },
                  }));
              })(),
              n
            );
          });
        })(mo)),
      mo.exports
    );
  }
  var go = { exports: {} },
    Hl;
  function wp() {
    return (
      Hl ||
        ((Hl = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function () {
                if (typeof ArrayBuffer == "function") {
                  var r = n,
                    i = r.lib,
                    o = i.WordArray,
                    s = o.init,
                    a = (o.init = function (c) {
                      if (
                        (c instanceof ArrayBuffer && (c = new Uint8Array(c)),
                        (c instanceof Int8Array ||
                          (typeof Uint8ClampedArray < "u" &&
                            c instanceof Uint8ClampedArray) ||
                          c instanceof Int16Array ||
                          c instanceof Uint16Array ||
                          c instanceof Int32Array ||
                          c instanceof Uint32Array ||
                          c instanceof Float32Array ||
                          c instanceof Float64Array) &&
                          (c = new Uint8Array(
                            c.buffer,
                            c.byteOffset,
                            c.byteLength
                          )),
                        c instanceof Uint8Array)
                      ) {
                        for (var l = c.byteLength, u = [], m = 0; m < l; m++)
                          u[m >>> 2] |= c[m] << (24 - (m % 4) * 8);
                        s.call(this, u, l);
                      } else s.apply(this, arguments);
                    });
                  a.prototype = o;
                }
              })(),
              n.lib.WordArray
            );
          });
        })(go)),
      go.exports
    );
  }
  var vo = { exports: {} },
    zl;
  function _p() {
    return (
      zl ||
        ((zl = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.WordArray,
                  s = r.enc;
                (s.Utf16 = s.Utf16BE =
                  {
                    stringify: function (c) {
                      for (
                        var l = c.words, u = c.sigBytes, m = [], h = 0;
                        h < u;
                        h += 2
                      ) {
                        var v = (l[h >>> 2] >>> (16 - (h % 4) * 8)) & 65535;
                        m.push(String.fromCharCode(v));
                      }
                      return m.join("");
                    },
                    parse: function (c) {
                      for (var l = c.length, u = [], m = 0; m < l; m++)
                        u[m >>> 1] |= c.charCodeAt(m) << (16 - (m % 2) * 16);
                      return o.create(u, l * 2);
                    },
                  }),
                  (s.Utf16LE = {
                    stringify: function (c) {
                      for (
                        var l = c.words, u = c.sigBytes, m = [], h = 0;
                        h < u;
                        h += 2
                      ) {
                        var v = a((l[h >>> 2] >>> (16 - (h % 4) * 8)) & 65535);
                        m.push(String.fromCharCode(v));
                      }
                      return m.join("");
                    },
                    parse: function (c) {
                      for (var l = c.length, u = [], m = 0; m < l; m++)
                        u[m >>> 1] |= a(c.charCodeAt(m) << (16 - (m % 2) * 16));
                      return o.create(u, l * 2);
                    },
                  });
                function a(c) {
                  return ((c << 8) & 4278255360) | ((c >>> 8) & 16711935);
                }
              })(),
              n.enc.Utf16
            );
          });
        })(vo)),
      vo.exports
    );
  }
  var yo = { exports: {} },
    Wl;
  function nr() {
    return (
      Wl ||
        ((Wl = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.WordArray,
                  s = r.enc;
                s.Base64 = {
                  stringify: function (c) {
                    var l = c.words,
                      u = c.sigBytes,
                      m = this._map;
                    c.clamp();
                    for (var h = [], v = 0; v < u; v += 3)
                      for (
                        var f = (l[v >>> 2] >>> (24 - (v % 4) * 8)) & 255,
                          d =
                            (l[(v + 1) >>> 2] >>> (24 - ((v + 1) % 4) * 8)) &
                            255,
                          y =
                            (l[(v + 2) >>> 2] >>> (24 - ((v + 2) % 4) * 8)) &
                            255,
                          w = (f << 16) | (d << 8) | y,
                          p = 0;
                        p < 4 && v + p * 0.75 < u;
                        p++
                      )
                        h.push(m.charAt((w >>> (6 * (3 - p))) & 63));
                    var g = m.charAt(64);
                    if (g) for (; h.length % 4; ) h.push(g);
                    return h.join("");
                  },
                  parse: function (c) {
                    var l = c.length,
                      u = this._map,
                      m = this._reverseMap;
                    if (!m) {
                      m = this._reverseMap = [];
                      for (var h = 0; h < u.length; h++) m[u.charCodeAt(h)] = h;
                    }
                    var v = u.charAt(64);
                    if (v) {
                      var f = c.indexOf(v);
                      f !== -1 && (l = f);
                    }
                    return a(c, l, m);
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                };
                function a(c, l, u) {
                  for (var m = [], h = 0, v = 0; v < l; v++)
                    if (v % 4) {
                      var f = u[c.charCodeAt(v - 1)] << ((v % 4) * 2),
                        d = u[c.charCodeAt(v)] >>> (6 - (v % 4) * 2),
                        y = f | d;
                      (m[h >>> 2] |= y << (24 - (h % 4) * 8)), h++;
                    }
                  return o.create(m, h);
                }
              })(),
              n.enc.Base64
            );
          });
        })(yo)),
      yo.exports
    );
  }
  var xo = { exports: {} },
    Vl;
  function Sp() {
    return (
      Vl ||
        ((Vl = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.WordArray,
                  s = r.enc;
                s.Base64url = {
                  stringify: function (c, l = !0) {
                    var u = c.words,
                      m = c.sigBytes,
                      h = l ? this._safe_map : this._map;
                    c.clamp();
                    for (var v = [], f = 0; f < m; f += 3)
                      for (
                        var d = (u[f >>> 2] >>> (24 - (f % 4) * 8)) & 255,
                          y =
                            (u[(f + 1) >>> 2] >>> (24 - ((f + 1) % 4) * 8)) &
                            255,
                          w =
                            (u[(f + 2) >>> 2] >>> (24 - ((f + 2) % 4) * 8)) &
                            255,
                          p = (d << 16) | (y << 8) | w,
                          g = 0;
                        g < 4 && f + g * 0.75 < m;
                        g++
                      )
                        v.push(h.charAt((p >>> (6 * (3 - g))) & 63));
                    var b = h.charAt(64);
                    if (b) for (; v.length % 4; ) v.push(b);
                    return v.join("");
                  },
                  parse: function (c, l = !0) {
                    var u = c.length,
                      m = l ? this._safe_map : this._map,
                      h = this._reverseMap;
                    if (!h) {
                      h = this._reverseMap = [];
                      for (var v = 0; v < m.length; v++) h[m.charCodeAt(v)] = v;
                    }
                    var f = m.charAt(64);
                    if (f) {
                      var d = c.indexOf(f);
                      d !== -1 && (u = d);
                    }
                    return a(c, u, h);
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  _safe_map:
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                };
                function a(c, l, u) {
                  for (var m = [], h = 0, v = 0; v < l; v++)
                    if (v % 4) {
                      var f = u[c.charCodeAt(v - 1)] << ((v % 4) * 2),
                        d = u[c.charCodeAt(v)] >>> (6 - (v % 4) * 2),
                        y = f | d;
                      (m[h >>> 2] |= y << (24 - (h % 4) * 8)), h++;
                    }
                  return o.create(m, h);
                }
              })(),
              n.enc.Base64url
            );
          });
        })(xo)),
      xo.exports
    );
  }
  var bo = { exports: {} },
    ql;
  function rr() {
    return (
      ql ||
        ((ql = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.WordArray,
                  a = o.Hasher,
                  c = i.algo,
                  l = [];
                (function () {
                  for (var d = 0; d < 64; d++)
                    l[d] = (r.abs(r.sin(d + 1)) * 4294967296) | 0;
                })();
                var u = (c.MD5 = a.extend({
                  _doReset: function () {
                    this._hash = new s.init([
                      1732584193, 4023233417, 2562383102, 271733878,
                    ]);
                  },
                  _doProcessBlock: function (d, y) {
                    for (var w = 0; w < 16; w++) {
                      var p = y + w,
                        g = d[p];
                      d[p] =
                        (((g << 8) | (g >>> 24)) & 16711935) |
                        (((g << 24) | (g >>> 8)) & 4278255360);
                    }
                    var b = this._hash.words,
                      _ = d[y + 0],
                      S = d[y + 1],
                      k = d[y + 2],
                      E = d[y + 3],
                      T = d[y + 4],
                      D = d[y + 5],
                      C = d[y + 6],
                      A = d[y + 7],
                      M = d[y + 8],
                      L = d[y + 9],
                      H = d[y + 10],
                      j = d[y + 11],
                      F = d[y + 12],
                      K = d[y + 13],
                      Z = d[y + 14],
                      J = d[y + 15],
                      I = b[0],
                      B = b[1],
                      P = b[2],
                      O = b[3];
                    (I = m(I, B, P, O, _, 7, l[0])),
                      (O = m(O, I, B, P, S, 12, l[1])),
                      (P = m(P, O, I, B, k, 17, l[2])),
                      (B = m(B, P, O, I, E, 22, l[3])),
                      (I = m(I, B, P, O, T, 7, l[4])),
                      (O = m(O, I, B, P, D, 12, l[5])),
                      (P = m(P, O, I, B, C, 17, l[6])),
                      (B = m(B, P, O, I, A, 22, l[7])),
                      (I = m(I, B, P, O, M, 7, l[8])),
                      (O = m(O, I, B, P, L, 12, l[9])),
                      (P = m(P, O, I, B, H, 17, l[10])),
                      (B = m(B, P, O, I, j, 22, l[11])),
                      (I = m(I, B, P, O, F, 7, l[12])),
                      (O = m(O, I, B, P, K, 12, l[13])),
                      (P = m(P, O, I, B, Z, 17, l[14])),
                      (B = m(B, P, O, I, J, 22, l[15])),
                      (I = h(I, B, P, O, S, 5, l[16])),
                      (O = h(O, I, B, P, C, 9, l[17])),
                      (P = h(P, O, I, B, j, 14, l[18])),
                      (B = h(B, P, O, I, _, 20, l[19])),
                      (I = h(I, B, P, O, D, 5, l[20])),
                      (O = h(O, I, B, P, H, 9, l[21])),
                      (P = h(P, O, I, B, J, 14, l[22])),
                      (B = h(B, P, O, I, T, 20, l[23])),
                      (I = h(I, B, P, O, L, 5, l[24])),
                      (O = h(O, I, B, P, Z, 9, l[25])),
                      (P = h(P, O, I, B, E, 14, l[26])),
                      (B = h(B, P, O, I, M, 20, l[27])),
                      (I = h(I, B, P, O, K, 5, l[28])),
                      (O = h(O, I, B, P, k, 9, l[29])),
                      (P = h(P, O, I, B, A, 14, l[30])),
                      (B = h(B, P, O, I, F, 20, l[31])),
                      (I = v(I, B, P, O, D, 4, l[32])),
                      (O = v(O, I, B, P, M, 11, l[33])),
                      (P = v(P, O, I, B, j, 16, l[34])),
                      (B = v(B, P, O, I, Z, 23, l[35])),
                      (I = v(I, B, P, O, S, 4, l[36])),
                      (O = v(O, I, B, P, T, 11, l[37])),
                      (P = v(P, O, I, B, A, 16, l[38])),
                      (B = v(B, P, O, I, H, 23, l[39])),
                      (I = v(I, B, P, O, K, 4, l[40])),
                      (O = v(O, I, B, P, _, 11, l[41])),
                      (P = v(P, O, I, B, E, 16, l[42])),
                      (B = v(B, P, O, I, C, 23, l[43])),
                      (I = v(I, B, P, O, L, 4, l[44])),
                      (O = v(O, I, B, P, F, 11, l[45])),
                      (P = v(P, O, I, B, J, 16, l[46])),
                      (B = v(B, P, O, I, k, 23, l[47])),
                      (I = f(I, B, P, O, _, 6, l[48])),
                      (O = f(O, I, B, P, A, 10, l[49])),
                      (P = f(P, O, I, B, Z, 15, l[50])),
                      (B = f(B, P, O, I, D, 21, l[51])),
                      (I = f(I, B, P, O, F, 6, l[52])),
                      (O = f(O, I, B, P, E, 10, l[53])),
                      (P = f(P, O, I, B, H, 15, l[54])),
                      (B = f(B, P, O, I, S, 21, l[55])),
                      (I = f(I, B, P, O, M, 6, l[56])),
                      (O = f(O, I, B, P, J, 10, l[57])),
                      (P = f(P, O, I, B, C, 15, l[58])),
                      (B = f(B, P, O, I, K, 21, l[59])),
                      (I = f(I, B, P, O, T, 6, l[60])),
                      (O = f(O, I, B, P, j, 10, l[61])),
                      (P = f(P, O, I, B, k, 15, l[62])),
                      (B = f(B, P, O, I, L, 21, l[63])),
                      (b[0] = (b[0] + I) | 0),
                      (b[1] = (b[1] + B) | 0),
                      (b[2] = (b[2] + P) | 0),
                      (b[3] = (b[3] + O) | 0);
                  },
                  _doFinalize: function () {
                    var d = this._data,
                      y = d.words,
                      w = this._nDataBytes * 8,
                      p = d.sigBytes * 8;
                    y[p >>> 5] |= 128 << (24 - (p % 32));
                    var g = r.floor(w / 4294967296),
                      b = w;
                    (y[(((p + 64) >>> 9) << 4) + 15] =
                      (((g << 8) | (g >>> 24)) & 16711935) |
                      (((g << 24) | (g >>> 8)) & 4278255360)),
                      (y[(((p + 64) >>> 9) << 4) + 14] =
                        (((b << 8) | (b >>> 24)) & 16711935) |
                        (((b << 24) | (b >>> 8)) & 4278255360)),
                      (d.sigBytes = (y.length + 1) * 4),
                      this._process();
                    for (var _ = this._hash, S = _.words, k = 0; k < 4; k++) {
                      var E = S[k];
                      S[k] =
                        (((E << 8) | (E >>> 24)) & 16711935) |
                        (((E << 24) | (E >>> 8)) & 4278255360);
                    }
                    return _;
                  },
                  clone: function () {
                    var d = a.clone.call(this);
                    return (d._hash = this._hash.clone()), d;
                  },
                }));
                function m(d, y, w, p, g, b, _) {
                  var S = d + ((y & w) | (~y & p)) + g + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                function h(d, y, w, p, g, b, _) {
                  var S = d + ((y & p) | (w & ~p)) + g + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                function v(d, y, w, p, g, b, _) {
                  var S = d + (y ^ w ^ p) + g + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                function f(d, y, w, p, g, b, _) {
                  var S = d + (w ^ (y | ~p)) + g + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                (i.MD5 = a._createHelper(u)),
                  (i.HmacMD5 = a._createHmacHelper(u));
              })(Math),
              n.MD5
            );
          });
        })(bo)),
      bo.exports
    );
  }
  var wo = { exports: {} },
    Gl;
  function ua() {
    return (
      Gl ||
        ((Gl = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.WordArray,
                  s = i.Hasher,
                  a = r.algo,
                  c = [],
                  l = (a.SHA1 = s.extend({
                    _doReset: function () {
                      this._hash = new o.init([
                        1732584193, 4023233417, 2562383102, 271733878,
                        3285377520,
                      ]);
                    },
                    _doProcessBlock: function (u, m) {
                      for (
                        var h = this._hash.words,
                          v = h[0],
                          f = h[1],
                          d = h[2],
                          y = h[3],
                          w = h[4],
                          p = 0;
                        p < 80;
                        p++
                      ) {
                        if (p < 16) c[p] = u[m + p] | 0;
                        else {
                          var g = c[p - 3] ^ c[p - 8] ^ c[p - 14] ^ c[p - 16];
                          c[p] = (g << 1) | (g >>> 31);
                        }
                        var b = ((v << 5) | (v >>> 27)) + w + c[p];
                        p < 20
                          ? (b += ((f & d) | (~f & y)) + 1518500249)
                          : p < 40
                          ? (b += (f ^ d ^ y) + 1859775393)
                          : p < 60
                          ? (b += ((f & d) | (f & y) | (d & y)) - 1894007588)
                          : (b += (f ^ d ^ y) - 899497514),
                          (w = y),
                          (y = d),
                          (d = (f << 30) | (f >>> 2)),
                          (f = v),
                          (v = b);
                      }
                      (h[0] = (h[0] + v) | 0),
                        (h[1] = (h[1] + f) | 0),
                        (h[2] = (h[2] + d) | 0),
                        (h[3] = (h[3] + y) | 0),
                        (h[4] = (h[4] + w) | 0);
                    },
                    _doFinalize: function () {
                      var u = this._data,
                        m = u.words,
                        h = this._nDataBytes * 8,
                        v = u.sigBytes * 8;
                      return (
                        (m[v >>> 5] |= 128 << (24 - (v % 32))),
                        (m[(((v + 64) >>> 9) << 4) + 14] = Math.floor(
                          h / 4294967296
                        )),
                        (m[(((v + 64) >>> 9) << 4) + 15] = h),
                        (u.sigBytes = m.length * 4),
                        this._process(),
                        this._hash
                      );
                    },
                    clone: function () {
                      var u = s.clone.call(this);
                      return (u._hash = this._hash.clone()), u;
                    },
                  }));
                (r.SHA1 = s._createHelper(l)),
                  (r.HmacSHA1 = s._createHmacHelper(l));
              })(),
              n.SHA1
            );
          });
        })(wo)),
      wo.exports
    );
  }
  var _o = { exports: {} },
    Zl;
  function C0() {
    return (
      Zl ||
        ((Zl = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            return (
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.WordArray,
                  a = o.Hasher,
                  c = i.algo,
                  l = [],
                  u = [];
                (function () {
                  function v(w) {
                    for (var p = r.sqrt(w), g = 2; g <= p; g++)
                      if (!(w % g)) return !1;
                    return !0;
                  }
                  function f(w) {
                    return ((w - (w | 0)) * 4294967296) | 0;
                  }
                  for (var d = 2, y = 0; y < 64; )
                    v(d) &&
                      (y < 8 && (l[y] = f(r.pow(d, 1 / 2))),
                      (u[y] = f(r.pow(d, 1 / 3))),
                      y++),
                      d++;
                })();
                var m = [],
                  h = (c.SHA256 = a.extend({
                    _doReset: function () {
                      this._hash = new s.init(l.slice(0));
                    },
                    _doProcessBlock: function (v, f) {
                      for (
                        var d = this._hash.words,
                          y = d[0],
                          w = d[1],
                          p = d[2],
                          g = d[3],
                          b = d[4],
                          _ = d[5],
                          S = d[6],
                          k = d[7],
                          E = 0;
                        E < 64;
                        E++
                      ) {
                        if (E < 16) m[E] = v[f + E] | 0;
                        else {
                          var T = m[E - 15],
                            D =
                              ((T << 25) | (T >>> 7)) ^
                              ((T << 14) | (T >>> 18)) ^
                              (T >>> 3),
                            C = m[E - 2],
                            A =
                              ((C << 15) | (C >>> 17)) ^
                              ((C << 13) | (C >>> 19)) ^
                              (C >>> 10);
                          m[E] = D + m[E - 7] + A + m[E - 16];
                        }
                        var M = (b & _) ^ (~b & S),
                          L = (y & w) ^ (y & p) ^ (w & p),
                          H =
                            ((y << 30) | (y >>> 2)) ^
                            ((y << 19) | (y >>> 13)) ^
                            ((y << 10) | (y >>> 22)),
                          j =
                            ((b << 26) | (b >>> 6)) ^
                            ((b << 21) | (b >>> 11)) ^
                            ((b << 7) | (b >>> 25)),
                          F = k + j + M + u[E] + m[E],
                          K = H + L;
                        (k = S),
                          (S = _),
                          (_ = b),
                          (b = (g + F) | 0),
                          (g = p),
                          (p = w),
                          (w = y),
                          (y = (F + K) | 0);
                      }
                      (d[0] = (d[0] + y) | 0),
                        (d[1] = (d[1] + w) | 0),
                        (d[2] = (d[2] + p) | 0),
                        (d[3] = (d[3] + g) | 0),
                        (d[4] = (d[4] + b) | 0),
                        (d[5] = (d[5] + _) | 0),
                        (d[6] = (d[6] + S) | 0),
                        (d[7] = (d[7] + k) | 0);
                    },
                    _doFinalize: function () {
                      var v = this._data,
                        f = v.words,
                        d = this._nDataBytes * 8,
                        y = v.sigBytes * 8;
                      return (
                        (f[y >>> 5] |= 128 << (24 - (y % 32))),
                        (f[(((y + 64) >>> 9) << 4) + 14] = r.floor(
                          d / 4294967296
                        )),
                        (f[(((y + 64) >>> 9) << 4) + 15] = d),
                        (v.sigBytes = f.length * 4),
                        this._process(),
                        this._hash
                      );
                    },
                    clone: function () {
                      var v = a.clone.call(this);
                      return (v._hash = this._hash.clone()), v;
                    },
                  }));
                (i.SHA256 = a._createHelper(h)),
                  (i.HmacSHA256 = a._createHmacHelper(h));
              })(Math),
              n.SHA256
            );
          });
        })(_o)),
      _o.exports
    );
  }
  var So = { exports: {} },
    Kl;
  function kp() {
    return (
      Kl ||
        ((Kl = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), C0());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.WordArray,
                  s = r.algo,
                  a = s.SHA256,
                  c = (s.SHA224 = a.extend({
                    _doReset: function () {
                      this._hash = new o.init([
                        3238371032, 914150663, 812702999, 4144912697,
                        4290775857, 1750603025, 1694076839, 3204075428,
                      ]);
                    },
                    _doFinalize: function () {
                      var l = a._doFinalize.call(this);
                      return (l.sigBytes -= 4), l;
                    },
                  }));
                (r.SHA224 = a._createHelper(c)),
                  (r.HmacSHA224 = a._createHmacHelper(c));
              })(),
              n.SHA224
            );
          });
        })(So)),
      So.exports
    );
  }
  var ko = { exports: {} },
    Xl;
  function D0() {
    return (
      Xl ||
        ((Xl = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ii());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.Hasher,
                  s = r.x64,
                  a = s.Word,
                  c = s.WordArray,
                  l = r.algo;
                function u() {
                  return a.create.apply(a, arguments);
                }
                var m = [
                    u(1116352408, 3609767458),
                    u(1899447441, 602891725),
                    u(3049323471, 3964484399),
                    u(3921009573, 2173295548),
                    u(961987163, 4081628472),
                    u(1508970993, 3053834265),
                    u(2453635748, 2937671579),
                    u(2870763221, 3664609560),
                    u(3624381080, 2734883394),
                    u(310598401, 1164996542),
                    u(607225278, 1323610764),
                    u(1426881987, 3590304994),
                    u(1925078388, 4068182383),
                    u(2162078206, 991336113),
                    u(2614888103, 633803317),
                    u(3248222580, 3479774868),
                    u(3835390401, 2666613458),
                    u(4022224774, 944711139),
                    u(264347078, 2341262773),
                    u(604807628, 2007800933),
                    u(770255983, 1495990901),
                    u(1249150122, 1856431235),
                    u(1555081692, 3175218132),
                    u(1996064986, 2198950837),
                    u(2554220882, 3999719339),
                    u(2821834349, 766784016),
                    u(2952996808, 2566594879),
                    u(3210313671, 3203337956),
                    u(3336571891, 1034457026),
                    u(3584528711, 2466948901),
                    u(113926993, 3758326383),
                    u(338241895, 168717936),
                    u(666307205, 1188179964),
                    u(773529912, 1546045734),
                    u(1294757372, 1522805485),
                    u(1396182291, 2643833823),
                    u(1695183700, 2343527390),
                    u(1986661051, 1014477480),
                    u(2177026350, 1206759142),
                    u(2456956037, 344077627),
                    u(2730485921, 1290863460),
                    u(2820302411, 3158454273),
                    u(3259730800, 3505952657),
                    u(3345764771, 106217008),
                    u(3516065817, 3606008344),
                    u(3600352804, 1432725776),
                    u(4094571909, 1467031594),
                    u(275423344, 851169720),
                    u(430227734, 3100823752),
                    u(506948616, 1363258195),
                    u(659060556, 3750685593),
                    u(883997877, 3785050280),
                    u(958139571, 3318307427),
                    u(1322822218, 3812723403),
                    u(1537002063, 2003034995),
                    u(1747873779, 3602036899),
                    u(1955562222, 1575990012),
                    u(2024104815, 1125592928),
                    u(2227730452, 2716904306),
                    u(2361852424, 442776044),
                    u(2428436474, 593698344),
                    u(2756734187, 3733110249),
                    u(3204031479, 2999351573),
                    u(3329325298, 3815920427),
                    u(3391569614, 3928383900),
                    u(3515267271, 566280711),
                    u(3940187606, 3454069534),
                    u(4118630271, 4000239992),
                    u(116418474, 1914138554),
                    u(174292421, 2731055270),
                    u(289380356, 3203993006),
                    u(460393269, 320620315),
                    u(685471733, 587496836),
                    u(852142971, 1086792851),
                    u(1017036298, 365543100),
                    u(1126000580, 2618297676),
                    u(1288033470, 3409855158),
                    u(1501505948, 4234509866),
                    u(1607167915, 987167468),
                    u(1816402316, 1246189591),
                  ],
                  h = [];
                (function () {
                  for (var f = 0; f < 80; f++) h[f] = u();
                })();
                var v = (l.SHA512 = o.extend({
                  _doReset: function () {
                    this._hash = new c.init([
                      new a.init(1779033703, 4089235720),
                      new a.init(3144134277, 2227873595),
                      new a.init(1013904242, 4271175723),
                      new a.init(2773480762, 1595750129),
                      new a.init(1359893119, 2917565137),
                      new a.init(2600822924, 725511199),
                      new a.init(528734635, 4215389547),
                      new a.init(1541459225, 327033209),
                    ]);
                  },
                  _doProcessBlock: function (f, d) {
                    for (
                      var y = this._hash.words,
                        w = y[0],
                        p = y[1],
                        g = y[2],
                        b = y[3],
                        _ = y[4],
                        S = y[5],
                        k = y[6],
                        E = y[7],
                        T = w.high,
                        D = w.low,
                        C = p.high,
                        A = p.low,
                        M = g.high,
                        L = g.low,
                        H = b.high,
                        j = b.low,
                        F = _.high,
                        K = _.low,
                        Z = S.high,
                        J = S.low,
                        I = k.high,
                        B = k.low,
                        P = E.high,
                        O = E.low,
                        $ = T,
                        q = D,
                        ue = C,
                        U = A,
                        ye = M,
                        Ye = L,
                        ht = H,
                        rt = j,
                        Ze = F,
                        Ae = K,
                        zt = Z,
                        et = J,
                        R = I,
                        G = B,
                        W = P,
                        V = O,
                        te = 0;
                      te < 80;
                      te++
                    ) {
                      var ne,
                        le,
                        me = h[te];
                      if (te < 16)
                        (le = me.high = f[d + te * 2] | 0),
                          (ne = me.low = f[d + te * 2 + 1] | 0);
                      else {
                        var ie = h[te - 15],
                          oe = ie.high,
                          re = ie.low,
                          fe =
                            ((oe >>> 1) | (re << 31)) ^
                            ((oe >>> 8) | (re << 24)) ^
                            (oe >>> 7),
                          it =
                            ((re >>> 1) | (oe << 31)) ^
                            ((re >>> 8) | (oe << 24)) ^
                            ((re >>> 7) | (oe << 25)),
                          He = h[te - 2],
                          he = He.high,
                          ae = He.low,
                          pt =
                            ((he >>> 19) | (ae << 13)) ^
                            ((he << 3) | (ae >>> 29)) ^
                            (he >>> 6),
                          Pn =
                            ((ae >>> 19) | (he << 13)) ^
                            ((ae << 3) | (he >>> 29)) ^
                            ((ae >>> 6) | (he << 26)),
                          lr = h[te - 7],
                          Mf = lr.high,
                          Nf = lr.low,
                          Za = h[te - 16],
                          If = Za.high,
                          Ka = Za.low;
                        (ne = it + Nf),
                          (le = fe + Mf + (ne >>> 0 < it >>> 0 ? 1 : 0)),
                          (ne = ne + Pn),
                          (le = le + pt + (ne >>> 0 < Pn >>> 0 ? 1 : 0)),
                          (ne = ne + Ka),
                          (le = le + If + (ne >>> 0 < Ka >>> 0 ? 1 : 0)),
                          (me.high = le),
                          (me.low = ne);
                      }
                      var Rf = (Ze & zt) ^ (~Ze & R),
                        Xa = (Ae & et) ^ (~Ae & G),
                        Lf = ($ & ue) ^ ($ & ye) ^ (ue & ye),
                        Pf = (q & U) ^ (q & Ye) ^ (U & Ye),
                        Bf =
                          (($ >>> 28) | (q << 4)) ^
                          (($ << 30) | (q >>> 2)) ^
                          (($ << 25) | (q >>> 7)),
                        Ja =
                          ((q >>> 28) | ($ << 4)) ^
                          ((q << 30) | ($ >>> 2)) ^
                          ((q << 25) | ($ >>> 7)),
                        Ff =
                          ((Ze >>> 14) | (Ae << 18)) ^
                          ((Ze >>> 18) | (Ae << 14)) ^
                          ((Ze << 23) | (Ae >>> 9)),
                        Yf =
                          ((Ae >>> 14) | (Ze << 18)) ^
                          ((Ae >>> 18) | (Ze << 14)) ^
                          ((Ae << 23) | (Ze >>> 9)),
                        Qa = m[te],
                        jf = Qa.high,
                        el = Qa.low,
                        st = V + Yf,
                        an = W + Ff + (st >>> 0 < V >>> 0 ? 1 : 0),
                        st = st + Xa,
                        an = an + Rf + (st >>> 0 < Xa >>> 0 ? 1 : 0),
                        st = st + el,
                        an = an + jf + (st >>> 0 < el >>> 0 ? 1 : 0),
                        st = st + ne,
                        an = an + le + (st >>> 0 < ne >>> 0 ? 1 : 0),
                        tl = Ja + Pf,
                        $f = Bf + Lf + (tl >>> 0 < Ja >>> 0 ? 1 : 0);
                      (W = R),
                        (V = G),
                        (R = zt),
                        (G = et),
                        (zt = Ze),
                        (et = Ae),
                        (Ae = (rt + st) | 0),
                        (Ze = (ht + an + (Ae >>> 0 < rt >>> 0 ? 1 : 0)) | 0),
                        (ht = ye),
                        (rt = Ye),
                        (ye = ue),
                        (Ye = U),
                        (ue = $),
                        (U = q),
                        (q = (st + tl) | 0),
                        ($ = (an + $f + (q >>> 0 < st >>> 0 ? 1 : 0)) | 0);
                    }
                    (D = w.low = D + q),
                      (w.high = T + $ + (D >>> 0 < q >>> 0 ? 1 : 0)),
                      (A = p.low = A + U),
                      (p.high = C + ue + (A >>> 0 < U >>> 0 ? 1 : 0)),
                      (L = g.low = L + Ye),
                      (g.high = M + ye + (L >>> 0 < Ye >>> 0 ? 1 : 0)),
                      (j = b.low = j + rt),
                      (b.high = H + ht + (j >>> 0 < rt >>> 0 ? 1 : 0)),
                      (K = _.low = K + Ae),
                      (_.high = F + Ze + (K >>> 0 < Ae >>> 0 ? 1 : 0)),
                      (J = S.low = J + et),
                      (S.high = Z + zt + (J >>> 0 < et >>> 0 ? 1 : 0)),
                      (B = k.low = B + G),
                      (k.high = I + R + (B >>> 0 < G >>> 0 ? 1 : 0)),
                      (O = E.low = O + V),
                      (E.high = P + W + (O >>> 0 < V >>> 0 ? 1 : 0));
                  },
                  _doFinalize: function () {
                    var f = this._data,
                      d = f.words,
                      y = this._nDataBytes * 8,
                      w = f.sigBytes * 8;
                    (d[w >>> 5] |= 128 << (24 - (w % 32))),
                      (d[(((w + 128) >>> 10) << 5) + 30] = Math.floor(
                        y / 4294967296
                      )),
                      (d[(((w + 128) >>> 10) << 5) + 31] = y),
                      (f.sigBytes = d.length * 4),
                      this._process();
                    var p = this._hash.toX32();
                    return p;
                  },
                  clone: function () {
                    var f = o.clone.call(this);
                    return (f._hash = this._hash.clone()), f;
                  },
                  blockSize: 1024 / 32,
                }));
                (r.SHA512 = o._createHelper(v)),
                  (r.HmacSHA512 = o._createHmacHelper(v));
              })(),
              n.SHA512
            );
          });
        })(ko)),
      ko.exports
    );
  }
  var Eo = { exports: {} },
    Jl;
  function Ep() {
    return (
      Jl ||
        ((Jl = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ii(), D0());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.x64,
                  o = i.Word,
                  s = i.WordArray,
                  a = r.algo,
                  c = a.SHA512,
                  l = (a.SHA384 = c.extend({
                    _doReset: function () {
                      this._hash = new s.init([
                        new o.init(3418070365, 3238371032),
                        new o.init(1654270250, 914150663),
                        new o.init(2438529370, 812702999),
                        new o.init(355462360, 4144912697),
                        new o.init(1731405415, 4290775857),
                        new o.init(2394180231, 1750603025),
                        new o.init(3675008525, 1694076839),
                        new o.init(1203062813, 3204075428),
                      ]);
                    },
                    _doFinalize: function () {
                      var u = c._doFinalize.call(this);
                      return (u.sigBytes -= 16), u;
                    },
                  }));
                (r.SHA384 = c._createHelper(l)),
                  (r.HmacSHA384 = c._createHmacHelper(l));
              })(),
              n.SHA384
            );
          });
        })(Eo)),
      Eo.exports
    );
  }
  var Co = { exports: {} },
    Ql;
  function Cp() {
    return (
      Ql ||
        ((Ql = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ii());
          })(ge, function (n) {
            return (
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.WordArray,
                  a = o.Hasher,
                  c = i.x64,
                  l = c.Word,
                  u = i.algo,
                  m = [],
                  h = [],
                  v = [];
                (function () {
                  for (var y = 1, w = 0, p = 0; p < 24; p++) {
                    m[y + 5 * w] = (((p + 1) * (p + 2)) / 2) % 64;
                    var g = w % 5,
                      b = (2 * y + 3 * w) % 5;
                    (y = g), (w = b);
                  }
                  for (var y = 0; y < 5; y++)
                    for (var w = 0; w < 5; w++)
                      h[y + 5 * w] = w + ((2 * y + 3 * w) % 5) * 5;
                  for (var _ = 1, S = 0; S < 24; S++) {
                    for (var k = 0, E = 0, T = 0; T < 7; T++) {
                      if (_ & 1) {
                        var D = (1 << T) - 1;
                        D < 32 ? (E ^= 1 << D) : (k ^= 1 << (D - 32));
                      }
                      _ & 128 ? (_ = (_ << 1) ^ 113) : (_ <<= 1);
                    }
                    v[S] = l.create(k, E);
                  }
                })();
                var f = [];
                (function () {
                  for (var y = 0; y < 25; y++) f[y] = l.create();
                })();
                var d = (u.SHA3 = a.extend({
                  cfg: a.cfg.extend({ outputLength: 512 }),
                  _doReset: function () {
                    for (var y = (this._state = []), w = 0; w < 25; w++)
                      y[w] = new l.init();
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                  },
                  _doProcessBlock: function (y, w) {
                    for (
                      var p = this._state, g = this.blockSize / 2, b = 0;
                      b < g;
                      b++
                    ) {
                      var _ = y[w + 2 * b],
                        S = y[w + 2 * b + 1];
                      (_ =
                        (((_ << 8) | (_ >>> 24)) & 16711935) |
                        (((_ << 24) | (_ >>> 8)) & 4278255360)),
                        (S =
                          (((S << 8) | (S >>> 24)) & 16711935) |
                          (((S << 24) | (S >>> 8)) & 4278255360));
                      var k = p[b];
                      (k.high ^= S), (k.low ^= _);
                    }
                    for (var E = 0; E < 24; E++) {
                      for (var T = 0; T < 5; T++) {
                        for (var D = 0, C = 0, A = 0; A < 5; A++) {
                          var k = p[T + 5 * A];
                          (D ^= k.high), (C ^= k.low);
                        }
                        var M = f[T];
                        (M.high = D), (M.low = C);
                      }
                      for (var T = 0; T < 5; T++)
                        for (
                          var L = f[(T + 4) % 5],
                            H = f[(T + 1) % 5],
                            j = H.high,
                            F = H.low,
                            D = L.high ^ ((j << 1) | (F >>> 31)),
                            C = L.low ^ ((F << 1) | (j >>> 31)),
                            A = 0;
                          A < 5;
                          A++
                        ) {
                          var k = p[T + 5 * A];
                          (k.high ^= D), (k.low ^= C);
                        }
                      for (var K = 1; K < 25; K++) {
                        var D,
                          C,
                          k = p[K],
                          Z = k.high,
                          J = k.low,
                          I = m[K];
                        I < 32
                          ? ((D = (Z << I) | (J >>> (32 - I))),
                            (C = (J << I) | (Z >>> (32 - I))))
                          : ((D = (J << (I - 32)) | (Z >>> (64 - I))),
                            (C = (Z << (I - 32)) | (J >>> (64 - I))));
                        var B = f[h[K]];
                        (B.high = D), (B.low = C);
                      }
                      var P = f[0],
                        O = p[0];
                      (P.high = O.high), (P.low = O.low);
                      for (var T = 0; T < 5; T++)
                        for (var A = 0; A < 5; A++) {
                          var K = T + 5 * A,
                            k = p[K],
                            $ = f[K],
                            q = f[((T + 1) % 5) + 5 * A],
                            ue = f[((T + 2) % 5) + 5 * A];
                          (k.high = $.high ^ (~q.high & ue.high)),
                            (k.low = $.low ^ (~q.low & ue.low));
                        }
                      var k = p[0],
                        U = v[E];
                      (k.high ^= U.high), (k.low ^= U.low);
                    }
                  },
                  _doFinalize: function () {
                    var y = this._data,
                      w = y.words;
                    this._nDataBytes * 8;
                    var p = y.sigBytes * 8,
                      g = this.blockSize * 32;
                    (w[p >>> 5] |= 1 << (24 - (p % 32))),
                      (w[((r.ceil((p + 1) / g) * g) >>> 5) - 1] |= 128),
                      (y.sigBytes = w.length * 4),
                      this._process();
                    for (
                      var b = this._state,
                        _ = this.cfg.outputLength / 8,
                        S = _ / 8,
                        k = [],
                        E = 0;
                      E < S;
                      E++
                    ) {
                      var T = b[E],
                        D = T.high,
                        C = T.low;
                      (D =
                        (((D << 8) | (D >>> 24)) & 16711935) |
                        (((D << 24) | (D >>> 8)) & 4278255360)),
                        (C =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360)),
                        k.push(C),
                        k.push(D);
                    }
                    return new s.init(k, _);
                  },
                  clone: function () {
                    for (
                      var y = a.clone.call(this),
                        w = (y._state = this._state.slice(0)),
                        p = 0;
                      p < 25;
                      p++
                    )
                      w[p] = w[p].clone();
                    return y;
                  },
                }));
                (i.SHA3 = a._createHelper(d)),
                  (i.HmacSHA3 = a._createHmacHelper(d));
              })(Math),
              n.SHA3
            );
          });
        })(Co)),
      Co.exports
    );
  }
  var Do = { exports: {} },
    ec;
  function Dp() {
    return (
      ec ||
        ((ec = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.WordArray,
                  a = o.Hasher,
                  c = i.algo,
                  l = s.create([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                    13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14,
                    4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0,
                    8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2,
                    10, 14, 1, 3, 8, 11, 6, 15, 13,
                  ]),
                  u = s.create([
                    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                    3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3,
                    7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11,
                    15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8,
                    7, 6, 2, 13, 14, 0, 3, 9, 11,
                  ]),
                  m = s.create([
                    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7,
                    6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13,
                    6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14,
                    15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6,
                    8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                  ]),
                  h = s.create([
                    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9,
                    13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7,
                    15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8,
                    11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9,
                    12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
                  ]),
                  v = s.create([
                    0, 1518500249, 1859775393, 2400959708, 2840853838,
                  ]),
                  f = s.create([
                    1352829926, 1548603684, 1836072691, 2053994217, 0,
                  ]),
                  d = (c.RIPEMD160 = a.extend({
                    _doReset: function () {
                      this._hash = s.create([
                        1732584193, 4023233417, 2562383102, 271733878,
                        3285377520,
                      ]);
                    },
                    _doProcessBlock: function (S, k) {
                      for (var E = 0; E < 16; E++) {
                        var T = k + E,
                          D = S[T];
                        S[T] =
                          (((D << 8) | (D >>> 24)) & 16711935) |
                          (((D << 24) | (D >>> 8)) & 4278255360);
                      }
                      var C = this._hash.words,
                        A = v.words,
                        M = f.words,
                        L = l.words,
                        H = u.words,
                        j = m.words,
                        F = h.words,
                        K,
                        Z,
                        J,
                        I,
                        B,
                        P,
                        O,
                        $,
                        q,
                        ue;
                      (P = K = C[0]),
                        (O = Z = C[1]),
                        ($ = J = C[2]),
                        (q = I = C[3]),
                        (ue = B = C[4]);
                      for (var U, E = 0; E < 80; E += 1)
                        (U = (K + S[k + L[E]]) | 0),
                          E < 16
                            ? (U += y(Z, J, I) + A[0])
                            : E < 32
                            ? (U += w(Z, J, I) + A[1])
                            : E < 48
                            ? (U += p(Z, J, I) + A[2])
                            : E < 64
                            ? (U += g(Z, J, I) + A[3])
                            : (U += b(Z, J, I) + A[4]),
                          (U = U | 0),
                          (U = _(U, j[E])),
                          (U = (U + B) | 0),
                          (K = B),
                          (B = I),
                          (I = _(J, 10)),
                          (J = Z),
                          (Z = U),
                          (U = (P + S[k + H[E]]) | 0),
                          E < 16
                            ? (U += b(O, $, q) + M[0])
                            : E < 32
                            ? (U += g(O, $, q) + M[1])
                            : E < 48
                            ? (U += p(O, $, q) + M[2])
                            : E < 64
                            ? (U += w(O, $, q) + M[3])
                            : (U += y(O, $, q) + M[4]),
                          (U = U | 0),
                          (U = _(U, F[E])),
                          (U = (U + ue) | 0),
                          (P = ue),
                          (ue = q),
                          (q = _($, 10)),
                          ($ = O),
                          (O = U);
                      (U = (C[1] + J + q) | 0),
                        (C[1] = (C[2] + I + ue) | 0),
                        (C[2] = (C[3] + B + P) | 0),
                        (C[3] = (C[4] + K + O) | 0),
                        (C[4] = (C[0] + Z + $) | 0),
                        (C[0] = U);
                    },
                    _doFinalize: function () {
                      var S = this._data,
                        k = S.words,
                        E = this._nDataBytes * 8,
                        T = S.sigBytes * 8;
                      (k[T >>> 5] |= 128 << (24 - (T % 32))),
                        (k[(((T + 64) >>> 9) << 4) + 14] =
                          (((E << 8) | (E >>> 24)) & 16711935) |
                          (((E << 24) | (E >>> 8)) & 4278255360)),
                        (S.sigBytes = (k.length + 1) * 4),
                        this._process();
                      for (var D = this._hash, C = D.words, A = 0; A < 5; A++) {
                        var M = C[A];
                        C[A] =
                          (((M << 8) | (M >>> 24)) & 16711935) |
                          (((M << 24) | (M >>> 8)) & 4278255360);
                      }
                      return D;
                    },
                    clone: function () {
                      var S = a.clone.call(this);
                      return (S._hash = this._hash.clone()), S;
                    },
                  }));
                function y(S, k, E) {
                  return S ^ k ^ E;
                }
                function w(S, k, E) {
                  return (S & k) | (~S & E);
                }
                function p(S, k, E) {
                  return (S | ~k) ^ E;
                }
                function g(S, k, E) {
                  return (S & E) | (k & ~E);
                }
                function b(S, k, E) {
                  return S ^ (k | ~E);
                }
                function _(S, k) {
                  return (S << k) | (S >>> (32 - k));
                }
                (i.RIPEMD160 = a._createHelper(d)),
                  (i.HmacRIPEMD160 = a._createHmacHelper(d));
              })(),
              n.RIPEMD160
            );
          });
        })(Do)),
      Do.exports
    );
  }
  var To = { exports: {} },
    tc;
  function da() {
    return (
      tc ||
        ((tc = 1),
        (function (e, t) {
          (function (n, r) {
            e.exports = r(_e());
          })(ge, function (n) {
            (function () {
              var r = n,
                i = r.lib,
                o = i.Base,
                s = r.enc,
                a = s.Utf8,
                c = r.algo;
              c.HMAC = o.extend({
                init: function (l, u) {
                  (l = this._hasher = new l.init()),
                    typeof u == "string" && (u = a.parse(u));
                  var m = l.blockSize,
                    h = m * 4;
                  u.sigBytes > h && (u = l.finalize(u)), u.clamp();
                  for (
                    var v = (this._oKey = u.clone()),
                      f = (this._iKey = u.clone()),
                      d = v.words,
                      y = f.words,
                      w = 0;
                    w < m;
                    w++
                  )
                    (d[w] ^= 1549556828), (y[w] ^= 909522486);
                  (v.sigBytes = f.sigBytes = h), this.reset();
                },
                reset: function () {
                  var l = this._hasher;
                  l.reset(), l.update(this._iKey);
                },
                update: function (l) {
                  return this._hasher.update(l), this;
                },
                finalize: function (l) {
                  var u = this._hasher,
                    m = u.finalize(l);
                  u.reset();
                  var h = u.finalize(this._oKey.clone().concat(m));
                  return h;
                },
              });
            })();
          });
        })(To)),
      To.exports
    );
  }
  var Ao = { exports: {} },
    nc;
  function Tp() {
    return (
      nc ||
        ((nc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), ua(), da());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.Base,
                  s = i.WordArray,
                  a = r.algo,
                  c = a.SHA1,
                  l = a.HMAC,
                  u = (a.PBKDF2 = o.extend({
                    cfg: o.extend({
                      keySize: 128 / 32,
                      hasher: c,
                      iterations: 1,
                    }),
                    init: function (m) {
                      this.cfg = this.cfg.extend(m);
                    },
                    compute: function (m, h) {
                      for (
                        var v = this.cfg,
                          f = l.create(v.hasher, m),
                          d = s.create(),
                          y = s.create([1]),
                          w = d.words,
                          p = y.words,
                          g = v.keySize,
                          b = v.iterations;
                        w.length < g;

                      ) {
                        var _ = f.update(h).finalize(y);
                        f.reset();
                        for (
                          var S = _.words, k = S.length, E = _, T = 1;
                          T < b;
                          T++
                        ) {
                          (E = f.finalize(E)), f.reset();
                          for (var D = E.words, C = 0; C < k; C++) S[C] ^= D[C];
                        }
                        d.concat(_), p[0]++;
                      }
                      return (d.sigBytes = g * 4), d;
                    },
                  }));
                r.PBKDF2 = function (m, h, v) {
                  return u.create(v).compute(m, h);
                };
              })(),
              n.PBKDF2
            );
          });
        })(Ao)),
      Ao.exports
    );
  }
  var Oo = { exports: {} },
    rc;
  function In() {
    return (
      rc ||
        ((rc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), ua(), da());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.Base,
                  s = i.WordArray,
                  a = r.algo,
                  c = a.MD5,
                  l = (a.EvpKDF = o.extend({
                    cfg: o.extend({
                      keySize: 128 / 32,
                      hasher: c,
                      iterations: 1,
                    }),
                    init: function (u) {
                      this.cfg = this.cfg.extend(u);
                    },
                    compute: function (u, m) {
                      for (
                        var h,
                          v = this.cfg,
                          f = v.hasher.create(),
                          d = s.create(),
                          y = d.words,
                          w = v.keySize,
                          p = v.iterations;
                        y.length < w;

                      ) {
                        h && f.update(h),
                          (h = f.update(u).finalize(m)),
                          f.reset();
                        for (var g = 1; g < p; g++)
                          (h = f.finalize(h)), f.reset();
                        d.concat(h);
                      }
                      return (d.sigBytes = w * 4), d;
                    },
                  }));
                r.EvpKDF = function (u, m, h) {
                  return l.create(h).compute(u, m);
                };
              })(),
              n.EvpKDF
            );
          });
        })(Oo)),
      Oo.exports
    );
  }
  var Mo = { exports: {} },
    ic;
  function Ge() {
    return (
      ic ||
        ((ic = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), In());
          })(ge, function (n) {
            n.lib.Cipher ||
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.Base,
                  a = o.WordArray,
                  c = o.BufferedBlockAlgorithm,
                  l = i.enc;
                l.Utf8;
                var u = l.Base64,
                  m = i.algo,
                  h = m.EvpKDF,
                  v = (o.Cipher = c.extend({
                    cfg: s.extend(),
                    createEncryptor: function (D, C) {
                      return this.create(this._ENC_XFORM_MODE, D, C);
                    },
                    createDecryptor: function (D, C) {
                      return this.create(this._DEC_XFORM_MODE, D, C);
                    },
                    init: function (D, C, A) {
                      (this.cfg = this.cfg.extend(A)),
                        (this._xformMode = D),
                        (this._key = C),
                        this.reset();
                    },
                    reset: function () {
                      c.reset.call(this), this._doReset();
                    },
                    process: function (D) {
                      return this._append(D), this._process();
                    },
                    finalize: function (D) {
                      D && this._append(D);
                      var C = this._doFinalize();
                      return C;
                    },
                    keySize: 128 / 32,
                    ivSize: 128 / 32,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: (function () {
                      function D(C) {
                        return typeof C == "string" ? T : S;
                      }
                      return function (C) {
                        return {
                          encrypt: function (A, M, L) {
                            return D(M).encrypt(C, A, M, L);
                          },
                          decrypt: function (A, M, L) {
                            return D(M).decrypt(C, A, M, L);
                          },
                        };
                      };
                    })(),
                  }));
                o.StreamCipher = v.extend({
                  _doFinalize: function () {
                    var D = this._process(!0);
                    return D;
                  },
                  blockSize: 1,
                });
                var f = (i.mode = {}),
                  d = (o.BlockCipherMode = s.extend({
                    createEncryptor: function (D, C) {
                      return this.Encryptor.create(D, C);
                    },
                    createDecryptor: function (D, C) {
                      return this.Decryptor.create(D, C);
                    },
                    init: function (D, C) {
                      (this._cipher = D), (this._iv = C);
                    },
                  })),
                  y = (f.CBC = (function () {
                    var D = d.extend();
                    (D.Encryptor = D.extend({
                      processBlock: function (A, M) {
                        var L = this._cipher,
                          H = L.blockSize;
                        C.call(this, A, M, H),
                          L.encryptBlock(A, M),
                          (this._prevBlock = A.slice(M, M + H));
                      },
                    })),
                      (D.Decryptor = D.extend({
                        processBlock: function (A, M) {
                          var L = this._cipher,
                            H = L.blockSize,
                            j = A.slice(M, M + H);
                          L.decryptBlock(A, M),
                            C.call(this, A, M, H),
                            (this._prevBlock = j);
                        },
                      }));
                    function C(A, M, L) {
                      var H,
                        j = this._iv;
                      j ? ((H = j), (this._iv = r)) : (H = this._prevBlock);
                      for (var F = 0; F < L; F++) A[M + F] ^= H[F];
                    }
                    return D;
                  })()),
                  w = (i.pad = {}),
                  p = (w.Pkcs7 = {
                    pad: function (D, C) {
                      for (
                        var A = C * 4,
                          M = A - (D.sigBytes % A),
                          L = (M << 24) | (M << 16) | (M << 8) | M,
                          H = [],
                          j = 0;
                        j < M;
                        j += 4
                      )
                        H.push(L);
                      var F = a.create(H, M);
                      D.concat(F);
                    },
                    unpad: function (D) {
                      var C = D.words[(D.sigBytes - 1) >>> 2] & 255;
                      D.sigBytes -= C;
                    },
                  });
                o.BlockCipher = v.extend({
                  cfg: v.cfg.extend({ mode: y, padding: p }),
                  reset: function () {
                    var D;
                    v.reset.call(this);
                    var C = this.cfg,
                      A = C.iv,
                      M = C.mode;
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (D = M.createEncryptor)
                      : ((D = M.createDecryptor), (this._minBufferSize = 1)),
                      this._mode && this._mode.__creator == D
                        ? this._mode.init(this, A && A.words)
                        : ((this._mode = D.call(M, this, A && A.words)),
                          (this._mode.__creator = D));
                  },
                  _doProcessBlock: function (D, C) {
                    this._mode.processBlock(D, C);
                  },
                  _doFinalize: function () {
                    var D,
                      C = this.cfg.padding;
                    return (
                      this._xformMode == this._ENC_XFORM_MODE
                        ? (C.pad(this._data, this.blockSize),
                          (D = this._process(!0)))
                        : ((D = this._process(!0)), C.unpad(D)),
                      D
                    );
                  },
                  blockSize: 128 / 32,
                });
                var g = (o.CipherParams = s.extend({
                    init: function (D) {
                      this.mixIn(D);
                    },
                    toString: function (D) {
                      return (D || this.formatter).stringify(this);
                    },
                  })),
                  b = (i.format = {}),
                  _ = (b.OpenSSL = {
                    stringify: function (D) {
                      var C,
                        A = D.ciphertext,
                        M = D.salt;
                      return (
                        M
                          ? (C = a
                              .create([1398893684, 1701076831])
                              .concat(M)
                              .concat(A))
                          : (C = A),
                        C.toString(u)
                      );
                    },
                    parse: function (D) {
                      var C,
                        A = u.parse(D),
                        M = A.words;
                      return (
                        M[0] == 1398893684 &&
                          M[1] == 1701076831 &&
                          ((C = a.create(M.slice(2, 4))),
                          M.splice(0, 4),
                          (A.sigBytes -= 16)),
                        g.create({ ciphertext: A, salt: C })
                      );
                    },
                  }),
                  S = (o.SerializableCipher = s.extend({
                    cfg: s.extend({ format: _ }),
                    encrypt: function (D, C, A, M) {
                      M = this.cfg.extend(M);
                      var L = D.createEncryptor(A, M),
                        H = L.finalize(C),
                        j = L.cfg;
                      return g.create({
                        ciphertext: H,
                        key: A,
                        iv: j.iv,
                        algorithm: D,
                        mode: j.mode,
                        padding: j.padding,
                        blockSize: D.blockSize,
                        formatter: M.format,
                      });
                    },
                    decrypt: function (D, C, A, M) {
                      (M = this.cfg.extend(M)), (C = this._parse(C, M.format));
                      var L = D.createDecryptor(A, M).finalize(C.ciphertext);
                      return L;
                    },
                    _parse: function (D, C) {
                      return typeof D == "string" ? C.parse(D, this) : D;
                    },
                  })),
                  k = (i.kdf = {}),
                  E = (k.OpenSSL = {
                    execute: function (D, C, A, M) {
                      M || (M = a.random(64 / 8));
                      var L = h.create({ keySize: C + A }).compute(D, M),
                        H = a.create(L.words.slice(C), A * 4);
                      return (
                        (L.sigBytes = C * 4),
                        g.create({ key: L, iv: H, salt: M })
                      );
                    },
                  }),
                  T = (o.PasswordBasedCipher = S.extend({
                    cfg: S.cfg.extend({ kdf: E }),
                    encrypt: function (D, C, A, M) {
                      M = this.cfg.extend(M);
                      var L = M.kdf.execute(A, D.keySize, D.ivSize);
                      M.iv = L.iv;
                      var H = S.encrypt.call(this, D, C, L.key, M);
                      return H.mixIn(L), H;
                    },
                    decrypt: function (D, C, A, M) {
                      (M = this.cfg.extend(M)), (C = this._parse(C, M.format));
                      var L = M.kdf.execute(A, D.keySize, D.ivSize, C.salt);
                      M.iv = L.iv;
                      var H = S.decrypt.call(this, D, C, L.key, M);
                      return H;
                    },
                  }));
              })();
          });
        })(Mo)),
      Mo.exports
    );
  }
  var No = { exports: {} },
    oc;
  function Ap() {
    return (
      oc ||
        ((oc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.mode.CFB = (function () {
                var r = n.lib.BlockCipherMode.extend();
                (r.Encryptor = r.extend({
                  processBlock: function (o, s) {
                    var a = this._cipher,
                      c = a.blockSize;
                    i.call(this, o, s, c, a),
                      (this._prevBlock = o.slice(s, s + c));
                  },
                })),
                  (r.Decryptor = r.extend({
                    processBlock: function (o, s) {
                      var a = this._cipher,
                        c = a.blockSize,
                        l = o.slice(s, s + c);
                      i.call(this, o, s, c, a), (this._prevBlock = l);
                    },
                  }));
                function i(o, s, a, c) {
                  var l,
                    u = this._iv;
                  u
                    ? ((l = u.slice(0)), (this._iv = void 0))
                    : (l = this._prevBlock),
                    c.encryptBlock(l, 0);
                  for (var m = 0; m < a; m++) o[s + m] ^= l[m];
                }
                return r;
              })()),
              n.mode.CFB
            );
          });
        })(No)),
      No.exports
    );
  }
  var Io = { exports: {} },
    sc;
  function Op() {
    return (
      sc ||
        ((sc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.mode.CTR = (function () {
                var r = n.lib.BlockCipherMode.extend(),
                  i = (r.Encryptor = r.extend({
                    processBlock: function (o, s) {
                      var a = this._cipher,
                        c = a.blockSize,
                        l = this._iv,
                        u = this._counter;
                      l &&
                        ((u = this._counter = l.slice(0)), (this._iv = void 0));
                      var m = u.slice(0);
                      a.encryptBlock(m, 0), (u[c - 1] = (u[c - 1] + 1) | 0);
                      for (var h = 0; h < c; h++) o[s + h] ^= m[h];
                    },
                  }));
                return (r.Decryptor = i), r;
              })()),
              n.mode.CTR
            );
          });
        })(Io)),
      Io.exports
    );
  }
  var Ro = { exports: {} },
    ac;
  function Mp() {
    return (
      ac ||
        ((ac = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            /** @preserve
             * Counter block mode compatible with  Dr Brian Gladman fileenc.c
             * derived from CryptoJS.mode.CTR
             * Jan Hruby jhruby.web@gmail.com
             */ return (
              (n.mode.CTRGladman = (function () {
                var r = n.lib.BlockCipherMode.extend();
                function i(a) {
                  if (((a >> 24) & 255) === 255) {
                    var c = (a >> 16) & 255,
                      l = (a >> 8) & 255,
                      u = a & 255;
                    c === 255
                      ? ((c = 0),
                        l === 255 ? ((l = 0), u === 255 ? (u = 0) : ++u) : ++l)
                      : ++c,
                      (a = 0),
                      (a += c << 16),
                      (a += l << 8),
                      (a += u);
                  } else a += 1 << 24;
                  return a;
                }
                function o(a) {
                  return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a;
                }
                var s = (r.Encryptor = r.extend({
                  processBlock: function (a, c) {
                    var l = this._cipher,
                      u = l.blockSize,
                      m = this._iv,
                      h = this._counter;
                    m &&
                      ((h = this._counter = m.slice(0)), (this._iv = void 0)),
                      o(h);
                    var v = h.slice(0);
                    l.encryptBlock(v, 0);
                    for (var f = 0; f < u; f++) a[c + f] ^= v[f];
                  },
                }));
                return (r.Decryptor = s), r;
              })()),
              n.mode.CTRGladman
            );
          });
        })(Ro)),
      Ro.exports
    );
  }
  var Lo = { exports: {} },
    lc;
  function Np() {
    return (
      lc ||
        ((lc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.mode.OFB = (function () {
                var r = n.lib.BlockCipherMode.extend(),
                  i = (r.Encryptor = r.extend({
                    processBlock: function (o, s) {
                      var a = this._cipher,
                        c = a.blockSize,
                        l = this._iv,
                        u = this._keystream;
                      l &&
                        ((u = this._keystream = l.slice(0)),
                        (this._iv = void 0)),
                        a.encryptBlock(u, 0);
                      for (var m = 0; m < c; m++) o[s + m] ^= u[m];
                    },
                  }));
                return (r.Decryptor = i), r;
              })()),
              n.mode.OFB
            );
          });
        })(Lo)),
      Lo.exports
    );
  }
  var Po = { exports: {} },
    cc;
  function Ip() {
    return (
      cc ||
        ((cc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.mode.ECB = (function () {
                var r = n.lib.BlockCipherMode.extend();
                return (
                  (r.Encryptor = r.extend({
                    processBlock: function (i, o) {
                      this._cipher.encryptBlock(i, o);
                    },
                  })),
                  (r.Decryptor = r.extend({
                    processBlock: function (i, o) {
                      this._cipher.decryptBlock(i, o);
                    },
                  })),
                  r
                );
              })()),
              n.mode.ECB
            );
          });
        })(Po)),
      Po.exports
    );
  }
  var Bo = { exports: {} },
    uc;
  function Rp() {
    return (
      uc ||
        ((uc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.pad.AnsiX923 = {
                pad: function (r, i) {
                  var o = r.sigBytes,
                    s = i * 4,
                    a = s - (o % s),
                    c = o + a - 1;
                  r.clamp(),
                    (r.words[c >>> 2] |= a << (24 - (c % 4) * 8)),
                    (r.sigBytes += a);
                },
                unpad: function (r) {
                  var i = r.words[(r.sigBytes - 1) >>> 2] & 255;
                  r.sigBytes -= i;
                },
              }),
              n.pad.Ansix923
            );
          });
        })(Bo)),
      Bo.exports
    );
  }
  var Fo = { exports: {} },
    dc;
  function Lp() {
    return (
      dc ||
        ((dc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.pad.Iso10126 = {
                pad: function (r, i) {
                  var o = i * 4,
                    s = o - (r.sigBytes % o);
                  r.concat(n.lib.WordArray.random(s - 1)).concat(
                    n.lib.WordArray.create([s << 24], 1)
                  );
                },
                unpad: function (r) {
                  var i = r.words[(r.sigBytes - 1) >>> 2] & 255;
                  r.sigBytes -= i;
                },
              }),
              n.pad.Iso10126
            );
          });
        })(Fo)),
      Fo.exports
    );
  }
  var Yo = { exports: {} },
    fc;
  function Pp() {
    return (
      fc ||
        ((fc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.pad.Iso97971 = {
                pad: function (r, i) {
                  r.concat(n.lib.WordArray.create([2147483648], 1)),
                    n.pad.ZeroPadding.pad(r, i);
                },
                unpad: function (r) {
                  n.pad.ZeroPadding.unpad(r), r.sigBytes--;
                },
              }),
              n.pad.Iso97971
            );
          });
        })(Yo)),
      Yo.exports
    );
  }
  var jo = { exports: {} },
    hc;
  function Bp() {
    return (
      hc ||
        ((hc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.pad.ZeroPadding = {
                pad: function (r, i) {
                  var o = i * 4;
                  r.clamp(), (r.sigBytes += o - (r.sigBytes % o || o));
                },
                unpad: function (r) {
                  for (
                    var i = r.words, o = r.sigBytes - 1, o = r.sigBytes - 1;
                    o >= 0;
                    o--
                  )
                    if ((i[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) {
                      r.sigBytes = o + 1;
                      break;
                    }
                },
              }),
              n.pad.ZeroPadding
            );
          });
        })(jo)),
      jo.exports
    );
  }
  var $o = { exports: {} },
    pc;
  function Fp() {
    return (
      pc ||
        ((pc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (n.pad.NoPadding = {
                pad: function () {},
                unpad: function () {},
              }),
              n.pad.NoPadding
            );
          });
        })($o)),
      $o.exports
    );
  }
  var Uo = { exports: {} },
    mc;
  function Yp() {
    return (
      mc ||
        ((mc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), Ge());
          })(ge, function (n) {
            return (
              (function (r) {
                var i = n,
                  o = i.lib,
                  s = o.CipherParams,
                  a = i.enc,
                  c = a.Hex,
                  l = i.format;
                l.Hex = {
                  stringify: function (u) {
                    return u.ciphertext.toString(c);
                  },
                  parse: function (u) {
                    var m = c.parse(u);
                    return s.create({ ciphertext: m });
                  },
                };
              })(),
              n.format.Hex
            );
          });
        })(Uo)),
      Uo.exports
    );
  }
  var Ho = { exports: {} },
    gc;
  function jp() {
    return (
      gc ||
        ((gc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), nr(), rr(), In(), Ge());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.BlockCipher,
                  s = r.algo,
                  a = [],
                  c = [],
                  l = [],
                  u = [],
                  m = [],
                  h = [],
                  v = [],
                  f = [],
                  d = [],
                  y = [];
                (function () {
                  for (var g = [], b = 0; b < 256; b++)
                    b < 128 ? (g[b] = b << 1) : (g[b] = (b << 1) ^ 283);
                  for (var _ = 0, S = 0, b = 0; b < 256; b++) {
                    var k = S ^ (S << 1) ^ (S << 2) ^ (S << 3) ^ (S << 4);
                    (k = (k >>> 8) ^ (k & 255) ^ 99), (a[_] = k), (c[k] = _);
                    var E = g[_],
                      T = g[E],
                      D = g[T],
                      C = (g[k] * 257) ^ (k * 16843008);
                    (l[_] = (C << 24) | (C >>> 8)),
                      (u[_] = (C << 16) | (C >>> 16)),
                      (m[_] = (C << 8) | (C >>> 24)),
                      (h[_] = C);
                    var C =
                      (D * 16843009) ^ (T * 65537) ^ (E * 257) ^ (_ * 16843008);
                    (v[k] = (C << 24) | (C >>> 8)),
                      (f[k] = (C << 16) | (C >>> 16)),
                      (d[k] = (C << 8) | (C >>> 24)),
                      (y[k] = C),
                      _
                        ? ((_ = E ^ g[g[g[D ^ E]]]), (S ^= g[g[S]]))
                        : (_ = S = 1);
                  }
                })();
                var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                  p = (s.AES = o.extend({
                    _doReset: function () {
                      var g;
                      if (
                        !(this._nRounds && this._keyPriorReset === this._key)
                      ) {
                        for (
                          var b = (this._keyPriorReset = this._key),
                            _ = b.words,
                            S = b.sigBytes / 4,
                            k = (this._nRounds = S + 6),
                            E = (k + 1) * 4,
                            T = (this._keySchedule = []),
                            D = 0;
                          D < E;
                          D++
                        )
                          D < S
                            ? (T[D] = _[D])
                            : ((g = T[D - 1]),
                              D % S
                                ? S > 6 &&
                                  D % S == 4 &&
                                  (g =
                                    (a[g >>> 24] << 24) |
                                    (a[(g >>> 16) & 255] << 16) |
                                    (a[(g >>> 8) & 255] << 8) |
                                    a[g & 255])
                                : ((g = (g << 8) | (g >>> 24)),
                                  (g =
                                    (a[g >>> 24] << 24) |
                                    (a[(g >>> 16) & 255] << 16) |
                                    (a[(g >>> 8) & 255] << 8) |
                                    a[g & 255]),
                                  (g ^= w[(D / S) | 0] << 24)),
                              (T[D] = T[D - S] ^ g));
                        for (
                          var C = (this._invKeySchedule = []), A = 0;
                          A < E;
                          A++
                        ) {
                          var D = E - A;
                          if (A % 4) var g = T[D];
                          else var g = T[D - 4];
                          A < 4 || D <= 4
                            ? (C[A] = g)
                            : (C[A] =
                                v[a[g >>> 24]] ^
                                f[a[(g >>> 16) & 255]] ^
                                d[a[(g >>> 8) & 255]] ^
                                y[a[g & 255]]);
                        }
                      }
                    },
                    encryptBlock: function (g, b) {
                      this._doCryptBlock(
                        g,
                        b,
                        this._keySchedule,
                        l,
                        u,
                        m,
                        h,
                        a
                      );
                    },
                    decryptBlock: function (g, b) {
                      var _ = g[b + 1];
                      (g[b + 1] = g[b + 3]),
                        (g[b + 3] = _),
                        this._doCryptBlock(
                          g,
                          b,
                          this._invKeySchedule,
                          v,
                          f,
                          d,
                          y,
                          c
                        );
                      var _ = g[b + 1];
                      (g[b + 1] = g[b + 3]), (g[b + 3] = _);
                    },
                    _doCryptBlock: function (g, b, _, S, k, E, T, D) {
                      for (
                        var C = this._nRounds,
                          A = g[b] ^ _[0],
                          M = g[b + 1] ^ _[1],
                          L = g[b + 2] ^ _[2],
                          H = g[b + 3] ^ _[3],
                          j = 4,
                          F = 1;
                        F < C;
                        F++
                      ) {
                        var K =
                            S[A >>> 24] ^
                            k[(M >>> 16) & 255] ^
                            E[(L >>> 8) & 255] ^
                            T[H & 255] ^
                            _[j++],
                          Z =
                            S[M >>> 24] ^
                            k[(L >>> 16) & 255] ^
                            E[(H >>> 8) & 255] ^
                            T[A & 255] ^
                            _[j++],
                          J =
                            S[L >>> 24] ^
                            k[(H >>> 16) & 255] ^
                            E[(A >>> 8) & 255] ^
                            T[M & 255] ^
                            _[j++],
                          I =
                            S[H >>> 24] ^
                            k[(A >>> 16) & 255] ^
                            E[(M >>> 8) & 255] ^
                            T[L & 255] ^
                            _[j++];
                        (A = K), (M = Z), (L = J), (H = I);
                      }
                      var K =
                          ((D[A >>> 24] << 24) |
                            (D[(M >>> 16) & 255] << 16) |
                            (D[(L >>> 8) & 255] << 8) |
                            D[H & 255]) ^
                          _[j++],
                        Z =
                          ((D[M >>> 24] << 24) |
                            (D[(L >>> 16) & 255] << 16) |
                            (D[(H >>> 8) & 255] << 8) |
                            D[A & 255]) ^
                          _[j++],
                        J =
                          ((D[L >>> 24] << 24) |
                            (D[(H >>> 16) & 255] << 16) |
                            (D[(A >>> 8) & 255] << 8) |
                            D[M & 255]) ^
                          _[j++],
                        I =
                          ((D[H >>> 24] << 24) |
                            (D[(A >>> 16) & 255] << 16) |
                            (D[(M >>> 8) & 255] << 8) |
                            D[L & 255]) ^
                          _[j++];
                      (g[b] = K),
                        (g[b + 1] = Z),
                        (g[b + 2] = J),
                        (g[b + 3] = I);
                    },
                    keySize: 256 / 32,
                  }));
                r.AES = o._createHelper(p);
              })(),
              n.AES
            );
          });
        })(Ho)),
      Ho.exports
    );
  }
  var zo = { exports: {} },
    vc;
  function $p() {
    return (
      vc ||
        ((vc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), nr(), rr(), In(), Ge());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.WordArray,
                  s = i.BlockCipher,
                  a = r.algo,
                  c = [
                    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                    59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47,
                    39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53,
                    45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
                  ],
                  l = [
                    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4,
                    26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40,
                    51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29,
                    32,
                  ],
                  u = [
                    1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28,
                  ],
                  m = [
                    {
                      0: 8421888,
                      268435456: 32768,
                      536870912: 8421378,
                      805306368: 2,
                      1073741824: 512,
                      1342177280: 8421890,
                      1610612736: 8389122,
                      1879048192: 8388608,
                      2147483648: 514,
                      2415919104: 8389120,
                      2684354560: 33280,
                      2952790016: 8421376,
                      3221225472: 32770,
                      3489660928: 8388610,
                      3758096384: 0,
                      4026531840: 33282,
                      134217728: 0,
                      402653184: 8421890,
                      671088640: 33282,
                      939524096: 32768,
                      1207959552: 8421888,
                      1476395008: 512,
                      1744830464: 8421378,
                      2013265920: 2,
                      2281701376: 8389120,
                      2550136832: 33280,
                      2818572288: 8421376,
                      3087007744: 8389122,
                      3355443200: 8388610,
                      3623878656: 32770,
                      3892314112: 514,
                      4160749568: 8388608,
                      1: 32768,
                      268435457: 2,
                      536870913: 8421888,
                      805306369: 8388608,
                      1073741825: 8421378,
                      1342177281: 33280,
                      1610612737: 512,
                      1879048193: 8389122,
                      2147483649: 8421890,
                      2415919105: 8421376,
                      2684354561: 8388610,
                      2952790017: 33282,
                      3221225473: 514,
                      3489660929: 8389120,
                      3758096385: 32770,
                      4026531841: 0,
                      134217729: 8421890,
                      402653185: 8421376,
                      671088641: 8388608,
                      939524097: 512,
                      1207959553: 32768,
                      1476395009: 8388610,
                      1744830465: 2,
                      2013265921: 33282,
                      2281701377: 32770,
                      2550136833: 8389122,
                      2818572289: 514,
                      3087007745: 8421888,
                      3355443201: 8389120,
                      3623878657: 0,
                      3892314113: 33280,
                      4160749569: 8421378,
                    },
                    {
                      0: 1074282512,
                      16777216: 16384,
                      33554432: 524288,
                      50331648: 1074266128,
                      67108864: 1073741840,
                      83886080: 1074282496,
                      100663296: 1073758208,
                      117440512: 16,
                      134217728: 540672,
                      150994944: 1073758224,
                      167772160: 1073741824,
                      184549376: 540688,
                      201326592: 524304,
                      218103808: 0,
                      234881024: 16400,
                      251658240: 1074266112,
                      8388608: 1073758208,
                      25165824: 540688,
                      41943040: 16,
                      58720256: 1073758224,
                      75497472: 1074282512,
                      92274688: 1073741824,
                      109051904: 524288,
                      125829120: 1074266128,
                      142606336: 524304,
                      159383552: 0,
                      176160768: 16384,
                      192937984: 1074266112,
                      209715200: 1073741840,
                      226492416: 540672,
                      243269632: 1074282496,
                      260046848: 16400,
                      268435456: 0,
                      285212672: 1074266128,
                      301989888: 1073758224,
                      318767104: 1074282496,
                      335544320: 1074266112,
                      352321536: 16,
                      369098752: 540688,
                      385875968: 16384,
                      402653184: 16400,
                      419430400: 524288,
                      436207616: 524304,
                      452984832: 1073741840,
                      469762048: 540672,
                      486539264: 1073758208,
                      503316480: 1073741824,
                      520093696: 1074282512,
                      276824064: 540688,
                      293601280: 524288,
                      310378496: 1074266112,
                      327155712: 16384,
                      343932928: 1073758208,
                      360710144: 1074282512,
                      377487360: 16,
                      394264576: 1073741824,
                      411041792: 1074282496,
                      427819008: 1073741840,
                      444596224: 1073758224,
                      461373440: 524304,
                      478150656: 0,
                      494927872: 16400,
                      511705088: 1074266128,
                      528482304: 540672,
                    },
                    {
                      0: 260,
                      1048576: 0,
                      2097152: 67109120,
                      3145728: 65796,
                      4194304: 65540,
                      5242880: 67108868,
                      6291456: 67174660,
                      7340032: 67174400,
                      8388608: 67108864,
                      9437184: 67174656,
                      10485760: 65792,
                      11534336: 67174404,
                      12582912: 67109124,
                      13631488: 65536,
                      14680064: 4,
                      15728640: 256,
                      524288: 67174656,
                      1572864: 67174404,
                      2621440: 0,
                      3670016: 67109120,
                      4718592: 67108868,
                      5767168: 65536,
                      6815744: 65540,
                      7864320: 260,
                      8912896: 4,
                      9961472: 256,
                      11010048: 67174400,
                      12058624: 65796,
                      13107200: 65792,
                      14155776: 67109124,
                      15204352: 67174660,
                      16252928: 67108864,
                      16777216: 67174656,
                      17825792: 65540,
                      18874368: 65536,
                      19922944: 67109120,
                      20971520: 256,
                      22020096: 67174660,
                      23068672: 67108868,
                      24117248: 0,
                      25165824: 67109124,
                      26214400: 67108864,
                      27262976: 4,
                      28311552: 65792,
                      29360128: 67174400,
                      30408704: 260,
                      31457280: 65796,
                      32505856: 67174404,
                      17301504: 67108864,
                      18350080: 260,
                      19398656: 67174656,
                      20447232: 0,
                      21495808: 65540,
                      22544384: 67109120,
                      23592960: 256,
                      24641536: 67174404,
                      25690112: 65536,
                      26738688: 67174660,
                      27787264: 65796,
                      28835840: 67108868,
                      29884416: 67109124,
                      30932992: 67174400,
                      31981568: 4,
                      33030144: 65792,
                    },
                    {
                      0: 2151682048,
                      65536: 2147487808,
                      131072: 4198464,
                      196608: 2151677952,
                      262144: 0,
                      327680: 4198400,
                      393216: 2147483712,
                      458752: 4194368,
                      524288: 2147483648,
                      589824: 4194304,
                      655360: 64,
                      720896: 2147487744,
                      786432: 2151678016,
                      851968: 4160,
                      917504: 4096,
                      983040: 2151682112,
                      32768: 2147487808,
                      98304: 64,
                      163840: 2151678016,
                      229376: 2147487744,
                      294912: 4198400,
                      360448: 2151682112,
                      425984: 0,
                      491520: 2151677952,
                      557056: 4096,
                      622592: 2151682048,
                      688128: 4194304,
                      753664: 4160,
                      819200: 2147483648,
                      884736: 4194368,
                      950272: 4198464,
                      1015808: 2147483712,
                      1048576: 4194368,
                      1114112: 4198400,
                      1179648: 2147483712,
                      1245184: 0,
                      1310720: 4160,
                      1376256: 2151678016,
                      1441792: 2151682048,
                      1507328: 2147487808,
                      1572864: 2151682112,
                      1638400: 2147483648,
                      1703936: 2151677952,
                      1769472: 4198464,
                      1835008: 2147487744,
                      1900544: 4194304,
                      1966080: 64,
                      2031616: 4096,
                      1081344: 2151677952,
                      1146880: 2151682112,
                      1212416: 0,
                      1277952: 4198400,
                      1343488: 4194368,
                      1409024: 2147483648,
                      1474560: 2147487808,
                      1540096: 64,
                      1605632: 2147483712,
                      1671168: 4096,
                      1736704: 2147487744,
                      1802240: 2151678016,
                      1867776: 4160,
                      1933312: 2151682048,
                      1998848: 4194304,
                      2064384: 4198464,
                    },
                    {
                      0: 128,
                      4096: 17039360,
                      8192: 262144,
                      12288: 536870912,
                      16384: 537133184,
                      20480: 16777344,
                      24576: 553648256,
                      28672: 262272,
                      32768: 16777216,
                      36864: 537133056,
                      40960: 536871040,
                      45056: 553910400,
                      49152: 553910272,
                      53248: 0,
                      57344: 17039488,
                      61440: 553648128,
                      2048: 17039488,
                      6144: 553648256,
                      10240: 128,
                      14336: 17039360,
                      18432: 262144,
                      22528: 537133184,
                      26624: 553910272,
                      30720: 536870912,
                      34816: 537133056,
                      38912: 0,
                      43008: 553910400,
                      47104: 16777344,
                      51200: 536871040,
                      55296: 553648128,
                      59392: 16777216,
                      63488: 262272,
                      65536: 262144,
                      69632: 128,
                      73728: 536870912,
                      77824: 553648256,
                      81920: 16777344,
                      86016: 553910272,
                      90112: 537133184,
                      94208: 16777216,
                      98304: 553910400,
                      102400: 553648128,
                      106496: 17039360,
                      110592: 537133056,
                      114688: 262272,
                      118784: 536871040,
                      122880: 0,
                      126976: 17039488,
                      67584: 553648256,
                      71680: 16777216,
                      75776: 17039360,
                      79872: 537133184,
                      83968: 536870912,
                      88064: 17039488,
                      92160: 128,
                      96256: 553910272,
                      100352: 262272,
                      104448: 553910400,
                      108544: 0,
                      112640: 553648128,
                      116736: 16777344,
                      120832: 262144,
                      124928: 537133056,
                      129024: 536871040,
                    },
                    {
                      0: 268435464,
                      256: 8192,
                      512: 270532608,
                      768: 270540808,
                      1024: 268443648,
                      1280: 2097152,
                      1536: 2097160,
                      1792: 268435456,
                      2048: 0,
                      2304: 268443656,
                      2560: 2105344,
                      2816: 8,
                      3072: 270532616,
                      3328: 2105352,
                      3584: 8200,
                      3840: 270540800,
                      128: 270532608,
                      384: 270540808,
                      640: 8,
                      896: 2097152,
                      1152: 2105352,
                      1408: 268435464,
                      1664: 268443648,
                      1920: 8200,
                      2176: 2097160,
                      2432: 8192,
                      2688: 268443656,
                      2944: 270532616,
                      3200: 0,
                      3456: 270540800,
                      3712: 2105344,
                      3968: 268435456,
                      4096: 268443648,
                      4352: 270532616,
                      4608: 270540808,
                      4864: 8200,
                      5120: 2097152,
                      5376: 268435456,
                      5632: 268435464,
                      5888: 2105344,
                      6144: 2105352,
                      6400: 0,
                      6656: 8,
                      6912: 270532608,
                      7168: 8192,
                      7424: 268443656,
                      7680: 270540800,
                      7936: 2097160,
                      4224: 8,
                      4480: 2105344,
                      4736: 2097152,
                      4992: 268435464,
                      5248: 268443648,
                      5504: 8200,
                      5760: 270540808,
                      6016: 270532608,
                      6272: 270540800,
                      6528: 270532616,
                      6784: 8192,
                      7040: 2105352,
                      7296: 2097160,
                      7552: 0,
                      7808: 268435456,
                      8064: 268443656,
                    },
                    {
                      0: 1048576,
                      16: 33555457,
                      32: 1024,
                      48: 1049601,
                      64: 34604033,
                      80: 0,
                      96: 1,
                      112: 34603009,
                      128: 33555456,
                      144: 1048577,
                      160: 33554433,
                      176: 34604032,
                      192: 34603008,
                      208: 1025,
                      224: 1049600,
                      240: 33554432,
                      8: 34603009,
                      24: 0,
                      40: 33555457,
                      56: 34604032,
                      72: 1048576,
                      88: 33554433,
                      104: 33554432,
                      120: 1025,
                      136: 1049601,
                      152: 33555456,
                      168: 34603008,
                      184: 1048577,
                      200: 1024,
                      216: 34604033,
                      232: 1,
                      248: 1049600,
                      256: 33554432,
                      272: 1048576,
                      288: 33555457,
                      304: 34603009,
                      320: 1048577,
                      336: 33555456,
                      352: 34604032,
                      368: 1049601,
                      384: 1025,
                      400: 34604033,
                      416: 1049600,
                      432: 1,
                      448: 0,
                      464: 34603008,
                      480: 33554433,
                      496: 1024,
                      264: 1049600,
                      280: 33555457,
                      296: 34603009,
                      312: 1,
                      328: 33554432,
                      344: 1048576,
                      360: 1025,
                      376: 34604032,
                      392: 33554433,
                      408: 34603008,
                      424: 0,
                      440: 34604033,
                      456: 1049601,
                      472: 1024,
                      488: 33555456,
                      504: 1048577,
                    },
                    {
                      0: 134219808,
                      1: 131072,
                      2: 134217728,
                      3: 32,
                      4: 131104,
                      5: 134350880,
                      6: 134350848,
                      7: 2048,
                      8: 134348800,
                      9: 134219776,
                      10: 133120,
                      11: 134348832,
                      12: 2080,
                      13: 0,
                      14: 134217760,
                      15: 133152,
                      2147483648: 2048,
                      2147483649: 134350880,
                      2147483650: 134219808,
                      2147483651: 134217728,
                      2147483652: 134348800,
                      2147483653: 133120,
                      2147483654: 133152,
                      2147483655: 32,
                      2147483656: 134217760,
                      2147483657: 2080,
                      2147483658: 131104,
                      2147483659: 134350848,
                      2147483660: 0,
                      2147483661: 134348832,
                      2147483662: 134219776,
                      2147483663: 131072,
                      16: 133152,
                      17: 134350848,
                      18: 32,
                      19: 2048,
                      20: 134219776,
                      21: 134217760,
                      22: 134348832,
                      23: 131072,
                      24: 0,
                      25: 131104,
                      26: 134348800,
                      27: 134219808,
                      28: 134350880,
                      29: 133120,
                      30: 2080,
                      31: 134217728,
                      2147483664: 131072,
                      2147483665: 2048,
                      2147483666: 134348832,
                      2147483667: 133152,
                      2147483668: 32,
                      2147483669: 134348800,
                      2147483670: 134217728,
                      2147483671: 134219808,
                      2147483672: 134350880,
                      2147483673: 134217760,
                      2147483674: 134219776,
                      2147483675: 0,
                      2147483676: 133120,
                      2147483677: 2080,
                      2147483678: 131104,
                      2147483679: 134350848,
                    },
                  ],
                  h = [
                    4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                    2147483679,
                  ],
                  v = (a.DES = s.extend({
                    _doReset: function () {
                      for (
                        var w = this._key, p = w.words, g = [], b = 0;
                        b < 56;
                        b++
                      ) {
                        var _ = c[b] - 1;
                        g[b] = (p[_ >>> 5] >>> (31 - (_ % 32))) & 1;
                      }
                      for (var S = (this._subKeys = []), k = 0; k < 16; k++) {
                        for (var E = (S[k] = []), T = u[k], b = 0; b < 24; b++)
                          (E[(b / 6) | 0] |=
                            g[(l[b] - 1 + T) % 28] << (31 - (b % 6))),
                            (E[4 + ((b / 6) | 0)] |=
                              g[28 + ((l[b + 24] - 1 + T) % 28)] <<
                              (31 - (b % 6)));
                        E[0] = (E[0] << 1) | (E[0] >>> 31);
                        for (var b = 1; b < 7; b++)
                          E[b] = E[b] >>> ((b - 1) * 4 + 3);
                        E[7] = (E[7] << 5) | (E[7] >>> 27);
                      }
                      for (var D = (this._invSubKeys = []), b = 0; b < 16; b++)
                        D[b] = S[15 - b];
                    },
                    encryptBlock: function (w, p) {
                      this._doCryptBlock(w, p, this._subKeys);
                    },
                    decryptBlock: function (w, p) {
                      this._doCryptBlock(w, p, this._invSubKeys);
                    },
                    _doCryptBlock: function (w, p, g) {
                      (this._lBlock = w[p]),
                        (this._rBlock = w[p + 1]),
                        f.call(this, 4, 252645135),
                        f.call(this, 16, 65535),
                        d.call(this, 2, 858993459),
                        d.call(this, 8, 16711935),
                        f.call(this, 1, 1431655765);
                      for (var b = 0; b < 16; b++) {
                        for (
                          var _ = g[b],
                            S = this._lBlock,
                            k = this._rBlock,
                            E = 0,
                            T = 0;
                          T < 8;
                          T++
                        )
                          E |= m[T][((k ^ _[T]) & h[T]) >>> 0];
                        (this._lBlock = k), (this._rBlock = S ^ E);
                      }
                      var D = this._lBlock;
                      (this._lBlock = this._rBlock),
                        (this._rBlock = D),
                        f.call(this, 1, 1431655765),
                        d.call(this, 8, 16711935),
                        d.call(this, 2, 858993459),
                        f.call(this, 16, 65535),
                        f.call(this, 4, 252645135),
                        (w[p] = this._lBlock),
                        (w[p + 1] = this._rBlock);
                    },
                    keySize: 64 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32,
                  }));
                function f(w, p) {
                  var g = ((this._lBlock >>> w) ^ this._rBlock) & p;
                  (this._rBlock ^= g), (this._lBlock ^= g << w);
                }
                function d(w, p) {
                  var g = ((this._rBlock >>> w) ^ this._lBlock) & p;
                  (this._lBlock ^= g), (this._rBlock ^= g << w);
                }
                r.DES = s._createHelper(v);
                var y = (a.TripleDES = s.extend({
                  _doReset: function () {
                    var w = this._key,
                      p = w.words;
                    if (p.length !== 2 && p.length !== 4 && p.length < 6)
                      throw new Error(
                        "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
                      );
                    var g = p.slice(0, 2),
                      b = p.length < 4 ? p.slice(0, 2) : p.slice(2, 4),
                      _ = p.length < 6 ? p.slice(0, 2) : p.slice(4, 6);
                    (this._des1 = v.createEncryptor(o.create(g))),
                      (this._des2 = v.createEncryptor(o.create(b))),
                      (this._des3 = v.createEncryptor(o.create(_)));
                  },
                  encryptBlock: function (w, p) {
                    this._des1.encryptBlock(w, p),
                      this._des2.decryptBlock(w, p),
                      this._des3.encryptBlock(w, p);
                  },
                  decryptBlock: function (w, p) {
                    this._des3.decryptBlock(w, p),
                      this._des2.encryptBlock(w, p),
                      this._des1.decryptBlock(w, p);
                  },
                  keySize: 192 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
                r.TripleDES = s._createHelper(y);
              })(),
              n.TripleDES
            );
          });
        })(zo)),
      zo.exports
    );
  }
  var Wo = { exports: {} },
    yc;
  function Up() {
    return (
      yc ||
        ((yc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), nr(), rr(), In(), Ge());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.StreamCipher,
                  s = r.algo,
                  a = (s.RC4 = o.extend({
                    _doReset: function () {
                      for (
                        var u = this._key,
                          m = u.words,
                          h = u.sigBytes,
                          v = (this._S = []),
                          f = 0;
                        f < 256;
                        f++
                      )
                        v[f] = f;
                      for (var f = 0, d = 0; f < 256; f++) {
                        var y = f % h,
                          w = (m[y >>> 2] >>> (24 - (y % 4) * 8)) & 255;
                        d = (d + v[f] + w) % 256;
                        var p = v[f];
                        (v[f] = v[d]), (v[d] = p);
                      }
                      this._i = this._j = 0;
                    },
                    _doProcessBlock: function (u, m) {
                      u[m] ^= c.call(this);
                    },
                    keySize: 256 / 32,
                    ivSize: 0,
                  }));
                function c() {
                  for (
                    var u = this._S, m = this._i, h = this._j, v = 0, f = 0;
                    f < 4;
                    f++
                  ) {
                    (m = (m + 1) % 256), (h = (h + u[m]) % 256);
                    var d = u[m];
                    (u[m] = u[h]),
                      (u[h] = d),
                      (v |= u[(u[m] + u[h]) % 256] << (24 - f * 8));
                  }
                  return (this._i = m), (this._j = h), v;
                }
                r.RC4 = o._createHelper(a);
                var l = (s.RC4Drop = a.extend({
                  cfg: a.cfg.extend({ drop: 192 }),
                  _doReset: function () {
                    a._doReset.call(this);
                    for (var u = this.cfg.drop; u > 0; u--) c.call(this);
                  },
                }));
                r.RC4Drop = o._createHelper(l);
              })(),
              n.RC4
            );
          });
        })(Wo)),
      Wo.exports
    );
  }
  var Vo = { exports: {} },
    xc;
  function Hp() {
    return (
      xc ||
        ((xc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), nr(), rr(), In(), Ge());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.StreamCipher,
                  s = r.algo,
                  a = [],
                  c = [],
                  l = [],
                  u = (s.Rabbit = o.extend({
                    _doReset: function () {
                      for (
                        var h = this._key.words, v = this.cfg.iv, f = 0;
                        f < 4;
                        f++
                      )
                        h[f] =
                          (((h[f] << 8) | (h[f] >>> 24)) & 16711935) |
                          (((h[f] << 24) | (h[f] >>> 8)) & 4278255360);
                      var d = (this._X = [
                          h[0],
                          (h[3] << 16) | (h[2] >>> 16),
                          h[1],
                          (h[0] << 16) | (h[3] >>> 16),
                          h[2],
                          (h[1] << 16) | (h[0] >>> 16),
                          h[3],
                          (h[2] << 16) | (h[1] >>> 16),
                        ]),
                        y = (this._C = [
                          (h[2] << 16) | (h[2] >>> 16),
                          (h[0] & 4294901760) | (h[1] & 65535),
                          (h[3] << 16) | (h[3] >>> 16),
                          (h[1] & 4294901760) | (h[2] & 65535),
                          (h[0] << 16) | (h[0] >>> 16),
                          (h[2] & 4294901760) | (h[3] & 65535),
                          (h[1] << 16) | (h[1] >>> 16),
                          (h[3] & 4294901760) | (h[0] & 65535),
                        ]);
                      this._b = 0;
                      for (var f = 0; f < 4; f++) m.call(this);
                      for (var f = 0; f < 8; f++) y[f] ^= d[(f + 4) & 7];
                      if (v) {
                        var w = v.words,
                          p = w[0],
                          g = w[1],
                          b =
                            (((p << 8) | (p >>> 24)) & 16711935) |
                            (((p << 24) | (p >>> 8)) & 4278255360),
                          _ =
                            (((g << 8) | (g >>> 24)) & 16711935) |
                            (((g << 24) | (g >>> 8)) & 4278255360),
                          S = (b >>> 16) | (_ & 4294901760),
                          k = (_ << 16) | (b & 65535);
                        (y[0] ^= b),
                          (y[1] ^= S),
                          (y[2] ^= _),
                          (y[3] ^= k),
                          (y[4] ^= b),
                          (y[5] ^= S),
                          (y[6] ^= _),
                          (y[7] ^= k);
                        for (var f = 0; f < 4; f++) m.call(this);
                      }
                    },
                    _doProcessBlock: function (h, v) {
                      var f = this._X;
                      m.call(this),
                        (a[0] = f[0] ^ (f[5] >>> 16) ^ (f[3] << 16)),
                        (a[1] = f[2] ^ (f[7] >>> 16) ^ (f[5] << 16)),
                        (a[2] = f[4] ^ (f[1] >>> 16) ^ (f[7] << 16)),
                        (a[3] = f[6] ^ (f[3] >>> 16) ^ (f[1] << 16));
                      for (var d = 0; d < 4; d++)
                        (a[d] =
                          (((a[d] << 8) | (a[d] >>> 24)) & 16711935) |
                          (((a[d] << 24) | (a[d] >>> 8)) & 4278255360)),
                          (h[v + d] ^= a[d]);
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32,
                  }));
                function m() {
                  for (var h = this._X, v = this._C, f = 0; f < 8; f++)
                    c[f] = v[f];
                  (v[0] = (v[0] + 1295307597 + this._b) | 0),
                    (v[1] =
                      (v[1] + 3545052371 + (v[0] >>> 0 < c[0] >>> 0 ? 1 : 0)) |
                      0),
                    (v[2] =
                      (v[2] + 886263092 + (v[1] >>> 0 < c[1] >>> 0 ? 1 : 0)) |
                      0),
                    (v[3] =
                      (v[3] + 1295307597 + (v[2] >>> 0 < c[2] >>> 0 ? 1 : 0)) |
                      0),
                    (v[4] =
                      (v[4] + 3545052371 + (v[3] >>> 0 < c[3] >>> 0 ? 1 : 0)) |
                      0),
                    (v[5] =
                      (v[5] + 886263092 + (v[4] >>> 0 < c[4] >>> 0 ? 1 : 0)) |
                      0),
                    (v[6] =
                      (v[6] + 1295307597 + (v[5] >>> 0 < c[5] >>> 0 ? 1 : 0)) |
                      0),
                    (v[7] =
                      (v[7] + 3545052371 + (v[6] >>> 0 < c[6] >>> 0 ? 1 : 0)) |
                      0),
                    (this._b = v[7] >>> 0 < c[7] >>> 0 ? 1 : 0);
                  for (var f = 0; f < 8; f++) {
                    var d = h[f] + v[f],
                      y = d & 65535,
                      w = d >>> 16,
                      p = ((((y * y) >>> 17) + y * w) >>> 15) + w * w,
                      g =
                        (((d & 4294901760) * d) | 0) + (((d & 65535) * d) | 0);
                    l[f] = p ^ g;
                  }
                  (h[0] =
                    (l[0] +
                      ((l[7] << 16) | (l[7] >>> 16)) +
                      ((l[6] << 16) | (l[6] >>> 16))) |
                    0),
                    (h[1] = (l[1] + ((l[0] << 8) | (l[0] >>> 24)) + l[7]) | 0),
                    (h[2] =
                      (l[2] +
                        ((l[1] << 16) | (l[1] >>> 16)) +
                        ((l[0] << 16) | (l[0] >>> 16))) |
                      0),
                    (h[3] = (l[3] + ((l[2] << 8) | (l[2] >>> 24)) + l[1]) | 0),
                    (h[4] =
                      (l[4] +
                        ((l[3] << 16) | (l[3] >>> 16)) +
                        ((l[2] << 16) | (l[2] >>> 16))) |
                      0),
                    (h[5] = (l[5] + ((l[4] << 8) | (l[4] >>> 24)) + l[3]) | 0),
                    (h[6] =
                      (l[6] +
                        ((l[5] << 16) | (l[5] >>> 16)) +
                        ((l[4] << 16) | (l[4] >>> 16))) |
                      0),
                    (h[7] = (l[7] + ((l[6] << 8) | (l[6] >>> 24)) + l[5]) | 0);
                }
                r.Rabbit = o._createHelper(u);
              })(),
              n.Rabbit
            );
          });
        })(Vo)),
      Vo.exports
    );
  }
  var qo = { exports: {} },
    bc;
  function zp() {
    return (
      bc ||
        ((bc = 1),
        (function (e, t) {
          (function (n, r, i) {
            e.exports = r(_e(), nr(), rr(), In(), Ge());
          })(ge, function (n) {
            return (
              (function () {
                var r = n,
                  i = r.lib,
                  o = i.StreamCipher,
                  s = r.algo,
                  a = [],
                  c = [],
                  l = [],
                  u = (s.RabbitLegacy = o.extend({
                    _doReset: function () {
                      var h = this._key.words,
                        v = this.cfg.iv,
                        f = (this._X = [
                          h[0],
                          (h[3] << 16) | (h[2] >>> 16),
                          h[1],
                          (h[0] << 16) | (h[3] >>> 16),
                          h[2],
                          (h[1] << 16) | (h[0] >>> 16),
                          h[3],
                          (h[2] << 16) | (h[1] >>> 16),
                        ]),
                        d = (this._C = [
                          (h[2] << 16) | (h[2] >>> 16),
                          (h[0] & 4294901760) | (h[1] & 65535),
                          (h[3] << 16) | (h[3] >>> 16),
                          (h[1] & 4294901760) | (h[2] & 65535),
                          (h[0] << 16) | (h[0] >>> 16),
                          (h[2] & 4294901760) | (h[3] & 65535),
                          (h[1] << 16) | (h[1] >>> 16),
                          (h[3] & 4294901760) | (h[0] & 65535),
                        ]);
                      this._b = 0;
                      for (var y = 0; y < 4; y++) m.call(this);
                      for (var y = 0; y < 8; y++) d[y] ^= f[(y + 4) & 7];
                      if (v) {
                        var w = v.words,
                          p = w[0],
                          g = w[1],
                          b =
                            (((p << 8) | (p >>> 24)) & 16711935) |
                            (((p << 24) | (p >>> 8)) & 4278255360),
                          _ =
                            (((g << 8) | (g >>> 24)) & 16711935) |
                            (((g << 24) | (g >>> 8)) & 4278255360),
                          S = (b >>> 16) | (_ & 4294901760),
                          k = (_ << 16) | (b & 65535);
                        (d[0] ^= b),
                          (d[1] ^= S),
                          (d[2] ^= _),
                          (d[3] ^= k),
                          (d[4] ^= b),
                          (d[5] ^= S),
                          (d[6] ^= _),
                          (d[7] ^= k);
                        for (var y = 0; y < 4; y++) m.call(this);
                      }
                    },
                    _doProcessBlock: function (h, v) {
                      var f = this._X;
                      m.call(this),
                        (a[0] = f[0] ^ (f[5] >>> 16) ^ (f[3] << 16)),
                        (a[1] = f[2] ^ (f[7] >>> 16) ^ (f[5] << 16)),
                        (a[2] = f[4] ^ (f[1] >>> 16) ^ (f[7] << 16)),
                        (a[3] = f[6] ^ (f[3] >>> 16) ^ (f[1] << 16));
                      for (var d = 0; d < 4; d++)
                        (a[d] =
                          (((a[d] << 8) | (a[d] >>> 24)) & 16711935) |
                          (((a[d] << 24) | (a[d] >>> 8)) & 4278255360)),
                          (h[v + d] ^= a[d]);
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32,
                  }));
                function m() {
                  for (var h = this._X, v = this._C, f = 0; f < 8; f++)
                    c[f] = v[f];
                  (v[0] = (v[0] + 1295307597 + this._b) | 0),
                    (v[1] =
                      (v[1] + 3545052371 + (v[0] >>> 0 < c[0] >>> 0 ? 1 : 0)) |
                      0),
                    (v[2] =
                      (v[2] + 886263092 + (v[1] >>> 0 < c[1] >>> 0 ? 1 : 0)) |
                      0),
                    (v[3] =
                      (v[3] + 1295307597 + (v[2] >>> 0 < c[2] >>> 0 ? 1 : 0)) |
                      0),
                    (v[4] =
                      (v[4] + 3545052371 + (v[3] >>> 0 < c[3] >>> 0 ? 1 : 0)) |
                      0),
                    (v[5] =
                      (v[5] + 886263092 + (v[4] >>> 0 < c[4] >>> 0 ? 1 : 0)) |
                      0),
                    (v[6] =
                      (v[6] + 1295307597 + (v[5] >>> 0 < c[5] >>> 0 ? 1 : 0)) |
                      0),
                    (v[7] =
                      (v[7] + 3545052371 + (v[6] >>> 0 < c[6] >>> 0 ? 1 : 0)) |
                      0),
                    (this._b = v[7] >>> 0 < c[7] >>> 0 ? 1 : 0);
                  for (var f = 0; f < 8; f++) {
                    var d = h[f] + v[f],
                      y = d & 65535,
                      w = d >>> 16,
                      p = ((((y * y) >>> 17) + y * w) >>> 15) + w * w,
                      g =
                        (((d & 4294901760) * d) | 0) + (((d & 65535) * d) | 0);
                    l[f] = p ^ g;
                  }
                  (h[0] =
                    (l[0] +
                      ((l[7] << 16) | (l[7] >>> 16)) +
                      ((l[6] << 16) | (l[6] >>> 16))) |
                    0),
                    (h[1] = (l[1] + ((l[0] << 8) | (l[0] >>> 24)) + l[7]) | 0),
                    (h[2] =
                      (l[2] +
                        ((l[1] << 16) | (l[1] >>> 16)) +
                        ((l[0] << 16) | (l[0] >>> 16))) |
                      0),
                    (h[3] = (l[3] + ((l[2] << 8) | (l[2] >>> 24)) + l[1]) | 0),
                    (h[4] =
                      (l[4] +
                        ((l[3] << 16) | (l[3] >>> 16)) +
                        ((l[2] << 16) | (l[2] >>> 16))) |
                      0),
                    (h[5] = (l[5] + ((l[4] << 8) | (l[4] >>> 24)) + l[3]) | 0),
                    (h[6] =
                      (l[6] +
                        ((l[5] << 16) | (l[5] >>> 16)) +
                        ((l[4] << 16) | (l[4] >>> 16))) |
                      0),
                    (h[7] = (l[7] + ((l[6] << 8) | (l[6] >>> 24)) + l[5]) | 0);
                }
                r.RabbitLegacy = o._createHelper(u);
              })(),
              n.RabbitLegacy
            );
          });
        })(qo)),
      qo.exports
    );
  }
  (function (e, t) {
    (function (n, r, i) {
      e.exports = r(
        _e(),
        Ii(),
        wp(),
        _p(),
        nr(),
        Sp(),
        rr(),
        ua(),
        C0(),
        kp(),
        D0(),
        Ep(),
        Cp(),
        Dp(),
        da(),
        Tp(),
        In(),
        Ge(),
        Ap(),
        Op(),
        Mp(),
        Np(),
        Ip(),
        Rp(),
        Lp(),
        Pp(),
        Bp(),
        Fp(),
        Yp(),
        jp(),
        $p(),
        Up(),
        Hp(),
        zp()
      );
    })(ge, function (n) {
      return n;
    });
  })(E0);
  var Wp = E0.exports;
  const Go = ia(Wp); //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var T0;
  function X() {
    return T0.apply(null, arguments);
  }
  function Vp(e) {
    T0 = e;
  }
  function Ot(e) {
    return (
      e instanceof Array ||
      Object.prototype.toString.call(e) === "[object Array]"
    );
  }
  function Cn(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function Ce(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function fa(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e) if (Ce(e, t)) return !1;
    return !0;
  }
  function ot(e) {
    return e === void 0;
  }
  function tn(e) {
    return (
      typeof e == "number" ||
      Object.prototype.toString.call(e) === "[object Number]"
    );
  }
  function Br(e) {
    return (
      e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    );
  }
  function A0(e, t) {
    var n = [],
      r,
      i = e.length;
    for (r = 0; r < i; ++r) n.push(t(e[r], r));
    return n;
  }
  function pn(e, t) {
    for (var n in t) Ce(t, n) && (e[n] = t[n]);
    return (
      Ce(t, "toString") && (e.toString = t.toString),
      Ce(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function $t(e, t, n, r) {
    return Q0(e, t, n, r, !0).utc();
  }
  function qp() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    };
  }
  function pe(e) {
    return e._pf == null && (e._pf = qp()), e._pf;
  }
  var xs;
  Array.prototype.some
    ? (xs = Array.prototype.some)
    : (xs = function (e) {
        var t = Object(this),
          n = t.length >>> 0,
          r;
        for (r = 0; r < n; r++)
          if (r in t && e.call(this, t[r], r, t)) return !0;
        return !1;
      });
  function ha(e) {
    if (e._isValid == null) {
      var t = pe(e),
        n = xs.call(t.parsedDateParts, function (i) {
          return i != null;
        }),
        r =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (r =
            r &&
            t.charsLeftOver === 0 &&
            t.unusedTokens.length === 0 &&
            t.bigHour === void 0),
        Object.isFrozen == null || !Object.isFrozen(e))
      )
        e._isValid = r;
      else return r;
    }
    return e._isValid;
  }
  function Ri(e) {
    var t = $t(NaN);
    return e != null ? pn(pe(t), e) : (pe(t).userInvalidated = !0), t;
  }
  var wc = (X.momentProperties = []),
    Zo = !1;
  function pa(e, t) {
    var n,
      r,
      i,
      o = wc.length;
    if (
      (ot(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      ot(t._i) || (e._i = t._i),
      ot(t._f) || (e._f = t._f),
      ot(t._l) || (e._l = t._l),
      ot(t._strict) || (e._strict = t._strict),
      ot(t._tzm) || (e._tzm = t._tzm),
      ot(t._isUTC) || (e._isUTC = t._isUTC),
      ot(t._offset) || (e._offset = t._offset),
      ot(t._pf) || (e._pf = pe(t)),
      ot(t._locale) || (e._locale = t._locale),
      o > 0)
    )
      for (n = 0; n < o; n++) (r = wc[n]), (i = t[r]), ot(i) || (e[r] = i);
    return e;
  }
  function Fr(e) {
    pa(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      Zo === !1 && ((Zo = !0), X.updateOffset(this), (Zo = !1));
  }
  function Mt(e) {
    return e instanceof Fr || (e != null && e._isAMomentObject != null);
  }
  function O0(e) {
    X.suppressDeprecationWarnings === !1 &&
      typeof console < "u" &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function bt(e, t) {
    var n = !0;
    return pn(function () {
      if ((X.deprecationHandler != null && X.deprecationHandler(null, e), n)) {
        var r = [],
          i,
          o,
          s,
          a = arguments.length;
        for (o = 0; o < a; o++) {
          if (((i = ""), typeof arguments[o] == "object")) {
            i +=
              `
[` +
              o +
              "] ";
            for (s in arguments[0])
              Ce(arguments[0], s) && (i += s + ": " + arguments[0][s] + ", ");
            i = i.slice(0, -2);
          } else i = arguments[o];
          r.push(i);
        }
        O0(
          e +
            `
Arguments: ` +
            Array.prototype.slice.call(r).join("") +
            `
` +
            new Error().stack
        ),
          (n = !1);
      }
      return t.apply(this, arguments);
    }, t);
  }
  var _c = {};
  function M0(e, t) {
    X.deprecationHandler != null && X.deprecationHandler(e, t),
      _c[e] || (O0(t), (_c[e] = !0));
  }
  X.suppressDeprecationWarnings = !1;
  X.deprecationHandler = null;
  function Ut(e) {
    return (
      (typeof Function < "u" && e instanceof Function) ||
      Object.prototype.toString.call(e) === "[object Function]"
    );
  }
  function Gp(e) {
    var t, n;
    for (n in e)
      Ce(e, n) && ((t = e[n]), Ut(t) ? (this[n] = t) : (this["_" + n] = t));
    (this._config = e),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      ));
  }
  function bs(e, t) {
    var n = pn({}, e),
      r;
    for (r in t)
      Ce(t, r) &&
        (Cn(e[r]) && Cn(t[r])
          ? ((n[r] = {}), pn(n[r], e[r]), pn(n[r], t[r]))
          : t[r] != null
          ? (n[r] = t[r])
          : delete n[r]);
    for (r in e) Ce(e, r) && !Ce(t, r) && Cn(e[r]) && (n[r] = pn({}, n[r]));
    return n;
  }
  function ma(e) {
    e != null && this.set(e);
  }
  var ws;
  Object.keys
    ? (ws = Object.keys)
    : (ws = function (e) {
        var t,
          n = [];
        for (t in e) Ce(e, t) && n.push(t);
        return n;
      });
  var Zp = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  };
  function Kp(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return Ut(r) ? r.call(t, n) : r;
  }
  function Yt(e, t, n) {
    var r = "" + Math.abs(e),
      i = t - r.length,
      o = e >= 0;
    return (
      (o ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      r
    );
  }
  var ga =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Zr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Ko = {},
    Wn = {};
  function se(e, t, n, r) {
    var i = r;
    typeof r == "string" &&
      (i = function () {
        return this[r]();
      }),
      e && (Wn[e] = i),
      t &&
        (Wn[t[0]] = function () {
          return Yt(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (Wn[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function Xp(e) {
    return e.match(/\[[\s\S]/)
      ? e.replace(/^\[|\]$/g, "")
      : e.replace(/\\/g, "");
  }
  function Jp(e) {
    var t = e.match(ga),
      n,
      r;
    for (n = 0, r = t.length; n < r; n++)
      Wn[t[n]] ? (t[n] = Wn[t[n]]) : (t[n] = Xp(t[n]));
    return function (i) {
      var o = "",
        s;
      for (s = 0; s < r; s++) o += Ut(t[s]) ? t[s].call(i, e) : t[s];
      return o;
    };
  }
  function ni(e, t) {
    return e.isValid()
      ? ((t = N0(t, e.localeData())), (Ko[t] = Ko[t] || Jp(t)), Ko[t](e))
      : e.localeData().invalidDate();
  }
  function N0(e, t) {
    var n = 5;
    function r(i) {
      return t.longDateFormat(i) || i;
    }
    for (Zr.lastIndex = 0; n >= 0 && Zr.test(e); )
      (e = e.replace(Zr, r)), (Zr.lastIndex = 0), (n -= 1);
    return e;
  }
  var Qp = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  };
  function em(e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()];
    return t || !n
      ? t
      : ((this._longDateFormat[e] = n
          .match(ga)
          .map(function (r) {
            return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd"
              ? r.slice(1)
              : r;
          })
          .join("")),
        this._longDateFormat[e]);
  }
  var tm = "Invalid date";
  function nm() {
    return this._invalidDate;
  }
  var rm = "%d",
    im = /\d{1,2}/;
  function om(e) {
    return this._ordinal.replace("%d", e);
  }
  var sm = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  };
  function am(e, t, n, r) {
    var i = this._relativeTime[n];
    return Ut(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
  }
  function lm(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return Ut(n) ? n(t) : n.replace(/%s/i, t);
  }
  var wr = {};
  function Je(e, t) {
    var n = e.toLowerCase();
    wr[n] = wr[n + "s"] = wr[t] = e;
  }
  function wt(e) {
    return typeof e == "string" ? wr[e] || wr[e.toLowerCase()] : void 0;
  }
  function va(e) {
    var t = {},
      n,
      r;
    for (r in e) Ce(e, r) && ((n = wt(r)), n && (t[n] = e[r]));
    return t;
  }
  var I0 = {};
  function Qe(e, t) {
    I0[e] = t;
  }
  function cm(e) {
    var t = [],
      n;
    for (n in e) Ce(e, n) && t.push({ unit: n, priority: I0[n] });
    return (
      t.sort(function (r, i) {
        return r.priority - i.priority;
      }),
      t
    );
  }
  function Li(e) {
    return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
  }
  function gt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function ve(e) {
    var t = +e,
      n = 0;
    return t !== 0 && isFinite(t) && (n = gt(t)), n;
  }
  function ir(e, t) {
    return function (n) {
      return n != null
        ? (R0(this, e, n), X.updateOffset(this, t), this)
        : vi(this, e);
    };
  }
  function vi(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function R0(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      (t === "FullYear" && Li(e.year()) && e.month() === 1 && e.date() === 29
        ? ((n = ve(n)),
          e._d["set" + (e._isUTC ? "UTC" : "") + t](
            n,
            e.month(),
            $i(n, e.month())
          ))
        : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  function um(e) {
    return (e = wt(e)), Ut(this[e]) ? this[e]() : this;
  }
  function dm(e, t) {
    if (typeof e == "object") {
      e = va(e);
      var n = cm(e),
        r,
        i = n.length;
      for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit]);
    } else if (((e = wt(e)), Ut(this[e]))) return this[e](t);
    return this;
  }
  var L0 = /\d/,
    ft = /\d\d/,
    P0 = /\d{3}/,
    ya = /\d{4}/,
    Pi = /[+-]?\d{6}/,
    Le = /\d\d?/,
    B0 = /\d\d\d\d?/,
    F0 = /\d\d\d\d\d\d?/,
    Bi = /\d{1,3}/,
    xa = /\d{1,4}/,
    Fi = /[+-]?\d{1,6}/,
    or = /\d+/,
    Yi = /[+-]?\d+/,
    fm = /Z|[+-]\d\d:?\d\d/gi,
    ji = /Z|[+-]\d\d(?::?\d\d)?/gi,
    hm = /[+-]?\d+(\.\d{1,3})?/,
    Yr =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    yi;
  yi = {};
  function ee(e, t, n) {
    yi[e] = Ut(t)
      ? t
      : function (r, i) {
          return r && n ? n : t;
        };
  }
  function pm(e, t) {
    return Ce(yi, e) ? yi[e](t._strict, t._locale) : new RegExp(mm(e));
  }
  function mm(e) {
    return at(
      e
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (t, n, r, i, o) {
            return n || r || i || o;
          }
        )
    );
  }
  function at(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var _s = {};
  function Oe(e, t) {
    var n,
      r = t,
      i;
    for (
      typeof e == "string" && (e = [e]),
        tn(t) &&
          (r = function (o, s) {
            s[t] = ve(o);
          }),
        i = e.length,
        n = 0;
      n < i;
      n++
    )
      _s[e[n]] = r;
  }
  function jr(e, t) {
    Oe(e, function (n, r, i, o) {
      (i._w = i._w || {}), t(n, i._w, i, o);
    });
  }
  function gm(e, t, n) {
    t != null && Ce(_s, e) && _s[e](t, n._a, n, e);
  }
  var Xe = 0,
    Kt = 1,
    Lt = 2,
    Ve = 3,
    Dt = 4,
    Xt = 5,
    kn = 6,
    vm = 7,
    ym = 8;
  function xm(e, t) {
    return ((e % t) + t) % t;
  }
  var je;
  Array.prototype.indexOf
    ? (je = Array.prototype.indexOf)
    : (je = function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      });
  function $i(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = xm(t, 12);
    return (
      (e += (t - n) / 12), n === 1 ? (Li(e) ? 29 : 28) : 31 - ((n % 7) % 2)
    );
  }
  se("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  se("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  });
  se("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  });
  Je("month", "M");
  Qe("month", 8);
  ee("M", Le);
  ee("MM", Le, ft);
  ee("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  });
  ee("MMMM", function (e, t) {
    return t.monthsRegex(e);
  });
  Oe(["M", "MM"], function (e, t) {
    t[Kt] = ve(e) - 1;
  });
  Oe(["MMM", "MMMM"], function (e, t, n, r) {
    var i = n._locale.monthsParse(e, r, n._strict);
    i != null ? (t[Kt] = i) : (pe(n).invalidMonth = e);
  });
  var bm =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    Y0 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    j0 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    wm = Yr,
    _m = Yr;
  function Sm(e, t) {
    return e
      ? Ot(this._months)
        ? this._months[e.month()]
        : this._months[
            (this._months.isFormat || j0).test(t) ? "format" : "standalone"
          ][e.month()]
      : Ot(this._months)
      ? this._months
      : this._months.standalone;
  }
  function km(e, t) {
    return e
      ? Ot(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[j0.test(t) ? "format" : "standalone"][e.month()]
      : Ot(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
  }
  function Em(e, t, n) {
    var r,
      i,
      o,
      s = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          r = 0;
        r < 12;
        ++r
      )
        (o = $t([2e3, r])),
          (this._shortMonthsParse[r] = this.monthsShort(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase());
    return n
      ? t === "MMM"
        ? ((i = je.call(this._shortMonthsParse, s)), i !== -1 ? i : null)
        : ((i = je.call(this._longMonthsParse, s)), i !== -1 ? i : null)
      : t === "MMM"
      ? ((i = je.call(this._shortMonthsParse, s)),
        i !== -1
          ? i
          : ((i = je.call(this._longMonthsParse, s)), i !== -1 ? i : null))
      : ((i = je.call(this._longMonthsParse, s)),
        i !== -1
          ? i
          : ((i = je.call(this._shortMonthsParse, s)), i !== -1 ? i : null));
  }
  function Cm(e, t, n) {
    var r, i, o;
    if (this._monthsParseExact) return Em.call(this, e, t, n);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        r = 0;
      r < 12;
      r++
    ) {
      if (
        ((i = $t([2e3, r])),
        n &&
          !this._longMonthsParse[r] &&
          ((this._longMonthsParse[r] = new RegExp(
            "^" + this.months(i, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[r] = new RegExp(
            "^" + this.monthsShort(i, "").replace(".", "") + "$",
            "i"
          ))),
        !n &&
          !this._monthsParse[r] &&
          ((o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
          (this._monthsParse[r] = new RegExp(o.replace(".", ""), "i"))),
        n && t === "MMMM" && this._longMonthsParse[r].test(e))
      )
        return r;
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) return r;
      if (!n && this._monthsParse[r].test(e)) return r;
    }
  }
  function $0(e, t) {
    var n;
    if (!e.isValid()) return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t)) t = ve(t);
      else if (((t = e.localeData().monthsParse(t)), !tn(t))) return e;
    }
    return (
      (n = Math.min(e.date(), $i(e.year(), t))),
      e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
      e
    );
  }
  function U0(e) {
    return e != null
      ? ($0(this, e), X.updateOffset(this, !0), this)
      : vi(this, "Month");
  }
  function Dm() {
    return $i(this.year(), this.month());
  }
  function Tm(e) {
    return this._monthsParseExact
      ? (Ce(this, "_monthsRegex") || H0.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (Ce(this, "_monthsShortRegex") || (this._monthsShortRegex = wm),
        this._monthsShortStrictRegex && e
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function Am(e) {
    return this._monthsParseExact
      ? (Ce(this, "_monthsRegex") || H0.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex)
      : (Ce(this, "_monthsRegex") || (this._monthsRegex = _m),
        this._monthsStrictRegex && e
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function H0() {
    function e(s, a) {
      return a.length - s.length;
    }
    var t = [],
      n = [],
      r = [],
      i,
      o;
    for (i = 0; i < 12; i++)
      (o = $t([2e3, i])),
        t.push(this.monthsShort(o, "")),
        n.push(this.months(o, "")),
        r.push(this.months(o, "")),
        r.push(this.monthsShort(o, ""));
    for (t.sort(e), n.sort(e), r.sort(e), i = 0; i < 12; i++)
      (t[i] = at(t[i])), (n[i] = at(n[i]));
    for (i = 0; i < 24; i++) r[i] = at(r[i]);
    (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  se("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? Yt(e, 4) : "+" + e;
  });
  se(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  se(0, ["YYYY", 4], 0, "year");
  se(0, ["YYYYY", 5], 0, "year");
  se(0, ["YYYYYY", 6, !0], 0, "year");
  Je("year", "y");
  Qe("year", 1);
  ee("Y", Yi);
  ee("YY", Le, ft);
  ee("YYYY", xa, ya);
  ee("YYYYY", Fi, Pi);
  ee("YYYYYY", Fi, Pi);
  Oe(["YYYYY", "YYYYYY"], Xe);
  Oe("YYYY", function (e, t) {
    t[Xe] = e.length === 2 ? X.parseTwoDigitYear(e) : ve(e);
  });
  Oe("YY", function (e, t) {
    t[Xe] = X.parseTwoDigitYear(e);
  });
  Oe("Y", function (e, t) {
    t[Xe] = parseInt(e, 10);
  });
  function _r(e) {
    return Li(e) ? 366 : 365;
  }
  X.parseTwoDigitYear = function (e) {
    return ve(e) + (ve(e) > 68 ? 1900 : 2e3);
  };
  var z0 = ir("FullYear", !0);
  function Om() {
    return Li(this.year());
  }
  function Mm(e, t, n, r, i, o, s) {
    var a;
    return (
      e < 100 && e >= 0
        ? ((a = new Date(e + 400, t, n, r, i, o, s)),
          isFinite(a.getFullYear()) && a.setFullYear(e))
        : (a = new Date(e, t, n, r, i, o, s)),
      a
    );
  }
  function kr(e) {
    var t, n;
    return (
      e < 100 && e >= 0
        ? ((n = Array.prototype.slice.call(arguments)),
          (n[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, n))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function xi(e, t, n) {
    var r = 7 + t - n,
      i = (7 + kr(e, 0, r).getUTCDay() - t) % 7;
    return -i + r - 1;
  }
  function W0(e, t, n, r, i) {
    var o = (7 + n - r) % 7,
      s = xi(e, r, i),
      a = 1 + 7 * (t - 1) + o + s,
      c,
      l;
    return (
      a <= 0
        ? ((c = e - 1), (l = _r(c) + a))
        : a > _r(e)
        ? ((c = e + 1), (l = a - _r(e)))
        : ((c = e), (l = a)),
      { year: c, dayOfYear: l }
    );
  }
  function Er(e, t, n) {
    var r = xi(e.year(), t, n),
      i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
      o,
      s;
    return (
      i < 1
        ? ((s = e.year() - 1), (o = i + Qt(s, t, n)))
        : i > Qt(e.year(), t, n)
        ? ((o = i - Qt(e.year(), t, n)), (s = e.year() + 1))
        : ((s = e.year()), (o = i)),
      { week: o, year: s }
    );
  }
  function Qt(e, t, n) {
    var r = xi(e, t, n),
      i = xi(e + 1, t, n);
    return (_r(e) - r + i) / 7;
  }
  se("w", ["ww", 2], "wo", "week");
  se("W", ["WW", 2], "Wo", "isoWeek");
  Je("week", "w");
  Je("isoWeek", "W");
  Qe("week", 5);
  Qe("isoWeek", 5);
  ee("w", Le);
  ee("ww", Le, ft);
  ee("W", Le);
  ee("WW", Le, ft);
  jr(["w", "ww", "W", "WW"], function (e, t, n, r) {
    t[r.substr(0, 1)] = ve(e);
  });
  function Nm(e) {
    return Er(e, this._week.dow, this._week.doy).week;
  }
  var Im = { dow: 0, doy: 6 };
  function Rm() {
    return this._week.dow;
  }
  function Lm() {
    return this._week.doy;
  }
  function Pm(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function Bm(e) {
    var t = Er(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  se("d", 0, "do", "day");
  se("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  });
  se("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  });
  se("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  });
  se("e", 0, 0, "weekday");
  se("E", 0, 0, "isoWeekday");
  Je("day", "d");
  Je("weekday", "e");
  Je("isoWeekday", "E");
  Qe("day", 11);
  Qe("weekday", 11);
  Qe("isoWeekday", 11);
  ee("d", Le);
  ee("e", Le);
  ee("E", Le);
  ee("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  });
  ee("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  });
  ee("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  });
  jr(["dd", "ddd", "dddd"], function (e, t, n, r) {
    var i = n._locale.weekdaysParse(e, r, n._strict);
    i != null ? (t.d = i) : (pe(n).invalidWeekday = e);
  });
  jr(["d", "e", "E"], function (e, t, n, r) {
    t[r] = ve(e);
  });
  function Fm(e, t) {
    return typeof e != "string"
      ? e
      : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
      : parseInt(e, 10);
  }
  function Ym(e, t) {
    return typeof e == "string"
      ? t.weekdaysParse(e) % 7 || 7
      : isNaN(e)
      ? null
      : e;
  }
  function ba(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var jm = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    V0 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    $m = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Um = Yr,
    Hm = Yr,
    zm = Yr;
  function Wm(e, t) {
    var n = Ot(this._weekdays)
      ? this._weekdays
      : this._weekdays[
          e && e !== !0 && this._weekdays.isFormat.test(t)
            ? "format"
            : "standalone"
        ];
    return e === !0 ? ba(n, this._week.dow) : e ? n[e.day()] : n;
  }
  function Vm(e) {
    return e === !0
      ? ba(this._weekdaysShort, this._week.dow)
      : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort;
  }
  function qm(e) {
    return e === !0
      ? ba(this._weekdaysMin, this._week.dow)
      : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin;
  }
  function Gm(e, t, n) {
    var r,
      i,
      o,
      s = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          r = 0;
        r < 7;
        ++r
      )
        (o = $t([2e3, 1]).day(r)),
          (this._minWeekdaysParse[r] = this.weekdaysMin(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[r] = this.weekdaysShort(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase());
    return n
      ? t === "dddd"
        ? ((i = je.call(this._weekdaysParse, s)), i !== -1 ? i : null)
        : t === "ddd"
        ? ((i = je.call(this._shortWeekdaysParse, s)), i !== -1 ? i : null)
        : ((i = je.call(this._minWeekdaysParse, s)), i !== -1 ? i : null)
      : t === "dddd"
      ? ((i = je.call(this._weekdaysParse, s)),
        i !== -1 || ((i = je.call(this._shortWeekdaysParse, s)), i !== -1)
          ? i
          : ((i = je.call(this._minWeekdaysParse, s)), i !== -1 ? i : null))
      : t === "ddd"
      ? ((i = je.call(this._shortWeekdaysParse, s)),
        i !== -1 || ((i = je.call(this._weekdaysParse, s)), i !== -1)
          ? i
          : ((i = je.call(this._minWeekdaysParse, s)), i !== -1 ? i : null))
      : ((i = je.call(this._minWeekdaysParse, s)),
        i !== -1 || ((i = je.call(this._weekdaysParse, s)), i !== -1)
          ? i
          : ((i = je.call(this._shortWeekdaysParse, s)), i !== -1 ? i : null));
  }
  function Zm(e, t, n) {
    var r, i, o;
    if (this._weekdaysParseExact) return Gm.call(this, e, t, n);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        r = 0;
      r < 7;
      r++
    ) {
      if (
        ((i = $t([2e3, 1]).day(r)),
        n &&
          !this._fullWeekdaysParse[r] &&
          ((this._fullWeekdaysParse[r] = new RegExp(
            "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[r] = new RegExp(
            "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[r] = new RegExp(
            "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
            "i"
          ))),
        this._weekdaysParse[r] ||
          ((o =
            "^" +
            this.weekdays(i, "") +
            "|^" +
            this.weekdaysShort(i, "") +
            "|^" +
            this.weekdaysMin(i, "")),
          (this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i"))),
        n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      )
        return r;
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e)) return r;
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e)) return r;
      if (!n && this._weekdaysParse[r].test(e)) return r;
    }
  }
  function Km(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null
      ? ((e = Fm(e, this.localeData())), this.add(e - t, "d"))
      : t;
  }
  function Xm(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function Jm(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      var t = Ym(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else return this.day() || 7;
  }
  function Qm(e) {
    return this._weekdaysParseExact
      ? (Ce(this, "_weekdaysRegex") || wa.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (Ce(this, "_weekdaysRegex") || (this._weekdaysRegex = Um),
        this._weekdaysStrictRegex && e
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function e1(e) {
    return this._weekdaysParseExact
      ? (Ce(this, "_weekdaysRegex") || wa.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (Ce(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Hm),
        this._weekdaysShortStrictRegex && e
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function t1(e) {
    return this._weekdaysParseExact
      ? (Ce(this, "_weekdaysRegex") || wa.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (Ce(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = zm),
        this._weekdaysMinStrictRegex && e
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function wa() {
    function e(u, m) {
      return m.length - u.length;
    }
    var t = [],
      n = [],
      r = [],
      i = [],
      o,
      s,
      a,
      c,
      l;
    for (o = 0; o < 7; o++)
      (s = $t([2e3, 1]).day(o)),
        (a = at(this.weekdaysMin(s, ""))),
        (c = at(this.weekdaysShort(s, ""))),
        (l = at(this.weekdays(s, ""))),
        t.push(a),
        n.push(c),
        r.push(l),
        i.push(a),
        i.push(c),
        i.push(l);
    t.sort(e),
      n.sort(e),
      r.sort(e),
      i.sort(e),
      (this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + n.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  function _a() {
    return this.hours() % 12 || 12;
  }
  function n1() {
    return this.hours() || 24;
  }
  se("H", ["HH", 2], 0, "hour");
  se("h", ["hh", 2], 0, _a);
  se("k", ["kk", 2], 0, n1);
  se("hmm", 0, 0, function () {
    return "" + _a.apply(this) + Yt(this.minutes(), 2);
  });
  se("hmmss", 0, 0, function () {
    return "" + _a.apply(this) + Yt(this.minutes(), 2) + Yt(this.seconds(), 2);
  });
  se("Hmm", 0, 0, function () {
    return "" + this.hours() + Yt(this.minutes(), 2);
  });
  se("Hmmss", 0, 0, function () {
    return "" + this.hours() + Yt(this.minutes(), 2) + Yt(this.seconds(), 2);
  });
  function q0(e, t) {
    se(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  q0("a", !0);
  q0("A", !1);
  Je("hour", "h");
  Qe("hour", 13);
  function G0(e, t) {
    return t._meridiemParse;
  }
  ee("a", G0);
  ee("A", G0);
  ee("H", Le);
  ee("h", Le);
  ee("k", Le);
  ee("HH", Le, ft);
  ee("hh", Le, ft);
  ee("kk", Le, ft);
  ee("hmm", B0);
  ee("hmmss", F0);
  ee("Hmm", B0);
  ee("Hmmss", F0);
  Oe(["H", "HH"], Ve);
  Oe(["k", "kk"], function (e, t, n) {
    var r = ve(e);
    t[Ve] = r === 24 ? 0 : r;
  });
  Oe(["a", "A"], function (e, t, n) {
    (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
  });
  Oe(["h", "hh"], function (e, t, n) {
    (t[Ve] = ve(e)), (pe(n).bigHour = !0);
  });
  Oe("hmm", function (e, t, n) {
    var r = e.length - 2;
    (t[Ve] = ve(e.substr(0, r))),
      (t[Dt] = ve(e.substr(r))),
      (pe(n).bigHour = !0);
  });
  Oe("hmmss", function (e, t, n) {
    var r = e.length - 4,
      i = e.length - 2;
    (t[Ve] = ve(e.substr(0, r))),
      (t[Dt] = ve(e.substr(r, 2))),
      (t[Xt] = ve(e.substr(i))),
      (pe(n).bigHour = !0);
  });
  Oe("Hmm", function (e, t, n) {
    var r = e.length - 2;
    (t[Ve] = ve(e.substr(0, r))), (t[Dt] = ve(e.substr(r)));
  });
  Oe("Hmmss", function (e, t, n) {
    var r = e.length - 4,
      i = e.length - 2;
    (t[Ve] = ve(e.substr(0, r))),
      (t[Dt] = ve(e.substr(r, 2))),
      (t[Xt] = ve(e.substr(i)));
  });
  function r1(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var i1 = /[ap]\.?m?\.?/i,
    o1 = ir("Hours", !0);
  function s1(e, t, n) {
    return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
  }
  var Z0 = {
      calendar: Zp,
      longDateFormat: Qp,
      invalidDate: tm,
      ordinal: rm,
      dayOfMonthOrdinalParse: im,
      relativeTime: sm,
      months: bm,
      monthsShort: Y0,
      week: Im,
      weekdays: jm,
      weekdaysMin: $m,
      weekdaysShort: V0,
      meridiemParse: i1,
    },
    Pe = {},
    ur = {},
    Cr;
  function a1(e, t) {
    var n,
      r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
    return r;
  }
  function Sc(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function l1(e) {
    for (var t = 0, n, r, i, o; t < e.length; ) {
      for (
        o = Sc(e[t]).split("-"),
          n = o.length,
          r = Sc(e[t + 1]),
          r = r ? r.split("-") : null;
        n > 0;

      ) {
        if (((i = Ui(o.slice(0, n).join("-"))), i)) return i;
        if (r && r.length >= n && a1(o, r) >= n - 1) break;
        n--;
      }
      t++;
    }
    return Cr;
  }
  function c1(e) {
    return e.match("^[^/\\\\]*$") != null;
  }
  function Ui(e) {
    var t = null,
      n;
    if (Pe[e] === void 0 && typeof Tn < "u" && Tn && Tn.exports && c1(e))
      try {
        (t = Cr._abbr), (n = require), n("./locale/" + e), vn(t);
      } catch {
        Pe[e] = null;
      }
    return Pe[e];
  }
  function vn(e, t) {
    var n;
    return (
      e &&
        (ot(t) ? (n = on(e)) : (n = Sa(e, t)),
        n
          ? (Cr = n)
          : typeof console < "u" &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?"
            )),
      Cr._abbr
    );
  }
  function Sa(e, t) {
    if (t !== null) {
      var n,
        r = Z0;
      if (((t.abbr = e), Pe[e] != null))
        M0(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (r = Pe[e]._config);
      else if (t.parentLocale != null)
        if (Pe[t.parentLocale] != null) r = Pe[t.parentLocale]._config;
        else if (((n = Ui(t.parentLocale)), n != null)) r = n._config;
        else
          return (
            ur[t.parentLocale] || (ur[t.parentLocale] = []),
            ur[t.parentLocale].push({ name: e, config: t }),
            null
          );
      return (
        (Pe[e] = new ma(bs(r, t))),
        ur[e] &&
          ur[e].forEach(function (i) {
            Sa(i.name, i.config);
          }),
        vn(e),
        Pe[e]
      );
    } else return delete Pe[e], null;
  }
  function u1(e, t) {
    if (t != null) {
      var n,
        r,
        i = Z0;
      Pe[e] != null && Pe[e].parentLocale != null
        ? Pe[e].set(bs(Pe[e]._config, t))
        : ((r = Ui(e)),
          r != null && (i = r._config),
          (t = bs(i, t)),
          r == null && (t.abbr = e),
          (n = new ma(t)),
          (n.parentLocale = Pe[e]),
          (Pe[e] = n)),
        vn(e);
    } else
      Pe[e] != null &&
        (Pe[e].parentLocale != null
          ? ((Pe[e] = Pe[e].parentLocale), e === vn() && vn(e))
          : Pe[e] != null && delete Pe[e]);
    return Pe[e];
  }
  function on(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Cr;
    if (!Ot(e)) {
      if (((t = Ui(e)), t)) return t;
      e = [e];
    }
    return l1(e);
  }
  function d1() {
    return ws(Pe);
  }
  function ka(e) {
    var t,
      n = e._a;
    return (
      n &&
        pe(e).overflow === -2 &&
        ((t =
          n[Kt] < 0 || n[Kt] > 11
            ? Kt
            : n[Lt] < 1 || n[Lt] > $i(n[Xe], n[Kt])
            ? Lt
            : n[Ve] < 0 ||
              n[Ve] > 24 ||
              (n[Ve] === 24 && (n[Dt] !== 0 || n[Xt] !== 0 || n[kn] !== 0))
            ? Ve
            : n[Dt] < 0 || n[Dt] > 59
            ? Dt
            : n[Xt] < 0 || n[Xt] > 59
            ? Xt
            : n[kn] < 0 || n[kn] > 999
            ? kn
            : -1),
        pe(e)._overflowDayOfYear && (t < Xe || t > Lt) && (t = Lt),
        pe(e)._overflowWeeks && t === -1 && (t = vm),
        pe(e)._overflowWeekday && t === -1 && (t = ym),
        (pe(e).overflow = t)),
      e
    );
  }
  var f1 =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    h1 =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    p1 = /Z|[+-]\d\d(?::?\d\d)?/,
    Kr = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    Xo = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    m1 = /^\/?Date\((-?\d+)/i,
    g1 =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    v1 = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    };
  function K0(e) {
    var t,
      n,
      r = e._i,
      i = f1.exec(r) || h1.exec(r),
      o,
      s,
      a,
      c,
      l = Kr.length,
      u = Xo.length;
    if (i) {
      for (pe(e).iso = !0, t = 0, n = l; t < n; t++)
        if (Kr[t][1].exec(i[1])) {
          (s = Kr[t][0]), (o = Kr[t][2] !== !1);
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
      if (i[3]) {
        for (t = 0, n = u; t < n; t++)
          if (Xo[t][1].exec(i[3])) {
            a = (i[2] || " ") + Xo[t][0];
            break;
          }
        if (a == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!o && a != null) {
        e._isValid = !1;
        return;
      }
      if (i[4])
        if (p1.exec(i[4])) c = "Z";
        else {
          e._isValid = !1;
          return;
        }
      (e._f = s + (a || "") + (c || "")), Ca(e);
    } else e._isValid = !1;
  }
  function y1(e, t, n, r, i, o) {
    var s = [
      x1(e),
      Y0.indexOf(t),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(i, 10),
    ];
    return o && s.push(parseInt(o, 10)), s;
  }
  function x1(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function b1(e) {
    return e
      .replace(/\([^()]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
  }
  function w1(e, t, n) {
    if (e) {
      var r = V0.indexOf(e),
        i = new Date(t[0], t[1], t[2]).getDay();
      if (r !== i) return (pe(n).weekdayMismatch = !0), (n._isValid = !1), !1;
    }
    return !0;
  }
  function _1(e, t, n) {
    if (e) return v1[e];
    if (t) return 0;
    var r = parseInt(n, 10),
      i = r % 100,
      o = (r - i) / 100;
    return o * 60 + i;
  }
  function X0(e) {
    var t = g1.exec(b1(e._i)),
      n;
    if (t) {
      if (((n = y1(t[4], t[3], t[2], t[5], t[6], t[7])), !w1(t[1], n, e)))
        return;
      (e._a = n),
        (e._tzm = _1(t[8], t[9], t[10])),
        (e._d = kr.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (pe(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function S1(e) {
    var t = m1.exec(e._i);
    if (t !== null) {
      e._d = new Date(+t[1]);
      return;
    }
    if ((K0(e), e._isValid === !1)) delete e._isValid;
    else return;
    if ((X0(e), e._isValid === !1)) delete e._isValid;
    else return;
    e._strict ? (e._isValid = !1) : X.createFromInputFallback(e);
  }
  X.createFromInputFallback = bt(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function jn(e, t, n) {
    return e ?? t ?? n;
  }
  function k1(e) {
    var t = new Date(X.now());
    return e._useUTC
      ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
      : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Ea(e) {
    var t,
      n,
      r = [],
      i,
      o,
      s;
    if (!e._d) {
      for (
        i = k1(e),
          e._w && e._a[Lt] == null && e._a[Kt] == null && E1(e),
          e._dayOfYear != null &&
            ((s = jn(e._a[Xe], i[Xe])),
            (e._dayOfYear > _r(s) || e._dayOfYear === 0) &&
              (pe(e)._overflowDayOfYear = !0),
            (n = kr(s, 0, e._dayOfYear)),
            (e._a[Kt] = n.getUTCMonth()),
            (e._a[Lt] = n.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = r[t] = i[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
      e._a[Ve] === 24 &&
        e._a[Dt] === 0 &&
        e._a[Xt] === 0 &&
        e._a[kn] === 0 &&
        ((e._nextDay = !0), (e._a[Ve] = 0)),
        (e._d = (e._useUTC ? kr : Mm).apply(null, r)),
        (o = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[Ve] = 24),
        e._w &&
          typeof e._w.d < "u" &&
          e._w.d !== o &&
          (pe(e).weekdayMismatch = !0);
    }
  }
  function E1(e) {
    var t, n, r, i, o, s, a, c, l;
    (t = e._w),
      t.GG != null || t.W != null || t.E != null
        ? ((o = 1),
          (s = 4),
          (n = jn(t.GG, e._a[Xe], Er(Re(), 1, 4).year)),
          (r = jn(t.W, 1)),
          (i = jn(t.E, 1)),
          (i < 1 || i > 7) && (c = !0))
        : ((o = e._locale._week.dow),
          (s = e._locale._week.doy),
          (l = Er(Re(), o, s)),
          (n = jn(t.gg, e._a[Xe], l.year)),
          (r = jn(t.w, l.week)),
          t.d != null
            ? ((i = t.d), (i < 0 || i > 6) && (c = !0))
            : t.e != null
            ? ((i = t.e + o), (t.e < 0 || t.e > 6) && (c = !0))
            : (i = o)),
      r < 1 || r > Qt(n, o, s)
        ? (pe(e)._overflowWeeks = !0)
        : c != null
        ? (pe(e)._overflowWeekday = !0)
        : ((a = W0(n, r, i, o, s)),
          (e._a[Xe] = a.year),
          (e._dayOfYear = a.dayOfYear));
  }
  X.ISO_8601 = function () {};
  X.RFC_2822 = function () {};
  function Ca(e) {
    if (e._f === X.ISO_8601) {
      K0(e);
      return;
    }
    if (e._f === X.RFC_2822) {
      X0(e);
      return;
    }
    (e._a = []), (pe(e).empty = !0);
    var t = "" + e._i,
      n,
      r,
      i,
      o,
      s,
      a = t.length,
      c = 0,
      l,
      u;
    for (
      i = N0(e._f, e._locale).match(ga) || [], u = i.length, n = 0;
      n < u;
      n++
    )
      (o = i[n]),
        (r = (t.match(pm(o, e)) || [])[0]),
        r &&
          ((s = t.substr(0, t.indexOf(r))),
          s.length > 0 && pe(e).unusedInput.push(s),
          (t = t.slice(t.indexOf(r) + r.length)),
          (c += r.length)),
        Wn[o]
          ? (r ? (pe(e).empty = !1) : pe(e).unusedTokens.push(o), gm(o, r, e))
          : e._strict && !r && pe(e).unusedTokens.push(o);
    (pe(e).charsLeftOver = a - c),
      t.length > 0 && pe(e).unusedInput.push(t),
      e._a[Ve] <= 12 &&
        pe(e).bigHour === !0 &&
        e._a[Ve] > 0 &&
        (pe(e).bigHour = void 0),
      (pe(e).parsedDateParts = e._a.slice(0)),
      (pe(e).meridiem = e._meridiem),
      (e._a[Ve] = C1(e._locale, e._a[Ve], e._meridiem)),
      (l = pe(e).era),
      l !== null && (e._a[Xe] = e._locale.erasConvertYear(l, e._a[Xe])),
      Ea(e),
      ka(e);
  }
  function C1(e, t, n) {
    var r;
    return n == null
      ? t
      : e.meridiemHour != null
      ? e.meridiemHour(t, n)
      : (e.isPM != null &&
          ((r = e.isPM(n)),
          r && t < 12 && (t += 12),
          !r && t === 12 && (t = 0)),
        t);
  }
  function D1(e) {
    var t,
      n,
      r,
      i,
      o,
      s,
      a = !1,
      c = e._f.length;
    if (c === 0) {
      (pe(e).invalidFormat = !0), (e._d = new Date(NaN));
      return;
    }
    for (i = 0; i < c; i++)
      (o = 0),
        (s = !1),
        (t = pa({}, e)),
        e._useUTC != null && (t._useUTC = e._useUTC),
        (t._f = e._f[i]),
        Ca(t),
        ha(t) && (s = !0),
        (o += pe(t).charsLeftOver),
        (o += pe(t).unusedTokens.length * 10),
        (pe(t).score = o),
        a
          ? o < r && ((r = o), (n = t))
          : (r == null || o < r || s) && ((r = o), (n = t), s && (a = !0));
    pn(e, n || t);
  }
  function T1(e) {
    if (!e._d) {
      var t = va(e._i),
        n = t.day === void 0 ? t.date : t.day;
      (e._a = A0(
        [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
        function (r) {
          return r && parseInt(r, 10);
        }
      )),
        Ea(e);
    }
  }
  function A1(e) {
    var t = new Fr(ka(J0(e)));
    return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
  }
  function J0(e) {
    var t = e._i,
      n = e._f;
    return (
      (e._locale = e._locale || on(e._l)),
      t === null || (n === void 0 && t === "")
        ? Ri({ nullInput: !0 })
        : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
          Mt(t)
            ? new Fr(ka(t))
            : (Br(t) ? (e._d = t) : Ot(n) ? D1(e) : n ? Ca(e) : O1(e),
              ha(e) || (e._d = null),
              e))
    );
  }
  function O1(e) {
    var t = e._i;
    ot(t)
      ? (e._d = new Date(X.now()))
      : Br(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == "string"
      ? S1(e)
      : Ot(t)
      ? ((e._a = A0(t.slice(0), function (n) {
          return parseInt(n, 10);
        })),
        Ea(e))
      : Cn(t)
      ? T1(e)
      : tn(t)
      ? (e._d = new Date(t))
      : X.createFromInputFallback(e);
  }
  function Q0(e, t, n, r, i) {
    var o = {};
    return (
      (t === !0 || t === !1) && ((r = t), (t = void 0)),
      (n === !0 || n === !1) && ((r = n), (n = void 0)),
      ((Cn(e) && fa(e)) || (Ot(e) && e.length === 0)) && (e = void 0),
      (o._isAMomentObject = !0),
      (o._useUTC = o._isUTC = i),
      (o._l = n),
      (o._i = e),
      (o._f = t),
      (o._strict = r),
      A1(o)
    );
  }
  function Re(e, t, n, r) {
    return Q0(e, t, n, r, !1);
  }
  var M1 = bt(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Re.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : Ri();
      }
    ),
    N1 = bt(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Re.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e > this ? this : e) : Ri();
      }
    );
  function ed(e, t) {
    var n, r;
    if ((t.length === 1 && Ot(t[0]) && (t = t[0]), !t.length)) return Re();
    for (n = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n;
  }
  function I1() {
    var e = [].slice.call(arguments, 0);
    return ed("isBefore", e);
  }
  function R1() {
    var e = [].slice.call(arguments, 0);
    return ed("isAfter", e);
  }
  var L1 = function () {
      return Date.now ? Date.now() : +new Date();
    },
    dr = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  function P1(e) {
    var t,
      n = !1,
      r,
      i = dr.length;
    for (t in e)
      if (
        Ce(e, t) &&
        !(je.call(dr, t) !== -1 && (e[t] == null || !isNaN(e[t])))
      )
        return !1;
    for (r = 0; r < i; ++r)
      if (e[dr[r]]) {
        if (n) return !1;
        parseFloat(e[dr[r]]) !== ve(e[dr[r]]) && (n = !0);
      }
    return !0;
  }
  function B1() {
    return this._isValid;
  }
  function F1() {
    return Nt(NaN);
  }
  function Hi(e) {
    var t = va(e),
      n = t.year || 0,
      r = t.quarter || 0,
      i = t.month || 0,
      o = t.week || t.isoWeek || 0,
      s = t.day || 0,
      a = t.hour || 0,
      c = t.minute || 0,
      l = t.second || 0,
      u = t.millisecond || 0;
    (this._isValid = P1(t)),
      (this._milliseconds = +u + l * 1e3 + c * 6e4 + a * 1e3 * 60 * 60),
      (this._days = +s + o * 7),
      (this._months = +i + r * 3 + n * 12),
      (this._data = {}),
      (this._locale = on()),
      this._bubble();
  }
  function ri(e) {
    return e instanceof Hi;
  }
  function Ss(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function Y1(e, t, n) {
    var r = Math.min(e.length, t.length),
      i = Math.abs(e.length - t.length),
      o = 0,
      s;
    for (s = 0; s < r; s++)
      ((n && e[s] !== t[s]) || (!n && ve(e[s]) !== ve(t[s]))) && o++;
    return o + i;
  }
  function td(e, t) {
    se(e, 0, 0, function () {
      var n = this.utcOffset(),
        r = "+";
      return (
        n < 0 && ((n = -n), (r = "-")),
        r + Yt(~~(n / 60), 2) + t + Yt(~~n % 60, 2)
      );
    });
  }
  td("Z", ":");
  td("ZZ", "");
  ee("Z", ji);
  ee("ZZ", ji);
  Oe(["Z", "ZZ"], function (e, t, n) {
    (n._useUTC = !0), (n._tzm = Da(ji, e));
  });
  var j1 = /([\+\-]|\d\d)/gi;
  function Da(e, t) {
    var n = (t || "").match(e),
      r,
      i,
      o;
    return n === null
      ? null
      : ((r = n[n.length - 1] || []),
        (i = (r + "").match(j1) || ["-", 0, 0]),
        (o = +(i[1] * 60) + ve(i[2])),
        o === 0 ? 0 : i[0] === "+" ? o : -o);
  }
  function Ta(e, t) {
    var n, r;
    return t._isUTC
      ? ((n = t.clone()),
        (r = (Mt(e) || Br(e) ? e.valueOf() : Re(e).valueOf()) - n.valueOf()),
        n._d.setTime(n._d.valueOf() + r),
        X.updateOffset(n, !1),
        n)
      : Re(e).local();
  }
  function ks(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  X.updateOffset = function () {};
  function $1(e, t, n) {
    var r = this._offset || 0,
      i;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (((e = Da(ji, e)), e === null)) return this;
      } else Math.abs(e) < 16 && !n && (e = e * 60);
      return (
        !this._isUTC && t && (i = ks(this)),
        (this._offset = e),
        (this._isUTC = !0),
        i != null && this.add(i, "m"),
        r !== e &&
          (!t || this._changeInProgress
            ? id(this, Nt(e - r, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              X.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    } else return this._isUTC ? r : ks(this);
  }
  function U1(e, t) {
    return e != null
      ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset();
  }
  function H1(e) {
    return this.utcOffset(0, e);
  }
  function z1(e) {
    return (
      this._isUTC &&
        (this.utcOffset(0, e),
        (this._isUTC = !1),
        e && this.subtract(ks(this), "m")),
      this
    );
  }
  function W1() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Da(fm, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function V1(e) {
    return this.isValid()
      ? ((e = e ? Re(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
      : !1;
  }
  function q1() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function G1() {
    if (!ot(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
      t;
    return (
      pa(e, this),
      (e = J0(e)),
      e._a
        ? ((t = e._isUTC ? $t(e._a) : Re(e._a)),
          (this._isDSTShifted = this.isValid() && Y1(e._a, t.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    );
  }
  function Z1() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function K1() {
    return this.isValid() ? this._isUTC : !1;
  }
  function nd() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var X1 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    J1 =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function Nt(e, t) {
    var n = e,
      r = null,
      i,
      o,
      s;
    return (
      ri(e)
        ? (n = { ms: e._milliseconds, d: e._days, M: e._months })
        : tn(e) || !isNaN(+e)
        ? ((n = {}), t ? (n[t] = +e) : (n.milliseconds = +e))
        : (r = X1.exec(e))
        ? ((i = r[1] === "-" ? -1 : 1),
          (n = {
            y: 0,
            d: ve(r[Lt]) * i,
            h: ve(r[Ve]) * i,
            m: ve(r[Dt]) * i,
            s: ve(r[Xt]) * i,
            ms: ve(Ss(r[kn] * 1e3)) * i,
          }))
        : (r = J1.exec(e))
        ? ((i = r[1] === "-" ? -1 : 1),
          (n = {
            y: wn(r[2], i),
            M: wn(r[3], i),
            w: wn(r[4], i),
            d: wn(r[5], i),
            h: wn(r[6], i),
            m: wn(r[7], i),
            s: wn(r[8], i),
          }))
        : n == null
        ? (n = {})
        : typeof n == "object" &&
          ("from" in n || "to" in n) &&
          ((s = Q1(Re(n.from), Re(n.to))),
          (n = {}),
          (n.ms = s.milliseconds),
          (n.M = s.months)),
      (o = new Hi(n)),
      ri(e) && Ce(e, "_locale") && (o._locale = e._locale),
      ri(e) && Ce(e, "_isValid") && (o._isValid = e._isValid),
      o
    );
  }
  Nt.fn = Hi.prototype;
  Nt.invalid = F1;
  function wn(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function kc(e, t) {
    var n = {};
    return (
      (n.months = t.month() - e.month() + (t.year() - e.year()) * 12),
      e.clone().add(n.months, "M").isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function Q1(e, t) {
    var n;
    return e.isValid() && t.isValid()
      ? ((t = Ta(t, e)),
        e.isBefore(t)
          ? (n = kc(e, t))
          : ((n = kc(t, e)),
            (n.milliseconds = -n.milliseconds),
            (n.months = -n.months)),
        n)
      : { milliseconds: 0, months: 0 };
  }
  function rd(e, t) {
    return function (n, r) {
      var i, o;
      return (
        r !== null &&
          !isNaN(+r) &&
          (M0(
            t,
            "moment()." +
              t +
              "(period, number) is deprecated. Please use moment()." +
              t +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (o = n),
          (n = r),
          (r = o)),
        (i = Nt(n, r)),
        id(this, i, e),
        this
      );
    };
  }
  function id(e, t, n, r) {
    var i = t._milliseconds,
      o = Ss(t._days),
      s = Ss(t._months);
    e.isValid() &&
      ((r = r ?? !0),
      s && $0(e, vi(e, "Month") + s * n),
      o && R0(e, "Date", vi(e, "Date") + o * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      r && X.updateOffset(e, o || s));
  }
  var eg = rd(1, "add"),
    tg = rd(-1, "subtract");
  function od(e) {
    return typeof e == "string" || e instanceof String;
  }
  function ng(e) {
    return (
      Mt(e) ||
      Br(e) ||
      od(e) ||
      tn(e) ||
      ig(e) ||
      rg(e) ||
      e === null ||
      e === void 0
    );
  }
  function rg(e) {
    var t = Cn(e) && !fa(e),
      n = !1,
      r = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms",
      ],
      i,
      o,
      s = r.length;
    for (i = 0; i < s; i += 1) (o = r[i]), (n = n || Ce(e, o));
    return t && n;
  }
  function ig(e) {
    var t = Ot(e),
      n = !1;
    return (
      t &&
        (n =
          e.filter(function (r) {
            return !tn(r) && od(e);
          }).length === 0),
      t && n
    );
  }
  function og(e) {
    var t = Cn(e) && !fa(e),
      n = !1,
      r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
      i,
      o;
    for (i = 0; i < r.length; i += 1) (o = r[i]), (n = n || Ce(e, o));
    return t && n;
  }
  function sg(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6
      ? "sameElse"
      : n < -1
      ? "lastWeek"
      : n < 0
      ? "lastDay"
      : n < 1
      ? "sameDay"
      : n < 2
      ? "nextDay"
      : n < 7
      ? "nextWeek"
      : "sameElse";
  }
  function ag(e, t) {
    arguments.length === 1 &&
      (arguments[0]
        ? ng(arguments[0])
          ? ((e = arguments[0]), (t = void 0))
          : og(arguments[0]) && ((t = arguments[0]), (e = void 0))
        : ((e = void 0), (t = void 0)));
    var n = e || Re(),
      r = Ta(n, this).startOf("day"),
      i = X.calendarFormat(this, r) || "sameElse",
      o = t && (Ut(t[i]) ? t[i].call(this, n) : t[i]);
    return this.format(o || this.localeData().calendar(i, this, Re(n)));
  }
  function lg() {
    return new Fr(this);
  }
  function cg(e, t) {
    var n = Mt(e) ? e : Re(e);
    return this.isValid() && n.isValid()
      ? ((t = wt(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      : !1;
  }
  function ug(e, t) {
    var n = Mt(e) ? e : Re(e);
    return this.isValid() && n.isValid()
      ? ((t = wt(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      : !1;
  }
  function dg(e, t, n, r) {
    var i = Mt(e) ? e : Re(e),
      o = Mt(t) ? t : Re(t);
    return this.isValid() && i.isValid() && o.isValid()
      ? ((r = r || "()"),
        (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) &&
          (r[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n)))
      : !1;
  }
  function fg(e, t) {
    var n = Mt(e) ? e : Re(e),
      r;
    return this.isValid() && n.isValid()
      ? ((t = wt(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() === n.valueOf()
          : ((r = n.valueOf()),
            this.clone().startOf(t).valueOf() <= r &&
              r <= this.clone().endOf(t).valueOf()))
      : !1;
  }
  function hg(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function pg(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function mg(e, t, n) {
    var r, i, o;
    if (!this.isValid()) return NaN;
    if (((r = Ta(e, this)), !r.isValid())) return NaN;
    switch (((i = (r.utcOffset() - this.utcOffset()) * 6e4), (t = wt(t)), t)) {
      case "year":
        o = ii(this, r) / 12;
        break;
      case "month":
        o = ii(this, r);
        break;
      case "quarter":
        o = ii(this, r) / 3;
        break;
      case "second":
        o = (this - r) / 1e3;
        break;
      case "minute":
        o = (this - r) / 6e4;
        break;
      case "hour":
        o = (this - r) / 36e5;
        break;
      case "day":
        o = (this - r - i) / 864e5;
        break;
      case "week":
        o = (this - r - i) / 6048e5;
        break;
      default:
        o = this - r;
    }
    return n ? o : gt(o);
  }
  function ii(e, t) {
    if (e.date() < t.date()) return -ii(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      r = e.clone().add(n, "months"),
      i,
      o;
    return (
      t - r < 0
        ? ((i = e.clone().add(n - 1, "months")), (o = (t - r) / (r - i)))
        : ((i = e.clone().add(n + 1, "months")), (o = (t - r) / (i - r))),
      -(n + o) || 0
    );
  }
  X.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  X.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function gg() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function vg(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
      n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999
      ? ni(
          n,
          t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        )
      : Ut(Date.prototype.toISOString)
      ? t
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace("Z", ni(n, "Z"))
      : ni(
          n,
          t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
  }
  function yg() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "",
      n,
      r,
      i,
      o;
    return (
      this.isLocal() ||
        ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
        (t = "Z")),
      (n = "[" + e + '("]'),
      (r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
      (i = "-MM-DD[T]HH:mm:ss.SSS"),
      (o = t + '[")]'),
      this.format(n + r + i + o)
    );
  }
  function xg(e) {
    e || (e = this.isUtc() ? X.defaultFormatUtc : X.defaultFormat);
    var t = ni(this, e);
    return this.localeData().postformat(t);
  }
  function bg(e, t) {
    return this.isValid() && ((Mt(e) && e.isValid()) || Re(e).isValid())
      ? Nt({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function wg(e) {
    return this.from(Re(), e);
  }
  function _g(e, t) {
    return this.isValid() && ((Mt(e) && e.isValid()) || Re(e).isValid())
      ? Nt({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function Sg(e) {
    return this.to(Re(), e);
  }
  function sd(e) {
    var t;
    return e === void 0
      ? this._locale._abbr
      : ((t = on(e)), t != null && (this._locale = t), this);
  }
  var ad = bt(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function ld() {
    return this._locale;
  }
  var bi = 1e3,
    Vn = 60 * bi,
    wi = 60 * Vn,
    cd = (365 * 400 + 97) * 24 * wi;
  function qn(e, t) {
    return ((e % t) + t) % t;
  }
  function ud(e, t, n) {
    return e < 100 && e >= 0
      ? new Date(e + 400, t, n) - cd
      : new Date(e, t, n).valueOf();
  }
  function dd(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - cd : Date.UTC(e, t, n);
  }
  function kg(e) {
    var t, n;
    if (((e = wt(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((n = this._isUTC ? dd : ud), e)) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t -= qn(t + (this._isUTC ? 0 : this.utcOffset() * Vn), wi));
        break;
      case "minute":
        (t = this._d.valueOf()), (t -= qn(t, Vn));
        break;
      case "second":
        (t = this._d.valueOf()), (t -= qn(t, bi));
        break;
    }
    return this._d.setTime(t), X.updateOffset(this, !0), this;
  }
  function Eg(e) {
    var t, n;
    if (((e = wt(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((n = this._isUTC ? dd : ud), e)) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t =
          n(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t += wi - qn(t + (this._isUTC ? 0 : this.utcOffset() * Vn), wi) - 1);
        break;
      case "minute":
        (t = this._d.valueOf()), (t += Vn - qn(t, Vn) - 1);
        break;
      case "second":
        (t = this._d.valueOf()), (t += bi - qn(t, bi) - 1);
        break;
    }
    return this._d.setTime(t), X.updateOffset(this, !0), this;
  }
  function Cg() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function Dg() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function Tg() {
    return new Date(this.valueOf());
  }
  function Ag() {
    var e = this;
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond(),
    ];
  }
  function Og() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds(),
    };
  }
  function Mg() {
    return this.isValid() ? this.toISOString() : null;
  }
  function Ng() {
    return ha(this);
  }
  function Ig() {
    return pn({}, pe(this));
  }
  function Rg() {
    return pe(this).overflow;
  }
  function Lg() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  se("N", 0, 0, "eraAbbr");
  se("NN", 0, 0, "eraAbbr");
  se("NNN", 0, 0, "eraAbbr");
  se("NNNN", 0, 0, "eraName");
  se("NNNNN", 0, 0, "eraNarrow");
  se("y", ["y", 1], "yo", "eraYear");
  se("y", ["yy", 2], 0, "eraYear");
  se("y", ["yyy", 3], 0, "eraYear");
  se("y", ["yyyy", 4], 0, "eraYear");
  ee("N", Aa);
  ee("NN", Aa);
  ee("NNN", Aa);
  ee("NNNN", Vg);
  ee("NNNNN", qg);
  Oe(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict);
    i ? (pe(n).era = i) : (pe(n).invalidEra = e);
  });
  ee("y", or);
  ee("yy", or);
  ee("yyy", or);
  ee("yyyy", or);
  ee("yo", Gg);
  Oe(["y", "yy", "yyy", "yyyy"], Xe);
  Oe(["yo"], function (e, t, n, r) {
    var i;
    n._locale._eraYearOrdinalRegex &&
      (i = e.match(n._locale._eraYearOrdinalRegex)),
      n._locale.eraYearOrdinalParse
        ? (t[Xe] = n._locale.eraYearOrdinalParse(e, i))
        : (t[Xe] = parseInt(e, 10));
  });
  function Pg(e, t) {
    var n,
      r,
      i,
      o = this._eras || on("en")._eras;
    for (n = 0, r = o.length; n < r; ++n) {
      switch (typeof o[n].since) {
        case "string":
          (i = X(o[n].since).startOf("day")), (o[n].since = i.valueOf());
          break;
      }
      switch (typeof o[n].until) {
        case "undefined":
          o[n].until = 1 / 0;
          break;
        case "string":
          (i = X(o[n].until).startOf("day").valueOf()),
            (o[n].until = i.valueOf());
          break;
      }
    }
    return o;
  }
  function Bg(e, t, n) {
    var r,
      i,
      o = this.eras(),
      s,
      a,
      c;
    for (e = e.toUpperCase(), r = 0, i = o.length; r < i; ++r)
      if (
        ((s = o[r].name.toUpperCase()),
        (a = o[r].abbr.toUpperCase()),
        (c = o[r].narrow.toUpperCase()),
        n)
      )
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (a === e) return o[r];
            break;
          case "NNNN":
            if (s === e) return o[r];
            break;
          case "NNNNN":
            if (c === e) return o[r];
            break;
        }
      else if ([s, a, c].indexOf(e) >= 0) return o[r];
  }
  function Fg(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0
      ? X(e.since).year()
      : X(e.since).year() + (t - e.offset) * n;
  }
  function Yg() {
    var e,
      t,
      n,
      r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf("day").valueOf()),
        (r[e].since <= n && n <= r[e].until) ||
          (r[e].until <= n && n <= r[e].since))
      )
        return r[e].name;
    return "";
  }
  function jg() {
    var e,
      t,
      n,
      r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf("day").valueOf()),
        (r[e].since <= n && n <= r[e].until) ||
          (r[e].until <= n && n <= r[e].since))
      )
        return r[e].narrow;
    return "";
  }
  function $g() {
    var e,
      t,
      n,
      r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf("day").valueOf()),
        (r[e].since <= n && n <= r[e].until) ||
          (r[e].until <= n && n <= r[e].since))
      )
        return r[e].abbr;
    return "";
  }
  function Ug() {
    var e,
      t,
      n,
      r,
      i = this.localeData().eras();
    for (e = 0, t = i.length; e < t; ++e)
      if (
        ((n = i[e].since <= i[e].until ? 1 : -1),
        (r = this.clone().startOf("day").valueOf()),
        (i[e].since <= r && r <= i[e].until) ||
          (i[e].until <= r && r <= i[e].since))
      )
        return (this.year() - X(i[e].since).year()) * n + i[e].offset;
    return this.year();
  }
  function Hg(e) {
    return (
      Ce(this, "_erasNameRegex") || Oa.call(this),
      e ? this._erasNameRegex : this._erasRegex
    );
  }
  function zg(e) {
    return (
      Ce(this, "_erasAbbrRegex") || Oa.call(this),
      e ? this._erasAbbrRegex : this._erasRegex
    );
  }
  function Wg(e) {
    return (
      Ce(this, "_erasNarrowRegex") || Oa.call(this),
      e ? this._erasNarrowRegex : this._erasRegex
    );
  }
  function Aa(e, t) {
    return t.erasAbbrRegex(e);
  }
  function Vg(e, t) {
    return t.erasNameRegex(e);
  }
  function qg(e, t) {
    return t.erasNarrowRegex(e);
  }
  function Gg(e, t) {
    return t._eraYearOrdinalRegex || or;
  }
  function Oa() {
    var e = [],
      t = [],
      n = [],
      r = [],
      i,
      o,
      s = this.eras();
    for (i = 0, o = s.length; i < o; ++i)
      t.push(at(s[i].name)),
        e.push(at(s[i].abbr)),
        n.push(at(s[i].narrow)),
        r.push(at(s[i].name)),
        r.push(at(s[i].abbr)),
        r.push(at(s[i].narrow));
    (this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i"));
  }
  se(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  se(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function zi(e, t) {
    se(0, [e, e.length], 0, t);
  }
  zi("gggg", "weekYear");
  zi("ggggg", "weekYear");
  zi("GGGG", "isoWeekYear");
  zi("GGGGG", "isoWeekYear");
  Je("weekYear", "gg");
  Je("isoWeekYear", "GG");
  Qe("weekYear", 1);
  Qe("isoWeekYear", 1);
  ee("G", Yi);
  ee("g", Yi);
  ee("GG", Le, ft);
  ee("gg", Le, ft);
  ee("GGGG", xa, ya);
  ee("gggg", xa, ya);
  ee("GGGGG", Fi, Pi);
  ee("ggggg", Fi, Pi);
  jr(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
    t[r.substr(0, 2)] = ve(e);
  });
  jr(["gg", "GG"], function (e, t, n, r) {
    t[r] = X.parseTwoDigitYear(e);
  });
  function Zg(e) {
    return fd.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function Kg(e) {
    return fd.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function Xg() {
    return Qt(this.year(), 1, 4);
  }
  function Jg() {
    return Qt(this.isoWeekYear(), 1, 4);
  }
  function Qg() {
    var e = this.localeData()._week;
    return Qt(this.year(), e.dow, e.doy);
  }
  function ev() {
    var e = this.localeData()._week;
    return Qt(this.weekYear(), e.dow, e.doy);
  }
  function fd(e, t, n, r, i) {
    var o;
    return e == null
      ? Er(this, r, i).year
      : ((o = Qt(e, r, i)), t > o && (t = o), tv.call(this, e, t, n, r, i));
  }
  function tv(e, t, n, r, i) {
    var o = W0(e, t, n, r, i),
      s = kr(o.year, 0, o.dayOfYear);
    return (
      this.year(s.getUTCFullYear()),
      this.month(s.getUTCMonth()),
      this.date(s.getUTCDate()),
      this
    );
  }
  se("Q", 0, "Qo", "quarter");
  Je("quarter", "Q");
  Qe("quarter", 7);
  ee("Q", L0);
  Oe("Q", function (e, t) {
    t[Kt] = (ve(e) - 1) * 3;
  });
  function nv(e) {
    return e == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((e - 1) * 3 + (this.month() % 3));
  }
  se("D", ["DD", 2], "Do", "date");
  Je("date", "D");
  Qe("date", 9);
  ee("D", Le);
  ee("DD", Le, ft);
  ee("Do", function (e, t) {
    return e
      ? t._dayOfMonthOrdinalParse || t._ordinalParse
      : t._dayOfMonthOrdinalParseLenient;
  });
  Oe(["D", "DD"], Lt);
  Oe("Do", function (e, t) {
    t[Lt] = ve(e.match(Le)[0]);
  });
  var hd = ir("Date", !0);
  se("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  Je("dayOfYear", "DDD");
  Qe("dayOfYear", 4);
  ee("DDD", Bi);
  ee("DDDD", P0);
  Oe(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = ve(e);
  });
  function rv(e) {
    var t =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  se("m", ["mm", 2], 0, "minute");
  Je("minute", "m");
  Qe("minute", 14);
  ee("m", Le);
  ee("mm", Le, ft);
  Oe(["m", "mm"], Dt);
  var iv = ir("Minutes", !1);
  se("s", ["ss", 2], 0, "second");
  Je("second", "s");
  Qe("second", 15);
  ee("s", Le);
  ee("ss", Le, ft);
  Oe(["s", "ss"], Xt);
  var ov = ir("Seconds", !1);
  se("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  se(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  se(0, ["SSS", 3], 0, "millisecond");
  se(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  se(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  se(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });
  se(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });
  se(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });
  se(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });
  Je("millisecond", "ms");
  Qe("millisecond", 16);
  ee("S", Bi, L0);
  ee("SS", Bi, ft);
  ee("SSS", Bi, P0);
  var mn, pd;
  for (mn = "SSSS"; mn.length <= 9; mn += "S") ee(mn, or);
  function sv(e, t) {
    t[kn] = ve(("0." + e) * 1e3);
  }
  for (mn = "S"; mn.length <= 9; mn += "S") Oe(mn, sv);
  pd = ir("Milliseconds", !1);
  se("z", 0, 0, "zoneAbbr");
  se("zz", 0, 0, "zoneName");
  function av() {
    return this._isUTC ? "UTC" : "";
  }
  function lv() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var z = Fr.prototype;
  z.add = eg;
  z.calendar = ag;
  z.clone = lg;
  z.diff = mg;
  z.endOf = Eg;
  z.format = xg;
  z.from = bg;
  z.fromNow = wg;
  z.to = _g;
  z.toNow = Sg;
  z.get = um;
  z.invalidAt = Rg;
  z.isAfter = cg;
  z.isBefore = ug;
  z.isBetween = dg;
  z.isSame = fg;
  z.isSameOrAfter = hg;
  z.isSameOrBefore = pg;
  z.isValid = Ng;
  z.lang = ad;
  z.locale = sd;
  z.localeData = ld;
  z.max = N1;
  z.min = M1;
  z.parsingFlags = Ig;
  z.set = dm;
  z.startOf = kg;
  z.subtract = tg;
  z.toArray = Ag;
  z.toObject = Og;
  z.toDate = Tg;
  z.toISOString = vg;
  z.inspect = yg;
  typeof Symbol < "u" &&
    Symbol.for != null &&
    (z[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    });
  z.toJSON = Mg;
  z.toString = gg;
  z.unix = Dg;
  z.valueOf = Cg;
  z.creationData = Lg;
  z.eraName = Yg;
  z.eraNarrow = jg;
  z.eraAbbr = $g;
  z.eraYear = Ug;
  z.year = z0;
  z.isLeapYear = Om;
  z.weekYear = Zg;
  z.isoWeekYear = Kg;
  z.quarter = z.quarters = nv;
  z.month = U0;
  z.daysInMonth = Dm;
  z.week = z.weeks = Pm;
  z.isoWeek = z.isoWeeks = Bm;
  z.weeksInYear = Qg;
  z.weeksInWeekYear = ev;
  z.isoWeeksInYear = Xg;
  z.isoWeeksInISOWeekYear = Jg;
  z.date = hd;
  z.day = z.days = Km;
  z.weekday = Xm;
  z.isoWeekday = Jm;
  z.dayOfYear = rv;
  z.hour = z.hours = o1;
  z.minute = z.minutes = iv;
  z.second = z.seconds = ov;
  z.millisecond = z.milliseconds = pd;
  z.utcOffset = $1;
  z.utc = H1;
  z.local = z1;
  z.parseZone = W1;
  z.hasAlignedHourOffset = V1;
  z.isDST = q1;
  z.isLocal = Z1;
  z.isUtcOffset = K1;
  z.isUtc = nd;
  z.isUTC = nd;
  z.zoneAbbr = av;
  z.zoneName = lv;
  z.dates = bt("dates accessor is deprecated. Use date instead.", hd);
  z.months = bt("months accessor is deprecated. Use month instead", U0);
  z.years = bt("years accessor is deprecated. Use year instead", z0);
  z.zone = bt(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    U1
  );
  z.isDSTShifted = bt(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    G1
  );
  function cv(e) {
    return Re(e * 1e3);
  }
  function uv() {
    return Re.apply(null, arguments).parseZone();
  }
  function md(e) {
    return e;
  }
  var De = ma.prototype;
  De.calendar = Kp;
  De.longDateFormat = em;
  De.invalidDate = nm;
  De.ordinal = om;
  De.preparse = md;
  De.postformat = md;
  De.relativeTime = am;
  De.pastFuture = lm;
  De.set = Gp;
  De.eras = Pg;
  De.erasParse = Bg;
  De.erasConvertYear = Fg;
  De.erasAbbrRegex = zg;
  De.erasNameRegex = Hg;
  De.erasNarrowRegex = Wg;
  De.months = Sm;
  De.monthsShort = km;
  De.monthsParse = Cm;
  De.monthsRegex = Am;
  De.monthsShortRegex = Tm;
  De.week = Nm;
  De.firstDayOfYear = Lm;
  De.firstDayOfWeek = Rm;
  De.weekdays = Wm;
  De.weekdaysMin = qm;
  De.weekdaysShort = Vm;
  De.weekdaysParse = Zm;
  De.weekdaysRegex = Qm;
  De.weekdaysShortRegex = e1;
  De.weekdaysMinRegex = t1;
  De.isPM = r1;
  De.meridiem = s1;
  function _i(e, t, n, r) {
    var i = on(),
      o = $t().set(r, t);
    return i[n](o, e);
  }
  function gd(e, t, n) {
    if ((tn(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
      return _i(e, t, n, "month");
    var r,
      i = [];
    for (r = 0; r < 12; r++) i[r] = _i(e, r, n, "month");
    return i;
  }
  function Ma(e, t, n, r) {
    typeof e == "boolean"
      ? (tn(t) && ((n = t), (t = void 0)), (t = t || ""))
      : ((t = e),
        (n = t),
        (e = !1),
        tn(t) && ((n = t), (t = void 0)),
        (t = t || ""));
    var i = on(),
      o = e ? i._week.dow : 0,
      s,
      a = [];
    if (n != null) return _i(t, (n + o) % 7, r, "day");
    for (s = 0; s < 7; s++) a[s] = _i(t, (s + o) % 7, r, "day");
    return a;
  }
  function dv(e, t) {
    return gd(e, t, "months");
  }
  function fv(e, t) {
    return gd(e, t, "monthsShort");
  }
  function hv(e, t, n) {
    return Ma(e, t, n, "weekdays");
  }
  function pv(e, t, n) {
    return Ma(e, t, n, "weekdaysShort");
  }
  function mv(e, t, n) {
    return Ma(e, t, n, "weekdaysMin");
  }
  vn("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD",
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC",
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10,
        n =
          ve((e % 100) / 10) === 1
            ? "th"
            : t === 1
            ? "st"
            : t === 2
            ? "nd"
            : t === 3
            ? "rd"
            : "th";
      return e + n;
    },
  });
  X.lang = bt("moment.lang is deprecated. Use moment.locale instead.", vn);
  X.langData = bt(
    "moment.langData is deprecated. Use moment.localeData instead.",
    on
  );
  var Vt = Math.abs;
  function gv() {
    var e = this._data;
    return (
      (this._milliseconds = Vt(this._milliseconds)),
      (this._days = Vt(this._days)),
      (this._months = Vt(this._months)),
      (e.milliseconds = Vt(e.milliseconds)),
      (e.seconds = Vt(e.seconds)),
      (e.minutes = Vt(e.minutes)),
      (e.hours = Vt(e.hours)),
      (e.months = Vt(e.months)),
      (e.years = Vt(e.years)),
      this
    );
  }
  function vd(e, t, n, r) {
    var i = Nt(t, n);
    return (
      (e._milliseconds += r * i._milliseconds),
      (e._days += r * i._days),
      (e._months += r * i._months),
      e._bubble()
    );
  }
  function vv(e, t) {
    return vd(this, e, t, 1);
  }
  function yv(e, t) {
    return vd(this, e, t, -1);
  }
  function Ec(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function xv() {
    var e = this._milliseconds,
      t = this._days,
      n = this._months,
      r = this._data,
      i,
      o,
      s,
      a,
      c;
    return (
      (e >= 0 && t >= 0 && n >= 0) ||
        (e <= 0 && t <= 0 && n <= 0) ||
        ((e += Ec(Es(n) + t) * 864e5), (t = 0), (n = 0)),
      (r.milliseconds = e % 1e3),
      (i = gt(e / 1e3)),
      (r.seconds = i % 60),
      (o = gt(i / 60)),
      (r.minutes = o % 60),
      (s = gt(o / 60)),
      (r.hours = s % 24),
      (t += gt(s / 24)),
      (c = gt(yd(t))),
      (n += c),
      (t -= Ec(Es(c))),
      (a = gt(n / 12)),
      (n %= 12),
      (r.days = t),
      (r.months = n),
      (r.years = a),
      this
    );
  }
  function yd(e) {
    return (e * 4800) / 146097;
  }
  function Es(e) {
    return (e * 146097) / 4800;
  }
  function bv(e) {
    if (!this.isValid()) return NaN;
    var t,
      n,
      r = this._milliseconds;
    if (((e = wt(e)), e === "month" || e === "quarter" || e === "year"))
      switch (((t = this._days + r / 864e5), (n = this._months + yd(t)), e)) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    else
      switch (((t = this._days + Math.round(Es(this._months))), e)) {
        case "week":
          return t / 7 + r / 6048e5;
        case "day":
          return t + r / 864e5;
        case "hour":
          return t * 24 + r / 36e5;
        case "minute":
          return t * 1440 + r / 6e4;
        case "second":
          return t * 86400 + r / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function wv() {
    return this.isValid()
      ? this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          ve(this._months / 12) * 31536e6
      : NaN;
  }
  function sn(e) {
    return function () {
      return this.as(e);
    };
  }
  var _v = sn("ms"),
    Sv = sn("s"),
    kv = sn("m"),
    Ev = sn("h"),
    Cv = sn("d"),
    Dv = sn("w"),
    Tv = sn("M"),
    Av = sn("Q"),
    Ov = sn("y");
  function Mv() {
    return Nt(this);
  }
  function Nv(e) {
    return (e = wt(e)), this.isValid() ? this[e + "s"]() : NaN;
  }
  function Rn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var Iv = Rn("milliseconds"),
    Rv = Rn("seconds"),
    Lv = Rn("minutes"),
    Pv = Rn("hours"),
    Bv = Rn("days"),
    Fv = Rn("months"),
    Yv = Rn("years");
  function jv() {
    return gt(this.days() / 7);
  }
  var Gt = Math.round,
    Un = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function $v(e, t, n, r, i) {
    return i.relativeTime(t || 1, !!n, e, r);
  }
  function Uv(e, t, n, r) {
    var i = Nt(e).abs(),
      o = Gt(i.as("s")),
      s = Gt(i.as("m")),
      a = Gt(i.as("h")),
      c = Gt(i.as("d")),
      l = Gt(i.as("M")),
      u = Gt(i.as("w")),
      m = Gt(i.as("y")),
      h =
        (o <= n.ss && ["s", o]) ||
        (o < n.s && ["ss", o]) ||
        (s <= 1 && ["m"]) ||
        (s < n.m && ["mm", s]) ||
        (a <= 1 && ["h"]) ||
        (a < n.h && ["hh", a]) ||
        (c <= 1 && ["d"]) ||
        (c < n.d && ["dd", c]);
    return (
      n.w != null && (h = h || (u <= 1 && ["w"]) || (u < n.w && ["ww", u])),
      (h = h ||
        (l <= 1 && ["M"]) ||
        (l < n.M && ["MM", l]) ||
        (m <= 1 && ["y"]) || ["yy", m]),
      (h[2] = t),
      (h[3] = +e > 0),
      (h[4] = r),
      $v.apply(null, h)
    );
  }
  function Hv(e) {
    return e === void 0 ? Gt : typeof e == "function" ? ((Gt = e), !0) : !1;
  }
  function zv(e, t) {
    return Un[e] === void 0
      ? !1
      : t === void 0
      ? Un[e]
      : ((Un[e] = t), e === "s" && (Un.ss = t - 1), !0);
  }
  function Wv(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n = !1,
      r = Un,
      i,
      o;
    return (
      typeof e == "object" && ((t = e), (e = !1)),
      typeof e == "boolean" && (n = e),
      typeof t == "object" &&
        ((r = Object.assign({}, Un, t)),
        t.s != null && t.ss == null && (r.ss = t.s - 1)),
      (i = this.localeData()),
      (o = Uv(this, !n, r, i)),
      n && (o = i.pastFuture(+this, o)),
      i.postformat(o)
    );
  }
  var Jo = Math.abs;
  function Bn(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Wi() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = Jo(this._milliseconds) / 1e3,
      t = Jo(this._days),
      n = Jo(this._months),
      r,
      i,
      o,
      s,
      a = this.asSeconds(),
      c,
      l,
      u,
      m;
    return a
      ? ((r = gt(e / 60)),
        (i = gt(r / 60)),
        (e %= 60),
        (r %= 60),
        (o = gt(n / 12)),
        (n %= 12),
        (s = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
        (c = a < 0 ? "-" : ""),
        (l = Bn(this._months) !== Bn(a) ? "-" : ""),
        (u = Bn(this._days) !== Bn(a) ? "-" : ""),
        (m = Bn(this._milliseconds) !== Bn(a) ? "-" : ""),
        c +
          "P" +
          (o ? l + o + "Y" : "") +
          (n ? l + n + "M" : "") +
          (t ? u + t + "D" : "") +
          (i || r || e ? "T" : "") +
          (i ? m + i + "H" : "") +
          (r ? m + r + "M" : "") +
          (e ? m + s + "S" : ""))
      : "P0D";
  }
  var Se = Hi.prototype;
  Se.isValid = B1;
  Se.abs = gv;
  Se.add = vv;
  Se.subtract = yv;
  Se.as = bv;
  Se.asMilliseconds = _v;
  Se.asSeconds = Sv;
  Se.asMinutes = kv;
  Se.asHours = Ev;
  Se.asDays = Cv;
  Se.asWeeks = Dv;
  Se.asMonths = Tv;
  Se.asQuarters = Av;
  Se.asYears = Ov;
  Se.valueOf = wv;
  Se._bubble = xv;
  Se.clone = Mv;
  Se.get = Nv;
  Se.milliseconds = Iv;
  Se.seconds = Rv;
  Se.minutes = Lv;
  Se.hours = Pv;
  Se.days = Bv;
  Se.weeks = jv;
  Se.months = Fv;
  Se.years = Yv;
  Se.humanize = Wv;
  Se.toISOString = Wi;
  Se.toString = Wi;
  Se.toJSON = Wi;
  Se.locale = sd;
  Se.localeData = ld;
  Se.toIsoString = bt(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Wi
  );
  Se.lang = ad;
  se("X", 0, 0, "unix");
  se("x", 0, 0, "valueOf");
  ee("x", Yi);
  ee("X", hm);
  Oe("X", function (e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3);
  });
  Oe("x", function (e, t, n) {
    n._d = new Date(ve(e));
  }); //! moment.js
  X.version = "2.29.4";
  Vp(Re);
  X.fn = z;
  X.min = I1;
  X.max = R1;
  X.now = L1;
  X.utc = $t;
  X.unix = cv;
  X.months = dv;
  X.isDate = Br;
  X.locale = vn;
  X.invalid = Ri;
  X.duration = Nt;
  X.isMoment = Mt;
  X.weekdays = hv;
  X.parseZone = uv;
  X.localeData = on;
  X.isDuration = ri;
  X.monthsShort = fv;
  X.weekdaysMin = mv;
  X.defineLocale = Sa;
  X.updateLocale = u1;
  X.locales = d1;
  X.weekdaysShort = pv;
  X.normalizeUnits = wt;
  X.relativeTimeRounding = Hv;
  X.relativeTimeThreshold = zv;
  X.calendarFormat = sg;
  X.prototype = z;
  X.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM",
  };
  var Cs = { exports: {} };
  (function (e, t) {
    (function (n, r) {
      var i = "1.0.36",
        o = "",
        s = "?",
        a = "function",
        c = "undefined",
        l = "object",
        u = "string",
        m = "major",
        h = "model",
        v = "name",
        f = "type",
        d = "vendor",
        y = "version",
        w = "architecture",
        p = "console",
        g = "mobile",
        b = "tablet",
        _ = "smarttv",
        S = "wearable",
        k = "embedded",
        E = 350,
        T = "Amazon",
        D = "Apple",
        C = "ASUS",
        A = "BlackBerry",
        M = "Browser",
        L = "Chrome",
        H = "Edge",
        j = "Firefox",
        F = "Google",
        K = "Huawei",
        Z = "LG",
        J = "Microsoft",
        I = "Motorola",
        B = "Opera",
        P = "Samsung",
        O = "Sharp",
        $ = "Sony",
        q = "Xiaomi",
        ue = "Zebra",
        U = "Facebook",
        ye = "Chromium OS",
        Ye = "Mac OS",
        ht = function (ie, oe) {
          var re = {};
          for (var fe in ie)
            oe[fe] && oe[fe].length % 2 === 0
              ? (re[fe] = oe[fe].concat(ie[fe]))
              : (re[fe] = ie[fe]);
          return re;
        },
        rt = function (ie) {
          for (var oe = {}, re = 0; re < ie.length; re++)
            oe[ie[re].toUpperCase()] = ie[re];
          return oe;
        },
        Ze = function (ie, oe) {
          return typeof ie === u ? Ae(oe).indexOf(Ae(ie)) !== -1 : !1;
        },
        Ae = function (ie) {
          return ie.toLowerCase();
        },
        zt = function (ie) {
          return typeof ie === u ? ie.replace(/[^\d\.]/g, o).split(".")[0] : r;
        },
        et = function (ie, oe) {
          if (typeof ie === u)
            return (
              (ie = ie.replace(/^\s\s*/, o)),
              typeof oe === c ? ie : ie.substring(0, E)
            );
        },
        R = function (ie, oe) {
          for (var re = 0, fe, it, He, he, ae, pt; re < oe.length && !ae; ) {
            var Pn = oe[re],
              lr = oe[re + 1];
            for (fe = it = 0; fe < Pn.length && !ae && Pn[fe]; )
              if (((ae = Pn[fe++].exec(ie)), ae))
                for (He = 0; He < lr.length; He++)
                  (pt = ae[++it]),
                    (he = lr[He]),
                    typeof he === l && he.length > 0
                      ? he.length === 2
                        ? typeof he[1] == a
                          ? (this[he[0]] = he[1].call(this, pt))
                          : (this[he[0]] = he[1])
                        : he.length === 3
                        ? typeof he[1] === a && !(he[1].exec && he[1].test)
                          ? (this[he[0]] = pt ? he[1].call(this, pt, he[2]) : r)
                          : (this[he[0]] = pt ? pt.replace(he[1], he[2]) : r)
                        : he.length === 4 &&
                          (this[he[0]] = pt
                            ? he[3].call(this, pt.replace(he[1], he[2]))
                            : r)
                      : (this[he] = pt || r);
            re += 2;
          }
        },
        G = function (ie, oe) {
          for (var re in oe)
            if (typeof oe[re] === l && oe[re].length > 0) {
              for (var fe = 0; fe < oe[re].length; fe++)
                if (Ze(oe[re][fe], ie)) return re === s ? r : re;
            } else if (Ze(oe[re], ie)) return re === s ? r : re;
          return ie;
        },
        W = {
          "1.0": "/8",
          1.2: "/1",
          1.3: "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/",
        },
        V = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        te = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [y, [v, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [y, [v, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [v, y],
            [/opios[\/ ]+([\w\.]+)/i],
            [y, [v, B + " Mini"]],
            [/\bopr\/([\w\.]+)/i],
            [y, [v, B]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [v, y],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [y, [v, "UC" + M]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
            [y, [v, "WeChat(Win) Desktop"]],
            [/micromessenger\/([\w\.]+)/i],
            [y, [v, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [y, [v, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [y, [v, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [y, [v, "Yandex"]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[v, /(.+)/, "$1 Secure " + M], y],
            [/\bfocus\/([\w\.]+)/i],
            [y, [v, j + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [y, [v, B + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [y, [v, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [y, [v, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [y, [v, B + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [y, [v, "MIUI " + M]],
            [/fxios\/([-\w\.]+)/i],
            [y, [v, j]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[v, "360 " + M]],
            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
            [[v, /(.+)/, "$1 " + M], y],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[v, /_/g, " "], y],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [v, y],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
            [v],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[v, U], y],
            [
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [v, y],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [y, [v, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [y, [v, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [y, [v, L + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[v, L + " WebView"], y],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [y, [v, "Android " + M]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [v, y],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [y, [v, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [y, v],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [v, [y, G, W]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [v, y],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[v, "Netscape"], y],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [y, [v, j + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
              /panasonic;(viera)/i,
            ],
            [v, y],
            [/(cobalt)\/([\w\.]+)/i],
            [v, [y, /master.|lts./, ""]],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[w, "amd64"]],
            [/(ia32(?=;))/i],
            [[w, Ae]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[w, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[w, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[w, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[w, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[w, /ower/, o, Ae]],
            [/(sun4\w)[;\)]/i],
            [[w, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[w, Ae]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [h, [d, P], [f, b]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [h, [d, P], [f, g]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [h, [d, D], [f, g]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [h, [d, D], [f, b]],
            [/(macintosh);/i],
            [h, [d, D]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [h, [d, O], [f, g]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [h, [d, K], [f, b]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [h, [d, K], [f, g]],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [h, /_/g, " "],
              [d, q],
              [f, g],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [h, /_/g, " "],
              [d, q],
              [f, b],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [h, [d, "OPPO"], [f, g]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [h, [d, "Vivo"], [f, g]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [h, [d, "Realme"], [f, g]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [h, [d, I], [f, g]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [h, [d, I], [f, b]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [h, [d, Z], [f, b]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [h, [d, Z], [f, g]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [h, [d, "Lenovo"], [f, b]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [h, /_/g, " "],
              [d, "Nokia"],
              [f, g],
            ],
            [/(pixel c)\b/i],
            [h, [d, F], [f, b]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [h, [d, F], [f, g]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [h, [d, $], [f, g]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [h, "Xperia Tablet"],
              [d, $],
              [f, b],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [h, [d, "OnePlus"], [f, g]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [h, [d, T], [f, b]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [h, /(.+)/g, "Fire Phone $1"],
              [d, T],
              [f, g],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [h, d, [f, b]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [h, [d, A], [f, g]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [h, [d, C], [f, b]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [h, [d, C], [f, g]],
            [/(nexus 9)/i],
            [h, [d, "HTC"], [f, b]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [d, [h, /_/g, " "], [f, g]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [h, [d, "Acer"], [f, b]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [h, [d, "Meizu"], [f, g]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [d, h, [f, g]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [d, h, [f, b]],
            [/(surface duo)/i],
            [h, [d, J], [f, b]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [h, [d, "Fairphone"], [f, g]],
            [/(u304aa)/i],
            [h, [d, "AT&T"], [f, g]],
            [/\bsie-(\w*)/i],
            [h, [d, "Siemens"], [f, g]],
            [/\b(rct\w+) b/i],
            [h, [d, "RCA"], [f, b]],
            [/\b(venue[\d ]{2,7}) b/i],
            [h, [d, "Dell"], [f, b]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [h, [d, "Verizon"], [f, b]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [h, [d, "Barnes & Noble"], [f, b]],
            [/\b(tm\d{3}\w+) b/i],
            [h, [d, "NuVision"], [f, b]],
            [/\b(k88) b/i],
            [h, [d, "ZTE"], [f, b]],
            [/\b(nx\d{3}j) b/i],
            [h, [d, "ZTE"], [f, g]],
            [/\b(gen\d{3}) b.+49h/i],
            [h, [d, "Swiss"], [f, g]],
            [/\b(zur\d{3}) b/i],
            [h, [d, "Swiss"], [f, b]],
            [/\b((zeki)?tb.*\b) b/i],
            [h, [d, "Zeki"], [f, b]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[d, "Dragon Touch"], h, [f, b]],
            [/\b(ns-?\w{0,9}) b/i],
            [h, [d, "Insignia"], [f, b]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [h, [d, "NextBook"], [f, b]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[d, "Voice"], h, [f, g]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[d, "LvTel"], h, [f, g]],
            [/\b(ph-1) /i],
            [h, [d, "Essential"], [f, g]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [h, [d, "Envizen"], [f, b]],
            [/\b(trio[-\w\. ]+) b/i],
            [h, [d, "MachSpeed"], [f, b]],
            [/\btu_(1491) b/i],
            [h, [d, "Rotor"], [f, b]],
            [/(shield[\w ]+) b/i],
            [h, [d, "Nvidia"], [f, b]],
            [/(sprint) (\w+)/i],
            [d, h, [f, g]],
            [/(kin\.[onetw]{3})/i],
            [
              [h, /\./g, " "],
              [d, J],
              [f, g],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [h, [d, ue], [f, b]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [h, [d, ue], [f, g]],
            [/smart-tv.+(samsung)/i],
            [d, [f, _]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [h, /^/, "SmartTV"],
              [d, P],
              [f, _],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [d, Z],
              [f, _],
            ],
            [/(apple) ?tv/i],
            [d, [h, D + " TV"], [f, _]],
            [/crkey/i],
            [
              [h, L + "cast"],
              [d, F],
              [f, _],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [h, [d, T], [f, _]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [h, [d, O], [f, _]],
            [/(bravia[\w ]+)( bui|\))/i],
            [h, [d, $], [f, _]],
            [/(mitv-\w{5}) bui/i],
            [h, [d, q], [f, _]],
            [/Hbbtv.*(technisat) (.*);/i],
            [d, h, [f, _]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [d, et],
              [h, et],
              [f, _],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[f, _]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [d, h, [f, p]],
            [/droid.+; (shield) bui/i],
            [h, [d, "Nvidia"], [f, p]],
            [/(playstation [345portablevi]+)/i],
            [h, [d, $], [f, p]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [h, [d, J], [f, p]],
            [/((pebble))app/i],
            [d, h, [f, S]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [h, [d, D], [f, S]],
            [/droid.+; (glass) \d/i],
            [h, [d, F], [f, S]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [h, [d, ue], [f, S]],
            [/(quest( 2| pro)?)/i],
            [h, [d, U], [f, S]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [d, [f, k]],
            [/(aeobc)\b/i],
            [h, [d, T], [f, k]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [h, [f, g]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [h, [f, b]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[f, b]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[f, g]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [h, [d, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [y, [v, H + "HTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [y, [v, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [v, y],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [y, v],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [v, y],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            ],
            [v, [y, G, V]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [v, "Windows"],
              [y, G, V],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [y, /_/g, "."],
              [v, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [v, Ye],
              [y, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [y, v],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [v, y],
            [/\(bb(10);/i],
            [y, [v, A]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [y, [v, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [y, [v, j + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [y, [v, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [y, [v, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [y, [v, L + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[v, ye], y],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [v, y],
            [/(sunos) ?([\w\.\d]*)/i],
            [[v, "Solaris"], y],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [v, y],
          ],
        },
        ne = function (ie, oe) {
          if ((typeof ie === l && ((oe = ie), (ie = r)), !(this instanceof ne)))
            return new ne(ie, oe).getResult();
          var re = typeof n !== c && n.navigator ? n.navigator : r,
            fe = ie || (re && re.userAgent ? re.userAgent : o),
            it = re && re.userAgentData ? re.userAgentData : r,
            He = oe ? ht(te, oe) : te,
            he = re && re.userAgent == fe;
          return (
            (this.getBrowser = function () {
              var ae = {};
              return (
                (ae[v] = r),
                (ae[y] = r),
                R.call(ae, fe, He.browser),
                (ae[m] = zt(ae[y])),
                he &&
                  re &&
                  re.brave &&
                  typeof re.brave.isBrave == a &&
                  (ae[v] = "Brave"),
                ae
              );
            }),
            (this.getCPU = function () {
              var ae = {};
              return (ae[w] = r), R.call(ae, fe, He.cpu), ae;
            }),
            (this.getDevice = function () {
              var ae = {};
              return (
                (ae[d] = r),
                (ae[h] = r),
                (ae[f] = r),
                R.call(ae, fe, He.device),
                he && !ae[f] && it && it.mobile && (ae[f] = g),
                he &&
                  ae[h] == "Macintosh" &&
                  re &&
                  typeof re.standalone !== c &&
                  re.maxTouchPoints &&
                  re.maxTouchPoints > 2 &&
                  ((ae[h] = "iPad"), (ae[f] = b)),
                ae
              );
            }),
            (this.getEngine = function () {
              var ae = {};
              return (ae[v] = r), (ae[y] = r), R.call(ae, fe, He.engine), ae;
            }),
            (this.getOS = function () {
              var ae = {};
              return (
                (ae[v] = r),
                (ae[y] = r),
                R.call(ae, fe, He.os),
                he &&
                  !ae[v] &&
                  it &&
                  it.platform != "Unknown" &&
                  (ae[v] = it.platform
                    .replace(/chrome os/i, ye)
                    .replace(/macos/i, Ye)),
                ae
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return fe;
            }),
            (this.setUA = function (ae) {
              return (
                (fe = typeof ae === u && ae.length > E ? et(ae, E) : ae), this
              );
            }),
            this.setUA(fe),
            this
          );
        };
      (ne.VERSION = i),
        (ne.BROWSER = rt([v, y, m])),
        (ne.CPU = rt([w])),
        (ne.DEVICE = rt([h, d, f, p, g, _, b, S, k])),
        (ne.ENGINE = ne.OS = rt([v, y])),
        e.exports && (t = e.exports = ne),
        (t.UAParser = ne);
      var le = typeof n !== c && (n.jQuery || n.Zepto);
      if (le && !le.ua) {
        var me = new ne();
        (le.ua = me.getResult()),
          (le.ua.get = function () {
            return me.getUA();
          }),
          (le.ua.set = function (ie) {
            me.setUA(ie);
            var oe = me.getResult();
            for (var re in oe) le.ua[re] = oe[re];
          });
      }
    })(typeof window == "object" ? window : ge);
  })(Cs, Cs.exports);
  var Vv = Cs.exports;
  function Dr(e) {
    "@babel/helpers - typeof";
    return (
      (Dr =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Dr(e)
    );
  }
  function qv(e, t) {
    if (Dr(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (Dr(r) !== "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Gv(e) {
    var t = qv(e, "string");
    return Dr(t) === "symbol" ? t : String(t);
  }
  function Zv(e, t, n) {
    return (
      (t = Gv(t)),
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Cc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Dc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Cc(Object(n), !0).forEach(function (r) {
            Zv(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function Ke(e) {
    return (
      "Minified Redux error #" +
      e +
      "; visit https://redux.js.org/Errors?code=" +
      e +
      " for the full message or use the non-minified dev environment for full errors. "
    );
  }
  var Tc = (function () {
      return (
        (typeof Symbol == "function" && Symbol.observable) || "@@observable"
      );
    })(),
    Qo = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    Si = {
      INIT: "@@redux/INIT" + Qo(),
      REPLACE: "@@redux/REPLACE" + Qo(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + Qo();
      },
    };
  function Kv(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  }
  function xd(e, t, n) {
    var r;
    if (
      (typeof t == "function" && typeof n == "function") ||
      (typeof n == "function" && typeof arguments[3] == "function")
    )
      throw new Error(Ke(0));
    if (
      (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
      typeof n < "u")
    ) {
      if (typeof n != "function") throw new Error(Ke(1));
      return n(xd)(e, t);
    }
    if (typeof e != "function") throw new Error(Ke(2));
    var i = e,
      o = t,
      s = [],
      a = s,
      c = !1;
    function l() {
      a === s && (a = s.slice());
    }
    function u() {
      if (c) throw new Error(Ke(3));
      return o;
    }
    function m(d) {
      if (typeof d != "function") throw new Error(Ke(4));
      if (c) throw new Error(Ke(5));
      var y = !0;
      return (
        l(),
        a.push(d),
        function () {
          if (y) {
            if (c) throw new Error(Ke(6));
            (y = !1), l();
            var p = a.indexOf(d);
            a.splice(p, 1), (s = null);
          }
        }
      );
    }
    function h(d) {
      if (!Kv(d)) throw new Error(Ke(7));
      if (typeof d.type > "u") throw new Error(Ke(8));
      if (c) throw new Error(Ke(9));
      try {
        (c = !0), (o = i(o, d));
      } finally {
        c = !1;
      }
      for (var y = (s = a), w = 0; w < y.length; w++) {
        var p = y[w];
        p();
      }
      return d;
    }
    function v(d) {
      if (typeof d != "function") throw new Error(Ke(10));
      (i = d), h({ type: Si.REPLACE });
    }
    function f() {
      var d,
        y = m;
      return (
        (d = {
          subscribe: function (p) {
            if (typeof p != "object" || p === null) throw new Error(Ke(11));
            function g() {
              p.next && p.next(u());
            }
            g();
            var b = y(g);
            return { unsubscribe: b };
          },
        }),
        (d[Tc] = function () {
          return this;
        }),
        d
      );
    }
    return (
      h({ type: Si.INIT }),
      (r = { dispatch: h, subscribe: m, getState: u, replaceReducer: v }),
      (r[Tc] = f),
      r
    );
  }
  var Xv = xd;
  function Jv(e) {
    Object.keys(e).forEach(function (t) {
      var n = e[t],
        r = n(void 0, { type: Si.INIT });
      if (typeof r > "u") throw new Error(Ke(12));
      if (typeof n(void 0, { type: Si.PROBE_UNKNOWN_ACTION() }) > "u")
        throw new Error(Ke(13));
    });
  }
  function Qv(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
      var i = t[r];
      typeof e[i] == "function" && (n[i] = e[i]);
    }
    var o = Object.keys(n),
      s;
    try {
      Jv(n);
    } catch (a) {
      s = a;
    }
    return function (c, l) {
      if ((c === void 0 && (c = {}), s)) throw s;
      for (var u = !1, m = {}, h = 0; h < o.length; h++) {
        var v = o[h],
          f = n[v],
          d = c[v],
          y = f(d, l);
        if (typeof y > "u") throw (l && l.type, new Error(Ke(14)));
        (m[v] = y), (u = u || y !== d);
      }
      return (u = u || o.length !== Object.keys(c).length), u ? m : c;
    };
  }
  function bd() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.length === 0
      ? function (r) {
          return r;
        }
      : t.length === 1
      ? t[0]
      : t.reduce(function (r, i) {
          return function () {
            return r(i.apply(void 0, arguments));
          };
        });
  }
  function ey() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (r) {
      return function () {
        var i = r.apply(void 0, arguments),
          o = function () {
            throw new Error(Ke(15));
          },
          s = {
            getState: i.getState,
            dispatch: function () {
              return o.apply(void 0, arguments);
            },
          },
          a = t.map(function (c) {
            return c(s);
          });
        return (
          (o = bd.apply(void 0, a)(i.dispatch)),
          Dc(Dc({}, i), {}, { dispatch: o })
        );
      };
    };
  }
  function wd(e) {
    var t = function (r) {
      var i = r.dispatch,
        o = r.getState;
      return function (s) {
        return function (a) {
          return typeof a == "function" ? a(i, o, e) : s(a);
        };
      };
    };
    return t;
  }
  var _d = wd();
  _d.withExtraArgument = wd;
  const ty = _d;
  var ny = { exports: {} };
  /*!
   *
   *     Litepicker polyfills ie11 v0.0.1 (https://github.com/wakirin/Litepicker-polyfills-ie11)
   *     Package: litepicker-polyfills-ie11 (https://www.npmjs.com/package/litepicker-polyfills-ie11)
   *     License: MIT (https://github.com/wakirin/Litepicker-polyfills-ie11/blob/master/LICENCE.md)
   *     Copyright 2019-2021 Rinat G.
   *
   *     Hash: 9eade912101059ca519c
   *     Generated on: 1611142500943
   *
   */ (function (e, t) {
    (function (n, r) {
      e.exports = r();
    })(window, function () {
      return (function (n) {
        var r = {};
        function i(o) {
          if (r[o]) return r[o].exports;
          var s = (r[o] = { i: o, l: !1, exports: {} });
          return n[o].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
        }
        return (
          (i.m = n),
          (i.c = r),
          (i.d = function (o, s, a) {
            i.o(o, s) ||
              Object.defineProperty(o, s, { enumerable: !0, get: a });
          }),
          (i.r = function (o) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(o, "__esModule", { value: !0 });
          }),
          (i.t = function (o, s) {
            if (
              (1 & s && (o = i(o)),
              8 & s || (4 & s && typeof o == "object" && o && o.__esModule))
            )
              return o;
            var a = Object.create(null);
            if (
              (i.r(a),
              Object.defineProperty(a, "default", { enumerable: !0, value: o }),
              2 & s && typeof o != "string")
            )
              for (var c in o)
                i.d(
                  a,
                  c,
                  function (l) {
                    return o[l];
                  }.bind(null, c)
                );
            return a;
          }),
          (i.n = function (o) {
            var s =
              o && o.__esModule
                ? function () {
                    return o.default;
                  }
                : function () {
                    return o;
                  };
            return i.d(s, "a", s), s;
          }),
          (i.o = function (o, s) {
            return Object.prototype.hasOwnProperty.call(o, s);
          }),
          (i.p = ""),
          i((i.s = 0))
        );
      })([
        function (n, r, i) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            i(1),
            Object.entries ||
              (Object.entries = function (o) {
                for (
                  var s = Object.keys(o), a = s.length, c = new Array(a);
                  a;

                )
                  c[(a -= 1)] = [s[a], o[s[a]]];
                return c;
              }),
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
              (Element.prototype.closest = function (o) {
                var s = this;
                do {
                  if (s.matches(o)) return s;
                  s = s.parentElement || s.parentNode;
                } while (s !== null && s.nodeType === 1);
                return null;
              }),
            String.prototype.includes ||
              (String.prototype.includes = function (o, s) {
                if (o instanceof RegExp)
                  throw TypeError("first argument must not be a RegExp");
                return s === void 0 && (s = 0), this.indexOf(o, s) !== -1;
              }),
            [
              Element.prototype,
              Document.prototype,
              DocumentFragment.prototype,
            ].forEach(function (o) {
              o.hasOwnProperty("prepend") ||
                Object.defineProperty(o, "prepend", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function () {
                    var s = Array.prototype.slice.call(arguments),
                      a = document.createDocumentFragment();
                    s.forEach(function (c) {
                      var l = c instanceof Node;
                      a.appendChild(l ? c : document.createTextNode(String(c)));
                    }),
                      this.insertBefore(a, this.firstChild);
                  },
                });
            });
        },
        function (n, r) {
          /*! ie11CustomProperties.js v4.1.0 | MIT License | https://git.io/fjXMN */ (function () {
            var i = document.createElement("i");
            if (
              (i.style.setProperty("--x", "y"),
              i.style.getPropertyValue("--x") !== "y" && i.msMatchesSelector)
            ) {
              Element.prototype.matches ||
                (Element.prototype.matches =
                  Element.prototype.msMatchesSelector);
              var o,
                s = [],
                a = document,
                c = !1;
              document.addEventListener("DOMContentLoaded", function () {
                c = !0;
              }),
                "classList" in Element.prototype ||
                  J("classList", HTMLElement.prototype, Element.prototype),
                "innerHTML" in Element.prototype ||
                  J("innerHTML", HTMLElement.prototype, Element.prototype),
                "runtimeStyle" in Element.prototype ||
                  J("runtimeStyle", HTMLElement.prototype, Element.prototype),
                "sheet" in SVGStyleElement.prototype ||
                  Object.defineProperty(SVGStyleElement.prototype, "sheet", {
                    get: function () {
                      for (
                        var R, G = document.styleSheets, W = 0;
                        (R = G[W++]);

                      )
                        if (R.ownerNode === this) return R;
                    },
                  });
              var l = {},
                u = new Set(),
                m = !1,
                h = !1,
                v =
                  /([\s{;])(--([A-Za-z0-9-_]*)\s*:([^;!}{]+)(!important)?)(?=\s*([;}]|$))/g,
                f =
                  /([{;]\s*)([A-Za-z0-9-_]+\s*:[^;}{]*var\([^!;}{]+)(!important)?(?=\s*([;}$]|$))/g,
                d = /-ieVar-([^:]+):/g,
                y = /-ie-([^};]+)/g,
                w =
                  /:(hover|active|focus|target|visited|link|:before|:after|:first-letter|:first-line)/;
              j("style", I),
                j('link[rel="stylesheet"]', I),
                j("[ie-style]", function (R) {
                  var G = B("{" + R.getAttribute("ie-style")).substr(1);
                  R.style.cssText += ";" + G;
                  var W = P(R.style);
                  W.getters && q(R, W.getters, "%styleAttr"),
                    W.setters && U(R, W.setters);
                });
              var p = {
                  hover: { on: "mouseenter", off: "mouseleave" },
                  focus: { on: "focusin", off: "focusout" },
                  active: { on: "CSSActivate", off: "CSSDeactivate" },
                },
                g = null;
              document.addEventListener("mousedown", function (R) {
                setTimeout(function () {
                  if (R.target === document.activeElement) {
                    var G = document.createEvent("Event");
                    G.initEvent("CSSActivate", !0, !0),
                      (g = R.target).dispatchEvent(G);
                  }
                });
              }),
                document.addEventListener("mouseup", function () {
                  if (g) {
                    var R = document.createEvent("Event");
                    R.initEvent("CSSDeactivate", !0, !0),
                      g.dispatchEvent(R),
                      (g = null);
                  }
                });
              var b = 0,
                _ = new MutationObserver(function (R) {
                  if (!h)
                    for (var G, W = 0; (G = R[W++]); )
                      G.attributeName !== "iecp-needed" && Ae(G.target);
                });
              setTimeout(function () {
                _.observe(document, { attributes: !0, subtree: !0 });
              });
              var S = location.hash;
              addEventListener("hashchange", function (R) {
                var G = document.getElementById(location.hash.substr(1));
                if (G) {
                  var W = document.getElementById(S.substr(1));
                  Ae(G), Ae(W);
                } else Ae(document);
                S = location.hash;
              });
              var k = Object.getOwnPropertyDescriptor(
                  HTMLElement.prototype,
                  "style"
                ),
                E = k.get;
              (k.get = function () {
                const R = E.call(this);
                return (R.owningElement = this), R;
              }),
                Object.defineProperty(HTMLElement.prototype, "style", k);
              var T = getComputedStyle;
              window.getComputedStyle = function (R) {
                var G = T.apply(this, arguments);
                return (G.computedFor = R), G;
              };
              var D = CSSStyleDeclaration.prototype,
                C = D.getPropertyValue;
              D.getPropertyValue = function (R) {
                if (
                  ((this.lastPropertyServedBy = !1),
                  (R = R.trim())[0] !== "-" || R[1] !== "-")
                )
                  return C.apply(this, arguments);
                const G = R.substr(2),
                  W = "-ie-" + G,
                  V = "-ie-❗" + G;
                let te = this[V] || this[W];
                if (this.computedFor) {
                  if (te === void 0 || A[te]) {
                    if (A[te] || !L[R] || L[R].inherits) {
                      let me = this.computedFor.parentNode;
                      for (; me.nodeType === 1; ) {
                        if (me.ieCP_setters && me.ieCP_setters[R]) {
                          var ne = getComputedStyle(me),
                            le = ne[V] || ne[W];
                          if (le !== void 0) {
                            (te = et(this, le)),
                              (this.lastPropertyServedBy = me);
                            break;
                          }
                        }
                        me = me.parentNode;
                      }
                    }
                  } else
                    (te = et(this, te)),
                      (this.lastPropertyServedBy = this.computedFor);
                  if (te === "initial") return "";
                }
                return (
                  te === void 0 && L[R] && (te = L[R].initialValue),
                  te === void 0 ? "" : te
                );
              };
              var A = { inherit: 1, revert: 1, unset: 1 },
                M = D.setProperty;
              (D.setProperty = function (R, G, W) {
                if (R[0] !== "-" || R[1] !== "-")
                  return M.apply(this, arguments);
                const V = this.owningElement;
                V &&
                  (V.ieCP_setters || (V.ieCP_setters = {}),
                  (V.ieCP_setters[R] = 1)),
                  (R = "-ie-" + (W === "important" ? "❗" : "") + R.substr(2)),
                  (this.cssText += "; " + R + ":" + G + ";"),
                  V && Ae(V);
              }),
                window.CSS || (window.CSS = {});
              var L = {};
              CSS.registerProperty = function (R) {
                L[R.name] = R;
              };
            }
            function H(R, G) {
              try {
                return R.querySelectorAll(G);
              } catch {
                return [];
              }
            }
            function j(R, G) {
              for (
                var W,
                  V = { selector: R, callback: G, elements: new WeakMap() },
                  te = H(a, V.selector),
                  ne = 0;
                (W = te[ne++]);

              )
                V.elements.set(W, !0), V.callback.call(W, W);
              s.push(V),
                o ||
                  (o = new MutationObserver(Z)).observe(a, {
                    childList: !0,
                    subtree: !0,
                  }),
                F(V);
            }
            function F(R, G) {
              var W,
                V = 0,
                te = [];
              try {
                G && G.matches(R.selector) && te.push(G);
              } catch {}
              for (
                c && Array.prototype.push.apply(te, H(G || a, R.selector));
                (W = te[V++]);

              )
                R.elements.has(W) ||
                  (R.elements.set(W, !0), R.callback.call(W, W));
            }
            function K(R) {
              for (var G, W = 0; (G = s[W++]); ) F(G, R);
            }
            function Z(R) {
              for (var G, W, V, te, ne = 0; (W = R[ne++]); )
                for (V = W.addedNodes, G = 0; (te = V[G++]); )
                  te.nodeType === 1 && K(te);
            }
            function J(R, G, W) {
              var V = Object.getOwnPropertyDescriptor(G, R);
              Object.defineProperty(W, R, V);
            }
            function I(R) {
              if (!R.ieCP_polyfilled && !R.ieCP_elementSheet && R.sheet) {
                if (R.href)
                  return (
                    (G = R.href),
                    (W = function (le) {
                      var me = B(le);
                      le !== me && O(R, me);
                    }),
                    (V = new XMLHttpRequest()).open("GET", G),
                    V.overrideMimeType("text/css"),
                    (V.onload = function () {
                      V.status >= 200 && V.status < 400 && W(V.responseText);
                    }),
                    void V.send()
                  );
                var G,
                  W,
                  V,
                  te = R.innerHTML,
                  ne = B(te);
                te !== ne && O(R, ne);
              }
            }
            function B(R) {
              return R.replace(v, function (G, W, V, te, ne, le) {
                return W + "-ie-" + (le ? "❗" : "") + te + ":" + ne;
              }).replace(f, function (G, W, V, te) {
                return W + "-ieVar-" + (te ? "❗" : "") + V + "; " + V;
              });
            }
            function P(R) {
              R["z-index"] === R && x();
              const G = R.cssText;
              var W,
                V,
                te = G.match(d);
              if (te) {
                var ne = [];
                for (W = 0; (V = te[W++]); ) {
                  let ie = V.slice(7, -1);
                  ie[0] === "❗" && (ie = ie.substr(1)),
                    ne.push(ie),
                    l[ie] || (l[ie] = []),
                    l[ie].push(R);
                }
              }
              var le = G.match(y);
              if (le) {
                var me = {};
                for (W = 0; (V = le[W++]); ) {
                  let ie = V.substr(4).split(":"),
                    oe = ie[0],
                    re = ie[1];
                  oe[0] === "❗" && (oe = oe.substr(1)), (me[oe] = re);
                }
              }
              return { getters: ne, setters: me };
            }
            function O(R, G) {
              (R.sheet.cssText = G), (R.ieCP_polyfilled = !0);
              for (var W, V = R.sheet.rules, te = 0; (W = V[te++]); ) {
                const ne = P(W.style);
                ne.getters && $(W.selectorText, ne.getters),
                  ne.setters && ue(W.selectorText, ne.setters);
                const le =
                  W.parentRule &&
                  W.parentRule.media &&
                  W.parentRule.media.mediaText;
                le &&
                  (ne.getters || ne.setters) &&
                  matchMedia(le).addListener(function () {
                    Ae(document.documentElement);
                  });
              }
              ye();
            }
            function $(R, G) {
              Ye(R),
                j(ht(R), function (W) {
                  q(W, G, R), rt(W);
                });
            }
            function q(R, G, W) {
              var V,
                te,
                ne = 0;
              const le = W.split(",");
              for (
                R.setAttribute("iecp-needed", !0),
                  R.ieCPSelectors || (R.ieCPSelectors = {});
                (V = G[ne++]);

              )
                for (te = 0; (W = le[te++]); ) {
                  const me = W.trim().split("::");
                  R.ieCPSelectors[V] || (R.ieCPSelectors[V] = []),
                    R.ieCPSelectors[V].push({
                      selector: me[0],
                      pseudo: me[1] ? "::" + me[1] : "",
                    });
                }
            }
            function ue(R, G) {
              Ye(R),
                j(ht(R), function (W) {
                  U(W, G);
                });
            }
            function U(R, G) {
              for (var W in (R.ieCP_setters || (R.ieCP_setters = {}), G))
                R.ieCP_setters["--" + W] = 1;
              Ae(R);
            }
            function ye() {
              for (var R in l) {
                let te = l[R];
                for (var G, W = 0; (G = te[W++]); )
                  if (!G.owningElement) {
                    var V = G["-ieVar-" + R];
                    if (
                      V &&
                      (V = et(
                        getComputedStyle(document.documentElement),
                        V
                      )) !== ""
                    )
                      try {
                        G[R] = V;
                      } catch {}
                  }
              }
            }
            function Ye(R) {
              for (var G in ((R = R.split(",")[0]), p)) {
                var W = R.split(":" + G);
                if (W.length > 1) {
                  var V = W[1].match(/^[^\s]*/);
                  let te = ht(W[0] + V);
                  const ne = p[G];
                  j(te, function (le) {
                    le.addEventListener(ne.on, zt),
                      le.addEventListener(ne.off, zt);
                  });
                }
              }
            }
            function ht(R) {
              return R.replace(w, "").replace(":not()", "");
            }
            function rt(R) {
              u.add(R),
                m ||
                  ((m = !0),
                  requestAnimationFrame(function () {
                    (m = !1),
                      (h = !0),
                      u.forEach(Ze),
                      u.clear(),
                      setTimeout(function () {
                        h = !1;
                      });
                  }));
            }
            function Ze(R) {
              R.ieCP_unique ||
                ((R.ieCP_unique = ++b),
                R.classList.add("iecp-u" + R.ieCP_unique));
              var G = getComputedStyle(R);
              let W = "";
              for (var V in ((R.runtimeStyle.cssText = ""), R.ieCPSelectors)) {
                var te = G["-ieVar-❗" + V];
                let oe = te || G["-ieVar-" + V];
                if (oe) {
                  var ne = {},
                    le = et(G, oe, ne);
                  te && (le += " !important");
                  for (var me, ie = 0; (me = R.ieCPSelectors[V][ie++]); )
                    me.selector === "%styleAttr" && (R.style[V] = le),
                      (te || ne.allByRoot === !1) &&
                        (me.pseudo
                          ? (W +=
                              me.selector +
                              ".iecp-u" +
                              R.ieCP_unique +
                              me.pseudo +
                              "{" +
                              V +
                              ":" +
                              le +
                              `}
`)
                          : (R.runtimeStyle[V] = le));
                }
              }
              (function (oe, re) {
                if (!oe.ieCP_styleEl && re) {
                  const fe = document.createElement("style");
                  (fe.ieCP_elementSheet = 1),
                    document.head.appendChild(fe),
                    (oe.ieCP_styleEl = fe);
                }
                oe.ieCP_styleEl && (oe.ieCP_styleEl.innerHTML = re);
              })(R, W);
            }
            function Ae(R) {
              if (R) {
                R === document.documentElement && ye();
                var G = R.querySelectorAll("[iecp-needed]");
                R.hasAttribute && R.hasAttribute("iecp-needed") && rt(R);
                for (var W, V = 0; (W = G[V++]); ) rt(W);
              }
            }
            function zt(R) {
              Ae(R.target);
            }
            function et(R, G, W) {
              return (function (V, te) {
                let ne,
                  le,
                  me = 0,
                  ie = null,
                  oe = 0,
                  re = "",
                  fe = 0;
                for (; (ne = V[fe++]); ) {
                  if (
                    (ne === "(" &&
                      (++me,
                      ie === null &&
                        V[fe - 4] + V[fe - 3] + V[fe - 2] === "var" &&
                        ((ie = me), (re += V.substring(oe, fe - 4)), (oe = fe)),
                      V[fe - 5] + V[fe - 4] + V[fe - 3] + V[fe - 2] ===
                        "calc" && (le = me)),
                    ne === ")" && ie === me)
                  ) {
                    let it,
                      He = V.substring(oe, fe - 1).trim(),
                      he = He.indexOf(",");
                    he !== -1 &&
                      ((it = He.slice(he + 1)), (He = He.slice(0, he))),
                      (re += te(He, it, le)),
                      (oe = fe),
                      (ie = null);
                  }
                  ne === ")" && (--me, le === me && (le = null));
                }
                return (re += V.substring(oe)), re;
              })(G, function (V, te, ne) {
                var le = R.getPropertyValue(V);
                return (
                  ne && (le = le.replace(/^calc\(/, "(")),
                  W &&
                    R.lastPropertyServedBy !== document.documentElement &&
                    (W.allByRoot = !1),
                  le === "" && te && (le = et(R, te, W)),
                  le
                );
              });
            }
          })();
        },
      ]);
    });
  })(ny);
  var Sd = { exports: {} };
  /*!
   *
   * litepicker.umd.js
   * Litepicker v2.0.12 (https://github.com/wakirin/Litepicker)
   * Package: litepicker (https://www.npmjs.com/package/litepicker)
   * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
   * Copyright 2019-2021 Rinat G.
   *
   * Hash: 504eef9c08cb42543660
   *
   */ (function (e, t) {
    (function (n, r) {
      e.exports = r();
    })(window, function () {
      return (function (n) {
        var r = {};
        function i(o) {
          if (r[o]) return r[o].exports;
          var s = (r[o] = { i: o, l: !1, exports: {} });
          return n[o].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
        }
        return (
          (i.m = n),
          (i.c = r),
          (i.d = function (o, s, a) {
            i.o(o, s) ||
              Object.defineProperty(o, s, { enumerable: !0, get: a });
          }),
          (i.r = function (o) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(o, "__esModule", { value: !0 });
          }),
          (i.t = function (o, s) {
            if (
              (1 & s && (o = i(o)),
              8 & s || (4 & s && typeof o == "object" && o && o.__esModule))
            )
              return o;
            var a = Object.create(null);
            if (
              (i.r(a),
              Object.defineProperty(a, "default", { enumerable: !0, value: o }),
              2 & s && typeof o != "string")
            )
              for (var c in o)
                i.d(
                  a,
                  c,
                  function (l) {
                    return o[l];
                  }.bind(null, c)
                );
            return a;
          }),
          (i.n = function (o) {
            var s =
              o && o.__esModule
                ? function () {
                    return o.default;
                  }
                : function () {
                    return o;
                  };
            return i.d(s, "a", s), s;
          }),
          (i.o = function (o, s) {
            return Object.prototype.hasOwnProperty.call(o, s);
          }),
          (i.p = ""),
          i((i.s = 4))
        );
      })([
        function (n, r, i) {
          Object.defineProperty(r, "__esModule", { value: !0 });
          var o = (function () {
            function s(a, c, l) {
              a === void 0 && (a = null),
                c === void 0 && (c = null),
                l === void 0 && (l = "en-US"),
                (this.dateInstance =
                  typeof c == "object" && c !== null
                    ? c.parse(a instanceof s ? a.clone().toJSDate() : a)
                    : typeof c == "string"
                    ? s.parseDateTime(a, c, l)
                    : a
                    ? s.parseDateTime(a)
                    : s.parseDateTime(new Date())),
                (this.lang = l);
            }
            return (
              (s.parseDateTime = function (a, c, l) {
                if (
                  (c === void 0 && (c = "YYYY-MM-DD"),
                  l === void 0 && (l = "en-US"),
                  !a)
                )
                  return new Date(NaN);
                if (a instanceof Date) return new Date(a);
                if (a instanceof s) return a.clone().toJSDate();
                if (/^-?\d{10,}$/.test(a))
                  return s.getDateZeroTime(new Date(Number(a)));
                if (typeof a == "string") {
                  for (var u = [], m = null; (m = s.regex.exec(c)) != null; )
                    m[1] !== "\\" && u.push(m);
                  if (u.length) {
                    var h = {
                      year: null,
                      month: null,
                      shortMonth: null,
                      longMonth: null,
                      day: null,
                      value: "",
                    };
                    u[0].index > 0 && (h.value += ".*?");
                    for (var v = 0, f = Object.entries(u); v < f.length; v++) {
                      var d = f[v],
                        y = d[0],
                        w = d[1],
                        p = Number(y),
                        g = s.formatPatterns(w[0], l),
                        b = g.group,
                        _ = g.pattern;
                      (h[b] = p + 1), (h.value += _), (h.value += ".*?");
                    }
                    var S = new RegExp("^" + h.value + "$");
                    if (S.test(a)) {
                      var k = S.exec(a),
                        E = Number(k[h.year]),
                        T = null;
                      h.month
                        ? (T = Number(k[h.month]) - 1)
                        : h.shortMonth
                        ? (T = s.shortMonths(l).indexOf(k[h.shortMonth]))
                        : h.longMonth &&
                          (T = s.longMonths(l).indexOf(k[h.longMonth]));
                      var D = Number(k[h.day]) || 1;
                      return new Date(E, T, D, 0, 0, 0, 0);
                    }
                  }
                }
                return s.getDateZeroTime(new Date(a));
              }),
              (s.convertArray = function (a, c) {
                return a.map(function (l) {
                  return l instanceof Array
                    ? l.map(function (u) {
                        return new s(u, c);
                      })
                    : new s(l, c);
                });
              }),
              (s.getDateZeroTime = function (a) {
                return new Date(
                  a.getFullYear(),
                  a.getMonth(),
                  a.getDate(),
                  0,
                  0,
                  0,
                  0
                );
              }),
              (s.shortMonths = function (a) {
                return s.MONTH_JS.map(function (c) {
                  return new Date(2019, c).toLocaleString(a, {
                    month: "short",
                  });
                });
              }),
              (s.longMonths = function (a) {
                return s.MONTH_JS.map(function (c) {
                  return new Date(2019, c).toLocaleString(a, { month: "long" });
                });
              }),
              (s.formatPatterns = function (a, c) {
                switch (a) {
                  case "YY":
                  case "YYYY":
                    return {
                      group: "year",
                      pattern: "(\\d{" + a.length + "})",
                    };
                  case "M":
                    return { group: "month", pattern: "(\\d{1,2})" };
                  case "MM":
                    return { group: "month", pattern: "(\\d{2})" };
                  case "MMM":
                    return {
                      group: "shortMonth",
                      pattern: "(" + s.shortMonths(c).join("|") + ")",
                    };
                  case "MMMM":
                    return {
                      group: "longMonth",
                      pattern: "(" + s.longMonths(c).join("|") + ")",
                    };
                  case "D":
                    return { group: "day", pattern: "(\\d{1,2})" };
                  case "DD":
                    return { group: "day", pattern: "(\\d{2})" };
                }
              }),
              (s.prototype.toJSDate = function () {
                return this.dateInstance;
              }),
              (s.prototype.toLocaleString = function (a, c) {
                return this.dateInstance.toLocaleString(a, c);
              }),
              (s.prototype.toDateString = function () {
                return this.dateInstance.toDateString();
              }),
              (s.prototype.getSeconds = function () {
                return this.dateInstance.getSeconds();
              }),
              (s.prototype.getDay = function () {
                return this.dateInstance.getDay();
              }),
              (s.prototype.getTime = function () {
                return this.dateInstance.getTime();
              }),
              (s.prototype.getDate = function () {
                return this.dateInstance.getDate();
              }),
              (s.prototype.getMonth = function () {
                return this.dateInstance.getMonth();
              }),
              (s.prototype.getFullYear = function () {
                return this.dateInstance.getFullYear();
              }),
              (s.prototype.setMonth = function (a) {
                return this.dateInstance.setMonth(a);
              }),
              (s.prototype.setHours = function (a, c, l, u) {
                a === void 0 && (a = 0),
                  c === void 0 && (c = 0),
                  l === void 0 && (l = 0),
                  u === void 0 && (u = 0),
                  this.dateInstance.setHours(a, c, l, u);
              }),
              (s.prototype.setSeconds = function (a) {
                return this.dateInstance.setSeconds(a);
              }),
              (s.prototype.setDate = function (a) {
                return this.dateInstance.setDate(a);
              }),
              (s.prototype.setFullYear = function (a) {
                return this.dateInstance.setFullYear(a);
              }),
              (s.prototype.getWeek = function (a) {
                var c = new Date(this.timestamp()),
                  l = (this.getDay() + (7 - a)) % 7;
                c.setDate(c.getDate() - l);
                var u = c.getTime();
                return (
                  c.setMonth(0, 1),
                  c.getDay() !== a &&
                    c.setMonth(0, 1 + ((4 - c.getDay() + 7) % 7)),
                  1 + Math.ceil((u - c.getTime()) / 6048e5)
                );
              }),
              (s.prototype.clone = function () {
                return new s(this.toJSDate());
              }),
              (s.prototype.isBetween = function (a, c, l) {
                switch ((l === void 0 && (l = "()"), l)) {
                  default:
                  case "()":
                    return (
                      this.timestamp() > a.getTime() &&
                      this.timestamp() < c.getTime()
                    );
                  case "[)":
                    return (
                      this.timestamp() >= a.getTime() &&
                      this.timestamp() < c.getTime()
                    );
                  case "(]":
                    return (
                      this.timestamp() > a.getTime() &&
                      this.timestamp() <= c.getTime()
                    );
                  case "[]":
                    return (
                      this.timestamp() >= a.getTime() &&
                      this.timestamp() <= c.getTime()
                    );
                }
              }),
              (s.prototype.isBefore = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    return a.getTime() > this.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate()
                      ).getTime() >
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime()
                    );
                  case "month":
                  case "months":
                    return (
                      new Date(a.getFullYear(), a.getMonth(), 1).getTime() >
                      new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    );
                  case "year":
                  case "years":
                    return a.getFullYear() > this.getFullYear();
                }
                throw new Error("isBefore: Invalid unit!");
              }),
              (s.prototype.isSameOrBefore = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    return a.getTime() >= this.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate()
                      ).getTime() >=
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime()
                    );
                  case "month":
                  case "months":
                    return (
                      new Date(a.getFullYear(), a.getMonth(), 1).getTime() >=
                      new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    );
                }
                throw new Error("isSameOrBefore: Invalid unit!");
              }),
              (s.prototype.isAfter = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    return this.getTime() > a.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime() >
                      new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate()
                      ).getTime()
                    );
                  case "month":
                  case "months":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        1
                      ).getTime() >
                      new Date(a.getFullYear(), a.getMonth(), 1).getTime()
                    );
                  case "year":
                  case "years":
                    return this.getFullYear() > a.getFullYear();
                }
                throw new Error("isAfter: Invalid unit!");
              }),
              (s.prototype.isSameOrAfter = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    return this.getTime() >= a.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime() >=
                      new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate()
                      ).getTime()
                    );
                  case "month":
                  case "months":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        1
                      ).getTime() >=
                      new Date(a.getFullYear(), a.getMonth(), 1).getTime()
                    );
                }
                throw new Error("isSameOrAfter: Invalid unit!");
              }),
              (s.prototype.isSame = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    return this.getTime() === a.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime() ===
                      new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate()
                      ).getTime()
                    );
                  case "month":
                  case "months":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        1
                      ).getTime() ===
                      new Date(a.getFullYear(), a.getMonth(), 1).getTime()
                    );
                }
                throw new Error("isSame: Invalid unit!");
              }),
              (s.prototype.add = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    this.setSeconds(this.getSeconds() + a);
                    break;
                  case "day":
                  case "days":
                    this.setDate(this.getDate() + a);
                    break;
                  case "month":
                  case "months":
                    this.setMonth(this.getMonth() + a);
                }
                return this;
              }),
              (s.prototype.subtract = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  case "second":
                  case "seconds":
                    this.setSeconds(this.getSeconds() - a);
                    break;
                  case "day":
                  case "days":
                    this.setDate(this.getDate() - a);
                    break;
                  case "month":
                  case "months":
                    this.setMonth(this.getMonth() - a);
                }
                return this;
              }),
              (s.prototype.diff = function (a, c) {
                switch ((c === void 0 && (c = "seconds"), c)) {
                  default:
                  case "second":
                  case "seconds":
                    return this.getTime() - a.getTime();
                  case "day":
                  case "days":
                    return Math.round((this.timestamp() - a.getTime()) / 864e5);
                  case "month":
                  case "months":
                }
              }),
              (s.prototype.format = function (a, c) {
                if ((c === void 0 && (c = "en-US"), typeof a == "object"))
                  return a.output(this.clone().toJSDate());
                for (
                  var l = "", u = [], m = null;
                  (m = s.regex.exec(a)) != null;

                )
                  m[1] !== "\\" && u.push(m);
                if (u.length) {
                  u[0].index > 0 && (l += a.substring(0, u[0].index));
                  for (var h = 0, v = Object.entries(u); h < v.length; h++) {
                    var f = v[h],
                      d = f[0],
                      y = f[1],
                      w = Number(d);
                    (l += this.formatTokens(y[0], c)),
                      u[w + 1] &&
                        (l += a.substring(
                          y.index + y[0].length,
                          u[w + 1].index
                        )),
                      w === u.length - 1 &&
                        (l += a.substring(y.index + y[0].length));
                  }
                }
                return l.replace(/\\/g, "");
              }),
              (s.prototype.timestamp = function () {
                return new Date(
                  this.getFullYear(),
                  this.getMonth(),
                  this.getDate(),
                  0,
                  0,
                  0,
                  0
                ).getTime();
              }),
              (s.prototype.formatTokens = function (a, c) {
                switch (a) {
                  case "YY":
                    return String(this.getFullYear()).slice(-2);
                  case "YYYY":
                    return String(this.getFullYear());
                  case "M":
                    return String(this.getMonth() + 1);
                  case "MM":
                    return ("0" + (this.getMonth() + 1)).slice(-2);
                  case "MMM":
                    return s.shortMonths(c)[this.getMonth()];
                  case "MMMM":
                    return s.longMonths(c)[this.getMonth()];
                  case "D":
                    return String(this.getDate());
                  case "DD":
                    return ("0" + this.getDate()).slice(-2);
                  default:
                    return "";
                }
              }),
              (s.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g),
              (s.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
              s
            );
          })();
          r.DateTime = o;
        },
        function (n, r, i) {
          var o,
            s =
              (this && this.__extends) ||
              ((o = function (v, f) {
                return (o =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, y) {
                      d.__proto__ = y;
                    }) ||
                  function (d, y) {
                    for (var w in y) y.hasOwnProperty(w) && (d[w] = y[w]);
                  })(v, f);
              }),
              function (v, f) {
                function d() {
                  this.constructor = v;
                }
                o(v, f),
                  (v.prototype =
                    f === null
                      ? Object.create(f)
                      : ((d.prototype = f.prototype), new d()));
              }),
            a =
              (this && this.__spreadArrays) ||
              function () {
                for (var v = 0, f = 0, d = arguments.length; f < d; f++)
                  v += arguments[f].length;
                var y = Array(v),
                  w = 0;
                for (f = 0; f < d; f++)
                  for (
                    var p = arguments[f], g = 0, b = p.length;
                    g < b;
                    g++, w++
                  )
                    y[w] = p[g];
                return y;
              };
          Object.defineProperty(r, "__esModule", { value: !0 });
          var c = i(5),
            l = i(0),
            u = i(3),
            m = i(2),
            h = (function (v) {
              function f(d) {
                var y = v.call(this, d) || this;
                return (y.preventClick = !1), y.bindEvents(), y;
              }
              return (
                s(f, v),
                (f.prototype.scrollToDate = function (d) {
                  if (this.options.scrollToDate) {
                    var y =
                        this.options.startDate instanceof l.DateTime
                          ? this.options.startDate.clone()
                          : null,
                      w =
                        this.options.endDate instanceof l.DateTime
                          ? this.options.endDate.clone()
                          : null;
                    !this.options.startDate || (d && d !== this.options.element)
                      ? d &&
                        this.options.endDate &&
                        d === this.options.elementEnd &&
                        (w.setDate(1),
                        this.options.numberOfMonths > 1 &&
                          w.isAfter(y) &&
                          w.setMonth(
                            w.getMonth() - (this.options.numberOfMonths - 1)
                          ),
                        (this.calendars[0] = w.clone()))
                      : (y.setDate(1), (this.calendars[0] = y.clone()));
                  }
                }),
                (f.prototype.bindEvents = function () {
                  document.addEventListener(
                    "click",
                    this.onClick.bind(this),
                    !0
                  ),
                    (this.ui = document.createElement("div")),
                    (this.ui.className = u.litepicker),
                    (this.ui.style.display = "none"),
                    this.ui.addEventListener(
                      "mouseenter",
                      this.onMouseEnter.bind(this),
                      !0
                    ),
                    this.ui.addEventListener(
                      "mouseleave",
                      this.onMouseLeave.bind(this),
                      !1
                    ),
                    this.options.autoRefresh
                      ? (this.options.element instanceof HTMLElement &&
                          this.options.element.addEventListener(
                            "keyup",
                            this.onInput.bind(this),
                            !0
                          ),
                        this.options.elementEnd instanceof HTMLElement &&
                          this.options.elementEnd.addEventListener(
                            "keyup",
                            this.onInput.bind(this),
                            !0
                          ))
                      : (this.options.element instanceof HTMLElement &&
                          this.options.element.addEventListener(
                            "change",
                            this.onInput.bind(this),
                            !0
                          ),
                        this.options.elementEnd instanceof HTMLElement &&
                          this.options.elementEnd.addEventListener(
                            "change",
                            this.onInput.bind(this),
                            !0
                          )),
                    this.options.parentEl
                      ? this.options.parentEl instanceof HTMLElement
                        ? this.options.parentEl.appendChild(this.ui)
                        : document
                            .querySelector(this.options.parentEl)
                            .appendChild(this.ui)
                      : this.options.inlineMode
                      ? this.options.element instanceof HTMLInputElement
                        ? this.options.element.parentNode.appendChild(this.ui)
                        : this.options.element.appendChild(this.ui)
                      : document.body.appendChild(this.ui),
                    this.updateInput(),
                    this.init(),
                    typeof this.options.setup == "function" &&
                      this.options.setup.call(this, this),
                    this.render(),
                    this.options.inlineMode && this.show();
                }),
                (f.prototype.updateInput = function () {
                  if (this.options.element instanceof HTMLInputElement) {
                    var d = this.options.startDate,
                      y = this.options.endDate;
                    if (this.options.singleMode && d)
                      this.options.element.value = d.format(
                        this.options.format,
                        this.options.lang
                      );
                    else if (!this.options.singleMode && d && y) {
                      var w = d.format(this.options.format, this.options.lang),
                        p = y.format(this.options.format, this.options.lang);
                      this.options.elementEnd instanceof HTMLInputElement
                        ? ((this.options.element.value = w),
                          (this.options.elementEnd.value = p))
                        : (this.options.element.value =
                            "" + w + this.options.delimiter + p);
                    }
                    d ||
                      y ||
                      ((this.options.element.value = ""),
                      this.options.elementEnd instanceof HTMLInputElement &&
                        (this.options.elementEnd.value = ""));
                  }
                }),
                (f.prototype.isSamePicker = function (d) {
                  return d.closest("." + u.litepicker) === this.ui;
                }),
                (f.prototype.shouldShown = function (d) {
                  return (
                    !d.disabled &&
                    (d === this.options.element ||
                      (this.options.elementEnd &&
                        d === this.options.elementEnd))
                  );
                }),
                (f.prototype.shouldResetDatePicked = function () {
                  return (
                    this.options.singleMode || this.datePicked.length === 2
                  );
                }),
                (f.prototype.shouldSwapDatePicked = function () {
                  return (
                    this.datePicked.length === 2 &&
                    this.datePicked[0].getTime() > this.datePicked[1].getTime()
                  );
                }),
                (f.prototype.shouldCheckLockDays = function () {
                  return (
                    this.options.disallowLockDaysInRange &&
                    this.datePicked.length === 2
                  );
                }),
                (f.prototype.onClick = function (d) {
                  var y = d.target;
                  if (
                    (d.target.shadowRoot && (y = d.composedPath()[0]),
                    y && this.ui)
                  )
                    if (this.shouldShown(y)) this.show(y);
                    else if (
                      y.closest("." + u.litepicker) ||
                      !this.isShowning()
                    ) {
                      if (this.isSamePicker(y))
                        if ((this.emit("before:click", y), this.preventClick))
                          this.preventClick = !1;
                        else {
                          if (y.classList.contains(u.dayItem)) {
                            if (
                              (d.preventDefault(),
                              y.classList.contains(u.isLocked))
                            )
                              return;
                            if (
                              (this.shouldResetDatePicked() &&
                                (this.datePicked.length = 0),
                              (this.datePicked[this.datePicked.length] =
                                new l.DateTime(y.dataset.time)),
                              this.shouldSwapDatePicked())
                            ) {
                              var w = this.datePicked[1].clone();
                              (this.datePicked[1] = this.datePicked[0].clone()),
                                (this.datePicked[0] = w.clone());
                            }
                            return (
                              this.shouldCheckLockDays() &&
                                m.rangeIsLocked(
                                  this.datePicked,
                                  this.options
                                ) &&
                                (this.emit("error:range", this.datePicked),
                                (this.datePicked.length = 0)),
                              this.render(),
                              this.emit.apply(
                                this,
                                a(
                                  ["preselect"],
                                  a(this.datePicked).map(function (_) {
                                    return _.clone();
                                  })
                                )
                              ),
                              void (
                                this.options.autoApply &&
                                (this.options.singleMode &&
                                this.datePicked.length
                                  ? (this.setDate(this.datePicked[0]),
                                    this.hide())
                                  : this.options.singleMode ||
                                    this.datePicked.length !== 2 ||
                                    (this.setDateRange(
                                      this.datePicked[0],
                                      this.datePicked[1]
                                    ),
                                    this.hide()))
                              )
                            );
                          }
                          if (y.classList.contains(u.buttonPreviousMonth)) {
                            d.preventDefault();
                            var p = 0,
                              g =
                                this.options.switchingMonths ||
                                this.options.numberOfMonths;
                            if (this.options.splitView) {
                              var b = y.closest("." + u.monthItem);
                              (p = m.findNestedMonthItem(b)), (g = 1);
                            }
                            return (
                              this.calendars[p].setMonth(
                                this.calendars[p].getMonth() - g
                              ),
                              this.gotoDate(this.calendars[p], p),
                              void this.emit(
                                "change:month",
                                this.calendars[p],
                                p
                              )
                            );
                          }
                          if (y.classList.contains(u.buttonNextMonth))
                            return (
                              d.preventDefault(),
                              (p = 0),
                              (g =
                                this.options.switchingMonths ||
                                this.options.numberOfMonths),
                              this.options.splitView &&
                                ((b = y.closest("." + u.monthItem)),
                                (p = m.findNestedMonthItem(b)),
                                (g = 1)),
                              this.calendars[p].setMonth(
                                this.calendars[p].getMonth() + g
                              ),
                              this.gotoDate(this.calendars[p], p),
                              void this.emit(
                                "change:month",
                                this.calendars[p],
                                p
                              )
                            );
                          y.classList.contains(u.buttonCancel) &&
                            (d.preventDefault(),
                            this.hide(),
                            this.emit("button:cancel")),
                            y.classList.contains(u.buttonApply) &&
                              (d.preventDefault(),
                              this.options.singleMode && this.datePicked.length
                                ? this.setDate(this.datePicked[0])
                                : this.options.singleMode ||
                                  this.datePicked.length !== 2 ||
                                  this.setDateRange(
                                    this.datePicked[0],
                                    this.datePicked[1]
                                  ),
                              this.hide(),
                              this.emit(
                                "button:apply",
                                this.options.startDate,
                                this.options.endDate
                              ));
                        }
                    } else this.hide();
                }),
                (f.prototype.showTooltip = function (d, y) {
                  var w = this.ui.querySelector("." + u.containerTooltip);
                  (w.style.visibility = "visible"), (w.innerHTML = y);
                  var p = this.ui.getBoundingClientRect(),
                    g = w.getBoundingClientRect(),
                    b = d.getBoundingClientRect(),
                    _ = b.top,
                    S = b.left;
                  if (this.options.inlineMode && this.options.parentEl) {
                    var k = this.ui.parentNode.getBoundingClientRect();
                    (_ -= k.top), (S -= k.left);
                  } else (_ -= p.top), (S -= p.left);
                  (_ -= g.height),
                    (S -= g.width / 2),
                    (S += b.width / 2),
                    (w.style.top = _ + "px"),
                    (w.style.left = S + "px"),
                    this.emit("tooltip", w, d);
                }),
                (f.prototype.hideTooltip = function () {
                  this.ui.querySelector(
                    "." + u.containerTooltip
                  ).style.visibility = "hidden";
                }),
                (f.prototype.shouldAllowMouseEnter = function (d) {
                  return (
                    !this.options.singleMode &&
                    !d.classList.contains(u.isLocked)
                  );
                }),
                (f.prototype.shouldAllowRepick = function () {
                  return (
                    this.options.elementEnd &&
                    this.options.allowRepick &&
                    this.options.startDate &&
                    this.options.endDate
                  );
                }),
                (f.prototype.isDayItem = function (d) {
                  return d.classList.contains(u.dayItem);
                }),
                (f.prototype.onMouseEnter = function (d) {
                  var y = this,
                    w = d.target;
                  if (this.isDayItem(w) && this.shouldAllowMouseEnter(w)) {
                    if (
                      (this.shouldAllowRepick() &&
                        (this.triggerElement === this.options.element
                          ? (this.datePicked[0] = this.options.endDate.clone())
                          : this.triggerElement === this.options.elementEnd &&
                            (this.datePicked[0] =
                              this.options.startDate.clone())),
                      this.datePicked.length !== 1)
                    )
                      return;
                    var p = this.ui.querySelector(
                        "." +
                          u.dayItem +
                          '[data-time="' +
                          this.datePicked[0].getTime() +
                          '"]'
                      ),
                      g = this.datePicked[0].clone(),
                      b = new l.DateTime(w.dataset.time),
                      _ = !1;
                    if (g.getTime() > b.getTime()) {
                      var S = g.clone();
                      (g = b.clone()), (b = S.clone()), (_ = !0);
                    }
                    if (
                      (Array.prototype.slice
                        .call(this.ui.querySelectorAll("." + u.dayItem))
                        .forEach(function (M) {
                          var L = new l.DateTime(M.dataset.time),
                            H = y.renderDay(L);
                          L.isBetween(g, b) && H.classList.add(u.isInRange),
                            (M.className = H.className);
                        }),
                      w.classList.add(u.isEndDate),
                      _
                        ? (p && p.classList.add(u.isFlipped),
                          w.classList.add(u.isFlipped))
                        : (p && p.classList.remove(u.isFlipped),
                          w.classList.remove(u.isFlipped)),
                      this.options.showTooltip)
                    ) {
                      var k = b.diff(g, "day") + 1;
                      if (
                        (typeof this.options.tooltipNumber == "function" &&
                          (k = this.options.tooltipNumber.call(this, k)),
                        k > 0)
                      ) {
                        var E = this.pluralSelector(k),
                          T =
                            k +
                            " " +
                            (this.options.tooltipText[E]
                              ? this.options.tooltipText[E]
                              : "[" + E + "]");
                        this.showTooltip(w, T);
                        var D = window.navigator.userAgent,
                          C = /(iphone|ipad)/i.test(D),
                          A = /OS 1([0-2])/i.test(D);
                        C && A && w.dispatchEvent(new Event("click"));
                      } else this.hideTooltip();
                    }
                  }
                }),
                (f.prototype.onMouseLeave = function (d) {
                  d.target,
                    this.options.allowRepick &&
                      (!this.options.allowRepick ||
                        this.options.startDate ||
                        this.options.endDate) &&
                      ((this.datePicked.length = 0), this.render());
                }),
                (f.prototype.onInput = function (d) {
                  var y = this.parseInput(),
                    w = y[0],
                    p = y[1],
                    g = this.options.format;
                  if (
                    this.options.elementEnd
                      ? w instanceof l.DateTime &&
                        p instanceof l.DateTime &&
                        w.format(g) === this.options.element.value &&
                        p.format(g) === this.options.elementEnd.value
                      : this.options.singleMode
                      ? w instanceof l.DateTime &&
                        w.format(g) === this.options.element.value
                      : w instanceof l.DateTime &&
                        p instanceof l.DateTime &&
                        "" +
                          w.format(g) +
                          this.options.delimiter +
                          p.format(g) ===
                          this.options.element.value
                  ) {
                    if (p && w.getTime() > p.getTime()) {
                      var b = w.clone();
                      (w = p.clone()), (p = b.clone());
                    }
                    (this.options.startDate = new l.DateTime(
                      w,
                      this.options.format,
                      this.options.lang
                    )),
                      p &&
                        (this.options.endDate = new l.DateTime(
                          p,
                          this.options.format,
                          this.options.lang
                        )),
                      this.updateInput(),
                      this.render();
                    var _ = w.clone(),
                      S = 0;
                    (this.options.elementEnd
                      ? w.format(g) === d.target.value
                      : d.target.value.startsWith(w.format(g))) ||
                      ((_ = p.clone()), (S = this.options.numberOfMonths - 1)),
                      this.emit(
                        "selected",
                        this.getStartDate(),
                        this.getEndDate()
                      ),
                      this.gotoDate(_, S);
                  }
                }),
                f
              );
            })(c.Calendar);
          r.Litepicker = h;
        },
        function (n, r, i) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.findNestedMonthItem = function (o) {
              for (var s = o.parentNode.childNodes, a = 0; a < s.length; a += 1)
                if (s.item(a) === o) return a;
              return 0;
            }),
            (r.dateIsLocked = function (o, s, a) {
              var c = !1;
              return (
                s.lockDays.length &&
                  (c = s.lockDays.filter(function (l) {
                    return l instanceof Array
                      ? o.isBetween(l[0], l[1], s.lockDaysInclusivity)
                      : l.isSame(o, "day");
                  }).length),
                c ||
                  typeof s.lockDaysFilter != "function" ||
                  (c = s.lockDaysFilter.call(this, o.clone(), null, a)),
                c
              );
            }),
            (r.rangeIsLocked = function (o, s) {
              var a = !1;
              return (
                s.lockDays.length &&
                  (a = s.lockDays.filter(function (c) {
                    if (c instanceof Array) {
                      var l =
                        o[0].toDateString() === c[0].toDateString() &&
                        o[1].toDateString() === c[1].toDateString();
                      return (
                        c[0].isBetween(o[0], o[1], s.lockDaysInclusivity) ||
                        c[1].isBetween(o[0], o[1], s.lockDaysInclusivity) ||
                        l
                      );
                    }
                    return c.isBetween(o[0], o[1], s.lockDaysInclusivity);
                  }).length),
                a ||
                  typeof s.lockDaysFilter != "function" ||
                  (a = s.lockDaysFilter.call(
                    this,
                    o[0].clone(),
                    o[1].clone(),
                    o
                  )),
                a
              );
            });
        },
        function (n, r, i) {
          var o = i(8);
          typeof o == "string" && (o = [[n.i, o, ""]]);
          var s = {
            insert: function (a) {
              var c = document.querySelector("head"),
                l = window._lastElementInsertedByStyleLoader;
              window.disableLitepickerStyles ||
                (l
                  ? l.nextSibling
                    ? c.insertBefore(a, l.nextSibling)
                    : c.appendChild(a)
                  : c.insertBefore(a, c.firstChild),
                (window._lastElementInsertedByStyleLoader = a));
            },
            singleton: !1,
          };
          i(10)(o, s), o.locals && (n.exports = o.locals);
        },
        function (n, r, i) {
          Object.defineProperty(r, "__esModule", { value: !0 });
          var o = i(1);
          (r.Litepicker = o.Litepicker),
            i(11),
            (window.Litepicker = o.Litepicker),
            (r.default = o.Litepicker);
        },
        function (n, r, i) {
          var o,
            s =
              (this && this.__extends) ||
              ((o = function (h, v) {
                return (o =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (f, d) {
                      f.__proto__ = d;
                    }) ||
                  function (f, d) {
                    for (var y in d) d.hasOwnProperty(y) && (f[y] = d[y]);
                  })(h, v);
              }),
              function (h, v) {
                function f() {
                  this.constructor = h;
                }
                o(h, v),
                  (h.prototype =
                    v === null
                      ? Object.create(v)
                      : ((f.prototype = v.prototype), new f()));
              });
          Object.defineProperty(r, "__esModule", { value: !0 });
          var a = i(6),
            c = i(0),
            l = i(3),
            u = i(2),
            m = (function (h) {
              function v(f) {
                return h.call(this, f) || this;
              }
              return (
                s(v, h),
                (v.prototype.render = function () {
                  var f = this;
                  this.emit("before:render", this.ui);
                  var d = document.createElement("div");
                  d.className = l.containerMain;
                  var y = document.createElement("div");
                  (y.className = l.containerMonths),
                    l["columns" + this.options.numberOfColumns] &&
                      (y.classList.remove(l.columns2, l.columns3, l.columns4),
                      y.classList.add(
                        l["columns" + this.options.numberOfColumns]
                      )),
                    this.options.splitView && y.classList.add(l.splitView),
                    this.options.showWeekNumbers &&
                      y.classList.add(l.showWeekNumbers);
                  for (
                    var w = this.calendars[0].clone(),
                      p = w.getMonth(),
                      g = w.getMonth() + this.options.numberOfMonths,
                      b = 0,
                      _ = p;
                    _ < g;
                    _ += 1
                  ) {
                    var S = w.clone();
                    S.setDate(1),
                      S.setHours(0, 0, 0, 0),
                      this.options.splitView
                        ? (S = this.calendars[b].clone())
                        : S.setMonth(_),
                      y.appendChild(this.renderMonth(S, b)),
                      (b += 1);
                  }
                  if (
                    ((this.ui.innerHTML = ""),
                    d.appendChild(y),
                    this.options.resetButton)
                  ) {
                    var k = void 0;
                    typeof this.options.resetButton == "function"
                      ? (k = this.options.resetButton.call(this))
                      : (((k = document.createElement("button")).type =
                          "button"),
                        (k.className = l.resetButton),
                        (k.innerHTML = this.options.buttonText.reset)),
                      k.addEventListener("click", function (E) {
                        E.preventDefault(), f.clearSelection();
                      }),
                      d
                        .querySelector("." + l.monthItem + ":last-child")
                        .querySelector("." + l.monthItemHeader)
                        .appendChild(k);
                  }
                  this.ui.appendChild(d),
                    (this.options.autoApply && !this.options.footerHTML) ||
                      this.ui.appendChild(this.renderFooter()),
                    this.options.showTooltip &&
                      this.ui.appendChild(this.renderTooltip()),
                    (this.ui.dataset.plugins = (
                      this.options.plugins || []
                    ).join("|")),
                    this.emit("render", this.ui);
                }),
                (v.prototype.renderMonth = function (f, d) {
                  var y = this,
                    w = f.clone(),
                    p =
                      32 -
                      new Date(w.getFullYear(), w.getMonth(), 32).getDate(),
                    g = document.createElement("div");
                  g.className = l.monthItem;
                  var b = document.createElement("div");
                  b.className = l.monthItemHeader;
                  var _ = document.createElement("div");
                  if (this.options.dropdowns.months) {
                    var S = document.createElement("select");
                    S.className = l.monthItemName;
                    for (var k = 0; k < 12; k += 1) {
                      var E = document.createElement("option"),
                        T = new c.DateTime(
                          new Date(f.getFullYear(), k, 2, 0, 0, 0)
                        ),
                        D = new c.DateTime(
                          new Date(f.getFullYear(), k, 1, 0, 0, 0)
                        );
                      (E.value = String(k)),
                        (E.text = T.toLocaleString(this.options.lang, {
                          month: "long",
                        })),
                        (E.disabled =
                          (this.options.minDate &&
                            D.isBefore(
                              new c.DateTime(this.options.minDate),
                              "month"
                            )) ||
                          (this.options.maxDate &&
                            D.isAfter(
                              new c.DateTime(this.options.maxDate),
                              "month"
                            ))),
                        (E.selected = D.getMonth() === f.getMonth()),
                        S.appendChild(E);
                    }
                    S.addEventListener("change", function (ue) {
                      var U = ue.target,
                        ye = 0;
                      if (y.options.splitView) {
                        var Ye = U.closest("." + l.monthItem);
                        ye = u.findNestedMonthItem(Ye);
                      }
                      y.calendars[ye].setMonth(Number(U.value)),
                        y.render(),
                        y.emit("change:month", y.calendars[ye], ye, ue);
                    }),
                      _.appendChild(S);
                  } else
                    ((T = document.createElement("strong")).className =
                      l.monthItemName),
                      (T.innerHTML = f.toLocaleString(this.options.lang, {
                        month: "long",
                      })),
                      _.appendChild(T);
                  if (this.options.dropdowns.years) {
                    var C = document.createElement("select");
                    C.className = l.monthItemYear;
                    var A = this.options.dropdowns.minYear,
                      M = this.options.dropdowns.maxYear
                        ? this.options.dropdowns.maxYear
                        : new Date().getFullYear();
                    for (
                      f.getFullYear() > M &&
                        (((E = document.createElement("option")).value = String(
                          f.getFullYear()
                        )),
                        (E.text = String(f.getFullYear())),
                        (E.selected = !0),
                        (E.disabled = !0),
                        C.appendChild(E)),
                        k = M;
                      k >= A;
                      k -= 1
                    ) {
                      var E = document.createElement("option"),
                        L = new c.DateTime(new Date(k, 0, 1, 0, 0, 0));
                      (E.value = String(k)),
                        (E.text = String(k)),
                        (E.disabled =
                          (this.options.minDate &&
                            L.isBefore(
                              new c.DateTime(this.options.minDate),
                              "year"
                            )) ||
                          (this.options.maxDate &&
                            L.isAfter(
                              new c.DateTime(this.options.maxDate),
                              "year"
                            ))),
                        (E.selected = f.getFullYear() === k),
                        C.appendChild(E);
                    }
                    if (
                      (f.getFullYear() < A &&
                        (((E = document.createElement("option")).value = String(
                          f.getFullYear()
                        )),
                        (E.text = String(f.getFullYear())),
                        (E.selected = !0),
                        (E.disabled = !0),
                        C.appendChild(E)),
                      this.options.dropdowns.years === "asc")
                    ) {
                      var H = Array.prototype.slice
                        .call(C.childNodes)
                        .reverse();
                      (C.innerHTML = ""),
                        H.forEach(function (ue) {
                          (ue.innerHTML = ue.value), C.appendChild(ue);
                        });
                    }
                    C.addEventListener("change", function (ue) {
                      var U = ue.target,
                        ye = 0;
                      if (y.options.splitView) {
                        var Ye = U.closest("." + l.monthItem);
                        ye = u.findNestedMonthItem(Ye);
                      }
                      y.calendars[ye].setFullYear(Number(U.value)),
                        y.render(),
                        y.emit("change:year", y.calendars[ye], ye, ue);
                    }),
                      _.appendChild(C);
                  } else {
                    var j = document.createElement("span");
                    (j.className = l.monthItemYear),
                      (j.innerHTML = String(f.getFullYear())),
                      _.appendChild(j);
                  }
                  var F = document.createElement("button");
                  (F.type = "button"),
                    (F.className = l.buttonPreviousMonth),
                    (F.innerHTML = this.options.buttonText.previousMonth);
                  var K = document.createElement("button");
                  (K.type = "button"),
                    (K.className = l.buttonNextMonth),
                    (K.innerHTML = this.options.buttonText.nextMonth),
                    b.appendChild(F),
                    b.appendChild(_),
                    b.appendChild(K),
                    this.options.minDate &&
                      w.isSameOrBefore(
                        new c.DateTime(this.options.minDate),
                        "month"
                      ) &&
                      g.classList.add(l.noPreviousMonth),
                    this.options.maxDate &&
                      w.isSameOrAfter(
                        new c.DateTime(this.options.maxDate),
                        "month"
                      ) &&
                      g.classList.add(l.noNextMonth);
                  var Z = document.createElement("div");
                  (Z.className = l.monthItemWeekdaysRow),
                    this.options.showWeekNumbers &&
                      (Z.innerHTML = "<div>W</div>");
                  for (var J = 1; J <= 7; J += 1) {
                    var I = 3 + this.options.firstDay + J,
                      B = document.createElement("div");
                    (B.innerHTML = this.weekdayName(I)),
                      (B.title = this.weekdayName(I, "long")),
                      Z.appendChild(B);
                  }
                  var P = document.createElement("div");
                  P.className = l.containerDays;
                  var O = this.calcSkipDays(w);
                  this.options.showWeekNumbers &&
                    O &&
                    P.appendChild(this.renderWeekNumber(w));
                  for (var $ = 0; $ < O; $ += 1) {
                    var q = document.createElement("div");
                    P.appendChild(q);
                  }
                  for ($ = 1; $ <= p; $ += 1)
                    w.setDate($),
                      this.options.showWeekNumbers &&
                        w.getDay() === this.options.firstDay &&
                        P.appendChild(this.renderWeekNumber(w)),
                      P.appendChild(this.renderDay(w));
                  return (
                    g.appendChild(b),
                    g.appendChild(Z),
                    g.appendChild(P),
                    this.emit("render:month", g, f),
                    g
                  );
                }),
                (v.prototype.renderDay = function (f) {
                  f.setHours();
                  var d = document.createElement("div");
                  if (
                    ((d.className = l.dayItem),
                    (d.innerHTML = String(f.getDate())),
                    (d.dataset.time = String(f.getTime())),
                    f.toDateString() === new Date().toDateString() &&
                      d.classList.add(l.isToday),
                    this.datePicked.length)
                  )
                    this.datePicked[0].toDateString() === f.toDateString() &&
                      (d.classList.add(l.isStartDate),
                      this.options.singleMode && d.classList.add(l.isEndDate)),
                      this.datePicked.length === 2 &&
                        this.datePicked[1].toDateString() ===
                          f.toDateString() &&
                        d.classList.add(l.isEndDate),
                      this.datePicked.length === 2 &&
                        f.isBetween(this.datePicked[0], this.datePicked[1]) &&
                        d.classList.add(l.isInRange);
                  else if (this.options.startDate) {
                    var y = this.options.startDate,
                      w = this.options.endDate;
                    y.toDateString() === f.toDateString() &&
                      (d.classList.add(l.isStartDate),
                      this.options.singleMode && d.classList.add(l.isEndDate)),
                      w &&
                        w.toDateString() === f.toDateString() &&
                        d.classList.add(l.isEndDate),
                      y &&
                        w &&
                        f.isBetween(y, w) &&
                        d.classList.add(l.isInRange);
                  }
                  if (
                    (this.options.minDate &&
                      f.isBefore(new c.DateTime(this.options.minDate)) &&
                      d.classList.add(l.isLocked),
                    this.options.maxDate &&
                      f.isAfter(new c.DateTime(this.options.maxDate)) &&
                      d.classList.add(l.isLocked),
                    this.options.minDays > 1 && this.datePicked.length === 1)
                  ) {
                    var p = this.options.minDays - 1,
                      g = this.datePicked[0].clone().subtract(p, "day"),
                      b = this.datePicked[0].clone().add(p, "day");
                    f.isBetween(g, this.datePicked[0], "(]") &&
                      d.classList.add(l.isLocked),
                      f.isBetween(this.datePicked[0], b, "[)") &&
                        d.classList.add(l.isLocked);
                  }
                  if (this.options.maxDays && this.datePicked.length === 1) {
                    var _ = this.options.maxDays;
                    (g = this.datePicked[0].clone().subtract(_, "day")),
                      (b = this.datePicked[0].clone().add(_, "day")),
                      f.isSameOrBefore(g) && d.classList.add(l.isLocked),
                      f.isSameOrAfter(b) && d.classList.add(l.isLocked);
                  }
                  return (
                    this.options.selectForward &&
                      this.datePicked.length === 1 &&
                      f.isBefore(this.datePicked[0]) &&
                      d.classList.add(l.isLocked),
                    this.options.selectBackward &&
                      this.datePicked.length === 1 &&
                      f.isAfter(this.datePicked[0]) &&
                      d.classList.add(l.isLocked),
                    u.dateIsLocked(f, this.options, this.datePicked) &&
                      d.classList.add(l.isLocked),
                    this.options.highlightedDays.length &&
                      this.options.highlightedDays.filter(function (S) {
                        return S instanceof Array
                          ? f.isBetween(S[0], S[1], "[]")
                          : S.isSame(f, "day");
                      }).length &&
                      d.classList.add(l.isHighlighted),
                    (d.tabIndex = d.classList.contains("is-locked") ? -1 : 0),
                    this.emit("render:day", d, f),
                    d
                  );
                }),
                (v.prototype.renderFooter = function () {
                  var f = document.createElement("div");
                  if (
                    ((f.className = l.containerFooter),
                    this.options.footerHTML
                      ? (f.innerHTML = this.options.footerHTML)
                      : (f.innerHTML =
                          `
      <span class="` +
                          l.previewDateRange +
                          `"></span>
      <button type="button" class="` +
                          l.buttonCancel +
                          '">' +
                          this.options.buttonText.cancel +
                          `</button>
      <button type="button" class="` +
                          l.buttonApply +
                          '">' +
                          this.options.buttonText.apply +
                          `</button>
      `),
                    this.options.singleMode)
                  ) {
                    if (this.datePicked.length === 1) {
                      var d = this.datePicked[0].format(
                        this.options.format,
                        this.options.lang
                      );
                      f.querySelector("." + l.previewDateRange).innerHTML = d;
                    }
                  } else if (
                    (this.datePicked.length === 1 &&
                      f
                        .querySelector("." + l.buttonApply)
                        .setAttribute("disabled", ""),
                    this.datePicked.length === 2)
                  ) {
                    d = this.datePicked[0].format(
                      this.options.format,
                      this.options.lang
                    );
                    var y = this.datePicked[1].format(
                      this.options.format,
                      this.options.lang
                    );
                    f.querySelector("." + l.previewDateRange).innerHTML =
                      "" + d + this.options.delimiter + y;
                  }
                  return this.emit("render:footer", f), f;
                }),
                (v.prototype.renderWeekNumber = function (f) {
                  var d = document.createElement("div"),
                    y = f.getWeek(this.options.firstDay);
                  return (
                    (d.className = l.weekNumber),
                    (d.innerHTML =
                      y === 53 && f.getMonth() === 0 ? "53 / 1" : y),
                    d
                  );
                }),
                (v.prototype.renderTooltip = function () {
                  var f = document.createElement("div");
                  return (f.className = l.containerTooltip), f;
                }),
                (v.prototype.weekdayName = function (f, d) {
                  return (
                    d === void 0 && (d = "short"),
                    new Date(1970, 0, f, 12, 0, 0, 0).toLocaleString(
                      this.options.lang,
                      { weekday: d }
                    )
                  );
                }),
                (v.prototype.calcSkipDays = function (f) {
                  var d = f.getDay() - this.options.firstDay;
                  return d < 0 && (d += 7), d;
                }),
                v
              );
            })(a.LPCore);
          r.Calendar = m;
        },
        function (n, r, i) {
          var o,
            s =
              (this && this.__extends) ||
              ((o = function (h, v) {
                return (o =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (f, d) {
                      f.__proto__ = d;
                    }) ||
                  function (f, d) {
                    for (var y in d) d.hasOwnProperty(y) && (f[y] = d[y]);
                  })(h, v);
              }),
              function (h, v) {
                function f() {
                  this.constructor = h;
                }
                o(h, v),
                  (h.prototype =
                    v === null
                      ? Object.create(v)
                      : ((f.prototype = v.prototype), new f()));
              }),
            a =
              (this && this.__assign) ||
              function () {
                return (a =
                  Object.assign ||
                  function (h) {
                    for (var v, f = 1, d = arguments.length; f < d; f++)
                      for (var y in (v = arguments[f]))
                        Object.prototype.hasOwnProperty.call(v, y) &&
                          (h[y] = v[y]);
                    return h;
                  }).apply(this, arguments);
              };
          Object.defineProperty(r, "__esModule", { value: !0 });
          var c = i(7),
            l = i(0),
            u = i(1),
            m = (function (h) {
              function v(f) {
                var d = h.call(this) || this;
                (d.datePicked = []),
                  (d.calendars = []),
                  (d.options = {
                    element: null,
                    elementEnd: null,
                    parentEl: null,
                    firstDay: 1,
                    format: "YYYY-MM-DD",
                    lang: "en-US",
                    delimiter: " - ",
                    numberOfMonths: 1,
                    numberOfColumns: 1,
                    startDate: null,
                    endDate: null,
                    zIndex: 9999,
                    position: "auto",
                    selectForward: !1,
                    selectBackward: !1,
                    splitView: !1,
                    inlineMode: !1,
                    singleMode: !0,
                    autoApply: !0,
                    allowRepick: !1,
                    showWeekNumbers: !1,
                    showTooltip: !0,
                    scrollToDate: !0,
                    mobileFriendly: !0,
                    resetButton: !1,
                    autoRefresh: !1,
                    lockDaysFormat: "YYYY-MM-DD",
                    lockDays: [],
                    disallowLockDaysInRange: !1,
                    lockDaysInclusivity: "[]",
                    highlightedDaysFormat: "YYYY-MM-DD",
                    highlightedDays: [],
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: !1,
                      years: !1,
                    },
                    buttonText: {
                      apply: "Apply",
                      cancel: "Cancel",
                      previousMonth:
                        '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                      nextMonth:
                        '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                      reset: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
      </svg>`,
                    },
                    tooltipText: { one: "day", other: "days" },
                  }),
                  (d.options = a(a({}, d.options), f.element.dataset)),
                  Object.keys(d.options).forEach(function (A) {
                    (d.options[A] !== "true" && d.options[A] !== "false") ||
                      (d.options[A] = d.options[A] === "true");
                  });
                var y = a(a({}, d.options.dropdowns), f.dropdowns),
                  w = a(a({}, d.options.buttonText), f.buttonText),
                  p = a(a({}, d.options.tooltipText), f.tooltipText);
                (d.options = a(a({}, d.options), f)),
                  (d.options.dropdowns = a({}, y)),
                  (d.options.buttonText = a({}, w)),
                  (d.options.tooltipText = a({}, p)),
                  d.options.elementEnd || (d.options.allowRepick = !1),
                  d.options.lockDays.length &&
                    (d.options.lockDays = l.DateTime.convertArray(
                      d.options.lockDays,
                      d.options.lockDaysFormat
                    )),
                  d.options.highlightedDays.length &&
                    (d.options.highlightedDays = l.DateTime.convertArray(
                      d.options.highlightedDays,
                      d.options.highlightedDaysFormat
                    ));
                var g = d.parseInput(),
                  b = g[0],
                  _ = g[1];
                d.options.startDate &&
                  (d.options.singleMode || d.options.endDate) &&
                  (b = new l.DateTime(
                    d.options.startDate,
                    d.options.format,
                    d.options.lang
                  )),
                  b &&
                    d.options.endDate &&
                    (_ = new l.DateTime(
                      d.options.endDate,
                      d.options.format,
                      d.options.lang
                    )),
                  b instanceof l.DateTime &&
                    !isNaN(b.getTime()) &&
                    (d.options.startDate = b),
                  d.options.startDate &&
                    _ instanceof l.DateTime &&
                    !isNaN(_.getTime()) &&
                    (d.options.endDate = _),
                  !d.options.singleMode ||
                    d.options.startDate instanceof l.DateTime ||
                    (d.options.startDate = null),
                  d.options.singleMode ||
                    (d.options.startDate instanceof l.DateTime &&
                      d.options.endDate instanceof l.DateTime) ||
                    ((d.options.startDate = null), (d.options.endDate = null));
                for (var S = 0; S < d.options.numberOfMonths; S += 1) {
                  var k =
                    d.options.startDate instanceof l.DateTime
                      ? d.options.startDate.clone()
                      : new l.DateTime();
                  if (
                    !d.options.startDate &&
                    (S === 0 || d.options.splitView)
                  ) {
                    var E = d.options.maxDate
                        ? new l.DateTime(d.options.maxDate)
                        : null,
                      T = d.options.minDate
                        ? new l.DateTime(d.options.minDate)
                        : null,
                      D = d.options.numberOfMonths - 1;
                    T && E && k.isAfter(E)
                      ? (k = T.clone()).setDate(1)
                      : !T &&
                        E &&
                        k.isAfter(E) &&
                        ((k = E.clone()).setDate(1),
                        k.setMonth(k.getMonth() - D));
                  }
                  k.setDate(1),
                    k.setMonth(k.getMonth() + S),
                    (d.calendars[S] = k);
                }
                if (d.options.showTooltip)
                  if (d.options.tooltipPluralSelector)
                    d.pluralSelector = d.options.tooltipPluralSelector;
                  else
                    try {
                      var C = new Intl.PluralRules(d.options.lang);
                      d.pluralSelector = C.select.bind(C);
                    } catch {
                      d.pluralSelector = function (M) {
                        return Math.abs(M) === 0 ? "one" : "other";
                      };
                    }
                return d;
              }
              return (
                s(v, h),
                (v.add = function (f, d) {
                  u.Litepicker.prototype[f] = d;
                }),
                (v.prototype.DateTime = function (f, d) {
                  return f ? new l.DateTime(f, d) : new l.DateTime();
                }),
                (v.prototype.init = function () {
                  var f = this;
                  this.options.plugins &&
                    this.options.plugins.length &&
                    this.options.plugins.forEach(function (d) {
                      u.Litepicker.prototype.hasOwnProperty(d)
                        ? u.Litepicker.prototype[d].init.call(f, f)
                        : console.warn(
                            "Litepicker: plugin «" + d + "» not found."
                          );
                    });
                }),
                (v.prototype.parseInput = function () {
                  var f = this.options.delimiter,
                    d = new RegExp("" + f),
                    y =
                      this.options.element instanceof HTMLInputElement
                        ? this.options.element.value.split(f)
                        : [];
                  if (this.options.elementEnd) {
                    if (
                      this.options.element instanceof HTMLInputElement &&
                      this.options.element.value.length &&
                      this.options.elementEnd instanceof HTMLInputElement &&
                      this.options.elementEnd.value.length
                    )
                      return [
                        new l.DateTime(
                          this.options.element.value,
                          this.options.format
                        ),
                        new l.DateTime(
                          this.options.elementEnd.value,
                          this.options.format
                        ),
                      ];
                  } else if (this.options.singleMode) {
                    if (
                      this.options.element instanceof HTMLInputElement &&
                      this.options.element.value.length
                    )
                      return [
                        new l.DateTime(
                          this.options.element.value,
                          this.options.format
                        ),
                      ];
                  } else if (
                    this.options.element instanceof HTMLInputElement &&
                    d.test(this.options.element.value) &&
                    y.length &&
                    y.length % 2 == 0
                  ) {
                    var w = y.slice(0, y.length / 2).join(f),
                      p = y.slice(y.length / 2).join(f);
                    return [
                      new l.DateTime(w, this.options.format),
                      new l.DateTime(p, this.options.format),
                    ];
                  }
                  return [];
                }),
                (v.prototype.isShowning = function () {
                  return this.ui && this.ui.style.display !== "none";
                }),
                (v.prototype.findPosition = function (f) {
                  var d = f.getBoundingClientRect(),
                    y = this.ui.getBoundingClientRect(),
                    w = this.options.position.split(" "),
                    p = window.scrollX || window.pageXOffset,
                    g = window.scrollY || window.pageYOffset,
                    b = 0,
                    _ = 0;
                  if (w[0] !== "auto" && /top|bottom/.test(w[0]))
                    (b = d[w[0]] + g), w[0] === "top" && (b -= y.height);
                  else {
                    b = d.bottom + g;
                    var S = d.bottom + y.height > window.innerHeight,
                      k = d.top + g - y.height >= y.height;
                    S && k && (b = d.top + g - y.height);
                  }
                  if (
                    /left|right/.test(w[0]) ||
                    (w[1] && w[1] !== "auto" && /left|right/.test(w[1]))
                  )
                    (_ = /left|right/.test(w[0]) ? d[w[0]] + p : d[w[1]] + p),
                      (w[0] !== "right" && w[1] !== "right") || (_ -= y.width);
                  else {
                    (_ = d.left + p),
                      (S = d.left + y.width > window.innerWidth);
                    var E = d.right + p - y.width >= 0;
                    S && E && (_ = d.right + p - y.width);
                  }
                  return { left: _, top: b };
                }),
                v
              );
            })(c.EventEmitter);
          r.LPCore = m;
        },
        function (n, r, i) {
          var o,
            s = typeof Reflect == "object" ? Reflect : null,
            a =
              s && typeof s.apply == "function"
                ? s.apply
                : function (p, g, b) {
                    return Function.prototype.apply.call(p, g, b);
                  };
          o =
            s && typeof s.ownKeys == "function"
              ? s.ownKeys
              : Object.getOwnPropertySymbols
              ? function (p) {
                  return Object.getOwnPropertyNames(p).concat(
                    Object.getOwnPropertySymbols(p)
                  );
                }
              : function (p) {
                  return Object.getOwnPropertyNames(p);
                };
          var c =
            Number.isNaN ||
            function (p) {
              return p != p;
            };
          function l() {
            l.init.call(this);
          }
          (n.exports = l),
            (l.EventEmitter = l),
            (l.prototype._events = void 0),
            (l.prototype._eventsCount = 0),
            (l.prototype._maxListeners = void 0);
          var u = 10;
          function m(p) {
            return p._maxListeners === void 0
              ? l.defaultMaxListeners
              : p._maxListeners;
          }
          function h(p, g, b, _) {
            var S, k, E, T;
            if (typeof b != "function")
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof b
              );
            if (
              ((k = p._events) === void 0
                ? ((k = p._events = Object.create(null)), (p._eventsCount = 0))
                : (k.newListener !== void 0 &&
                    (p.emit("newListener", g, b.listener ? b.listener : b),
                    (k = p._events)),
                  (E = k[g])),
              E === void 0)
            )
              (E = k[g] = b), ++p._eventsCount;
            else if (
              (typeof E == "function"
                ? (E = k[g] = _ ? [b, E] : [E, b])
                : _
                ? E.unshift(b)
                : E.push(b),
              (S = m(p)) > 0 && E.length > S && !E.warned)
            ) {
              E.warned = !0;
              var D = new Error(
                "Possible EventEmitter memory leak detected. " +
                  E.length +
                  " " +
                  String(g) +
                  " listeners added. Use emitter.setMaxListeners() to increase limit"
              );
              (D.name = "MaxListenersExceededWarning"),
                (D.emitter = p),
                (D.type = g),
                (D.count = E.length),
                (T = D),
                console && console.warn && console.warn(T);
            }
            return p;
          }
          function v() {
            for (var p = [], g = 0; g < arguments.length; g++)
              p.push(arguments[g]);
            this.fired ||
              (this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              a(this.listener, this.target, p));
          }
          function f(p, g, b) {
            var _ = {
                fired: !1,
                wrapFn: void 0,
                target: p,
                type: g,
                listener: b,
              },
              S = v.bind(_);
            return (S.listener = b), (_.wrapFn = S), S;
          }
          function d(p, g, b) {
            var _ = p._events;
            if (_ === void 0) return [];
            var S = _[g];
            return S === void 0
              ? []
              : typeof S == "function"
              ? b
                ? [S.listener || S]
                : [S]
              : b
              ? (function (k) {
                  for (var E = new Array(k.length), T = 0; T < E.length; ++T)
                    E[T] = k[T].listener || k[T];
                  return E;
                })(S)
              : w(S, S.length);
          }
          function y(p) {
            var g = this._events;
            if (g !== void 0) {
              var b = g[p];
              if (typeof b == "function") return 1;
              if (b !== void 0) return b.length;
            }
            return 0;
          }
          function w(p, g) {
            for (var b = new Array(g), _ = 0; _ < g; ++_) b[_] = p[_];
            return b;
          }
          Object.defineProperty(l, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
              return u;
            },
            set: function (p) {
              if (typeof p != "number" || p < 0 || c(p))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    p +
                    "."
                );
              u = p;
            },
          }),
            (l.init = function () {
              (this._events !== void 0 &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (l.prototype.setMaxListeners = function (p) {
              if (typeof p != "number" || p < 0 || c(p))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    p +
                    "."
                );
              return (this._maxListeners = p), this;
            }),
            (l.prototype.getMaxListeners = function () {
              return m(this);
            }),
            (l.prototype.emit = function (p) {
              for (var g = [], b = 1; b < arguments.length; b++)
                g.push(arguments[b]);
              var _ = p === "error",
                S = this._events;
              if (S !== void 0) _ = _ && S.error === void 0;
              else if (!_) return !1;
              if (_) {
                var k;
                if ((g.length > 0 && (k = g[0]), k instanceof Error)) throw k;
                var E = new Error(
                  "Unhandled error." + (k ? " (" + k.message + ")" : "")
                );
                throw ((E.context = k), E);
              }
              var T = S[p];
              if (T === void 0) return !1;
              if (typeof T == "function") a(T, this, g);
              else {
                var D = T.length,
                  C = w(T, D);
                for (b = 0; b < D; ++b) a(C[b], this, g);
              }
              return !0;
            }),
            (l.prototype.addListener = function (p, g) {
              return h(this, p, g, !1);
            }),
            (l.prototype.on = l.prototype.addListener),
            (l.prototype.prependListener = function (p, g) {
              return h(this, p, g, !0);
            }),
            (l.prototype.once = function (p, g) {
              if (typeof g != "function")
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof g
                );
              return this.on(p, f(this, p, g)), this;
            }),
            (l.prototype.prependOnceListener = function (p, g) {
              if (typeof g != "function")
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof g
                );
              return this.prependListener(p, f(this, p, g)), this;
            }),
            (l.prototype.removeListener = function (p, g) {
              var b, _, S, k, E;
              if (typeof g != "function")
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof g
                );
              if ((_ = this._events) === void 0) return this;
              if ((b = _[p]) === void 0) return this;
              if (b === g || b.listener === g)
                --this._eventsCount == 0
                  ? (this._events = Object.create(null))
                  : (delete _[p],
                    _.removeListener &&
                      this.emit("removeListener", p, b.listener || g));
              else if (typeof b != "function") {
                for (S = -1, k = b.length - 1; k >= 0; k--)
                  if (b[k] === g || b[k].listener === g) {
                    (E = b[k].listener), (S = k);
                    break;
                  }
                if (S < 0) return this;
                S === 0
                  ? b.shift()
                  : (function (T, D) {
                      for (; D + 1 < T.length; D++) T[D] = T[D + 1];
                      T.pop();
                    })(b, S),
                  b.length === 1 && (_[p] = b[0]),
                  _.removeListener !== void 0 &&
                    this.emit("removeListener", p, E || g);
              }
              return this;
            }),
            (l.prototype.off = l.prototype.removeListener),
            (l.prototype.removeAllListeners = function (p) {
              var g, b, _;
              if ((b = this._events) === void 0) return this;
              if (b.removeListener === void 0)
                return (
                  arguments.length === 0
                    ? ((this._events = Object.create(null)),
                      (this._eventsCount = 0))
                    : b[p] !== void 0 &&
                      (--this._eventsCount == 0
                        ? (this._events = Object.create(null))
                        : delete b[p]),
                  this
                );
              if (arguments.length === 0) {
                var S,
                  k = Object.keys(b);
                for (_ = 0; _ < k.length; ++_)
                  (S = k[_]) !== "removeListener" && this.removeAllListeners(S);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if (typeof (g = b[p]) == "function") this.removeListener(p, g);
              else if (g !== void 0)
                for (_ = g.length - 1; _ >= 0; _--)
                  this.removeListener(p, g[_]);
              return this;
            }),
            (l.prototype.listeners = function (p) {
              return d(this, p, !0);
            }),
            (l.prototype.rawListeners = function (p) {
              return d(this, p, !1);
            }),
            (l.listenerCount = function (p, g) {
              return typeof p.listenerCount == "function"
                ? p.listenerCount(g)
                : y.call(p, g);
            }),
            (l.prototype.listenerCount = y),
            (l.prototype.eventNames = function () {
              return this._eventsCount > 0 ? o(this._events) : [];
            });
        },
        function (n, r, i) {
          (r = i(9)(!1)).push([
            n.i,
            `:root{--litepicker-container-months-color-bg: #fff;--litepicker-container-months-box-shadow-color: #ddd;--litepicker-footer-color-bg: #fafafa;--litepicker-footer-box-shadow-color: #ddd;--litepicker-tooltip-color-bg: #fff;--litepicker-month-header-color: #333;--litepicker-button-prev-month-color: #9e9e9e;--litepicker-button-next-month-color: #9e9e9e;--litepicker-button-prev-month-color-hover: #2196f3;--litepicker-button-next-month-color-hover: #2196f3;--litepicker-month-width: calc(var(--litepicker-day-width) * 7);--litepicker-month-weekday-color: #9e9e9e;--litepicker-month-week-number-color: #9e9e9e;--litepicker-day-width: 38px;--litepicker-day-color: #333;--litepicker-day-color-hover: #2196f3;--litepicker-is-today-color: #f44336;--litepicker-is-in-range-color: #bbdefb;--litepicker-is-locked-color: #9e9e9e;--litepicker-is-start-color: #fff;--litepicker-is-start-color-bg: #2196f3;--litepicker-is-end-color: #fff;--litepicker-is-end-color-bg: #2196f3;--litepicker-button-cancel-color: #fff;--litepicker-button-cancel-color-bg: #9e9e9e;--litepicker-button-apply-color: #fff;--litepicker-button-apply-color-bg: #2196f3;--litepicker-button-reset-color: #909090;--litepicker-button-reset-color-hover: #2196f3;--litepicker-highlighted-day-color: #333;--litepicker-highlighted-day-color-bg: #ffeb3b}.show-week-numbers{--litepicker-month-width: calc(var(--litepicker-day-width) * 8)}.litepicker{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size:0.8em;display:none}.litepicker button{border:none;background:none}.litepicker .container__main{display:-webkit-box;display:-ms-flexbox;display:flex}.litepicker .container__months{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--litepicker-container-months-color-bg);border-radius:5px;-webkit-box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);width:calc(var(--litepicker-month-width) + 10px);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months.columns-2{width:calc((var(--litepicker-month-width) * 2) + 20px)}.litepicker .container__months.columns-3{width:calc((var(--litepicker-month-width) * 3) + 30px)}.litepicker .container__months.columns-4{width:calc((var(--litepicker-month-width) * 4) + 40px)}.litepicker .container__months.split-view .month-item-header .button-previous-month,.litepicker .container__months.split-view .month-item-header .button-next-month{visibility:visible}.litepicker .container__months .month-item{padding:5px;width:var(--litepicker-month-width);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months .month-item-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;padding:10px 5px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--litepicker-month-header-color)}.litepicker .container__months .month-item-header div{-webkit-box-flex:1;-ms-flex:1;flex:1}.litepicker .container__months .month-item-header div>.month-item-name{margin-right:5px}.litepicker .container__months .month-item-header div>.month-item-year{padding:0}.litepicker .container__months .month-item-header .reset-button{color:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button>svg{fill:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button *{pointer-events:none}.litepicker .container__months .month-item-header .reset-button:hover{color:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .reset-button:hover>svg{fill:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .button-previous-month,.litepicker .container__months .month-item-header .button-next-month{visibility:hidden;text-decoration:none;padding:3px 5px;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__months .month-item-header .button-previous-month *,.litepicker .container__months .month-item-header .button-next-month *{pointer-events:none}.litepicker .container__months .month-item-header .button-previous-month{color:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month>svg,.litepicker .container__months .month-item-header .button-previous-month>img{fill:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month:hover{color:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-previous-month:hover>svg{fill:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month{color:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month>svg,.litepicker .container__months .month-item-header .button-next-month>img{fill:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month:hover{color:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month:hover>svg{fill:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-weekdays-row{display:-webkit-box;display:-ms-flexbox;display:flex;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:var(--litepicker-month-weekday-color)}.litepicker .container__months .month-item-weekdays-row>div{padding:5px 0;font-size:85%;-webkit-box-flex:1;-ms-flex:1;flex:1;width:var(--litepicker-day-width);text-align:center}.litepicker .container__months .month-item:first-child .button-previous-month{visibility:visible}.litepicker .container__months .month-item:last-child .button-next-month{visibility:visible}.litepicker .container__months .month-item.no-previous-month .button-previous-month{visibility:hidden}.litepicker .container__months .month-item.no-next-month .button-next-month{visibility:hidden}.litepicker .container__days{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__days>div,.litepicker .container__days>a{padding:5px 0;width:var(--litepicker-day-width)}.litepicker .container__days .day-item{color:var(--litepicker-day-color);text-align:center;text-decoration:none;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__days .day-item:hover{color:var(--litepicker-day-color-hover);-webkit-box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover);box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover)}.litepicker .container__days .day-item.is-today{color:var(--litepicker-is-today-color)}.litepicker .container__days .day-item.is-locked{color:var(--litepicker-is-locked-color)}.litepicker .container__days .day-item.is-locked:hover{color:var(--litepicker-is-locked-color);-webkit-box-shadow:none;box-shadow:none;cursor:default}.litepicker .container__days .day-item.is-in-range{background-color:var(--litepicker-is-in-range-color);border-radius:0}.litepicker .container__days .day-item.is-start-date{color:var(--litepicker-is-start-color);background-color:var(--litepicker-is-start-color-bg);border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-flipped{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date{color:var(--litepicker-is-end-color);background-color:var(--litepicker-is-end-color-bg);border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date.is-flipped{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-end-date{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-highlighted{color:var(--litepicker-highlighted-day-color);background-color:var(--litepicker-highlighted-day-color-bg)}.litepicker .container__days .week-number{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--litepicker-month-week-number-color);font-size:85%}.litepicker .container__footer{text-align:right;padding:10px 5px;margin:0 5px;background-color:var(--litepicker-footer-color-bg);-webkit-box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.litepicker .container__footer .preview-date-range{margin-right:10px;font-size:90%}.litepicker .container__footer .button-cancel{background-color:var(--litepicker-button-cancel-color-bg);color:var(--litepicker-button-cancel-color);border:0;padding:3px 7px 4px;border-radius:3px}.litepicker .container__footer .button-cancel *{pointer-events:none}.litepicker .container__footer .button-apply{background-color:var(--litepicker-button-apply-color-bg);color:var(--litepicker-button-apply-color);border:0;padding:3px 7px 4px;border-radius:3px;margin-left:10px;margin-right:10px}.litepicker .container__footer .button-apply:disabled{opacity:0.7}.litepicker .container__footer .button-apply *{pointer-events:none}.litepicker .container__tooltip{position:absolute;margin-top:-4px;padding:4px 8px;border-radius:4px;background-color:var(--litepicker-tooltip-color-bg);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25);white-space:nowrap;font-size:11px;pointer-events:none;visibility:hidden}.litepicker .container__tooltip:before{position:absolute;bottom:-5px;left:calc(50% - 5px);border-top:5px solid rgba(0,0,0,0.12);border-right:5px solid transparent;border-left:5px solid transparent;content:""}.litepicker .container__tooltip:after{position:absolute;bottom:-4px;left:calc(50% - 4px);border-top:4px solid var(--litepicker-tooltip-color-bg);border-right:4px solid transparent;border-left:4px solid transparent;content:""}
`,
            "",
          ]),
            (r.locals = {
              showWeekNumbers: "show-week-numbers",
              litepicker: "litepicker",
              containerMain: "container__main",
              containerMonths: "container__months",
              columns2: "columns-2",
              columns3: "columns-3",
              columns4: "columns-4",
              splitView: "split-view",
              monthItemHeader: "month-item-header",
              buttonPreviousMonth: "button-previous-month",
              buttonNextMonth: "button-next-month",
              monthItem: "month-item",
              monthItemName: "month-item-name",
              monthItemYear: "month-item-year",
              resetButton: "reset-button",
              monthItemWeekdaysRow: "month-item-weekdays-row",
              noPreviousMonth: "no-previous-month",
              noNextMonth: "no-next-month",
              containerDays: "container__days",
              dayItem: "day-item",
              isToday: "is-today",
              isLocked: "is-locked",
              isInRange: "is-in-range",
              isStartDate: "is-start-date",
              isFlipped: "is-flipped",
              isEndDate: "is-end-date",
              isHighlighted: "is-highlighted",
              weekNumber: "week-number",
              containerFooter: "container__footer",
              previewDateRange: "preview-date-range",
              buttonCancel: "button-cancel",
              buttonApply: "button-apply",
              containerTooltip: "container__tooltip",
            }),
            (n.exports = r);
        },
        function (n, r, i) {
          n.exports = function (o) {
            var s = [];
            return (
              (s.toString = function () {
                return this.map(function (a) {
                  var c = (function (l, u) {
                    var m = l[1] || "",
                      h = l[3];
                    if (!h) return m;
                    if (u && typeof btoa == "function") {
                      var v =
                          ((d = h),
                          (y = btoa(
                            unescape(encodeURIComponent(JSON.stringify(d)))
                          )),
                          (w =
                            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                              y
                            )),
                          "/*# ".concat(w, " */")),
                        f = h.sources.map(function (p) {
                          return "/*# sourceURL="
                            .concat(h.sourceRoot || "")
                            .concat(p, " */");
                        });
                      return [m].concat(f).concat([v]).join(`
`);
                    }
                    var d, y, w;
                    return [m].join(`
`);
                  })(a, o);
                  return a[2] ? "@media ".concat(a[2], " {").concat(c, "}") : c;
                }).join("");
              }),
              (s.i = function (a, c, l) {
                typeof a == "string" && (a = [[null, a, ""]]);
                var u = {};
                if (l)
                  for (var m = 0; m < this.length; m++) {
                    var h = this[m][0];
                    h != null && (u[h] = !0);
                  }
                for (var v = 0; v < a.length; v++) {
                  var f = [].concat(a[v]);
                  (l && u[f[0]]) ||
                    (c &&
                      (f[2]
                        ? (f[2] = "".concat(c, " and ").concat(f[2]))
                        : (f[2] = c)),
                    s.push(f));
                }
              }),
              s
            );
          };
        },
        function (n, r, i) {
          var o,
            s = {},
            a = function () {
              return (
                o === void 0 &&
                  (o = !!(window && document && document.all && !window.atob)),
                o
              );
            },
            c = (function () {
              var g = {};
              return function (b) {
                if (g[b] === void 0) {
                  var _ = document.querySelector(b);
                  if (
                    window.HTMLIFrameElement &&
                    _ instanceof window.HTMLIFrameElement
                  )
                    try {
                      _ = _.contentDocument.head;
                    } catch {
                      _ = null;
                    }
                  g[b] = _;
                }
                return g[b];
              };
            })();
          function l(g, b) {
            for (var _ = [], S = {}, k = 0; k < g.length; k++) {
              var E = g[k],
                T = b.base ? E[0] + b.base : E[0],
                D = { css: E[1], media: E[2], sourceMap: E[3] };
              S[T]
                ? S[T].parts.push(D)
                : _.push((S[T] = { id: T, parts: [D] }));
            }
            return _;
          }
          function u(g, b) {
            for (var _ = 0; _ < g.length; _++) {
              var S = g[_],
                k = s[S.id],
                E = 0;
              if (k) {
                for (k.refs++; E < k.parts.length; E++) k.parts[E](S.parts[E]);
                for (; E < S.parts.length; E++) k.parts.push(p(S.parts[E], b));
              } else {
                for (var T = []; E < S.parts.length; E++)
                  T.push(p(S.parts[E], b));
                s[S.id] = { id: S.id, refs: 1, parts: T };
              }
            }
          }
          function m(g) {
            var b = document.createElement("style");
            if (g.attributes.nonce === void 0) {
              var _ = i.nc;
              _ && (g.attributes.nonce = _);
            }
            if (
              (Object.keys(g.attributes).forEach(function (k) {
                b.setAttribute(k, g.attributes[k]);
              }),
              typeof g.insert == "function")
            )
              g.insert(b);
            else {
              var S = c(g.insert || "head");
              if (!S)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              S.appendChild(b);
            }
            return b;
          }
          var h,
            v =
              ((h = []),
              function (g, b) {
                return (
                  (h[g] = b),
                  h.filter(Boolean).join(`
`)
                );
              });
          function f(g, b, _, S) {
            var k = _ ? "" : S.css;
            if (g.styleSheet) g.styleSheet.cssText = v(b, k);
            else {
              var E = document.createTextNode(k),
                T = g.childNodes;
              T[b] && g.removeChild(T[b]),
                T.length ? g.insertBefore(E, T[b]) : g.appendChild(E);
            }
          }
          function d(g, b, _) {
            var S = _.css,
              k = _.media,
              E = _.sourceMap;
            if (
              (k && g.setAttribute("media", k),
              E &&
                btoa &&
                (S += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(E)))),
                  " */"
                )),
              g.styleSheet)
            )
              g.styleSheet.cssText = S;
            else {
              for (; g.firstChild; ) g.removeChild(g.firstChild);
              g.appendChild(document.createTextNode(S));
            }
          }
          var y = null,
            w = 0;
          function p(g, b) {
            var _, S, k;
            if (b.singleton) {
              var E = w++;
              (_ = y || (y = m(b))),
                (S = f.bind(null, _, E, !1)),
                (k = f.bind(null, _, E, !0));
            } else
              (_ = m(b)),
                (S = d.bind(null, _, b)),
                (k = function () {
                  (function (T) {
                    if (T.parentNode === null) return !1;
                    T.parentNode.removeChild(T);
                  })(_);
                });
            return (
              S(g),
              function (T) {
                if (T) {
                  if (
                    T.css === g.css &&
                    T.media === g.media &&
                    T.sourceMap === g.sourceMap
                  )
                    return;
                  S((g = T));
                } else k();
              }
            );
          }
          n.exports = function (g, b) {
            ((b = b || {}).attributes =
              typeof b.attributes == "object" ? b.attributes : {}),
              b.singleton ||
                typeof b.singleton == "boolean" ||
                (b.singleton = a());
            var _ = l(g, b);
            return (
              u(_, b),
              function (S) {
                for (var k = [], E = 0; E < _.length; E++) {
                  var T = _[E],
                    D = s[T.id];
                  D && (D.refs--, k.push(D));
                }
                S && u(l(S, b), b);
                for (var C = 0; C < k.length; C++) {
                  var A = k[C];
                  if (A.refs === 0) {
                    for (var M = 0; M < A.parts.length; M++) A.parts[M]();
                    delete s[A.id];
                  }
                }
              }
            );
          };
        },
        function (n, r, i) {
          var o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (l) {
                  for (var u, m = 1, h = arguments.length; m < h; m++)
                    for (var v in (u = arguments[m]))
                      Object.prototype.hasOwnProperty.call(u, v) &&
                        (l[v] = u[v]);
                  return l;
                }).apply(this, arguments);
            };
          Object.defineProperty(r, "__esModule", { value: !0 });
          var s = i(0),
            a = i(1),
            c = i(2);
          (a.Litepicker.prototype.show = function (l) {
            l === void 0 && (l = null), this.emit("before:show", l);
            var u = l || this.options.element;
            if (((this.triggerElement = u), !this.isShowning())) {
              if (this.options.inlineMode)
                return (
                  (this.ui.style.position = "relative"),
                  (this.ui.style.display = "inline-block"),
                  (this.ui.style.top = null),
                  (this.ui.style.left = null),
                  (this.ui.style.bottom = null),
                  void (this.ui.style.right = null)
                );
              this.scrollToDate(l),
                this.render(),
                (this.ui.style.position = "absolute"),
                (this.ui.style.display = "block"),
                (this.ui.style.zIndex = this.options.zIndex);
              var m = this.findPosition(u);
              (this.ui.style.top = m.top + "px"),
                (this.ui.style.left = m.left + "px"),
                (this.ui.style.right = null),
                (this.ui.style.bottom = null),
                this.emit("show", l);
            }
          }),
            (a.Litepicker.prototype.hide = function () {
              this.isShowning() &&
                ((this.datePicked.length = 0),
                this.updateInput(),
                this.options.inlineMode
                  ? this.render()
                  : ((this.ui.style.display = "none"), this.emit("hide")));
            }),
            (a.Litepicker.prototype.getDate = function () {
              return this.getStartDate();
            }),
            (a.Litepicker.prototype.getStartDate = function () {
              return this.options.startDate
                ? this.options.startDate.clone()
                : null;
            }),
            (a.Litepicker.prototype.getEndDate = function () {
              return this.options.endDate ? this.options.endDate.clone() : null;
            }),
            (a.Litepicker.prototype.setDate = function (l, u) {
              u === void 0 && (u = !1);
              var m = new s.DateTime(l, this.options.format, this.options.lang);
              c.dateIsLocked(m, this.options, [m]) && !u
                ? this.emit("error:date", m)
                : (this.setStartDate(l),
                  this.options.inlineMode && this.render(),
                  this.emit("selected", this.getDate()));
            }),
            (a.Litepicker.prototype.setStartDate = function (l) {
              l &&
                ((this.options.startDate = new s.DateTime(
                  l,
                  this.options.format,
                  this.options.lang
                )),
                this.updateInput());
            }),
            (a.Litepicker.prototype.setEndDate = function (l) {
              l &&
                ((this.options.endDate = new s.DateTime(
                  l,
                  this.options.format,
                  this.options.lang
                )),
                this.options.startDate.getTime() >
                  this.options.endDate.getTime() &&
                  ((this.options.endDate = this.options.startDate.clone()),
                  (this.options.startDate = new s.DateTime(
                    l,
                    this.options.format,
                    this.options.lang
                  ))),
                this.updateInput());
            }),
            (a.Litepicker.prototype.setDateRange = function (l, u, m) {
              m === void 0 && (m = !1), (this.triggerElement = void 0);
              var h = new s.DateTime(l, this.options.format, this.options.lang),
                v = new s.DateTime(u, this.options.format, this.options.lang);
              (this.options.disallowLockDaysInRange
                ? c.rangeIsLocked([h, v], this.options)
                : c.dateIsLocked(h, this.options, [h, v]) ||
                  c.dateIsLocked(v, this.options, [h, v])) && !m
                ? this.emit("error:range", [h, v])
                : (this.setStartDate(h),
                  this.setEndDate(v),
                  this.options.inlineMode && this.render(),
                  this.updateInput(),
                  this.emit(
                    "selected",
                    this.getStartDate(),
                    this.getEndDate()
                  ));
            }),
            (a.Litepicker.prototype.gotoDate = function (l, u) {
              u === void 0 && (u = 0);
              var m = new s.DateTime(l);
              m.setDate(1), (this.calendars[u] = m.clone()), this.render();
            }),
            (a.Litepicker.prototype.setLockDays = function (l) {
              (this.options.lockDays = s.DateTime.convertArray(
                l,
                this.options.lockDaysFormat
              )),
                this.render();
            }),
            (a.Litepicker.prototype.setHighlightedDays = function (l) {
              (this.options.highlightedDays = s.DateTime.convertArray(
                l,
                this.options.highlightedDaysFormat
              )),
                this.render();
            }),
            (a.Litepicker.prototype.setOptions = function (l) {
              delete l.element,
                delete l.elementEnd,
                delete l.parentEl,
                l.startDate &&
                  (l.startDate = new s.DateTime(
                    l.startDate,
                    this.options.format,
                    this.options.lang
                  )),
                l.endDate &&
                  (l.endDate = new s.DateTime(
                    l.endDate,
                    this.options.format,
                    this.options.lang
                  ));
              var u = o(o({}, this.options.dropdowns), l.dropdowns),
                m = o(o({}, this.options.buttonText), l.buttonText),
                h = o(o({}, this.options.tooltipText), l.tooltipText);
              (this.options = o(o({}, this.options), l)),
                (this.options.dropdowns = o({}, u)),
                (this.options.buttonText = o({}, m)),
                (this.options.tooltipText = o({}, h)),
                !this.options.singleMode ||
                  this.options.startDate instanceof s.DateTime ||
                  ((this.options.startDate = null),
                  (this.options.endDate = null)),
                this.options.singleMode ||
                  (this.options.startDate instanceof s.DateTime &&
                    this.options.endDate instanceof s.DateTime) ||
                  ((this.options.startDate = null),
                  (this.options.endDate = null));
              for (var v = 0; v < this.options.numberOfMonths; v += 1) {
                var f = this.options.startDate
                  ? this.options.startDate.clone()
                  : new s.DateTime();
                f.setDate(1),
                  f.setMonth(f.getMonth() + v),
                  (this.calendars[v] = f);
              }
              this.options.lockDays.length &&
                (this.options.lockDays = s.DateTime.convertArray(
                  this.options.lockDays,
                  this.options.lockDaysFormat
                )),
                this.options.highlightedDays.length &&
                  (this.options.highlightedDays = s.DateTime.convertArray(
                    this.options.highlightedDays,
                    this.options.highlightedDaysFormat
                  )),
                this.render(),
                this.options.inlineMode && this.show(),
                this.updateInput();
            }),
            (a.Litepicker.prototype.clearSelection = function () {
              (this.options.startDate = null),
                (this.options.endDate = null),
                (this.datePicked.length = 0),
                this.updateInput(),
                this.isShowning() && this.render(),
                this.emit("clear:selection");
            }),
            (a.Litepicker.prototype.destroy = function () {
              this.ui &&
                this.ui.parentNode &&
                (this.ui.parentNode.removeChild(this.ui), (this.ui = null)),
                this.emit("destroy");
            });
        },
      ]);
    });
  })(Sd);
  var ry = Sd.exports;
  const iy = ia(ry);
  /*!
   *
   * plugins/mobilefriendly.js
   * Litepicker v2.0.12 (https://github.com/wakirin/Litepicker)
   * Package: litepicker (https://www.npmjs.com/package/litepicker)
   * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
   * Copyright 2019-2021 Rinat G.
   *
   * Hash: b9a648207aabe31b2912
   *
   */ (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (r, i, o) {
        n.o(r, i) || Object.defineProperty(r, i, { enumerable: !0, get: o });
      }),
      (n.r = function (r) {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(r, "__esModule", { value: !0 });
      }),
      (n.t = function (r, i) {
        if (
          (1 & i && (r = n(r)),
          8 & i || (4 & i && typeof r == "object" && r && r.__esModule))
        )
          return r;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: r }),
          2 & i && typeof r != "string")
        )
          for (var s in r)
            n.d(
              o,
              s,
              function (a) {
                return r[a];
              }.bind(null, s)
            );
        return o;
      }),
      (n.n = function (r) {
        var i =
          r && r.__esModule
            ? function () {
                return r.default;
              }
            : function () {
                return r;
              };
        return n.d(i, "a", i), i;
      }),
      (n.o = function (r, i) {
        return Object.prototype.hasOwnProperty.call(r, i);
      }),
      (n.p = ""),
      n((n.s = 5));
  })([
    function (e, t, n) {
      e.exports = function (r) {
        var i = [];
        return (
          (i.toString = function () {
            return this.map(function (o) {
              var s = (function (a, c) {
                var l = a[1] || "",
                  u = a[3];
                if (!u) return l;
                if (c && typeof btoa == "function") {
                  var m =
                      ((v = u),
                      (f = btoa(
                        unescape(encodeURIComponent(JSON.stringify(v)))
                      )),
                      (d =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          f
                        )),
                      "/*# ".concat(d, " */")),
                    h = u.sources.map(function (y) {
                      return "/*# sourceURL="
                        .concat(u.sourceRoot || "")
                        .concat(y, " */");
                    });
                  return [l].concat(h).concat([m]).join(`
`);
                }
                var v, f, d;
                return [l].join(`
`);
              })(o, r);
              return o[2] ? "@media ".concat(o[2], " {").concat(s, "}") : s;
            }).join("");
          }),
          (i.i = function (o, s, a) {
            typeof o == "string" && (o = [[null, o, ""]]);
            var c = {};
            if (a)
              for (var l = 0; l < this.length; l++) {
                var u = this[l][0];
                u != null && (c[u] = !0);
              }
            for (var m = 0; m < o.length; m++) {
              var h = [].concat(o[m]);
              (a && c[h[0]]) ||
                (s &&
                  (h[2]
                    ? (h[2] = "".concat(s, " and ").concat(h[2]))
                    : (h[2] = s)),
                i.push(h));
            }
          }),
          i
        );
      };
    },
    function (e, t, n) {
      var r,
        i = {},
        o = function () {
          return (
            r === void 0 &&
              (r = !!(window && document && document.all && !window.atob)),
            r
          );
        },
        s = (function () {
          var w = {};
          return function (p) {
            if (w[p] === void 0) {
              var g = document.querySelector(p);
              if (
                window.HTMLIFrameElement &&
                g instanceof window.HTMLIFrameElement
              )
                try {
                  g = g.contentDocument.head;
                } catch {
                  g = null;
                }
              w[p] = g;
            }
            return w[p];
          };
        })();
      function a(w, p) {
        for (var g = [], b = {}, _ = 0; _ < w.length; _++) {
          var S = w[_],
            k = p.base ? S[0] + p.base : S[0],
            E = { css: S[1], media: S[2], sourceMap: S[3] };
          b[k] ? b[k].parts.push(E) : g.push((b[k] = { id: k, parts: [E] }));
        }
        return g;
      }
      function c(w, p) {
        for (var g = 0; g < w.length; g++) {
          var b = w[g],
            _ = i[b.id],
            S = 0;
          if (_) {
            for (_.refs++; S < _.parts.length; S++) _.parts[S](b.parts[S]);
            for (; S < b.parts.length; S++) _.parts.push(y(b.parts[S], p));
          } else {
            for (var k = []; S < b.parts.length; S++) k.push(y(b.parts[S], p));
            i[b.id] = { id: b.id, refs: 1, parts: k };
          }
        }
      }
      function l(w) {
        var p = document.createElement("style");
        if (w.attributes.nonce === void 0) {
          var g = n.nc;
          g && (w.attributes.nonce = g);
        }
        if (
          (Object.keys(w.attributes).forEach(function (_) {
            p.setAttribute(_, w.attributes[_]);
          }),
          typeof w.insert == "function")
        )
          w.insert(p);
        else {
          var b = s(w.insert || "head");
          if (!b)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          b.appendChild(p);
        }
        return p;
      }
      var u,
        m =
          ((u = []),
          function (w, p) {
            return (
              (u[w] = p),
              u.filter(Boolean).join(`
`)
            );
          });
      function h(w, p, g, b) {
        var _ = g ? "" : b.css;
        if (w.styleSheet) w.styleSheet.cssText = m(p, _);
        else {
          var S = document.createTextNode(_),
            k = w.childNodes;
          k[p] && w.removeChild(k[p]),
            k.length ? w.insertBefore(S, k[p]) : w.appendChild(S);
        }
      }
      function v(w, p, g) {
        var b = g.css,
          _ = g.media,
          S = g.sourceMap;
        if (
          (_ && w.setAttribute("media", _),
          S &&
            btoa &&
            (b += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
              " */"
            )),
          w.styleSheet)
        )
          w.styleSheet.cssText = b;
        else {
          for (; w.firstChild; ) w.removeChild(w.firstChild);
          w.appendChild(document.createTextNode(b));
        }
      }
      var f = null,
        d = 0;
      function y(w, p) {
        var g, b, _;
        if (p.singleton) {
          var S = d++;
          (g = f || (f = l(p))),
            (b = h.bind(null, g, S, !1)),
            (_ = h.bind(null, g, S, !0));
        } else
          (g = l(p)),
            (b = v.bind(null, g, p)),
            (_ = function () {
              (function (k) {
                if (k.parentNode === null) return !1;
                k.parentNode.removeChild(k);
              })(g);
            });
        return (
          b(w),
          function (k) {
            if (k) {
              if (
                k.css === w.css &&
                k.media === w.media &&
                k.sourceMap === w.sourceMap
              )
                return;
              b((w = k));
            } else _();
          }
        );
      }
      e.exports = function (w, p) {
        ((p = p || {}).attributes =
          typeof p.attributes == "object" ? p.attributes : {}),
          p.singleton || typeof p.singleton == "boolean" || (p.singleton = o());
        var g = a(w, p);
        return (
          c(g, p),
          function (b) {
            for (var _ = [], S = 0; S < g.length; S++) {
              var k = g[S],
                E = i[k.id];
              E && (E.refs--, _.push(E));
            }
            b && c(a(b, p), p);
            for (var T = 0; T < _.length; T++) {
              var D = _[T];
              if (D.refs === 0) {
                for (var C = 0; C < D.parts.length; C++) D.parts[C]();
                delete i[D.id];
              }
            }
          }
        );
      };
    },
    ,
    ,
    ,
    function (e, t, n) {
      n.r(t), n(6);
      function r(s, a) {
        var c = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(s);
          a &&
            (l = l.filter(function (u) {
              return Object.getOwnPropertyDescriptor(s, u).enumerable;
            })),
            c.push.apply(c, l);
        }
        return c;
      }
      function i(s) {
        for (var a = 1; a < arguments.length; a++) {
          var c = arguments[a] != null ? arguments[a] : {};
          a % 2
            ? r(Object(c), !0).forEach(function (l) {
                o(s, l, c[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
            : r(Object(c)).forEach(function (l) {
                Object.defineProperty(
                  s,
                  l,
                  Object.getOwnPropertyDescriptor(c, l)
                );
              });
        }
        return s;
      }
      function o(s, a, c) {
        return (
          a in s
            ? Object.defineProperty(s, a, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (s[a] = c),
          s
        );
      }
      Litepicker.add("mobilefriendly", {
        init: function (s) {
          var a = s.options;
          (s.options.mobilefriendly = i(
            i({}, { breakpoint: 480 }),
            a.mobilefriendly
          )),
            Object.defineProperties(s, {
              xTouchDown: { value: null, writable: !0 },
              yTouchDown: { value: null, writable: !0 },
              touchTargetMonth: { value: null, writable: !0 },
            });
          var c = !1;
          try {
            var l = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
              },
            });
            window.addEventListener("testPassive", null, l),
              window.removeEventListener("testPassive", null, l);
          } catch {}
          function u() {
            var y = m() === "portrait";
            return window.matchMedia(
              "(max-device-"
                .concat(y ? "width" : "height", ": ")
                .concat(s.options.mobilefriendly.breakpoint, "px)")
            ).matches;
          }
          function m() {
            return "orientation" in window.screen &&
              "type" in window.screen.orientation
              ? window.screen.orientation.type.replace(/\-\w+$/, "")
              : window.matchMedia("(orientation: portrait)").matches
              ? "portrait"
              : "landscape";
          }
          function h() {
            m() === "portrait"
              ? ((s.options.numberOfMonths = 1),
                (s.options.numberOfColumns = 1))
              : ((s.options.numberOfMonths = 2),
                (s.options.numberOfColumns = 2));
          }
          var v = function (y) {
              var w = y.touches[0];
              (s.xTouchDown = w.clientX), (s.yTouchDown = w.clientY);
            },
            f = function (y) {
              if (s.xTouchDown && s.yTouchDown) {
                var w = y.touches[0].clientX,
                  p = y.touches[0].clientY,
                  g = s.xTouchDown - w,
                  b = s.yTouchDown - p,
                  _ = Math.abs(g) > Math.abs(b),
                  S = s.options.numberOfMonths,
                  k = null,
                  E = !1,
                  T = "",
                  D = Array.from(s.ui.querySelectorAll(".month-item"));
                if (_) {
                  var C = s.DateTime(
                      s.ui.querySelector(".day-item").dataset.time
                    ),
                    A = Number("".concat(1 - Math.abs(g) / 100)),
                    M = 0;
                  if (g > 0) {
                    (M = -Math.abs(g)), (k = C.clone().add(S, "month"));
                    var L = s.options.maxDate;
                    (E = !L || k.isSameOrBefore(s.DateTime(L), "month")),
                      (T = "next");
                  } else {
                    (M = Math.abs(g)), (k = C.clone().subtract(S, "month"));
                    var H = s.options.minDate;
                    (E = !H || k.isSameOrAfter(s.DateTime(H), "month")),
                      (T = "prev");
                  }
                  E &&
                    D.map(function (j) {
                      (j.style.opacity = A),
                        (j.style.transform = "translateX(".concat(M, "px)"));
                    });
                }
                Math.abs(g) + Math.abs(b) > 100 &&
                  _ &&
                  k &&
                  E &&
                  ((s.touchTargetMonth = T), s.gotoDate(k));
              }
            },
            d = function (y) {
              s.touchTargetMonth ||
                Array.from(s.ui.querySelectorAll(".month-item")).map(function (
                  w
                ) {
                  (w.style.transform = "translateX(0px)"),
                    (w.style.opacity = 1);
                }),
                (s.xTouchDown = null),
                (s.yTouchDown = null);
            };
          (s.backdrop = document.createElement("div")),
            (s.backdrop.className = "litepicker-backdrop"),
            s.backdrop.addEventListener("click", s.hide()),
            a.element &&
              a.element.parentNode &&
              a.element.parentNode.appendChild(s.backdrop),
            window.addEventListener("orientationchange", function (y) {
              window.addEventListener("resize", function w() {
                if (u() && s.isShowning()) {
                  var p = m();
                  switch (p) {
                    case "landscape":
                      (a.numberOfMonths = 2), (a.numberOfColumns = 2);
                      break;
                    default:
                      (a.numberOfMonths = 1), (a.numberOfColumns = 1);
                  }
                  s.ui.classList.toggle(
                    "mobilefriendly-portrait",
                    p === "portrait"
                  ),
                    s.ui.classList.toggle(
                      "mobilefriendly-landscape",
                      p === "landscape"
                    ),
                    s.render();
                }
                window.removeEventListener("resize", w);
              });
            }),
            a.inlineMode &&
              u() &&
              (window.dispatchEvent(new Event("orientationchange")),
              window.dispatchEvent(new Event("resize"))),
            s.on("before:show", function (y) {
              if (((s.triggerElement = y), !s.options.inlineMode && u())) {
                s.emit("mobilefriendly.before:show", y),
                  (s.ui.style.position = "fixed"),
                  (s.ui.style.display = "block"),
                  h(),
                  s.scrollToDate(y),
                  s.render();
                var w = m();
                s.ui.classList.add("mobilefriendly"),
                  s.ui.classList.toggle(
                    "mobilefriendly-portrait",
                    w === "portrait"
                  ),
                  s.ui.classList.toggle(
                    "mobilefriendly-landscape",
                    w === "landscape"
                  ),
                  (s.ui.style.top = "50%"),
                  (s.ui.style.left = "50%"),
                  (s.ui.style.right = null),
                  (s.ui.style.bottom = null),
                  (s.ui.style.zIndex = s.options.zIndex),
                  (s.backdrop.style.display = "block"),
                  (s.backdrop.style.zIndex = s.options.zIndex - 1),
                  document.body.classList.add("litepicker-open"),
                  (y || s.options.element).blur(),
                  s.emit("mobilefriendly.show", y);
              } else u() && (h(), s.render());
            }),
            s.on("render", function (y) {
              s.touchTargetMonth &&
                Array.from(s.ui.querySelectorAll(".month-item")).map(function (
                  w
                ) {
                  return w.classList.add(
                    "touch-target-".concat(s.touchTargetMonth)
                  );
                }),
                (s.touchTargetMonth = null);
            }),
            s.on("hide", function () {
              document.body.classList.remove("litepicker-open"),
                (s.backdrop.style.display = "none"),
                s.ui.classList.remove(
                  "mobilefriendly",
                  "mobilefriendly-portrait",
                  "mobilefriendly-landscape"
                );
            }),
            s.on("destroy", function () {
              s.backdrop &&
                s.backdrop.parentNode &&
                s.backdrop.parentNode.removeChild(s.backdrop);
            }),
            s.ui.addEventListener("touchstart", v, !!c && { passive: !0 }),
            s.ui.addEventListener("touchmove", f, !!c && { passive: !0 }),
            s.ui.addEventListener("touchend", d, !!c && { passive: !0 });
        },
      });
    },
    function (e, t, n) {
      var r = n(7);
      typeof r == "string" && (r = [[e.i, r, ""]]);
      var i = {
        insert: function (o) {
          var s = document.querySelector("head"),
            a = window._lastElementInsertedByStyleLoader;
          window.disableLitepickerStyles ||
            (a
              ? a.nextSibling
                ? s.insertBefore(o, a.nextSibling)
                : s.appendChild(o)
              : s.insertBefore(o, s.firstChild),
            (window._lastElementInsertedByStyleLoader = o));
        },
        singleton: !1,
      };
      n(1)(r, i), r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      (t = n(0)(!1)).push([
        e.i,
        `:root {
  --litepicker-mobilefriendly-backdrop-color-bg: #000;
}

.litepicker-backdrop {
  display: none;
  background-color: var(--litepicker-mobilefriendly-backdrop-color-bg);
  opacity: 0.3;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.litepicker-open {
  overflow: hidden;
}

.litepicker.mobilefriendly[data-plugins*="mobilefriendly"] {
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  --litepicker-container-months-box-shadow-color: #616161;
}
.litepicker.mobilefriendly-portrait {
  --litepicker-day-width: 13.5vw;
  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);
}
.litepicker.mobilefriendly-landscape {
  --litepicker-day-width: 5.5vw;
  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);
}

.litepicker[data-plugins*="mobilefriendly"] .container__months {
  overflow: hidden;
}

.litepicker.mobilefriendly[data-plugins*="mobilefriendly"] .container__months .month-item-header {
  height: var(--litepicker-day-width);
}

.litepicker.mobilefriendly[data-plugins*="mobilefriendly"] .container__days > div {
  height: var(--litepicker-day-width);
  display: flex;
  align-items: center;
  justify-content: center;
}


.litepicker[data-plugins*="mobilefriendly"] .container__months .month-item {
  transform-origin: center;
}

.litepicker[data-plugins*="mobilefriendly"] .container__months .month-item.touch-target-next {
  animation-name: lp-bounce-target-next;
  animation-duration: .5s;
  animation-timing-function: ease;
}

.litepicker[data-plugins*="mobilefriendly"] .container__months .month-item.touch-target-prev {
  animation-name: lp-bounce-target-prev;
  animation-duration: .5s;
  animation-timing-function: ease;
}

@keyframes lp-bounce-target-next {
  from {
    transform: translateX(100px) scale(0.5);
  }
  to {
    transform: translateX(0px) scale(1);
  }
}

@keyframes lp-bounce-target-prev {
  from {
    transform: translateX(-100px) scale(0.5);
  }
  to {
    transform: translateX(0px) scale(1);
  }
}`,
        "",
      ]),
        (e.exports = t);
    },
  ]);
  /*!
   *
   * plugins/ranges.js
   * Litepicker v2.0.12 (https://github.com/wakirin/Litepicker)
   * Package: litepicker (https://www.npmjs.com/package/litepicker)
   * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
   * Copyright 2019-2021 Rinat G.
   *
   * Hash: b9a648207aabe31b2912
   *
   */ (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (r, i, o) {
        n.o(r, i) || Object.defineProperty(r, i, { enumerable: !0, get: o });
      }),
      (n.r = function (r) {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(r, "__esModule", { value: !0 });
      }),
      (n.t = function (r, i) {
        if (
          (1 & i && (r = n(r)),
          8 & i || (4 & i && typeof r == "object" && r && r.__esModule))
        )
          return r;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: r }),
          2 & i && typeof r != "string")
        )
          for (var s in r)
            n.d(
              o,
              s,
              function (a) {
                return r[a];
              }.bind(null, s)
            );
        return o;
      }),
      (n.n = function (r) {
        var i =
          r && r.__esModule
            ? function () {
                return r.default;
              }
            : function () {
                return r;
              };
        return n.d(i, "a", i), i;
      }),
      (n.o = function (r, i) {
        return Object.prototype.hasOwnProperty.call(r, i);
      }),
      (n.p = ""),
      n((n.s = 8));
  })([
    function (e, t, n) {
      e.exports = function (r) {
        var i = [];
        return (
          (i.toString = function () {
            return this.map(function (o) {
              var s = (function (a, c) {
                var l = a[1] || "",
                  u = a[3];
                if (!u) return l;
                if (c && typeof btoa == "function") {
                  var m =
                      ((v = u),
                      (f = btoa(
                        unescape(encodeURIComponent(JSON.stringify(v)))
                      )),
                      (d =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          f
                        )),
                      "/*# ".concat(d, " */")),
                    h = u.sources.map(function (y) {
                      return "/*# sourceURL="
                        .concat(u.sourceRoot || "")
                        .concat(y, " */");
                    });
                  return [l].concat(h).concat([m]).join(`
`);
                }
                var v, f, d;
                return [l].join(`
`);
              })(o, r);
              return o[2] ? "@media ".concat(o[2], " {").concat(s, "}") : s;
            }).join("");
          }),
          (i.i = function (o, s, a) {
            typeof o == "string" && (o = [[null, o, ""]]);
            var c = {};
            if (a)
              for (var l = 0; l < this.length; l++) {
                var u = this[l][0];
                u != null && (c[u] = !0);
              }
            for (var m = 0; m < o.length; m++) {
              var h = [].concat(o[m]);
              (a && c[h[0]]) ||
                (s &&
                  (h[2]
                    ? (h[2] = "".concat(s, " and ").concat(h[2]))
                    : (h[2] = s)),
                i.push(h));
            }
          }),
          i
        );
      };
    },
    function (e, t, n) {
      var r,
        i = {},
        o = function () {
          return (
            r === void 0 &&
              (r = !!(window && document && document.all && !window.atob)),
            r
          );
        },
        s = (function () {
          var w = {};
          return function (p) {
            if (w[p] === void 0) {
              var g = document.querySelector(p);
              if (
                window.HTMLIFrameElement &&
                g instanceof window.HTMLIFrameElement
              )
                try {
                  g = g.contentDocument.head;
                } catch {
                  g = null;
                }
              w[p] = g;
            }
            return w[p];
          };
        })();
      function a(w, p) {
        for (var g = [], b = {}, _ = 0; _ < w.length; _++) {
          var S = w[_],
            k = p.base ? S[0] + p.base : S[0],
            E = { css: S[1], media: S[2], sourceMap: S[3] };
          b[k] ? b[k].parts.push(E) : g.push((b[k] = { id: k, parts: [E] }));
        }
        return g;
      }
      function c(w, p) {
        for (var g = 0; g < w.length; g++) {
          var b = w[g],
            _ = i[b.id],
            S = 0;
          if (_) {
            for (_.refs++; S < _.parts.length; S++) _.parts[S](b.parts[S]);
            for (; S < b.parts.length; S++) _.parts.push(y(b.parts[S], p));
          } else {
            for (var k = []; S < b.parts.length; S++) k.push(y(b.parts[S], p));
            i[b.id] = { id: b.id, refs: 1, parts: k };
          }
        }
      }
      function l(w) {
        var p = document.createElement("style");
        if (w.attributes.nonce === void 0) {
          var g = n.nc;
          g && (w.attributes.nonce = g);
        }
        if (
          (Object.keys(w.attributes).forEach(function (_) {
            p.setAttribute(_, w.attributes[_]);
          }),
          typeof w.insert == "function")
        )
          w.insert(p);
        else {
          var b = s(w.insert || "head");
          if (!b)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          b.appendChild(p);
        }
        return p;
      }
      var u,
        m =
          ((u = []),
          function (w, p) {
            return (
              (u[w] = p),
              u.filter(Boolean).join(`
`)
            );
          });
      function h(w, p, g, b) {
        var _ = g ? "" : b.css;
        if (w.styleSheet) w.styleSheet.cssText = m(p, _);
        else {
          var S = document.createTextNode(_),
            k = w.childNodes;
          k[p] && w.removeChild(k[p]),
            k.length ? w.insertBefore(S, k[p]) : w.appendChild(S);
        }
      }
      function v(w, p, g) {
        var b = g.css,
          _ = g.media,
          S = g.sourceMap;
        if (
          (_ && w.setAttribute("media", _),
          S &&
            btoa &&
            (b += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
              " */"
            )),
          w.styleSheet)
        )
          w.styleSheet.cssText = b;
        else {
          for (; w.firstChild; ) w.removeChild(w.firstChild);
          w.appendChild(document.createTextNode(b));
        }
      }
      var f = null,
        d = 0;
      function y(w, p) {
        var g, b, _;
        if (p.singleton) {
          var S = d++;
          (g = f || (f = l(p))),
            (b = h.bind(null, g, S, !1)),
            (_ = h.bind(null, g, S, !0));
        } else
          (g = l(p)),
            (b = v.bind(null, g, p)),
            (_ = function () {
              (function (k) {
                if (k.parentNode === null) return !1;
                k.parentNode.removeChild(k);
              })(g);
            });
        return (
          b(w),
          function (k) {
            if (k) {
              if (
                k.css === w.css &&
                k.media === w.media &&
                k.sourceMap === w.sourceMap
              )
                return;
              b((w = k));
            } else _();
          }
        );
      }
      e.exports = function (w, p) {
        ((p = p || {}).attributes =
          typeof p.attributes == "object" ? p.attributes : {}),
          p.singleton || typeof p.singleton == "boolean" || (p.singleton = o());
        var g = a(w, p);
        return (
          c(g, p),
          function (b) {
            for (var _ = [], S = 0; S < g.length; S++) {
              var k = g[S],
                E = i[k.id];
              E && (E.refs--, _.push(E));
            }
            b && c(a(b, p), p);
            for (var T = 0; T < _.length; T++) {
              var D = _[T];
              if (D.refs === 0) {
                for (var C = 0; C < D.parts.length; C++) D.parts[C]();
                delete i[D.id];
              }
            }
          }
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n.r(t), n(9);
      function r(s, a) {
        var c = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(s);
          a &&
            (l = l.filter(function (u) {
              return Object.getOwnPropertyDescriptor(s, u).enumerable;
            })),
            c.push.apply(c, l);
        }
        return c;
      }
      function i(s) {
        for (var a = 1; a < arguments.length; a++) {
          var c = arguments[a] != null ? arguments[a] : {};
          a % 2
            ? r(Object(c), !0).forEach(function (l) {
                o(s, l, c[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
            : r(Object(c)).forEach(function (l) {
                Object.defineProperty(
                  s,
                  l,
                  Object.getOwnPropertyDescriptor(c, l)
                );
              });
        }
        return s;
      }
      function o(s, a, c) {
        return (
          a in s
            ? Object.defineProperty(s, a, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (s[a] = c),
          s
        );
      }
      Litepicker.add("ranges", {
        init: function (s) {
          var a = {
            position: "left",
            customRanges: {},
            customRangesLabels: [
              "Today",
              "Yesterday",
              "Last 7 Days",
              "Last 30 Days",
              "This Month",
              "Last Month",
            ],
            force: !1,
            autoApply: s.options.autoApply,
          };
          (s.options.ranges = i(i({}, a), s.options.ranges)),
            (s.options.singleMode = !1);
          var c = s.options.ranges;
          if (!Object.keys(c.customRanges).length) {
            var l,
              u = s.DateTime();
            c.customRanges =
              (o((l = {}), c.customRangesLabels[0], [u.clone(), u.clone()]),
              o(l, c.customRangesLabels[1], [
                u.clone().subtract(1, "day"),
                u.clone().subtract(1, "day"),
              ]),
              o(l, c.customRangesLabels[2], [u.clone().subtract(6, "day"), u]),
              o(l, c.customRangesLabels[3], [u.clone().subtract(29, "day"), u]),
              o(
                l,
                c.customRangesLabels[4],
                (function (m) {
                  var h = m.clone();
                  return (
                    h.setDate(1),
                    [h, new Date(m.getFullYear(), m.getMonth() + 1, 0)]
                  );
                })(u)
              ),
              o(
                l,
                c.customRangesLabels[5],
                (function (m) {
                  var h = m.clone();
                  return (
                    h.setDate(1),
                    h.setMonth(m.getMonth() - 1),
                    [h, new Date(m.getFullYear(), m.getMonth(), 0)]
                  );
                })(u)
              ),
              l);
          }
          s.on("render", function (m) {
            var h = document.createElement("div");
            (h.className = "container__predefined-ranges"),
              (s.ui.dataset.rangesPosition = c.position),
              Object.keys(c.customRanges).forEach(function (v) {
                var f = c.customRanges[v],
                  d = document.createElement("button");
                (d.innerText = v),
                  (d.tabIndex =
                    m.dataset.plugins.indexOf("keyboardnav") >= 0 ? 1 : -1),
                  (d.dataset.start = f[0].getTime()),
                  (d.dataset.end = f[1].getTime()),
                  d.addEventListener("click", function (y) {
                    var w = y.target;
                    if (w) {
                      var p = s.DateTime(Number(w.dataset.start)),
                        g = s.DateTime(Number(w.dataset.end));
                      c.autoApply
                        ? (s.setDateRange(p, g, c.force),
                          s.emit("ranges.selected", p, g),
                          s.hide())
                        : ((s.datePicked = [p, g]),
                          s.emit("ranges.preselect", p, g)),
                        (!s.options.inlineMode && c.autoApply) || s.gotoDate(p);
                    }
                  }),
                  h.appendChild(d);
              }),
              m.querySelector(".container__main").prepend(h);
          });
        },
      });
    },
    function (e, t, n) {
      var r = n(10);
      typeof r == "string" && (r = [[e.i, r, ""]]);
      var i = {
        insert: function (o) {
          var s = document.querySelector("head"),
            a = window._lastElementInsertedByStyleLoader;
          window.disableLitepickerStyles ||
            (a
              ? a.nextSibling
                ? s.insertBefore(o, a.nextSibling)
                : s.appendChild(o)
              : s.insertBefore(o, s.firstChild),
            (window._lastElementInsertedByStyleLoader = o));
        },
        singleton: !1,
      };
      n(1)(r, i), r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      (t = n(0)(!1)).push([
        e.i,
        `.litepicker[data-plugins*="ranges"] > .container__main > .container__predefined-ranges {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--litepicker-container-months-color-bg);
  box-shadow: -2px 0px 5px var(--litepicker-footer-box-shadow-color);
  border-radius: 3px;
}
.litepicker[data-plugins*="ranges"][data-ranges-position="left"] > .container__main {
  /* */
}
.litepicker[data-plugins*="ranges"][data-ranges-position="right"] > .container__main{
  flex-direction: row-reverse;
}
.litepicker[data-plugins*="ranges"][data-ranges-position="right"] > .container__main > .container__predefined-ranges {
  box-shadow: 2px 0px 2px var(--litepicker-footer-box-shadow-color);
}
.litepicker[data-plugins*="ranges"][data-ranges-position="top"] > .container__main {
  flex-direction: column;
}
.litepicker[data-plugins*="ranges"][data-ranges-position="top"] > .container__main > .container__predefined-ranges {
  flex-direction: row;
  box-shadow: 2px 0px 2px var(--litepicker-footer-box-shadow-color);
}
.litepicker[data-plugins*="ranges"][data-ranges-position="bottom"] > .container__main {
  flex-direction: column-reverse;
}
.litepicker[data-plugins*="ranges"][data-ranges-position="bottom"] > .container__main > .container__predefined-ranges {
  flex-direction: row;
  box-shadow: 2px 0px 2px var(--litepicker-footer-box-shadow-color);
}
.litepicker[data-plugins*="ranges"] > .container__main > .container__predefined-ranges button {
  padding: 5px;
  margin: 2px 0;
}
.litepicker[data-plugins*="ranges"][data-ranges-position="left"] > .container__main > .container__predefined-ranges button,
.litepicker[data-plugins*="ranges"][data-ranges-position="right"] > .container__main > .container__predefined-ranges button{
  width: 100%;
  text-align: left;
}
.litepicker[data-plugins*="ranges"] > .container__main > .container__predefined-ranges button:hover {
  cursor: default;
  opacity: .6;
}`,
        "",
      ]),
        (e.exports = t);
    },
  ]);
  var kd = Symbol.for("immer-nothing"),
    Ac = Symbol.for("immer-draftable"),
    ut = Symbol.for("immer-state");
  function Ct(e, ...t) {
    throw new Error(
      `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var Xn = Object.getPrototypeOf;
  function Jn(e) {
    return !!e && !!e[ut];
  }
  function On(e) {
    var t;
    return e
      ? Ed(e) ||
          Array.isArray(e) ||
          !!e[Ac] ||
          !!((t = e.constructor) != null && t[Ac]) ||
          qi(e) ||
          Gi(e)
      : !1;
  }
  var oy = Object.prototype.constructor.toString();
  function Ed(e) {
    if (!e || typeof e != "object") return !1;
    const t = Xn(e);
    if (t === null) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object
      ? !0
      : typeof n == "function" && Function.toString.call(n) === oy;
  }
  function Tr(e, t) {
    Vi(e) === 0
      ? Object.entries(e).forEach(([n, r]) => {
          t(n, r, e);
        })
      : e.forEach((n, r) => t(r, n, e));
  }
  function Vi(e) {
    const t = e[ut];
    return t ? t.type_ : Array.isArray(e) ? 1 : qi(e) ? 2 : Gi(e) ? 3 : 0;
  }
  function Ds(e, t) {
    return Vi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function Cd(e, t, n) {
    const r = Vi(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
  }
  function sy(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function qi(e) {
    return e instanceof Map;
  }
  function Gi(e) {
    return e instanceof Set;
  }
  function _n(e) {
    return e.copy_ || e.base_;
  }
  function Ts(e, t) {
    if (qi(e)) return new Map(e);
    if (Gi(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && Ed(e))
      return Xn(e) ? { ...e } : Object.assign(Object.create(null), e);
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ut];
    let r = Reflect.ownKeys(n);
    for (let i = 0; i < r.length; i++) {
      const o = r[i],
        s = n[o];
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (n[o] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[o],
          });
    }
    return Object.create(Xn(e), n);
  }
  function Na(e, t = !1) {
    return (
      Zi(e) ||
        Jn(e) ||
        !On(e) ||
        (Vi(e) > 1 && (e.set = e.add = e.clear = e.delete = ay),
        Object.freeze(e),
        t && Tr(e, (n, r) => Na(r, !0))),
      e
    );
  }
  function ay() {
    Ct(2);
  }
  function Zi(e) {
    return Object.isFrozen(e);
  }
  var ly = {};
  function Mn(e) {
    const t = ly[e];
    return t || Ct(0, e), t;
  }
  var Ar;
  function Dd() {
    return Ar;
  }
  function cy(e, t) {
    return {
      drafts_: [],
      parent_: e,
      immer_: t,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    };
  }
  function Oc(e, t) {
    t &&
      (Mn("Patches"),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = t));
  }
  function As(e) {
    Os(e), e.drafts_.forEach(uy), (e.drafts_ = null);
  }
  function Os(e) {
    e === Ar && (Ar = e.parent_);
  }
  function Mc(e) {
    return (Ar = cy(Ar, e));
  }
  function uy(e) {
    const t = e[ut];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
  }
  function Nc(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return (
      e !== void 0 && e !== n
        ? (n[ut].modified_ && (As(t), Ct(4)),
          On(e) && ((e = ki(t, e)), t.parent_ || Ei(t, e)),
          t.patches_ &&
            Mn("Patches").generateReplacementPatches_(
              n[ut].base_,
              e,
              t.patches_,
              t.inversePatches_
            ))
        : (e = ki(t, n, [])),
      As(t),
      t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
      e !== kd ? e : void 0
    );
  }
  function ki(e, t, n) {
    if (Zi(t)) return t;
    const r = t[ut];
    if (!r) return Tr(t, (i, o) => Ic(e, r, t, i, o, n)), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return Ei(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
      (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
      const i = r.copy_;
      let o = i,
        s = !1;
      r.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
        Tr(o, (a, c) => Ic(e, r, i, a, c, n, s)),
        Ei(e, i, !1),
        n &&
          e.patches_ &&
          Mn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
    }
    return r.copy_;
  }
  function Ic(e, t, n, r, i, o, s) {
    if (Jn(i)) {
      const a =
          o && t && t.type_ !== 3 && !Ds(t.assigned_, r) ? o.concat(r) : void 0,
        c = ki(e, i, a);
      if ((Cd(n, r, c), Jn(c))) e.canAutoFreeze_ = !1;
      else return;
    } else s && n.add(i);
    if (On(i) && !Zi(i)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
      ki(e, i), (!t || !t.scope_.parent_) && Ei(e, i);
    }
  }
  function Ei(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Na(t, n);
  }
  function dy(e, t) {
    const n = Array.isArray(e),
      r = {
        type_: n ? 1 : 0,
        scope_: t ? t.scope_ : Dd(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: t,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1,
      };
    let i = r,
      o = Ia;
    n && ((i = [r]), (o = Or));
    const { revoke: s, proxy: a } = Proxy.revocable(i, o);
    return (r.draft_ = a), (r.revoke_ = s), a;
  }
  var Ia = {
      get(e, t) {
        if (t === ut) return e;
        const n = _n(e);
        if (!Ds(n, t)) return fy(e, n, t);
        const r = n[t];
        return e.finalized_ || !On(r)
          ? r
          : r === es(e.base_, t)
          ? (ts(e), (e.copy_[t] = Ns(r, e)))
          : r;
      },
      has(e, t) {
        return t in _n(e);
      },
      ownKeys(e) {
        return Reflect.ownKeys(_n(e));
      },
      set(e, t, n) {
        const r = Td(_n(e), t);
        if (r != null && r.set) return r.set.call(e.draft_, n), !0;
        if (!e.modified_) {
          const i = es(_n(e), t),
            o = i == null ? void 0 : i[ut];
          if (o && o.base_ === n)
            return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
          if (sy(n, i) && (n !== void 0 || Ds(e.base_, t))) return !0;
          ts(e), Ms(e);
        }
        return (
          (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
            (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
            ((e.copy_[t] = n), (e.assigned_[t] = !0)),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          es(e.base_, t) !== void 0 || t in e.base_
            ? ((e.assigned_[t] = !1), ts(e), Ms(e))
            : delete e.assigned_[t],
          e.copy_ && delete e.copy_[t],
          !0
        );
      },
      getOwnPropertyDescriptor(e, t) {
        const n = _n(e),
          r = Reflect.getOwnPropertyDescriptor(n, t);
        return (
          r && {
            writable: !0,
            configurable: e.type_ !== 1 || t !== "length",
            enumerable: r.enumerable,
            value: n[t],
          }
        );
      },
      defineProperty() {
        Ct(11);
      },
      getPrototypeOf(e) {
        return Xn(e.base_);
      },
      setPrototypeOf() {
        Ct(12);
      },
    },
    Or = {};
  Tr(Ia, (e, t) => {
    Or[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  });
  Or.deleteProperty = function (e, t) {
    return Or.set.call(this, e, t, void 0);
  };
  Or.set = function (e, t, n) {
    return Ia.set.call(this, e[0], t, n, e[0]);
  };
  function es(e, t) {
    const n = e[ut];
    return (n ? _n(n) : e)[t];
  }
  function fy(e, t, n) {
    var i;
    const r = Td(t, n);
    return r
      ? "value" in r
        ? r.value
        : (i = r.get) == null
        ? void 0
        : i.call(e.draft_)
      : void 0;
  }
  function Td(e, t) {
    if (!(t in e)) return;
    let n = Xn(e);
    for (; n; ) {
      const r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Xn(n);
    }
  }
  function Ms(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && Ms(e.parent_));
  }
  function ts(e) {
    e.copy_ || (e.copy_ = Ts(e.base_, e.scope_.immer_.useStrictShallowCopy_));
  }
  var hy = class {
    constructor(e) {
      (this.autoFreeze_ = !0),
        (this.useStrictShallowCopy_ = !1),
        (this.produce = (t, n, r) => {
          if (typeof t == "function" && typeof n != "function") {
            const o = n;
            n = t;
            const s = this;
            return function (c = o, ...l) {
              return s.produce(c, (u) => n.call(this, u, ...l));
            };
          }
          typeof n != "function" && Ct(6),
            r !== void 0 && typeof r != "function" && Ct(7);
          let i;
          if (On(t)) {
            const o = Mc(this),
              s = Ns(t, void 0);
            let a = !0;
            try {
              (i = n(s)), (a = !1);
            } finally {
              a ? As(o) : Os(o);
            }
            return Oc(o, r), Nc(i, o);
          } else if (!t || typeof t != "object") {
            if (
              ((i = n(t)),
              i === void 0 && (i = t),
              i === kd && (i = void 0),
              this.autoFreeze_ && Na(i, !0),
              r)
            ) {
              const o = [],
                s = [];
              Mn("Patches").generateReplacementPatches_(t, i, o, s), r(o, s);
            }
            return i;
          } else Ct(1, t);
        }),
        (this.produceWithPatches = (t, n) => {
          if (typeof t == "function")
            return (s, ...a) => this.produceWithPatches(s, (c) => t(c, ...a));
          let r, i;
          return [
            this.produce(t, n, (s, a) => {
              (r = s), (i = a);
            }),
            r,
            i,
          ];
        }),
        typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
          this.setAutoFreeze(e.autoFreeze),
        typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
          this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
      On(e) || Ct(8), Jn(e) && (e = py(e));
      const t = Mc(this),
        n = Ns(e, void 0);
      return (n[ut].isManual_ = !0), Os(t), n;
    }
    finishDraft(e, t) {
      const n = e && e[ut];
      (!n || !n.isManual_) && Ct(9);
      const { scope_: r } = n;
      return Oc(r, t), Nc(void 0, r);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
      let n;
      for (n = t.length - 1; n >= 0; n--) {
        const i = t[n];
        if (i.path.length === 0 && i.op === "replace") {
          e = i.value;
          break;
        }
      }
      n > -1 && (t = t.slice(n + 1));
      const r = Mn("Patches").applyPatches_;
      return Jn(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
    }
  };
  function Ns(e, t) {
    const n = qi(e)
      ? Mn("MapSet").proxyMap_(e, t)
      : Gi(e)
      ? Mn("MapSet").proxySet_(e, t)
      : dy(e, t);
    return (t ? t.scope_ : Dd()).drafts_.push(n), n;
  }
  function py(e) {
    return Jn(e) || Ct(10, e), Ad(e);
  }
  function Ad(e) {
    if (!On(e) || Zi(e)) return e;
    const t = e[ut];
    let n;
    if (t) {
      if (!t.modified_) return t.base_;
      (t.finalized_ = !0), (n = Ts(e, t.scope_.immer_.useStrictShallowCopy_));
    } else n = Ts(e, !0);
    return (
      Tr(n, (r, i) => {
        Cd(n, r, Ad(i));
      }),
      t && (t.finalized_ = !1),
      n
    );
  }
  var dt = new hy(),
    Be = dt.produce;
  dt.produceWithPatches.bind(dt);
  dt.setAutoFreeze.bind(dt);
  dt.setUseStrictShallowCopy.bind(dt);
  dt.applyPatches.bind(dt);
  dt.createDraft.bind(dt);
  dt.finishDraft.bind(dt);
  const my = { route: "All", status: "All", filterDateRange: "All" };
  function gy(e = my, t) {
    switch (t.type) {
      case "SET_ROUTE":
        return Be(e, (n) => {
          n.route = t.payload;
        });
      case "SET_STATUS":
        return Be(e, (n) => {
          n.status = t.payload;
        });
      case "SET_FILTER_DATE":
        return Be(e, (n) => {
          n.filterDateRange = t.payload;
        });
      default:
        return e;
    }
  }
  function Rc(e) {
    Q.dispatch({ type: "SET_FILTER_DATE", payload: e });
  }
  function Od(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: vy } = Object.prototype,
    { getPrototypeOf: Ra } = Object,
    Ki = ((e) => (t) => {
      const n = vy.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Ht = (e) => ((e = e.toLowerCase()), (t) => Ki(t) === e),
    Xi = (e) => (t) => typeof t === e,
    { isArray: sr } = Array,
    Mr = Xi("undefined");
  function yy(e) {
    return (
      e !== null &&
      !Mr(e) &&
      e.constructor !== null &&
      !Mr(e.constructor) &&
      xt(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const Md = Ht("ArrayBuffer");
  function xy(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && Md(e.buffer)),
      t
    );
  }
  const by = Xi("string"),
    xt = Xi("function"),
    Nd = Xi("number"),
    Ji = (e) => e !== null && typeof e == "object",
    wy = (e) => e === !0 || e === !1,
    oi = (e) => {
      if (Ki(e) !== "object") return !1;
      const t = Ra(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    _y = Ht("Date"),
    Sy = Ht("File"),
    ky = Ht("Blob"),
    Ey = Ht("FileList"),
    Cy = (e) => Ji(e) && xt(e.pipe),
    Dy = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (xt(e.append) &&
            ((t = Ki(e)) === "formdata" ||
              (t === "object" &&
                xt(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    Ty = Ht("URLSearchParams"),
    Ay = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function $r(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if ((typeof e != "object" && (e = [e]), sr(e)))
      for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        s = o.length;
      let a;
      for (r = 0; r < s; r++) (a = o[r]), t.call(null, e[a], a, e);
    }
  }
  function Id(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
      i;
    for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
    return null;
  }
  const Rd = (() =>
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global)(),
    Ld = (e) => !Mr(e) && e !== Rd;
  function Is() {
    const { caseless: e } = (Ld(this) && this) || {},
      t = {},
      n = (r, i) => {
        const o = (e && Id(t, i)) || i;
        oi(t[o]) && oi(r)
          ? (t[o] = Is(t[o], r))
          : oi(r)
          ? (t[o] = Is({}, r))
          : sr(r)
          ? (t[o] = r.slice())
          : (t[o] = r);
      };
    for (let r = 0, i = arguments.length; r < i; r++)
      arguments[r] && $r(arguments[r], n);
    return t;
  }
  const Oy = (e, t, n, { allOwnKeys: r } = {}) => (
      $r(
        t,
        (i, o) => {
          n && xt(i) ? (e[o] = Od(i, n)) : (e[o] = i);
        },
        { allOwnKeys: r }
      ),
      e
    ),
    My = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Ny = (e, t, n, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    Iy = (e, t, n, r) => {
      let i, o, s;
      const a = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
          (s = i[o]),
            (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
        e = n !== !1 && Ra(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    Ry = (e, t, n) => {
      (e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length);
      const r = e.indexOf(t, n);
      return r !== -1 && r === n;
    },
    Ly = (e) => {
      if (!e) return null;
      if (sr(e)) return e;
      let t = e.length;
      if (!Nd(t)) return null;
      const n = new Array(t);
      for (; t-- > 0; ) n[t] = e[t];
      return n;
    },
    Py = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && Ra(Uint8Array)),
    By = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let i;
      for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1]);
      }
    },
    Fy = (e, t) => {
      let n;
      const r = [];
      for (; (n = e.exec(t)) !== null; ) r.push(n);
      return r;
    },
    Yy = Ht("HTMLFormElement"),
    jy = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
        return r.toUpperCase() + i;
      }),
    Lc = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    $y = Ht("RegExp"),
    Pd = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      $r(n, (i, o) => {
        let s;
        (s = t(i, o, e)) !== !1 && (r[o] = s || i);
      }),
        Object.defineProperties(e, r);
    },
    Uy = (e) => {
      Pd(e, (t, n) => {
        if (xt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
        const r = e[n];
        if (xt(r)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'");
            });
        }
      });
    },
    Hy = (e, t) => {
      const n = {},
        r = (i) => {
          i.forEach((o) => {
            n[o] = !0;
          });
        };
      return sr(e) ? r(e) : r(String(e).split(t)), n;
    },
    zy = () => {},
    Wy = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    ns = "abcdefghijklmnopqrstuvwxyz",
    Pc = "0123456789",
    Bd = { DIGIT: Pc, ALPHA: ns, ALPHA_DIGIT: ns + ns.toUpperCase() + Pc },
    Vy = (e = 16, t = Bd.ALPHA_DIGIT) => {
      let n = "";
      const { length: r } = t;
      for (; e--; ) n += t[(Math.random() * r) | 0];
      return n;
    };
  function qy(e) {
    return !!(
      e &&
      xt(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const Gy = (e) => {
      const t = new Array(10),
        n = (r, i) => {
          if (Ji(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[i] = r;
              const o = sr(r) ? [] : {};
              return (
                $r(r, (s, a) => {
                  const c = n(s, i + 1);
                  !Mr(c) && (o[a] = c);
                }),
                (t[i] = void 0),
                o
              );
            }
          }
          return r;
        };
      return n(e, 0);
    },
    Zy = Ht("AsyncFunction"),
    Ky = (e) => e && (Ji(e) || xt(e)) && xt(e.then) && xt(e.catch),
    Y = {
      isArray: sr,
      isArrayBuffer: Md,
      isBuffer: yy,
      isFormData: Dy,
      isArrayBufferView: xy,
      isString: by,
      isNumber: Nd,
      isBoolean: wy,
      isObject: Ji,
      isPlainObject: oi,
      isUndefined: Mr,
      isDate: _y,
      isFile: Sy,
      isBlob: ky,
      isRegExp: $y,
      isFunction: xt,
      isStream: Cy,
      isURLSearchParams: Ty,
      isTypedArray: Py,
      isFileList: Ey,
      forEach: $r,
      merge: Is,
      extend: Oy,
      trim: Ay,
      stripBOM: My,
      inherits: Ny,
      toFlatObject: Iy,
      kindOf: Ki,
      kindOfTest: Ht,
      endsWith: Ry,
      toArray: Ly,
      forEachEntry: By,
      matchAll: Fy,
      isHTMLForm: Yy,
      hasOwnProperty: Lc,
      hasOwnProp: Lc,
      reduceDescriptors: Pd,
      freezeMethods: Uy,
      toObjectSet: Hy,
      toCamelCase: jy,
      noop: zy,
      toFiniteNumber: Wy,
      findKey: Id,
      global: Rd,
      isContextDefined: Ld,
      ALPHABET: Bd,
      generateString: Vy,
      isSpecCompliantForm: qy,
      toJSONObject: Gy,
      isAsyncFn: Zy,
      isThenable: Ky,
    };
  function we(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i);
  }
  Y.inherits(we, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Y.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const Fd = we.prototype,
    Yd = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    Yd[e] = { value: e };
  });
  Object.defineProperties(we, Yd);
  Object.defineProperty(Fd, "isAxiosError", { value: !0 });
  we.from = (e, t, n, r, i, o) => {
    const s = Object.create(Fd);
    return (
      Y.toFlatObject(
        e,
        s,
        function (c) {
          return c !== Error.prototype;
        },
        (a) => a !== "isAxiosError"
      ),
      we.call(s, e.message, t, n, r, i),
      (s.cause = e),
      (s.name = e.name),
      o && Object.assign(s, o),
      s
    );
  };
  const Xy = null;
  function Rs(e) {
    return Y.isPlainObject(e) || Y.isArray(e);
  }
  function jd(e) {
    return Y.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Bc(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (i, o) {
            return (i = jd(i)), !n && o ? "[" + i + "]" : i;
          })
          .join(n ? "." : "")
      : t;
  }
  function Jy(e) {
    return Y.isArray(e) && !e.some(Rs);
  }
  const Qy = Y.toFlatObject(Y, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function Qi(e, t, n) {
    if (!Y.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (n = Y.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (d, y) {
          return !Y.isUndefined(y[d]);
        }
      ));
    const r = n.metaTokens,
      i = n.visitor || u,
      o = n.dots,
      s = n.indexes,
      c = (n.Blob || (typeof Blob < "u" && Blob)) && Y.isSpecCompliantForm(t);
    if (!Y.isFunction(i)) throw new TypeError("visitor must be a function");
    function l(f) {
      if (f === null) return "";
      if (Y.isDate(f)) return f.toISOString();
      if (!c && Y.isBlob(f))
        throw new we("Blob is not supported. Use a Buffer instead.");
      return Y.isArrayBuffer(f) || Y.isTypedArray(f)
        ? c && typeof Blob == "function"
          ? new Blob([f])
          : Buffer.from(f)
        : f;
    }
    function u(f, d, y) {
      let w = f;
      if (f && !y && typeof f == "object") {
        if (Y.endsWith(d, "{}"))
          (d = r ? d : d.slice(0, -2)), (f = JSON.stringify(f));
        else if (
          (Y.isArray(f) && Jy(f)) ||
          ((Y.isFileList(f) || Y.endsWith(d, "[]")) && (w = Y.toArray(f)))
        )
          return (
            (d = jd(d)),
            w.forEach(function (g, b) {
              !(Y.isUndefined(g) || g === null) &&
                t.append(
                  s === !0 ? Bc([d], b, o) : s === null ? d : d + "[]",
                  l(g)
                );
            }),
            !1
          );
      }
      return Rs(f) ? !0 : (t.append(Bc(y, d, o), l(f)), !1);
    }
    const m = [],
      h = Object.assign(Qy, {
        defaultVisitor: u,
        convertValue: l,
        isVisitable: Rs,
      });
    function v(f, d) {
      if (!Y.isUndefined(f)) {
        if (m.indexOf(f) !== -1)
          throw Error("Circular reference detected in " + d.join("."));
        m.push(f),
          Y.forEach(f, function (w, p) {
            (!(Y.isUndefined(w) || w === null) &&
              i.call(t, w, Y.isString(p) ? p.trim() : p, d, h)) === !0 &&
              v(w, d ? d.concat(p) : [p]);
          }),
          m.pop();
      }
    }
    if (!Y.isObject(e)) throw new TypeError("data must be an object");
    return v(e), t;
  }
  function Fc(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
      return t[r];
    });
  }
  function La(e, t) {
    (this._pairs = []), e && Qi(e, this, t);
  }
  const $d = La.prototype;
  $d.append = function (t, n) {
    this._pairs.push([t, n]);
  };
  $d.toString = function (t) {
    const n = t
      ? function (r) {
          return t.call(this, r, Fc);
        }
      : Fc;
    return this._pairs
      .map(function (i) {
        return n(i[0]) + "=" + n(i[1]);
      }, "")
      .join("&");
  };
  function e2(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Ud(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || e2,
      i = n && n.serialize;
    let o;
    if (
      (i
        ? (o = i(t, n))
        : (o = Y.isURLSearchParams(t)
            ? t.toString()
            : new La(t, n).toString(r)),
      o)
    ) {
      const s = e.indexOf("#");
      s !== -1 && (e = e.slice(0, s)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return e;
  }
  class t2 {
    constructor() {
      this.handlers = [];
    }
    use(t, n, r) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: n,
          synchronous: r ? r.synchronous : !1,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      Y.forEach(this.handlers, function (r) {
        r !== null && t(r);
      });
    }
  }
  const Yc = t2,
    Hd = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    n2 = typeof URLSearchParams < "u" ? URLSearchParams : La,
    r2 = typeof FormData < "u" ? FormData : null,
    i2 = typeof Blob < "u" ? Blob : null,
    o2 = (() => {
      let e;
      return typeof navigator < "u" &&
        ((e = navigator.product) === "ReactNative" ||
          e === "NativeScript" ||
          e === "NS")
        ? !1
        : typeof window < "u" && typeof document < "u";
    })(),
    s2 = (() =>
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function")(),
    Bt = {
      isBrowser: !0,
      classes: { URLSearchParams: n2, FormData: r2, Blob: i2 },
      isStandardBrowserEnv: o2,
      isStandardBrowserWebWorkerEnv: s2,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  function a2(e, t) {
    return Qi(
      e,
      new Bt.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (n, r, i, o) {
            return Bt.isNode && Y.isBuffer(n)
              ? (this.append(r, n.toString("base64")), !1)
              : o.defaultVisitor.apply(this, arguments);
          },
        },
        t
      )
    );
  }
  function l2(e) {
    return Y.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
      t[0] === "[]" ? "" : t[1] || t[0]
    );
  }
  function c2(e) {
    const t = {},
      n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
    return t;
  }
  function zd(e) {
    function t(n, r, i, o) {
      let s = n[o++];
      const a = Number.isFinite(+s),
        c = o >= n.length;
      return (
        (s = !s && Y.isArray(i) ? i.length : s),
        c
          ? (Y.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !a)
          : ((!i[s] || !Y.isObject(i[s])) && (i[s] = []),
            t(n, r, i[s], o) && Y.isArray(i[s]) && (i[s] = c2(i[s])),
            !a)
      );
    }
    if (Y.isFormData(e) && Y.isFunction(e.entries)) {
      const n = {};
      return (
        Y.forEachEntry(e, (r, i) => {
          t(l2(r), i, n, 0);
        }),
        n
      );
    }
    return null;
  }
  function u2(e, t, n) {
    if (Y.isString(e))
      try {
        return (t || JSON.parse)(e), Y.trim(e);
      } catch (r) {
        if (r.name !== "SyntaxError") throw r;
      }
    return (n || JSON.stringify)(e);
  }
  const Pa = {
    transitional: Hd,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, n) {
        const r = n.getContentType() || "",
          i = r.indexOf("application/json") > -1,
          o = Y.isObject(t);
        if ((o && Y.isHTMLForm(t) && (t = new FormData(t)), Y.isFormData(t)))
          return i && i ? JSON.stringify(zd(t)) : t;
        if (
          Y.isArrayBuffer(t) ||
          Y.isBuffer(t) ||
          Y.isStream(t) ||
          Y.isFile(t) ||
          Y.isBlob(t)
        )
          return t;
        if (Y.isArrayBufferView(t)) return t.buffer;
        if (Y.isURLSearchParams(t))
          return (
            n.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        let a;
        if (o) {
          if (r.indexOf("application/x-www-form-urlencoded") > -1)
            return a2(t, this.formSerializer).toString();
          if ((a = Y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
            const c = this.env && this.env.FormData;
            return Qi(
              a ? { "files[]": t } : t,
              c && new c(),
              this.formSerializer
            );
          }
        }
        return o || i ? (n.setContentType("application/json", !1), u2(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const n = this.transitional || Pa.transitional,
          r = n && n.forcedJSONParsing,
          i = this.responseType === "json";
        if (t && Y.isString(t) && ((r && !this.responseType) || i)) {
          const s = !(n && n.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (a) {
            if (s)
              throw a.name === "SyntaxError"
                ? we.from(a, we.ERR_BAD_RESPONSE, this, null, this.response)
                : a;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Bt.classes.FormData, Blob: Bt.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  Y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Pa.headers[e] = {};
  });
  const Ba = Pa,
    d2 = Y.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    f2 = (e) => {
      const t = {};
      let n, r, i;
      return (
        e &&
          e
            .split(
              `
`
            )
            .forEach(function (s) {
              (i = s.indexOf(":")),
                (n = s.substring(0, i).trim().toLowerCase()),
                (r = s.substring(i + 1).trim()),
                !(!n || (t[n] && d2[n])) &&
                  (n === "set-cookie"
                    ? t[n]
                      ? t[n].push(r)
                      : (t[n] = [r])
                    : (t[n] = t[n] ? t[n] + ", " + r : r));
            }),
        t
      );
    },
    jc = Symbol("internals");
  function fr(e) {
    return e && String(e).trim().toLowerCase();
  }
  function si(e) {
    return e === !1 || e == null ? e : Y.isArray(e) ? e.map(si) : String(e);
  }
  function h2(e) {
    const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
  }
  const p2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function rs(e, t, n, r, i) {
    if (Y.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), !!Y.isString(t))) {
      if (Y.isString(r)) return t.indexOf(r) !== -1;
      if (Y.isRegExp(r)) return r.test(t);
    }
  }
  function m2(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
  }
  function g2(e, t) {
    const n = Y.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
      Object.defineProperty(e, r + n, {
        value: function (i, o, s) {
          return this[r].call(this, t, i, o, s);
        },
        configurable: !0,
      });
    });
  }
  class eo {
    constructor(t) {
      t && this.set(t);
    }
    set(t, n, r) {
      const i = this;
      function o(a, c, l) {
        const u = fr(c);
        if (!u) throw new Error("header name must be a non-empty string");
        const m = Y.findKey(i, u);
        (!m || i[m] === void 0 || l === !0 || (l === void 0 && i[m] !== !1)) &&
          (i[m || c] = si(a));
      }
      const s = (a, c) => Y.forEach(a, (l, u) => o(l, u, c));
      return (
        Y.isPlainObject(t) || t instanceof this.constructor
          ? s(t, n)
          : Y.isString(t) && (t = t.trim()) && !p2(t)
          ? s(f2(t), n)
          : t != null && o(n, t, r),
        this
      );
    }
    get(t, n) {
      if (((t = fr(t)), t)) {
        const r = Y.findKey(this, t);
        if (r) {
          const i = this[r];
          if (!n) return i;
          if (n === !0) return h2(i);
          if (Y.isFunction(n)) return n.call(this, i, r);
          if (Y.isRegExp(n)) return n.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, n) {
      if (((t = fr(t)), t)) {
        const r = Y.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || rs(this, this[r], r, n)));
      }
      return !1;
    }
    delete(t, n) {
      const r = this;
      let i = !1;
      function o(s) {
        if (((s = fr(s)), s)) {
          const a = Y.findKey(r, s);
          a && (!n || rs(r, r[a], a, n)) && (delete r[a], (i = !0));
        }
      }
      return Y.isArray(t) ? t.forEach(o) : o(t), i;
    }
    clear(t) {
      const n = Object.keys(this);
      let r = n.length,
        i = !1;
      for (; r--; ) {
        const o = n[r];
        (!t || rs(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const n = this,
        r = {};
      return (
        Y.forEach(this, (i, o) => {
          const s = Y.findKey(r, o);
          if (s) {
            (n[s] = si(i)), delete n[o];
            return;
          }
          const a = t ? m2(o) : String(o).trim();
          a !== o && delete n[o], (n[a] = si(i)), (r[a] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const n = Object.create(null);
      return (
        Y.forEach(this, (r, i) => {
          r != null &&
            r !== !1 &&
            (n[i] = t && Y.isArray(r) ? r.join(", ") : r);
        }),
        n
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
      const r = new this(t);
      return n.forEach((i) => r.set(i)), r;
    }
    static accessor(t) {
      const r = (this[jc] = this[jc] = { accessors: {} }).accessors,
        i = this.prototype;
      function o(s) {
        const a = fr(s);
        r[a] || (g2(i, s), (r[a] = !0));
      }
      return Y.isArray(t) ? t.forEach(o) : o(t), this;
    }
  }
  eo.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  Y.reduceDescriptors(eo.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(r) {
        this[n] = r;
      },
    };
  });
  Y.freezeMethods(eo);
  const en = eo;
  function is(e, t) {
    const n = this || Ba,
      r = t || n,
      i = en.from(r.headers);
    let o = r.data;
    return (
      Y.forEach(e, function (a) {
        o = a.call(n, o, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      o
    );
  }
  function Wd(e) {
    return !!(e && e.__CANCEL__);
  }
  function Ur(e, t, n) {
    we.call(this, e ?? "canceled", we.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  Y.inherits(Ur, we, { __CANCEL__: !0 });
  function v2(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
      ? e(n)
      : t(
          new we(
            "Request failed with status code " + n.status,
            [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        );
  }
  const y2 = Bt.isStandardBrowserEnv
    ? (function () {
        return {
          write: function (n, r, i, o, s, a) {
            const c = [];
            c.push(n + "=" + encodeURIComponent(r)),
              Y.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()),
              Y.isString(o) && c.push("path=" + o),
              Y.isString(s) && c.push("domain=" + s),
              a === !0 && c.push("secure"),
              (document.cookie = c.join("; "));
          },
          read: function (n) {
            const r = document.cookie.match(
              new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
            );
            return r ? decodeURIComponent(r[3]) : null;
          },
          remove: function (n) {
            this.write(n, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
  function x2(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function b2(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function Vd(e, t) {
    return e && !x2(t) ? b2(e, t) : t;
  }
  const w2 = Bt.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let s = o;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const a = Y.isString(s) ? i(s) : s;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
  function _2(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function S2(e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let i = 0,
      o = 0,
      s;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (c) {
        const l = Date.now(),
          u = r[o];
        s || (s = l), (n[i] = c), (r[i] = l);
        let m = o,
          h = 0;
        for (; m !== i; ) (h += n[m++]), (m = m % e);
        if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), l - s < t))
          return;
        const v = u && l - u;
        return v ? Math.round((h * 1e3) / v) : void 0;
      }
    );
  }
  function $c(e, t) {
    let n = 0;
    const r = S2(50, 250);
    return (i) => {
      const o = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        a = o - n,
        c = r(a),
        l = o <= s;
      n = o;
      const u = {
        loaded: o,
        total: s,
        progress: s ? o / s : void 0,
        bytes: a,
        rate: c || void 0,
        estimated: c && s && l ? (s - o) / c : void 0,
        event: i,
      };
      (u[t ? "download" : "upload"] = !0), e(u);
    };
  }
  const k2 = typeof XMLHttpRequest < "u",
    E2 =
      k2 &&
      function (e) {
        return new Promise(function (n, r) {
          let i = e.data;
          const o = en.from(e.headers).normalize(),
            s = e.responseType;
          let a;
          function c() {
            e.cancelToken && e.cancelToken.unsubscribe(a),
              e.signal && e.signal.removeEventListener("abort", a);
          }
          let l;
          Y.isFormData(i) &&
            (Bt.isStandardBrowserEnv || Bt.isStandardBrowserWebWorkerEnv
              ? o.setContentType(!1)
              : o.getContentType(/^\s*multipart\/form-data/)
              ? Y.isString((l = o.getContentType())) &&
                o.setContentType(
                  l.replace(/^\s*(multipart\/form-data);+/, "$1")
                )
              : o.setContentType("multipart/form-data"));
          let u = new XMLHttpRequest();
          if (e.auth) {
            const f = e.auth.username || "",
              d = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            o.set("Authorization", "Basic " + btoa(f + ":" + d));
          }
          const m = Vd(e.baseURL, e.url);
          u.open(
            e.method.toUpperCase(),
            Ud(m, e.params, e.paramsSerializer),
            !0
          ),
            (u.timeout = e.timeout);
          function h() {
            if (!u) return;
            const f = en.from(
                "getAllResponseHeaders" in u && u.getAllResponseHeaders()
              ),
              y = {
                data:
                  !s || s === "text" || s === "json"
                    ? u.responseText
                    : u.response,
                status: u.status,
                statusText: u.statusText,
                headers: f,
                config: e,
                request: u,
              };
            v2(
              function (p) {
                n(p), c();
              },
              function (p) {
                r(p), c();
              },
              y
            ),
              (u = null);
          }
          if (
            ("onloadend" in u
              ? (u.onloadend = h)
              : (u.onreadystatechange = function () {
                  !u ||
                    u.readyState !== 4 ||
                    (u.status === 0 &&
                      !(
                        u.responseURL && u.responseURL.indexOf("file:") === 0
                      )) ||
                    setTimeout(h);
                }),
            (u.onabort = function () {
              u &&
                (r(new we("Request aborted", we.ECONNABORTED, e, u)),
                (u = null));
            }),
            (u.onerror = function () {
              r(new we("Network Error", we.ERR_NETWORK, e, u)), (u = null);
            }),
            (u.ontimeout = function () {
              let d = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded";
              const y = e.transitional || Hd;
              e.timeoutErrorMessage && (d = e.timeoutErrorMessage),
                r(
                  new we(
                    d,
                    y.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
                    e,
                    u
                  )
                ),
                (u = null);
            }),
            Bt.isStandardBrowserEnv)
          ) {
            const f =
              (e.withCredentials || w2(m)) &&
              e.xsrfCookieName &&
              y2.read(e.xsrfCookieName);
            f && o.set(e.xsrfHeaderName, f);
          }
          i === void 0 && o.setContentType(null),
            "setRequestHeader" in u &&
              Y.forEach(o.toJSON(), function (d, y) {
                u.setRequestHeader(y, d);
              }),
            Y.isUndefined(e.withCredentials) ||
              (u.withCredentials = !!e.withCredentials),
            s && s !== "json" && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == "function" &&
              u.addEventListener("progress", $c(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == "function" &&
              u.upload &&
              u.upload.addEventListener("progress", $c(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((a = (f) => {
                u &&
                  (r(!f || f.type ? new Ur(null, e, u) : f),
                  u.abort(),
                  (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(a),
              e.signal &&
                (e.signal.aborted
                  ? a()
                  : e.signal.addEventListener("abort", a)));
          const v = _2(m);
          if (v && Bt.protocols.indexOf(v) === -1) {
            r(new we("Unsupported protocol " + v + ":", we.ERR_BAD_REQUEST, e));
            return;
          }
          u.send(i || null);
        });
      },
    Ls = { http: Xy, xhr: E2 };
  Y.forEach(Ls, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const Uc = (e) => `- ${e}`,
    C2 = (e) => Y.isFunction(e) || e === null || e === !1,
    qd = {
      getAdapter: (e) => {
        e = Y.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
          n = e[o];
          let s;
          if (
            ((r = n),
            !C2(n) && ((r = Ls[(s = String(n)).toLowerCase()]), r === void 0))
          )
            throw new we(`Unknown adapter '${s}'`);
          if (r) break;
          i[s || "#" + o] = r;
        }
        if (!r) {
          const o = Object.entries(i).map(
            ([a, c]) =>
              `adapter ${a} ` +
              (c === !1
                ? "is not supported by the environment"
                : "is not available in the build")
          );
          let s = t
            ? o.length > 1
              ? `since :
` +
                o.map(Uc).join(`
`)
              : " " + Uc(o[0])
            : "as no adapter specified";
          throw new we(
            "There is no suitable adapter to dispatch the request " + s,
            "ERR_NOT_SUPPORT"
          );
        }
        return r;
      },
      adapters: Ls,
    };
  function os(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Ur(null, e);
  }
  function Hc(e) {
    return (
      os(e),
      (e.headers = en.from(e.headers)),
      (e.data = is.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      qd
        .getAdapter(e.adapter || Ba.adapter)(e)
        .then(
          function (r) {
            return (
              os(e),
              (r.data = is.call(e, e.transformResponse, r)),
              (r.headers = en.from(r.headers)),
              r
            );
          },
          function (r) {
            return (
              Wd(r) ||
                (os(e),
                r &&
                  r.response &&
                  ((r.response.data = is.call(
                    e,
                    e.transformResponse,
                    r.response
                  )),
                  (r.response.headers = en.from(r.response.headers)))),
              Promise.reject(r)
            );
          }
        )
    );
  }
  const zc = (e) => (e instanceof en ? e.toJSON() : e);
  function Qn(e, t) {
    t = t || {};
    const n = {};
    function r(l, u, m) {
      return Y.isPlainObject(l) && Y.isPlainObject(u)
        ? Y.merge.call({ caseless: m }, l, u)
        : Y.isPlainObject(u)
        ? Y.merge({}, u)
        : Y.isArray(u)
        ? u.slice()
        : u;
    }
    function i(l, u, m) {
      if (Y.isUndefined(u)) {
        if (!Y.isUndefined(l)) return r(void 0, l, m);
      } else return r(l, u, m);
    }
    function o(l, u) {
      if (!Y.isUndefined(u)) return r(void 0, u);
    }
    function s(l, u) {
      if (Y.isUndefined(u)) {
        if (!Y.isUndefined(l)) return r(void 0, l);
      } else return r(void 0, u);
    }
    function a(l, u, m) {
      if (m in t) return r(l, u);
      if (m in e) return r(void 0, l);
    }
    const c = {
      url: o,
      method: o,
      data: o,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: a,
      headers: (l, u) => i(zc(l), zc(u), !0),
    };
    return (
      Y.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const m = c[u] || i,
          h = m(e[u], t[u], u);
        (Y.isUndefined(h) && m !== a) || (n[u] = h);
      }),
      n
    );
  }
  const Gd = "1.5.1",
    Fa = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      Fa[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Wc = {};
  Fa.transitional = function (t, n, r) {
    function i(o, s) {
      return (
        "[Axios v" +
        Gd +
        "] Transitional option '" +
        o +
        "'" +
        s +
        (r ? ". " + r : "")
      );
    }
    return (o, s, a) => {
      if (t === !1)
        throw new we(
          i(s, " has been removed" + (n ? " in " + n : "")),
          we.ERR_DEPRECATED
        );
      return (
        n &&
          !Wc[s] &&
          ((Wc[s] = !0),
          console.warn(
            i(
              s,
              " has been deprecated since v" +
                n +
                " and will be removed in the near future"
            )
          )),
        t ? t(o, s, a) : !0
      );
    };
  };
  function D2(e, t, n) {
    if (typeof e != "object")
      throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
      const o = r[i],
        s = t[o];
      if (s) {
        const a = e[o],
          c = a === void 0 || s(a, o, e);
        if (c !== !0)
          throw new we(
            "option " + o + " must be " + c,
            we.ERR_BAD_OPTION_VALUE
          );
        continue;
      }
      if (n !== !0) throw new we("Unknown option " + o, we.ERR_BAD_OPTION);
    }
  }
  const Ps = { assertOptions: D2, validators: Fa },
    cn = Ps.validators;
  class Ci {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new Yc(), response: new Yc() });
    }
    request(t, n) {
      typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
        (n = Qn(this.defaults, n));
      const { transitional: r, paramsSerializer: i, headers: o } = n;
      r !== void 0 &&
        Ps.assertOptions(
          r,
          {
            silentJSONParsing: cn.transitional(cn.boolean),
            forcedJSONParsing: cn.transitional(cn.boolean),
            clarifyTimeoutError: cn.transitional(cn.boolean),
          },
          !1
        ),
        i != null &&
          (Y.isFunction(i)
            ? (n.paramsSerializer = { serialize: i })
            : Ps.assertOptions(
                i,
                { encode: cn.function, serialize: cn.function },
                !0
              )),
        (n.method = (n.method || this.defaults.method || "get").toLowerCase());
      let s = o && Y.merge(o.common, o[n.method]);
      o &&
        Y.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (f) => {
            delete o[f];
          }
        ),
        (n.headers = en.concat(s, o));
      const a = [];
      let c = !0;
      this.interceptors.request.forEach(function (d) {
        (typeof d.runWhen == "function" && d.runWhen(n) === !1) ||
          ((c = c && d.synchronous), a.unshift(d.fulfilled, d.rejected));
      });
      const l = [];
      this.interceptors.response.forEach(function (d) {
        l.push(d.fulfilled, d.rejected);
      });
      let u,
        m = 0,
        h;
      if (!c) {
        const f = [Hc.bind(this), void 0];
        for (
          f.unshift.apply(f, a),
            f.push.apply(f, l),
            h = f.length,
            u = Promise.resolve(n);
          m < h;

        )
          u = u.then(f[m++], f[m++]);
        return u;
      }
      h = a.length;
      let v = n;
      for (m = 0; m < h; ) {
        const f = a[m++],
          d = a[m++];
        try {
          v = f(v);
        } catch (y) {
          d.call(this, y);
          break;
        }
      }
      try {
        u = Hc.call(this, v);
      } catch (f) {
        return Promise.reject(f);
      }
      for (m = 0, h = l.length; m < h; ) u = u.then(l[m++], l[m++]);
      return u;
    }
    getUri(t) {
      t = Qn(this.defaults, t);
      const n = Vd(t.baseURL, t.url);
      return Ud(n, t.params, t.paramsSerializer);
    }
  }
  Y.forEach(["delete", "get", "head", "options"], function (t) {
    Ci.prototype[t] = function (n, r) {
      return this.request(
        Qn(r || {}, { method: t, url: n, data: (r || {}).data })
      );
    };
  });
  Y.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
      return function (o, s, a) {
        return this.request(
          Qn(a || {}, {
            method: t,
            headers: r ? { "Content-Type": "multipart/form-data" } : {},
            url: o,
            data: s,
          })
        );
      };
    }
    (Ci.prototype[t] = n()), (Ci.prototype[t + "Form"] = n(!0));
  });
  const ai = Ci;
  class Ya {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function (o) {
        n = o;
      });
      const r = this;
      this.promise.then((i) => {
        if (!r._listeners) return;
        let o = r._listeners.length;
        for (; o-- > 0; ) r._listeners[o](i);
        r._listeners = null;
      }),
        (this.promise.then = (i) => {
          let o;
          const s = new Promise((a) => {
            r.subscribe(a), (o = a);
          }).then(i);
          return (
            (s.cancel = function () {
              r.unsubscribe(o);
            }),
            s
          );
        }),
        t(function (o, s, a) {
          r.reason || ((r.reason = new Ur(o, s, a)), n(r.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
      let t;
      return {
        token: new Ya(function (i) {
          t = i;
        }),
        cancel: t,
      };
    }
  }
  const T2 = Ya;
  function A2(e) {
    return function (n) {
      return e.apply(null, n);
    };
  }
  function O2(e) {
    return Y.isObject(e) && e.isAxiosError === !0;
  }
  const Bs = {
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
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Bs).forEach(([e, t]) => {
    Bs[t] = e;
  });
  const M2 = Bs;
  function Zd(e) {
    const t = new ai(e),
      n = Od(ai.prototype.request, t);
    return (
      Y.extend(n, ai.prototype, t, { allOwnKeys: !0 }),
      Y.extend(n, t, null, { allOwnKeys: !0 }),
      (n.create = function (i) {
        return Zd(Qn(e, i));
      }),
      n
    );
  }
  const Ue = Zd(Ba);
  Ue.Axios = ai;
  Ue.CanceledError = Ur;
  Ue.CancelToken = T2;
  Ue.isCancel = Wd;
  Ue.VERSION = Gd;
  Ue.toFormData = Qi;
  Ue.AxiosError = we;
  Ue.Cancel = Ue.CanceledError;
  Ue.all = function (t) {
    return Promise.all(t);
  };
  Ue.spread = A2;
  Ue.isAxiosError = O2;
  Ue.mergeConfig = Qn;
  Ue.AxiosHeaders = en;
  Ue.formToJSON = (e) => zd(Y.isHTMLForm(e) ? new FormData(e) : e);
  Ue.getAdapter = qd.getAdapter;
  Ue.HttpStatusCode = M2;
  Ue.default = Ue;
  const Kd = Ue;
  var Xd = { exports: {} },
    xe = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Hr = Symbol.for("react.element"),
    N2 = Symbol.for("react.portal"),
    I2 = Symbol.for("react.fragment"),
    R2 = Symbol.for("react.strict_mode"),
    L2 = Symbol.for("react.profiler"),
    P2 = Symbol.for("react.provider"),
    B2 = Symbol.for("react.context"),
    F2 = Symbol.for("react.forward_ref"),
    Y2 = Symbol.for("react.suspense"),
    j2 = Symbol.for("react.memo"),
    $2 = Symbol.for("react.lazy"),
    Vc = Symbol.iterator;
  function U2(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Vc && e[Vc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Jd = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qd = Object.assign,
    ef = {};
  function ar(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = ef),
      (this.updater = n || Jd);
  }
  ar.prototype.isReactComponent = {};
  ar.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  ar.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function tf() {}
  tf.prototype = ar.prototype;
  function ja(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = ef),
      (this.updater = n || Jd);
  }
  var $a = (ja.prototype = new tf());
  $a.constructor = ja;
  Qd($a, ar.prototype);
  $a.isPureReactComponent = !0;
  var qc = Array.isArray,
    nf = Object.prototype.hasOwnProperty,
    Ua = { current: null },
    rf = { key: !0, ref: !0, __self: !0, __source: !0 };
  function of(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        nf.call(t, r) && !rf.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var c = Array(a), l = 0; l < a; l++) c[l] = arguments[l + 2];
      i.children = c;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
      $$typeof: Hr,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Ua.current,
    };
  }
  function H2(e, t) {
    return {
      $$typeof: Hr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Ha(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Hr;
  }
  function z2(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Gc = /\/+/g;
  function ss(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? z2("" + e.key)
      : t.toString(36);
  }
  function li(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Hr:
            case N2:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (i = i(s)),
        (e = r === "" ? "." + ss(s, 0) : r),
        qc(i)
          ? ((n = ""),
            e != null && (n = e.replace(Gc, "$&/") + "/"),
            li(i, t, n, "", function (l) {
              return l;
            }))
          : i != null &&
            (Ha(i) &&
              (i = H2(
                i,
                n +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(Gc, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), qc(e)))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var c = r + ss(o, a);
        s += li(o, t, n, c, i);
      }
    else if (((c = U2(e)), typeof c == "function"))
      for (e = c.call(e), a = 0; !(o = e.next()).done; )
        (o = o.value), (c = r + ss(o, a++)), (s += li(o, t, n, c, i));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function Xr(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      li(e, r, "", "", function (o) {
        return t.call(n, o, i++);
      }),
      r
    );
  }
  function W2(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var nt = { current: null },
    ci = { transition: null },
    V2 = {
      ReactCurrentDispatcher: nt,
      ReactCurrentBatchConfig: ci,
      ReactCurrentOwner: Ua,
    };
  xe.Children = {
    map: Xr,
    forEach: function (e, t, n) {
      Xr(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Xr(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Xr(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Ha(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  xe.Component = ar;
  xe.Fragment = I2;
  xe.Profiler = L2;
  xe.PureComponent = ja;
  xe.StrictMode = R2;
  xe.Suspense = Y2;
  xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V2;
  xe.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Qd({}, e.props),
      i = e.key,
      o = e.ref,
      s = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (s = Ua.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (c in t)
        nf.call(t, c) &&
          !rf.hasOwnProperty(c) &&
          (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (c === 1) r.children = n;
    else if (1 < c) {
      a = Array(c);
      for (var l = 0; l < c; l++) a[l] = arguments[l + 2];
      r.children = a;
    }
    return { $$typeof: Hr, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  xe.createContext = function (e) {
    return (
      (e = {
        $$typeof: B2,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: P2, _context: e }),
      (e.Consumer = e)
    );
  };
  xe.createElement = of;
  xe.createFactory = function (e) {
    var t = of.bind(null, e);
    return (t.type = e), t;
  };
  xe.createRef = function () {
    return { current: null };
  };
  xe.forwardRef = function (e) {
    return { $$typeof: F2, render: e };
  };
  xe.isValidElement = Ha;
  xe.lazy = function (e) {
    return { $$typeof: $2, _payload: { _status: -1, _result: e }, _init: W2 };
  };
  xe.memo = function (e, t) {
    return { $$typeof: j2, type: e, compare: t === void 0 ? null : t };
  };
  xe.startTransition = function (e) {
    var t = ci.transition;
    ci.transition = {};
    try {
      e();
    } finally {
      ci.transition = t;
    }
  };
  xe.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  xe.useCallback = function (e, t) {
    return nt.current.useCallback(e, t);
  };
  xe.useContext = function (e) {
    return nt.current.useContext(e);
  };
  xe.useDebugValue = function () {};
  xe.useDeferredValue = function (e) {
    return nt.current.useDeferredValue(e);
  };
  xe.useEffect = function (e, t) {
    return nt.current.useEffect(e, t);
  };
  xe.useId = function () {
    return nt.current.useId();
  };
  xe.useImperativeHandle = function (e, t, n) {
    return nt.current.useImperativeHandle(e, t, n);
  };
  xe.useInsertionEffect = function (e, t) {
    return nt.current.useInsertionEffect(e, t);
  };
  xe.useLayoutEffect = function (e, t) {
    return nt.current.useLayoutEffect(e, t);
  };
  xe.useMemo = function (e, t) {
    return nt.current.useMemo(e, t);
  };
  xe.useReducer = function (e, t, n) {
    return nt.current.useReducer(e, t, n);
  };
  xe.useRef = function (e) {
    return nt.current.useRef(e);
  };
  xe.useState = function (e) {
    return nt.current.useState(e);
  };
  xe.useSyncExternalStore = function (e, t, n) {
    return nt.current.useSyncExternalStore(e, t, n);
  };
  xe.useTransition = function () {
    return nt.current.useTransition();
  };
  xe.version = "18.2.0";
  Xd.exports = xe;
  var lt = Xd.exports;
  let q2 = { data: "" },
    G2 = (e) =>
      typeof window == "object"
        ? (
            (e ? e.querySelector("#_goober") : window._goober) ||
            Object.assign(
              (e || document.head).appendChild(document.createElement("style")),
              { innerHTML: " ", id: "_goober" }
            )
          ).firstChild
        : e || q2,
    Z2 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    K2 = /\/\*[^]*?\*\/|  +/g,
    Zc = /\n+/g,
    un = (e, t) => {
      let n = "",
        r = "",
        i = "";
      for (let o in e) {
        let s = e[o];
        o[0] == "@"
          ? o[1] == "i"
            ? (n = o + " " + s + ";")
            : (r +=
                o[1] == "f"
                  ? un(s, o)
                  : o + "{" + un(s, o[1] == "k" ? "" : t) + "}")
          : typeof s == "object"
          ? (r += un(
              s,
              t
                ? t.replace(/([^,])+/g, (a) =>
                    o.replace(/(^:.*)|([^,])+/g, (c) =>
                      /&/.test(c) ? c.replace(/&/g, a) : a ? a + " " + c : c
                    )
                  )
                : o
            ))
          : s != null &&
            ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (i += un.p ? un.p(o, s) : o + ":" + s + ";"));
      }
      return n + (t && i ? t + "{" + i + "}" : i) + r;
    },
    qt = {},
    sf = (e) => {
      if (typeof e == "object") {
        let t = "";
        for (let n in e) t += n + sf(e[n]);
        return t;
      }
      return e;
    },
    X2 = (e, t, n, r, i) => {
      let o = sf(e),
        s =
          qt[o] ||
          (qt[o] = ((c) => {
            let l = 0,
              u = 11;
            for (; l < c.length; ) u = (101 * u + c.charCodeAt(l++)) >>> 0;
            return "go" + u;
          })(o));
      if (!qt[s]) {
        let c =
          o !== e
            ? e
            : ((l) => {
                let u,
                  m,
                  h = [{}];
                for (; (u = Z2.exec(l.replace(K2, ""))); )
                  u[4]
                    ? h.shift()
                    : u[3]
                    ? ((m = u[3].replace(Zc, " ").trim()),
                      h.unshift((h[0][m] = h[0][m] || {})))
                    : (h[0][u[1]] = u[2].replace(Zc, " ").trim());
                return h[0];
              })(e);
        qt[s] = un(i ? { ["@keyframes " + s]: c } : c, n ? "" : "." + s);
      }
      let a = n && qt.g ? qt.g : null;
      return (
        n && (qt.g = qt[s]),
        ((c, l, u, m) => {
          m
            ? (l.data = l.data.replace(m, c))
            : l.data.indexOf(c) === -1 &&
              (l.data = u ? c + l.data : l.data + c);
        })(qt[s], t, r, a),
        s
      );
    },
    J2 = (e, t, n) =>
      e.reduce((r, i, o) => {
        let s = t[o];
        if (s && s.call) {
          let a = s(n),
            c = (a && a.props && a.props.className) || (/^go/.test(a) && a);
          s = c
            ? "." + c
            : a && typeof a == "object"
            ? a.props
              ? ""
              : un(a, "")
            : a === !1
            ? ""
            : a;
        }
        return r + i + (s ?? "");
      }, "");
  function to(e) {
    let t = this || {},
      n = e.call ? e(t.p) : e;
    return X2(
      n.unshift
        ? n.raw
          ? J2(n, [].slice.call(arguments, 1), t.p)
          : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
        : n,
      G2(t.target),
      t.g,
      t.o,
      t.k
    );
  }
  let af, Fs, Ys;
  to.bind({ g: 1 });
  let nn = to.bind({ k: 1 });
  function Q2(e, t, n, r) {
    (un.p = t), (af = e), (Fs = n), (Ys = r);
  }
  function xn(e, t) {
    let n = this || {};
    return function () {
      let r = arguments;
      function i(o, s) {
        let a = Object.assign({}, o),
          c = a.className || i.className;
        (n.p = Object.assign({ theme: Fs && Fs() }, a)),
          (n.o = / *go\d+/.test(c)),
          (a.className = to.apply(n, r) + (c ? " " + c : "")),
          t && (a.ref = s);
        let l = e;
        return (
          e[0] && ((l = a.as || e), delete a.as), Ys && l[0] && Ys(a), af(l, a)
        );
      }
      return t ? t(i) : i;
    };
  }
  var ex = (e) => typeof e == "function",
    js = (e, t) => (ex(e) ? e(t) : e),
    tx = (() => {
      let e = 0;
      return () => (++e).toString();
    })(),
    nx = (() => {
      let e;
      return () => {
        if (e === void 0 && typeof window < "u") {
          let t = matchMedia("(prefers-reduced-motion: reduce)");
          e = !t || t.matches;
        }
        return e;
      };
    })(),
    rx = 20,
    ui = new Map(),
    ix = 1e3,
    Kc = (e) => {
      if (ui.has(e)) return;
      let t = setTimeout(() => {
        ui.delete(e), no({ type: 4, toastId: e });
      }, ix);
      ui.set(e, t);
    },
    ox = (e) => {
      let t = ui.get(e);
      t && clearTimeout(t);
    },
    $s = (e, t) => {
      switch (t.type) {
        case 0:
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, rx) };
        case 1:
          return (
            t.toast.id && ox(t.toast.id),
            {
              ...e,
              toasts: e.toasts.map((o) =>
                o.id === t.toast.id ? { ...o, ...t.toast } : o
              ),
            }
          );
        case 2:
          let { toast: n } = t;
          return e.toasts.find((o) => o.id === n.id)
            ? $s(e, { type: 1, toast: n })
            : $s(e, { type: 0, toast: n });
        case 3:
          let { toastId: r } = t;
          return (
            r
              ? Kc(r)
              : e.toasts.forEach((o) => {
                  Kc(o.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((o) =>
                o.id === r || r === void 0 ? { ...o, visible: !1 } : o
              ),
            }
          );
        case 4:
          return t.toastId === void 0
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
        case 5:
          return { ...e, pausedAt: t.time };
        case 6:
          let i = t.time - (e.pausedAt || 0);
          return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map((o) => ({
              ...o,
              pauseDuration: o.pauseDuration + i,
            })),
          };
      }
    },
    sx = [],
    as = { toasts: [], pausedAt: void 0 },
    no = (e) => {
      (as = $s(as, e)),
        sx.forEach((t) => {
          t(as);
        });
    },
    ax = (e, t = "blank", n) => ({
      createdAt: Date.now(),
      visible: !0,
      type: t,
      ariaProps: { role: "status", "aria-live": "polite" },
      message: e,
      pauseDuration: 0,
      ...n,
      id: (n == null ? void 0 : n.id) || tx(),
    }),
    zr = (e) => (t, n) => {
      let r = ax(t, e, n);
      return no({ type: 2, toast: r }), r.id;
    },
    Tt = (e, t) => zr("blank")(e, t);
  Tt.error = zr("error");
  Tt.success = zr("success");
  Tt.loading = zr("loading");
  Tt.custom = zr("custom");
  Tt.dismiss = (e) => {
    no({ type: 3, toastId: e });
  };
  Tt.remove = (e) => no({ type: 4, toastId: e });
  Tt.promise = (e, t, n) => {
    let r = Tt.loading(t.loading, {
      ...n,
      ...(n == null ? void 0 : n.loading),
    });
    return (
      e
        .then(
          (i) => (
            Tt.success(js(t.success, i), {
              id: r,
              ...n,
              ...(n == null ? void 0 : n.success),
            }),
            i
          )
        )
        .catch((i) => {
          Tt.error(js(t.error, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.error),
          });
        }),
      e
    );
  };
  var lx = nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    cx = nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    ux = nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    dx = xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${cx} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ux} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    fx = nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    hx = xn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${fx} 1s linear infinite;
`,
    px = nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    mx = nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    gx = xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${px} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${mx} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    vx = xn("div")`
  position: absolute;
`,
    yx = xn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    xx = nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    bx = xn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xx} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    wx = ({ toast: e }) => {
      let { icon: t, type: n, iconTheme: r } = e;
      return t !== void 0
        ? typeof t == "string"
          ? lt.createElement(bx, null, t)
          : t
        : n === "blank"
        ? null
        : lt.createElement(
            yx,
            null,
            lt.createElement(hx, { ...r }),
            n !== "loading" &&
              lt.createElement(
                vx,
                null,
                n === "error"
                  ? lt.createElement(dx, { ...r })
                  : lt.createElement(gx, { ...r })
              )
          );
    },
    _x = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
    Sx = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
    kx = "0%{opacity:0;} 100%{opacity:1;}",
    Ex = "0%{opacity:1;} 100%{opacity:0;}",
    Cx = xn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    Dx = xn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    Tx = (e, t) => {
      let n = e.includes("top") ? 1 : -1,
        [r, i] = nx() ? [kx, Ex] : [_x(n), Sx(n)];
      return {
        animation: t
          ? `${nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
          : `${nn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
      };
    };
  lt.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? Tx(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = lt.createElement(wx, { toast: e }),
      s = lt.createElement(Dx, { ...e.ariaProps }, js(e.message, e));
    return lt.createElement(
      Cx,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: o, message: s })
        : lt.createElement(lt.Fragment, null, o, s)
    );
  });
  Q2(lt.createElement);
  to`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
  var Us = ((e) => (
    (e.Active = "active"),
    (e.PastDue = "past_due"),
    (e.Unpaid = "unpaid"),
    (e.Canceled = "canceled"),
    (e.Incomplete = "incomplete"),
    (e.IncompleteExpired = "incomplete_expired"),
    (e.Trialing = "trialing"),
    (e.Paused = "paused"),
    (e.Unsubscribed = "unsubscribed"),
    e
  ))(Us || {});
  const Ax = () => {
      const e = Kd.create({
        baseURL: "https://apidev.annotate.site/api",
        timeout: 5e3,
        headers: { "Content-Type": "application/json" },
      });
      return (
        e.interceptors.request.use(
          (t) => {
            var o;
            const n =
                ((o = Q.getState().board.board) == null ? void 0 : o._id) ||
                null,
              r = Q.getState().user.user,
              i = Of(null);
            if (
              i &&
              (i == null ? void 0 : i.subscriptionStatus) !== Us.Active &&
              (i == null ? void 0 : i.subscriptionStatus) !== Us.Trialing &&
              t.method !== "get"
            ) {
              const s =
                i.author === (r == null ? void 0 : r._id)
                  ? "No active plan found, Please subscribe to annotate.site PRO for using this feature"
                  : "No active plan found, Please contact board owner";
              return qe.error(s), null;
            }
            return (
              n !== null &&
                (t.headers = {
                  ...t.headers,
                  "board-id": n,
                  user: JSON.stringify(r),
                }),
              t
            );
          },
          (t) => (
            console.error("Request Interceptor Error:", t), Promise.reject(t)
          )
        ),
        e.interceptors.response.use(
          (t) => t,
          (t) => (
            console.log("Response Interceptor Error:", t),
            t.response &&
              t.response.status === 429 &&
              (console.log("Too many requests, please try again later"),
              Tt.error("Too many requests, please try again later")),
            Promise.reject(t)
          )
        ),
        e
      );
    },
    It = Ax();
  var Xc = function (e) {
    var t = document.createElement("a");
    return (t.href = e), t.href;
  };
  function lf(e) {
    if (e instanceof HTMLElement) {
      e.style.removeProperty("cursor");
      const t = e.children;
      for (let n = 0; n < t.length; n++) lf(t[n]);
    }
  }
  async function Ox() {
    var o, s;
    var e = document.documentElement.cloneNode(!0);
    lf(e);
    for (var t = e.getElementsByTagName("img"), n = 0; n < t.length; n++)
      t[n].src = Xc((o = t[n]) == null ? void 0 : o.src);
    for (var r = e.getElementsByTagName("link"), n = 0; n < r.length; n++)
      r[n].href = Xc((s = r[n]) == null ? void 0 : s.href);
    (e.style.pointerEvents = "none"),
      (e.style.overflow = "scroll"),
      (e.style.webkitUserSelect = "none"),
      (e.style.userSelect = "none"),
      (e.dataset.scrollX = `${window.scrollX}px`),
      (e.dataset.scrollY = `${window.scrollY}px`);
    var i = new Blob([e.outerHTML], { type: "text/html" });
    return new Promise((a, c) => {
      var l = new FileReader();
      l.readAsDataURL(i),
        (l.onloadend = function () {
          const u = l.result;
          a(u);
        }),
        (l.onerror = function (u) {
          c(u);
        });
    });
  }
  const Mx = {
    openAnnotationId: "NEW",
    annotations: [],
    currentAnnotation: null,
    showAnnotation: !0,
    showMissingElements: !0,
    uploadingMediaAnnotations: null,
  };
  function Nx(e = Mx, t) {
    switch (t.type) {
      case "SET_ANNOTATIONS":
        return Be(e, (n) => {
          n.annotations = t.payload;
        });
      case "ADD_ANNOTATION":
        return Be(e, (n) => {
          n.annotations.push(t.payload);
        });
      case "REMOVE_ANNOTATION":
        return Be(e, (n) => {
          const r = n.annotations.findIndex((i) => i._id === t.payload);
          r > -1 && n.annotations.splice(r, 1);
        });
      case "UPDATE_ANNOTATION":
        return Be(e, (n) => {
          const r = n.annotations.findIndex((i) => i._id === t.payload._id);
          r > -1 && (n.annotations[r] = t.payload);
        });
      case "SET_OPEN_ANNOTATION_ID":
        return Be(e, (n) => {
          n.openAnnotationId = t.payload;
        });
      case "ADD_REPLY":
        return Be(e, (n) => {
          var i;
          const r = n.annotations.findIndex(
            (o) => o._id === t.payload.annotation
          );
          r > -1 &&
            ((i = n.annotations[r].replies) == null || i.push(t.payload));
        });
      case "UPDATE_REPLY":
        return Be(e, (n) => {
          var i;
          const r = n.annotations.findIndex(
            (o) => o._id === t.payload.annotationId
          );
          if (r > -1) {
            const o =
              (i = n.annotations[r].replies) == null
                ? void 0
                : i.findIndex((s) => s._id === t.payload.reply._id);
            o > -1 && (n.annotations[r].replies[o] = t.payload.reply);
          }
        });
      case "DELETE_REPLY":
        return Be(e, (n) => {
          var i, o;
          const r = n.annotations.findIndex(
            (s) => s._id === t.payload.annotationId
          );
          if (r > -1) {
            const s =
              (i = n.annotations[r].replies) == null
                ? void 0
                : i.findIndex((a) => a._id === t.payload.replyId);
            s > -1 &&
              ((o = n.annotations[r].replies) == null || o.splice(s, 1));
          }
        });
      case "TOGGLE_SHOW_ANNOTATION":
        return Be(e, (n) => {
          n.showAnnotation = t.payload;
        });
      case "SET_SHOW_MISSING_ELEMENTS":
        return Be(e, (n) => {
          n.showMissingElements = t.payload;
        });
      case "APPEND_ANNOTATION_UPLOADING_MEDIA":
        return Be(e, (n) => {
          var r;
          n.uploadingMediaAnnotations || (n.uploadingMediaAnnotations = []),
            (r = n.uploadingMediaAnnotations) == null || r.push(t.payload);
        });
      case "REMOVE_ANNOTATION_UPLOADING_MEDIA":
        return Be(e, (n) => {
          var i, o;
          if (!n.uploadingMediaAnnotations) return;
          if (n.uploadingMediaAnnotations.length === 1) {
            n.uploadingMediaAnnotations = [];
            return;
          }
          const r =
            (i = n.uploadingMediaAnnotations) == null
              ? void 0
              : i.findIndex((s) => s === t.payload);
          r &&
            r > -1 &&
            ((o = n.uploadingMediaAnnotations) == null || o.splice(r, 1));
        });
      default:
        return e;
    }
  }
  async function Ix(e) {
    Q.dispatch({ type: "SET_ANNOTATIONS", payload: e });
  }
  async function cf(e) {
    let t;
    try {
      if (
        (Q.dispatch({ type: "ADD_ANNOTATION", payload: e }),
        e.comment === "" && e._id === "NEW")
      )
        return;
      t = qe.loading("Saving annotation");
      const { _id: n, ...r } = e,
        i = await Ox(),
        o = await It.post("webapp/annotation", r);
      Q.dispatch({ type: "ADD_ANNOTATION", payload: o.data }),
        t.hideToast(),
        qe.success("Annotation saved"),
        Ft(o.data._id),
        Rx(i, o.data._id);
    } catch {
      t.hideToast(), qe.error("Error saving annotation");
    }
    Ln("NEW"), df(!0);
  }
  async function Rx(e, t) {
    try {
      Q.dispatch({ type: "APPEND_ANNOTATION_UPLOADING_MEDIA", payload: t });
      const n = {};
      if (e) {
        let i = JSON.stringify({
            scrollY: Math.floor(window.scrollY),
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            url: e,
          }),
          o = {
            method: "post",
            maxBodyLength: 1 / 0,
            url: "https://screenshot-annotate.netlify.app/",
            headers: { "Content-Type": "application/json" },
            data: i,
          };
        const s = await Kd.request(o);
        n.screenShot = {
          url: s.data.res.secure_url,
          cloudID: s.data.res.public_id,
        };
      }
      const r = await It.patch(`webapp/annotation/${t}`, n);
      Q.dispatch({ type: "UPDATE_ANNOTATION", payload: r.data }),
        Q.dispatch({ type: "REMOVE_ANNOTATION_UPLOADING_MEDIA", payload: t });
    } catch {
      Q.dispatch({ type: "REMOVE_ANNOTATION_UPLOADING_MEDIA", payload: t });
    }
  }
  async function Ln(e) {
    try {
      e !== "NEW" &&
        (await It.delete(`webapp/annotation/${e}`),
        qe.success("Annotation deleted")),
        Q.dispatch({ type: "REMOVE_ANNOTATION", payload: e });
    } catch {
      qe.error("Error deleting annotation");
    }
  }
  async function uf(e, t) {
    try {
      let n = { data: { _id: e, ...t } };
      if (e === "NEW") {
        Q.dispatch({ type: "UPDATE_ANNOTATION", payload: n.data });
        return;
      }
      t.comment !== "" &&
        !t.replies &&
        ((n = await It.patch(`webapp/annotation/${e}`, t)),
        qe.success("Annotation updated")),
        Q.dispatch({ type: "UPDATE_ANNOTATION", payload: n.data });
    } catch {
      qe.error("Error updating annotation");
    }
  }
  function df(e) {
    Q.dispatch({ type: "TOGGLE_SHOW_ANNOTATION", payload: e });
  }
  async function Lx(e, t) {
    var n, r;
    try {
      const i =
        (r = (n = Q.getState()) == null ? void 0 : n.user) == null
          ? void 0
          : r.user;
      if (!i) return;
      const o = await It.post("webapp/reply", {
        annotation: e,
        text: t,
        author: i._id,
      });
      Q.dispatch({ type: "ADD_REPLY", payload: o.data.reply }),
        qe.success("Reply added");
    } catch {
      qe.error("Error adding reply");
    }
  }
  async function Px(e, t, n) {
    try {
      const r = await It.patch(`webapp/reply/${t}`, { text: n });
      Q.dispatch({
        type: "UPDATE_REPLY",
        payload: { annotationId: e, reply: r.data },
      }),
        qe.success("Reply updated");
    } catch {
      qe.error("Error updating reply");
    }
  }
  async function Bx(e, t) {
    try {
      await It.delete(`webapp/reply/${t}`),
        Q.dispatch({
          type: "DELETE_REPLY",
          payload: { annotationId: e, replyId: t },
        }),
        qe.success("Reply deleted");
    } catch {
      qe.error("Error deleting reply");
    }
  }
  function Ft(e) {
    Q.dispatch({ type: "SET_OPEN_ANNOTATION_ID", payload: e });
  }
  function Jc(e) {
    Q.dispatch({ type: "SET_SHOW_MISSING_ELEMENTS", payload: e });
  }
  const Fx = () => {
    let e = ce.getShadowRoot().getElementById("create-annotation-button");
    e ||
      ((e = document.createElement("button")),
      (e.id = "create-annotation-button"),
      (e.className =
        "border-none bg-transparent cursor-pointer w-max-content"));
    let t = Q.getState().toolbar.cursorType;
    return (
      (e.innerHTML = `
  <div  class="p-2 rounded-full ${
    t === "comment" && "bg-white/20"
  } hover:bg-white/50">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke-width="1.5"
        color="#fff"
        class="w-6 h-6 max-md:w-5 max-md:h-5"
        viewBox="0 0 24 24">
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"></path>
      </svg>
  </div>`),
      e.addEventListener("click", (n) => {
        n.preventDefault(),
          !(Q.getState().toolbar.cursorType === "browse" && !kt()) &&
            (hf(), Ga());
      }),
      e
    );
  };
  function Yx() {
    let e = ce.getShadowRoot().getElementById("toggle-inbox-button");
    e ||
      ((e = document.createElement("button")),
      (e.id = "toggle-inbox-button"),
      (e.className =
        "border-none bg-transparent cursor-pointer w-max-content"));
    const t = Q.getState().toolbar.isInboxOpen;
    return (
      (e.innerHTML = `
    <div  class="p-2 rounded-full ${t && "bg-white/20"} hover:bg-white/50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6 max-md:w-5 max-md:h-5" >
        <path  stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
    </svg>  
  </div>
`),
      e.addEventListener("click", () => {
        ff();
      }),
      e
    );
  }
  function jx() {
    let e = ce.getShadowRoot().querySelector("#more-options-tooltip");
    e ||
      ((e = document.createElement("div")),
      (e.id = "more-options-tooltip"),
      (e.className =
        "absolute bottom-12 -left-14 max-md:-left-32 min-w-max  max-h-fit bg-white border shadow-md rounded-md bg-white hidden"),
      (e.style.zIndex = "1000")),
      e.classList.toggle("hidden"),
      (e.innerHTML = `
  <div class="flex flex-col items-start justify-center h-full text-black ">
      <div  class="bg-gray-200 px-3 w-full py-2 max-md:px-1 text-base"><b>More Options</b></div>
          <div id="show-only-unresolved-button"  class="flex items-center gap-2 p-4 max-md:p-2 max-md:text-sm">
            <div class=" flex items-center">
              <label for="show-only-unresolved" class="relative inline-flex items-center cursor-pointer">
                <input
                  id="show-only-unresolved"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div >Show only unresolved</div>
          </div>
          <div id="show-missing-annotation-button" class="flex items-center gap-2 p-4 max-md:p-2 max-md:text-sm">
            <div class=" flex items-center">
              <label for="show-missing-annotation" class="relative inline-flex items-center cursor-pointer">
                <input
                  id="show-missing-annotation"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div >Show missing annotations</div>
          </div>
      </div>
  </div>
  `);
    const t = e.querySelector("#show-only-unresolved"),
      n = e.querySelector("#show-only-unresolved-button");
    (t.checked = Q.getState().toolbar.showOnlyUnresolved),
      n.addEventListener("click", () => {
        Ft(""), Qc();
      }),
      t.addEventListener("click", () => {
        Ft(""), Qc();
      });
    const r = e.querySelector("#show-missing-annotation"),
      i = e.querySelector("#show-missing-annotation-button");
    return (
      (r.checked = Q.getState().annotation.showMissingElements),
      i.addEventListener("click", () => {
        Ft(""), Jc(!r.checked);
      }),
      r.addEventListener("click", () => {
        Ft(""), Jc(!r.checked);
      }),
      e
    );
  }
  function $x() {
    let e = ce.getShadowRoot().getElementById("more-options-btn");
    return (
      e ||
        ((e = document.createElement("button")),
        (e.id = "more-options-btn"),
        (e.className =
          "border-none bg-transparent cursor-pointer w-max-content relative text-white")),
      (e.innerHTML = `
  <div  class="p-2 rounded-full hover:bg-white/50">
    <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 max-md:w-5 max-md:h-5">
      <path  stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  </div>`),
      e.addEventListener("click", () => {
        const t = jx();
        e.appendChild(t);
      }),
      e
    );
  }
  function za() {
    let e = ce.getShadowRoot().querySelector(".toolbarComponent");
    e == null || e.remove(),
      (e = document.createElement("div")),
      ce.addNode(e),
      (e.className =
        "toolbarComponent shadow-2xl bg-neutral-950 flex gap-2 max-md:gap-1 items-center justify-center fixed bottom-16 max-md:bottom-8 left-20 max-md:left-8 border border-white rounded-full p-2 max-md:p-1 cursor-pointer max-h-max"),
      (e.style.zIndex = "9000");
    const t = Q.getState().board.board,
      n = Fx();
    if ((e.appendChild(n), t != null && t.showInbox)) {
      const r = Yx();
      e.appendChild(r);
    }
    if (t != null && t.showInbox) {
      const r = $x();
      e.appendChild(r);
    }
  }
  const Ux = {
    cursorType: "browse",
    isInboxOpen: !1,
    deviceScreenSize: zn.DESKTOP,
    showOnlyUnresolved: !1,
  };
  function Hx(e = Ux, t) {
    switch (t.type) {
      case "TOGGLE_CURSOR_TYPE":
        return Be(e, (n) => {
          n.cursorType = n.cursorType === "browse" ? "comment" : "browse";
        });
      case "TOGGLE_SCREENSHOT_MODE":
        return Be(e, (n) => {
          n.cursorType =
            n.cursorType === "screenshot" ? "comment" : "screenshot";
        });
      case "TOGGLE_INBOX":
        return Be(e, (n) => {
          n.isInboxOpen = !n.isInboxOpen;
        });
      case "SET_DEVICE_SCREEN_SIZE":
        return Be(e, (n) => {
          n.deviceScreenSize = t.payload;
        });
      case "TOGGLE_SHOW_ONLY_UNRESOLVED":
        return Be(e, (n) => {
          n.showOnlyUnresolved = !n.showOnlyUnresolved;
        });
      default:
        return e;
    }
  }
  function ff() {
    Q.dispatch({ type: "TOGGLE_INBOX" }), za();
  }
  function hf() {
    Q.dispatch({ type: "TOGGLE_CURSOR_TYPE" }), za();
  }
  function Qc() {
    Q.dispatch({ type: "TOGGLE_SHOW_ONLY_UNRESOLVED" });
  }
  function di() {
    var h;
    let e = ce.getShadowRoot().getElementById("inbox");
    const t = Q.getState().inbox.route,
      n = Q.getState().inbox.status,
      r =
        (h = Q.getState().inbox.filterDateRange) == null
          ? void 0
          : h.split("-"),
      i = Q.getState().toolbar.isInboxOpen;
    e ||
      ((e = document.createElement("div")),
      (e.id = "inbox"),
      (e.className =
        "bg-white shadow-2xl overflow-y-auto fixed top-5 border rounded right-5 bottom-5 w-1/4 max-lg:w-1/3 max-md:w-2/5 max-sm:w-[95vw] max-sm:right-2 p-4 flex flex-col gap-2 hidden "),
      (e.style.zIndex = "800"),
      e.setAttribute("data-inbox", "true"),
      ce.addNode(e)),
      i ? e.classList.remove("hidden") : e.classList.add("hidden");
    const o = Q.getState().annotation.annotations,
      s = window.location.pathname,
      a = o.filter((v) => {
        if (
          !(t && t !== "All" && v.route !== t) &&
          !((n && n !== "All" && v.status !== n) || v._id === "NEW") &&
          !(
            r &&
            r[0].trim() !== "All" &&
            !(
              Ew(X(v.createdAt).format("MM/DD/YYYY"), r[1].trim()) &&
              Cw(X(v.createdAt).format("MM/DD/YYYY"), r[0].trim())
            )
          )
        )
          return v;
      });
    e.innerHTML = `
  <div class="w-full mb-14 ">
    <div class="flex justify-between items-center">
      <h2 class="font-display text-4xl">Inbox</h2>
      <button class="text-2xl font-normal hover:bg-none" id="close_inbox_btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="bg-neutral-100 my-4 flex flex-col p-2 border">
      <select
        name="inbox_route_filter"
        id="inbox_route_filter"
        value="${t}"
        class="w-full border p-2"
      >
        <option disabled>Filter By Routes</option>
        <option ${t === "All" ? "selected" : ""} value="All">All</option>
        <option ${t === s ? "selected" : ""} value="${s}">
          ${s === "/" ? "Homepage" : s}
        </option>
        ${[...new Set(o.map((v) => v.route))]
          .map((v) =>
            s === v
              ? null
              : `
              <option
                key="${v}"
                value="${v}"
                ${t === v ? "selected" : ""}
                class="break-words text-ellipsis max-w-[3rem]"
              >
                ${v === "/" ? "Homepage" : v}
                ${v === s ? "(Current)" : ""}
              </option>`
          )
          .join("")}
      </select>

      <select
        name="inbox_status_filter"
        id="inbox_status_filter"
        value="${n}"
        class="w-full border p-2 mt-2"
      >
        <option disabled>Filter By Status</option>
        <option ${n === null ? "selected" : ""} value="All">All</option>
        <option ${
          n === ct.RESOLVED ? "selected" : ""
        } value="RESOLVED">RESOLVED</option>
        <option ${
          n === ct.UNRESOLVED ? "selected" : ""
        } value="UNRESOLVED">UNRESOLVED</option>
      </select>

      <input type="text" name="dates" class="text-sm w-full border p-2 mt-2" placeholder="Filter By Date" value="${
        r[0] !== "All" ? r.join("-") : "Filter By Date"
      }" />
    </div>

    ${
      a.length === 0
        ? '<div class="text-center h-full flex items-center justify-center text-xl">No comments Found</div>'
        : `
        ${a
          .map((v) => {
            var f, d, y;
            return `
              <div class="flex flex-col gap-2 border p-2 rounded cursor-pointer mt-2 ${
                v.status === ct.RESOLVED ? "bg-green-100" : ""
              }" id="inbox_annotation_${v._id}">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center justify-start gap-2 w-full">
                    <img
                      src="https://source.boringavatars.com/beam/120/${
                        ((f = v.author) == null ? void 0 : f.firstName) || ""
                      }${
              ((d = v.author) == null ? void 0 : d.lastName) || ""
            }?square"
                      class="w-7 h-7 rounded"
                    ></img>
                    <div class="flex flex-col">
                      <p class="text-sm font-bold max-w-xs line-clamp-1 text-ellipsis">
                        ${v.author.firstName} ${v.author.lastName}
                      </p>
                      <span class="text-[11px] -mt-1">${new Date(
                        v.createdAt
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}</span>
                    </div>
                  </div>
                  ${
                    (y = Tf.find((w) => w.type === v.screenType)) == null
                      ? void 0
                      : y.icon
                  }
                </div>
                <p class="break-words mt-2 whitespace-pre-wrap">${v.comment}</p>
              </div>`;
          })
          .join("")}
      </div>`
    }
    <div class="flex shadow-[rgba(17,_17,_26,_0.1)_0px_0px_46px] items-center justify-center  fixed w-[calc(25%-2rem)] mx-auto rounded-b-lg max-lg:w-[calc(33%-2rem)] max-md:w-[calc(40%-2rem)] max-sm:w-[calc(95vw-2rem)] bottom-5 bg-orange-50    py-4 gap-1 max-lg:gap-0">
        <span class="text-sm max-md:text-xs text-gray-500">Powered by</span>
        <a target="_blank" href="https://annotate.site" class="text-orange-500 cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="40"
            fill="none"
            class="h-7 -ml-3 max-md:h-6"
            viewBox="0 0 90 40">
          <path
            fill="#FF7000"
            d="M40 19.798C40 30.955 30.955 40 19.798 40h-.631C8.58 40 0 31.419 0 20.833V0h20.202C31.136 0 40 8.864 40 19.798z"></path>
          <path
            fill="#000"
            d="M11.496 27l4.544-11.104h1.088L21.656 27h-1.632l-3.728-9.392h.56L13.096 27h-1.6zm2.16-2.512v-1.312h5.84v1.312h-5.84zM28.573 27v-4.432c0-.576-.182-1.05-.544-1.424-.363-.373-.832-.56-1.408-.56-.384 0-.726.085-1.024.256a1.86 1.86 0 00-.704.704c-.171.299-.256.64-.256 1.024l-.592-.336c0-.576.128-1.088.384-1.536.256-.448.613-.8 1.072-1.056.458-.267.976-.4 1.552-.4.576 0 1.082.144 1.52.432.448.288.8.667 1.056 1.136.256.459.384.95.384 1.472V27h-1.44zm-5.376 0v-7.6h1.44V27h-1.44zm14.141 0v-4.432c0-.576-.181-1.05-.544-1.424-.362-.373-.832-.56-1.408-.56-.384 0-.725.085-1.024.256a1.86 1.86 0 00-.704.704c-.17.299-.256.64-.256 1.024l-.592-.336c0-.576.128-1.088.384-1.536.256-.448.614-.8 1.072-1.056.459-.267.976-.4 1.552-.4.576 0 1.083.144 1.52.432.448.288.8.667 1.056 1.136.256.459.384.95.384 1.472V27h-1.44zm-5.376 0v-7.6h1.44V27h-1.44zm12.238.16c-.747 0-1.419-.176-2.016-.528a3.96 3.96 0 01-1.424-1.424 3.982 3.982 0 01-.528-2.032c0-.736.176-1.397.528-1.984a3.961 3.961 0 011.424-1.424c.597-.352 1.27-.528 2.016-.528.736 0 1.402.176 2 .528.608.341 1.088.81 1.44 1.408.352.598.528 1.264.528 2 0 .747-.176 1.424-.528 2.032a3.923 3.923 0 01-1.44 1.424 3.866 3.866 0 01-2 .528zm0-1.392c.48 0 .906-.112 1.28-.336a2.41 2.41 0 00.88-.912 2.78 2.78 0 00.32-1.344c0-.49-.112-.928-.336-1.312a2.294 2.294 0 00-.88-.896c-.363-.224-.784-.336-1.264-.336s-.907.112-1.28.336a2.293 2.293 0 00-.88.896c-.213.384-.32.822-.32 1.312 0 .502.107.95.32 1.344.213.384.507.688.88.912.373.224.8.336 1.28.336zM50.724 27V16.216h1.44V27h-1.44zm-1.872-6.288V19.4h5.184v1.312h-5.184zm9.592 6.448c-.693 0-1.322-.17-1.888-.512a3.832 3.832 0 01-1.344-1.424c-.32-.597-.48-1.27-.48-2.016s.16-1.418.48-2.016a3.879 3.879 0 011.328-1.424 3.528 3.528 0 011.904-.528c.576 0 1.088.123 1.536.368.459.235.827.566 1.104.992.278.416.432.901.464 1.456v2.288a2.94 2.94 0 01-.464 1.456c-.266.427-.63.763-1.088 1.008-.448.235-.965.352-1.552.352zm.24-1.36c.715 0 1.29-.24 1.728-.72.438-.49.656-1.114.656-1.872 0-.522-.101-.976-.304-1.36a2.093 2.093 0 00-.832-.912c-.362-.224-.784-.336-1.264-.336s-.906.112-1.28.336c-.362.224-.65.534-.864.928-.202.384-.304.827-.304 1.328 0 .512.102.965.304 1.36.214.384.507.688.88.912.374.224.8.336 1.28.336zm2.288 1.2v-2.048l.272-1.856-.272-1.84V19.4h1.456V27h-1.456zm4.69 0V16.216h1.44V27h-1.44zm-1.873-6.288V19.4h5.184v1.312H63.79zm9.88 6.448c-.757 0-1.44-.17-2.047-.512a3.923 3.923 0 01-1.44-1.424c-.352-.597-.528-1.274-.528-2.032 0-.747.17-1.419.512-2.016a3.875 3.875 0 011.408-1.408 3.865 3.865 0 012-.528c.704 0 1.322.16 1.856.48.544.32.965.763 1.264 1.328.31.566.464 1.206.464 1.92 0 .107-.006.224-.016.352-.01.117-.032.256-.064.416h-6.416v-1.2h5.648l-.528.464c0-.512-.09-.944-.272-1.296a1.938 1.938 0 00-.768-.832c-.33-.203-.73-.304-1.2-.304-.49 0-.923.107-1.296.32a2.185 2.185 0 00-.864.896c-.203.384-.304.838-.304 1.36 0 .534.106 1.003.32 1.408.213.395.517.704.912.928.394.213.848.32 1.36.32a2.96 2.96 0 001.168-.224c.362-.15.672-.373.928-.672l.928.944a3.53 3.53 0 01-1.344.976 4.22 4.22 0 01-1.68.336zm6.323 0c-.299 0-.55-.101-.752-.304a1.088 1.088 0 01-.288-.752c0-.299.096-.544.288-.736.203-.202.453-.304.752-.304a.97.97 0 01.736.304.97.97 0 01.304.736c0 .288-.102.539-.304.752a.97.97 0 01-.736.304zm5.792 0c-.426 0-.832-.053-1.216-.16a4.397 4.397 0 01-1.04-.48 3.744 3.744 0 01-.832-.752l.928-.928c.278.341.598.598.96.768.363.16.769.24 1.216.24.449 0 .795-.075 1.04-.224.246-.16.368-.378.368-.656 0-.277-.1-.49-.303-.64a2.165 2.165 0 00-.752-.384c-.31-.107-.64-.208-.993-.304a6.037 6.037 0 01-.975-.4 2.175 2.175 0 01-.769-.656c-.191-.277-.287-.645-.287-1.104 0-.459.111-.853.335-1.184a2.16 2.16 0 01.928-.784c.406-.181.891-.272 1.457-.272.597 0 1.125.107 1.584.32.469.203.853.512 1.151.928l-.928.928a2.132 2.132 0 00-.8-.64 2.4 2.4 0 00-1.055-.224c-.416 0-.737.075-.96.224a.666.666 0 00-.32.592c0 .256.096.454.287.592a2.6 2.6 0 00.752.352c.32.096.651.197.992.304.342.096.667.23.976.4.31.17.56.4.752.688.203.288.305.667.305 1.136 0 .715-.256 1.28-.768 1.696-.502.416-1.18.624-2.032.624zm4.429-.16v-7.6h1.44V27h-1.44zm.72-9.12a.888.888 0 01-.656-.256.943.943 0 01-.256-.672c0-.256.085-.47.256-.64a.861.861 0 01.656-.272.86.86 0 01.656.272c.17.17.256.384.256.64 0 .267-.086.49-.256.672a.888.888 0 01-.656.256zm4.01 9.12V16.216h1.44V27h-1.44zm-1.872-6.288V19.4h5.184v1.312H93.07zm9.88 6.448c-.757 0-1.44-.17-2.048-.512a3.923 3.923 0 01-1.44-1.424c-.352-.597-.528-1.274-.528-2.032 0-.747.17-1.419.512-2.016a3.872 3.872 0 011.408-1.408 3.865 3.865 0 012-.528c.704 0 1.323.16 1.856.48.544.32.965.763 1.264 1.328.309.566.464 1.206.464 1.92 0 .107-.005.224-.016.352a4.111 4.111 0 01-.064.416h-6.416v-1.2h5.648l-.528.464c0-.512-.091-.944-.272-1.296a1.933 1.933 0 00-.768-.832c-.331-.203-.731-.304-1.2-.304-.491 0-.923.107-1.296.32a2.19 2.19 0 00-.864.896c-.203.384-.304.838-.304 1.36 0 .534.107 1.003.32 1.408.213.395.517.704.912.928.395.213.848.32 1.36.32.427 0 .816-.075 1.168-.224.363-.15.672-.373.928-.672l.928.944a3.534 3.534 0 01-1.344.976 4.222 4.222 0 01-1.68.336z"></path>
        </svg>
       </a>
    </div>
  </div>
  
  `;
    const c = ce.getNode('input[name="dates"]');
    if (c)
      try {
        const v = new iy({
          element: c,
          resetButton: !0,
          maxDate: X().format("MM/DD/YYYY"),
          format: "MM/DD/YYYY",
          mobileFriendly: !0,
          singleMode: !1,
          numberOfMonths: 2,
          numberOfColumns: 2,
          autoApply: !(window.innerWidth < 500),
          plugins: window.innerWidth < 500 ? ["mobilefriendly"] : ["ranges"],
        });
        v.on("selected", (f, d) => {
          const y = f.format("MM/DD/YYYY"),
            w = d.format("MM/DD/YYYY");
          Rc(`${y} - ${w}`);
        }),
          window.addEventListener("scroll", () => {
            window.innerWidth > 400 && v.hide();
          }),
          v.on("clear:selection", () => {
            Rc("All"), v.hide();
          }),
          c.addEventListener("click", () => {
            Q.getState().toolbar.cursorType === "comment" && (hf(), Ga());
          });
      } catch {}
    const l = ce.getShadowRoot().getElementById("close_inbox_btn");
    if (!l) return;
    l.addEventListener("click", () => {
      ff();
    }),
      o.forEach((v) => {
        const f = ce
          .getShadowRoot()
          .getElementById(`inbox_annotation_${v._id}`);
        f &&
          f.addEventListener("click", () => {
            window.innerWidth > 400 && di(),
              (window.location.href = window.origin + v.route + `?a=${v._id}`);
          });
      });
    const u = ce.getShadowRoot().getElementById("inbox_route_filter");
    u &&
      u.addEventListener("change", (v) => {
        v.preventDefault();
        const f = v.target.value;
        (u.value = f),
          f !== null && (Q.dispatch({ type: "SET_ROUTE", payload: f }), di());
      });
    const m = ce.getShadowRoot().getElementById("inbox_status_filter");
    m &&
      m.addEventListener("change", (v) => {
        v.preventDefault();
        const f = v.target.value;
        (m.value = f),
          f !== null && (Q.dispatch({ type: "SET_STATUS", payload: f }), di());
      });
  }
  const zx = { board: null, currentRoute: "" };
  function Wx(e = zx, t) {
    switch (t.type) {
      case "SET_BOARD":
        return Be(e, (n) => {
          n.board = t.payload;
        });
      case "SET_CURRENT_ROUTE":
        return Be(e, (n) => {
          n.currentRoute = t.payload;
        });
      default:
        return e;
    }
  }
  function Vx(e) {
    Q.dispatch({ type: "SET_BOARD", payload: e });
  }
  function Jr(e) {
    Q.dispatch({ type: "SET_CURRENT_ROUTE", payload: e });
  }
  let Wa = window.sessionStorage;
  typeof Storage > "u" &&
    (Wa = {
      getItem: () => "undefined",
      setItem: () => !0,
      clear: () => !0,
      removeItem: () => !0,
      length: 0,
      key: () => "undefined",
    });
  const qx = () => {
      try {
        const e = Wa.getItem("ann-site");
        return e === null ? void 0 : JSON.parse(e);
      } catch {
        return;
      }
    },
    Gx = (e) => {
      try {
        const t = JSON.stringify(e);
        Wa.setItem("ann-site", t);
      } catch {}
    },
    Zx = { user: null };
  function Kx(e = Zx, t) {
    switch (t.type) {
      case "ADD_USER":
        return Be(e, (n) => {
          n.user = {
            _id: t.payload._id,
            firstName: t.payload.firstName,
            lastName: t.payload.lastName,
            email: t.payload.email,
            userSub: null,
          };
        });
      case "SET_USER_SUB":
        return Be(e, (n) => {
          n.user && (n.user = { ...n.user, userSub: t.payload.userSub });
        });
      default:
        return e;
    }
  }
  async function Xx(e, t, n) {
    const r = await It.post("webapp/user", {
      firstName: e,
      lastName: t,
      email: n,
      isGuest: !0,
    });
    Q.dispatch({
      type: "ADD_USER",
      payload: {
        _id: r.data._id,
        firstName: r.data.firstName,
        lastName: r.data.lastName,
        email: r.data.email,
      },
    });
    const o = new URL(window.location.href).searchParams.get("a");
    o && Af(o);
  }
  async function Jx(e) {
    Q.dispatch({ type: "SET_USER_SUB", payload: { userSub: e } });
  }
  const Qx = Qv({
      toolbar: Hx,
      annotation: Nx,
      user: Kx,
      board: Wx,
      inbox: gy,
    }),
    eb = qx(),
    Q = Xv(Qx, eb, bd(ey(ty)));
  Q.subscribe(() => {
    Gx(Q.getState()), Oi(), Mi();
    const e = Q.getState().board.board;
    e != null && e.showInbox && di();
  });
  function tb() {
    let e = ce.getShadowRoot().getElementById("userModel"),
      t = ce.getShadowRoot().getElementById("userModalContent");
    e ||
      ((e = document.createElement("div")),
      e.setAttribute("data-userModel", "true"),
      (e.id = "userModel"),
      e.classList.add(
        "fixed",
        "inset-0",
        "flex",
        "items-center",
        "justify-center",
        "bg-opacity-50",
        "bg-gray-900",
        "cursor-pointer"
      ),
      (e.style.zIndex = "1000"),
      t || (t = document.createElement("div")),
      (t.id = "userModalContent"),
      (t.className =
        "w-2/5 max-md:w-4/5 max-w-[500px] bg-white relative shadow-md rounded-xl border")),
      t &&
        ((t.innerHTML = `
      <div class="w-full">
      <div class="flex justify-between rounded-t-xl  items-center bg-orange-50 text-orange-900 px-4 mb-4 transform overflow-hidden  align-middle ">
        <h1 class="text-2xl  w-full text-center font-semibold text-orange-950     border-orange-100  border-b-2 py-3">Add User Profile</h1>
        <button id="close-user-model">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form  id="user_add_form" class="flex flex-col gap-2 p-4">
        <label  class="font-bold p-0">First Name</label>
        <input  type="text" placeholder="First Name" class="border-none outline-none bg-gray-100 rounded-md p-2 py-3" />
        <label  class="font-bold p-0 mt-1">Last Name</label>
        <input  type="text" placeholder="Last Name" class="border-none outline-none bg-gray-100 rounded-md p-2 py-3" />
        <label  class="font-bold p-0 mt-1">Email</label>
        <input  type="email" placeholder="Email" class="border-none outline-none bg-gray-100 rounded-md p-2 py-3" />
        <button  type="submit" class="bg-orange-100 text-orange-900 rounded-md px-10 py-3 mt-2 mb-4 max-w-max self-start font-bold">Add</button>
      </form>

      <div class="bg-white rounded-b-xl  border-t border-orange-100 pt-4 p-2 pb-4  sticky -bottom-4 flex items-center justify-center gap-2">
        <span class="text-sm max-md:text-xs text-gray-500"> Powered by </span> <a target="_blank" href="https://annotate.site" class="text-orange-500 cursor-pointer"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="119"
          height="40"
          fill="none"
          class="h-8 -ml-3 max-md:h-7"
          viewBox="0 0 119 40">
          <path
            fill="#FF7000"
            d="M40 19.798C40 30.955 30.955 40 19.798 40h-.631C8.58 40 0 31.419 0 20.833V0h20.202C31.136 0 40 8.864 40 19.798z"></path>
          <path
            fill="#000"
            d="M11.496 27l4.544-11.104h1.088L21.656 27h-1.632l-3.728-9.392h.56L13.096 27h-1.6zm2.16-2.512v-1.312h5.84v1.312h-5.84zM28.573 27v-4.432c0-.576-.182-1.05-.544-1.424-.363-.373-.832-.56-1.408-.56-.384 0-.726.085-1.024.256a1.86 1.86 0 00-.704.704c-.171.299-.256.64-.256 1.024l-.592-.336c0-.576.128-1.088.384-1.536.256-.448.613-.8 1.072-1.056.458-.267.976-.4 1.552-.4.576 0 1.082.144 1.52.432.448.288.8.667 1.056 1.136.256.459.384.95.384 1.472V27h-1.44zm-5.376 0v-7.6h1.44V27h-1.44zm14.141 0v-4.432c0-.576-.181-1.05-.544-1.424-.362-.373-.832-.56-1.408-.56-.384 0-.725.085-1.024.256a1.86 1.86 0 00-.704.704c-.17.299-.256.64-.256 1.024l-.592-.336c0-.576.128-1.088.384-1.536.256-.448.614-.8 1.072-1.056.459-.267.976-.4 1.552-.4.576 0 1.083.144 1.52.432.448.288.8.667 1.056 1.136.256.459.384.95.384 1.472V27h-1.44zm-5.376 0v-7.6h1.44V27h-1.44zm12.238.16c-.747 0-1.419-.176-2.016-.528a3.96 3.96 0 01-1.424-1.424 3.982 3.982 0 01-.528-2.032c0-.736.176-1.397.528-1.984a3.961 3.961 0 011.424-1.424c.597-.352 1.27-.528 2.016-.528.736 0 1.402.176 2 .528.608.341 1.088.81 1.44 1.408.352.598.528 1.264.528 2 0 .747-.176 1.424-.528 2.032a3.923 3.923 0 01-1.44 1.424 3.866 3.866 0 01-2 .528zm0-1.392c.48 0 .906-.112 1.28-.336a2.41 2.41 0 00.88-.912 2.78 2.78 0 00.32-1.344c0-.49-.112-.928-.336-1.312a2.294 2.294 0 00-.88-.896c-.363-.224-.784-.336-1.264-.336s-.907.112-1.28.336a2.293 2.293 0 00-.88.896c-.213.384-.32.822-.32 1.312 0 .502.107.95.32 1.344.213.384.507.688.88.912.373.224.8.336 1.28.336zM50.724 27V16.216h1.44V27h-1.44zm-1.872-6.288V19.4h5.184v1.312h-5.184zm9.592 6.448c-.693 0-1.322-.17-1.888-.512a3.832 3.832 0 01-1.344-1.424c-.32-.597-.48-1.27-.48-2.016s.16-1.418.48-2.016a3.879 3.879 0 011.328-1.424 3.528 3.528 0 011.904-.528c.576 0 1.088.123 1.536.368.459.235.827.566 1.104.992.278.416.432.901.464 1.456v2.288a2.94 2.94 0 01-.464 1.456c-.266.427-.63.763-1.088 1.008-.448.235-.965.352-1.552.352zm.24-1.36c.715 0 1.29-.24 1.728-.72.438-.49.656-1.114.656-1.872 0-.522-.101-.976-.304-1.36a2.093 2.093 0 00-.832-.912c-.362-.224-.784-.336-1.264-.336s-.906.112-1.28.336c-.362.224-.65.534-.864.928-.202.384-.304.827-.304 1.328 0 .512.102.965.304 1.36.214.384.507.688.88.912.374.224.8.336 1.28.336zm2.288 1.2v-2.048l.272-1.856-.272-1.84V19.4h1.456V27h-1.456zm4.69 0V16.216h1.44V27h-1.44zm-1.873-6.288V19.4h5.184v1.312H63.79zm9.88 6.448c-.757 0-1.44-.17-2.047-.512a3.923 3.923 0 01-1.44-1.424c-.352-.597-.528-1.274-.528-2.032 0-.747.17-1.419.512-2.016a3.875 3.875 0 011.408-1.408 3.865 3.865 0 012-.528c.704 0 1.322.16 1.856.48.544.32.965.763 1.264 1.328.31.566.464 1.206.464 1.92 0 .107-.006.224-.016.352-.01.117-.032.256-.064.416h-6.416v-1.2h5.648l-.528.464c0-.512-.09-.944-.272-1.296a1.938 1.938 0 00-.768-.832c-.33-.203-.73-.304-1.2-.304-.49 0-.923.107-1.296.32a2.185 2.185 0 00-.864.896c-.203.384-.304.838-.304 1.36 0 .534.106 1.003.32 1.408.213.395.517.704.912.928.394.213.848.32 1.36.32a2.96 2.96 0 001.168-.224c.362-.15.672-.373.928-.672l.928.944a3.53 3.53 0 01-1.344.976 4.22 4.22 0 01-1.68.336zm6.323 0c-.299 0-.55-.101-.752-.304a1.088 1.088 0 01-.288-.752c0-.299.096-.544.288-.736.203-.202.453-.304.752-.304a.97.97 0 01.736.304.97.97 0 01.304.736c0 .288-.102.539-.304.752a.97.97 0 01-.736.304zm5.792 0c-.426 0-.832-.053-1.216-.16a4.397 4.397 0 01-1.04-.48 3.744 3.744 0 01-.832-.752l.928-.928c.278.341.598.598.96.768.363.16.769.24 1.216.24.449 0 .795-.075 1.04-.224.246-.16.368-.378.368-.656 0-.277-.1-.49-.303-.64a2.165 2.165 0 00-.752-.384c-.31-.107-.64-.208-.993-.304a6.037 6.037 0 01-.975-.4 2.175 2.175 0 01-.769-.656c-.191-.277-.287-.645-.287-1.104 0-.459.111-.853.335-1.184a2.16 2.16 0 01.928-.784c.406-.181.891-.272 1.457-.272.597 0 1.125.107 1.584.32.469.203.853.512 1.151.928l-.928.928a2.132 2.132 0 00-.8-.64 2.4 2.4 0 00-1.055-.224c-.416 0-.737.075-.96.224a.666.666 0 00-.32.592c0 .256.096.454.287.592a2.6 2.6 0 00.752.352c.32.096.651.197.992.304.342.096.667.23.976.4.31.17.56.4.752.688.203.288.305.667.305 1.136 0 .715-.256 1.28-.768 1.696-.502.416-1.18.624-2.032.624zm4.429-.16v-7.6h1.44V27h-1.44zm.72-9.12a.888.888 0 01-.656-.256.943.943 0 01-.256-.672c0-.256.085-.47.256-.64a.861.861 0 01.656-.272.86.86 0 01.656.272c.17.17.256.384.256.64 0 .267-.086.49-.256.672a.888.888 0 01-.656.256zm4.01 9.12V16.216h1.44V27h-1.44zm-1.872-6.288V19.4h5.184v1.312H93.07zm9.88 6.448c-.757 0-1.44-.17-2.048-.512a3.923 3.923 0 01-1.44-1.424c-.352-.597-.528-1.274-.528-2.032 0-.747.17-1.419.512-2.016a3.872 3.872 0 011.408-1.408 3.865 3.865 0 012-.528c.704 0 1.323.16 1.856.48.544.32.965.763 1.264 1.328.309.566.464 1.206.464 1.92 0 .107-.005.224-.016.352a4.111 4.111 0 01-.064.416h-6.416v-1.2h5.648l-.528.464c0-.512-.091-.944-.272-1.296a1.933 1.933 0 00-.768-.832c-.331-.203-.731-.304-1.2-.304-.491 0-.923.107-1.296.32a2.19 2.19 0 00-.864.896c-.203.384-.304.838-.304 1.36 0 .534.107 1.003.32 1.408.213.395.517.704.912.928.395.213.848.32 1.36.32.427 0 .816-.075 1.168-.224.363-.15.672-.373.928-.672l.928.944a3.534 3.534 0 01-1.344.976 4.222 4.222 0 01-1.68.336z"></path>
        </svg> <a/>
      </div>
    </div>
      `),
        e.appendChild(t)),
      ce.addNode(e);
    const n = ce.getShadowRoot().getElementById("user_add_form");
    if (!n) return;
    const r = ce.getShadowRoot().getElementById("close-user-model");
    r &&
      r.addEventListener("click", () => {
        e == null || e.remove();
      }),
      n.addEventListener("submit", async (i) => {
        i.preventDefault();
        const o = n.querySelector('input[placeholder="First Name"]').value,
          s = n.querySelector('input[placeholder="Last Name"]').value,
          a = n.querySelector('input[placeholder="Email"]').value;
        if (!o || !s || !a) return alert("Please fill all the fields");
        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(a))
          return alert("Please enter a valid email address");
        await Xx(o, s, a), e == null || e.remove();
      });
  }
  var pf = "en",
    Va = {},
    Hs = {};
  function mf() {
    return pf;
  }
  function nb(e) {
    pf = e;
  }
  function rb(e) {
    return Va[e];
  }
  function ib(e) {
    if (!e) throw new Error("No locale data passed");
    (Va[e.locale] = e), (Hs[e.locale.toLowerCase()] = e.locale);
  }
  function eu(e) {
    if (Va[e]) return e;
    if (Hs[e.toLowerCase()]) return Hs[e.toLowerCase()];
  }
  function gf(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.localeMatcher || "lookup";
    switch (n) {
      case "lookup":
        return tu(e);
      case "best fit":
        return tu(e);
      default:
        throw new RangeError('Invalid "localeMatcher" option: '.concat(n));
    }
  }
  function tu(e) {
    var t = eu(e);
    if (t) return t;
    for (var n = e.split("-"); e.length > 1; ) {
      n.pop(), (e = n.join("-"));
      var r = eu(e);
      if (r) return r;
    }
  }
  var N = {
    af: function (t) {
      return t == 1 ? "one" : "other";
    },
    am: function (t) {
      return t >= 0 && t <= 1 ? "one" : "other";
    },
    ar: function (t) {
      var n = String(t).split("."),
        r = Number(n[0]) == t,
        i = r && n[0].slice(-2);
      return t == 0
        ? "zero"
        : t == 1
        ? "one"
        : t == 2
        ? "two"
        : i >= 3 && i <= 10
        ? "few"
        : i >= 11 && i <= 99
        ? "many"
        : "other";
    },
    ast: function (t) {
      var n = String(t).split("."),
        r = !n[1];
      return t == 1 && r ? "one" : "other";
    },
    be: function (t) {
      var n = String(t).split("."),
        r = Number(n[0]) == t,
        i = r && n[0].slice(-1),
        o = r && n[0].slice(-2);
      return i == 1 && o != 11
        ? "one"
        : i >= 2 && i <= 4 && (o < 12 || o > 14)
        ? "few"
        : (r && i == 0) || (i >= 5 && i <= 9) || (o >= 11 && o <= 14)
        ? "many"
        : "other";
    },
    br: function (t) {
      var n = String(t).split("."),
        r = Number(n[0]) == t,
        i = r && n[0].slice(-1),
        o = r && n[0].slice(-2),
        s = r && n[0].slice(-6);
      return i == 1 && o != 11 && o != 71 && o != 91
        ? "one"
        : i == 2 && o != 12 && o != 72 && o != 92
        ? "two"
        : (i == 3 || i == 4 || i == 9) &&
          (o < 10 || o > 19) &&
          (o < 70 || o > 79) &&
          (o < 90 || o > 99)
        ? "few"
        : t != 0 && r && s == 0
        ? "many"
        : "other";
    },
    bs: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = n[1] || "",
        o = !n[1],
        s = r.slice(-1),
        a = r.slice(-2),
        c = i.slice(-1),
        l = i.slice(-2);
      return (o && s == 1 && a != 11) || (c == 1 && l != 11)
        ? "one"
        : (o && s >= 2 && s <= 4 && (a < 12 || a > 14)) ||
          (c >= 2 && c <= 4 && (l < 12 || l > 14))
        ? "few"
        : "other";
    },
    ca: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-6);
      return t == 1 && i ? "one" : r != 0 && o == 0 && i ? "many" : "other";
    },
    ceb: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = n[1] || "",
        o = !n[1],
        s = r.slice(-1),
        a = i.slice(-1);
      return (o && (r == 1 || r == 2 || r == 3)) ||
        (o && s != 4 && s != 6 && s != 9) ||
        (!o && a != 4 && a != 6 && a != 9)
        ? "one"
        : "other";
    },
    cs: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1];
      return t == 1 && i
        ? "one"
        : r >= 2 && r <= 4 && i
        ? "few"
        : i
        ? "other"
        : "many";
    },
    cy: function (t) {
      return t == 0
        ? "zero"
        : t == 1
        ? "one"
        : t == 2
        ? "two"
        : t == 3
        ? "few"
        : t == 6
        ? "many"
        : "other";
    },
    da: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = Number(n[0]) == t;
      return t == 1 || (!i && (r == 0 || r == 1)) ? "one" : "other";
    },
    dsb: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = n[1] || "",
        o = !n[1],
        s = r.slice(-2),
        a = i.slice(-2);
      return (o && s == 1) || a == 1
        ? "one"
        : (o && s == 2) || a == 2
        ? "two"
        : (o && (s == 3 || s == 4)) || a == 3 || a == 4
        ? "few"
        : "other";
    },
    dz: function (t) {
      return "other";
    },
    es: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-6);
      return t == 1 ? "one" : r != 0 && o == 0 && i ? "many" : "other";
    },
    ff: function (t) {
      return t >= 0 && t < 2 ? "one" : "other";
    },
    fr: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-6);
      return t >= 0 && t < 2 ? "one" : r != 0 && o == 0 && i ? "many" : "other";
    },
    ga: function (t) {
      var n = String(t).split("."),
        r = Number(n[0]) == t;
      return t == 1
        ? "one"
        : t == 2
        ? "two"
        : r && t >= 3 && t <= 6
        ? "few"
        : r && t >= 7 && t <= 10
        ? "many"
        : "other";
    },
    gd: function (t) {
      var n = String(t).split("."),
        r = Number(n[0]) == t;
      return t == 1 || t == 11
        ? "one"
        : t == 2 || t == 12
        ? "two"
        : (r && t >= 3 && t <= 10) || (r && t >= 13 && t <= 19)
        ? "few"
        : "other";
    },
    he: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1];
      return (r == 1 && i) || (r == 0 && !i)
        ? "one"
        : r == 2 && i
        ? "two"
        : "other";
    },
    is: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = (n[1] || "").replace(/0+$/, ""),
        o = Number(n[0]) == t,
        s = r.slice(-1),
        a = r.slice(-2);
      return (o && s == 1 && a != 11) || (i % 10 == 1 && i % 100 != 11)
        ? "one"
        : "other";
    },
    ksh: function (t) {
      return t == 0 ? "zero" : t == 1 ? "one" : "other";
    },
    lt: function (t) {
      var n = String(t).split("."),
        r = n[1] || "",
        i = Number(n[0]) == t,
        o = i && n[0].slice(-1),
        s = i && n[0].slice(-2);
      return o == 1 && (s < 11 || s > 19)
        ? "one"
        : o >= 2 && o <= 9 && (s < 11 || s > 19)
        ? "few"
        : r != 0
        ? "many"
        : "other";
    },
    lv: function (t) {
      var n = String(t).split("."),
        r = n[1] || "",
        i = r.length,
        o = Number(n[0]) == t,
        s = o && n[0].slice(-1),
        a = o && n[0].slice(-2),
        c = r.slice(-2),
        l = r.slice(-1);
      return (o && s == 0) ||
        (a >= 11 && a <= 19) ||
        (i == 2 && c >= 11 && c <= 19)
        ? "zero"
        : (s == 1 && a != 11) ||
          (i == 2 && l == 1 && c != 11) ||
          (i != 2 && l == 1)
        ? "one"
        : "other";
    },
    mk: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = n[1] || "",
        o = !n[1],
        s = r.slice(-1),
        a = r.slice(-2),
        c = i.slice(-1),
        l = i.slice(-2);
      return (o && s == 1 && a != 11) || (c == 1 && l != 11) ? "one" : "other";
    },
    mt: function (t) {
      var n = String(t).split("."),
        r = Number(n[0]) == t,
        i = r && n[0].slice(-2);
      return t == 1
        ? "one"
        : t == 2
        ? "two"
        : t == 0 || (i >= 3 && i <= 10)
        ? "few"
        : i >= 11 && i <= 19
        ? "many"
        : "other";
    },
    pa: function (t) {
      return t == 0 || t == 1 ? "one" : "other";
    },
    pl: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-1),
        s = r.slice(-2);
      return t == 1 && i
        ? "one"
        : i && o >= 2 && o <= 4 && (s < 12 || s > 14)
        ? "few"
        : (i && r != 1 && (o == 0 || o == 1)) ||
          (i && o >= 5 && o <= 9) ||
          (i && s >= 12 && s <= 14)
        ? "many"
        : "other";
    },
    pt: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-6);
      return r == 0 || r == 1
        ? "one"
        : r != 0 && o == 0 && i
        ? "many"
        : "other";
    },
    ro: function (t) {
      var n = String(t).split("."),
        r = !n[1],
        i = Number(n[0]) == t,
        o = i && n[0].slice(-2);
      return t == 1 && r
        ? "one"
        : !r || t == 0 || (t != 1 && o >= 1 && o <= 19)
        ? "few"
        : "other";
    },
    ru: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-1),
        s = r.slice(-2);
      return i && o == 1 && s != 11
        ? "one"
        : i && o >= 2 && o <= 4 && (s < 12 || s > 14)
        ? "few"
        : (i && o == 0) || (i && o >= 5 && o <= 9) || (i && s >= 11 && s <= 14)
        ? "many"
        : "other";
    },
    se: function (t) {
      return t == 1 ? "one" : t == 2 ? "two" : "other";
    },
    si: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = n[1] || "";
      return t == 0 || t == 1 || (r == 0 && i == 1) ? "one" : "other";
    },
    sl: function (t) {
      var n = String(t).split("."),
        r = n[0],
        i = !n[1],
        o = r.slice(-2);
      return i && o == 1
        ? "one"
        : i && o == 2
        ? "two"
        : (i && (o == 3 || o == 4)) || !i
        ? "few"
        : "other";
    },
  };
  N.as = N.am;
  N.az = N.af;
  N.bg = N.af;
  N.bn = N.am;
  N.brx = N.af;
  N.ce = N.af;
  N.chr = N.af;
  N.de = N.ast;
  N.ee = N.af;
  N.el = N.af;
  N.en = N.ast;
  N.et = N.ast;
  N.eu = N.af;
  N.fa = N.am;
  N.fi = N.ast;
  N.fil = N.ceb;
  N.fo = N.af;
  N.fur = N.af;
  N.fy = N.ast;
  N.gl = N.ast;
  N.gu = N.am;
  N.ha = N.af;
  N.hi = N.am;
  N.hr = N.bs;
  N.hsb = N.dsb;
  N.hu = N.af;
  N.hy = N.ff;
  N.ia = N.ast;
  N.id = N.dz;
  N.ig = N.dz;
  N.it = N.ca;
  N.ja = N.dz;
  N.jgo = N.af;
  N.jv = N.dz;
  N.ka = N.af;
  N.kea = N.dz;
  N.kk = N.af;
  N.kl = N.af;
  N.km = N.dz;
  N.kn = N.am;
  N.ko = N.dz;
  N.ks = N.af;
  N.ku = N.af;
  N.ky = N.af;
  N.lb = N.af;
  N.lkt = N.dz;
  N.lo = N.dz;
  N.ml = N.af;
  N.mn = N.af;
  N.mr = N.af;
  N.ms = N.dz;
  N.my = N.dz;
  N.nb = N.af;
  N.ne = N.af;
  N.nl = N.ast;
  N.nn = N.af;
  N.no = N.af;
  N.or = N.af;
  N.pcm = N.am;
  N.ps = N.af;
  N.rm = N.af;
  N.sah = N.dz;
  N.sc = N.ast;
  N.sd = N.af;
  N.sk = N.cs;
  N.so = N.af;
  N.sq = N.af;
  N.sr = N.bs;
  N.su = N.dz;
  N.sv = N.ast;
  N.sw = N.ast;
  N.ta = N.af;
  N.te = N.af;
  N.th = N.dz;
  N.ti = N.pa;
  N.tk = N.af;
  N.to = N.dz;
  N.tr = N.af;
  N.ug = N.af;
  N.uk = N.ru;
  N.ur = N.ast;
  N.uz = N.af;
  N.vi = N.dz;
  N.wae = N.af;
  N.wo = N.dz;
  N.xh = N.af;
  N.yi = N.ast;
  N.yo = N.dz;
  N.yue = N.dz;
  N.zh = N.dz;
  N.zu = N.am;
  const nu = N;
  function ru(e) {
    return e === "pt-PT" ? e : sb(e);
  }
  var ob = /^([a-z0-9]+)/i;
  function sb(e) {
    var t = e.match(ob);
    if (!t) throw new TypeError("Invalid locale: ".concat(e));
    return t[1];
  }
  function ab(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function iu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function lb(e, t, n) {
    return (
      t && iu(e.prototype, t),
      n && iu(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var zs = (function () {
    function e(t, n) {
      ab(this, e);
      var r = e.supportedLocalesOf(t);
      if (r.length === 0) throw new RangeError("Unsupported locale: " + t);
      if (n && n.type !== "cardinal")
        throw new RangeError('Only "cardinal" "type" is supported');
      this.$ = nu[ru(r[0])];
    }
    return (
      lb(
        e,
        [
          {
            key: "select",
            value: function (n) {
              return this.$(n);
            },
          },
        ],
        [
          {
            key: "supportedLocalesOf",
            value: function (n) {
              return (
                typeof n == "string" && (n = [n]),
                n.filter(function (r) {
                  return nu[ru(r)];
                })
              );
            },
          },
        ]
      ),
      e
    );
  })();
  function Ws(e) {
    "@babel/helpers - typeof";
    return (
      (Ws =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Ws(e)
    );
  }
  function ou(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function su(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? ou(Object(n), !0).forEach(function (r) {
            cb(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ou(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function cb(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function au(e, t) {
    return hb(e) || fb(e, t) || db(e, t) || ub();
  }
  function ub() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function db(e, t) {
    if (e) {
      if (typeof e == "string") return lu(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return lu(e, t);
    }
  }
  function lu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function fb(e, t) {
    var n =
      e == null
        ? null
        : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
      var r = [],
        i = !0,
        o = !1,
        s,
        a;
      try {
        for (
          n = n.call(e);
          !(i = (s = n.next()).done) &&
          (r.push(s.value), !(t && r.length === t));
          i = !0
        );
      } catch (c) {
        (o = !0), (a = c);
      } finally {
        try {
          !i && n.return != null && n.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    }
  }
  function hb(e) {
    if (Array.isArray(e)) return e;
  }
  function pb(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function cu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function mb(e, t, n) {
    return (
      t && cu(e.prototype, t),
      n && cu(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var gb = [
      "second",
      "minute",
      "hour",
      "day",
      "week",
      "month",
      "quarter",
      "year",
    ],
    vb = ["auto", "always"],
    yb = ["long", "short", "narrow"],
    xb = ["lookup", "best fit"],
    yn = (function () {
      function e() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        pb(this, e);
        var r = n.numeric,
          i = n.style,
          o = n.localeMatcher;
        if (
          ((this.numeric = "always"),
          (this.style = "long"),
          (this.localeMatcher = "lookup"),
          r !== void 0)
        ) {
          if (vb.indexOf(r) < 0)
            throw new RangeError('Invalid "numeric" option: '.concat(r));
          this.numeric = r;
        }
        if (i !== void 0) {
          if (yb.indexOf(i) < 0)
            throw new RangeError('Invalid "style" option: '.concat(i));
          this.style = i;
        }
        if (o !== void 0) {
          if (xb.indexOf(o) < 0)
            throw new RangeError('Invalid "localeMatcher" option: '.concat(o));
          this.localeMatcher = o;
        }
        if (
          (typeof t == "string" && (t = [t]),
          t.push(mf()),
          (this.locale = e.supportedLocalesOf(t, {
            localeMatcher: this.localeMatcher,
          })[0]),
          !this.locale)
        )
          throw new Error("No supported locale was found");
        zs.supportedLocalesOf(this.locale).length > 0
          ? (this.pluralRules = new zs(this.locale))
          : console.warn('"'.concat(this.locale, '" locale is not supported')),
          typeof Intl < "u" && Intl.NumberFormat
            ? ((this.numberFormat = new Intl.NumberFormat(this.locale)),
              (this.numberingSystem =
                this.numberFormat.resolvedOptions().numberingSystem))
            : (this.numberingSystem = "latn"),
          (this.locale = gf(this.locale, {
            localeMatcher: this.localeMatcher,
          }));
      }
      return (
        mb(e, [
          {
            key: "format",
            value: function () {
              var n = uu(arguments),
                r = au(n, 2),
                i = r[0],
                o = r[1];
              return this.getRule(i, o).replace(
                "{0}",
                this.formatNumber(Math.abs(i))
              );
            },
          },
          {
            key: "formatToParts",
            value: function () {
              var n = uu(arguments),
                r = au(n, 2),
                i = r[0],
                o = r[1],
                s = this.getRule(i, o),
                a = s.indexOf("{0}");
              if (a < 0) return [{ type: "literal", value: s }];
              var c = [];
              return (
                a > 0 && c.push({ type: "literal", value: s.slice(0, a) }),
                (c = c.concat(
                  this.formatNumberToParts(Math.abs(i)).map(function (l) {
                    return su(su({}, l), {}, { unit: o });
                  })
                )),
                a + 3 < s.length - 1 &&
                  c.push({ type: "literal", value: s.slice(a + 3) }),
                c
              );
            },
          },
          {
            key: "getRule",
            value: function (n, r) {
              var i = rb(this.locale)[this.style][r];
              if (typeof i == "string") return i;
              if (this.numeric === "auto") {
                if (n === -2 || n === -1) {
                  var o =
                    i["previous".concat(n === -1 ? "" : "-" + Math.abs(n))];
                  if (o) return o;
                } else if (n === 1 || n === 2) {
                  var s = i["next".concat(n === 1 ? "" : "-" + Math.abs(n))];
                  if (s) return s;
                } else if (n === 0 && i.current) return i.current;
              }
              var a = i[kb(n) ? "past" : "future"];
              if (typeof a == "string") return a;
              var c =
                (this.pluralRules && this.pluralRules.select(Math.abs(n))) ||
                "other";
              return a[c] || a.other;
            },
          },
          {
            key: "formatNumber",
            value: function (n) {
              return this.numberFormat
                ? this.numberFormat.format(n)
                : String(n);
            },
          },
          {
            key: "formatNumberToParts",
            value: function (n) {
              return this.numberFormat && this.numberFormat.formatToParts
                ? this.numberFormat.formatToParts(n)
                : [{ type: "integer", value: this.formatNumber(n) }];
            },
          },
          {
            key: "resolvedOptions",
            value: function () {
              return {
                locale: this.locale,
                style: this.style,
                numeric: this.numeric,
                numberingSystem: this.numberingSystem,
              };
            },
          },
        ]),
        e
      );
    })();
  yn.supportedLocalesOf = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof e == "string") e = [e];
    else if (!Array.isArray(e))
      throw new TypeError('Invalid "locales" argument');
    return e.filter(function (n) {
      return gf(n, t);
    });
  };
  yn.addLocale = ib;
  yn.setDefaultLocale = nb;
  yn.getDefaultLocale = mf;
  yn.PluralRules = zs;
  var ls = 'Invalid "unit" argument';
  function bb(e) {
    if (Ws(e) === "symbol") throw new TypeError(ls);
    if (typeof e != "string")
      throw new RangeError("".concat(ls, ": ").concat(e));
    if (
      (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)),
      gb.indexOf(e) < 0)
    )
      throw new RangeError("".concat(ls, ": ").concat(e));
    return e;
  }
  var wb = 'Invalid "number" argument';
  function _b(e) {
    if (((e = Number(e)), Number.isFinite && !Number.isFinite(e)))
      throw new RangeError("".concat(wb, ": ").concat(e));
    return e;
  }
  function Sb(e) {
    return 1 / e === -1 / 0;
  }
  function kb(e) {
    return e < 0 || (e === 0 && Sb(e));
  }
  function uu(e) {
    if (e.length < 2) throw new TypeError('"unit" argument is required');
    return [_b(e[0]), bb(e[1])];
  }
  function Di(e) {
    "@babel/helpers - typeof";
    return (
      (Di =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Di(e)
    );
  }
  function Eb(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function du(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Cb(e, t, n) {
    return (
      t && du(e.prototype, t),
      n && du(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var fu = (function () {
    function e() {
      Eb(this, e), (this.cache = {});
    }
    return (
      Cb(e, [
        {
          key: "get",
          value: function () {
            for (
              var n = this.cache, r = arguments.length, i = new Array(r), o = 0;
              o < r;
              o++
            )
              i[o] = arguments[o];
            for (var s = 0, a = i; s < a.length; s++) {
              var c = a[s];
              if (Di(n) !== "object") return;
              n = n[c];
            }
            return n;
          },
        },
        {
          key: "put",
          value: function () {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            for (
              var o = r.pop(), s = r.pop(), a = this.cache, c = 0, l = r;
              c < l.length;
              c++
            ) {
              var u = l[c];
              Di(a[u]) !== "object" && (a[u] = {}), (a = a[u]);
            }
            return (a[s] = o);
          },
        },
      ]),
      e
    );
  })();
  function Vs(e) {
    "@babel/helpers - typeof";
    return (
      (Vs =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Vs(e)
    );
  }
  function Db(e, t) {
    var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = Tb(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Tb(e, t) {
    if (e) {
      if (typeof e == "string") return hu(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return hu(e, t);
    }
  }
  function hu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Ab(e, t) {
    for (var n = Db(e), r; !(r = n()).done; ) {
      var i = r.value;
      if (t(i)) return i;
      for (var o = i.split("-"); o.length > 1; )
        if ((o.pop(), (i = o.join("-")), t(i))) return i;
    }
    throw new Error(
      "No locale data has been registered for any of the locales: ".concat(
        e.join(", ")
      )
    );
  }
  function Ob() {
    var e = (typeof Intl > "u" ? "undefined" : Vs(Intl)) === "object";
    return e && typeof Intl.DateTimeFormat == "function";
  }
  function qs(e) {
    "@babel/helpers - typeof";
    return (
      (qs =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      qs(e)
    );
  }
  function Mb(e) {
    return (
      Ib(e) &&
      (Array.isArray(e.steps) ||
        Array.isArray(e.gradation) ||
        Array.isArray(e.flavour) ||
        typeof e.flavour == "string" ||
        Array.isArray(e.labels) ||
        typeof e.labels == "string" ||
        Array.isArray(e.units) ||
        typeof e.custom == "function")
    );
  }
  var Nb = {}.constructor;
  function Ib(e) {
    return qs(e) !== void 0 && e !== null && e.constructor === Nb;
  }
  var Zt = 60,
    Ti = 60 * Zt,
    Dn = 24 * Ti,
    Gs = 7 * Dn,
    Zs = 30.44 * Dn,
    vf = (146097 / 400) * Dn;
  function Gn(e) {
    switch (e) {
      case "second":
        return 1;
      case "minute":
        return Zt;
      case "hour":
        return Ti;
      case "day":
        return Dn;
      case "week":
        return Gs;
      case "month":
        return Zs;
      case "year":
        return vf;
    }
  }
  function yf(e) {
    return e.factor !== void 0 ? e.factor : Gn(e.unit || e.formatAs) || 1;
  }
  function Nr(e) {
    switch (e) {
      case "floor":
        return Math.floor;
      default:
        return Math.round;
    }
  }
  function qa(e) {
    switch (e) {
      case "floor":
        return 1;
      default:
        return 0.5;
    }
  }
  function Ks(e) {
    "@babel/helpers - typeof";
    return (
      (Ks =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Ks(e)
    );
  }
  function xf(e, t) {
    var n = t.prevStep,
      r = t.timestamp,
      i = t.now,
      o = t.future,
      s = t.round,
      a;
    return (
      n && (n.id || n.unit) && (a = e["threshold_for_".concat(n.id || n.unit)]),
      a === void 0 &&
        e.threshold !== void 0 &&
        ((a = e.threshold), typeof a == "function" && (a = a(i, o))),
      a === void 0 && (a = e.minTime),
      Ks(a) === "object" &&
        (n && n.id && a[n.id] !== void 0 ? (a = a[n.id]) : (a = a.default)),
      typeof a == "function" &&
        (a = a(r, {
          future: o,
          getMinTimeForUnit: function (l, u) {
            return pu(l, u || (n && n.formatAs), { round: s });
          },
        })),
      a === void 0 &&
        e.test &&
        (e.test(r, { now: i, future: o }) ? (a = 0) : (a = 9007199254740991)),
      a === void 0 &&
        (n
          ? e.formatAs &&
            n.formatAs &&
            (a = pu(e.formatAs, n.formatAs, { round: s }))
          : (a = 0)),
      a === void 0 &&
        console.warn(
          "[javascript-time-ago] A step should specify `minTime`:\n" +
            JSON.stringify(e, null, 2)
        ),
      a
    );
  }
  function pu(e, t, n) {
    var r = n.round,
      i = Gn(e),
      o;
    if ((t === "now" ? (o = Gn(e)) : (o = Gn(t)), i !== void 0 && o !== void 0))
      return i - o * (1 - qa(r));
  }
  function mu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Rb(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? mu(Object(n), !0).forEach(function (r) {
            Lb(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function Lb(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Pb(e, t, n) {
    var r = n.now,
      i = n.future,
      o = n.round,
      s = n.units,
      a = n.getNextStep;
    e = Fb(e, s);
    var c = Bb(e, t, { now: r, future: i, round: o });
    if (a) {
      if (c) {
        var l = e[e.indexOf(c) - 1],
          u = e[e.indexOf(c) + 1];
        return [l, c, u];
      }
      return [void 0, void 0, e[0]];
    }
    return c;
  }
  function Bb(e, t, n) {
    var r = n.now,
      i = n.future,
      o = n.round;
    if (e.length !== 0) {
      var s = bf(e, t, { now: r, future: i || t < 0, round: o });
      if (s !== -1) {
        var a = e[s];
        if (a.granularity) {
          var c = Nr(o)(Math.abs(t) / yf(a) / a.granularity) * a.granularity;
          if (c === 0 && s > 0) return e[s - 1];
        }
        return a;
      }
    }
  }
  function bf(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i = xf(e[r], Rb({ prevStep: e[r - 1], timestamp: n.now - t * 1e3 }, n));
    return i === void 0 || Math.abs(t) < i
      ? r - 1
      : r === e.length - 1
      ? r
      : bf(e, t, n, r + 1);
  }
  function Fb(e, t) {
    return e.filter(function (n) {
      var r = n.unit,
        i = n.formatAs;
      return (r = r || i), r ? t.indexOf(r) >= 0 : !0;
    });
  }
  function Yb(e, t, n) {
    var r = n.now,
      i = n.round;
    if (Gn(e)) {
      var o = Gn(e) * 1e3,
        s = t > r,
        a = Math.abs(t - r),
        c = Nr(i)(a / o) * o;
      return s ? (c > 0 ? a - c + $b(i, o) : a - c + 1) : -(a - c) + jb(i, o);
    }
  }
  function jb(e, t) {
    return qa(e) * t;
  }
  function $b(e, t) {
    return (1 - qa(e)) * t + 1;
  }
  var Ub = 365 * 24 * 60 * 60 * 1e3,
    wf = 1e3 * Ub;
  function Hb(e, t, n) {
    var r = n.prevStep,
      i = n.nextStep,
      o = n.now,
      s = n.future,
      a = n.round,
      c = e.getTime ? e.getTime() : e,
      l = function (f) {
        return Yb(f, c, { now: o, round: a });
      },
      u = Wb(s ? t : i, c, {
        future: s,
        now: o,
        round: a,
        prevStep: s ? r : t,
      });
    if (u !== void 0) {
      var m;
      if (
        t &&
        (t.getTimeToNextUpdate &&
          (m = t.getTimeToNextUpdate(c, {
            getTimeToNextUpdateForUnit: l,
            getRoundFunction: Nr,
            now: o,
            future: s,
            round: a,
          })),
        m === void 0)
      ) {
        var h = t.unit || t.formatAs;
        h && (m = l(h));
      }
      return m === void 0 ? u : Math.min(m, u);
    }
  }
  function zb(e, t, n) {
    var r = n.now,
      i = n.future,
      o = n.round,
      s = n.prevStep,
      a = xf(e, { timestamp: t, now: r, future: i, round: o, prevStep: s });
    if (a !== void 0)
      return i ? t - a * 1e3 + 1 : a === 0 && t === r ? wf : t + a * 1e3;
  }
  function Wb(e, t, n) {
    var r = n.now,
      i = n.future,
      o = n.round,
      s = n.prevStep;
    if (e) {
      var a = zb(e, t, { now: r, future: i, round: o, prevStep: s });
      return a === void 0 ? void 0 : a - r;
    } else return i ? t - r + 1 : wf;
  }
  var _f = {};
  function Hn(e) {
    return _f[e];
  }
  function Sf(e) {
    if (!e) throw new Error("[javascript-time-ago] No locale data passed.");
    _f[e.locale] = e;
  }
  const Vb = [
      { formatAs: "now" },
      { formatAs: "second" },
      { formatAs: "minute" },
      { formatAs: "hour" },
      { formatAs: "day" },
      { formatAs: "week" },
      { formatAs: "month" },
      { formatAs: "year" },
    ],
    Xs = { steps: Vb, labels: "long" };
  function gu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function vu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? gu(Object(n), !0).forEach(function (r) {
            qb(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function qb(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const Js = vu(
      vu({}, Xs),
      {},
      {
        steps: Xs.steps.filter(function (e) {
          return e.formatAs !== "second";
        }),
      }
    ),
    kf = [
      { factor: 1, unit: "now" },
      { threshold: 1, threshold_for_now: 45.5, factor: 1, unit: "second" },
      { threshold: 45.5, factor: Zt, unit: "minute" },
      { threshold: 2.5 * Zt, granularity: 5, factor: Zt, unit: "minute" },
      { threshold: 22.5 * Zt, factor: 0.5 * Ti, unit: "half-hour" },
      {
        threshold: 42.5 * Zt,
        threshold_for_minute: 52.5 * Zt,
        factor: Ti,
        unit: "hour",
      },
      { threshold: (20.5 / 24) * Dn, factor: Dn, unit: "day" },
      { threshold: 5.5 * Dn, factor: Gs, unit: "week" },
      { threshold: 3.5 * Gs, factor: Zs, unit: "month" },
      { threshold: 10.5 * Zs, factor: vf, unit: "year" },
    ],
    yu = {
      gradation: kf,
      flavour: "long",
      units: ["now", "minute", "hour", "day", "week", "month", "year"],
    },
    Gb = {
      gradation: kf,
      flavour: "long-time",
      units: ["now", "minute", "hour", "day", "week", "month", "year"],
    };
  function Ef(e) {
    return e instanceof Date ? e : new Date(e);
  }
  var Qs = [
      { formatAs: "second" },
      { formatAs: "minute" },
      { formatAs: "hour" },
    ],
    Pt = {},
    Zb = {
      minTime: function (t, n) {
        n.future;
        var r = n.getMinTimeForUnit;
        return r("day");
      },
      format: function (t, n) {
        return (
          Pt[n] || (Pt[n] = {}),
          Pt[n].dayMonth ||
            (Pt[n].dayMonth = new Intl.DateTimeFormat(n, {
              month: "short",
              day: "numeric",
            })),
          Pt[n].dayMonth.format(Ef(t))
        );
      },
    },
    Kb = {
      minTime: function (t, n) {
        var r = n.future;
        if (r) {
          var i = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
          return (t - i) / 1e3;
        } else {
          var o = new Date(new Date(t).getFullYear() + 1, 0).getTime();
          return (o - t) / 1e3;
        }
      },
      format: function (t, n) {
        return (
          Pt[n] || (Pt[n] = {}),
          Pt[n].dayMonthYear ||
            (Pt[n].dayMonthYear = new Intl.DateTimeFormat(n, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })),
          Pt[n].dayMonthYear.format(Ef(t))
        );
      },
    };
  Ob()
    ? Qs.push(Zb, Kb)
    : Qs.push(
        { formatAs: "day" },
        { formatAs: "week" },
        { formatAs: "month" },
        { formatAs: "year" }
      );
  const Nn = { steps: Qs, labels: ["mini", "short-time", "narrow", "short"] };
  function xu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function bu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? xu(Object(n), !0).forEach(function (r) {
            Xb(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function Xb(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const Jb = bu(
    bu({}, Nn),
    {},
    { steps: [{ formatAs: "now" }].concat(Nn.steps) }
  );
  function wu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function _u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? wu(Object(n), !0).forEach(function (r) {
            Qb(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function Qb(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const ea = _u(
    _u({}, Nn),
    {},
    {
      steps: Nn.steps.filter(function (e) {
        return e.formatAs !== "second";
      }),
    }
  );
  function Su(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function ku(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Su(Object(n), !0).forEach(function (r) {
            ew(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Su(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function ew(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const tw = ku(
    ku({}, ea),
    {},
    { steps: [{ formatAs: "now" }].concat(ea.steps) }
  );
  function Eu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Qr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Eu(Object(n), !0).forEach(function (r) {
            nw(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Eu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function nw(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const rw = Qr(
      Qr({}, Nn),
      {},
      {
        steps: Nn.steps
          .filter(function (e) {
            return e.formatAs !== "second";
          })
          .map(function (e) {
            return e.formatAs === "minute"
              ? Qr(Qr({}, e), {}, { minTime: Zt })
              : e;
          }),
      }
    ),
    Ir = {
      steps: [
        { formatAs: "second" },
        { formatAs: "minute" },
        { formatAs: "hour" },
        { formatAs: "day" },
        { formatAs: "month" },
        { formatAs: "year" },
      ],
      labels: ["mini", "short-time", "narrow", "short"],
    };
  function Cu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Du(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Cu(Object(n), !0).forEach(function (r) {
            iw(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function iw(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const ow = Du(
    Du({}, Ir),
    {},
    { steps: [{ formatAs: "now" }].concat(Ir.steps) }
  );
  function Tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Au(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Tu(Object(n), !0).forEach(function (r) {
            sw(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tu(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function sw(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const ta = Au(
    Au({}, Ir),
    {},
    {
      steps: Ir.steps.filter(function (e) {
        return e.formatAs !== "second";
      }),
    }
  );
  function Ou(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Mu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ou(Object(n), !0).forEach(function (r) {
            aw(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ou(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function aw(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  const lw = Mu(
    Mu({}, ta),
    {},
    { steps: [{ formatAs: "now" }].concat(ta.steps) }
  );
  function cw(e) {
    switch (e) {
      case "default":
      case "round":
        return Xs;
      case "round-minute":
        return Js;
      case "approximate":
        return yu;
      case "time":
      case "approximate-time":
        return Gb;
      case "mini":
        return Ir;
      case "mini-now":
        return ow;
      case "mini-minute":
        return ta;
      case "mini-minute-now":
        return lw;
      case "twitter":
        return Nn;
      case "twitter-now":
        return Jb;
      case "twitter-minute":
        return ea;
      case "twitter-minute-now":
        return tw;
      case "twitter-first-minute":
        return rw;
      default:
        return yu;
    }
  }
  function Ai(e) {
    "@babel/helpers - typeof";
    return (
      (Ai =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Ai(e)
    );
  }
  function uw(e, t) {
    var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = Cf(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function dw(e, t) {
    return pw(e) || hw(e, t) || Cf(e, t) || fw();
  }
  function fw() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Cf(e, t) {
    if (e) {
      if (typeof e == "string") return Nu(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Nu(e, t);
    }
  }
  function Nu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function hw(e, t) {
    var n =
      e == null
        ? null
        : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
      var r = [],
        i = !0,
        o = !1,
        s,
        a;
      try {
        for (
          n = n.call(e);
          !(i = (s = n.next()).done) &&
          (r.push(s.value), !(t && r.length === t));
          i = !0
        );
      } catch (c) {
        (o = !0), (a = c);
      } finally {
        try {
          !i && n.return != null && n.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    }
  }
  function pw(e) {
    if (Array.isArray(e)) return e;
  }
  function mw(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Iu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function gw(e, t, n) {
    return (
      t && Iu(e.prototype, t),
      n && Iu(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var At = (function () {
      function e() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = n.polyfill;
        mw(this, e),
          typeof t == "string" && (t = [t]),
          (this.locale = Ab(t.concat(e.getDefaultLocale()), Hn)),
          typeof Intl < "u" &&
            Intl.NumberFormat &&
            (this.numberFormat = new Intl.NumberFormat(this.locale)),
          r === !1
            ? ((this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat),
              (this.IntlPluralRules = Intl.PluralRules))
            : ((this.IntlRelativeTimeFormat = yn),
              (this.IntlPluralRules = yn.PluralRules)),
          (this.relativeTimeFormatCache = new fu()),
          (this.pluralRulesCache = new fu());
      }
      return (
        gw(e, [
          {
            key: "format",
            value: function (n, r, i) {
              i || (r && !ww(r) ? ((i = r), (r = void 0)) : (i = {})),
                r || (r = Js),
                typeof r == "string" && (r = cw(r));
              var o = vw(n),
                s = this.getLabels(r.flavour || r.labels),
                a = s.labels,
                c = s.labelsType,
                l;
              r.now !== void 0 && (l = r.now),
                l === void 0 && i.now !== void 0 && (l = i.now),
                l === void 0 && (l = Date.now());
              var u = (l - o) / 1e3,
                m = i.future || u < 0,
                h = bw(a, Hn(this.locale).now, Hn(this.locale).long, m);
              if (r.custom) {
                var v = r.custom({
                  now: l,
                  date: new Date(o),
                  time: o,
                  elapsed: u,
                  locale: this.locale,
                });
                if (v !== void 0) return v;
              }
              var f = xw(r.units, a, h),
                d = i.round || r.round,
                y = Pb(r.gradation || r.steps || Js.steps, u, {
                  now: l,
                  units: f,
                  round: d,
                  future: m,
                  getNextStep: !0,
                }),
                w = dw(y, 3),
                p = w[0],
                g = w[1],
                b = w[2],
                _ =
                  this.formatDateForStep(o, g, u, {
                    labels: a,
                    labelsType: c,
                    nowLabel: h,
                    now: l,
                    future: m,
                    round: d,
                  }) || "";
              if (i.getTimeToNextUpdate) {
                var S = Hb(o, g, {
                  nextStep: b,
                  prevStep: p,
                  now: l,
                  future: m,
                  round: d,
                });
                return [_, S];
              }
              return _;
            },
          },
          {
            key: "formatDateForStep",
            value: function (n, r, i, o) {
              var s = this,
                a = o.labels,
                c = o.labelsType,
                l = o.nowLabel,
                u = o.now,
                m = o.future,
                h = o.round;
              if (r) {
                if (r.format)
                  return r.format(n, this.locale, {
                    formatAs: function (w, p) {
                      return s.formatValue(p, w, { labels: a, future: m });
                    },
                    now: u,
                    future: m,
                  });
                var v = r.unit || r.formatAs;
                if (!v)
                  throw new Error(
                    "[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(
                      JSON.stringify(r)
                    )
                  );
                if (v === "now") return l;
                var f = Math.abs(i) / yf(r);
                r.granularity && (f = Nr(h)(f / r.granularity) * r.granularity);
                var d = -1 * Math.sign(i) * Nr(h)(f);
                switch ((d === 0 && (m ? (d = 0) : (d = -0)), c)) {
                  case "long":
                  case "short":
                  case "narrow":
                    return this.getFormatter(c).format(d, v);
                  default:
                    return this.formatValue(d, v, { labels: a, future: m });
                }
              }
            },
          },
          {
            key: "formatValue",
            value: function (n, r, i) {
              var o = i.labels,
                s = i.future;
              return this.getFormattingRule(o, r, n, { future: s }).replace(
                "{0}",
                this.formatNumber(Math.abs(n))
              );
            },
          },
          {
            key: "getFormattingRule",
            value: function (n, r, i, o) {
              var s = o.future;
              if ((this.locale, (n = n[r]), typeof n == "string")) return n;
              var a =
                  i === 0 ? (s ? "future" : "past") : i < 0 ? "past" : "future",
                c = n[a] || n;
              if (typeof c == "string") return c;
              var l = this.getPluralRules().select(Math.abs(i));
              return c[l] || c.other;
            },
          },
          {
            key: "formatNumber",
            value: function (n) {
              return this.numberFormat
                ? this.numberFormat.format(n)
                : String(n);
            },
          },
          {
            key: "getFormatter",
            value: function (n) {
              return (
                this.relativeTimeFormatCache.get(this.locale, n) ||
                this.relativeTimeFormatCache.put(
                  this.locale,
                  n,
                  new this.IntlRelativeTimeFormat(this.locale, { style: n })
                )
              );
            },
          },
          {
            key: "getPluralRules",
            value: function () {
              return (
                this.pluralRulesCache.get(this.locale) ||
                this.pluralRulesCache.put(
                  this.locale,
                  new this.IntlPluralRules(this.locale)
                )
              );
            },
          },
          {
            key: "getLabels",
            value: function () {
              var n =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : [];
              typeof n == "string" && (n = [n]),
                (n = n.map(function (a) {
                  switch (a) {
                    case "tiny":
                    case "mini-time":
                      return "mini";
                    default:
                      return a;
                  }
                })),
                (n = n.concat("long"));
              for (var r = Hn(this.locale), i = uw(n), o; !(o = i()).done; ) {
                var s = o.value;
                if (r[s]) return { labelsType: s, labels: r[s] };
              }
            },
          },
        ]),
        e
      );
    })(),
    Df = "en";
  At.getDefaultLocale = function () {
    return Df;
  };
  At.setDefaultLocale = function (e) {
    return (Df = e);
  };
  At.addDefaultLocale = function (e) {
    if (Ru)
      return console.error(
        "[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`."
      );
    (Ru = !0), At.setDefaultLocale(e.locale), At.addLocale(e);
  };
  var Ru;
  At.addLocale = function (e) {
    Sf(e), yn.addLocale(e);
  };
  At.locale = At.addLocale;
  At.addLabels = function (e, t, n) {
    var r = Hn(e);
    r || (Sf({ locale: e }), (r = Hn(e))), (r[t] = n);
  };
  function vw(e) {
    if (e.constructor === Date || yw(e)) return e.getTime();
    if (typeof e == "number") return e;
    throw new Error(
      "Unsupported relative time formatter input: "
        .concat(Ai(e), ", ")
        .concat(e)
    );
  }
  function yw(e) {
    return Ai(e) === "object" && typeof e.getTime == "function";
  }
  function xw(e, t, n) {
    var r = Object.keys(t);
    return (
      n && r.push("now"),
      e &&
        (r = e.filter(function (i) {
          return i === "now" || r.indexOf(i) >= 0;
        })),
      r
    );
  }
  function bw(e, t, n, r) {
    var i = e.now || (t && t.now);
    if (i) return typeof i == "string" ? i : r ? i.future : i.past;
    if (n && n.second && n.second.current) return n.second.current;
  }
  function ww(e) {
    return typeof e == "string" || Mb(e);
  }
  const _w = {
      locale: "en",
      long: {
        year: {
          previous: "last year",
          current: "this year",
          next: "next year",
          past: { one: "{0} year ago", other: "{0} years ago" },
          future: { one: "in {0} year", other: "in {0} years" },
        },
        quarter: {
          previous: "last quarter",
          current: "this quarter",
          next: "next quarter",
          past: { one: "{0} quarter ago", other: "{0} quarters ago" },
          future: { one: "in {0} quarter", other: "in {0} quarters" },
        },
        month: {
          previous: "last month",
          current: "this month",
          next: "next month",
          past: { one: "{0} month ago", other: "{0} months ago" },
          future: { one: "in {0} month", other: "in {0} months" },
        },
        week: {
          previous: "last week",
          current: "this week",
          next: "next week",
          past: { one: "{0} week ago", other: "{0} weeks ago" },
          future: { one: "in {0} week", other: "in {0} weeks" },
        },
        day: {
          previous: "yesterday",
          current: "today",
          next: "tomorrow",
          past: { one: "{0} day ago", other: "{0} days ago" },
          future: { one: "in {0} day", other: "in {0} days" },
        },
        hour: {
          current: "this hour",
          past: { one: "{0} hour ago", other: "{0} hours ago" },
          future: { one: "in {0} hour", other: "in {0} hours" },
        },
        minute: {
          current: "this minute",
          past: { one: "{0} minute ago", other: "{0} minutes ago" },
          future: { one: "in {0} minute", other: "in {0} minutes" },
        },
        second: {
          current: "now",
          past: { one: "{0} second ago", other: "{0} seconds ago" },
          future: { one: "in {0} second", other: "in {0} seconds" },
        },
      },
      short: {
        year: {
          previous: "last yr.",
          current: "this yr.",
          next: "next yr.",
          past: "{0} yr. ago",
          future: "in {0} yr.",
        },
        quarter: {
          previous: "last qtr.",
          current: "this qtr.",
          next: "next qtr.",
          past: { one: "{0} qtr. ago", other: "{0} qtrs. ago" },
          future: { one: "in {0} qtr.", other: "in {0} qtrs." },
        },
        month: {
          previous: "last mo.",
          current: "this mo.",
          next: "next mo.",
          past: "{0} mo. ago",
          future: "in {0} mo.",
        },
        week: {
          previous: "last wk.",
          current: "this wk.",
          next: "next wk.",
          past: "{0} wk. ago",
          future: "in {0} wk.",
        },
        day: {
          previous: "yesterday",
          current: "today",
          next: "tomorrow",
          past: { one: "{0} day ago", other: "{0} days ago" },
          future: { one: "in {0} day", other: "in {0} days" },
        },
        hour: {
          current: "this hour",
          past: "{0} hr. ago",
          future: "in {0} hr.",
        },
        minute: {
          current: "this minute",
          past: "{0} min. ago",
          future: "in {0} min.",
        },
        second: { current: "now", past: "{0} sec. ago", future: "in {0} sec." },
      },
      narrow: {
        year: {
          previous: "last yr.",
          current: "this yr.",
          next: "next yr.",
          past: "{0}y ago",
          future: "in {0}y",
        },
        quarter: {
          previous: "last qtr.",
          current: "this qtr.",
          next: "next qtr.",
          past: "{0}q ago",
          future: "in {0}q",
        },
        month: {
          previous: "last mo.",
          current: "this mo.",
          next: "next mo.",
          past: "{0}mo ago",
          future: "in {0}mo",
        },
        week: {
          previous: "last wk.",
          current: "this wk.",
          next: "next wk.",
          past: "{0}w ago",
          future: "in {0}w",
        },
        day: {
          previous: "yesterday",
          current: "today",
          next: "tomorrow",
          past: "{0}d ago",
          future: "in {0}d",
        },
        hour: { current: "this hour", past: "{0}h ago", future: "in {0}h" },
        minute: { current: "this minute", past: "{0}m ago", future: "in {0}m" },
        second: { current: "now", past: "{0}s ago", future: "in {0}s" },
      },
      now: { now: { current: "now", future: "in a moment", past: "just now" } },
      mini: {
        year: "{0}yr",
        month: "{0}mo",
        week: "{0}wk",
        day: "{0}d",
        hour: "{0}h",
        minute: "{0}m",
        second: "{0}s",
        now: "now",
      },
      "short-time": {
        year: "{0} yr.",
        month: "{0} mo.",
        week: "{0} wk.",
        day: { one: "{0} day", other: "{0} days" },
        hour: "{0} hr.",
        minute: "{0} min.",
        second: "{0} sec.",
      },
      "long-time": {
        year: { one: "{0} year", other: "{0} years" },
        month: { one: "{0} month", other: "{0} months" },
        week: { one: "{0} week", other: "{0} weeks" },
        day: { one: "{0} day", other: "{0} days" },
        hour: { one: "{0} hour", other: "{0} hours" },
        minute: { one: "{0} minute", other: "{0} minutes" },
        second: { one: "{0} second", other: "{0} seconds" },
      },
    },
    na = new Image();
  na.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM3MzcgMjRMMTEuOTc5MiAyNEM1LjkxNTU0IDI0IDEgMTkuMDg0NSAxIDEzLjAyMDhMMSAxTDEyLjYyNjMgMUMxOC45MDc4IDEgMjQgNi4wOTIyIDI0IDEyLjM3MzdDMjQgMTguNzk0NyAxOC43OTQ3IDI0IDEyLjM3MzcgMjRaIiBmaWxsPSIjMjYyNjI2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjEyLjg3NSIgeTE9IjguNSIgeDI9IjEyLjg3NSIgeTI9IjE1LjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iOS4xMjUiIHkxPSIxMS41IiB4Mj0iMTUuODc1IiB5Mj0iMTEuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==";
  At.addDefaultLocale(_w);
  function Ga() {
    if (Q.getState().toolbar.cursorType === "browse") {
      const t = ce.getShadowRoot().getElementById("bounding-box");
      t && document.body.removeChild(t),
        document.body.style.removeProperty("cursor"),
        document.querySelectorAll("*").forEach((r) => {
          r.style.removeProperty("cursor");
        });
    } else
      document.body.style.setProperty(
        "cursor",
        "url('" + na.src + "'), auto",
        "important"
      ),
        document.querySelectorAll("*").forEach((n) => {
          n.style.setProperty(
            "cursor",
            "url('" + na.src + "'), auto",
            "important"
          );
        });
    Ln("NEW"), Ft("");
  }
  function ra(e) {
    var t, n;
    if (e) {
      let r = "";
      if (((t = e.tagName) == null ? void 0 : t.toLowerCase()) === "body")
        return "body";
      let i = (n = e.tagName) == null ? void 0 : n.toLowerCase();
      if (
        e.parentElement &&
        e.parentElement.children.length > 1 &&
        e.parentElement.querySelectorAll(i).length > 1
      ) {
        const o = [];
        let s = "";
        Array.from(e.parentElement.children).forEach((a) => {
          e.nodeName === a.nodeName && o.push(a);
        }),
          o.length > 1 &&
            Array.from(o).forEach((a, c) => {
              e === a && (s = `:nth-of-type(${c + 1})`);
            }),
          (i += s);
      }
      return (r = `${ra(e.parentElement)} > ${i}`), r;
    }
    return "";
  }
  const Sw = () => {
    const e = window.navigator.userAgent,
      n = new Vv.UAParser(e).getResult();
    return {
      browser: n.browser,
      cpu: n.cpu,
      device: n.device,
      engine: n.engine,
      os: n.os,
      ua: n.ua,
    };
  };
  function Lu(e) {
    const t = e.getBoundingClientRect();
    return { left: t.left + window.scrollX, top: t.top + window.scrollY };
  }
  const Tf = [
    {
      type: zn.DESKTOP,
      icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
       class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>`,
      width: 1920,
      height: 1080,
    },
    {
      type: zn.TABLET,
      icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        view-box="0 0 24 24"
        class="w-6 h-6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10 16.75h4.25m7.25 0V6.25A2.25 2.25 0 0019.25 4h-15A2.25 2.25 0 002 6.25v10.5A2.25 2.25 0 004.25 19h15a2.25 2.25 0 002.25-2.25z"
        ></path>
      </svg>`,
      width: 768,
      height: 1024,
    },
    {
      type: zn.MOBILE,
      icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width=1.5
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>`,
      width: 375,
      height: 812,
    },
  ];
  function kw(e) {
    return new At("en-US").format(e);
  }
  function Pu(e, t) {
    const n = Q.getState().toolbar.deviceScreenSize,
      r = e.getBoundingClientRect().x,
      i = e.getBoundingClientRect().y;
    n === zn.MOBILE || window.innerWidth < 700
      ? (r + t.offsetWidth + 10 >= window.innerWidth
          ? (t.style.left = `${window.innerWidth - t.offsetWidth - 30}px`)
          : (t.style.left = `${r + 33}px`),
        i + t.offsetHeight >= window.innerHeight
          ? i - t.offsetHeight + window.scrollY < window.scrollY
            ? (t.style.top = `${window.scrollY + 30}px`)
            : (t.style.top = `${i - t.offsetHeight + window.scrollY}px`)
          : (t.style.top = `${i + window.scrollY + 30}px`))
      : (r + t.offsetWidth >= window.innerWidth
          ? (t.style.left = `${r - t.offsetWidth}px`)
          : (t.style.left = `${r + 43}px`),
        i + t.offsetHeight >= window.innerHeight
          ? i - t.offsetHeight + window.scrollY < window.scrollY
            ? (t.style.top = `${window.scrollY + 30}px`)
            : (t.style.top = `${i - t.offsetHeight + window.scrollY}px`)
          : (t.style.top = `${i + 15 + window.scrollY}px`));
  }
  const Af = (e) => {
      const t = qe.loading("Loading annotation..."),
        n = Q.getState().annotation.annotations.find((r) => r._id === e);
      n &&
        (n.route !== location.pathname && (window.location.pathname = n.route),
        setTimeout(() => {
          const r = ce.getShadowRoot().getElementById(`${n._id}`);
          if (!r) return;
          const i = r.getBoundingClientRect();
          window.scrollTo({
            top: i.y + i.height - window.innerWidth / 2 + window.scrollY,
            behavior: "smooth",
          }),
            Ft(n._id),
            t.hideToast();
        }, 400));
    },
    Ew = (e, t) => X(e).isSameOrBefore(t),
    Cw = (e, t) => X(e).isSameOrAfter(t),
    kt = () => (Q.getState().user.user ? !0 : (tb(), !1));
  function Dw(e) {
    const t = Go.AES.decrypt(
      e,
      "3f707d6dfe0b535ec2f1ad98f73412e69656121bd7f8c76aa9cbb1c285756a58"
    );
    return t.toString(Go.enc.Utf8) === ""
      ? null
      : JSON.parse(t.toString(Go.enc.Utf8));
  }
  function Of(e) {
    var r;
    const t = e || ((r = Q.getState().user.user) == null ? void 0 : r.userSub);
    return JSON.parse(Dw(t || ""));
  }
  function Tw() {
    window.addEventListener(
      "click",
      async function (e) {
        var v;
        if (ce.passClick(e.target)) return !0;
        if (Q.getState().toolbar.cursorType === "browse") return Ft(""), !0;
        e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
        const n = "target" in e ? e.target : e.srclement,
          r = ra(n),
          i = ra(n),
          o = n.getBoundingClientRect(),
          s = ((e.clientX - o.left) / o.width) * 100,
          a = ((e.clientY - o.top) / o.height) * 100,
          c = Q.getState().annotation.annotations,
          l = Q.getState().user.user;
        if (!l) return;
        const u = Sw(),
          m = {
            board: (v = Q.getState().board.board) == null ? void 0 : v._id,
            metaData: {
              Browser: `${u.browser.name} ${u.browser.version}`,
              OS: `${u.os.name} ${u.os.version}`,
              Device: `${u.device.type} ${u.device.vendor} ${u.device.model}`,
              Screen: `${window.innerHeight} x ${window.innerWidth}`,
            },
            parentSelector: r,
            fallbackSelector: i,
            xPercent: s,
            yPercent: a,
            route: window.location.pathname,
            x: o.x,
            y: o.y,
            offsetWidth: o.width,
            offsetHeight: o.height,
            tagName: n.tagName,
            mouseClickX: e.clientX,
            mouseClickY: e.clientY,
            status: ct.UNRESOLVED,
            screenType: Q.getState().toolbar.deviceScreenSize,
            replies: [],
            comment: "",
            createdAt: new Date().toISOString(),
            author: l,
          };
        c.find((f) => f._id === "NEW") ? Ln("NEW") : cf({ _id: "NEW", ...m }),
          Ft("NEW");
      },
      !0
    );
  }
  function Oi() {
    const e = Q.getState().annotation.annotations,
      t = Q.getState().annotation.showAnnotation,
      n = Q.getState().toolbar.deviceScreenSize,
      r = Q.getState().toolbar.showOnlyUnresolved,
      i = Q.getState().board.board,
      o = ce.getShadowRoot().querySelectorAll("[data-annotation]");
    if (t)
      o.forEach((a) => {
        const c = a;
        c.style.display = "block";
      });
    else {
      o.forEach((a) => {
        a.remove();
      });
      return;
    }
    if (
      (o.forEach((a) => {
        const c = a,
          l = e.find((u) => u._id === c.id);
        (!l ||
          l.screenType !== n ||
          (l.status === ct.RESOLVED && r) ||
          l.route !== window.location.pathname ||
          (i && i.showAnnotations === !1 && l._id !== "NEW")) &&
          c.remove();
      }),
      e.forEach((a, c) => {
        a.route !== window.location.pathname ||
          a.screenType !== n ||
          (a.status === ct.RESOLVED && r) ||
          (i && i.showAnnotations === !1 && a._id !== "NEW") ||
          Aw(a, c);
      }),
      !e.find((a) => a._id === "NEW"))
    ) {
      const a = ce.getShadowRoot().getElementById("NEW");
      a && a.remove();
    }
  }
  function Aw(e, t) {
    let n = ce.getShadowRoot().getElementById(e._id);
    n ||
      ((n = document.createElement("div")),
      (n.id = e._id),
      n.setAttribute("data-annotation", "true"),
      (n.innerText = t.toString()),
      ce.addNode(n),
      n.addEventListener("click", (a) => {
        a.preventDefault();
        const c = Q.getState().annotation.openAnnotationId;
        Ft(e._id === c ? "" : e._id), e._id !== "NEW" && Ln("NEW");
      })),
      (n.className = `${
        e.status === ct.RESOLVED ? "bg-green-500" : "bg-neutral-800"
      } rounded-teardrop  w-8 h-8 -left-20 -top-20 text-center flex items-center justify-center pt-[0.2rem] text-white text-sm absolute border-2 border-white shadow-md cursor-pointer`),
      (n.style.zIndex = "700");
    let r;
    try {
      r = document.querySelector(e.parentSelector);
    } catch (a) {
      console.log(a);
    }
    if (!r) {
      (n.style.left = `${e.mouseClickX}px`),
        (n.style.top = `${e.mouseClickY}px`),
        (n.style.backgroundColor = "gray"),
        n.setAttribute("date-missing", "true"),
        Q.getState().annotation.showMissingElements ||
          (n.style.display = "none");
      return;
    }
    n.style.backgroundColor = `${
      e.status === ct.RESOLVED ? "#22c55e" : "#262626"
    }`;
    const i = r.getBoundingClientRect(),
      o = (e.xPercent * i.width) / 100 + i.x,
      s = (e.yPercent * i.height) / 100 + i.y;
    if (o < 0 || o > document.body.clientWidth) {
      n.style.display = "none";
      return;
    }
    (n.style.left = `${o}px`), (n.style.top = `${s + window.scrollY}px`);
  }
  function Mi() {
    var h, v, f, d, y, w, p, g, b;
    const e = Q.getState().annotation.openAnnotationId,
      t = Q.getState().annotation.annotations,
      n = Q.getState().user.user,
      r = t.find((_) => _._id === e);
    if (!r) return;
    const i =
        (h = Q.getState().annotation.uploadingMediaAnnotations) == null
          ? void 0
          : h.includes(r._id),
      o = document.querySelector(r.parentSelector),
      s = Q.getState().board.board;
    if (s && s.showAnnotations === !1 && r._id !== "NEW") return;
    const a = ce.getShadowRoot().getElementById(r._id);
    let c = !1,
      l = ce.getShadowRoot().getElementById("annotationInput");
    if (
      (l ||
        ((c = !0),
        (l = document.createElement("div")),
        l.setAttribute("data-annotation", "true"),
        (l.id = "annotationInput"),
        (l.className =
          "absolute top-0 left-0 flex flex-col bg-white rounded-md bg-white cursor-pointer shadow-teardrop max-sm:w-60 border w-80 max-sm:p-1"),
        (l.style.zIndex = "700")),
      r._id !== "NEW")
    ) {
      let _ = function (O, $) {
        O.preventDefault(),
          M && kt() && (Px($._id, P, M.value), (M.value = ""));
      };
      l.innerHTML = `
    <div  class="p-2">
        ${
          o
            ? ""
            : `<div class="p-2  text-sm mb-4 bg-yellow-100 text-yellow-800 rounded flex items-center justify-center gap-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-[2px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div> 
            missing element
          </div>
        </div>`
        }
        <div  class="flex items-start justify-between relative">
            <div  class="flex items-start justify-start gap-2">
              <img
                  src="https://source.boringavatars.com/beam/120/${
                    ((v = r.author) == null ? void 0 : v.firstName) || ""
                  }${
        ((f = r.author) == null ? void 0 : f.lastName) || ""
      }?square"
                  class="w-7 h-7 rounded"></img>
              <div  class="flex flex-col">
              <p  class="text-sm font-bold max-w-xs line-clamp-1 text-ellipsis" >${
                r.author.firstName
              } ${r.author.lastName}</p>
              <span  class="text-[11px] -mt-1">${kw(
                Date.parse(r.createdAt)
              )}</span>
              </div>
              <div  class="group relative inline-block">
                <button
                  class="group"
                >
                  ${
                    (d = Tf.find((O) => O.type === r.screenType)) == null
                      ? void 0
                      : d.icon
                  }
                </button>
                <div
                  class="absolute top-full -left-3/4 mb-3 -translate-x-1/3 max-lg:-translate-x-2/4 whitespace-nowrap rounded border bg-white py-[6px] px-4 text-sm hidden group-hover:block p-4 z-[100] shadow-md transition-all duration-300 min-w-max"
                >
                    <div class="bg-white grid grid-cols-2 gap-2 max-w-3xl">
                      <div class="text-sm font-bold">OS</div>
                      <div class="text-left text-sm">${
                        (y = r.metaData) == null ? void 0 : y.OS
                      }</div>
                      <div class="text-sm font-bold">Browser</div>
                      <div>${
                        (w = r.metaData) == null ? void 0 : w.Browser
                      }</div>
                      <div class="text-sm font-bold">Window size</div>
                      <div>${(p = r.metaData) == null ? void 0 : p.Screen}</div>
                      <div class="text-sm font-bold">Route</div>
                      <a target="_blank" href="${window.location.origin}${
        r.route
      }" class="break-all w-36 max-lg:w-28" style="text-wrap: wrap;">${r.route}
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          <div class="hidden absolute top-6 right-0 bg-white shadow-lg border p-2 rounded-lg max-w-fit" id="annotation_more_actions_menu">  
            <div class="flex flex-col gap-4 min-w-full">
              ${
                r.author._id === (n == null ? void 0 : n._id)
                  ? `<button  class="w-full flex items-center justify-between gap-2" id="edit_comment_btn" type="button"> 
               <span > Edit </span>  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg> 
              </button>`
                  : ""
              }
              <button  class="w-full flex items-center justify-between gap-4" id="resolve_comment_btn" type="button" > ${
                r.status === ct.UNRESOLVED
                  ? `<span class="w-full"> Mark as resolved </span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path 
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>`
                  : `<span > Mark as unresolved </span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 fill-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>`
              } </button>
             ${
               r.author._id === (n == null ? void 0 : n._id)
                 ? `<button  class="w-full flex items-center justify-between" id="delete_comment_btn" type="button"> 
                <span > Delete </span>  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4"
                  viewBox="0 0 24 24">
                  <path  d="M4 6h16l-1.58 14.22A2 2 0 0116.432 22H7.568a2 2 0 01-1.988-1.78L4 6zM7.345 3.147A2 2 0 019.154 2h5.692a2 2 0 011.81 1.147L18 6H6l1.345-2.853zM2 6h20M10 11v5M14 11v5"></path>
                </svg>
              </button>`
                 : ""
             }
              <button  class="w-full flex items-center justify-between" id="copy_annotation_btn" type="button"> 
                <span > Copy link </span> <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke-width="2"
                  class="w-4 h-4">
                  <path  d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
              </button>
            </div>
          </div>
          <button  id="annotation_more_actions">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path "stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        </div>
        <div class="border-b pb-2">
        <p class="break-words mt-2 whitespace-pre-wrap" id="comment-${
          r._id
        }" >${r.comment}</p>
          ${
            (g = r.screenShot) != null && g.url
              ? `<button type="button" id="show_screenshot"  class="bg-neutral-100 rounded p-2 flex items-center gap-2 w-full mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-6 h-6 stroke-orange-500">
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div  class="text-sm">Screenshot</div>
          </button>`
              : ""
          }
          ${
            i && !((b = r.screenShot) != null && b.url)
              ? `<div class="bg-neutral-100 rounded p-2 flex items-center gap-2 w-full mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none; display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="w-6 h-6 min-w-max min-h-max">
                <circle cx="50" cy="50" fill="none" stroke="#9d9d9d" stroke-width="10" r="34" stroke-dasharray="160.22122533307947 55.40707511102649">
                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.4444444444444444s" values="0 50 50;360 50 50" keyTimes="0;1"/>
                </circle>
              </svg>
              <div class="text-sm">Screenshot</div>
              </div>`
              : ""
          }
          ${
            r.sessionReplay
              ? `<button type="button" id="show_session_replay" class="bg-neutral-100 rounded p-2 flex items-center gap-2 w-full mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
                    </svg>
                  <div class="text-sm">Session Replay</div>
                </button>`
              : ""
          }
   
          <textarea class="bg-gray-100 outline-none p-2 border-b w-full mt-2" id="comment" name="comment" rows="5" style="display: none;">
          ${(r == null ? void 0 : r.comment) || ""}
          </textarea>
          <div  class="flex items-center justify-end gap-4 mt-2" >
            <button type="button"  id="cancel_edit_comment_button" class="text-black px-2 h-9 rounded hidden max-w-max"> Cancel </button>
            <button type="button"  id="comment_button" class="bg-blue-500 text-white px-2 h-9 rounded hidden max-w-max"> Comment </button>
          </div>
        </div>
      <div class="flex flex-col items-center justify-between ">
         ${
           r.replies.length > 0
             ? `<button  class="bg-gray-100 border w-full p-2 rounded flex items-center justify-center gap-4" type="button" id="show_replies">
            ${r.replies.length} &nbsp;  ${
                 r.replies.length > 1 ? "replies" : "reply"
               } <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path  stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>`
             : ""
         }
        <ul class="w-full bg-neutral-50  max-h-44 overflow-y-auto" id="replies_list">
          ${r.replies
            .map((O) => {
              var $, q;
              return `  
            <li  class="w-full border-t first:border-none pt-2">
            <div class="flex items-start justify-between w-full px-2">
              <div class="flex items-center justify-start gap-2">
              <img
              src="https://source.boringavatars.com/beam/120/${
                (($ = O.author) == null ? void 0 : $.firstName) || ""
              }${((q = O.author) == null ? void 0 : q.lastName) || ""}?square"
              class="w-7 h-7 rounded"></img>
              <div class="flex flex-col">
              <p class="text-sm font-bold max-w-xs line-clamp-1 text-ellipsis" >${
                O.author.firstName
              } ${O.author.lastName}</p>
              <span  class="text-[11px] -mt-1">${new Date(
                O.createdAt
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}</span>
                </div>
                </div>
                <div  class="flex items-center justify-start gap-4">
                <button  type="button" id="edit_reply_btn_${
                  O._id
                }" class="reply_edit_button max-w-max" > <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path   d="M12 20h9"></path>
                  <path   d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>  </button>
                <button  type="button" id="delete_reply_btn_${
                  O._id
                }" class="max-w-max"> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                viewBox="0 0 24 24">
                <path  d="M4 6h16l-1.58 14.22A2 2 0 0116.432 22H7.568a2 2 0 01-1.988-1.78L4 6zM7.345 3.147A2 2 0 019.154 2h5.692a2 2 0 011.81 1.147L18 6H6l1.345-2.853zM2 6h20M10 11v5M14 11v5"></path>
              </svg> </button>
                </div>
              </div>
              <div class="mb-2 px-2">
                <p class="break-words mt-2 whitespace-pre-wrap w-full" id="reply-${
                  O._id
                }">${O.text}</p>
              </div>
            </li>
            `;
            })
            .join("")}
        </ul>
        <div class="flex flex-col mt-2 w-full">
          <textarea class="bg-gray-100 outline-none p-2 w-full" id="reply" name="reply" rows="5" placeholder="Add a reply"></textarea>
          <div class="flex gap-2 items-center justify-end mt-2 mr-2">
            <button type="button"  id="reply_button" class="bg-blue-500 text-white px-2 h-9 rounded max-w-max"> Reply </button>
            <button type="button"  id="cancel_edit_reply_button" class="text-black px-2 h-9 rounded hidden max-w-max"> Cancel </button>
            <button type="button"  id="update_reply_button" class="bg-blue-500 text-white px-2 h-9 rounded hidden max-w-max"> update </button>
          </div>
        </div>
      </div>
    </div>
    `;
      const S = l.querySelector("#reply_button"),
        k = l.querySelector("#delete_comment_btn"),
        E = l.querySelector("#edit_comment_btn"),
        T = l.querySelector("#comment"),
        D = l.querySelector("#comment_button"),
        C = l.querySelector("#cancel_edit_comment_button"),
        A = l.querySelector("#resolve_comment_btn"),
        M = l.querySelector("#reply"),
        L = l.querySelector("#update_reply_button"),
        H = l.querySelector("#cancel_edit_reply_button"),
        j = l.querySelector("#show_replies"),
        F = l.querySelector("#replies_list"),
        K = l.querySelector("#show_screenshot"),
        Z = l.querySelector("#show_session_replay"),
        J = l.querySelector("#annotation_more_actions"),
        I = l.querySelector("#annotation_more_actions_menu"),
        B = l.querySelector("#copy_annotation_btn");
      B &&
        B.addEventListener("click", (O) => {
          O.preventDefault();
          const $ = new URL(window.location.href);
          $.searchParams.set("a", r._id),
            navigator.clipboard.writeText($.href),
            qe.success("Copied to clipboard");
        }),
        K &&
          K.addEventListener("click", async (O) => {
            var q;
            if ((O.preventDefault(), !((q = r.screenShot) != null && q.url)))
              return;
            const $ = jl(`<img src="${r.screenShot.url}" class="mx-auto"/>`);
            ce.addNode($);
          }),
        Z &&
          Z.addEventListener("click", async (O) => {
            if ((O.preventDefault(), !r.sessionReplay)) return;
            const $ = jl('<div id="session-replay"></div>');
            ce.addNode($), gp(r.sessionReplay);
          }),
        j &&
          j.addEventListener("click", (O) => {
            O.preventDefault(), F == null || F.classList.toggle("hidden");
            const $ = l == null ? void 0 : l.querySelector("#show-replies-svg");
            $ && $.classList.toggle("rotate-180"), a && l && Pu(a, l);
          });
      let P = "";
      J &&
        J.addEventListener("click", (O) => {
          O.preventDefault(), I && I.classList.toggle("hidden");
        });
      for (let O = 0; O < r.replies.length; O++) {
        const $ = r.replies[O];
        try {
          if (!l) return;
          const q = l.querySelector(`#edit_reply_btn_${$._id}`),
            ue = l.querySelector(`#delete_reply_btn_${$._id}`);
          q &&
            q.addEventListener("click", (U) => {
              if ((U.preventDefault(), !kt() || !M)) return;
              P = $._id;
              const ye = ce
                .getShadowRoot()
                .querySelectorAll(".reply_edit_button");
              ye &&
                ye.forEach((Ye) => {
                  Ye.style.display = "none";
                }),
                (M.value = $.text),
                L &&
                  H &&
                  L &&
                  q &&
                  S &&
                  ((H.style.display = "block"),
                  (L.style.display = "block"),
                  (q.style.display = "none"),
                  (S.style.display = "none"));
            }),
            ue &&
              ue.addEventListener("click", async (U) => {
                U.preventDefault(), kt() && (await Bx(r._id, $._id));
              });
        } catch (q) {
          console.log(q);
        }
      }
      L && L.addEventListener("click", (O) => _(O, r)),
        H &&
          H.addEventListener("click", (O) => {
            O.preventDefault(),
              M && (M.value = ""),
              H &&
                L &&
                S &&
                ((H.style.display = "none"),
                (L.style.display = "none"),
                (S.style.display = "block"),
                ce
                  .getShadowRoot()
                  .querySelectorAll(".reply_edit_button")
                  .forEach((q) => {
                    q.style.display = "block";
                  }));
          }),
        S &&
          S.addEventListener("click", async (O) => {
            if ((O.preventDefault(), !!kt())) {
              if (!M || M.value === "") {
                qe.error("Reply cannot be empty");
                return;
              }
              await Ow();
            }
          }),
        k &&
          k.addEventListener("click", async (O) => {
            O.preventDefault(), kt() && (await Ln(r._id));
          }),
        C &&
          C.addEventListener("click", (O) => {
            if ((O.preventDefault(), T && D && C && E)) {
              (T.style.display = "none"),
                (D.style.display = "none"),
                (C.style.display = "none"),
                I == null || I.classList.add("hidden");
              const $ = ce.getShadowRoot().getElementById(`comment-${r._id}`);
              $ && ($.style.display = "block"), (E.style.display = "flex");
            }
          }),
        E &&
          E.addEventListener("click", (O) => {
            if ((O.preventDefault(), !!kt() && T && D && C)) {
              (T.style.display = "block"),
                (D.style.display = "block"),
                (C.style.display = "block");
              const $ = ce.getShadowRoot().getElementById(`comment-${r._id}`);
              $ && ($.style.display = "none"),
                (E.style.display = "none"),
                I == null || I.classList.add("hidden");
            }
          }),
        A &&
          A.addEventListener("click", async (O) => {
            O.preventDefault(),
              kt() &&
                (await uf(r._id, {
                  status:
                    r.status === ct.RESOLVED ? ct.UNRESOLVED : ct.RESOLVED,
                }));
          });
    } else
      l.innerHTML = `
       <textarea class="bg-gray-100 outline-none p-2 w-full" placeholder="Add a comment"  id="comment" name="comment" rows="5">
    ${(r == null ? void 0 : r.comment) || ""}
    </textarea>
    <div  class="flex gap-2 items-center justify-end my-2 mr-2">
      
      <button type="button"  id="comment_button" class="bg-blue-500 text-white px-2 h-9 rounded max-w-max"> Submit </button>
    </div>
    `;
    const u = l.querySelector("#comment_button"),
      m = l.querySelector("#comment");
    m && (m.value = (r == null ? void 0 : r.comment) || ""),
      c && ce.addNode(l),
      a &&
        (Pu(a, l),
        u &&
          u.addEventListener("click", async (_) => {
            if ((_.preventDefault(), !kt() || !l)) return;
            const S = l.querySelector("#edit_comment_btn");
            S && (S.style.display = "block"), await Mw(r._id);
          }));
  }
  async function Ow() {
    if (!kt()) return;
    const e = ce.getShadowRoot().querySelector("#reply"),
      t = Q.getState().annotation.openAnnotationId,
      n = Q.getState().annotation.annotations.find((i) => i._id === t);
    !e || !n || !Q.getState().user.user || (await Lx(n._id, e.value));
  }
  async function Mw(e) {
    if (!kt()) return;
    const t = ce.getShadowRoot().querySelector("#comment"),
      n = Q.getState().annotation.annotations.find((r) => r._id === e);
    !t ||
      !n ||
      (await Ln("NEW"),
      n._id === "NEW"
        ? await cf({ ...n, comment: t.value })
        : await uf(n._id, { comment: t.value }),
      (t.value = ""));
  }
  function Nw() {
    window.addEventListener("resize", () => {
      Oi(), Mi();
    }),
      window.addEventListener("scroll", () => {
        Oi(), Mi();
      }),
      window.addEventListener("click", () => {
        if (window.location.search.includes("a")) {
          const e = window.location.href.replace(/a=[^&]+&?/, "");
          window.history.replaceState({}, "", e);
        }
      }),
      document.addEventListener("mousemove", function (e) {
        const t = e.target;
        if (
          Q.getState().toolbar.cursorType === "browse" ||
          !t ||
          ce.passClick(t)
        ) {
          const o = ce.getShadowRoot().getElementById("bounding-box");
          o && ce.getShadowRoot().removeChild(o);
          return;
        }
        if (ce.passClick(t)) return;
        const r = t.getBoundingClientRect();
        let i = ce.getShadowRoot().getElementById("bounding-box");
        i ||
          ((i = document.createElement("div")),
          (i.id = "bounding-box"),
          (i.style.zIndex = "600"),
          ce.addNode(i),
          (i.style.position = "absolute"),
          (i.style.border = "1px dashed gray"),
          (i.style.pointerEvents = "none")),
          (i.style.top = Lu(t).top + "px"),
          (i.style.left = Lu(t).left + "px"),
          (i.style.width = r.width + "px"),
          (i.style.height = r.height + "px");
      }),
      (function (e) {
        const t = e.pushState;
        Jr(window.location.pathname),
          (e.pushState = function (n, r, i) {
            return (
              typeof e.onpushstate == "function" && e.onpushstate({ state: n }),
              setTimeout(function () {
                Jr(window.location.pathname);
              }, 0),
              t.call(e, n, r, i)
            );
          }),
          window.addEventListener("popstate", function () {
            setTimeout(function () {
              Jr(window.location.pathname);
            }, 0);
          }),
          window.addEventListener("hashchange", function () {
            setTimeout(function () {
              Jr(window.location.pathname);
            }, 0);
          });
      })(window.history),
      Ln("NEW"),
      Tw();
  }
  const Iw = () => {
      const e = { attributes: !0, childList: !0, subtree: !0 };
      new MutationObserver((n) => {
        if (
          n.some((i) => {
            var o, s;
            return (
              ce.passClick(i.target) ||
              (i.target.tagName === "BODY" && ce.passClick(i.target)) ||
              i.target.id === "bounding-box" ||
              (i.target.tagName === "BODY" &&
                (((o = i.addedNodes[0]) == null ? void 0 : o.id) ===
                  "bounding-box" ||
                  ((s = i.removedNodes[0]) == null ? void 0 : s.id) ===
                    "bounding-box"))
            );
          })
        )
          return !1;
        Oi(), Mi();
      }).observe(window.document.body, e);
    },
    Rw = async (e) => {
      if (!e) throw new Error("Aborting");
      const { data: t } = await It.get(`/webapp/subscription/board/${e}`);
      if (!(t != null && t.userSubscription)) throw new Error("Aborting");
      return Jx(t.userSubscription), Of(t.userSubscription);
    },
    Lw = async () => {
      const e = document.getElementById("annotate-site-webapp-script");
      if (!e) return null;
      const { searchParams: t } = new URL(e.src);
      let n = t.get("bid");
      if (!n) return null;
      const r = (await It.get(`webapp/board/${n}`)).data;
      return !r || !r._id || (Vx(r), !(await Rw(r._id))) ? null : r;
    },
    Pw = async (e) => {
      const t = (await It.get(`webapp/annotation/${e}`)).data;
      if (!t) throw new Error("Aborting");
      Ix(t);
    };
  function Bw() {
    const e = document.createElement("link");
    e.setAttribute("rel", "preconnect"),
      e.setAttribute("href", "https://fonts.googleapis.com");
    const t = document.createElement("link");
    t.setAttribute("rel", "preconnect"),
      t.setAttribute("href", "https://fonts.gstatic.com"),
      t.setAttribute("crossorigin", "");
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"),
      n.setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap"
      );
    const r = document.createElement("link");
    r.setAttribute("rel", "stylesheet"),
      r.setAttribute(
        "href",
        "https://api.fontshare.com/v2/css?f[]=gambarino@400&display=swap"
      );
    const i = document.createElement("link");
    i.setAttribute("rel", "stylesheet"),
      i.setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&family=Outfit&display=swap"
      ),
      document.head.appendChild(e),
      document.head.appendChild(t),
      document.head.appendChild(n),
      document.head.appendChild(r),
      document.head.appendChild(i);
  }
  const Fw = async () => {
    Bw(),
      new URL(window.location.href).search === "" &&
        window.history.replaceState(
          {},
          document.title,
          window.location.href.replace(/\/$/, "")
        );
    const t = await Lw();
    if (!t || !t.enabled) return !1;
    df(!0), t && t.showAnnotations && (await Pw(t._id)), Ga();
    const r = new URL(window.location.href).searchParams.get("a");
    return r && Af(r), Iw(), !0;
  };
  async function Yw() {
    if (!(await Fw())) {
      localStorage.clear(), ce.remove();
      return;
    }
    za(), Nw(), console.log("Welcome to annotate.site");
  }
  window.addEventListener("load", Yw);
});
export default jw();

var Sh = Object.defineProperty;
var kh = (e, t, r) =>
  t in e
    ? Sh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Eh = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Cl = (e, t, r) => (kh(e, typeof t != "symbol" ? t + "" : t, r), r);
var T_ = Eh((M_, Ir) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      n(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const a of o.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(i) {
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
    function n(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = r(i);
      fetch(i.href, o);
    }
  })();
  var On = ((e) => (
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
    ))(On || {}),
    ft = ((e) => ((e.RESOLVED = "RESOLVED"), (e.UNRESOLVED = "UNRESOLVED"), e))(
      ft || {}
    ),
    wt = ((e) => (
      (e.MOBILE = "MOBILE"), (e.TABLET = "TABLET"), (e.DESKTOP = "DESKTOP"), e
    ))(wt || {}),
    ve =
      typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {};
  function Es(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function Ch(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var r = function n() {
        return this instanceof n
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else r = {};
    return (
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          r,
          n,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }
        );
      }),
      r
    );
  }
  var m0 = { exports: {} };
  /*!
   * Toastify js 1.12.0
   * https://github.com/apvarun/toastify-js
   * @license MIT licensed
   *
   * Copyright (C) 2018 Varun A P
   */ (function (e) {
    (function (t, r) {
      e.exports ? (e.exports = r()) : (t.Toastify = r());
    })(ve, function (t) {
      var r = function (a) {
          return new r.lib.init(a);
        },
        n = "1.12.0";
      (r.defaults = {
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
        (r.lib = r.prototype =
          {
            toastify: n,
            constructor: r,
            init: function (a) {
              return (
                a || (a = {}),
                (this.options = {}),
                (this.toastElement = null),
                (this.options.text = a.text || r.defaults.text),
                (this.options.node = a.node || r.defaults.node),
                (this.options.duration =
                  a.duration === 0 ? 0 : a.duration || r.defaults.duration),
                (this.options.selector = a.selector || r.defaults.selector),
                (this.options.callback = a.callback || r.defaults.callback),
                (this.options.destination =
                  a.destination || r.defaults.destination),
                (this.options.newWindow = a.newWindow || r.defaults.newWindow),
                (this.options.close = a.close || r.defaults.close),
                (this.options.gravity =
                  a.gravity === "bottom"
                    ? "toastify-bottom"
                    : r.defaults.gravity),
                (this.options.positionLeft =
                  a.positionLeft || r.defaults.positionLeft),
                (this.options.position = a.position || r.defaults.position),
                (this.options.backgroundColor =
                  a.backgroundColor || r.defaults.backgroundColor),
                (this.options.avatar = a.avatar || r.defaults.avatar),
                (this.options.className = a.className || r.defaults.className),
                (this.options.stopOnFocus =
                  a.stopOnFocus === void 0
                    ? r.defaults.stopOnFocus
                    : a.stopOnFocus),
                (this.options.onClick = a.onClick || r.defaults.onClick),
                (this.options.offset = a.offset || r.defaults.offset),
                (this.options.escapeMarkup =
                  a.escapeMarkup !== void 0
                    ? a.escapeMarkup
                    : r.defaults.escapeMarkup),
                (this.options.ariaLive = a.ariaLive || r.defaults.ariaLive),
                (this.options.style = a.style || r.defaults.style),
                a.backgroundColor &&
                  (this.options.style.background = a.backgroundColor),
                this
              );
            },
            buildToast: function () {
              if (!this.options) throw "Toastify is not initialized";
              var a = document.createElement("div");
              (a.className = "toastify on " + this.options.className),
                this.options.position
                  ? (a.className += " toastify-" + this.options.position)
                  : this.options.positionLeft === !0
                  ? ((a.className += " toastify-left"),
                    console.warn(
                      "Property `positionLeft` will be depreciated in further versions. Please use `position` instead."
                    ))
                  : (a.className += " toastify-right"),
                (a.className += " " + this.options.gravity),
                this.options.backgroundColor &&
                  console.warn(
                    'DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'
                  );
              for (var s in this.options.style)
                a.style[s] = this.options.style[s];
              if (
                (this.options.ariaLive &&
                  a.setAttribute("aria-live", this.options.ariaLive),
                this.options.node &&
                  this.options.node.nodeType === Node.ELEMENT_NODE)
              )
                a.appendChild(this.options.node);
              else if (
                (this.options.escapeMarkup
                  ? (a.innerText = this.options.text)
                  : (a.innerHTML = this.options.text),
                this.options.avatar !== "")
              ) {
                var l = document.createElement("img");
                (l.src = this.options.avatar),
                  (l.className = "toastify-avatar"),
                  this.options.position == "left" ||
                  this.options.positionLeft === !0
                    ? a.appendChild(l)
                    : a.insertAdjacentElement("afterbegin", l);
              }
              if (this.options.close === !0) {
                var c = document.createElement("button");
                (c.type = "button"),
                  c.setAttribute("aria-label", "Close"),
                  (c.className = "toast-close"),
                  (c.innerHTML = "&#10006;"),
                  c.addEventListener(
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
                  ? a.insertAdjacentElement("afterbegin", c)
                  : a.appendChild(c);
              }
              if (this.options.stopOnFocus && this.options.duration > 0) {
                var g = this;
                a.addEventListener("mouseover", function (y) {
                  window.clearTimeout(a.timeOutValue);
                }),
                  a.addEventListener("mouseleave", function () {
                    a.timeOutValue = window.setTimeout(function () {
                      g.removeElement(a);
                    }, g.options.duration);
                  });
              }
              if (
                (typeof this.options.destination < "u" &&
                  a.addEventListener(
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
                  a.addEventListener(
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
                a.style.transform = "translate(" + f + "," + d + ")";
              }
              return a;
            },
            showToast: function () {
              this.toastElement = this.buildToast();
              var a;
              if (
                (typeof this.options.selector == "string"
                  ? (a = document.getElementById(this.options.selector))
                  : this.options.selector instanceof HTMLElement ||
                    (typeof ShadowRoot < "u" &&
                      this.options.selector instanceof ShadowRoot)
                  ? (a = this.options.selector)
                  : (a = document.body),
                !a)
              )
                throw "Root element is not defined";
              var s = r.defaults.oldestFirst ? a.firstChild : a.lastChild;
              return (
                a.insertBefore(this.toastElement, s),
                r.reposition(),
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
            removeElement: function (a) {
              (a.className = a.className.replace(" on", "")),
                window.setTimeout(
                  function () {
                    this.options.node &&
                      this.options.node.parentNode &&
                      this.options.node.parentNode.removeChild(
                        this.options.node
                      ),
                      a.parentNode && a.parentNode.removeChild(a),
                      this.options.callback.call(a),
                      r.reposition();
                  }.bind(this),
                  400
                );
            },
          }),
        (r.reposition = function () {
          for (
            var a = { top: 15, bottom: 15 },
              s = { top: 15, bottom: 15 },
              l = { top: 15, bottom: 15 },
              c = document.getElementsByClassName("toastify"),
              u,
              g = 0;
            g < c.length;
            g++
          ) {
            o(c[g], "toastify-top") === !0
              ? (u = "toastify-top")
              : (u = "toastify-bottom");
            var h = c[g].offsetHeight;
            u = u.substr(9, u.length - 1);
            var v = 15,
              f = window.innerWidth > 0 ? window.innerWidth : screen.width;
            f <= 360
              ? ((c[g].style[u] = l[u] + "px"), (l[u] += h + v))
              : o(c[g], "toastify-left") === !0
              ? ((c[g].style[u] = a[u] + "px"), (a[u] += h + v))
              : ((c[g].style[u] = s[u] + "px"), (s[u] += h + v));
          }
          return this;
        });
      function i(a, s) {
        return s.offset[a]
          ? isNaN(s.offset[a])
            ? s.offset[a]
            : s.offset[a] + "px"
          : "0px";
      }
      function o(a, s) {
        return !a || typeof s != "string"
          ? !1
          : !!(
              a.className && a.className.trim().split(/\s+/gi).indexOf(s) > -1
            );
      }
      return (r.lib.init.prototype = r.lib), r;
    });
  })(m0);
  var Th = m0.exports;
  const Dh = Es(Th);
  class g0 extends HTMLElement {
    constructor() {
      super();
      Cl(this, "shadow");
      (this.shadow = this.attachShadow({ mode: "open" })),
        (this.id = "annotate-site-dom"),
        (this.style.overflow = "hidden");
    }
    connectedCallback() {
      for (; this.childNodes.length > 0; )
        this.shadowRoot && this.shadowRoot.appendChild(this.childNodes[0]);
      const r = document.createElement("link");
      r.setAttribute("rel", "stylesheet"),
        r.setAttribute("type", "text/css"),
        r.setAttribute("href", "https://webapp.annotate.site/style.css");
      const n = document.createElement("div");
      (n.id = "toaster-container"),
        this.shadowRoot &&
          (this.shadow.appendChild(n), this.shadowRoot.appendChild(r));
    }
    addNode(r) {
      this.shadow.appendChild(r);
    }
    getNode(r) {
      return this.shadow.querySelector(r);
    }
    getShadowRoot() {
      return this.shadow;
    }
    passClick(r) {
      var i;
      return (
        ((i = r.shadowRoot) == null ? void 0 : i.host) === this.shadow.host
      );
    }
  }
  customElements.define("annotate-site", g0);
  const ue = new g0();
  document.body.appendChild(ue);
  class Ah {
    createToast(t, r) {
      const n = { success: "#14532d", error: "#ef4444", loading: "#171717" },
        i = { success: "✅", error: "❌", loading: "⏳" },
        o = document.createElement("p");
      o.innerHTML = `${i[r]} &nbsp; ${t}`;
      const a = Dh({
        text: `${i[r]} ${t}`,
        node: o,
        position: "center",
        stopOnFocus: !0,
        offset: { x: 0, y: 160 },
        selector: ue.getNode("#toaster-container"),
        duration: r === "loading" ? -1 : 3e3,
        style: {
          background: "#fff",
          color: n[r],
          borderRadius: "4px",
          fontWeight: "600",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        },
      });
      return a.showToast(), a;
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
  const Xe = new Ah();
  var bt = Uint8Array,
    mr = Uint16Array,
    Aa = Uint32Array,
    v0 = new bt([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    y0 = new bt([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    Oh = new bt([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    b0 = function (e, t) {
      for (var r = new mr(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
      for (var i = new Aa(r[30]), n = 1; n < 30; ++n)
        for (var o = r[n]; o < r[n + 1]; ++o) i[o] = ((o - r[n]) << 5) | n;
      return [r, i];
    },
    x0 = b0(v0, 2),
    w0 = x0[0],
    Mh = x0[1];
  (w0[28] = 258), (Mh[258] = 28);
  var Ih = b0(y0, 0),
    Nh = Ih[0],
    Oa = new mr(32768);
  for (var Le = 0; Le < 32768; ++Le) {
    var fr = ((Le & 43690) >>> 1) | ((Le & 21845) << 1);
    (fr = ((fr & 52428) >>> 2) | ((fr & 13107) << 2)),
      (fr = ((fr & 61680) >>> 4) | ((fr & 3855) << 4)),
      (Oa[Le] = (((fr & 65280) >>> 8) | ((fr & 255) << 8)) >>> 1);
  }
  var Sn = function (e, t, r) {
      for (var n = e.length, i = 0, o = new mr(t); i < n; ++i) ++o[e[i] - 1];
      var a = new mr(t);
      for (i = 0; i < t; ++i) a[i] = (a[i - 1] + o[i - 1]) << 1;
      var s;
      if (r) {
        s = new mr(1 << t);
        var l = 15 - t;
        for (i = 0; i < n; ++i)
          if (e[i])
            for (
              var c = (i << 4) | e[i],
                u = t - e[i],
                g = a[e[i] - 1]++ << u,
                h = g | ((1 << u) - 1);
              g <= h;
              ++g
            )
              s[Oa[g] >>> l] = c;
      } else
        for (s = new mr(n), i = 0; i < n; ++i)
          s[i] = Oa[a[e[i] - 1]++] >>> (15 - e[i]);
      return s;
    },
    Un = new bt(288);
  for (var Le = 0; Le < 144; ++Le) Un[Le] = 8;
  for (var Le = 144; Le < 256; ++Le) Un[Le] = 9;
  for (var Le = 256; Le < 280; ++Le) Un[Le] = 7;
  for (var Le = 280; Le < 288; ++Le) Un[Le] = 8;
  var _0 = new bt(32);
  for (var Le = 0; Le < 32; ++Le) _0[Le] = 5;
  var Rh = Sn(Un, 9, 1),
    Lh = Sn(_0, 5, 1),
    wo = function (e) {
      for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
      return t;
    },
    Et = function (e, t, r) {
      var n = (t / 8) >> 0;
      return ((e[n] | (e[n + 1] << 8)) >>> (t & 7)) & r;
    },
    _o = function (e, t) {
      var r = (t / 8) >> 0;
      return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >>> (t & 7);
    },
    Ph = function (e) {
      return ((e / 8) >> 0) + (e & 7 && 1);
    },
    S0 = function (e, t, r) {
      (t == null || t < 0) && (t = 0),
        (r == null || r > e.length) && (r = e.length);
      var n = new (e instanceof mr ? mr : e instanceof Aa ? Aa : bt)(r - t);
      return n.set(e.subarray(t, r)), n;
    },
    Fh = function (e, t, r) {
      var n = e.length,
        i = !t || r,
        o = !r || r.i;
      r || (r = {}), t || (t = new bt(n * 3));
      var a = function (J) {
          var se = t.length;
          if (J > se) {
            var H = new bt(Math.max(se * 2, J));
            H.set(t), (t = H);
          }
        },
        s = r.f || 0,
        l = r.p || 0,
        c = r.b || 0,
        u = r.l,
        g = r.d,
        h = r.m,
        v = r.n,
        f = n * 8;
      do {
        if (!u) {
          r.f = s = Et(e, l, 1);
          var d = Et(e, l + 1, 3);
          if (((l += 3), d))
            if (d == 1) (u = Rh), (g = Lh), (h = 9), (v = 5);
            else if (d == 2) {
              var m = Et(e, l, 31) + 257,
                b = Et(e, l + 10, 15) + 4,
                _ = m + Et(e, l + 5, 31) + 1;
              l += 14;
              for (var S = new bt(_), k = new bt(19), E = 0; E < b; ++E)
                k[Oh[E]] = Et(e, l + E * 3, 7);
              l += b * 3;
              var D = wo(k),
                C = (1 << D) - 1;
              if (!o && l + _ * (D + 7) > f) break;
              for (var T = Sn(k, D, 1), E = 0; E < _; ) {
                var A = T[Et(e, l, C)];
                l += A & 15;
                var y = A >>> 4;
                if (y < 16) S[E++] = y;
                else {
                  var M = 0,
                    j = 0;
                  for (
                    y == 16
                      ? ((j = 3 + Et(e, l, 3)), (l += 2), (M = S[E - 1]))
                      : y == 17
                      ? ((j = 3 + Et(e, l, 7)), (l += 3))
                      : y == 18 && ((j = 11 + Et(e, l, 127)), (l += 7));
                    j--;

                  )
                    S[E++] = M;
                }
              }
              var z = S.subarray(0, m),
                $ = S.subarray(m);
              (h = wo(z)), (v = wo($)), (u = Sn(z, h, 1)), (g = Sn($, v, 1));
            } else throw "invalid block type";
          else {
            var y = Ph(l) + 4,
              w = e[y - 4] | (e[y - 3] << 8),
              p = y + w;
            if (p > n) {
              if (o) throw "unexpected EOF";
              break;
            }
            i && a(c + w),
              t.set(e.subarray(y, p), c),
              (r.b = c += w),
              (r.p = l = p * 8);
            continue;
          }
          if (l > f) throw "unexpected EOF";
        }
        i && a(c + 131072);
        for (
          var Y = (1 << h) - 1, q = (1 << v) - 1, F = h + v + 18;
          o || l + F < f;

        ) {
          var M = u[_o(e, l) & Y],
            L = M >>> 4;
          if (((l += M & 15), l > f)) throw "unexpected EOF";
          if (!M) throw "invalid length/literal";
          if (L < 256) t[c++] = L;
          else if (L == 256) {
            u = null;
            break;
          } else {
            var N = L - 254;
            if (L > 264) {
              var E = L - 257,
                P = v0[E];
              (N = Et(e, l, (1 << P) - 1) + w0[E]), (l += P);
            }
            var I = g[_o(e, l) & q],
              O = I >>> 4;
            if (!I) throw "invalid distance";
            l += I & 15;
            var $ = Nh[O];
            if (O > 3) {
              var P = y0[O];
              ($ += _o(e, l) & ((1 << P) - 1)), (l += P);
            }
            if (l > f) throw "unexpected EOF";
            i && a(c + 131072);
            for (var V = c + N; c < V; c += 4)
              (t[c] = t[c - $]),
                (t[c + 1] = t[c + 1 - $]),
                (t[c + 2] = t[c + 2 - $]),
                (t[c + 3] = t[c + 3 - $]);
            c = V;
          }
        }
        (r.l = u),
          (r.p = l),
          (r.b = c),
          u && ((s = 1), (r.m = h), (r.d = g), (r.n = v));
      } while (!s);
      return c == t.length ? t : S0(t, 0, c);
    },
    Bh = function (e) {
      if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31)
        throw "invalid zlib data";
      if (e[1] & 32)
        throw "invalid zlib data: preset dictionaries not supported";
    };
  function jh(e, t) {
    return Fh((Bh(e), e.subarray(2, -4)), t);
  }
  function Yh(e, t) {
    var r = e.length;
    if (!t && typeof TextEncoder < "u") return new TextEncoder().encode(e);
    for (
      var n = new bt(e.length + (e.length >>> 1)),
        i = 0,
        o = function (c) {
          n[i++] = c;
        },
        a = 0;
      a < r;
      ++a
    ) {
      if (i + 5 > n.length) {
        var s = new bt(i + 8 + ((r - a) << 1));
        s.set(n), (n = s);
      }
      var l = e.charCodeAt(a);
      l < 128 || t
        ? o(l)
        : l < 2048
        ? (o(192 | (l >>> 6)), o(128 | (l & 63)))
        : l > 55295 && l < 57344
        ? ((l = (65536 + (l & 1047552)) | (e.charCodeAt(++a) & 1023)),
          o(240 | (l >>> 18)),
          o(128 | ((l >>> 12) & 63)),
          o(128 | ((l >>> 6) & 63)),
          o(128 | (l & 63)))
        : (o(224 | (l >>> 12)), o(128 | ((l >>> 6) & 63)), o(128 | (l & 63)));
    }
    return S0(n, 0, i);
  }
  function $h(e, t) {
    var r = "";
    if (!t && typeof TextDecoder < "u") return new TextDecoder().decode(e);
    for (var n = 0; n < e.length; ) {
      var i = e[n++];
      i < 128 || t
        ? (r += String.fromCharCode(i))
        : i < 224
        ? (r += String.fromCharCode(((i & 31) << 6) | (e[n++] & 63)))
        : i < 240
        ? (r += String.fromCharCode(
            ((i & 15) << 12) | ((e[n++] & 63) << 6) | (e[n++] & 63)
          ))
        : ((i =
            (((i & 15) << 18) |
              ((e[n++] & 63) << 12) |
              ((e[n++] & 63) << 6) |
              (e[n++] & 63)) -
            65536),
          (r += String.fromCharCode(55296 | (i >> 10), 56320 | (i & 1023))));
    }
    return r;
  }
  const Tl = "v1",
    Uh = (e) => {
      if (typeof e != "string") return e;
      try {
        const t = JSON.parse(e);
        if (t.timestamp) return t;
      } catch {}
      try {
        const t = JSON.parse($h(jh(Yh(e, !0))));
        if (t.v === Tl) return t;
        throw new Error(
          `These events were packed with packer ${t.v} which is incompatible with current packer ${Tl}.`
        );
      } catch (t) {
        throw (console.error(t), new Error("Unknown data format."));
      }
    };
  function ki() {}
  function Dl(e, t) {
    for (const r in t) e[r] = t[r];
    return e;
  }
  function k0(e) {
    return e();
  }
  function Al() {
    return Object.create(null);
  }
  function an(e) {
    e.forEach(k0);
  }
  function zh(e) {
    return typeof e == "function";
  }
  function Cs(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function Ol(e) {
    const t = {};
    for (const r in e) r[0] !== "$" && (t[r] = e[r]);
    return t;
  }
  function Ce(e, t) {
    e.appendChild(t);
  }
  function lr(e, t, r) {
    e.insertBefore(t, r || null);
  }
  function Ht(e) {
    e.parentNode.removeChild(e);
  }
  function So(e, t) {
    for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t);
  }
  function Ge(e) {
    return document.createElement(e);
  }
  function Ei(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function Nr(e) {
    return document.createTextNode(e);
  }
  function vt() {
    return Nr(" ");
  }
  function kn(e, t, r, n) {
    return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
  }
  function de(e, t, r) {
    r == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== r && e.setAttribute(t, r);
  }
  function Ci(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  function He(e, t, r, n) {
    r === null
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, r, n ? "important" : "");
  }
  function en(e, t, r) {
    e.classList[r ? "add" : "remove"](t);
  }
  let Mn;
  function En(e) {
    Mn = e;
  }
  function Vi() {
    if (!Mn)
      throw new Error("Function called outside component initialization");
    return Mn;
  }
  function E0(e) {
    Vi().$$.on_mount.push(e);
  }
  function C0(e) {
    Vi().$$.on_destroy.push(e);
  }
  function Hh() {
    const e = Vi();
    return (t, r, { cancelable: n = !1 } = {}) => {
      const i = e.$$.callbacks[t];
      if (i) {
        const o = (function (
          a,
          s,
          { bubbles: l = !1, cancelable: c = !1 } = {}
        ) {
          const u = document.createEvent("CustomEvent");
          return u.initCustomEvent(a, l, c, s), u;
        })(t, r, { cancelable: n });
        return (
          i.slice().forEach((a) => {
            a.call(e, o);
          }),
          !o.defaultPrevented
        );
      }
      return !0;
    };
  }
  const bn = [],
    xr = [],
    fi = [],
    Ma = [],
    Wh = Promise.resolve();
  let Ia = !1;
  function Na(e) {
    fi.push(e);
  }
  const ko = new Set();
  let ei = 0;
  function T0() {
    const e = Mn;
    do {
      for (; ei < bn.length; ) {
        const t = bn[ei];
        ei++, En(t), Vh(t.$$);
      }
      for (En(null), bn.length = 0, ei = 0; xr.length; ) xr.pop()();
      for (let t = 0; t < fi.length; t += 1) {
        const r = fi[t];
        ko.has(r) || (ko.add(r), r());
      }
      fi.length = 0;
    } while (bn.length);
    for (; Ma.length; ) Ma.pop()();
    (Ia = !1), ko.clear(), En(e);
  }
  function Vh(e) {
    if (e.fragment !== null) {
      e.update(), an(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(Na);
    }
  }
  const hi = new Set();
  let Tr;
  function D0() {
    Tr = { r: 0, c: [], p: Tr };
  }
  function A0() {
    Tr.r || an(Tr.c), (Tr = Tr.p);
  }
  function nr(e, t) {
    e && e.i && (hi.delete(e), e.i(t));
  }
  function tn(e, t, r, n) {
    if (e && e.o) {
      if (hi.has(e)) return;
      hi.add(e),
        Tr.c.push(() => {
          hi.delete(e), n && (r && e.d(1), n());
        }),
        e.o(t);
    } else n && n();
  }
  function O0(e) {
    e && e.c();
  }
  function Ts(e, t, r, n) {
    const { fragment: i, on_mount: o, on_destroy: a, after_update: s } = e.$$;
    i && i.m(t, r),
      n ||
        Na(() => {
          const l = o.map(k0).filter(zh);
          a ? a.push(...l) : an(l), (e.$$.on_mount = []);
        }),
      s.forEach(Na);
  }
  function Ds(e, t) {
    const r = e.$$;
    r.fragment !== null &&
      (an(r.on_destroy),
      r.fragment && r.fragment.d(t),
      (r.on_destroy = r.fragment = null),
      (r.ctx = []));
  }
  function qh(e, t) {
    e.$$.dirty[0] === -1 &&
      (bn.push(e), Ia || ((Ia = !0), Wh.then(T0)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function As(e, t, r, n, i, o, a, s = [-1]) {
    const l = Mn;
    En(e);
    const c = (e.$$ = {
      fragment: null,
      ctx: null,
      props: o,
      update: ki,
      not_equal: i,
      bound: Al(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (l ? l.$$.context : [])),
      callbacks: Al(),
      dirty: s,
      skip_bound: !1,
      root: t.target || l.$$.root,
    });
    a && a(c.root);
    let u = !1;
    if (
      ((c.ctx = r
        ? r(e, t.props || {}, (g, h, ...v) => {
            const f = v.length ? v[0] : h;
            return (
              c.ctx &&
                i(c.ctx[g], (c.ctx[g] = f)) &&
                (!c.skip_bound && c.bound[g] && c.bound[g](f), u && qh(e, g)),
              h
            );
          })
        : []),
      c.update(),
      (u = !0),
      an(c.before_update),
      (c.fragment = !!n && n(c.ctx)),
      t.target)
    ) {
      if (t.hydrate) {
        const g = (function (h) {
          return Array.from(h.childNodes);
        })(t.target);
        c.fragment && c.fragment.l(g), g.forEach(Ht);
      } else c.fragment && c.fragment.c();
      t.intro && nr(e.$$.fragment),
        Ts(e, t.target, t.anchor, t.customElement),
        T0();
    }
    En(l);
  }
  let Os = class {
    $destroy() {
      Ds(this, 1), (this.$destroy = ki);
    }
    $on(t, r) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(r),
        () => {
          const i = n.indexOf(r);
          i !== -1 && n.splice(i, 1);
        }
      );
    }
    $set(t) {
      var r;
      this.$$set &&
        ((r = t), Object.keys(r).length !== 0) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  };
  var Ze;
  function Gh(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  (function (e) {
    (e[(e.Document = 0)] = "Document"),
      (e[(e.DocumentType = 1)] = "DocumentType"),
      (e[(e.Element = 2)] = "Element"),
      (e[(e.Text = 3)] = "Text"),
      (e[(e.CDATA = 4)] = "CDATA"),
      (e[(e.Comment = 5)] = "Comment");
  })(Ze || (Ze = {}));
  var M0 = (function () {
    function e() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    return (
      (e.prototype.getId = function (t) {
        var r;
        if (!t) return -1;
        var n = (r = this.getMeta(t)) === null || r === void 0 ? void 0 : r.id;
        return n ?? -1;
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
        var r = this,
          n = this.getId(t);
        this.idNodeMap.delete(n),
          t.childNodes &&
            t.childNodes.forEach(function (i) {
              return r.removeNodeFromMap(i);
            });
      }),
      (e.prototype.has = function (t) {
        return this.idNodeMap.has(t);
      }),
      (e.prototype.hasNode = function (t) {
        return this.nodeMetaMap.has(t);
      }),
      (e.prototype.add = function (t, r) {
        var n = r.id;
        this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, r);
      }),
      (e.prototype.replace = function (t, r) {
        var n = this.getNode(t);
        if (n) {
          var i = this.nodeMetaMap.get(n);
          i && this.nodeMetaMap.set(r, i);
        }
        this.idNodeMap.set(t, r);
      }),
      (e.prototype.reset = function () {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
      }),
      e
    );
  })();
  function Zh() {
    return new M0();
  }
  var Ml = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  function Kh(e, t) {
    t === void 0 && (t = {});
    var r = 1,
      n = 1;
    function i(T) {
      var A = T.match(/\n/g);
      A && (r += A.length);
      var M = T.lastIndexOf(`
`);
      n = M === -1 ? n + T.length : T.length - M;
    }
    function o() {
      var T = { line: r, column: n };
      return function (A) {
        return (A.position = new a(T)), v(), A;
      };
    }
    var a = function (T) {
      (this.start = T),
        (this.end = { line: r, column: n }),
        (this.source = t.source);
    };
    a.prototype.content = e;
    var s = [];
    function l(T) {
      var A = new Error(
        ""
          .concat(t.source || "", ":")
          .concat(r, ":")
          .concat(n, ": ")
          .concat(T)
      );
      if (
        ((A.reason = T),
        (A.filename = t.source),
        (A.line = r),
        (A.column = n),
        (A.source = e),
        !t.silent)
      )
        throw A;
      s.push(A);
    }
    function c() {
      return h(/^{\s*/);
    }
    function u() {
      return h(/^}/);
    }
    function g() {
      var T,
        A = [];
      for (v(), f(A); e.length && e.charAt(0) !== "}" && (T = D() || C()); )
        T !== !1 && (A.push(T), f(A));
      return A;
    }
    function h(T) {
      var A = T.exec(e);
      if (A) {
        var M = A[0];
        return i(M), (e = e.slice(M.length)), A;
      }
    }
    function v() {
      h(/^\s*/);
    }
    function f(T) {
      var A;
      for (T === void 0 && (T = []); (A = d()); )
        A !== !1 && T.push(A), (A = d());
      return T;
    }
    function d() {
      var T = o();
      if (e.charAt(0) === "/" && e.charAt(1) === "*") {
        for (
          var A = 2;
          e.charAt(A) !== "" &&
          (e.charAt(A) !== "*" || e.charAt(A + 1) !== "/");

        )
          ++A;
        if (((A += 2), e.charAt(A - 1) === ""))
          return l("End of comment missing");
        var M = e.slice(2, A - 2);
        return (
          (n += 2),
          i(M),
          (e = e.slice(A)),
          (n += 2),
          T({ type: "comment", comment: M })
        );
      }
    }
    function y() {
      var T = h(/^([^{]+)/);
      if (T)
        return Zt(T[0])
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
      var T = o(),
        A = h(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (A) {
        var M = Zt(A[0]);
        if (!h(/^:\s*/)) return l("property missing ':'");
        var j = h(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
          z = T({
            type: "declaration",
            property: M.replace(Ml, ""),
            value: j ? Zt(j[0]).replace(Ml, "") : "",
          });
        return h(/^[;\s]*/), z;
      }
    }
    function p() {
      var T,
        A = [];
      if (!c()) return l("missing '{'");
      for (f(A); (T = w()); ) T !== !1 && (A.push(T), f(A)), (T = w());
      return u() ? A : l("missing '}'");
    }
    function m() {
      for (
        var T, A = [], M = o();
        (T = h(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

      )
        A.push(T[1]), h(/^,\s*/);
      if (A.length)
        return M({ type: "keyframe", values: A, declarations: p() });
    }
    var b,
      _ = E("import"),
      S = E("charset"),
      k = E("namespace");
    function E(T) {
      var A = new RegExp("^@" + T + "\\s*([^;]+);");
      return function () {
        var M = o(),
          j = h(A);
        if (j) {
          var z = { type: T };
          return (z[T] = j[1].trim()), M(z);
        }
      };
    }
    function D() {
      if (e[0] === "@")
        return (
          (function () {
            var T = o(),
              A = h(/^@([-\w]+)?keyframes\s*/);
            if (A) {
              var M = A[1];
              if (!(A = h(/^([-\w]+)\s*/))) return l("@keyframes missing name");
              var j,
                z = A[1];
              if (!c()) return l("@keyframes missing '{'");
              for (var $ = f(); (j = m()); ) $.push(j), ($ = $.concat(f()));
              return u()
                ? T({ type: "keyframes", name: z, vendor: M, keyframes: $ })
                : l("@keyframes missing '}'");
            }
          })() ||
          (function () {
            var T = o(),
              A = h(/^@media *([^{]+)/);
            if (A) {
              var M = Zt(A[1]);
              if (!c()) return l("@media missing '{'");
              var j = f().concat(g());
              return u()
                ? T({ type: "media", media: M, rules: j })
                : l("@media missing '}'");
            }
          })() ||
          (function () {
            var T = o(),
              A = h(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
            if (A)
              return T({
                type: "custom-media",
                name: Zt(A[1]),
                media: Zt(A[2]),
              });
          })() ||
          (function () {
            var T = o(),
              A = h(/^@supports *([^{]+)/);
            if (A) {
              var M = Zt(A[1]);
              if (!c()) return l("@supports missing '{'");
              var j = f().concat(g());
              return u()
                ? T({ type: "supports", supports: M, rules: j })
                : l("@supports missing '}'");
            }
          })() ||
          _() ||
          S() ||
          k() ||
          (function () {
            var T = o(),
              A = h(/^@([-\w]+)?document *([^{]+)/);
            if (A) {
              var M = Zt(A[1]),
                j = Zt(A[2]);
              if (!c()) return l("@document missing '{'");
              var z = f().concat(g());
              return u()
                ? T({ type: "document", document: j, vendor: M, rules: z })
                : l("@document missing '}'");
            }
          })() ||
          (function () {
            var T = o();
            if (h(/^@page */)) {
              var A = y() || [];
              if (!c()) return l("@page missing '{'");
              for (var M, j = f(); (M = w()); ) j.push(M), (j = j.concat(f()));
              return u()
                ? T({ type: "page", selectors: A, declarations: j })
                : l("@page missing '}'");
            }
          })() ||
          (function () {
            var T = o();
            if (h(/^@host\s*/)) {
              if (!c()) return l("@host missing '{'");
              var A = f().concat(g());
              return u()
                ? T({ type: "host", rules: A })
                : l("@host missing '}'");
            }
          })() ||
          (function () {
            var T = o();
            if (h(/^@font-face\s*/)) {
              if (!c()) return l("@font-face missing '{'");
              for (var A, M = f(); (A = w()); ) M.push(A), (M = M.concat(f()));
              return u()
                ? T({ type: "font-face", declarations: M })
                : l("@font-face missing '}'");
            }
          })()
        );
    }
    function C() {
      var T = o(),
        A = y();
      return A
        ? (f(), T({ type: "rule", selectors: A, declarations: p() }))
        : l("selector missing");
    }
    return Ra(
      ((b = g()),
      {
        type: "stylesheet",
        stylesheet: { source: t.source, rules: b, parsingErrors: s },
      })
    );
  }
  function Zt(e) {
    return e ? e.replace(/^\s+|\s+$/g, "") : "";
  }
  function Ra(e, t) {
    for (
      var r = e && typeof e.type == "string",
        n = r ? e : t,
        i = 0,
        o = Object.keys(e);
      i < o.length;
      i++
    ) {
      var a = e[o[i]];
      Array.isArray(a)
        ? a.forEach(function (s) {
            Ra(s, n);
          })
        : a && typeof a == "object" && Ra(a, n);
    }
    return (
      r &&
        Object.defineProperty(e, "parent", {
          configurable: !0,
          writable: !0,
          enumerable: !1,
          value: t || null,
        }),
      e
    );
  }
  var Il = {
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
    I0 = /([^\\]):hover/,
    Xh = new RegExp(I0.source, "g");
  function Nl(e, t) {
    var r = t == null ? void 0 : t.stylesWithHoverClass.get(e);
    if (r) return r;
    var n = Kh(e, { silent: !0 });
    if (!n.stylesheet) return e;
    var i = [];
    if (
      (n.stylesheet.rules.forEach(function (s) {
        "selectors" in s &&
          (s.selectors || []).forEach(function (l) {
            I0.test(l) && i.push(l);
          });
      }),
      i.length === 0)
    )
      return e;
    var o = new RegExp(
        i
          .filter(function (s, l) {
            return i.indexOf(s) === l;
          })
          .sort(function (s, l) {
            return l.length - s.length;
          })
          .map(function (s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          })
          .join("|"),
        "g"
      ),
      a = e.replace(o, function (s) {
        var l = s.replace(Xh, "$1.\\:hover");
        return "".concat(s, ", ").concat(l);
      });
    return t == null || t.stylesWithHoverClass.set(e, a), a;
  }
  function Rl() {
    return { stylesWithHoverClass: new Map() };
  }
  function Jh(e, t) {
    var r = t.doc,
      n = t.hackCss,
      i = t.cache;
    switch (e.type) {
      case Ze.Document:
        return r.implementation.createDocument(null, "", null);
      case Ze.DocumentType:
        return r.implementation.createDocumentType(
          e.name || "html",
          e.publicId,
          e.systemId
        );
      case Ze.Element:
        var o,
          a = (function (p) {
            var m = Il[p.tagName] ? Il[p.tagName] : p.tagName;
            return m === "link" && p.attributes._cssText && (m = "style"), m;
          })(e);
        o = e.isSVG
          ? r.createElementNS("http://www.w3.org/2000/svg", a)
          : r.createElement(a);
        var s = {};
        for (var l in e.attributes)
          if (Object.prototype.hasOwnProperty.call(e.attributes, l)) {
            var c = e.attributes[l];
            if (a !== "option" || l !== "selected" || c !== !1)
              if ((c === !0 && (c = ""), l.startsWith("rr_"))) s[l] = c;
              else {
                var u = a === "textarea" && l === "value",
                  g = a === "style" && l === "_cssText";
                if (
                  (g && n && typeof c == "string" && (c = Nl(c, i)),
                  (!u && !g) || typeof c != "string")
                )
                  try {
                    if (e.isSVG && l === "xlink:href")
                      o.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        l,
                        c.toString()
                      );
                    else if (
                      l === "onload" ||
                      l === "onclick" ||
                      l.substring(0, 7) === "onmouse"
                    )
                      o.setAttribute("_" + l, c.toString());
                    else {
                      if (
                        a === "meta" &&
                        e.attributes["http-equiv"] ===
                          "Content-Security-Policy" &&
                        l === "content"
                      ) {
                        o.setAttribute("csp-content", c.toString());
                        continue;
                      }
                      (a === "link" &&
                        e.attributes.rel === "preload" &&
                        e.attributes.as === "script") ||
                        (a === "link" &&
                          e.attributes.rel === "prefetch" &&
                          typeof e.attributes.href == "string" &&
                          e.attributes.href.endsWith(".js")) ||
                        (a === "img" &&
                        e.attributes.srcset &&
                        e.attributes.rr_dataURL
                          ? o.setAttribute(
                              "rrweb-original-srcset",
                              e.attributes.srcset
                            )
                          : o.setAttribute(l, c.toString()));
                    }
                  } catch {}
                else {
                  for (
                    var h = r.createTextNode(c),
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
          var m = s[p];
          if (a === "canvas" && p === "rr_dataURL") {
            var b = document.createElement("img");
            (b.onload = function () {
              var S = o.getContext("2d");
              S && S.drawImage(b, 0, 0, b.width, b.height);
            }),
              (b.src = m.toString()),
              o.RRNodeType && (o.rr_dataURL = m.toString());
          } else if (a === "img" && p === "rr_dataURL") {
            var _ = o;
            _.currentSrc.startsWith("data:") ||
              (_.setAttribute("rrweb-original-src", e.attributes.src),
              (_.src = m.toString()));
          }
          if (p === "rr_width") o.style.width = m.toString();
          else if (p === "rr_height") o.style.height = m.toString();
          else if (p === "rr_mediaCurrentTime" && typeof m == "number")
            o.currentTime = m;
          else if (p === "rr_mediaState")
            switch (m) {
              case "played":
                o.play().catch(function (S) {
                  return console.warn("media playback error", S);
                });
                break;
              case "paused":
                o.pause();
            }
        };
        for (var w in s) y(w);
        if (e.isShadowHost)
          if (o.shadowRoot)
            for (; o.shadowRoot.firstChild; )
              o.shadowRoot.removeChild(o.shadowRoot.firstChild);
          else o.attachShadow({ mode: "open" });
        return o;
      case Ze.Text:
        return r.createTextNode(
          e.isStyle && n ? Nl(e.textContent, i) : e.textContent
        );
      case Ze.CDATA:
        return r.createCDATASection(e.textContent);
      case Ze.Comment:
        return r.createComment(e.textContent);
      default:
        return null;
    }
  }
  function Cn(e, t) {
    var r = t.doc,
      n = t.mirror,
      i = t.skipChild,
      o = i !== void 0 && i,
      a = t.hackCss,
      s = a === void 0 || a,
      l = t.afterAppend,
      c = t.cache,
      u = Jh(e, { doc: r, hackCss: s, cache: c });
    if (!u) return null;
    if (
      (e.rootId && n.getNode(e.rootId) !== r && n.replace(e.rootId, r),
      e.type === Ze.Document &&
        (r.close(),
        r.open(),
        e.compatMode === "BackCompat" &&
          e.childNodes &&
          e.childNodes[0].type !== Ze.DocumentType &&
          (e.childNodes[0].type === Ze.Element &&
          "xmlns" in e.childNodes[0].attributes &&
          e.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml"
            ? r.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
              )
            : r.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
              )),
        (u = r)),
      n.add(u, e),
      (e.type === Ze.Document || e.type === Ze.Element) && !o)
    )
      for (var g = 0, h = e.childNodes; g < h.length; g++) {
        var v = h[g],
          f = Cn(v, {
            doc: r,
            mirror: n,
            skipChild: !1,
            hackCss: s,
            afterAppend: l,
            cache: c,
          });
        f
          ? (v.isShadow && Gh(u) && u.shadowRoot
              ? u.shadowRoot.appendChild(f)
              : u.appendChild(f),
            l && l(f, v.id))
          : console.warn("Failed to rebuild", v);
      }
    return u;
  }
  function Qh(e, t) {
    var r = t.doc,
      n = t.onVisit,
      i = t.hackCss,
      o = i === void 0 || i,
      a = t.afterAppend,
      s = t.cache,
      l = t.mirror,
      c = l === void 0 ? new M0() : l,
      u = Cn(e, {
        doc: r,
        mirror: c,
        skipChild: !1,
        hackCss: o,
        afterAppend: a,
        cache: s,
      });
    return (
      (function (g, h) {
        for (var v = 0, f = g.getIds(); v < f.length; v++) {
          var d = f[v];
          g.has(d) && h(g.getNode(d));
        }
      })(c, function (g) {
        n && n(g),
          (function (h, v) {
            var f = v.getMeta(h);
            if ((f == null ? void 0 : f.type) === Ze.Element) {
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
          })(g, c);
      }),
      u
    );
  }
  const zr = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
  let Ll = {
    map: {},
    getId: () => (console.error(zr), -1),
    getNode: () => (console.error(zr), null),
    removeNodeFromMap() {
      console.error(zr);
    },
    has: () => (console.error(zr), !1),
    reset() {
      console.error(zr);
    },
  };
  function ep(e) {
    const t = {},
      r = (i, o) => {
        const a = { value: i, parent: o, children: [] };
        return (t[i.node.id] = a), a;
      },
      n = [];
    for (const i of e) {
      const { nextId: o, parentId: a } = i;
      if (o && o in t) {
        const s = t[o];
        if (s.parent) {
          const l = s.parent.children.indexOf(s);
          s.parent.children.splice(l, 0, r(i, s.parent));
        } else {
          const l = n.indexOf(s);
          n.splice(l, 0, r(i, null));
        }
      } else if (a in t) {
        const s = t[a];
        s.children.push(r(i, s));
      } else n.push(r(i, null));
    }
    return n;
  }
  function N0(e, t) {
    t(e.value);
    for (let r = e.children.length - 1; r >= 0; r--) N0(e.children[r], t);
  }
  function Eo(e, t) {
    return !!(e.nodeName === "IFRAME" && t.getMeta(e));
  }
  function R0(e, t) {
    var r, n;
    const i =
      (n =
        (r = e.ownerDocument) === null || r === void 0
          ? void 0
          : r.defaultView) === null || n === void 0
        ? void 0
        : n.frameElement;
    if (!i || i === t)
      return { x: 0, y: 0, relativeScale: 1, absoluteScale: 1 };
    const o = i.getBoundingClientRect(),
      a = R0(i, t),
      s = o.height / i.clientHeight;
    return {
      x: o.x * a.relativeScale + a.x,
      y: o.y * a.relativeScale + a.y,
      relativeScale: s,
      absoluteScale: a.absoluteScale * s,
    };
  }
  function ti(e) {
    return !!(e != null && e.shadowRoot);
  }
  function xn(e, t) {
    const r = e[t[0]];
    return t.length === 1 ? r : xn(r.cssRules[t[1]].cssRules, t.slice(2));
  }
  function Pl(e) {
    const t = [...e],
      r = t.pop();
    return { positions: t, index: r };
  }
  typeof window < "u" &&
    window.Proxy &&
    window.Reflect &&
    (Ll = new Proxy(Ll, {
      get: (e, t, r) => (
        t === "map" && console.error(zr), Reflect.get(e, t, r)
      ),
    }));
  let tp = class {
    constructor() {
      (this.id = 1),
        (this.styleIDMap = new WeakMap()),
        (this.idStyleMap = new Map());
    }
    getId(t) {
      var r;
      return (r = this.styleIDMap.get(t)) !== null && r !== void 0 ? r : -1;
    }
    has(t) {
      return this.styleIDMap.has(t);
    }
    add(t, r) {
      if (this.has(t)) return this.getId(t);
      let n;
      return (
        (n = r === void 0 ? this.id++ : r),
        this.styleIDMap.set(t, n),
        this.idStyleMap.set(n, t),
        n
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
  var Ne = ((e) => (
      (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
      (e[(e.Load = 1)] = "Load"),
      (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
      (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
      (e[(e.Meta = 4)] = "Meta"),
      (e[(e.Custom = 5)] = "Custom"),
      (e[(e.Plugin = 6)] = "Plugin"),
      e
    ))(Ne || {}),
    Ee = ((e) => (
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
    ))(Ee || {}),
    ot = ((e) => (
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
    ))(ot || {}),
    Ti = ((e) => (
      (e[(e["2D"] = 0)] = "2D"),
      (e[(e.WebGL = 1)] = "WebGL"),
      (e[(e.WebGL2 = 2)] = "WebGL2"),
      e
    ))(Ti || {}),
    Ae = ((e) => (
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
    ))(Ae || {});
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
***************************************************************************** */ function Ar(
    e,
    t,
    r,
    n
  ) {
    return new (r || (r = Promise))(function (i, o) {
      function a(c) {
        try {
          l(n.next(c));
        } catch (u) {
          o(u);
        }
      }
      function s(c) {
        try {
          l(n.throw(c));
        } catch (u) {
          o(u);
        }
      }
      function l(c) {
        var u;
        c.done
          ? i(c.value)
          : ((u = c.value),
            u instanceof r
              ? u
              : new r(function (g) {
                  g(u);
                })).then(a, s);
      }
      l((n = n.apply(e, t || [])).next());
    });
  }
  for (
    var Fl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      wn = typeof Uint8Array > "u" ? [] : new Uint8Array(256),
      ri = 0;
    ri < Fl.length;
    ri++
  )
    wn[Fl.charCodeAt(ri)] = ri;
  var L0 = null;
  try {
    var rp =
      (typeof Ir < "u" &&
        typeof Ir.require == "function" &&
        Ir.require("worker_threads")) ||
      (typeof __non_webpack_require__ == "function" &&
        __non_webpack_require__("worker_threads")) ||
      (typeof require == "function" && require("worker_threads"));
    L0 = rp.Worker;
  } catch {}
  function np(e, t, r) {
    var n = t === void 0 ? null : t,
      i = (function (s, l) {
        return Buffer.from(s, "base64").toString(l ? "utf16" : "utf8");
      })(e, r !== void 0 && r),
      o =
        i.indexOf(
          `
`,
          10
        ) + 1,
      a = i.substring(o) + (n ? "//# sourceMappingURL=" + n : "");
    return function (s) {
      return new L0(a, Object.assign({}, s, { eval: !0 }));
    };
  }
  var Bl,
    jl,
    Yl,
    we,
    ip =
      Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]";
  (Bl =
    "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo="),
    (jl = null),
    (Yl = !1),
    ip && np(Bl, jl, Yl),
    (function (e) {
      (e[(e.Document = 0)] = "Document"),
        (e[(e.DocumentType = 1)] = "DocumentType"),
        (e[(e.Element = 2)] = "Element"),
        (e[(e.Text = 3)] = "Text"),
        (e[(e.CDATA = 4)] = "CDATA"),
        (e[(e.Comment = 5)] = "Comment");
    })(we || (we = {}));
  var op = (function () {
    function e() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    return (
      (e.prototype.getId = function (t) {
        var r;
        if (!t) return -1;
        var n = (r = this.getMeta(t)) === null || r === void 0 ? void 0 : r.id;
        return n ?? -1;
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
        var r = this,
          n = this.getId(t);
        this.idNodeMap.delete(n),
          t.childNodes &&
            t.childNodes.forEach(function (i) {
              return r.removeNodeFromMap(i);
            });
      }),
      (e.prototype.has = function (t) {
        return this.idNodeMap.has(t);
      }),
      (e.prototype.hasNode = function (t) {
        return this.nodeMetaMap.has(t);
      }),
      (e.prototype.add = function (t, r) {
        var n = r.id;
        this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, r);
      }),
      (e.prototype.replace = function (t, r) {
        var n = this.getNode(t);
        if (n) {
          var i = this.nodeMetaMap.get(n);
          i && this.nodeMetaMap.set(r, i);
        }
        this.idNodeMap.set(t, r);
      }),
      (e.prototype.reset = function () {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
      }),
      e
    );
  })();
  function $l(e) {
    const t = [];
    for (const r in e) {
      const n = e[r];
      if (typeof n != "string") continue;
      const i = cp(r);
      t.push(`${i}: ${n};`);
    }
    return t.join(" ");
  }
  const ap = /-([a-z])/g,
    sp = /^--[a-zA-Z0-9-]+$/,
    Co = (e) =>
      sp.test(e) ? e : e.replace(ap, (t, r) => (r ? r.toUpperCase() : "")),
    lp = /\B([A-Z])/g,
    cp = (e) => e.replace(lp, "-$1").toLowerCase();
  class Dt {
    constructor(...t) {
      (this.childNodes = []),
        (this.parentElement = null),
        (this.parentNode = null),
        (this.ELEMENT_NODE = $e.ELEMENT_NODE),
        (this.TEXT_NODE = $e.TEXT_NODE);
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
      const r = t.childNodes,
        n = r.indexOf(this);
      return r[n + 1] || null;
    }
    contains(t) {
      if (t === this) return !0;
      for (const r of this.childNodes) if (r.contains(t)) return !0;
      return !1;
    }
    appendChild(t) {
      throw new Error(
        "RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method."
      );
    }
    insertBefore(t, r) {
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
  function P0(e) {
    return class extends e {
      constructor(t, r, n) {
        super(),
          (this.nodeType = $e.DOCUMENT_TYPE_NODE),
          (this.RRNodeType = we.DocumentType),
          (this.textContent = null),
          (this.name = t),
          (this.publicId = r),
          (this.systemId = n),
          (this.nodeName = t);
      }
      toString() {
        return "RRDocumentType";
      }
    };
  }
  function F0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeType = $e.ELEMENT_NODE),
          (this.RRNodeType = we.Element),
          (this.attributes = {}),
          (this.shadowRoot = null),
          (this.tagName = t.toUpperCase()),
          (this.nodeName = t.toUpperCase());
      }
      get textContent() {
        let t = "";
        return this.childNodes.forEach((r) => (t += r.textContent)), t;
      }
      set textContent(t) {
        this.childNodes = [this.ownerDocument.createTextNode(t)];
      }
      get classList() {
        return new up(this.attributes.class, (t) => {
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
            ? (function (n) {
                const i = {},
                  o = /:(.+)/;
                return (
                  n
                    .replace(/\/\*.*?\*\//g, "")
                    .split(/;(?![^(]*\))/g)
                    .forEach(function (a) {
                      if (a) {
                        const s = a.split(o);
                        s.length > 1 && (i[Co(s[0].trim())] = s[1].trim());
                      }
                    }),
                  i
                );
              })(this.attributes.style)
            : {},
          r = /\B([A-Z])/g;
        return (
          (t.setProperty = (n, i, o) => {
            if (r.test(n)) return;
            const a = Co(n);
            i ? (t[a] = i) : delete t[a],
              o === "important" && (t[a] += " !important"),
              (this.attributes.style = $l(t));
          }),
          (t.removeProperty = (n) => {
            if (r.test(n)) return "";
            const i = Co(n),
              o = t[i] || "";
            return delete t[i], (this.attributes.style = $l(t)), o;
          }),
          t
        );
      }
      getAttribute(t) {
        return this.attributes[t] || null;
      }
      setAttribute(t, r) {
        this.attributes[t] = r;
      }
      setAttributeNS(t, r, n) {
        this.setAttribute(r, n);
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
      insertBefore(t, r) {
        if (r === null) return this.appendChild(t);
        const n = this.childNodes.indexOf(r);
        if (n == -1)
          throw new Error(
            "Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(n, 0, t),
          (t.parentElement = this),
          (t.parentNode = this),
          t
        );
      }
      removeChild(t) {
        const r = this.childNodes.indexOf(t);
        if (r === -1)
          throw new Error(
            "Failed to execute 'removeChild' on 'RRElement': The RRNode to be removed is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(r, 1),
          (t.parentElement = null),
          (t.parentNode = null),
          t
        );
      }
      attachShadow(t) {
        const r = this.ownerDocument.createElement("SHADOWROOT");
        return (this.shadowRoot = r), r;
      }
      dispatchEvent(t) {
        return !0;
      }
      toString() {
        let t = "";
        for (const r in this.attributes) t += `${r}="${this.attributes[r]}" `;
        return `${this.tagName} ${t}`;
      }
    };
  }
  function B0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeType = $e.TEXT_NODE),
          (this.nodeName = "#text"),
          (this.RRNodeType = we.Text),
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
  function j0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeType = $e.COMMENT_NODE),
          (this.nodeName = "#comment"),
          (this.RRNodeType = we.Comment),
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
  function Y0(e) {
    return class extends e {
      constructor(t) {
        super(),
          (this.nodeName = "#cdata-section"),
          (this.nodeType = $e.CDATA_SECTION_NODE),
          (this.RRNodeType = we.CDATA),
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
  class up {
    constructor(t, r) {
      if (
        ((this.classes = []),
        (this.add = (...n) => {
          for (const i of n) {
            const o = String(i);
            this.classes.indexOf(o) >= 0 || this.classes.push(o);
          }
          this.onChange && this.onChange(this.classes.join(" "));
        }),
        (this.remove = (...n) => {
          (this.classes = this.classes.filter((i) => n.indexOf(i) === -1)),
            this.onChange && this.onChange(this.classes.join(" "));
        }),
        t)
      ) {
        const n = t.trim().split(/\s+/);
        this.classes.push(...n);
      }
      this.onChange = r;
    }
  }
  var $e;
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
  })($e || ($e = {}));
  const La = {
      svg: "http://www.w3.org/2000/svg",
      "xlink:href": "http://www.w3.org/1999/xlink",
      xmlns: "http://www.w3.org/2000/xmlns/",
    },
    dp = {
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
  function Ft(e, t, r, n) {
    const i = e.childNodes,
      o = t.childNodes;
    (n = n || t.mirror || t.ownerDocument.mirror),
      (i.length > 0 || o.length > 0) && Ul(Array.from(i), o, e, r, n);
    let a = null,
      s = null;
    switch (t.RRNodeType) {
      case we.Document:
        s = t.scrollData;
        break;
      case we.Element: {
        const l = e,
          c = t;
        switch (
          ((function (u, g, h) {
            const v = u.attributes,
              f = g.attributes;
            for (const d in f) {
              const y = f[d],
                w = h.getMeta(g);
              if (w && "isSVG" in w && w.isSVG && La[d])
                u.setAttributeNS(La[d], d, y);
              else if (g.tagName === "CANVAS" && d === "rr_dataURL") {
                const p = document.createElement("img");
                (p.src = y),
                  (p.onload = () => {
                    const m = u.getContext("2d");
                    m && m.drawImage(p, 0, 0, p.width, p.height);
                  });
              } else u.setAttribute(d, y);
            }
            for (const { name: d } of Array.from(v))
              d in f || u.removeAttribute(d);
            g.scrollLeft && (u.scrollLeft = g.scrollLeft),
              g.scrollTop && (u.scrollTop = g.scrollTop);
          })(l, c, n),
          (s = c.scrollData),
          (a = c.inputData),
          c.tagName)
        ) {
          case "AUDIO":
          case "VIDEO": {
            const u = e,
              g = c;
            g.paused !== void 0 && (g.paused ? u.pause() : u.play()),
              g.muted !== void 0 && (u.muted = g.muted),
              g.volume !== void 0 && (u.volume = g.volume),
              g.currentTime !== void 0 && (u.currentTime = g.currentTime),
              g.playbackRate !== void 0 && (u.playbackRate = g.playbackRate);
            break;
          }
          case "CANVAS":
            {
              const u = t;
              if (u.rr_dataURL !== null) {
                const g = document.createElement("img");
                (g.onload = () => {
                  const h = l.getContext("2d");
                  h && h.drawImage(g, 0, 0, g.width, g.height);
                }),
                  (g.src = u.rr_dataURL);
              }
              u.canvasMutations.forEach((g) =>
                r.applyCanvas(g.event, g.mutation, e)
              );
            }
            break;
          case "STYLE": {
            const u = l.sheet;
            u && t.rules.forEach((g) => r.applyStyleSheetMutation(g, u));
          }
        }
        if (c.shadowRoot) {
          l.shadowRoot || l.attachShadow({ mode: "open" });
          const u = l.shadowRoot.childNodes,
            g = c.shadowRoot.childNodes;
          (u.length > 0 || g.length > 0) &&
            Ul(Array.from(u), g, l.shadowRoot, r, n);
        }
        break;
      }
      case we.Text:
      case we.Comment:
      case we.CDATA:
        e.textContent !== t.data && (e.textContent = t.data);
    }
    if (
      (s && r.applyScroll(s, !0), a && r.applyInput(a), t.nodeName === "IFRAME")
    ) {
      const l = e.contentDocument,
        c = t;
      if (l) {
        const u = n.getMeta(c.contentDocument);
        u && r.mirror.add(l, Object.assign({}, u)),
          Ft(l, c.contentDocument, r, n);
      }
    }
  }
  function Ul(e, t, r, n, i) {
    var o;
    let a,
      s,
      l = 0,
      c = e.length - 1,
      u = 0,
      g = t.length - 1,
      h = e[l],
      v = e[c],
      f = t[u],
      d = t[g];
    for (; l <= c && u <= g; ) {
      const y = n.mirror.getId(h),
        w = n.mirror.getId(v),
        p = i.getId(f),
        m = i.getId(d);
      if (h === void 0) h = e[++l];
      else if (v === void 0) v = e[--c];
      else if (y !== -1 && y === p) Ft(h, f, n, i), (h = e[++l]), (f = t[++u]);
      else if (w !== -1 && w === m) Ft(v, d, n, i), (v = e[--c]), (d = t[--g]);
      else if (y !== -1 && y === m)
        r.insertBefore(h, v.nextSibling),
          Ft(h, d, n, i),
          (h = e[++l]),
          (d = t[--g]);
      else if (w !== -1 && w === p)
        r.insertBefore(v, h), Ft(v, f, n, i), (v = e[--c]), (f = t[++u]);
      else {
        if (!a) {
          a = {};
          for (let b = l; b <= c; b++) {
            const _ = e[b];
            _ && n.mirror.hasNode(_) && (a[n.mirror.getId(_)] = b);
          }
        }
        if (((s = a[i.getId(f)]), s)) {
          const b = e[s];
          r.insertBefore(b, h), Ft(b, f, n, i), (e[s] = void 0);
        } else {
          const b = Pa(f, n.mirror, i);
          r.nodeName === "#document" &&
            ((o = n.mirror.getMeta(b)) === null || o === void 0
              ? void 0
              : o.type) === we.Element &&
            r.documentElement &&
            (r.removeChild(r.documentElement), (e[l] = void 0), (h = void 0)),
            r.insertBefore(b, h || null),
            Ft(b, f, n, i);
        }
        f = t[++u];
      }
    }
    if (l > c) {
      const y = t[g + 1];
      let w = null;
      for (
        y &&
        r.childNodes.forEach((p) => {
          n.mirror.getId(p) === i.getId(y) && (w = p);
        });
        u <= g;
        ++u
      ) {
        const p = Pa(t[u], n.mirror, i);
        r.insertBefore(p, w), Ft(p, t[u], n, i);
      }
    } else if (u > g)
      for (; l <= c; l++) {
        const y = e[l];
        y && (r.removeChild(y), n.mirror.removeNodeFromMap(y));
      }
  }
  function Pa(e, t, r) {
    const n = r.getId(e),
      i = r.getMeta(e);
    let o = null;
    if ((n > -1 && (o = t.getNode(n)), o !== null)) return o;
    switch (e.RRNodeType) {
      case we.Document:
        o = new Document();
        break;
      case we.DocumentType:
        o = document.implementation.createDocumentType(
          e.name,
          e.publicId,
          e.systemId
        );
        break;
      case we.Element: {
        let a = e.tagName.toLowerCase();
        (a = dp[a] || a),
          (o =
            i && "isSVG" in i && i != null && i.isSVG
              ? document.createElementNS(La.svg, a)
              : document.createElement(e.tagName));
        break;
      }
      case we.Text:
        o = document.createTextNode(e.data);
        break;
      case we.Comment:
        o = document.createComment(e.data);
        break;
      case we.CDATA:
        o = document.createCDATASection(e.data);
    }
    return i && t.add(o, Object.assign({}, i)), o;
  }
  class sn extends (function (t) {
    return class $0 extends t {
      constructor() {
        super(...arguments),
          (this.nodeType = $e.DOCUMENT_NODE),
          (this.nodeName = "#document"),
          (this.compatMode = "CSS1Compat"),
          (this.RRNodeType = we.Document),
          (this.textContent = null);
      }
      get documentElement() {
        return (
          this.childNodes.find(
            (n) => n.RRNodeType === we.Element && n.tagName === "HTML"
          ) || null
        );
      }
      get body() {
        var n;
        return (
          ((n = this.documentElement) === null || n === void 0
            ? void 0
            : n.childNodes.find(
                (i) => i.RRNodeType === we.Element && i.tagName === "BODY"
              )) || null
        );
      }
      get head() {
        var n;
        return (
          ((n = this.documentElement) === null || n === void 0
            ? void 0
            : n.childNodes.find(
                (i) => i.RRNodeType === we.Element && i.tagName === "HEAD"
              )) || null
        );
      }
      get implementation() {
        return this;
      }
      get firstElementChild() {
        return this.documentElement;
      }
      appendChild(n) {
        const i = n.RRNodeType;
        if (
          (i === we.Element || i === we.DocumentType) &&
          this.childNodes.some((o) => o.RRNodeType === i)
        )
          throw new Error(
            `RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${
              i === we.Element ? "RRElement" : "RRDoctype"
            } on RRDocument allowed.`
          );
        return (
          (n.parentElement = null),
          (n.parentNode = this),
          this.childNodes.push(n),
          n
        );
      }
      insertBefore(n, i) {
        const o = n.RRNodeType;
        if (
          (o === we.Element || o === we.DocumentType) &&
          this.childNodes.some((s) => s.RRNodeType === o)
        )
          throw new Error(
            `RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${
              o === we.Element ? "RRElement" : "RRDoctype"
            } on RRDocument allowed.`
          );
        if (i === null) return this.appendChild(n);
        const a = this.childNodes.indexOf(i);
        if (a == -1)
          throw new Error(
            "Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(a, 0, n),
          (n.parentElement = null),
          (n.parentNode = this),
          n
        );
      }
      removeChild(n) {
        const i = this.childNodes.indexOf(n);
        if (i === -1)
          throw new Error(
            "Failed to execute 'removeChild' on 'RRDocument': The RRNode to be removed is not a child of this RRNode."
          );
        return (
          this.childNodes.splice(i, 1),
          (n.parentElement = null),
          (n.parentNode = null),
          n
        );
      }
      open() {
        this.childNodes = [];
      }
      close() {}
      write(n) {
        let i;
        if (
          (n ===
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
            ? (i = "-//W3C//DTD XHTML 1.0 Transitional//EN")
            : n ===
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' &&
              (i = "-//W3C//DTD HTML 4.0 Transitional//EN"),
          i)
        ) {
          const o = this.createDocumentType("html", i, "");
          this.open(), this.appendChild(o);
        }
      }
      createDocument(n, i, o) {
        return new $0();
      }
      createDocumentType(n, i, o) {
        const a = new (P0(Dt))(n, i, o);
        return (a.ownerDocument = this), a;
      }
      createElement(n) {
        const i = new (F0(Dt))(n);
        return (i.ownerDocument = this), i;
      }
      createElementNS(n, i) {
        return this.createElement(i);
      }
      createTextNode(n) {
        const i = new (B0(Dt))(n);
        return (i.ownerDocument = this), i;
      }
      createComment(n) {
        const i = new (j0(Dt))(n);
        return (i.ownerDocument = this), i;
      }
      createCDATASection(n) {
        const i = new (Y0(Dt))(n);
        return (i.ownerDocument = this), i;
      }
      toString() {
        return "RRDocument";
      }
    };
  })(Dt) {
    constructor(t) {
      super(),
        (this.UNSERIALIZED_STARTING_ID = -2),
        (this._unserializedId = this.UNSERIALIZED_STARTING_ID),
        (this.mirror = new wp()),
        (this.scrollData = null),
        t && (this.mirror = t);
    }
    get unserializedId() {
      return this._unserializedId--;
    }
    createDocument(t, r, n) {
      return new sn();
    }
    createDocumentType(t, r, n) {
      const i = new fp(t, r, n);
      return (i.ownerDocument = this), i;
    }
    createElement(t) {
      const r = t.toUpperCase();
      let n;
      switch (r) {
        case "AUDIO":
        case "VIDEO":
          n = new hp(r);
          break;
        case "IFRAME":
          n = new gp(r, this.mirror);
          break;
        case "CANVAS":
          n = new pp(r);
          break;
        case "STYLE":
          n = new mp(r);
          break;
        default:
          n = new zn(r);
      }
      return (n.ownerDocument = this), n;
    }
    createComment(t) {
      const r = new yp(t);
      return (r.ownerDocument = this), r;
    }
    createCDATASection(t) {
      const r = new bp(t);
      return (r.ownerDocument = this), r;
    }
    createTextNode(t) {
      const r = new vp(t);
      return (r.ownerDocument = this), r;
    }
    destroyTree() {
      (this.childNodes = []), this.mirror.reset();
    }
    open() {
      super.open(), (this._unserializedId = this.UNSERIALIZED_STARTING_ID);
    }
  }
  const fp = P0(Dt);
  class zn extends F0(Dt) {
    constructor() {
      super(...arguments), (this.inputData = null), (this.scrollData = null);
    }
  }
  class hp extends (function (t) {
    return class extends t {
      attachShadow(r) {
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
  })(zn) {}
  class pp extends zn {
    constructor() {
      super(...arguments),
        (this.rr_dataURL = null),
        (this.canvasMutations = []);
    }
    getContext() {
      return null;
    }
  }
  class mp extends zn {
    constructor() {
      super(...arguments), (this.rules = []);
    }
  }
  class gp extends zn {
    constructor(t, r) {
      super(t),
        (this.contentDocument = new sn()),
        (this.contentDocument.mirror = r);
    }
  }
  const vp = B0(Dt),
    yp = j0(Dt),
    bp = Y0(Dt);
  function U0(e, t, r, n) {
    let i;
    switch (e.nodeType) {
      case $e.DOCUMENT_NODE:
        n && n.nodeName === "IFRAME"
          ? (i = n.contentDocument)
          : ((i = t), (i.compatMode = e.compatMode));
        break;
      case $e.DOCUMENT_TYPE_NODE: {
        const a = e;
        i = t.createDocumentType(a.name, a.publicId, a.systemId);
        break;
      }
      case $e.ELEMENT_NODE: {
        const a = e,
          s = (function (c) {
            return c instanceof HTMLFormElement
              ? "FORM"
              : c.tagName.toUpperCase();
          })(a);
        i = t.createElement(s);
        const l = i;
        for (const { name: c, value: u } of Array.from(a.attributes))
          l.attributes[c] = u;
        a.scrollLeft && (l.scrollLeft = a.scrollLeft),
          a.scrollTop && (l.scrollTop = a.scrollTop);
        break;
      }
      case $e.TEXT_NODE:
        i = t.createTextNode(e.textContent || "");
        break;
      case $e.CDATA_SECTION_NODE:
        i = t.createCDATASection(e.data);
        break;
      case $e.COMMENT_NODE:
        i = t.createComment(e.textContent || "");
        break;
      case $e.DOCUMENT_FRAGMENT_NODE:
        i = n.attachShadow({ mode: "open" });
        break;
      default:
        return null;
    }
    let o = r.getMeta(e);
    return (
      t instanceof sn &&
        (o || ((o = z0(i, t.unserializedId)), r.add(e, o)),
        t.mirror.add(i, Object.assign({}, o))),
      i
    );
  }
  function xp(
    e,
    t = (function () {
      return new op();
    })(),
    r = new sn()
  ) {
    return (
      (function n(i, o) {
        const a = U0(i, r, t, o);
        if (a !== null)
          if (
            ((o == null ? void 0 : o.nodeName) !== "IFRAME" &&
              i.nodeType !== $e.DOCUMENT_FRAGMENT_NODE &&
              (o == null || o.appendChild(a),
              (a.parentNode = o),
              (a.parentElement = o)),
            i.nodeName === "IFRAME")
          ) {
            const s = i.contentDocument;
            s && n(s, a);
          } else
            (i.nodeType !== $e.DOCUMENT_NODE &&
              i.nodeType !== $e.ELEMENT_NODE &&
              i.nodeType !== $e.DOCUMENT_FRAGMENT_NODE) ||
              (i.nodeType === $e.ELEMENT_NODE &&
                i.shadowRoot &&
                n(i.shadowRoot, a),
              i.childNodes.forEach((s) => n(s, a)));
      })(e, null),
      r
    );
  }
  class wp {
    constructor() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    getId(t) {
      var r;
      if (!t) return -1;
      const n = (r = this.getMeta(t)) === null || r === void 0 ? void 0 : r.id;
      return n ?? -1;
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
      const r = this.getId(t);
      this.idNodeMap.delete(r),
        t.childNodes && t.childNodes.forEach((n) => this.removeNodeFromMap(n));
    }
    has(t) {
      return this.idNodeMap.has(t);
    }
    hasNode(t) {
      return this.nodeMetaMap.has(t);
    }
    add(t, r) {
      const n = r.id;
      this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, r);
    }
    replace(t, r) {
      const n = this.getNode(t);
      if (n) {
        const i = this.nodeMetaMap.get(n);
        i && this.nodeMetaMap.set(r, i);
      }
      this.idNodeMap.set(t, r);
    }
    reset() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
  }
  function z0(e, t) {
    switch (e.RRNodeType) {
      case we.Document:
        return { id: t, type: e.RRNodeType, childNodes: [] };
      case we.DocumentType: {
        const r = e;
        return {
          id: t,
          type: e.RRNodeType,
          name: r.name,
          publicId: r.publicId,
          systemId: r.systemId,
        };
      }
      case we.Element:
        return {
          id: t,
          type: e.RRNodeType,
          tagName: e.tagName.toLowerCase(),
          attributes: {},
          childNodes: [],
        };
      case we.Text:
      case we.Comment:
        return { id: t, type: e.RRNodeType, textContent: e.textContent || "" };
      case we.CDATA:
        return { id: t, type: e.RRNodeType, textContent: "" };
    }
  }
  var xt = Uint8Array,
    gr = Uint16Array,
    Fa = Uint32Array,
    H0 = new xt([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    W0 = new xt([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    _p = new xt([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    V0 = function (e, t) {
      for (var r = new gr(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
      var i = new Fa(r[30]);
      for (n = 1; n < 30; ++n)
        for (var o = r[n]; o < r[n + 1]; ++o) i[o] = ((o - r[n]) << 5) | n;
      return [r, i];
    },
    q0 = V0(H0, 2),
    G0 = q0[0],
    Sp = q0[1];
  (G0[28] = 258), (Sp[258] = 28);
  for (var kp = V0(W0, 0)[0], Ba = new gr(32768), Pe = 0; Pe < 32768; ++Pe) {
    var kr = ((43690 & Pe) >>> 1) | ((21845 & Pe) << 1);
    (kr =
      ((61680 & (kr = ((52428 & kr) >>> 2) | ((13107 & kr) << 2))) >>> 4) |
      ((3855 & kr) << 4)),
      (Ba[Pe] = (((65280 & kr) >>> 8) | ((255 & kr) << 8)) >>> 1);
  }
  var Tn = function (e, t, r) {
      for (var n = e.length, i = 0, o = new gr(t); i < n; ++i) ++o[e[i] - 1];
      var a,
        s = new gr(t);
      for (i = 0; i < t; ++i) s[i] = (s[i - 1] + o[i - 1]) << 1;
      if (r) {
        a = new gr(1 << t);
        var l = 15 - t;
        for (i = 0; i < n; ++i)
          if (e[i])
            for (
              var c = (i << 4) | e[i],
                u = t - e[i],
                g = s[e[i] - 1]++ << u,
                h = g | ((1 << u) - 1);
              g <= h;
              ++g
            )
              a[Ba[g] >>> l] = c;
      } else
        for (a = new gr(n), i = 0; i < n; ++i)
          a[i] = Ba[s[e[i] - 1]++] >>> (15 - e[i]);
      return a;
    },
    Hn = new xt(288);
  for (Pe = 0; Pe < 144; ++Pe) Hn[Pe] = 8;
  for (Pe = 144; Pe < 256; ++Pe) Hn[Pe] = 9;
  for (Pe = 256; Pe < 280; ++Pe) Hn[Pe] = 7;
  for (Pe = 280; Pe < 288; ++Pe) Hn[Pe] = 8;
  var Z0 = new xt(32);
  for (Pe = 0; Pe < 32; ++Pe) Z0[Pe] = 5;
  var Ep = Tn(Hn, 9, 1),
    Cp = Tn(Z0, 5, 1),
    To = function (e) {
      for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
      return t;
    },
    Ct = function (e, t, r) {
      var n = (t / 8) >> 0;
      return ((e[n] | (e[n + 1] << 8)) >>> (7 & t)) & r;
    },
    Do = function (e, t) {
      var r = (t / 8) >> 0;
      return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >>> (7 & t);
    },
    K0 = function (e, t, r) {
      (t == null || t < 0) && (t = 0),
        (r == null || r > e.length) && (r = e.length);
      var n = new (e instanceof gr ? gr : e instanceof Fa ? Fa : xt)(r - t);
      return n.set(e.subarray(t, r)), n;
    };
  function Tp(e, t) {
    return (function (r, n, i) {
      var o = r.length,
        a = !n || i,
        s = !i || i.i;
      i || (i = {}), n || (n = new xt(3 * o));
      var l,
        c = function (he) {
          var Ye = n.length;
          if (he > Ye) {
            var nt = new xt(Math.max(2 * Ye, he));
            nt.set(n), (n = nt);
          }
        },
        u = i.f || 0,
        g = i.p || 0,
        h = i.b || 0,
        v = i.l,
        f = i.d,
        d = i.m,
        y = i.n,
        w = 8 * o;
      do {
        if (!v) {
          i.f = u = Ct(r, g, 1);
          var p = Ct(r, g + 1, 3);
          if (((g += 3), !p)) {
            var m =
                r[(j = (((l = g) / 8) >> 0) + (7 & l && 1) + 4) - 4] |
                (r[j - 3] << 8),
              b = j + m;
            if (b > o) {
              if (s) throw "unexpected EOF";
              break;
            }
            a && c(h + m),
              n.set(r.subarray(j, b), h),
              (i.b = h += m),
              (i.p = g = 8 * b);
            continue;
          }
          if (p == 1) (v = Ep), (f = Cp), (d = 9), (y = 5);
          else {
            if (p != 2) throw "invalid block type";
            var _ = Ct(r, g, 31) + 257,
              S = Ct(r, g + 10, 15) + 4,
              k = _ + Ct(r, g + 5, 31) + 1;
            g += 14;
            for (var E = new xt(k), D = new xt(19), C = 0; C < S; ++C)
              D[_p[C]] = Ct(r, g + 3 * C, 7);
            g += 3 * S;
            var T = To(D),
              A = (1 << T) - 1;
            if (!s && g + k * (T + 7) > w) break;
            var M = Tn(D, T, 1);
            for (C = 0; C < k; ) {
              var j,
                z = M[Ct(r, g, A)];
              if (((g += 15 & z), (j = z >>> 4) < 16)) E[C++] = j;
              else {
                var $ = 0,
                  Y = 0;
                for (
                  j == 16
                    ? ((Y = 3 + Ct(r, g, 3)), (g += 2), ($ = E[C - 1]))
                    : j == 17
                    ? ((Y = 3 + Ct(r, g, 7)), (g += 3))
                    : j == 18 && ((Y = 11 + Ct(r, g, 127)), (g += 7));
                  Y--;

                )
                  E[C++] = $;
              }
            }
            var q = E.subarray(0, _),
              F = E.subarray(_);
            (d = To(q)), (y = To(F)), (v = Tn(q, d, 1)), (f = Tn(F, y, 1));
          }
          if (g > w) throw "unexpected EOF";
        }
        a && c(h + 131072);
        for (
          var L = (1 << d) - 1, N = (1 << y) - 1, P = d + y + 18;
          s || g + P < w;

        ) {
          var I = ($ = v[Do(r, g) & L]) >>> 4;
          if ((g += 15 & $) > w) throw "unexpected EOF";
          if (!$) throw "invalid length/literal";
          if (I < 256) n[h++] = I;
          else {
            if (I == 256) {
              v = null;
              break;
            }
            var O = I - 254;
            if (I > 264) {
              var V = H0[(C = I - 257)];
              (O = Ct(r, g, (1 << V) - 1) + G0[C]), (g += V);
            }
            var J = f[Do(r, g) & N],
              se = J >>> 4;
            if (!J) throw "invalid distance";
            if (
              ((g += 15 & J),
              (F = kp[se]),
              se > 3 &&
                ((V = W0[se]), (F += Do(r, g) & ((1 << V) - 1)), (g += V)),
              g > w)
            )
              throw "unexpected EOF";
            a && c(h + 131072);
            for (var H = h + O; h < H; h += 4)
              (n[h] = n[h - F]),
                (n[h + 1] = n[h + 1 - F]),
                (n[h + 2] = n[h + 2 - F]),
                (n[h + 3] = n[h + 3 - F]);
            h = H;
          }
        }
        (i.l = v),
          (i.p = g),
          (i.b = h),
          v && ((u = 1), (i.m = d), (i.d = f), (i.n = y));
      } while (!u);
      return h == n.length ? n : K0(n, 0, h);
    })(
      ((function (r) {
        if ((15 & r[0]) != 8 || r[0] >>> 4 > 7 || ((r[0] << 8) | r[1]) % 31)
          throw "invalid zlib data";
        if (32 & r[1])
          throw "invalid zlib data: preset dictionaries not supported";
      })(e),
      e.subarray(2, -4)),
      t
    );
  }
  const Dp = (e) => {
    if (typeof e != "string") return e;
    try {
      const t = JSON.parse(e);
      if (t.timestamp) return t;
    } catch {}
    try {
      const t = JSON.parse(
        (function (r, n) {
          var i = "";
          if (!n && typeof TextDecoder < "u")
            return new TextDecoder().decode(r);
          for (var o = 0; o < r.length; ) {
            var a = r[o++];
            a < 128 || n
              ? (i += String.fromCharCode(a))
              : a < 224
              ? (i += String.fromCharCode(((31 & a) << 6) | (63 & r[o++])))
              : a < 240
              ? (i += String.fromCharCode(
                  ((15 & a) << 12) | ((63 & r[o++]) << 6) | (63 & r[o++])
                ))
              : ((a =
                  (((15 & a) << 18) |
                    ((63 & r[o++]) << 12) |
                    ((63 & r[o++]) << 6) |
                    (63 & r[o++])) -
                  65536),
                (i += String.fromCharCode(
                  55296 | (a >> 10),
                  56320 | (1023 & a)
                )));
          }
          return i;
        })(
          Tp(
            (function (r, n) {
              var i = r.length;
              if (!n && typeof TextEncoder < "u")
                return new TextEncoder().encode(r);
              for (
                var o = new xt(r.length + (r.length >>> 1)),
                  a = 0,
                  s = function (g) {
                    o[a++] = g;
                  },
                  l = 0;
                l < i;
                ++l
              ) {
                if (a + 5 > o.length) {
                  var c = new xt(a + 8 + ((i - l) << 1));
                  c.set(o), (o = c);
                }
                var u = r.charCodeAt(l);
                u < 128 || n
                  ? s(u)
                  : u < 2048
                  ? (s(192 | (u >>> 6)), s(128 | (63 & u)))
                  : u > 55295 && u < 57344
                  ? (s(
                      240 |
                        ((u =
                          (65536 + (1047552 & u)) |
                          (1023 & r.charCodeAt(++l))) >>>
                          18)
                    ),
                    s(128 | ((u >>> 12) & 63)),
                    s(128 | ((u >>> 6) & 63)),
                    s(128 | (63 & u)))
                  : (s(224 | (u >>> 12)),
                    s(128 | ((u >>> 6) & 63)),
                    s(128 | (63 & u)));
              }
              return K0(o, 0, a);
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
  function X0(e) {
    return {
      all: (e = e || new Map()),
      on: function (t, r) {
        var n = e.get(t);
        n ? n.push(r) : e.set(t, [r]);
      },
      off: function (t, r) {
        var n = e.get(t);
        n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
      },
      emit: function (t, r) {
        var n = e.get(t);
        n &&
          n.slice().map(function (i) {
            i(r);
          }),
          (n = e.get("*")) &&
            n.slice().map(function (i) {
              i(t, r);
            });
      },
    };
  }
  var Vr,
    Ap = Object.freeze({ __proto__: null, default: X0 });
  function Op(e = window, t = document) {
    if (
      "scrollBehavior" in t.documentElement.style &&
      e.__forceSmoothScrollPolyfill__ !== !0
    )
      return;
    const r = e.HTMLElement || e.Element,
      n = {
        scroll: e.scroll || e.scrollTo,
        scrollBy: e.scrollBy,
        elementScroll: r.prototype.scroll || s,
        scrollIntoView: r.prototype.scrollIntoView,
      },
      i =
        e.performance && e.performance.now
          ? e.performance.now.bind(e.performance)
          : Date.now,
      o =
        ((a = e.navigator.userAgent),
        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(a) ? 1 : 0);
    var a;
    function s(d, y) {
      (this.scrollLeft = d), (this.scrollTop = y);
    }
    function l(d) {
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
    function c(d, y) {
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
    function g(d) {
      const y = c(d, "Y") && u(d, "Y"),
        w = c(d, "X") && u(d, "X");
      return y || w;
    }
    function h(d) {
      for (; d !== t.body && g(d) === !1; ) d = d.parentNode || d.host;
      return d;
    }
    function v(d) {
      let y,
        w,
        p,
        m = (i() - d.startTime) / 468;
      var b;
      (m = m > 1 ? 1 : m),
        (b = m),
        (y = 0.5 * (1 - Math.cos(Math.PI * b))),
        (w = d.startX + (d.x - d.startX) * y),
        (p = d.startY + (d.y - d.startY) * y),
        d.method.call(d.scrollable, w, p),
        (w === d.x && p === d.y) || e.requestAnimationFrame(v.bind(e, d));
    }
    function f(d, y, w) {
      let p, m, b, _;
      const S = i();
      d === t.body
        ? ((p = e),
          (m = e.scrollX || e.pageXOffset),
          (b = e.scrollY || e.pageYOffset),
          (_ = n.scroll))
        : ((p = d), (m = d.scrollLeft), (b = d.scrollTop), (_ = s)),
        v({
          scrollable: p,
          method: _,
          startTime: S,
          startX: m,
          startY: b,
          x: y,
          y: w,
        });
    }
    (e.scroll = e.scrollTo =
      function () {
        arguments[0] !== void 0 &&
          (l(arguments[0]) !== !0
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
            : n.scroll.call(
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
          (l(arguments[0])
            ? n.scrollBy.call(
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
      (r.prototype.scroll = r.prototype.scrollTo =
        function () {
          if (arguments[0] === void 0) return;
          if (l(arguments[0]) === !0) {
            if (typeof arguments[0] == "number" && arguments[1] === void 0)
              throw new SyntaxError("Value could not be converted");
            return void n.elementScroll.call(
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
      (r.prototype.scrollBy = function () {
        arguments[0] !== void 0 &&
          (l(arguments[0]) !== !0
            ? this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior,
              })
            : n.elementScroll.call(
                this,
                arguments[0].left !== void 0
                  ? ~~arguments[0].left + this.scrollLeft
                  : ~~arguments[0] + this.scrollLeft,
                arguments[0].top !== void 0
                  ? ~~arguments[0].top + this.scrollTop
                  : ~~arguments[1] + this.scrollTop
              ));
      }),
      (r.prototype.scrollIntoView = function () {
        if (l(arguments[0]) === !0)
          return void n.scrollIntoView.call(
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
  class Mp {
    constructor(t = [], r) {
      (this.timeOffset = 0),
        (this.raf = null),
        (this.actions = t),
        (this.speed = r.speed),
        (this.liveMode = r.liveMode);
    }
    addAction(t) {
      if (
        !this.actions.length ||
        this.actions[this.actions.length - 1].delay <= t.delay
      )
        return void this.actions.push(t);
      const r = this.findActionIndex(t);
      this.actions.splice(r, 0, t);
    }
    start() {
      this.timeOffset = 0;
      let t = performance.now();
      const r = () => {
        const n = performance.now();
        for (
          this.timeOffset += (n - t) * this.speed, t = n;
          this.actions.length;

        ) {
          const i = this.actions[0];
          if (!(this.timeOffset >= i.delay)) break;
          this.actions.shift(), i.doAction();
        }
        (this.actions.length > 0 || this.liveMode) &&
          (this.raf = requestAnimationFrame(r));
      };
      this.raf = requestAnimationFrame(r);
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
      let r = 0,
        n = this.actions.length - 1;
      for (; r <= n; ) {
        const i = Math.floor((r + n) / 2);
        if (this.actions[i].delay < t.delay) r = i + 1;
        else {
          if (!(this.actions[i].delay > t.delay)) return i + 1;
          n = i - 1;
        }
      }
      return r;
    }
  }
  function zl(e, t) {
    if (
      e.type === Ne.IncrementalSnapshot &&
      e.data.source === Ee.MouseMove &&
      e.data.positions &&
      e.data.positions.length
    ) {
      const r = e.data.positions[0].timeOffset,
        n = e.timestamp + r;
      return (e.delay = n - t), n - t;
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
***************************************************************************** */ function Hl(
    e,
    t
  ) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) return e;
    var n,
      i,
      o = r.call(e),
      a = [];
    try {
      for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; )
        a.push(n.value);
    } catch (s) {
      i = { error: s };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  (function (e) {
    (e[(e.NotStarted = 0)] = "NotStarted"),
      (e[(e.Running = 1)] = "Running"),
      (e[(e.Stopped = 2)] = "Stopped");
  })(Vr || (Vr = {}));
  var J0 = { type: "xstate.init" };
  function Ao(e) {
    return e === void 0 ? [] : [].concat(e);
  }
  function Hr(e) {
    return { type: "xstate.assign", assignment: e };
  }
  function Wl(e, t) {
    return typeof (e = typeof e == "string" && t && t[e] ? t[e] : e) == "string"
      ? { type: e }
      : typeof e == "function"
      ? { type: e.name, exec: e }
      : e;
  }
  function Di(e) {
    return function (t) {
      return e === t;
    };
  }
  function Q0(e) {
    return typeof e == "string" ? { type: e } : e;
  }
  function Vl(e, t) {
    return { value: e, context: t, actions: [], changed: !1, matches: Di(e) };
  }
  function ql(e, t, r) {
    var n = t,
      i = !1;
    return [
      e.filter(function (o) {
        if (o.type === "xstate.assign") {
          i = !0;
          var a = Object.assign({}, n);
          return (
            typeof o.assignment == "function"
              ? (a = o.assignment(n, r))
              : Object.keys(o.assignment).forEach(function (s) {
                  a[s] =
                    typeof o.assignment[s] == "function"
                      ? o.assignment[s](n, r)
                      : o.assignment[s];
                }),
            (n = a),
            !1
          );
        }
        return !0;
      }),
      n,
      i,
    ];
  }
  function ed(e, t) {
    t === void 0 && (t = {});
    var r = Hl(
        ql(
          Ao(e.states[e.initial].entry).map(function (a) {
            return Wl(a, t.actions);
          }),
          e.context,
          J0
        ),
        2
      ),
      n = r[0],
      i = r[1],
      o = {
        config: e,
        _options: t,
        initialState: {
          value: e.initial,
          actions: n,
          context: i,
          matches: Di(e.initial),
        },
        transition: function (a, s) {
          var l,
            c,
            u = typeof a == "string" ? { value: a, context: e.context } : a,
            g = u.value,
            h = u.context,
            v = Q0(s),
            f = e.states[g];
          if (f.on) {
            var d = Ao(f.on[v.type]);
            try {
              for (
                var y = (function (Y) {
                    var q = typeof Symbol == "function" && Symbol.iterator,
                      F = q && Y[q],
                      L = 0;
                    if (F) return F.call(Y);
                    if (Y && typeof Y.length == "number")
                      return {
                        next: function () {
                          return (
                            Y && L >= Y.length && (Y = void 0),
                            { value: Y && Y[L++], done: !Y }
                          );
                        },
                      };
                    throw new TypeError(
                      q
                        ? "Object is not iterable."
                        : "Symbol.iterator is not defined."
                    );
                  })(d),
                  w = y.next();
                !w.done;
                w = y.next()
              ) {
                var p = w.value;
                if (p === void 0) return Vl(g, h);
                var m = typeof p == "string" ? { target: p } : p,
                  b = m.target,
                  _ = m.actions,
                  S = _ === void 0 ? [] : _,
                  k = m.cond,
                  E =
                    k === void 0
                      ? function () {
                          return !0;
                        }
                      : k,
                  D = b === void 0,
                  C = b ?? g,
                  T = e.states[C];
                if (E(h, v)) {
                  var A = Hl(
                      ql(
                        (D
                          ? Ao(S)
                          : [].concat(f.exit, S, T.entry).filter(function (Y) {
                              return Y;
                            })
                        ).map(function (Y) {
                          return Wl(Y, o._options.actions);
                        }),
                        h,
                        v
                      ),
                      3
                    ),
                    M = A[0],
                    j = A[1],
                    z = A[2],
                    $ = b ?? g;
                  return {
                    value: $,
                    context: j,
                    actions: M,
                    changed: b !== g || M.length > 0 || z,
                    matches: Di($),
                  };
                }
              }
            } catch (Y) {
              l = { error: Y };
            } finally {
              try {
                w && !w.done && (c = y.return) && c.call(y);
              } finally {
                if (l) throw l.error;
              }
            }
          }
          return Vl(g, h);
        },
      };
    return o;
  }
  var Gl = function (e, t) {
    return e.actions.forEach(function (r) {
      var n = r.exec;
      return n && n(e.context, t);
    });
  };
  function td(e) {
    var t = e.initialState,
      r = Vr.NotStarted,
      n = new Set(),
      i = {
        _machine: e,
        send: function (o) {
          r === Vr.Running &&
            ((t = e.transition(t, o)),
            Gl(t, Q0(o)),
            n.forEach(function (a) {
              return a(t);
            }));
        },
        subscribe: function (o) {
          return (
            n.add(o),
            o(t),
            {
              unsubscribe: function () {
                return n.delete(o);
              },
            }
          );
        },
        start: function (o) {
          if (o) {
            var a =
              typeof o == "object"
                ? o
                : { context: e.config.context, value: o };
            t = {
              value: a.value,
              actions: [],
              context: a.context,
              matches: Di(a.value),
            };
          }
          return (r = Vr.Running), Gl(t, J0), i;
        },
        stop: function () {
          return (r = Vr.Stopped), n.clear(), i;
        },
        get state() {
          return t;
        },
        get status() {
          return r;
        },
      };
    return i;
  }
  function Ip(e, { getCastFn: t, applyEventsSynchronously: r, emitter: n }) {
    const i = ed(
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
          castEvent: Hr({
            lastPlayedEvent: (o, a) =>
              a.type === "CAST_EVENT" ? a.payload.event : o.lastPlayedEvent,
          }),
          recordTimeOffset: Hr((o, a) => {
            let s = o.timeOffset;
            return (
              "payload" in a &&
                "timeOffset" in a.payload &&
                (s = a.payload.timeOffset),
              Object.assign(Object.assign({}, o), {
                timeOffset: s,
                baselineTime: o.events[0].timestamp + s,
              })
            );
          }),
          play(o) {
            var a;
            const {
              timer: s,
              events: l,
              baselineTime: c,
              lastPlayedEvent: u,
            } = o;
            s.clear();
            for (const f of l) zl(f, c);
            const g = (function (f, d) {
              for (let y = f.length - 1; y >= 0; y--) {
                const w = f[y];
                if (w.type === Ne.Meta && w.timestamp <= d) return f.slice(y);
              }
              return f;
            })(l, c);
            let h = u == null ? void 0 : u.timestamp;
            (u == null ? void 0 : u.type) === Ne.IncrementalSnapshot &&
              u.data.source === Ee.MouseMove &&
              (h =
                u.timestamp +
                ((a = u.data.positions[0]) === null || a === void 0
                  ? void 0
                  : a.timeOffset)),
              c < (h || 0) && n.emit(Ae.PlayBack);
            const v = new Array();
            for (const f of g)
              if (!(h && h < c && (f.timestamp <= h || f === u)))
                if (f.timestamp < c) v.push(f);
                else {
                  const d = t(f, !1);
                  s.addAction({
                    doAction: () => {
                      d();
                    },
                    delay: f.delay,
                  });
                }
            r(v), n.emit(Ae.Flush), s.start();
          },
          pause(o) {
            o.timer.clear();
          },
          resetLastPlayedEvent: Hr((o) =>
            Object.assign(Object.assign({}, o), { lastPlayedEvent: null })
          ),
          startLive: Hr({
            baselineTime: (o, a) => (
              o.timer.toggleLiveMode(!0),
              o.timer.start(),
              a.type === "TO_LIVE" && a.payload.baselineTime
                ? a.payload.baselineTime
                : Date.now()
            ),
          }),
          addEvent: Hr((o, a) => {
            const { baselineTime: s, timer: l, events: c } = o;
            if (a.type === "ADD_EVENT") {
              const { event: u } = a.payload;
              zl(u, s);
              let g = c.length - 1;
              if (!c[g] || c[g].timestamp <= u.timestamp) c.push(u);
              else {
                let f = -1,
                  d = 0;
                for (; d <= g; ) {
                  const y = Math.floor((d + g) / 2);
                  c[y].timestamp <= u.timestamp ? (d = y + 1) : (g = y - 1);
                }
                f === -1 && (f = d), c.splice(f, 0, u);
              }
              const h = u.timestamp < s,
                v = t(u, h);
              h
                ? v()
                : l.isActive() &&
                  l.addAction({
                    doAction: () => {
                      v();
                    },
                    delay: u.delay,
                  });
            }
            return Object.assign(Object.assign({}, o), { events: c });
          }),
        },
      }
    );
    return td(i);
  }
  const Zl = new Map();
  function rd(e, t) {
    let r = Zl.get(e);
    return (
      r || ((r = new Map()), Zl.set(e, r)), r.has(t) || r.set(t, []), r.get(t)
    );
  }
  function vr(e, t, r) {
    return (n) =>
      Ar(this, void 0, void 0, function* () {
        if (n && typeof n == "object" && "rr_type" in n) {
          if (
            (r && (r.isUnchanged = !1),
            n.rr_type === "ImageBitmap" && "args" in n)
          ) {
            const i = yield vr(e, t, r)(n.args);
            return yield createImageBitmap.apply(null, i);
          }
          if ("index" in n) {
            if (r || t === null) return n;
            const { rr_type: i, index: o } = n;
            return rd(t, i)[o];
          }
          if ("args" in n) {
            const { rr_type: i, args: o } = n;
            return new window[i](...(yield Promise.all(o.map(vr(e, t, r)))));
          }
          if ("base64" in n)
            return (function (i) {
              var o,
                a,
                s,
                l,
                c,
                u = 0.75 * i.length,
                g = i.length,
                h = 0;
              i[i.length - 1] === "=" && (u--, i[i.length - 2] === "=" && u--);
              var v = new ArrayBuffer(u),
                f = new Uint8Array(v);
              for (o = 0; o < g; o += 4)
                (a = wn[i.charCodeAt(o)]),
                  (s = wn[i.charCodeAt(o + 1)]),
                  (l = wn[i.charCodeAt(o + 2)]),
                  (c = wn[i.charCodeAt(o + 3)]),
                  (f[h++] = (a << 2) | (s >> 4)),
                  (f[h++] = ((15 & s) << 4) | (l >> 2)),
                  (f[h++] = ((3 & l) << 6) | (63 & c));
              return v;
            })(n.base64);
          if ("src" in n) {
            const i = e.get(n.src);
            if (i) return i;
            {
              const o = new Image();
              return (o.src = n.src), e.set(n.src, o), o;
            }
          }
          if ("data" in n && n.rr_type === "Blob") {
            const i = yield Promise.all(n.data.map(vr(e, t, r)));
            return new Blob(i, { type: n.type });
          }
        } else if (Array.isArray(n)) return yield Promise.all(n.map(vr(e, t, r)));
        return n;
      });
  }
  const Np = [
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
  function Rp({
    mutation: e,
    target: t,
    type: r,
    imageMap: n,
    errorHandler: i,
  }) {
    return Ar(this, void 0, void 0, function* () {
      try {
        const o = (function (l, c) {
          try {
            return c === Ti.WebGL
              ? l.getContext("webgl") || l.getContext("experimental-webgl")
              : l.getContext("webgl2");
          } catch {
            return null;
          }
        })(t, r);
        if (!o) return;
        if (e.setter) return void (o[e.property] = e.args[0]);
        const a = o[e.property],
          s = yield Promise.all(e.args.map(vr(n, o)));
        (function (l, c) {
          if (!(c != null && c.constructor)) return;
          const { name: u } = c.constructor;
          if (!Np.includes(u)) return;
          const g = rd(l, u);
          g.includes(c) || g.push(c);
        })(o, a.apply(o, s));
      } catch (o) {
        i(e, o);
      }
    });
  }
  function Lp({
    event: e,
    mutation: t,
    target: r,
    imageMap: n,
    errorHandler: i,
  }) {
    return Ar(this, void 0, void 0, function* () {
      try {
        const o = r.getContext("2d");
        if (t.setter) return void (o[t.property] = t.args[0]);
        const a = o[t.property];
        if (t.property === "drawImage" && typeof t.args[0] == "string")
          n.get(e), a.apply(o, t.args);
        else {
          const s = yield Promise.all(t.args.map(vr(n, o)));
          a.apply(o, s);
        }
      } catch (o) {
        i(t, o);
      }
    });
  }
  function Kl({
    event: e,
    mutation: t,
    target: r,
    imageMap: n,
    canvasEventMap: i,
    errorHandler: o,
  }) {
    return Ar(this, void 0, void 0, function* () {
      try {
        const a = i.get(e) || t,
          s = "commands" in a ? a.commands : [a];
        if ([Ti.WebGL, Ti.WebGL2].includes(t.type)) {
          for (let l = 0; l < s.length; l++) {
            const c = s[l];
            yield Rp({
              mutation: c,
              type: t.type,
              target: r,
              imageMap: n,
              errorHandler: o,
            });
          }
          return;
        }
        for (let l = 0; l < s.length; l++) {
          const c = s[l];
          yield Lp({
            event: e,
            mutation: c,
            target: r,
            imageMap: n,
            errorHandler: o,
          });
        }
      } catch (a) {
        o(t, a);
      }
    });
  }
  const Pp = X0 || Ap,
    Oo = { duration: 500, lineCap: "round", lineWidth: 3, strokeStyle: "red" };
  function Xl(e) {
    return (
      e.type == Ne.IncrementalSnapshot &&
      (e.data.source == Ee.TouchMove ||
        (e.data.source == Ee.MouseInteraction && e.data.type == ot.TouchStart))
    );
  }
  class Fp {
    constructor(t, r) {
      if (
        ((this.usingVirtualDom = !1),
        (this.virtualDom = new sn()),
        (this.mouseTail = null),
        (this.tailPositions = []),
        (this.emitter = Pp()),
        (this.legacy_missingNodeRetryMap = {}),
        (this.cache = Rl()),
        (this.imageMap = new Map()),
        (this.canvasEventMap = new Map()),
        (this.mirror = Zh()),
        (this.styleMirror = new tp()),
        (this.firstFullSnapshot = null),
        (this.newDocumentQueue = []),
        (this.mousePos = null),
        (this.touchActive = null),
        (this.lastSelectionData = null),
        (this.constructedStyleMutations = []),
        (this.adoptedStyleSheets = []),
        (this.handleResize = (s) => {
          this.iframe.style.display = "inherit";
          for (const l of [this.mouseTail, this.iframe])
            l &&
              (l.setAttribute("width", String(s.width)),
              l.setAttribute("height", String(s.height)));
        }),
        (this.applyEventsSynchronously = (s) => {
          for (const l of s) {
            switch (l.type) {
              case Ne.DomContentLoaded:
              case Ne.Load:
              case Ne.Custom:
                continue;
              case Ne.FullSnapshot:
              case Ne.Meta:
              case Ne.Plugin:
              case Ne.IncrementalSnapshot:
            }
            this.getCastFn(l, !0)();
          }
          this.touchActive === !0
            ? this.mouse.classList.add("touch-active")
            : this.touchActive === !1 &&
              this.mouse.classList.remove("touch-active"),
            (this.touchActive = null);
        }),
        (this.getCastFn = (s, l = !1) => {
          let c;
          switch (s.type) {
            case Ne.DomContentLoaded:
            case Ne.Load:
              break;
            case Ne.Custom:
              c = () => {
                this.emitter.emit(Ae.CustomEvent, s);
              };
              break;
            case Ne.Meta:
              c = () =>
                this.emitter.emit(Ae.Resize, {
                  width: s.data.width,
                  height: s.data.height,
                });
              break;
            case Ne.FullSnapshot:
              c = () => {
                var u;
                if (this.firstFullSnapshot) {
                  if (this.firstFullSnapshot === s)
                    return void (this.firstFullSnapshot = !0);
                } else this.firstFullSnapshot = !0;
                this.rebuildFullSnapshot(s, l),
                  (u = this.iframe.contentWindow) === null ||
                    u === void 0 ||
                    u.scrollTo(s.data.initialOffset),
                  this.styleMirror.reset();
              };
              break;
            case Ne.IncrementalSnapshot:
              c = () => {
                if (
                  (this.applyIncremental(s, l),
                  !l &&
                    (s === this.nextUserInteractionEvent &&
                      ((this.nextUserInteractionEvent = null),
                      this.backToNormal()),
                    this.config.skipInactive && !this.nextUserInteractionEvent))
                ) {
                  for (const u of this.service.state.context.events)
                    if (
                      !(u.timestamp <= s.timestamp) &&
                      this.isUserInteraction(u)
                    ) {
                      u.delay - s.delay >
                        1e4 * this.speedService.state.context.timer.speed &&
                        (this.nextUserInteractionEvent = u);
                      break;
                    }
                  if (this.nextUserInteractionEvent) {
                    const u = this.nextUserInteractionEvent.delay - s.delay,
                      g = {
                        speed: Math.min(
                          Math.round(u / 5e3),
                          this.config.maxSpeed
                        ),
                      };
                    this.speedService.send({
                      type: "FAST_FORWARD",
                      payload: g,
                    }),
                      this.emitter.emit(Ae.SkipStart, g);
                  }
                }
              };
          }
          return () => {
            c && c();
            for (const g of this.config.plugins || [])
              g.handler && g.handler(s, l, { replayer: this });
            this.service.send({ type: "CAST_EVENT", payload: { event: s } });
            const u = this.service.state.context.events.length - 1;
            if (s === this.service.state.context.events[u]) {
              const g = () => {
                u < this.service.state.context.events.length - 1 ||
                  (this.backToNormal(),
                  this.service.send("END"),
                  this.emitter.emit(Ae.Finish));
              };
              s.type === Ne.IncrementalSnapshot &&
              s.data.source === Ee.MouseMove &&
              s.data.positions.length
                ? setTimeout(() => {
                    g();
                  }, Math.max(0, 50 - s.data.positions[0].timeOffset))
                : g();
            }
            this.emitter.emit(Ae.EventCast, s);
          };
        }),
        !(r != null && r.liveMode) && t.length < 2)
      )
        throw new Error("Replayer need at least 2 events.");
      const n = {
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
        mouseTail: Oo,
        useVirtualDom: !0,
      };
      (this.config = Object.assign({}, n, r)),
        (this.handleResize = this.handleResize.bind(this)),
        (this.getCastFn = this.getCastFn.bind(this)),
        (this.applyEventsSynchronously =
          this.applyEventsSynchronously.bind(this)),
        this.emitter.on(Ae.Resize, this.handleResize),
        this.setupDom();
      for (const s of this.config.plugins || [])
        s.getMirror && s.getMirror({ nodeMirror: this.mirror });
      this.emitter.on(Ae.Flush, () => {
        if (this.usingVirtualDom) {
          const s = {
            mirror: this.mirror,
            applyCanvas: (l, c, u) => {
              Kl({
                event: l,
                mutation: c,
                target: u,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this),
              });
            },
            applyInput: this.applyInput.bind(this),
            applyScroll: this.applyScroll.bind(this),
            applyStyleSheetMutation: (l, c) => {
              l.source === Ee.StyleSheetRule
                ? this.applyStyleSheetRule(l, c)
                : l.source === Ee.StyleDeclaration &&
                  this.applyStyleDeclaration(l, c);
            },
          };
          if (
            (this.iframe.contentDocument &&
              Ft(
                this.iframe.contentDocument,
                this.virtualDom,
                s,
                this.virtualDom.mirror
              ),
            this.virtualDom.destroyTree(),
            (this.usingVirtualDom = !1),
            Object.keys(this.legacy_missingNodeRetryMap).length)
          )
            for (const l in this.legacy_missingNodeRetryMap)
              try {
                const c = this.legacy_missingNodeRetryMap[l],
                  u = Pa(c.node, this.mirror, this.virtualDom.mirror);
                Ft(u, c.node, s, this.virtualDom.mirror), (c.node = u);
              } catch (c) {
                this.config.showWarning && console.warn(c);
              }
          this.constructedStyleMutations.forEach((l) => {
            this.applyStyleSheetMutation(l);
          }),
            (this.constructedStyleMutations = []),
            this.adoptedStyleSheets.forEach((l) => {
              this.applyAdoptedStyleSheet(l);
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
        this.emitter.on(Ae.PlayBack, () => {
          (this.firstFullSnapshot = null),
            this.mirror.reset(),
            this.styleMirror.reset();
        });
      const i = new Mp([], {
        speed: this.config.speed,
        liveMode: this.config.liveMode,
      });
      (this.service = Ip(
        {
          events: t
            .map((s) => (r && r.unpackFn ? r.unpackFn(s) : s))
            .sort((s, l) => s.timestamp - l.timestamp),
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
        this.service.subscribe((s) => {
          this.emitter.emit(Ae.StateChange, { player: s });
        }),
        (this.speedService = td(
          ed(
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
                setSpeed: (s, l) => {
                  "payload" in l && s.timer.setSpeed(l.payload.speed);
                },
                recordSpeed: Hr({ normalSpeed: (s) => s.timer.speed }),
                restoreSpeed: (s) => {
                  s.timer.setSpeed(s.normalSpeed);
                },
              },
            }
          )
        )),
        this.speedService.start(),
        this.speedService.subscribe((s) => {
          this.emitter.emit(Ae.StateChange, { speed: s });
        });
      const o = this.service.state.context.events.find(
          (s) => s.type === Ne.Meta
        ),
        a = this.service.state.context.events.find(
          (s) => s.type === Ne.FullSnapshot
        );
      if (o) {
        const { width: s, height: l } = o.data;
        setTimeout(() => {
          this.emitter.emit(Ae.Resize, { width: s, height: l });
        }, 0);
      }
      a &&
        setTimeout(() => {
          var s;
          this.firstFullSnapshot ||
            ((this.firstFullSnapshot = a),
            this.rebuildFullSnapshot(a),
            (s = this.iframe.contentWindow) === null ||
              s === void 0 ||
              s.scrollTo(a.data.initialOffset));
        }, 1),
        this.service.state.context.events.find(Xl) &&
          this.mouse.classList.add("touch-device");
    }
    get timer() {
      return this.service.state.context.timer;
    }
    on(t, r) {
      return this.emitter.on(t, r), this;
    }
    off(t, r) {
      return this.emitter.off(t, r), this;
    }
    setConfig(t) {
      Object.keys(t).forEach((r) => {
        t[r], (this.config[r] = t[r]);
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
        r =
          this.service.state.context.events[
            this.service.state.context.events.length - 1
          ];
      return {
        startTime: t.timestamp,
        endTime: r.timestamp,
        totalTime: r.timestamp - t.timestamp,
      };
    }
    getCurrentTime() {
      return this.timer.timeOffset + this.getTimeOffset();
    }
    getTimeOffset() {
      const { baselineTime: t, events: r } = this.service.state.context;
      return t - r[0].timestamp;
    }
    getMirror() {
      return this.mirror;
    }
    play(t = 0) {
      var r, n;
      this.service.state.matches("paused") ||
        this.service.send({ type: "PAUSE" }),
        this.service.send({ type: "PLAY", payload: { timeOffset: t } }),
        (n =
          (r = this.iframe.contentDocument) === null || r === void 0
            ? void 0
            : r.getElementsByTagName("html")[0]) === null ||
          n === void 0 ||
          n.classList.remove("rrweb-paused"),
        this.emitter.emit(Ae.Start);
    }
    pause(t) {
      var r, n;
      t === void 0 &&
        this.service.state.matches("playing") &&
        this.service.send({ type: "PAUSE" }),
        typeof t == "number" &&
          (this.play(t), this.service.send({ type: "PAUSE" })),
        (n =
          (r = this.iframe.contentDocument) === null || r === void 0
            ? void 0
            : r.getElementsByTagName("html")[0]) === null ||
          n === void 0 ||
          n.classList.add("rrweb-paused"),
        this.emitter.emit(Ae.Pause);
    }
    resume(t = 0) {
      console.warn(
        "The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."
      ),
        this.play(t),
        this.emitter.emit(Ae.Resume);
    }
    destroy() {
      this.pause(),
        this.config.root.removeChild(this.wrapper),
        this.emitter.emit(Ae.Destroy);
    }
    startLive(t) {
      this.service.send({ type: "TO_LIVE", payload: { baselineTime: t } });
    }
    addEvent(t) {
      const r = this.config.unpackFn ? this.config.unpackFn(t) : t;
      Xl(r) && this.mouse.classList.add("touch-device"),
        Promise.resolve().then(() =>
          this.service.send({ type: "ADD_EVENT", payload: { event: r } })
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
      this.cache = Rl();
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
          (Op(this.iframe.contentWindow, this.iframe.contentDocument),
          (function (r = window) {
            "NodeList" in r &&
              !r.NodeList.prototype.forEach &&
              (r.NodeList.prototype.forEach = Array.prototype.forEach),
              "DOMTokenList" in r &&
                !r.DOMTokenList.prototype.forEach &&
                (r.DOMTokenList.prototype.forEach = Array.prototype.forEach),
              Node.prototype.contains ||
                (Node.prototype.contains = (...n) => {
                  let i = n[0];
                  if (!(0 in n)) throw new TypeError("1 argument is required");
                  do if (this === i) return !0;
                  while ((i = i && i.parentNode));
                  return !1;
                });
          })(this.iframe.contentWindow));
    }
    rebuildFullSnapshot(t, r = !1) {
      if (!this.iframe.contentDocument)
        return console.warn("Looks like your replayer has been destroyed.");
      Object.keys(this.legacy_missingNodeRetryMap).length &&
        console.warn(
          "Found unresolved missing node map",
          this.legacy_missingNodeRetryMap
        ),
        (this.legacy_missingNodeRetryMap = {});
      const n = [],
        i = (s, l) => {
          this.collectIframeAndAttachDocument(n, s);
          for (const c of this.config.plugins || [])
            c.onBuild && c.onBuild(s, { id: l, replayer: this });
        };
      Qh(t.data.node, {
        doc: this.iframe.contentDocument,
        afterAppend: i,
        cache: this.cache,
        mirror: this.mirror,
      }),
        i(this.iframe.contentDocument, t.data.node.id);
      for (const { mutationInQueue: s, builtNode: l } of n)
        this.attachDocumentToIframe(s, l),
          (this.newDocumentQueue = this.newDocumentQueue.filter(
            (c) => c !== s
          ));
      const { documentElement: o, head: a } = this.iframe.contentDocument;
      this.insertStyleRules(o, a),
        this.service.state.matches("playing") ||
          this.iframe.contentDocument
            .getElementsByTagName("html")[0]
            .classList.add("rrweb-paused"),
        this.emitter.emit(Ae.FullsnapshotRebuilded, t),
        r || this.waitForStylesheetLoad(),
        this.config.UNSAFE_replayCanvas && this.preloadAllImages();
    }
    insertStyleRules(t, r) {
      var n;
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
        const a = this.virtualDom.createElement("style");
        this.virtualDom.mirror.add(a, z0(a, this.virtualDom.unserializedId)),
          t.insertBefore(a, r),
          a.rules.push({
            source: Ee.StyleSheetRule,
            adds: i.map((s, l) => ({ rule: s, index: l })),
          });
      } else {
        const a = document.createElement("style");
        t.insertBefore(a, r);
        for (let s = 0; s < i.length; s++)
          (n = a.sheet) === null || n === void 0 || n.insertRule(i[s], s);
      }
    }
    attachDocumentToIframe(t, r) {
      const n = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
        i = [],
        o = (a, s) => {
          this.collectIframeAndAttachDocument(i, a);
          const l = n.getMeta(a);
          if (
            (l == null ? void 0 : l.type) === Ze.Element &&
            (l == null ? void 0 : l.tagName.toUpperCase()) === "HTML"
          ) {
            const { documentElement: c, head: u } = r.contentDocument;
            this.insertStyleRules(c, u);
          }
          for (const c of this.config.plugins || [])
            c.onBuild && c.onBuild(a, { id: s, replayer: this });
        };
      Cn(t.node, {
        doc: r.contentDocument,
        mirror: n,
        hackCss: !0,
        skipChild: !1,
        afterAppend: o,
        cache: this.cache,
      }),
        o(r.contentDocument, t.node.id);
      for (const { mutationInQueue: a, builtNode: s } of i)
        this.attachDocumentToIframe(a, s),
          (this.newDocumentQueue = this.newDocumentQueue.filter(
            (l) => l !== a
          ));
    }
    collectIframeAndAttachDocument(t, r) {
      if (Eo(r, this.mirror)) {
        const n = this.newDocumentQueue.find(
          (i) => i.parentId === this.mirror.getId(r)
        );
        n && t.push({ mutationInQueue: n, builtNode: r });
      }
    }
    waitForStylesheetLoad() {
      var t;
      const r =
        (t = this.iframe.contentDocument) === null || t === void 0
          ? void 0
          : t.head;
      if (r) {
        const n = new Set();
        let i,
          o = this.service.state;
        const a = () => {
          o = this.service.state;
        };
        this.emitter.on(Ae.Start, a), this.emitter.on(Ae.Pause, a);
        const s = () => {
          this.emitter.off(Ae.Start, a), this.emitter.off(Ae.Pause, a);
        };
        r.querySelectorAll('link[rel="stylesheet"]').forEach((l) => {
          l.sheet ||
            (n.add(l),
            l.addEventListener("load", () => {
              n.delete(l),
                n.size === 0 &&
                  i !== -1 &&
                  (o.matches("playing") && this.play(this.getCurrentTime()),
                  this.emitter.emit(Ae.LoadStylesheetEnd),
                  i && clearTimeout(i),
                  s());
            }));
        }),
          n.size > 0 &&
            (this.service.send({ type: "PAUSE" }),
            this.emitter.emit(Ae.LoadStylesheetStart),
            (i = setTimeout(() => {
              o.matches("playing") && this.play(this.getCurrentTime()),
                (i = -1),
                s();
            }, this.config.loadTimeout)));
      }
    }
    preloadAllImages() {
      return Ar(this, void 0, void 0, function* () {
        this.service.state;
        const t = () => {
          this.service.state;
        };
        this.emitter.on(Ae.Start, t), this.emitter.on(Ae.Pause, t);
        const r = [];
        for (const n of this.service.state.context.events)
          n.type === Ne.IncrementalSnapshot &&
            n.data.source === Ee.CanvasMutation &&
            (r.push(this.deserializeAndPreloadCanvasEvents(n.data, n)),
            ("commands" in n.data ? n.data.commands : [n.data]).forEach((i) => {
              this.preloadImages(i, n);
            }));
        return Promise.all(r);
      });
    }
    preloadImages(t, r) {
      if (
        t.property === "drawImage" &&
        typeof t.args[0] == "string" &&
        !this.imageMap.has(r)
      ) {
        const n = document.createElement("canvas"),
          i = n.getContext("2d"),
          o = i == null ? void 0 : i.createImageData(n.width, n.height);
        o == null || o.data,
          JSON.parse(t.args[0]),
          i == null || i.putImageData(o, 0, 0);
      }
    }
    deserializeAndPreloadCanvasEvents(t, r) {
      return Ar(this, void 0, void 0, function* () {
        if (!this.canvasEventMap.has(r)) {
          const n = { isUnchanged: !0 };
          if ("commands" in t) {
            const i = yield Promise.all(
              t.commands.map((o) =>
                Ar(this, void 0, void 0, function* () {
                  const a = yield Promise.all(
                    o.args.map(vr(this.imageMap, null, n))
                  );
                  return Object.assign(Object.assign({}, o), { args: a });
                })
              )
            );
            n.isUnchanged === !1 &&
              this.canvasEventMap.set(
                r,
                Object.assign(Object.assign({}, t), { commands: i })
              );
          } else {
            const i = yield Promise.all(t.args.map(vr(this.imageMap, null, n)));
            n.isUnchanged === !1 &&
              this.canvasEventMap.set(
                r,
                Object.assign(Object.assign({}, t), { args: i })
              );
          }
        }
      });
    }
    applyIncremental(t, r) {
      var n, i, o;
      const { data: a } = t;
      switch (a.source) {
        case Ee.Mutation:
          try {
            this.applyMutation(a, r);
          } catch (s) {
            this.warn(`Exception in mutation ${s.message || s}`, a);
          }
          break;
        case Ee.Drag:
        case Ee.TouchMove:
        case Ee.MouseMove:
          if (r) {
            const s = a.positions[a.positions.length - 1];
            this.mousePos = { x: s.x, y: s.y, id: s.id, debugData: a };
          } else
            a.positions.forEach((s) => {
              const l = {
                doAction: () => {
                  this.moveAndHover(s.x, s.y, s.id, r, a);
                },
                delay:
                  s.timeOffset +
                  t.timestamp -
                  this.service.state.context.baselineTime,
              };
              this.timer.addAction(l);
            }),
              this.timer.addAction({
                doAction() {},
                delay:
                  t.delay -
                  ((n = a.positions[0]) === null || n === void 0
                    ? void 0
                    : n.timeOffset),
              });
          break;
        case Ee.MouseInteraction: {
          if (a.id === -1 || r) break;
          const s = new Event(ot[a.type].toLowerCase()),
            l = this.mirror.getNode(a.id);
          if (!l) return this.debugNodeNotFound(a, a.id);
          this.emitter.emit(Ae.MouseInteraction, { type: a.type, target: l });
          const { triggerFocus: c } = this.config;
          switch (a.type) {
            case ot.Blur:
              "blur" in l && l.blur();
              break;
            case ot.Focus:
              c && l.focus && l.focus({ preventScroll: !0 });
              break;
            case ot.Click:
            case ot.TouchStart:
            case ot.TouchEnd:
              r
                ? (a.type === ot.TouchStart
                    ? (this.touchActive = !0)
                    : a.type === ot.TouchEnd && (this.touchActive = !1),
                  (this.mousePos = { x: a.x, y: a.y, id: a.id, debugData: a }))
                : (a.type === ot.TouchStart && (this.tailPositions.length = 0),
                  this.moveAndHover(a.x, a.y, a.id, r, a),
                  a.type === ot.Click
                    ? (this.mouse.classList.remove("active"),
                      this.mouse.offsetWidth,
                      this.mouse.classList.add("active"))
                    : a.type === ot.TouchStart
                    ? (this.mouse.offsetWidth,
                      this.mouse.classList.add("touch-active"))
                    : a.type === ot.TouchEnd &&
                      this.mouse.classList.remove("touch-active"));
              break;
            case ot.TouchCancel:
              r
                ? (this.touchActive = !1)
                : this.mouse.classList.remove("touch-active");
              break;
            default:
              l.dispatchEvent(s);
          }
          break;
        }
        case Ee.Scroll:
          if (a.id === -1) break;
          if (this.usingVirtualDom) {
            const s = this.virtualDom.mirror.getNode(a.id);
            if (!s) return this.debugNodeNotFound(a, a.id);
            s.scrollData = a;
            break;
          }
          this.applyScroll(a, r);
          break;
        case Ee.ViewportResize:
          this.emitter.emit(Ae.Resize, { width: a.width, height: a.height });
          break;
        case Ee.Input:
          if (a.id === -1) break;
          if (this.usingVirtualDom) {
            const s = this.virtualDom.mirror.getNode(a.id);
            if (!s) return this.debugNodeNotFound(a, a.id);
            s.inputData = a;
            break;
          }
          this.applyInput(a);
          break;
        case Ee.MediaInteraction: {
          const s = this.usingVirtualDom
            ? this.virtualDom.mirror.getNode(a.id)
            : this.mirror.getNode(a.id);
          if (!s) return this.debugNodeNotFound(a, a.id);
          const l = s;
          try {
            a.currentTime && (l.currentTime = a.currentTime),
              a.volume && (l.volume = a.volume),
              a.muted && (l.muted = a.muted),
              a.type === 1 && l.pause(),
              a.type === 0 && l.play(),
              a.type === 4 && (l.playbackRate = a.playbackRate);
          } catch (c) {
            this.config.showWarning &&
              console.warn(
                `Failed to replay media interactions: ${c.message || c}`
              );
          }
          break;
        }
        case Ee.StyleSheetRule:
        case Ee.StyleDeclaration:
          this.usingVirtualDom
            ? a.styleId
              ? this.constructedStyleMutations.push(a)
              : a.id &&
                ((i = this.virtualDom.mirror.getNode(a.id)) === null ||
                  i === void 0 ||
                  i.rules.push(a))
            : this.applyStyleSheetMutation(a);
          break;
        case Ee.CanvasMutation:
          if (!this.config.UNSAFE_replayCanvas) return;
          if (this.usingVirtualDom) {
            const s = this.virtualDom.mirror.getNode(a.id);
            if (!s) return this.debugNodeNotFound(a, a.id);
            s.canvasMutations.push({ event: t, mutation: a });
          } else {
            const s = this.mirror.getNode(a.id);
            if (!s) return this.debugNodeNotFound(a, a.id);
            Kl({
              event: t,
              mutation: a,
              target: s,
              imageMap: this.imageMap,
              canvasEventMap: this.canvasEventMap,
              errorHandler: this.warnCanvasMutationFailed.bind(this),
            });
          }
          break;
        case Ee.Font:
          try {
            const s = new FontFace(
              a.family,
              a.buffer
                ? new Uint8Array(JSON.parse(a.fontSource))
                : a.fontSource,
              a.descriptors
            );
            (o = this.iframe.contentDocument) === null ||
              o === void 0 ||
              o.fonts.add(s);
          } catch (s) {
            this.config.showWarning && console.warn(s);
          }
          break;
        case Ee.Selection:
          if (r) {
            this.lastSelectionData = a;
            break;
          }
          this.applySelection(a);
          break;
        case Ee.AdoptedStyleSheet:
          this.usingVirtualDom
            ? this.adoptedStyleSheets.push(a)
            : this.applyAdoptedStyleSheet(a);
      }
    }
    applyMutation(t, r) {
      if (
        this.config.useVirtualDom &&
        !this.usingVirtualDom &&
        r &&
        ((this.usingVirtualDom = !0),
        xp(this.iframe.contentDocument, this.mirror, this.virtualDom),
        Object.keys(this.legacy_missingNodeRetryMap).length)
      )
        for (const l in this.legacy_missingNodeRetryMap)
          try {
            const c = this.legacy_missingNodeRetryMap[l],
              u = U0(c.node, this.virtualDom, this.mirror);
            u && (c.node = u);
          } catch (c) {
            this.config.showWarning && console.warn(c);
          }
      const n = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
      t.removes.forEach((l) => {
        var c;
        const u = n.getNode(l.id);
        if (!u)
          return t.removes.find((h) => h.id === l.parentId)
            ? void 0
            : this.warnNodeNotFound(t, l.id);
        let g = n.getNode(l.parentId);
        if (!g) return this.warnNodeNotFound(t, l.parentId);
        if (
          (l.isShadow && ti(g) && (g = g.shadowRoot), n.removeNodeFromMap(u), g)
        )
          try {
            g.removeChild(u),
              this.usingVirtualDom &&
                u.nodeName === "#text" &&
                g.nodeName === "STYLE" &&
                ((c = g.rules) === null || c === void 0 ? void 0 : c.length) >
                  0 &&
                (g.rules = []);
          } catch (h) {
            if (!(h instanceof DOMException)) throw h;
            this.warn("parent could not remove child in mutation", g, u, t);
          }
      });
      const i = Object.assign({}, this.legacy_missingNodeRetryMap),
        o = [],
        a = (l) => {
          var c;
          if (!this.iframe.contentDocument)
            return console.warn("Looks like your replayer has been destroyed.");
          let u = n.getNode(l.parentId);
          if (!u)
            return l.node.type === Ze.Document
              ? this.newDocumentQueue.push(l)
              : o.push(l);
          l.node.isShadow &&
            (ti(u) || u.attachShadow({ mode: "open" }), (u = u.shadowRoot));
          let g = null,
            h = null;
          if (
            (l.previousId && (g = n.getNode(l.previousId)),
            l.nextId && (h = n.getNode(l.nextId)),
            ((w) => {
              let p = null;
              return (
                w.nextId && (p = n.getNode(w.nextId)),
                w.nextId !== null &&
                  w.nextId !== void 0 &&
                  w.nextId !== -1 &&
                  !p
              );
            })(l))
          )
            return o.push(l);
          if (l.node.rootId && !n.getNode(l.node.rootId)) return;
          const v = l.node.rootId
            ? n.getNode(l.node.rootId)
            : this.usingVirtualDom
            ? this.virtualDom
            : this.iframe.contentDocument;
          if (Eo(u, n)) return void this.attachDocumentToIframe(l, u);
          const f = (w, p) => {
              for (const m of this.config.plugins || [])
                m.onBuild && m.onBuild(w, { id: p, replayer: this });
            },
            d = Cn(l.node, {
              doc: v,
              mirror: n,
              skipChild: !0,
              hackCss: !0,
              cache: this.cache,
              afterAppend: f,
            });
          if (l.previousId === -1 || l.nextId === -1)
            return void (i[l.node.id] = { node: d, mutation: l });
          const y = n.getMeta(u);
          if (
            y &&
            y.type === Ze.Element &&
            y.tagName === "textarea" &&
            l.node.type === Ze.Text
          ) {
            const w = Array.isArray(u.childNodes)
              ? u.childNodes
              : Array.from(u.childNodes);
            for (const p of w) p.nodeType === u.TEXT_NODE && u.removeChild(p);
          }
          if (g && g.nextSibling && g.nextSibling.parentNode)
            u.insertBefore(d, g.nextSibling);
          else if (h && h.parentNode)
            u.contains(h) ? u.insertBefore(d, h) : u.insertBefore(d, null);
          else {
            if (u === v) for (; v.firstChild; ) v.removeChild(v.firstChild);
            u.appendChild(d);
          }
          if (
            (f(d, l.node.id),
            this.usingVirtualDom &&
              d.nodeName === "#text" &&
              u.nodeName === "STYLE" &&
              ((c = u.rules) === null || c === void 0 ? void 0 : c.length) >
                0 &&
              (u.rules = []),
            Eo(d, this.mirror))
          ) {
            const w = this.mirror.getId(d),
              p = this.newDocumentQueue.find((m) => m.parentId === w);
            p &&
              (this.attachDocumentToIframe(p, d),
              (this.newDocumentQueue = this.newDocumentQueue.filter(
                (m) => m !== p
              )));
          }
          (l.previousId || l.nextId) &&
            this.legacy_resolveMissingNode(i, u, d, l);
        };
      t.adds.forEach((l) => {
        a(l);
      });
      const s = Date.now();
      for (; o.length; ) {
        const l = ep(o);
        if (((o.length = 0), Date.now() - s > 500)) {
          this.warn(
            "Timeout in the loop, please check the resolve tree data:",
            l
          );
          break;
        }
        for (const c of l)
          n.getNode(c.value.parentId)
            ? N0(c, (u) => {
                a(u);
              })
            : this.debug(
                "Drop resolve tree since there is no parent for the root node.",
                c
              );
      }
      Object.keys(i).length &&
        Object.assign(this.legacy_missingNodeRetryMap, i),
        (function (l) {
          const c = new Set(),
            u = [];
          for (let g = l.length; g--; ) {
            const h = l[g];
            c.has(h.id) || (u.push(h), c.add(h.id));
          }
          return u;
        })(t.texts).forEach((l) => {
          var c;
          const u = n.getNode(l.id);
          if (!u)
            return t.removes.find((g) => g.id === l.id)
              ? void 0
              : this.warnNodeNotFound(t, l.id);
          if (((u.textContent = l.value), this.usingVirtualDom)) {
            const g = u.parentNode;
            ((c = g == null ? void 0 : g.rules) === null || c === void 0
              ? void 0
              : c.length) > 0 && (g.rules = []);
          }
        }),
        t.attributes.forEach((l) => {
          const c = n.getNode(l.id);
          if (!c)
            return t.removes.find((u) => u.id === l.id)
              ? void 0
              : this.warnNodeNotFound(t, l.id);
          for (const u in l.attributes)
            if (typeof u == "string") {
              const g = l.attributes[u];
              if (g === null) c.removeAttribute(u);
              else if (typeof g == "string")
                try {
                  if (
                    u === "_cssText" &&
                    (c.nodeName === "LINK" || c.nodeName === "STYLE")
                  )
                    try {
                      const h = n.getMeta(c);
                      Object.assign(h.attributes, l.attributes);
                      const v = Cn(h, {
                          doc: c.ownerDocument,
                          mirror: n,
                          skipChild: !0,
                          hackCss: !0,
                          cache: this.cache,
                        }),
                        f = c.nextSibling,
                        d = c.parentNode;
                      if (v && d) {
                        d.removeChild(c),
                          d.insertBefore(v, f),
                          n.replace(l.id, v);
                        break;
                      }
                    } catch {}
                  c.setAttribute(u, g);
                } catch (h) {
                  this.config.showWarning &&
                    console.warn(
                      "An error occurred may due to the checkout feature.",
                      h
                    );
                }
              else if (u === "style") {
                const h = g,
                  v = c;
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
    applyScroll(t, r) {
      var n, i;
      const o = this.mirror.getNode(t.id);
      if (!o) return this.debugNodeNotFound(t, t.id);
      const a = this.mirror.getMeta(o);
      if (o === this.iframe.contentDocument)
        (n = this.iframe.contentWindow) === null ||
          n === void 0 ||
          n.scrollTo({ top: t.y, left: t.x, behavior: r ? "auto" : "smooth" });
      else if ((a == null ? void 0 : a.type) === Ze.Document)
        (i = o.defaultView) === null ||
          i === void 0 ||
          i.scrollTo({ top: t.y, left: t.x, behavior: r ? "auto" : "smooth" });
      else
        try {
          o.scrollTo({ top: t.y, left: t.x, behavior: r ? "auto" : "smooth" });
        } catch {}
    }
    applyInput(t) {
      const r = this.mirror.getNode(t.id);
      if (!r) return this.debugNodeNotFound(t, t.id);
      try {
        (r.checked = t.isChecked), (r.value = t.text);
      } catch {}
    }
    applySelection(t) {
      try {
        const r = new Set(),
          n = t.ranges.map(
            ({ start: i, startOffset: o, end: a, endOffset: s }) => {
              const l = this.mirror.getNode(i),
                c = this.mirror.getNode(a);
              if (!l || !c) return;
              const u = new Range();
              u.setStart(l, o), u.setEnd(c, s);
              const g = l.ownerDocument,
                h = g == null ? void 0 : g.getSelection();
              return h && r.add(h), { range: u, selection: h };
            }
          );
        r.forEach((i) => i.removeAllRanges()),
          n.forEach((i) => {
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
      var r;
      let n = null;
      t.styleId
        ? (n = this.styleMirror.getStyle(t.styleId))
        : t.id &&
          (n =
            ((r = this.mirror.getNode(t.id)) === null || r === void 0
              ? void 0
              : r.sheet) || null),
        n &&
          (t.source === Ee.StyleSheetRule
            ? this.applyStyleSheetRule(t, n)
            : t.source === Ee.StyleDeclaration &&
              this.applyStyleDeclaration(t, n));
    }
    applyStyleSheetRule(t, r) {
      var n, i, o, a;
      if (
        ((n = t.adds) === null ||
          n === void 0 ||
          n.forEach(({ rule: s, index: l }) => {
            try {
              if (Array.isArray(l)) {
                const { positions: c, index: u } = Pl(l);
                xn(r.cssRules, c).insertRule(s, u);
              } else {
                const c =
                  l === void 0 ? void 0 : Math.min(l, r.cssRules.length);
                r == null || r.insertRule(s, c);
              }
            } catch {}
          }),
        (i = t.removes) === null ||
          i === void 0 ||
          i.forEach(({ index: s }) => {
            try {
              if (Array.isArray(s)) {
                const { positions: l, index: c } = Pl(s);
                xn(r.cssRules, l).deleteRule(c || 0);
              } else r == null || r.deleteRule(s);
            } catch {}
          }),
        t.replace)
      )
        try {
          (o = r.replace) === null || o === void 0 || o.call(r, t.replace);
        } catch {}
      if (t.replaceSync)
        try {
          (a = r.replaceSync) === null ||
            a === void 0 ||
            a.call(r, t.replaceSync);
        } catch {}
    }
    applyStyleDeclaration(t, r) {
      t.set &&
        xn(r.rules, t.index).style.setProperty(
          t.set.property,
          t.set.value,
          t.set.priority
        ),
        t.remove &&
          xn(r.rules, t.index).style.removeProperty(t.remove.property);
    }
    applyAdoptedStyleSheet(t) {
      var r;
      const n = this.mirror.getNode(t.id);
      if (!n) return;
      (r = t.styles) === null ||
        r === void 0 ||
        r.forEach((a) => {
          var s;
          let l = null,
            c = null;
          if (
            (ti(n)
              ? (c =
                  ((s = n.ownerDocument) === null || s === void 0
                    ? void 0
                    : s.defaultView) || null)
              : n.nodeName === "#document" && (c = n.defaultView),
            c)
          )
            try {
              (l = new c.CSSStyleSheet()),
                this.styleMirror.add(l, a.styleId),
                this.applyStyleSheetRule(
                  { source: Ee.StyleSheetRule, adds: a.rules },
                  l
                );
            } catch {}
        });
      let i = 0;
      const o = (a, s) => {
        const l = s
          .map((c) => this.styleMirror.getStyle(c))
          .filter((c) => c !== null);
        ti(a)
          ? (a.shadowRoot.adoptedStyleSheets = l)
          : a.nodeName === "#document" && (a.adoptedStyleSheets = l),
          l.length !== s.length &&
            i < 10 &&
            (setTimeout(() => o(a, s), 0 + 100 * i), i++);
      };
      o(n, t.styleIds);
    }
    legacy_resolveMissingNode(t, r, n, i) {
      const { previousId: o, nextId: a } = i,
        s = o && t[o],
        l = a && t[a];
      if (s) {
        const { node: c, mutation: u } = s;
        r.insertBefore(c, n),
          delete t[u.node.id],
          delete this.legacy_missingNodeRetryMap[u.node.id],
          (u.previousId || u.nextId) &&
            this.legacy_resolveMissingNode(t, r, c, u);
      }
      if (l) {
        const { node: c, mutation: u } = l;
        r.insertBefore(c, n.nextSibling),
          delete t[u.node.id],
          delete this.legacy_missingNodeRetryMap[u.node.id],
          (u.previousId || u.nextId) &&
            this.legacy_resolveMissingNode(t, r, c, u);
      }
    }
    moveAndHover(t, r, n, i, o) {
      const a = this.mirror.getNode(n);
      if (!a) return this.debugNodeNotFound(o, n);
      const s = R0(a, this.iframe),
        l = t * s.absoluteScale + s.x,
        c = r * s.absoluteScale + s.y;
      (this.mouse.style.left = `${l}px`),
        (this.mouse.style.top = `${c}px`),
        i || this.drawMouseTail({ x: l, y: c }),
        this.hoverElements(a);
    }
    drawMouseTail(t) {
      if (!this.mouseTail) return;
      const {
          lineCap: r,
          lineWidth: n,
          strokeStyle: i,
          duration: o,
        } = this.config.mouseTail === !0
          ? Oo
          : Object.assign({}, Oo, this.config.mouseTail),
        a = () => {
          if (!this.mouseTail) return;
          const s = this.mouseTail.getContext("2d");
          s &&
            this.tailPositions.length &&
            (s.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height),
            s.beginPath(),
            (s.lineWidth = n),
            (s.lineCap = r),
            (s.strokeStyle = i),
            s.moveTo(this.tailPositions[0].x, this.tailPositions[0].y),
            this.tailPositions.forEach((l) => s.lineTo(l.x, l.y)),
            s.stroke());
        };
      this.tailPositions.push(t),
        a(),
        setTimeout(() => {
          (this.tailPositions = this.tailPositions.filter((s) => s !== t)), a();
        }, o / this.speedService.state.context.timer.speed);
    }
    hoverElements(t) {
      var r;
      (r = this.iframe.contentDocument) === null ||
        r === void 0 ||
        r.querySelectorAll(".\\:hover").forEach((i) => {
          i.classList.remove(":hover");
        });
      let n = t;
      for (; n; )
        n.classList && n.classList.add(":hover"), (n = n.parentElement);
    }
    isUserInteraction(t) {
      return (
        t.type === Ne.IncrementalSnapshot &&
        t.data.source > Ee.Mutation &&
        t.data.source <= Ee.Input
      );
    }
    backToNormal() {
      (this.nextUserInteractionEvent = null),
        this.speedService.state.matches("normal") ||
          (this.speedService.send({ type: "BACK_TO_NORMAL" }),
          this.emitter.emit(Ae.SkipEnd, {
            speed: this.speedService.state.context.normalSpeed,
          }));
    }
    warnNodeNotFound(t, r) {
      this.warn(`Node with id '${r}' not found. `, t);
    }
    warnCanvasMutationFailed(t, r) {
      this.warn("Has error on canvas update", r, "canvas mutation:", t);
    }
    debugNodeNotFound(t, r) {
      this.debug("[replayer]", `Node with id '${r}' not found. `, t);
    }
    warn(...t) {
      this.config.showWarning && console.warn("[replayer]", ...t);
    }
    debug(...t) {
      this.config.showDebug && console.log("[replayer]", ...t);
    }
  }
  function Jl(e) {
    let t = "";
    return (
      Object.keys(e).forEach((r) => {
        t += `${r}: ${e[r]};`;
      }),
      t
    );
  }
  function mn(e, t = 2) {
    let r = String(e);
    const n = Math.pow(10, t - 1);
    if (e < n) for (; String(n).length > r.length; ) r = `0${e}`;
    return r;
  }
  function ni(e) {
    if (e <= 0) return "00:00";
    const t = Math.floor(e / 36e5);
    e %= 36e5;
    const r = Math.floor(e / 6e4);
    e %= 6e4;
    const n = Math.floor(e / 1e3);
    return t ? `${mn(t)}:${mn(r)}:${mn(n)}` : `${mn(r)}:${mn(n)}`;
  }
  function Ql() {
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
  function ec(e) {
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
  function Bp(e) {
    return (
      e.type === Ne.IncrementalSnapshot &&
      e.data.source > Ee.Mutation &&
      e.data.source <= Ee.Input
    );
  }
  function jp(e) {
    let t, r, n, i, o, a, s, l, c;
    return {
      c() {
        (t = Ge("div")),
          (r = Ge("input")),
          (n = vt()),
          (i = Ge("label")),
          (o = vt()),
          (a = Ge("span")),
          (s = Nr(e[3])),
          de(r, "type", "checkbox"),
          de(r, "id", e[2]),
          (r.disabled = e[1]),
          de(r, "class", "svelte-9brlez"),
          de(i, "for", e[2]),
          de(i, "class", "svelte-9brlez"),
          de(a, "class", "label svelte-9brlez"),
          de(t, "class", "switch svelte-9brlez"),
          en(t, "disabled", e[1]);
      },
      m(u, g) {
        lr(u, t, g),
          Ce(t, r),
          (r.checked = e[0]),
          Ce(t, n),
          Ce(t, i),
          Ce(t, o),
          Ce(t, a),
          Ce(a, s),
          l || ((c = kn(r, "change", e[4])), (l = !0));
      },
      p(u, [g]) {
        4 & g && de(r, "id", u[2]),
          2 & g && (r.disabled = u[1]),
          1 & g && (r.checked = u[0]),
          4 & g && de(i, "for", u[2]),
          8 & g && Ci(s, u[3]),
          2 & g && en(t, "disabled", u[1]);
      },
      i: ki,
      o: ki,
      d(u) {
        u && Ht(t), (l = !1), c();
      },
    };
  }
  function Yp(e, t, r) {
    let { disabled: n } = t,
      { checked: i } = t,
      { id: o } = t,
      { label: a } = t;
    return (
      (e.$$set = (s) => {
        "disabled" in s && r(1, (n = s.disabled)),
          "checked" in s && r(0, (i = s.checked)),
          "id" in s && r(2, (o = s.id)),
          "label" in s && r(3, (a = s.label));
      }),
      [
        i,
        n,
        o,
        a,
        function () {
          (i = this.checked), r(0, i);
        },
      ]
    );
  }
  class $p extends Os {
    constructor(t) {
      super(),
        As(this, t, Yp, jp, Cs, { disabled: 1, checked: 0, id: 2, label: 3 });
    }
  }
  function tc(e, t, r) {
    const n = e.slice();
    return (n[39] = t[r]), n;
  }
  function rc(e, t, r) {
    const n = e.slice();
    return (n[42] = t[r]), n;
  }
  function nc(e, t, r) {
    const n = e.slice();
    return (n[45] = t[r]), n;
  }
  function ic(e) {
    let t,
      r,
      n,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      g,
      h,
      v,
      f,
      d,
      y,
      w,
      p,
      m,
      b,
      _,
      S,
      k,
      E,
      D,
      C,
      T = ni(e[6]) + "",
      A = ni(e[8].totalTime) + "",
      M = e[14],
      j = [];
    for (let O = 0; O < M.length; O += 1) j[O] = oc(nc(e, M, O));
    let z = e[9],
      $ = [];
    for (let O = 0; O < z.length; O += 1) $[O] = ac(rc(e, z, O));
    function Y(O, V) {
      return O[7] === "playing" ? zp : Up;
    }
    let q = Y(e),
      F = q(e),
      L = e[3],
      N = [];
    for (let O = 0; O < L.length; O += 1) N[O] = sc(tc(e, L, O));
    function P(O) {
      e[30](O);
    }
    let I = {
      id: "skip",
      disabled: e[10] === "skipping",
      label: "skip inactive",
    };
    return (
      e[0] !== void 0 && (I.checked = e[0]),
      (b = new $p({ props: I })),
      xr.push(() =>
        (function (O, V, J) {
          const se = O.$$.props[V];
          se !== void 0 && ((O.$$.bound[se] = J), J(O.$$.ctx[se]));
        })(b, "checked", P)
      ),
      {
        c() {
          (t = Ge("div")),
            (r = Ge("div")),
            (n = Ge("span")),
            (i = Nr(T)),
            (o = vt()),
            (a = Ge("div")),
            (s = Ge("div")),
            (l = vt());
          for (let O = 0; O < j.length; O += 1) j[O].c();
          c = vt();
          for (let O = 0; O < $.length; O += 1) $[O].c();
          (u = vt()),
            (g = Ge("div")),
            (h = vt()),
            (v = Ge("span")),
            (f = Nr(A)),
            (d = vt()),
            (y = Ge("div")),
            (w = Ge("button")),
            F.c(),
            (p = vt());
          for (let O = 0; O < N.length; O += 1) N[O].c();
          (m = vt()),
            O0(b.$$.fragment),
            (S = vt()),
            (k = Ge("button")),
            (k.innerHTML = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M916 380c-26.4 0-48-21.6-48-48L868 223.2 613.6 477.6c-18.4
            18.4-48.8 18.4-68 0-18.4-18.4-18.4-48.8 0-68L800 156 692 156c-26.4
            0-48-21.6-48-48 0-26.4 21.6-48 48-48l224 0c26.4 0 48 21.6 48 48l0
            224C964 358.4 942.4 380 916 380zM231.2 860l108.8 0c26.4 0 48 21.6 48
            48s-21.6 48-48 48l-224 0c-26.4 0-48-21.6-48-48l0-224c0-26.4 21.6-48
            48-48 26.4 0 48 21.6 48 48L164 792l253.6-253.6c18.4-18.4 48.8-18.4
            68 0 18.4 18.4 18.4 48.8 0 68L231.2 860z" p-id="1286"></path></svg>`),
            de(n, "class", "rr-timeline__time svelte-19ke1iv"),
            de(s, "class", "rr-progress__step svelte-19ke1iv"),
            He(s, "width", e[13]),
            de(g, "class", "rr-progress__handler svelte-19ke1iv"),
            He(g, "left", e[13]),
            de(a, "class", "rr-progress svelte-19ke1iv"),
            en(a, "disabled", e[10] === "skipping"),
            de(v, "class", "rr-timeline__time svelte-19ke1iv"),
            de(r, "class", "rr-timeline svelte-19ke1iv"),
            de(w, "class", "svelte-19ke1iv"),
            de(k, "class", "svelte-19ke1iv"),
            de(y, "class", "rr-controller__btns svelte-19ke1iv"),
            de(t, "class", "rr-controller svelte-19ke1iv");
        },
        m(O, V) {
          lr(O, t, V),
            Ce(t, r),
            Ce(r, n),
            Ce(n, i),
            Ce(r, o),
            Ce(r, a),
            Ce(a, s),
            e[27](s),
            Ce(a, l);
          for (let J = 0; J < j.length; J += 1) j[J].m(a, null);
          Ce(a, c);
          for (let J = 0; J < $.length; J += 1) $[J].m(a, null);
          Ce(a, u),
            Ce(a, g),
            e[28](a),
            Ce(r, h),
            Ce(r, v),
            Ce(v, f),
            Ce(t, d),
            Ce(t, y),
            Ce(y, w),
            F.m(w, null),
            Ce(y, p);
          for (let J = 0; J < N.length; J += 1) N[J].m(y, null);
          Ce(y, m),
            Ts(b, y, null),
            Ce(y, S),
            Ce(y, k),
            (E = !0),
            D ||
              ((C = [
                kn(a, "click", e[16]),
                kn(w, "click", e[4]),
                kn(k, "click", e[31]),
              ]),
              (D = !0));
        },
        p(O, V) {
          if (
            ((!E || 64 & V[0]) && T !== (T = ni(O[6]) + "") && Ci(i, T),
            (!E || 8192 & V[0]) && He(s, "width", O[13]),
            16384 & V[0])
          ) {
            let H;
            for (M = O[14], H = 0; H < M.length; H += 1) {
              const he = nc(O, M, H);
              j[H] ? j[H].p(he, V) : ((j[H] = oc(he)), j[H].c(), j[H].m(a, c));
            }
            for (; H < j.length; H += 1) j[H].d(1);
            j.length = M.length;
          }
          if (512 & V[0]) {
            let H;
            for (z = O[9], H = 0; H < z.length; H += 1) {
              const he = rc(O, z, H);
              $[H] ? $[H].p(he, V) : (($[H] = ac(he)), $[H].c(), $[H].m(a, u));
            }
            for (; H < $.length; H += 1) $[H].d(1);
            $.length = z.length;
          }
          if (
            ((!E || 8192 & V[0]) && He(g, "left", O[13]),
            1024 & V[0] && en(a, "disabled", O[10] === "skipping"),
            (!E || 256 & V[0]) &&
              A !== (A = ni(O[8].totalTime) + "") &&
              Ci(f, A),
            q !== (q = Y(O)) &&
              (F.d(1), (F = q(O)), F && (F.c(), F.m(w, null))),
            1066 & V[0])
          ) {
            let H;
            for (L = O[3], H = 0; H < L.length; H += 1) {
              const he = tc(O, L, H);
              N[H] ? N[H].p(he, V) : ((N[H] = sc(he)), N[H].c(), N[H].m(y, m));
            }
            for (; H < N.length; H += 1) N[H].d(1);
            N.length = L.length;
          }
          const J = {};
          var se;
          1024 & V[0] && (J.disabled = O[10] === "skipping"),
            !_ &&
              1 & V[0] &&
              ((_ = !0),
              (J.checked = O[0]),
              (se = () => (_ = !1)),
              Ma.push(se)),
            b.$set(J);
        },
        i(O) {
          E || (nr(b.$$.fragment, O), (E = !0));
        },
        o(O) {
          tn(b.$$.fragment, O), (E = !1);
        },
        d(O) {
          O && Ht(t),
            e[27](null),
            So(j, O),
            So($, O),
            e[28](null),
            F.d(),
            So(N, O),
            Ds(b),
            (D = !1),
            an(C);
        },
      }
    );
  }
  function oc(e) {
    let t, r;
    return {
      c() {
        (t = Ge("div")),
          de(t, "title", (r = e[45].name)),
          He(t, "width", e[45].width),
          He(t, "height", "4px"),
          He(t, "position", "absolute"),
          He(t, "background", e[45].background),
          He(t, "left", e[45].position);
      },
      m(n, i) {
        lr(n, t, i);
      },
      p(n, i) {
        16384 & i[0] && r !== (r = n[45].name) && de(t, "title", r),
          16384 & i[0] && He(t, "width", n[45].width),
          16384 & i[0] && He(t, "background", n[45].background),
          16384 & i[0] && He(t, "left", n[45].position);
      },
      d(n) {
        n && Ht(t);
      },
    };
  }
  function ac(e) {
    let t, r;
    return {
      c() {
        (t = Ge("div")),
          de(t, "title", (r = e[42].name)),
          He(t, "width", "10px"),
          He(t, "height", "5px"),
          He(t, "position", "absolute"),
          He(t, "top", "2px"),
          He(t, "transform", "translate(-50%, -50%)"),
          He(t, "background", e[42].background),
          He(t, "left", e[42].position);
      },
      m(n, i) {
        lr(n, t, i);
      },
      p(n, i) {
        512 & i[0] && r !== (r = n[42].name) && de(t, "title", r),
          512 & i[0] && He(t, "background", n[42].background),
          512 & i[0] && He(t, "left", n[42].position);
      },
      d(n) {
        n && Ht(t);
      },
    };
  }
  function Up(e) {
    let t, r;
    return {
      c() {
        (t = Ei("svg")),
          (r = Ei("path")),
          de(
            r,
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
      m(n, i) {
        lr(n, t, i), Ce(t, r);
      },
      d(n) {
        n && Ht(t);
      },
    };
  }
  function zp(e) {
    let t, r;
    return {
      c() {
        (t = Ei("svg")),
          (r = Ei("path")),
          de(
            r,
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
      m(n, i) {
        lr(n, t, i), Ce(t, r);
      },
      d(n) {
        n && Ht(t);
      },
    };
  }
  function sc(e) {
    let t,
      r,
      n,
      i,
      o,
      a,
      s = e[39] + "";
    function l() {
      return e[29](e[39]);
    }
    return {
      c() {
        (t = Ge("button")),
          (r = Nr(s)),
          (n = Nr("x")),
          (t.disabled = i = e[10] === "skipping"),
          de(t, "class", "svelte-19ke1iv"),
          en(t, "active", e[39] === e[1] && e[10] !== "skipping");
      },
      m(c, u) {
        lr(c, t, u),
          Ce(t, r),
          Ce(t, n),
          o || ((a = kn(t, "click", l)), (o = !0));
      },
      p(c, u) {
        (e = c),
          8 & u[0] && s !== (s = e[39] + "") && Ci(r, s),
          1024 & u[0] && i !== (i = e[10] === "skipping") && (t.disabled = i),
          1034 & u[0] &&
            en(t, "active", e[39] === e[1] && e[10] !== "skipping");
      },
      d(c) {
        c && Ht(t), (o = !1), a();
      },
    };
  }
  function Hp(e) {
    let t,
      r,
      n = e[2] && ic(e);
    return {
      c() {
        n && n.c(), (t = Nr(""));
      },
      m(i, o) {
        n && n.m(i, o), lr(i, t, o), (r = !0);
      },
      p(i, o) {
        i[2]
          ? n
            ? (n.p(i, o), 4 & o[0] && nr(n, 1))
            : ((n = ic(i)), n.c(), nr(n, 1), n.m(t.parentNode, t))
          : n &&
            (D0(),
            tn(n, 1, 1, () => {
              n = null;
            }),
            A0());
      },
      i(i) {
        r || (nr(n), (r = !0));
      },
      o(i) {
        tn(n), (r = !1);
      },
      d(i) {
        n && n.d(i), i && Ht(t);
      },
    };
  }
  function lc(e, t, r) {
    return (100 - ((t - r) / (t - e)) * 100).toFixed(2);
  }
  function Wp(e, t, r) {
    const n = Hh();
    let i,
      o,
      a,
      s,
      l,
      c,
      u,
      g,
      h,
      v,
      { replayer: f } = t,
      { showController: d } = t,
      { autoPlay: y } = t,
      { skipInactive: w } = t,
      { speedOption: p } = t,
      { speed: m = p.length ? p[0] : 1 } = t,
      { tags: b = {} } = t,
      { inactiveColor: _ } = t,
      S = 0,
      k = null,
      E = !1,
      D = null;
    const C = () => {
        k && (cancelAnimationFrame(k), (k = null));
      },
      T = () => {
        i === "paused" && (l ? (f.play(), (l = !1)) : f.play(S));
      },
      A = () => {
        i === "playing" && (f.pause(), (E = !1));
      },
      M = (Y, q) => {
        r(6, (S = Y)),
          (E = !1),
          (typeof q == "boolean" ? q : i === "playing")
            ? f.play(Y)
            : f.pause(Y);
      },
      j = (Y, q, F = !1, L) => {
        (D = F ? { start: Y, end: q } : null),
          r(6, (S = Y)),
          (E = q),
          (c = L),
          f.play(Y);
      },
      z = (Y) => {
        let q = i === "playing";
        r(1, (m = Y)),
          q && f.pause(),
          f.setConfig({ speed: m }),
          q && f.play(S);
      };
    var $;
    return (
      E0(() => {
        r(7, (i = f.service.state.value)),
          r(10, (o = f.speedService.state.value)),
          f.on("state-change", (Y) => {
            const { player: q, speed: F } = Y;
            if (q != null && q.value && i !== q.value)
              switch ((r(7, (i = q.value)), i)) {
                case "playing":
                  C(),
                    (k = requestAnimationFrame(function L() {
                      r(6, (S = f.getCurrentTime())),
                        E &&
                          S >= E &&
                          (D
                            ? j(D.start, D.end, !0, void 0)
                            : (f.pause(), c && (c(), (c = null)))),
                        S < u.totalTime && (k = requestAnimationFrame(L));
                    }));
                  break;
                case "paused":
                  C();
              }
            F != null && F.value && o !== F.value && r(10, (o = F.value));
          }),
          f.on("finish", () => {
            (l = !0), c && (c(), (c = null));
          }),
          y && f.play();
      }),
      ($ = () => {
        w !== f.config.skipInactive && f.setConfig({ skipInactive: w });
      }),
      Vi().$$.after_update.push($),
      C0(() => {
        f.pause(), C();
      }),
      (e.$$set = (Y) => {
        "replayer" in Y && r(17, (f = Y.replayer)),
          "showController" in Y && r(2, (d = Y.showController)),
          "autoPlay" in Y && r(18, (y = Y.autoPlay)),
          "skipInactive" in Y && r(0, (w = Y.skipInactive)),
          "speedOption" in Y && r(3, (p = Y.speedOption)),
          "speed" in Y && r(1, (m = Y.speed)),
          "tags" in Y && r(19, (b = Y.tags)),
          "inactiveColor" in Y && r(20, (_ = Y.inactiveColor));
      }),
      (e.$$.update = () => {
        if (
          (64 & e.$$.dirty[0] && n("ui-update-current-time", { payload: S }),
          128 & e.$$.dirty[0] && n("ui-update-player-state", { payload: i }),
          131072 & e.$$.dirty[0] && r(8, (u = f.getMetaData())),
          320 & e.$$.dirty[0])
        ) {
          const Y = Math.min(1, S / u.totalTime);
          r(13, (g = 100 * Y + "%")), n("ui-update-progress", { payload: Y });
        }
        655360 & e.$$.dirty[0] &&
          r(
            9,
            (h = (() => {
              const { context: Y } = f.service.state,
                q = Y.events.length,
                F = Y.events[0].timestamp,
                L = Y.events[q - 1].timestamp,
                N = [];
              return (
                Y.events.forEach((P) => {
                  if (P.type === Ne.Custom) {
                    const I = {
                      name: P.data.tag,
                      background: b[P.data.tag] || "rgb(73, 80, 246)",
                      position: `${lc(F, L, P.timestamp)}%`,
                    };
                    N.push(I);
                  }
                }),
                N
              );
            })())
          ),
          1179648 & e.$$.dirty[0] &&
            r(
              14,
              (v = (() => {
                try {
                  const { context: Y } = f.service.state,
                    q = Y.events.length,
                    F = Y.events[0].timestamp,
                    L = Y.events[q - 1].timestamp,
                    N = (function (I) {
                      const O = [];
                      let V = I[0].timestamp;
                      for (const J of I)
                        Bp(J) &&
                          (J.timestamp - V > 1e4 && O.push([V, J.timestamp]),
                          (V = J.timestamp));
                      return O;
                    })(Y.events),
                    P = (I, O, V, J) => (((J - V) / (O - I)) * 100).toFixed(2);
                  return N.map((I) => ({
                    name: "inactive period",
                    background: _,
                    position: `${lc(F, L, I[0])}%`,
                    width: `${P(F, L, I[0], I[1])}%`,
                  }));
                } catch {
                  return [];
                }
              })())
            );
      }),
      [
        w,
        m,
        d,
        p,
        () => {
          switch (i) {
            case "playing":
              A();
              break;
            case "paused":
              T();
          }
        },
        z,
        S,
        i,
        u,
        h,
        o,
        a,
        s,
        g,
        v,
        n,
        (Y) => {
          if (o === "skipping") return;
          const q = a.getBoundingClientRect();
          let F = (Y.clientX - q.left) / q.width;
          F < 0 ? (F = 0) : F > 1 && (F = 1);
          const L = u.totalTime * F;
          (l = !1), M(L);
        },
        f,
        y,
        b,
        _,
        T,
        A,
        M,
        j,
        () => {
          r(0, (w = !w));
        },
        () =>
          Promise.resolve().then(() => {
            r(8, (u = f.getMetaData()));
          }),
        function (Y) {
          xr[Y ? "unshift" : "push"](() => {
            (s = Y), r(12, s);
          });
        },
        function (Y) {
          xr[Y ? "unshift" : "push"](() => {
            (a = Y), r(11, a);
          });
        },
        (Y) => z(Y),
        function (Y) {
          (w = Y), r(0, w);
        },
        () => n("fullscreen"),
      ]
    );
  }
  class Vp extends Os {
    constructor(t) {
      super(),
        As(
          this,
          t,
          Wp,
          Hp,
          Cs,
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
  function cc(e) {
    let t,
      r,
      n = {
        replayer: e[7],
        showController: e[3],
        autoPlay: e[1],
        speedOption: e[2],
        skipInactive: e[0],
        tags: e[4],
        inactiveColor: e[5],
      };
    return (
      (t = new Vp({ props: n })),
      e[32](t),
      t.$on("fullscreen", e[33]),
      {
        c() {
          O0(t.$$.fragment);
        },
        m(i, o) {
          Ts(t, i, o), (r = !0);
        },
        p(i, o) {
          const a = {};
          128 & o[0] && (a.replayer = i[7]),
            8 & o[0] && (a.showController = i[3]),
            2 & o[0] && (a.autoPlay = i[1]),
            4 & o[0] && (a.speedOption = i[2]),
            1 & o[0] && (a.skipInactive = i[0]),
            16 & o[0] && (a.tags = i[4]),
            32 & o[0] && (a.inactiveColor = i[5]),
            t.$set(a);
        },
        i(i) {
          r || (nr(t.$$.fragment, i), (r = !0));
        },
        o(i) {
          tn(t.$$.fragment, i), (r = !1);
        },
        d(i) {
          e[32](null), Ds(t, i);
        },
      }
    );
  }
  function qp(e) {
    let t,
      r,
      n,
      i,
      o = e[7] && cc(e);
    return {
      c() {
        (t = Ge("div")),
          (r = Ge("div")),
          (n = vt()),
          o && o.c(),
          de(r, "class", "rr-player__frame"),
          de(r, "style", e[11]),
          de(t, "class", "rr-player"),
          de(t, "style", e[12]);
      },
      m(a, s) {
        lr(a, t, s),
          Ce(t, r),
          e[31](r),
          Ce(t, n),
          o && o.m(t, null),
          e[34](t),
          (i = !0);
      },
      p(a, s) {
        (!i || 2048 & s[0]) && de(r, "style", a[11]),
          a[7]
            ? o
              ? (o.p(a, s), 128 & s[0] && nr(o, 1))
              : ((o = cc(a)), o.c(), nr(o, 1), o.m(t, null))
            : o &&
              (D0(),
              tn(o, 1, 1, () => {
                o = null;
              }),
              A0()),
          (!i || 4096 & s[0]) && de(t, "style", a[12]);
      },
      i(a) {
        i || (nr(o), (i = !0));
      },
      o(a) {
        tn(o), (i = !1);
      },
      d(a) {
        a && Ht(t), e[31](null), o && o.d(), e[34](null);
      },
    };
  }
  function Gp(e, t, r) {
    let n,
      { width: i = 1024 } = t,
      { height: o = 576 } = t,
      { maxScale: a = 1 } = t,
      { events: s = [] } = t,
      { skipInactive: l = !0 } = t,
      { autoPlay: c = !0 } = t,
      { speedOption: u = [1, 2, 4, 8] } = t,
      { speed: g = 1 } = t,
      { showController: h = !0 } = t,
      { tags: v = {} } = t,
      { inactiveColor: f = "#D4D4D4" } = t,
      d,
      y,
      w,
      p,
      m,
      b,
      _ = i,
      S = o;
    const k = (D, C) => {
        const T = [i / C.width, o / C.height];
        a && T.push(a),
          (D.style.transform = `scale(${Math.min(...T)})translate(-50%, -50%)`);
      },
      E = () => {
        var D;
        d &&
          (Ql()
            ? document.exitFullscreen
              ? document.exitFullscreen()
              : document.mozExitFullscreen
              ? document.mozExitFullscreen()
              : document.webkitExitFullscreen
              ? document.webkitExitFullscreen()
              : document.msExitFullscreen && document.msExitFullscreen()
            : (D = d).requestFullscreen
            ? D.requestFullscreen()
            : D.mozRequestFullScreen
            ? D.mozRequestFullScreen()
            : D.webkitRequestFullscreen
            ? D.webkitRequestFullscreen()
            : D.msRequestFullscreen && D.msRequestFullscreen());
      };
    return (
      E0(() => {
        if (u !== void 0 && ec(u) !== "array")
          throw new Error("speedOption must be array");
        if (
          (u.forEach((C) => {
            if (ec(C) !== "number")
              throw new Error("item of speedOption must be number");
          }),
          u.indexOf(g) < 0)
        )
          throw new Error(`speed must be one of speedOption,
        current config:
        {
          ...
          speed: ${g},
          speedOption: [${u.toString()}]
          ...
        }
        `);
        var D;
        r(
          7,
          (n = new Fp(s, Object.assign({ speed: g, root: y, unpackFn: Dp }, t)))
        ),
          n.on("resize", (C) => {
            k(n.wrapper, C);
          }),
          (D = () => {
            Ql()
              ? setTimeout(() => {
                  (_ = i),
                    (S = o),
                    r(13, (i = d.offsetWidth)),
                    r(14, (o = d.offsetHeight - (h ? 80 : 0))),
                    k(n.wrapper, {
                      width: n.iframe.offsetWidth,
                      height: n.iframe.offsetHeight,
                    });
                }, 0)
              : (r(13, (i = _)),
                r(14, (o = S)),
                k(n.wrapper, {
                  width: n.iframe.offsetWidth,
                  height: n.iframe.offsetHeight,
                }));
          }),
          document.addEventListener("fullscreenchange", D),
          document.addEventListener("webkitfullscreenchange", D),
          document.addEventListener("mozfullscreenchange", D),
          document.addEventListener("MSFullscreenChange", D),
          (w = () => {
            document.removeEventListener("fullscreenchange", D),
              document.removeEventListener("webkitfullscreenchange", D),
              document.removeEventListener("mozfullscreenchange", D),
              document.removeEventListener("MSFullscreenChange", D);
          });
      }),
      C0(() => {
        w && w();
      }),
      (e.$$set = (D) => {
        r(39, (t = Dl(Dl({}, t), Ol(D)))),
          "width" in D && r(13, (i = D.width)),
          "height" in D && r(14, (o = D.height)),
          "maxScale" in D && r(15, (a = D.maxScale)),
          "events" in D && r(16, (s = D.events)),
          "skipInactive" in D && r(0, (l = D.skipInactive)),
          "autoPlay" in D && r(1, (c = D.autoPlay)),
          "speedOption" in D && r(2, (u = D.speedOption)),
          "speed" in D && r(17, (g = D.speed)),
          "showController" in D && r(3, (h = D.showController)),
          "tags" in D && r(4, (v = D.tags)),
          "inactiveColor" in D && r(5, (f = D.inactiveColor));
      }),
      (e.$$.update = () => {
        24576 & e.$$.dirty[0] &&
          r(11, (m = Jl({ width: `${i}px`, height: `${o}px` }))),
          24584 & e.$$.dirty[0] &&
            r(
              12,
              (b = Jl({ width: `${i}px`, height: `${o + (h ? 80 : 0)}px` }))
            );
      }),
      (t = Ol(t)),
      [
        l,
        c,
        u,
        h,
        v,
        f,
        E,
        n,
        d,
        y,
        p,
        m,
        b,
        i,
        o,
        a,
        s,
        g,
        () => n.getMirror(),
        () => {
          k(n.wrapper, {
            width: n.iframe.offsetWidth,
            height: n.iframe.offsetHeight,
          });
        },
        (D, C) => {
          switch ((n.on(D, C), D)) {
            case "ui-update-current-time":
            case "ui-update-progress":
            case "ui-update-player-state":
              p.$on(D, ({ detail: T }) => C(T));
          }
        },
        (D) => {
          n.addEvent(D), p.triggerUpdateMeta();
        },
        () => n.getMetaData(),
        () => n,
        () => {
          p.toggle();
        },
        (D) => {
          p.setSpeed(D);
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
        (D, C) => {
          p.goto(D, C);
        },
        (D, C, T = !1, A) => {
          p.playRange(D, C, T, A);
        },
        function (D) {
          xr[D ? "unshift" : "push"](() => {
            (y = D), r(9, y);
          });
        },
        function (D) {
          xr[D ? "unshift" : "push"](() => {
            (p = D), r(10, p);
          });
        },
        () => E(),
        function (D) {
          xr[D ? "unshift" : "push"](() => {
            (d = D), r(8, d);
          });
        },
      ]
    );
  }
  class Zp extends Os {
    constructor(t) {
      super(),
        As(
          this,
          t,
          Gp,
          qp,
          Cs,
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
  class Kp extends Zp {
    constructor(t) {
      super({ target: t.target, props: t.data || t.props });
    }
  }
  function Xp(e) {
    let t = [[]];
    fetch(e)
      .then((r) => r.text())
      .then((r) => {
        t = JSON.parse(r);
        const n = t.length;
        let i = t[n - 1];
        try {
          i = t[n - 2].concat(t[n - 1]);
        } catch {
          i = t[n - 1];
        }
        const o = ue.getNode("#session-replay"),
          a = o == null ? void 0 : o.getBoundingClientRect();
        new Kp({
          target: ue.getNode("#session-replay"),
          props: {
            events: i,
            unpackFn: Uh,
            inactiveColor: "#f97316",
            width: ((a == null ? void 0 : a.width) || 1024) - 20,
            height: ((a == null ? void 0 : a.height) || 576) - 20,
          },
        });
      });
  }
  function uc(e) {
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
    const r = document.createElement("div");
    r.classList.add(
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
      (r.innerHTML = e);
    const n = document.createElement("span");
    n.classList.add(
      "absolute",
      "top-2",
      "right-2",
      "text-gray-600",
      "cursor-pointer",
      "hover:text-gray-800"
    ),
      (n.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path  stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`),
      n.addEventListener("click", () => {
        i();
      }),
      r.appendChild(n),
      t.appendChild(r),
      t.addEventListener("click", (o) => {
        o.target === t && i();
      });
    function i() {
      t.removeEventListener("click", i), (t.style.display = "none"), t.remove();
    }
    return t;
  }
  var nd = { exports: {} };
  function Jp(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var Mo = { exports: {} };
  const Qp = {},
    em = Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: Qp },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    tm = Ch(em);
  var dc;
  function Se() {
    return (
      dc ||
        ((dc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n();
          })(ve, function () {
            var r =
              r ||
              (function (n, i) {
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
                  !o && typeof ve < "u" && ve.crypto && (o = ve.crypto),
                  !o && typeof Jp == "function")
                )
                  try {
                    o = tm;
                  } catch {}
                var a = function () {
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
                  s =
                    Object.create ||
                    (function () {
                      function p() {}
                      return function (m) {
                        var b;
                        return (
                          (p.prototype = m),
                          (b = new p()),
                          (p.prototype = null),
                          b
                        );
                      };
                    })(),
                  l = {},
                  c = (l.lib = {}),
                  u = (c.Base = (function () {
                    return {
                      extend: function (p) {
                        var m = s(this);
                        return (
                          p && m.mixIn(p),
                          (!m.hasOwnProperty("init") || this.init === m.init) &&
                            (m.init = function () {
                              m.$super.init.apply(this, arguments);
                            }),
                          (m.init.prototype = m),
                          (m.$super = this),
                          m
                        );
                      },
                      create: function () {
                        var p = this.extend();
                        return p.init.apply(p, arguments), p;
                      },
                      init: function () {},
                      mixIn: function (p) {
                        for (var m in p)
                          p.hasOwnProperty(m) && (this[m] = p[m]);
                        p.hasOwnProperty("toString") &&
                          (this.toString = p.toString);
                      },
                      clone: function () {
                        return this.init.prototype.extend(this);
                      },
                    };
                  })()),
                  g = (c.WordArray = u.extend({
                    init: function (p, m) {
                      (p = this.words = p || []),
                        m != i
                          ? (this.sigBytes = m)
                          : (this.sigBytes = p.length * 4);
                    },
                    toString: function (p) {
                      return (p || v).stringify(this);
                    },
                    concat: function (p) {
                      var m = this.words,
                        b = p.words,
                        _ = this.sigBytes,
                        S = p.sigBytes;
                      if ((this.clamp(), _ % 4))
                        for (var k = 0; k < S; k++) {
                          var E = (b[k >>> 2] >>> (24 - (k % 4) * 8)) & 255;
                          m[(_ + k) >>> 2] |= E << (24 - ((_ + k) % 4) * 8);
                        }
                      else
                        for (var D = 0; D < S; D += 4)
                          m[(_ + D) >>> 2] = b[D >>> 2];
                      return (this.sigBytes += S), this;
                    },
                    clamp: function () {
                      var p = this.words,
                        m = this.sigBytes;
                      (p[m >>> 2] &= 4294967295 << (32 - (m % 4) * 8)),
                        (p.length = n.ceil(m / 4));
                    },
                    clone: function () {
                      var p = u.clone.call(this);
                      return (p.words = this.words.slice(0)), p;
                    },
                    random: function (p) {
                      for (var m = [], b = 0; b < p; b += 4) m.push(a());
                      return new g.init(m, p);
                    },
                  })),
                  h = (l.enc = {}),
                  v = (h.Hex = {
                    stringify: function (p) {
                      for (
                        var m = p.words, b = p.sigBytes, _ = [], S = 0;
                        S < b;
                        S++
                      ) {
                        var k = (m[S >>> 2] >>> (24 - (S % 4) * 8)) & 255;
                        _.push((k >>> 4).toString(16)),
                          _.push((k & 15).toString(16));
                      }
                      return _.join("");
                    },
                    parse: function (p) {
                      for (var m = p.length, b = [], _ = 0; _ < m; _ += 2)
                        b[_ >>> 3] |=
                          parseInt(p.substr(_, 2), 16) << (24 - (_ % 8) * 4);
                      return new g.init(b, m / 2);
                    },
                  }),
                  f = (h.Latin1 = {
                    stringify: function (p) {
                      for (
                        var m = p.words, b = p.sigBytes, _ = [], S = 0;
                        S < b;
                        S++
                      ) {
                        var k = (m[S >>> 2] >>> (24 - (S % 4) * 8)) & 255;
                        _.push(String.fromCharCode(k));
                      }
                      return _.join("");
                    },
                    parse: function (p) {
                      for (var m = p.length, b = [], _ = 0; _ < m; _++)
                        b[_ >>> 2] |=
                          (p.charCodeAt(_) & 255) << (24 - (_ % 4) * 8);
                      return new g.init(b, m);
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
                  y = (c.BufferedBlockAlgorithm = u.extend({
                    reset: function () {
                      (this._data = new g.init()), (this._nDataBytes = 0);
                    },
                    _append: function (p) {
                      typeof p == "string" && (p = d.parse(p)),
                        this._data.concat(p),
                        (this._nDataBytes += p.sigBytes);
                    },
                    _process: function (p) {
                      var m,
                        b = this._data,
                        _ = b.words,
                        S = b.sigBytes,
                        k = this.blockSize,
                        E = k * 4,
                        D = S / E;
                      p
                        ? (D = n.ceil(D))
                        : (D = n.max((D | 0) - this._minBufferSize, 0));
                      var C = D * k,
                        T = n.min(C * 4, S);
                      if (C) {
                        for (var A = 0; A < C; A += k)
                          this._doProcessBlock(_, A);
                        (m = _.splice(0, C)), (b.sigBytes -= T);
                      }
                      return new g.init(m, T);
                    },
                    clone: function () {
                      var p = u.clone.call(this);
                      return (p._data = this._data.clone()), p;
                    },
                    _minBufferSize: 0,
                  }));
                c.Hasher = y.extend({
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
                    var m = this._doFinalize();
                    return m;
                  },
                  blockSize: 16,
                  _createHelper: function (p) {
                    return function (m, b) {
                      return new p.init(b).finalize(m);
                    };
                  },
                  _createHmacHelper: function (p) {
                    return function (m, b) {
                      return new w.HMAC.init(p, b).finalize(m);
                    };
                  },
                });
                var w = (l.algo = {});
                return l;
              })(Math);
            return r;
          });
        })(Mo)),
      Mo.exports
    );
  }
  var Io = { exports: {} },
    fc;
  function qi() {
    return (
      fc ||
        ((fc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.Base,
                  s = o.WordArray,
                  l = (i.x64 = {});
                (l.Word = a.extend({
                  init: function (c, u) {
                    (this.high = c), (this.low = u);
                  },
                })),
                  (l.WordArray = a.extend({
                    init: function (c, u) {
                      (c = this.words = c || []),
                        u != n
                          ? (this.sigBytes = u)
                          : (this.sigBytes = c.length * 8);
                    },
                    toX32: function () {
                      for (
                        var c = this.words, u = c.length, g = [], h = 0;
                        h < u;
                        h++
                      ) {
                        var v = c[h];
                        g.push(v.high), g.push(v.low);
                      }
                      return s.create(g, this.sigBytes);
                    },
                    clone: function () {
                      for (
                        var c = a.clone.call(this),
                          u = (c.words = this.words.slice(0)),
                          g = u.length,
                          h = 0;
                        h < g;
                        h++
                      )
                        u[h] = u[h].clone();
                      return c;
                    },
                  }));
              })(),
              r
            );
          });
        })(Io)),
      Io.exports
    );
  }
  var No = { exports: {} },
    hc;
  function rm() {
    return (
      hc ||
        ((hc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function () {
                if (typeof ArrayBuffer == "function") {
                  var n = r,
                    i = n.lib,
                    o = i.WordArray,
                    a = o.init,
                    s = (o.init = function (l) {
                      if (
                        (l instanceof ArrayBuffer && (l = new Uint8Array(l)),
                        (l instanceof Int8Array ||
                          (typeof Uint8ClampedArray < "u" &&
                            l instanceof Uint8ClampedArray) ||
                          l instanceof Int16Array ||
                          l instanceof Uint16Array ||
                          l instanceof Int32Array ||
                          l instanceof Uint32Array ||
                          l instanceof Float32Array ||
                          l instanceof Float64Array) &&
                          (l = new Uint8Array(
                            l.buffer,
                            l.byteOffset,
                            l.byteLength
                          )),
                        l instanceof Uint8Array)
                      ) {
                        for (var c = l.byteLength, u = [], g = 0; g < c; g++)
                          u[g >>> 2] |= l[g] << (24 - (g % 4) * 8);
                        a.call(this, u, c);
                      } else a.apply(this, arguments);
                    });
                  s.prototype = o;
                }
              })(),
              r.lib.WordArray
            );
          });
        })(No)),
      No.exports
    );
  }
  var Ro = { exports: {} },
    pc;
  function nm() {
    return (
      pc ||
        ((pc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.WordArray,
                  a = n.enc;
                (a.Utf16 = a.Utf16BE =
                  {
                    stringify: function (l) {
                      for (
                        var c = l.words, u = l.sigBytes, g = [], h = 0;
                        h < u;
                        h += 2
                      ) {
                        var v = (c[h >>> 2] >>> (16 - (h % 4) * 8)) & 65535;
                        g.push(String.fromCharCode(v));
                      }
                      return g.join("");
                    },
                    parse: function (l) {
                      for (var c = l.length, u = [], g = 0; g < c; g++)
                        u[g >>> 1] |= l.charCodeAt(g) << (16 - (g % 2) * 16);
                      return o.create(u, c * 2);
                    },
                  }),
                  (a.Utf16LE = {
                    stringify: function (l) {
                      for (
                        var c = l.words, u = l.sigBytes, g = [], h = 0;
                        h < u;
                        h += 2
                      ) {
                        var v = s((c[h >>> 2] >>> (16 - (h % 4) * 8)) & 65535);
                        g.push(String.fromCharCode(v));
                      }
                      return g.join("");
                    },
                    parse: function (l) {
                      for (var c = l.length, u = [], g = 0; g < c; g++)
                        u[g >>> 1] |= s(l.charCodeAt(g) << (16 - (g % 2) * 16));
                      return o.create(u, c * 2);
                    },
                  });
                function s(l) {
                  return ((l << 8) & 4278255360) | ((l >>> 8) & 16711935);
                }
              })(),
              r.enc.Utf16
            );
          });
        })(Ro)),
      Ro.exports
    );
  }
  var Lo = { exports: {} },
    mc;
  function ln() {
    return (
      mc ||
        ((mc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.WordArray,
                  a = n.enc;
                a.Base64 = {
                  stringify: function (l) {
                    var c = l.words,
                      u = l.sigBytes,
                      g = this._map;
                    l.clamp();
                    for (var h = [], v = 0; v < u; v += 3)
                      for (
                        var f = (c[v >>> 2] >>> (24 - (v % 4) * 8)) & 255,
                          d =
                            (c[(v + 1) >>> 2] >>> (24 - ((v + 1) % 4) * 8)) &
                            255,
                          y =
                            (c[(v + 2) >>> 2] >>> (24 - ((v + 2) % 4) * 8)) &
                            255,
                          w = (f << 16) | (d << 8) | y,
                          p = 0;
                        p < 4 && v + p * 0.75 < u;
                        p++
                      )
                        h.push(g.charAt((w >>> (6 * (3 - p))) & 63));
                    var m = g.charAt(64);
                    if (m) for (; h.length % 4; ) h.push(m);
                    return h.join("");
                  },
                  parse: function (l) {
                    var c = l.length,
                      u = this._map,
                      g = this._reverseMap;
                    if (!g) {
                      g = this._reverseMap = [];
                      for (var h = 0; h < u.length; h++) g[u.charCodeAt(h)] = h;
                    }
                    var v = u.charAt(64);
                    if (v) {
                      var f = l.indexOf(v);
                      f !== -1 && (c = f);
                    }
                    return s(l, c, g);
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                };
                function s(l, c, u) {
                  for (var g = [], h = 0, v = 0; v < c; v++)
                    if (v % 4) {
                      var f = u[l.charCodeAt(v - 1)] << ((v % 4) * 2),
                        d = u[l.charCodeAt(v)] >>> (6 - (v % 4) * 2),
                        y = f | d;
                      (g[h >>> 2] |= y << (24 - (h % 4) * 8)), h++;
                    }
                  return o.create(g, h);
                }
              })(),
              r.enc.Base64
            );
          });
        })(Lo)),
      Lo.exports
    );
  }
  var Po = { exports: {} },
    gc;
  function im() {
    return (
      gc ||
        ((gc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.WordArray,
                  a = n.enc;
                a.Base64url = {
                  stringify: function (l, c = !0) {
                    var u = l.words,
                      g = l.sigBytes,
                      h = c ? this._safe_map : this._map;
                    l.clamp();
                    for (var v = [], f = 0; f < g; f += 3)
                      for (
                        var d = (u[f >>> 2] >>> (24 - (f % 4) * 8)) & 255,
                          y =
                            (u[(f + 1) >>> 2] >>> (24 - ((f + 1) % 4) * 8)) &
                            255,
                          w =
                            (u[(f + 2) >>> 2] >>> (24 - ((f + 2) % 4) * 8)) &
                            255,
                          p = (d << 16) | (y << 8) | w,
                          m = 0;
                        m < 4 && f + m * 0.75 < g;
                        m++
                      )
                        v.push(h.charAt((p >>> (6 * (3 - m))) & 63));
                    var b = h.charAt(64);
                    if (b) for (; v.length % 4; ) v.push(b);
                    return v.join("");
                  },
                  parse: function (l, c = !0) {
                    var u = l.length,
                      g = c ? this._safe_map : this._map,
                      h = this._reverseMap;
                    if (!h) {
                      h = this._reverseMap = [];
                      for (var v = 0; v < g.length; v++) h[g.charCodeAt(v)] = v;
                    }
                    var f = g.charAt(64);
                    if (f) {
                      var d = l.indexOf(f);
                      d !== -1 && (u = d);
                    }
                    return s(l, u, h);
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  _safe_map:
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                };
                function s(l, c, u) {
                  for (var g = [], h = 0, v = 0; v < c; v++)
                    if (v % 4) {
                      var f = u[l.charCodeAt(v - 1)] << ((v % 4) * 2),
                        d = u[l.charCodeAt(v)] >>> (6 - (v % 4) * 2),
                        y = f | d;
                      (g[h >>> 2] |= y << (24 - (h % 4) * 8)), h++;
                    }
                  return o.create(g, h);
                }
              })(),
              r.enc.Base64url
            );
          });
        })(Po)),
      Po.exports
    );
  }
  var Fo = { exports: {} },
    vc;
  function cn() {
    return (
      vc ||
        ((vc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.WordArray,
                  s = o.Hasher,
                  l = i.algo,
                  c = [];
                (function () {
                  for (var d = 0; d < 64; d++)
                    c[d] = (n.abs(n.sin(d + 1)) * 4294967296) | 0;
                })();
                var u = (l.MD5 = s.extend({
                  _doReset: function () {
                    this._hash = new a.init([
                      1732584193, 4023233417, 2562383102, 271733878,
                    ]);
                  },
                  _doProcessBlock: function (d, y) {
                    for (var w = 0; w < 16; w++) {
                      var p = y + w,
                        m = d[p];
                      d[p] =
                        (((m << 8) | (m >>> 24)) & 16711935) |
                        (((m << 24) | (m >>> 8)) & 4278255360);
                    }
                    var b = this._hash.words,
                      _ = d[y + 0],
                      S = d[y + 1],
                      k = d[y + 2],
                      E = d[y + 3],
                      D = d[y + 4],
                      C = d[y + 5],
                      T = d[y + 6],
                      A = d[y + 7],
                      M = d[y + 8],
                      j = d[y + 9],
                      z = d[y + 10],
                      $ = d[y + 11],
                      Y = d[y + 12],
                      q = d[y + 13],
                      F = d[y + 14],
                      L = d[y + 15],
                      N = b[0],
                      P = b[1],
                      I = b[2],
                      O = b[3];
                    (N = g(N, P, I, O, _, 7, c[0])),
                      (O = g(O, N, P, I, S, 12, c[1])),
                      (I = g(I, O, N, P, k, 17, c[2])),
                      (P = g(P, I, O, N, E, 22, c[3])),
                      (N = g(N, P, I, O, D, 7, c[4])),
                      (O = g(O, N, P, I, C, 12, c[5])),
                      (I = g(I, O, N, P, T, 17, c[6])),
                      (P = g(P, I, O, N, A, 22, c[7])),
                      (N = g(N, P, I, O, M, 7, c[8])),
                      (O = g(O, N, P, I, j, 12, c[9])),
                      (I = g(I, O, N, P, z, 17, c[10])),
                      (P = g(P, I, O, N, $, 22, c[11])),
                      (N = g(N, P, I, O, Y, 7, c[12])),
                      (O = g(O, N, P, I, q, 12, c[13])),
                      (I = g(I, O, N, P, F, 17, c[14])),
                      (P = g(P, I, O, N, L, 22, c[15])),
                      (N = h(N, P, I, O, S, 5, c[16])),
                      (O = h(O, N, P, I, T, 9, c[17])),
                      (I = h(I, O, N, P, $, 14, c[18])),
                      (P = h(P, I, O, N, _, 20, c[19])),
                      (N = h(N, P, I, O, C, 5, c[20])),
                      (O = h(O, N, P, I, z, 9, c[21])),
                      (I = h(I, O, N, P, L, 14, c[22])),
                      (P = h(P, I, O, N, D, 20, c[23])),
                      (N = h(N, P, I, O, j, 5, c[24])),
                      (O = h(O, N, P, I, F, 9, c[25])),
                      (I = h(I, O, N, P, E, 14, c[26])),
                      (P = h(P, I, O, N, M, 20, c[27])),
                      (N = h(N, P, I, O, q, 5, c[28])),
                      (O = h(O, N, P, I, k, 9, c[29])),
                      (I = h(I, O, N, P, A, 14, c[30])),
                      (P = h(P, I, O, N, Y, 20, c[31])),
                      (N = v(N, P, I, O, C, 4, c[32])),
                      (O = v(O, N, P, I, M, 11, c[33])),
                      (I = v(I, O, N, P, $, 16, c[34])),
                      (P = v(P, I, O, N, F, 23, c[35])),
                      (N = v(N, P, I, O, S, 4, c[36])),
                      (O = v(O, N, P, I, D, 11, c[37])),
                      (I = v(I, O, N, P, A, 16, c[38])),
                      (P = v(P, I, O, N, z, 23, c[39])),
                      (N = v(N, P, I, O, q, 4, c[40])),
                      (O = v(O, N, P, I, _, 11, c[41])),
                      (I = v(I, O, N, P, E, 16, c[42])),
                      (P = v(P, I, O, N, T, 23, c[43])),
                      (N = v(N, P, I, O, j, 4, c[44])),
                      (O = v(O, N, P, I, Y, 11, c[45])),
                      (I = v(I, O, N, P, L, 16, c[46])),
                      (P = v(P, I, O, N, k, 23, c[47])),
                      (N = f(N, P, I, O, _, 6, c[48])),
                      (O = f(O, N, P, I, A, 10, c[49])),
                      (I = f(I, O, N, P, F, 15, c[50])),
                      (P = f(P, I, O, N, C, 21, c[51])),
                      (N = f(N, P, I, O, Y, 6, c[52])),
                      (O = f(O, N, P, I, E, 10, c[53])),
                      (I = f(I, O, N, P, z, 15, c[54])),
                      (P = f(P, I, O, N, S, 21, c[55])),
                      (N = f(N, P, I, O, M, 6, c[56])),
                      (O = f(O, N, P, I, L, 10, c[57])),
                      (I = f(I, O, N, P, T, 15, c[58])),
                      (P = f(P, I, O, N, q, 21, c[59])),
                      (N = f(N, P, I, O, D, 6, c[60])),
                      (O = f(O, N, P, I, $, 10, c[61])),
                      (I = f(I, O, N, P, k, 15, c[62])),
                      (P = f(P, I, O, N, j, 21, c[63])),
                      (b[0] = (b[0] + N) | 0),
                      (b[1] = (b[1] + P) | 0),
                      (b[2] = (b[2] + I) | 0),
                      (b[3] = (b[3] + O) | 0);
                  },
                  _doFinalize: function () {
                    var d = this._data,
                      y = d.words,
                      w = this._nDataBytes * 8,
                      p = d.sigBytes * 8;
                    y[p >>> 5] |= 128 << (24 - (p % 32));
                    var m = n.floor(w / 4294967296),
                      b = w;
                    (y[(((p + 64) >>> 9) << 4) + 15] =
                      (((m << 8) | (m >>> 24)) & 16711935) |
                      (((m << 24) | (m >>> 8)) & 4278255360)),
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
                    var d = s.clone.call(this);
                    return (d._hash = this._hash.clone()), d;
                  },
                }));
                function g(d, y, w, p, m, b, _) {
                  var S = d + ((y & w) | (~y & p)) + m + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                function h(d, y, w, p, m, b, _) {
                  var S = d + ((y & p) | (w & ~p)) + m + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                function v(d, y, w, p, m, b, _) {
                  var S = d + (y ^ w ^ p) + m + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                function f(d, y, w, p, m, b, _) {
                  var S = d + (w ^ (y | ~p)) + m + _;
                  return ((S << b) | (S >>> (32 - b))) + y;
                }
                (i.MD5 = s._createHelper(u)),
                  (i.HmacMD5 = s._createHmacHelper(u));
              })(Math),
              r.MD5
            );
          });
        })(Fo)),
      Fo.exports
    );
  }
  var Bo = { exports: {} },
    yc;
  function Ms() {
    return (
      yc ||
        ((yc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.WordArray,
                  a = i.Hasher,
                  s = n.algo,
                  l = [],
                  c = (s.SHA1 = a.extend({
                    _doReset: function () {
                      this._hash = new o.init([
                        1732584193, 4023233417, 2562383102, 271733878,
                        3285377520,
                      ]);
                    },
                    _doProcessBlock: function (u, g) {
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
                        if (p < 16) l[p] = u[g + p] | 0;
                        else {
                          var m = l[p - 3] ^ l[p - 8] ^ l[p - 14] ^ l[p - 16];
                          l[p] = (m << 1) | (m >>> 31);
                        }
                        var b = ((v << 5) | (v >>> 27)) + w + l[p];
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
                        g = u.words,
                        h = this._nDataBytes * 8,
                        v = u.sigBytes * 8;
                      return (
                        (g[v >>> 5] |= 128 << (24 - (v % 32))),
                        (g[(((v + 64) >>> 9) << 4) + 14] = Math.floor(
                          h / 4294967296
                        )),
                        (g[(((v + 64) >>> 9) << 4) + 15] = h),
                        (u.sigBytes = g.length * 4),
                        this._process(),
                        this._hash
                      );
                    },
                    clone: function () {
                      var u = a.clone.call(this);
                      return (u._hash = this._hash.clone()), u;
                    },
                  }));
                (n.SHA1 = a._createHelper(c)),
                  (n.HmacSHA1 = a._createHmacHelper(c));
              })(),
              r.SHA1
            );
          });
        })(Bo)),
      Bo.exports
    );
  }
  var jo = { exports: {} },
    bc;
  function id() {
    return (
      bc ||
        ((bc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            return (
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.WordArray,
                  s = o.Hasher,
                  l = i.algo,
                  c = [],
                  u = [];
                (function () {
                  function v(w) {
                    for (var p = n.sqrt(w), m = 2; m <= p; m++)
                      if (!(w % m)) return !1;
                    return !0;
                  }
                  function f(w) {
                    return ((w - (w | 0)) * 4294967296) | 0;
                  }
                  for (var d = 2, y = 0; y < 64; )
                    v(d) &&
                      (y < 8 && (c[y] = f(n.pow(d, 1 / 2))),
                      (u[y] = f(n.pow(d, 1 / 3))),
                      y++),
                      d++;
                })();
                var g = [],
                  h = (l.SHA256 = s.extend({
                    _doReset: function () {
                      this._hash = new a.init(c.slice(0));
                    },
                    _doProcessBlock: function (v, f) {
                      for (
                        var d = this._hash.words,
                          y = d[0],
                          w = d[1],
                          p = d[2],
                          m = d[3],
                          b = d[4],
                          _ = d[5],
                          S = d[6],
                          k = d[7],
                          E = 0;
                        E < 64;
                        E++
                      ) {
                        if (E < 16) g[E] = v[f + E] | 0;
                        else {
                          var D = g[E - 15],
                            C =
                              ((D << 25) | (D >>> 7)) ^
                              ((D << 14) | (D >>> 18)) ^
                              (D >>> 3),
                            T = g[E - 2],
                            A =
                              ((T << 15) | (T >>> 17)) ^
                              ((T << 13) | (T >>> 19)) ^
                              (T >>> 10);
                          g[E] = C + g[E - 7] + A + g[E - 16];
                        }
                        var M = (b & _) ^ (~b & S),
                          j = (y & w) ^ (y & p) ^ (w & p),
                          z =
                            ((y << 30) | (y >>> 2)) ^
                            ((y << 19) | (y >>> 13)) ^
                            ((y << 10) | (y >>> 22)),
                          $ =
                            ((b << 26) | (b >>> 6)) ^
                            ((b << 21) | (b >>> 11)) ^
                            ((b << 7) | (b >>> 25)),
                          Y = k + $ + M + u[E] + g[E],
                          q = z + j;
                        (k = S),
                          (S = _),
                          (_ = b),
                          (b = (m + Y) | 0),
                          (m = p),
                          (p = w),
                          (w = y),
                          (y = (Y + q) | 0);
                      }
                      (d[0] = (d[0] + y) | 0),
                        (d[1] = (d[1] + w) | 0),
                        (d[2] = (d[2] + p) | 0),
                        (d[3] = (d[3] + m) | 0),
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
                        (f[(((y + 64) >>> 9) << 4) + 14] = n.floor(
                          d / 4294967296
                        )),
                        (f[(((y + 64) >>> 9) << 4) + 15] = d),
                        (v.sigBytes = f.length * 4),
                        this._process(),
                        this._hash
                      );
                    },
                    clone: function () {
                      var v = s.clone.call(this);
                      return (v._hash = this._hash.clone()), v;
                    },
                  }));
                (i.SHA256 = s._createHelper(h)),
                  (i.HmacSHA256 = s._createHmacHelper(h));
              })(Math),
              r.SHA256
            );
          });
        })(jo)),
      jo.exports
    );
  }
  var Yo = { exports: {} },
    xc;
  function om() {
    return (
      xc ||
        ((xc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), id());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.WordArray,
                  a = n.algo,
                  s = a.SHA256,
                  l = (a.SHA224 = s.extend({
                    _doReset: function () {
                      this._hash = new o.init([
                        3238371032, 914150663, 812702999, 4144912697,
                        4290775857, 1750603025, 1694076839, 3204075428,
                      ]);
                    },
                    _doFinalize: function () {
                      var c = s._doFinalize.call(this);
                      return (c.sigBytes -= 4), c;
                    },
                  }));
                (n.SHA224 = s._createHelper(l)),
                  (n.HmacSHA224 = s._createHmacHelper(l));
              })(),
              r.SHA224
            );
          });
        })(Yo)),
      Yo.exports
    );
  }
  var $o = { exports: {} },
    wc;
  function od() {
    return (
      wc ||
        ((wc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), qi());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.Hasher,
                  a = n.x64,
                  s = a.Word,
                  l = a.WordArray,
                  c = n.algo;
                function u() {
                  return s.create.apply(s, arguments);
                }
                var g = [
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
                var v = (c.SHA512 = o.extend({
                  _doReset: function () {
                    this._hash = new l.init([
                      new s.init(1779033703, 4089235720),
                      new s.init(3144134277, 2227873595),
                      new s.init(1013904242, 4271175723),
                      new s.init(2773480762, 1595750129),
                      new s.init(1359893119, 2917565137),
                      new s.init(2600822924, 725511199),
                      new s.init(528734635, 4215389547),
                      new s.init(1541459225, 327033209),
                    ]);
                  },
                  _doProcessBlock: function (f, d) {
                    for (
                      var y = this._hash.words,
                        w = y[0],
                        p = y[1],
                        m = y[2],
                        b = y[3],
                        _ = y[4],
                        S = y[5],
                        k = y[6],
                        E = y[7],
                        D = w.high,
                        C = w.low,
                        T = p.high,
                        A = p.low,
                        M = m.high,
                        j = m.low,
                        z = b.high,
                        $ = b.low,
                        Y = _.high,
                        q = _.low,
                        F = S.high,
                        L = S.low,
                        N = k.high,
                        P = k.low,
                        I = E.high,
                        O = E.low,
                        V = D,
                        J = C,
                        se = T,
                        H = A,
                        he = M,
                        Ye = j,
                        nt = z,
                        Ue = $,
                        Ve = Y,
                        Oe = q,
                        Gt = F,
                        it = L,
                        B = N,
                        K = P,
                        G = I,
                        Z = O,
                        te = 0;
                      te < 80;
                      te++
                    ) {
                      var re,
                        ce,
                        ge = h[te];
                      if (te < 16)
                        (ce = ge.high = f[d + te * 2] | 0),
                          (re = ge.low = f[d + te * 2 + 1] | 0);
                      else {
                        var ie = h[te - 15],
                          oe = ie.high,
                          ne = ie.low,
                          fe =
                            ((oe >>> 1) | (ne << 31)) ^
                            ((oe >>> 8) | (ne << 24)) ^
                            (oe >>> 7),
                          st =
                            ((ne >>> 1) | (oe << 31)) ^
                            ((ne >>> 8) | (oe << 24)) ^
                            ((ne >>> 7) | (oe << 25)),
                          qe = h[te - 2],
                          pe = qe.high,
                          le = qe.low,
                          gt =
                            ((pe >>> 19) | (le << 13)) ^
                            ((pe << 3) | (le >>> 29)) ^
                            (pe >>> 6),
                          Yr =
                            ((le >>> 19) | (pe << 13)) ^
                            ((le << 3) | (pe >>> 29)) ^
                            ((le >>> 6) | (pe << 26)),
                          pn = h[te - 7],
                          fh = pn.high,
                          hh = pn.low,
                          bl = h[te - 16],
                          ph = bl.high,
                          xl = bl.low;
                        (re = st + hh),
                          (ce = fe + fh + (re >>> 0 < st >>> 0 ? 1 : 0)),
                          (re = re + Yr),
                          (ce = ce + gt + (re >>> 0 < Yr >>> 0 ? 1 : 0)),
                          (re = re + xl),
                          (ce = ce + ph + (re >>> 0 < xl >>> 0 ? 1 : 0)),
                          (ge.high = ce),
                          (ge.low = re);
                      }
                      var mh = (Ve & Gt) ^ (~Ve & B),
                        wl = (Oe & it) ^ (~Oe & K),
                        gh = (V & se) ^ (V & he) ^ (se & he),
                        vh = (J & H) ^ (J & Ye) ^ (H & Ye),
                        yh =
                          ((V >>> 28) | (J << 4)) ^
                          ((V << 30) | (J >>> 2)) ^
                          ((V << 25) | (J >>> 7)),
                        _l =
                          ((J >>> 28) | (V << 4)) ^
                          ((J << 30) | (V >>> 2)) ^
                          ((J << 25) | (V >>> 7)),
                        bh =
                          ((Ve >>> 14) | (Oe << 18)) ^
                          ((Ve >>> 18) | (Oe << 14)) ^
                          ((Ve << 23) | (Oe >>> 9)),
                        xh =
                          ((Oe >>> 14) | (Ve << 18)) ^
                          ((Oe >>> 18) | (Ve << 14)) ^
                          ((Oe << 23) | (Ve >>> 9)),
                        Sl = g[te],
                        wh = Sl.high,
                        kl = Sl.low,
                        ct = Z + xh,
                        dr = G + bh + (ct >>> 0 < Z >>> 0 ? 1 : 0),
                        ct = ct + wl,
                        dr = dr + mh + (ct >>> 0 < wl >>> 0 ? 1 : 0),
                        ct = ct + kl,
                        dr = dr + wh + (ct >>> 0 < kl >>> 0 ? 1 : 0),
                        ct = ct + re,
                        dr = dr + ce + (ct >>> 0 < re >>> 0 ? 1 : 0),
                        El = _l + vh,
                        _h = yh + gh + (El >>> 0 < _l >>> 0 ? 1 : 0);
                      (G = B),
                        (Z = K),
                        (B = Gt),
                        (K = it),
                        (Gt = Ve),
                        (it = Oe),
                        (Oe = (Ue + ct) | 0),
                        (Ve = (nt + dr + (Oe >>> 0 < Ue >>> 0 ? 1 : 0)) | 0),
                        (nt = he),
                        (Ue = Ye),
                        (he = se),
                        (Ye = H),
                        (se = V),
                        (H = J),
                        (J = (ct + El) | 0),
                        (V = (dr + _h + (J >>> 0 < ct >>> 0 ? 1 : 0)) | 0);
                    }
                    (C = w.low = C + J),
                      (w.high = D + V + (C >>> 0 < J >>> 0 ? 1 : 0)),
                      (A = p.low = A + H),
                      (p.high = T + se + (A >>> 0 < H >>> 0 ? 1 : 0)),
                      (j = m.low = j + Ye),
                      (m.high = M + he + (j >>> 0 < Ye >>> 0 ? 1 : 0)),
                      ($ = b.low = $ + Ue),
                      (b.high = z + nt + ($ >>> 0 < Ue >>> 0 ? 1 : 0)),
                      (q = _.low = q + Oe),
                      (_.high = Y + Ve + (q >>> 0 < Oe >>> 0 ? 1 : 0)),
                      (L = S.low = L + it),
                      (S.high = F + Gt + (L >>> 0 < it >>> 0 ? 1 : 0)),
                      (P = k.low = P + K),
                      (k.high = N + B + (P >>> 0 < K >>> 0 ? 1 : 0)),
                      (O = E.low = O + Z),
                      (E.high = I + G + (O >>> 0 < Z >>> 0 ? 1 : 0));
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
                (n.SHA512 = o._createHelper(v)),
                  (n.HmacSHA512 = o._createHmacHelper(v));
              })(),
              r.SHA512
            );
          });
        })($o)),
      $o.exports
    );
  }
  var Uo = { exports: {} },
    _c;
  function am() {
    return (
      _c ||
        ((_c = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), qi(), od());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.x64,
                  o = i.Word,
                  a = i.WordArray,
                  s = n.algo,
                  l = s.SHA512,
                  c = (s.SHA384 = l.extend({
                    _doReset: function () {
                      this._hash = new a.init([
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
                      var u = l._doFinalize.call(this);
                      return (u.sigBytes -= 16), u;
                    },
                  }));
                (n.SHA384 = l._createHelper(c)),
                  (n.HmacSHA384 = l._createHmacHelper(c));
              })(),
              r.SHA384
            );
          });
        })(Uo)),
      Uo.exports
    );
  }
  var zo = { exports: {} },
    Sc;
  function sm() {
    return (
      Sc ||
        ((Sc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), qi());
          })(ve, function (r) {
            return (
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.WordArray,
                  s = o.Hasher,
                  l = i.x64,
                  c = l.Word,
                  u = i.algo,
                  g = [],
                  h = [],
                  v = [];
                (function () {
                  for (var y = 1, w = 0, p = 0; p < 24; p++) {
                    g[y + 5 * w] = (((p + 1) * (p + 2)) / 2) % 64;
                    var m = w % 5,
                      b = (2 * y + 3 * w) % 5;
                    (y = m), (w = b);
                  }
                  for (var y = 0; y < 5; y++)
                    for (var w = 0; w < 5; w++)
                      h[y + 5 * w] = w + ((2 * y + 3 * w) % 5) * 5;
                  for (var _ = 1, S = 0; S < 24; S++) {
                    for (var k = 0, E = 0, D = 0; D < 7; D++) {
                      if (_ & 1) {
                        var C = (1 << D) - 1;
                        C < 32 ? (E ^= 1 << C) : (k ^= 1 << (C - 32));
                      }
                      _ & 128 ? (_ = (_ << 1) ^ 113) : (_ <<= 1);
                    }
                    v[S] = c.create(k, E);
                  }
                })();
                var f = [];
                (function () {
                  for (var y = 0; y < 25; y++) f[y] = c.create();
                })();
                var d = (u.SHA3 = s.extend({
                  cfg: s.cfg.extend({ outputLength: 512 }),
                  _doReset: function () {
                    for (var y = (this._state = []), w = 0; w < 25; w++)
                      y[w] = new c.init();
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                  },
                  _doProcessBlock: function (y, w) {
                    for (
                      var p = this._state, m = this.blockSize / 2, b = 0;
                      b < m;
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
                      for (var D = 0; D < 5; D++) {
                        for (var C = 0, T = 0, A = 0; A < 5; A++) {
                          var k = p[D + 5 * A];
                          (C ^= k.high), (T ^= k.low);
                        }
                        var M = f[D];
                        (M.high = C), (M.low = T);
                      }
                      for (var D = 0; D < 5; D++)
                        for (
                          var j = f[(D + 4) % 5],
                            z = f[(D + 1) % 5],
                            $ = z.high,
                            Y = z.low,
                            C = j.high ^ (($ << 1) | (Y >>> 31)),
                            T = j.low ^ ((Y << 1) | ($ >>> 31)),
                            A = 0;
                          A < 5;
                          A++
                        ) {
                          var k = p[D + 5 * A];
                          (k.high ^= C), (k.low ^= T);
                        }
                      for (var q = 1; q < 25; q++) {
                        var C,
                          T,
                          k = p[q],
                          F = k.high,
                          L = k.low,
                          N = g[q];
                        N < 32
                          ? ((C = (F << N) | (L >>> (32 - N))),
                            (T = (L << N) | (F >>> (32 - N))))
                          : ((C = (L << (N - 32)) | (F >>> (64 - N))),
                            (T = (F << (N - 32)) | (L >>> (64 - N))));
                        var P = f[h[q]];
                        (P.high = C), (P.low = T);
                      }
                      var I = f[0],
                        O = p[0];
                      (I.high = O.high), (I.low = O.low);
                      for (var D = 0; D < 5; D++)
                        for (var A = 0; A < 5; A++) {
                          var q = D + 5 * A,
                            k = p[q],
                            V = f[q],
                            J = f[((D + 1) % 5) + 5 * A],
                            se = f[((D + 2) % 5) + 5 * A];
                          (k.high = V.high ^ (~J.high & se.high)),
                            (k.low = V.low ^ (~J.low & se.low));
                        }
                      var k = p[0],
                        H = v[E];
                      (k.high ^= H.high), (k.low ^= H.low);
                    }
                  },
                  _doFinalize: function () {
                    var y = this._data,
                      w = y.words;
                    this._nDataBytes * 8;
                    var p = y.sigBytes * 8,
                      m = this.blockSize * 32;
                    (w[p >>> 5] |= 1 << (24 - (p % 32))),
                      (w[((n.ceil((p + 1) / m) * m) >>> 5) - 1] |= 128),
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
                      var D = b[E],
                        C = D.high,
                        T = D.low;
                      (C =
                        (((C << 8) | (C >>> 24)) & 16711935) |
                        (((C << 24) | (C >>> 8)) & 4278255360)),
                        (T =
                          (((T << 8) | (T >>> 24)) & 16711935) |
                          (((T << 24) | (T >>> 8)) & 4278255360)),
                        k.push(T),
                        k.push(C);
                    }
                    return new a.init(k, _);
                  },
                  clone: function () {
                    for (
                      var y = s.clone.call(this),
                        w = (y._state = this._state.slice(0)),
                        p = 0;
                      p < 25;
                      p++
                    )
                      w[p] = w[p].clone();
                    return y;
                  },
                }));
                (i.SHA3 = s._createHelper(d)),
                  (i.HmacSHA3 = s._createHmacHelper(d));
              })(Math),
              r.SHA3
            );
          });
        })(zo)),
      zo.exports
    );
  }
  var Ho = { exports: {} },
    kc;
  function lm() {
    return (
      kc ||
        ((kc = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.WordArray,
                  s = o.Hasher,
                  l = i.algo,
                  c = a.create([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                    13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14,
                    4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0,
                    8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2,
                    10, 14, 1, 3, 8, 11, 6, 15, 13,
                  ]),
                  u = a.create([
                    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                    3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3,
                    7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11,
                    15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8,
                    7, 6, 2, 13, 14, 0, 3, 9, 11,
                  ]),
                  g = a.create([
                    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7,
                    6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13,
                    6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14,
                    15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6,
                    8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                  ]),
                  h = a.create([
                    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9,
                    13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7,
                    15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8,
                    11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9,
                    12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
                  ]),
                  v = a.create([
                    0, 1518500249, 1859775393, 2400959708, 2840853838,
                  ]),
                  f = a.create([
                    1352829926, 1548603684, 1836072691, 2053994217, 0,
                  ]),
                  d = (l.RIPEMD160 = s.extend({
                    _doReset: function () {
                      this._hash = a.create([
                        1732584193, 4023233417, 2562383102, 271733878,
                        3285377520,
                      ]);
                    },
                    _doProcessBlock: function (S, k) {
                      for (var E = 0; E < 16; E++) {
                        var D = k + E,
                          C = S[D];
                        S[D] =
                          (((C << 8) | (C >>> 24)) & 16711935) |
                          (((C << 24) | (C >>> 8)) & 4278255360);
                      }
                      var T = this._hash.words,
                        A = v.words,
                        M = f.words,
                        j = c.words,
                        z = u.words,
                        $ = g.words,
                        Y = h.words,
                        q,
                        F,
                        L,
                        N,
                        P,
                        I,
                        O,
                        V,
                        J,
                        se;
                      (I = q = T[0]),
                        (O = F = T[1]),
                        (V = L = T[2]),
                        (J = N = T[3]),
                        (se = P = T[4]);
                      for (var H, E = 0; E < 80; E += 1)
                        (H = (q + S[k + j[E]]) | 0),
                          E < 16
                            ? (H += y(F, L, N) + A[0])
                            : E < 32
                            ? (H += w(F, L, N) + A[1])
                            : E < 48
                            ? (H += p(F, L, N) + A[2])
                            : E < 64
                            ? (H += m(F, L, N) + A[3])
                            : (H += b(F, L, N) + A[4]),
                          (H = H | 0),
                          (H = _(H, $[E])),
                          (H = (H + P) | 0),
                          (q = P),
                          (P = N),
                          (N = _(L, 10)),
                          (L = F),
                          (F = H),
                          (H = (I + S[k + z[E]]) | 0),
                          E < 16
                            ? (H += b(O, V, J) + M[0])
                            : E < 32
                            ? (H += m(O, V, J) + M[1])
                            : E < 48
                            ? (H += p(O, V, J) + M[2])
                            : E < 64
                            ? (H += w(O, V, J) + M[3])
                            : (H += y(O, V, J) + M[4]),
                          (H = H | 0),
                          (H = _(H, Y[E])),
                          (H = (H + se) | 0),
                          (I = se),
                          (se = J),
                          (J = _(V, 10)),
                          (V = O),
                          (O = H);
                      (H = (T[1] + L + J) | 0),
                        (T[1] = (T[2] + N + se) | 0),
                        (T[2] = (T[3] + P + I) | 0),
                        (T[3] = (T[4] + q + O) | 0),
                        (T[4] = (T[0] + F + V) | 0),
                        (T[0] = H);
                    },
                    _doFinalize: function () {
                      var S = this._data,
                        k = S.words,
                        E = this._nDataBytes * 8,
                        D = S.sigBytes * 8;
                      (k[D >>> 5] |= 128 << (24 - (D % 32))),
                        (k[(((D + 64) >>> 9) << 4) + 14] =
                          (((E << 8) | (E >>> 24)) & 16711935) |
                          (((E << 24) | (E >>> 8)) & 4278255360)),
                        (S.sigBytes = (k.length + 1) * 4),
                        this._process();
                      for (var C = this._hash, T = C.words, A = 0; A < 5; A++) {
                        var M = T[A];
                        T[A] =
                          (((M << 8) | (M >>> 24)) & 16711935) |
                          (((M << 24) | (M >>> 8)) & 4278255360);
                      }
                      return C;
                    },
                    clone: function () {
                      var S = s.clone.call(this);
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
                function m(S, k, E) {
                  return (S & E) | (k & ~E);
                }
                function b(S, k, E) {
                  return S ^ (k | ~E);
                }
                function _(S, k) {
                  return (S << k) | (S >>> (32 - k));
                }
                (i.RIPEMD160 = s._createHelper(d)),
                  (i.HmacRIPEMD160 = s._createHmacHelper(d));
              })(),
              r.RIPEMD160
            );
          });
        })(Ho)),
      Ho.exports
    );
  }
  var Wo = { exports: {} },
    Ec;
  function Is() {
    return (
      Ec ||
        ((Ec = 1),
        (function (e, t) {
          (function (r, n) {
            e.exports = n(Se());
          })(ve, function (r) {
            (function () {
              var n = r,
                i = n.lib,
                o = i.Base,
                a = n.enc,
                s = a.Utf8,
                l = n.algo;
              l.HMAC = o.extend({
                init: function (c, u) {
                  (c = this._hasher = new c.init()),
                    typeof u == "string" && (u = s.parse(u));
                  var g = c.blockSize,
                    h = g * 4;
                  u.sigBytes > h && (u = c.finalize(u)), u.clamp();
                  for (
                    var v = (this._oKey = u.clone()),
                      f = (this._iKey = u.clone()),
                      d = v.words,
                      y = f.words,
                      w = 0;
                    w < g;
                    w++
                  )
                    (d[w] ^= 1549556828), (y[w] ^= 909522486);
                  (v.sigBytes = f.sigBytes = h), this.reset();
                },
                reset: function () {
                  var c = this._hasher;
                  c.reset(), c.update(this._iKey);
                },
                update: function (c) {
                  return this._hasher.update(c), this;
                },
                finalize: function (c) {
                  var u = this._hasher,
                    g = u.finalize(c);
                  u.reset();
                  var h = u.finalize(this._oKey.clone().concat(g));
                  return h;
                },
              });
            })();
          });
        })(Wo)),
      Wo.exports
    );
  }
  var Vo = { exports: {} },
    Cc;
  function cm() {
    return (
      Cc ||
        ((Cc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Ms(), Is());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.Base,
                  a = i.WordArray,
                  s = n.algo,
                  l = s.SHA1,
                  c = s.HMAC,
                  u = (s.PBKDF2 = o.extend({
                    cfg: o.extend({
                      keySize: 128 / 32,
                      hasher: l,
                      iterations: 1,
                    }),
                    init: function (g) {
                      this.cfg = this.cfg.extend(g);
                    },
                    compute: function (g, h) {
                      for (
                        var v = this.cfg,
                          f = c.create(v.hasher, g),
                          d = a.create(),
                          y = a.create([1]),
                          w = d.words,
                          p = y.words,
                          m = v.keySize,
                          b = v.iterations;
                        w.length < m;

                      ) {
                        var _ = f.update(h).finalize(y);
                        f.reset();
                        for (
                          var S = _.words, k = S.length, E = _, D = 1;
                          D < b;
                          D++
                        ) {
                          (E = f.finalize(E)), f.reset();
                          for (var C = E.words, T = 0; T < k; T++) S[T] ^= C[T];
                        }
                        d.concat(_), p[0]++;
                      }
                      return (d.sigBytes = m * 4), d;
                    },
                  }));
                n.PBKDF2 = function (g, h, v) {
                  return u.create(v).compute(g, h);
                };
              })(),
              r.PBKDF2
            );
          });
        })(Vo)),
      Vo.exports
    );
  }
  var qo = { exports: {} },
    Tc;
  function Fr() {
    return (
      Tc ||
        ((Tc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Ms(), Is());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.Base,
                  a = i.WordArray,
                  s = n.algo,
                  l = s.MD5,
                  c = (s.EvpKDF = o.extend({
                    cfg: o.extend({
                      keySize: 128 / 32,
                      hasher: l,
                      iterations: 1,
                    }),
                    init: function (u) {
                      this.cfg = this.cfg.extend(u);
                    },
                    compute: function (u, g) {
                      for (
                        var h,
                          v = this.cfg,
                          f = v.hasher.create(),
                          d = a.create(),
                          y = d.words,
                          w = v.keySize,
                          p = v.iterations;
                        y.length < w;

                      ) {
                        h && f.update(h),
                          (h = f.update(u).finalize(g)),
                          f.reset();
                        for (var m = 1; m < p; m++)
                          (h = f.finalize(h)), f.reset();
                        d.concat(h);
                      }
                      return (d.sigBytes = w * 4), d;
                    },
                  }));
                n.EvpKDF = function (u, g, h) {
                  return c.create(h).compute(u, g);
                };
              })(),
              r.EvpKDF
            );
          });
        })(qo)),
      qo.exports
    );
  }
  var Go = { exports: {} },
    Dc;
  function Je() {
    return (
      Dc ||
        ((Dc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Fr());
          })(ve, function (r) {
            r.lib.Cipher ||
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.Base,
                  s = o.WordArray,
                  l = o.BufferedBlockAlgorithm,
                  c = i.enc;
                c.Utf8;
                var u = c.Base64,
                  g = i.algo,
                  h = g.EvpKDF,
                  v = (o.Cipher = l.extend({
                    cfg: a.extend(),
                    createEncryptor: function (C, T) {
                      return this.create(this._ENC_XFORM_MODE, C, T);
                    },
                    createDecryptor: function (C, T) {
                      return this.create(this._DEC_XFORM_MODE, C, T);
                    },
                    init: function (C, T, A) {
                      (this.cfg = this.cfg.extend(A)),
                        (this._xformMode = C),
                        (this._key = T),
                        this.reset();
                    },
                    reset: function () {
                      l.reset.call(this), this._doReset();
                    },
                    process: function (C) {
                      return this._append(C), this._process();
                    },
                    finalize: function (C) {
                      C && this._append(C);
                      var T = this._doFinalize();
                      return T;
                    },
                    keySize: 128 / 32,
                    ivSize: 128 / 32,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: (function () {
                      function C(T) {
                        return typeof T == "string" ? D : S;
                      }
                      return function (T) {
                        return {
                          encrypt: function (A, M, j) {
                            return C(M).encrypt(T, A, M, j);
                          },
                          decrypt: function (A, M, j) {
                            return C(M).decrypt(T, A, M, j);
                          },
                        };
                      };
                    })(),
                  }));
                o.StreamCipher = v.extend({
                  _doFinalize: function () {
                    var C = this._process(!0);
                    return C;
                  },
                  blockSize: 1,
                });
                var f = (i.mode = {}),
                  d = (o.BlockCipherMode = a.extend({
                    createEncryptor: function (C, T) {
                      return this.Encryptor.create(C, T);
                    },
                    createDecryptor: function (C, T) {
                      return this.Decryptor.create(C, T);
                    },
                    init: function (C, T) {
                      (this._cipher = C), (this._iv = T);
                    },
                  })),
                  y = (f.CBC = (function () {
                    var C = d.extend();
                    (C.Encryptor = C.extend({
                      processBlock: function (A, M) {
                        var j = this._cipher,
                          z = j.blockSize;
                        T.call(this, A, M, z),
                          j.encryptBlock(A, M),
                          (this._prevBlock = A.slice(M, M + z));
                      },
                    })),
                      (C.Decryptor = C.extend({
                        processBlock: function (A, M) {
                          var j = this._cipher,
                            z = j.blockSize,
                            $ = A.slice(M, M + z);
                          j.decryptBlock(A, M),
                            T.call(this, A, M, z),
                            (this._prevBlock = $);
                        },
                      }));
                    function T(A, M, j) {
                      var z,
                        $ = this._iv;
                      $ ? ((z = $), (this._iv = n)) : (z = this._prevBlock);
                      for (var Y = 0; Y < j; Y++) A[M + Y] ^= z[Y];
                    }
                    return C;
                  })()),
                  w = (i.pad = {}),
                  p = (w.Pkcs7 = {
                    pad: function (C, T) {
                      for (
                        var A = T * 4,
                          M = A - (C.sigBytes % A),
                          j = (M << 24) | (M << 16) | (M << 8) | M,
                          z = [],
                          $ = 0;
                        $ < M;
                        $ += 4
                      )
                        z.push(j);
                      var Y = s.create(z, M);
                      C.concat(Y);
                    },
                    unpad: function (C) {
                      var T = C.words[(C.sigBytes - 1) >>> 2] & 255;
                      C.sigBytes -= T;
                    },
                  });
                o.BlockCipher = v.extend({
                  cfg: v.cfg.extend({ mode: y, padding: p }),
                  reset: function () {
                    var C;
                    v.reset.call(this);
                    var T = this.cfg,
                      A = T.iv,
                      M = T.mode;
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (C = M.createEncryptor)
                      : ((C = M.createDecryptor), (this._minBufferSize = 1)),
                      this._mode && this._mode.__creator == C
                        ? this._mode.init(this, A && A.words)
                        : ((this._mode = C.call(M, this, A && A.words)),
                          (this._mode.__creator = C));
                  },
                  _doProcessBlock: function (C, T) {
                    this._mode.processBlock(C, T);
                  },
                  _doFinalize: function () {
                    var C,
                      T = this.cfg.padding;
                    return (
                      this._xformMode == this._ENC_XFORM_MODE
                        ? (T.pad(this._data, this.blockSize),
                          (C = this._process(!0)))
                        : ((C = this._process(!0)), T.unpad(C)),
                      C
                    );
                  },
                  blockSize: 128 / 32,
                });
                var m = (o.CipherParams = a.extend({
                    init: function (C) {
                      this.mixIn(C);
                    },
                    toString: function (C) {
                      return (C || this.formatter).stringify(this);
                    },
                  })),
                  b = (i.format = {}),
                  _ = (b.OpenSSL = {
                    stringify: function (C) {
                      var T,
                        A = C.ciphertext,
                        M = C.salt;
                      return (
                        M
                          ? (T = s
                              .create([1398893684, 1701076831])
                              .concat(M)
                              .concat(A))
                          : (T = A),
                        T.toString(u)
                      );
                    },
                    parse: function (C) {
                      var T,
                        A = u.parse(C),
                        M = A.words;
                      return (
                        M[0] == 1398893684 &&
                          M[1] == 1701076831 &&
                          ((T = s.create(M.slice(2, 4))),
                          M.splice(0, 4),
                          (A.sigBytes -= 16)),
                        m.create({ ciphertext: A, salt: T })
                      );
                    },
                  }),
                  S = (o.SerializableCipher = a.extend({
                    cfg: a.extend({ format: _ }),
                    encrypt: function (C, T, A, M) {
                      M = this.cfg.extend(M);
                      var j = C.createEncryptor(A, M),
                        z = j.finalize(T),
                        $ = j.cfg;
                      return m.create({
                        ciphertext: z,
                        key: A,
                        iv: $.iv,
                        algorithm: C,
                        mode: $.mode,
                        padding: $.padding,
                        blockSize: C.blockSize,
                        formatter: M.format,
                      });
                    },
                    decrypt: function (C, T, A, M) {
                      (M = this.cfg.extend(M)), (T = this._parse(T, M.format));
                      var j = C.createDecryptor(A, M).finalize(T.ciphertext);
                      return j;
                    },
                    _parse: function (C, T) {
                      return typeof C == "string" ? T.parse(C, this) : C;
                    },
                  })),
                  k = (i.kdf = {}),
                  E = (k.OpenSSL = {
                    execute: function (C, T, A, M) {
                      M || (M = s.random(64 / 8));
                      var j = h.create({ keySize: T + A }).compute(C, M),
                        z = s.create(j.words.slice(T), A * 4);
                      return (
                        (j.sigBytes = T * 4),
                        m.create({ key: j, iv: z, salt: M })
                      );
                    },
                  }),
                  D = (o.PasswordBasedCipher = S.extend({
                    cfg: S.cfg.extend({ kdf: E }),
                    encrypt: function (C, T, A, M) {
                      M = this.cfg.extend(M);
                      var j = M.kdf.execute(A, C.keySize, C.ivSize);
                      M.iv = j.iv;
                      var z = S.encrypt.call(this, C, T, j.key, M);
                      return z.mixIn(j), z;
                    },
                    decrypt: function (C, T, A, M) {
                      (M = this.cfg.extend(M)), (T = this._parse(T, M.format));
                      var j = M.kdf.execute(A, C.keySize, C.ivSize, T.salt);
                      M.iv = j.iv;
                      var z = S.decrypt.call(this, C, T, j.key, M);
                      return z;
                    },
                  }));
              })();
          });
        })(Go)),
      Go.exports
    );
  }
  var Zo = { exports: {} },
    Ac;
  function um() {
    return (
      Ac ||
        ((Ac = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.mode.CFB = (function () {
                var n = r.lib.BlockCipherMode.extend();
                (n.Encryptor = n.extend({
                  processBlock: function (o, a) {
                    var s = this._cipher,
                      l = s.blockSize;
                    i.call(this, o, a, l, s),
                      (this._prevBlock = o.slice(a, a + l));
                  },
                })),
                  (n.Decryptor = n.extend({
                    processBlock: function (o, a) {
                      var s = this._cipher,
                        l = s.blockSize,
                        c = o.slice(a, a + l);
                      i.call(this, o, a, l, s), (this._prevBlock = c);
                    },
                  }));
                function i(o, a, s, l) {
                  var c,
                    u = this._iv;
                  u
                    ? ((c = u.slice(0)), (this._iv = void 0))
                    : (c = this._prevBlock),
                    l.encryptBlock(c, 0);
                  for (var g = 0; g < s; g++) o[a + g] ^= c[g];
                }
                return n;
              })()),
              r.mode.CFB
            );
          });
        })(Zo)),
      Zo.exports
    );
  }
  var Ko = { exports: {} },
    Oc;
  function dm() {
    return (
      Oc ||
        ((Oc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.mode.CTR = (function () {
                var n = r.lib.BlockCipherMode.extend(),
                  i = (n.Encryptor = n.extend({
                    processBlock: function (o, a) {
                      var s = this._cipher,
                        l = s.blockSize,
                        c = this._iv,
                        u = this._counter;
                      c &&
                        ((u = this._counter = c.slice(0)), (this._iv = void 0));
                      var g = u.slice(0);
                      s.encryptBlock(g, 0), (u[l - 1] = (u[l - 1] + 1) | 0);
                      for (var h = 0; h < l; h++) o[a + h] ^= g[h];
                    },
                  }));
                return (n.Decryptor = i), n;
              })()),
              r.mode.CTR
            );
          });
        })(Ko)),
      Ko.exports
    );
  }
  var Xo = { exports: {} },
    Mc;
  function fm() {
    return (
      Mc ||
        ((Mc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            /** @preserve
             * Counter block mode compatible with  Dr Brian Gladman fileenc.c
             * derived from CryptoJS.mode.CTR
             * Jan Hruby jhruby.web@gmail.com
             */ return (
              (r.mode.CTRGladman = (function () {
                var n = r.lib.BlockCipherMode.extend();
                function i(s) {
                  if (((s >> 24) & 255) === 255) {
                    var l = (s >> 16) & 255,
                      c = (s >> 8) & 255,
                      u = s & 255;
                    l === 255
                      ? ((l = 0),
                        c === 255 ? ((c = 0), u === 255 ? (u = 0) : ++u) : ++c)
                      : ++l,
                      (s = 0),
                      (s += l << 16),
                      (s += c << 8),
                      (s += u);
                  } else s += 1 << 24;
                  return s;
                }
                function o(s) {
                  return (s[0] = i(s[0])) === 0 && (s[1] = i(s[1])), s;
                }
                var a = (n.Encryptor = n.extend({
                  processBlock: function (s, l) {
                    var c = this._cipher,
                      u = c.blockSize,
                      g = this._iv,
                      h = this._counter;
                    g &&
                      ((h = this._counter = g.slice(0)), (this._iv = void 0)),
                      o(h);
                    var v = h.slice(0);
                    c.encryptBlock(v, 0);
                    for (var f = 0; f < u; f++) s[l + f] ^= v[f];
                  },
                }));
                return (n.Decryptor = a), n;
              })()),
              r.mode.CTRGladman
            );
          });
        })(Xo)),
      Xo.exports
    );
  }
  var Jo = { exports: {} },
    Ic;
  function hm() {
    return (
      Ic ||
        ((Ic = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.mode.OFB = (function () {
                var n = r.lib.BlockCipherMode.extend(),
                  i = (n.Encryptor = n.extend({
                    processBlock: function (o, a) {
                      var s = this._cipher,
                        l = s.blockSize,
                        c = this._iv,
                        u = this._keystream;
                      c &&
                        ((u = this._keystream = c.slice(0)),
                        (this._iv = void 0)),
                        s.encryptBlock(u, 0);
                      for (var g = 0; g < l; g++) o[a + g] ^= u[g];
                    },
                  }));
                return (n.Decryptor = i), n;
              })()),
              r.mode.OFB
            );
          });
        })(Jo)),
      Jo.exports
    );
  }
  var Qo = { exports: {} },
    Nc;
  function pm() {
    return (
      Nc ||
        ((Nc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.mode.ECB = (function () {
                var n = r.lib.BlockCipherMode.extend();
                return (
                  (n.Encryptor = n.extend({
                    processBlock: function (i, o) {
                      this._cipher.encryptBlock(i, o);
                    },
                  })),
                  (n.Decryptor = n.extend({
                    processBlock: function (i, o) {
                      this._cipher.decryptBlock(i, o);
                    },
                  })),
                  n
                );
              })()),
              r.mode.ECB
            );
          });
        })(Qo)),
      Qo.exports
    );
  }
  var ea = { exports: {} },
    Rc;
  function mm() {
    return (
      Rc ||
        ((Rc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.pad.AnsiX923 = {
                pad: function (n, i) {
                  var o = n.sigBytes,
                    a = i * 4,
                    s = a - (o % a),
                    l = o + s - 1;
                  n.clamp(),
                    (n.words[l >>> 2] |= s << (24 - (l % 4) * 8)),
                    (n.sigBytes += s);
                },
                unpad: function (n) {
                  var i = n.words[(n.sigBytes - 1) >>> 2] & 255;
                  n.sigBytes -= i;
                },
              }),
              r.pad.Ansix923
            );
          });
        })(ea)),
      ea.exports
    );
  }
  var ta = { exports: {} },
    Lc;
  function gm() {
    return (
      Lc ||
        ((Lc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.pad.Iso10126 = {
                pad: function (n, i) {
                  var o = i * 4,
                    a = o - (n.sigBytes % o);
                  n.concat(r.lib.WordArray.random(a - 1)).concat(
                    r.lib.WordArray.create([a << 24], 1)
                  );
                },
                unpad: function (n) {
                  var i = n.words[(n.sigBytes - 1) >>> 2] & 255;
                  n.sigBytes -= i;
                },
              }),
              r.pad.Iso10126
            );
          });
        })(ta)),
      ta.exports
    );
  }
  var ra = { exports: {} },
    Pc;
  function vm() {
    return (
      Pc ||
        ((Pc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.pad.Iso97971 = {
                pad: function (n, i) {
                  n.concat(r.lib.WordArray.create([2147483648], 1)),
                    r.pad.ZeroPadding.pad(n, i);
                },
                unpad: function (n) {
                  r.pad.ZeroPadding.unpad(n), n.sigBytes--;
                },
              }),
              r.pad.Iso97971
            );
          });
        })(ra)),
      ra.exports
    );
  }
  var na = { exports: {} },
    Fc;
  function ym() {
    return (
      Fc ||
        ((Fc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.pad.ZeroPadding = {
                pad: function (n, i) {
                  var o = i * 4;
                  n.clamp(), (n.sigBytes += o - (n.sigBytes % o || o));
                },
                unpad: function (n) {
                  for (
                    var i = n.words, o = n.sigBytes - 1, o = n.sigBytes - 1;
                    o >= 0;
                    o--
                  )
                    if ((i[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) {
                      n.sigBytes = o + 1;
                      break;
                    }
                },
              }),
              r.pad.ZeroPadding
            );
          });
        })(na)),
      na.exports
    );
  }
  var ia = { exports: {} },
    Bc;
  function bm() {
    return (
      Bc ||
        ((Bc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (r.pad.NoPadding = {
                pad: function () {},
                unpad: function () {},
              }),
              r.pad.NoPadding
            );
          });
        })(ia)),
      ia.exports
    );
  }
  var oa = { exports: {} },
    jc;
  function xm() {
    return (
      jc ||
        ((jc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), Je());
          })(ve, function (r) {
            return (
              (function (n) {
                var i = r,
                  o = i.lib,
                  a = o.CipherParams,
                  s = i.enc,
                  l = s.Hex,
                  c = i.format;
                c.Hex = {
                  stringify: function (u) {
                    return u.ciphertext.toString(l);
                  },
                  parse: function (u) {
                    var g = l.parse(u);
                    return a.create({ ciphertext: g });
                  },
                };
              })(),
              r.format.Hex
            );
          });
        })(oa)),
      oa.exports
    );
  }
  var aa = { exports: {} },
    Yc;
  function wm() {
    return (
      Yc ||
        ((Yc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), ln(), cn(), Fr(), Je());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.BlockCipher,
                  a = n.algo,
                  s = [],
                  l = [],
                  c = [],
                  u = [],
                  g = [],
                  h = [],
                  v = [],
                  f = [],
                  d = [],
                  y = [];
                (function () {
                  for (var m = [], b = 0; b < 256; b++)
                    b < 128 ? (m[b] = b << 1) : (m[b] = (b << 1) ^ 283);
                  for (var _ = 0, S = 0, b = 0; b < 256; b++) {
                    var k = S ^ (S << 1) ^ (S << 2) ^ (S << 3) ^ (S << 4);
                    (k = (k >>> 8) ^ (k & 255) ^ 99), (s[_] = k), (l[k] = _);
                    var E = m[_],
                      D = m[E],
                      C = m[D],
                      T = (m[k] * 257) ^ (k * 16843008);
                    (c[_] = (T << 24) | (T >>> 8)),
                      (u[_] = (T << 16) | (T >>> 16)),
                      (g[_] = (T << 8) | (T >>> 24)),
                      (h[_] = T);
                    var T =
                      (C * 16843009) ^ (D * 65537) ^ (E * 257) ^ (_ * 16843008);
                    (v[k] = (T << 24) | (T >>> 8)),
                      (f[k] = (T << 16) | (T >>> 16)),
                      (d[k] = (T << 8) | (T >>> 24)),
                      (y[k] = T),
                      _
                        ? ((_ = E ^ m[m[m[C ^ E]]]), (S ^= m[m[S]]))
                        : (_ = S = 1);
                  }
                })();
                var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                  p = (a.AES = o.extend({
                    _doReset: function () {
                      var m;
                      if (
                        !(this._nRounds && this._keyPriorReset === this._key)
                      ) {
                        for (
                          var b = (this._keyPriorReset = this._key),
                            _ = b.words,
                            S = b.sigBytes / 4,
                            k = (this._nRounds = S + 6),
                            E = (k + 1) * 4,
                            D = (this._keySchedule = []),
                            C = 0;
                          C < E;
                          C++
                        )
                          C < S
                            ? (D[C] = _[C])
                            : ((m = D[C - 1]),
                              C % S
                                ? S > 6 &&
                                  C % S == 4 &&
                                  (m =
                                    (s[m >>> 24] << 24) |
                                    (s[(m >>> 16) & 255] << 16) |
                                    (s[(m >>> 8) & 255] << 8) |
                                    s[m & 255])
                                : ((m = (m << 8) | (m >>> 24)),
                                  (m =
                                    (s[m >>> 24] << 24) |
                                    (s[(m >>> 16) & 255] << 16) |
                                    (s[(m >>> 8) & 255] << 8) |
                                    s[m & 255]),
                                  (m ^= w[(C / S) | 0] << 24)),
                              (D[C] = D[C - S] ^ m));
                        for (
                          var T = (this._invKeySchedule = []), A = 0;
                          A < E;
                          A++
                        ) {
                          var C = E - A;
                          if (A % 4) var m = D[C];
                          else var m = D[C - 4];
                          A < 4 || C <= 4
                            ? (T[A] = m)
                            : (T[A] =
                                v[s[m >>> 24]] ^
                                f[s[(m >>> 16) & 255]] ^
                                d[s[(m >>> 8) & 255]] ^
                                y[s[m & 255]]);
                        }
                      }
                    },
                    encryptBlock: function (m, b) {
                      this._doCryptBlock(
                        m,
                        b,
                        this._keySchedule,
                        c,
                        u,
                        g,
                        h,
                        s
                      );
                    },
                    decryptBlock: function (m, b) {
                      var _ = m[b + 1];
                      (m[b + 1] = m[b + 3]),
                        (m[b + 3] = _),
                        this._doCryptBlock(
                          m,
                          b,
                          this._invKeySchedule,
                          v,
                          f,
                          d,
                          y,
                          l
                        );
                      var _ = m[b + 1];
                      (m[b + 1] = m[b + 3]), (m[b + 3] = _);
                    },
                    _doCryptBlock: function (m, b, _, S, k, E, D, C) {
                      for (
                        var T = this._nRounds,
                          A = m[b] ^ _[0],
                          M = m[b + 1] ^ _[1],
                          j = m[b + 2] ^ _[2],
                          z = m[b + 3] ^ _[3],
                          $ = 4,
                          Y = 1;
                        Y < T;
                        Y++
                      ) {
                        var q =
                            S[A >>> 24] ^
                            k[(M >>> 16) & 255] ^
                            E[(j >>> 8) & 255] ^
                            D[z & 255] ^
                            _[$++],
                          F =
                            S[M >>> 24] ^
                            k[(j >>> 16) & 255] ^
                            E[(z >>> 8) & 255] ^
                            D[A & 255] ^
                            _[$++],
                          L =
                            S[j >>> 24] ^
                            k[(z >>> 16) & 255] ^
                            E[(A >>> 8) & 255] ^
                            D[M & 255] ^
                            _[$++],
                          N =
                            S[z >>> 24] ^
                            k[(A >>> 16) & 255] ^
                            E[(M >>> 8) & 255] ^
                            D[j & 255] ^
                            _[$++];
                        (A = q), (M = F), (j = L), (z = N);
                      }
                      var q =
                          ((C[A >>> 24] << 24) |
                            (C[(M >>> 16) & 255] << 16) |
                            (C[(j >>> 8) & 255] << 8) |
                            C[z & 255]) ^
                          _[$++],
                        F =
                          ((C[M >>> 24] << 24) |
                            (C[(j >>> 16) & 255] << 16) |
                            (C[(z >>> 8) & 255] << 8) |
                            C[A & 255]) ^
                          _[$++],
                        L =
                          ((C[j >>> 24] << 24) |
                            (C[(z >>> 16) & 255] << 16) |
                            (C[(A >>> 8) & 255] << 8) |
                            C[M & 255]) ^
                          _[$++],
                        N =
                          ((C[z >>> 24] << 24) |
                            (C[(A >>> 16) & 255] << 16) |
                            (C[(M >>> 8) & 255] << 8) |
                            C[j & 255]) ^
                          _[$++];
                      (m[b] = q),
                        (m[b + 1] = F),
                        (m[b + 2] = L),
                        (m[b + 3] = N);
                    },
                    keySize: 256 / 32,
                  }));
                n.AES = o._createHelper(p);
              })(),
              r.AES
            );
          });
        })(aa)),
      aa.exports
    );
  }
  var sa = { exports: {} },
    $c;
  function _m() {
    return (
      $c ||
        (($c = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), ln(), cn(), Fr(), Je());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.WordArray,
                  a = i.BlockCipher,
                  s = n.algo,
                  l = [
                    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                    59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47,
                    39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53,
                    45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
                  ],
                  c = [
                    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4,
                    26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40,
                    51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29,
                    32,
                  ],
                  u = [
                    1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28,
                  ],
                  g = [
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
                  v = (s.DES = a.extend({
                    _doReset: function () {
                      for (
                        var w = this._key, p = w.words, m = [], b = 0;
                        b < 56;
                        b++
                      ) {
                        var _ = l[b] - 1;
                        m[b] = (p[_ >>> 5] >>> (31 - (_ % 32))) & 1;
                      }
                      for (var S = (this._subKeys = []), k = 0; k < 16; k++) {
                        for (var E = (S[k] = []), D = u[k], b = 0; b < 24; b++)
                          (E[(b / 6) | 0] |=
                            m[(c[b] - 1 + D) % 28] << (31 - (b % 6))),
                            (E[4 + ((b / 6) | 0)] |=
                              m[28 + ((c[b + 24] - 1 + D) % 28)] <<
                              (31 - (b % 6)));
                        E[0] = (E[0] << 1) | (E[0] >>> 31);
                        for (var b = 1; b < 7; b++)
                          E[b] = E[b] >>> ((b - 1) * 4 + 3);
                        E[7] = (E[7] << 5) | (E[7] >>> 27);
                      }
                      for (var C = (this._invSubKeys = []), b = 0; b < 16; b++)
                        C[b] = S[15 - b];
                    },
                    encryptBlock: function (w, p) {
                      this._doCryptBlock(w, p, this._subKeys);
                    },
                    decryptBlock: function (w, p) {
                      this._doCryptBlock(w, p, this._invSubKeys);
                    },
                    _doCryptBlock: function (w, p, m) {
                      (this._lBlock = w[p]),
                        (this._rBlock = w[p + 1]),
                        f.call(this, 4, 252645135),
                        f.call(this, 16, 65535),
                        d.call(this, 2, 858993459),
                        d.call(this, 8, 16711935),
                        f.call(this, 1, 1431655765);
                      for (var b = 0; b < 16; b++) {
                        for (
                          var _ = m[b],
                            S = this._lBlock,
                            k = this._rBlock,
                            E = 0,
                            D = 0;
                          D < 8;
                          D++
                        )
                          E |= g[D][((k ^ _[D]) & h[D]) >>> 0];
                        (this._lBlock = k), (this._rBlock = S ^ E);
                      }
                      var C = this._lBlock;
                      (this._lBlock = this._rBlock),
                        (this._rBlock = C),
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
                  var m = ((this._lBlock >>> w) ^ this._rBlock) & p;
                  (this._rBlock ^= m), (this._lBlock ^= m << w);
                }
                function d(w, p) {
                  var m = ((this._rBlock >>> w) ^ this._lBlock) & p;
                  (this._lBlock ^= m), (this._rBlock ^= m << w);
                }
                n.DES = a._createHelper(v);
                var y = (s.TripleDES = a.extend({
                  _doReset: function () {
                    var w = this._key,
                      p = w.words;
                    if (p.length !== 2 && p.length !== 4 && p.length < 6)
                      throw new Error(
                        "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
                      );
                    var m = p.slice(0, 2),
                      b = p.length < 4 ? p.slice(0, 2) : p.slice(2, 4),
                      _ = p.length < 6 ? p.slice(0, 2) : p.slice(4, 6);
                    (this._des1 = v.createEncryptor(o.create(m))),
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
                n.TripleDES = a._createHelper(y);
              })(),
              r.TripleDES
            );
          });
        })(sa)),
      sa.exports
    );
  }
  var la = { exports: {} },
    Uc;
  function Sm() {
    return (
      Uc ||
        ((Uc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), ln(), cn(), Fr(), Je());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.StreamCipher,
                  a = n.algo,
                  s = (a.RC4 = o.extend({
                    _doReset: function () {
                      for (
                        var u = this._key,
                          g = u.words,
                          h = u.sigBytes,
                          v = (this._S = []),
                          f = 0;
                        f < 256;
                        f++
                      )
                        v[f] = f;
                      for (var f = 0, d = 0; f < 256; f++) {
                        var y = f % h,
                          w = (g[y >>> 2] >>> (24 - (y % 4) * 8)) & 255;
                        d = (d + v[f] + w) % 256;
                        var p = v[f];
                        (v[f] = v[d]), (v[d] = p);
                      }
                      this._i = this._j = 0;
                    },
                    _doProcessBlock: function (u, g) {
                      u[g] ^= l.call(this);
                    },
                    keySize: 256 / 32,
                    ivSize: 0,
                  }));
                function l() {
                  for (
                    var u = this._S, g = this._i, h = this._j, v = 0, f = 0;
                    f < 4;
                    f++
                  ) {
                    (g = (g + 1) % 256), (h = (h + u[g]) % 256);
                    var d = u[g];
                    (u[g] = u[h]),
                      (u[h] = d),
                      (v |= u[(u[g] + u[h]) % 256] << (24 - f * 8));
                  }
                  return (this._i = g), (this._j = h), v;
                }
                n.RC4 = o._createHelper(s);
                var c = (a.RC4Drop = s.extend({
                  cfg: s.cfg.extend({ drop: 192 }),
                  _doReset: function () {
                    s._doReset.call(this);
                    for (var u = this.cfg.drop; u > 0; u--) l.call(this);
                  },
                }));
                n.RC4Drop = o._createHelper(c);
              })(),
              r.RC4
            );
          });
        })(la)),
      la.exports
    );
  }
  var ca = { exports: {} },
    zc;
  function km() {
    return (
      zc ||
        ((zc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), ln(), cn(), Fr(), Je());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.StreamCipher,
                  a = n.algo,
                  s = [],
                  l = [],
                  c = [],
                  u = (a.Rabbit = o.extend({
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
                      for (var f = 0; f < 4; f++) g.call(this);
                      for (var f = 0; f < 8; f++) y[f] ^= d[(f + 4) & 7];
                      if (v) {
                        var w = v.words,
                          p = w[0],
                          m = w[1],
                          b =
                            (((p << 8) | (p >>> 24)) & 16711935) |
                            (((p << 24) | (p >>> 8)) & 4278255360),
                          _ =
                            (((m << 8) | (m >>> 24)) & 16711935) |
                            (((m << 24) | (m >>> 8)) & 4278255360),
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
                        for (var f = 0; f < 4; f++) g.call(this);
                      }
                    },
                    _doProcessBlock: function (h, v) {
                      var f = this._X;
                      g.call(this),
                        (s[0] = f[0] ^ (f[5] >>> 16) ^ (f[3] << 16)),
                        (s[1] = f[2] ^ (f[7] >>> 16) ^ (f[5] << 16)),
                        (s[2] = f[4] ^ (f[1] >>> 16) ^ (f[7] << 16)),
                        (s[3] = f[6] ^ (f[3] >>> 16) ^ (f[1] << 16));
                      for (var d = 0; d < 4; d++)
                        (s[d] =
                          (((s[d] << 8) | (s[d] >>> 24)) & 16711935) |
                          (((s[d] << 24) | (s[d] >>> 8)) & 4278255360)),
                          (h[v + d] ^= s[d]);
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32,
                  }));
                function g() {
                  for (var h = this._X, v = this._C, f = 0; f < 8; f++)
                    l[f] = v[f];
                  (v[0] = (v[0] + 1295307597 + this._b) | 0),
                    (v[1] =
                      (v[1] + 3545052371 + (v[0] >>> 0 < l[0] >>> 0 ? 1 : 0)) |
                      0),
                    (v[2] =
                      (v[2] + 886263092 + (v[1] >>> 0 < l[1] >>> 0 ? 1 : 0)) |
                      0),
                    (v[3] =
                      (v[3] + 1295307597 + (v[2] >>> 0 < l[2] >>> 0 ? 1 : 0)) |
                      0),
                    (v[4] =
                      (v[4] + 3545052371 + (v[3] >>> 0 < l[3] >>> 0 ? 1 : 0)) |
                      0),
                    (v[5] =
                      (v[5] + 886263092 + (v[4] >>> 0 < l[4] >>> 0 ? 1 : 0)) |
                      0),
                    (v[6] =
                      (v[6] + 1295307597 + (v[5] >>> 0 < l[5] >>> 0 ? 1 : 0)) |
                      0),
                    (v[7] =
                      (v[7] + 3545052371 + (v[6] >>> 0 < l[6] >>> 0 ? 1 : 0)) |
                      0),
                    (this._b = v[7] >>> 0 < l[7] >>> 0 ? 1 : 0);
                  for (var f = 0; f < 8; f++) {
                    var d = h[f] + v[f],
                      y = d & 65535,
                      w = d >>> 16,
                      p = ((((y * y) >>> 17) + y * w) >>> 15) + w * w,
                      m =
                        (((d & 4294901760) * d) | 0) + (((d & 65535) * d) | 0);
                    c[f] = p ^ m;
                  }
                  (h[0] =
                    (c[0] +
                      ((c[7] << 16) | (c[7] >>> 16)) +
                      ((c[6] << 16) | (c[6] >>> 16))) |
                    0),
                    (h[1] = (c[1] + ((c[0] << 8) | (c[0] >>> 24)) + c[7]) | 0),
                    (h[2] =
                      (c[2] +
                        ((c[1] << 16) | (c[1] >>> 16)) +
                        ((c[0] << 16) | (c[0] >>> 16))) |
                      0),
                    (h[3] = (c[3] + ((c[2] << 8) | (c[2] >>> 24)) + c[1]) | 0),
                    (h[4] =
                      (c[4] +
                        ((c[3] << 16) | (c[3] >>> 16)) +
                        ((c[2] << 16) | (c[2] >>> 16))) |
                      0),
                    (h[5] = (c[5] + ((c[4] << 8) | (c[4] >>> 24)) + c[3]) | 0),
                    (h[6] =
                      (c[6] +
                        ((c[5] << 16) | (c[5] >>> 16)) +
                        ((c[4] << 16) | (c[4] >>> 16))) |
                      0),
                    (h[7] = (c[7] + ((c[6] << 8) | (c[6] >>> 24)) + c[5]) | 0);
                }
                n.Rabbit = o._createHelper(u);
              })(),
              r.Rabbit
            );
          });
        })(ca)),
      ca.exports
    );
  }
  var ua = { exports: {} },
    Hc;
  function Em() {
    return (
      Hc ||
        ((Hc = 1),
        (function (e, t) {
          (function (r, n, i) {
            e.exports = n(Se(), ln(), cn(), Fr(), Je());
          })(ve, function (r) {
            return (
              (function () {
                var n = r,
                  i = n.lib,
                  o = i.StreamCipher,
                  a = n.algo,
                  s = [],
                  l = [],
                  c = [],
                  u = (a.RabbitLegacy = o.extend({
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
                      for (var y = 0; y < 4; y++) g.call(this);
                      for (var y = 0; y < 8; y++) d[y] ^= f[(y + 4) & 7];
                      if (v) {
                        var w = v.words,
                          p = w[0],
                          m = w[1],
                          b =
                            (((p << 8) | (p >>> 24)) & 16711935) |
                            (((p << 24) | (p >>> 8)) & 4278255360),
                          _ =
                            (((m << 8) | (m >>> 24)) & 16711935) |
                            (((m << 24) | (m >>> 8)) & 4278255360),
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
                        for (var y = 0; y < 4; y++) g.call(this);
                      }
                    },
                    _doProcessBlock: function (h, v) {
                      var f = this._X;
                      g.call(this),
                        (s[0] = f[0] ^ (f[5] >>> 16) ^ (f[3] << 16)),
                        (s[1] = f[2] ^ (f[7] >>> 16) ^ (f[5] << 16)),
                        (s[2] = f[4] ^ (f[1] >>> 16) ^ (f[7] << 16)),
                        (s[3] = f[6] ^ (f[3] >>> 16) ^ (f[1] << 16));
                      for (var d = 0; d < 4; d++)
                        (s[d] =
                          (((s[d] << 8) | (s[d] >>> 24)) & 16711935) |
                          (((s[d] << 24) | (s[d] >>> 8)) & 4278255360)),
                          (h[v + d] ^= s[d]);
                    },
                    blockSize: 128 / 32,
                    ivSize: 64 / 32,
                  }));
                function g() {
                  for (var h = this._X, v = this._C, f = 0; f < 8; f++)
                    l[f] = v[f];
                  (v[0] = (v[0] + 1295307597 + this._b) | 0),
                    (v[1] =
                      (v[1] + 3545052371 + (v[0] >>> 0 < l[0] >>> 0 ? 1 : 0)) |
                      0),
                    (v[2] =
                      (v[2] + 886263092 + (v[1] >>> 0 < l[1] >>> 0 ? 1 : 0)) |
                      0),
                    (v[3] =
                      (v[3] + 1295307597 + (v[2] >>> 0 < l[2] >>> 0 ? 1 : 0)) |
                      0),
                    (v[4] =
                      (v[4] + 3545052371 + (v[3] >>> 0 < l[3] >>> 0 ? 1 : 0)) |
                      0),
                    (v[5] =
                      (v[5] + 886263092 + (v[4] >>> 0 < l[4] >>> 0 ? 1 : 0)) |
                      0),
                    (v[6] =
                      (v[6] + 1295307597 + (v[5] >>> 0 < l[5] >>> 0 ? 1 : 0)) |
                      0),
                    (v[7] =
                      (v[7] + 3545052371 + (v[6] >>> 0 < l[6] >>> 0 ? 1 : 0)) |
                      0),
                    (this._b = v[7] >>> 0 < l[7] >>> 0 ? 1 : 0);
                  for (var f = 0; f < 8; f++) {
                    var d = h[f] + v[f],
                      y = d & 65535,
                      w = d >>> 16,
                      p = ((((y * y) >>> 17) + y * w) >>> 15) + w * w,
                      m =
                        (((d & 4294901760) * d) | 0) + (((d & 65535) * d) | 0);
                    c[f] = p ^ m;
                  }
                  (h[0] =
                    (c[0] +
                      ((c[7] << 16) | (c[7] >>> 16)) +
                      ((c[6] << 16) | (c[6] >>> 16))) |
                    0),
                    (h[1] = (c[1] + ((c[0] << 8) | (c[0] >>> 24)) + c[7]) | 0),
                    (h[2] =
                      (c[2] +
                        ((c[1] << 16) | (c[1] >>> 16)) +
                        ((c[0] << 16) | (c[0] >>> 16))) |
                      0),
                    (h[3] = (c[3] + ((c[2] << 8) | (c[2] >>> 24)) + c[1]) | 0),
                    (h[4] =
                      (c[4] +
                        ((c[3] << 16) | (c[3] >>> 16)) +
                        ((c[2] << 16) | (c[2] >>> 16))) |
                      0),
                    (h[5] = (c[5] + ((c[4] << 8) | (c[4] >>> 24)) + c[3]) | 0),
                    (h[6] =
                      (c[6] +
                        ((c[5] << 16) | (c[5] >>> 16)) +
                        ((c[4] << 16) | (c[4] >>> 16))) |
                      0),
                    (h[7] = (c[7] + ((c[6] << 8) | (c[6] >>> 24)) + c[5]) | 0);
                }
                n.RabbitLegacy = o._createHelper(u);
              })(),
              r.RabbitLegacy
            );
          });
        })(ua)),
      ua.exports
    );
  }
  (function (e, t) {
    (function (r, n, i) {
      e.exports = n(
        Se(),
        qi(),
        rm(),
        nm(),
        ln(),
        im(),
        cn(),
        Ms(),
        id(),
        om(),
        od(),
        am(),
        sm(),
        lm(),
        Is(),
        cm(),
        Fr(),
        Je(),
        um(),
        dm(),
        fm(),
        hm(),
        pm(),
        mm(),
        gm(),
        vm(),
        ym(),
        bm(),
        xm(),
        wm(),
        _m(),
        Sm(),
        km(),
        Em()
      );
    })(ve, function (r) {
      return r;
    });
  })(nd);
  var Cm = nd.exports;
  const da = Es(Cm); //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var ad;
  function X() {
    return ad.apply(null, arguments);
  }
  function Tm(e) {
    ad = e;
  }
  function Nt(e) {
    return (
      e instanceof Array ||
      Object.prototype.toString.call(e) === "[object Array]"
    );
  }
  function Or(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function Te(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Ns(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e) if (Te(e, t)) return !1;
    return !0;
  }
  function lt(e) {
    return e === void 0;
  }
  function ar(e) {
    return (
      typeof e == "number" ||
      Object.prototype.toString.call(e) === "[object Number]"
    );
  }
  function Wn(e) {
    return (
      e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    );
  }
  function sd(e, t) {
    var r = [],
      n,
      i = e.length;
    for (n = 0; n < i; ++n) r.push(t(e[n], n));
    return r;
  }
  function yr(e, t) {
    for (var r in t) Te(t, r) && (e[r] = t[r]);
    return (
      Te(t, "toString") && (e.toString = t.toString),
      Te(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function Wt(e, t, r, n) {
    return Md(e, t, r, n, !0).utc();
  }
  function Dm() {
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
  function me(e) {
    return e._pf == null && (e._pf = Dm()), e._pf;
  }
  var ja;
  Array.prototype.some
    ? (ja = Array.prototype.some)
    : (ja = function (e) {
        var t = Object(this),
          r = t.length >>> 0,
          n;
        for (n = 0; n < r; n++)
          if (n in t && e.call(this, t[n], n, t)) return !0;
        return !1;
      });
  function Rs(e) {
    if (e._isValid == null) {
      var t = me(e),
        r = ja.call(t.parsedDateParts, function (i) {
          return i != null;
        }),
        n =
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
          (!t.meridiem || (t.meridiem && r));
      if (
        (e._strict &&
          (n =
            n &&
            t.charsLeftOver === 0 &&
            t.unusedTokens.length === 0 &&
            t.bigHour === void 0),
        Object.isFrozen == null || !Object.isFrozen(e))
      )
        e._isValid = n;
      else return n;
    }
    return e._isValid;
  }
  function Gi(e) {
    var t = Wt(NaN);
    return e != null ? yr(me(t), e) : (me(t).userInvalidated = !0), t;
  }
  var Wc = (X.momentProperties = []),
    fa = !1;
  function Ls(e, t) {
    var r,
      n,
      i,
      o = Wc.length;
    if (
      (lt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      lt(t._i) || (e._i = t._i),
      lt(t._f) || (e._f = t._f),
      lt(t._l) || (e._l = t._l),
      lt(t._strict) || (e._strict = t._strict),
      lt(t._tzm) || (e._tzm = t._tzm),
      lt(t._isUTC) || (e._isUTC = t._isUTC),
      lt(t._offset) || (e._offset = t._offset),
      lt(t._pf) || (e._pf = me(t)),
      lt(t._locale) || (e._locale = t._locale),
      o > 0)
    )
      for (r = 0; r < o; r++) (n = Wc[r]), (i = t[n]), lt(i) || (e[n] = i);
    return e;
  }
  function Vn(e) {
    Ls(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      fa === !1 && ((fa = !0), X.updateOffset(this), (fa = !1));
  }
  function Rt(e) {
    return e instanceof Vn || (e != null && e._isAMomentObject != null);
  }
  function ld(e) {
    X.suppressDeprecationWarnings === !1 &&
      typeof console < "u" &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function St(e, t) {
    var r = !0;
    return yr(function () {
      if ((X.deprecationHandler != null && X.deprecationHandler(null, e), r)) {
        var n = [],
          i,
          o,
          a,
          s = arguments.length;
        for (o = 0; o < s; o++) {
          if (((i = ""), typeof arguments[o] == "object")) {
            i +=
              `
[` +
              o +
              "] ";
            for (a in arguments[0])
              Te(arguments[0], a) && (i += a + ": " + arguments[0][a] + ", ");
            i = i.slice(0, -2);
          } else i = arguments[o];
          n.push(i);
        }
        ld(
          e +
            `
Arguments: ` +
            Array.prototype.slice.call(n).join("") +
            `
` +
            new Error().stack
        ),
          (r = !1);
      }
      return t.apply(this, arguments);
    }, t);
  }
  var Vc = {};
  function cd(e, t) {
    X.deprecationHandler != null && X.deprecationHandler(e, t),
      Vc[e] || (ld(t), (Vc[e] = !0));
  }
  X.suppressDeprecationWarnings = !1;
  X.deprecationHandler = null;
  function Vt(e) {
    return (
      (typeof Function < "u" && e instanceof Function) ||
      Object.prototype.toString.call(e) === "[object Function]"
    );
  }
  function Am(e) {
    var t, r;
    for (r in e)
      Te(e, r) && ((t = e[r]), Vt(t) ? (this[r] = t) : (this["_" + r] = t));
    (this._config = e),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      ));
  }
  function Ya(e, t) {
    var r = yr({}, e),
      n;
    for (n in t)
      Te(t, n) &&
        (Or(e[n]) && Or(t[n])
          ? ((r[n] = {}), yr(r[n], e[n]), yr(r[n], t[n]))
          : t[n] != null
          ? (r[n] = t[n])
          : delete r[n]);
    for (n in e) Te(e, n) && !Te(t, n) && Or(e[n]) && (r[n] = yr({}, r[n]));
    return r;
  }
  function Ps(e) {
    e != null && this.set(e);
  }
  var $a;
  Object.keys
    ? ($a = Object.keys)
    : ($a = function (e) {
        var t,
          r = [];
        for (t in e) Te(e, t) && r.push(t);
        return r;
      });
  var Om = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  };
  function Mm(e, t, r) {
    var n = this._calendar[e] || this._calendar.sameElse;
    return Vt(n) ? n.call(t, r) : n;
  }
  function Ut(e, t, r) {
    var n = "" + Math.abs(e),
      i = t - n.length,
      o = e >= 0;
    return (
      (o ? (r ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      n
    );
  }
  var Fs =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    ii = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    ha = {},
    Kr = {};
  function ae(e, t, r, n) {
    var i = n;
    typeof n == "string" &&
      (i = function () {
        return this[n]();
      }),
      e && (Kr[e] = i),
      t &&
        (Kr[t[0]] = function () {
          return Ut(i.apply(this, arguments), t[1], t[2]);
        }),
      r &&
        (Kr[r] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function Im(e) {
    return e.match(/\[[\s\S]/)
      ? e.replace(/^\[|\]$/g, "")
      : e.replace(/\\/g, "");
  }
  function Nm(e) {
    var t = e.match(Fs),
      r,
      n;
    for (r = 0, n = t.length; r < n; r++)
      Kr[t[r]] ? (t[r] = Kr[t[r]]) : (t[r] = Im(t[r]));
    return function (i) {
      var o = "",
        a;
      for (a = 0; a < n; a++) o += Vt(t[a]) ? t[a].call(i, e) : t[a];
      return o;
    };
  }
  function pi(e, t) {
    return e.isValid()
      ? ((t = ud(t, e.localeData())), (ha[t] = ha[t] || Nm(t)), ha[t](e))
      : e.localeData().invalidDate();
  }
  function ud(e, t) {
    var r = 5;
    function n(i) {
      return t.longDateFormat(i) || i;
    }
    for (ii.lastIndex = 0; r >= 0 && ii.test(e); )
      (e = e.replace(ii, n)), (ii.lastIndex = 0), (r -= 1);
    return e;
  }
  var Rm = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  };
  function Lm(e) {
    var t = this._longDateFormat[e],
      r = this._longDateFormat[e.toUpperCase()];
    return t || !r
      ? t
      : ((this._longDateFormat[e] = r
          .match(Fs)
          .map(function (n) {
            return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd"
              ? n.slice(1)
              : n;
          })
          .join("")),
        this._longDateFormat[e]);
  }
  var Pm = "Invalid date";
  function Fm() {
    return this._invalidDate;
  }
  var Bm = "%d",
    jm = /\d{1,2}/;
  function Ym(e) {
    return this._ordinal.replace("%d", e);
  }
  var $m = {
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
  function Um(e, t, r, n) {
    var i = this._relativeTime[r];
    return Vt(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
  }
  function zm(e, t) {
    var r = this._relativeTime[e > 0 ? "future" : "past"];
    return Vt(r) ? r(t) : r.replace(/%s/i, t);
  }
  var Dn = {};
  function tt(e, t) {
    var r = e.toLowerCase();
    Dn[r] = Dn[r + "s"] = Dn[t] = e;
  }
  function kt(e) {
    return typeof e == "string" ? Dn[e] || Dn[e.toLowerCase()] : void 0;
  }
  function Bs(e) {
    var t = {},
      r,
      n;
    for (n in e) Te(e, n) && ((r = kt(n)), r && (t[r] = e[n]));
    return t;
  }
  var dd = {};
  function rt(e, t) {
    dd[e] = t;
  }
  function Hm(e) {
    var t = [],
      r;
    for (r in e) Te(e, r) && t.push({ unit: r, priority: dd[r] });
    return (
      t.sort(function (n, i) {
        return n.priority - i.priority;
      }),
      t
    );
  }
  function Zi(e) {
    return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
  }
  function yt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function be(e) {
    var t = +e,
      r = 0;
    return t !== 0 && isFinite(t) && (r = yt(t)), r;
  }
  function un(e, t) {
    return function (r) {
      return r != null
        ? (fd(this, e, r), X.updateOffset(this, t), this)
        : Ai(this, e);
    };
  }
  function Ai(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function fd(e, t, r) {
    e.isValid() &&
      !isNaN(r) &&
      (t === "FullYear" && Zi(e.year()) && e.month() === 1 && e.date() === 29
        ? ((r = be(r)),
          e._d["set" + (e._isUTC ? "UTC" : "") + t](
            r,
            e.month(),
            to(r, e.month())
          ))
        : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
  }
  function Wm(e) {
    return (e = kt(e)), Vt(this[e]) ? this[e]() : this;
  }
  function Vm(e, t) {
    if (typeof e == "object") {
      e = Bs(e);
      var r = Hm(e),
        n,
        i = r.length;
      for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit]);
    } else if (((e = kt(e)), Vt(this[e]))) return this[e](t);
    return this;
  }
  var hd = /\d/,
    mt = /\d\d/,
    pd = /\d{3}/,
    js = /\d{4}/,
    Ki = /[+-]?\d{6}/,
    Be = /\d\d?/,
    md = /\d\d\d\d?/,
    gd = /\d\d\d\d\d\d?/,
    Xi = /\d{1,3}/,
    Ys = /\d{1,4}/,
    Ji = /[+-]?\d{1,6}/,
    dn = /\d+/,
    Qi = /[+-]?\d+/,
    qm = /Z|[+-]\d\d:?\d\d/gi,
    eo = /Z|[+-]\d\d(?::?\d\d)?/gi,
    Gm = /[+-]?\d+(\.\d{1,3})?/,
    qn =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Oi;
  Oi = {};
  function ee(e, t, r) {
    Oi[e] = Vt(t)
      ? t
      : function (n, i) {
          return n && r ? r : t;
        };
  }
  function Zm(e, t) {
    return Te(Oi, e) ? Oi[e](t._strict, t._locale) : new RegExp(Km(e));
  }
  function Km(e) {
    return ut(
      e
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (t, r, n, i, o) {
            return r || n || i || o;
          }
        )
    );
  }
  function ut(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var Ua = {};
  function Me(e, t) {
    var r,
      n = t,
      i;
    for (
      typeof e == "string" && (e = [e]),
        ar(t) &&
          (n = function (o, a) {
            a[t] = be(o);
          }),
        i = e.length,
        r = 0;
      r < i;
      r++
    )
      Ua[e[r]] = n;
  }
  function Gn(e, t) {
    Me(e, function (r, n, i, o) {
      (i._w = i._w || {}), t(r, i._w, i, o);
    });
  }
  function Xm(e, t, r) {
    t != null && Te(Ua, e) && Ua[e](t, r._a, r, e);
  }
  var et = 0,
    tr = 1,
    Bt = 2,
    Ke = 3,
    Ot = 4,
    rr = 5,
    Dr = 6,
    Jm = 7,
    Qm = 8;
  function e1(e, t) {
    return ((e % t) + t) % t;
  }
  var ze;
  Array.prototype.indexOf
    ? (ze = Array.prototype.indexOf)
    : (ze = function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      });
  function to(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var r = e1(t, 12);
    return (
      (e += (t - r) / 12), r === 1 ? (Zi(e) ? 29 : 28) : 31 - ((r % 7) % 2)
    );
  }
  ae("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  ae("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  });
  ae("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  });
  tt("month", "M");
  rt("month", 8);
  ee("M", Be);
  ee("MM", Be, mt);
  ee("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  });
  ee("MMMM", function (e, t) {
    return t.monthsRegex(e);
  });
  Me(["M", "MM"], function (e, t) {
    t[tr] = be(e) - 1;
  });
  Me(["MMM", "MMMM"], function (e, t, r, n) {
    var i = r._locale.monthsParse(e, n, r._strict);
    i != null ? (t[tr] = i) : (me(r).invalidMonth = e);
  });
  var t1 =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    vd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    yd = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    r1 = qn,
    n1 = qn;
  function i1(e, t) {
    return e
      ? Nt(this._months)
        ? this._months[e.month()]
        : this._months[
            (this._months.isFormat || yd).test(t) ? "format" : "standalone"
          ][e.month()]
      : Nt(this._months)
      ? this._months
      : this._months.standalone;
  }
  function o1(e, t) {
    return e
      ? Nt(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[yd.test(t) ? "format" : "standalone"][e.month()]
      : Nt(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
  }
  function a1(e, t, r) {
    var n,
      i,
      o,
      a = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          n = 0;
        n < 12;
        ++n
      )
        (o = Wt([2e3, n])),
          (this._shortMonthsParse[n] = this.monthsShort(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase());
    return r
      ? t === "MMM"
        ? ((i = ze.call(this._shortMonthsParse, a)), i !== -1 ? i : null)
        : ((i = ze.call(this._longMonthsParse, a)), i !== -1 ? i : null)
      : t === "MMM"
      ? ((i = ze.call(this._shortMonthsParse, a)),
        i !== -1
          ? i
          : ((i = ze.call(this._longMonthsParse, a)), i !== -1 ? i : null))
      : ((i = ze.call(this._longMonthsParse, a)),
        i !== -1
          ? i
          : ((i = ze.call(this._shortMonthsParse, a)), i !== -1 ? i : null));
  }
  function s1(e, t, r) {
    var n, i, o;
    if (this._monthsParseExact) return a1.call(this, e, t, r);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        n = 0;
      n < 12;
      n++
    ) {
      if (
        ((i = Wt([2e3, n])),
        r &&
          !this._longMonthsParse[n] &&
          ((this._longMonthsParse[n] = new RegExp(
            "^" + this.months(i, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[n] = new RegExp(
            "^" + this.monthsShort(i, "").replace(".", "") + "$",
            "i"
          ))),
        !r &&
          !this._monthsParse[n] &&
          ((o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
          (this._monthsParse[n] = new RegExp(o.replace(".", ""), "i"))),
        r && t === "MMMM" && this._longMonthsParse[n].test(e))
      )
        return n;
      if (r && t === "MMM" && this._shortMonthsParse[n].test(e)) return n;
      if (!r && this._monthsParse[n].test(e)) return n;
    }
  }
  function bd(e, t) {
    var r;
    if (!e.isValid()) return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t)) t = be(t);
      else if (((t = e.localeData().monthsParse(t)), !ar(t))) return e;
    }
    return (
      (r = Math.min(e.date(), to(e.year(), t))),
      e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r),
      e
    );
  }
  function xd(e) {
    return e != null
      ? (bd(this, e), X.updateOffset(this, !0), this)
      : Ai(this, "Month");
  }
  function l1() {
    return to(this.year(), this.month());
  }
  function c1(e) {
    return this._monthsParseExact
      ? (Te(this, "_monthsRegex") || wd.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (Te(this, "_monthsShortRegex") || (this._monthsShortRegex = r1),
        this._monthsShortStrictRegex && e
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function u1(e) {
    return this._monthsParseExact
      ? (Te(this, "_monthsRegex") || wd.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex)
      : (Te(this, "_monthsRegex") || (this._monthsRegex = n1),
        this._monthsStrictRegex && e
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function wd() {
    function e(a, s) {
      return s.length - a.length;
    }
    var t = [],
      r = [],
      n = [],
      i,
      o;
    for (i = 0; i < 12; i++)
      (o = Wt([2e3, i])),
        t.push(this.monthsShort(o, "")),
        r.push(this.months(o, "")),
        n.push(this.months(o, "")),
        n.push(this.monthsShort(o, ""));
    for (t.sort(e), r.sort(e), n.sort(e), i = 0; i < 12; i++)
      (t[i] = ut(t[i])), (r[i] = ut(r[i]));
    for (i = 0; i < 24; i++) n[i] = ut(n[i]);
    (this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  ae("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? Ut(e, 4) : "+" + e;
  });
  ae(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  ae(0, ["YYYY", 4], 0, "year");
  ae(0, ["YYYYY", 5], 0, "year");
  ae(0, ["YYYYYY", 6, !0], 0, "year");
  tt("year", "y");
  rt("year", 1);
  ee("Y", Qi);
  ee("YY", Be, mt);
  ee("YYYY", Ys, js);
  ee("YYYYY", Ji, Ki);
  ee("YYYYYY", Ji, Ki);
  Me(["YYYYY", "YYYYYY"], et);
  Me("YYYY", function (e, t) {
    t[et] = e.length === 2 ? X.parseTwoDigitYear(e) : be(e);
  });
  Me("YY", function (e, t) {
    t[et] = X.parseTwoDigitYear(e);
  });
  Me("Y", function (e, t) {
    t[et] = parseInt(e, 10);
  });
  function An(e) {
    return Zi(e) ? 366 : 365;
  }
  X.parseTwoDigitYear = function (e) {
    return be(e) + (be(e) > 68 ? 1900 : 2e3);
  };
  var _d = un("FullYear", !0);
  function d1() {
    return Zi(this.year());
  }
  function f1(e, t, r, n, i, o, a) {
    var s;
    return (
      e < 100 && e >= 0
        ? ((s = new Date(e + 400, t, r, n, i, o, a)),
          isFinite(s.getFullYear()) && s.setFullYear(e))
        : (s = new Date(e, t, r, n, i, o, a)),
      s
    );
  }
  function In(e) {
    var t, r;
    return (
      e < 100 && e >= 0
        ? ((r = Array.prototype.slice.call(arguments)),
          (r[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, r))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function Mi(e, t, r) {
    var n = 7 + t - r,
      i = (7 + In(e, 0, n).getUTCDay() - t) % 7;
    return -i + n - 1;
  }
  function Sd(e, t, r, n, i) {
    var o = (7 + r - n) % 7,
      a = Mi(e, n, i),
      s = 1 + 7 * (t - 1) + o + a,
      l,
      c;
    return (
      s <= 0
        ? ((l = e - 1), (c = An(l) + s))
        : s > An(e)
        ? ((l = e + 1), (c = s - An(e)))
        : ((l = e), (c = s)),
      { year: l, dayOfYear: c }
    );
  }
  function Nn(e, t, r) {
    var n = Mi(e.year(), t, r),
      i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
      o,
      a;
    return (
      i < 1
        ? ((a = e.year() - 1), (o = i + ir(a, t, r)))
        : i > ir(e.year(), t, r)
        ? ((o = i - ir(e.year(), t, r)), (a = e.year() + 1))
        : ((a = e.year()), (o = i)),
      { week: o, year: a }
    );
  }
  function ir(e, t, r) {
    var n = Mi(e, t, r),
      i = Mi(e + 1, t, r);
    return (An(e) - n + i) / 7;
  }
  ae("w", ["ww", 2], "wo", "week");
  ae("W", ["WW", 2], "Wo", "isoWeek");
  tt("week", "w");
  tt("isoWeek", "W");
  rt("week", 5);
  rt("isoWeek", 5);
  ee("w", Be);
  ee("ww", Be, mt);
  ee("W", Be);
  ee("WW", Be, mt);
  Gn(["w", "ww", "W", "WW"], function (e, t, r, n) {
    t[n.substr(0, 1)] = be(e);
  });
  function h1(e) {
    return Nn(e, this._week.dow, this._week.doy).week;
  }
  var p1 = { dow: 0, doy: 6 };
  function m1() {
    return this._week.dow;
  }
  function g1() {
    return this._week.doy;
  }
  function v1(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function y1(e) {
    var t = Nn(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  ae("d", 0, "do", "day");
  ae("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  });
  ae("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  });
  ae("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  });
  ae("e", 0, 0, "weekday");
  ae("E", 0, 0, "isoWeekday");
  tt("day", "d");
  tt("weekday", "e");
  tt("isoWeekday", "E");
  rt("day", 11);
  rt("weekday", 11);
  rt("isoWeekday", 11);
  ee("d", Be);
  ee("e", Be);
  ee("E", Be);
  ee("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  });
  ee("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  });
  ee("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  });
  Gn(["dd", "ddd", "dddd"], function (e, t, r, n) {
    var i = r._locale.weekdaysParse(e, n, r._strict);
    i != null ? (t.d = i) : (me(r).invalidWeekday = e);
  });
  Gn(["d", "e", "E"], function (e, t, r, n) {
    t[n] = be(e);
  });
  function b1(e, t) {
    return typeof e != "string"
      ? e
      : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
      : parseInt(e, 10);
  }
  function x1(e, t) {
    return typeof e == "string"
      ? t.weekdaysParse(e) % 7 || 7
      : isNaN(e)
      ? null
      : e;
  }
  function $s(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var w1 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    kd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    _1 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    S1 = qn,
    k1 = qn,
    E1 = qn;
  function C1(e, t) {
    var r = Nt(this._weekdays)
      ? this._weekdays
      : this._weekdays[
          e && e !== !0 && this._weekdays.isFormat.test(t)
            ? "format"
            : "standalone"
        ];
    return e === !0 ? $s(r, this._week.dow) : e ? r[e.day()] : r;
  }
  function T1(e) {
    return e === !0
      ? $s(this._weekdaysShort, this._week.dow)
      : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort;
  }
  function D1(e) {
    return e === !0
      ? $s(this._weekdaysMin, this._week.dow)
      : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin;
  }
  function A1(e, t, r) {
    var n,
      i,
      o,
      a = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          n = 0;
        n < 7;
        ++n
      )
        (o = Wt([2e3, 1]).day(n)),
          (this._minWeekdaysParse[n] = this.weekdaysMin(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[n] = this.weekdaysShort(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase());
    return r
      ? t === "dddd"
        ? ((i = ze.call(this._weekdaysParse, a)), i !== -1 ? i : null)
        : t === "ddd"
        ? ((i = ze.call(this._shortWeekdaysParse, a)), i !== -1 ? i : null)
        : ((i = ze.call(this._minWeekdaysParse, a)), i !== -1 ? i : null)
      : t === "dddd"
      ? ((i = ze.call(this._weekdaysParse, a)),
        i !== -1 || ((i = ze.call(this._shortWeekdaysParse, a)), i !== -1)
          ? i
          : ((i = ze.call(this._minWeekdaysParse, a)), i !== -1 ? i : null))
      : t === "ddd"
      ? ((i = ze.call(this._shortWeekdaysParse, a)),
        i !== -1 || ((i = ze.call(this._weekdaysParse, a)), i !== -1)
          ? i
          : ((i = ze.call(this._minWeekdaysParse, a)), i !== -1 ? i : null))
      : ((i = ze.call(this._minWeekdaysParse, a)),
        i !== -1 || ((i = ze.call(this._weekdaysParse, a)), i !== -1)
          ? i
          : ((i = ze.call(this._shortWeekdaysParse, a)), i !== -1 ? i : null));
  }
  function O1(e, t, r) {
    var n, i, o;
    if (this._weekdaysParseExact) return A1.call(this, e, t, r);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        n = 0;
      n < 7;
      n++
    ) {
      if (
        ((i = Wt([2e3, 1]).day(n)),
        r &&
          !this._fullWeekdaysParse[n] &&
          ((this._fullWeekdaysParse[n] = new RegExp(
            "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[n] = new RegExp(
            "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[n] = new RegExp(
            "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
            "i"
          ))),
        this._weekdaysParse[n] ||
          ((o =
            "^" +
            this.weekdays(i, "") +
            "|^" +
            this.weekdaysShort(i, "") +
            "|^" +
            this.weekdaysMin(i, "")),
          (this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i"))),
        r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      )
        return n;
      if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e)) return n;
      if (r && t === "dd" && this._minWeekdaysParse[n].test(e)) return n;
      if (!r && this._weekdaysParse[n].test(e)) return n;
    }
  }
  function M1(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null
      ? ((e = b1(e, this.localeData())), this.add(e - t, "d"))
      : t;
  }
  function I1(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function N1(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      var t = x1(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else return this.day() || 7;
  }
  function R1(e) {
    return this._weekdaysParseExact
      ? (Te(this, "_weekdaysRegex") || Us.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (Te(this, "_weekdaysRegex") || (this._weekdaysRegex = S1),
        this._weekdaysStrictRegex && e
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function L1(e) {
    return this._weekdaysParseExact
      ? (Te(this, "_weekdaysRegex") || Us.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (Te(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = k1),
        this._weekdaysShortStrictRegex && e
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function P1(e) {
    return this._weekdaysParseExact
      ? (Te(this, "_weekdaysRegex") || Us.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (Te(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = E1),
        this._weekdaysMinStrictRegex && e
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function Us() {
    function e(u, g) {
      return g.length - u.length;
    }
    var t = [],
      r = [],
      n = [],
      i = [],
      o,
      a,
      s,
      l,
      c;
    for (o = 0; o < 7; o++)
      (a = Wt([2e3, 1]).day(o)),
        (s = ut(this.weekdaysMin(a, ""))),
        (l = ut(this.weekdaysShort(a, ""))),
        (c = ut(this.weekdays(a, ""))),
        t.push(s),
        r.push(l),
        n.push(c),
        i.push(s),
        i.push(l),
        i.push(c);
    t.sort(e),
      r.sort(e),
      n.sort(e),
      i.sort(e),
      (this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + r.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  function zs() {
    return this.hours() % 12 || 12;
  }
  function F1() {
    return this.hours() || 24;
  }
  ae("H", ["HH", 2], 0, "hour");
  ae("h", ["hh", 2], 0, zs);
  ae("k", ["kk", 2], 0, F1);
  ae("hmm", 0, 0, function () {
    return "" + zs.apply(this) + Ut(this.minutes(), 2);
  });
  ae("hmmss", 0, 0, function () {
    return "" + zs.apply(this) + Ut(this.minutes(), 2) + Ut(this.seconds(), 2);
  });
  ae("Hmm", 0, 0, function () {
    return "" + this.hours() + Ut(this.minutes(), 2);
  });
  ae("Hmmss", 0, 0, function () {
    return "" + this.hours() + Ut(this.minutes(), 2) + Ut(this.seconds(), 2);
  });
  function Ed(e, t) {
    ae(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  Ed("a", !0);
  Ed("A", !1);
  tt("hour", "h");
  rt("hour", 13);
  function Cd(e, t) {
    return t._meridiemParse;
  }
  ee("a", Cd);
  ee("A", Cd);
  ee("H", Be);
  ee("h", Be);
  ee("k", Be);
  ee("HH", Be, mt);
  ee("hh", Be, mt);
  ee("kk", Be, mt);
  ee("hmm", md);
  ee("hmmss", gd);
  ee("Hmm", md);
  ee("Hmmss", gd);
  Me(["H", "HH"], Ke);
  Me(["k", "kk"], function (e, t, r) {
    var n = be(e);
    t[Ke] = n === 24 ? 0 : n;
  });
  Me(["a", "A"], function (e, t, r) {
    (r._isPm = r._locale.isPM(e)), (r._meridiem = e);
  });
  Me(["h", "hh"], function (e, t, r) {
    (t[Ke] = be(e)), (me(r).bigHour = !0);
  });
  Me("hmm", function (e, t, r) {
    var n = e.length - 2;
    (t[Ke] = be(e.substr(0, n))),
      (t[Ot] = be(e.substr(n))),
      (me(r).bigHour = !0);
  });
  Me("hmmss", function (e, t, r) {
    var n = e.length - 4,
      i = e.length - 2;
    (t[Ke] = be(e.substr(0, n))),
      (t[Ot] = be(e.substr(n, 2))),
      (t[rr] = be(e.substr(i))),
      (me(r).bigHour = !0);
  });
  Me("Hmm", function (e, t, r) {
    var n = e.length - 2;
    (t[Ke] = be(e.substr(0, n))), (t[Ot] = be(e.substr(n)));
  });
  Me("Hmmss", function (e, t, r) {
    var n = e.length - 4,
      i = e.length - 2;
    (t[Ke] = be(e.substr(0, n))),
      (t[Ot] = be(e.substr(n, 2))),
      (t[rr] = be(e.substr(i)));
  });
  function B1(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var j1 = /[ap]\.?m?\.?/i,
    Y1 = un("Hours", !0);
  function $1(e, t, r) {
    return e > 11 ? (r ? "pm" : "PM") : r ? "am" : "AM";
  }
  var Td = {
      calendar: Om,
      longDateFormat: Rm,
      invalidDate: Pm,
      ordinal: Bm,
      dayOfMonthOrdinalParse: jm,
      relativeTime: $m,
      months: t1,
      monthsShort: vd,
      week: p1,
      weekdays: w1,
      weekdaysMin: _1,
      weekdaysShort: kd,
      meridiemParse: j1,
    },
    je = {},
    gn = {},
    Rn;
  function U1(e, t) {
    var r,
      n = Math.min(e.length, t.length);
    for (r = 0; r < n; r += 1) if (e[r] !== t[r]) return r;
    return n;
  }
  function qc(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function z1(e) {
    for (var t = 0, r, n, i, o; t < e.length; ) {
      for (
        o = qc(e[t]).split("-"),
          r = o.length,
          n = qc(e[t + 1]),
          n = n ? n.split("-") : null;
        r > 0;

      ) {
        if (((i = ro(o.slice(0, r).join("-"))), i)) return i;
        if (n && n.length >= r && U1(o, n) >= r - 1) break;
        r--;
      }
      t++;
    }
    return Rn;
  }
  function H1(e) {
    return e.match("^[^/\\\\]*$") != null;
  }
  function ro(e) {
    var t = null,
      r;
    if (je[e] === void 0 && typeof Ir < "u" && Ir && Ir.exports && H1(e))
      try {
        (t = Rn._abbr), (r = require), r("./locale/" + e), wr(t);
      } catch {
        je[e] = null;
      }
    return je[e];
  }
  function wr(e, t) {
    var r;
    return (
      e &&
        (lt(t) ? (r = cr(e)) : (r = Hs(e, t)),
        r
          ? (Rn = r)
          : typeof console < "u" &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?"
            )),
      Rn._abbr
    );
  }
  function Hs(e, t) {
    if (t !== null) {
      var r,
        n = Td;
      if (((t.abbr = e), je[e] != null))
        cd(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (n = je[e]._config);
      else if (t.parentLocale != null)
        if (je[t.parentLocale] != null) n = je[t.parentLocale]._config;
        else if (((r = ro(t.parentLocale)), r != null)) n = r._config;
        else
          return (
            gn[t.parentLocale] || (gn[t.parentLocale] = []),
            gn[t.parentLocale].push({ name: e, config: t }),
            null
          );
      return (
        (je[e] = new Ps(Ya(n, t))),
        gn[e] &&
          gn[e].forEach(function (i) {
            Hs(i.name, i.config);
          }),
        wr(e),
        je[e]
      );
    } else return delete je[e], null;
  }
  function W1(e, t) {
    if (t != null) {
      var r,
        n,
        i = Td;
      je[e] != null && je[e].parentLocale != null
        ? je[e].set(Ya(je[e]._config, t))
        : ((n = ro(e)),
          n != null && (i = n._config),
          (t = Ya(i, t)),
          n == null && (t.abbr = e),
          (r = new Ps(t)),
          (r.parentLocale = je[e]),
          (je[e] = r)),
        wr(e);
    } else
      je[e] != null &&
        (je[e].parentLocale != null
          ? ((je[e] = je[e].parentLocale), e === wr() && wr(e))
          : je[e] != null && delete je[e]);
    return je[e];
  }
  function cr(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Rn;
    if (!Nt(e)) {
      if (((t = ro(e)), t)) return t;
      e = [e];
    }
    return z1(e);
  }
  function V1() {
    return $a(je);
  }
  function Ws(e) {
    var t,
      r = e._a;
    return (
      r &&
        me(e).overflow === -2 &&
        ((t =
          r[tr] < 0 || r[tr] > 11
            ? tr
            : r[Bt] < 1 || r[Bt] > to(r[et], r[tr])
            ? Bt
            : r[Ke] < 0 ||
              r[Ke] > 24 ||
              (r[Ke] === 24 && (r[Ot] !== 0 || r[rr] !== 0 || r[Dr] !== 0))
            ? Ke
            : r[Ot] < 0 || r[Ot] > 59
            ? Ot
            : r[rr] < 0 || r[rr] > 59
            ? rr
            : r[Dr] < 0 || r[Dr] > 999
            ? Dr
            : -1),
        me(e)._overflowDayOfYear && (t < et || t > Bt) && (t = Bt),
        me(e)._overflowWeeks && t === -1 && (t = Jm),
        me(e)._overflowWeekday && t === -1 && (t = Qm),
        (me(e).overflow = t)),
      e
    );
  }
  var q1 =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    G1 =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Z1 = /Z|[+-]\d\d(?::?\d\d)?/,
    oi = [
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
    pa = [
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
    K1 = /^\/?Date\((-?\d+)/i,
    X1 =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    J1 = {
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
  function Dd(e) {
    var t,
      r,
      n = e._i,
      i = q1.exec(n) || G1.exec(n),
      o,
      a,
      s,
      l,
      c = oi.length,
      u = pa.length;
    if (i) {
      for (me(e).iso = !0, t = 0, r = c; t < r; t++)
        if (oi[t][1].exec(i[1])) {
          (a = oi[t][0]), (o = oi[t][2] !== !1);
          break;
        }
      if (a == null) {
        e._isValid = !1;
        return;
      }
      if (i[3]) {
        for (t = 0, r = u; t < r; t++)
          if (pa[t][1].exec(i[3])) {
            s = (i[2] || " ") + pa[t][0];
            break;
          }
        if (s == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!o && s != null) {
        e._isValid = !1;
        return;
      }
      if (i[4])
        if (Z1.exec(i[4])) l = "Z";
        else {
          e._isValid = !1;
          return;
        }
      (e._f = a + (s || "") + (l || "")), qs(e);
    } else e._isValid = !1;
  }
  function Q1(e, t, r, n, i, o) {
    var a = [
      eg(e),
      vd.indexOf(t),
      parseInt(r, 10),
      parseInt(n, 10),
      parseInt(i, 10),
    ];
    return o && a.push(parseInt(o, 10)), a;
  }
  function eg(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function tg(e) {
    return e
      .replace(/\([^()]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
  }
  function rg(e, t, r) {
    if (e) {
      var n = kd.indexOf(e),
        i = new Date(t[0], t[1], t[2]).getDay();
      if (n !== i) return (me(r).weekdayMismatch = !0), (r._isValid = !1), !1;
    }
    return !0;
  }
  function ng(e, t, r) {
    if (e) return J1[e];
    if (t) return 0;
    var n = parseInt(r, 10),
      i = n % 100,
      o = (n - i) / 100;
    return o * 60 + i;
  }
  function Ad(e) {
    var t = X1.exec(tg(e._i)),
      r;
    if (t) {
      if (((r = Q1(t[4], t[3], t[2], t[5], t[6], t[7])), !rg(t[1], r, e)))
        return;
      (e._a = r),
        (e._tzm = ng(t[8], t[9], t[10])),
        (e._d = In.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (me(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function ig(e) {
    var t = K1.exec(e._i);
    if (t !== null) {
      e._d = new Date(+t[1]);
      return;
    }
    if ((Dd(e), e._isValid === !1)) delete e._isValid;
    else return;
    if ((Ad(e), e._isValid === !1)) delete e._isValid;
    else return;
    e._strict ? (e._isValid = !1) : X.createFromInputFallback(e);
  }
  X.createFromInputFallback = St(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function Wr(e, t, r) {
    return e ?? t ?? r;
  }
  function og(e) {
    var t = new Date(X.now());
    return e._useUTC
      ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
      : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Vs(e) {
    var t,
      r,
      n = [],
      i,
      o,
      a;
    if (!e._d) {
      for (
        i = og(e),
          e._w && e._a[Bt] == null && e._a[tr] == null && ag(e),
          e._dayOfYear != null &&
            ((a = Wr(e._a[et], i[et])),
            (e._dayOfYear > An(a) || e._dayOfYear === 0) &&
              (me(e)._overflowDayOfYear = !0),
            (r = In(a, 0, e._dayOfYear)),
            (e._a[tr] = r.getUTCMonth()),
            (e._a[Bt] = r.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = n[t] = i[t];
      for (; t < 7; t++)
        e._a[t] = n[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
      e._a[Ke] === 24 &&
        e._a[Ot] === 0 &&
        e._a[rr] === 0 &&
        e._a[Dr] === 0 &&
        ((e._nextDay = !0), (e._a[Ke] = 0)),
        (e._d = (e._useUTC ? In : f1).apply(null, n)),
        (o = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[Ke] = 24),
        e._w &&
          typeof e._w.d < "u" &&
          e._w.d !== o &&
          (me(e).weekdayMismatch = !0);
    }
  }
  function ag(e) {
    var t, r, n, i, o, a, s, l, c;
    (t = e._w),
      t.GG != null || t.W != null || t.E != null
        ? ((o = 1),
          (a = 4),
          (r = Wr(t.GG, e._a[et], Nn(Fe(), 1, 4).year)),
          (n = Wr(t.W, 1)),
          (i = Wr(t.E, 1)),
          (i < 1 || i > 7) && (l = !0))
        : ((o = e._locale._week.dow),
          (a = e._locale._week.doy),
          (c = Nn(Fe(), o, a)),
          (r = Wr(t.gg, e._a[et], c.year)),
          (n = Wr(t.w, c.week)),
          t.d != null
            ? ((i = t.d), (i < 0 || i > 6) && (l = !0))
            : t.e != null
            ? ((i = t.e + o), (t.e < 0 || t.e > 6) && (l = !0))
            : (i = o)),
      n < 1 || n > ir(r, o, a)
        ? (me(e)._overflowWeeks = !0)
        : l != null
        ? (me(e)._overflowWeekday = !0)
        : ((s = Sd(r, n, i, o, a)),
          (e._a[et] = s.year),
          (e._dayOfYear = s.dayOfYear));
  }
  X.ISO_8601 = function () {};
  X.RFC_2822 = function () {};
  function qs(e) {
    if (e._f === X.ISO_8601) {
      Dd(e);
      return;
    }
    if (e._f === X.RFC_2822) {
      Ad(e);
      return;
    }
    (e._a = []), (me(e).empty = !0);
    var t = "" + e._i,
      r,
      n,
      i,
      o,
      a,
      s = t.length,
      l = 0,
      c,
      u;
    for (
      i = ud(e._f, e._locale).match(Fs) || [], u = i.length, r = 0;
      r < u;
      r++
    )
      (o = i[r]),
        (n = (t.match(Zm(o, e)) || [])[0]),
        n &&
          ((a = t.substr(0, t.indexOf(n))),
          a.length > 0 && me(e).unusedInput.push(a),
          (t = t.slice(t.indexOf(n) + n.length)),
          (l += n.length)),
        Kr[o]
          ? (n ? (me(e).empty = !1) : me(e).unusedTokens.push(o), Xm(o, n, e))
          : e._strict && !n && me(e).unusedTokens.push(o);
    (me(e).charsLeftOver = s - l),
      t.length > 0 && me(e).unusedInput.push(t),
      e._a[Ke] <= 12 &&
        me(e).bigHour === !0 &&
        e._a[Ke] > 0 &&
        (me(e).bigHour = void 0),
      (me(e).parsedDateParts = e._a.slice(0)),
      (me(e).meridiem = e._meridiem),
      (e._a[Ke] = sg(e._locale, e._a[Ke], e._meridiem)),
      (c = me(e).era),
      c !== null && (e._a[et] = e._locale.erasConvertYear(c, e._a[et])),
      Vs(e),
      Ws(e);
  }
  function sg(e, t, r) {
    var n;
    return r == null
      ? t
      : e.meridiemHour != null
      ? e.meridiemHour(t, r)
      : (e.isPM != null &&
          ((n = e.isPM(r)),
          n && t < 12 && (t += 12),
          !n && t === 12 && (t = 0)),
        t);
  }
  function lg(e) {
    var t,
      r,
      n,
      i,
      o,
      a,
      s = !1,
      l = e._f.length;
    if (l === 0) {
      (me(e).invalidFormat = !0), (e._d = new Date(NaN));
      return;
    }
    for (i = 0; i < l; i++)
      (o = 0),
        (a = !1),
        (t = Ls({}, e)),
        e._useUTC != null && (t._useUTC = e._useUTC),
        (t._f = e._f[i]),
        qs(t),
        Rs(t) && (a = !0),
        (o += me(t).charsLeftOver),
        (o += me(t).unusedTokens.length * 10),
        (me(t).score = o),
        s
          ? o < n && ((n = o), (r = t))
          : (n == null || o < n || a) && ((n = o), (r = t), a && (s = !0));
    yr(e, r || t);
  }
  function cg(e) {
    if (!e._d) {
      var t = Bs(e._i),
        r = t.day === void 0 ? t.date : t.day;
      (e._a = sd(
        [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
        function (n) {
          return n && parseInt(n, 10);
        }
      )),
        Vs(e);
    }
  }
  function ug(e) {
    var t = new Vn(Ws(Od(e)));
    return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
  }
  function Od(e) {
    var t = e._i,
      r = e._f;
    return (
      (e._locale = e._locale || cr(e._l)),
      t === null || (r === void 0 && t === "")
        ? Gi({ nullInput: !0 })
        : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
          Rt(t)
            ? new Vn(Ws(t))
            : (Wn(t) ? (e._d = t) : Nt(r) ? lg(e) : r ? qs(e) : dg(e),
              Rs(e) || (e._d = null),
              e))
    );
  }
  function dg(e) {
    var t = e._i;
    lt(t)
      ? (e._d = new Date(X.now()))
      : Wn(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == "string"
      ? ig(e)
      : Nt(t)
      ? ((e._a = sd(t.slice(0), function (r) {
          return parseInt(r, 10);
        })),
        Vs(e))
      : Or(t)
      ? cg(e)
      : ar(t)
      ? (e._d = new Date(t))
      : X.createFromInputFallback(e);
  }
  function Md(e, t, r, n, i) {
    var o = {};
    return (
      (t === !0 || t === !1) && ((n = t), (t = void 0)),
      (r === !0 || r === !1) && ((n = r), (r = void 0)),
      ((Or(e) && Ns(e)) || (Nt(e) && e.length === 0)) && (e = void 0),
      (o._isAMomentObject = !0),
      (o._useUTC = o._isUTC = i),
      (o._l = r),
      (o._i = e),
      (o._f = t),
      (o._strict = n),
      ug(o)
    );
  }
  function Fe(e, t, r, n) {
    return Md(e, t, r, n, !1);
  }
  var fg = St(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Fe.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : Gi();
      }
    ),
    hg = St(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Fe.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e > this ? this : e) : Gi();
      }
    );
  function Id(e, t) {
    var r, n;
    if ((t.length === 1 && Nt(t[0]) && (t = t[0]), !t.length)) return Fe();
    for (r = t[0], n = 1; n < t.length; ++n)
      (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
    return r;
  }
  function pg() {
    var e = [].slice.call(arguments, 0);
    return Id("isBefore", e);
  }
  function mg() {
    var e = [].slice.call(arguments, 0);
    return Id("isAfter", e);
  }
  var gg = function () {
      return Date.now ? Date.now() : +new Date();
    },
    vn = [
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
  function vg(e) {
    var t,
      r = !1,
      n,
      i = vn.length;
    for (t in e)
      if (
        Te(e, t) &&
        !(ze.call(vn, t) !== -1 && (e[t] == null || !isNaN(e[t])))
      )
        return !1;
    for (n = 0; n < i; ++n)
      if (e[vn[n]]) {
        if (r) return !1;
        parseFloat(e[vn[n]]) !== be(e[vn[n]]) && (r = !0);
      }
    return !0;
  }
  function yg() {
    return this._isValid;
  }
  function bg() {
    return Lt(NaN);
  }
  function no(e) {
    var t = Bs(e),
      r = t.year || 0,
      n = t.quarter || 0,
      i = t.month || 0,
      o = t.week || t.isoWeek || 0,
      a = t.day || 0,
      s = t.hour || 0,
      l = t.minute || 0,
      c = t.second || 0,
      u = t.millisecond || 0;
    (this._isValid = vg(t)),
      (this._milliseconds = +u + c * 1e3 + l * 6e4 + s * 1e3 * 60 * 60),
      (this._days = +a + o * 7),
      (this._months = +i + n * 3 + r * 12),
      (this._data = {}),
      (this._locale = cr()),
      this._bubble();
  }
  function mi(e) {
    return e instanceof no;
  }
  function za(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function xg(e, t, r) {
    var n = Math.min(e.length, t.length),
      i = Math.abs(e.length - t.length),
      o = 0,
      a;
    for (a = 0; a < n; a++)
      ((r && e[a] !== t[a]) || (!r && be(e[a]) !== be(t[a]))) && o++;
    return o + i;
  }
  function Nd(e, t) {
    ae(e, 0, 0, function () {
      var r = this.utcOffset(),
        n = "+";
      return (
        r < 0 && ((r = -r), (n = "-")),
        n + Ut(~~(r / 60), 2) + t + Ut(~~r % 60, 2)
      );
    });
  }
  Nd("Z", ":");
  Nd("ZZ", "");
  ee("Z", eo);
  ee("ZZ", eo);
  Me(["Z", "ZZ"], function (e, t, r) {
    (r._useUTC = !0), (r._tzm = Gs(eo, e));
  });
  var wg = /([\+\-]|\d\d)/gi;
  function Gs(e, t) {
    var r = (t || "").match(e),
      n,
      i,
      o;
    return r === null
      ? null
      : ((n = r[r.length - 1] || []),
        (i = (n + "").match(wg) || ["-", 0, 0]),
        (o = +(i[1] * 60) + be(i[2])),
        o === 0 ? 0 : i[0] === "+" ? o : -o);
  }
  function Zs(e, t) {
    var r, n;
    return t._isUTC
      ? ((r = t.clone()),
        (n = (Rt(e) || Wn(e) ? e.valueOf() : Fe(e).valueOf()) - r.valueOf()),
        r._d.setTime(r._d.valueOf() + n),
        X.updateOffset(r, !1),
        r)
      : Fe(e).local();
  }
  function Ha(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  X.updateOffset = function () {};
  function _g(e, t, r) {
    var n = this._offset || 0,
      i;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (((e = Gs(eo, e)), e === null)) return this;
      } else Math.abs(e) < 16 && !r && (e = e * 60);
      return (
        !this._isUTC && t && (i = Ha(this)),
        (this._offset = e),
        (this._isUTC = !0),
        i != null && this.add(i, "m"),
        n !== e &&
          (!t || this._changeInProgress
            ? Pd(this, Lt(e - n, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              X.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    } else return this._isUTC ? n : Ha(this);
  }
  function Sg(e, t) {
    return e != null
      ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset();
  }
  function kg(e) {
    return this.utcOffset(0, e);
  }
  function Eg(e) {
    return (
      this._isUTC &&
        (this.utcOffset(0, e),
        (this._isUTC = !1),
        e && this.subtract(Ha(this), "m")),
      this
    );
  }
  function Cg() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Gs(qm, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function Tg(e) {
    return this.isValid()
      ? ((e = e ? Fe(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
      : !1;
  }
  function Dg() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function Ag() {
    if (!lt(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
      t;
    return (
      Ls(e, this),
      (e = Od(e)),
      e._a
        ? ((t = e._isUTC ? Wt(e._a) : Fe(e._a)),
          (this._isDSTShifted = this.isValid() && xg(e._a, t.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    );
  }
  function Og() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function Mg() {
    return this.isValid() ? this._isUTC : !1;
  }
  function Rd() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var Ig = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    Ng =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function Lt(e, t) {
    var r = e,
      n = null,
      i,
      o,
      a;
    return (
      mi(e)
        ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
        : ar(e) || !isNaN(+e)
        ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
        : (n = Ig.exec(e))
        ? ((i = n[1] === "-" ? -1 : 1),
          (r = {
            y: 0,
            d: be(n[Bt]) * i,
            h: be(n[Ke]) * i,
            m: be(n[Ot]) * i,
            s: be(n[rr]) * i,
            ms: be(za(n[Dr] * 1e3)) * i,
          }))
        : (n = Ng.exec(e))
        ? ((i = n[1] === "-" ? -1 : 1),
          (r = {
            y: Er(n[2], i),
            M: Er(n[3], i),
            w: Er(n[4], i),
            d: Er(n[5], i),
            h: Er(n[6], i),
            m: Er(n[7], i),
            s: Er(n[8], i),
          }))
        : r == null
        ? (r = {})
        : typeof r == "object" &&
          ("from" in r || "to" in r) &&
          ((a = Rg(Fe(r.from), Fe(r.to))),
          (r = {}),
          (r.ms = a.milliseconds),
          (r.M = a.months)),
      (o = new no(r)),
      mi(e) && Te(e, "_locale") && (o._locale = e._locale),
      mi(e) && Te(e, "_isValid") && (o._isValid = e._isValid),
      o
    );
  }
  Lt.fn = no.prototype;
  Lt.invalid = bg;
  function Er(e, t) {
    var r = e && parseFloat(e.replace(",", "."));
    return (isNaN(r) ? 0 : r) * t;
  }
  function Gc(e, t) {
    var r = {};
    return (
      (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
      e.clone().add(r.months, "M").isAfter(t) && --r.months,
      (r.milliseconds = +t - +e.clone().add(r.months, "M")),
      r
    );
  }
  function Rg(e, t) {
    var r;
    return e.isValid() && t.isValid()
      ? ((t = Zs(t, e)),
        e.isBefore(t)
          ? (r = Gc(e, t))
          : ((r = Gc(t, e)),
            (r.milliseconds = -r.milliseconds),
            (r.months = -r.months)),
        r)
      : { milliseconds: 0, months: 0 };
  }
  function Ld(e, t) {
    return function (r, n) {
      var i, o;
      return (
        n !== null &&
          !isNaN(+n) &&
          (cd(
            t,
            "moment()." +
              t +
              "(period, number) is deprecated. Please use moment()." +
              t +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (o = r),
          (r = n),
          (n = o)),
        (i = Lt(r, n)),
        Pd(this, i, e),
        this
      );
    };
  }
  function Pd(e, t, r, n) {
    var i = t._milliseconds,
      o = za(t._days),
      a = za(t._months);
    e.isValid() &&
      ((n = n ?? !0),
      a && bd(e, Ai(e, "Month") + a * r),
      o && fd(e, "Date", Ai(e, "Date") + o * r),
      i && e._d.setTime(e._d.valueOf() + i * r),
      n && X.updateOffset(e, o || a));
  }
  var Lg = Ld(1, "add"),
    Pg = Ld(-1, "subtract");
  function Fd(e) {
    return typeof e == "string" || e instanceof String;
  }
  function Fg(e) {
    return (
      Rt(e) ||
      Wn(e) ||
      Fd(e) ||
      ar(e) ||
      jg(e) ||
      Bg(e) ||
      e === null ||
      e === void 0
    );
  }
  function Bg(e) {
    var t = Or(e) && !Ns(e),
      r = !1,
      n = [
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
      a = n.length;
    for (i = 0; i < a; i += 1) (o = n[i]), (r = r || Te(e, o));
    return t && r;
  }
  function jg(e) {
    var t = Nt(e),
      r = !1;
    return (
      t &&
        (r =
          e.filter(function (n) {
            return !ar(n) && Fd(e);
          }).length === 0),
      t && r
    );
  }
  function Yg(e) {
    var t = Or(e) && !Ns(e),
      r = !1,
      n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
      i,
      o;
    for (i = 0; i < n.length; i += 1) (o = n[i]), (r = r || Te(e, o));
    return t && r;
  }
  function $g(e, t) {
    var r = e.diff(t, "days", !0);
    return r < -6
      ? "sameElse"
      : r < -1
      ? "lastWeek"
      : r < 0
      ? "lastDay"
      : r < 1
      ? "sameDay"
      : r < 2
      ? "nextDay"
      : r < 7
      ? "nextWeek"
      : "sameElse";
  }
  function Ug(e, t) {
    arguments.length === 1 &&
      (arguments[0]
        ? Fg(arguments[0])
          ? ((e = arguments[0]), (t = void 0))
          : Yg(arguments[0]) && ((t = arguments[0]), (e = void 0))
        : ((e = void 0), (t = void 0)));
    var r = e || Fe(),
      n = Zs(r, this).startOf("day"),
      i = X.calendarFormat(this, n) || "sameElse",
      o = t && (Vt(t[i]) ? t[i].call(this, r) : t[i]);
    return this.format(o || this.localeData().calendar(i, this, Fe(r)));
  }
  function zg() {
    return new Vn(this);
  }
  function Hg(e, t) {
    var r = Rt(e) ? e : Fe(e);
    return this.isValid() && r.isValid()
      ? ((t = kt(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() > r.valueOf()
          : r.valueOf() < this.clone().startOf(t).valueOf())
      : !1;
  }
  function Wg(e, t) {
    var r = Rt(e) ? e : Fe(e);
    return this.isValid() && r.isValid()
      ? ((t = kt(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() < r.valueOf()
          : this.clone().endOf(t).valueOf() < r.valueOf())
      : !1;
  }
  function Vg(e, t, r, n) {
    var i = Rt(e) ? e : Fe(e),
      o = Rt(t) ? t : Fe(t);
    return this.isValid() && i.isValid() && o.isValid()
      ? ((n = n || "()"),
        (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
          (n[1] === ")" ? this.isBefore(o, r) : !this.isAfter(o, r)))
      : !1;
  }
  function qg(e, t) {
    var r = Rt(e) ? e : Fe(e),
      n;
    return this.isValid() && r.isValid()
      ? ((t = kt(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() === r.valueOf()
          : ((n = r.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      : !1;
  }
  function Gg(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function Zg(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function Kg(e, t, r) {
    var n, i, o;
    if (!this.isValid()) return NaN;
    if (((n = Zs(e, this)), !n.isValid())) return NaN;
    switch (((i = (n.utcOffset() - this.utcOffset()) * 6e4), (t = kt(t)), t)) {
      case "year":
        o = gi(this, n) / 12;
        break;
      case "month":
        o = gi(this, n);
        break;
      case "quarter":
        o = gi(this, n) / 3;
        break;
      case "second":
        o = (this - n) / 1e3;
        break;
      case "minute":
        o = (this - n) / 6e4;
        break;
      case "hour":
        o = (this - n) / 36e5;
        break;
      case "day":
        o = (this - n - i) / 864e5;
        break;
      case "week":
        o = (this - n - i) / 6048e5;
        break;
      default:
        o = this - n;
    }
    return r ? o : yt(o);
  }
  function gi(e, t) {
    if (e.date() < t.date()) return -gi(t, e);
    var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      n = e.clone().add(r, "months"),
      i,
      o;
    return (
      t - n < 0
        ? ((i = e.clone().add(r - 1, "months")), (o = (t - n) / (n - i)))
        : ((i = e.clone().add(r + 1, "months")), (o = (t - n) / (i - n))),
      -(r + o) || 0
    );
  }
  X.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  X.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function Xg() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function Jg(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
      r = t ? this.clone().utc() : this;
    return r.year() < 0 || r.year() > 9999
      ? pi(
          r,
          t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        )
      : Vt(Date.prototype.toISOString)
      ? t
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace("Z", pi(r, "Z"))
      : pi(
          r,
          t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
  }
  function Qg() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "",
      r,
      n,
      i,
      o;
    return (
      this.isLocal() ||
        ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
        (t = "Z")),
      (r = "[" + e + '("]'),
      (n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
      (i = "-MM-DD[T]HH:mm:ss.SSS"),
      (o = t + '[")]'),
      this.format(r + n + i + o)
    );
  }
  function ev(e) {
    e || (e = this.isUtc() ? X.defaultFormatUtc : X.defaultFormat);
    var t = pi(this, e);
    return this.localeData().postformat(t);
  }
  function tv(e, t) {
    return this.isValid() && ((Rt(e) && e.isValid()) || Fe(e).isValid())
      ? Lt({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function rv(e) {
    return this.from(Fe(), e);
  }
  function nv(e, t) {
    return this.isValid() && ((Rt(e) && e.isValid()) || Fe(e).isValid())
      ? Lt({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function iv(e) {
    return this.to(Fe(), e);
  }
  function Bd(e) {
    var t;
    return e === void 0
      ? this._locale._abbr
      : ((t = cr(e)), t != null && (this._locale = t), this);
  }
  var jd = St(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function Yd() {
    return this._locale;
  }
  var Ii = 1e3,
    Xr = 60 * Ii,
    Ni = 60 * Xr,
    $d = (365 * 400 + 97) * 24 * Ni;
  function Jr(e, t) {
    return ((e % t) + t) % t;
  }
  function Ud(e, t, r) {
    return e < 100 && e >= 0
      ? new Date(e + 400, t, r) - $d
      : new Date(e, t, r).valueOf();
  }
  function zd(e, t, r) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - $d : Date.UTC(e, t, r);
  }
  function ov(e) {
    var t, r;
    if (((e = kt(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((r = this._isUTC ? zd : Ud), e)) {
      case "year":
        t = r(this.year(), 0, 1);
        break;
      case "quarter":
        t = r(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case "month":
        t = r(this.year(), this.month(), 1);
        break;
      case "week":
        t = r(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = r(this.year(), this.month(), this.date());
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t -= Jr(t + (this._isUTC ? 0 : this.utcOffset() * Xr), Ni));
        break;
      case "minute":
        (t = this._d.valueOf()), (t -= Jr(t, Xr));
        break;
      case "second":
        (t = this._d.valueOf()), (t -= Jr(t, Ii));
        break;
    }
    return this._d.setTime(t), X.updateOffset(this, !0), this;
  }
  function av(e) {
    var t, r;
    if (((e = kt(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((r = this._isUTC ? zd : Ud), e)) {
      case "year":
        t = r(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
        break;
      case "month":
        t = r(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t =
          r(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
        break;
      case "day":
      case "date":
        t = r(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t += Ni - Jr(t + (this._isUTC ? 0 : this.utcOffset() * Xr), Ni) - 1);
        break;
      case "minute":
        (t = this._d.valueOf()), (t += Xr - Jr(t, Xr) - 1);
        break;
      case "second":
        (t = this._d.valueOf()), (t += Ii - Jr(t, Ii) - 1);
        break;
    }
    return this._d.setTime(t), X.updateOffset(this, !0), this;
  }
  function sv() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function lv() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function cv() {
    return new Date(this.valueOf());
  }
  function uv() {
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
  function dv() {
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
  function fv() {
    return this.isValid() ? this.toISOString() : null;
  }
  function hv() {
    return Rs(this);
  }
  function pv() {
    return yr({}, me(this));
  }
  function mv() {
    return me(this).overflow;
  }
  function gv() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  ae("N", 0, 0, "eraAbbr");
  ae("NN", 0, 0, "eraAbbr");
  ae("NNN", 0, 0, "eraAbbr");
  ae("NNNN", 0, 0, "eraName");
  ae("NNNNN", 0, 0, "eraNarrow");
  ae("y", ["y", 1], "yo", "eraYear");
  ae("y", ["yy", 2], 0, "eraYear");
  ae("y", ["yyy", 3], 0, "eraYear");
  ae("y", ["yyyy", 4], 0, "eraYear");
  ee("N", Ks);
  ee("NN", Ks);
  ee("NNN", Ks);
  ee("NNNN", Tv);
  ee("NNNNN", Dv);
  Me(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? (me(r).era = i) : (me(r).invalidEra = e);
  });
  ee("y", dn);
  ee("yy", dn);
  ee("yyy", dn);
  ee("yyyy", dn);
  ee("yo", Av);
  Me(["y", "yy", "yyy", "yyyy"], et);
  Me(["yo"], function (e, t, r, n) {
    var i;
    r._locale._eraYearOrdinalRegex &&
      (i = e.match(r._locale._eraYearOrdinalRegex)),
      r._locale.eraYearOrdinalParse
        ? (t[et] = r._locale.eraYearOrdinalParse(e, i))
        : (t[et] = parseInt(e, 10));
  });
  function vv(e, t) {
    var r,
      n,
      i,
      o = this._eras || cr("en")._eras;
    for (r = 0, n = o.length; r < n; ++r) {
      switch (typeof o[r].since) {
        case "string":
          (i = X(o[r].since).startOf("day")), (o[r].since = i.valueOf());
          break;
      }
      switch (typeof o[r].until) {
        case "undefined":
          o[r].until = 1 / 0;
          break;
        case "string":
          (i = X(o[r].until).startOf("day").valueOf()),
            (o[r].until = i.valueOf());
          break;
      }
    }
    return o;
  }
  function yv(e, t, r) {
    var n,
      i,
      o = this.eras(),
      a,
      s,
      l;
    for (e = e.toUpperCase(), n = 0, i = o.length; n < i; ++n)
      if (
        ((a = o[n].name.toUpperCase()),
        (s = o[n].abbr.toUpperCase()),
        (l = o[n].narrow.toUpperCase()),
        r)
      )
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (s === e) return o[n];
            break;
          case "NNNN":
            if (a === e) return o[n];
            break;
          case "NNNNN":
            if (l === e) return o[n];
            break;
        }
      else if ([a, s, l].indexOf(e) >= 0) return o[n];
  }
  function bv(e, t) {
    var r = e.since <= e.until ? 1 : -1;
    return t === void 0
      ? X(e.since).year()
      : X(e.since).year() + (t - e.offset) * r;
  }
  function xv() {
    var e,
      t,
      r,
      n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf("day").valueOf()),
        (n[e].since <= r && r <= n[e].until) ||
          (n[e].until <= r && r <= n[e].since))
      )
        return n[e].name;
    return "";
  }
  function wv() {
    var e,
      t,
      r,
      n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf("day").valueOf()),
        (n[e].since <= r && r <= n[e].until) ||
          (n[e].until <= r && r <= n[e].since))
      )
        return n[e].narrow;
    return "";
  }
  function _v() {
    var e,
      t,
      r,
      n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf("day").valueOf()),
        (n[e].since <= r && r <= n[e].until) ||
          (n[e].until <= r && r <= n[e].since))
      )
        return n[e].abbr;
    return "";
  }
  function Sv() {
    var e,
      t,
      r,
      n,
      i = this.localeData().eras();
    for (e = 0, t = i.length; e < t; ++e)
      if (
        ((r = i[e].since <= i[e].until ? 1 : -1),
        (n = this.clone().startOf("day").valueOf()),
        (i[e].since <= n && n <= i[e].until) ||
          (i[e].until <= n && n <= i[e].since))
      )
        return (this.year() - X(i[e].since).year()) * r + i[e].offset;
    return this.year();
  }
  function kv(e) {
    return (
      Te(this, "_erasNameRegex") || Xs.call(this),
      e ? this._erasNameRegex : this._erasRegex
    );
  }
  function Ev(e) {
    return (
      Te(this, "_erasAbbrRegex") || Xs.call(this),
      e ? this._erasAbbrRegex : this._erasRegex
    );
  }
  function Cv(e) {
    return (
      Te(this, "_erasNarrowRegex") || Xs.call(this),
      e ? this._erasNarrowRegex : this._erasRegex
    );
  }
  function Ks(e, t) {
    return t.erasAbbrRegex(e);
  }
  function Tv(e, t) {
    return t.erasNameRegex(e);
  }
  function Dv(e, t) {
    return t.erasNarrowRegex(e);
  }
  function Av(e, t) {
    return t._eraYearOrdinalRegex || dn;
  }
  function Xs() {
    var e = [],
      t = [],
      r = [],
      n = [],
      i,
      o,
      a = this.eras();
    for (i = 0, o = a.length; i < o; ++i)
      t.push(ut(a[i].name)),
        e.push(ut(a[i].abbr)),
        r.push(ut(a[i].narrow)),
        n.push(ut(a[i].name)),
        n.push(ut(a[i].abbr)),
        n.push(ut(a[i].narrow));
    (this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
  }
  ae(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  ae(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function io(e, t) {
    ae(0, [e, e.length], 0, t);
  }
  io("gggg", "weekYear");
  io("ggggg", "weekYear");
  io("GGGG", "isoWeekYear");
  io("GGGGG", "isoWeekYear");
  tt("weekYear", "gg");
  tt("isoWeekYear", "GG");
  rt("weekYear", 1);
  rt("isoWeekYear", 1);
  ee("G", Qi);
  ee("g", Qi);
  ee("GG", Be, mt);
  ee("gg", Be, mt);
  ee("GGGG", Ys, js);
  ee("gggg", Ys, js);
  ee("GGGGG", Ji, Ki);
  ee("ggggg", Ji, Ki);
  Gn(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, r, n) {
    t[n.substr(0, 2)] = be(e);
  });
  Gn(["gg", "GG"], function (e, t, r, n) {
    t[n] = X.parseTwoDigitYear(e);
  });
  function Ov(e) {
    return Hd.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function Mv(e) {
    return Hd.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function Iv() {
    return ir(this.year(), 1, 4);
  }
  function Nv() {
    return ir(this.isoWeekYear(), 1, 4);
  }
  function Rv() {
    var e = this.localeData()._week;
    return ir(this.year(), e.dow, e.doy);
  }
  function Lv() {
    var e = this.localeData()._week;
    return ir(this.weekYear(), e.dow, e.doy);
  }
  function Hd(e, t, r, n, i) {
    var o;
    return e == null
      ? Nn(this, n, i).year
      : ((o = ir(e, n, i)), t > o && (t = o), Pv.call(this, e, t, r, n, i));
  }
  function Pv(e, t, r, n, i) {
    var o = Sd(e, t, r, n, i),
      a = In(o.year, 0, o.dayOfYear);
    return (
      this.year(a.getUTCFullYear()),
      this.month(a.getUTCMonth()),
      this.date(a.getUTCDate()),
      this
    );
  }
  ae("Q", 0, "Qo", "quarter");
  tt("quarter", "Q");
  rt("quarter", 7);
  ee("Q", hd);
  Me("Q", function (e, t) {
    t[tr] = (be(e) - 1) * 3;
  });
  function Fv(e) {
    return e == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((e - 1) * 3 + (this.month() % 3));
  }
  ae("D", ["DD", 2], "Do", "date");
  tt("date", "D");
  rt("date", 9);
  ee("D", Be);
  ee("DD", Be, mt);
  ee("Do", function (e, t) {
    return e
      ? t._dayOfMonthOrdinalParse || t._ordinalParse
      : t._dayOfMonthOrdinalParseLenient;
  });
  Me(["D", "DD"], Bt);
  Me("Do", function (e, t) {
    t[Bt] = be(e.match(Be)[0]);
  });
  var Wd = un("Date", !0);
  ae("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  tt("dayOfYear", "DDD");
  rt("dayOfYear", 4);
  ee("DDD", Xi);
  ee("DDDD", pd);
  Me(["DDD", "DDDD"], function (e, t, r) {
    r._dayOfYear = be(e);
  });
  function Bv(e) {
    var t =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  ae("m", ["mm", 2], 0, "minute");
  tt("minute", "m");
  rt("minute", 14);
  ee("m", Be);
  ee("mm", Be, mt);
  Me(["m", "mm"], Ot);
  var jv = un("Minutes", !1);
  ae("s", ["ss", 2], 0, "second");
  tt("second", "s");
  rt("second", 15);
  ee("s", Be);
  ee("ss", Be, mt);
  Me(["s", "ss"], rr);
  var Yv = un("Seconds", !1);
  ae("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  ae(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  ae(0, ["SSS", 3], 0, "millisecond");
  ae(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  ae(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  ae(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });
  ae(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });
  ae(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });
  ae(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });
  tt("millisecond", "ms");
  rt("millisecond", 16);
  ee("S", Xi, hd);
  ee("SS", Xi, mt);
  ee("SSS", Xi, pd);
  var br, Vd;
  for (br = "SSSS"; br.length <= 9; br += "S") ee(br, dn);
  function $v(e, t) {
    t[Dr] = be(("0." + e) * 1e3);
  }
  for (br = "S"; br.length <= 9; br += "S") Me(br, $v);
  Vd = un("Milliseconds", !1);
  ae("z", 0, 0, "zoneAbbr");
  ae("zz", 0, 0, "zoneName");
  function Uv() {
    return this._isUTC ? "UTC" : "";
  }
  function zv() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var W = Vn.prototype;
  W.add = Lg;
  W.calendar = Ug;
  W.clone = zg;
  W.diff = Kg;
  W.endOf = av;
  W.format = ev;
  W.from = tv;
  W.fromNow = rv;
  W.to = nv;
  W.toNow = iv;
  W.get = Wm;
  W.invalidAt = mv;
  W.isAfter = Hg;
  W.isBefore = Wg;
  W.isBetween = Vg;
  W.isSame = qg;
  W.isSameOrAfter = Gg;
  W.isSameOrBefore = Zg;
  W.isValid = hv;
  W.lang = jd;
  W.locale = Bd;
  W.localeData = Yd;
  W.max = hg;
  W.min = fg;
  W.parsingFlags = pv;
  W.set = Vm;
  W.startOf = ov;
  W.subtract = Pg;
  W.toArray = uv;
  W.toObject = dv;
  W.toDate = cv;
  W.toISOString = Jg;
  W.inspect = Qg;
  typeof Symbol < "u" &&
    Symbol.for != null &&
    (W[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    });
  W.toJSON = fv;
  W.toString = Xg;
  W.unix = lv;
  W.valueOf = sv;
  W.creationData = gv;
  W.eraName = xv;
  W.eraNarrow = wv;
  W.eraAbbr = _v;
  W.eraYear = Sv;
  W.year = _d;
  W.isLeapYear = d1;
  W.weekYear = Ov;
  W.isoWeekYear = Mv;
  W.quarter = W.quarters = Fv;
  W.month = xd;
  W.daysInMonth = l1;
  W.week = W.weeks = v1;
  W.isoWeek = W.isoWeeks = y1;
  W.weeksInYear = Rv;
  W.weeksInWeekYear = Lv;
  W.isoWeeksInYear = Iv;
  W.isoWeeksInISOWeekYear = Nv;
  W.date = Wd;
  W.day = W.days = M1;
  W.weekday = I1;
  W.isoWeekday = N1;
  W.dayOfYear = Bv;
  W.hour = W.hours = Y1;
  W.minute = W.minutes = jv;
  W.second = W.seconds = Yv;
  W.millisecond = W.milliseconds = Vd;
  W.utcOffset = _g;
  W.utc = kg;
  W.local = Eg;
  W.parseZone = Cg;
  W.hasAlignedHourOffset = Tg;
  W.isDST = Dg;
  W.isLocal = Og;
  W.isUtcOffset = Mg;
  W.isUtc = Rd;
  W.isUTC = Rd;
  W.zoneAbbr = Uv;
  W.zoneName = zv;
  W.dates = St("dates accessor is deprecated. Use date instead.", Wd);
  W.months = St("months accessor is deprecated. Use month instead", xd);
  W.years = St("years accessor is deprecated. Use year instead", _d);
  W.zone = St(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    Sg
  );
  W.isDSTShifted = St(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    Ag
  );
  function Hv(e) {
    return Fe(e * 1e3);
  }
  function Wv() {
    return Fe.apply(null, arguments).parseZone();
  }
  function qd(e) {
    return e;
  }
  var De = Ps.prototype;
  De.calendar = Mm;
  De.longDateFormat = Lm;
  De.invalidDate = Fm;
  De.ordinal = Ym;
  De.preparse = qd;
  De.postformat = qd;
  De.relativeTime = Um;
  De.pastFuture = zm;
  De.set = Am;
  De.eras = vv;
  De.erasParse = yv;
  De.erasConvertYear = bv;
  De.erasAbbrRegex = Ev;
  De.erasNameRegex = kv;
  De.erasNarrowRegex = Cv;
  De.months = i1;
  De.monthsShort = o1;
  De.monthsParse = s1;
  De.monthsRegex = u1;
  De.monthsShortRegex = c1;
  De.week = h1;
  De.firstDayOfYear = g1;
  De.firstDayOfWeek = m1;
  De.weekdays = C1;
  De.weekdaysMin = D1;
  De.weekdaysShort = T1;
  De.weekdaysParse = O1;
  De.weekdaysRegex = R1;
  De.weekdaysShortRegex = L1;
  De.weekdaysMinRegex = P1;
  De.isPM = B1;
  De.meridiem = $1;
  function Ri(e, t, r, n) {
    var i = cr(),
      o = Wt().set(n, t);
    return i[r](o, e);
  }
  function Gd(e, t, r) {
    if ((ar(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
      return Ri(e, t, r, "month");
    var n,
      i = [];
    for (n = 0; n < 12; n++) i[n] = Ri(e, n, r, "month");
    return i;
  }
  function Js(e, t, r, n) {
    typeof e == "boolean"
      ? (ar(t) && ((r = t), (t = void 0)), (t = t || ""))
      : ((t = e),
        (r = t),
        (e = !1),
        ar(t) && ((r = t), (t = void 0)),
        (t = t || ""));
    var i = cr(),
      o = e ? i._week.dow : 0,
      a,
      s = [];
    if (r != null) return Ri(t, (r + o) % 7, n, "day");
    for (a = 0; a < 7; a++) s[a] = Ri(t, (a + o) % 7, n, "day");
    return s;
  }
  function Vv(e, t) {
    return Gd(e, t, "months");
  }
  function qv(e, t) {
    return Gd(e, t, "monthsShort");
  }
  function Gv(e, t, r) {
    return Js(e, t, r, "weekdays");
  }
  function Zv(e, t, r) {
    return Js(e, t, r, "weekdaysShort");
  }
  function Kv(e, t, r) {
    return Js(e, t, r, "weekdaysMin");
  }
  wr("en", {
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
        r =
          be((e % 100) / 10) === 1
            ? "th"
            : t === 1
            ? "st"
            : t === 2
            ? "nd"
            : t === 3
            ? "rd"
            : "th";
      return e + r;
    },
  });
  X.lang = St("moment.lang is deprecated. Use moment.locale instead.", wr);
  X.langData = St(
    "moment.langData is deprecated. Use moment.localeData instead.",
    cr
  );
  var Kt = Math.abs;
  function Xv() {
    var e = this._data;
    return (
      (this._milliseconds = Kt(this._milliseconds)),
      (this._days = Kt(this._days)),
      (this._months = Kt(this._months)),
      (e.milliseconds = Kt(e.milliseconds)),
      (e.seconds = Kt(e.seconds)),
      (e.minutes = Kt(e.minutes)),
      (e.hours = Kt(e.hours)),
      (e.months = Kt(e.months)),
      (e.years = Kt(e.years)),
      this
    );
  }
  function Zd(e, t, r, n) {
    var i = Lt(t, r);
    return (
      (e._milliseconds += n * i._milliseconds),
      (e._days += n * i._days),
      (e._months += n * i._months),
      e._bubble()
    );
  }
  function Jv(e, t) {
    return Zd(this, e, t, 1);
  }
  function Qv(e, t) {
    return Zd(this, e, t, -1);
  }
  function Zc(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function ey() {
    var e = this._milliseconds,
      t = this._days,
      r = this._months,
      n = this._data,
      i,
      o,
      a,
      s,
      l;
    return (
      (e >= 0 && t >= 0 && r >= 0) ||
        (e <= 0 && t <= 0 && r <= 0) ||
        ((e += Zc(Wa(r) + t) * 864e5), (t = 0), (r = 0)),
      (n.milliseconds = e % 1e3),
      (i = yt(e / 1e3)),
      (n.seconds = i % 60),
      (o = yt(i / 60)),
      (n.minutes = o % 60),
      (a = yt(o / 60)),
      (n.hours = a % 24),
      (t += yt(a / 24)),
      (l = yt(Kd(t))),
      (r += l),
      (t -= Zc(Wa(l))),
      (s = yt(r / 12)),
      (r %= 12),
      (n.days = t),
      (n.months = r),
      (n.years = s),
      this
    );
  }
  function Kd(e) {
    return (e * 4800) / 146097;
  }
  function Wa(e) {
    return (e * 146097) / 4800;
  }
  function ty(e) {
    if (!this.isValid()) return NaN;
    var t,
      r,
      n = this._milliseconds;
    if (((e = kt(e)), e === "month" || e === "quarter" || e === "year"))
      switch (((t = this._days + n / 864e5), (r = this._months + Kd(t)), e)) {
        case "month":
          return r;
        case "quarter":
          return r / 3;
        case "year":
          return r / 12;
      }
    else
      switch (((t = this._days + Math.round(Wa(this._months))), e)) {
        case "week":
          return t / 7 + n / 6048e5;
        case "day":
          return t + n / 864e5;
        case "hour":
          return t * 24 + n / 36e5;
        case "minute":
          return t * 1440 + n / 6e4;
        case "second":
          return t * 86400 + n / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + n;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function ry() {
    return this.isValid()
      ? this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          be(this._months / 12) * 31536e6
      : NaN;
  }
  function ur(e) {
    return function () {
      return this.as(e);
    };
  }
  var ny = ur("ms"),
    iy = ur("s"),
    oy = ur("m"),
    ay = ur("h"),
    sy = ur("d"),
    ly = ur("w"),
    cy = ur("M"),
    uy = ur("Q"),
    dy = ur("y");
  function fy() {
    return Lt(this);
  }
  function hy(e) {
    return (e = kt(e)), this.isValid() ? this[e + "s"]() : NaN;
  }
  function Br(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var py = Br("milliseconds"),
    my = Br("seconds"),
    gy = Br("minutes"),
    vy = Br("hours"),
    yy = Br("days"),
    by = Br("months"),
    xy = Br("years");
  function wy() {
    return yt(this.days() / 7);
  }
  var Qt = Math.round,
    qr = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function _y(e, t, r, n, i) {
    return i.relativeTime(t || 1, !!r, e, n);
  }
  function Sy(e, t, r, n) {
    var i = Lt(e).abs(),
      o = Qt(i.as("s")),
      a = Qt(i.as("m")),
      s = Qt(i.as("h")),
      l = Qt(i.as("d")),
      c = Qt(i.as("M")),
      u = Qt(i.as("w")),
      g = Qt(i.as("y")),
      h =
        (o <= r.ss && ["s", o]) ||
        (o < r.s && ["ss", o]) ||
        (a <= 1 && ["m"]) ||
        (a < r.m && ["mm", a]) ||
        (s <= 1 && ["h"]) ||
        (s < r.h && ["hh", s]) ||
        (l <= 1 && ["d"]) ||
        (l < r.d && ["dd", l]);
    return (
      r.w != null && (h = h || (u <= 1 && ["w"]) || (u < r.w && ["ww", u])),
      (h = h ||
        (c <= 1 && ["M"]) ||
        (c < r.M && ["MM", c]) ||
        (g <= 1 && ["y"]) || ["yy", g]),
      (h[2] = t),
      (h[3] = +e > 0),
      (h[4] = n),
      _y.apply(null, h)
    );
  }
  function ky(e) {
    return e === void 0 ? Qt : typeof e == "function" ? ((Qt = e), !0) : !1;
  }
  function Ey(e, t) {
    return qr[e] === void 0
      ? !1
      : t === void 0
      ? qr[e]
      : ((qr[e] = t), e === "s" && (qr.ss = t - 1), !0);
  }
  function Cy(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var r = !1,
      n = qr,
      i,
      o;
    return (
      typeof e == "object" && ((t = e), (e = !1)),
      typeof e == "boolean" && (r = e),
      typeof t == "object" &&
        ((n = Object.assign({}, qr, t)),
        t.s != null && t.ss == null && (n.ss = t.s - 1)),
      (i = this.localeData()),
      (o = Sy(this, !r, n, i)),
      r && (o = i.pastFuture(+this, o)),
      i.postformat(o)
    );
  }
  var ma = Math.abs;
  function $r(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function oo() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = ma(this._milliseconds) / 1e3,
      t = ma(this._days),
      r = ma(this._months),
      n,
      i,
      o,
      a,
      s = this.asSeconds(),
      l,
      c,
      u,
      g;
    return s
      ? ((n = yt(e / 60)),
        (i = yt(n / 60)),
        (e %= 60),
        (n %= 60),
        (o = yt(r / 12)),
        (r %= 12),
        (a = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
        (l = s < 0 ? "-" : ""),
        (c = $r(this._months) !== $r(s) ? "-" : ""),
        (u = $r(this._days) !== $r(s) ? "-" : ""),
        (g = $r(this._milliseconds) !== $r(s) ? "-" : ""),
        l +
          "P" +
          (o ? c + o + "Y" : "") +
          (r ? c + r + "M" : "") +
          (t ? u + t + "D" : "") +
          (i || n || e ? "T" : "") +
          (i ? g + i + "H" : "") +
          (n ? g + n + "M" : "") +
          (e ? g + a + "S" : ""))
      : "P0D";
  }
  var ke = no.prototype;
  ke.isValid = yg;
  ke.abs = Xv;
  ke.add = Jv;
  ke.subtract = Qv;
  ke.as = ty;
  ke.asMilliseconds = ny;
  ke.asSeconds = iy;
  ke.asMinutes = oy;
  ke.asHours = ay;
  ke.asDays = sy;
  ke.asWeeks = ly;
  ke.asMonths = cy;
  ke.asQuarters = uy;
  ke.asYears = dy;
  ke.valueOf = ry;
  ke._bubble = ey;
  ke.clone = fy;
  ke.get = hy;
  ke.milliseconds = py;
  ke.seconds = my;
  ke.minutes = gy;
  ke.hours = vy;
  ke.days = yy;
  ke.weeks = wy;
  ke.months = by;
  ke.years = xy;
  ke.humanize = Cy;
  ke.toISOString = oo;
  ke.toString = oo;
  ke.toJSON = oo;
  ke.locale = Bd;
  ke.localeData = Yd;
  ke.toIsoString = St(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    oo
  );
  ke.lang = jd;
  ae("X", 0, 0, "unix");
  ae("x", 0, 0, "valueOf");
  ee("x", Qi);
  ee("X", Gm);
  Me("X", function (e, t, r) {
    r._d = new Date(parseFloat(e) * 1e3);
  });
  Me("x", function (e, t, r) {
    r._d = new Date(be(e));
  }); //! moment.js
  X.version = "2.29.4";
  Tm(Fe);
  X.fn = W;
  X.min = pg;
  X.max = mg;
  X.now = gg;
  X.utc = Wt;
  X.unix = Hv;
  X.months = Vv;
  X.isDate = Wn;
  X.locale = wr;
  X.invalid = Gi;
  X.duration = Lt;
  X.isMoment = Rt;
  X.weekdays = Gv;
  X.parseZone = Wv;
  X.localeData = cr;
  X.isDuration = mi;
  X.monthsShort = qv;
  X.weekdaysMin = Kv;
  X.defineLocale = Hs;
  X.updateLocale = W1;
  X.locales = V1;
  X.weekdaysShort = Zv;
  X.normalizeUnits = kt;
  X.relativeTimeRounding = ky;
  X.relativeTimeThreshold = Ey;
  X.calendarFormat = $g;
  X.prototype = W;
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
  var Va = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      var i = "1.0.36",
        o = "",
        a = "?",
        s = "function",
        l = "undefined",
        c = "object",
        u = "string",
        g = "major",
        h = "model",
        v = "name",
        f = "type",
        d = "vendor",
        y = "version",
        w = "architecture",
        p = "console",
        m = "mobile",
        b = "tablet",
        _ = "smarttv",
        S = "wearable",
        k = "embedded",
        E = 350,
        D = "Amazon",
        C = "Apple",
        T = "ASUS",
        A = "BlackBerry",
        M = "Browser",
        j = "Chrome",
        z = "Edge",
        $ = "Firefox",
        Y = "Google",
        q = "Huawei",
        F = "LG",
        L = "Microsoft",
        N = "Motorola",
        P = "Opera",
        I = "Samsung",
        O = "Sharp",
        V = "Sony",
        J = "Xiaomi",
        se = "Zebra",
        H = "Facebook",
        he = "Chromium OS",
        Ye = "Mac OS",
        nt = function (ie, oe) {
          var ne = {};
          for (var fe in ie)
            oe[fe] && oe[fe].length % 2 === 0
              ? (ne[fe] = oe[fe].concat(ie[fe]))
              : (ne[fe] = ie[fe]);
          return ne;
        },
        Ue = function (ie) {
          for (var oe = {}, ne = 0; ne < ie.length; ne++)
            oe[ie[ne].toUpperCase()] = ie[ne];
          return oe;
        },
        Ve = function (ie, oe) {
          return typeof ie === u ? Oe(oe).indexOf(Oe(ie)) !== -1 : !1;
        },
        Oe = function (ie) {
          return ie.toLowerCase();
        },
        Gt = function (ie) {
          return typeof ie === u ? ie.replace(/[^\d\.]/g, o).split(".")[0] : n;
        },
        it = function (ie, oe) {
          if (typeof ie === u)
            return (
              (ie = ie.replace(/^\s\s*/, o)),
              typeof oe === l ? ie : ie.substring(0, E)
            );
        },
        B = function (ie, oe) {
          for (var ne = 0, fe, st, qe, pe, le, gt; ne < oe.length && !le; ) {
            var Yr = oe[ne],
              pn = oe[ne + 1];
            for (fe = st = 0; fe < Yr.length && !le && Yr[fe]; )
              if (((le = Yr[fe++].exec(ie)), le))
                for (qe = 0; qe < pn.length; qe++)
                  (gt = le[++st]),
                    (pe = pn[qe]),
                    typeof pe === c && pe.length > 0
                      ? pe.length === 2
                        ? typeof pe[1] == s
                          ? (this[pe[0]] = pe[1].call(this, gt))
                          : (this[pe[0]] = pe[1])
                        : pe.length === 3
                        ? typeof pe[1] === s && !(pe[1].exec && pe[1].test)
                          ? (this[pe[0]] = gt ? pe[1].call(this, gt, pe[2]) : n)
                          : (this[pe[0]] = gt ? gt.replace(pe[1], pe[2]) : n)
                        : pe.length === 4 &&
                          (this[pe[0]] = gt
                            ? pe[3].call(this, gt.replace(pe[1], pe[2]))
                            : n)
                      : (this[pe] = gt || n);
            ne += 2;
          }
        },
        K = function (ie, oe) {
          for (var ne in oe)
            if (typeof oe[ne] === c && oe[ne].length > 0) {
              for (var fe = 0; fe < oe[ne].length; fe++)
                if (Ve(oe[ne][fe], ie)) return ne === a ? n : ne;
            } else if (Ve(oe[ne], ie)) return ne === a ? n : ne;
          return ie;
        },
        G = {
          "1.0": "/8",
          1.2: "/1",
          1.3: "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/",
        },
        Z = {
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
            [y, [v, P + " Mini"]],
            [/\bopr\/([\w\.]+)/i],
            [y, [v, P]],
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
            [y, [v, $ + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [y, [v, P + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [y, [v, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [y, [v, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [y, [v, P + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [y, [v, "MIUI " + M]],
            [/fxios\/([-\w\.]+)/i],
            [y, [v, $]],
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
            [[v, H], y],
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
            [y, [v, j + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[v, j + " WebView"], y],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [y, [v, "Android " + M]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [v, y],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [y, [v, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [y, v],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [v, [y, K, G]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [v, y],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[v, "Netscape"], y],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [y, [v, $ + " Reality"]],
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
            [[w, Oe]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[w, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[w, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[w, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[w, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[w, /ower/, o, Oe]],
            [/(sun4\w)[;\)]/i],
            [[w, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[w, Oe]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [h, [d, I], [f, b]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [h, [d, I], [f, m]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [h, [d, C], [f, m]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [h, [d, C], [f, b]],
            [/(macintosh);/i],
            [h, [d, C]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [h, [d, O], [f, m]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [h, [d, q], [f, b]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [h, [d, q], [f, m]],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [h, /_/g, " "],
              [d, J],
              [f, m],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [h, /_/g, " "],
              [d, J],
              [f, b],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [h, [d, "OPPO"], [f, m]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [h, [d, "Vivo"], [f, m]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [h, [d, "Realme"], [f, m]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [h, [d, N], [f, m]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [h, [d, N], [f, b]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [h, [d, F], [f, b]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [h, [d, F], [f, m]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [h, [d, "Lenovo"], [f, b]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [h, /_/g, " "],
              [d, "Nokia"],
              [f, m],
            ],
            [/(pixel c)\b/i],
            [h, [d, Y], [f, b]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [h, [d, Y], [f, m]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [h, [d, V], [f, m]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [h, "Xperia Tablet"],
              [d, V],
              [f, b],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [h, [d, "OnePlus"], [f, m]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [h, [d, D], [f, b]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [h, /(.+)/g, "Fire Phone $1"],
              [d, D],
              [f, m],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [h, d, [f, b]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [h, [d, A], [f, m]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [h, [d, T], [f, b]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [h, [d, T], [f, m]],
            [/(nexus 9)/i],
            [h, [d, "HTC"], [f, b]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [d, [h, /_/g, " "], [f, m]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [h, [d, "Acer"], [f, b]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [h, [d, "Meizu"], [f, m]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [d, h, [f, m]],
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
            [h, [d, L], [f, b]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [h, [d, "Fairphone"], [f, m]],
            [/(u304aa)/i],
            [h, [d, "AT&T"], [f, m]],
            [/\bsie-(\w*)/i],
            [h, [d, "Siemens"], [f, m]],
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
            [h, [d, "ZTE"], [f, m]],
            [/\b(gen\d{3}) b.+49h/i],
            [h, [d, "Swiss"], [f, m]],
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
            [[d, "Voice"], h, [f, m]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[d, "LvTel"], h, [f, m]],
            [/\b(ph-1) /i],
            [h, [d, "Essential"], [f, m]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [h, [d, "Envizen"], [f, b]],
            [/\b(trio[-\w\. ]+) b/i],
            [h, [d, "MachSpeed"], [f, b]],
            [/\btu_(1491) b/i],
            [h, [d, "Rotor"], [f, b]],
            [/(shield[\w ]+) b/i],
            [h, [d, "Nvidia"], [f, b]],
            [/(sprint) (\w+)/i],
            [d, h, [f, m]],
            [/(kin\.[onetw]{3})/i],
            [
              [h, /\./g, " "],
              [d, L],
              [f, m],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [h, [d, se], [f, b]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [h, [d, se], [f, m]],
            [/smart-tv.+(samsung)/i],
            [d, [f, _]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [h, /^/, "SmartTV"],
              [d, I],
              [f, _],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [d, F],
              [f, _],
            ],
            [/(apple) ?tv/i],
            [d, [h, C + " TV"], [f, _]],
            [/crkey/i],
            [
              [h, j + "cast"],
              [d, Y],
              [f, _],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [h, [d, D], [f, _]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [h, [d, O], [f, _]],
            [/(bravia[\w ]+)( bui|\))/i],
            [h, [d, V], [f, _]],
            [/(mitv-\w{5}) bui/i],
            [h, [d, J], [f, _]],
            [/Hbbtv.*(technisat) (.*);/i],
            [d, h, [f, _]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [d, it],
              [h, it],
              [f, _],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[f, _]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [d, h, [f, p]],
            [/droid.+; (shield) bui/i],
            [h, [d, "Nvidia"], [f, p]],
            [/(playstation [345portablevi]+)/i],
            [h, [d, V], [f, p]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [h, [d, L], [f, p]],
            [/((pebble))app/i],
            [d, h, [f, S]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [h, [d, C], [f, S]],
            [/droid.+; (glass) \d/i],
            [h, [d, Y], [f, S]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [h, [d, se], [f, S]],
            [/(quest( 2| pro)?)/i],
            [h, [d, H], [f, S]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [d, [f, k]],
            [/(aeobc)\b/i],
            [h, [d, D], [f, k]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [h, [f, m]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [h, [f, b]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[f, b]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[f, m]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [h, [d, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [y, [v, z + "HTML"]],
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
            [v, [y, K, Z]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [v, "Windows"],
              [y, K, Z],
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
            [y, [v, $ + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [y, [v, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [y, [v, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [y, [v, j + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[v, he], y],
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
        re = function (ie, oe) {
          if ((typeof ie === c && ((oe = ie), (ie = n)), !(this instanceof re)))
            return new re(ie, oe).getResult();
          var ne = typeof r !== l && r.navigator ? r.navigator : n,
            fe = ie || (ne && ne.userAgent ? ne.userAgent : o),
            st = ne && ne.userAgentData ? ne.userAgentData : n,
            qe = oe ? nt(te, oe) : te,
            pe = ne && ne.userAgent == fe;
          return (
            (this.getBrowser = function () {
              var le = {};
              return (
                (le[v] = n),
                (le[y] = n),
                B.call(le, fe, qe.browser),
                (le[g] = Gt(le[y])),
                pe &&
                  ne &&
                  ne.brave &&
                  typeof ne.brave.isBrave == s &&
                  (le[v] = "Brave"),
                le
              );
            }),
            (this.getCPU = function () {
              var le = {};
              return (le[w] = n), B.call(le, fe, qe.cpu), le;
            }),
            (this.getDevice = function () {
              var le = {};
              return (
                (le[d] = n),
                (le[h] = n),
                (le[f] = n),
                B.call(le, fe, qe.device),
                pe && !le[f] && st && st.mobile && (le[f] = m),
                pe &&
                  le[h] == "Macintosh" &&
                  ne &&
                  typeof ne.standalone !== l &&
                  ne.maxTouchPoints &&
                  ne.maxTouchPoints > 2 &&
                  ((le[h] = "iPad"), (le[f] = b)),
                le
              );
            }),
            (this.getEngine = function () {
              var le = {};
              return (le[v] = n), (le[y] = n), B.call(le, fe, qe.engine), le;
            }),
            (this.getOS = function () {
              var le = {};
              return (
                (le[v] = n),
                (le[y] = n),
                B.call(le, fe, qe.os),
                pe &&
                  !le[v] &&
                  st &&
                  st.platform != "Unknown" &&
                  (le[v] = st.platform
                    .replace(/chrome os/i, he)
                    .replace(/macos/i, Ye)),
                le
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
            (this.setUA = function (le) {
              return (
                (fe = typeof le === u && le.length > E ? it(le, E) : le), this
              );
            }),
            this.setUA(fe),
            this
          );
        };
      (re.VERSION = i),
        (re.BROWSER = Ue([v, y, g])),
        (re.CPU = Ue([w])),
        (re.DEVICE = Ue([h, d, f, p, m, _, b, S, k])),
        (re.ENGINE = re.OS = Ue([v, y])),
        e.exports && (t = e.exports = re),
        (t.UAParser = re);
      var ce = typeof r !== l && (r.jQuery || r.Zepto);
      if (ce && !ce.ua) {
        var ge = new re();
        (ce.ua = ge.getResult()),
          (ce.ua.get = function () {
            return ge.getUA();
          }),
          (ce.ua.set = function (ie) {
            ge.setUA(ie);
            var oe = ge.getResult();
            for (var ne in oe) ce.ua[ne] = oe[ne];
          });
      }
    })(typeof window == "object" ? window : ve);
  })(Va, Va.exports);
  var Ty = Va.exports;
  function Ln(e) {
    "@babel/helpers - typeof";
    return (
      (Ln =
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
      Ln(e)
    );
  }
  function Dy(e, t) {
    if (Ln(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (Ln(n) !== "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Ay(e) {
    var t = Dy(e, "string");
    return Ln(t) === "symbol" ? t : String(t);
  }
  function Oy(e, t, r) {
    return (
      (t = Ay(t)),
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Kc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Xc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Kc(Object(r), !0).forEach(function (n) {
            Oy(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kc(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function Qe(e) {
    return (
      "Minified Redux error #" +
      e +
      "; visit https://redux.js.org/Errors?code=" +
      e +
      " for the full message or use the non-minified dev environment for full errors. "
    );
  }
  var Jc = (function () {
      return (
        (typeof Symbol == "function" && Symbol.observable) || "@@observable"
      );
    })(),
    ga = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    Li = {
      INIT: "@@redux/INIT" + ga(),
      REPLACE: "@@redux/REPLACE" + ga(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + ga();
      },
    };
  function My(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  }
  function Xd(e, t, r) {
    var n;
    if (
      (typeof t == "function" && typeof r == "function") ||
      (typeof r == "function" && typeof arguments[3] == "function")
    )
      throw new Error(Qe(0));
    if (
      (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
      typeof r < "u")
    ) {
      if (typeof r != "function") throw new Error(Qe(1));
      return r(Xd)(e, t);
    }
    if (typeof e != "function") throw new Error(Qe(2));
    var i = e,
      o = t,
      a = [],
      s = a,
      l = !1;
    function c() {
      s === a && (s = a.slice());
    }
    function u() {
      if (l) throw new Error(Qe(3));
      return o;
    }
    function g(d) {
      if (typeof d != "function") throw new Error(Qe(4));
      if (l) throw new Error(Qe(5));
      var y = !0;
      return (
        c(),
        s.push(d),
        function () {
          if (y) {
            if (l) throw new Error(Qe(6));
            (y = !1), c();
            var p = s.indexOf(d);
            s.splice(p, 1), (a = null);
          }
        }
      );
    }
    function h(d) {
      if (!My(d)) throw new Error(Qe(7));
      if (typeof d.type > "u") throw new Error(Qe(8));
      if (l) throw new Error(Qe(9));
      try {
        (l = !0), (o = i(o, d));
      } finally {
        l = !1;
      }
      for (var y = (a = s), w = 0; w < y.length; w++) {
        var p = y[w];
        p();
      }
      return d;
    }
    function v(d) {
      if (typeof d != "function") throw new Error(Qe(10));
      (i = d), h({ type: Li.REPLACE });
    }
    function f() {
      var d,
        y = g;
      return (
        (d = {
          subscribe: function (p) {
            if (typeof p != "object" || p === null) throw new Error(Qe(11));
            function m() {
              p.next && p.next(u());
            }
            m();
            var b = y(m);
            return { unsubscribe: b };
          },
        }),
        (d[Jc] = function () {
          return this;
        }),
        d
      );
    }
    return (
      h({ type: Li.INIT }),
      (n = { dispatch: h, subscribe: g, getState: u, replaceReducer: v }),
      (n[Jc] = f),
      n
    );
  }
  var Iy = Xd;
  function Ny(e) {
    Object.keys(e).forEach(function (t) {
      var r = e[t],
        n = r(void 0, { type: Li.INIT });
      if (typeof n > "u") throw new Error(Qe(12));
      if (typeof r(void 0, { type: Li.PROBE_UNKNOWN_ACTION() }) > "u")
        throw new Error(Qe(13));
    });
  }
  function Ry(e) {
    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
      var i = t[n];
      typeof e[i] == "function" && (r[i] = e[i]);
    }
    var o = Object.keys(r),
      a;
    try {
      Ny(r);
    } catch (s) {
      a = s;
    }
    return function (l, c) {
      if ((l === void 0 && (l = {}), a)) throw a;
      for (var u = !1, g = {}, h = 0; h < o.length; h++) {
        var v = o[h],
          f = r[v],
          d = l[v],
          y = f(d, c);
        if (typeof y > "u") throw (c && c.type, new Error(Qe(14)));
        (g[v] = y), (u = u || y !== d);
      }
      return (u = u || o.length !== Object.keys(l).length), u ? g : l;
    };
  }
  function Jd() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return t.length === 0
      ? function (n) {
          return n;
        }
      : t.length === 1
      ? t[0]
      : t.reduce(function (n, i) {
          return function () {
            return n(i.apply(void 0, arguments));
          };
        });
  }
  function Ly() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (n) {
      return function () {
        var i = n.apply(void 0, arguments),
          o = function () {
            throw new Error(Qe(15));
          },
          a = {
            getState: i.getState,
            dispatch: function () {
              return o.apply(void 0, arguments);
            },
          },
          s = t.map(function (l) {
            return l(a);
          });
        return (
          (o = Jd.apply(void 0, s)(i.dispatch)),
          Xc(Xc({}, i), {}, { dispatch: o })
        );
      };
    };
  }
  function Qd(e) {
    var t = function (n) {
      var i = n.dispatch,
        o = n.getState;
      return function (a) {
        return function (s) {
          return typeof s == "function" ? s(i, o, e) : a(s);
        };
      };
    };
    return t;
  }
  var ef = Qd();
  ef.withExtraArgument = Qd;
  const Py = ef;
  var Fy = { exports: {} };
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
    (function (r, n) {
      e.exports = n();
    })(window, function () {
      return (function (r) {
        var n = {};
        function i(o) {
          if (n[o]) return n[o].exports;
          var a = (n[o] = { i: o, l: !1, exports: {} });
          return r[o].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
        }
        return (
          (i.m = r),
          (i.c = n),
          (i.d = function (o, a, s) {
            i.o(o, a) ||
              Object.defineProperty(o, a, { enumerable: !0, get: s });
          }),
          (i.r = function (o) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(o, "__esModule", { value: !0 });
          }),
          (i.t = function (o, a) {
            if (
              (1 & a && (o = i(o)),
              8 & a || (4 & a && typeof o == "object" && o && o.__esModule))
            )
              return o;
            var s = Object.create(null);
            if (
              (i.r(s),
              Object.defineProperty(s, "default", { enumerable: !0, value: o }),
              2 & a && typeof o != "string")
            )
              for (var l in o)
                i.d(
                  s,
                  l,
                  function (c) {
                    return o[c];
                  }.bind(null, l)
                );
            return s;
          }),
          (i.n = function (o) {
            var a =
              o && o.__esModule
                ? function () {
                    return o.default;
                  }
                : function () {
                    return o;
                  };
            return i.d(a, "a", a), a;
          }),
          (i.o = function (o, a) {
            return Object.prototype.hasOwnProperty.call(o, a);
          }),
          (i.p = ""),
          i((i.s = 0))
        );
      })([
        function (r, n, i) {
          Object.defineProperty(n, "__esModule", { value: !0 }),
            i(1),
            Object.entries ||
              (Object.entries = function (o) {
                for (
                  var a = Object.keys(o), s = a.length, l = new Array(s);
                  s;

                )
                  l[(s -= 1)] = [a[s], o[a[s]]];
                return l;
              }),
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector),
            Element.prototype.closest ||
              (Element.prototype.closest = function (o) {
                var a = this;
                do {
                  if (a.matches(o)) return a;
                  a = a.parentElement || a.parentNode;
                } while (a !== null && a.nodeType === 1);
                return null;
              }),
            String.prototype.includes ||
              (String.prototype.includes = function (o, a) {
                if (o instanceof RegExp)
                  throw TypeError("first argument must not be a RegExp");
                return a === void 0 && (a = 0), this.indexOf(o, a) !== -1;
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
                    var a = Array.prototype.slice.call(arguments),
                      s = document.createDocumentFragment();
                    a.forEach(function (l) {
                      var c = l instanceof Node;
                      s.appendChild(c ? l : document.createTextNode(String(l)));
                    }),
                      this.insertBefore(s, this.firstChild);
                  },
                });
            });
        },
        function (r, n) {
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
                a = [],
                s = document,
                l = !1;
              document.addEventListener("DOMContentLoaded", function () {
                l = !0;
              }),
                "classList" in Element.prototype ||
                  L("classList", HTMLElement.prototype, Element.prototype),
                "innerHTML" in Element.prototype ||
                  L("innerHTML", HTMLElement.prototype, Element.prototype),
                "runtimeStyle" in Element.prototype ||
                  L("runtimeStyle", HTMLElement.prototype, Element.prototype),
                "sheet" in SVGStyleElement.prototype ||
                  Object.defineProperty(SVGStyleElement.prototype, "sheet", {
                    get: function () {
                      for (
                        var B, K = document.styleSheets, G = 0;
                        (B = K[G++]);

                      )
                        if (B.ownerNode === this) return B;
                    },
                  });
              var c = {},
                u = new Set(),
                g = !1,
                h = !1,
                v =
                  /([\s{;])(--([A-Za-z0-9-_]*)\s*:([^;!}{]+)(!important)?)(?=\s*([;}]|$))/g,
                f =
                  /([{;]\s*)([A-Za-z0-9-_]+\s*:[^;}{]*var\([^!;}{]+)(!important)?(?=\s*([;}$]|$))/g,
                d = /-ieVar-([^:]+):/g,
                y = /-ie-([^};]+)/g,
                w =
                  /:(hover|active|focus|target|visited|link|:before|:after|:first-letter|:first-line)/;
              $("style", N),
                $('link[rel="stylesheet"]', N),
                $("[ie-style]", function (B) {
                  var K = P("{" + B.getAttribute("ie-style")).substr(1);
                  B.style.cssText += ";" + K;
                  var G = I(B.style);
                  G.getters && J(B, G.getters, "%styleAttr"),
                    G.setters && H(B, G.setters);
                });
              var p = {
                  hover: { on: "mouseenter", off: "mouseleave" },
                  focus: { on: "focusin", off: "focusout" },
                  active: { on: "CSSActivate", off: "CSSDeactivate" },
                },
                m = null;
              document.addEventListener("mousedown", function (B) {
                setTimeout(function () {
                  if (B.target === document.activeElement) {
                    var K = document.createEvent("Event");
                    K.initEvent("CSSActivate", !0, !0),
                      (m = B.target).dispatchEvent(K);
                  }
                });
              }),
                document.addEventListener("mouseup", function () {
                  if (m) {
                    var B = document.createEvent("Event");
                    B.initEvent("CSSDeactivate", !0, !0),
                      m.dispatchEvent(B),
                      (m = null);
                  }
                });
              var b = 0,
                _ = new MutationObserver(function (B) {
                  if (!h)
                    for (var K, G = 0; (K = B[G++]); )
                      K.attributeName !== "iecp-needed" && Oe(K.target);
                });
              setTimeout(function () {
                _.observe(document, { attributes: !0, subtree: !0 });
              });
              var S = location.hash;
              addEventListener("hashchange", function (B) {
                var K = document.getElementById(location.hash.substr(1));
                if (K) {
                  var G = document.getElementById(S.substr(1));
                  Oe(K), Oe(G);
                } else Oe(document);
                S = location.hash;
              });
              var k = Object.getOwnPropertyDescriptor(
                  HTMLElement.prototype,
                  "style"
                ),
                E = k.get;
              (k.get = function () {
                const B = E.call(this);
                return (B.owningElement = this), B;
              }),
                Object.defineProperty(HTMLElement.prototype, "style", k);
              var D = getComputedStyle;
              window.getComputedStyle = function (B) {
                var K = D.apply(this, arguments);
                return (K.computedFor = B), K;
              };
              var C = CSSStyleDeclaration.prototype,
                T = C.getPropertyValue;
              C.getPropertyValue = function (B) {
                if (
                  ((this.lastPropertyServedBy = !1),
                  (B = B.trim())[0] !== "-" || B[1] !== "-")
                )
                  return T.apply(this, arguments);
                const K = B.substr(2),
                  G = "-ie-" + K,
                  Z = "-ie-❗" + K;
                let te = this[Z] || this[G];
                if (this.computedFor) {
                  if (te === void 0 || A[te]) {
                    if (A[te] || !j[B] || j[B].inherits) {
                      let ge = this.computedFor.parentNode;
                      for (; ge.nodeType === 1; ) {
                        if (ge.ieCP_setters && ge.ieCP_setters[B]) {
                          var re = getComputedStyle(ge),
                            ce = re[Z] || re[G];
                          if (ce !== void 0) {
                            (te = it(this, ce)),
                              (this.lastPropertyServedBy = ge);
                            break;
                          }
                        }
                        ge = ge.parentNode;
                      }
                    }
                  } else
                    (te = it(this, te)),
                      (this.lastPropertyServedBy = this.computedFor);
                  if (te === "initial") return "";
                }
                return (
                  te === void 0 && j[B] && (te = j[B].initialValue),
                  te === void 0 ? "" : te
                );
              };
              var A = { inherit: 1, revert: 1, unset: 1 },
                M = C.setProperty;
              (C.setProperty = function (B, K, G) {
                if (B[0] !== "-" || B[1] !== "-")
                  return M.apply(this, arguments);
                const Z = this.owningElement;
                Z &&
                  (Z.ieCP_setters || (Z.ieCP_setters = {}),
                  (Z.ieCP_setters[B] = 1)),
                  (B = "-ie-" + (G === "important" ? "❗" : "") + B.substr(2)),
                  (this.cssText += "; " + B + ":" + K + ";"),
                  Z && Oe(Z);
              }),
                window.CSS || (window.CSS = {});
              var j = {};
              CSS.registerProperty = function (B) {
                j[B.name] = B;
              };
            }
            function z(B, K) {
              try {
                return B.querySelectorAll(K);
              } catch {
                return [];
              }
            }
            function $(B, K) {
              for (
                var G,
                  Z = { selector: B, callback: K, elements: new WeakMap() },
                  te = z(s, Z.selector),
                  re = 0;
                (G = te[re++]);

              )
                Z.elements.set(G, !0), Z.callback.call(G, G);
              a.push(Z),
                o ||
                  (o = new MutationObserver(F)).observe(s, {
                    childList: !0,
                    subtree: !0,
                  }),
                Y(Z);
            }
            function Y(B, K) {
              var G,
                Z = 0,
                te = [];
              try {
                K && K.matches(B.selector) && te.push(K);
              } catch {}
              for (
                l && Array.prototype.push.apply(te, z(K || s, B.selector));
                (G = te[Z++]);

              )
                B.elements.has(G) ||
                  (B.elements.set(G, !0), B.callback.call(G, G));
            }
            function q(B) {
              for (var K, G = 0; (K = a[G++]); ) Y(K, B);
            }
            function F(B) {
              for (var K, G, Z, te, re = 0; (G = B[re++]); )
                for (Z = G.addedNodes, K = 0; (te = Z[K++]); )
                  te.nodeType === 1 && q(te);
            }
            function L(B, K, G) {
              var Z = Object.getOwnPropertyDescriptor(K, B);
              Object.defineProperty(G, B, Z);
            }
            function N(B) {
              if (!B.ieCP_polyfilled && !B.ieCP_elementSheet && B.sheet) {
                if (B.href)
                  return (
                    (K = B.href),
                    (G = function (ce) {
                      var ge = P(ce);
                      ce !== ge && O(B, ge);
                    }),
                    (Z = new XMLHttpRequest()).open("GET", K),
                    Z.overrideMimeType("text/css"),
                    (Z.onload = function () {
                      Z.status >= 200 && Z.status < 400 && G(Z.responseText);
                    }),
                    void Z.send()
                  );
                var K,
                  G,
                  Z,
                  te = B.innerHTML,
                  re = P(te);
                te !== re && O(B, re);
              }
            }
            function P(B) {
              return B.replace(v, function (K, G, Z, te, re, ce) {
                return G + "-ie-" + (ce ? "❗" : "") + te + ":" + re;
              }).replace(f, function (K, G, Z, te) {
                return G + "-ieVar-" + (te ? "❗" : "") + Z + "; " + Z;
              });
            }
            function I(B) {
              B["z-index"] === B && x();
              const K = B.cssText;
              var G,
                Z,
                te = K.match(d);
              if (te) {
                var re = [];
                for (G = 0; (Z = te[G++]); ) {
                  let ie = Z.slice(7, -1);
                  ie[0] === "❗" && (ie = ie.substr(1)),
                    re.push(ie),
                    c[ie] || (c[ie] = []),
                    c[ie].push(B);
                }
              }
              var ce = K.match(y);
              if (ce) {
                var ge = {};
                for (G = 0; (Z = ce[G++]); ) {
                  let ie = Z.substr(4).split(":"),
                    oe = ie[0],
                    ne = ie[1];
                  oe[0] === "❗" && (oe = oe.substr(1)), (ge[oe] = ne);
                }
              }
              return { getters: re, setters: ge };
            }
            function O(B, K) {
              (B.sheet.cssText = K), (B.ieCP_polyfilled = !0);
              for (var G, Z = B.sheet.rules, te = 0; (G = Z[te++]); ) {
                const re = I(G.style);
                re.getters && V(G.selectorText, re.getters),
                  re.setters && se(G.selectorText, re.setters);
                const ce =
                  G.parentRule &&
                  G.parentRule.media &&
                  G.parentRule.media.mediaText;
                ce &&
                  (re.getters || re.setters) &&
                  matchMedia(ce).addListener(function () {
                    Oe(document.documentElement);
                  });
              }
              he();
            }
            function V(B, K) {
              Ye(B),
                $(nt(B), function (G) {
                  J(G, K, B), Ue(G);
                });
            }
            function J(B, K, G) {
              var Z,
                te,
                re = 0;
              const ce = G.split(",");
              for (
                B.setAttribute("iecp-needed", !0),
                  B.ieCPSelectors || (B.ieCPSelectors = {});
                (Z = K[re++]);

              )
                for (te = 0; (G = ce[te++]); ) {
                  const ge = G.trim().split("::");
                  B.ieCPSelectors[Z] || (B.ieCPSelectors[Z] = []),
                    B.ieCPSelectors[Z].push({
                      selector: ge[0],
                      pseudo: ge[1] ? "::" + ge[1] : "",
                    });
                }
            }
            function se(B, K) {
              Ye(B),
                $(nt(B), function (G) {
                  H(G, K);
                });
            }
            function H(B, K) {
              for (var G in (B.ieCP_setters || (B.ieCP_setters = {}), K))
                B.ieCP_setters["--" + G] = 1;
              Oe(B);
            }
            function he() {
              for (var B in c) {
                let te = c[B];
                for (var K, G = 0; (K = te[G++]); )
                  if (!K.owningElement) {
                    var Z = K["-ieVar-" + B];
                    if (
                      Z &&
                      (Z = it(
                        getComputedStyle(document.documentElement),
                        Z
                      )) !== ""
                    )
                      try {
                        K[B] = Z;
                      } catch {}
                  }
              }
            }
            function Ye(B) {
              for (var K in ((B = B.split(",")[0]), p)) {
                var G = B.split(":" + K);
                if (G.length > 1) {
                  var Z = G[1].match(/^[^\s]*/);
                  let te = nt(G[0] + Z);
                  const re = p[K];
                  $(te, function (ce) {
                    ce.addEventListener(re.on, Gt),
                      ce.addEventListener(re.off, Gt);
                  });
                }
              }
            }
            function nt(B) {
              return B.replace(w, "").replace(":not()", "");
            }
            function Ue(B) {
              u.add(B),
                g ||
                  ((g = !0),
                  requestAnimationFrame(function () {
                    (g = !1),
                      (h = !0),
                      u.forEach(Ve),
                      u.clear(),
                      setTimeout(function () {
                        h = !1;
                      });
                  }));
            }
            function Ve(B) {
              B.ieCP_unique ||
                ((B.ieCP_unique = ++b),
                B.classList.add("iecp-u" + B.ieCP_unique));
              var K = getComputedStyle(B);
              let G = "";
              for (var Z in ((B.runtimeStyle.cssText = ""), B.ieCPSelectors)) {
                var te = K["-ieVar-❗" + Z];
                let oe = te || K["-ieVar-" + Z];
                if (oe) {
                  var re = {},
                    ce = it(K, oe, re);
                  te && (ce += " !important");
                  for (var ge, ie = 0; (ge = B.ieCPSelectors[Z][ie++]); )
                    ge.selector === "%styleAttr" && (B.style[Z] = ce),
                      (te || re.allByRoot === !1) &&
                        (ge.pseudo
                          ? (G +=
                              ge.selector +
                              ".iecp-u" +
                              B.ieCP_unique +
                              ge.pseudo +
                              "{" +
                              Z +
                              ":" +
                              ce +
                              `}
`)
                          : (B.runtimeStyle[Z] = ce));
                }
              }
              (function (oe, ne) {
                if (!oe.ieCP_styleEl && ne) {
                  const fe = document.createElement("style");
                  (fe.ieCP_elementSheet = 1),
                    document.head.appendChild(fe),
                    (oe.ieCP_styleEl = fe);
                }
                oe.ieCP_styleEl && (oe.ieCP_styleEl.innerHTML = ne);
              })(B, G);
            }
            function Oe(B) {
              if (B) {
                B === document.documentElement && he();
                var K = B.querySelectorAll("[iecp-needed]");
                B.hasAttribute && B.hasAttribute("iecp-needed") && Ue(B);
                for (var G, Z = 0; (G = K[Z++]); ) Ue(G);
              }
            }
            function Gt(B) {
              Oe(B.target);
            }
            function it(B, K, G) {
              return (function (Z, te) {
                let re,
                  ce,
                  ge = 0,
                  ie = null,
                  oe = 0,
                  ne = "",
                  fe = 0;
                for (; (re = Z[fe++]); ) {
                  if (
                    (re === "(" &&
                      (++ge,
                      ie === null &&
                        Z[fe - 4] + Z[fe - 3] + Z[fe - 2] === "var" &&
                        ((ie = ge), (ne += Z.substring(oe, fe - 4)), (oe = fe)),
                      Z[fe - 5] + Z[fe - 4] + Z[fe - 3] + Z[fe - 2] ===
                        "calc" && (ce = ge)),
                    re === ")" && ie === ge)
                  ) {
                    let st,
                      qe = Z.substring(oe, fe - 1).trim(),
                      pe = qe.indexOf(",");
                    pe !== -1 &&
                      ((st = qe.slice(pe + 1)), (qe = qe.slice(0, pe))),
                      (ne += te(qe, st, ce)),
                      (oe = fe),
                      (ie = null);
                  }
                  re === ")" && (--ge, ce === ge && (ce = null));
                }
                return (ne += Z.substring(oe)), ne;
              })(K, function (Z, te, re) {
                var ce = B.getPropertyValue(Z);
                return (
                  re && (ce = ce.replace(/^calc\(/, "(")),
                  G &&
                    B.lastPropertyServedBy !== document.documentElement &&
                    (G.allByRoot = !1),
                  ce === "" && te && (ce = it(B, te, G)),
                  ce
                );
              });
            }
          })();
        },
      ]);
    });
  })(Fy);
  var tf = { exports: {} };
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
    (function (r, n) {
      e.exports = n();
    })(window, function () {
      return (function (r) {
        var n = {};
        function i(o) {
          if (n[o]) return n[o].exports;
          var a = (n[o] = { i: o, l: !1, exports: {} });
          return r[o].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
        }
        return (
          (i.m = r),
          (i.c = n),
          (i.d = function (o, a, s) {
            i.o(o, a) ||
              Object.defineProperty(o, a, { enumerable: !0, get: s });
          }),
          (i.r = function (o) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(o, "__esModule", { value: !0 });
          }),
          (i.t = function (o, a) {
            if (
              (1 & a && (o = i(o)),
              8 & a || (4 & a && typeof o == "object" && o && o.__esModule))
            )
              return o;
            var s = Object.create(null);
            if (
              (i.r(s),
              Object.defineProperty(s, "default", { enumerable: !0, value: o }),
              2 & a && typeof o != "string")
            )
              for (var l in o)
                i.d(
                  s,
                  l,
                  function (c) {
                    return o[c];
                  }.bind(null, l)
                );
            return s;
          }),
          (i.n = function (o) {
            var a =
              o && o.__esModule
                ? function () {
                    return o.default;
                  }
                : function () {
                    return o;
                  };
            return i.d(a, "a", a), a;
          }),
          (i.o = function (o, a) {
            return Object.prototype.hasOwnProperty.call(o, a);
          }),
          (i.p = ""),
          i((i.s = 4))
        );
      })([
        function (r, n, i) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (function () {
            function a(s, l, c) {
              s === void 0 && (s = null),
                l === void 0 && (l = null),
                c === void 0 && (c = "en-US"),
                (this.dateInstance =
                  typeof l == "object" && l !== null
                    ? l.parse(s instanceof a ? s.clone().toJSDate() : s)
                    : typeof l == "string"
                    ? a.parseDateTime(s, l, c)
                    : s
                    ? a.parseDateTime(s)
                    : a.parseDateTime(new Date())),
                (this.lang = c);
            }
            return (
              (a.parseDateTime = function (s, l, c) {
                if (
                  (l === void 0 && (l = "YYYY-MM-DD"),
                  c === void 0 && (c = "en-US"),
                  !s)
                )
                  return new Date(NaN);
                if (s instanceof Date) return new Date(s);
                if (s instanceof a) return s.clone().toJSDate();
                if (/^-?\d{10,}$/.test(s))
                  return a.getDateZeroTime(new Date(Number(s)));
                if (typeof s == "string") {
                  for (var u = [], g = null; (g = a.regex.exec(l)) != null; )
                    g[1] !== "\\" && u.push(g);
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
                        m = a.formatPatterns(w[0], c),
                        b = m.group,
                        _ = m.pattern;
                      (h[b] = p + 1), (h.value += _), (h.value += ".*?");
                    }
                    var S = new RegExp("^" + h.value + "$");
                    if (S.test(s)) {
                      var k = S.exec(s),
                        E = Number(k[h.year]),
                        D = null;
                      h.month
                        ? (D = Number(k[h.month]) - 1)
                        : h.shortMonth
                        ? (D = a.shortMonths(c).indexOf(k[h.shortMonth]))
                        : h.longMonth &&
                          (D = a.longMonths(c).indexOf(k[h.longMonth]));
                      var C = Number(k[h.day]) || 1;
                      return new Date(E, D, C, 0, 0, 0, 0);
                    }
                  }
                }
                return a.getDateZeroTime(new Date(s));
              }),
              (a.convertArray = function (s, l) {
                return s.map(function (c) {
                  return c instanceof Array
                    ? c.map(function (u) {
                        return new a(u, l);
                      })
                    : new a(c, l);
                });
              }),
              (a.getDateZeroTime = function (s) {
                return new Date(
                  s.getFullYear(),
                  s.getMonth(),
                  s.getDate(),
                  0,
                  0,
                  0,
                  0
                );
              }),
              (a.shortMonths = function (s) {
                return a.MONTH_JS.map(function (l) {
                  return new Date(2019, l).toLocaleString(s, {
                    month: "short",
                  });
                });
              }),
              (a.longMonths = function (s) {
                return a.MONTH_JS.map(function (l) {
                  return new Date(2019, l).toLocaleString(s, { month: "long" });
                });
              }),
              (a.formatPatterns = function (s, l) {
                switch (s) {
                  case "YY":
                  case "YYYY":
                    return {
                      group: "year",
                      pattern: "(\\d{" + s.length + "})",
                    };
                  case "M":
                    return { group: "month", pattern: "(\\d{1,2})" };
                  case "MM":
                    return { group: "month", pattern: "(\\d{2})" };
                  case "MMM":
                    return {
                      group: "shortMonth",
                      pattern: "(" + a.shortMonths(l).join("|") + ")",
                    };
                  case "MMMM":
                    return {
                      group: "longMonth",
                      pattern: "(" + a.longMonths(l).join("|") + ")",
                    };
                  case "D":
                    return { group: "day", pattern: "(\\d{1,2})" };
                  case "DD":
                    return { group: "day", pattern: "(\\d{2})" };
                }
              }),
              (a.prototype.toJSDate = function () {
                return this.dateInstance;
              }),
              (a.prototype.toLocaleString = function (s, l) {
                return this.dateInstance.toLocaleString(s, l);
              }),
              (a.prototype.toDateString = function () {
                return this.dateInstance.toDateString();
              }),
              (a.prototype.getSeconds = function () {
                return this.dateInstance.getSeconds();
              }),
              (a.prototype.getDay = function () {
                return this.dateInstance.getDay();
              }),
              (a.prototype.getTime = function () {
                return this.dateInstance.getTime();
              }),
              (a.prototype.getDate = function () {
                return this.dateInstance.getDate();
              }),
              (a.prototype.getMonth = function () {
                return this.dateInstance.getMonth();
              }),
              (a.prototype.getFullYear = function () {
                return this.dateInstance.getFullYear();
              }),
              (a.prototype.setMonth = function (s) {
                return this.dateInstance.setMonth(s);
              }),
              (a.prototype.setHours = function (s, l, c, u) {
                s === void 0 && (s = 0),
                  l === void 0 && (l = 0),
                  c === void 0 && (c = 0),
                  u === void 0 && (u = 0),
                  this.dateInstance.setHours(s, l, c, u);
              }),
              (a.prototype.setSeconds = function (s) {
                return this.dateInstance.setSeconds(s);
              }),
              (a.prototype.setDate = function (s) {
                return this.dateInstance.setDate(s);
              }),
              (a.prototype.setFullYear = function (s) {
                return this.dateInstance.setFullYear(s);
              }),
              (a.prototype.getWeek = function (s) {
                var l = new Date(this.timestamp()),
                  c = (this.getDay() + (7 - s)) % 7;
                l.setDate(l.getDate() - c);
                var u = l.getTime();
                return (
                  l.setMonth(0, 1),
                  l.getDay() !== s &&
                    l.setMonth(0, 1 + ((4 - l.getDay() + 7) % 7)),
                  1 + Math.ceil((u - l.getTime()) / 6048e5)
                );
              }),
              (a.prototype.clone = function () {
                return new a(this.toJSDate());
              }),
              (a.prototype.isBetween = function (s, l, c) {
                switch ((c === void 0 && (c = "()"), c)) {
                  default:
                  case "()":
                    return (
                      this.timestamp() > s.getTime() &&
                      this.timestamp() < l.getTime()
                    );
                  case "[)":
                    return (
                      this.timestamp() >= s.getTime() &&
                      this.timestamp() < l.getTime()
                    );
                  case "(]":
                    return (
                      this.timestamp() > s.getTime() &&
                      this.timestamp() <= l.getTime()
                    );
                  case "[]":
                    return (
                      this.timestamp() >= s.getTime() &&
                      this.timestamp() <= l.getTime()
                    );
                }
              }),
              (a.prototype.isBefore = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    return s.getTime() > this.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        s.getFullYear(),
                        s.getMonth(),
                        s.getDate()
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
                      new Date(s.getFullYear(), s.getMonth(), 1).getTime() >
                      new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    );
                  case "year":
                  case "years":
                    return s.getFullYear() > this.getFullYear();
                }
                throw new Error("isBefore: Invalid unit!");
              }),
              (a.prototype.isSameOrBefore = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    return s.getTime() >= this.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        s.getFullYear(),
                        s.getMonth(),
                        s.getDate()
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
                      new Date(s.getFullYear(), s.getMonth(), 1).getTime() >=
                      new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    );
                }
                throw new Error("isSameOrBefore: Invalid unit!");
              }),
              (a.prototype.isAfter = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    return this.getTime() > s.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime() >
                      new Date(
                        s.getFullYear(),
                        s.getMonth(),
                        s.getDate()
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
                      new Date(s.getFullYear(), s.getMonth(), 1).getTime()
                    );
                  case "year":
                  case "years":
                    return this.getFullYear() > s.getFullYear();
                }
                throw new Error("isAfter: Invalid unit!");
              }),
              (a.prototype.isSameOrAfter = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    return this.getTime() >= s.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime() >=
                      new Date(
                        s.getFullYear(),
                        s.getMonth(),
                        s.getDate()
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
                      new Date(s.getFullYear(), s.getMonth(), 1).getTime()
                    );
                }
                throw new Error("isSameOrAfter: Invalid unit!");
              }),
              (a.prototype.isSame = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    return this.getTime() === s.getTime();
                  case "day":
                  case "days":
                    return (
                      new Date(
                        this.getFullYear(),
                        this.getMonth(),
                        this.getDate()
                      ).getTime() ===
                      new Date(
                        s.getFullYear(),
                        s.getMonth(),
                        s.getDate()
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
                      new Date(s.getFullYear(), s.getMonth(), 1).getTime()
                    );
                }
                throw new Error("isSame: Invalid unit!");
              }),
              (a.prototype.add = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    this.setSeconds(this.getSeconds() + s);
                    break;
                  case "day":
                  case "days":
                    this.setDate(this.getDate() + s);
                    break;
                  case "month":
                  case "months":
                    this.setMonth(this.getMonth() + s);
                }
                return this;
              }),
              (a.prototype.subtract = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  case "second":
                  case "seconds":
                    this.setSeconds(this.getSeconds() - s);
                    break;
                  case "day":
                  case "days":
                    this.setDate(this.getDate() - s);
                    break;
                  case "month":
                  case "months":
                    this.setMonth(this.getMonth() - s);
                }
                return this;
              }),
              (a.prototype.diff = function (s, l) {
                switch ((l === void 0 && (l = "seconds"), l)) {
                  default:
                  case "second":
                  case "seconds":
                    return this.getTime() - s.getTime();
                  case "day":
                  case "days":
                    return Math.round((this.timestamp() - s.getTime()) / 864e5);
                  case "month":
                  case "months":
                }
              }),
              (a.prototype.format = function (s, l) {
                if ((l === void 0 && (l = "en-US"), typeof s == "object"))
                  return s.output(this.clone().toJSDate());
                for (
                  var c = "", u = [], g = null;
                  (g = a.regex.exec(s)) != null;

                )
                  g[1] !== "\\" && u.push(g);
                if (u.length) {
                  u[0].index > 0 && (c += s.substring(0, u[0].index));
                  for (var h = 0, v = Object.entries(u); h < v.length; h++) {
                    var f = v[h],
                      d = f[0],
                      y = f[1],
                      w = Number(d);
                    (c += this.formatTokens(y[0], l)),
                      u[w + 1] &&
                        (c += s.substring(
                          y.index + y[0].length,
                          u[w + 1].index
                        )),
                      w === u.length - 1 &&
                        (c += s.substring(y.index + y[0].length));
                  }
                }
                return c.replace(/\\/g, "");
              }),
              (a.prototype.timestamp = function () {
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
              (a.prototype.formatTokens = function (s, l) {
                switch (s) {
                  case "YY":
                    return String(this.getFullYear()).slice(-2);
                  case "YYYY":
                    return String(this.getFullYear());
                  case "M":
                    return String(this.getMonth() + 1);
                  case "MM":
                    return ("0" + (this.getMonth() + 1)).slice(-2);
                  case "MMM":
                    return a.shortMonths(l)[this.getMonth()];
                  case "MMMM":
                    return a.longMonths(l)[this.getMonth()];
                  case "D":
                    return String(this.getDate());
                  case "DD":
                    return ("0" + this.getDate()).slice(-2);
                  default:
                    return "";
                }
              }),
              (a.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g),
              (a.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
              a
            );
          })();
          n.DateTime = o;
        },
        function (r, n, i) {
          var o,
            a =
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
            s =
              (this && this.__spreadArrays) ||
              function () {
                for (var v = 0, f = 0, d = arguments.length; f < d; f++)
                  v += arguments[f].length;
                var y = Array(v),
                  w = 0;
                for (f = 0; f < d; f++)
                  for (
                    var p = arguments[f], m = 0, b = p.length;
                    m < b;
                    m++, w++
                  )
                    y[w] = p[m];
                return y;
              };
          Object.defineProperty(n, "__esModule", { value: !0 });
          var l = i(5),
            c = i(0),
            u = i(3),
            g = i(2),
            h = (function (v) {
              function f(d) {
                var y = v.call(this, d) || this;
                return (y.preventClick = !1), y.bindEvents(), y;
              }
              return (
                a(f, v),
                (f.prototype.scrollToDate = function (d) {
                  if (this.options.scrollToDate) {
                    var y =
                        this.options.startDate instanceof c.DateTime
                          ? this.options.startDate.clone()
                          : null,
                      w =
                        this.options.endDate instanceof c.DateTime
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
                                new c.DateTime(y.dataset.time)),
                              this.shouldSwapDatePicked())
                            ) {
                              var w = this.datePicked[1].clone();
                              (this.datePicked[1] = this.datePicked[0].clone()),
                                (this.datePicked[0] = w.clone());
                            }
                            return (
                              this.shouldCheckLockDays() &&
                                g.rangeIsLocked(
                                  this.datePicked,
                                  this.options
                                ) &&
                                (this.emit("error:range", this.datePicked),
                                (this.datePicked.length = 0)),
                              this.render(),
                              this.emit.apply(
                                this,
                                s(
                                  ["preselect"],
                                  s(this.datePicked).map(function (_) {
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
                              m =
                                this.options.switchingMonths ||
                                this.options.numberOfMonths;
                            if (this.options.splitView) {
                              var b = y.closest("." + u.monthItem);
                              (p = g.findNestedMonthItem(b)), (m = 1);
                            }
                            return (
                              this.calendars[p].setMonth(
                                this.calendars[p].getMonth() - m
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
                              (m =
                                this.options.switchingMonths ||
                                this.options.numberOfMonths),
                              this.options.splitView &&
                                ((b = y.closest("." + u.monthItem)),
                                (p = g.findNestedMonthItem(b)),
                                (m = 1)),
                              this.calendars[p].setMonth(
                                this.calendars[p].getMonth() + m
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
                    m = w.getBoundingClientRect(),
                    b = d.getBoundingClientRect(),
                    _ = b.top,
                    S = b.left;
                  if (this.options.inlineMode && this.options.parentEl) {
                    var k = this.ui.parentNode.getBoundingClientRect();
                    (_ -= k.top), (S -= k.left);
                  } else (_ -= p.top), (S -= p.left);
                  (_ -= m.height),
                    (S -= m.width / 2),
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
                      m = this.datePicked[0].clone(),
                      b = new c.DateTime(w.dataset.time),
                      _ = !1;
                    if (m.getTime() > b.getTime()) {
                      var S = m.clone();
                      (m = b.clone()), (b = S.clone()), (_ = !0);
                    }
                    if (
                      (Array.prototype.slice
                        .call(this.ui.querySelectorAll("." + u.dayItem))
                        .forEach(function (M) {
                          var j = new c.DateTime(M.dataset.time),
                            z = y.renderDay(j);
                          j.isBetween(m, b) && z.classList.add(u.isInRange),
                            (M.className = z.className);
                        }),
                      w.classList.add(u.isEndDate),
                      _
                        ? (p && p.classList.add(u.isFlipped),
                          w.classList.add(u.isFlipped))
                        : (p && p.classList.remove(u.isFlipped),
                          w.classList.remove(u.isFlipped)),
                      this.options.showTooltip)
                    ) {
                      var k = b.diff(m, "day") + 1;
                      if (
                        (typeof this.options.tooltipNumber == "function" &&
                          (k = this.options.tooltipNumber.call(this, k)),
                        k > 0)
                      ) {
                        var E = this.pluralSelector(k),
                          D =
                            k +
                            " " +
                            (this.options.tooltipText[E]
                              ? this.options.tooltipText[E]
                              : "[" + E + "]");
                        this.showTooltip(w, D);
                        var C = window.navigator.userAgent,
                          T = /(iphone|ipad)/i.test(C),
                          A = /OS 1([0-2])/i.test(C);
                        T && A && w.dispatchEvent(new Event("click"));
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
                    m = this.options.format;
                  if (
                    this.options.elementEnd
                      ? w instanceof c.DateTime &&
                        p instanceof c.DateTime &&
                        w.format(m) === this.options.element.value &&
                        p.format(m) === this.options.elementEnd.value
                      : this.options.singleMode
                      ? w instanceof c.DateTime &&
                        w.format(m) === this.options.element.value
                      : w instanceof c.DateTime &&
                        p instanceof c.DateTime &&
                        "" +
                          w.format(m) +
                          this.options.delimiter +
                          p.format(m) ===
                          this.options.element.value
                  ) {
                    if (p && w.getTime() > p.getTime()) {
                      var b = w.clone();
                      (w = p.clone()), (p = b.clone());
                    }
                    (this.options.startDate = new c.DateTime(
                      w,
                      this.options.format,
                      this.options.lang
                    )),
                      p &&
                        (this.options.endDate = new c.DateTime(
                          p,
                          this.options.format,
                          this.options.lang
                        )),
                      this.updateInput(),
                      this.render();
                    var _ = w.clone(),
                      S = 0;
                    (this.options.elementEnd
                      ? w.format(m) === d.target.value
                      : d.target.value.startsWith(w.format(m))) ||
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
            })(l.Calendar);
          n.Litepicker = h;
        },
        function (r, n, i) {
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.findNestedMonthItem = function (o) {
              for (var a = o.parentNode.childNodes, s = 0; s < a.length; s += 1)
                if (a.item(s) === o) return s;
              return 0;
            }),
            (n.dateIsLocked = function (o, a, s) {
              var l = !1;
              return (
                a.lockDays.length &&
                  (l = a.lockDays.filter(function (c) {
                    return c instanceof Array
                      ? o.isBetween(c[0], c[1], a.lockDaysInclusivity)
                      : c.isSame(o, "day");
                  }).length),
                l ||
                  typeof a.lockDaysFilter != "function" ||
                  (l = a.lockDaysFilter.call(this, o.clone(), null, s)),
                l
              );
            }),
            (n.rangeIsLocked = function (o, a) {
              var s = !1;
              return (
                a.lockDays.length &&
                  (s = a.lockDays.filter(function (l) {
                    if (l instanceof Array) {
                      var c =
                        o[0].toDateString() === l[0].toDateString() &&
                        o[1].toDateString() === l[1].toDateString();
                      return (
                        l[0].isBetween(o[0], o[1], a.lockDaysInclusivity) ||
                        l[1].isBetween(o[0], o[1], a.lockDaysInclusivity) ||
                        c
                      );
                    }
                    return l.isBetween(o[0], o[1], a.lockDaysInclusivity);
                  }).length),
                s ||
                  typeof a.lockDaysFilter != "function" ||
                  (s = a.lockDaysFilter.call(
                    this,
                    o[0].clone(),
                    o[1].clone(),
                    o
                  )),
                s
              );
            });
        },
        function (r, n, i) {
          var o = i(8);
          typeof o == "string" && (o = [[r.i, o, ""]]);
          var a = {
            insert: function (s) {
              var l = document.querySelector("head"),
                c = window._lastElementInsertedByStyleLoader;
              window.disableLitepickerStyles ||
                (c
                  ? c.nextSibling
                    ? l.insertBefore(s, c.nextSibling)
                    : l.appendChild(s)
                  : l.insertBefore(s, l.firstChild),
                (window._lastElementInsertedByStyleLoader = s));
            },
            singleton: !1,
          };
          i(10)(o, a), o.locals && (r.exports = o.locals);
        },
        function (r, n, i) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = i(1);
          (n.Litepicker = o.Litepicker),
            i(11),
            (window.Litepicker = o.Litepicker),
            (n.default = o.Litepicker);
        },
        function (r, n, i) {
          var o,
            a =
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
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = i(6),
            l = i(0),
            c = i(3),
            u = i(2),
            g = (function (h) {
              function v(f) {
                return h.call(this, f) || this;
              }
              return (
                a(v, h),
                (v.prototype.render = function () {
                  var f = this;
                  this.emit("before:render", this.ui);
                  var d = document.createElement("div");
                  d.className = c.containerMain;
                  var y = document.createElement("div");
                  (y.className = c.containerMonths),
                    c["columns" + this.options.numberOfColumns] &&
                      (y.classList.remove(c.columns2, c.columns3, c.columns4),
                      y.classList.add(
                        c["columns" + this.options.numberOfColumns]
                      )),
                    this.options.splitView && y.classList.add(c.splitView),
                    this.options.showWeekNumbers &&
                      y.classList.add(c.showWeekNumbers);
                  for (
                    var w = this.calendars[0].clone(),
                      p = w.getMonth(),
                      m = w.getMonth() + this.options.numberOfMonths,
                      b = 0,
                      _ = p;
                    _ < m;
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
                        (k.className = c.resetButton),
                        (k.innerHTML = this.options.buttonText.reset)),
                      k.addEventListener("click", function (E) {
                        E.preventDefault(), f.clearSelection();
                      }),
                      d
                        .querySelector("." + c.monthItem + ":last-child")
                        .querySelector("." + c.monthItemHeader)
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
                    m = document.createElement("div");
                  m.className = c.monthItem;
                  var b = document.createElement("div");
                  b.className = c.monthItemHeader;
                  var _ = document.createElement("div");
                  if (this.options.dropdowns.months) {
                    var S = document.createElement("select");
                    S.className = c.monthItemName;
                    for (var k = 0; k < 12; k += 1) {
                      var E = document.createElement("option"),
                        D = new l.DateTime(
                          new Date(f.getFullYear(), k, 2, 0, 0, 0)
                        ),
                        C = new l.DateTime(
                          new Date(f.getFullYear(), k, 1, 0, 0, 0)
                        );
                      (E.value = String(k)),
                        (E.text = D.toLocaleString(this.options.lang, {
                          month: "long",
                        })),
                        (E.disabled =
                          (this.options.minDate &&
                            C.isBefore(
                              new l.DateTime(this.options.minDate),
                              "month"
                            )) ||
                          (this.options.maxDate &&
                            C.isAfter(
                              new l.DateTime(this.options.maxDate),
                              "month"
                            ))),
                        (E.selected = C.getMonth() === f.getMonth()),
                        S.appendChild(E);
                    }
                    S.addEventListener("change", function (se) {
                      var H = se.target,
                        he = 0;
                      if (y.options.splitView) {
                        var Ye = H.closest("." + c.monthItem);
                        he = u.findNestedMonthItem(Ye);
                      }
                      y.calendars[he].setMonth(Number(H.value)),
                        y.render(),
                        y.emit("change:month", y.calendars[he], he, se);
                    }),
                      _.appendChild(S);
                  } else
                    ((D = document.createElement("strong")).className =
                      c.monthItemName),
                      (D.innerHTML = f.toLocaleString(this.options.lang, {
                        month: "long",
                      })),
                      _.appendChild(D);
                  if (this.options.dropdowns.years) {
                    var T = document.createElement("select");
                    T.className = c.monthItemYear;
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
                        T.appendChild(E)),
                        k = M;
                      k >= A;
                      k -= 1
                    ) {
                      var E = document.createElement("option"),
                        j = new l.DateTime(new Date(k, 0, 1, 0, 0, 0));
                      (E.value = String(k)),
                        (E.text = String(k)),
                        (E.disabled =
                          (this.options.minDate &&
                            j.isBefore(
                              new l.DateTime(this.options.minDate),
                              "year"
                            )) ||
                          (this.options.maxDate &&
                            j.isAfter(
                              new l.DateTime(this.options.maxDate),
                              "year"
                            ))),
                        (E.selected = f.getFullYear() === k),
                        T.appendChild(E);
                    }
                    if (
                      (f.getFullYear() < A &&
                        (((E = document.createElement("option")).value = String(
                          f.getFullYear()
                        )),
                        (E.text = String(f.getFullYear())),
                        (E.selected = !0),
                        (E.disabled = !0),
                        T.appendChild(E)),
                      this.options.dropdowns.years === "asc")
                    ) {
                      var z = Array.prototype.slice
                        .call(T.childNodes)
                        .reverse();
                      (T.innerHTML = ""),
                        z.forEach(function (se) {
                          (se.innerHTML = se.value), T.appendChild(se);
                        });
                    }
                    T.addEventListener("change", function (se) {
                      var H = se.target,
                        he = 0;
                      if (y.options.splitView) {
                        var Ye = H.closest("." + c.monthItem);
                        he = u.findNestedMonthItem(Ye);
                      }
                      y.calendars[he].setFullYear(Number(H.value)),
                        y.render(),
                        y.emit("change:year", y.calendars[he], he, se);
                    }),
                      _.appendChild(T);
                  } else {
                    var $ = document.createElement("span");
                    ($.className = c.monthItemYear),
                      ($.innerHTML = String(f.getFullYear())),
                      _.appendChild($);
                  }
                  var Y = document.createElement("button");
                  (Y.type = "button"),
                    (Y.className = c.buttonPreviousMonth),
                    (Y.innerHTML = this.options.buttonText.previousMonth);
                  var q = document.createElement("button");
                  (q.type = "button"),
                    (q.className = c.buttonNextMonth),
                    (q.innerHTML = this.options.buttonText.nextMonth),
                    b.appendChild(Y),
                    b.appendChild(_),
                    b.appendChild(q),
                    this.options.minDate &&
                      w.isSameOrBefore(
                        new l.DateTime(this.options.minDate),
                        "month"
                      ) &&
                      m.classList.add(c.noPreviousMonth),
                    this.options.maxDate &&
                      w.isSameOrAfter(
                        new l.DateTime(this.options.maxDate),
                        "month"
                      ) &&
                      m.classList.add(c.noNextMonth);
                  var F = document.createElement("div");
                  (F.className = c.monthItemWeekdaysRow),
                    this.options.showWeekNumbers &&
                      (F.innerHTML = "<div>W</div>");
                  for (var L = 1; L <= 7; L += 1) {
                    var N = 3 + this.options.firstDay + L,
                      P = document.createElement("div");
                    (P.innerHTML = this.weekdayName(N)),
                      (P.title = this.weekdayName(N, "long")),
                      F.appendChild(P);
                  }
                  var I = document.createElement("div");
                  I.className = c.containerDays;
                  var O = this.calcSkipDays(w);
                  this.options.showWeekNumbers &&
                    O &&
                    I.appendChild(this.renderWeekNumber(w));
                  for (var V = 0; V < O; V += 1) {
                    var J = document.createElement("div");
                    I.appendChild(J);
                  }
                  for (V = 1; V <= p; V += 1)
                    w.setDate(V),
                      this.options.showWeekNumbers &&
                        w.getDay() === this.options.firstDay &&
                        I.appendChild(this.renderWeekNumber(w)),
                      I.appendChild(this.renderDay(w));
                  return (
                    m.appendChild(b),
                    m.appendChild(F),
                    m.appendChild(I),
                    this.emit("render:month", m, f),
                    m
                  );
                }),
                (v.prototype.renderDay = function (f) {
                  f.setHours();
                  var d = document.createElement("div");
                  if (
                    ((d.className = c.dayItem),
                    (d.innerHTML = String(f.getDate())),
                    (d.dataset.time = String(f.getTime())),
                    f.toDateString() === new Date().toDateString() &&
                      d.classList.add(c.isToday),
                    this.datePicked.length)
                  )
                    this.datePicked[0].toDateString() === f.toDateString() &&
                      (d.classList.add(c.isStartDate),
                      this.options.singleMode && d.classList.add(c.isEndDate)),
                      this.datePicked.length === 2 &&
                        this.datePicked[1].toDateString() ===
                          f.toDateString() &&
                        d.classList.add(c.isEndDate),
                      this.datePicked.length === 2 &&
                        f.isBetween(this.datePicked[0], this.datePicked[1]) &&
                        d.classList.add(c.isInRange);
                  else if (this.options.startDate) {
                    var y = this.options.startDate,
                      w = this.options.endDate;
                    y.toDateString() === f.toDateString() &&
                      (d.classList.add(c.isStartDate),
                      this.options.singleMode && d.classList.add(c.isEndDate)),
                      w &&
                        w.toDateString() === f.toDateString() &&
                        d.classList.add(c.isEndDate),
                      y &&
                        w &&
                        f.isBetween(y, w) &&
                        d.classList.add(c.isInRange);
                  }
                  if (
                    (this.options.minDate &&
                      f.isBefore(new l.DateTime(this.options.minDate)) &&
                      d.classList.add(c.isLocked),
                    this.options.maxDate &&
                      f.isAfter(new l.DateTime(this.options.maxDate)) &&
                      d.classList.add(c.isLocked),
                    this.options.minDays > 1 && this.datePicked.length === 1)
                  ) {
                    var p = this.options.minDays - 1,
                      m = this.datePicked[0].clone().subtract(p, "day"),
                      b = this.datePicked[0].clone().add(p, "day");
                    f.isBetween(m, this.datePicked[0], "(]") &&
                      d.classList.add(c.isLocked),
                      f.isBetween(this.datePicked[0], b, "[)") &&
                        d.classList.add(c.isLocked);
                  }
                  if (this.options.maxDays && this.datePicked.length === 1) {
                    var _ = this.options.maxDays;
                    (m = this.datePicked[0].clone().subtract(_, "day")),
                      (b = this.datePicked[0].clone().add(_, "day")),
                      f.isSameOrBefore(m) && d.classList.add(c.isLocked),
                      f.isSameOrAfter(b) && d.classList.add(c.isLocked);
                  }
                  return (
                    this.options.selectForward &&
                      this.datePicked.length === 1 &&
                      f.isBefore(this.datePicked[0]) &&
                      d.classList.add(c.isLocked),
                    this.options.selectBackward &&
                      this.datePicked.length === 1 &&
                      f.isAfter(this.datePicked[0]) &&
                      d.classList.add(c.isLocked),
                    u.dateIsLocked(f, this.options, this.datePicked) &&
                      d.classList.add(c.isLocked),
                    this.options.highlightedDays.length &&
                      this.options.highlightedDays.filter(function (S) {
                        return S instanceof Array
                          ? f.isBetween(S[0], S[1], "[]")
                          : S.isSame(f, "day");
                      }).length &&
                      d.classList.add(c.isHighlighted),
                    (d.tabIndex = d.classList.contains("is-locked") ? -1 : 0),
                    this.emit("render:day", d, f),
                    d
                  );
                }),
                (v.prototype.renderFooter = function () {
                  var f = document.createElement("div");
                  if (
                    ((f.className = c.containerFooter),
                    this.options.footerHTML
                      ? (f.innerHTML = this.options.footerHTML)
                      : (f.innerHTML =
                          `
      <span class="` +
                          c.previewDateRange +
                          `"></span>
      <button type="button" class="` +
                          c.buttonCancel +
                          '">' +
                          this.options.buttonText.cancel +
                          `</button>
      <button type="button" class="` +
                          c.buttonApply +
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
                      f.querySelector("." + c.previewDateRange).innerHTML = d;
                    }
                  } else if (
                    (this.datePicked.length === 1 &&
                      f
                        .querySelector("." + c.buttonApply)
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
                    f.querySelector("." + c.previewDateRange).innerHTML =
                      "" + d + this.options.delimiter + y;
                  }
                  return this.emit("render:footer", f), f;
                }),
                (v.prototype.renderWeekNumber = function (f) {
                  var d = document.createElement("div"),
                    y = f.getWeek(this.options.firstDay);
                  return (
                    (d.className = c.weekNumber),
                    (d.innerHTML =
                      y === 53 && f.getMonth() === 0 ? "53 / 1" : y),
                    d
                  );
                }),
                (v.prototype.renderTooltip = function () {
                  var f = document.createElement("div");
                  return (f.className = c.containerTooltip), f;
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
            })(s.LPCore);
          n.Calendar = g;
        },
        function (r, n, i) {
          var o,
            a =
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
            s =
              (this && this.__assign) ||
              function () {
                return (s =
                  Object.assign ||
                  function (h) {
                    for (var v, f = 1, d = arguments.length; f < d; f++)
                      for (var y in (v = arguments[f]))
                        Object.prototype.hasOwnProperty.call(v, y) &&
                          (h[y] = v[y]);
                    return h;
                  }).apply(this, arguments);
              };
          Object.defineProperty(n, "__esModule", { value: !0 });
          var l = i(7),
            c = i(0),
            u = i(1),
            g = (function (h) {
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
                  (d.options = s(s({}, d.options), f.element.dataset)),
                  Object.keys(d.options).forEach(function (A) {
                    (d.options[A] !== "true" && d.options[A] !== "false") ||
                      (d.options[A] = d.options[A] === "true");
                  });
                var y = s(s({}, d.options.dropdowns), f.dropdowns),
                  w = s(s({}, d.options.buttonText), f.buttonText),
                  p = s(s({}, d.options.tooltipText), f.tooltipText);
                (d.options = s(s({}, d.options), f)),
                  (d.options.dropdowns = s({}, y)),
                  (d.options.buttonText = s({}, w)),
                  (d.options.tooltipText = s({}, p)),
                  d.options.elementEnd || (d.options.allowRepick = !1),
                  d.options.lockDays.length &&
                    (d.options.lockDays = c.DateTime.convertArray(
                      d.options.lockDays,
                      d.options.lockDaysFormat
                    )),
                  d.options.highlightedDays.length &&
                    (d.options.highlightedDays = c.DateTime.convertArray(
                      d.options.highlightedDays,
                      d.options.highlightedDaysFormat
                    ));
                var m = d.parseInput(),
                  b = m[0],
                  _ = m[1];
                d.options.startDate &&
                  (d.options.singleMode || d.options.endDate) &&
                  (b = new c.DateTime(
                    d.options.startDate,
                    d.options.format,
                    d.options.lang
                  )),
                  b &&
                    d.options.endDate &&
                    (_ = new c.DateTime(
                      d.options.endDate,
                      d.options.format,
                      d.options.lang
                    )),
                  b instanceof c.DateTime &&
                    !isNaN(b.getTime()) &&
                    (d.options.startDate = b),
                  d.options.startDate &&
                    _ instanceof c.DateTime &&
                    !isNaN(_.getTime()) &&
                    (d.options.endDate = _),
                  !d.options.singleMode ||
                    d.options.startDate instanceof c.DateTime ||
                    (d.options.startDate = null),
                  d.options.singleMode ||
                    (d.options.startDate instanceof c.DateTime &&
                      d.options.endDate instanceof c.DateTime) ||
                    ((d.options.startDate = null), (d.options.endDate = null));
                for (var S = 0; S < d.options.numberOfMonths; S += 1) {
                  var k =
                    d.options.startDate instanceof c.DateTime
                      ? d.options.startDate.clone()
                      : new c.DateTime();
                  if (
                    !d.options.startDate &&
                    (S === 0 || d.options.splitView)
                  ) {
                    var E = d.options.maxDate
                        ? new c.DateTime(d.options.maxDate)
                        : null,
                      D = d.options.minDate
                        ? new c.DateTime(d.options.minDate)
                        : null,
                      C = d.options.numberOfMonths - 1;
                    D && E && k.isAfter(E)
                      ? (k = D.clone()).setDate(1)
                      : !D &&
                        E &&
                        k.isAfter(E) &&
                        ((k = E.clone()).setDate(1),
                        k.setMonth(k.getMonth() - C));
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
                      var T = new Intl.PluralRules(d.options.lang);
                      d.pluralSelector = T.select.bind(T);
                    } catch {
                      d.pluralSelector = function (M) {
                        return Math.abs(M) === 0 ? "one" : "other";
                      };
                    }
                return d;
              }
              return (
                a(v, h),
                (v.add = function (f, d) {
                  u.Litepicker.prototype[f] = d;
                }),
                (v.prototype.DateTime = function (f, d) {
                  return f ? new c.DateTime(f, d) : new c.DateTime();
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
                        new c.DateTime(
                          this.options.element.value,
                          this.options.format
                        ),
                        new c.DateTime(
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
                        new c.DateTime(
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
                      new c.DateTime(w, this.options.format),
                      new c.DateTime(p, this.options.format),
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
                    m = window.scrollY || window.pageYOffset,
                    b = 0,
                    _ = 0;
                  if (w[0] !== "auto" && /top|bottom/.test(w[0]))
                    (b = d[w[0]] + m), w[0] === "top" && (b -= y.height);
                  else {
                    b = d.bottom + m;
                    var S = d.bottom + y.height > window.innerHeight,
                      k = d.top + m - y.height >= y.height;
                    S && k && (b = d.top + m - y.height);
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
            })(l.EventEmitter);
          n.LPCore = g;
        },
        function (r, n, i) {
          var o,
            a = typeof Reflect == "object" ? Reflect : null,
            s =
              a && typeof a.apply == "function"
                ? a.apply
                : function (p, m, b) {
                    return Function.prototype.apply.call(p, m, b);
                  };
          o =
            a && typeof a.ownKeys == "function"
              ? a.ownKeys
              : Object.getOwnPropertySymbols
              ? function (p) {
                  return Object.getOwnPropertyNames(p).concat(
                    Object.getOwnPropertySymbols(p)
                  );
                }
              : function (p) {
                  return Object.getOwnPropertyNames(p);
                };
          var l =
            Number.isNaN ||
            function (p) {
              return p != p;
            };
          function c() {
            c.init.call(this);
          }
          (r.exports = c),
            (c.EventEmitter = c),
            (c.prototype._events = void 0),
            (c.prototype._eventsCount = 0),
            (c.prototype._maxListeners = void 0);
          var u = 10;
          function g(p) {
            return p._maxListeners === void 0
              ? c.defaultMaxListeners
              : p._maxListeners;
          }
          function h(p, m, b, _) {
            var S, k, E, D;
            if (typeof b != "function")
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof b
              );
            if (
              ((k = p._events) === void 0
                ? ((k = p._events = Object.create(null)), (p._eventsCount = 0))
                : (k.newListener !== void 0 &&
                    (p.emit("newListener", m, b.listener ? b.listener : b),
                    (k = p._events)),
                  (E = k[m])),
              E === void 0)
            )
              (E = k[m] = b), ++p._eventsCount;
            else if (
              (typeof E == "function"
                ? (E = k[m] = _ ? [b, E] : [E, b])
                : _
                ? E.unshift(b)
                : E.push(b),
              (S = g(p)) > 0 && E.length > S && !E.warned)
            ) {
              E.warned = !0;
              var C = new Error(
                "Possible EventEmitter memory leak detected. " +
                  E.length +
                  " " +
                  String(m) +
                  " listeners added. Use emitter.setMaxListeners() to increase limit"
              );
              (C.name = "MaxListenersExceededWarning"),
                (C.emitter = p),
                (C.type = m),
                (C.count = E.length),
                (D = C),
                console && console.warn && console.warn(D);
            }
            return p;
          }
          function v() {
            for (var p = [], m = 0; m < arguments.length; m++)
              p.push(arguments[m]);
            this.fired ||
              (this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              s(this.listener, this.target, p));
          }
          function f(p, m, b) {
            var _ = {
                fired: !1,
                wrapFn: void 0,
                target: p,
                type: m,
                listener: b,
              },
              S = v.bind(_);
            return (S.listener = b), (_.wrapFn = S), S;
          }
          function d(p, m, b) {
            var _ = p._events;
            if (_ === void 0) return [];
            var S = _[m];
            return S === void 0
              ? []
              : typeof S == "function"
              ? b
                ? [S.listener || S]
                : [S]
              : b
              ? (function (k) {
                  for (var E = new Array(k.length), D = 0; D < E.length; ++D)
                    E[D] = k[D].listener || k[D];
                  return E;
                })(S)
              : w(S, S.length);
          }
          function y(p) {
            var m = this._events;
            if (m !== void 0) {
              var b = m[p];
              if (typeof b == "function") return 1;
              if (b !== void 0) return b.length;
            }
            return 0;
          }
          function w(p, m) {
            for (var b = new Array(m), _ = 0; _ < m; ++_) b[_] = p[_];
            return b;
          }
          Object.defineProperty(c, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
              return u;
            },
            set: function (p) {
              if (typeof p != "number" || p < 0 || l(p))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    p +
                    "."
                );
              u = p;
            },
          }),
            (c.init = function () {
              (this._events !== void 0 &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (c.prototype.setMaxListeners = function (p) {
              if (typeof p != "number" || p < 0 || l(p))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    p +
                    "."
                );
              return (this._maxListeners = p), this;
            }),
            (c.prototype.getMaxListeners = function () {
              return g(this);
            }),
            (c.prototype.emit = function (p) {
              for (var m = [], b = 1; b < arguments.length; b++)
                m.push(arguments[b]);
              var _ = p === "error",
                S = this._events;
              if (S !== void 0) _ = _ && S.error === void 0;
              else if (!_) return !1;
              if (_) {
                var k;
                if ((m.length > 0 && (k = m[0]), k instanceof Error)) throw k;
                var E = new Error(
                  "Unhandled error." + (k ? " (" + k.message + ")" : "")
                );
                throw ((E.context = k), E);
              }
              var D = S[p];
              if (D === void 0) return !1;
              if (typeof D == "function") s(D, this, m);
              else {
                var C = D.length,
                  T = w(D, C);
                for (b = 0; b < C; ++b) s(T[b], this, m);
              }
              return !0;
            }),
            (c.prototype.addListener = function (p, m) {
              return h(this, p, m, !1);
            }),
            (c.prototype.on = c.prototype.addListener),
            (c.prototype.prependListener = function (p, m) {
              return h(this, p, m, !0);
            }),
            (c.prototype.once = function (p, m) {
              if (typeof m != "function")
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof m
                );
              return this.on(p, f(this, p, m)), this;
            }),
            (c.prototype.prependOnceListener = function (p, m) {
              if (typeof m != "function")
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof m
                );
              return this.prependListener(p, f(this, p, m)), this;
            }),
            (c.prototype.removeListener = function (p, m) {
              var b, _, S, k, E;
              if (typeof m != "function")
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof m
                );
              if ((_ = this._events) === void 0) return this;
              if ((b = _[p]) === void 0) return this;
              if (b === m || b.listener === m)
                --this._eventsCount == 0
                  ? (this._events = Object.create(null))
                  : (delete _[p],
                    _.removeListener &&
                      this.emit("removeListener", p, b.listener || m));
              else if (typeof b != "function") {
                for (S = -1, k = b.length - 1; k >= 0; k--)
                  if (b[k] === m || b[k].listener === m) {
                    (E = b[k].listener), (S = k);
                    break;
                  }
                if (S < 0) return this;
                S === 0
                  ? b.shift()
                  : (function (D, C) {
                      for (; C + 1 < D.length; C++) D[C] = D[C + 1];
                      D.pop();
                    })(b, S),
                  b.length === 1 && (_[p] = b[0]),
                  _.removeListener !== void 0 &&
                    this.emit("removeListener", p, E || m);
              }
              return this;
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.removeAllListeners = function (p) {
              var m, b, _;
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
              if (typeof (m = b[p]) == "function") this.removeListener(p, m);
              else if (m !== void 0)
                for (_ = m.length - 1; _ >= 0; _--)
                  this.removeListener(p, m[_]);
              return this;
            }),
            (c.prototype.listeners = function (p) {
              return d(this, p, !0);
            }),
            (c.prototype.rawListeners = function (p) {
              return d(this, p, !1);
            }),
            (c.listenerCount = function (p, m) {
              return typeof p.listenerCount == "function"
                ? p.listenerCount(m)
                : y.call(p, m);
            }),
            (c.prototype.listenerCount = y),
            (c.prototype.eventNames = function () {
              return this._eventsCount > 0 ? o(this._events) : [];
            });
        },
        function (r, n, i) {
          (n = i(9)(!1)).push([
            r.i,
            `:root{--litepicker-container-months-color-bg: #fff;--litepicker-container-months-box-shadow-color: #ddd;--litepicker-footer-color-bg: #fafafa;--litepicker-footer-box-shadow-color: #ddd;--litepicker-tooltip-color-bg: #fff;--litepicker-month-header-color: #333;--litepicker-button-prev-month-color: #9e9e9e;--litepicker-button-next-month-color: #9e9e9e;--litepicker-button-prev-month-color-hover: #2196f3;--litepicker-button-next-month-color-hover: #2196f3;--litepicker-month-width: calc(var(--litepicker-day-width) * 7);--litepicker-month-weekday-color: #9e9e9e;--litepicker-month-week-number-color: #9e9e9e;--litepicker-day-width: 38px;--litepicker-day-color: #333;--litepicker-day-color-hover: #2196f3;--litepicker-is-today-color: #f44336;--litepicker-is-in-range-color: #bbdefb;--litepicker-is-locked-color: #9e9e9e;--litepicker-is-start-color: #fff;--litepicker-is-start-color-bg: #2196f3;--litepicker-is-end-color: #fff;--litepicker-is-end-color-bg: #2196f3;--litepicker-button-cancel-color: #fff;--litepicker-button-cancel-color-bg: #9e9e9e;--litepicker-button-apply-color: #fff;--litepicker-button-apply-color-bg: #2196f3;--litepicker-button-reset-color: #909090;--litepicker-button-reset-color-hover: #2196f3;--litepicker-highlighted-day-color: #333;--litepicker-highlighted-day-color-bg: #ffeb3b}.show-week-numbers{--litepicker-month-width: calc(var(--litepicker-day-width) * 8)}.litepicker{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size:0.8em;display:none}.litepicker button{border:none;background:none}.litepicker .container__main{display:-webkit-box;display:-ms-flexbox;display:flex}.litepicker .container__months{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--litepicker-container-months-color-bg);border-radius:5px;-webkit-box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);width:calc(var(--litepicker-month-width) + 10px);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months.columns-2{width:calc((var(--litepicker-month-width) * 2) + 20px)}.litepicker .container__months.columns-3{width:calc((var(--litepicker-month-width) * 3) + 30px)}.litepicker .container__months.columns-4{width:calc((var(--litepicker-month-width) * 4) + 40px)}.litepicker .container__months.split-view .month-item-header .button-previous-month,.litepicker .container__months.split-view .month-item-header .button-next-month{visibility:visible}.litepicker .container__months .month-item{padding:5px;width:var(--litepicker-month-width);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months .month-item-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;padding:10px 5px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--litepicker-month-header-color)}.litepicker .container__months .month-item-header div{-webkit-box-flex:1;-ms-flex:1;flex:1}.litepicker .container__months .month-item-header div>.month-item-name{margin-right:5px}.litepicker .container__months .month-item-header div>.month-item-year{padding:0}.litepicker .container__months .month-item-header .reset-button{color:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button>svg{fill:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button *{pointer-events:none}.litepicker .container__months .month-item-header .reset-button:hover{color:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .reset-button:hover>svg{fill:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .button-previous-month,.litepicker .container__months .month-item-header .button-next-month{visibility:hidden;text-decoration:none;padding:3px 5px;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__months .month-item-header .button-previous-month *,.litepicker .container__months .month-item-header .button-next-month *{pointer-events:none}.litepicker .container__months .month-item-header .button-previous-month{color:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month>svg,.litepicker .container__months .month-item-header .button-previous-month>img{fill:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month:hover{color:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-previous-month:hover>svg{fill:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month{color:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month>svg,.litepicker .container__months .month-item-header .button-next-month>img{fill:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month:hover{color:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month:hover>svg{fill:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-weekdays-row{display:-webkit-box;display:-ms-flexbox;display:flex;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:var(--litepicker-month-weekday-color)}.litepicker .container__months .month-item-weekdays-row>div{padding:5px 0;font-size:85%;-webkit-box-flex:1;-ms-flex:1;flex:1;width:var(--litepicker-day-width);text-align:center}.litepicker .container__months .month-item:first-child .button-previous-month{visibility:visible}.litepicker .container__months .month-item:last-child .button-next-month{visibility:visible}.litepicker .container__months .month-item.no-previous-month .button-previous-month{visibility:hidden}.litepicker .container__months .month-item.no-next-month .button-next-month{visibility:hidden}.litepicker .container__days{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__days>div,.litepicker .container__days>a{padding:5px 0;width:var(--litepicker-day-width)}.litepicker .container__days .day-item{color:var(--litepicker-day-color);text-align:center;text-decoration:none;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__days .day-item:hover{color:var(--litepicker-day-color-hover);-webkit-box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover);box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover)}.litepicker .container__days .day-item.is-today{color:var(--litepicker-is-today-color)}.litepicker .container__days .day-item.is-locked{color:var(--litepicker-is-locked-color)}.litepicker .container__days .day-item.is-locked:hover{color:var(--litepicker-is-locked-color);-webkit-box-shadow:none;box-shadow:none;cursor:default}.litepicker .container__days .day-item.is-in-range{background-color:var(--litepicker-is-in-range-color);border-radius:0}.litepicker .container__days .day-item.is-start-date{color:var(--litepicker-is-start-color);background-color:var(--litepicker-is-start-color-bg);border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-flipped{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date{color:var(--litepicker-is-end-color);background-color:var(--litepicker-is-end-color-bg);border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date.is-flipped{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-end-date{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-highlighted{color:var(--litepicker-highlighted-day-color);background-color:var(--litepicker-highlighted-day-color-bg)}.litepicker .container__days .week-number{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--litepicker-month-week-number-color);font-size:85%}.litepicker .container__footer{text-align:right;padding:10px 5px;margin:0 5px;background-color:var(--litepicker-footer-color-bg);-webkit-box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.litepicker .container__footer .preview-date-range{margin-right:10px;font-size:90%}.litepicker .container__footer .button-cancel{background-color:var(--litepicker-button-cancel-color-bg);color:var(--litepicker-button-cancel-color);border:0;padding:3px 7px 4px;border-radius:3px}.litepicker .container__footer .button-cancel *{pointer-events:none}.litepicker .container__footer .button-apply{background-color:var(--litepicker-button-apply-color-bg);color:var(--litepicker-button-apply-color);border:0;padding:3px 7px 4px;border-radius:3px;margin-left:10px;margin-right:10px}.litepicker .container__footer .button-apply:disabled{opacity:0.7}.litepicker .container__footer .button-apply *{pointer-events:none}.litepicker .container__tooltip{position:absolute;margin-top:-4px;padding:4px 8px;border-radius:4px;background-color:var(--litepicker-tooltip-color-bg);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25);white-space:nowrap;font-size:11px;pointer-events:none;visibility:hidden}.litepicker .container__tooltip:before{position:absolute;bottom:-5px;left:calc(50% - 5px);border-top:5px solid rgba(0,0,0,0.12);border-right:5px solid transparent;border-left:5px solid transparent;content:""}.litepicker .container__tooltip:after{position:absolute;bottom:-4px;left:calc(50% - 4px);border-top:4px solid var(--litepicker-tooltip-color-bg);border-right:4px solid transparent;border-left:4px solid transparent;content:""}
`,
            "",
          ]),
            (n.locals = {
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
            (r.exports = n);
        },
        function (r, n, i) {
          r.exports = function (o) {
            var a = [];
            return (
              (a.toString = function () {
                return this.map(function (s) {
                  var l = (function (c, u) {
                    var g = c[1] || "",
                      h = c[3];
                    if (!h) return g;
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
                      return [g].concat(f).concat([v]).join(`
`);
                    }
                    var d, y, w;
                    return [g].join(`
`);
                  })(s, o);
                  return s[2] ? "@media ".concat(s[2], " {").concat(l, "}") : l;
                }).join("");
              }),
              (a.i = function (s, l, c) {
                typeof s == "string" && (s = [[null, s, ""]]);
                var u = {};
                if (c)
                  for (var g = 0; g < this.length; g++) {
                    var h = this[g][0];
                    h != null && (u[h] = !0);
                  }
                for (var v = 0; v < s.length; v++) {
                  var f = [].concat(s[v]);
                  (c && u[f[0]]) ||
                    (l &&
                      (f[2]
                        ? (f[2] = "".concat(l, " and ").concat(f[2]))
                        : (f[2] = l)),
                    a.push(f));
                }
              }),
              a
            );
          };
        },
        function (r, n, i) {
          var o,
            a = {},
            s = function () {
              return (
                o === void 0 &&
                  (o = !!(window && document && document.all && !window.atob)),
                o
              );
            },
            l = (function () {
              var m = {};
              return function (b) {
                if (m[b] === void 0) {
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
                  m[b] = _;
                }
                return m[b];
              };
            })();
          function c(m, b) {
            for (var _ = [], S = {}, k = 0; k < m.length; k++) {
              var E = m[k],
                D = b.base ? E[0] + b.base : E[0],
                C = { css: E[1], media: E[2], sourceMap: E[3] };
              S[D]
                ? S[D].parts.push(C)
                : _.push((S[D] = { id: D, parts: [C] }));
            }
            return _;
          }
          function u(m, b) {
            for (var _ = 0; _ < m.length; _++) {
              var S = m[_],
                k = a[S.id],
                E = 0;
              if (k) {
                for (k.refs++; E < k.parts.length; E++) k.parts[E](S.parts[E]);
                for (; E < S.parts.length; E++) k.parts.push(p(S.parts[E], b));
              } else {
                for (var D = []; E < S.parts.length; E++)
                  D.push(p(S.parts[E], b));
                a[S.id] = { id: S.id, refs: 1, parts: D };
              }
            }
          }
          function g(m) {
            var b = document.createElement("style");
            if (m.attributes.nonce === void 0) {
              var _ = i.nc;
              _ && (m.attributes.nonce = _);
            }
            if (
              (Object.keys(m.attributes).forEach(function (k) {
                b.setAttribute(k, m.attributes[k]);
              }),
              typeof m.insert == "function")
            )
              m.insert(b);
            else {
              var S = l(m.insert || "head");
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
              function (m, b) {
                return (
                  (h[m] = b),
                  h.filter(Boolean).join(`
`)
                );
              });
          function f(m, b, _, S) {
            var k = _ ? "" : S.css;
            if (m.styleSheet) m.styleSheet.cssText = v(b, k);
            else {
              var E = document.createTextNode(k),
                D = m.childNodes;
              D[b] && m.removeChild(D[b]),
                D.length ? m.insertBefore(E, D[b]) : m.appendChild(E);
            }
          }
          function d(m, b, _) {
            var S = _.css,
              k = _.media,
              E = _.sourceMap;
            if (
              (k && m.setAttribute("media", k),
              E &&
                btoa &&
                (S += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(E)))),
                  " */"
                )),
              m.styleSheet)
            )
              m.styleSheet.cssText = S;
            else {
              for (; m.firstChild; ) m.removeChild(m.firstChild);
              m.appendChild(document.createTextNode(S));
            }
          }
          var y = null,
            w = 0;
          function p(m, b) {
            var _, S, k;
            if (b.singleton) {
              var E = w++;
              (_ = y || (y = g(b))),
                (S = f.bind(null, _, E, !1)),
                (k = f.bind(null, _, E, !0));
            } else
              (_ = g(b)),
                (S = d.bind(null, _, b)),
                (k = function () {
                  (function (D) {
                    if (D.parentNode === null) return !1;
                    D.parentNode.removeChild(D);
                  })(_);
                });
            return (
              S(m),
              function (D) {
                if (D) {
                  if (
                    D.css === m.css &&
                    D.media === m.media &&
                    D.sourceMap === m.sourceMap
                  )
                    return;
                  S((m = D));
                } else k();
              }
            );
          }
          r.exports = function (m, b) {
            ((b = b || {}).attributes =
              typeof b.attributes == "object" ? b.attributes : {}),
              b.singleton ||
                typeof b.singleton == "boolean" ||
                (b.singleton = s());
            var _ = c(m, b);
            return (
              u(_, b),
              function (S) {
                for (var k = [], E = 0; E < _.length; E++) {
                  var D = _[E],
                    C = a[D.id];
                  C && (C.refs--, k.push(C));
                }
                S && u(c(S, b), b);
                for (var T = 0; T < k.length; T++) {
                  var A = k[T];
                  if (A.refs === 0) {
                    for (var M = 0; M < A.parts.length; M++) A.parts[M]();
                    delete a[A.id];
                  }
                }
              }
            );
          };
        },
        function (r, n, i) {
          var o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (c) {
                  for (var u, g = 1, h = arguments.length; g < h; g++)
                    for (var v in (u = arguments[g]))
                      Object.prototype.hasOwnProperty.call(u, v) &&
                        (c[v] = u[v]);
                  return c;
                }).apply(this, arguments);
            };
          Object.defineProperty(n, "__esModule", { value: !0 });
          var a = i(0),
            s = i(1),
            l = i(2);
          (s.Litepicker.prototype.show = function (c) {
            c === void 0 && (c = null), this.emit("before:show", c);
            var u = c || this.options.element;
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
              this.scrollToDate(c),
                this.render(),
                (this.ui.style.position = "absolute"),
                (this.ui.style.display = "block"),
                (this.ui.style.zIndex = this.options.zIndex);
              var g = this.findPosition(u);
              (this.ui.style.top = g.top + "px"),
                (this.ui.style.left = g.left + "px"),
                (this.ui.style.right = null),
                (this.ui.style.bottom = null),
                this.emit("show", c);
            }
          }),
            (s.Litepicker.prototype.hide = function () {
              this.isShowning() &&
                ((this.datePicked.length = 0),
                this.updateInput(),
                this.options.inlineMode
                  ? this.render()
                  : ((this.ui.style.display = "none"), this.emit("hide")));
            }),
            (s.Litepicker.prototype.getDate = function () {
              return this.getStartDate();
            }),
            (s.Litepicker.prototype.getStartDate = function () {
              return this.options.startDate
                ? this.options.startDate.clone()
                : null;
            }),
            (s.Litepicker.prototype.getEndDate = function () {
              return this.options.endDate ? this.options.endDate.clone() : null;
            }),
            (s.Litepicker.prototype.setDate = function (c, u) {
              u === void 0 && (u = !1);
              var g = new a.DateTime(c, this.options.format, this.options.lang);
              l.dateIsLocked(g, this.options, [g]) && !u
                ? this.emit("error:date", g)
                : (this.setStartDate(c),
                  this.options.inlineMode && this.render(),
                  this.emit("selected", this.getDate()));
            }),
            (s.Litepicker.prototype.setStartDate = function (c) {
              c &&
                ((this.options.startDate = new a.DateTime(
                  c,
                  this.options.format,
                  this.options.lang
                )),
                this.updateInput());
            }),
            (s.Litepicker.prototype.setEndDate = function (c) {
              c &&
                ((this.options.endDate = new a.DateTime(
                  c,
                  this.options.format,
                  this.options.lang
                )),
                this.options.startDate.getTime() >
                  this.options.endDate.getTime() &&
                  ((this.options.endDate = this.options.startDate.clone()),
                  (this.options.startDate = new a.DateTime(
                    c,
                    this.options.format,
                    this.options.lang
                  ))),
                this.updateInput());
            }),
            (s.Litepicker.prototype.setDateRange = function (c, u, g) {
              g === void 0 && (g = !1), (this.triggerElement = void 0);
              var h = new a.DateTime(c, this.options.format, this.options.lang),
                v = new a.DateTime(u, this.options.format, this.options.lang);
              (this.options.disallowLockDaysInRange
                ? l.rangeIsLocked([h, v], this.options)
                : l.dateIsLocked(h, this.options, [h, v]) ||
                  l.dateIsLocked(v, this.options, [h, v])) && !g
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
            (s.Litepicker.prototype.gotoDate = function (c, u) {
              u === void 0 && (u = 0);
              var g = new a.DateTime(c);
              g.setDate(1), (this.calendars[u] = g.clone()), this.render();
            }),
            (s.Litepicker.prototype.setLockDays = function (c) {
              (this.options.lockDays = a.DateTime.convertArray(
                c,
                this.options.lockDaysFormat
              )),
                this.render();
            }),
            (s.Litepicker.prototype.setHighlightedDays = function (c) {
              (this.options.highlightedDays = a.DateTime.convertArray(
                c,
                this.options.highlightedDaysFormat
              )),
                this.render();
            }),
            (s.Litepicker.prototype.setOptions = function (c) {
              delete c.element,
                delete c.elementEnd,
                delete c.parentEl,
                c.startDate &&
                  (c.startDate = new a.DateTime(
                    c.startDate,
                    this.options.format,
                    this.options.lang
                  )),
                c.endDate &&
                  (c.endDate = new a.DateTime(
                    c.endDate,
                    this.options.format,
                    this.options.lang
                  ));
              var u = o(o({}, this.options.dropdowns), c.dropdowns),
                g = o(o({}, this.options.buttonText), c.buttonText),
                h = o(o({}, this.options.tooltipText), c.tooltipText);
              (this.options = o(o({}, this.options), c)),
                (this.options.dropdowns = o({}, u)),
                (this.options.buttonText = o({}, g)),
                (this.options.tooltipText = o({}, h)),
                !this.options.singleMode ||
                  this.options.startDate instanceof a.DateTime ||
                  ((this.options.startDate = null),
                  (this.options.endDate = null)),
                this.options.singleMode ||
                  (this.options.startDate instanceof a.DateTime &&
                    this.options.endDate instanceof a.DateTime) ||
                  ((this.options.startDate = null),
                  (this.options.endDate = null));
              for (var v = 0; v < this.options.numberOfMonths; v += 1) {
                var f = this.options.startDate
                  ? this.options.startDate.clone()
                  : new a.DateTime();
                f.setDate(1),
                  f.setMonth(f.getMonth() + v),
                  (this.calendars[v] = f);
              }
              this.options.lockDays.length &&
                (this.options.lockDays = a.DateTime.convertArray(
                  this.options.lockDays,
                  this.options.lockDaysFormat
                )),
                this.options.highlightedDays.length &&
                  (this.options.highlightedDays = a.DateTime.convertArray(
                    this.options.highlightedDays,
                    this.options.highlightedDaysFormat
                  )),
                this.render(),
                this.options.inlineMode && this.show(),
                this.updateInput();
            }),
            (s.Litepicker.prototype.clearSelection = function () {
              (this.options.startDate = null),
                (this.options.endDate = null),
                (this.datePicked.length = 0),
                this.updateInput(),
                this.isShowning() && this.render(),
                this.emit("clear:selection");
            }),
            (s.Litepicker.prototype.destroy = function () {
              this.ui &&
                this.ui.parentNode &&
                (this.ui.parentNode.removeChild(this.ui), (this.ui = null)),
                this.emit("destroy");
            });
        },
      ]);
    });
  })(tf);
  var By = tf.exports;
  const jy = Es(By);
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
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    (r.m = e),
      (r.c = t),
      (r.d = function (n, i, o) {
        r.o(n, i) || Object.defineProperty(n, i, { enumerable: !0, get: o });
      }),
      (r.r = function (n) {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (r.t = function (n, i) {
        if (
          (1 & i && (n = r(n)),
          8 & i || (4 & i && typeof n == "object" && n && n.__esModule))
        )
          return n;
        var o = Object.create(null);
        if (
          (r.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: n }),
          2 & i && typeof n != "string")
        )
          for (var a in n)
            r.d(
              o,
              a,
              function (s) {
                return n[s];
              }.bind(null, a)
            );
        return o;
      }),
      (r.n = function (n) {
        var i =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return r.d(i, "a", i), i;
      }),
      (r.o = function (n, i) {
        return Object.prototype.hasOwnProperty.call(n, i);
      }),
      (r.p = ""),
      r((r.s = 5));
  })([
    function (e, t, r) {
      e.exports = function (n) {
        var i = [];
        return (
          (i.toString = function () {
            return this.map(function (o) {
              var a = (function (s, l) {
                var c = s[1] || "",
                  u = s[3];
                if (!u) return c;
                if (l && typeof btoa == "function") {
                  var g =
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
                  return [c].concat(h).concat([g]).join(`
`);
                }
                var v, f, d;
                return [c].join(`
`);
              })(o, n);
              return o[2] ? "@media ".concat(o[2], " {").concat(a, "}") : a;
            }).join("");
          }),
          (i.i = function (o, a, s) {
            typeof o == "string" && (o = [[null, o, ""]]);
            var l = {};
            if (s)
              for (var c = 0; c < this.length; c++) {
                var u = this[c][0];
                u != null && (l[u] = !0);
              }
            for (var g = 0; g < o.length; g++) {
              var h = [].concat(o[g]);
              (s && l[h[0]]) ||
                (a &&
                  (h[2]
                    ? (h[2] = "".concat(a, " and ").concat(h[2]))
                    : (h[2] = a)),
                i.push(h));
            }
          }),
          i
        );
      };
    },
    function (e, t, r) {
      var n,
        i = {},
        o = function () {
          return (
            n === void 0 &&
              (n = !!(window && document && document.all && !window.atob)),
            n
          );
        },
        a = (function () {
          var w = {};
          return function (p) {
            if (w[p] === void 0) {
              var m = document.querySelector(p);
              if (
                window.HTMLIFrameElement &&
                m instanceof window.HTMLIFrameElement
              )
                try {
                  m = m.contentDocument.head;
                } catch {
                  m = null;
                }
              w[p] = m;
            }
            return w[p];
          };
        })();
      function s(w, p) {
        for (var m = [], b = {}, _ = 0; _ < w.length; _++) {
          var S = w[_],
            k = p.base ? S[0] + p.base : S[0],
            E = { css: S[1], media: S[2], sourceMap: S[3] };
          b[k] ? b[k].parts.push(E) : m.push((b[k] = { id: k, parts: [E] }));
        }
        return m;
      }
      function l(w, p) {
        for (var m = 0; m < w.length; m++) {
          var b = w[m],
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
      function c(w) {
        var p = document.createElement("style");
        if (w.attributes.nonce === void 0) {
          var m = r.nc;
          m && (w.attributes.nonce = m);
        }
        if (
          (Object.keys(w.attributes).forEach(function (_) {
            p.setAttribute(_, w.attributes[_]);
          }),
          typeof w.insert == "function")
        )
          w.insert(p);
        else {
          var b = a(w.insert || "head");
          if (!b)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          b.appendChild(p);
        }
        return p;
      }
      var u,
        g =
          ((u = []),
          function (w, p) {
            return (
              (u[w] = p),
              u.filter(Boolean).join(`
`)
            );
          });
      function h(w, p, m, b) {
        var _ = m ? "" : b.css;
        if (w.styleSheet) w.styleSheet.cssText = g(p, _);
        else {
          var S = document.createTextNode(_),
            k = w.childNodes;
          k[p] && w.removeChild(k[p]),
            k.length ? w.insertBefore(S, k[p]) : w.appendChild(S);
        }
      }
      function v(w, p, m) {
        var b = m.css,
          _ = m.media,
          S = m.sourceMap;
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
        var m, b, _;
        if (p.singleton) {
          var S = d++;
          (m = f || (f = c(p))),
            (b = h.bind(null, m, S, !1)),
            (_ = h.bind(null, m, S, !0));
        } else
          (m = c(p)),
            (b = v.bind(null, m, p)),
            (_ = function () {
              (function (k) {
                if (k.parentNode === null) return !1;
                k.parentNode.removeChild(k);
              })(m);
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
        var m = s(w, p);
        return (
          l(m, p),
          function (b) {
            for (var _ = [], S = 0; S < m.length; S++) {
              var k = m[S],
                E = i[k.id];
              E && (E.refs--, _.push(E));
            }
            b && l(s(b, p), p);
            for (var D = 0; D < _.length; D++) {
              var C = _[D];
              if (C.refs === 0) {
                for (var T = 0; T < C.parts.length; T++) C.parts[T]();
                delete i[C.id];
              }
            }
          }
        );
      };
    },
    ,
    ,
    ,
    function (e, t, r) {
      r.r(t), r(6);
      function n(a, s) {
        var l = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(a);
          s &&
            (c = c.filter(function (u) {
              return Object.getOwnPropertyDescriptor(a, u).enumerable;
            })),
            l.push.apply(l, c);
        }
        return l;
      }
      function i(a) {
        for (var s = 1; s < arguments.length; s++) {
          var l = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? n(Object(l), !0).forEach(function (c) {
                o(a, c, l[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
            : n(Object(l)).forEach(function (c) {
                Object.defineProperty(
                  a,
                  c,
                  Object.getOwnPropertyDescriptor(l, c)
                );
              });
        }
        return a;
      }
      function o(a, s, l) {
        return (
          s in a
            ? Object.defineProperty(a, s, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[s] = l),
          a
        );
      }
      Litepicker.add("mobilefriendly", {
        init: function (a) {
          var s = a.options;
          (a.options.mobilefriendly = i(
            i({}, { breakpoint: 480 }),
            s.mobilefriendly
          )),
            Object.defineProperties(a, {
              xTouchDown: { value: null, writable: !0 },
              yTouchDown: { value: null, writable: !0 },
              touchTargetMonth: { value: null, writable: !0 },
            });
          var l = !1;
          try {
            var c = Object.defineProperty({}, "passive", {
              get: function () {
                l = !0;
              },
            });
            window.addEventListener("testPassive", null, c),
              window.removeEventListener("testPassive", null, c);
          } catch {}
          function u() {
            var y = g() === "portrait";
            return window.matchMedia(
              "(max-device-"
                .concat(y ? "width" : "height", ": ")
                .concat(a.options.mobilefriendly.breakpoint, "px)")
            ).matches;
          }
          function g() {
            return "orientation" in window.screen &&
              "type" in window.screen.orientation
              ? window.screen.orientation.type.replace(/\-\w+$/, "")
              : window.matchMedia("(orientation: portrait)").matches
              ? "portrait"
              : "landscape";
          }
          function h() {
            g() === "portrait"
              ? ((a.options.numberOfMonths = 1),
                (a.options.numberOfColumns = 1))
              : ((a.options.numberOfMonths = 2),
                (a.options.numberOfColumns = 2));
          }
          var v = function (y) {
              var w = y.touches[0];
              (a.xTouchDown = w.clientX), (a.yTouchDown = w.clientY);
            },
            f = function (y) {
              if (a.xTouchDown && a.yTouchDown) {
                var w = y.touches[0].clientX,
                  p = y.touches[0].clientY,
                  m = a.xTouchDown - w,
                  b = a.yTouchDown - p,
                  _ = Math.abs(m) > Math.abs(b),
                  S = a.options.numberOfMonths,
                  k = null,
                  E = !1,
                  D = "",
                  C = Array.from(a.ui.querySelectorAll(".month-item"));
                if (_) {
                  var T = a.DateTime(
                      a.ui.querySelector(".day-item").dataset.time
                    ),
                    A = Number("".concat(1 - Math.abs(m) / 100)),
                    M = 0;
                  if (m > 0) {
                    (M = -Math.abs(m)), (k = T.clone().add(S, "month"));
                    var j = a.options.maxDate;
                    (E = !j || k.isSameOrBefore(a.DateTime(j), "month")),
                      (D = "next");
                  } else {
                    (M = Math.abs(m)), (k = T.clone().subtract(S, "month"));
                    var z = a.options.minDate;
                    (E = !z || k.isSameOrAfter(a.DateTime(z), "month")),
                      (D = "prev");
                  }
                  E &&
                    C.map(function ($) {
                      ($.style.opacity = A),
                        ($.style.transform = "translateX(".concat(M, "px)"));
                    });
                }
                Math.abs(m) + Math.abs(b) > 100 &&
                  _ &&
                  k &&
                  E &&
                  ((a.touchTargetMonth = D), a.gotoDate(k));
              }
            },
            d = function (y) {
              a.touchTargetMonth ||
                Array.from(a.ui.querySelectorAll(".month-item")).map(function (
                  w
                ) {
                  (w.style.transform = "translateX(0px)"),
                    (w.style.opacity = 1);
                }),
                (a.xTouchDown = null),
                (a.yTouchDown = null);
            };
          (a.backdrop = document.createElement("div")),
            (a.backdrop.className = "litepicker-backdrop"),
            a.backdrop.addEventListener("click", a.hide()),
            s.element &&
              s.element.parentNode &&
              s.element.parentNode.appendChild(a.backdrop),
            window.addEventListener("orientationchange", function (y) {
              window.addEventListener("resize", function w() {
                if (u() && a.isShowning()) {
                  var p = g();
                  switch (p) {
                    case "landscape":
                      (s.numberOfMonths = 2), (s.numberOfColumns = 2);
                      break;
                    default:
                      (s.numberOfMonths = 1), (s.numberOfColumns = 1);
                  }
                  a.ui.classList.toggle(
                    "mobilefriendly-portrait",
                    p === "portrait"
                  ),
                    a.ui.classList.toggle(
                      "mobilefriendly-landscape",
                      p === "landscape"
                    ),
                    a.render();
                }
                window.removeEventListener("resize", w);
              });
            }),
            s.inlineMode &&
              u() &&
              (window.dispatchEvent(new Event("orientationchange")),
              window.dispatchEvent(new Event("resize"))),
            a.on("before:show", function (y) {
              if (((a.triggerElement = y), !a.options.inlineMode && u())) {
                a.emit("mobilefriendly.before:show", y),
                  (a.ui.style.position = "fixed"),
                  (a.ui.style.display = "block"),
                  h(),
                  a.scrollToDate(y),
                  a.render();
                var w = g();
                a.ui.classList.add("mobilefriendly"),
                  a.ui.classList.toggle(
                    "mobilefriendly-portrait",
                    w === "portrait"
                  ),
                  a.ui.classList.toggle(
                    "mobilefriendly-landscape",
                    w === "landscape"
                  ),
                  (a.ui.style.top = "50%"),
                  (a.ui.style.left = "50%"),
                  (a.ui.style.right = null),
                  (a.ui.style.bottom = null),
                  (a.ui.style.zIndex = a.options.zIndex),
                  (a.backdrop.style.display = "block"),
                  (a.backdrop.style.zIndex = a.options.zIndex - 1),
                  document.body.classList.add("litepicker-open"),
                  (y || a.options.element).blur(),
                  a.emit("mobilefriendly.show", y);
              } else u() && (h(), a.render());
            }),
            a.on("render", function (y) {
              a.touchTargetMonth &&
                Array.from(a.ui.querySelectorAll(".month-item")).map(function (
                  w
                ) {
                  return w.classList.add(
                    "touch-target-".concat(a.touchTargetMonth)
                  );
                }),
                (a.touchTargetMonth = null);
            }),
            a.on("hide", function () {
              document.body.classList.remove("litepicker-open"),
                (a.backdrop.style.display = "none"),
                a.ui.classList.remove(
                  "mobilefriendly",
                  "mobilefriendly-portrait",
                  "mobilefriendly-landscape"
                );
            }),
            a.on("destroy", function () {
              a.backdrop &&
                a.backdrop.parentNode &&
                a.backdrop.parentNode.removeChild(a.backdrop);
            }),
            a.ui.addEventListener("touchstart", v, !!l && { passive: !0 }),
            a.ui.addEventListener("touchmove", f, !!l && { passive: !0 }),
            a.ui.addEventListener("touchend", d, !!l && { passive: !0 });
        },
      });
    },
    function (e, t, r) {
      var n = r(7);
      typeof n == "string" && (n = [[e.i, n, ""]]);
      var i = {
        insert: function (o) {
          var a = document.querySelector("head"),
            s = window._lastElementInsertedByStyleLoader;
          window.disableLitepickerStyles ||
            (s
              ? s.nextSibling
                ? a.insertBefore(o, s.nextSibling)
                : a.appendChild(o)
              : a.insertBefore(o, a.firstChild),
            (window._lastElementInsertedByStyleLoader = o));
        },
        singleton: !1,
      };
      r(1)(n, i), n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
      (t = r(0)(!1)).push([
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
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    (r.m = e),
      (r.c = t),
      (r.d = function (n, i, o) {
        r.o(n, i) || Object.defineProperty(n, i, { enumerable: !0, get: o });
      }),
      (r.r = function (n) {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (r.t = function (n, i) {
        if (
          (1 & i && (n = r(n)),
          8 & i || (4 & i && typeof n == "object" && n && n.__esModule))
        )
          return n;
        var o = Object.create(null);
        if (
          (r.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: n }),
          2 & i && typeof n != "string")
        )
          for (var a in n)
            r.d(
              o,
              a,
              function (s) {
                return n[s];
              }.bind(null, a)
            );
        return o;
      }),
      (r.n = function (n) {
        var i =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return r.d(i, "a", i), i;
      }),
      (r.o = function (n, i) {
        return Object.prototype.hasOwnProperty.call(n, i);
      }),
      (r.p = ""),
      r((r.s = 8));
  })([
    function (e, t, r) {
      e.exports = function (n) {
        var i = [];
        return (
          (i.toString = function () {
            return this.map(function (o) {
              var a = (function (s, l) {
                var c = s[1] || "",
                  u = s[3];
                if (!u) return c;
                if (l && typeof btoa == "function") {
                  var g =
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
                  return [c].concat(h).concat([g]).join(`
`);
                }
                var v, f, d;
                return [c].join(`
`);
              })(o, n);
              return o[2] ? "@media ".concat(o[2], " {").concat(a, "}") : a;
            }).join("");
          }),
          (i.i = function (o, a, s) {
            typeof o == "string" && (o = [[null, o, ""]]);
            var l = {};
            if (s)
              for (var c = 0; c < this.length; c++) {
                var u = this[c][0];
                u != null && (l[u] = !0);
              }
            for (var g = 0; g < o.length; g++) {
              var h = [].concat(o[g]);
              (s && l[h[0]]) ||
                (a &&
                  (h[2]
                    ? (h[2] = "".concat(a, " and ").concat(h[2]))
                    : (h[2] = a)),
                i.push(h));
            }
          }),
          i
        );
      };
    },
    function (e, t, r) {
      var n,
        i = {},
        o = function () {
          return (
            n === void 0 &&
              (n = !!(window && document && document.all && !window.atob)),
            n
          );
        },
        a = (function () {
          var w = {};
          return function (p) {
            if (w[p] === void 0) {
              var m = document.querySelector(p);
              if (
                window.HTMLIFrameElement &&
                m instanceof window.HTMLIFrameElement
              )
                try {
                  m = m.contentDocument.head;
                } catch {
                  m = null;
                }
              w[p] = m;
            }
            return w[p];
          };
        })();
      function s(w, p) {
        for (var m = [], b = {}, _ = 0; _ < w.length; _++) {
          var S = w[_],
            k = p.base ? S[0] + p.base : S[0],
            E = { css: S[1], media: S[2], sourceMap: S[3] };
          b[k] ? b[k].parts.push(E) : m.push((b[k] = { id: k, parts: [E] }));
        }
        return m;
      }
      function l(w, p) {
        for (var m = 0; m < w.length; m++) {
          var b = w[m],
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
      function c(w) {
        var p = document.createElement("style");
        if (w.attributes.nonce === void 0) {
          var m = r.nc;
          m && (w.attributes.nonce = m);
        }
        if (
          (Object.keys(w.attributes).forEach(function (_) {
            p.setAttribute(_, w.attributes[_]);
          }),
          typeof w.insert == "function")
        )
          w.insert(p);
        else {
          var b = a(w.insert || "head");
          if (!b)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          b.appendChild(p);
        }
        return p;
      }
      var u,
        g =
          ((u = []),
          function (w, p) {
            return (
              (u[w] = p),
              u.filter(Boolean).join(`
`)
            );
          });
      function h(w, p, m, b) {
        var _ = m ? "" : b.css;
        if (w.styleSheet) w.styleSheet.cssText = g(p, _);
        else {
          var S = document.createTextNode(_),
            k = w.childNodes;
          k[p] && w.removeChild(k[p]),
            k.length ? w.insertBefore(S, k[p]) : w.appendChild(S);
        }
      }
      function v(w, p, m) {
        var b = m.css,
          _ = m.media,
          S = m.sourceMap;
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
        var m, b, _;
        if (p.singleton) {
          var S = d++;
          (m = f || (f = c(p))),
            (b = h.bind(null, m, S, !1)),
            (_ = h.bind(null, m, S, !0));
        } else
          (m = c(p)),
            (b = v.bind(null, m, p)),
            (_ = function () {
              (function (k) {
                if (k.parentNode === null) return !1;
                k.parentNode.removeChild(k);
              })(m);
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
        var m = s(w, p);
        return (
          l(m, p),
          function (b) {
            for (var _ = [], S = 0; S < m.length; S++) {
              var k = m[S],
                E = i[k.id];
              E && (E.refs--, _.push(E));
            }
            b && l(s(b, p), p);
            for (var D = 0; D < _.length; D++) {
              var C = _[D];
              if (C.refs === 0) {
                for (var T = 0; T < C.parts.length; T++) C.parts[T]();
                delete i[C.id];
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
    function (e, t, r) {
      r.r(t), r(9);
      function n(a, s) {
        var l = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(a);
          s &&
            (c = c.filter(function (u) {
              return Object.getOwnPropertyDescriptor(a, u).enumerable;
            })),
            l.push.apply(l, c);
        }
        return l;
      }
      function i(a) {
        for (var s = 1; s < arguments.length; s++) {
          var l = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? n(Object(l), !0).forEach(function (c) {
                o(a, c, l[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
            : n(Object(l)).forEach(function (c) {
                Object.defineProperty(
                  a,
                  c,
                  Object.getOwnPropertyDescriptor(l, c)
                );
              });
        }
        return a;
      }
      function o(a, s, l) {
        return (
          s in a
            ? Object.defineProperty(a, s, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[s] = l),
          a
        );
      }
      Litepicker.add("ranges", {
        init: function (a) {
          var s = {
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
            autoApply: a.options.autoApply,
          };
          (a.options.ranges = i(i({}, s), a.options.ranges)),
            (a.options.singleMode = !1);
          var l = a.options.ranges;
          if (!Object.keys(l.customRanges).length) {
            var c,
              u = a.DateTime();
            l.customRanges =
              (o((c = {}), l.customRangesLabels[0], [u.clone(), u.clone()]),
              o(c, l.customRangesLabels[1], [
                u.clone().subtract(1, "day"),
                u.clone().subtract(1, "day"),
              ]),
              o(c, l.customRangesLabels[2], [u.clone().subtract(6, "day"), u]),
              o(c, l.customRangesLabels[3], [u.clone().subtract(29, "day"), u]),
              o(
                c,
                l.customRangesLabels[4],
                (function (g) {
                  var h = g.clone();
                  return (
                    h.setDate(1),
                    [h, new Date(g.getFullYear(), g.getMonth() + 1, 0)]
                  );
                })(u)
              ),
              o(
                c,
                l.customRangesLabels[5],
                (function (g) {
                  var h = g.clone();
                  return (
                    h.setDate(1),
                    h.setMonth(g.getMonth() - 1),
                    [h, new Date(g.getFullYear(), g.getMonth(), 0)]
                  );
                })(u)
              ),
              c);
          }
          a.on("render", function (g) {
            var h = document.createElement("div");
            (h.className = "container__predefined-ranges"),
              (a.ui.dataset.rangesPosition = l.position),
              Object.keys(l.customRanges).forEach(function (v) {
                var f = l.customRanges[v],
                  d = document.createElement("button");
                (d.innerText = v),
                  (d.tabIndex =
                    g.dataset.plugins.indexOf("keyboardnav") >= 0 ? 1 : -1),
                  (d.dataset.start = f[0].getTime()),
                  (d.dataset.end = f[1].getTime()),
                  d.addEventListener("click", function (y) {
                    var w = y.target;
                    if (w) {
                      var p = a.DateTime(Number(w.dataset.start)),
                        m = a.DateTime(Number(w.dataset.end));
                      l.autoApply
                        ? (a.setDateRange(p, m, l.force),
                          a.emit("ranges.selected", p, m),
                          a.hide())
                        : ((a.datePicked = [p, m]),
                          a.emit("ranges.preselect", p, m)),
                        (!a.options.inlineMode && l.autoApply) || a.gotoDate(p);
                    }
                  }),
                  h.appendChild(d);
              }),
              g.querySelector(".container__main").prepend(h);
          });
        },
      });
    },
    function (e, t, r) {
      var n = r(10);
      typeof n == "string" && (n = [[e.i, n, ""]]);
      var i = {
        insert: function (o) {
          var a = document.querySelector("head"),
            s = window._lastElementInsertedByStyleLoader;
          window.disableLitepickerStyles ||
            (s
              ? s.nextSibling
                ? a.insertBefore(o, s.nextSibling)
                : a.appendChild(o)
              : a.insertBefore(o, a.firstChild),
            (window._lastElementInsertedByStyleLoader = o));
        },
        singleton: !1,
      };
      r(1)(n, i), n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
      (t = r(0)(!1)).push([
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
  var rf = Symbol.for("immer-nothing"),
    Qc = Symbol.for("immer-draftable"),
    ht = Symbol.for("immer-state");
  function At(e, ...t) {
    throw new Error(
      `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var rn = Object.getPrototypeOf;
  function nn(e) {
    return !!e && !!e[ht];
  }
  function Rr(e) {
    var t;
    return e
      ? nf(e) ||
          Array.isArray(e) ||
          !!e[Qc] ||
          !!((t = e.constructor) != null && t[Qc]) ||
          so(e) ||
          lo(e)
      : !1;
  }
  var Yy = Object.prototype.constructor.toString();
  function nf(e) {
    if (!e || typeof e != "object") return !1;
    const t = rn(e);
    if (t === null) return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object
      ? !0
      : typeof r == "function" && Function.toString.call(r) === Yy;
  }
  function Pn(e, t) {
    ao(e) === 0
      ? Object.entries(e).forEach(([r, n]) => {
          t(r, n, e);
        })
      : e.forEach((r, n) => t(n, r, e));
  }
  function ao(e) {
    const t = e[ht];
    return t ? t.type_ : Array.isArray(e) ? 1 : so(e) ? 2 : lo(e) ? 3 : 0;
  }
  function qa(e, t) {
    return ao(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function of(e, t, r) {
    const n = ao(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
  }
  function $y(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function so(e) {
    return e instanceof Map;
  }
  function lo(e) {
    return e instanceof Set;
  }
  function Cr(e) {
    return e.copy_ || e.base_;
  }
  function Ga(e, t) {
    if (so(e)) return new Map(e);
    if (lo(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && nf(e))
      return rn(e) ? { ...e } : Object.assign(Object.create(null), e);
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[ht];
    let n = Reflect.ownKeys(r);
    for (let i = 0; i < n.length; i++) {
      const o = n[i],
        a = r[o];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[o],
          });
    }
    return Object.create(rn(e), r);
  }
  function Qs(e, t = !1) {
    return (
      co(e) ||
        nn(e) ||
        !Rr(e) ||
        (ao(e) > 1 && (e.set = e.add = e.clear = e.delete = Uy),
        Object.freeze(e),
        t && Pn(e, (r, n) => Qs(n, !0))),
      e
    );
  }
  function Uy() {
    At(2);
  }
  function co(e) {
    return Object.isFrozen(e);
  }
  var zy = {};
  function Lr(e) {
    const t = zy[e];
    return t || At(0, e), t;
  }
  var Fn;
  function af() {
    return Fn;
  }
  function Hy(e, t) {
    return {
      drafts_: [],
      parent_: e,
      immer_: t,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    };
  }
  function eu(e, t) {
    t &&
      (Lr("Patches"),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = t));
  }
  function Za(e) {
    Ka(e), e.drafts_.forEach(Wy), (e.drafts_ = null);
  }
  function Ka(e) {
    e === Fn && (Fn = e.parent_);
  }
  function tu(e) {
    return (Fn = Hy(Fn, e));
  }
  function Wy(e) {
    const t = e[ht];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
  }
  function ru(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return (
      e !== void 0 && e !== r
        ? (r[ht].modified_ && (Za(t), At(4)),
          Rr(e) && ((e = Pi(t, e)), t.parent_ || Fi(t, e)),
          t.patches_ &&
            Lr("Patches").generateReplacementPatches_(
              r[ht].base_,
              e,
              t.patches_,
              t.inversePatches_
            ))
        : (e = Pi(t, r, [])),
      Za(t),
      t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
      e !== rf ? e : void 0
    );
  }
  function Pi(e, t, r) {
    if (co(t)) return t;
    const n = t[ht];
    if (!n) return Pn(t, (i, o) => nu(e, n, t, i, o, r)), t;
    if (n.scope_ !== e) return t;
    if (!n.modified_) return Fi(e, n.base_, !0), n.base_;
    if (!n.finalized_) {
      (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
      const i = n.copy_;
      let o = i,
        a = !1;
      n.type_ === 3 && ((o = new Set(i)), i.clear(), (a = !0)),
        Pn(o, (s, l) => nu(e, n, i, s, l, r, a)),
        Fi(e, i, !1),
        r &&
          e.patches_ &&
          Lr("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
    }
    return n.copy_;
  }
  function nu(e, t, r, n, i, o, a) {
    if (nn(i)) {
      const s =
          o && t && t.type_ !== 3 && !qa(t.assigned_, n) ? o.concat(n) : void 0,
        l = Pi(e, i, s);
      if ((of(r, n, l), nn(l))) e.canAutoFreeze_ = !1;
      else return;
    } else a && r.add(i);
    if (Rr(i) && !co(i)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
      Pi(e, i), (!t || !t.scope_.parent_) && Fi(e, i);
    }
  }
  function Fi(e, t, r = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Qs(t, r);
  }
  function Vy(e, t) {
    const r = Array.isArray(e),
      n = {
        type_: r ? 1 : 0,
        scope_: t ? t.scope_ : af(),
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
    let i = n,
      o = el;
    r && ((i = [n]), (o = Bn));
    const { revoke: a, proxy: s } = Proxy.revocable(i, o);
    return (n.draft_ = s), (n.revoke_ = a), s;
  }
  var el = {
      get(e, t) {
        if (t === ht) return e;
        const r = Cr(e);
        if (!qa(r, t)) return qy(e, r, t);
        const n = r[t];
        return e.finalized_ || !Rr(n)
          ? n
          : n === va(e.base_, t)
          ? (ya(e), (e.copy_[t] = Ja(n, e)))
          : n;
      },
      has(e, t) {
        return t in Cr(e);
      },
      ownKeys(e) {
        return Reflect.ownKeys(Cr(e));
      },
      set(e, t, r) {
        const n = sf(Cr(e), t);
        if (n != null && n.set) return n.set.call(e.draft_, r), !0;
        if (!e.modified_) {
          const i = va(Cr(e), t),
            o = i == null ? void 0 : i[ht];
          if (o && o.base_ === r)
            return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
          if ($y(r, i) && (r !== void 0 || qa(e.base_, t))) return !0;
          ya(e), Xa(e);
        }
        return (
          (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
            (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
            ((e.copy_[t] = r), (e.assigned_[t] = !0)),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          va(e.base_, t) !== void 0 || t in e.base_
            ? ((e.assigned_[t] = !1), ya(e), Xa(e))
            : delete e.assigned_[t],
          e.copy_ && delete e.copy_[t],
          !0
        );
      },
      getOwnPropertyDescriptor(e, t) {
        const r = Cr(e),
          n = Reflect.getOwnPropertyDescriptor(r, t);
        return (
          n && {
            writable: !0,
            configurable: e.type_ !== 1 || t !== "length",
            enumerable: n.enumerable,
            value: r[t],
          }
        );
      },
      defineProperty() {
        At(11);
      },
      getPrototypeOf(e) {
        return rn(e.base_);
      },
      setPrototypeOf() {
        At(12);
      },
    },
    Bn = {};
  Pn(el, (e, t) => {
    Bn[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  });
  Bn.deleteProperty = function (e, t) {
    return Bn.set.call(this, e, t, void 0);
  };
  Bn.set = function (e, t, r) {
    return el.set.call(this, e[0], t, r, e[0]);
  };
  function va(e, t) {
    const r = e[ht];
    return (r ? Cr(r) : e)[t];
  }
  function qy(e, t, r) {
    var i;
    const n = sf(t, r);
    return n
      ? "value" in n
        ? n.value
        : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
      : void 0;
  }
  function sf(e, t) {
    if (!(t in e)) return;
    let r = rn(e);
    for (; r; ) {
      const n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = rn(r);
    }
  }
  function Xa(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && Xa(e.parent_));
  }
  function ya(e) {
    e.copy_ || (e.copy_ = Ga(e.base_, e.scope_.immer_.useStrictShallowCopy_));
  }
  var Gy = class {
    constructor(e) {
      (this.autoFreeze_ = !0),
        (this.useStrictShallowCopy_ = !1),
        (this.produce = (t, r, n) => {
          if (typeof t == "function" && typeof r != "function") {
            const o = r;
            r = t;
            const a = this;
            return function (l = o, ...c) {
              return a.produce(l, (u) => r.call(this, u, ...c));
            };
          }
          typeof r != "function" && At(6),
            n !== void 0 && typeof n != "function" && At(7);
          let i;
          if (Rr(t)) {
            const o = tu(this),
              a = Ja(t, void 0);
            let s = !0;
            try {
              (i = r(a)), (s = !1);
            } finally {
              s ? Za(o) : Ka(o);
            }
            return eu(o, n), ru(i, o);
          } else if (!t || typeof t != "object") {
            if (
              ((i = r(t)),
              i === void 0 && (i = t),
              i === rf && (i = void 0),
              this.autoFreeze_ && Qs(i, !0),
              n)
            ) {
              const o = [],
                a = [];
              Lr("Patches").generateReplacementPatches_(t, i, o, a), n(o, a);
            }
            return i;
          } else At(1, t);
        }),
        (this.produceWithPatches = (t, r) => {
          if (typeof t == "function")
            return (a, ...s) => this.produceWithPatches(a, (l) => t(l, ...s));
          let n, i;
          return [
            this.produce(t, r, (a, s) => {
              (n = a), (i = s);
            }),
            n,
            i,
          ];
        }),
        typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
          this.setAutoFreeze(e.autoFreeze),
        typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
          this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
      Rr(e) || At(8), nn(e) && (e = Zy(e));
      const t = tu(this),
        r = Ja(e, void 0);
      return (r[ht].isManual_ = !0), Ka(t), r;
    }
    finishDraft(e, t) {
      const r = e && e[ht];
      (!r || !r.isManual_) && At(9);
      const { scope_: n } = r;
      return eu(n, t), ru(void 0, n);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
      let r;
      for (r = t.length - 1; r >= 0; r--) {
        const i = t[r];
        if (i.path.length === 0 && i.op === "replace") {
          e = i.value;
          break;
        }
      }
      r > -1 && (t = t.slice(r + 1));
      const n = Lr("Patches").applyPatches_;
      return nn(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
    }
  };
  function Ja(e, t) {
    const r = so(e)
      ? Lr("MapSet").proxyMap_(e, t)
      : lo(e)
      ? Lr("MapSet").proxySet_(e, t)
      : Vy(e, t);
    return (t ? t.scope_ : af()).drafts_.push(r), r;
  }
  function Zy(e) {
    return nn(e) || At(10, e), lf(e);
  }
  function lf(e) {
    if (!Rr(e) || co(e)) return e;
    const t = e[ht];
    let r;
    if (t) {
      if (!t.modified_) return t.base_;
      (t.finalized_ = !0), (r = Ga(e, t.scope_.immer_.useStrictShallowCopy_));
    } else r = Ga(e, !0);
    return (
      Pn(r, (n, i) => {
        of(r, n, lf(i));
      }),
      t && (t.finalized_ = !1),
      r
    );
  }
  var pt = new Gy(),
    Re = pt.produce;
  pt.produceWithPatches.bind(pt);
  pt.setAutoFreeze.bind(pt);
  pt.setUseStrictShallowCopy.bind(pt);
  pt.applyPatches.bind(pt);
  pt.createDraft.bind(pt);
  pt.finishDraft.bind(pt);
  const Ky = { route: "All", status: "All", filterDateRange: "All" };
  function Xy(e = Ky, t) {
    switch (t.type) {
      case "SET_ROUTE":
        return Re(e, (r) => {
          r.route = t.payload;
        });
      case "SET_STATUS":
        return Re(e, (r) => {
          r.status = t.payload;
        });
      case "SET_FILTER_DATE":
        return Re(e, (r) => {
          r.filterDateRange = t.payload;
        });
      default:
        return e;
    }
  }
  function iu(e) {
    Q.dispatch({ type: "SET_FILTER_DATE", payload: e });
  }
  function cf(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: Jy } = Object.prototype,
    { getPrototypeOf: tl } = Object,
    uo = ((e) => (t) => {
      const r = Jy.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    qt = (e) => ((e = e.toLowerCase()), (t) => uo(t) === e),
    fo = (e) => (t) => typeof t === e,
    { isArray: fn } = Array,
    jn = fo("undefined");
  function Qy(e) {
    return (
      e !== null &&
      !jn(e) &&
      e.constructor !== null &&
      !jn(e.constructor) &&
      _t(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const uf = qt("ArrayBuffer");
  function eb(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && uf(e.buffer)),
      t
    );
  }
  const tb = fo("string"),
    _t = fo("function"),
    df = fo("number"),
    ho = (e) => e !== null && typeof e == "object",
    rb = (e) => e === !0 || e === !1,
    vi = (e) => {
      if (uo(e) !== "object") return !1;
      const t = tl(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    nb = qt("Date"),
    ib = qt("File"),
    ob = qt("Blob"),
    ab = qt("FileList"),
    sb = (e) => ho(e) && _t(e.pipe),
    lb = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (_t(e.append) &&
            ((t = uo(e)) === "formdata" ||
              (t === "object" &&
                _t(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    cb = qt("URLSearchParams"),
    ub = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function Zn(e, t, { allOwnKeys: r = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let n, i;
    if ((typeof e != "object" && (e = [e]), fn(e)))
      for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
    else {
      const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
        a = o.length;
      let s;
      for (n = 0; n < a; n++) (s = o[n]), t.call(null, e[s], s, e);
    }
  }
  function ff(e, t) {
    t = t.toLowerCase();
    const r = Object.keys(e);
    let n = r.length,
      i;
    for (; n-- > 0; ) if (((i = r[n]), t === i.toLowerCase())) return i;
    return null;
  }
  const hf = (() =>
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global)(),
    pf = (e) => !jn(e) && e !== hf;
  function Qa() {
    const { caseless: e } = (pf(this) && this) || {},
      t = {},
      r = (n, i) => {
        const o = (e && ff(t, i)) || i;
        vi(t[o]) && vi(n)
          ? (t[o] = Qa(t[o], n))
          : vi(n)
          ? (t[o] = Qa({}, n))
          : fn(n)
          ? (t[o] = n.slice())
          : (t[o] = n);
      };
    for (let n = 0, i = arguments.length; n < i; n++)
      arguments[n] && Zn(arguments[n], r);
    return t;
  }
  const db = (e, t, r, { allOwnKeys: n } = {}) => (
      Zn(
        t,
        (i, o) => {
          r && _t(i) ? (e[o] = cf(i, r)) : (e[o] = i);
        },
        { allOwnKeys: n }
      ),
      e
    ),
    fb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    hb = (e, t, r, n) => {
      (e.prototype = Object.create(t.prototype, n)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        r && Object.assign(e.prototype, r);
    },
    pb = (e, t, r, n) => {
      let i, o, a;
      const s = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
          (a = i[o]),
            (!n || n(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
        e = r !== !1 && tl(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    mb = (e, t, r) => {
      (e = String(e)),
        (r === void 0 || r > e.length) && (r = e.length),
        (r -= t.length);
      const n = e.indexOf(t, r);
      return n !== -1 && n === r;
    },
    gb = (e) => {
      if (!e) return null;
      if (fn(e)) return e;
      let t = e.length;
      if (!df(t)) return null;
      const r = new Array(t);
      for (; t-- > 0; ) r[t] = e[t];
      return r;
    },
    vb = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && tl(Uint8Array)),
    yb = (e, t) => {
      const n = (e && e[Symbol.iterator]).call(e);
      let i;
      for (; (i = n.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1]);
      }
    },
    bb = (e, t) => {
      let r;
      const n = [];
      for (; (r = e.exec(t)) !== null; ) n.push(r);
      return n;
    },
    xb = qt("HTMLFormElement"),
    wb = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
        return n.toUpperCase() + i;
      }),
    ou = (
      ({ hasOwnProperty: e }) =>
      (t, r) =>
        e.call(t, r)
    )(Object.prototype),
    _b = qt("RegExp"),
    mf = (e, t) => {
      const r = Object.getOwnPropertyDescriptors(e),
        n = {};
      Zn(r, (i, o) => {
        let a;
        (a = t(i, o, e)) !== !1 && (n[o] = a || i);
      }),
        Object.defineProperties(e, n);
    },
    Sb = (e) => {
      mf(e, (t, r) => {
        if (_t(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
          return !1;
        const n = e[r];
        if (_t(n)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + r + "'");
            });
        }
      });
    },
    kb = (e, t) => {
      const r = {},
        n = (i) => {
          i.forEach((o) => {
            r[o] = !0;
          });
        };
      return fn(e) ? n(e) : n(String(e).split(t)), r;
    },
    Eb = () => {},
    Cb = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    ba = "abcdefghijklmnopqrstuvwxyz",
    au = "0123456789",
    gf = { DIGIT: au, ALPHA: ba, ALPHA_DIGIT: ba + ba.toUpperCase() + au },
    Tb = (e = 16, t = gf.ALPHA_DIGIT) => {
      let r = "";
      const { length: n } = t;
      for (; e--; ) r += t[(Math.random() * n) | 0];
      return r;
    };
  function Db(e) {
    return !!(
      e &&
      _t(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const Ab = (e) => {
      const t = new Array(10),
        r = (n, i) => {
          if (ho(n)) {
            if (t.indexOf(n) >= 0) return;
            if (!("toJSON" in n)) {
              t[i] = n;
              const o = fn(n) ? [] : {};
              return (
                Zn(n, (a, s) => {
                  const l = r(a, i + 1);
                  !jn(l) && (o[s] = l);
                }),
                (t[i] = void 0),
                o
              );
            }
          }
          return n;
        };
      return r(e, 0);
    },
    Ob = qt("AsyncFunction"),
    Mb = (e) => e && (ho(e) || _t(e)) && _t(e.then) && _t(e.catch),
    U = {
      isArray: fn,
      isArrayBuffer: uf,
      isBuffer: Qy,
      isFormData: lb,
      isArrayBufferView: eb,
      isString: tb,
      isNumber: df,
      isBoolean: rb,
      isObject: ho,
      isPlainObject: vi,
      isUndefined: jn,
      isDate: nb,
      isFile: ib,
      isBlob: ob,
      isRegExp: _b,
      isFunction: _t,
      isStream: sb,
      isURLSearchParams: cb,
      isTypedArray: vb,
      isFileList: ab,
      forEach: Zn,
      merge: Qa,
      extend: db,
      trim: ub,
      stripBOM: fb,
      inherits: hb,
      toFlatObject: pb,
      kindOf: uo,
      kindOfTest: qt,
      endsWith: mb,
      toArray: gb,
      forEachEntry: yb,
      matchAll: bb,
      isHTMLForm: xb,
      hasOwnProperty: ou,
      hasOwnProp: ou,
      reduceDescriptors: mf,
      freezeMethods: Sb,
      toObjectSet: kb,
      toCamelCase: wb,
      noop: Eb,
      toFiniteNumber: Cb,
      findKey: ff,
      global: hf,
      isContextDefined: pf,
      ALPHABET: gf,
      generateString: Tb,
      isSpecCompliantForm: Db,
      toJSONObject: Ab,
      isAsyncFn: Ob,
      isThenable: Mb,
    };
  function _e(e, t, r, n, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      r && (this.config = r),
      n && (this.request = n),
      i && (this.response = i);
  }
  U.inherits(_e, Error, {
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
        config: U.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const vf = _e.prototype,
    yf = {};
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
    yf[e] = { value: e };
  });
  Object.defineProperties(_e, yf);
  Object.defineProperty(vf, "isAxiosError", { value: !0 });
  _e.from = (e, t, r, n, i, o) => {
    const a = Object.create(vf);
    return (
      U.toFlatObject(
        e,
        a,
        function (l) {
          return l !== Error.prototype;
        },
        (s) => s !== "isAxiosError"
      ),
      _e.call(a, e.message, t, r, n, i),
      (a.cause = e),
      (a.name = e.name),
      o && Object.assign(a, o),
      a
    );
  };
  const Ib = null;
  function es(e) {
    return U.isPlainObject(e) || U.isArray(e);
  }
  function bf(e) {
    return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function su(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (i, o) {
            return (i = bf(i)), !r && o ? "[" + i + "]" : i;
          })
          .join(r ? "." : "")
      : t;
  }
  function Nb(e) {
    return U.isArray(e) && !e.some(es);
  }
  const Rb = U.toFlatObject(U, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function po(e, t, r) {
    if (!U.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (r = U.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (d, y) {
          return !U.isUndefined(y[d]);
        }
      ));
    const n = r.metaTokens,
      i = r.visitor || u,
      o = r.dots,
      a = r.indexes,
      l = (r.Blob || (typeof Blob < "u" && Blob)) && U.isSpecCompliantForm(t);
    if (!U.isFunction(i)) throw new TypeError("visitor must be a function");
    function c(f) {
      if (f === null) return "";
      if (U.isDate(f)) return f.toISOString();
      if (!l && U.isBlob(f))
        throw new _e("Blob is not supported. Use a Buffer instead.");
      return U.isArrayBuffer(f) || U.isTypedArray(f)
        ? l && typeof Blob == "function"
          ? new Blob([f])
          : Buffer.from(f)
        : f;
    }
    function u(f, d, y) {
      let w = f;
      if (f && !y && typeof f == "object") {
        if (U.endsWith(d, "{}"))
          (d = n ? d : d.slice(0, -2)), (f = JSON.stringify(f));
        else if (
          (U.isArray(f) && Nb(f)) ||
          ((U.isFileList(f) || U.endsWith(d, "[]")) && (w = U.toArray(f)))
        )
          return (
            (d = bf(d)),
            w.forEach(function (m, b) {
              !(U.isUndefined(m) || m === null) &&
                t.append(
                  a === !0 ? su([d], b, o) : a === null ? d : d + "[]",
                  c(m)
                );
            }),
            !1
          );
      }
      return es(f) ? !0 : (t.append(su(y, d, o), c(f)), !1);
    }
    const g = [],
      h = Object.assign(Rb, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: es,
      });
    function v(f, d) {
      if (!U.isUndefined(f)) {
        if (g.indexOf(f) !== -1)
          throw Error("Circular reference detected in " + d.join("."));
        g.push(f),
          U.forEach(f, function (w, p) {
            (!(U.isUndefined(w) || w === null) &&
              i.call(t, w, U.isString(p) ? p.trim() : p, d, h)) === !0 &&
              v(w, d ? d.concat(p) : [p]);
          }),
          g.pop();
      }
    }
    if (!U.isObject(e)) throw new TypeError("data must be an object");
    return v(e), t;
  }
  function lu(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
      return t[n];
    });
  }
  function rl(e, t) {
    (this._pairs = []), e && po(e, this, t);
  }
  const xf = rl.prototype;
  xf.append = function (t, r) {
    this._pairs.push([t, r]);
  };
  xf.toString = function (t) {
    const r = t
      ? function (n) {
          return t.call(this, n, lu);
        }
      : lu;
    return this._pairs
      .map(function (i) {
        return r(i[0]) + "=" + r(i[1]);
      }, "")
      .join("&");
  };
  function Lb(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function wf(e, t, r) {
    if (!t) return e;
    const n = (r && r.encode) || Lb,
      i = r && r.serialize;
    let o;
    if (
      (i
        ? (o = i(t, r))
        : (o = U.isURLSearchParams(t)
            ? t.toString()
            : new rl(t, r).toString(n)),
      o)
    ) {
      const a = e.indexOf("#");
      a !== -1 && (e = e.slice(0, a)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return e;
  }
  class Pb {
    constructor() {
      this.handlers = [];
    }
    use(t, r, n) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: r,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
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
      U.forEach(this.handlers, function (n) {
        n !== null && t(n);
      });
    }
  }
  const cu = Pb,
    _f = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Fb = typeof URLSearchParams < "u" ? URLSearchParams : rl,
    Bb = typeof FormData < "u" ? FormData : null,
    jb = typeof Blob < "u" ? Blob : null,
    Yb = (() => {
      let e;
      return typeof navigator < "u" &&
        ((e = navigator.product) === "ReactNative" ||
          e === "NativeScript" ||
          e === "NS")
        ? !1
        : typeof window < "u" && typeof document < "u";
    })(),
    $b = (() =>
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function")(),
    Yt = {
      isBrowser: !0,
      classes: { URLSearchParams: Fb, FormData: Bb, Blob: jb },
      isStandardBrowserEnv: Yb,
      isStandardBrowserWebWorkerEnv: $b,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  function Ub(e, t) {
    return po(
      e,
      new Yt.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (r, n, i, o) {
            return Yt.isNode && U.isBuffer(r)
              ? (this.append(n, r.toString("base64")), !1)
              : o.defaultVisitor.apply(this, arguments);
          },
        },
        t
      )
    );
  }
  function zb(e) {
    return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
      t[0] === "[]" ? "" : t[1] || t[0]
    );
  }
  function Hb(e) {
    const t = {},
      r = Object.keys(e);
    let n;
    const i = r.length;
    let o;
    for (n = 0; n < i; n++) (o = r[n]), (t[o] = e[o]);
    return t;
  }
  function Sf(e) {
    function t(r, n, i, o) {
      let a = r[o++];
      const s = Number.isFinite(+a),
        l = o >= r.length;
      return (
        (a = !a && U.isArray(i) ? i.length : a),
        l
          ? (U.hasOwnProp(i, a) ? (i[a] = [i[a], n]) : (i[a] = n), !s)
          : ((!i[a] || !U.isObject(i[a])) && (i[a] = []),
            t(r, n, i[a], o) && U.isArray(i[a]) && (i[a] = Hb(i[a])),
            !s)
      );
    }
    if (U.isFormData(e) && U.isFunction(e.entries)) {
      const r = {};
      return (
        U.forEachEntry(e, (n, i) => {
          t(zb(n), i, r, 0);
        }),
        r
      );
    }
    return null;
  }
  function Wb(e, t, r) {
    if (U.isString(e))
      try {
        return (t || JSON.parse)(e), U.trim(e);
      } catch (n) {
        if (n.name !== "SyntaxError") throw n;
      }
    return (r || JSON.stringify)(e);
  }
  const nl = {
    transitional: _f,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, r) {
        const n = r.getContentType() || "",
          i = n.indexOf("application/json") > -1,
          o = U.isObject(t);
        if ((o && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t)))
          return i && i ? JSON.stringify(Sf(t)) : t;
        if (
          U.isArrayBuffer(t) ||
          U.isBuffer(t) ||
          U.isStream(t) ||
          U.isFile(t) ||
          U.isBlob(t)
        )
          return t;
        if (U.isArrayBufferView(t)) return t.buffer;
        if (U.isURLSearchParams(t))
          return (
            r.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        let s;
        if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return Ub(t, this.formSerializer).toString();
          if ((s = U.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
            const l = this.env && this.env.FormData;
            return po(
              s ? { "files[]": t } : t,
              l && new l(),
              this.formSerializer
            );
          }
        }
        return o || i ? (r.setContentType("application/json", !1), Wb(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const r = this.transitional || nl.transitional,
          n = r && r.forcedJSONParsing,
          i = this.responseType === "json";
        if (t && U.isString(t) && ((n && !this.responseType) || i)) {
          const a = !(r && r.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (s) {
            if (a)
              throw s.name === "SyntaxError"
                ? _e.from(s, _e.ERR_BAD_RESPONSE, this, null, this.response)
                : s;
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
    env: { FormData: Yt.classes.FormData, Blob: Yt.classes.Blob },
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
  U.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    nl.headers[e] = {};
  });
  const il = nl,
    Vb = U.toObjectSet([
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
    qb = (e) => {
      const t = {};
      let r, n, i;
      return (
        e &&
          e
            .split(
              `
`
            )
            .forEach(function (a) {
              (i = a.indexOf(":")),
                (r = a.substring(0, i).trim().toLowerCase()),
                (n = a.substring(i + 1).trim()),
                !(!r || (t[r] && Vb[r])) &&
                  (r === "set-cookie"
                    ? t[r]
                      ? t[r].push(n)
                      : (t[r] = [n])
                    : (t[r] = t[r] ? t[r] + ", " + n : n));
            }),
        t
      );
    },
    uu = Symbol("internals");
  function yn(e) {
    return e && String(e).trim().toLowerCase();
  }
  function yi(e) {
    return e === !1 || e == null ? e : U.isArray(e) ? e.map(yi) : String(e);
  }
  function Gb(e) {
    const t = Object.create(null),
      r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; (n = r.exec(e)); ) t[n[1]] = n[2];
    return t;
  }
  const Zb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function xa(e, t, r, n, i) {
    if (U.isFunction(n)) return n.call(this, t, r);
    if ((i && (t = r), !!U.isString(t))) {
      if (U.isString(n)) return t.indexOf(n) !== -1;
      if (U.isRegExp(n)) return n.test(t);
    }
  }
  function Kb(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
  }
  function Xb(e, t) {
    const r = U.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((n) => {
      Object.defineProperty(e, n + r, {
        value: function (i, o, a) {
          return this[n].call(this, t, i, o, a);
        },
        configurable: !0,
      });
    });
  }
  class mo {
    constructor(t) {
      t && this.set(t);
    }
    set(t, r, n) {
      const i = this;
      function o(s, l, c) {
        const u = yn(l);
        if (!u) throw new Error("header name must be a non-empty string");
        const g = U.findKey(i, u);
        (!g || i[g] === void 0 || c === !0 || (c === void 0 && i[g] !== !1)) &&
          (i[g || l] = yi(s));
      }
      const a = (s, l) => U.forEach(s, (c, u) => o(c, u, l));
      return (
        U.isPlainObject(t) || t instanceof this.constructor
          ? a(t, r)
          : U.isString(t) && (t = t.trim()) && !Zb(t)
          ? a(qb(t), r)
          : t != null && o(r, t, n),
        this
      );
    }
    get(t, r) {
      if (((t = yn(t)), t)) {
        const n = U.findKey(this, t);
        if (n) {
          const i = this[n];
          if (!r) return i;
          if (r === !0) return Gb(i);
          if (U.isFunction(r)) return r.call(this, i, n);
          if (U.isRegExp(r)) return r.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, r) {
      if (((t = yn(t)), t)) {
        const n = U.findKey(this, t);
        return !!(n && this[n] !== void 0 && (!r || xa(this, this[n], n, r)));
      }
      return !1;
    }
    delete(t, r) {
      const n = this;
      let i = !1;
      function o(a) {
        if (((a = yn(a)), a)) {
          const s = U.findKey(n, a);
          s && (!r || xa(n, n[s], s, r)) && (delete n[s], (i = !0));
        }
      }
      return U.isArray(t) ? t.forEach(o) : o(t), i;
    }
    clear(t) {
      const r = Object.keys(this);
      let n = r.length,
        i = !1;
      for (; n--; ) {
        const o = r[n];
        (!t || xa(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const r = this,
        n = {};
      return (
        U.forEach(this, (i, o) => {
          const a = U.findKey(n, o);
          if (a) {
            (r[a] = yi(i)), delete r[o];
            return;
          }
          const s = t ? Kb(o) : String(o).trim();
          s !== o && delete r[o], (r[s] = yi(i)), (n[s] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const r = Object.create(null);
      return (
        U.forEach(this, (n, i) => {
          n != null &&
            n !== !1 &&
            (r[i] = t && U.isArray(n) ? n.join(", ") : n);
        }),
        r
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...r) {
      const n = new this(t);
      return r.forEach((i) => n.set(i)), n;
    }
    static accessor(t) {
      const n = (this[uu] = this[uu] = { accessors: {} }).accessors,
        i = this.prototype;
      function o(a) {
        const s = yn(a);
        n[s] || (Xb(i, a), (n[s] = !0));
      }
      return U.isArray(t) ? t.forEach(o) : o(t), this;
    }
  }
  mo.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  U.reduceDescriptors(mo.prototype, ({ value: e }, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(n) {
        this[r] = n;
      },
    };
  });
  U.freezeMethods(mo);
  const or = mo;
  function wa(e, t) {
    const r = this || il,
      n = t || r,
      i = or.from(n.headers);
    let o = n.data;
    return (
      U.forEach(e, function (s) {
        o = s.call(r, o, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      o
    );
  }
  function kf(e) {
    return !!(e && e.__CANCEL__);
  }
  function Kn(e, t, r) {
    _e.call(this, e ?? "canceled", _e.ERR_CANCELED, t, r),
      (this.name = "CanceledError");
  }
  U.inherits(Kn, _e, { __CANCEL__: !0 });
  function Jb(e, t, r) {
    const n = r.config.validateStatus;
    !r.status || !n || n(r.status)
      ? e(r)
      : t(
          new _e(
            "Request failed with status code " + r.status,
            [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][
              Math.floor(r.status / 100) - 4
            ],
            r.config,
            r.request,
            r
          )
        );
  }
  const Qb = Yt.isStandardBrowserEnv
    ? (function () {
        return {
          write: function (r, n, i, o, a, s) {
            const l = [];
            l.push(r + "=" + encodeURIComponent(n)),
              U.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()),
              U.isString(o) && l.push("path=" + o),
              U.isString(a) && l.push("domain=" + a),
              s === !0 && l.push("secure"),
              (document.cookie = l.join("; "));
          },
          read: function (r) {
            const n = document.cookie.match(
              new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
            );
            return n ? decodeURIComponent(n[3]) : null;
          },
          remove: function (r) {
            this.write(r, "", Date.now() - 864e5);
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
  function ex(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function tx(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function Ef(e, t) {
    return e && !ex(t) ? tx(e, t) : t;
  }
  const rx = Yt.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a");
        let n;
        function i(o) {
          let a = o;
          return (
            t && (r.setAttribute("href", a), (a = r.href)),
            r.setAttribute("href", a),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, "") : "",
              hash: r.hash ? r.hash.replace(/^#/, "") : "",
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
            }
          );
        }
        return (
          (n = i(window.location.href)),
          function (a) {
            const s = U.isString(a) ? i(a) : a;
            return s.protocol === n.protocol && s.host === n.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
  function nx(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function ix(e, t) {
    e = e || 10;
    const r = new Array(e),
      n = new Array(e);
    let i = 0,
      o = 0,
      a;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (l) {
        const c = Date.now(),
          u = n[o];
        a || (a = c), (r[i] = l), (n[i] = c);
        let g = o,
          h = 0;
        for (; g !== i; ) (h += r[g++]), (g = g % e);
        if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), c - a < t))
          return;
        const v = u && c - u;
        return v ? Math.round((h * 1e3) / v) : void 0;
      }
    );
  }
  function du(e, t) {
    let r = 0;
    const n = ix(50, 250);
    return (i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        s = o - r,
        l = n(s),
        c = o <= a;
      r = o;
      const u = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: s,
        rate: l || void 0,
        estimated: l && a && c ? (a - o) / l : void 0,
        event: i,
      };
      (u[t ? "download" : "upload"] = !0), e(u);
    };
  }
  const ox = typeof XMLHttpRequest < "u",
    ax =
      ox &&
      function (e) {
        return new Promise(function (r, n) {
          let i = e.data;
          const o = or.from(e.headers).normalize(),
            a = e.responseType;
          let s;
          function l() {
            e.cancelToken && e.cancelToken.unsubscribe(s),
              e.signal && e.signal.removeEventListener("abort", s);
          }
          let c;
          U.isFormData(i) &&
            (Yt.isStandardBrowserEnv || Yt.isStandardBrowserWebWorkerEnv
              ? o.setContentType(!1)
              : o.getContentType(/^\s*multipart\/form-data/)
              ? U.isString((c = o.getContentType())) &&
                o.setContentType(
                  c.replace(/^\s*(multipart\/form-data);+/, "$1")
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
          const g = Ef(e.baseURL, e.url);
          u.open(
            e.method.toUpperCase(),
            wf(g, e.params, e.paramsSerializer),
            !0
          ),
            (u.timeout = e.timeout);
          function h() {
            if (!u) return;
            const f = or.from(
                "getAllResponseHeaders" in u && u.getAllResponseHeaders()
              ),
              y = {
                data:
                  !a || a === "text" || a === "json"
                    ? u.responseText
                    : u.response,
                status: u.status,
                statusText: u.statusText,
                headers: f,
                config: e,
                request: u,
              };
            Jb(
              function (p) {
                r(p), l();
              },
              function (p) {
                n(p), l();
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
                (n(new _e("Request aborted", _e.ECONNABORTED, e, u)),
                (u = null));
            }),
            (u.onerror = function () {
              n(new _e("Network Error", _e.ERR_NETWORK, e, u)), (u = null);
            }),
            (u.ontimeout = function () {
              let d = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded";
              const y = e.transitional || _f;
              e.timeoutErrorMessage && (d = e.timeoutErrorMessage),
                n(
                  new _e(
                    d,
                    y.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
                    e,
                    u
                  )
                ),
                (u = null);
            }),
            Yt.isStandardBrowserEnv)
          ) {
            const f =
              (e.withCredentials || rx(g)) &&
              e.xsrfCookieName &&
              Qb.read(e.xsrfCookieName);
            f && o.set(e.xsrfHeaderName, f);
          }
          i === void 0 && o.setContentType(null),
            "setRequestHeader" in u &&
              U.forEach(o.toJSON(), function (d, y) {
                u.setRequestHeader(y, d);
              }),
            U.isUndefined(e.withCredentials) ||
              (u.withCredentials = !!e.withCredentials),
            a && a !== "json" && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == "function" &&
              u.addEventListener("progress", du(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == "function" &&
              u.upload &&
              u.upload.addEventListener("progress", du(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((s = (f) => {
                u &&
                  (n(!f || f.type ? new Kn(null, e, u) : f),
                  u.abort(),
                  (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(s),
              e.signal &&
                (e.signal.aborted
                  ? s()
                  : e.signal.addEventListener("abort", s)));
          const v = nx(g);
          if (v && Yt.protocols.indexOf(v) === -1) {
            n(new _e("Unsupported protocol " + v + ":", _e.ERR_BAD_REQUEST, e));
            return;
          }
          u.send(i || null);
        });
      },
    ts = { http: Ib, xhr: ax };
  U.forEach(ts, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const fu = (e) => `- ${e}`,
    sx = (e) => U.isFunction(e) || e === null || e === !1,
    Cf = {
      getAdapter: (e) => {
        e = U.isArray(e) ? e : [e];
        const { length: t } = e;
        let r, n;
        const i = {};
        for (let o = 0; o < t; o++) {
          r = e[o];
          let a;
          if (
            ((n = r),
            !sx(r) && ((n = ts[(a = String(r)).toLowerCase()]), n === void 0))
          )
            throw new _e(`Unknown adapter '${a}'`);
          if (n) break;
          i[a || "#" + o] = n;
        }
        if (!n) {
          const o = Object.entries(i).map(
            ([s, l]) =>
              `adapter ${s} ` +
              (l === !1
                ? "is not supported by the environment"
                : "is not available in the build")
          );
          let a = t
            ? o.length > 1
              ? `since :
` +
                o.map(fu).join(`
`)
              : " " + fu(o[0])
            : "as no adapter specified";
          throw new _e(
            "There is no suitable adapter to dispatch the request " + a,
            "ERR_NOT_SUPPORT"
          );
        }
        return n;
      },
      adapters: ts,
    };
  function _a(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Kn(null, e);
  }
  function hu(e) {
    return (
      _a(e),
      (e.headers = or.from(e.headers)),
      (e.data = wa.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Cf.getAdapter(e.adapter || il.adapter)(e).then(
        function (n) {
          return (
            _a(e),
            (n.data = wa.call(e, e.transformResponse, n)),
            (n.headers = or.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            kf(n) ||
              (_a(e),
              n &&
                n.response &&
                ((n.response.data = wa.call(
                  e,
                  e.transformResponse,
                  n.response
                )),
                (n.response.headers = or.from(n.response.headers)))),
            Promise.reject(n)
          );
        }
      )
    );
  }
  const pu = (e) => (e instanceof or ? e.toJSON() : e);
  function on(e, t) {
    t = t || {};
    const r = {};
    function n(c, u, g) {
      return U.isPlainObject(c) && U.isPlainObject(u)
        ? U.merge.call({ caseless: g }, c, u)
        : U.isPlainObject(u)
        ? U.merge({}, u)
        : U.isArray(u)
        ? u.slice()
        : u;
    }
    function i(c, u, g) {
      if (U.isUndefined(u)) {
        if (!U.isUndefined(c)) return n(void 0, c, g);
      } else return n(c, u, g);
    }
    function o(c, u) {
      if (!U.isUndefined(u)) return n(void 0, u);
    }
    function a(c, u) {
      if (U.isUndefined(u)) {
        if (!U.isUndefined(c)) return n(void 0, c);
      } else return n(void 0, u);
    }
    function s(c, u, g) {
      if (g in t) return n(c, u);
      if (g in e) return n(void 0, c);
    }
    const l = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
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
      validateStatus: s,
      headers: (c, u) => i(pu(c), pu(u), !0),
    };
    return (
      U.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const g = l[u] || i,
          h = g(e[u], t[u], u);
        (U.isUndefined(h) && g !== s) || (r[u] = h);
      }),
      r
    );
  }
  const Tf = "1.5.1",
    ol = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      ol[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const mu = {};
  ol.transitional = function (t, r, n) {
    function i(o, a) {
      return (
        "[Axios v" +
        Tf +
        "] Transitional option '" +
        o +
        "'" +
        a +
        (n ? ". " + n : "")
      );
    }
    return (o, a, s) => {
      if (t === !1)
        throw new _e(
          i(a, " has been removed" + (r ? " in " + r : "")),
          _e.ERR_DEPRECATED
        );
      return (
        r &&
          !mu[a] &&
          ((mu[a] = !0),
          console.warn(
            i(
              a,
              " has been deprecated since v" +
                r +
                " and will be removed in the near future"
            )
          )),
        t ? t(o, a, s) : !0
      );
    };
  };
  function lx(e, t, r) {
    if (typeof e != "object")
      throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(e);
    let i = n.length;
    for (; i-- > 0; ) {
      const o = n[i],
        a = t[o];
      if (a) {
        const s = e[o],
          l = s === void 0 || a(s, o, e);
        if (l !== !0)
          throw new _e(
            "option " + o + " must be " + l,
            _e.ERR_BAD_OPTION_VALUE
          );
        continue;
      }
      if (r !== !0) throw new _e("Unknown option " + o, _e.ERR_BAD_OPTION);
    }
  }
  const rs = { assertOptions: lx, validators: ol },
    hr = rs.validators;
  class Bi {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new cu(), response: new cu() });
    }
    request(t, r) {
      typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
        (r = on(this.defaults, r));
      const { transitional: n, paramsSerializer: i, headers: o } = r;
      n !== void 0 &&
        rs.assertOptions(
          n,
          {
            silentJSONParsing: hr.transitional(hr.boolean),
            forcedJSONParsing: hr.transitional(hr.boolean),
            clarifyTimeoutError: hr.transitional(hr.boolean),
          },
          !1
        ),
        i != null &&
          (U.isFunction(i)
            ? (r.paramsSerializer = { serialize: i })
            : rs.assertOptions(
                i,
                { encode: hr.function, serialize: hr.function },
                !0
              )),
        (r.method = (r.method || this.defaults.method || "get").toLowerCase());
      let a = o && U.merge(o.common, o[r.method]);
      o &&
        U.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (f) => {
            delete o[f];
          }
        ),
        (r.headers = or.concat(a, o));
      const s = [];
      let l = !0;
      this.interceptors.request.forEach(function (d) {
        (typeof d.runWhen == "function" && d.runWhen(r) === !1) ||
          ((l = l && d.synchronous), s.unshift(d.fulfilled, d.rejected));
      });
      const c = [];
      this.interceptors.response.forEach(function (d) {
        c.push(d.fulfilled, d.rejected);
      });
      let u,
        g = 0,
        h;
      if (!l) {
        const f = [hu.bind(this), void 0];
        for (
          f.unshift.apply(f, s),
            f.push.apply(f, c),
            h = f.length,
            u = Promise.resolve(r);
          g < h;

        )
          u = u.then(f[g++], f[g++]);
        return u;
      }
      h = s.length;
      let v = r;
      for (g = 0; g < h; ) {
        const f = s[g++],
          d = s[g++];
        try {
          v = f(v);
        } catch (y) {
          d.call(this, y);
          break;
        }
      }
      try {
        u = hu.call(this, v);
      } catch (f) {
        return Promise.reject(f);
      }
      for (g = 0, h = c.length; g < h; ) u = u.then(c[g++], c[g++]);
      return u;
    }
    getUri(t) {
      t = on(this.defaults, t);
      const r = Ef(t.baseURL, t.url);
      return wf(r, t.params, t.paramsSerializer);
    }
  }
  U.forEach(["delete", "get", "head", "options"], function (t) {
    Bi.prototype[t] = function (r, n) {
      return this.request(
        on(n || {}, { method: t, url: r, data: (n || {}).data })
      );
    };
  });
  U.forEach(["post", "put", "patch"], function (t) {
    function r(n) {
      return function (o, a, s) {
        return this.request(
          on(s || {}, {
            method: t,
            headers: n ? { "Content-Type": "multipart/form-data" } : {},
            url: o,
            data: a,
          })
        );
      };
    }
    (Bi.prototype[t] = r()), (Bi.prototype[t + "Form"] = r(!0));
  });
  const bi = Bi;
  class al {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let r;
      this.promise = new Promise(function (o) {
        r = o;
      });
      const n = this;
      this.promise.then((i) => {
        if (!n._listeners) return;
        let o = n._listeners.length;
        for (; o-- > 0; ) n._listeners[o](i);
        n._listeners = null;
      }),
        (this.promise.then = (i) => {
          let o;
          const a = new Promise((s) => {
            n.subscribe(s), (o = s);
          }).then(i);
          return (
            (a.cancel = function () {
              n.unsubscribe(o);
            }),
            a
          );
        }),
        t(function (o, a, s) {
          n.reason || ((n.reason = new Kn(o, a, s)), r(n.reason));
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
      const r = this._listeners.indexOf(t);
      r !== -1 && this._listeners.splice(r, 1);
    }
    static source() {
      let t;
      return {
        token: new al(function (i) {
          t = i;
        }),
        cancel: t,
      };
    }
  }
  const cx = al;
  function ux(e) {
    return function (r) {
      return e.apply(null, r);
    };
  }
  function dx(e) {
    return U.isObject(e) && e.isAxiosError === !0;
  }
  const ns = {
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
  Object.entries(ns).forEach(([e, t]) => {
    ns[t] = e;
  });
  const fx = ns;
  function Df(e) {
    const t = new bi(e),
      r = cf(bi.prototype.request, t);
    return (
      U.extend(r, bi.prototype, t, { allOwnKeys: !0 }),
      U.extend(r, t, null, { allOwnKeys: !0 }),
      (r.create = function (i) {
        return Df(on(e, i));
      }),
      r
    );
  }
  const We = Df(il);
  We.Axios = bi;
  We.CanceledError = Kn;
  We.CancelToken = cx;
  We.isCancel = kf;
  We.VERSION = Tf;
  We.toFormData = po;
  We.AxiosError = _e;
  We.Cancel = We.CanceledError;
  We.all = function (t) {
    return Promise.all(t);
  };
  We.spread = ux;
  We.isAxiosError = dx;
  We.mergeConfig = on;
  We.AxiosHeaders = or;
  We.formToJSON = (e) => Sf(U.isHTMLForm(e) ? new FormData(e) : e);
  We.getAdapter = Cf.getAdapter;
  We.HttpStatusCode = fx;
  We.default = We;
  const Af = We;
  var Of = { exports: {} },
    xe = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Xn = Symbol.for("react.element"),
    hx = Symbol.for("react.portal"),
    px = Symbol.for("react.fragment"),
    mx = Symbol.for("react.strict_mode"),
    gx = Symbol.for("react.profiler"),
    vx = Symbol.for("react.provider"),
    yx = Symbol.for("react.context"),
    bx = Symbol.for("react.forward_ref"),
    xx = Symbol.for("react.suspense"),
    wx = Symbol.for("react.memo"),
    _x = Symbol.for("react.lazy"),
    gu = Symbol.iterator;
  function Sx(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (gu && e[gu]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Mf = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    If = Object.assign,
    Nf = {};
  function hn(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Nf),
      (this.updater = r || Mf);
  }
  hn.prototype.isReactComponent = {};
  hn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  hn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Rf() {}
  Rf.prototype = hn.prototype;
  function sl(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Nf),
      (this.updater = r || Mf);
  }
  var ll = (sl.prototype = new Rf());
  ll.constructor = sl;
  If(ll, hn.prototype);
  ll.isPureReactComponent = !0;
  var vu = Array.isArray,
    Lf = Object.prototype.hasOwnProperty,
    cl = { current: null },
    Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ff(e, t, r) {
    var n,
      i = {},
      o = null,
      a = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        Lf.call(t, n) && !Pf.hasOwnProperty(n) && (i[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1) i.children = r;
    else if (1 < s) {
      for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n]);
    return {
      $$typeof: Xn,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: cl.current,
    };
  }
  function kx(e, t) {
    return {
      $$typeof: Xn,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function ul(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xn;
  }
  function Ex(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var yu = /\/+/g;
  function Sa(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Ex("" + e.key)
      : t.toString(36);
  }
  function xi(e, t, r, n, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
      switch (o) {
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Xn:
            case hx:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (i = i(a)),
        (e = n === "" ? "." + Sa(a, 0) : n),
        vu(i)
          ? ((r = ""),
            e != null && (r = e.replace(yu, "$&/") + "/"),
            xi(i, t, r, "", function (c) {
              return c;
            }))
          : i != null &&
            (ul(i) &&
              (i = kx(
                i,
                r +
                  (!i.key || (a && a.key === i.key)
                    ? ""
                    : ("" + i.key).replace(yu, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((a = 0), (n = n === "" ? "." : n + ":"), vu(e)))
      for (var s = 0; s < e.length; s++) {
        o = e[s];
        var l = n + Sa(o, s);
        a += xi(o, t, r, l, i);
      }
    else if (((l = Sx(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(o = e.next()).done; )
        (o = o.value), (l = n + Sa(o, s++)), (a += xi(o, t, r, l, i));
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
    return a;
  }
  function ai(e, t, r) {
    if (e == null) return e;
    var n = [],
      i = 0;
    return (
      xi(e, n, "", "", function (o) {
        return t.call(r, o, i++);
      }),
      n
    );
  }
  function Cx(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var at = { current: null },
    wi = { transition: null },
    Tx = {
      ReactCurrentDispatcher: at,
      ReactCurrentBatchConfig: wi,
      ReactCurrentOwner: cl,
    };
  xe.Children = {
    map: ai,
    forEach: function (e, t, r) {
      ai(
        e,
        function () {
          t.apply(this, arguments);
        },
        r
      );
    },
    count: function (e) {
      var t = 0;
      return (
        ai(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        ai(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!ul(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  xe.Component = hn;
  xe.Fragment = px;
  xe.Profiler = gx;
  xe.PureComponent = sl;
  xe.StrictMode = mx;
  xe.Suspense = xx;
  xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tx;
  xe.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var n = If({}, e.props),
      i = e.key,
      o = e.ref,
      a = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (a = cl.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (l in t)
        Lf.call(t, l) &&
          !Pf.hasOwnProperty(l) &&
          (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = r;
    else if (1 < l) {
      s = Array(l);
      for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
      n.children = s;
    }
    return { $$typeof: Xn, type: e.type, key: i, ref: o, props: n, _owner: a };
  };
  xe.createContext = function (e) {
    return (
      (e = {
        $$typeof: yx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: vx, _context: e }),
      (e.Consumer = e)
    );
  };
  xe.createElement = Ff;
  xe.createFactory = function (e) {
    var t = Ff.bind(null, e);
    return (t.type = e), t;
  };
  xe.createRef = function () {
    return { current: null };
  };
  xe.forwardRef = function (e) {
    return { $$typeof: bx, render: e };
  };
  xe.isValidElement = ul;
  xe.lazy = function (e) {
    return { $$typeof: _x, _payload: { _status: -1, _result: e }, _init: Cx };
  };
  xe.memo = function (e, t) {
    return { $$typeof: wx, type: e, compare: t === void 0 ? null : t };
  };
  xe.startTransition = function (e) {
    var t = wi.transition;
    wi.transition = {};
    try {
      e();
    } finally {
      wi.transition = t;
    }
  };
  xe.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  xe.useCallback = function (e, t) {
    return at.current.useCallback(e, t);
  };
  xe.useContext = function (e) {
    return at.current.useContext(e);
  };
  xe.useDebugValue = function () {};
  xe.useDeferredValue = function (e) {
    return at.current.useDeferredValue(e);
  };
  xe.useEffect = function (e, t) {
    return at.current.useEffect(e, t);
  };
  xe.useId = function () {
    return at.current.useId();
  };
  xe.useImperativeHandle = function (e, t, r) {
    return at.current.useImperativeHandle(e, t, r);
  };
  xe.useInsertionEffect = function (e, t) {
    return at.current.useInsertionEffect(e, t);
  };
  xe.useLayoutEffect = function (e, t) {
    return at.current.useLayoutEffect(e, t);
  };
  xe.useMemo = function (e, t) {
    return at.current.useMemo(e, t);
  };
  xe.useReducer = function (e, t, r) {
    return at.current.useReducer(e, t, r);
  };
  xe.useRef = function (e) {
    return at.current.useRef(e);
  };
  xe.useState = function (e) {
    return at.current.useState(e);
  };
  xe.useSyncExternalStore = function (e, t, r) {
    return at.current.useSyncExternalStore(e, t, r);
  };
  xe.useTransition = function () {
    return at.current.useTransition();
  };
  xe.version = "18.2.0";
  Of.exports = xe;
  var dt = Of.exports;
  let Dx = { data: "" },
    Ax = (e) =>
      typeof window == "object"
        ? (
            (e ? e.querySelector("#_goober") : window._goober) ||
            Object.assign(
              (e || document.head).appendChild(document.createElement("style")),
              { innerHTML: " ", id: "_goober" }
            )
          ).firstChild
        : e || Dx,
    Ox = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    Mx = /\/\*[^]*?\*\/|  +/g,
    bu = /\n+/g,
    pr = (e, t) => {
      let r = "",
        n = "",
        i = "";
      for (let o in e) {
        let a = e[o];
        o[0] == "@"
          ? o[1] == "i"
            ? (r = o + " " + a + ";")
            : (n +=
                o[1] == "f"
                  ? pr(a, o)
                  : o + "{" + pr(a, o[1] == "k" ? "" : t) + "}")
          : typeof a == "object"
          ? (n += pr(
              a,
              t
                ? t.replace(/([^,])+/g, (s) =>
                    o.replace(/(^:.*)|([^,])+/g, (l) =>
                      /&/.test(l) ? l.replace(/&/g, s) : s ? s + " " + l : l
                    )
                  )
                : o
            ))
          : a != null &&
            ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (i += pr.p ? pr.p(o, a) : o + ":" + a + ";"));
      }
      return r + (t && i ? t + "{" + i + "}" : i) + n;
    },
    Xt = {},
    Bf = (e) => {
      if (typeof e == "object") {
        let t = "";
        for (let r in e) t += r + Bf(e[r]);
        return t;
      }
      return e;
    },
    Ix = (e, t, r, n, i) => {
      let o = Bf(e),
        a =
          Xt[o] ||
          (Xt[o] = ((l) => {
            let c = 0,
              u = 11;
            for (; c < l.length; ) u = (101 * u + l.charCodeAt(c++)) >>> 0;
            return "go" + u;
          })(o));
      if (!Xt[a]) {
        let l =
          o !== e
            ? e
            : ((c) => {
                let u,
                  g,
                  h = [{}];
                for (; (u = Ox.exec(c.replace(Mx, ""))); )
                  u[4]
                    ? h.shift()
                    : u[3]
                    ? ((g = u[3].replace(bu, " ").trim()),
                      h.unshift((h[0][g] = h[0][g] || {})))
                    : (h[0][u[1]] = u[2].replace(bu, " ").trim());
                return h[0];
              })(e);
        Xt[a] = pr(i ? { ["@keyframes " + a]: l } : l, r ? "" : "." + a);
      }
      let s = r && Xt.g ? Xt.g : null;
      return (
        r && (Xt.g = Xt[a]),
        ((l, c, u, g) => {
          g
            ? (c.data = c.data.replace(g, l))
            : c.data.indexOf(l) === -1 &&
              (c.data = u ? l + c.data : c.data + l);
        })(Xt[a], t, n, s),
        a
      );
    },
    Nx = (e, t, r) =>
      e.reduce((n, i, o) => {
        let a = t[o];
        if (a && a.call) {
          let s = a(r),
            l = (s && s.props && s.props.className) || (/^go/.test(s) && s);
          a = l
            ? "." + l
            : s && typeof s == "object"
            ? s.props
              ? ""
              : pr(s, "")
            : s === !1
            ? ""
            : s;
        }
        return n + i + (a ?? "");
      }, "");
  function go(e) {
    let t = this || {},
      r = e.call ? e(t.p) : e;
    return Ix(
      r.unshift
        ? r.raw
          ? Nx(r, [].slice.call(arguments, 1), t.p)
          : r.reduce((n, i) => Object.assign(n, i && i.call ? i(t.p) : i), {})
        : r,
      Ax(t.target),
      t.g,
      t.o,
      t.k
    );
  }
  let jf, is, os;
  go.bind({ g: 1 });
  let sr = go.bind({ k: 1 });
  function Rx(e, t, r, n) {
    (pr.p = t), (jf = e), (is = r), (os = n);
  }
  function Sr(e, t) {
    let r = this || {};
    return function () {
      let n = arguments;
      function i(o, a) {
        let s = Object.assign({}, o),
          l = s.className || i.className;
        (r.p = Object.assign({ theme: is && is() }, s)),
          (r.o = / *go\d+/.test(l)),
          (s.className = go.apply(r, n) + (l ? " " + l : "")),
          t && (s.ref = a);
        let c = e;
        return (
          e[0] && ((c = s.as || e), delete s.as), os && c[0] && os(s), jf(c, s)
        );
      }
      return t ? t(i) : i;
    };
  }
  var Lx = (e) => typeof e == "function",
    as = (e, t) => (Lx(e) ? e(t) : e),
    Px = (() => {
      let e = 0;
      return () => (++e).toString();
    })(),
    Fx = (() => {
      let e;
      return () => {
        if (e === void 0 && typeof window < "u") {
          let t = matchMedia("(prefers-reduced-motion: reduce)");
          e = !t || t.matches;
        }
        return e;
      };
    })(),
    Bx = 20,
    _i = new Map(),
    jx = 1e3,
    xu = (e) => {
      if (_i.has(e)) return;
      let t = setTimeout(() => {
        _i.delete(e), vo({ type: 4, toastId: e });
      }, jx);
      _i.set(e, t);
    },
    Yx = (e) => {
      let t = _i.get(e);
      t && clearTimeout(t);
    },
    ss = (e, t) => {
      switch (t.type) {
        case 0:
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Bx) };
        case 1:
          return (
            t.toast.id && Yx(t.toast.id),
            {
              ...e,
              toasts: e.toasts.map((o) =>
                o.id === t.toast.id ? { ...o, ...t.toast } : o
              ),
            }
          );
        case 2:
          let { toast: r } = t;
          return e.toasts.find((o) => o.id === r.id)
            ? ss(e, { type: 1, toast: r })
            : ss(e, { type: 0, toast: r });
        case 3:
          let { toastId: n } = t;
          return (
            n
              ? xu(n)
              : e.toasts.forEach((o) => {
                  xu(o.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((o) =>
                o.id === n || n === void 0 ? { ...o, visible: !1 } : o
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
    $x = [],
    ka = { toasts: [], pausedAt: void 0 },
    vo = (e) => {
      (ka = ss(ka, e)),
        $x.forEach((t) => {
          t(ka);
        });
    },
    Ux = (e, t = "blank", r) => ({
      createdAt: Date.now(),
      visible: !0,
      type: t,
      ariaProps: { role: "status", "aria-live": "polite" },
      message: e,
      pauseDuration: 0,
      ...r,
      id: (r == null ? void 0 : r.id) || Px(),
    }),
    Jn = (e) => (t, r) => {
      let n = Ux(t, e, r);
      return vo({ type: 2, toast: n }), n.id;
    },
    Mt = (e, t) => Jn("blank")(e, t);
  Mt.error = Jn("error");
  Mt.success = Jn("success");
  Mt.loading = Jn("loading");
  Mt.custom = Jn("custom");
  Mt.dismiss = (e) => {
    vo({ type: 3, toastId: e });
  };
  Mt.remove = (e) => vo({ type: 4, toastId: e });
  Mt.promise = (e, t, r) => {
    let n = Mt.loading(t.loading, {
      ...r,
      ...(r == null ? void 0 : r.loading),
    });
    return (
      e
        .then(
          (i) => (
            Mt.success(as(t.success, i), {
              id: n,
              ...r,
              ...(r == null ? void 0 : r.success),
            }),
            i
          )
        )
        .catch((i) => {
          Mt.error(as(t.error, i), {
            id: n,
            ...r,
            ...(r == null ? void 0 : r.error),
          });
        }),
      e
    );
  };
  var zx = sr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    Hx = sr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    Wx = sr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    Vx = Sr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Hx} 0.15s ease-out forwards;
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
    animation: ${Wx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    qx = sr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    Gx = Sr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${qx} 1s linear infinite;
`,
    Zx = sr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    Kx = sr`
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
    Xx = Sr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Kx} 0.2s ease-out forwards;
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
    Jx = Sr("div")`
  position: absolute;
`,
    Qx = Sr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    e2 = sr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    t2 = Sr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${e2} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    r2 = ({ toast: e }) => {
      let { icon: t, type: r, iconTheme: n } = e;
      return t !== void 0
        ? typeof t == "string"
          ? dt.createElement(t2, null, t)
          : t
        : r === "blank"
        ? null
        : dt.createElement(
            Qx,
            null,
            dt.createElement(Gx, { ...n }),
            r !== "loading" &&
              dt.createElement(
                Jx,
                null,
                r === "error"
                  ? dt.createElement(Vx, { ...n })
                  : dt.createElement(Xx, { ...n })
              )
          );
    },
    n2 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
    i2 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
    o2 = "0%{opacity:0;} 100%{opacity:1;}",
    a2 = "0%{opacity:1;} 100%{opacity:0;}",
    s2 = Sr("div")`
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
    l2 = Sr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    c2 = (e, t) => {
      let r = e.includes("top") ? 1 : -1,
        [n, i] = Fx() ? [o2, a2] : [n2(r), i2(r)];
      return {
        animation: t
          ? `${sr(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
          : `${sr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
      };
    };
  dt.memo(({ toast: e, position: t, style: r, children: n }) => {
    let i = e.height
        ? c2(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      o = dt.createElement(r2, { toast: e }),
      a = dt.createElement(l2, { ...e.ariaProps }, as(e.message, e));
    return dt.createElement(
      s2,
      { className: e.className, style: { ...i, ...r, ...e.style } },
      typeof n == "function"
        ? n({ icon: o, message: a })
        : dt.createElement(dt.Fragment, null, o, a)
    );
  });
  Rx(dt.createElement);
  go`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
  const u2 = () => {
      const e = Af.create({
        baseURL: "https://api.annotate.site/api",
        timeout: 5e3,
        headers: { "Content-Type": "application/json" },
      });
      return (
        e.interceptors.request.use(
          (t) => {
            var o;
            const r =
                ((o = Q.getState().board.board) == null ? void 0 : o._id) ||
                null,
              n = Q.getState().user.user,
              i = dh(null);
            if (
              i &&
              (i == null ? void 0 : i.subscriptionStatus) !== On.Active &&
              (i == null ? void 0 : i.subscriptionStatus) !== On.Trialing &&
              t.method !== "get"
            ) {
              const a =
                i.author === (n == null ? void 0 : n._id)
                  ? "No active plan found, Please subscribe to annotate.site PRO for using this feature"
                  : "No active plan found, Please contact board owner";
              return Xe.error(a), null;
            }
            return (
              r !== null &&
                (t.headers = {
                  ...t.headers,
                  "board-id": r,
                  user: JSON.stringify(n),
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
              Mt.error("Too many requests, please try again later")),
            Promise.reject(t)
          )
        ),
        e
      );
    },
    Pt = u2();
  var ye;
  (function (e) {
    (e[(e.Document = 0)] = "Document"),
      (e[(e.DocumentType = 1)] = "DocumentType"),
      (e[(e.Element = 2)] = "Element"),
      (e[(e.Text = 3)] = "Text"),
      (e[(e.CDATA = 4)] = "CDATA"),
      (e[(e.Comment = 5)] = "Comment");
  })(ye || (ye = {}));
  function Yf(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  function d2(e) {
    var t = e == null ? void 0 : e.host;
    return (t == null ? void 0 : t.shadowRoot) === e;
  }
  function Ea(e) {
    return Object.prototype.toString.call(e) === "[object ShadowRoot]";
  }
  function f2(e) {
    return (
      e.includes(" background-clip: text;") &&
        !e.includes(" -webkit-background-clip: text;") &&
        (e = e.replace(
          " background-clip: text;",
          " -webkit-background-clip: text; background-clip: text;"
        )),
      e
    );
  }
  function h2(e) {
    var t = e.cssText;
    if (t.split('"').length < 3) return t;
    var r = ["@import", "url(".concat(JSON.stringify(e.href), ")")];
    return (
      e.layerName === ""
        ? r.push("layer")
        : e.layerName && r.push("layer(".concat(e.layerName, ")")),
      e.supportsText && r.push("supports(".concat(e.supportsText, ")")),
      e.media.length && r.push(e.media.mediaText),
      r.join(" ") + ";"
    );
  }
  function ji(e) {
    try {
      var t = e.rules || e.cssRules;
      return t ? f2(Array.from(t).map(p2).join("")) : null;
    } catch {
      return null;
    }
  }
  function p2(e) {
    var t;
    if (g2(e))
      try {
        t = ji(e.styleSheet) || h2(e);
      } catch {}
    return m2(t || e.cssText);
  }
  function m2(e) {
    if (e.includes(":")) {
      var t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
      return e.replace(t, "$1\\$2");
    }
    return e;
  }
  function g2(e) {
    return "styleSheet" in e;
  }
  var dl = (function () {
    function e() {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }
    return (
      (e.prototype.getId = function (t) {
        var r;
        if (!t) return -1;
        var n = (r = this.getMeta(t)) === null || r === void 0 ? void 0 : r.id;
        return n ?? -1;
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
        var r = this,
          n = this.getId(t);
        this.idNodeMap.delete(n),
          t.childNodes &&
            t.childNodes.forEach(function (i) {
              return r.removeNodeFromMap(i);
            });
      }),
      (e.prototype.has = function (t) {
        return this.idNodeMap.has(t);
      }),
      (e.prototype.hasNode = function (t) {
        return this.nodeMetaMap.has(t);
      }),
      (e.prototype.add = function (t, r) {
        var n = r.id;
        this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, r);
      }),
      (e.prototype.replace = function (t, r) {
        var n = this.getNode(t);
        if (n) {
          var i = this.nodeMetaMap.get(n);
          i && this.nodeMetaMap.set(r, i);
        }
        this.idNodeMap.set(t, r);
      }),
      (e.prototype.reset = function () {
        (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
      }),
      e
    );
  })();
  function v2() {
    return new dl();
  }
  function y2(e) {
    var t = e.element,
      r = e.maskInputOptions,
      n = e.tagName,
      i = e.type,
      o = e.value,
      a = e.maskInputFn,
      s = o || "",
      l = i && yo(i);
    return (
      (r[n.toLowerCase()] || (l && r[l])) &&
        (a ? (s = a(s, t)) : (s = "*".repeat(s.length))),
      s
    );
  }
  function yo(e) {
    return e.toLowerCase();
  }
  var wu = "__rrweb_original__";
  function b2(e) {
    var t = e.getContext("2d");
    if (!t) return !0;
    for (var r = 50, n = 0; n < e.width; n += r)
      for (var i = 0; i < e.height; i += r) {
        var o = t.getImageData,
          a = wu in o ? o[wu] : o,
          s = new Uint32Array(
            a.call(
              t,
              n,
              i,
              Math.min(r, e.width - n),
              Math.min(r, e.height - i)
            ).data.buffer
          );
        if (
          s.some(function (l) {
            return l !== 0;
          })
        )
          return !1;
      }
    return !0;
  }
  function x2(e, t) {
    return !e || !t || e.type !== t.type
      ? !1
      : e.type === ye.Document
      ? e.compatMode === t.compatMode
      : e.type === ye.DocumentType
      ? e.name === t.name &&
        e.publicId === t.publicId &&
        e.systemId === t.systemId
      : e.type === ye.Comment || e.type === ye.Text || e.type === ye.CDATA
      ? e.textContent === t.textContent
      : e.type === ye.Element
      ? e.tagName === t.tagName &&
        JSON.stringify(e.attributes) === JSON.stringify(t.attributes) &&
        e.isSVG === t.isSVG &&
        e.needBlock === t.needBlock
      : !1;
  }
  function w2(e) {
    var t = e.type;
    return e.hasAttribute("data-rr-is-password")
      ? "password"
      : t
      ? yo(t)
      : null;
  }
  var _2 = 1,
    S2 = new RegExp("[^a-z0-9-_:]"),
    _u = -2;
  function k2() {
    return _2++;
  }
  function E2(e) {
    if (e instanceof HTMLFormElement) return "form";
    var t = yo(e.tagName);
    return S2.test(t) ? "div" : t;
  }
  function C2(e) {
    var t = "";
    return (
      e.indexOf("//") > -1
        ? (t = e.split("/").slice(0, 3).join("/"))
        : (t = e.split("/")[0]),
      (t = t.split("?")[0]),
      t
    );
  }
  var Ur,
    Su,
    T2 = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    D2 = /^(?:[a-z+]+:)?\/\//i,
    A2 = /^www\..*/i,
    O2 = /^(data:)([^,]*),(.*)/i;
  function Yi(e, t) {
    return (e || "").replace(T2, function (r, n, i, o, a, s) {
      var l = i || a || s,
        c = n || o || "";
      if (!l) return r;
      if (D2.test(l) || A2.test(l) || O2.test(l))
        return "url(".concat(c).concat(l).concat(c, ")");
      if (l[0] === "/")
        return "url("
          .concat(c)
          .concat(C2(t) + l)
          .concat(c, ")");
      var u = t.split("/"),
        g = l.split("/");
      u.pop();
      for (var h = 0, v = g; h < v.length; h++) {
        var f = v[h];
        f !== "." && (f === ".." ? u.pop() : u.push(f));
      }
      return "url(".concat(c).concat(u.join("/")).concat(c, ")");
    });
  }
  var M2 = /^[^ \t\n\r\u000c]+/,
    I2 = /^[, \t\n\r\u000c]+/;
  function N2(e, t) {
    if (t.trim() === "") return t;
    var r = 0;
    function n(c) {
      var u,
        g = c.exec(t.substring(r));
      return g ? ((u = g[0]), (r += u.length), u) : "";
    }
    for (var i = []; n(I2), !(r >= t.length); ) {
      var o = n(M2);
      if (o.slice(-1) === ",")
        (o = Gr(e, o.substring(0, o.length - 1))), i.push(o);
      else {
        var a = "";
        o = Gr(e, o);
        for (var s = !1; ; ) {
          var l = t.charAt(r);
          if (l === "") {
            i.push((o + a).trim());
            break;
          } else if (s) l === ")" && (s = !1);
          else if (l === ",") {
            (r += 1), i.push((o + a).trim());
            break;
          } else l === "(" && (s = !0);
          (a += l), (r += 1);
        }
      }
    }
    return i.join(", ");
  }
  function Gr(e, t) {
    if (!t || t.trim() === "") return t;
    var r = e.createElement("a");
    return (r.href = t), r.href;
  }
  function R2(e) {
    return !!(e.tagName === "svg" || e.ownerSVGElement);
  }
  function fl() {
    var e = document.createElement("a");
    return (e.href = ""), e.href;
  }
  function L2(e, t, r, n) {
    return (
      n &&
      (r === "src" ||
      (r === "href" && !(t === "use" && n[0] === "#")) ||
      (r === "xlink:href" && n[0] !== "#") ||
      (r === "background" && (t === "table" || t === "td" || t === "th"))
        ? Gr(e, n)
        : r === "srcset"
        ? N2(e, n)
        : r === "style"
        ? Yi(n, fl())
        : t === "object" && r === "data"
        ? Gr(e, n)
        : n)
    );
  }
  function P2(e, t, r) {
    return (e === "video" || e === "audio") && t === "autoplay";
  }
  function F2(e, t, r) {
    try {
      if (typeof t == "string") {
        if (e.classList.contains(t)) return !0;
      } else
        for (var n = e.classList.length; n--; ) {
          var i = e.classList[n];
          if (t.test(i)) return !0;
        }
      if (r) return e.matches(r);
    } catch {}
    return !1;
  }
  function ls(e, t, r) {
    if (!e) return !1;
    if (e.nodeType !== e.ELEMENT_NODE) return r ? ls(e.parentNode, t, r) : !1;
    for (var n = e.classList.length; n--; ) {
      var i = e.classList[n];
      if (t.test(i)) return !0;
    }
    return r ? ls(e.parentNode, t, r) : !1;
  }
  function B2(e, t, r) {
    try {
      var n = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
      if (n === null) return !1;
      if (typeof t == "string") {
        if (n.classList.contains(t) || n.closest(".".concat(t))) return !0;
      } else if (ls(n, t, !0)) return !0;
      if (r && (n.matches(r) || n.closest(r))) return !0;
    } catch {}
    return !1;
  }
  function j2(e, t, r) {
    var n = e.contentWindow;
    if (n) {
      var i = !1,
        o;
      try {
        o = n.document.readyState;
      } catch {
        return;
      }
      if (o !== "complete") {
        var a = setTimeout(function () {
          i || (t(), (i = !0));
        }, r);
        e.addEventListener("load", function () {
          clearTimeout(a), (i = !0), t();
        });
        return;
      }
      var s = "about:blank";
      if (n.location.href !== s || e.src === s || e.src === "")
        return setTimeout(t, 0), e.addEventListener("load", t);
      e.addEventListener("load", t);
    }
  }
  function Y2(e, t, r) {
    var n = !1,
      i;
    try {
      i = e.sheet;
    } catch {
      return;
    }
    if (!i) {
      var o = setTimeout(function () {
        n || (t(), (n = !0));
      }, r);
      e.addEventListener("load", function () {
        clearTimeout(o), (n = !0), t();
      });
    }
  }
  function $2(e, t) {
    var r = t.doc,
      n = t.mirror,
      i = t.blockClass,
      o = t.blockSelector,
      a = t.maskTextClass,
      s = t.maskTextSelector,
      l = t.inlineStylesheet,
      c = t.maskInputOptions,
      u = c === void 0 ? {} : c,
      g = t.maskTextFn,
      h = t.maskInputFn,
      v = t.dataURLOptions,
      f = v === void 0 ? {} : v,
      d = t.inlineImages,
      y = t.recordCanvas,
      w = t.keepIframeSrcFn,
      p = t.newlyAddedElement,
      m = p === void 0 ? !1 : p,
      b = U2(r, n);
    switch (e.nodeType) {
      case e.DOCUMENT_NODE:
        return e.compatMode !== "CSS1Compat"
          ? { type: ye.Document, childNodes: [], compatMode: e.compatMode }
          : { type: ye.Document, childNodes: [] };
      case e.DOCUMENT_TYPE_NODE:
        return {
          type: ye.DocumentType,
          name: e.name,
          publicId: e.publicId,
          systemId: e.systemId,
          rootId: b,
        };
      case e.ELEMENT_NODE:
        return H2(e, {
          doc: r,
          blockClass: i,
          blockSelector: o,
          inlineStylesheet: l,
          maskInputOptions: u,
          maskInputFn: h,
          dataURLOptions: f,
          inlineImages: d,
          recordCanvas: y,
          keepIframeSrcFn: w,
          newlyAddedElement: m,
          rootId: b,
        });
      case e.TEXT_NODE:
        return z2(e, {
          maskTextClass: a,
          maskTextSelector: s,
          maskTextFn: g,
          rootId: b,
        });
      case e.CDATA_SECTION_NODE:
        return { type: ye.CDATA, textContent: "", rootId: b };
      case e.COMMENT_NODE:
        return {
          type: ye.Comment,
          textContent: e.textContent || "",
          rootId: b,
        };
      default:
        return !1;
    }
  }
  function U2(e, t) {
    if (t.hasNode(e)) {
      var r = t.getId(e);
      return r === 1 ? void 0 : r;
    }
  }
  function z2(e, t) {
    var r,
      n = t.maskTextClass,
      i = t.maskTextSelector,
      o = t.maskTextFn,
      a = t.rootId,
      s = e.parentNode && e.parentNode.tagName,
      l = e.textContent,
      c = s === "STYLE" ? !0 : void 0,
      u = s === "SCRIPT" ? !0 : void 0;
    if (c && l) {
      try {
        e.nextSibling ||
          e.previousSibling ||
          (!((r = e.parentNode.sheet) === null || r === void 0) &&
            r.cssRules &&
            (l = ji(e.parentNode.sheet)));
      } catch (g) {
        console.warn(
          "Cannot get CSS styles from text's parentNode. Error: ".concat(g),
          e
        );
      }
      l = Yi(l, fl());
    }
    return (
      u && (l = "SCRIPT_PLACEHOLDER"),
      !c && !u && l && B2(e, n, i) && (l = o ? o(l) : l.replace(/[\S]/g, "*")),
      { type: ye.Text, textContent: l || "", isStyle: c, rootId: a }
    );
  }
  function H2(e, t) {
    for (
      var r = t.doc,
        n = t.blockClass,
        i = t.blockSelector,
        o = t.inlineStylesheet,
        a = t.maskInputOptions,
        s = a === void 0 ? {} : a,
        l = t.maskInputFn,
        c = t.dataURLOptions,
        u = c === void 0 ? {} : c,
        g = t.inlineImages,
        h = t.recordCanvas,
        v = t.keepIframeSrcFn,
        f = t.newlyAddedElement,
        d = f === void 0 ? !1 : f,
        y = t.rootId,
        w = F2(e, n, i),
        p = E2(e),
        m = {},
        b = e.attributes.length,
        _ = 0;
      _ < b;
      _++
    ) {
      var S = e.attributes[_];
      P2(p, S.name, S.value) || (m[S.name] = L2(r, p, yo(S.name), S.value));
    }
    if (p === "link" && o) {
      var k = Array.from(r.styleSheets).find(function (N) {
          return N.href === e.href;
        }),
        E = null;
      k && (E = ji(k)),
        E && (delete m.rel, delete m.href, (m._cssText = Yi(E, k.href)));
    }
    if (
      p === "style" &&
      e.sheet &&
      !(e.innerText || e.textContent || "").trim().length
    ) {
      var E = ji(e.sheet);
      E && (m._cssText = Yi(E, fl()));
    }
    if (p === "input" || p === "textarea" || p === "select") {
      var D = e.value,
        C = e.checked;
      if (
        m.type !== "radio" &&
        m.type !== "checkbox" &&
        m.type !== "submit" &&
        m.type !== "button" &&
        D
      ) {
        var T = w2(e);
        m.value = y2({
          element: e,
          type: T,
          tagName: p,
          value: D,
          maskInputOptions: s,
          maskInputFn: l,
        });
      } else C && (m.checked = C);
    }
    if (
      (p === "option" &&
        (e.selected && !s.select ? (m.selected = !0) : delete m.selected),
      p === "canvas" && h)
    ) {
      if (e.__context === "2d")
        b2(e) || (m.rr_dataURL = e.toDataURL(u.type, u.quality));
      else if (!("__context" in e)) {
        var A = e.toDataURL(u.type, u.quality),
          M = document.createElement("canvas");
        (M.width = e.width), (M.height = e.height);
        var j = M.toDataURL(u.type, u.quality);
        A !== j && (m.rr_dataURL = A);
      }
    }
    if (p === "img" && g) {
      Ur || ((Ur = r.createElement("canvas")), (Su = Ur.getContext("2d")));
      var z = e,
        $ = z.crossOrigin;
      z.crossOrigin = "anonymous";
      var Y = function () {
        z.removeEventListener("load", Y);
        try {
          (Ur.width = z.naturalWidth),
            (Ur.height = z.naturalHeight),
            Su.drawImage(z, 0, 0),
            (m.rr_dataURL = Ur.toDataURL(u.type, u.quality));
        } catch (N) {
          console.warn(
            "Cannot inline img src=".concat(z.currentSrc, "! Error: ").concat(N)
          );
        }
        $ ? (m.crossOrigin = $) : z.removeAttribute("crossorigin");
      };
      z.complete && z.naturalWidth !== 0 ? Y() : z.addEventListener("load", Y);
    }
    if (
      ((p === "audio" || p === "video") &&
        ((m.rr_mediaState = e.paused ? "paused" : "played"),
        (m.rr_mediaCurrentTime = e.currentTime)),
      d ||
        (e.scrollLeft && (m.rr_scrollLeft = e.scrollLeft),
        e.scrollTop && (m.rr_scrollTop = e.scrollTop)),
      w)
    ) {
      var q = e.getBoundingClientRect(),
        F = q.width,
        L = q.height;
      m = {
        class: m.class,
        rr_width: "".concat(F, "px"),
        rr_height: "".concat(L, "px"),
      };
    }
    return (
      p === "iframe" &&
        !v(m.src) &&
        (e.contentDocument || (m.rr_src = m.src), delete m.src),
      {
        type: ye.Element,
        tagName: p,
        attributes: m,
        childNodes: [],
        isSVG: R2(e) || void 0,
        needBlock: w,
        rootId: y,
      }
    );
  }
  function Ie(e) {
    return e == null ? "" : e.toLowerCase();
  }
  function W2(e, t) {
    if (t.comment && e.type === ye.Comment) return !0;
    if (e.type === ye.Element) {
      if (
        t.script &&
        (e.tagName === "script" ||
          (e.tagName === "link" &&
            (e.attributes.rel === "preload" ||
              e.attributes.rel === "modulepreload") &&
            e.attributes.as === "script") ||
          (e.tagName === "link" &&
            e.attributes.rel === "prefetch" &&
            typeof e.attributes.href == "string" &&
            e.attributes.href.endsWith(".js")))
      )
        return !0;
      if (
        t.headFavicon &&
        ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
          (e.tagName === "meta" &&
            (Ie(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
              Ie(e.attributes.name) === "application-name" ||
              Ie(e.attributes.rel) === "icon" ||
              Ie(e.attributes.rel) === "apple-touch-icon" ||
              Ie(e.attributes.rel) === "shortcut icon")))
      )
        return !0;
      if (e.tagName === "meta") {
        if (
          t.headMetaDescKeywords &&
          Ie(e.attributes.name).match(/^description|keywords$/)
        )
          return !0;
        if (
          t.headMetaSocial &&
          (Ie(e.attributes.property).match(/^(og|twitter|fb):/) ||
            Ie(e.attributes.name).match(/^(og|twitter):/) ||
            Ie(e.attributes.name) === "pinterest")
        )
          return !0;
        if (
          t.headMetaRobots &&
          (Ie(e.attributes.name) === "robots" ||
            Ie(e.attributes.name) === "googlebot" ||
            Ie(e.attributes.name) === "bingbot")
        )
          return !0;
        if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
          return !0;
        if (
          t.headMetaAuthorship &&
          (Ie(e.attributes.name) === "author" ||
            Ie(e.attributes.name) === "generator" ||
            Ie(e.attributes.name) === "framework" ||
            Ie(e.attributes.name) === "publisher" ||
            Ie(e.attributes.name) === "progid" ||
            Ie(e.attributes.property).match(/^article:/) ||
            Ie(e.attributes.property).match(/^product:/))
        )
          return !0;
        if (
          t.headMetaVerification &&
          (Ie(e.attributes.name) === "google-site-verification" ||
            Ie(e.attributes.name) === "yandex-verification" ||
            Ie(e.attributes.name) === "csrf-token" ||
            Ie(e.attributes.name) === "p:domain_verify" ||
            Ie(e.attributes.name) === "verify-v1" ||
            Ie(e.attributes.name) === "verification" ||
            Ie(e.attributes.name) === "shopify-checkout-api-token")
        )
          return !0;
      }
    }
    return !1;
  }
  function _n(e, t) {
    var r = t.doc,
      n = t.mirror,
      i = t.blockClass,
      o = t.blockSelector,
      a = t.maskTextClass,
      s = t.maskTextSelector,
      l = t.skipChild,
      c = l === void 0 ? !1 : l,
      u = t.inlineStylesheet,
      g = u === void 0 ? !0 : u,
      h = t.maskInputOptions,
      v = h === void 0 ? {} : h,
      f = t.maskTextFn,
      d = t.maskInputFn,
      y = t.slimDOMOptions,
      w = t.dataURLOptions,
      p = w === void 0 ? {} : w,
      m = t.inlineImages,
      b = m === void 0 ? !1 : m,
      _ = t.recordCanvas,
      S = _ === void 0 ? !1 : _,
      k = t.onSerialize,
      E = t.onIframeLoad,
      D = t.iframeLoadTimeout,
      C = D === void 0 ? 5e3 : D,
      T = t.onStylesheetLoad,
      A = t.stylesheetLoadTimeout,
      M = A === void 0 ? 5e3 : A,
      j = t.keepIframeSrcFn,
      z =
        j === void 0
          ? function () {
              return !1;
            }
          : j,
      $ = t.newlyAddedElement,
      Y = $ === void 0 ? !1 : $,
      q = t.preserveWhiteSpace,
      F = q === void 0 ? !0 : q,
      L = $2(e, {
        doc: r,
        mirror: n,
        blockClass: i,
        blockSelector: o,
        maskTextClass: a,
        maskTextSelector: s,
        inlineStylesheet: g,
        maskInputOptions: v,
        maskTextFn: f,
        maskInputFn: d,
        dataURLOptions: p,
        inlineImages: b,
        recordCanvas: S,
        keepIframeSrcFn: z,
        newlyAddedElement: Y,
      });
    if (!L) return console.warn(e, "not serialized"), null;
    var N;
    n.hasNode(e)
      ? (N = n.getId(e))
      : W2(L, y) ||
        (!F &&
          L.type === ye.Text &&
          !L.isStyle &&
          !L.textContent.replace(/^\s+|\s+$/gm, "").length)
      ? (N = _u)
      : (N = k2());
    var P = Object.assign(L, { id: N });
    if ((n.add(e, P), N === _u)) return null;
    k && k(e);
    var I = !c;
    if (P.type === ye.Element) {
      (I = I && !P.needBlock), delete P.needBlock;
      var O = e.shadowRoot;
      O && Ea(O) && (P.isShadowHost = !0);
    }
    if ((P.type === ye.Document || P.type === ye.Element) && I) {
      y.headWhitespace &&
        P.type === ye.Element &&
        P.tagName === "head" &&
        (F = !1);
      for (
        var V = {
            doc: r,
            mirror: n,
            blockClass: i,
            blockSelector: o,
            maskTextClass: a,
            maskTextSelector: s,
            skipChild: c,
            inlineStylesheet: g,
            maskInputOptions: v,
            maskTextFn: f,
            maskInputFn: d,
            slimDOMOptions: y,
            dataURLOptions: p,
            inlineImages: b,
            recordCanvas: S,
            preserveWhiteSpace: F,
            onSerialize: k,
            onIframeLoad: E,
            iframeLoadTimeout: C,
            onStylesheetLoad: T,
            stylesheetLoadTimeout: M,
            keepIframeSrcFn: z,
          },
          J = 0,
          se = Array.from(e.childNodes);
        J < se.length;
        J++
      ) {
        var H = se[J],
          he = _n(H, V);
        he && P.childNodes.push(he);
      }
      if (Yf(e) && e.shadowRoot)
        for (
          var Ye = 0, nt = Array.from(e.shadowRoot.childNodes);
          Ye < nt.length;
          Ye++
        ) {
          var H = nt[Ye],
            he = _n(H, V);
          he && (Ea(e.shadowRoot) && (he.isShadow = !0), P.childNodes.push(he));
        }
    }
    return (
      e.parentNode && d2(e.parentNode) && Ea(e.parentNode) && (P.isShadow = !0),
      P.type === ye.Element &&
        P.tagName === "iframe" &&
        j2(
          e,
          function () {
            var Ue = e.contentDocument;
            if (Ue && E) {
              var Ve = _n(Ue, {
                doc: Ue,
                mirror: n,
                blockClass: i,
                blockSelector: o,
                maskTextClass: a,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: g,
                maskInputOptions: v,
                maskTextFn: f,
                maskInputFn: d,
                slimDOMOptions: y,
                dataURLOptions: p,
                inlineImages: b,
                recordCanvas: S,
                preserveWhiteSpace: F,
                onSerialize: k,
                onIframeLoad: E,
                iframeLoadTimeout: C,
                onStylesheetLoad: T,
                stylesheetLoadTimeout: M,
                keepIframeSrcFn: z,
              });
              Ve && E(e, Ve);
            }
          },
          C
        ),
      P.type === ye.Element &&
        P.tagName === "link" &&
        P.attributes.rel === "stylesheet" &&
        Y2(
          e,
          function () {
            if (T) {
              var Ue = _n(e, {
                doc: r,
                mirror: n,
                blockClass: i,
                blockSelector: o,
                maskTextClass: a,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: g,
                maskInputOptions: v,
                maskTextFn: f,
                maskInputFn: d,
                slimDOMOptions: y,
                dataURLOptions: p,
                inlineImages: b,
                recordCanvas: S,
                preserveWhiteSpace: F,
                onSerialize: k,
                onIframeLoad: E,
                iframeLoadTimeout: C,
                onStylesheetLoad: T,
                stylesheetLoadTimeout: M,
                keepIframeSrcFn: z,
              });
              Ue && T(e, Ue);
            }
          },
          M
        ),
      P
    );
  }
  function V2(e, t) {
    var r = t || {},
      n = r.mirror,
      i = n === void 0 ? new dl() : n,
      o = r.blockClass,
      a = o === void 0 ? "rr-block" : o,
      s = r.blockSelector,
      l = s === void 0 ? null : s,
      c = r.maskTextClass,
      u = c === void 0 ? "rr-mask" : c,
      g = r.maskTextSelector,
      h = g === void 0 ? null : g,
      v = r.inlineStylesheet,
      f = v === void 0 ? !0 : v,
      d = r.inlineImages,
      y = d === void 0 ? !1 : d,
      w = r.recordCanvas,
      p = w === void 0 ? !1 : w,
      m = r.maskAllInputs,
      b = m === void 0 ? !1 : m,
      _ = r.maskTextFn,
      S = r.maskInputFn,
      k = r.slimDOM,
      E = k === void 0 ? !1 : k,
      D = r.dataURLOptions,
      C = r.preserveWhiteSpace,
      T = r.onSerialize,
      A = r.onIframeLoad,
      M = r.iframeLoadTimeout,
      j = r.onStylesheetLoad,
      z = r.stylesheetLoadTimeout,
      $ = r.keepIframeSrcFn,
      Y =
        $ === void 0
          ? function () {
              return !1;
            }
          : $,
      q =
        b === !0
          ? {
              color: !0,
              date: !0,
              "datetime-local": !0,
              email: !0,
              month: !0,
              number: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0,
              textarea: !0,
              select: !0,
              password: !0,
            }
          : b === !1
          ? { password: !0 }
          : b,
      F =
        E === !0 || E === "all"
          ? {
              script: !0,
              comment: !0,
              headFavicon: !0,
              headWhitespace: !0,
              headMetaDescKeywords: E === "all",
              headMetaSocial: !0,
              headMetaRobots: !0,
              headMetaHttpEquiv: !0,
              headMetaAuthorship: !0,
              headMetaVerification: !0,
            }
          : E === !1
          ? {}
          : E;
    return _n(e, {
      doc: e,
      mirror: i,
      blockClass: a,
      blockSelector: l,
      maskTextClass: u,
      maskTextSelector: h,
      skipChild: !1,
      inlineStylesheet: f,
      maskInputOptions: q,
      maskTextFn: _,
      maskInputFn: S,
      slimDOMOptions: F,
      dataURLOptions: D,
      inlineImages: y,
      recordCanvas: p,
      preserveWhiteSpace: C,
      onSerialize: T,
      onIframeLoad: A,
      iframeLoadTimeout: M,
      onStylesheetLoad: j,
      stylesheetLoadTimeout: z,
      keepIframeSrcFn: Y,
      newlyAddedElement: !1,
    });
  }
  var ku = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  function q2(e, t) {
    t === void 0 && (t = {});
    var r = 1,
      n = 1;
    function i(F) {
      var L = F.match(/\n/g);
      L && (r += L.length);
      var N = F.lastIndexOf(`
`);
      n = N === -1 ? n + F.length : F.length - N;
    }
    function o() {
      var F = { line: r, column: n };
      return function (L) {
        return (L.position = new a(F)), f(), L;
      };
    }
    var a = (function () {
      function F(L) {
        (this.start = L),
          (this.end = { line: r, column: n }),
          (this.source = t.source);
      }
      return F;
    })();
    a.prototype.content = e;
    var s = [];
    function l(F) {
      var L = new Error(
        ""
          .concat(t.source || "", ":")
          .concat(r, ":")
          .concat(n, ": ")
          .concat(F)
      );
      if (
        ((L.reason = F),
        (L.filename = t.source),
        (L.line = r),
        (L.column = n),
        (L.source = e),
        t.silent)
      )
        s.push(L);
      else throw L;
    }
    function c() {
      var F = h();
      return {
        type: "stylesheet",
        stylesheet: { source: t.source, rules: F, parsingErrors: s },
      };
    }
    function u() {
      return v(/^{\s*/);
    }
    function g() {
      return v(/^}/);
    }
    function h() {
      var F,
        L = [];
      for (f(), d(L); e.length && e.charAt(0) !== "}" && (F = Y() || q()); )
        F && (L.push(F), d(L));
      return L;
    }
    function v(F) {
      var L = F.exec(e);
      if (L) {
        var N = L[0];
        return i(N), (e = e.slice(N.length)), L;
      }
    }
    function f() {
      v(/^\s*/);
    }
    function d(F) {
      F === void 0 && (F = []);
      for (var L; (L = y()); ) L && F.push(L), (L = y());
      return F;
    }
    function y() {
      var F = o();
      if (!(e.charAt(0) !== "/" || e.charAt(1) !== "*")) {
        for (
          var L = 2;
          e.charAt(L) !== "" &&
          (e.charAt(L) !== "*" || e.charAt(L + 1) !== "/");

        )
          ++L;
        if (((L += 2), e.charAt(L - 1) === ""))
          return l("End of comment missing");
        var N = e.slice(2, L - 2);
        return (
          (n += 2),
          i(N),
          (e = e.slice(L)),
          (n += 2),
          F({ type: "comment", comment: N })
        );
      }
    }
    function w() {
      var F = v(/^([^{]+)/);
      if (F)
        return Jt(F[0])
          .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
          .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (L) {
            return L.replace(/,/g, "‌");
          })
          .split(/\s*(?![^(]*\)),\s*/)
          .map(function (L) {
            return L.replace(/\u200C/g, ",");
          });
    }
    function p() {
      var F = o(),
        L = v(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (L) {
        var N = Jt(L[0]);
        if (!v(/^:\s*/)) return l("property missing ':'");
        var P = v(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
          I = F({
            type: "declaration",
            property: N.replace(ku, ""),
            value: P ? Jt(P[0]).replace(ku, "") : "",
          });
        return v(/^[;\s]*/), I;
      }
    }
    function m() {
      var F = [];
      if (!u()) return l("missing '{'");
      d(F);
      for (var L; (L = p()); ) L !== !1 && (F.push(L), d(F)), (L = p());
      return g() ? F : l("missing '}'");
    }
    function b() {
      for (
        var F, L = [], N = o();
        (F = v(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

      )
        L.push(F[1]), v(/^,\s*/);
      if (L.length)
        return N({ type: "keyframe", values: L, declarations: m() });
    }
    function _() {
      var F = o(),
        L = v(/^@([-\w]+)?keyframes\s*/);
      if (L) {
        var N = L[1];
        if (((L = v(/^([-\w]+)\s*/)), !L)) return l("@keyframes missing name");
        var P = L[1];
        if (!u()) return l("@keyframes missing '{'");
        for (var I, O = d(); (I = b()); ) O.push(I), (O = O.concat(d()));
        return g()
          ? F({ type: "keyframes", name: P, vendor: N, keyframes: O })
          : l("@keyframes missing '}'");
      }
    }
    function S() {
      var F = o(),
        L = v(/^@supports *([^{]+)/);
      if (L) {
        var N = Jt(L[1]);
        if (!u()) return l("@supports missing '{'");
        var P = d().concat(h());
        return g()
          ? F({ type: "supports", supports: N, rules: P })
          : l("@supports missing '}'");
      }
    }
    function k() {
      var F = o(),
        L = v(/^@host\s*/);
      if (L) {
        if (!u()) return l("@host missing '{'");
        var N = d().concat(h());
        return g() ? F({ type: "host", rules: N }) : l("@host missing '}'");
      }
    }
    function E() {
      var F = o(),
        L = v(/^@media *([^{]+)/);
      if (L) {
        var N = Jt(L[1]);
        if (!u()) return l("@media missing '{'");
        var P = d().concat(h());
        return g()
          ? F({ type: "media", media: N, rules: P })
          : l("@media missing '}'");
      }
    }
    function D() {
      var F = o(),
        L = v(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
      if (L)
        return F({ type: "custom-media", name: Jt(L[1]), media: Jt(L[2]) });
    }
    function C() {
      var F = o(),
        L = v(/^@page */);
      if (L) {
        var N = w() || [];
        if (!u()) return l("@page missing '{'");
        for (var P = d(), I; (I = p()); ) P.push(I), (P = P.concat(d()));
        return g()
          ? F({ type: "page", selectors: N, declarations: P })
          : l("@page missing '}'");
      }
    }
    function T() {
      var F = o(),
        L = v(/^@([-\w]+)?document *([^{]+)/);
      if (L) {
        var N = Jt(L[1]),
          P = Jt(L[2]);
        if (!u()) return l("@document missing '{'");
        var I = d().concat(h());
        return g()
          ? F({ type: "document", document: P, vendor: N, rules: I })
          : l("@document missing '}'");
      }
    }
    function A() {
      var F = o(),
        L = v(/^@font-face\s*/);
      if (L) {
        if (!u()) return l("@font-face missing '{'");
        for (var N = d(), P; (P = p()); ) N.push(P), (N = N.concat(d()));
        return g()
          ? F({ type: "font-face", declarations: N })
          : l("@font-face missing '}'");
      }
    }
    var M = $("import"),
      j = $("charset"),
      z = $("namespace");
    function $(F) {
      var L = new RegExp("^@" + F + "\\s*([^;]+);");
      return function () {
        var N = o(),
          P = v(L);
        if (P) {
          var I = { type: F };
          return (I[F] = P[1].trim()), N(I);
        }
      };
    }
    function Y() {
      if (e[0] === "@")
        return (
          _() ||
          E() ||
          D() ||
          S() ||
          M() ||
          j() ||
          z() ||
          T() ||
          C() ||
          k() ||
          A()
        );
    }
    function q() {
      var F = o(),
        L = w();
      return L
        ? (d(), F({ type: "rule", selectors: L, declarations: m() }))
        : l("selector missing");
    }
    return cs(c());
  }
  function Jt(e) {
    return e ? e.replace(/^\s+|\s+$/g, "") : "";
  }
  function cs(e, t) {
    for (
      var r = e && typeof e.type == "string",
        n = r ? e : t,
        i = 0,
        o = Object.keys(e);
      i < o.length;
      i++
    ) {
      var a = o[i],
        s = e[a];
      Array.isArray(s)
        ? s.forEach(function (l) {
            cs(l, n);
          })
        : s && typeof s == "object" && cs(s, n);
    }
    return (
      r &&
        Object.defineProperty(e, "parent", {
          configurable: !0,
          writable: !0,
          enumerable: !1,
          value: t || null,
        }),
      e
    );
  }
  var Eu = {
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
  };
  function G2(e) {
    var t = Eu[e.tagName] ? Eu[e.tagName] : e.tagName;
    return t === "link" && e.attributes._cssText && (t = "style"), t;
  }
  function Z2(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  var $f = /([^\\]):hover/,
    K2 = new RegExp($f.source, "g");
  function Cu(e, t) {
    var r = t == null ? void 0 : t.stylesWithHoverClass.get(e);
    if (r) return r;
    var n = q2(e, { silent: !0 });
    if (!n.stylesheet) return e;
    var i = [];
    if (
      (n.stylesheet.rules.forEach(function (s) {
        "selectors" in s &&
          (s.selectors || []).forEach(function (l) {
            $f.test(l) && i.push(l);
          });
      }),
      i.length === 0)
    )
      return e;
    var o = new RegExp(
        i
          .filter(function (s, l) {
            return i.indexOf(s) === l;
          })
          .sort(function (s, l) {
            return l.length - s.length;
          })
          .map(function (s) {
            return Z2(s);
          })
          .join("|"),
        "g"
      ),
      a = e.replace(o, function (s) {
        var l = s.replace(K2, "$1.\\:hover");
        return "".concat(s, ", ").concat(l);
      });
    return t == null || t.stylesWithHoverClass.set(e, a), a;
  }
  function X2(e, t) {
    var r = t.doc,
      n = t.hackCss,
      i = t.cache;
    switch (e.type) {
      case ye.Document:
        return r.implementation.createDocument(null, "", null);
      case ye.DocumentType:
        return r.implementation.createDocumentType(
          e.name || "html",
          e.publicId,
          e.systemId
        );
      case ye.Element: {
        var o = G2(e),
          a;
        e.isSVG
          ? (a = r.createElementNS("http://www.w3.org/2000/svg", o))
          : (a = r.createElement(o));
        var s = {};
        for (var l in e.attributes)
          if (Object.prototype.hasOwnProperty.call(e.attributes, l)) {
            var c = e.attributes[l];
            if (
              !(o === "option" && l === "selected" && c === !1) &&
              c !== null
            ) {
              if ((c === !0 && (c = ""), l.startsWith("rr_"))) {
                s[l] = c;
                continue;
              }
              var u = o === "textarea" && l === "value",
                g = o === "style" && l === "_cssText";
              if (
                (g && n && typeof c == "string" && (c = Cu(c, i)),
                (u || g) && typeof c == "string")
              ) {
                for (
                  var h = r.createTextNode(c),
                    v = 0,
                    f = Array.from(a.childNodes);
                  v < f.length;
                  v++
                ) {
                  var d = f[v];
                  d.nodeType === a.TEXT_NODE && a.removeChild(d);
                }
                a.appendChild(h);
                continue;
              }
              try {
                if (e.isSVG && l === "xlink:href")
                  a.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    l,
                    c.toString()
                  );
                else if (
                  l === "onload" ||
                  l === "onclick" ||
                  l.substring(0, 7) === "onmouse"
                )
                  a.setAttribute("_" + l, c.toString());
                else if (
                  o === "meta" &&
                  e.attributes["http-equiv"] === "Content-Security-Policy" &&
                  l === "content"
                ) {
                  a.setAttribute("csp-content", c.toString());
                  continue;
                } else
                  (o === "link" &&
                    (e.attributes.rel === "preload" ||
                      e.attributes.rel === "modulepreload") &&
                    e.attributes.as === "script") ||
                    (o === "link" &&
                      e.attributes.rel === "prefetch" &&
                      typeof e.attributes.href == "string" &&
                      e.attributes.href.endsWith(".js")) ||
                    (o === "img" &&
                    e.attributes.srcset &&
                    e.attributes.rr_dataURL
                      ? a.setAttribute(
                          "rrweb-original-srcset",
                          e.attributes.srcset
                        )
                      : a.setAttribute(l, c.toString()));
              } catch {}
            }
          }
        var y = function (p) {
          var m = s[p];
          if (o === "canvas" && p === "rr_dataURL") {
            var b = document.createElement("img");
            (b.onload = function () {
              var S = a.getContext("2d");
              S && S.drawImage(b, 0, 0, b.width, b.height);
            }),
              (b.src = m.toString()),
              a.RRNodeType && (a.rr_dataURL = m.toString());
          } else if (o === "img" && p === "rr_dataURL") {
            var _ = a;
            _.currentSrc.startsWith("data:") ||
              (_.setAttribute("rrweb-original-src", e.attributes.src),
              (_.src = m.toString()));
          }
          if (p === "rr_width") a.style.width = m.toString();
          else if (p === "rr_height") a.style.height = m.toString();
          else if (p === "rr_mediaCurrentTime" && typeof m == "number")
            a.currentTime = m;
          else if (p === "rr_mediaState")
            switch (m) {
              case "played":
                a.play().catch(function (S) {
                  return console.warn("media playback error", S);
                });
                break;
              case "paused":
                a.pause();
                break;
            }
        };
        for (var w in s) y(w);
        if (e.isShadowHost)
          if (!a.shadowRoot) a.attachShadow({ mode: "open" });
          else
            for (; a.shadowRoot.firstChild; )
              a.shadowRoot.removeChild(a.shadowRoot.firstChild);
        return a;
      }
      case ye.Text:
        return r.createTextNode(
          e.isStyle && n ? Cu(e.textContent, i) : e.textContent
        );
      case ye.CDATA:
        return r.createCDATASection(e.textContent);
      case ye.Comment:
        return r.createComment(e.textContent);
      default:
        return null;
    }
  }
  function Uf(e, t) {
    var r = t.doc,
      n = t.mirror,
      i = t.skipChild,
      o = i === void 0 ? !1 : i,
      a = t.hackCss,
      s = a === void 0 ? !0 : a,
      l = t.afterAppend,
      c = t.cache;
    if (n.has(e.id)) {
      var u = n.getNode(e.id),
        g = n.getMeta(u);
      if (x2(g, e)) return n.getNode(e.id);
    }
    var h = X2(e, { doc: r, hackCss: s, cache: c });
    if (!h) return null;
    if (
      (e.rootId && n.getNode(e.rootId) !== r && n.replace(e.rootId, r),
      e.type === ye.Document &&
        (r.close(),
        r.open(),
        e.compatMode === "BackCompat" &&
          e.childNodes &&
          e.childNodes[0].type !== ye.DocumentType &&
          (e.childNodes[0].type === ye.Element &&
          "xmlns" in e.childNodes[0].attributes &&
          e.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml"
            ? r.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
              )
            : r.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
              )),
        (h = r)),
      n.add(h, e),
      (e.type === ye.Document || e.type === ye.Element) && !o)
    )
      for (
        var v = function (w) {
            var p = Uf(w, {
              doc: r,
              mirror: n,
              skipChild: !1,
              hackCss: s,
              afterAppend: l,
              cache: c,
            });
            if (!p) return console.warn("Failed to rebuild", w), "continue";
            if (w.isShadow && Yf(h) && h.shadowRoot)
              h.shadowRoot.appendChild(p);
            else if (e.type === ye.Document && w.type == ye.Element) {
              var m = p,
                b = null;
              m.childNodes.forEach(function (_) {
                _.nodeName === "BODY" && (b = _);
              }),
                b
                  ? (m.removeChild(b), h.appendChild(p), m.appendChild(b))
                  : h.appendChild(p);
            } else h.appendChild(p);
            l && l(p, w.id);
          },
          f = 0,
          d = e.childNodes;
        f < d.length;
        f++
      ) {
        var y = d[f];
        v(y);
      }
    return h;
  }
  function J2(e, t) {
    function r(a) {
      t(a);
    }
    for (var n = 0, i = e.getIds(); n < i.length; n++) {
      var o = i[n];
      e.has(o) && r(e.getNode(o));
    }
  }
  function Q2(e, t) {
    var r = t.getMeta(e);
    if ((r == null ? void 0 : r.type) === ye.Element) {
      var n = e;
      for (var i in r.attributes)
        if (
          Object.prototype.hasOwnProperty.call(r.attributes, i) &&
          i.startsWith("rr_")
        ) {
          var o = r.attributes[i];
          i === "rr_scrollLeft" && (n.scrollLeft = o),
            i === "rr_scrollTop" && (n.scrollTop = o);
        }
    }
  }
  function ew(e, t) {
    var r = t.doc,
      n = t.onVisit,
      i = t.hackCss,
      o = i === void 0 ? !0 : i,
      a = t.afterAppend,
      s = t.cache,
      l = t.mirror,
      c = l === void 0 ? new dl() : l,
      u = Uf(e, {
        doc: r,
        mirror: c,
        skipChild: !1,
        hackCss: o,
        afterAppend: a,
        cache: s,
      });
    return (
      J2(c, function (g) {
        n && n(g), Q2(g, c);
      }),
      u
    );
  }
  async function tw() {
    Qn();
    const e = V2(window.document, {
      keepIframeSrcFn: () => !0,
      inlineStylesheet: !1,
      inlineImages: !1,
    });
    if (!e) return;
    const t = document.implementation.createHTMLDocument("New Document");
    if (
      ew(e, {
        doc: t,
        mirror: v2(),
        cache: { stylesWithHoverClass: new Map() },
      })
    )
      return t.documentElement.outerHTML;
  }
  const rw = {
    openAnnotationId: "NEW",
    annotations: [],
    currentAnnotation: null,
    showAnnotation: !0,
    showMissingElements: !0,
    uploadingMediaAnnotations: null,
  };
  function nw(e = rw, t) {
    switch (t.type) {
      case "SET_ANNOTATIONS":
        return Re(e, (r) => {
          r.annotations = t.payload;
        });
      case "ADD_ANNOTATION":
        return Re(e, (r) => {
          r.annotations.push(t.payload);
        });
      case "REMOVE_ANNOTATION":
        return Re(e, (r) => {
          const n = r.annotations.findIndex((i) => i._id === t.payload);
          n > -1 && r.annotations.splice(n, 1);
        });
      case "UPDATE_ANNOTATION":
        return Re(e, (r) => {
          const n = r.annotations.findIndex((i) => i._id === t.payload._id);
          n > -1 && (r.annotations[n] = t.payload);
        });
      case "SET_OPEN_ANNOTATION_ID":
        return Re(e, (r) => {
          r.openAnnotationId = t.payload;
        });
      case "ADD_REPLY":
        return Re(e, (r) => {
          var i;
          const n = r.annotations.findIndex(
            (o) => o._id === t.payload.annotation
          );
          n > -1 &&
            ((i = r.annotations[n].replies) == null || i.push(t.payload));
        });
      case "UPDATE_REPLY":
        return Re(e, (r) => {
          var i;
          const n = r.annotations.findIndex(
            (o) => o._id === t.payload.annotationId
          );
          if (n > -1) {
            const o =
              (i = r.annotations[n].replies) == null
                ? void 0
                : i.findIndex((a) => a._id === t.payload.reply._id);
            o > -1 && (r.annotations[n].replies[o] = t.payload.reply);
          }
        });
      case "DELETE_REPLY":
        return Re(e, (r) => {
          var i, o;
          const n = r.annotations.findIndex(
            (a) => a._id === t.payload.annotationId
          );
          if (n > -1) {
            const a =
              (i = r.annotations[n].replies) == null
                ? void 0
                : i.findIndex((s) => s._id === t.payload.replyId);
            a > -1 &&
              ((o = r.annotations[n].replies) == null || o.splice(a, 1));
          }
        });
      case "TOGGLE_SHOW_ANNOTATION":
        return Re(e, (r) => {
          r.showAnnotation = t.payload;
        });
      case "SET_SHOW_MISSING_ELEMENTS":
        return Re(e, (r) => {
          r.showMissingElements = t.payload;
        });
      case "APPEND_ANNOTATION_UPLOADING_MEDIA":
        return Re(e, (r) => {
          var n;
          r.uploadingMediaAnnotations || (r.uploadingMediaAnnotations = []),
            (n = r.uploadingMediaAnnotations) == null || n.push(t.payload);
        });
      case "REMOVE_ANNOTATION_UPLOADING_MEDIA":
        return Re(e, (r) => {
          var i, o;
          if (!r.uploadingMediaAnnotations) return;
          if (r.uploadingMediaAnnotations.length === 1) {
            r.uploadingMediaAnnotations = [];
            return;
          }
          const n =
            (i = r.uploadingMediaAnnotations) == null
              ? void 0
              : i.findIndex((a) => a === t.payload);
          n &&
            n > -1 &&
            ((o = r.uploadingMediaAnnotations) == null || o.splice(n, 1));
        });
      default:
        return e;
    }
  }
  async function iw(e) {
    Q.dispatch({ type: "SET_ANNOTATIONS", payload: e });
  }
  async function zf(e) {
    let t;
    try {
      if (
        (Q.dispatch({ type: "ADD_ANNOTATION", payload: e }),
        e.comment === "" && e._id === "NEW")
      )
        return;
      t = Xe.loading("Saving annotation");
      const { _id: r, ...n } = e,
        i = await tw(),
        o = await Pt.post("webapp/annotation", n);
      Q.dispatch({ type: "ADD_ANNOTATION", payload: o.data }),
        t.hideToast(),
        Xe.success("Comment saved"),
        $t(o.data._id),
        ow(i, o.data._id);
    } catch {
      t.hideToast(), Xe.error("Error saving annotation");
    }
    jr("NEW"), Hf(!0);
  }
  async function ow(e, t) {
    try {
      Q.dispatch({ type: "APPEND_ANNOTATION_UPLOADING_MEDIA", payload: t });
      const r = {};
      if (e) {
        let i = JSON.stringify({
            scrollY: Math.floor(window.scrollY),
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            html: e,
            darkMode: o_(),
          }),
          o = {
            method: "post",
            maxBodyLength: 1 / 0,
            url: "https://screenshot-annotate.netlify.app/",
            headers: { "Content-Type": "application/json" },
            data: i,
          };
        const a = await Af.request(o);
        r.screenShot = {
          url: a.data.res.secure_url,
          cloudID: a.data.res.public_id,
        };
      }
      const n = await Pt.patch(`webapp/annotation/${t}`, r);
      Q.dispatch({ type: "UPDATE_ANNOTATION", payload: n.data }),
        Q.dispatch({ type: "REMOVE_ANNOTATION_UPLOADING_MEDIA", payload: t });
    } catch {
      Q.dispatch({ type: "REMOVE_ANNOTATION_UPLOADING_MEDIA", payload: t });
    }
  }
  async function jr(e) {
    try {
      e !== "NEW" &&
        (await Pt.delete(`webapp/annotation/${e}`),
        Xe.success("Annotation deleted")),
        Q.dispatch({ type: "REMOVE_ANNOTATION", payload: e });
    } catch {
      Xe.error("Error deleting annotation");
    }
  }
  async function us(e, t) {
    try {
      let r = { data: { ...t, _id: e } };
      if (e === "NEW") {
        Q.dispatch({ type: "UPDATE_ANNOTATION", payload: r.data });
        return;
      }
      t.comment !== "" &&
        !t.replies &&
        ((r = await Pt.patch(`webapp/annotation/${e}`, t)),
        Xe.success("Annotation updated")),
        Q.dispatch({ type: "UPDATE_ANNOTATION", payload: r.data });
    } catch {
      Xe.error("Error updating annotation");
    }
  }
  function Hf(e) {
    Q.dispatch({ type: "TOGGLE_SHOW_ANNOTATION", payload: e });
  }
  async function aw(e, t) {
    var r, n;
    try {
      const i =
        (n = (r = Q.getState()) == null ? void 0 : r.user) == null
          ? void 0
          : n.user;
      if (!i) return;
      const o = await Pt.post("webapp/reply", {
        annotation: e,
        text: t,
        author: i._id,
      });
      Q.dispatch({ type: "ADD_REPLY", payload: o.data.reply }),
        Xe.success("Reply added");
    } catch {
      Xe.error("Error adding reply");
    }
  }
  async function sw(e, t, r) {
    try {
      const n = await Pt.patch(`webapp/reply/${t}`, { text: r });
      Q.dispatch({
        type: "UPDATE_REPLY",
        payload: { annotationId: e, reply: n.data },
      }),
        Xe.success("Reply updated");
    } catch {
      Xe.error("Error updating reply");
    }
  }
  async function lw(e, t) {
    try {
      await Pt.delete(`webapp/reply/${t}`),
        Q.dispatch({
          type: "DELETE_REPLY",
          payload: { annotationId: e, replyId: t },
        }),
        Xe.success("Reply deleted");
    } catch {
      Xe.error("Error deleting reply");
    }
  }
  function $t(e) {
    Q.dispatch({ type: "SET_OPEN_ANNOTATION_ID", payload: e });
  }
  function Tu(e) {
    Q.dispatch({ type: "SET_SHOW_MISSING_ELEMENTS", payload: e });
  }
  const cw = () => {
    let e = ue.getShadowRoot().getElementById("create-annotation-button");
    e ||
      ((e = document.createElement("button")),
      (e.id = "create-annotation-button"),
      (e.className = "border-none cursor-pointer w-max-content p-1 pl-2 py-2"));
    let t = Q.getState().toolbar.cursorType;
    return (
      (e.innerHTML = `
  <div  class="p-2 rounded-full ${
    t === "comment" ? "bg-orange-500" : "hover:bg-white/20"
  } ">
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
      e.addEventListener("click", (r) => {
        if (
          (r.preventDefault(), Q.getState().toolbar.cursorType === "browse")
        ) {
          if (!Tt()) return;
          window.innerWidth < 400 &&
            Xe.success("Click anywhere to leave a feedback");
        }
        pl(), Qn();
      }),
      e
    );
  };
  function uw() {
    let e = ue.getShadowRoot().getElementById("toggle-inbox-button");
    e ||
      ((e = document.createElement("button")),
      (e.id = "toggle-inbox-button"),
      (e.className =
        "border-none cursor-pointer w-max-content p-2 max-md:p-1"));
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
        hl();
      }),
      e
    );
  }
  function dw() {
    let e = ue.getShadowRoot().querySelector("#more-options-tooltip");
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
      r = e.querySelector("#show-only-unresolved-button");
    (t.checked = Q.getState().toolbar.showOnlyUnresolved),
      r.addEventListener("click", () => {
        $t(""), Du();
      }),
      t.addEventListener("click", () => {
        $t(""), Du();
      });
    const n = e.querySelector("#show-missing-annotation"),
      i = e.querySelector("#show-missing-annotation-button");
    return (
      (n.checked = Q.getState().annotation.showMissingElements),
      i.addEventListener("click", () => {
        $t(""), Tu(!n.checked);
      }),
      n.addEventListener("click", () => {
        $t(""), Tu(!n.checked);
      }),
      e
    );
  }
  function fw() {
    let e = ue.getShadowRoot().getElementById("more-options-btn");
    return (
      e ||
        ((e = document.createElement("button")),
        (e.id = "more-options-btn"),
        (e.className =
          "border-none cursor-pointer w-max-content relative text-white pr-1 py-2 rounded-r-full")),
      (e.innerHTML = `
  <div  class="p-2 rounded-full hover:bg-white/50">
    <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 max-md:w-5 max-md:h-5">
      <path  stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  </div>`),
      e.addEventListener("click", () => {
        const t = dw();
        e.appendChild(t);
      }),
      e
    );
  }
  function hw() {
    const e = document.createElement("div");
    return (
      (e.className =
        "w-full h-full bg-transparent cursor-move py-4 pl-3 px-1 rounded-l-full text-white -rounded-r-full"),
      (e.id = "toolbarComponent-drag"),
      (e.innerHTML = `
  <div className="rounded-full pl-3 pr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            />
          </svg>
        </div>`),
      e
    );
  }
  function bo() {
    const e = Q.getState().board.board;
    let t = ue.getShadowRoot().getElementById("toolbarComponent");
    const r = Q.getState().toolbar.toolbarPosition;
    if ((console.log(r), !r)) return;
    t == null || t.remove(),
      (t = document.createElement("div")),
      (t.id = "toolbarComponent"),
      ue.addNode(t),
      (t.className = `${
        e != null && e.showAnnotations
          ? "bg-neutral-950/60 backdrop-blur-sm shadow-2xl border border-white"
          : "bg-orange-500 right-12 max-md:right-8"
      } flex items-center justify-center fixed rounded-full cursor-pointer max-h-max`),
      (t.style.top = r.top + "px"),
      (t.style.left = r.left + "px"),
      (t.style.zIndex = "9000");
    const n = hw();
    t.appendChild(n);
    const i = document.createElement("div");
    (i.className =
      "flex items-center justify-center bg-neutral-950 rounded-full"),
      t.appendChild(i);
    const o = cw();
    if ((i.appendChild(o), e != null && e.showInbox)) {
      const a = uw();
      i.appendChild(a);
    }
    if (e != null && e.showInbox) {
      const a = fw();
      i.appendChild(a);
    }
    pw(t);
  }
  function pw(e) {
    var t = 0,
      r = 0,
      n = 0,
      i = 0;
    e &&
      (document.getElementById(e.id + "drag")
        ? (document.getElementById(e.id + "drag").onmousedown = o)
        : (e.onmousedown = o));
    function o(l) {
      (l = l || window.event),
        l.preventDefault(),
        (n = l.clientX),
        (i = l.clientY),
        (document.onmouseup = s),
        (document.onmousemove = a);
    }
    function a(l) {
      if (((l = l || window.event), l.preventDefault(), e)) {
        (t = n - l.clientX),
          (r = i - l.clientY),
          (n = l.clientX),
          (i = l.clientY);
        const c = Math.max(
            Math.min(e.offsetTop - r, window.innerHeight - 100),
            0
          ),
          u = Math.max(Math.min(e.offsetLeft - t, window.innerWidth - 200), 0);
        (e.style.top = c + "px"),
          (e.style.left = u + "px"),
          vw({ top: c, left: u });
      }
    }
    function s() {
      (document.onmouseup = null), (document.onmousemove = null);
    }
  }
  const mw = {
    cursorType: "browse",
    isInboxOpen: !1,
    deviceScreenSize: wt.DESKTOP,
    showOnlyUnresolved: !0,
    toolbarPosition: { top: window.innerHeight - 100, left: 20 },
  };
  function gw(e = mw, t) {
    switch (t.type) {
      case "TOGGLE_CURSOR_TYPE":
        return Re(e, (r) => {
          r.cursorType = r.cursorType === "browse" ? "comment" : "browse";
        });
      case "TOGGLE_SCREENSHOT_MODE":
        return Re(e, (r) => {
          r.cursorType =
            r.cursorType === "screenshot" ? "comment" : "screenshot";
        });
      case "TOGGLE_INBOX":
        return Re(e, (r) => {
          r.isInboxOpen = !r.isInboxOpen;
        });
      case "SET_DEVICE_SCREEN_SIZE":
        return Re(e, (r) => {
          r.deviceScreenSize = t.payload;
        });
      case "TOGGLE_SHOW_ONLY_UNRESOLVED":
        return Re(e, (r) => {
          r.showOnlyUnresolved = !r.showOnlyUnresolved;
        });
      case "SET_TOOLBAR_POSITION":
        return Re(e, (r) => {
          r.toolbarPosition = t.payload;
        });
      default:
        return e;
    }
  }
  function vw(e) {
    Q.dispatch({ type: "SET_TOOLBAR_POSITION", payload: e });
  }
  function Ca(e) {
    u_(e), Q.dispatch({ type: "SET_DEVICE_SCREEN_SIZE", payload: e }), bo();
  }
  function hl() {
    Q.dispatch({ type: "TOGGLE_INBOX" }), bo();
  }
  function pl() {
    Q.dispatch({ type: "TOGGLE_CURSOR_TYPE" }), bo();
  }
  function Du() {
    Q.dispatch({ type: "TOGGLE_SHOW_ONLY_UNRESOLVED" });
  }
  function Si() {
    var h;
    let e = ue.getShadowRoot().getElementById("inbox");
    const t = Q.getState().inbox.route,
      r = Q.getState().inbox.status,
      n =
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
      ue.addNode(e)),
      i ? e.classList.remove("hidden") : e.classList.add("hidden");
    const o = Q.getState().annotation.annotations,
      a = window.location.pathname,
      s = o.filter((v) => {
        if (
          !(t && t !== "All" && v.route !== t) &&
          !((r && r !== "All" && v.status !== r) || v._id === "NEW") &&
          !(
            n &&
            n[0].trim() !== "All" &&
            !(
              f_(X(v.createdAt).format("MM/DD/YYYY"), n[1].trim()) &&
              h_(X(v.createdAt).format("MM/DD/YYYY"), n[0].trim())
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
        <option ${t === a ? "selected" : ""} value="${a}">
          ${a === "/" ? "Homepage" : a}
        </option>
        ${[...new Set(o.map((v) => v.route))]
          .map((v) =>
            a === v
              ? null
              : `
              <option
                key="${v}"
                value="${v}"
                ${t === v ? "selected" : ""}
                class="break-words text-ellipsis max-w-[3rem]"
              >
                ${v === "/" ? "Homepage" : v}
                ${v === a ? "(Current)" : ""}
              </option>`
          )
          .join("")}
      </select>

      <select
        name="inbox_status_filter"
        id="inbox_status_filter"
        value="${r}"
        class="w-full border p-2 mt-2"
      >
        <option disabled>Filter By Status</option>
        <option ${r === null ? "selected" : ""} value="All">All</option>
        <option ${
          r === ft.RESOLVED ? "selected" : ""
        } value="RESOLVED">RESOLVED</option>
        <option ${
          r === ft.UNRESOLVED ? "selected" : ""
        } value="UNRESOLVED">UNRESOLVED</option>
      </select>

      <input type="text" name="dates" class="text-sm w-full border p-2 mt-2" placeholder="Filter By Date" value="${
        n[0] !== "All" ? n.join("-") : "Filter By Date"
      }" />
    </div>

    ${
      s.length === 0
        ? '<div class="text-center h-full flex items-center justify-center text-xl">No comments Found</div>'
        : `
        ${s
          .map((v) => {
            var f, d, y;
            return `
              <div class="flex flex-col gap-2 border p-2 rounded cursor-pointer mt-2 ${
                v.status === ft.RESOLVED ? "bg-green-100" : ""
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
                    (y = uh.find((w) => w.type === v.screenType)) == null
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
    const l = ue.getNode('input[name="dates"]');
    if (l)
      try {
        const v = new jy({
          element: l,
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
          iu(`${y} - ${w}`);
        }),
          window.addEventListener("scroll", () => {
            window.innerWidth > 400 && v.hide();
          }),
          v.on("clear:selection", () => {
            iu("All"), v.hide();
          }),
          l.addEventListener("click", () => {
            Q.getState().toolbar.cursorType === "comment" && (pl(), Qn());
          });
      } catch {}
    const c = ue.getShadowRoot().getElementById("close_inbox_btn");
    if (!c) return;
    c.addEventListener("click", () => {
      hl();
    }),
      o.forEach((v) => {
        const f = ue
          .getShadowRoot()
          .getElementById(`inbox_annotation_${v._id}`);
        f &&
          f.addEventListener("click", () => {
            window.innerWidth > 400 && Si(),
              (window.location.href = window.origin + v.route + `?a=${v._id}`);
          });
      });
    const u = ue.getShadowRoot().getElementById("inbox_route_filter");
    u &&
      u.addEventListener("change", (v) => {
        v.preventDefault();
        const f = v.target.value;
        (u.value = f),
          f !== null && (Q.dispatch({ type: "SET_ROUTE", payload: f }), Si());
      });
    const g = ue.getShadowRoot().getElementById("inbox_status_filter");
    g &&
      g.addEventListener("change", (v) => {
        v.preventDefault();
        const f = v.target.value;
        (g.value = f),
          f !== null && (Q.dispatch({ type: "SET_STATUS", payload: f }), Si());
      });
  }
  const yw = { board: null, currentRoute: "" };
  function bw(e = yw, t) {
    switch (t.type) {
      case "SET_BOARD":
        return Re(e, (r) => {
          r.board = t.payload;
        });
      case "SET_CURRENT_ROUTE":
        return Re(e, (r) => {
          r.currentRoute = t.payload;
        });
      default:
        return e;
    }
  }
  function xw(e) {
    Q.dispatch({ type: "SET_BOARD", payload: e });
  }
  function si(e) {
    Q.dispatch({ type: "SET_CURRENT_ROUTE", payload: e });
  }
  let ml = window.localStorage;
  typeof Storage > "u" &&
    (ml = {
      getItem: () => "undefined",
      setItem: () => !0,
      clear: () => !0,
      removeItem: () => !0,
      length: 0,
      key: () => "undefined",
    });
  const ww = () => {
      try {
        const e = ml.getItem("ann-site");
        return e === null ? void 0 : JSON.parse(e);
      } catch {
        return;
      }
    },
    _w = (e) => {
      try {
        const t = JSON.stringify(e);
        ml.setItem("ann-site", t);
      } catch {}
    },
    Sw = { user: null };
  function kw(e = Sw, t) {
    switch (t.type) {
      case "ADD_USER":
        return Re(e, (r) => {
          r.user = {
            _id: t.payload._id,
            firstName: t.payload.firstName,
            lastName: t.payload.lastName,
            email: t.payload.email,
            userSub: null,
          };
        });
      case "SET_USER_SUB":
        return Re(e, (r) => {
          r.user && (r.user = { ...r.user, userSub: t.payload.userSub });
        });
      default:
        return e;
    }
  }
  async function Ew(e, t, r) {
    const n = await Pt.post("webapp/user", {
      firstName: e,
      lastName: t,
      email: r,
      isGuest: !0,
    });
    Q.dispatch({
      type: "ADD_USER",
      payload: {
        _id: n.data._id,
        firstName: n.data.firstName,
        lastName: n.data.lastName,
        email: n.data.email,
      },
    });
  }
  async function Cw(e) {
    Q.dispatch({ type: "SET_USER_SUB", payload: { userSub: e } });
  }
  const Tw = Ry({
      toolbar: gw,
      annotation: nw,
      user: kw,
      board: bw,
      inbox: Xy,
    }),
    Dw = ww(),
    Q = Iy(Tw, Dw, Jd(Ly(Py)));
  Q.subscribe(() => {
    _w(Q.getState()), Hi(), Wi();
    const e = Q.getState().board.board;
    e != null && e.showInbox && Si();
  });
  function Aw() {
    let e = ue.getShadowRoot().getElementById("userModel"),
      t = ue.getShadowRoot().getElementById("userModalContent");
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
      ue.addNode(e);
    const r = ue.getShadowRoot().getElementById("user_add_form");
    if (!r) return;
    const n = ue.getShadowRoot().getElementById("close-user-model");
    n &&
      n.addEventListener("click", () => {
        e == null || e.remove();
      }),
      r.addEventListener("submit", async (i) => {
        i.preventDefault();
        const o = r.querySelector('input[placeholder="First Name"]').value,
          a = r.querySelector('input[placeholder="Last Name"]').value,
          s = r.querySelector('input[placeholder="Email"]').value;
        if (!o || !a || !s) return alert("Please fill all the fields");
        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(s))
          return alert("Please enter a valid email address");
        await Ew(o, a, s), e == null || e.remove();
      });
  }
  var Wf = "en",
    gl = {},
    ds = {};
  function Vf() {
    return Wf;
  }
  function Ow(e) {
    Wf = e;
  }
  function Mw(e) {
    return gl[e];
  }
  function Iw(e) {
    if (!e) throw new Error("No locale data passed");
    (gl[e.locale] = e), (ds[e.locale.toLowerCase()] = e.locale);
  }
  function Au(e) {
    if (gl[e]) return e;
    if (ds[e.toLowerCase()]) return ds[e.toLowerCase()];
  }
  function qf(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.localeMatcher || "lookup";
    switch (r) {
      case "lookup":
        return Ou(e);
      case "best fit":
        return Ou(e);
      default:
        throw new RangeError('Invalid "localeMatcher" option: '.concat(r));
    }
  }
  function Ou(e) {
    var t = Au(e);
    if (t) return t;
    for (var r = e.split("-"); e.length > 1; ) {
      r.pop(), (e = r.join("-"));
      var n = Au(e);
      if (n) return n;
    }
  }
  var R = {
    af: function (t) {
      return t == 1 ? "one" : "other";
    },
    am: function (t) {
      return t >= 0 && t <= 1 ? "one" : "other";
    },
    ar: function (t) {
      var r = String(t).split("."),
        n = Number(r[0]) == t,
        i = n && r[0].slice(-2);
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
      var r = String(t).split("."),
        n = !r[1];
      return t == 1 && n ? "one" : "other";
    },
    be: function (t) {
      var r = String(t).split("."),
        n = Number(r[0]) == t,
        i = n && r[0].slice(-1),
        o = n && r[0].slice(-2);
      return i == 1 && o != 11
        ? "one"
        : i >= 2 && i <= 4 && (o < 12 || o > 14)
        ? "few"
        : (n && i == 0) || (i >= 5 && i <= 9) || (o >= 11 && o <= 14)
        ? "many"
        : "other";
    },
    br: function (t) {
      var r = String(t).split("."),
        n = Number(r[0]) == t,
        i = n && r[0].slice(-1),
        o = n && r[0].slice(-2),
        a = n && r[0].slice(-6);
      return i == 1 && o != 11 && o != 71 && o != 91
        ? "one"
        : i == 2 && o != 12 && o != 72 && o != 92
        ? "two"
        : (i == 3 || i == 4 || i == 9) &&
          (o < 10 || o > 19) &&
          (o < 70 || o > 79) &&
          (o < 90 || o > 99)
        ? "few"
        : t != 0 && n && a == 0
        ? "many"
        : "other";
    },
    bs: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = r[1] || "",
        o = !r[1],
        a = n.slice(-1),
        s = n.slice(-2),
        l = i.slice(-1),
        c = i.slice(-2);
      return (o && a == 1 && s != 11) || (l == 1 && c != 11)
        ? "one"
        : (o && a >= 2 && a <= 4 && (s < 12 || s > 14)) ||
          (l >= 2 && l <= 4 && (c < 12 || c > 14))
        ? "few"
        : "other";
    },
    ca: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-6);
      return t == 1 && i ? "one" : n != 0 && o == 0 && i ? "many" : "other";
    },
    ceb: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = r[1] || "",
        o = !r[1],
        a = n.slice(-1),
        s = i.slice(-1);
      return (o && (n == 1 || n == 2 || n == 3)) ||
        (o && a != 4 && a != 6 && a != 9) ||
        (!o && s != 4 && s != 6 && s != 9)
        ? "one"
        : "other";
    },
    cs: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1];
      return t == 1 && i
        ? "one"
        : n >= 2 && n <= 4 && i
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
      var r = String(t).split("."),
        n = r[0],
        i = Number(r[0]) == t;
      return t == 1 || (!i && (n == 0 || n == 1)) ? "one" : "other";
    },
    dsb: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = r[1] || "",
        o = !r[1],
        a = n.slice(-2),
        s = i.slice(-2);
      return (o && a == 1) || s == 1
        ? "one"
        : (o && a == 2) || s == 2
        ? "two"
        : (o && (a == 3 || a == 4)) || s == 3 || s == 4
        ? "few"
        : "other";
    },
    dz: function (t) {
      return "other";
    },
    es: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-6);
      return t == 1 ? "one" : n != 0 && o == 0 && i ? "many" : "other";
    },
    ff: function (t) {
      return t >= 0 && t < 2 ? "one" : "other";
    },
    fr: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-6);
      return t >= 0 && t < 2 ? "one" : n != 0 && o == 0 && i ? "many" : "other";
    },
    ga: function (t) {
      var r = String(t).split("."),
        n = Number(r[0]) == t;
      return t == 1
        ? "one"
        : t == 2
        ? "two"
        : n && t >= 3 && t <= 6
        ? "few"
        : n && t >= 7 && t <= 10
        ? "many"
        : "other";
    },
    gd: function (t) {
      var r = String(t).split("."),
        n = Number(r[0]) == t;
      return t == 1 || t == 11
        ? "one"
        : t == 2 || t == 12
        ? "two"
        : (n && t >= 3 && t <= 10) || (n && t >= 13 && t <= 19)
        ? "few"
        : "other";
    },
    he: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1];
      return (n == 1 && i) || (n == 0 && !i)
        ? "one"
        : n == 2 && i
        ? "two"
        : "other";
    },
    is: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = (r[1] || "").replace(/0+$/, ""),
        o = Number(r[0]) == t,
        a = n.slice(-1),
        s = n.slice(-2);
      return (o && a == 1 && s != 11) || (i % 10 == 1 && i % 100 != 11)
        ? "one"
        : "other";
    },
    ksh: function (t) {
      return t == 0 ? "zero" : t == 1 ? "one" : "other";
    },
    lt: function (t) {
      var r = String(t).split("."),
        n = r[1] || "",
        i = Number(r[0]) == t,
        o = i && r[0].slice(-1),
        a = i && r[0].slice(-2);
      return o == 1 && (a < 11 || a > 19)
        ? "one"
        : o >= 2 && o <= 9 && (a < 11 || a > 19)
        ? "few"
        : n != 0
        ? "many"
        : "other";
    },
    lv: function (t) {
      var r = String(t).split("."),
        n = r[1] || "",
        i = n.length,
        o = Number(r[0]) == t,
        a = o && r[0].slice(-1),
        s = o && r[0].slice(-2),
        l = n.slice(-2),
        c = n.slice(-1);
      return (o && a == 0) ||
        (s >= 11 && s <= 19) ||
        (i == 2 && l >= 11 && l <= 19)
        ? "zero"
        : (a == 1 && s != 11) ||
          (i == 2 && c == 1 && l != 11) ||
          (i != 2 && c == 1)
        ? "one"
        : "other";
    },
    mk: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = r[1] || "",
        o = !r[1],
        a = n.slice(-1),
        s = n.slice(-2),
        l = i.slice(-1),
        c = i.slice(-2);
      return (o && a == 1 && s != 11) || (l == 1 && c != 11) ? "one" : "other";
    },
    mt: function (t) {
      var r = String(t).split("."),
        n = Number(r[0]) == t,
        i = n && r[0].slice(-2);
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
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-1),
        a = n.slice(-2);
      return t == 1 && i
        ? "one"
        : i && o >= 2 && o <= 4 && (a < 12 || a > 14)
        ? "few"
        : (i && n != 1 && (o == 0 || o == 1)) ||
          (i && o >= 5 && o <= 9) ||
          (i && a >= 12 && a <= 14)
        ? "many"
        : "other";
    },
    pt: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-6);
      return n == 0 || n == 1
        ? "one"
        : n != 0 && o == 0 && i
        ? "many"
        : "other";
    },
    ro: function (t) {
      var r = String(t).split("."),
        n = !r[1],
        i = Number(r[0]) == t,
        o = i && r[0].slice(-2);
      return t == 1 && n
        ? "one"
        : !n || t == 0 || (t != 1 && o >= 1 && o <= 19)
        ? "few"
        : "other";
    },
    ru: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-1),
        a = n.slice(-2);
      return i && o == 1 && a != 11
        ? "one"
        : i && o >= 2 && o <= 4 && (a < 12 || a > 14)
        ? "few"
        : (i && o == 0) || (i && o >= 5 && o <= 9) || (i && a >= 11 && a <= 14)
        ? "many"
        : "other";
    },
    se: function (t) {
      return t == 1 ? "one" : t == 2 ? "two" : "other";
    },
    si: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = r[1] || "";
      return t == 0 || t == 1 || (n == 0 && i == 1) ? "one" : "other";
    },
    sl: function (t) {
      var r = String(t).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-2);
      return i && o == 1
        ? "one"
        : i && o == 2
        ? "two"
        : (i && (o == 3 || o == 4)) || !i
        ? "few"
        : "other";
    },
  };
  R.as = R.am;
  R.az = R.af;
  R.bg = R.af;
  R.bn = R.am;
  R.brx = R.af;
  R.ce = R.af;
  R.chr = R.af;
  R.de = R.ast;
  R.ee = R.af;
  R.el = R.af;
  R.en = R.ast;
  R.et = R.ast;
  R.eu = R.af;
  R.fa = R.am;
  R.fi = R.ast;
  R.fil = R.ceb;
  R.fo = R.af;
  R.fur = R.af;
  R.fy = R.ast;
  R.gl = R.ast;
  R.gu = R.am;
  R.ha = R.af;
  R.hi = R.am;
  R.hr = R.bs;
  R.hsb = R.dsb;
  R.hu = R.af;
  R.hy = R.ff;
  R.ia = R.ast;
  R.id = R.dz;
  R.ig = R.dz;
  R.it = R.ca;
  R.ja = R.dz;
  R.jgo = R.af;
  R.jv = R.dz;
  R.ka = R.af;
  R.kea = R.dz;
  R.kk = R.af;
  R.kl = R.af;
  R.km = R.dz;
  R.kn = R.am;
  R.ko = R.dz;
  R.ks = R.af;
  R.ku = R.af;
  R.ky = R.af;
  R.lb = R.af;
  R.lkt = R.dz;
  R.lo = R.dz;
  R.ml = R.af;
  R.mn = R.af;
  R.mr = R.af;
  R.ms = R.dz;
  R.my = R.dz;
  R.nb = R.af;
  R.ne = R.af;
  R.nl = R.ast;
  R.nn = R.af;
  R.no = R.af;
  R.or = R.af;
  R.pcm = R.am;
  R.ps = R.af;
  R.rm = R.af;
  R.sah = R.dz;
  R.sc = R.ast;
  R.sd = R.af;
  R.sk = R.cs;
  R.so = R.af;
  R.sq = R.af;
  R.sr = R.bs;
  R.su = R.dz;
  R.sv = R.ast;
  R.sw = R.ast;
  R.ta = R.af;
  R.te = R.af;
  R.th = R.dz;
  R.ti = R.pa;
  R.tk = R.af;
  R.to = R.dz;
  R.tr = R.af;
  R.ug = R.af;
  R.uk = R.ru;
  R.ur = R.ast;
  R.uz = R.af;
  R.vi = R.dz;
  R.wae = R.af;
  R.wo = R.dz;
  R.xh = R.af;
  R.yi = R.ast;
  R.yo = R.dz;
  R.yue = R.dz;
  R.zh = R.dz;
  R.zu = R.am;
  const Mu = R;
  function Iu(e) {
    return e === "pt-PT" ? e : Rw(e);
  }
  var Nw = /^([a-z0-9]+)/i;
  function Rw(e) {
    var t = e.match(Nw);
    if (!t) throw new TypeError("Invalid locale: ".concat(e));
    return t[1];
  }
  function Lw(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Nu(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function Pw(e, t, r) {
    return (
      t && Nu(e.prototype, t),
      r && Nu(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var fs = (function () {
    function e(t, r) {
      Lw(this, e);
      var n = e.supportedLocalesOf(t);
      if (n.length === 0) throw new RangeError("Unsupported locale: " + t);
      if (r && r.type !== "cardinal")
        throw new RangeError('Only "cardinal" "type" is supported');
      this.$ = Mu[Iu(n[0])];
    }
    return (
      Pw(
        e,
        [
          {
            key: "select",
            value: function (r) {
              return this.$(r);
            },
          },
        ],
        [
          {
            key: "supportedLocalesOf",
            value: function (r) {
              return (
                typeof r == "string" && (r = [r]),
                r.filter(function (n) {
                  return Mu[Iu(n)];
                })
              );
            },
          },
        ]
      ),
      e
    );
  })();
  function hs(e) {
    "@babel/helpers - typeof";
    return (
      (hs =
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
      hs(e)
    );
  }
  function Ru(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Lu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ru(Object(r), !0).forEach(function (n) {
            Fw(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ru(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function Fw(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Pu(e, t) {
    return $w(e) || Yw(e, t) || jw(e, t) || Bw();
  }
  function Bw() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function jw(e, t) {
    if (e) {
      if (typeof e == "string") return Fu(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(e);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Fu(e, t);
    }
  }
  function Fu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Yw(e, t) {
    var r =
      e == null
        ? null
        : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r != null) {
      var n = [],
        i = !0,
        o = !1,
        a,
        s;
      try {
        for (
          r = r.call(e);
          !(i = (a = r.next()).done) &&
          (n.push(a.value), !(t && n.length === t));
          i = !0
        );
      } catch (l) {
        (o = !0), (s = l);
      } finally {
        try {
          !i && r.return != null && r.return();
        } finally {
          if (o) throw s;
        }
      }
      return n;
    }
  }
  function $w(e) {
    if (Array.isArray(e)) return e;
  }
  function Uw(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Bu(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function zw(e, t, r) {
    return (
      t && Bu(e.prototype, t),
      r && Bu(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var Hw = [
      "second",
      "minute",
      "hour",
      "day",
      "week",
      "month",
      "quarter",
      "year",
    ],
    Ww = ["auto", "always"],
    Vw = ["long", "short", "narrow"],
    qw = ["lookup", "best fit"],
    _r = (function () {
      function e() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Uw(this, e);
        var n = r.numeric,
          i = r.style,
          o = r.localeMatcher;
        if (
          ((this.numeric = "always"),
          (this.style = "long"),
          (this.localeMatcher = "lookup"),
          n !== void 0)
        ) {
          if (Ww.indexOf(n) < 0)
            throw new RangeError('Invalid "numeric" option: '.concat(n));
          this.numeric = n;
        }
        if (i !== void 0) {
          if (Vw.indexOf(i) < 0)
            throw new RangeError('Invalid "style" option: '.concat(i));
          this.style = i;
        }
        if (o !== void 0) {
          if (qw.indexOf(o) < 0)
            throw new RangeError('Invalid "localeMatcher" option: '.concat(o));
          this.localeMatcher = o;
        }
        if (
          (typeof t == "string" && (t = [t]),
          t.push(Vf()),
          (this.locale = e.supportedLocalesOf(t, {
            localeMatcher: this.localeMatcher,
          })[0]),
          !this.locale)
        )
          throw new Error("No supported locale was found");
        fs.supportedLocalesOf(this.locale).length > 0
          ? (this.pluralRules = new fs(this.locale))
          : console.warn('"'.concat(this.locale, '" locale is not supported')),
          typeof Intl < "u" && Intl.NumberFormat
            ? ((this.numberFormat = new Intl.NumberFormat(this.locale)),
              (this.numberingSystem =
                this.numberFormat.resolvedOptions().numberingSystem))
            : (this.numberingSystem = "latn"),
          (this.locale = qf(this.locale, {
            localeMatcher: this.localeMatcher,
          }));
      }
      return (
        zw(e, [
          {
            key: "format",
            value: function () {
              var r = ju(arguments),
                n = Pu(r, 2),
                i = n[0],
                o = n[1];
              return this.getRule(i, o).replace(
                "{0}",
                this.formatNumber(Math.abs(i))
              );
            },
          },
          {
            key: "formatToParts",
            value: function () {
              var r = ju(arguments),
                n = Pu(r, 2),
                i = n[0],
                o = n[1],
                a = this.getRule(i, o),
                s = a.indexOf("{0}");
              if (s < 0) return [{ type: "literal", value: a }];
              var l = [];
              return (
                s > 0 && l.push({ type: "literal", value: a.slice(0, s) }),
                (l = l.concat(
                  this.formatNumberToParts(Math.abs(i)).map(function (c) {
                    return Lu(Lu({}, c), {}, { unit: o });
                  })
                )),
                s + 3 < a.length - 1 &&
                  l.push({ type: "literal", value: a.slice(s + 3) }),
                l
              );
            },
          },
          {
            key: "getRule",
            value: function (r, n) {
              var i = Mw(this.locale)[this.style][n];
              if (typeof i == "string") return i;
              if (this.numeric === "auto") {
                if (r === -2 || r === -1) {
                  var o =
                    i["previous".concat(r === -1 ? "" : "-" + Math.abs(r))];
                  if (o) return o;
                } else if (r === 1 || r === 2) {
                  var a = i["next".concat(r === 1 ? "" : "-" + Math.abs(r))];
                  if (a) return a;
                } else if (r === 0 && i.current) return i.current;
              }
              var s = i[Jw(r) ? "past" : "future"];
              if (typeof s == "string") return s;
              var l =
                (this.pluralRules && this.pluralRules.select(Math.abs(r))) ||
                "other";
              return s[l] || s.other;
            },
          },
          {
            key: "formatNumber",
            value: function (r) {
              return this.numberFormat
                ? this.numberFormat.format(r)
                : String(r);
            },
          },
          {
            key: "formatNumberToParts",
            value: function (r) {
              return this.numberFormat && this.numberFormat.formatToParts
                ? this.numberFormat.formatToParts(r)
                : [{ type: "integer", value: this.formatNumber(r) }];
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
  _r.supportedLocalesOf = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof e == "string") e = [e];
    else if (!Array.isArray(e))
      throw new TypeError('Invalid "locales" argument');
    return e.filter(function (r) {
      return qf(r, t);
    });
  };
  _r.addLocale = Iw;
  _r.setDefaultLocale = Ow;
  _r.getDefaultLocale = Vf;
  _r.PluralRules = fs;
  var Ta = 'Invalid "unit" argument';
  function Gw(e) {
    if (hs(e) === "symbol") throw new TypeError(Ta);
    if (typeof e != "string")
      throw new RangeError("".concat(Ta, ": ").concat(e));
    if (
      (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)),
      Hw.indexOf(e) < 0)
    )
      throw new RangeError("".concat(Ta, ": ").concat(e));
    return e;
  }
  var Zw = 'Invalid "number" argument';
  function Kw(e) {
    if (((e = Number(e)), Number.isFinite && !Number.isFinite(e)))
      throw new RangeError("".concat(Zw, ": ").concat(e));
    return e;
  }
  function Xw(e) {
    return 1 / e === -1 / 0;
  }
  function Jw(e) {
    return e < 0 || (e === 0 && Xw(e));
  }
  function ju(e) {
    if (e.length < 2) throw new TypeError('"unit" argument is required');
    return [Kw(e[0]), Gw(e[1])];
  }
  function $i(e) {
    "@babel/helpers - typeof";
    return (
      ($i =
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
      $i(e)
    );
  }
  function Qw(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Yu(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function e4(e, t, r) {
    return (
      t && Yu(e.prototype, t),
      r && Yu(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var $u = (function () {
    function e() {
      Qw(this, e), (this.cache = {});
    }
    return (
      e4(e, [
        {
          key: "get",
          value: function () {
            for (
              var r = this.cache, n = arguments.length, i = new Array(n), o = 0;
              o < n;
              o++
            )
              i[o] = arguments[o];
            for (var a = 0, s = i; a < s.length; a++) {
              var l = s[a];
              if ($i(r) !== "object") return;
              r = r[l];
            }
            return r;
          },
        },
        {
          key: "put",
          value: function () {
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            for (
              var o = n.pop(), a = n.pop(), s = this.cache, l = 0, c = n;
              l < c.length;
              l++
            ) {
              var u = c[l];
              $i(s[u]) !== "object" && (s[u] = {}), (s = s[u]);
            }
            return (s[a] = o);
          },
        },
      ]),
      e
    );
  })();
  function ps(e) {
    "@babel/helpers - typeof";
    return (
      (ps =
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
      ps(e)
    );
  }
  function t4(e, t) {
    var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r) return (r = r.call(e)).next.bind(r);
    if (
      Array.isArray(e) ||
      (r = r4(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0;
      return function () {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function r4(e, t) {
    if (e) {
      if (typeof e == "string") return Uu(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(e);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Uu(e, t);
    }
  }
  function Uu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function n4(e, t) {
    for (var r = t4(e), n; !(n = r()).done; ) {
      var i = n.value;
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
  function i4() {
    var e = (typeof Intl > "u" ? "undefined" : ps(Intl)) === "object";
    return e && typeof Intl.DateTimeFormat == "function";
  }
  function ms(e) {
    "@babel/helpers - typeof";
    return (
      (ms =
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
      ms(e)
    );
  }
  function o4(e) {
    return (
      s4(e) &&
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
  var a4 = {}.constructor;
  function s4(e) {
    return ms(e) !== void 0 && e !== null && e.constructor === a4;
  }
  var er = 60,
    Ui = 60 * er,
    Mr = 24 * Ui,
    gs = 7 * Mr,
    vs = 30.44 * Mr,
    Gf = (146097 / 400) * Mr;
  function Qr(e) {
    switch (e) {
      case "second":
        return 1;
      case "minute":
        return er;
      case "hour":
        return Ui;
      case "day":
        return Mr;
      case "week":
        return gs;
      case "month":
        return vs;
      case "year":
        return Gf;
    }
  }
  function Zf(e) {
    return e.factor !== void 0 ? e.factor : Qr(e.unit || e.formatAs) || 1;
  }
  function Yn(e) {
    switch (e) {
      case "floor":
        return Math.floor;
      default:
        return Math.round;
    }
  }
  function vl(e) {
    switch (e) {
      case "floor":
        return 1;
      default:
        return 0.5;
    }
  }
  function ys(e) {
    "@babel/helpers - typeof";
    return (
      (ys =
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
      ys(e)
    );
  }
  function Kf(e, t) {
    var r = t.prevStep,
      n = t.timestamp,
      i = t.now,
      o = t.future,
      a = t.round,
      s;
    return (
      r && (r.id || r.unit) && (s = e["threshold_for_".concat(r.id || r.unit)]),
      s === void 0 &&
        e.threshold !== void 0 &&
        ((s = e.threshold), typeof s == "function" && (s = s(i, o))),
      s === void 0 && (s = e.minTime),
      ys(s) === "object" &&
        (r && r.id && s[r.id] !== void 0 ? (s = s[r.id]) : (s = s.default)),
      typeof s == "function" &&
        (s = s(n, {
          future: o,
          getMinTimeForUnit: function (c, u) {
            return zu(c, u || (r && r.formatAs), { round: a });
          },
        })),
      s === void 0 &&
        e.test &&
        (e.test(n, { now: i, future: o }) ? (s = 0) : (s = 9007199254740991)),
      s === void 0 &&
        (r
          ? e.formatAs &&
            r.formatAs &&
            (s = zu(e.formatAs, r.formatAs, { round: a }))
          : (s = 0)),
      s === void 0 &&
        console.warn(
          "[javascript-time-ago] A step should specify `minTime`:\n" +
            JSON.stringify(e, null, 2)
        ),
      s
    );
  }
  function zu(e, t, r) {
    var n = r.round,
      i = Qr(e),
      o;
    if ((t === "now" ? (o = Qr(e)) : (o = Qr(t)), i !== void 0 && o !== void 0))
      return i - o * (1 - vl(n));
  }
  function Hu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function l4(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Hu(Object(r), !0).forEach(function (n) {
            c4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function c4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function u4(e, t, r) {
    var n = r.now,
      i = r.future,
      o = r.round,
      a = r.units,
      s = r.getNextStep;
    e = f4(e, a);
    var l = d4(e, t, { now: n, future: i, round: o });
    if (s) {
      if (l) {
        var c = e[e.indexOf(l) - 1],
          u = e[e.indexOf(l) + 1];
        return [c, l, u];
      }
      return [void 0, void 0, e[0]];
    }
    return l;
  }
  function d4(e, t, r) {
    var n = r.now,
      i = r.future,
      o = r.round;
    if (e.length !== 0) {
      var a = Xf(e, t, { now: n, future: i || t < 0, round: o });
      if (a !== -1) {
        var s = e[a];
        if (s.granularity) {
          var l = Yn(o)(Math.abs(t) / Zf(s) / s.granularity) * s.granularity;
          if (l === 0 && a > 0) return e[a - 1];
        }
        return s;
      }
    }
  }
  function Xf(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i = Kf(e[n], l4({ prevStep: e[n - 1], timestamp: r.now - t * 1e3 }, r));
    return i === void 0 || Math.abs(t) < i
      ? n - 1
      : n === e.length - 1
      ? n
      : Xf(e, t, r, n + 1);
  }
  function f4(e, t) {
    return e.filter(function (r) {
      var n = r.unit,
        i = r.formatAs;
      return (n = n || i), n ? t.indexOf(n) >= 0 : !0;
    });
  }
  function h4(e, t, r) {
    var n = r.now,
      i = r.round;
    if (Qr(e)) {
      var o = Qr(e) * 1e3,
        a = t > n,
        s = Math.abs(t - n),
        l = Yn(i)(s / o) * o;
      return a ? (l > 0 ? s - l + m4(i, o) : s - l + 1) : -(s - l) + p4(i, o);
    }
  }
  function p4(e, t) {
    return vl(e) * t;
  }
  function m4(e, t) {
    return (1 - vl(e)) * t + 1;
  }
  var g4 = 365 * 24 * 60 * 60 * 1e3,
    Jf = 1e3 * g4;
  function v4(e, t, r) {
    var n = r.prevStep,
      i = r.nextStep,
      o = r.now,
      a = r.future,
      s = r.round,
      l = e.getTime ? e.getTime() : e,
      c = function (f) {
        return h4(f, l, { now: o, round: s });
      },
      u = b4(a ? t : i, l, {
        future: a,
        now: o,
        round: s,
        prevStep: a ? n : t,
      });
    if (u !== void 0) {
      var g;
      if (
        t &&
        (t.getTimeToNextUpdate &&
          (g = t.getTimeToNextUpdate(l, {
            getTimeToNextUpdateForUnit: c,
            getRoundFunction: Yn,
            now: o,
            future: a,
            round: s,
          })),
        g === void 0)
      ) {
        var h = t.unit || t.formatAs;
        h && (g = c(h));
      }
      return g === void 0 ? u : Math.min(g, u);
    }
  }
  function y4(e, t, r) {
    var n = r.now,
      i = r.future,
      o = r.round,
      a = r.prevStep,
      s = Kf(e, { timestamp: t, now: n, future: i, round: o, prevStep: a });
    if (s !== void 0)
      return i ? t - s * 1e3 + 1 : s === 0 && t === n ? Jf : t + s * 1e3;
  }
  function b4(e, t, r) {
    var n = r.now,
      i = r.future,
      o = r.round,
      a = r.prevStep;
    if (e) {
      var s = y4(e, t, { now: n, future: i, round: o, prevStep: a });
      return s === void 0 ? void 0 : s - n;
    } else return i ? t - n + 1 : Jf;
  }
  var Qf = {};
  function Zr(e) {
    return Qf[e];
  }
  function eh(e) {
    if (!e) throw new Error("[javascript-time-ago] No locale data passed.");
    Qf[e.locale] = e;
  }
  const x4 = [
      { formatAs: "now" },
      { formatAs: "second" },
      { formatAs: "minute" },
      { formatAs: "hour" },
      { formatAs: "day" },
      { formatAs: "week" },
      { formatAs: "month" },
      { formatAs: "year" },
    ],
    bs = { steps: x4, labels: "long" };
  function Wu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Vu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Wu(Object(r), !0).forEach(function (n) {
            w4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function w4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const xs = Vu(
      Vu({}, bs),
      {},
      {
        steps: bs.steps.filter(function (e) {
          return e.formatAs !== "second";
        }),
      }
    ),
    th = [
      { factor: 1, unit: "now" },
      { threshold: 1, threshold_for_now: 45.5, factor: 1, unit: "second" },
      { threshold: 45.5, factor: er, unit: "minute" },
      { threshold: 2.5 * er, granularity: 5, factor: er, unit: "minute" },
      { threshold: 22.5 * er, factor: 0.5 * Ui, unit: "half-hour" },
      {
        threshold: 42.5 * er,
        threshold_for_minute: 52.5 * er,
        factor: Ui,
        unit: "hour",
      },
      { threshold: (20.5 / 24) * Mr, factor: Mr, unit: "day" },
      { threshold: 5.5 * Mr, factor: gs, unit: "week" },
      { threshold: 3.5 * gs, factor: vs, unit: "month" },
      { threshold: 10.5 * vs, factor: Gf, unit: "year" },
    ],
    qu = {
      gradation: th,
      flavour: "long",
      units: ["now", "minute", "hour", "day", "week", "month", "year"],
    },
    _4 = {
      gradation: th,
      flavour: "long-time",
      units: ["now", "minute", "hour", "day", "week", "month", "year"],
    };
  function rh(e) {
    return e instanceof Date ? e : new Date(e);
  }
  var ws = [
      { formatAs: "second" },
      { formatAs: "minute" },
      { formatAs: "hour" },
    ],
    jt = {},
    S4 = {
      minTime: function (t, r) {
        r.future;
        var n = r.getMinTimeForUnit;
        return n("day");
      },
      format: function (t, r) {
        return (
          jt[r] || (jt[r] = {}),
          jt[r].dayMonth ||
            (jt[r].dayMonth = new Intl.DateTimeFormat(r, {
              month: "short",
              day: "numeric",
            })),
          jt[r].dayMonth.format(rh(t))
        );
      },
    },
    k4 = {
      minTime: function (t, r) {
        var n = r.future;
        if (n) {
          var i = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
          return (t - i) / 1e3;
        } else {
          var o = new Date(new Date(t).getFullYear() + 1, 0).getTime();
          return (o - t) / 1e3;
        }
      },
      format: function (t, r) {
        return (
          jt[r] || (jt[r] = {}),
          jt[r].dayMonthYear ||
            (jt[r].dayMonthYear = new Intl.DateTimeFormat(r, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })),
          jt[r].dayMonthYear.format(rh(t))
        );
      },
    };
  i4()
    ? ws.push(S4, k4)
    : ws.push(
        { formatAs: "day" },
        { formatAs: "week" },
        { formatAs: "month" },
        { formatAs: "year" }
      );
  const Pr = { steps: ws, labels: ["mini", "short-time", "narrow", "short"] };
  function Gu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Zu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Gu(Object(r), !0).forEach(function (n) {
            E4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gu(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function E4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const C4 = Zu(
    Zu({}, Pr),
    {},
    { steps: [{ formatAs: "now" }].concat(Pr.steps) }
  );
  function Ku(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Xu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ku(Object(r), !0).forEach(function (n) {
            T4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ku(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function T4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const _s = Xu(
    Xu({}, Pr),
    {},
    {
      steps: Pr.steps.filter(function (e) {
        return e.formatAs !== "second";
      }),
    }
  );
  function Ju(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Qu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ju(Object(r), !0).forEach(function (n) {
            D4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ju(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function D4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const A4 = Qu(
    Qu({}, _s),
    {},
    { steps: [{ formatAs: "now" }].concat(_s.steps) }
  );
  function e0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function li(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? e0(Object(r), !0).forEach(function (n) {
            O4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : e0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function O4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const M4 = li(
      li({}, Pr),
      {},
      {
        steps: Pr.steps
          .filter(function (e) {
            return e.formatAs !== "second";
          })
          .map(function (e) {
            return e.formatAs === "minute"
              ? li(li({}, e), {}, { minTime: er })
              : e;
          }),
      }
    ),
    $n = {
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
  function t0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function r0(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? t0(Object(r), !0).forEach(function (n) {
            I4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : t0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function I4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const N4 = r0(
    r0({}, $n),
    {},
    { steps: [{ formatAs: "now" }].concat($n.steps) }
  );
  function n0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function i0(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? n0(Object(r), !0).forEach(function (n) {
            R4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : n0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function R4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const Ss = i0(
    i0({}, $n),
    {},
    {
      steps: $n.steps.filter(function (e) {
        return e.formatAs !== "second";
      }),
    }
  );
  function o0(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function a0(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? o0(Object(r), !0).forEach(function (n) {
            L4(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : o0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function L4(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  const P4 = a0(
    a0({}, Ss),
    {},
    { steps: [{ formatAs: "now" }].concat(Ss.steps) }
  );
  function F4(e) {
    switch (e) {
      case "default":
      case "round":
        return bs;
      case "round-minute":
        return xs;
      case "approximate":
        return qu;
      case "time":
      case "approximate-time":
        return _4;
      case "mini":
        return $n;
      case "mini-now":
        return N4;
      case "mini-minute":
        return Ss;
      case "mini-minute-now":
        return P4;
      case "twitter":
        return Pr;
      case "twitter-now":
        return C4;
      case "twitter-minute":
        return _s;
      case "twitter-minute-now":
        return A4;
      case "twitter-first-minute":
        return M4;
      default:
        return qu;
    }
  }
  function zi(e) {
    "@babel/helpers - typeof";
    return (
      (zi =
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
      zi(e)
    );
  }
  function B4(e, t) {
    var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r) return (r = r.call(e)).next.bind(r);
    if (
      Array.isArray(e) ||
      (r = nh(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0;
      return function () {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function j4(e, t) {
    return U4(e) || $4(e, t) || nh(e, t) || Y4();
  }
  function Y4() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function nh(e, t) {
    if (e) {
      if (typeof e == "string") return s0(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(e);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return s0(e, t);
    }
  }
  function s0(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function $4(e, t) {
    var r =
      e == null
        ? null
        : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r != null) {
      var n = [],
        i = !0,
        o = !1,
        a,
        s;
      try {
        for (
          r = r.call(e);
          !(i = (a = r.next()).done) &&
          (n.push(a.value), !(t && n.length === t));
          i = !0
        );
      } catch (l) {
        (o = !0), (s = l);
      } finally {
        try {
          !i && r.return != null && r.return();
        } finally {
          if (o) throw s;
        }
      }
      return n;
    }
  }
  function U4(e) {
    if (Array.isArray(e)) return e;
  }
  function z4(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l0(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function H4(e, t, r) {
    return (
      t && l0(e.prototype, t),
      r && l0(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var It = (function () {
      function e() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n = r.polyfill;
        z4(this, e),
          typeof t == "string" && (t = [t]),
          (this.locale = n4(t.concat(e.getDefaultLocale()), Zr)),
          typeof Intl < "u" &&
            Intl.NumberFormat &&
            (this.numberFormat = new Intl.NumberFormat(this.locale)),
          n === !1
            ? ((this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat),
              (this.IntlPluralRules = Intl.PluralRules))
            : ((this.IntlRelativeTimeFormat = _r),
              (this.IntlPluralRules = _r.PluralRules)),
          (this.relativeTimeFormatCache = new $u()),
          (this.pluralRulesCache = new $u());
      }
      return (
        H4(e, [
          {
            key: "format",
            value: function (r, n, i) {
              i || (n && !Z4(n) ? ((i = n), (n = void 0)) : (i = {})),
                n || (n = xs),
                typeof n == "string" && (n = F4(n));
              var o = W4(r),
                a = this.getLabels(n.flavour || n.labels),
                s = a.labels,
                l = a.labelsType,
                c;
              n.now !== void 0 && (c = n.now),
                c === void 0 && i.now !== void 0 && (c = i.now),
                c === void 0 && (c = Date.now());
              var u = (c - o) / 1e3,
                g = i.future || u < 0,
                h = G4(s, Zr(this.locale).now, Zr(this.locale).long, g);
              if (n.custom) {
                var v = n.custom({
                  now: c,
                  date: new Date(o),
                  time: o,
                  elapsed: u,
                  locale: this.locale,
                });
                if (v !== void 0) return v;
              }
              var f = q4(n.units, s, h),
                d = i.round || n.round,
                y = u4(n.gradation || n.steps || xs.steps, u, {
                  now: c,
                  units: f,
                  round: d,
                  future: g,
                  getNextStep: !0,
                }),
                w = j4(y, 3),
                p = w[0],
                m = w[1],
                b = w[2],
                _ =
                  this.formatDateForStep(o, m, u, {
                    labels: s,
                    labelsType: l,
                    nowLabel: h,
                    now: c,
                    future: g,
                    round: d,
                  }) || "";
              if (i.getTimeToNextUpdate) {
                var S = v4(o, m, {
                  nextStep: b,
                  prevStep: p,
                  now: c,
                  future: g,
                  round: d,
                });
                return [_, S];
              }
              return _;
            },
          },
          {
            key: "formatDateForStep",
            value: function (r, n, i, o) {
              var a = this,
                s = o.labels,
                l = o.labelsType,
                c = o.nowLabel,
                u = o.now,
                g = o.future,
                h = o.round;
              if (n) {
                if (n.format)
                  return n.format(r, this.locale, {
                    formatAs: function (w, p) {
                      return a.formatValue(p, w, { labels: s, future: g });
                    },
                    now: u,
                    future: g,
                  });
                var v = n.unit || n.formatAs;
                if (!v)
                  throw new Error(
                    "[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(
                      JSON.stringify(n)
                    )
                  );
                if (v === "now") return c;
                var f = Math.abs(i) / Zf(n);
                n.granularity && (f = Yn(h)(f / n.granularity) * n.granularity);
                var d = -1 * Math.sign(i) * Yn(h)(f);
                switch ((d === 0 && (g ? (d = 0) : (d = -0)), l)) {
                  case "long":
                  case "short":
                  case "narrow":
                    return this.getFormatter(l).format(d, v);
                  default:
                    return this.formatValue(d, v, { labels: s, future: g });
                }
              }
            },
          },
          {
            key: "formatValue",
            value: function (r, n, i) {
              var o = i.labels,
                a = i.future;
              return this.getFormattingRule(o, n, r, { future: a }).replace(
                "{0}",
                this.formatNumber(Math.abs(r))
              );
            },
          },
          {
            key: "getFormattingRule",
            value: function (r, n, i, o) {
              var a = o.future;
              if ((this.locale, (r = r[n]), typeof r == "string")) return r;
              var s =
                  i === 0 ? (a ? "future" : "past") : i < 0 ? "past" : "future",
                l = r[s] || r;
              if (typeof l == "string") return l;
              var c = this.getPluralRules().select(Math.abs(i));
              return l[c] || l.other;
            },
          },
          {
            key: "formatNumber",
            value: function (r) {
              return this.numberFormat
                ? this.numberFormat.format(r)
                : String(r);
            },
          },
          {
            key: "getFormatter",
            value: function (r) {
              return (
                this.relativeTimeFormatCache.get(this.locale, r) ||
                this.relativeTimeFormatCache.put(
                  this.locale,
                  r,
                  new this.IntlRelativeTimeFormat(this.locale, { style: r })
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
              var r =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : [];
              typeof r == "string" && (r = [r]),
                (r = r.map(function (s) {
                  switch (s) {
                    case "tiny":
                    case "mini-time":
                      return "mini";
                    default:
                      return s;
                  }
                })),
                (r = r.concat("long"));
              for (var n = Zr(this.locale), i = B4(r), o; !(o = i()).done; ) {
                var a = o.value;
                if (n[a]) return { labelsType: a, labels: n[a] };
              }
            },
          },
        ]),
        e
      );
    })(),
    ih = "en";
  It.getDefaultLocale = function () {
    return ih;
  };
  It.setDefaultLocale = function (e) {
    return (ih = e);
  };
  It.addDefaultLocale = function (e) {
    if (c0)
      return console.error(
        "[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`."
      );
    (c0 = !0), It.setDefaultLocale(e.locale), It.addLocale(e);
  };
  var c0;
  It.addLocale = function (e) {
    eh(e), _r.addLocale(e);
  };
  It.locale = It.addLocale;
  It.addLabels = function (e, t, r) {
    var n = Zr(e);
    n || (eh({ locale: e }), (n = Zr(e))), (n[t] = r);
  };
  function W4(e) {
    if (e.constructor === Date || V4(e)) return e.getTime();
    if (typeof e == "number") return e;
    throw new Error(
      "Unsupported relative time formatter input: "
        .concat(zi(e), ", ")
        .concat(e)
    );
  }
  function V4(e) {
    return zi(e) === "object" && typeof e.getTime == "function";
  }
  function q4(e, t, r) {
    var n = Object.keys(t);
    return (
      r && n.push("now"),
      e &&
        (n = e.filter(function (i) {
          return i === "now" || n.indexOf(i) >= 0;
        })),
      n
    );
  }
  function G4(e, t, r, n) {
    var i = e.now || (t && t.now);
    if (i) return typeof i == "string" ? i : n ? i.future : i.past;
    if (r && r.second && r.second.current) return r.second.current;
  }
  function Z4(e) {
    return typeof e == "string" || o4(e);
  }
  let zt, yl;
  function oh(e, t) {
    if (e.nodeType !== Node.ELEMENT_NODE)
      throw new Error("Can't generate CSS selector for non-element node type.");
    if (e.tagName.toLowerCase() === "html") return "html";
    const r = {
      root: document.body,
      idName: (i) => !0,
      className: (i) => !0,
      tagName: (i) => !0,
      attr: (i, o) => !1,
      seedMinLength: 1,
      optimizedMinLength: 2,
      threshold: 1e3,
      maxNumberOfTries: 1e4,
    };
    (zt = { ...r, ...t }), (yl = K4(zt.root, r));
    let n = ci(e, "all", () =>
      ci(e, "two", () => ci(e, "one", () => ci(e, "none")))
    );
    if (n) {
      const i = lh(ch(n, e));
      return i.length > 0 && (n = i[0]), xo(n);
    } else throw new Error("Selector was not found.");
  }
  function K4(e, t) {
    return e.nodeType === Node.DOCUMENT_NODE
      ? e
      : e === t.root
      ? e.ownerDocument
      : e;
  }
  function ci(e, t, r) {
    let n = null,
      i = [],
      o = e,
      a = 0;
    for (; o; ) {
      let s = di(X4(o)) || di(...J4(o)) || di(...Q4(o)) || di(e_(o)) || [f0()];
      const l = t_(o);
      if (t == "all") l && (s = s.concat(s.filter(Da).map((c) => ui(c, l))));
      else if (t == "two")
        (s = s.slice(0, 1)),
          l && (s = s.concat(s.filter(Da).map((c) => ui(c, l))));
      else if (t == "one") {
        const [c] = (s = s.slice(0, 1));
        l && Da(c) && (s = [ui(c, l)]);
      } else t == "none" && ((s = [f0()]), l && (s = [ui(s[0], l)]));
      for (let c of s) c.level = a;
      if ((i.push(s), i.length >= zt.seedMinLength && ((n = u0(i, r)), n)))
        break;
      (o = o.parentElement), a++;
    }
    return n || (n = u0(i, r)), !n && r ? r() : n;
  }
  function u0(e, t) {
    const r = lh(sh(e));
    if (r.length > zt.threshold) return t ? t() : null;
    for (let n of r) if (ah(n)) return n;
    return null;
  }
  function xo(e) {
    let t = e[0],
      r = t.name;
    for (let n = 1; n < e.length; n++) {
      const i = e[n].level || 0;
      t.level === i - 1
        ? (r = `${e[n].name} > ${r}`)
        : (r = `${e[n].name} ${r}`),
        (t = e[n]);
    }
    return r;
  }
  function d0(e) {
    return e.map((t) => t.penalty).reduce((t, r) => t + r, 0);
  }
  function ah(e) {
    const t = xo(e);
    switch (yl.querySelectorAll(t).length) {
      case 0:
        throw new Error(`Can't select any node with this selector: ${t}`);
      case 1:
        return !0;
      default:
        return !1;
    }
  }
  function X4(e) {
    const t = e.getAttribute("id");
    return t && zt.idName(t) ? { name: "#" + CSS.escape(t), penalty: 0 } : null;
  }
  function J4(e) {
    return Array.from(e.attributes)
      .filter((r) => zt.attr(r.name, r.value))
      .map((r) => ({
        name: `[${CSS.escape(r.name)}="${CSS.escape(r.value)}"]`,
        penalty: 0.5,
      }));
  }
  function Q4(e) {
    return Array.from(e.classList)
      .filter(zt.className)
      .map((r) => ({ name: "." + CSS.escape(r), penalty: 1 }));
  }
  function e_(e) {
    const t = e.tagName.toLowerCase();
    return zt.tagName(t) ? { name: t, penalty: 2 } : null;
  }
  function f0() {
    return { name: "*", penalty: 3 };
  }
  function t_(e) {
    const t = e.parentNode;
    if (!t) return null;
    let r = t.firstChild;
    if (!r) return null;
    let n = 0;
    for (; r && (r.nodeType === Node.ELEMENT_NODE && n++, r !== e); )
      r = r.nextSibling;
    return n;
  }
  function ui(e, t) {
    return { name: e.name + `:nth-child(${t})`, penalty: e.penalty + 1 };
  }
  function Da(e) {
    return e.name !== "html" && !e.name.startsWith("#");
  }
  function di(...e) {
    const t = e.filter(r_);
    return t.length > 0 ? t : null;
  }
  function r_(e) {
    return e != null;
  }
  function* sh(e, t = []) {
    if (e.length > 0)
      for (let r of e[0]) yield* sh(e.slice(1, e.length), t.concat(r));
    else yield t;
  }
  function lh(e) {
    return [...e].sort((t, r) => d0(t) - d0(r));
  }
  function* ch(e, t, r = { counter: 0, visited: new Map() }) {
    if (e.length > 2 && e.length > zt.optimizedMinLength)
      for (let n = 1; n < e.length - 1; n++) {
        if (r.counter > zt.maxNumberOfTries) return;
        r.counter += 1;
        const i = [...e];
        i.splice(n, 1);
        const o = xo(i);
        if (r.visited.has(o)) return;
        ah(i) &&
          n_(i, t) &&
          (yield i, r.visited.set(o, !0), yield* ch(i, t, r));
      }
  }
  function n_(e, t) {
    return yl.querySelector(xo(e)) === t;
  }
  const i_ = {
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
    ks = new Image();
  ks.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM3MzcgMjRMMTEuOTc5MiAyNEM1LjkxNTU0IDI0IDEgMTkuMDg0NSAxIDEzLjAyMDhMMSAxTDEyLjYyNjMgMUMxOC45MDc4IDEgMjQgNi4wOTIyIDI0IDEyLjM3MzdDMjQgMTguNzk0NyAxOC43OTQ3IDI0IDEyLjM3MzcgMjRaIiBmaWxsPSIjMjYyNjI2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjEyLjg3NSIgeTE9IjguNSIgeDI9IjEyLjg3NSIgeTI9IjE1LjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iOS4xMjUiIHkxPSIxMS41IiB4Mj0iMTUuODc1IiB5Mj0iMTEuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==";
  It.addDefaultLocale(i_);
  const o_ = () => {
    var e;
    return (e = window.matchMedia) == null
      ? void 0
      : e.call(window, "(prefers-color-scheme: dark)").matches;
  };
  function Qn() {
    if (Q.getState().toolbar.cursorType === "browse") {
      const t = ue.getShadowRoot().getElementById("bounding-box");
      try {
        t && document.body.removeChild(t);
      } catch {}
      document.body.style.removeProperty("cursor"),
        document.querySelectorAll("*").forEach((n) => {
          n.style.removeProperty("cursor");
        });
    } else
      document.body.style.setProperty(
        "cursor",
        "url('" + ks.src + "'), auto",
        "important"
      ),
        document.querySelectorAll("*").forEach((r) => {
          r.style.setProperty(
            "cursor",
            "url('" + ks.src + "'), auto",
            "important"
          );
        });
    jr("NEW"), $t("");
  }
  const a_ = (e) =>
      oh(e, {
        root: document.body,
        idName: () => !0,
        className: (r) => r.length > 5,
        tagName: () => !0,
        attr: () => !1,
        seedMinLength: 4,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e5,
      }),
    s_ = (e) =>
      oh(e, {
        root: document.body,
        idName: () => !1,
        className: () => !1,
        tagName: () => !0,
        attr: () => !1,
        seedMinLength: 6,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e5,
      }),
    l_ = () => {
      const e = window.navigator.userAgent,
        r = new Ty.UAParser(e).getResult();
      return {
        browser: r.browser,
        cpu: r.cpu,
        device: r.device,
        engine: r.engine,
        os: r.os,
        ua: r.ua,
      };
    };
  function h0(e) {
    const t = e.getBoundingClientRect();
    return { left: t.left + window.scrollX, top: t.top + window.scrollY };
  }
  const uh = [
    {
      type: wt.DESKTOP,
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
      type: wt.TABLET,
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
      type: wt.MOBILE,
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
  function c_(e) {
    return new It("en-US").format(e);
  }
  function u_(e) {
    document.body.style.removeProperty("width"),
      e === wt.DESKTOP
        ? (window.document.documentElement.style.width = "100%")
        : e === wt.TABLET
        ? ((window.document.documentElement.style.width = "768px"),
          (window.document.documentElement.style.margin = "0 auto"))
        : e === wt.MOBILE &&
          (window.outerWidth < 700
            ? (window.document.documentElement.style.width = "100%")
            : (window.document.documentElement.style.width = "375px"),
          (window.document.documentElement.style.margin = "0 auto"));
  }
  function p0(e, t) {
    const r = Q.getState().toolbar.deviceScreenSize,
      n = e.getBoundingClientRect().x,
      i = e.getBoundingClientRect().y;
    r === wt.MOBILE || window.innerWidth < 700
      ? (n + t.offsetWidth + 10 >= window.innerWidth
          ? (t.style.left = `${window.innerWidth - t.offsetWidth - 30}px`)
          : (t.style.left = `${n + 33}px`),
        i + t.offsetHeight >= window.innerHeight
          ? i - t.offsetHeight + window.scrollY < window.scrollY
            ? (t.style.top = `${window.scrollY + 30}px`)
            : (t.style.top = `${i - t.offsetHeight + window.scrollY}px`)
          : (t.style.top = `${i + window.scrollY + 30}px`))
      : (n + t.offsetWidth >= window.innerWidth
          ? (t.style.left = `${n - t.offsetWidth}px`)
          : (t.style.left = `${n + 43}px`),
        i + t.offsetHeight >= window.innerHeight
          ? i - t.offsetHeight + window.scrollY < window.scrollY
            ? (t.style.top = `${window.scrollY + 30}px`)
            : (t.style.top = `${i - t.offsetHeight + window.scrollY}px`)
          : (t.style.top = `${i + 15 + window.scrollY}px`));
  }
  const d_ = (e) => {
      const t = Xe.loading("Loading annotation..."),
        r = Q.getState().annotation.annotations.find((n) => n._id === e);
      r
        ? (r.route !== location.pathname &&
            (window.location.pathname = r.route),
          setTimeout(() => {
            const n = ue.getShadowRoot().getElementById(`${r._id}`);
            if (!n) return;
            const i = n.getBoundingClientRect();
            window.scrollTo({
              top: i.y + i.height - window.innerWidth / 2 + window.scrollY,
              behavior: "smooth",
            }),
              $t(r._id),
              t.hideToast();
          }, 400))
        : t.hideToast();
    },
    f_ = (e, t) => X(e).isSameOrBefore(t),
    h_ = (e, t) => X(e).isSameOrAfter(t),
    Tt = () => (Q.getState().user.user ? !0 : (Aw(), !1));
  function p_(e) {
    const t = da.AES.decrypt(
      e,
      "3f707d6dfe0b535ec2f1ad98f73412e69656121bd7f8c76aa9cbb1c285756a58"
    );
    return t.toString(da.enc.Utf8) === ""
      ? null
      : JSON.parse(t.toString(da.enc.Utf8));
  }
  function dh(e) {
    var n;
    const t = e || ((n = Q.getState().user.user) == null ? void 0 : n.userSub);
    return JSON.parse(p_(t || ""));
  }
  function m_() {
    window.addEventListener(
      "click",
      async function (e) {
        var v;
        if (ue.passClick(e.target)) return !0;
        if (Q.getState().toolbar.cursorType === "browse") return $t(""), !0;
        e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
        const r = "target" in e ? e.target : e.srclement,
          n = a_(r),
          i = s_(r),
          o = r.getBoundingClientRect(),
          a = ((e.clientX - o.left) / o.width) * 100,
          s = ((e.clientY - o.top) / o.height) * 100,
          l = Q.getState().annotation.annotations,
          c = Q.getState().user.user;
        if (!c) return;
        const u = l_(),
          g = l.find((f) => f._id === "NEW"),
          h = {
            board: (v = Q.getState().board.board) == null ? void 0 : v._id,
            metaData: {
              Browser: `${u.browser.name} ${u.browser.version}`,
              OS: `${u.os.name} ${u.os.version}`,
              Device: `${u.device.type} ${u.device.vendor} ${u.device.model}`,
              Screen: `${window.innerHeight} x ${window.innerWidth}`,
            },
            parentSelector: n,
            fallbackSelector: i,
            xPercent: a,
            yPercent: s,
            route: window.location.pathname,
            x: o.x,
            y: o.y,
            offsetWidth: o.width,
            offsetHeight: o.height,
            tagName: r.tagName,
            mouseClickX: e.clientX,
            mouseClickY: e.clientY,
            status: ft.UNRESOLVED,
            screenType: Q.getState().toolbar.deviceScreenSize,
            replies: [],
            comment: "",
            createdAt: new Date().toISOString(),
            author: c,
          };
        g ? jr("NEW") : zf({ _id: "NEW", ...h }), $t("NEW");
      },
      !0
    );
  }
  function Hi() {
    const e = Q.getState().annotation.annotations,
      t = Q.getState().annotation.showAnnotation,
      r = Q.getState().toolbar.showOnlyUnresolved,
      n = Q.getState().board.board,
      i = ue.getShadowRoot().querySelectorAll("[data-annotation]");
    if (t)
      i.forEach((a) => {
        const s = a;
        s.style.display = "block";
      });
    else {
      i.forEach((a) => {
        a.remove();
      });
      return;
    }
    if (
      (i.forEach((a) => {
        const s = a,
          l = e.find((c) => c._id === s.id);
        (!l ||
          (l.status === ft.RESOLVED && r) ||
          l.route !== window.location.pathname ||
          (n && n.showAnnotations === !1 && l._id !== "NEW")) &&
          s.remove();
      }),
      e.forEach((a, s) => {
        a.route !== window.location.pathname ||
          (a.status === ft.RESOLVED && r) ||
          (n && n.showAnnotations === !1 && a._id !== "NEW") ||
          g_(a, s);
      }),
      !e.find((a) => a._id === "NEW"))
    ) {
      const a = ue.getShadowRoot().getElementById("NEW");
      a && a.remove();
    }
  }
  function g_(e, t) {
    let r = ue.getShadowRoot().getElementById(e._id);
    r ||
      ((r = document.createElement("div")),
      (r.id = e._id),
      r.setAttribute("data-annotation", "true"),
      (r.innerText = t.toString()),
      ue.addNode(r),
      r.addEventListener("click", (s) => {
        s.preventDefault();
        const l = Q.getState().annotation.openAnnotationId;
        $t(e._id === l ? "" : e._id), e._id !== "NEW" && jr("NEW");
      })),
      (r.className = `${
        e.status === ft.RESOLVED ? "bg-green-500" : "bg-neutral-800"
      } rounded-teardrop  w-8 h-8 -left-20 -top-20 text-center flex items-center justify-center pt-[0.2rem] text-white text-sm absolute border-2 border-white shadow-md cursor-pointer`),
      (r.style.zIndex = "700");
    let n;
    try {
      n = document.querySelector(e.parentSelector);
    } catch (s) {
      console.log(s);
    }
    if (!n) {
      (r.style.left = `${e.mouseClickX}px`),
        (r.style.top = `${e.mouseClickY}px`),
        (r.style.backgroundColor = "gray"),
        r.setAttribute("date-missing", "true"),
        Q.getState().annotation.showMissingElements ||
          (r.style.display = "none");
      return;
    }
    r.style.backgroundColor = `${
      e.status === ft.RESOLVED ? "#22c55e" : "#262626"
    }`;
    const i = n.getBoundingClientRect(),
      o = (e.xPercent * i.width) / 100 + i.x,
      a = (e.yPercent * i.height) / 100 + i.y;
    if (o < 0 || o > document.body.clientWidth) {
      r.style.display = "none";
      return;
    }
    (r.style.left = `${o}px`), (r.style.top = `${a + window.scrollY}px`);
  }
  function Wi() {
    var g, h, v, f, d, y, w, p, m;
    const e = Q.getState().annotation.openAnnotationId,
      t = Q.getState().annotation.annotations,
      r = Q.getState().user.user,
      n = t.find((b) => b._id === e);
    if (!n) return;
    const i =
      (g = Q.getState().annotation.uploadingMediaAnnotations) == null
        ? void 0
        : g.includes(n._id);
    let o;
    try {
      o = document.querySelector(n.parentSelector);
    } catch (b) {
      console.log(b);
    }
    const a = Q.getState().board.board;
    if (a && a.showAnnotations === !1 && n._id !== "NEW") return;
    const s = ue.getShadowRoot().getElementById(n._id);
    let l = !1,
      c = ue.getShadowRoot().getElementById("annotationInput");
    if (
      (c ||
        ((l = !0),
        (c = document.createElement("div")),
        c.setAttribute("data-annotation", "true"),
        (c.id = "annotationInput"),
        (c.className =
          "absolute top-0 left-0 flex flex-col bg-white rounded-md bg-white cursor-pointer shadow-teardrop max-sm:w-60 border w-80 max-sm:p-1"),
        (c.style.zIndex = "700")),
      n._id !== "NEW")
    ) {
      let b = function (I, O) {
        I.preventDefault(),
          A && Tt() && (sw(O._id, P, A.value), (A.value = ""));
      };
      c.innerHTML = `
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
                    ((h = n.author) == null ? void 0 : h.firstName) || ""
                  }${
        ((v = n.author) == null ? void 0 : v.lastName) || ""
      }?square"
                  class="w-7 h-7 rounded"></img>
              <div  class="flex flex-col">
              <p  class="text-sm font-bold max-w-xs line-clamp-1 text-ellipsis" >${
                n.author.firstName
              } ${n.author.lastName}</p>
              <span  class="text-[11px] -mt-1">${c_(
                Date.parse(n.createdAt)
              )}</span>
              </div>
              <div  class="group relative inline-block">
                <button
                  class="group"
                >
                  ${
                    (f = uh.find((I) => I.type === n.screenType)) == null
                      ? void 0
                      : f.icon
                  }
                </button>
                <div
                  class="absolute top-full -left-3/4 mb-3 -translate-x-1/3 max-lg:-translate-x-2/4 whitespace-nowrap rounded border bg-white py-[6px] px-4 text-sm hidden group-hover:block p-4 z-[100] shadow-md transition-all duration-300 min-w-max"
                >
                    <div class="bg-white grid grid-cols-2 gap-2 max-w-3xl">
                      <div class="text-sm font-bold">OS</div>
                      <div class="text-left text-sm">${
                        (d = n.metaData) == null ? void 0 : d.OS
                      }</div>
                      <div class="text-sm font-bold">Browser</div>
                      <div>${
                        (y = n.metaData) == null ? void 0 : y.Browser
                      }</div>
                      <div class="text-sm font-bold">Window size</div>
                      <div>${(w = n.metaData) == null ? void 0 : w.Screen}</div>
                      <div class="text-sm font-bold">Route</div>
                      <a target="_blank" href="${window.location.origin}${
        n.route
      }" class="break-all w-36 max-lg:w-28" style="text-wrap: wrap;">${n.route}
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          <div class="hidden absolute top-6 right-0 bg-white shadow-lg border p-2 rounded-lg max-w-fit" id="annotation_more_actions_menu">  
            <div class="flex flex-col gap-4 min-w-full">
              ${
                n.author._id === (r == null ? void 0 : r._id)
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
                n.status === ft.UNRESOLVED
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
               n.author._id === (r == null ? void 0 : r._id)
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
          n._id
        }" >${n.comment}</p>
          ${
            (p = n.screenShot) != null && p.url
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
            i && !((m = n.screenShot) != null && m.url)
              ? `<div class="bg-neutral-100 rounded p-2 flex items-center gap-2 w-full mt-3">
              ⏳ &nbsp;
              <div class="text-sm text-gray-400">Taking Screenshot...</div>
              </div>`
              : ""
          }
          ${
            n.sessionReplay
              ? `<button type="button" id="show_session_replay" class="bg-neutral-100 rounded p-2 flex items-center gap-2 w-full mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
                    </svg>
                  <div class="text-sm">Session Replay</div>
                </button>`
              : ""
          }
          <textarea class="bg-gray-100 outline-none p-2 border-b w-full mt-2" id="comment" name="comment" rows="5" style="display: none;">${
            (n == null ? void 0 : n.comment) || ""
          }</textarea>
          <div  class="flex items-center justify-end gap-4 mt-2" >
            <button type="button"  id="cancel_edit_comment_button" class="text-black px-2 h-9 rounded hidden max-w-max"> Cancel </button>
            <button type="button"  id="comment_button" class="bg-blue-500 text-white px-2 h-9 rounded hidden max-w-max"> Comment </button>
          </div>
        </div>
      <div class="flex flex-col items-center justify-between ">
         ${
           n.replies.length > 0
             ? `<button  class="bg-gray-100 border w-full p-2 rounded flex items-center justify-center gap-4" type="button" id="show_replies">
            ${n.replies.length} &nbsp;  ${
                 n.replies.length > 1 ? "replies" : "reply"
               } <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path  stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>`
             : ""
         }
        <ul class="w-full bg-neutral-50  max-h-44 overflow-y-auto" id="replies_list">
          ${n.replies
            .map((I) => {
              var O, V;
              return `  
            <li  class="w-full border-t first:border-none pt-2">
            <div class="flex items-start justify-between w-full px-2">
              <div class="flex items-center justify-start gap-2">
              <img
              src="https://source.boringavatars.com/beam/120/${
                ((O = I.author) == null ? void 0 : O.firstName) || ""
              }${((V = I.author) == null ? void 0 : V.lastName) || ""}?square"
              class="w-7 h-7 rounded"></img>
              <div class="flex flex-col">
              <p class="text-sm font-bold max-w-xs line-clamp-1 text-ellipsis" >${
                I.author.firstName
              } ${I.author.lastName}</p>
              <span  class="text-[11px] -mt-1">${new Date(
                I.createdAt
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}</span>
                </div>
                </div>
                <div  class="flex items-center justify-start gap-4">
                <button  type="button" id="edit_reply_btn_${
                  I._id
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
                  I._id
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
                  I._id
                }">${I.text}</p>
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
      const _ = c.querySelector("#reply_button"),
        S = c.querySelector("#delete_comment_btn"),
        k = c.querySelector("#edit_comment_btn"),
        E = c.querySelector("#comment"),
        D = c.querySelector("#comment_button"),
        C = c.querySelector("#cancel_edit_comment_button"),
        T = c.querySelector("#resolve_comment_btn"),
        A = c.querySelector("#reply"),
        M = c.querySelector("#update_reply_button"),
        j = c.querySelector("#cancel_edit_reply_button"),
        z = c.querySelector("#show_replies"),
        $ = c.querySelector("#replies_list"),
        Y = c.querySelector("#show_screenshot"),
        q = c.querySelector("#show_session_replay"),
        F = c.querySelector("#annotation_more_actions"),
        L = c.querySelector("#annotation_more_actions_menu"),
        N = c.querySelector("#copy_annotation_btn");
      E &&
        setTimeout(function () {
          E.focus();
        }, 0),
        A &&
          setTimeout(function () {
            A.focus();
          }, 0),
        N &&
          N.addEventListener("click", (I) => {
            I.preventDefault();
            const O = new URL(window.location.href);
            O.searchParams.set("a", n._id),
              navigator.clipboard.writeText(O.href),
              Xe.success("Copied to clipboard");
          }),
        Y &&
          Y.addEventListener("click", async (I) => {
            var V;
            if ((I.preventDefault(), !((V = n.screenShot) != null && V.url)))
              return;
            const O = uc(`<img src="${n.screenShot.url}" class="mx-auto"/>`);
            ue.addNode(O);
          }),
        q &&
          q.addEventListener("click", async (I) => {
            if ((I.preventDefault(), !n.sessionReplay)) return;
            const O = uc('<div id="session-replay"></div>');
            ue.addNode(O), Xp(n.sessionReplay);
          }),
        z &&
          z.addEventListener("click", (I) => {
            I.preventDefault(), $ == null || $.classList.toggle("hidden");
            const O = c == null ? void 0 : c.querySelector("#show-replies-svg");
            O && O.classList.toggle("rotate-180"), s && c && p0(s, c);
          });
      let P = "";
      F &&
        F.addEventListener("click", (I) => {
          I.preventDefault(), L && L.classList.toggle("hidden");
        });
      for (let I = 0; I < n.replies.length; I++) {
        const O = n.replies[I];
        try {
          if (!c) return;
          const V = c.querySelector(`#edit_reply_btn_${O._id}`),
            J = c.querySelector(`#delete_reply_btn_${O._id}`);
          V &&
            V.addEventListener("click", (se) => {
              if ((se.preventDefault(), !Tt() || !A)) return;
              P = O._id;
              const H = ue
                .getShadowRoot()
                .querySelectorAll(".reply_edit_button");
              H &&
                H.forEach((he) => {
                  he.style.display = "none";
                }),
                (A.value = O.text),
                M &&
                  j &&
                  M &&
                  V &&
                  _ &&
                  ((j.style.display = "block"),
                  (M.style.display = "block"),
                  (V.style.display = "none"),
                  (_.style.display = "none"));
            }),
            J &&
              J.addEventListener("click", async (se) => {
                se.preventDefault(), Tt() && (await lw(n._id, O._id));
              });
        } catch (V) {
          console.log(V);
        }
      }
      M && M.addEventListener("click", (I) => b(I, n)),
        j &&
          j.addEventListener("click", (I) => {
            I.preventDefault(),
              A && (A.value = ""),
              j &&
                M &&
                _ &&
                ((j.style.display = "none"),
                (M.style.display = "none"),
                (_.style.display = "block"),
                ue
                  .getShadowRoot()
                  .querySelectorAll(".reply_edit_button")
                  .forEach((V) => {
                    V.style.display = "block";
                  }));
          }),
        _ &&
          _.addEventListener("click", async (I) => {
            if ((I.preventDefault(), !!Tt())) {
              if (!A || A.value === "") {
                Xe.error("Reply cannot be empty");
                return;
              }
              await v_();
            }
          }),
        S &&
          S.addEventListener("click", async (I) => {
            I.preventDefault(), Tt() && (await jr(n._id));
          }),
        C &&
          C.addEventListener("click", (I) => {
            if ((I.preventDefault(), E && D && C && k)) {
              (E.style.display = "none"),
                (D.style.display = "none"),
                (C.style.display = "none"),
                L == null || L.classList.add("hidden");
              const O = ue.getShadowRoot().getElementById(`comment-${n._id}`);
              O && (O.style.display = "block"), (k.style.display = "flex");
            }
          }),
        k &&
          k.addEventListener("click", (I) => {
            if ((I.preventDefault(), !!Tt() && E && D && C)) {
              (E.style.display = "block"),
                (D.style.display = "block"),
                (C.style.display = "block");
              const O = ue.getShadowRoot().getElementById(`comment-${n._id}`);
              O && (O.style.display = "none"),
                (k.style.display = "none"),
                L == null || L.classList.add("hidden");
            }
          }),
        T &&
          T.addEventListener("click", async (I) => {
            I.preventDefault(),
              Tt() &&
                (await us(n._id, {
                  status:
                    n.status === ft.RESOLVED ? ft.UNRESOLVED : ft.RESOLVED,
                }));
          });
    } else {
      c.innerHTML = `
       <textarea class="bg-gray-100 outline-none p-2 w-full" placeholder="Add a comment"  id="comment" name="comment" rows="5">
    ${(n == null ? void 0 : n.comment) || ""}
    </textarea>
    <div  class="flex gap-2 items-center justify-end my-2 mr-2">
      
      <button type="button"  id="comment_button" class="bg-blue-500 text-white px-2 h-9 rounded max-w-max"> Submit </button>
    </div>
    `;
      const b = c.querySelector("#comment");
      b &&
        ((b.value = (n == null ? void 0 : n.comment) || ""),
        setTimeout(function () {
          b.focus();
        }, 0),
        b.addEventListener(
          "input",
          (_) => {
            const k = _.target.value;
            us(n._id, { ...n, comment: k });
          },
          !1
        ));
    }
    const u = c.querySelector("#comment_button");
    l && ue.addNode(c),
      s &&
        (p0(s, c),
        u &&
          u.addEventListener("click", async (b) => {
            if ((b.preventDefault(), !Tt() || !c)) return;
            const _ = c.querySelector("#edit_comment_btn");
            _ && (_.style.display = "block"),
              (a != null && a.showAnnotations) || (pl(), Qn()),
              await y_(n._id);
          }));
  }
  async function v_() {
    if (!Tt()) return;
    const e = ue.getShadowRoot().querySelector("#reply"),
      t = Q.getState().annotation.openAnnotationId,
      r = Q.getState().annotation.annotations.find((i) => i._id === t);
    !e || !r || !Q.getState().user.user || (await aw(r._id, e.value));
  }
  async function y_(e) {
    if (!Tt()) return;
    const t = ue.getShadowRoot().querySelector("#comment"),
      r = Q.getState().annotation.annotations.find((n) => n._id === e);
    !t ||
      !r ||
      (await jr("NEW"),
      r._id === "NEW"
        ? await zf({ ...r, comment: t.value })
        : await us(r._id, { comment: t.value }),
      (t.value = ""));
  }
  function b_() {
    window.addEventListener(
      "scroll",
      () => {
        Hi(), Wi();
      },
      !0
    ),
      window.addEventListener("resize", () => {
        Hi(), Wi();
        const e = window.innerWidth;
        e >= 768 ? Ca(wt.DESKTOP) : e >= 375 ? Ca(wt.TABLET) : Ca(wt.MOBILE);
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
          ue.passClick(t)
        ) {
          const o = ue.getShadowRoot().getElementById("bounding-box");
          o && ue.getShadowRoot().removeChild(o);
          return;
        }
        if (ue.passClick(t)) return;
        const n = t.getBoundingClientRect();
        let i = ue.getShadowRoot().getElementById("bounding-box");
        i ||
          ((i = document.createElement("div")),
          (i.id = "bounding-box"),
          (i.style.zIndex = "600"),
          ue.addNode(i),
          (i.style.position = "absolute"),
          (i.style.border = "2px dashed #f97316"),
          (i.style.pointerEvents = "none")),
          (i.style.top = h0(t).top + "px"),
          (i.style.left = h0(t).left + "px"),
          (i.style.width = n.width + "px"),
          (i.style.height = n.height + "px");
      }),
      (function (e) {
        const t = e.pushState;
        si(window.location.pathname),
          (e.pushState = function (r, n, i) {
            return (
              typeof e.onpushstate == "function" && e.onpushstate({ state: r }),
              setTimeout(function () {
                si(window.location.pathname);
              }, 0),
              t.call(e, r, n, i)
            );
          }),
          window.addEventListener("popstate", function () {
            setTimeout(function () {
              si(window.location.pathname);
            }, 0);
          }),
          window.addEventListener("hashchange", function () {
            setTimeout(function () {
              si(window.location.pathname);
            }, 0);
          });
      })(window.history),
      jr("NEW"),
      m_();
  }
  const x_ = () => {
      const e = { attributes: !0, childList: !0, subtree: !0 };
      new MutationObserver((r) => {
        if (
          r.some((i) => {
            var o, a;
            return (
              ue.passClick(i.target) ||
              (i.target.tagName === "BODY" && ue.passClick(i.target)) ||
              i.target.id === "bounding-box" ||
              (i.target.tagName === "BODY" &&
                (((o = i.addedNodes[0]) == null ? void 0 : o.id) ===
                  "bounding-box" ||
                  ((a = i.removedNodes[0]) == null ? void 0 : a.id) ===
                    "bounding-box"))
            );
          })
        )
          return !1;
        Hi(), Wi();
      }).observe(window.document.body, e);
    },
    w_ = async (e) => {
      if (!e) throw new Error("Aborting");
      const { data: t } = await Pt.get(`/webapp/subscription/board/${e}`);
      if (!(t != null && t.userSubscription)) throw new Error("Aborting");
      return Cw(t.userSubscription), dh(t.userSubscription);
    },
    __ = async () => {
      const e = document.getElementById("annotate-site-webapp-script");
      if (!e) return null;
      const { searchParams: t } = new URL(e.src);
      let r = t.get("bid");
      if (!r) return null;
      const n = (await Pt.get(`webapp/board/${r}`)).data;
      if (!n || !n._id) return null;
      xw(n);
      const i = await w_(n._id);
      return !i ||
        (i &&
          (i == null ? void 0 : i.subscriptionStatus) !== On.Active &&
          (i == null ? void 0 : i.subscriptionStatus) !== On.Trialing)
        ? null
        : n;
    },
    S_ = async (e) => {
      const t = (await Pt.get(`webapp/annotation/${e}`)).data;
      if (!t) throw new Error("Aborting");
      iw(t);
    };
  function k_() {
    const e = document.createElement("link");
    e.setAttribute("rel", "preconnect"),
      e.setAttribute("href", "https://fonts.googleapis.com");
    const t = document.createElement("link");
    t.setAttribute("rel", "preconnect"),
      t.setAttribute("href", "https://fonts.gstatic.com"),
      t.setAttribute("crossorigin", "");
    const r = document.createElement("link");
    r.setAttribute("rel", "stylesheet"),
      r.setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap"
      );
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"),
      n.setAttribute(
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
      document.head.appendChild(r),
      document.head.appendChild(n),
      document.head.appendChild(i);
  }
  const E_ = async () => {
    k_(),
      new URL(window.location.href).search === "" &&
        window.history.replaceState(
          {},
          document.title,
          window.location.href.replace(/\/$/, "")
        );
    const t = await __();
    if (!t || !t.enabled) return !1;
    Hf(!0), t && t.showAnnotations && (await S_(t._id)), Qn();
    const n = new URL(window.location.href).searchParams.get("a");
    return n && (Q.getState().toolbar.isInboxOpen && hl(), d_(n)), x_(), !0;
  };
  async function C_() {
    if (!(await E_())) {
      localStorage.clear(), ue.remove();
      return;
    }
    bo(), b_(), console.log("Welcome to annotate.site");
  }
  window.addEventListener("load", C_);
});
export default T_();

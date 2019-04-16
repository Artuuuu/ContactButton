module.exports = function(n) {
  var t = {};

  function e(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return n[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  return e.m = n, e.c = t, e.d = function(n, t, o) {
    e.o(n, t) || Object.defineProperty(n, t, {
      enumerable: !0,
      get: o
    })
  }, e.r = function(n) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    })
  }, e.t = function(n, t) {
    if (1 & t && (n = e(n)), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var o = Object.create(null);
    if (e.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: n
      }), 2 & t && "string" != typeof n)
      for (var r in n) e.d(o, r, function(t) {
        return n[t]
      }.bind(null, r));
    return o
  }, e.n = function(n) {
    var t = n && n.__esModule ? function() {
      return n.default
    } : function() {
      return n
    };
    return e.d(t, "a", t), t
  }, e.o = function(n, t) {
    return Object.prototype.hasOwnProperty.call(n, t)
  }, e.p = "", e(e.s = 11)
}([function(n, t) {
  n.exports = flarum.core.compat.extend
}, function(n, t, e) {
  "use strict";

  function o(n, t) {
    n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t
  }
  e.d(t, "a", function() {
    return o
  })
}, , , , , , , function(n, t) {
  n.exports = flarum.core.compat["components/SettingsModal"]
}, function(n, t) {}, , function(n, t, e) {
  "use strict";
  e.r(t);
  var o = e(0),
    r = e(1),
    i = e(8),
    a = function(n) {
      function t() {
        return n.apply(this, arguments) || this
      }
      Object(r.a)(t, n);
      var e = t.prototype;
      return e.className = function() {
        return "Modal--small"
      }, e.title = function() {
        return app.translator.trans("fajuu-contactbutton.admin.settings.title")
      }, e.form = function() {
        return [m("div", {
          className: "Form-group"
        }, m("label", null, app.translator.trans("fajuu-contactbutton.admin.settings.buttoname")), m("input", {
          className: "FormControl",
          type: "text",
          placeholder: "Contact",
          bidi: this.setting("fajuu-contactbutton.buttoname")
        }), m("label", {style: "padding-top: 20px;"}, app.translator.trans("fajuu-contactbutton.admin.settings.adress")), m("input", {
          className: "FormControl",
          type: "text",
          placeholder: "email@example.com / https://example.com",
          bidi: this.setting("fajuu-contactbutton.adress")
        }), m("label", {style: "padding-top: 20px;"}, app.translator.trans("fajuu-contactbutton.admin.settings.icon")), m("input", {
          className: "FormControl",
          type: "text",
          placeholder: "fas fa-envelope",
          bidi: this.setting("fajuu-contactbutton.icon")
        }), m("div", {style: "padding-top: 20px;"},
          m("input", {
            type: "checkbox",
            bidi: this.setting("fajuu-contactbutton.newtab")
          }),
          m("strong", null, app.translator.trans("fajuu-contactbutton.admin.settings.newtab"))
        ))]
      }, t
    }(e.n(i).a),
    s = e(9),
    u = e.n(s);
  app.initializers.add("fajuu-contactbutton", function() {
    app.extensionSettings["fajuu-contactbutton"] = function() {
      app.modal.show(new a)
    }})
}]);
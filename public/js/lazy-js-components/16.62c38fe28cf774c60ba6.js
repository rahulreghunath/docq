webpackJsonp([16],{

/***/ 1218:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (73:22)\n\n\u001b[0m \u001b[90m 71 | \u001b[39m                    password\u001b[33m:\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mpassword\n \u001b[90m 72 | \u001b[39m                }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 73 | \u001b[39m            })\u001b[33m.\u001b[39mthen(({{token}}) \u001b[33m=>\u001b[39m {\n \u001b[90m    | \u001b[39m                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 74 | \u001b[39m                console\u001b[33m.\u001b[39mlog(token)\u001b[33m;\u001b[39m\n \u001b[90m 75 | \u001b[39m            })\u001b[33m.\u001b[39m\u001b[36mcatch\u001b[39m(error \u001b[33m=>\u001b[39m {\n \u001b[90m 76 | \u001b[39m                console\u001b[33m.\u001b[39mlog(error)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app flex-row align-items-center" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c(
          "b-row",
          { staticClass: "justify-content-center" },
          [
            _c(
              "b-col",
              { attrs: { md: "8" } },
              [
                _c(
                  "b-card-group",
                  [
                    _c(
                      "b-card",
                      { staticClass: "p-4", attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-card-body",
                          [
                            _c(
                              "b-form",
                              [
                                _c("h1", [_vm._v("Login")]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-muted" }, [
                                  _vm._v("Sign In to your account")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-input-group",
                                  { staticClass: "mb-3" },
                                  [
                                    _c(
                                      "b-input-group-prepend",
                                      [
                                        _c("b-input-group-text", [
                                          _c("i", { staticClass: "icon-user" })
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-form-input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Username",
                                        autocomplete: "username email"
                                      },
                                      model: {
                                        value: _vm.username,
                                        callback: function($$v) {
                                          _vm.username = $$v
                                        },
                                        expression: "username"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-input-group",
                                  { staticClass: "mb-4" },
                                  [
                                    _c(
                                      "b-input-group-prepend",
                                      [
                                        _c("b-input-group-text", [
                                          _c("i", { staticClass: "icon-lock" })
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-form-input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "Password",
                                        autocomplete: "current-password"
                                      },
                                      model: {
                                        value: _vm.password,
                                        callback: function($$v) {
                                          _vm.password = $$v
                                        },
                                        expression: "password"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-row",
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6" } },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "px-4",
                                            attrs: { variant: "primary" },
                                            on: { click: _vm.login }
                                          },
                                          [_vm._v("Login")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      {
                                        staticClass: "text-right",
                                        attrs: { cols: "6" }
                                      },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "px-0",
                                            attrs: { variant: "link" }
                                          },
                                          [_vm._v("Forgot password?")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      {
                        staticClass:
                          "text-white bg-primary py-5 d-md-down-none",
                        staticStyle: { width: "44%" },
                        attrs: { "no-body": "" }
                      },
                      [
                        _c("b-card-body", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            [
                              _c("h2", [_vm._v("Sign up")]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna aliqua."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "active mt-3",
                                  attrs: { variant: "primary" }
                                },
                                [_vm._v("Register Now!")]
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28c2d2f6", module.exports)
  }
}

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(126)
/* script */
var __vue_script__ = __webpack_require__(1218)
/* template */
var __vue_template__ = __webpack_require__(1219)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/Admin/components/views/pages/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28c2d2f6", Component.options)
  } else {
    hotAPI.reload("data-v-28c2d2f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
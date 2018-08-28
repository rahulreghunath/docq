webpackJsonp([14],{

/***/ 1224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Register'
});

/***/ }),

/***/ 1225:
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
              { attrs: { md: "6", sm: "8" } },
              [
                _c(
                  "b-card",
                  { staticClass: "mx-4", attrs: { "no-body": "" } },
                  [
                    _c(
                      "b-card-body",
                      { staticClass: "p-4" },
                      [
                        _c(
                          "b-form",
                          [
                            _c("h1", [_vm._v("Register")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-muted" }, [
                              _vm._v("Create your account")
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
                                    autocomplete: "username"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-input-group",
                              { staticClass: "mb-3" },
                              [
                                _c(
                                  "b-input-group-prepend",
                                  [_c("b-input-group-text", [_vm._v("@")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Email",
                                    autocomplete: "email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-input-group",
                              { staticClass: "mb-3" },
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
                                    autocomplete: "new-password"
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
                                    placeholder: "Repeat password",
                                    autocomplete: "new-password"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "success", block: "" } },
                              [_vm._v("Create Account")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card-footer",
                      { staticClass: "p-4" },
                      [
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
                                    staticClass: "btn btn-facebook",
                                    attrs: { block: "" }
                                  },
                                  [_c("span", [_vm._v("facebook")])]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "6" } },
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "btn btn-twitter",
                                    attrs: { block: "", type: "button" }
                                  },
                                  [_c("span", [_vm._v("twitter")])]
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
    require("vue-hot-reload-api")      .rerender("data-v-2634da26", module.exports)
  }
}

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(127)
/* script */
var __vue_script__ = __webpack_require__(1224)
/* template */
var __vue_template__ = __webpack_require__(1225)
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
Component.options.__file = "resources/assets/js/Admin/components/views/pages/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2634da26", Component.options)
  } else {
    hotAPI.reload("data-v-2634da26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
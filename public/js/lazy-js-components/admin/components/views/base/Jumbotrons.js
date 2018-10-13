webpackJsonp([44],{

/***/ 1825:
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
  name: 'jumbotrons'
});

/***/ }),

/***/ 1826:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      { staticClass: "animated fadeIn" },
      [
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Bootstrap Jumbotron")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/jumbotron",
                              rel: "noreferrer noopener",
                              target: "_blank"
                            }
                          },
                          [
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v("docs")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-jumbotron",
                          {
                            attrs: {
                              header: "Bootstrap 4",
                              lead: "Bootstrap 4 Components for Vue.js 2"
                            }
                          },
                          [
                            _c("p", [
                              _vm._v("For more information visit website")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              { attrs: { variant: "primary", href: "#" } },
                              [_vm._v("More Info")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Jumbotron")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("with slots")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-jumbotron",
                          [
                            _c("template", { slot: "header" }, [
                              _vm._v(
                                "\n                Bootstrap 4\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("template", { slot: "lead" }, [
                              _vm._v(
                                "\n                This is a simple hero unit, a simple jumbotron-style component for\n                calling extra attention to featured content or information.\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr", { staticClass: "my-4" }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                It uses utility classes for typography and spacing to space content\n                out within the larger container.\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              { attrs: { variant: "primary", href: "#" } },
                              [_vm._v("Do Something")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              { attrs: { variant: "success", href: "#" } },
                              [_vm._v("Do Something Else")]
                            )
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Jumbotron")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("variants")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-jumbotron",
                          {
                            attrs: {
                              "bg-variant": "info",
                              "text-variant": "white",
                              "border-variant": "dark"
                            }
                          },
                          [
                            _c("template", { slot: "header" }, [
                              _vm._v(
                                "\n                Bootstrap 4\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("template", { slot: "lead" }, [
                              _vm._v(
                                "\n                This is a simple hero unit, a simple jumbotron-style component for\n                calling extra attention to featured content or information.\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr", { staticClass: "my-4" }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                It uses utility classes for typography and spacing to space content\n                out within the larger container.\n              "
                              )
                            ])
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
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
    require("vue-hot-reload-api")      .rerender("data-v-e0b680ce", module.exports)
  }
}

/***/ }),

/***/ 2057:
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
  name: 'jumbotrons'
});

/***/ }),

/***/ 2058:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      { staticClass: "animated fadeIn" },
      [
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Bootstrap Jumbotron")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/jumbotron",
                              rel: "noreferrer noopener",
                              target: "_blank"
                            }
                          },
                          [
                            _c("small", { staticClass: "text-muted" }, [
                              _vm._v("docs")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-jumbotron",
                          {
                            attrs: {
                              header: "Bootstrap 4",
                              lead: "Bootstrap 4 Components for Vue.js 2"
                            }
                          },
                          [
                            _c("p", [
                              _vm._v("For more information visit website")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              { attrs: { variant: "primary", href: "#" } },
                              [_vm._v("More Info")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Jumbotron")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("with slots")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-jumbotron",
                          [
                            _c("template", { slot: "header" }, [
                              _vm._v(
                                "\n                Bootstrap 4\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("template", { slot: "lead" }, [
                              _vm._v(
                                "\n                This is a simple hero unit, a simple jumbotron-style component for\n                calling extra attention to featured content or information.\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr", { staticClass: "my-4" }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                It uses utility classes for typography and spacing to space content\n                out within the larger container.\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              { attrs: { variant: "primary", href: "#" } },
                              [_vm._v("Do Something")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-btn",
                              { attrs: { variant: "success", href: "#" } },
                              [_vm._v("Do Something Else")]
                            )
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Jumbotron")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("variants")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-jumbotron",
                          {
                            attrs: {
                              "bg-variant": "info",
                              "text-variant": "white",
                              "border-variant": "dark"
                            }
                          },
                          [
                            _c("template", { slot: "header" }, [
                              _vm._v(
                                "\n                Bootstrap 4\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("template", { slot: "lead" }, [
                              _vm._v(
                                "\n                This is a simple hero unit, a simple jumbotron-style component for\n                calling extra attention to featured content or information.\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr", { staticClass: "my-4" }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                It uses utility classes for typography and spacing to space content\n                out within the larger container.\n              "
                              )
                            ])
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
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
    require("vue-hot-reload-api")      .rerender("data-v-cb8f3ec6", module.exports)
  }
}

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(1825)
/* template */
var __vue_template__ = __webpack_require__(1826)
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
Component.options.__file = "resources/assets/js/Doctor/components/views/base/Jumbotrons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e0b680ce", Component.options)
  } else {
    hotAPI.reload("data-v-e0b680ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(2057)
/* template */
var __vue_template__ = __webpack_require__(2058)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Jumbotrons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cb8f3ec6", Component.options)
  } else {
    hotAPI.reload("data-v-cb8f3ec6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
webpackJsonp([25],{

/***/ 1600:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'badges',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 1601:
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
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Bootstrap Badge")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/badge",
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
                    _c("div", [
                      _c(
                        "h2",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h3",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h4",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h5",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "h6",
                        [
                          _vm._v("Example heading "),
                          _c("b-badge", [_vm._v("New")])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "footer" }, slot: "footer" },
                      [
                        _c(
                          "b-button",
                          { attrs: { variant: "primary" } },
                          [
                            _vm._v("\n              Notifications "),
                            _c(
                              "b-badge",
                              {
                                style: { position: "static" },
                                attrs: { variant: "light" }
                              },
                              [_vm._v("4")]
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
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  {
                    attrs: {
                      header:
                        "<i class='fa fa-align-justify'></i> Badge <small>contextual variations</small>",
                      "header-tag": "header",
                      "footer-tag": "footer"
                    }
                  },
                  [
                    _c(
                      "div",
                      [
                        _c("b-badge", { attrs: { variant: "primary" } }, [
                          _vm._v("Primary")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "secondary" } }, [
                          _vm._v("Secondary")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "success" } }, [
                          _vm._v("Success")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "danger" } }, [
                          _vm._v("Danger")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "warning" } }, [
                          _vm._v("Warning")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "info" } }, [
                          _vm._v("Info")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "light" } }, [
                          _vm._v("Light")
                        ]),
                        _vm._v(" "),
                        _c("b-badge", { attrs: { variant: "dark" } }, [
                          _vm._v("Dark")
                        ])
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-card",
                  {
                    attrs: {
                      header:
                        "<i class='fa fa-align-justify'></i> Badge <small>pills</small>",
                      "header-tag": "header",
                      "footer-tag": "footer"
                    }
                  },
                  [
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "primary" } },
                          [_vm._v("Primary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "secondary" } },
                          [_vm._v("Secondary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "success" } },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "danger" } },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "warning" } },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "info" } },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "light" } },
                          [_vm._v("Light")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "dark" } },
                          [_vm._v("Dark")]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-card",
                  {
                    attrs: {
                      header:
                        "<i class='fa fa-align-justify'></i> Badge <small>actionable</small>",
                      "header-tag": "header",
                      "footer-tag": "footer"
                    }
                  },
                  [
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "primary" } },
                          [_vm._v("Primary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "secondary" } },
                          [_vm._v("Secondary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "success" } },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "danger" } },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "warning" } },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "info" } },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "light" } },
                          [_vm._v("Light")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { attrs: { href: "#", variant: "dark" } },
                          [_vm._v("Dark")]
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
    require("vue-hot-reload-api")      .rerender("data-v-429ab14f", module.exports)
  }
}

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(1600)
/* template */
var __vue_template__ = __webpack_require__(1601)
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
Component.options.__file = "resources/assets/js/Admin/components/views/notifications/Badges.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-429ab14f", Component.options)
  } else {
    hotAPI.reload("data-v-429ab14f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
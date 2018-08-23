webpackJsonp([32],{

/***/ 1178:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'navs'
});

/***/ }),

/***/ 1179:
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
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href: "https://bootstrap-vue.js.org/docs/components/nav",
                      rel: "noreferrer noopener",
                      target: "_blank"
                    }
                  },
                  [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("small", [_vm._v("tab style")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { tabs: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("small", [_vm._v("pill style")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { pills: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("small", [_vm._v("fill tabs")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { fill: "", tabs: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link with a long name ")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("small", [_vm._v("justified tabs")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { justified: "", tabs: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link with a long name ")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("small", [_vm._v("dropdown support")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { attrs: { pills: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c(
                      "b-nav-item-dropdown",
                      {
                        attrs: { id: "nav7_ddown", text: "Dropdown", right: "" }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("one")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("two")]),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("three")])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Bootstrap Navs")]),
              _vm._v(" "),
              _c("small", [_vm._v("vertical variation")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-nav",
                  { staticClass: "w-25", attrs: { vertical: "" } },
                  [
                    _c("b-nav-item", { attrs: { active: "" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", [_vm._v("Another Link")]),
                    _vm._v(" "),
                    _c("b-nav-item", { attrs: { disabled: "" } }, [
                      _vm._v("Disabled")
                    ])
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
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-305cd606", module.exports)
  }
}

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(126)
/* script */
var __vue_script__ = __webpack_require__(1178)
/* template */
var __vue_template__ = __webpack_require__(1179)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Navs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-305cd606", Component.options)
  } else {
    hotAPI.reload("data-v-305cd606", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
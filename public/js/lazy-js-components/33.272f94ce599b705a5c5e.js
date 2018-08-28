webpackJsonp([33],{

/***/ 1182:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'navbars'
});

/***/ }),

/***/ 1183:
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
              _c("strong", [_vm._v("Bootstrap Navbar")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/navbar",
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
              "b-navbar",
              { attrs: { toggleable: "md", type: "dark", variant: "info" } },
              [
                _c("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
                _vm._v(" "),
                _c("b-navbar-brand", { attrs: { href: "#" } }, [
                  _vm._v("NavBar")
                ]),
                _vm._v(" "),
                _c(
                  "b-collapse",
                  { attrs: { "is-nav": "", id: "nav_collapse" } },
                  [
                    _c(
                      "b-navbar-nav",
                      [
                        _c("b-nav-item", { attrs: { href: "#" } }, [
                          _vm._v("Link")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          { attrs: { href: "#", disabled: "" } },
                          [_vm._v("Disabled")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-navbar-nav",
                      { staticClass: "ml-auto" },
                      [
                        _c(
                          "b-nav-form",
                          [
                            _c("b-form-input", {
                              staticClass: "mr-sm-2",
                              attrs: {
                                size: "sm",
                                type: "text",
                                placeholder: "Search"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "my-2 my-sm-0",
                                attrs: { size: "sm", type: "submit" }
                              },
                              [_vm._v("Search")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item-dropdown",
                          { attrs: { text: "Lang", right: "" } },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("EN")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("ES")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("RU")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("FA")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item-dropdown",
                          { attrs: { right: "" } },
                          [
                            _c("template", { slot: "button-content" }, [
                              _c("em", [_vm._v("User")])
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Profile")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Signout")
                            ])
                          ],
                          2
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
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Navbar")]),
              _vm._v(" "),
              _c("small", [_vm._v("brand")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  { attrs: { variant: "faded", type: "light" } },
                  [
                    _c("b-navbar-brand", { attrs: { tag: "h1", href: "#" } }, [
                      _c("img", {
                        staticClass: "d-inline-block align-top",
                        attrs: {
                          src: "https://placekitten.com/g/30/30",
                          alt: "BV"
                        }
                      }),
                      _vm._v("\n            BootstrapVue\n          ")
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
              _c("strong", [_vm._v("Navbar")]),
              _vm._v(" "),
              _c("small", [_vm._v("text")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  {
                    attrs: { toggleable: "", type: "light", variant: "light" }
                  },
                  [
                    _c("b-navbar-toggle", {
                      attrs: { target: "nav_text_collapse" }
                    }),
                    _vm._v(" "),
                    _c("b-navbar-brand", [_vm._v("BootstrapVue")]),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      { attrs: { "is-nav": "", id: "nav_text_collapse" } },
                      [
                        _c(
                          "b-navbar-nav",
                          [_c("b-nav-text", [_vm._v("Navbar text")])],
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
              _c("strong", [_vm._v("Navbar")]),
              _vm._v(" "),
              _c("small", [_vm._v("dropdown")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  {
                    attrs: { type: "dark", variant: "primary", toggleable: "" }
                  },
                  [
                    _c("b-navbar-toggle", {
                      attrs: { target: "nav_dropdown_collapse" }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      { attrs: { "is-nav": "", id: "nav_dropdown_collapse" } },
                      [
                        _c(
                          "b-navbar-nav",
                          [
                            _c("b-nav-item", { attrs: { href: "#" } }, [
                              _vm._v("Home")
                            ]),
                            _vm._v(" "),
                            _c("b-nav-item", { attrs: { href: "#" } }, [
                              _vm._v("Link")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-nav-item-dropdown",
                              { attrs: { text: "Lang", right: "" } },
                              [
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("EN")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("ES")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("RU")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("FA")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-nav-item-dropdown",
                              { attrs: { text: "User", right: "" } },
                              [
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("Account")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { attrs: { href: "#" } },
                                  [_vm._v("Settings")]
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
              _c("strong", [_vm._v("Navbar")]),
              _vm._v(" "),
              _c("small", [_vm._v("form")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  { attrs: { type: "light", variant: "light" } },
                  [
                    _c(
                      "b-nav-form",
                      [
                        _c("b-form-input", {
                          staticClass: "mr-sm-2",
                          attrs: { type: "text", placeholder: "Search" }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "my-2 my-sm-0",
                            attrs: {
                              variant: "outline-success",
                              type: "submit"
                            }
                          },
                          [_vm._v("Search")]
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
              _c("strong", [_vm._v("Navbar")]),
              _vm._v(" "),
              _c("small", [_vm._v("input group")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-navbar",
                  { attrs: { type: "light", variant: "light" } },
                  [
                    _c(
                      "b-nav-form",
                      [
                        _c(
                          "b-input-group",
                          { attrs: { left: "@" } },
                          [
                            _c("b-form-input", {
                              staticClass: "mr-sm-2",
                              attrs: { type: "text", placeholder: "Username" }
                            })
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
    require("vue-hot-reload-api")      .rerender("data-v-bf5da206", module.exports)
  }
}

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(126)
/* script */
var __vue_script__ = __webpack_require__(1182)
/* template */
var __vue_template__ = __webpack_require__(1183)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Navbars.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf5da206", Component.options)
  } else {
    hotAPI.reload("data-v-bf5da206", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
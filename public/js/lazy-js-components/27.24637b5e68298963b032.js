webpackJsonp([27],{

/***/ 1198:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'button-groups'
});

/***/ }),

/***/ 1199:
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
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Bootstrap button group")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/button-group",
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
                          "b-button-group",
                          [
                            _c("b-button", [_vm._v("One")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Two")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Three")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Four")]),
                            _vm._v(" "),
                            _c("b-button", { staticClass: "d-sm-down-none" }, [
                              _vm._v("Five")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "d-sm-down-none",
                                attrs: { variant: "success" }
                              },
                              [_vm._v("Success")]
                            ),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "info" } }, [
                              _vm._v("Info")
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "warning" } }, [
                              _vm._v("Warn")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "d-sm-down-none",
                                attrs: { variant: "primary" }
                              },
                              [_vm._v("Primary")]
                            ),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "danger" } }, [
                              _vm._v("Danger")
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "link" } }, [
                              _vm._v("Link")
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
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Button group")]),
                      _vm._v(" sizing\n          ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", [_vm._v("Left")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Middle")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Right")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm" } },
                          [
                            _c("b-button", [_vm._v("Left")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Middle")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Right")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg" } },
                          [
                            _c("b-button", [_vm._v("Left")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Middle")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Right")])
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
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Button group")]),
                      _vm._v(" dropdown support\n          ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { staticClass: "d-sm-down-none" }, [
                              _vm._v("Button 1")
                            ]),
                            _vm._v(" "),
                            _c("b-button", { staticClass: "d-sm-down-none" }, [
                              _vm._v("Button 2")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-dropdown",
                              {
                                attrs: {
                                  right: "",
                                  text: "Menu",
                                  variant: "success"
                                }
                              },
                              [
                                _c("b-dropdown-item", [_vm._v("Item 1")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Item 2")]),
                                _vm._v(" "),
                                _c("b-dropdown-divider"),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Item 3")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-button", { staticClass: "d-sm-down-none" }, [
                              _vm._v("Button 3")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-dropdown",
                              {
                                attrs: {
                                  right: "",
                                  split: "",
                                  text: "Split Menu",
                                  variant: "info"
                                }
                              },
                              [
                                _c("b-dropdown-item", [_vm._v("Item 1")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Item 2")]),
                                _vm._v(" "),
                                _c("b-dropdown-divider"),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Item 3")])
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
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Button group")]),
                      _vm._v(" vertical variation\n          ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-button-group",
                          { attrs: { vertical: "" } },
                          [
                            _c("b-button", [_vm._v("Top")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Middle")]),
                            _vm._v(" "),
                            _c("b-button", [_vm._v("Bottom")])
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
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Button toolbar")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("with button groups")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/button-toolbar",
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
                          "b-button-toolbar",
                          {
                            attrs: {
                              "key-nav": "",
                              "aria-label": "Toolbar with button groups"
                            }
                          },
                          [
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1" },
                              [
                                _c("b-btn", { staticClass: "d-sm-down-none" }, [
                                  _vm._v("«")
                                ]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("‹")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1" },
                              [
                                _c("b-btn", { staticClass: "d-sm-down-none" }, [
                                  _vm._v("Edit")
                                ]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Undo")]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Redo")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1" },
                              [
                                _c("b-btn", [_vm._v("›")]),
                                _vm._v(" "),
                                _c("b-btn", { staticClass: "d-sm-down-none" }, [
                                  _vm._v("»")
                                ])
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
                    _c("hr", { staticClass: "d-sm-down-none" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-button-toolbar",
                          {
                            staticClass: "d-sm-down-none",
                            attrs: {
                              "aria-label":
                                "Toolbar with button groups and input groups"
                            }
                          },
                          [
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1", attrs: { size: "sm" } },
                              [
                                _c("b-btn", [_vm._v("New")]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Edit")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-input-group",
                              {
                                staticClass: "w-25 mx-1",
                                attrs: { size: "sm" }
                              },
                              [
                                _c(
                                  "b-input-group-prepend",
                                  [_c("b-input-group-text", [_vm._v("$")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  staticClass: "text-right",
                                  attrs: { value: "100" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-input-group-append",
                                  [_c("b-input-group-text", [_vm._v(".00")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-input-group",
                              {
                                staticClass: "w-25 mx-1",
                                attrs: { size: "sm" }
                              },
                              [
                                _c(
                                  "b-input-group-prepend",
                                  [_c("b-input-group-text", [_vm._v("Size")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c("b-form-select", {
                                  attrs: {
                                    value: "Medium",
                                    options: ["Large", "Medium", "Small"]
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1", attrs: { size: "sm" } },
                              [
                                _c("b-btn", [_vm._v("Save")]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Cancel")])
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
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-button-toolbar",
                          {
                            attrs: {
                              "aria-label":
                                "Toolbar with button groups and dropdown menu"
                            }
                          },
                          [
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1 d-sm-down-none" },
                              [
                                _c("b-btn", [_vm._v("New")]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Edit")]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Undo")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown",
                              {
                                staticClass: "mx-1",
                                attrs: { right: "", text: "menu" }
                              },
                              [
                                _c("b-dropdown-item", [_vm._v("Item 1")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Item 2")]),
                                _vm._v(" "),
                                _c("b-dropdown-item", [_vm._v("Item 3")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button-group",
                              { staticClass: "mx-1" },
                              [
                                _c("b-btn", [_vm._v("Save")]),
                                _vm._v(" "),
                                _c("b-btn", [_vm._v("Cancel")])
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
    require("vue-hot-reload-api")      .rerender("data-v-24f18e0c", module.exports)
  }
}

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(128)
/* script */
var __vue_script__ = __webpack_require__(1198)
/* template */
var __vue_template__ = __webpack_require__(1199)
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
Component.options.__file = "resources/assets/js/Admin/components/views/buttons/ButtonGroups.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24f18e0c", Component.options)
  } else {
    hotAPI.reload("data-v-24f18e0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
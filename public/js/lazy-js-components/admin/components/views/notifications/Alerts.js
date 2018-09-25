webpackJsonp([26],{

/***/ 1598:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'alerts',
  data: function data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },

  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
});

/***/ }),

/***/ 1599:
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
                      _c("strong", [_vm._v("Bootstrap Alert")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/alert",
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
                          "b-alert",
                          { attrs: { show: "", variant: "primary" } },
                          [_vm._v("Primary Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "secondary" } },
                          [_vm._v("Secondary Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "success" } },
                          [_vm._v("Success Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "danger" } },
                          [_vm._v("Danger Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "warning" } },
                          [_vm._v("Warning Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "info" } },
                          [_vm._v("Info Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "light" } },
                          [_vm._v("Light Alert")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "dark" } },
                          [_vm._v("Dark Alert")]
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
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" Alert\n            "),
                      _c("small", [
                        _vm._v(" use "),
                        _c("code", [_vm._v(".alert-link")]),
                        _vm._v(" to provide links")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "primary" } },
                          [
                            _vm._v("\n              Primary Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "secondary" } },
                          [
                            _vm._v("\n              Secondary Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "success" } },
                          [
                            _vm._v("\n              Success Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "danger" } },
                          [
                            _vm._v("\n              Danger Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "warning" } },
                          [
                            _vm._v("\n              Warning Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "info" } },
                          [
                            _vm._v("\n              Info Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "light" } },
                          [
                            _vm._v("\n              Light Alert with "),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v(".\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          { attrs: { show: "", variant: "dark" } },
                          [
                            _vm._v(
                              "\n              Dark Alert with\n              "
                            ),
                            _c(
                              "b-link",
                              {
                                staticClass: "alert-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("an example link")]
                            ),
                            _vm._v("\n              .\n            ")
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
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" Alerts "),
                      _c("small", [_vm._v("with additional content")])
                    ]),
                    _vm._v(" "),
                    _c("b-alert", { attrs: { show: "", variant: "success" } }, [
                      _c("h4", { staticClass: "alert-heading" }, [
                        _vm._v("Well done!")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n              Aww yeah, you successfully read this important alert message.\n              This example text is going to run a bit longer so that you can see\n              how spacing within an alert works with this kind of content.\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n            "
                        )
                      ])
                    ])
                  ],
                  1
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
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" Alerts "),
                      _c("small", [_vm._v("dismissible")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-alert",
                          { attrs: { show: "", dismissible: "" } },
                          [
                            _vm._v(
                              "\n              Dismissible Alert!\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          {
                            attrs: {
                              variant: "danger",
                              dismissible: "",
                              show: _vm.showDismissibleAlert
                            },
                            on: {
                              dismissed: function($event) {
                                _vm.showDismissibleAlert = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            Dismissible Alert!\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-btn",
                          {
                            staticClass: "m-1",
                            attrs: { variant: "info" },
                            on: {
                              click: function($event) {
                                _vm.showDismissibleAlert = true
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            Show dismissible alert (" +
                                _vm._s(
                                  _vm.showDismissibleAlert
                                    ? "visible"
                                    : "hidden"
                                ) +
                                ")\n          "
                            )
                          ]
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
                      _vm._v(" Alerts "),
                      _c("small", [_vm._v("auto dismissible")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-alert",
                          {
                            attrs: {
                              show: _vm.dismissCountDown,
                              dismissible: "",
                              variant: "warning"
                            },
                            on: {
                              dismissed: function($event) {
                                _vm.dismissCountdown = 0
                              },
                              "dismiss-count-down": _vm.countDownChanged
                            }
                          },
                          [
                            _vm._v("\n              Alert will dismiss after "),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.dismissCountDown))
                            ]),
                            _vm._v(" seconds...\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-alert",
                          {
                            attrs: {
                              show: _vm.dismissCountDown,
                              dismissible: "",
                              variant: "info"
                            },
                            on: {
                              dismissed: function($event) {
                                _vm.dismissCountdown = 0
                              },
                              "dismiss-count-down": _vm.countDownChanged
                            }
                          },
                          [
                            _vm._v(
                              "\n              Alert will dismiss after " +
                                _vm._s(_vm.dismissCountDown) +
                                " seconds...\n              "
                            ),
                            _c("b-progress", {
                              attrs: {
                                variant: "info",
                                max: _vm.dismissSecs,
                                value: _vm.dismissCountDown,
                                height: "4px"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-btn",
                          {
                            staticClass: "m-1",
                            attrs: { variant: "info" },
                            on: { click: _vm.showAlert }
                          },
                          [
                            _vm._v(
                              "\n              Show alert with timer\n            "
                            )
                          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-74a06f36", module.exports)
  }
}

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(1598)
/* template */
var __vue_template__ = __webpack_require__(1599)
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
Component.options.__file = "resources/assets/js/Admin/components/views/notifications/Alerts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74a06f36", Component.options)
  } else {
    hotAPI.reload("data-v-74a06f36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
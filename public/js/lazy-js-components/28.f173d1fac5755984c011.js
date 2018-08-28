webpackJsonp([28],{

/***/ 1168:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tabs',
  data: function data() {
    return {
      tabIndex: [0, 0],
      tabs: ['Calculator', 'Shopping cart', 'Charts']
    };
  }
});

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "animated fadeIn" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("br"),
                        _vm._v(
                          " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("br"),
                        _vm._v(
                          "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs with icons\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-calculator" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-basket-loaded" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-pie-chart" })
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs with icons\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      model: {
                        value: _vm.tabIndex[0],
                        callback: function($$v) {
                          _vm.$set(_vm.tabIndex, 0, $$v)
                        },
                        expression: "tabIndex[0]"
                      }
                    },
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-calculator" }),
                            _vm._v(" " + _vm._s(_vm.tabs[0]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            " 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-basket-loaded" }),
                            _vm._v(" " + _vm._s(_vm.tabs[1]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", { staticClass: "icon-pie-chart" }),
                            _vm._v(" " + _vm._s(_vm.tabs[2]) + "\n            ")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                          )
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xs: "12", lg: "6" } },
            [
              _c(
                "b-card",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("\n          Tabs vertical\n        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-tabs",
                        {
                          attrs: {
                            card: "",
                            pills: "",
                            vertical: "",
                            "nav-wrapper-class": "w-40"
                          },
                          model: {
                            value: _vm.tabIndex[1],
                            callback: function($$v) {
                              _vm.$set(_vm.tabIndex, 1, $$v)
                            },
                            expression: "tabIndex[1]"
                          }
                        },
                        [
                          _c(
                            "b-tab",
                            { attrs: { active: "" } },
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-calculator" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[0]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-basket-loaded" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[1]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            [
                              _c("template", { slot: "title" }, [
                                _c("i", { staticClass: "icon-pie-chart" }),
                                _vm._v(
                                  " " + _vm._s(_vm.tabs[2]) + "\n            "
                                )
                              ]),
                              _vm._v(
                                "\n            3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n            officia deserunt mollit anim id est laborum.\n          "
                              )
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
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d82f6d4", module.exports)
  }
}

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(127)
/* script */
var __vue_script__ = __webpack_require__(1168)
/* template */
var __vue_template__ = __webpack_require__(1169)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Tabs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d82f6d4", Component.options)
  } else {
    hotAPI.reload("data-v-7d82f6d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
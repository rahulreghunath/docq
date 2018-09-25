webpackJsonp([24],{

/***/ 1602:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modals',
  data: function data() {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false
    };
  }
});

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
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
                    {
                      attrs: {
                        header:
                          "<i class='fa fa-align-justify'></i> Bootstrap Modals"
                      }
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.myModal = true
                            }
                          }
                        },
                        [_vm._v("Launch demo modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.largeModal = true
                            }
                          }
                        },
                        [_vm._v("Launch large modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.smallModal = true
                            }
                          }
                        },
                        [_vm._v("Launch small modal")]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "primary" },
                          on: {
                            click: function($event) {
                              _vm.primaryModal = true
                            }
                          }
                        },
                        [_vm._v("Launch primary modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "success" },
                          on: {
                            click: function($event) {
                              _vm.successModal = true
                            }
                          }
                        },
                        [_vm._v("Launch success modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "warning" },
                          on: {
                            click: function($event) {
                              _vm.warningModal = true
                            }
                          }
                        },
                        [_vm._v("Launch warning modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "danger" },
                          on: {
                            click: function($event) {
                              _vm.dangerModal = true
                            }
                          }
                        },
                        [_vm._v("Launch danger modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "button", variant: "info" },
                          on: {
                            click: function($event) {
                              _vm.infoModal = true
                            }
                          }
                        },
                        [_vm._v("Launch info modal")]
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
        "b-modal",
        {
          attrs: { title: "Modal title" },
          on: {
            ok: function($event) {
              _vm.myModal = false
            }
          },
          model: {
            value: _vm.myModal,
            callback: function($$v) {
              _vm.myModal = $$v
            },
            expression: "myModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title", size: "lg" },
          on: {
            ok: function($event) {
              _vm.largeModal = false
            }
          },
          model: {
            value: _vm.largeModal,
            callback: function($$v) {
              _vm.largeModal = $$v
            },
            expression: "largeModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Modal title", size: "sm" },
          on: {
            ok: function($event) {
              _vm.smallModal = false
            }
          },
          model: {
            value: _vm.smallModal,
            callback: function($$v) {
              _vm.smallModal = $$v
            },
            expression: "smallModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          staticClass: "modal-primary",
          attrs: { title: "Modal title" },
          on: {
            ok: function($event) {
              _vm.primaryModal = false
            }
          },
          model: {
            value: _vm.primaryModal,
            callback: function($$v) {
              _vm.primaryModal = $$v
            },
            expression: "primaryModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          staticClass: "modal-success",
          attrs: { title: "Modal title", "ok-variant": "success" },
          on: {
            ok: function($event) {
              _vm.successModal = false
            }
          },
          model: {
            value: _vm.successModal,
            callback: function($$v) {
              _vm.successModal = $$v
            },
            expression: "successModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          staticClass: "modal-warning",
          attrs: { title: "Modal title", "ok-variant": "warning" },
          on: {
            ok: function($event) {
              _vm.warningModal = false
            }
          },
          model: {
            value: _vm.warningModal,
            callback: function($$v) {
              _vm.warningModal = $$v
            },
            expression: "warningModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          staticClass: "modal-danger",
          attrs: { title: "Modal title", "ok-variant": "danger" },
          on: {
            ok: function($event) {
              _vm.dangerModal = false
            }
          },
          model: {
            value: _vm.dangerModal,
            callback: function($$v) {
              _vm.dangerModal = $$v
            },
            expression: "dangerModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          staticClass: "modal-info",
          attrs: { title: "Modal title", "ok-variant": "info" },
          on: {
            ok: function($event) {
              _vm.infoModal = false
            }
          },
          model: {
            value: _vm.infoModal,
            callback: function($$v) {
              _vm.infoModal = $$v
            },
            expression: "infoModal"
          }
        },
        [
          _vm._v(
            "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  "
          )
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-a7e5aef6", module.exports)
  }
}

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(1602)
/* template */
var __vue_template__ = __webpack_require__(1603)
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
Component.options.__file = "resources/assets/js/Admin/components/views/notifications/Modals.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7e5aef6", Component.options)
  } else {
    hotAPI.reload("data-v-a7e5aef6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
webpackJsonp([19],{

/***/ 1485:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page404'
});

/***/ }),

/***/ 1486:
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
              { attrs: { md: "6" } },
              [
                _c("div", { staticClass: "clearfix" }, [
                  _c("h1", { staticClass: "float-left display-3 mr-4" }, [
                    _vm._v("404")
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "pt-3" }, [
                    _vm._v("Oops! You're lost.")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v("The page you are looking for was not found.")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "b-input-group",
                  [
                    _c(
                      "b-input-group-prepend",
                      [
                        _c("b-input-group-text", [
                          _c("i", { staticClass: "fa fa-search" })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        id: "prependedInput",
                        size: "16",
                        type: "text",
                        placeholder: "What are you looking for?"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-input-group-append",
                      [
                        _c("b-button", { attrs: { variant: "info" } }, [
                          _vm._v("Search")
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
    require("vue-hot-reload-api")      .rerender("data-v-5ee21296", module.exports)
  }
}

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(148)
/* script */
var __vue_script__ = __webpack_require__(1485)
/* template */
var __vue_template__ = __webpack_require__(1486)
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
Component.options.__file = "resources/assets/js/Admin/components/views/pages/Page404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ee21296", Component.options)
  } else {
    hotAPI.reload("data-v-5ee21296", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
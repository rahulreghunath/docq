webpackJsonp([1],{

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1201)
/* template */
var __vue_template__ = __webpack_require__(1208)
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
Component.options.__file = "resources/assets/js/Admin/components/views/theme/Colors.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f8c63e4", Component.options)
  } else {
    hotAPI.reload("data-v-2f8c63e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColorTheme__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColorTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ColorTheme__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'colors',
  components: { ColorTheme: __WEBPACK_IMPORTED_MODULE_0__ColorTheme___default.a }
});

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1203)
/* template */
var __vue_template__ = __webpack_require__(1207)
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
Component.options.__file = "resources/assets/js/Admin/components/views/theme/ColorTheme.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f48cec4", Component.options)
  } else {
    hotAPI.reload("data-v-7f48cec4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColorView__ = __webpack_require__(1204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColorView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ColorView__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ColorTheme',
  components: { ColorView: __WEBPACK_IMPORTED_MODULE_0__ColorView___default.a },
  props: {
    classObj: {
      type: String,
      default: 'theme-color w-75 rounded mb-3'
    },
    color: {
      type: String,
      default: 'bg-secondary'
    }
  }
});

/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1205)
/* template */
var __vue_template__ = __webpack_require__(1206)
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
Component.options.__file = "resources/assets/js/Admin/components/views/theme/ColorView.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a33c110c", Component.options)
  } else {
    hotAPI.reload("data-v-a33c110c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coreui_coreui_dist_js_coreui_utilities__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coreui_coreui_dist_js_coreui_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__coreui_coreui_dist_js_coreui_utilities__);
//
//
//
//
//
//
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
  name: 'ColorView',
  data: function data() {
    return {
      bgColor: 'rgb(255, 255, 255)'
    };
  },
  computed: {
    hexColor: function hexColor() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__coreui_coreui_dist_js_coreui_utilities__["rgbToHex"])(this.bgColor);
    }
  },
  methods: {
    setColor: function setColor() {
      var elem = this.$parent.$el.children[0];
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.bgColor = color || this.bgColor;
    }
  },
  mounted: function mounted() {
    this.setColor();
  }
});

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { staticClass: "w-100" }, [
    _c("tbody", [
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("HEX:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.hexColor))
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { staticClass: "text-muted" }, [_vm._v("RGB:")]),
        _vm._v(" "),
        _c("td", { staticClass: "font-weight-bold" }, [
          _vm._v(_vm._s(this.bgColor))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a33c110c", module.exports)
  }
}

/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-col",
    { staticClass: "mb-4", attrs: { xl: "2", md: "4", sm: "6", xs: "12" } },
    [
      _c("div", {
        class: [_vm.classObj, _vm.color],
        style: { paddingTop: "75%" }
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("color-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f48cec4", module.exports)
  }
}

/***/ }),

/***/ 1208:
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
        "b-card",
        { attrs: { "header-tag": "header" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("i", { staticClass: "icon-drop" }),
            _vm._v(" Theme colors\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c("color-theme", { attrs: { color: "bg-primary" } }, [
                    _c("h6", [_vm._v("Brand Primary Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-secondary" } }, [
                    _c("h6", [_vm._v("Brand Secondary Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-success" } }, [
                    _c("h6", [_vm._v("Brand Success Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-danger" } }, [
                    _c("h6", [_vm._v("Brand Danger Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-warning" } }, [
                    _c("h6", [_vm._v("Brand Warning Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-info" } }, [
                    _c("h6", [_vm._v("Brand Info Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-light" } }, [
                    _c("h6", [_vm._v("Brand Light Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-dark" } }, [
                    _c("h6", [_vm._v("Brand Dark Color")])
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
      _c(
        "b-card",
        { attrs: { "header-tag": "header" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("i", { staticClass: "icon-drop" }),
            _vm._v(" Grays\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c("color-theme", { attrs: { color: "bg-gray-100" } }, [
                    _c("h6", [_vm._v("Brand 100 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-200" } }, [
                    _c("h6", [_vm._v("Brand 200 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-300" } }, [
                    _c("h6", [_vm._v("Brand 300 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-400" } }, [
                    _c("h6", [_vm._v("Brand 400 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-500" } }, [
                    _c("h6", [_vm._v("Brand 500 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-600" } }, [
                    _c("h6", [_vm._v("Brand 600 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-700" } }, [
                    _c("h6", [_vm._v("Brand 700 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-800" } }, [
                    _c("h6", [_vm._v("Brand 800 Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-gray-900" } }, [
                    _c("h6", [_vm._v("Brand 900 Color")])
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
      _c(
        "b-card",
        { attrs: { "header-tag": "header" } },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("i", { staticClass: "icon-drop" }),
            _vm._v(" Additional colors\n    ")
          ]),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-row",
                [
                  _c("color-theme", { attrs: { color: "bg-blue" } }, [
                    _c("h6", [_vm._v("Brand Blue Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-indigo" } }, [
                    _c("h6", [_vm._v("Brand Indigo Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-purple" } }, [
                    _c("h6", [_vm._v("Brand Purple Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-pink" } }, [
                    _c("h6", [_vm._v("Brand Pink Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-red" } }, [
                    _c("h6", [_vm._v("Brand Red Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-orange" } }, [
                    _c("h6", [_vm._v("Brand Orange Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-yellow" } }, [
                    _c("h6", [_vm._v("Brand Yellow Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-green" } }, [
                    _c("h6", [_vm._v("Brand Green Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-teal" } }, [
                    _c("h6", [_vm._v("Brand Teal Color")])
                  ]),
                  _vm._v(" "),
                  _c("color-theme", { attrs: { color: "bg-cyan" } }, [
                    _c("h6", [_vm._v("Brand Cyan Color")])
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f8c63e4", module.exports)
  }
}

/***/ })

});
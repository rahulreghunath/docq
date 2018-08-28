webpackJsonp([5],{

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'tables',
  components: { cTable: __WEBPACK_IMPORTED_MODULE_0__Table_vue___default.a }
});

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(127)
/* script */
var __vue_script__ = __webpack_require__(1167)
/* template */
var __vue_template__ = __webpack_require__(1168)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29d04f68", Component.options)
  } else {
    hotAPI.reload("data-v-29d04f68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1167:
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

/**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
var shuffleArray = function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'c-table',
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      items: shuffleArray([{ username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active' }, { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned' }, { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive' }, { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending' }, { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active' }, { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active' }, { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned' }, { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive' }, { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending' }, { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active' }, { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active' }, { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned' }, { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive' }, { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending' }, { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active' }, { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active' }, { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned' }, { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive' }, { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending' }, { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active' }, { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active' }, { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned' }, { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive' }, { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active' }, { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending' }]),
      fields: [{ key: 'username' }, { key: 'registered' }, { key: 'role' }, { key: 'status' }],
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    };
  },
  methods: {
    getBadge: function getBadge(status) {
      return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
    },
    getRowCount: function getRowCount(items) {
      return items.length;
    }
  }
});

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { header: _vm.caption } },
    [
      _c("b-table", {
        attrs: {
          hover: _vm.hover,
          striped: _vm.striped,
          bordered: _vm.bordered,
          small: _vm.small,
          fixed: _vm.fixed,
          responsive: "sm",
          items: _vm.items,
          fields: _vm.fields,
          "current-page": _vm.currentPage,
          "per-page": _vm.perPage
        },
        scopedSlots: _vm._u([
          {
            key: "status",
            fn: function(data) {
              return [
                _c(
                  "b-badge",
                  { attrs: { variant: _vm.getBadge(data.item.status) } },
                  [_vm._v(_vm._s(data.item.status))]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "nav",
        [
          _c("b-pagination", {
            attrs: {
              "total-rows": _vm.getRowCount(_vm.items),
              "per-page": _vm.perPage,
              "prev-text": "Prev",
              "next-text": "Next",
              "hide-goto-end-buttons": ""
            },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage"
            }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-29d04f68", module.exports)
  }
}

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
            { attrs: { lg: "6" } },
            [
              _c("c-table", {
                attrs: {
                  caption: "<i class='fa fa-align-justify'></i> Simple Table"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6" } },
            [
              _c("c-table", {
                attrs: {
                  striped: "",
                  caption: "<i class='fa fa-align-justify'></i> Striped Table"
                }
              })
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
            { attrs: { lg: "6" } },
            [
              _c("c-table", {
                attrs: {
                  small: "",
                  caption: "<i class='fa fa-align-justify'></i> Condensed Table"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6" } },
            [
              _c("c-table", {
                attrs: {
                  fixed: "",
                  bordered: "",
                  caption: "<i class='fa fa-align-justify'></i> Bordered Table"
                }
              })
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
            { attrs: { sm: "12" } },
            [
              _c("c-table", {
                attrs: {
                  hover: "",
                  striped: "",
                  bordered: "",
                  small: "",
                  fixed: "",
                  caption:
                    "<i class='fa fa-align-justify'></i> Combined All Table"
                }
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-13e53ebb", module.exports)
  }
}

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(127)
/* script */
var __vue_script__ = __webpack_require__(1165)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Tables.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13e53ebb", Component.options)
  } else {
    hotAPI.reload("data-v-13e53ebb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
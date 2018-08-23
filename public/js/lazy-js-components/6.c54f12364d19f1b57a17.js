webpackJsonp([6],{

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var usersData = [{ id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' }, { id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 23, name: 'Einar Randall', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 24, name: 'Félix Troels', registered: '2018/03/21', role: 'Staff', status: 'Active' }, { id: 25, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending' }, { id: 42, name: 'Ford Prefex', registered: '2001/05/21', role: 'Alien', status: 'Don\'t panic!' }];

/* harmony default export */ __webpack_exports__["a"] = (usersData);

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("80162f62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6334b94e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Users.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6334b94e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Users.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.card-body[data-v-6334b94e] table > tbody > tr > td {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 1224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UsersData__ = __webpack_require__(1099);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Users',
  props: {
    caption: {
      type: String,
      default: 'Users'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
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
      items: __WEBPACK_IMPORTED_MODULE_0__UsersData__["a" /* default */].filter(function (user) {
        return user.id < 42;
      }),
      fields: [{ key: 'id' }, { key: 'name' }, { key: 'registered' }, { key: 'role' }, { key: 'status' }],
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    };
  },
  computed: {},
  methods: {
    getBadge: function getBadge(status) {
      return status === 'Active' ? 'success' : status === 'Inactive' ? 'secondary' : status === 'Pending' ? 'warning' : status === 'Banned' ? 'danger' : 'primary';
    },
    getRowCount: function getRowCount(items) {
      return items.length;
    },
    userLink: function userLink(id) {
      return 'users/' + id.toString();
    },
    rowClicked: function rowClicked(item) {
      var userLink = this.userLink(item.id);
      this.$router.push({ path: userLink });
    }
  }
});

/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12", xl: "6" } },
        [
          _c(
            "transition",
            { attrs: { name: "slide" } },
            [
              _c(
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
                    on: { "row-clicked": _vm.rowClicked },
                    scopedSlots: _vm._u([
                      {
                        key: "id",
                        fn: function(data) {
                          return [_c("strong", [_vm._v(_vm._s(data.item.id))])]
                        }
                      },
                      {
                        key: "name",
                        fn: function(data) {
                          return [
                            _c("strong", [_vm._v(_vm._s(data.item.name))])
                          ]
                        }
                      },
                      {
                        key: "status",
                        fn: function(data) {
                          return [
                            _c(
                              "b-badge",
                              {
                                attrs: {
                                  variant: _vm.getBadge(data.item.status)
                                }
                              },
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
                          size: "sm",
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
    require("vue-hot-reload-api")      .rerender("data-v-6334b94e", module.exports)
  }
}

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1222)
}
var normalizeComponent = __webpack_require__(126)
/* script */
var __vue_script__ = __webpack_require__(1224)
/* template */
var __vue_template__ = __webpack_require__(1225)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6334b94e"
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
Component.options.__file = "resources/assets/js/Admin/components/views/users/Users.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6334b94e", Component.options)
  } else {
    hotAPI.reload("data-v-6334b94e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
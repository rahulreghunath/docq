webpackJsonp([11],{

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var usersData = [{ id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' }, { id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending' }, { id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active' }, { id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active' }, { id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned' }, { id: 23, name: 'Einar Randall', registered: '2018/02/01', role: 'Admin', status: 'Inactive' }, { id: 24, name: 'Félix Troels', registered: '2018/03/21', role: 'Staff', status: 'Active' }, { id: 25, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending' }, { id: 42, name: 'Ford Prefex', registered: '2001/05/21', role: 'Alien', status: 'Don\'t panic!' }];

/* harmony default export */ __webpack_exports__["a"] = (usersData);

/***/ }),

/***/ 1225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UsersData__ = __webpack_require__(1098);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
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
  name: 'User',
  props: {
    caption: {
      type: String,
      default: 'User id'
    }
  },
  data: function data() {
    return {
      items: function items(id) {
        var user = __WEBPACK_IMPORTED_MODULE_0__UsersData__["a" /* default */].find(function (user) {
          return user.id.toString() === id;
        });
        var userDetails = user ? Object.entries(user) : [['id', 'Not found']];
        return userDetails.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return { key: key, value: value };
        });
      },
      fields: [{ key: 'key' }, { key: 'value' }]
    };
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
      // this.$router.replace({path: '/users'})
    }
  }
});

/***/ }),

/***/ 1226:
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
        { attrs: { cols: "12", lg: "6" } },
        [
          _c(
            "b-card",
            { attrs: { "no-header": "" } },
            [
              _c("template", { slot: "header" }, [
                _vm._v(
                  "\n        User id:  " +
                    _vm._s(_vm.$route.params.id) +
                    "\n      "
                )
              ]),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  striped: "",
                  small: "",
                  fixed: "",
                  responsive: "sm",
                  items: _vm.items(_vm.$route.params.id),
                  fields: _vm.fields
                },
                scopedSlots: _vm._u([
                  {
                    key: "value",
                    fn: function(data) {
                      return [_c("strong", [_vm._v(_vm._s(data.item.value))])]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "template",
                { slot: "footer" },
                [
                  _c("b-button", { on: { click: _vm.goBack } }, [
                    _vm._v("Back")
                  ])
                ],
                1
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34fc41ec", module.exports)
  }
}

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(126)
/* script */
var __vue_script__ = __webpack_require__(1225)
/* template */
var __vue_template__ = __webpack_require__(1226)
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
Component.options.__file = "resources/assets/js/Admin/components/views/users/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34fc41ec", Component.options)
  } else {
    hotAPI.reload("data-v-34fc41ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
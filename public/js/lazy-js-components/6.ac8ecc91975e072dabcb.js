webpackJsonp([6],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/**
 * Pagination functions for all page
 */


/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        /**
         * Axios http request
         * @param type
         * @param url
         * @param data
         * @param config
         * @returns {Promise<any>}
         */
        submit: function submit(_ref) {
            var type = _ref.type,
                url = _ref.url,
                _ref$data = _ref.data,
                data = _ref$data === undefined ? null : _ref$data,
                _ref$config = _ref.config,
                config = _ref$config === undefined ? null : _ref$config;


            if (typeof config.headers !== "undefined") {
                config.headers.push({
                    Authorization: 'Bearer ' + this.$store.state.token //the token is a variable which holds the token
                });
            } else {
                config.push({
                    headers: {
                        Authorization: 'Bearer ' + this.$store.state.token //the token is a variable which holds the token
                    }
                });
            }

            if (!url.includes("http")) {
                // if relative url is given
                if (location.hostname === 'localhost') {
                    url = window.location.protocol + '//' + location.hostname + ':' + location.port + '/' + url;
                } else {
                    url = window.location.protocol + '//' + location.hostname + '/' + url;
                }
            }
            return new Promise(function (resolve, reject) {
                /*
                * Axios post request
                 */
                if (type === 'post') {
                    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, data, config).then(function (response) {
                        return resolve(response);
                    }).catch(function (error) {
                        return reject(error.response);
                    });
                } else if (type === 'get') {

                    if (data !== null) {
                        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url, {
                            params: data
                        }, config).then(function (response) {
                            return resolve(response);
                        }).catch(function (error) {
                            return reject(error.response);
                        });
                    } else {
                        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url, config).then(function (response) {
                            return resolve(response);
                        }).catch(function (error) {
                            return reject(error.response);
                        });
                    }
                }
            });
        }
    }
});

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1234);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(128)("21a9c659", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d0b1518\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Logout.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d0b1518\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Logout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_httpRequest__ = __webpack_require__(1103);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Logout",
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_httpRequest__["a" /* default */]],
    created: function created() {
        this.$store.dispatch('removeToken').then(function (data) {});
    }
});

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6d0b1518", module.exports)
  }
}

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1233)
}
var normalizeComponent = __webpack_require__(127)
/* script */
var __vue_script__ = __webpack_require__(1235)
/* template */
var __vue_template__ = __webpack_require__(1236)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d0b1518"
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
Component.options.__file = "resources/assets/js/Admin/components/views/actions/Logout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d0b1518", Component.options)
  } else {
    hotAPI.reload("data-v-6d0b1518", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
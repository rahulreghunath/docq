webpackJsonp([44],{

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1525)
}
var normalizeComponent = __webpack_require__(148)
/* script */
var __vue_script__ = __webpack_require__(1527)
/* template */
var __vue_template__ = __webpack_require__(1528)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b671df6"
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
Component.options.__file = "resources/assets/js/Admin/components/views/pages/AddClinic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b671df6", Component.options)
  } else {
    hotAPI.reload("data-v-0b671df6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1526);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(149)("66f8625b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b671df6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddClinic.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b671df6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddClinic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1527:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (79:10)\n\n\u001b[0m \u001b[90m 77 | \u001b[39m\u001b[36mimport\u001b[39m submit from \u001b[32m'../../../http/http'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 78 | \u001b[39m\u001b[36mimport\u001b[39m {spinner} from \u001b[32m\"../../../mixins/helper\"\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 79 | \u001b[39m\u001b[36mimport\u001b[39m vue\u001b[33m-\u001b[39m\n \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 80 | \u001b[39m\n \u001b[90m 81 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m {\n \u001b[90m 82 | \u001b[39m    name\u001b[33m:\u001b[39m \u001b[32m\"AddClinic\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "animated fadeIn" },
    [
      _vm.loading ? _c("spinner") : _vm._e(),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addClinic($event)
                    }
                  }
                },
                [
                  _c(
                    "b-card",
                    [
                      _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                        _c("strong", [_vm._v("Add Clinic")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { sm: "12" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Enter Clinic Name",
                                    "label-for": "name",
                                    "invalid-feedback": _vm.form.errors.get(
                                      "clinicName"
                                    ),
                                    state: _vm.form.has("clinicName")
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "name",
                                      placeholder: "Clinic Name",
                                      state: _vm.form.has("clinicName")
                                    },
                                    model: {
                                      value: _vm.form.clinicName,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "clinicName",
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression: "form.clinicName"
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
                            "b-col",
                            { attrs: { sm: "12" } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "8" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: "Enter Location",
                                            "label-for": "location",
                                            "invalid-feedback": _vm.form.errors.get(
                                              "location"
                                            ),
                                            state: _vm.form.has("location")
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              id: "location",
                                              placeholder: "Location",
                                              state: _vm.form.has("location")
                                            },
                                            model: {
                                              value: _vm.form.location,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "location",
                                                  typeof $$v === "string"
                                                    ? $$v.trim()
                                                    : $$v
                                                )
                                              },
                                              expression: "form.location"
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
                                    "b-col",
                                    { attrs: { sm: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "&nbsp;" } },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              staticClass: "btn-full-width",
                                              attrs: { variant: "danger" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Location Details\n                                        "
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "12" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Phone Number",
                                    "label-for": "phone",
                                    "invalid-feedback": _vm.form.errors.get(
                                      "phone"
                                    ),
                                    state: _vm.form.has("phone")
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "phone",
                                      placeholder: "Age",
                                      state: _vm.form.has("phone")
                                    },
                                    model: {
                                      value: _vm.form.phone,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "phone",
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                        )
                                      },
                                      expression: "form.phone"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { attrs: { slot: "footer" }, slot: "footer" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "submit",
                                size: "sm",
                                variant: "primary"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-dot-circle-o" }),
                              _vm._v(
                                "\n                            Submit\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "reset",
                                size: "sm",
                                variant: "danger"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-ban" }),
                              _vm._v(" Reset")
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
              _c("div", {
                staticStyle: { width: "500px", height: "600px" },
                attrs: { id: "map" }
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
    require("vue-hot-reload-api")      .rerender("data-v-0b671df6", module.exports)
  }
}

/***/ })

});
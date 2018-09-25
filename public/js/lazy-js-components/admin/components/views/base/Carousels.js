webpackJsonp([44],{

/***/ 1560:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'carousels',
  data: function data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  methods: {
    onSlideStart: function onSlideStart(slide) {
      console.log('onSlideStart', slide);
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      console.log('onSlideEnd', slide);
      this.sliding = false;
    }
  }
});

/***/ }),

/***/ 1561:
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
              { attrs: { md: "12", lg: "9" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Bootstrap Carousel")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/carousel",
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
                          "b-carousel",
                          {
                            staticStyle: { "text-shadow": "1px 1px 2px #333" },
                            attrs: {
                              id: "carousel1",
                              controls: "",
                              indicators: "",
                              background: "#ababab",
                              interval: 4000,
                              "img-width": "1024",
                              "img-height": "480"
                            },
                            on: {
                              "sliding-start": _vm.onSlideStart,
                              "sliding-end": _vm.onSlideEnd
                            },
                            model: {
                              value: _vm.slide,
                              callback: function($$v) {
                                _vm.slide = $$v
                              },
                              expression: "slide"
                            }
                          },
                          [
                            _c("b-carousel-slide", {
                              attrs: {
                                caption: "First slide",
                                text:
                                  "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                                "img-src":
                                  "https://lorempixel.com/1024/480/technics/2/"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-carousel-slide",
                              {
                                attrs: {
                                  "img-src":
                                    "https://lorempixel.com/1024/480/technics/4/"
                                }
                              },
                              [_c("h1", [_vm._v("Hello world!")])]
                            ),
                            _vm._v(" "),
                            _c("b-carousel-slide", {
                              attrs: {
                                "img-src":
                                  "https://lorempixel.com/1024/480/technics/8/"
                              }
                            }),
                            _vm._v(" "),
                            _c("b-carousel-slide", [
                              _c("img", {
                                staticClass: "d-block img-fluid w-100",
                                attrs: {
                                  slot: "img",
                                  width: "1024",
                                  height: "480",
                                  src:
                                    "https://lorempixel.com/1024/480/technics/5/",
                                  alt: "image slot"
                                },
                                slot: "img"
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-carousel-slide",
                              {
                                attrs: {
                                  caption: "Blank Image",
                                  "img-blank": "",
                                  "img-alt": "Blank image"
                                }
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n                  eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n                  ut lacus vel interdum.\n                "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-4" }, [
                          _vm._v(
                            "\n              Slide #: " + _vm._s(_vm.slide)
                          ),
                          _c("br"),
                          _vm._v(
                            "\n              Sliding: " +
                              _vm._s(_vm.sliding) +
                              "\n            "
                          )
                        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-276ce32d", module.exports)
  }
}

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(1560)
/* template */
var __vue_template__ = __webpack_require__(1561)
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Carousels.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-276ce32d", Component.options)
  } else {
    hotAPI.reload("data-v-276ce32d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
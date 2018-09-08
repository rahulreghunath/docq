webpackJsonp([36], {

    /***/ 1494:
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

        /* harmony default export */
        __webpack_exports__["default"] = ({
            name: 'paginations',
            data: function data() {
                return {
                    currentPage: 3
                };
            },

            methods: {
                linkGen: function linkGen(pageNum) {
                    return '#page/' + pageNum + '/foobar';
                }
            }
        });

        /***/
    }),

    /***/ 1495:
    /***/ (function (module, exports, __webpack_require__) {

        var render = function () {
            var _vm = this
            var _h = _vm.$createElement
            var _c = _vm._self._c || _h
            return _c("div", {staticClass: "wrapper"}, [
                _c(
                    "div",
                    {staticClass: "animated fadeIn"},
                    [
                        _c(
                            "b-card",
                            {attrs: {"header-tag": "header", "footer-tag": "footer"}},
                            [
                                _c("div", {attrs: {slot: "header"}, slot: "header"}, [
                                    _c("i", {staticClass: "fa fa-align-justify"}),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Bootstrap Pagination")]),
                                    _vm._v(" "),
                                    _c("div", {staticClass: "card-header-actions"}, [
                                        _c(
                                            "a",
                                            {
                                                staticClass: "card-header-action",
                                                attrs: {
                                                    href:
                                                        "https://bootstrap-vue.js.org/docs/components/pagination",
                                                    rel: "noreferrer noopener",
                                                    target: "_blank"
                                                }
                                            },
                                            [_c("small", {staticClass: "text-muted"}, [_vm._v("docs")])]
                                        )
                                    ])
                                ]),
                                _vm._v(" "),
                                _c(
                                    "div",
                                    [
                                        _c("h6", [_vm._v("Default")]),
                                        _vm._v(" "),
                                        _c("b-pagination", {
                                            attrs: {size: "md", "total-rows": 100, "per-page": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("h6", [_vm._v("Small")]),
                                        _vm._v(" "),
                                        _c("b-pagination", {
                                            attrs: {size: "sm", "total-rows": 100, "per-page": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c(
                                            "div",
                                            {staticClass: "d-sm-down-none"},
                                            [
                                                _c("h6", [_vm._v("Large")]),
                                                _vm._v(" "),
                                                _c("b-pagination", {
                                                    attrs: {size: "lg", "total-rows": 100, "per-page": 10},
                                                    model: {
                                                        value: _vm.currentPage,
                                                        callback: function ($$v) {
                                                            _vm.currentPage = $$v
                                                        },
                                                        expression: "currentPage"
                                                    }
                                                }),
                                                _vm._v(" "),
                                                _c("br")
                                            ],
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
                                    ],
                                    1
                                )
                            ]
                        ),
                        _vm._v(" "),
                        _c(
                            "b-card",
                            {attrs: {"header-tag": "header", "footer-tag": "footer"}},
                            [
                                _c("div", {attrs: {slot: "header"}, slot: "header"}, [
                                    _c("i", {staticClass: "fa fa-align-justify"}),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Pagination")]),
                                    _vm._v(" "),
                                    _c("small", [_vm._v("alignment")])
                                ]),
                                _vm._v(" "),
                                _c(
                                    "div",
                                    [
                                        _c("h6", [_vm._v("Left alignment (default)")]),
                                        _vm._v(" "),
                                        _c("b-pagination", {
                                            attrs: {"total-rows": 100, "per-page": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("h6", [_vm._v("Center alignment")]),
                                        _vm._v(" "),
                                        _c("b-pagination", {
                                            attrs: {align: "center", "total-rows": 100, "per-page": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("h6", [_vm._v("Right (end) alignment")]),
                                        _vm._v(" "),
                                        _c("b-pagination", {
                                            attrs: {align: "right", "total-rows": 100, "per-page": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("div", [_vm._v("currentPage: " + _vm._s(_vm.currentPage))])
                                    ],
                                    1
                                )
                            ]
                        ),
                        _vm._v(" "),
                        _c(
                            "b-card",
                            {attrs: {"header-tag": "header", "footer-tag": "footer"}},
                            [
                                _c("div", {attrs: {slot: "header"}, slot: "header"}, [
                                    _c("i", {staticClass: "fa fa-align-justify"}),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Pagination")]),
                                    _vm._v(" "),
                                    _c("small", [_vm._v("navigation")])
                                ]),
                                _vm._v(" "),
                                _c(
                                    "div",
                                    [
                                        _c("h6", [_vm._v("Default")]),
                                        _vm._v(" "),
                                        _c("b-pagination-nav", {
                                            attrs: {"base-url": "#", "number-of-pages": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("h6", {staticClass: "mt-4"}, [
                                            _vm._v("With link generator function")
                                        ]),
                                        _vm._v(" "),
                                        _c("b-pagination-nav", {
                                            attrs: {"link-gen": _vm.linkGen, "number-of-pages": 10},
                                            model: {
                                                value: _vm.currentPage,
                                                callback: function ($$v) {
                                                    _vm.currentPage = $$v
                                                },
                                                expression: "currentPage"
                                            }
                                        }),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("div", {staticClass: "mt-4"}, [
                                            _vm._v("currentPage: " + _vm._s(_vm.currentPage))
                                        ])
                                    ],
                                    1
                                )
                            ]
                        )
                    ],
                    1
                )
            ])
        }
        var staticRenderFns = []
        render._withStripped = true
        module.exports = {render: render, staticRenderFns: staticRenderFns}
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-173dae9a", module.exports)
            }
        }

        /***/
    }),

    /***/ 982:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false
        var normalizeComponent = __webpack_require__(25)
        /* script */
        var __vue_script__ = __webpack_require__(1494)
        /* template */
        var __vue_template__ = __webpack_require__(1495)
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
        Component.options.__file = "resources/assets/js/Admin/components/views/base/Paginations.vue"

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-173dae9a", Component.options)
                } else {
                    hotAPI.reload("data-v-173dae9a", Component.options)
                }
                module.hot.dispose(function (data) {
                    disposed = true
                })
            })()
        }

        module.exports = Component.exports


        /***/
    })

});
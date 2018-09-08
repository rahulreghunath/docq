webpackJsonp([31], {

    /***/ 1459:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            name: 'tooltips',
            data: function data() {
                return {
                    show: true,
                    disabled: false
                };
            },

            methods: {
                onOpen: function onOpen() {
                    this.$refs.tooltip.$emit('open');
                },
                onClose: function onClose() {
                    this.$refs.tooltip.$emit('close');
                },
                disableByRef: function disableByRef() {
                    if (this.disabled) {
                        this.$refs.tooltip2.$emit('enable');
                    } else {
                        this.$refs.tooltip2.$emit('disable');
                    }
                }
            }
        });

        /***/
    }),

    /***/ 1460:
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
                                    _c("strong", [_vm._v("Bootstrap Tooltips")]),
                                    _c("small", [
                                        _c("code", [_vm._v("v-b-tooltip")]),
                                        _vm._v("directive")
                                    ]),
                                    _vm._v(" "),
                                    _c("div", {staticClass: "card-header-actions"}, [
                                        _c(
                                            "a",
                                            {
                                                staticClass: "card-header-action",
                                                attrs: {
                                                    href:
                                                        "https://bootstrap-vue.js.org/docs/components/tooltip",
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
                                    "b-row",
                                    [
                                        _c("b-col", {attrs: {cols: "6"}}, [
                                            _c(
                                                "div",
                                                {staticClass: "text-center my-3"},
                                                [
                                                    _c(
                                                        "b-btn",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "b-tooltip",
                                                                    rawName: "v-b-tooltip.hover",
                                                                    modifiers: {hover: true}
                                                                }
                                                            ],
                                                            attrs: {title: "I am a tooltip!"}
                                                        },
                                                        [_vm._v("Hover Me")]
                                                    )
                                                ],
                                                1
                                            )
                                        ]),
                                        _vm._v(" "),
                                        _c("b-col", {attrs: {cols: "6"}}, [
                                            _c(
                                                "div",
                                                {staticClass: "text-center my-3"},
                                                [
                                                    _c(
                                                        "b-btn",
                                                        {
                                                            attrs: {id: "tooltipButton-2", variant: "primary"}
                                                        },
                                                        [_vm._v("Button")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                        "b-tooltip",
                                                        {attrs: {show: "", target: "tooltipButton-2"}},
                                                        [_vm._v("\n              I start open\n            ")]
                                                    )
                                                ],
                                                1
                                            )
                                        ])
                                    ],
                                    1
                                )
                            ],
                            1
                        ),
                        _vm._v(" "),
                        _c(
                            "b-card",
                            {attrs: {"header-tag": "header", "footer-tag": "footer"}},
                            [
                                _c("div", {attrs: {slot: "header"}, slot: "header"}, [
                                    _c("i", {staticClass: "fa fa-align-justify"}),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Tooltips")]),
                                    _c("small", [
                                        _c("code", [_vm._v("b-tooltip")]),
                                        _vm._v("component")
                                    ])
                                ]),
                                _vm._v(" "),
                                _c(
                                    "b-row",
                                    [
                                        _c(
                                            "b-col",
                                            {staticClass: "py-4 text-center", attrs: {md: "6"}},
                                            [
                                                _c(
                                                    "b-btn",
                                                    {
                                                        attrs: {id: "exButton1", variant: "outline-success"}
                                                    },
                                                    [_vm._v("Live chat")]
                                                )
                                            ],
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "b-col",
                                            {staticClass: "py-4 text-center", attrs: {md: "6"}},
                                            [
                                                _c(
                                                    "b-btn",
                                                    {
                                                        attrs: {id: "exButton2", variant: "outline-success"}
                                                    },
                                                    [_vm._v("Html chat")]
                                                )
                                            ],
                                            1
                                        )
                                    ],
                                    1
                                ),
                                _vm._v(" "),
                                _c("b-tooltip", {
                                    attrs: {target: "exButton1", title: "Online!"}
                                }),
                                _vm._v(" "),
                                _c(
                                    "b-tooltip",
                                    {attrs: {target: "exButton2", placement: "bottom"}},
                                    [_vm._v("\n        Hello "), _c("strong", [_vm._v("World!")])]
                                )
                            ],
                            1
                        ),
                        _vm._v(" "),
                        _c(
                            "b-card",
                            {attrs: {"header-tag": "header", "footer-tag": "footer"}},
                            [
                                _c("div", {attrs: {slot: "header"}, slot: "header"}, [
                                    _c("i", {staticClass: "fa fa-align-justify"}),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Tooltips")]),
                                    _c("small", [_c("code", [_vm._v("show")]), _vm._v("prop")])
                                ]),
                                _vm._v(" "),
                                _c(
                                    "div",
                                    {staticClass: "text-center"},
                                    [
                                        _c(
                                            "b-btn",
                                            {attrs: {id: "tooltipButton-1", variant: "primary"}},
                                            [_vm._v("I have a tooltip")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c(
                                            "b-btn",
                                            {
                                                on: {
                                                    click: function ($event) {
                                                        _vm.show = !_vm.show
                                                    }
                                                }
                                            },
                                            [_vm._v("Toggle Tooltip")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "b-tooltip",
                                            {
                                                attrs: {
                                                    show: _vm.show,
                                                    target: "tooltipButton-1",
                                                    placement: "top"
                                                },
                                                on: {
                                                    "update:show": function ($event) {
                                                        _vm.show = $event
                                                    }
                                                }
                                            },
                                            [
                                                _vm._v("\n          Hello "),
                                                _c("strong", [_vm._v("World!")])
                                            ]
                                        )
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
                                    _c("strong", [_vm._v("Tooltips")]),
                                    _c("small", [
                                        _c("code", [_vm._v("open close")]),
                                        _vm._v("events")
                                    ])
                                ]),
                                _vm._v(" "),
                                _c(
                                    "div",
                                    {staticClass: "d-flex flex-column text-md-center"},
                                    [
                                        _c(
                                            "div",
                                            {staticClass: "p-2"},
                                            [
                                                _c(
                                                    "b-btn",
                                                    {
                                                        attrs: {
                                                            id: "tooltipButton-showEvent",
                                                            variant: "primary"
                                                        }
                                                    },
                                                    [_vm._v("I have a tooltip")]
                                                )
                                            ],
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "div",
                                            {staticClass: "p-2"},
                                            [
                                                _c(
                                                    "b-btn",
                                                    {staticClass: "px-1", on: {click: _vm.onOpen}},
                                                    [_vm._v("Open")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "b-btn",
                                                    {staticClass: "px-1", on: {click: _vm.onClose}},
                                                    [_vm._v("Close")]
                                                )
                                            ],
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "b-tooltip",
                                            {
                                                ref: "tooltip",
                                                attrs: {target: "tooltipButton-showEvent"}
                                            },
                                            [
                                                _vm._v("\n          Hello "),
                                                _c("strong", [_vm._v("World!")])
                                            ]
                                        )
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
                                    _c("strong", [_vm._v("Tooltips")]),
                                    _c("small", [
                                        _c("code", [_vm._v("enable disable")]),
                                        _vm._v("events")
                                    ])
                                ]),
                                _vm._v(" "),
                                _c("div", {staticClass: "d-flex flex-column text-md-center"}, [
                                    _c(
                                        "div",
                                        {staticClass: "p-2"},
                                        [
                                            _c(
                                                "b-btn",
                                                {
                                                    attrs: {id: "tooltipButton-disable", variant: "primary"}
                                                },
                                                [_vm._v("I have a tooltip")]
                                            )
                                        ],
                                        1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                        "div",
                                        {staticClass: "p-2"},
                                        [
                                            _c(
                                                "b-btn",
                                                {
                                                    on: {
                                                        click: function ($event) {
                                                            _vm.disabled = !_vm.disabled
                                                        }
                                                    }
                                                },
                                                [
                                                    _vm._v(
                                                        "\n            " +
                                                        _vm._s(_vm.disabled ? "Enable" : "Disable") +
                                                        " Tooltip by prop\n          "
                                                    )
                                                ]
                                            ),
                                            _vm._v(" "),
                                            _c("b-btn", {on: {click: _vm.disableByRef}}, [
                                                _vm._v(
                                                    "\n            " +
                                                    _vm._s(_vm.disabled ? "Enable" : "Disable") +
                                                    " Tooltip by $ref event\n          "
                                                )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                                "b-tooltip",
                                                {
                                                    ref: "tooltip2",
                                                    attrs: {
                                                        disabled: _vm.disabled,
                                                        target: "tooltipButton-disable"
                                                    },
                                                    on: {
                                                        "update:disabled": function ($event) {
                                                            _vm.disabled = $event
                                                        }
                                                    }
                                                },
                                                [
                                                    _vm._v("\n            Hello "),
                                                    _c("strong", [_vm._v("World!")])
                                                ]
                                            )
                                        ],
                                        1
                                    )
                                ])
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
                require("vue-hot-reload-api").rerender("data-v-9d5427b4", module.exports)
            }
        }

        /***/
    }),

    /***/ 944:
    /***/ (function (module, exports, __webpack_require__) {

        var disposed = false
        var normalizeComponent = __webpack_require__(148)
        /* script */
        var __vue_script__ = __webpack_require__(1459)
        /* template */
        var __vue_template__ = __webpack_require__(1460)
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
        Component.options.__file = "resources/assets/js/Admin/components/views/base/Tooltips.vue"

        /* hot reload */
        if (false) {
            (function () {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-9d5427b4", Component.options)
                } else {
                    hotAPI.reload("data-v-9d5427b4", Component.options)
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
webpackJsonp([17],{

/***/ 1802:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1803);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("db452d1e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92bb47fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92bb47fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-92bb47fe] {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.fade-leave-active[data-v-92bb47fe] {\n  -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.fade-enter[data-v-92bb47fe], .fade-leave-to[data-v-92bb47fe] {\n  -webkit-transform: translateX(10px);\n          transform: translateX(10px);\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1804:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'cards',
  data: function data() {
    return {
      show: true
    };
  }
});

/***/ }),

/***/ 1805:
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { attrs: { header: "Card title" } }, [
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { attrs: { "show-footer": "" } }, [
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        "
                ),
                _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                  _vm._v("Card footer")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "<i class='fa fa-check'></i> Card with icon"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                  _vm._v("\n          Card with switch\n          "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "switch switch-sm switch-text switch-info float-right mb-0"
                    },
                    [
                      _c("input", {
                        staticClass: "switch-input",
                        attrs: { type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "switch-label",
                        attrs: { "data-on": "On", "data-off": "Off" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "switch-handle" })
                    ]
                  )
                ]),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  { attrs: { slot: "header" }, slot: "header" },
                  [
                    _vm._v("\n          Card with label\n          "),
                    _c(
                      "b-badge",
                      {
                        staticClass: "float-right",
                        attrs: { variant: "success" }
                      },
                      [_vm._v("Success")]
                    )
                  ],
                  1
                ),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  { attrs: { slot: "header" }, slot: "header" },
                  [
                    _vm._v("\n          Card with label\n          "),
                    _c(
                      "b-badge",
                      {
                        staticClass: "float-right",
                        attrs: { pill: "", variant: "danger" }
                      },
                      [_vm._v("42")]
                    )
                  ],
                  1
                ),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline primary",
                    "border-variant": "primary"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline secondary",
                    "border-variant": "secondary"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline success",
                    "border-variant": "success"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline info",
                    "border-variant": "info"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline warning",
                    "border-variant": "warning"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline danger",
                    "border-variant": "danger"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-primary",
                  attrs: { header: "Card with primary accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-secondary",
                  attrs: { header: "Card with secondary accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-success",
                  attrs: { header: "Card with success accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-info",
                  attrs: { header: "Card with info accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-warning",
                  attrs: { header: "Card with warning accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-danger",
                  attrs: { header: "Card with danger accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-primary text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-success text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-info text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-warning text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-danger text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-secondary text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-primary", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-success", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-info", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-warning", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-danger", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.show
                    ? _c(
                        "b-card",
                        {
                          staticClass: "bg-secondary",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [
                              _vm._v(
                                "\n            Card with header actions\n            "
                              ),
                              _c(
                                "div",
                                { staticClass: "card-header-actions" },
                                [
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "card-header-action btn-setting",
                                      attrs: { href: "#" }
                                    },
                                    [_c("i", { staticClass: "icon-settings" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-link",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.collapse1",
                                          modifiers: { collapse1: true }
                                        }
                                      ],
                                      staticClass:
                                        "card-header-action btn-minimize"
                                    },
                                    [_c("i", { staticClass: "icon-arrow-up" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "card-header-action btn-close",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.show = !_vm.show
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "icon-close" })]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            { attrs: { id: "collapse1", visible: "" } },
                            [
                              _c("b-card-body", [
                                _vm._v(
                                  "\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-92bb47fe", module.exports)
  }
}

/***/ }),

/***/ 2034:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2035);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("669d1af4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da71af06\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da71af06\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2035:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-da71af06] {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.fade-leave-active[data-v-da71af06] {\n  -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.fade-enter[data-v-da71af06], .fade-leave-to[data-v-da71af06] {\n  -webkit-transform: translateX(10px);\n          transform: translateX(10px);\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 2036:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'cards',
  data: function data() {
    return {
      show: true
    };
  }
});

/***/ }),

/***/ 2037:
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { attrs: { header: "Card title" } }, [
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { attrs: { "show-footer": "" } }, [
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        "
                ),
                _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                  _vm._v("Card footer")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "<i class='fa fa-check'></i> Card with icon"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                  _vm._v("\n          Card with switch\n          "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "switch switch-sm switch-text switch-info float-right mb-0"
                    },
                    [
                      _c("input", {
                        staticClass: "switch-input",
                        attrs: { type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "switch-label",
                        attrs: { "data-on": "On", "data-off": "Off" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "switch-handle" })
                    ]
                  )
                ]),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  { attrs: { slot: "header" }, slot: "header" },
                  [
                    _vm._v("\n          Card with label\n          "),
                    _c(
                      "b-badge",
                      {
                        staticClass: "float-right",
                        attrs: { variant: "success" }
                      },
                      [_vm._v("Success")]
                    )
                  ],
                  1
                ),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  { attrs: { slot: "header" }, slot: "header" },
                  [
                    _vm._v("\n          Card with label\n          "),
                    _c(
                      "b-badge",
                      {
                        staticClass: "float-right",
                        attrs: { pill: "", variant: "danger" }
                      },
                      [_vm._v("42")]
                    )
                  ],
                  1
                ),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline primary",
                    "border-variant": "primary"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline secondary",
                    "border-variant": "secondary"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline success",
                    "border-variant": "success"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline info",
                    "border-variant": "info"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline warning",
                    "border-variant": "warning"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Card outline danger",
                    "border-variant": "danger"
                  }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-primary",
                  attrs: { header: "Card with primary accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-secondary",
                  attrs: { header: "Card with secondary accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-success",
                  attrs: { header: "Card with success accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-info",
                  attrs: { header: "Card with info accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-warning",
                  attrs: { header: "Card with warning accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card-accent-danger",
                  attrs: { header: "Card with danger accent" }
                },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-primary text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-success text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-info text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-warning text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-danger text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", { staticClass: "bg-secondary text-center" }, [
                _c("blockquote", { staticClass: "card-blockquote" }, [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", [
                    _vm._v("Someone famous in\n            "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ])
              ])
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
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-primary", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-success", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-info", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-warning", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "bg-danger", attrs: { header: "Card title" } },
                [
                  _vm._v(
                    "\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", md: "4" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.show
                    ? _c(
                        "b-card",
                        {
                          staticClass: "bg-secondary",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [
                              _vm._v(
                                "\n            Card with header actions\n            "
                              ),
                              _c(
                                "div",
                                { staticClass: "card-header-actions" },
                                [
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "card-header-action btn-setting",
                                      attrs: { href: "#" }
                                    },
                                    [_c("i", { staticClass: "icon-settings" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-link",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.collapse1",
                                          modifiers: { collapse1: true }
                                        }
                                      ],
                                      staticClass:
                                        "card-header-action btn-minimize"
                                    },
                                    [_c("i", { staticClass: "icon-arrow-up" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "card-header-action btn-close",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.show = !_vm.show
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "icon-close" })]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            { attrs: { id: "collapse1", visible: "" } },
                            [
                              _c("b-card-body", [
                                _vm._v(
                                  "\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-da71af06", module.exports)
  }
}

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1802)
}
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(1804)
/* template */
var __vue_template__ = __webpack_require__(1805)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-92bb47fe"
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
Component.options.__file = "resources/assets/js/Doctor/components/views/base/Cards.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92bb47fe", Component.options)
  } else {
    hotAPI.reload("data-v-92bb47fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2034)
}
var normalizeComponent = __webpack_require__(25)
/* script */
var __vue_script__ = __webpack_require__(2036)
/* template */
var __vue_template__ = __webpack_require__(2037)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-da71af06"
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
Component.options.__file = "resources/assets/js/Admin/components/views/base/Cards.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da71af06", Component.options)
  } else {
    hotAPI.reload("data-v-da71af06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
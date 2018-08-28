webpackJsonp([25],{

/***/ 1197:
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
  name: 'dropdowns'
});

/***/ }),

/***/ 1198:
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
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Bootstrap Dropdown")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-header-actions" }, [
                        _c(
                          "a",
                          {
                            staticClass: "card-header-action",
                            attrs: {
                              href:
                                "https://bootstrap-vue.js.org/docs/components/dropdown",
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
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: { id: "ddown1", text: "Dropdown Button" }
                          },
                          [
                            _c("b-dropdown-item", [_vm._v("First Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-item", [_vm._v("Second Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-item", [_vm._v("Third Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c("b-dropdown-item", [
                              _vm._v("Something else here...")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { disabled: "" } }, [
                              _vm._v("Disabled action")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-buttons",
                              text: "Dropdown using buttons as menu items"
                            }
                          },
                          [
                            _c("b-dropdown-item-button", [
                              _vm._v("I'm a button")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("I'm also a button")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item-button",
                              { attrs: { disabled: "" } },
                              [_vm._v("I'm a button, but disabled!")]
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("I don't look like a button, but I am!")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-divider",
                              text: "Dropdown with divider"
                            }
                          },
                          [
                            _c("b-dropdown-item-button", [
                              _vm._v("First item")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Second item")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Separated Item")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-header",
                              text: "Dropdown with header"
                            }
                          },
                          [
                            _c("b-dropdown-header", [
                              _vm._v("Dropdown header")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("First item")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Second Item")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Dropdown")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("positioning")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-left",
                              text: "Left align",
                              variant: "primary"
                            }
                          },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Something else here")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-right",
                              right: "",
                              text: "Right align",
                              variant: "primary"
                            }
                          },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Something else here")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-dropup",
                              dropup: "",
                              text: "Drop-Up",
                              variant: "info"
                            }
                          },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Something else here")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-offset",
                              offset: "25",
                              text: "Offset Dropdown"
                            }
                          },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Something else here")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-split",
                              split: "",
                              text: "Split Dropdown"
                            }
                          },
                          [
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Something else here...")
                            ])
                          ],
                          1
                        )
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
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Dropdown")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("hidden caret")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              variant: "link",
                              size: "lg",
                              "no-caret": ""
                            }
                          },
                          [
                            _c("template", { slot: "button-content" }, [
                              _vm._v("\n                🔍"),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Search")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item", { attrs: { href: "#" } }, [
                              _vm._v("Something else here...")
                            ])
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Dropdown")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("sizing")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: { id: "ddown-lg", size: "lg", text: "Large" }
                          },
                          [
                            _c("b-dropdown-item-button", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Something else here")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-lg-split",
                              size: "lg",
                              split: "",
                              text: "Large Split"
                            }
                          },
                          [
                            _c("b-dropdown-item-button", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Something else here...")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: { id: "ddown-sm", size: "sm", text: "Small" }
                          },
                          [
                            _c("b-dropdown-item-button", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Something else here...")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-sm-split",
                              size: "sm",
                              split: "",
                              text: "Small Split"
                            }
                          },
                          [
                            _c("b-dropdown-item-button", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Another action")
                            ]),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Something else here...")
                            ])
                          ],
                          1
                        )
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
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Dropdown")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("headers and accessibility")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-dropdown",
                          {
                            staticClass: "m-2",
                            attrs: {
                              id: "ddown-aria",
                              text: "Dropdown ARIA",
                              variant: "primary"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                attrs: {
                                  role: "group",
                                  "aria-lableledby": "header1"
                                }
                              },
                              [
                                _c(
                                  "b-dropdown-header",
                                  { attrs: { id: "header1" } },
                                  [_vm._v("Groups")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item-button",
                                  { attrs: { "aria-describedby": "header1" } },
                                  [_vm._v("Add")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item-button",
                                  { attrs: { "aria-describedby": "header1" } },
                                  [_vm._v("Delete")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                attrs: {
                                  role: "group",
                                  "aria-lableledby": "header2"
                                }
                              },
                              [
                                _c(
                                  "b-dropdown-header",
                                  { attrs: { id: "header2" } },
                                  [_vm._v("Users")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item-button",
                                  { attrs: { "aria-describedby": "header2" } },
                                  [_vm._v("Add")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item-button",
                                  { attrs: { "aria-describedby": "header2" } },
                                  [_vm._v("Delete")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-dropdown-divider"),
                            _vm._v(" "),
                            _c("b-dropdown-item-button", [
                              _vm._v("Something "),
                              _c("strong", [_vm._v("not")]),
                              _vm._v(" associated with user")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12", md: "6" } },
              [
                _c(
                  "b-card",
                  { attrs: { "header-tag": "header", "footer-tag": "footer" } },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("i", { staticClass: "fa fa-align-justify" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Dropdown")]),
                      _vm._v(" "),
                      _c("small", [_c("code", [_vm._v("variant")])])
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_primary",
                          text: "Primary",
                          variant: "primary"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_secondary",
                          text: "Secondary",
                          variant: "secondary"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_success",
                          text: "Success",
                          variant: "success"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_warning",
                          text: "Warning",
                          variant: "warning"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_danger",
                          text: "Danger",
                          variant: "danger"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_info",
                          text: "Info",
                          variant: "info"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_light",
                          text: "Light",
                          variant: "light"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_dark",
                          text: "Dark",
                          variant: "dark"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-0",
                        attrs: {
                          size: "sm",
                          id: "ddown_link",
                          text: "Link",
                          variant: "link"
                        }
                      },
                      [
                        _c("b-dropdown-item", [_vm._v("First Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Second Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Third Action")])
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7030240c", module.exports)
  }
}

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(127)
/* script */
var __vue_script__ = __webpack_require__(1197)
/* template */
var __vue_template__ = __webpack_require__(1198)
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
Component.options.__file = "resources/assets/js/Admin/components/views/buttons/Dropdowns.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7030240c", Component.options)
  } else {
    hotAPI.reload("data-v-7030240c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
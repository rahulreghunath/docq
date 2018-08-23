webpackJsonp([8],{

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("56a98116", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b58f4b40\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BrandButtons.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b58f4b40\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BrandButtons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.btn[data-v-b58f4b40] {\n  margin-bottom: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1198:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'social-buttons'
});

/***/ }),

/***/ 1199:
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
            { attrs: { cols: "12" } },
            [
              _c("b-card", [
                _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                  _c("strong", [_vm._v("Brand Button")]),
                  _vm._v(" "),
                  _c("small", [_vm._v("Usage ex.")]),
                  _c(
                    "code",
                    { staticStyle: { "text-transform": "lowercase" } },
                    [
                      _vm._v(
                        '<b-button variant="facebook"><span>Facebook</span></b-button>'
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("h6", [
                  _vm._v("Size Small "),
                  _c("small", [
                    _vm._v("Add this "),
                    _c("code", [_vm._v('size="sm"')])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "facebook" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-facebook" }),
                        _c("span", [_vm._v("Facebook")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "twitter" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-twitter" }),
                        _c("span", [_vm._v("Twitter")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "linkedin" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-linkedin" }),
                        _c("span", [_vm._v("LinkedIn")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "flickr" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-flickr" }),
                        _c("span", [_vm._v("Flickr")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "tumblr" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-tumblr" }),
                        _c("span", [_vm._v("Tumblr")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "xing" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-xing" }),
                        _c("span", [_vm._v("Xing")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "github" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-github" }),
                        _c("span", [_vm._v("Github")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "html5" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-html5" }),
                        _c("span", [_vm._v("HTML5")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "openid" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-openid" }),
                        _c("span", [_vm._v("OpenID")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "stack-overflow" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-stack-overflow" }),
                        _c("span", [_vm._v("StackOverflow")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "css3" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-css3" }),
                        _c("span", [_vm._v("CSS3")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "youtube" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-youtube" }),
                        _c("span", [_vm._v("YouTube")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "dribbble" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-dribbble" }),
                        _c("span", [_vm._v("Dribbble")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "google-plus" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-google-plus" }),
                        _c("span", [_vm._v("Google+")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "instagram" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-instagram" }),
                        _c("span", [_vm._v("Instagram")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "pinterest" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-pinterest" }),
                        _c("span", [_vm._v("Pinterest")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vk" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vk" }),
                        _c("span", [_vm._v("VK")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "yahoo" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-yahoo" }),
                        _c("span", [_vm._v("Yahoo")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "behance" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-behance" }),
                        _c("span", [_vm._v("Behance")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "dropbox" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-dropbox" }),
                        _c("span", [_vm._v("Dropbox")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "reddit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-reddit" }),
                        _c("span", [_vm._v("Reddit")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "spotify" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-spotify" }),
                        _c("span", [_vm._v("Spotify")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vine" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vine" }),
                        _c("span", [_vm._v("Vine")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "foursquare" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-foursquare" }),
                        _c("span", [_vm._v("Forsquare")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vimeo" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vimeo" }),
                        _c("span", [_vm._v("Vimeo")])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h6", [_vm._v("Size Normal")]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "facebook" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-facebook" }),
                        _c("span", [_vm._v("Facebook")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "twitter" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-twitter" }),
                        _c("span", [_vm._v("Twitter")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "linkedin" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-linkedin" }),
                        _c("span", [_vm._v("LinkedIn")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "flickr" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-flickr" }),
                        _c("span", [_vm._v("Flickr")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "tumblr" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-tumblr" }),
                        _c("span", [_vm._v("Tumblr")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "xing" } },
                      [
                        _c("i", { staticClass: "fa fa-xing" }),
                        _c("span", [_vm._v("Xing")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "github" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-github" }),
                        _c("span", [_vm._v("Github")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "html5" } },
                      [
                        _c("i", { staticClass: "fa fa-html5" }),
                        _c("span", [_vm._v("HTML5")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "openid" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-openid" }),
                        _c("span", [_vm._v("OpenID")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "stack-overflow" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-stack-overflow" }),
                        _c("span", [_vm._v("StackOverflow")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "css3" } },
                      [
                        _c("i", { staticClass: "fa fa-css3" }),
                        _c("span", [_vm._v("CSS3")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "youtube" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-youtube" }),
                        _c("span", [_vm._v("YouTube")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "dribbble" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-dribbble" }),
                        _c("span", [_vm._v("Dribbble")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "google-plus" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-google-plus" }),
                        _c("span", [_vm._v("Google+")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "instagram" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-instagram" }),
                        _c("span", [_vm._v("Instagram")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "pinterest" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-pinterest" }),
                        _c("span", [_vm._v("Pinterest")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "vk" } },
                      [
                        _c("i", { staticClass: "fa fa-vk" }),
                        _c("span", [_vm._v("VK")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "yahoo" } },
                      [
                        _c("i", { staticClass: "fa fa-yahoo" }),
                        _c("span", [_vm._v("Yahoo")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "behance" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-behance" }),
                        _c("span", [_vm._v("Behance")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "dropbox" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-dropbox" }),
                        _c("span", [_vm._v("Dropbox")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "reddit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-reddit" }),
                        _c("span", [_vm._v("Reddit")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "spotify" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-spotify" }),
                        _c("span", [_vm._v("Spotify")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "vine" } },
                      [
                        _c("i", { staticClass: "fa fa-vine" }),
                        _c("span", [_vm._v("Vine")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "foursquare" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-foursquare" }),
                        _c("span", [_vm._v("Forsquare")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      { staticClass: "btn-brand", attrs: { variant: "vimeo" } },
                      [
                        _c("i", { staticClass: "fa fa-vimeo" }),
                        _c("span", [_vm._v("Vimeo")])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h6", [
                  _vm._v("Size Large "),
                  _c("small", [
                    _vm._v("Add this "),
                    _c("code", [_vm._v('size="lg"')])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "facebook" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-facebook" }),
                        _c("span", [_vm._v("Facebook")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "twitter" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-twitter" }),
                        _c("span", [_vm._v("Twitter")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "linkedin" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-linkedin" }),
                        _c("span", [_vm._v("LinkedIn")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "flickr" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-flickr" }),
                        _c("span", [_vm._v("Flickr")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "tumblr" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-tumblr" }),
                        _c("span", [_vm._v("Tumblr")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "xing" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-xing" }),
                        _c("span", [_vm._v("Xing")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "github" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-github" }),
                        _c("span", [_vm._v("Github")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "html5" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-html5" }),
                        _c("span", [_vm._v("HTML5")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "openid" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-openid" }),
                        _c("span", [_vm._v("OpenID")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "stack-overflow" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-stack-overflow" }),
                        _c("span", [_vm._v("StackOverflow")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "css3" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-css3" }),
                        _c("span", [_vm._v("CSS3")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "youtube" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-youtube" }),
                        _c("span", [_vm._v("YouTube")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "dribbble" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-dribbble" }),
                        _c("span", [_vm._v("Dribbble")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "google-plus" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-google-plus" }),
                        _c("span", [_vm._v("Google+")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "instagram" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-instagram" }),
                        _c("span", [_vm._v("Instagram")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "pinterest" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-pinterest" }),
                        _c("span", [_vm._v("Pinterest")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vk" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vk" }),
                        _c("span", [_vm._v("VK")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "yahoo" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-yahoo" }),
                        _c("span", [_vm._v("Yahoo")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "behance" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-behance" }),
                        _c("span", [_vm._v("Behance")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "dropbox" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-dropbox" }),
                        _c("span", [_vm._v("Dropbox")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "reddit" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-reddit" }),
                        _c("span", [_vm._v("Reddit")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "spotify" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-spotify" }),
                        _c("span", [_vm._v("Spotify")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vine" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vine" }),
                        _c("span", [_vm._v("Vine")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "foursquare" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-foursquare" }),
                        _c("span", [_vm._v("Forsquare")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vimeo" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vimeo" }),
                        _c("span", [_vm._v("Vimeo")])
                      ]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c("b-card", [
                _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                  _c("strong", [_vm._v("Brand Button")]),
                  _vm._v(" "),
                  _c("small", [_vm._v("Only icons. Usage ex.")]),
                  _vm._v(" "),
                  _c(
                    "code",
                    { staticStyle: { "text-transform": "lowercase" } },
                    [
                      _vm._v(
                        '<b-button variant="facebook icon"><span>Facebook</span></b-button>'
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("h6", [
                  _vm._v("Size Small "),
                  _c("small", [
                    _vm._v("Add this "),
                    _c("code", [_vm._v('size="sm"')])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "facebook icon" }
                      },
                      [_c("i", { staticClass: "fa fa-facebook" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "twitter icon" }
                      },
                      [_c("i", { staticClass: "fa fa-twitter" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "linkedin icon" }
                      },
                      [_c("i", { staticClass: "fa fa-linkedin" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "flickr icon" }
                      },
                      [_c("i", { staticClass: "fa fa-flickr" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "tumblr icon" }
                      },
                      [_c("i", { staticClass: "fa fa-tumblr" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "xing icon" }
                      },
                      [_c("i", { staticClass: "fa fa-xing" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "github icon" }
                      },
                      [_c("i", { staticClass: "fa fa-github" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "html5 icon" }
                      },
                      [_c("i", { staticClass: "fa fa-html5" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "openid icon" }
                      },
                      [_c("i", { staticClass: "fa fa-openid" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "stack-overflow icon" }
                      },
                      [_c("i", { staticClass: "fa fa-stack-overflow" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "css3 icon" }
                      },
                      [_c("i", { staticClass: "fa fa-css3" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "youtube icon" }
                      },
                      [_c("i", { staticClass: "fa fa-youtube" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "dribbble icon" }
                      },
                      [_c("i", { staticClass: "fa fa-dribbble" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "google-plus icon" }
                      },
                      [_c("i", { staticClass: "fa fa-google-plus" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "instagram icon" }
                      },
                      [_c("i", { staticClass: "fa fa-instagram" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "pinterest icon" }
                      },
                      [_c("i", { staticClass: "fa fa-pinterest" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vk icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vk" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "yahoo icon" }
                      },
                      [_c("i", { staticClass: "fa fa-yahoo" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "behance icon" }
                      },
                      [_c("i", { staticClass: "fa fa-behance" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "dropbox icon" }
                      },
                      [_c("i", { staticClass: "fa fa-dropbox" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "reddit icon" }
                      },
                      [_c("i", { staticClass: "fa fa-reddit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "spotify icon" }
                      },
                      [_c("i", { staticClass: "fa fa-spotify" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vine icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vine" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "foursquare icon" }
                      },
                      [_c("i", { staticClass: "fa fa-foursquare" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vimeo icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vimeo" })]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h6", [_vm._v("Size Normal")]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "facebook icon" }
                      },
                      [_c("i", { staticClass: "fa fa-facebook" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "twitter icon" }
                      },
                      [_c("i", { staticClass: "fa fa-twitter" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "linkedin icon" }
                      },
                      [_c("i", { staticClass: "fa fa-linkedin" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "flickr icon" }
                      },
                      [_c("i", { staticClass: "fa fa-flickr" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "tumblr icon" }
                      },
                      [_c("i", { staticClass: "fa fa-tumblr" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "xing icon" }
                      },
                      [_c("i", { staticClass: "fa fa-xing" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "github icon" }
                      },
                      [_c("i", { staticClass: "fa fa-github" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "html5 icon" }
                      },
                      [_c("i", { staticClass: "fa fa-html5" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "openid icon" }
                      },
                      [_c("i", { staticClass: "fa fa-openid" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "stack-overflow icon" }
                      },
                      [_c("i", { staticClass: "fa fa-stack-overflow" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "css3 icon" }
                      },
                      [_c("i", { staticClass: "fa fa-css3" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "youtube icon" }
                      },
                      [_c("i", { staticClass: "fa fa-youtube" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "dribbble icon" }
                      },
                      [_c("i", { staticClass: "fa fa-dribbble" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "google-plus icon" }
                      },
                      [_c("i", { staticClass: "fa fa-google-plus" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "instagram icon" }
                      },
                      [_c("i", { staticClass: "fa fa-instagram" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "pinterest icon" }
                      },
                      [_c("i", { staticClass: "fa fa-pinterest" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "vk icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vk" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "yahoo icon" }
                      },
                      [_c("i", { staticClass: "fa fa-yahoo" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "behance icon" }
                      },
                      [_c("i", { staticClass: "fa fa-behance" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "dropbox icon" }
                      },
                      [_c("i", { staticClass: "fa fa-dropbox" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "reddit icon" }
                      },
                      [_c("i", { staticClass: "fa fa-reddit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "spotify icon" }
                      },
                      [_c("i", { staticClass: "fa fa-spotify" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "vine icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vine" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "foursquare icon" }
                      },
                      [_c("i", { staticClass: "fa fa-foursquare" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "vimeo icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vimeo" })]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h6", [
                  _vm._v("Size Large "),
                  _c("small", [
                    _vm._v("Add this "),
                    _c("code", [_vm._v('size="lg"')])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "facebook icon" }
                      },
                      [_c("i", { staticClass: "fa fa-facebook" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "twitter icon" }
                      },
                      [_c("i", { staticClass: "fa fa-twitter" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "linkedin icon" }
                      },
                      [_c("i", { staticClass: "fa fa-linkedin" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "flickr icon" }
                      },
                      [_c("i", { staticClass: "fa fa-flickr" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "tumblr icon" }
                      },
                      [_c("i", { staticClass: "fa fa-tumblr" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "xing icon" }
                      },
                      [_c("i", { staticClass: "fa fa-xing" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "github icon" }
                      },
                      [_c("i", { staticClass: "fa fa-github" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "html5 icon" }
                      },
                      [_c("i", { staticClass: "fa fa-html5" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "openid icon" }
                      },
                      [_c("i", { staticClass: "fa fa-openid" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "stack-overflow icon" }
                      },
                      [_c("i", { staticClass: "fa fa-stack-overflow" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "css3 icon" }
                      },
                      [_c("i", { staticClass: "fa fa-css3" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "youtube icon" }
                      },
                      [_c("i", { staticClass: "fa fa-youtube" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "dribbble icon" }
                      },
                      [_c("i", { staticClass: "fa fa-dribbble" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "google-plus icon" }
                      },
                      [_c("i", { staticClass: "fa fa-google-plus" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "instagram icon" }
                      },
                      [_c("i", { staticClass: "fa fa-instagram" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "pinterest icon" }
                      },
                      [_c("i", { staticClass: "fa fa-pinterest" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vk icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vk" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "yahoo icon" }
                      },
                      [_c("i", { staticClass: "fa fa-yahoo" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "behance icon" }
                      },
                      [_c("i", { staticClass: "fa fa-behance" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "dropbox icon" }
                      },
                      [_c("i", { staticClass: "fa fa-dropbox" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "reddit icon" }
                      },
                      [_c("i", { staticClass: "fa fa-reddit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "spotify icon" }
                      },
                      [_c("i", { staticClass: "fa fa-spotify" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vine icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vine" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "foursquare icon" }
                      },
                      [_c("i", { staticClass: "fa fa-foursquare" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vimeo icon" }
                      },
                      [_c("i", { staticClass: "fa fa-vimeo" })]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c("b-card", [
                _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                  _c("strong", [_vm._v("Brand Button")]),
                  _vm._v(" "),
                  _c("small", [_vm._v("Only text. Usage ex.")]),
                  _vm._v(" "),
                  _c(
                    "code",
                    { staticStyle: { "text-transform": "lowercase" } },
                    [
                      _vm._v(
                        '<b-button variant="facebook text"><span>Facebook</span></b-button>'
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("h6", [
                  _vm._v("Size Small "),
                  _c("small", [
                    _vm._v("Add this "),
                    _c("code", [_vm._v('size="sm"')])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "facebook text" }
                      },
                      [_c("span", [_vm._v("Facebook")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "twitter text" }
                      },
                      [_c("span", [_vm._v("Twitter")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "linkedin text" }
                      },
                      [_c("span", [_vm._v("LinkedIn")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "flickr text" }
                      },
                      [_c("span", [_vm._v("Flickr")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "tumblr text" }
                      },
                      [_c("span", [_vm._v("Tumblr")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "xing text" }
                      },
                      [_c("span", [_vm._v("Xing")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "github text" }
                      },
                      [_c("span", [_vm._v("Github")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "html5 text" }
                      },
                      [_c("span", [_vm._v("HTML5")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "openid text" }
                      },
                      [_c("span", [_vm._v("OpenID")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "stack-overflow text" }
                      },
                      [_c("span", [_vm._v("StackOverflow")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "css3 text" }
                      },
                      [_c("span", [_vm._v("CSS3")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "youtube text" }
                      },
                      [_c("span", [_vm._v("YouTube")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "dribbble text" }
                      },
                      [_c("span", [_vm._v("Dribbble")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "google-plus text" }
                      },
                      [_c("span", [_vm._v("Google+")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "instagram text" }
                      },
                      [_c("span", [_vm._v("Instagram")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "pinterest text" }
                      },
                      [_c("span", [_vm._v("Pinterest")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vk text" }
                      },
                      [_c("span", [_vm._v("VK")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "yahoo text" }
                      },
                      [_c("span", [_vm._v("Yahoo")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "behance text" }
                      },
                      [_c("span", [_vm._v("Behance")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "dropbox text" }
                      },
                      [_c("span", [_vm._v("Dropbox")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "reddit text" }
                      },
                      [_c("span", [_vm._v("Reddit")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "spotify text" }
                      },
                      [_c("span", [_vm._v("Spotify")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vine text" }
                      },
                      [_c("span", [_vm._v("Vine")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "foursquare text" }
                      },
                      [_c("span", [_vm._v("Forsquare")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "sm", variant: "vimeo text" }
                      },
                      [_c("span", [_vm._v("Vimeo")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h6", [_vm._v("Size Normal")]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "facebook text" }
                      },
                      [_c("span", [_vm._v("Facebook")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "twitter text" }
                      },
                      [_c("span", [_vm._v("Twitter")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "linkedin text" }
                      },
                      [_c("span", [_vm._v("LinkedIn")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "flickr text" }
                      },
                      [_c("span", [_vm._v("Flickr")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "tumblr text" }
                      },
                      [_c("span", [_vm._v("Tumblr")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "xing text" }
                      },
                      [_c("span", [_vm._v("Xing")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "github text" }
                      },
                      [_c("span", [_vm._v("Github")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "html5 text" }
                      },
                      [_c("span", [_vm._v("HTML5")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "openid text" }
                      },
                      [_c("span", [_vm._v("OpenID")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "stack-overflow text" }
                      },
                      [_c("span", [_vm._v("StackOverflow")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "css3 text" }
                      },
                      [_c("span", [_vm._v("CSS3")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "youtube text" }
                      },
                      [_c("span", [_vm._v("YouTube")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "dribbble text" }
                      },
                      [_c("span", [_vm._v("Dribbble")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "google-plus text" }
                      },
                      [_c("span", [_vm._v("Google+")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "instagram text" }
                      },
                      [_c("span", [_vm._v("Instagram")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "pinterest text" }
                      },
                      [_c("span", [_vm._v("Pinterest")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "vk text" }
                      },
                      [_c("span", [_vm._v("VK")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "yahoo text" }
                      },
                      [_c("span", [_vm._v("Yahoo")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "behance text" }
                      },
                      [_c("span", [_vm._v("Behance")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "dropbox text" }
                      },
                      [_c("span", [_vm._v("Dropbox")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "reddit text" }
                      },
                      [_c("span", [_vm._v("Reddit")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "spotify text" }
                      },
                      [_c("span", [_vm._v("Spotify")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "vine text" }
                      },
                      [_c("span", [_vm._v("Vine")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "foursquare text" }
                      },
                      [_c("span", [_vm._v("Forsquare")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { variant: "vimeo text" }
                      },
                      [_c("span", [_vm._v("Vimeo")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h6", [
                  _vm._v("Size Large "),
                  _c("small", [
                    _vm._v("Add this "),
                    _c("code", [_vm._v('size="lg"')])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "facebook text" }
                      },
                      [_c("span", [_vm._v("Facebook")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "twitter text" }
                      },
                      [_c("span", [_vm._v("Twitter")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "linkedin text" }
                      },
                      [_c("span", [_vm._v("LinkedIn")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "flickr text" }
                      },
                      [_c("span", [_vm._v("Flickr")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "tumblr text" }
                      },
                      [_c("span", [_vm._v("Tumblr")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "xing text" }
                      },
                      [_c("span", [_vm._v("Xing")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "github text" }
                      },
                      [_c("span", [_vm._v("Github")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "html5 text" }
                      },
                      [_c("span", [_vm._v("HTML5")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "openid text" }
                      },
                      [_c("span", [_vm._v("OpenID")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "stack-overflow text" }
                      },
                      [_c("span", [_vm._v("StackOverflow")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "css3 text" }
                      },
                      [_c("span", [_vm._v("CSS3")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "youtube text" }
                      },
                      [_c("span", [_vm._v("YouTube")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "dribbble text" }
                      },
                      [_c("span", [_vm._v("Dribbble")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "google-plus text" }
                      },
                      [_c("span", [_vm._v("Google+")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "instagram text" }
                      },
                      [_c("span", [_vm._v("Instagram")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "pinterest text" }
                      },
                      [_c("span", [_vm._v("Pinterest")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vk text" }
                      },
                      [_c("span", [_vm._v("VK")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "yahoo text" }
                      },
                      [_c("span", [_vm._v("Yahoo")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "behance text" }
                      },
                      [_c("span", [_vm._v("Behance")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "dropbox text" }
                      },
                      [_c("span", [_vm._v("Dropbox")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "reddit text" }
                      },
                      [_c("span", [_vm._v("Reddit")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "spotify text" }
                      },
                      [_c("span", [_vm._v("Spotify")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vine text" }
                      },
                      [_c("span", [_vm._v("Vine")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "foursquare text" }
                      },
                      [_c("span", [_vm._v("Forsquare")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-brand",
                        attrs: { size: "lg", variant: "vimeo text" }
                      },
                      [_c("span", [_vm._v("Vimeo")])]
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
    require("vue-hot-reload-api")      .rerender("data-v-b58f4b40", module.exports)
  }
}

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1196)
}
var normalizeComponent = __webpack_require__(126)
/* script */
var __vue_script__ = __webpack_require__(1198)
/* template */
var __vue_template__ = __webpack_require__(1199)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b58f4b40"
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
Component.options.__file = "resources/assets/js/Admin/components/views/buttons/BrandButtons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b58f4b40", Component.options)
  } else {
    hotAPI.reload("data-v-b58f4b40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
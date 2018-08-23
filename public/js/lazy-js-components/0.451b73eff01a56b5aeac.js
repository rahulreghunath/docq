webpackJsonp([0],{

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_BarExample__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_BarExample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__charts_BarExample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_LineExample__ = __webpack_require__(1214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_LineExample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__charts_LineExample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_DoughnutExample__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_DoughnutExample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__charts_DoughnutExample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_RadarExample__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_RadarExample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__charts_RadarExample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_PieExample__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_PieExample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__charts_PieExample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_PolarAreaExample__ = __webpack_require__(1222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_PolarAreaExample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__charts_PolarAreaExample__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'charts',
  components: {
    BarExample: __WEBPACK_IMPORTED_MODULE_0__charts_BarExample___default.a,
    LineExample: __WEBPACK_IMPORTED_MODULE_1__charts_LineExample___default.a,
    DoughnutExample: __WEBPACK_IMPORTED_MODULE_2__charts_DoughnutExample___default.a,
    RadarExample: __WEBPACK_IMPORTED_MODULE_3__charts_RadarExample___default.a,
    PieExample: __WEBPACK_IMPORTED_MODULE_4__charts_PieExample___default.a,
    PolarAreaExample: __WEBPACK_IMPORTED_MODULE_5__charts_PolarAreaExample___default.a
  }
});

/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1213)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/Admin/components/views/charts/BarExample.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03b44c29", Component.options)
  } else {
    hotAPI.reload("data-v-03b44c29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__);




/* harmony default export */ __webpack_exports__["default"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* Bar */],
  mounted: function mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }]
    }, {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        enabled: false,
        custom: __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__["CustomTooltips"],
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor };
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1215)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/Admin/components/views/charts/LineExample.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41204274", Component.options)
  } else {
    hotAPI.reload("data-v-41204274", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_dist_js_coreui_utilities__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_dist_js_coreui_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__coreui_coreui_dist_js_coreui_utilities__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    hexToRgba: __WEBPACK_IMPORTED_MODULE_2__coreui_coreui_dist_js_coreui_utilities__["hexToRgba"],
    CustomTooltips: __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__["CustomTooltips"]
  },
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["c" /* Line */],
  mounted: function mounted() {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Data One',
        backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_2__coreui_coreui_dist_js_coreui_utilities__["hexToRgba"])('#E46651', 90),
        data: [30, 39, 10, 50, 30, 70, 35]
      }, {
        label: 'Data Two',
        backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_2__coreui_coreui_dist_js_coreui_utilities__["hexToRgba"])('#00D8FF', 90),
        data: [39, 80, 40, 35, 40, 20, 45]
      }]
    }, {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        enabled: false,
        custom: __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__["CustomTooltips"],
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor };
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1217)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/Admin/components/views/charts/DoughnutExample.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3195eaa6", Component.options)
  } else {
    hotAPI.reload("data-v-3195eaa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(26);



/* harmony default export */ __webpack_exports__["default"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["b" /* Doughnut */],
  mounted: function mounted() {
    this.renderChart({
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [{
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }]
    }, { responsive: true, maintainAspectRatio: true });
  }
});

/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1219)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/Admin/components/views/charts/RadarExample.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b9e08d6", Component.options)
  } else {
    hotAPI.reload("data-v-2b9e08d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__);




/* harmony default export */ __webpack_exports__["default"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["f" /* Radar */],
  mounted: function mounted() {
    this.renderChart({
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [{
        label: '2017',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: '2018',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }]
    }, {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        enabled: false,
        custom: __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__["CustomTooltips"],
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1221)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/Admin/components/views/charts/PieExample.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6de82110", Component.options)
  } else {
    hotAPI.reload("data-v-6de82110", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(26);



/* harmony default export */ __webpack_exports__["default"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["d" /* Pie */],
  mounted: function mounted() {
    this.renderChart({
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [{
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }]
    }, { responsive: true, maintainAspectRatio: true });
  }
});

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1223)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/Admin/components/views/charts/PolarAreaExample.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c8ba8d1", Component.options)
  } else {
    hotAPI.reload("data-v-4c8ba8d1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__);




/* harmony default export */ __webpack_exports__["default"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["e" /* PolarArea */],
  mounted: function mounted() {
    this.renderChart({
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
        custom: __WEBPACK_IMPORTED_MODULE_1__coreui_coreui_plugin_chartjs_custom_tooltips__["CustomTooltips"],
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor };
          }
        }
      }
    });
  }
});

/***/ }),

/***/ 1224:
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
        "b-card-group",
        { staticClass: "card-columns", attrs: { columns: "" } },
        [
          _c("b-card", { attrs: { header: "Line Chart" } }, [
            _c(
              "div",
              { staticClass: "chart-wrapper" },
              [_c("line-example", { attrs: { chartId: "chart-line-01" } })],
              1
            )
          ]),
          _vm._v(" "),
          _c("b-card", { attrs: { header: "Bar Chart" } }, [
            _c(
              "div",
              { staticClass: "chart-wrapper" },
              [_c("bar-example", { attrs: { chartId: "chart-bar-01" } })],
              1
            )
          ]),
          _vm._v(" "),
          _c("b-card", { attrs: { header: "Doughnut Chart" } }, [
            _c(
              "div",
              { staticClass: "chart-wrapper" },
              [
                _c("doughnut-example", {
                  attrs: { chartId: "chart-doughnut-01" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("b-card", { attrs: { header: "Radar Chart" } }, [
            _c(
              "div",
              { staticClass: "chart-wrapper" },
              [_c("radar-example", { attrs: { chartId: "chart-radar-01" } })],
              1
            )
          ]),
          _vm._v(" "),
          _c("b-card", { attrs: { header: "Pie Chart" } }, [
            _c(
              "div",
              { staticClass: "chart-wrapper" },
              [_c("pie-example", { attrs: { chartId: "chart-pie-01" } })],
              1
            )
          ]),
          _vm._v(" "),
          _c("b-card", { attrs: { header: "Polar Area Chart" } }, [
            _c(
              "div",
              { staticClass: "chart-wrapper" },
              [
                _c("polar-area-example", {
                  attrs: { chartId: "chart-polar-area-01" }
                })
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ff49e326", module.exports)
  }
}

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1211)
/* template */
var __vue_template__ = __webpack_require__(1224)
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
Component.options.__file = "resources/assets/js/Admin/components/views/Charts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff49e326", Component.options)
  } else {
    hotAPI.reload("data-v-ff49e326", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
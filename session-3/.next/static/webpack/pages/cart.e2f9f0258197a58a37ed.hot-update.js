webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart/index.js":
/*!*****************************!*\
  !*** ./pages/cart/index.js ***!
  \*****************************/
/*! exports provided: GET_CART_ITEMS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CART_ITEMS", function() { return GET_CART_ITEMS; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/apollo */ "./lib/apollo/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");


var _this = undefined,
    _jsxFileName = "D:\\belajarReactjs\\react\\session-3\\pages\\cart\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GetCartItems {\n    cartItems @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n    name @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var IS_LOGGED_IN = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());
var GET_CART_ITEMS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject2());

var ReadState = function ReadState() {
  _s();

  var classes = useStyles();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(IS_LOGGED_IN),
      data = _useQuery.data;

  var _useQuery2 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_CART_ITEMS),
      cart = _useQuery2.data; //   const { data: discount } = useQuery(GET_PRODUCT_DISCOUNT);


  console.log(data);
  var product = cart.cartItems;
  console.log(product);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 12,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.pageTitle,
    variant: "h3",
    component: "h3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Cart Page"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, product.length > 0 ? __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "aku",
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "Image"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, "Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "Qty"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Price"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, product.map(function (val, idx) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    }, __jsx("img", {
      className: classes.imgProduct,
      src: val.img,
      alt: val.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    })), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, val.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }
    }, val.qty), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }, "$", val.price));
  })))) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Anda belum menambahkan product"))));
};

_s(ReadState, "2BEG8dFZwR4ATJJN1Gd6HL5ijt8=", false, function () {
  return [useStyles, _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = ReadState;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    pageTitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      marginBottom: 35
    },
    imgProduct: {
      maxWidth: 150
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])({
  ssr: false
})(ReadState));

var _c;

$RefreshReg$(_c, "ReadState");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJJU19MT0dHRURfSU4iLCJncWwiLCJHRVRfQ0FSVF9JVEVNUyIsIlJlYWRTdGF0ZSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VRdWVyeSIsImRhdGEiLCJjYXJ0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3QiLCJjYXJ0SXRlbXMiLCJwYWdlVGl0bGUiLCJsZW5ndGgiLCJQYXBlciIsIm1hcCIsInZhbCIsImlkeCIsImltZ1Byb2R1Y3QiLCJpbWciLCJuYW1lIiwicXR5IiwicHJpY2UiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXhXaWR0aCIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQywwREFBSCxtQkFBbEI7QUFPTyxJQUFNQyxjQUFjLEdBQUdELDBEQUFILG9CQUFwQjs7QUFPUCxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFEb0Isa0JBRUhDLCtEQUFRLENBQUNOLFlBQUQsQ0FGTDtBQUFBLE1BRVpPLElBRlksYUFFWkEsSUFGWTs7QUFBQSxtQkFJR0QsK0RBQVEsQ0FBQ0osY0FBRCxDQUpYO0FBQUEsTUFJTk0sSUFKTSxjQUlaRCxJQUpZLEVBTXhCOzs7QUFFSUUsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxNQUFNSSxPQUFPLEdBQUdILElBQUksQ0FBQ0ksU0FBckI7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVo7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WixhQUFTLEVBQUU7QUFDUGEsYUFBTyxFQUFFLE9BREY7QUFFUEMsV0FBSyxFQUFFLE1BRkE7QUFHUEMsZUFBUyxFQUFFLFFBSEo7QUFJUEMsa0JBQVksRUFBRTtBQUpQLEtBRDBCO0FBT3JDVixjQUFVLEVBQUU7QUFDUlcsY0FBUSxFQUFFO0FBREY7QUFQeUIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFZZUMsNkhBQVUsQ0FBQztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFELENBQVYsQ0FBMkI3QixTQUEzQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuZTJmOWYwMjU4MTk3YTU4YTM3ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCIuLi8uLi9saWIvYXBvbGxvXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQsIEJ1dHRvbiwgUGFwZXIsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuXHJcbmNvbnN0IElTX0xPR0dFRF9JTiA9IGdxbGBcclxuICBxdWVyeSBJc1VzZXJMb2dnZWRJbiB7XHJcbiAgICBpc0xvZ2dlZEluIEBjbGllbnRcclxuICAgIG5hbWUgQGNsaWVudFxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FSVF9JVEVNUyA9IGdxbGBcclxuICBxdWVyeSBHZXRDYXJ0SXRlbXMge1xyXG4gICAgY2FydEl0ZW1zIEBjbGllbnRcclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgUmVhZFN0YXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShJU19MT0dHRURfSU4pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogY2FydCB9ID0gdXNlUXVlcnkoR0VUX0NBUlRfSVRFTVMpO1xyXG4gIFxyXG4vLyAgIGNvbnN0IHsgZGF0YTogZGlzY291bnQgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUX0RJU0NPVU5UKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBjYXJ0LmNhcnRJdGVtcztcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxMn0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFnZVRpdGxlfSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgQ2FydCBQYWdlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFrdVwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+SW1hZ2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+TmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5RdHk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHJpY2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubWFwKCh2YWwsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dmFsLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt2YWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3ZhbC5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3ZhbC5xdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke3ZhbC5wcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cD5BbmRhIGJlbHVtIG1lbmFtYmFoa2FuIHByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBwYWdlVGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDM1LFxyXG4gICAgfSxcclxuICAgIGltZ1Byb2R1Y3Q6IHtcclxuICAgICAgICBtYXhXaWR0aDogMTUwLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiBmYWxzZSB9KShSZWFkU3RhdGUpOyJdLCJzb3VyY2VSb290IjoiIn0=
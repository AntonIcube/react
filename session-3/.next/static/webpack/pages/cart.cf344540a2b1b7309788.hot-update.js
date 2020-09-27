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

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GetCartItems {\n    cartItems @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var GET_CART_ITEMS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 12,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.pageTitle,
    variant: "h3",
    component: "h3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Cart Page"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, product.length > 0 ? __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "aku",
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, "Image"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, "Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Qty"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Price"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, product.map(function (val, idx) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    }, __jsx("img", {
      className: classes.imgProduct,
      src: val.img,
      alt: val.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 33
      }
    })), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    }, val.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    }, val.qty), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 33
      }
    }, "$", val.price));
  })))) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJHRVRfQ0FSVF9JVEVNUyIsImdxbCIsIlJlYWRTdGF0ZSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VRdWVyeSIsIklTX0xPR0dFRF9JTiIsImRhdGEiLCJjYXJ0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3QiLCJjYXJ0SXRlbXMiLCJwYWdlVGl0bGUiLCJsZW5ndGgiLCJQYXBlciIsIm1hcCIsInZhbCIsImlkeCIsImltZ1Byb2R1Y3QiLCJpbWciLCJuYW1lIiwicXR5IiwicHJpY2UiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXhXaWR0aCIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxjQUFjLEdBQUdDLDBEQUFILG1CQUFwQjs7QUFPUCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFEb0Isa0JBRUhDLCtEQUFRLENBQUNDLFlBQUQsQ0FGTDtBQUFBLE1BRVpDLElBRlksYUFFWkEsSUFGWTs7QUFBQSxtQkFJR0YsK0RBQVEsQ0FBQ0wsY0FBRCxDQUpYO0FBQUEsTUFJTlEsSUFKTSxjQUlaRCxJQUpZLEVBTXhCOzs7QUFFSUUsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxNQUFNSSxPQUFPLEdBQUdILElBQUksQ0FBQ0ksU0FBckI7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVo7QUFDQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRVIsT0FBTyxDQUFDVSxTQUEvQjtBQUEwQyxXQUFPLEVBQUMsSUFBbEQ7QUFBdUQsYUFBUyxFQUFDLElBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFJSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDRixPQUFPLENBQUNHLE1BQVIsR0FBaUIsQ0FBakIsR0FDRyxNQUFDLHlFQUFEO0FBQWdCLGFBQVMsRUFBRUMsdURBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU8sYUFBUyxFQUFDLEtBQWpCO0FBQXVCLGtCQUFXLGNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxFQUVBLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLEVBR0EsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEEsRUFJQSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQSxDQURKLENBREosRUFTSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDM0IsV0FDQSxNQUFDLG1FQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG1FQUFEO0FBQVcsZUFBUyxFQUFDLElBQXJCO0FBQTBCLFdBQUssRUFBQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFDSSxlQUFTLEVBQUVmLE9BQU8sQ0FBQ2dCLFVBRHZCO0FBRUksU0FBRyxFQUFFRixHQUFHLENBQUNHLEdBRmI7QUFHSSxTQUFHLEVBQUVILEdBQUcsQ0FBQ0ksSUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsQ0FESixFQVFJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZSixHQUFHLENBQUNJLElBQWhCLENBUkosRUFTSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWUosR0FBRyxDQUFDSyxHQUFoQixDQVRKLEVBVUksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWFMLEdBQUcsQ0FBQ00sS0FBakIsQ0FWSixDQURBO0FBY0MsR0FmQSxDQURMLENBVEosQ0FESixDQURILEdBZ0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBakNBLENBSkosQ0FEQSxDQURKO0FBK0NILENBM0REOztHQUFNckIsUztVQUNjRSxTLEVBQ0NDLHVELEVBRU1BLHVEOzs7S0FKckJILFM7QUE2RE4sSUFBTUUsU0FBUyxHQUFHb0IsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ1osYUFBUyxFQUFFO0FBQ1BhLGFBQU8sRUFBRSxPQURGO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLGVBQVMsRUFBRSxRQUhKO0FBSVBDLGtCQUFZLEVBQUU7QUFKUCxLQUQwQjtBQU9yQ1YsY0FBVSxFQUFFO0FBQ1JXLGNBQVEsRUFBRTtBQURGO0FBUHlCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBWWVDLDZIQUFVLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUFWLENBQTJCOUIsU0FBM0IsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmNmMzQ0NTQwYTJiMWI3MzA5Nzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vbGliL2Fwb2xsb1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkLCBCdXR0b24sIFBhcGVyLCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9DQVJUX0lURU1TID0gZ3FsYFxyXG4gIHF1ZXJ5IEdldENhcnRJdGVtcyB7XHJcbiAgICBjYXJ0SXRlbXMgQGNsaWVudFxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBSZWFkU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KElTX0xPR0dFRF9JTik7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBjYXJ0IH0gPSB1c2VRdWVyeShHRVRfQ0FSVF9JVEVNUyk7XHJcbiAgXHJcbi8vICAgY29uc3QgeyBkYXRhOiBkaXNjb3VudCB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RfRElTQ09VTlQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGNhcnQuY2FydEl0ZW1zO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlVGl0bGV9IHZhcmlhbnQ9XCJoM1wiIGNvbXBvbmVudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJ0IFBhZ2VcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAge3Byb2R1Y3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiYWt1XCIgYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JbWFnZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5tYXAoKHZhbCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt2YWwuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3ZhbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dmFsLm5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dmFsLnF0eX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiR7dmFsLnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwPkFuZGEgYmVsdW0gbWVuYW1iYWhrYW4gcHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhZ2VUaXRsZToge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMzUsXHJcbiAgICB9LFxyXG4gICAgaW1nUHJvZHVjdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiAxNTAsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IGZhbHNlIH0pKFJlYWRTdGF0ZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/apollo */ "./lib/apollo/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/apollo/client */ "./lib/apollo/client.js");
/* harmony import */ var _apollo_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../apollo/resolver */ "./apollo/resolver.js");




var _jsxFileName = "D:\\belajarReactjs\\react\\session-3\\pages\\product\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query Product($id: String!) {\n    products(filter: { url_key: { eq: $id } }) {\n      items {\n        id\n        name\n        description {\n          html\n        }\n        image {\n          url\n        }\n        price_range {\n          maximum_price {\n            final_price {\n              value\n              currency\n            }\n          }\n          minimum_price {\n            final_price {\n              value\n              currency\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n    name @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var IS_LOGGED_IN = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var PRODUCT_DETAIL = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());

function ProductPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id;
  var response = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(PRODUCT_DETAIL, {
    variables: {
      id: id
    }
  });
  var loading = response.loading,
      error = response.error,
      data = response.data;

  if (loading) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 14
      }
    });
  }

  if (error) {
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 14
      }
    }, "Error ...");
  }

  var products = data.products.items; // local state apollo

  var cartItems = Object(_apollo_resolver__WEBPACK_IMPORTED_MODULE_11__["cartItemsVar"])();
  var item = [{
    id: products[0].id,
    name: products[0].name,
    price: products[0].price_range.minimum_price.final_price.value.toFixed(2),
    img: products[0].image.url,
    qty: count,
    isDiscount: false
  }]; //

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("img", {
    style: {
      width: "50%"
    },
    className: classes.productimage,
    src: products[0].image.url,
    alt: products[0].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, products[0].name), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "".concat(products[0].price_range.minimum_price.final_price.currency, " ").concat(products[0].price_range.minimum_price.final_price.value.toFixed(2))), __jsx("div", {
    className: "qty-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "qty-ket",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, " QTY : "), __jsx("button", {
    onClick: function onClick() {
      return setCount(count - 1);
    },
    className: classes.buttonQty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 89
    }
  }, "-")), __jsx("span", {
    className: "qty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, " ", count, " "), __jsx("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    className: classes.buttonQty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 89
    }
  }, "+"))), __jsx("button", {
    onClick: function onClick() {
      if (count < 1) {
        alert("QTY tidak boleh kurang dari satu!");
      } else {
        // user
        _lib_apollo_client__WEBPACK_IMPORTED_MODULE_10__["cache"].writeQuery({
          query: IS_LOGGED_IN,
          data: {
            isLoggedIn: true,
            name: "anton"
          }
        }); // product

        Object(_apollo_resolver__WEBPACK_IMPORTED_MODULE_11__["cartItemsVar"])([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cartItems), item));
        alert("Product berhasil dimasukan!");
      }
    },
    className: "cta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Add to cart"), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "desc-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "Description"), __jsx("div", {
    className: classes.productdesc,
    dangerouslySetInnerHTML: {
      __html: products[0].description.html
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  })));
}

_s(ProductPage, "uPKahf42T48mrKjtlaqiFOMiHpE=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"]];
});

_c = ProductPage;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  var _ref;

  return _ref = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3)
    },
    formCart: {
      display: "grid",
      gridTemplateColumns: "10% 30%",
      columnGap: "20px",
      marginTop: 20
    },
    productimage: {
      width: "100%"
    },
    productName: {
      marginTop: 40,
      fontWeight: "bold",
      fontFamily: "Montserrat"
    },
    productdesc: {
      fontSize: 14
    },
    price: {
      fontFamily: "Montserrat",
      fontSize: 25
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "productimage", {
    marginTop: 40,
    width: "100%"
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "buttonQty", {
    padding: 10,
    width: 38,
    background: "none",
    borderColor: "grey"
  }), _ref;
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_7__["withApollo"])({
  ssr: true
})(ProductPage));

var _c;

$RefreshReg$(_c, "ProductPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8uanMiXSwibmFtZXMiOlsiSVNfTE9HR0VEX0lOIiwiZ3FsIiwiUFJPRFVDVF9ERVRBSUwiLCJQcm9kdWN0UGFnZSIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJwcm9kdWN0cyIsIml0ZW1zIiwiY2FydEl0ZW1zIiwiY2FydEl0ZW1zVmFyIiwiaXRlbSIsIm5hbWUiLCJwcmljZSIsInByaWNlX3JhbmdlIiwibWluaW11bV9wcmljZSIsImZpbmFsX3ByaWNlIiwidmFsdWUiLCJ0b0ZpeGVkIiwiaW1nIiwiaW1hZ2UiLCJ1cmwiLCJxdHkiLCJpc0Rpc2NvdW50Iiwid2lkdGgiLCJwcm9kdWN0aW1hZ2UiLCJjdXJyZW5jeSIsImJ1dHRvblF0eSIsImFsZXJ0IiwiY2FjaGUiLCJ3cml0ZVF1ZXJ5IiwiaXNMb2dnZWRJbiIsInByb2R1Y3RkZXNjIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJodG1sIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwic3BhY2luZyIsImZvcm1DYXJ0IiwiY29sdW1uR2FwIiwibWFyZ2luVG9wIiwicHJvZHVjdE5hbWUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VSxFQUFFLFlBRFA7QUFFTEMsY0FBUSxFQUFFO0FBRkw7QUF2QmtCLHFIQTJCWDtBQUNaSixhQUFTLEVBQUUsRUFEQztBQUVackIsU0FBSyxFQUFFO0FBRkssR0EzQlcsZ0hBK0JkO0FBQ1QwQixXQUFPLEVBQUUsRUFEQTtBQUVUMUIsU0FBSyxFQUFFLEVBRkU7QUFHVDJCLGNBQVUsRUFBRSxNQUhIO0FBSVRDLGVBQVcsRUFBRTtBQUpKLEdBL0JjO0FBQUEsQ0FBRCxDQUE1QjtBQXdDaUJDLDZIQUFVLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUFWLENBQTBCL0QsV0FBMUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uOWYwYzJhZTA1Yzg3ZjNmZjVlOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vbGliL2Fwb2xsb1wiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkLCBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcIi4uLy4uL2xpYi9hcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IGNhcnRJdGVtc1ZhciB9IGZyb20gXCIuLi8uLi9hcG9sbG8vcmVzb2x2ZXJcIjtcclxuXHJcbmNvbnN0IElTX0xPR0dFRF9JTiA9IGdxbGBcclxuICBxdWVyeSBJc1VzZXJMb2dnZWRJbiB7XHJcbiAgICBpc0xvZ2dlZEluIEBjbGllbnRcclxuICAgIG5hbWUgQGNsaWVudFxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBST0RVQ1RfREVUQUlMID0gZ3FsYFxyXG4gIHF1ZXJ5IFByb2R1Y3QoJGlkOiBTdHJpbmchKSB7XHJcbiAgICBwcm9kdWN0cyhmaWx0ZXI6IHsgdXJsX2tleTogeyBlcTogJGlkIH0gfSkge1xyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgaHRtbFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpY2VfcmFuZ2Uge1xyXG4gICAgICAgICAgbWF4aW11bV9wcmljZSB7XHJcbiAgICAgICAgICAgIGZpbmFsX3ByaWNlIHtcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIGN1cnJlbmN5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1pbmltdW1fcHJpY2Uge1xyXG4gICAgICAgICAgICBmaW5hbF9wcmljZSB7XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICBjdXJyZW5jeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gdXNlUXVlcnkoUFJPRFVDVF9ERVRBSUwsIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkOiBpZCB9LFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSByZXNwb25zZTtcclxuICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcclxuICAgIH1cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gPExheW91dD5FcnJvciAuLi48L0xheW91dD47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMuaXRlbXM7XHJcblxyXG4gICAgLy8gbG9jYWwgc3RhdGUgYXBvbGxvXHJcbiAgY29uc3QgY2FydEl0ZW1zID0gY2FydEl0ZW1zVmFyKCk7XHJcbiAgY29uc3QgaXRlbSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IHByb2R1Y3RzWzBdLmlkLFxyXG4gICAgICBuYW1lOiBwcm9kdWN0c1swXS5uYW1lLFxyXG4gICAgICBwcmljZTogcHJvZHVjdHNbMF0ucHJpY2VfcmFuZ2UubWluaW11bV9wcmljZS5maW5hbF9wcmljZS52YWx1ZS50b0ZpeGVkKDIpLFxyXG4gICAgICBpbWc6IHByb2R1Y3RzWzBdLmltYWdlLnVybCxcclxuICAgICAgcXR5OiBjb3VudCxcclxuICAgICAgaXNEaXNjb3VudDogZmFsc2VcclxuICAgIH1cclxuICBdO1xyXG4gIC8vXHJcblxyXG4gIHJldHVybiAoICBcclxuICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdGltYWdlfVxyXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3RzWzBdLmltYWdlLnVybH1cclxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0c1swXS5uYW1lfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0c1swXS5uYW1lfVxyXG4gICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIHtgJHtcclxuICAgICAgICAgICAgICBwcm9kdWN0c1swXS5wcmljZV9yYW5nZS5taW5pbXVtX3ByaWNlLmZpbmFsX3ByaWNlLmN1cnJlbmN5XHJcbiAgICAgICAgICAgIH0gJHtwcm9kdWN0c1swXS5wcmljZV9yYW5nZS5taW5pbXVtX3ByaWNlLmZpbmFsX3ByaWNlLnZhbHVlLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdHktYm94XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXR5LWtldFwiPiBRVFkgOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCAtIDEpfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uUXR5fT48c3Bhbj4tPC9zcGFuPjwvYnV0dG9uPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXR5XCI+IHtjb3VudH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblF0eX0+PHNwYW4+Kzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjb3VudCA8IDEpe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJRVFkgdGlkYWsgYm9sZWgga3VyYW5nIGRhcmkgc2F0dSFcIik7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2VyXHJcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcclxuICAgICAgICAgICAgICAgICAgcXVlcnk6IElTX0xPR0dFRF9JTixcclxuICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhbnRvblwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zVmFyKFsuLi5jYXJ0SXRlbXMsIC4uLml0ZW1dKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBiZXJoYXNpbCBkaW1hc3VrYW4hXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN0YVwiPlxyXG4gICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjLXRpdGxlXCI+RGVzY3JpcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdGRlc2N9XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0c1swXS5kZXNjcmlwdGlvbi5odG1sIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCgxMiwgMWZyKVwiLFxyXG4gICAgICBncmlkR2FwOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIGZvcm1DYXJ0OiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEwJSAzMCVcIixcclxuICAgICAgY29sdW1uR2FwOiBcIjIwcHhcIixcclxuICAgICAgbWFyZ2luVG9wOiAyMCxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0aW1hZ2U6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3ROYW1lOiB7XHJcbiAgICAgIG1hcmdpblRvcDogNDAsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIixcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0ZGVzYzoge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJNb250c2VycmF0XCIsXHJcbiAgICAgIGZvbnRTaXplOiAyNSxcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0aW1hZ2U6IHtcclxuICAgICAgbWFyZ2luVG9wOiA0MCxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvblF0eToge1xyXG4gICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgd2lkdGg6IDM4LFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuICAgICAgYm9yZGVyQ29sb3I6IFwiZ3JleVwiLFxyXG4gICAgfVxyXG4gIH0pKTtcclxuICBcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKFByb2R1Y3RQYWdlKTsiXSwic291cmNlUm9vdCI6IiJ9
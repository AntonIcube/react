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
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 14
      }
    }, "Loading ...");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8uanMiXSwibmFtZXMiOlsiSVNfTE9HR0VEX0lOIiwiZ3FsIiwiUFJPRFVDVF9ERVRBSUwiLCJQcm9kdWN0UGFnZSIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJwcm9kdWN0cyIsIml0ZW1zIiwiY2FydEl0ZW1zIiwiY2FydEl0ZW1zVmFyIiwiaXRlbSIsIm5hbWUiLCJwcmljZSIsInByaWNlX3JhbmdlIiwibWluaW11bV9wcmljZSIsImZpbmFsX3ByaWNlIiwidmFsdWUiLCJ0b0ZpeGVkIiwiaW1nIiwiaW1hZ2UiLCJ1cmwiLCJxdHkiLCJpc0Rpc2NvdW50Iiwid2lkdGgiLCJwcm9kdWN0aW1hZ2UiLCJjdXJyZW5jeSIsImJ1dHRvblF0eSIsImFsZXJ0IiwiY2FjaGUiLCJ3cml0ZVF1ZXJ5IiwiaXNMb2dnZWRJbiIsInByb2R1Y3RkZXNjIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJodG1sIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwic3BhY2luZyIsImZvcm1DYXJ0IiwiY29sdW1uR2FwIiwibWFyZ2luVG9wIiwicHJvZHVjdE5hbWUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QVUsRUFBRSxZQURQO0FBRUxDLGNBQVEsRUFBRTtBQUZMO0FBdkJrQixxSEEyQlg7QUFDWkosYUFBUyxFQUFFLEVBREM7QUFFWnJCLFNBQUssRUFBRTtBQUZLLEdBM0JXLGdIQStCZDtBQUNUMEIsV0FBTyxFQUFFLEVBREE7QUFFVDFCLFNBQUssRUFBRSxFQUZFO0FBR1QyQixjQUFVLEVBQUUsTUFISDtBQUlUQyxlQUFXLEVBQUU7QUFKSixHQS9CYztBQUFBLENBQUQsQ0FBNUI7QUF3Q2lCQyw2SEFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQi9ELFdBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjk2NTIxMjVhODM0Y2JkODNmOWFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uLy4uL2xpYi9hcG9sbG9cIjtcclxuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwiLi4vLi4vbGliL2Fwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgY2FydEl0ZW1zVmFyIH0gZnJvbSBcIi4uLy4uL2Fwb2xsby9yZXNvbHZlclwiO1xyXG5cclxuY29uc3QgSVNfTE9HR0VEX0lOID0gZ3FsYFxyXG4gIHF1ZXJ5IElzVXNlckxvZ2dlZEluIHtcclxuICAgIGlzTG9nZ2VkSW4gQGNsaWVudFxyXG4gICAgbmFtZSBAY2xpZW50XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUFJPRFVDVF9ERVRBSUwgPSBncWxgXHJcbiAgcXVlcnkgUHJvZHVjdCgkaWQ6IFN0cmluZyEpIHtcclxuICAgIHByb2R1Y3RzKGZpbHRlcjogeyB1cmxfa2V5OiB7IGVxOiAkaWQgfSB9KSB7XHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBkZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBodG1sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmljZV9yYW5nZSB7XHJcbiAgICAgICAgICBtYXhpbXVtX3ByaWNlIHtcclxuICAgICAgICAgICAgZmluYWxfcHJpY2Uge1xyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWluaW11bV9wcmljZSB7XHJcbiAgICAgICAgICAgIGZpbmFsX3ByaWNlIHtcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIGN1cnJlbmN5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0UGFnZSgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB1c2VRdWVyeShQUk9EVUNUX0RFVEFJTCwge1xyXG4gICAgICB2YXJpYWJsZXM6IHsgaWQ6IGlkIH0sXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gIFxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxMYXlvdXQ+TG9hZGluZyAuLi48L0xheW91dD47XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxMYXlvdXQ+RXJyb3IgLi4uPC9MYXlvdXQ+O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLnByb2R1Y3RzLml0ZW1zO1xyXG5cclxuICAgIC8vIGxvY2FsIHN0YXRlIGFwb2xsb1xyXG4gIGNvbnN0IGNhcnRJdGVtcyA9IGNhcnRJdGVtc1ZhcigpO1xyXG4gIGNvbnN0IGl0ZW0gPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBwcm9kdWN0c1swXS5pZCxcclxuICAgICAgbmFtZTogcHJvZHVjdHNbMF0ubmFtZSxcclxuICAgICAgcHJpY2U6IHByb2R1Y3RzWzBdLnByaWNlX3JhbmdlLm1pbmltdW1fcHJpY2UuZmluYWxfcHJpY2UudmFsdWUudG9GaXhlZCgyKSxcclxuICAgICAgaW1nOiBwcm9kdWN0c1swXS5pbWFnZS51cmwsXHJcbiAgICAgIHF0eTogY291bnQsXHJcbiAgICAgIGlzRGlzY291bnQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgXTtcclxuICAvL1xyXG5cclxuICByZXR1cm4gKCAgXHJcbiAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RpbWFnZX1cclxuICAgICAgICAgICAgc3JjPXtwcm9kdWN0c1swXS5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgIGFsdD17cHJvZHVjdHNbMF0ubmFtZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICB7cHJvZHVjdHNbMF0ubmFtZX1cclxuICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICB7YCR7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdHNbMF0ucHJpY2VfcmFuZ2UubWluaW11bV9wcmljZS5maW5hbF9wcmljZS5jdXJyZW5jeVxyXG4gICAgICAgICAgICB9ICR7cHJvZHVjdHNbMF0ucHJpY2VfcmFuZ2UubWluaW11bV9wcmljZS5maW5hbF9wcmljZS52YWx1ZS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXR5LWJveFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInF0eS1rZXRcIj4gUVRZIDogPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgLSAxKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblF0eX0+PHNwYW4+LTwvc3Bhbj48L2J1dHRvbj4gICAgICAgIFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInF0eVwiPiB7Y291bnR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25RdHl9PjxzcGFuPis8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoY291bnQgPCAxKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUVRZIHRpZGFrIGJvbGVoIGt1cmFuZyBkYXJpIHNhdHUhXCIpO1xyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlclxyXG4gICAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBJU19MT0dHRURfSU4sXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYW50b25cIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtc1ZhcihbLi4uY2FydEl0ZW1zLCAuLi5pdGVtXSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgYmVyaGFzaWwgZGltYXN1a2FuIVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdGFcIj5cclxuICAgICAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzYy10aXRsZVwiPkRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RkZXNjfVxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvZHVjdHNbMF0uZGVzY3JpcHRpb24uaHRtbCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoMTIsIDFmcilcIixcclxuICAgICAgZ3JpZEdhcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICBmb3JtQ2FydDoge1xyXG4gICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMCUgMzAlXCIsXHJcbiAgICAgIGNvbHVtbkdhcDogXCIyMHB4XCIsXHJcbiAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdGltYWdlOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgICBwcm9kdWN0TmFtZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDQwLFxyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgZm9udEZhbWlseTogXCJNb250c2VycmF0XCIsXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdGRlc2M6IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgfSxcclxuICAgIHByaWNlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiTW9udHNlcnJhdFwiLFxyXG4gICAgICBmb250U2l6ZTogMjUsXHJcbiAgICB9LFxyXG4gICAgcHJvZHVjdGltYWdlOiB7XHJcbiAgICAgIG1hcmdpblRvcDogNDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgICBidXR0b25RdHk6IHtcclxuICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgIHdpZHRoOiAzOCxcclxuICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBcImdyZXlcIixcclxuICAgIH1cclxuICB9KSk7XHJcbiAgXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShQcm9kdWN0UGFnZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==